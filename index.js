const Z = function (input) { 
  function ZI (value) {
    return {
      value: value,
      parent: null,
      map (fun) {
        return Z(value.map(fun));
      },
      tap (fun) {
        fun(value);
        return Z(value);;
      },
      filter (fun) {
        return Z(value.filter(fun));
      },
      fork (label) {
        const z = Z(this.value);
        z.parent = this;
        return z;
      },
      converge (labels, fun) {
        return Z(fun())
      },
      case () {
        this.inCase = true;
        return Z(value);
      }
    } 
  }

  return ZI(input);
}

module.exports = Z;