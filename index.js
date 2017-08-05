const Z = function (input) { 
  function ZI (value) {
    return {
      value: value,
      map (fun) {
        return ZI(value.map(fun));
      },
      tap (fun) {
        fun(value);
        return ZI(value);
      },
      filter (fun) {
        return ZI(value.filter(fun));
      },
      when (cond, fun) {
        if (cond === true || cond(value)) {
          return ZI(fun(value))
        } else {
          return this;
        }
      },
      transform (fun) {
        return ZI(fun(value));
      },
      log () {
        return this.tap(console.log);
      },
      first () {
        return ZI(value[0]);
      },
      replace (i, fun) {
        const tmp = [].concat(value);
        tmp[i] = fun(value);
        return ZI(tmp);
      },
      append (v) {
        if (typeof v === 'String') {
          return ZI(value + v)
        } else {
          return ZI(value.concat(v))
        }
      },
      substring (f, t) {
        return ZI(value.substring(f, t));
      }
    }
  }

  return ZI(input);
}

module.exports = Z;