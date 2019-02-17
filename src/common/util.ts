export const $ = function () {
  let copyIsArray: boolean;
  const toString = Object.prototype.toString;
  const hasOwn = Object.prototype.hasOwnProperty;

  const class2type = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Object]": "object"
  }

  function type(obj: object) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
  }

  function isWindow(obj: object) {
    return obj && typeof obj === "object" && "setInterval" in obj;
  }

  const isArray = Array.isArray || function (obj: object) {
    return type(obj) === "array";
  }

  const isPlainObject = function (obj: any) {
    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
      return false;
    }

    if (obj.constructor && !hasOwn.call(obj, "constructor") &&
      !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
      return false;
    }

    let key;
    for (key in obj) {
    }

    return key === undefined || hasOwn.call(obj, key);
  }

  const extend = function (deep: boolean, target: object, options: object) {
    for (const name in options) {
      const src = target[name];
      const copy = options[name];
      let clone;

      if (target === copy) {
        continue;
      }

      if (deep && copy &&
        (isPlainObject(copy) || isArray(copy))) {
        copyIsArray = isArray(copy)
        if (copyIsArray) {
          copyIsArray = false;
          clone = src && isArray(src) ? src : [];

        } else {
          clone = src && isPlainObject(src) ? src : {};
        }

        target[name] = extend(deep, clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }

    return target;
  };

  return { extend };
}();

export default $;