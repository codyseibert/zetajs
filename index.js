const Z = function (input) { 
  function ZI (value, parent) {
    const ret = {
      value: value,
      parent: parent,
      caseValue: null,
      setCaseValueOnBreak: false,
      skipUntilClose: false,
      skipUntilBreak: false,
      map (fun) {
        return ZI(value.map(fun), parent);
      },
      tap (fun) {
        fun(value);
        return ZI(value, parent);
      },
      filter (fun) {
        return ZI(value.filter(fun), parent);
      },
      case () {
        return ZI(value, this);
      },
      when (fun) {
        if (!parent.caseValue && fun(value)) {
          parent.setCaseValueOnBreak = true
        } else {
          parent.skipUntilBreak = true;
        }
        return ZI(value, parent);
      },
      default () {
        return this.when(x => true);
      },
      break () {
        if (parent.setCaseValueOnBreak) {
          parent.caseValue = value;
          parent.skipUntilClose = true;
        }
        parent.setCaseValueOnBreak = false;
        parent.skipUntilBreak = false;
        return ZI(value, parent);
      },
      close () {
        parent.skipUntilClose = false;
        return ZI(value, parent.parent);
      },
      transform (fun) {
        return ZI(fun(value), parent);
      },
      log () {
        return this.tap(console.log);
      }
    }

    if (parent && (parent.skipUntilClose || parent.skipUntilBreak)) {
      const keys = Object.keys(ret);
      keys.splice(keys.indexOf('close'), 1);
      keys.splice(keys.indexOf('break'), 1);
      for (let key of keys) {
        ret[key] = () => ZI(value, parent);
      }
    }

    return ret;
  }

  return ZI(input);
}

module.exports = Z;