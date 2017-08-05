const _ = require('lodash');

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
      scope (fun) {
        return ZI(fun(value));
      },
      log () {
        return this.tap(n => console.log(JSON.stringify(n, null, 0)));
      },
      first () {
        return ZI(value[0]);
      },
      replace (i, fun) {
        const tmp = [].concat(value);
        tmp[i] = fun(value);
        return ZI(tmp);
      },
      reduce (fun, init) {
        return ZI(value.reduce(fun, init));
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
      },
      chunk (size) {
        var chunks = [];
        for (var i = 0; i < value.length; i += size) {
          chunks.push(value.slice(i, i + size));
        }
        return ZI(chunks);
      },
      reverse () {
        return ZI([].concat(value).reverse());
      },
      difference () {
        return ZI(_.difference(value[0], value[1]));
      },
      isEmpty () {
        return ZI(_.isEmpty(value));
      },
      toLowerCase () {
        console.log(typeof value)
        if (Array.isArray(value)) {
          return this.map(a => a.toLowerCase())
        } else {
          return ZI(value.toLowerCase());
        }
      },
      split (delimiter = '') {
        if (Array.isArray(value)) {
          return this.map(a => a.split(delimiter))
        } else {
          return ZI(value.split(delimiter));
        }
      },
      filter (fun) {
        return ZI(value.filter(fun));
      },
      isTruthy () {
        return ZI(value.filter(n => n));
      },
      isFalsy () {
        return ZI(value.filter(n => !n));
      },
      sort () {
        const copy = [].concat(value)
        copy.sort((a, b) => a - b);
        return ZI(copy);
      },
      convert (from, to) {
        if (value === from) {
          return ZI(to);
        } else {
          return ZI(value);
        }
      },
      indexOf (fun) {
        for (let i = 0; i < value.length; i++) {
           if (fun(value[i])) {
            return ZI(i);
          }
        }
        return ZI(-1);
      },
      grid (r, c) {
        return ZI(Array(r).fill().map(_ => Array(c).fill()));
      },
      squareGrid (n) {
        return ZI(Array(n || value).fill().map(_ => Array(n || value).fill()));
      },
      range (from, to) {
        return ZI(Array(to - from).fill().map((_, i) => i + from))
      },
      each (fun) {
        for (let i = 0; i < value.length; i++) {
          fun(value[i], i);
        }
        return this;
      },
      array (n) {
        return ZI(Array(n).fill());
      },
      cycle: function () {
        const c = function *() {
          let i = 0;
          while (true) 
            yield value[i++ % value.length]
        }
        return ZI(c());
      }
    }
  }

  return ZI(input);
}

module.exports = Z;