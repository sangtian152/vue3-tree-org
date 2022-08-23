(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-tree-org"] = factory(require("vue"));
	else
		root["vue3-tree-org"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.24.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue3-tree-org\",\"version\":\"3.3.4\",\"author\":\"sangtian152\",\"private\":false,\"main\":\"lib/vue3-tree-org.common.js\",\"module\":\"lib/index.esm.js\",\"typings\":\"lib/index.d.ts\",\"license\":\"MIT\",\"homepage\":\"https://sangtian152.github.io/vue3-tree-org\",\"files\":[\"lib\"],\"repository\":{\"type\":\"git\",\"url\":\"https://gitee.com/sangtian152/vue3-tree-org.git\"},\"keywords\":[\"vue3-tree-org\",\"orgchart\",\"vue\",\"tree-org\",\"组织架构图\"],\"scripts\":{\"dev\":\"vuepress dev docs\",\"serve\":\"vue-cli-service serve\",\"lint\":\"vue-cli-service lint\",\"clean:dist\":\"rimraf dist\",\"build\":\"npm run build:docs && npm run build:lib && npm run build:esm\",\"build:docs\":\"vuepress build docs\",\"build:lib\":\"vue-cli-service build --target lib --name vue3-tree-org --dest lib src/index.ts\",\"build:esm\":\"npm run clean:dist && gulp --require sucrase/register/ts -f build/gulpfile.ts\"},\"peerDependencies\":{\"vue\":\"^3.0.0\"},\"dependencies\":{\"core-js\":\"^3.6.5\"},\"devDependencies\":{\"@rollup/plugin-json\":\"^4.1.0\",\"@rollup/plugin-node-resolve\":\"^13.0.5\",\"@types/gulp\":\"^4.0.9\",\"@types/gulp-rename\":\"^2.0.1\",\"@types/gulp-sass\":\"^5.0.0\",\"@types/sass\":\"^1.43.1\",\"@typescript-eslint/eslint-plugin\":\"^4.18.0\",\"@typescript-eslint/parser\":\"^4.18.0\",\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-plugin-eslint\":\"~4.5.0\",\"@vue/cli-plugin-router\":\"~4.5.0\",\"@vue/cli-plugin-typescript\":\"~4.5.0\",\"@vue/cli-service\":\"~4.5.0\",\"@vue/compiler-sfc\":\"^3.0.0\",\"@vue/eslint-config-standard\":\"^5.1.2\",\"@vue/eslint-config-typescript\":\"^7.0.0\",\"element-plus\":\"^1.3.0-beta.9\",\"escape-html\":\"^1.0.3\",\"eslint\":\"^6.7.2\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^4.0.0\",\"eslint-plugin-vue\":\"^7.0.0\",\"gulp\":\"^4.0.2\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^5.1.0\",\"markdown-it\":\"^12.3.2\",\"markdown-it-container\":\"^3.0.0\",\"node-sass\":\"^4.14.1\",\"rollup\":\"^2.58.0\",\"rollup-plugin-terser\":\"^7.0.2\",\"rollup-plugin-typescript2\":\"^0.30.0\",\"rollup-plugin-vue\":\"^6.0.0\",\"sass\":\"^1.49.9\",\"sass-loader\":\"^10.2.1\",\"sucrase\":\"^3.20.3\",\"typescript\":\"~4.1.5\",\"unplugin-element-plus\":\"^0.2.0\",\"vue-router\":\"^4.0.0-0\",\"vuepress\":\"^2.0.0-beta.49\"}}");

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ff4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export EMPTY_ARR */
/* unused harmony export EMPTY_OBJ */
/* unused harmony export NO */
/* unused harmony export NOOP */
/* unused harmony export PatchFlagNames */
/* unused harmony export camelize */
/* unused harmony export capitalize */
/* unused harmony export def */
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* unused harmony export extend */
/* unused harmony export genPropsAccessExp */
/* unused harmony export generateCodeFrame */
/* unused harmony export getGlobalThis */
/* unused harmony export hasChanged */
/* unused harmony export hasOwn */
/* unused harmony export hyphenate */
/* unused harmony export includeBooleanAttr */
/* unused harmony export invokeArrayFns */
/* unused harmony export isArray */
/* unused harmony export isBooleanAttr */
/* unused harmony export isBuiltInDirective */
/* unused harmony export isDate */
/* unused harmony export isFunction */
/* unused harmony export isGloballyWhitelisted */
/* unused harmony export isHTMLTag */
/* unused harmony export isIntegerKey */
/* unused harmony export isKnownHtmlAttr */
/* unused harmony export isKnownSvgAttr */
/* unused harmony export isMap */
/* unused harmony export isModelListener */
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
/* unused harmony export isOn */
/* unused harmony export isPlainObject */
/* unused harmony export isPromise */
/* unused harmony export isReservedProp */
/* unused harmony export isSSRSafeAttrName */
/* unused harmony export isSVGTag */
/* unused harmony export isSet */
/* unused harmony export isSpecialBooleanAttr */
/* unused harmony export isString */
/* unused harmony export isSymbol */
/* unused harmony export isVoidTag */
/* unused harmony export looseEqual */
/* unused harmony export looseIndexOf */
/* unused harmony export makeMap */
/* unused harmony export normalizeClass */
/* unused harmony export normalizeProps */
/* unused harmony export normalizeStyle */
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* unused harmony export remove */
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* unused harmony export toHandlerKey */
/* unused harmony export toNumber */
/* unused harmony export toRawType */
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return isString(val)
        ? val
        : val == null
            ? ''
            : isArray(val) ||
                (isObject(val) &&
                    (val.toString === objectToString || !isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name)
        ? `__props.${name}`
        : `__props[${JSON.stringify(name)}]`;
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "ab36":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "aeb0":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b980":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c770":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("e330");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "d9e2":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var wrapErrorConstructorWithCause = __webpack_require__("e5cb");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e391":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("577e");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e5cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var isPrototypeOf = __webpack_require__("3a9b");
var setPrototypeOf = __webpack_require__("d2bb");
var copyConstructorProperties = __webpack_require__("e893");
var proxyAccessor = __webpack_require__("aeb0");
var inheritIfRequired = __webpack_require__("7156");
var normalizeStringArgument = __webpack_require__("e391");
var installErrorCause = __webpack_require__("ab36");
var clearErrorStack = __webpack_require__("c770");
var ERROR_STACK_INSTALLABLE = __webpack_require__("b980");
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Vue3TreeOrg", function() { return /* reexport */ tree_org; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/utils/utils.ts
const isObject = function (arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
};
const isString = function (str) {
  return typeof str === 'string';
};
const isNumber = function (num) {
  return typeof num === 'number';
};
const fromPairs = function (pairs) {
  let index = -1;
  const // 循环索引
  length = pairs ? pairs.length : 0;
  const // 键值对数组的长度
  result = {}; // 结果对象

  while (++index < length) {
    // 循环并给结果对象加入属性
    const pair = pairs[index];
    result[pair[0]] = pair[1];
  }

  return result;
};
// CONCATENATED MODULE: ./src/utils/log.ts
/* eslint-disable no-console */

const log = {
  print: (text, type, back) => isString(type) || typeof back === 'boolean',
  pretty: (title, text, type) => isString(text) && isString(title) || typeof type === 'string',
  primary: (text, back) => isString(text) || typeof back === 'boolean',
  success: (text, back) => isString(text) || typeof back === 'boolean',
  info: (text, back) => isString(text) || typeof back === 'boolean',
  warning: (text, back) => isString(text) || typeof back === 'boolean',
  danger: (text, back) => isString(text) || typeof back === 'boolean'
};
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */

function typeColor(type = 'default') {
  let color = '';

  switch (type) {
    case 'primary':
      color = '#2d8cf0';
      break;

    case 'success':
      color = '#19be6b';
      break;

    case 'info':
      color = '#909399';
      break;

    case 'warning':
      color = '#ff9900';
      break;

    case 'danger':
      color = '#ff4d4f';
      break;

    case 'default':
      color = '#35495E';
      break;

    default:
      color = type;
      break;
  }

  return color;
}

log.print = function (text, type = 'default', back = false) {
  if (typeof text === 'object') {
    // 如果是对象则调用打印对象方式
    console.dir(text);
    return true;
  }

  if (back) {
    // 如果是打印带背景图的
    console.log(`%c ${text} `, `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`);
  } else {
    console.log(`%c ${text} `, `color: ${typeColor(type)};`);
  }

  return true;
}; // 漂亮的


log.pretty = function (title, text, type = 'primary') {
  console.log(`%c ${title} %c ${text} %c`, `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`, `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`, 'background:transparent');
  return true;
};

log.primary = function (text, back = false) {
  this.print && this.print(text, 'primary', back);
  return true;
};

log.success = function (text, back = false) {
  this.print && this.print(text, 'success', back);
  return true;
};

log.info = function (text, back = false) {
  this.print && this.print(text, 'info', back);
  return true;
};

log.warning = function (text, back = false) {
  this.print && this.print(text, 'warning', back);
  return true;
};

log.danger = function (text, back = false) {
  this.print && this.print(text, 'danger', back);
  return true;
};

/* harmony default export */ var utils_log = (log);
// CONCATENATED MODULE: ./src/plugin/core/index.ts
 // 功能插件


/* harmony default export */ var core = ({
  async install(app) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // app.config.productionTip = false
    app.config.globalProperties.$log = utils_log; // 打印UI官网

    utils_log.pretty('[' + package_0.name + '] ' + package_0.version, 'success');
  }

});
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tree-org/src/tree.vue?vue&type=template&id=66c50de8&ts=true

const _hoisted_1 = {
  ref: "eleRef",
  class: "zm-tree-org"
};
const _hoisted_2 = {
  class: "tree-org-node__text"
};

const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "tree-org-node__expand-btn"
}, null, -1);

const _hoisted_4 = {
  class: "tree-org-node__text"
};

const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "tree-org-node__expand-btn"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_org_node = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("tree-org-node");

  const _component_Draggable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Draggable");

  const _component_Tools = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Tools");

  const _component_clone_org = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("clone-org");

  const _component_Contextmenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Contextmenu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "zoomRef",
    class: "zoom-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.zoomStyle),
    onWheel: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.zoomWheel && _ctx.zoomWheel(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Draggable, {
    x: _ctx.left,
    y: _ctx.top,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      dragging: _ctx.autoDragging
    }),
    onDragging: _ctx.onDrag,
    onDragstop: _ctx.onDragStop,
    draggable: _ctx.draggable,
    "drag-cancel": _ctx.dragCancel
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      ref: "treeRef",
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tree-org", {
        horizontal: _ctx.horizontal,
        collapsable: _ctx.collapsable
      }])
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_tree_org_node, {
      data: _ctx.treeData,
      props: _ctx.keys,
      horizontal: _ctx.horizontal,
      labelStyle: _ctx.labelStyle,
      collapsable: _ctx.collapsable,
      renderContent: _ctx.renderContent,
      selectedKey: _ctx.selectedKey,
      defaultExpandLevel: _ctx.defaultExpandLevel,
      selectedClassName: _ctx.selectedClassName,
      labelClassName: _ctx.labelClassName,
      vNodedrag: _ctx.nodeargs,
      onOnExpand: _ctx.handleExpand,
      onNodeClick: _ctx.handleClick,
      onNodeDblclick: _ctx.handleDblclick,
      onNodeMouseenter: _ctx.nodeMouseenter,
      onNodeMouseleave: _ctx.nodeMouseleave,
      onNodeContextmenu: _ctx.nodeContextmenu,
      onNodeFocus: _cache[0] || (_cache[0] = (e, data, node) => {
        _ctx.$emit('on-node-focus', e, data, node);
      }),
      onNodeBlur: _ctx.handleBlur
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
      _: 2
    }, [_ctx.defaultSlot ? {
      name: "default",
      fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
        node
      }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        node: node
      }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(node.label), 1)])])])
    } : undefined, _ctx.expandSlot ? {
      name: "expand",
      fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
        node
      }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
        node: node
      }, () => [_hoisted_3])])
    } : undefined]), 1032, ["data", "props", "horizontal", "labelStyle", "collapsable", "renderContent", "selectedKey", "defaultExpandLevel", "selectedClassName", "labelClassName", "vNodedrag", "onOnExpand", "onNodeClick", "onNodeDblclick", "onNodeMouseenter", "onNodeMouseleave", "onNodeContextmenu", "onNodeBlur"])], 2)]),
    _: 3
  }, 8, ["x", "y", "class", "onDragging", "onDragstop", "draggable", "drag-cancel"])], 36), _ctx.tools.visible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Tools, {
    key: 0,
    tools: _ctx.tools.data,
    scale: _ctx.zoomPercent,
    onOnExpand: _ctx.expandChange,
    onOnScale: _ctx.zoomOrgchart,
    onOnRestore: _ctx.restoreOrgchart,
    onOnFullscreen: _ctx.handleFullscreen
  }, null, 8, ["tools", "scale", "onOnExpand", "onOnScale", "onOnRestore", "onOnFullscreen"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.nodeDraggable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_clone_org, {
    key: 1,
    modelValue: _ctx.nodeMoving,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.nodeMoving = $event),
    props: _ctx.keys,
    data: _ctx.cloneData,
    horizontal: _ctx.horizontal,
    "label-style": _ctx.labelStyle,
    collapsable: _ctx.collapsable,
    "render-content": _ctx.renderContent,
    "label-class-name": _ctx.labelClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
    _: 2
  }, [_ctx.defaultSlot ? {
    name: "default",
    fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
      node: node
    }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(node[_ctx.keys.label]), 1)])])])
  } : undefined, _ctx.expandSlot ? {
    name: "expand",
    fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
      node: node
    }, () => [_hoisted_5])])
  } : undefined]), 1032, ["modelValue", "props", "data", "horizontal", "label-style", "collapsable", "render-content", "label-class-name"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.nodeMenus.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Contextmenu, {
    key: 2,
    modelValue: _ctx.contextmenu,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.contextmenu = $event),
    x: _ctx.menuX,
    y: _ctx.menuY,
    node: _ctx.menuData,
    data: _ctx.data,
    props: _ctx.keys,
    menus: _ctx.nodeMenus,
    disabled: _ctx.disabled,
    "node-add": _ctx.nodeAdd,
    "node-delete": _ctx.nodeDelete,
    "node-edit": _ctx.nodeEdit,
    "node-copy": _ctx.nodeCopy,
    onContextmenu: _cache[4] || (_cache[4] = arg => {
      _ctx.$emit('on-contextmenu', arg);
    }),
    onOnNodeCopy: _cache[5] || (_cache[5] = txt => {
      _ctx.$emit('on-node-copy', txt);
    }),
    onOnNodeDelete: _cache[6] || (_cache[6] = txt => {
      _ctx.$emit('on-node-delete', txt);
    })
  }, null, 8, ["modelValue", "x", "y", "node", "data", "props", "menus", "disabled", "node-add", "node-delete", "node-edit", "node-copy"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512);
}
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue?vue&type=template&id=66c50de8&ts=true

// CONCATENATED MODULE: ./src/store/index.ts
const stopClick = function () {
  let stop = false;
  return {
    get: () => stop,
    set: val => {
      stop = val;
    }
  };
}();
// CONCATENATED MODULE: ./src/directives/drag/index.ts

 // 递归遍历处理数据

const recurseData = function (data, keys, cb) {
  const {
    children
  } = keys;

  if (isObject(data)) {
    fn(data);
  } else if (Array.isArray(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      fn(data[i]);
    }
  }

  function fn(obj) {
    cb(obj);

    if (Array.isArray(obj[children])) {
      const list = obj[children];

      for (let i = 0, len = list.length; i < len; i++) {
        fn(list[i]);
      }
    }
  }
}; // 获取父级节点


const drag_getNodeById = function (node, keys, value) {
  const {
    id,
    children
  } = keys;

  if (node[id] === value) {
    return node;
  } else if (Array.isArray(node[children])) {
    const list = node[children];

    for (let i = 0, len = list.length; i < len; i++) {
      const row = list[i];
      const pNode = drag_getNodeById(row, keys, value);

      if (pNode) {
        return pNode;
      }
    }
  }
}; // 移除节点


const removeNode = function (node, context) {
  const {
    keys,
    data,
    onlyOneNode
  } = context;
  const {
    id,
    pid,
    children
  } = keys;
  const oldPaNode = drag_getNodeById(data, keys, node[pid]);
  const list = oldPaNode[children];
  let index;

  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i][id] === node[id]) {
      list.splice(i, 1);
      index = i;
      break;
    }
  } // 如果仅移动当前节点，把当前节点的子节点添加到当前节点的父节点，并把当前节点子节点移除


  const childNodes = node[children];

  if (onlyOneNode && index !== undefined && childNodes) {
    node[children] = [];
    childNodes.forEach(it => {
      it[pid] = oldPaNode[id];
    });
    oldPaNode[children].splice(index, 0, ...childNodes);
  }
}; // 新增子节点节点


const addChildNode = function (node, context) {
  const {
    parenNode,
    onlyOneNode,
    cloneNodeDrag
  } = context;

  if (parenNode.value) {
    const {
      keys
    } = context;
    const {
      id,
      pid
    } = keys;
    const parentData = parenNode.value.$$data;
    const nodeClone = JSON.parse(JSON.stringify(node.$$data));

    if (!cloneNodeDrag) {
      // 如果拖拽节点
      removeNode(nodeClone, context);
      nodeClone[pid] = parentData[id];
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [].concat(nodeClone);
    } else {
      // 如果拷贝并拖拽节点
      recurseData(nodeClone, keys, function (item) {
        if (typeof item[id] === 'string' && item[id].indexOf('clone-node') !== -1) {
          item[id] = `clone-node-${item[id]}`;
        }
      });
      const {
        children
      } = keys;

      if (onlyOneNode && Array.isArray(nodeClone[children])) {
        nodeClone[children] = [];
      }

      nodeClone[keys.pid] = parentData[keys.id];
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [nodeClone];
    }
  }
};

const drag_drag = {
  beforeMount(el, binding) {
    const {
      l,
      t
    } = binding.modifiers;
    const {
      drag,
      dragData,
      node,
      handleStart,
      handleMove,
      beforeDragEnd,
      handleEnd,
      initNodes
    } = binding.value;
    const {
      value
    } = binding;
    const instance = { ...dragData
    };
    el.addEventListener('mousedown', handleDownCb);
    let offsetLeft = 0;
    let hasRender = false;
    let cloneTree;
    let screenX = 0;
    let screenY = 0;

    function initData(e) {
      e.stopPropagation();
      screenX = e.screenX;
      screenY = e.screenY;
      offsetLeft = 0;
      instance.contextmenu.value = false; // 隐藏右键菜单

      const {
        keys,
        onlyOneNode
      } = instance;

      if (onlyOneNode) {
        // 如果是仅移动当前节点
        const {
          children
        } = keys;
        const cloneNode = { ...node.$$data
        };
        cloneNode[children] = [];
        instance.cloneData.value = initNodes(cloneNode);
      } else {
        instance.cloneData.value = initNodes(node.$$data);
      }
    }

    function handleDownCb(e) {
      const target = e.target;

      if (drag === false || e.button !== 0 || node.focused || node.noDragging || target.className.indexOf('tree-org-node-btn') > -1) {
        return false;
      }

      initData(e);
      document.addEventListener('mousemove', handleMoveCb);
      document.addEventListener('mouseup', handleUpCb);
      handleEmit('start');
    }

    function moveStart(e) {
      stopClick.set(true);
      instance.nodeMoving.value = true;
      node.moving = true;
      let ndom = el;

      while (!ndom.classList.contains('tree-org-node')) {
        offsetLeft += ndom.offsetLeft;
        ndom = ndom.offsetParent;
      } // 拖动节点副本


      offsetLeft = offsetLeft + 2;
      cloneTree = document.querySelector('#clone-tree-org');

      if (cloneTree) {
        cloneTree.style.width = `${ndom.clientWidth}px`;
        cloneTree.style.opacity = '0.8';
        cloneTree.style.left = e.clientX - offsetLeft + 'px';
        cloneTree.style.top = e.clientY + 2 + 'px';
      }
    }

    function handleMoveCb(e) {
      e.preventDefault();

      if (Math.abs(e.screenX - screenX) < 5 && Math.abs(e.screenY - screenY) < 5) {
        return false;
      }

      if (!hasRender) {
        hasRender = true;
        moveStart(e);
      }

      if (l && t && value) {
        if (cloneTree) {
          cloneTree.style.left = e.clientX - offsetLeft + 'px';
          cloneTree.style.top = e.clientY + 2 + 'px';
        }

        handleEmit('move');
        return;
      }

      if (l && value) {
        el.style.left = e.clientX - offsetLeft + 'px';
        handleEmit('move');
        return;
      }

      if (t && value) {
        el.style.top = e.clientY + 'px';
        handleEmit('move');
      }
    }

    function handleUpCb(e) {
      document.removeEventListener('mousemove', handleMoveCb);
      document.removeEventListener('mouseup', handleUpCb);

      if (!hasRender) {
        return;
      }

      if (typeof beforeDragEnd === 'function') {
        const before = beforeDragEnd(node, instance.parenNode.value);

        if (before && before.then) {
          before.then(() => {
            doDragEnd(e);
          });
        } else if (before !== false) {
          doDragEnd(e);
        }
      } else {
        doDragEnd(e);
      }

      resetDrag();
    }

    function resetDrag() {
      hasRender = false;
      cloneTree = null;
      node.moving = false;
      instance.nodeMoving.value = false;
      setTimeout(() => {
        stopClick.set(false);
      }, 200);
    }

    function doDragEnd(e) {
      const movingNode = document.querySelector('.tree-org-node__moving');

      if (movingNode && movingNode.contains(e.target)) {
        handleEmit('end', true);
        return false;
      }

      addChildNode(node, instance);
      handleEmit('end', false);
    }

    function handleEmit(type, isSelf) {
      if (type === 'start') {
        typeof handleStart === 'function' && handleStart(node);
        return;
      }

      if (type === 'move') {
        typeof handleMove === 'function' && handleMove(node);
        return;
      }

      if (type === 'end') {
        typeof handleEnd === 'function' && handleEnd(node, isSelf);
      }
    }
  }

};
/* harmony default export */ var directives_drag = (drag_drag);
// CONCATENATED MODULE: ./src/directives/focus/index.ts
/* harmony default export */ var directives_focus = ({
  mounted(el, {
    value
  }) {
    if (value) {
      el.focus();
    }
  },

  updated(el, {
    value
  }) {
    if (value) {
      el.focus();
    }
  }

});
// CONCATENATED MODULE: ./src/components/node/index.ts
// 功能插件




const EVENTS = {
  onClick: 'onNodeClick',
  onDblclick: 'onNodeDblclick',
  onContextmenu: 'onNodeContextmenu',
  onMouseenter: 'onNodeMouseenter',
  onMouseleave: 'onNodeMouseleave'
};

function createListener(handler, node) {
  if (typeof handler === 'function') {
    return function (e) {
      const target = e.target;
      if (target.className.indexOf('org-tree-node-btn') > -1) return;
      handler(e, node);
    };
  }
} // 判断是否叶子节点


const isLeaf = (data, prop) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0) || data.isLeaf;
}; // 创建 node 节点


const renderNode = (h, data, context) => {
  const {
    attrs
  } = context;
  const cls = ['tree-org-node'];
  const childNodes = [];
  const {
    expand,
    children,
    id
  } = data; // 如果是叶子节点则追加leaf事件

  if (isLeaf(data, 'children')) {
    cls.push('is-leaf');
  } else if (attrs.collapsable && !expand) {
    // 追加是否展开class
    cls.push('collapsed');
  }

  if (data.moving) {
    cls.push('tree-org-node__moving');
  } // 渲染label块


  childNodes.push(renderLabel(h, data, context));

  if (!attrs.collapsable || expand) {
    childNodes.push(renderChildren(h, children, context));
  }

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('div', {
    class: cls,
    key: id
  }, childNodes), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !data.hidden]]);
}; // 创建展开折叠按钮

const renderBtn = (h, node, context) => {
  const {
    attrs
  } = context;
  const expandHandler = attrs.onOnExpand;
  const cls = ['tree-org-node__expand'];

  if (node.expand) {
    cls.push('expanded');
  }

  const children = [];

  if (context.slots.expand) {
    children.push(context.slots.expand({
      node
    }));
  } else {
    children.push(h('span', {
      class: 'tree-org-node__expand-btn'
    }));
  }

  return h('span', {
    class: cls,
    onMousedown: e => {
      e.stopPropagation();
    },
    onDblclick: e => {
      e.stopPropagation();
    },
    onClick: e => {
      e.stopPropagation();
      expandHandler && expandHandler(e, node);
    }
  }, children);
}; // 创建 label 节点

const renderLabel = (h, node, context) => {
  const {
    attrs
  } = context;
  const defaultProps = attrs.props;
  const renderContent = attrs.renderContent; // const { directives } = context.data

  const {
    label
  } = node;
  const childNodes = [];

  if (context.slots.default) {
    childNodes.push(context.slots.default({
      node
    }));
  } else if (typeof renderContent === 'function') {
    utils_log.warning('scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
    const vnode = renderContent(h, node);
    vnode && childNodes.push(vnode);
  } else {
    childNodes.push(h('div', {
      class: 'tree-org-node__text'
    }, label));
  }

  if (attrs.collapsable && !isLeaf(node, 'children')) {
    childNodes.push(renderBtn(h, node, context));
  }

  const cls = ['tree-org-node__inner'];
  let {
    labelStyle,
    labelClassName,
    selectedClassName,
    selectedKey
  } = attrs;

  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(node);
  }

  labelClassName && cls.push(labelClassName);
  node.className && cls.push(node.className); // add selected class and key from props

  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(node);
  }

  if (selectedKey !== undefined) {
    selectedKey = Array.isArray(selectedKey) ? selectedKey : [selectedKey];
  }

  selectedClassName && selectedKey && selectedKey.includes(node.id) && cls.push(selectedClassName);
  const nodeLabelClass = ['tree-org-node__content'];

  if (node.$$root) {
    nodeLabelClass.push('is-root');
  }

  if (!node.label) {
    nodeLabelClass.push('is-empty');
  }

  if (node.$$focused) {
    nodeLabelClass.push('is-edit');
  }

  const vNodedrag = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])('nodedrag');
  const cloneDirs = [];

  if (attrs.vNodedrag && vNodedrag && !node.$$root) {
    cloneDirs.push([vNodedrag, Object.assign({
      node: node
    }, attrs.vNodedrag), '', {
      l: true,
      t: true
    }]);
  } // event handlers


  const NODEEVENTS = {};

  for (const EKEY in EVENTS) {
    if (Object.prototype.hasOwnProperty.call(EVENTS, EKEY)) {
      const EVENT = EVENTS[EKEY];
      const handler = attrs[EVENT];

      if (handler) {
        NODEEVENTS[EKEY] = createListener(handler, node);
      }
    }
  } // texterea event handles


  const focusHandler = attrs.onNodeFocus;
  const blurHandler = attrs.onNodeBlur;
  const vFocus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])('focus');
  const directives = [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], node.$$focused]];

  if (vFocus) {
    directives.push([vFocus, node.$$focused]);
  }

  return h('div', {
    class: nodeLabelClass
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('div', {
    class: cls,
    style: node.style ? node.style : labelStyle,
    ...NODEEVENTS
  }, childNodes), cloneDirs), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('textarea', {
    class: 'tree-org-node__textarea',
    placeholder: '请输入节点名称',
    value: node.label,
    onFocus: e => {
      focusHandler && focusHandler(e, node.$$data, node);
    },
    onInput: event => {
      node.label = event.target.value;
    },
    onBlur: e => {
      if (node.$$data.focused !== undefined) node.$$data.focused = false;
      node.$$data[defaultProps.label] = e.target.value;
      node.$$focused = false;
      blurHandler && blurHandler(e, node.$$data, node);
    },
    onClick: e => e.stopPropagation()
  }), directives)]);
}; // 创建 node 子节点

const renderChildren = (h, list, context) => {
  if (Array.isArray(list) && list.length) {
    const children = list.filter(item => !item.$$hidden).map(item => {
      return renderNode(h, item, context);
    });
    return h('div', {
      class: 'tree-org-node__children'
    }, children);
  }

  return '';
};
const TreeOrgNode = (props, context) => {
  if (!props.data) return '';
  props.data.$$root = !props.isClone;
  return renderNode(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], props.data, context);
};
TreeOrgNode.directives = {
  // 自定义指令
  focus: directives_focus,
  nodedrag: directives_drag
};
/* harmony default export */ var components_node = (TreeOrgNode);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tools/tools.vue?vue&type=template&id=1aca9713

const toolsvue_type_template_id_1aca9713_hoisted_1 = {
  class: "zm-tree-handle"
};
const toolsvue_type_template_id_1aca9713_hoisted_2 = {
  key: 0,
  class: "zm-tree-percent"
};
const toolsvue_type_template_id_1aca9713_hoisted_3 = ["title"];
const toolsvue_type_template_id_1aca9713_hoisted_4 = {
  class: "zm-tree-svg"
};

const toolsvue_type_template_id_1aca9713_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-icon"
}, "+", -1);

const _hoisted_6 = [toolsvue_type_template_id_1aca9713_hoisted_5];

const _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-icon"
}, "-", -1);

const _hoisted_8 = [_hoisted_7];

const _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-restore"
}, null, -1);

const _hoisted_10 = [_hoisted_9];
const _hoisted_11 = ["title"];
const _hoisted_12 = {
  class: "zm-tree-svg"
};
function toolsvue_type_template_id_1aca9713_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", toolsvue_type_template_id_1aca9713_hoisted_1, [_ctx.tools.scale ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", toolsvue_type_template_id_1aca9713_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.scale), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.expand ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 1,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleExpand && _ctx.handleExpand(...args)),
    title: _ctx.expandTitle,
    class: "zm-tree-handle-item"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", toolsvue_type_template_id_1aca9713_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['treefont', _ctx.expanded ? 'icon-collapse' : 'icon-expand'])
  }, null, 2)])], 8, toolsvue_type_template_id_1aca9713_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.zoom ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 2,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.handleScale('out')),
    title: "放大",
    class: "zm-tree-handle-item zoom-out"
  }, _hoisted_6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.zoom ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 3,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.handleScale('in')),
    title: "缩小",
    class: "zm-tree-handle-item zoom-in"
  }, _hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.restore ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 4,
    onClick: _cache[3] || (_cache[3] = $event => _ctx.handleScale('restore')),
    title: "还原",
    class: "zm-tree-handle-item"
  }, _hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.fullscreen ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 5,
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleFullscreen && _ctx.handleFullscreen(...args)),
    title: _ctx.fullTiltle,
    class: "zm-tree-handle-item"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['treefont', _ctx.fullscreen ? 'icon-unfullscreen' : 'icon-fullscreen'])
  }, null, 2)])], 8, _hoisted_11)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/tools/tools.vue?vue&type=template&id=1aca9713

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tools/tools.vue?vue&type=script&lang=js

/* harmony default export */ var toolsvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    scale: String,
    tools: Object
  },

  setup(props, {
    emit
  }) {
    const expanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    const fullscreen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    function handleExpand() {
      expanded.value = !expanded.value;
      emit('onExpand');
    }

    function handleScale(scale) {
      if (scale === 'out') {
        emit('onScale', 0.1);
      } else if (scale === 'in') {
        emit('onScale', -0.1);
      } else {
        emit('onRestore');
      }
    }

    function handleFullscreen(e) {
      fullscreen.value = !fullscreen.value;
      emit('onFullscreen', e);
    }

    function isFullScreen() {
      return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
    }

    function onResize() {
      // 如果当前非全屏，但是 fullscreen 为true，说明是esc退出全屏
      if (!isFullScreen() && fullscreen.value) {
        // 全屏下按键esc后要执行的动作
        handleFullscreen('esc');
      }
    }

    const expandTitle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return expanded.value ? '全部收起' : '全部展开';
    });
    const fullTiltle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return fullscreen.value ? '退出全屏' : '全屏';
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      window.addEventListener('resize', onResize);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(() => {
      window.removeEventListener('resize', onResize);
    });
    return {
      expanded,
      fullscreen,
      expandTitle,
      fullTiltle,
      handleExpand,
      handleScale,
      handleFullscreen
    };
  }

}));
// CONCATENATED MODULE: ./src/components/tools/tools.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/tools/tools.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(toolsvue_type_script_lang_js, [['render',toolsvue_type_template_id_1aca9713_render]])

/* harmony default export */ var tools_tools = (__exports__);
// CONCATENATED MODULE: ./src/components/tools/index.ts

/* harmony default export */ var components_tools = (tools_tools);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/draggable/src/draggable.vue?vue&type=template&id=79ff2fba&ts=true

function draggablevue_type_template_id_79ff2fba_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.style),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      [_ctx.classNameActive]: _ctx.enabled,
      [_ctx.classNameDragging]: _ctx.dragging,
      [_ctx.classNameDraggable]: _ctx.draggable
    }, _ctx.className]),
    ref: "eleRef",
    onMousedown: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.elementMouseDown && _ctx.elementMouseDown(...args)),
    onTouchstart: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.elementTouchDown && _ctx.elementTouchDown(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 38);
}
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue?vue&type=template&id=79ff2fba&ts=true

// CONCATENATED MODULE: ./src/utils/fns.ts
function isFunction(func) {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}
function snapToGrid(grid, pendingX, pendingY, scale = 1) {
  const deltaX = Math.round(pendingX / scale / grid[0]) * grid[0];
  const deltaY = Math.round(pendingY / scale / grid[1]) * grid[1];
  return {
    deltaX,
    deltaY
  };
}
function getSize(el) {
  const rect = el.getBoundingClientRect();
  return [rect.width, rect.height];
}
function restrictToBounds(value, min, max) {
  if (value < min) {
    return min;
  }

  if (max < value) {
    return max;
  }

  return value;
}
// CONCATENATED MODULE: ./src/utils/dom.ts

function matchesSelectorToParentElements(el, selector, baseNode) {
  let node = el;
  const matchesSelectorFunc = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].find(func => node && isFunction(node[func])) || '';
  if (!isFunction(node[matchesSelectorFunc])) return false;

  do {
    if (node[matchesSelectorFunc](selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}
function getComputedSize($el) {
  const style = window.getComputedStyle($el);
  return [parseFloat(style.getPropertyValue('width')), parseFloat(style.getPropertyValue('height'))];
}
const addEvent = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
/* istanbul ignore next */

const removeEvent = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
// CONCATENATED MODULE: ./src/components/draggable/src/use-draggable.ts



const useDraggable = (props, {
  emit
}, refs) => {
  const events = {
    mouse: {
      start: 'mousedown',
      move: 'mousemove',
      stop: 'mouseup'
    },
    touch: {
      start: 'touchstart',
      move: 'touchmove',
      stop: 'touchend'
    }
  };
  const userSelectNone = {
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none'
  };
  const userSelectAuto = {
    userSelect: 'auto',
    MozUserSelect: 'auto',
    WebkitUserSelect: 'auto',
    MsUserSelect: 'auto'
  };
  let eventsFor = events.mouse;
  const left = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.x);
  const top = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.y);
  const zIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.z);
  const enabled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.active);
  const dragging = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const right = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const bottom = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const width = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const height = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentHeight = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  let mouseClickPosition = {};
  let bounds = {};

  function resetBoundsAndMouseState() {
    mouseClickPosition = {
      mouseX: 0,
      mouseY: 0,
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    bounds = {
      minLeft: -Infinity,
      maxLeft: Infinity,
      minRight: -Infinity,
      maxRight: Infinity,
      minTop: -Infinity,
      maxTop: Infinity,
      minBottom: -Infinity,
      maxBottom: Infinity
    };
  }

  function checkParentSize() {
    if (props.parent) {
      const [newParentWidth, newParentHeight] = getParentSize();
      parentWidth.value = newParentWidth || 0;
      parentHeight.value = newParentHeight || 0;
    }
  }

  function getParentSize() {
    if (props.parent && refs.eleRef.value) {
      const style = window.getComputedStyle(refs.eleRef.value.parentNode, null);
      return [parseInt(style.getPropertyValue('width'), 10), parseInt(style.getPropertyValue('height'), 10)];
    }

    return [0, 0];
  }

  function elementTouchDown(e) {
    // e.stopPropagation()
    eventsFor = events.touch;
    elementDown(e);
  }

  function elementMouseDown(e) {
    // e.stopPropagation()
    eventsFor = events.mouse;
    elementDown(e);
  }

  function elementDown(e) {
    if (e instanceof MouseEvent && e.which !== 1) {
      return;
    }

    const target = e.target || e.srcElement;

    if (target && refs.eleRef.value && refs.eleRef.value.contains(target)) {
      if (props.dragCancel && matchesSelectorToParentElements(target, props.dragCancel, refs.eleRef.value)) {
        dragging.value = false;
        return;
      }

      if (!enabled.value) {
        enabled.value = true;
        emit('activated');
        emit('update:active', true);
      }

      if (props.draggable) {
        dragging.value = true;
      }

      if (e instanceof MouseEvent) {
        mouseClickPosition.mouseX = e.pageX;
        mouseClickPosition.mouseY = e.pageY;
      } else {
        mouseClickPosition.mouseX = e.touches[0].pageX;
        mouseClickPosition.mouseY = e.touches[0].pageY;
      }

      mouseClickPosition.left = left.value;
      mouseClickPosition.right = right.value;
      mouseClickPosition.top = top.value;
      mouseClickPosition.bottom = bottom.value;

      if (props.parent) {
        bounds = calcDragLimits();
      }

      addEvent(document.documentElement, eventsFor.move, move);
      addEvent(document.documentElement, eventsFor.stop, handleUp);
    }
  }

  function calcDragLimits() {
    const grid = props.grid;
    return {
      minLeft: left.value % grid[0],
      maxLeft: Math.floor((parentWidth.value - width.value - left.value) / grid[0]) * grid[0] + left.value,
      minRight: right.value % grid[0],
      maxRight: Math.floor((parentWidth.value - width.value - right.value) / grid[0]) * grid[0] + right.value,
      minTop: top.value % grid[1],
      maxTop: Math.floor((parentHeight.value - height.value - top.value) / grid[1]) * grid[1] + top.value,
      minBottom: bottom.value % grid[1],
      maxBottom: Math.floor((parentHeight.value - height.value - bottom.value) / grid[1]) * grid[1] + bottom.value
    };
  }

  function deselect(e) {
    const target = e.target || e.srcElement;

    if (refs.eleRef.value && !refs.eleRef.value.contains(target)) {
      if (enabled.value && !props.preventDeactivation) {
        enabled.value = false;
        emit('deactivated');
        emit('update:active', false);
      }
    } // resetBoundsAndMouseState()

  }

  function move(e) {
    if (dragging.value) {
      handleDrag(e);
    }
  }

  function handleDrag(e) {
    const axis = props.axis;
    const grid = props.grid;
    let pageX = 0;
    let pageY = 0;

    if (e instanceof MouseEvent) {
      pageX = e.pageX;
      pageY = e.pageY;
    } else {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }

    const tmpDeltaX = axis && axis !== 'y' ? mouseClickPosition.mouseX - pageX : 0;
    const tmpDeltaY = axis && axis !== 'x' ? mouseClickPosition.mouseY - pageY : 0;
    const {
      deltaX,
      deltaY
    } = snapToGrid(grid, tmpDeltaX, tmpDeltaY, props.scale);
    const lf = restrictToBounds(mouseClickPosition.left - deltaX, bounds.minLeft, bounds.maxLeft);
    const tp = restrictToBounds(mouseClickPosition.top - deltaY, bounds.minTop, bounds.maxTop);
    const rt = restrictToBounds(mouseClickPosition.right + deltaX, bounds.minRight, bounds.maxRight);
    const bt = restrictToBounds(mouseClickPosition.bottom + deltaY, bounds.minBottom, bounds.maxBottom);
    left.value = lf;
    top.value = tp;
    right.value = rt;
    bottom.value = bt;
    emit('dragging', left.value, top.value);
  }

  function moveHorizontally(val) {
    const {
      deltaX
    } = snapToGrid(props.grid, val, top.value, props.scale);
    const lf = restrictToBounds(deltaX, bounds.minLeft, bounds.maxLeft);
    left.value = lf;
    right.value = parentWidth.value - width.value - lf;
  }

  function moveVertically(val) {
    const {
      deltaY
    } = snapToGrid(props.grid, left.value, val, props.scale);
    const tp = restrictToBounds(deltaY, bounds.minTop, bounds.maxTop);
    top.value = tp;
    bottom.value = parentHeight.value - height.value - tp;
  }

  function handleUp() {
    resetBoundsAndMouseState();

    if (dragging.value) {
      dragging.value = false;
      emit('dragstop', left.value, top.value);
    }
  }

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
    resetBoundsAndMouseState();
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    if (!props.enableNativeDrag && refs.eleRef.value) {
      refs.eleRef.value.ondragstart = () => false;
    }

    const [pw, ph] = getParentSize();
    parentWidth.value = pw;
    parentHeight.value = ph;

    if (refs.eleRef.value) {
      const [elWidth, elHeight] = getComputedSize(refs.eleRef.value);
      width.value = elWidth;
      height.value = elHeight;
      right.value = parentWidth.value - width.value - left.value;
      bottom.value = parentHeight.value - height.value - top.value;
    }

    addEvent(document.documentElement, 'mousedown', deselect);
    addEvent(document.documentElement, 'touchend touchcancel', deselect);
    addEvent(window, 'resize', checkParentSize);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    removeEvent(document.documentElement, 'mousedown', deselect);
    removeEvent(document.documentElement, 'touchstart', handleUp);
    removeEvent(document.documentElement, 'mousemove', move);
    removeEvent(document.documentElement, 'touchmove', move);
    removeEvent(document.documentElement, 'mouseup', handleUp);
    removeEvent(document.documentElement, 'touchend touchcancel', deselect);
    removeEvent(window, 'resize', checkParentSize);
  });
  const style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      transform: `translate(${left.value}px, ${top.value}px)`,
      zIndex: zIndex.value,
      ...(dragging.value && props.disableUserSelect ? userSelectNone : userSelectAuto)
    };
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.active, active => {
    enabled.value = active;

    if (active) {
      emit('activated');
    } else {
      emit('deactivated');
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.z, value => {
    if (value >= 0 || value === 'auto') {
      zIndex.value = value;
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.x, value => {
    if (dragging.value) {
      return;
    }

    if (props.parent) {
      bounds = calcDragLimits();
    }

    moveHorizontally(value);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.y, value => {
    if (dragging.value) {
      return;
    }

    if (props.parent) {
      bounds = calcDragLimits();
    }

    moveVertically(value);
  });
  return {
    enabled,
    dragging,
    style,
    resetBoundsAndMouseState,
    elementTouchDown,
    elementMouseDown
  };
};
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__("9ff4");

// CONCATENATED MODULE: ./src/utils/props.ts



const wrapperKey = Symbol('wrapper');
const propKey = '__elPropsReservedKey';
/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */

function buildProp(option, key) {
  // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
  if (!Object(shared_esm_bundler["a" /* isObject */])(option) || !!option[propKey]) return option;
  const {
    values,
    required,
    default: defaultValue,
    type,
    validator
  } = option;

  const _validator = values || validator ? val => {
    let valid = false;
    let allowedValues = [];

    if (values) {
      allowedValues = [...values, defaultValue];
      valid = valid || allowedValues.includes(val);
    }

    if (validator) valid = valid || validator(val);

    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map(value => JSON.stringify(value)).join(', ');
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["warn"])(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }

    return valid;
  } : undefined;

  return {
    type: typeof type === 'object' && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    validator: _validator,
    [propKey]: true,
    default: defaultValue,
    required: !!required
  };
}
const buildProps = props => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
const definePropType = val => ({
  [wrapperKey]: val
});
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.ts


const draggableProps = buildProps({
  className: {
    type: String,
    default: 'zm-draggable'
  },
  classNameDraggable: {
    type: String,
    default: 'draggable'
  },
  classNameDragging: {
    type: String,
    default: 'dragging'
  },
  classNameActive: {
    type: String,
    default: 'active'
  },
  disableUserSelect: {
    type: Boolean,
    default: true
  },
  enableNativeDrag: {
    type: Boolean,
    default: false
  },
  preventDeactivation: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: true
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  z: {
    type: [String, Number],
    default: 'auto',
    validator: val => typeof val === 'string' ? val === 'auto' : val >= 0
  },
  dragCancel: String,
  axis: {
    type: String,
    default: 'both',
    validator: val => ['x', 'y', 'both'].includes(val)
  },
  grid: {
    type: Array,
    default: () => [1, 1]
  },
  parent: {
    type: Boolean,
    default: false
  },
  scale: {
    type: Number,
    default: 1,
    validator: val => val > 0
  }
});
const draggableEmits = {
  activated: () => true,
  deactivated: () => true,
  dragging: (x, y) => isNumber(x) && isNumber(y),
  dragstop: (x, y) => isNumber(x) && isNumber(y),
  'update:active': value => typeof value === 'boolean'
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/draggable/src/draggable.vue?vue&type=script&lang=ts



/* harmony default export */ var draggablevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  replace: true,
  name: 'Draggable',
  props: draggableProps,
  emits: draggableEmits,

  setup(props, ctx) {
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const draggable = useDraggable(props, ctx, {
      eleRef
    });
    return {
      top,
      eleRef,
      ...draggable
    };
  }

}));
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue





const draggable_exports_ = /*#__PURE__*/exportHelper_default()(draggablevue_type_script_lang_ts, [['render',draggablevue_type_template_id_79ff2fba_ts_true_render]])

/* harmony default export */ var src_draggable = (draggable_exports_);
// CONCATENATED MODULE: ./src/components/draggable/index.ts

/* harmony default export */ var components_draggable = (src_draggable);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/clone-org/clone-org.vue?vue&type=template&id=61bebde9&ts=true

function clone_orgvue_type_template_id_61bebde9_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_org_node = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("tree-org-node");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    id: "clone-tree-org",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["clone-tree-org tree-org", {
      horizontal: _ctx.horizontal,
      collapsable: _ctx.collapsable
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_tree_org_node, {
    data: _ctx.data,
    props: _ctx.props,
    isClone: false,
    horizontal: _ctx.horizontal,
    labelStyle: _ctx.labelStyle,
    collapsable: _ctx.collapsable,
    renderContent: _ctx.renderContent,
    labelClassName: _ctx.labelClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
    _: 2
  }, [_ctx.defaultSlot ? {
    name: "default",
    fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
      node: node
    })])
  } : undefined, _ctx.expandSlot ? {
    name: "expand",
    fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
      node: node
    })])
  } : undefined]), 1032, ["data", "props", "horizontal", "labelStyle", "collapsable", "renderContent", "labelClassName"])], 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.modelValue]])]);
}
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue?vue&type=template&id=61bebde9&ts=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/clone-org/clone-org.vue?vue&type=script&lang=ts



const cloneorgProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType(Object)
  },
  modelValue: Boolean,
  horizontal: Boolean,
  selectedKey: String,
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  }
});
/* harmony default export */ var clone_orgvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    TreeOrgNode: components_node
  },
  props: cloneorgProps,

  setup(props, ctx) {
    const defaultSlot = !!ctx.slots.default;
    const expandSlot = !!ctx.slots.expand;
    return {
      defaultSlot,
      expandSlot
    };
  }

}));
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue





const clone_org_exports_ = /*#__PURE__*/exportHelper_default()(clone_orgvue_type_script_lang_ts, [['render',clone_orgvue_type_template_id_61bebde9_ts_true_render]])

/* harmony default export */ var clone_org = (clone_org_exports_);
// CONCATENATED MODULE: ./src/components/clone-org/index.ts

/* harmony default export */ var components_clone_org = (clone_org);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/contextmenu/src/contextmenu.vue?vue&type=template&id=c9139626&ts=true

const contextmenuvue_type_template_id_c9139626_ts_true_hoisted_1 = ["action"];
function contextmenuvue_type_template_id_c9139626_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "dialog-fade",
    onAfterEnter: _ctx.afterEnter,
    onAfterLeave: _ctx.afterLeave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.position),
      onClick: _cache[1] || (_cache[1] = //@ts-ignore
      (...args) => _ctx.handleMenu && _ctx.handleMenu(...args)),
      ref: "eleRef",
      class: "zm-tree-contextmenu"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.menus, item => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.editable || !['add', 'edit', 'delete'].includes(item.command) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
        class: "zm-tree-menu-item",
        action: item.command,
        key: item.command
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.name), 9, contextmenuvue_type_template_id_c9139626_ts_true_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
    }), 256))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
      class: "copy-textarea",
      ref: "inputRef",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.copyText = $event)
    }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.copyText]])], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.modelValue]])]),
    _: 1
  }, 8, ["onAfterEnter", "onAfterLeave"])]);
}
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue?vue&type=template&id=c9139626&ts=true

// CONCATENATED MODULE: ./src/utils/constants.ts
const UPDATE_MODEL_EVENT = 'update:modelValue';
// CONCATENATED MODULE: ./src/components/contextmenu/src/use-contextmenu.ts



const useContextmenu = (defaultProps, {
  emit
}, refs) => {
  const copyText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(''); // 递归遍历实现

  function getNodeById(data, key, value) {
    if (data[key] === value) {
      return data;
    } else if (Array.isArray(data.children)) {
      const list = data.children;

      for (let i = 0, len = list.length; i < len; i++) {
        const row = list[i];
        const pNode = getNodeById(row, key, value);

        if (pNode) {
          return pNode;
        }
      }
    }
  } // 移除节点


  function handleDelete() {
    const {
      props,
      data,
      node
    } = defaultProps;

    if (defaultProps.nodeDelete) {
      defaultProps.nodeDelete(node.$$data);
      return;
    }

    if (node.$$root) {
      utils_log.pretty('[提示] ', '根节点不允许删除', 'danger');
      return;
    }

    const {
      id,
      children
    } = props;
    const oldPaNode = getNodeById(data, id, node.pid);

    if (oldPaNode) {
      const list = oldPaNode[children];

      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i][id] === node.id) {
          list.splice(i, 1);
          emit('onNodeDelete', node.$$data, node);
          break;
        }
      }
    }
  }

  function handleMenu(e) {
    const el = e.target;

    if (el.className === 'zm-tree-menu-item') {
      const command = el.getAttribute('action');

      switch (command) {
        case 'copy':
          handleCopy();
          break;

        case 'add':
          handleAdd();
          break;

        case 'edit':
          handleEdit();
          break;

        case 'delete':
          handleDelete();
          break;
      }

      emit('contextmenu', {
        command,
        node: defaultProps.node,
        data: defaultProps.node.$$data
      });
      emit(UPDATE_MODEL_EVENT, false);
    }
  }

  function handleCopy() {
    if (defaultProps.nodeCopy) {
      defaultProps.nodeCopy(defaultProps.node.$$data);
      return;
    }

    copyText.value = defaultProps.node.label;
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      if (refs.inputRef && refs.inputRef.value) {
        refs.inputRef && refs.inputRef.value.select(); // 选中文本

        navigator.clipboard.writeText(copyText.value).then(function () {
          /* clipboard successfully set */
          utils_log.pretty('[提示] ', '文本复制成功', 'success');
        }, function () {
          /* clipboard write failed */
          utils_log.pretty('[错误] ', '浏览器不支持', 'danger');
        });
        emit('onNodeCopy', copyText.value);
      }
    });
  }

  function handleAdd() {
    if (defaultProps.nodeAdd) {
      defaultProps.nodeAdd(defaultProps.node.$$data);
      return;
    }

    const {
      id,
      pid,
      label,
      expand,
      children
    } = defaultProps.props;
    const {
      node
    } = defaultProps;
    const json = {
      [id]: String(new Date().getTime()),
      [pid]: node.id,
      [label]: '',
      [expand]: false,
      [children]: [],
      newNode: true,
      focused: true
    };

    if (Array.isArray(node.children)) {
      node.$$data[children].push(json);
    } else {
      node.$$data[children] = [json];
    }

    emit('onNodeFocus', json);
  }

  function handleEdit() {
    const {
      nodeEdit,
      node
    } = defaultProps;

    if (nodeEdit) {
      nodeEdit(node.$$data);
      return;
    }

    node.$$focused = true;
    emit('onNodeFocus', node.$$data);
  }

  function handleClose(e) {
    if (defaultProps.modelValue) {
      if (refs.eleRef.value && refs.eleRef.value.contains(e.target)) {
        return false;
      }

      emit('update:modelValue', false);
    }
  }

  function afterEnter() {
    emit('opened');
  }

  function afterLeave() {
    emit('closed');
  }

  const position = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      left: `${defaultProps.x}px`,
      top: `${defaultProps.y}px`
    };
  });
  const editable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return !defaultProps.disabled && !defaultProps.node.disabled;
  }); // mounted

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    document.addEventListener('mousedown', handleClose);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    document.removeEventListener('mousedown', handleClose);
  });
  return {
    position,
    editable,
    handleMenu,
    handleEdit,
    handleClose,
    afterEnter,
    afterLeave
  };
};
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenus.ts


const contextmenuProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  node: {
    type: definePropType(Object),
    required: true
  },
  props: {
    type: definePropType(Object)
  },
  x: Number,
  y: Number,
  menus: {
    type: definePropType(Array)
  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  disabled: Boolean
});
const contextmenuEmits = {
  onNodeDelete: (data, node) => isObject(data) && isObject(node),
  onNodeCopy: str => isString(str),
  contextmenu: arg => isObject(arg),
  onNodeFocus: data => isObject(data),
  opened: () => true,
  closed: () => true,
  'update:modelValue': value => typeof value === 'boolean'
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/contextmenu/src/contextmenu.vue?vue&type=script&lang=ts



/* harmony default export */ var contextmenuvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'Contextmenu',
  props: contextmenuProps,
  emits: contextmenuEmits,

  setup(props, ctx) {
    const inputRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const copyText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');
    const oldData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({});
    const contextmenu = useContextmenu(props, ctx, {
      inputRef,
      eleRef
    });
    return {
      eleRef,
      inputRef,
      copyText,
      oldData,
      ...contextmenu
    };
  }

}));
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue





const contextmenu_exports_ = /*#__PURE__*/exportHelper_default()(contextmenuvue_type_script_lang_ts, [['render',contextmenuvue_type_template_id_c9139626_ts_true_render]])

/* harmony default export */ var src_contextmenu = (contextmenu_exports_);
// CONCATENATED MODULE: ./src/components/contextmenu/index.ts

/* harmony default export */ var components_contextmenu = (src_contextmenu);
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.ts


const menus = [{
  name: '复制文本',
  command: 'copy'
}, {
  name: '新增节点',
  command: 'add'
}, {
  name: '编辑节点',
  command: 'edit'
}, {
  name: '删除节点',
  command: 'delete'
}];
const treeProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType(Object),
    default: () => ({
      id: 'id',
      pid: 'pid',
      label: 'label',
      expand: 'expand',
      children: 'children'
    })
  },
  toolBar: {
    type: [Object, Boolean],
    default: () => ({
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    })
  },
  disabled: {
    // 是否禁用编辑
    type: Boolean,
    default: false
  },
  scalable: {
    // 是否可缩放
    type: Boolean,
    default: true
  },
  draggable: {
    // 是否可拖拽移动位置
    type: Boolean,
    default: true
  },
  draggableOnNode: {
    // 是否可拖拽节点移动位置
    type: Boolean,
    default: false
  },
  nodeDraggable: {
    // 节点是否可拖拽
    type: Boolean,
    default: true
  },
  cloneNodeDrag: {
    // 拷贝并拖拽节点
    type: Boolean,
    default: true
  },
  onlyOneNode: {
    // 是否仅拖动当前节点
    type: Boolean,
    default: true
  },
  clickDelay: {
    // 是否仅拖动当前节点
    type: Number,
    default: 260
  },
  defaultExpandLevel: Number,
  nodeDragStart: Function,
  nodeDraging: Function,
  beforeDragEnd: Function,
  nodeDragEnd: Function,
  horizontal: Boolean,
  selectedKey: {
    type: [Array, String, Number]
  },
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  },
  selectedClassName: {
    type: [Function, String]
  },
  defineMenus: {
    type: definePropType([Array, Function]),

    default() {
      return menus;
    }

  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  filterNodeMethod: Function
});
const treeEmits = {
  'on-drag': ({
    x,
    y
  }) => isNumber(x) && isNumber(y),
  'on-drag-stop': ({
    x,
    y
  }) => isNumber(x) && isNumber(y),
  'on-restore': () => true,
  'on-zoom': val => isNumber(val),
  'on-expand': (e, data, node) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-expand-all': bool => typeof bool === 'boolean',
  'on-node-blur': (e, data, node) => e instanceof FocusEvent && isObject(node) && isObject(data),
  'on-node-click': (e, data, node) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-dblclick': (e, data, node) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-mouseenter': (e, data, node) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-node-mouseleave': (e, data, node) => e instanceof MouseEvent && isObject(node) && isObject(data),
  'on-contextmenu': data => isObject(data),
  'on-node-copy': str => isString(str),
  'on-node-delete': node => isObject(node),
  'on-node-focus': (e, data, node) => e instanceof FocusEvent && isObject(node) && isObject(data)
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// CONCATENATED MODULE: ./src/components/tree-org/src/use-tree.ts



const useTree = (props, {
  emit
}, refs) => {
  const left = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const top = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const autoDragging = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function onDrag(x, y) {
    stopClick.set(true);
    autoDragging.value = false;
    left.value = x;
    top.value = y;
    emit('on-drag', {
      x,
      y
    });
  }

  function preventOutOfBounds(x, y) {
    const zoom = refs.zoomRef.value;
    const orgchart = refs.treeRef.value;
    const maxX = zoom.clientWidth / 2;
    const maxY = zoom.clientHeight / 2;
    let minY = zoom.clientHeight - orgchart.clientHeight;
    let minX = zoom.clientWidth - orgchart.clientWidth;

    if (minY > 0) {
      minY = 0;
    }

    if (minX > 0) {
      minX = 0;
    }

    if (x > maxX) {
      left.value = maxX;
    } else if (x < minX) {
      left.value = minX;
    } else {
      left.value = x;
    }

    if (y < minY) {
      top.value = minY;
    } else if (y > maxY) {
      top.value = maxY;
    } else {
      top.value = y;
    }
  }

  function onDragStop(x, y) {
    preventOutOfBounds(x, y);
    setTimeout(() => {
      stopClick.set(false);
    }, 200);
    emit('on-drag-stop', {
      x,
      y
    });
  }

  const nodeMoving = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const parenNode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    value: {}
  });

  function nodeMouseenter(e, node) {
    if (nodeMoving.value) {
      parenNode.value = node;
    }

    emit('on-node-mouseenter', e, node.$$data, node);
    return true;
  }

  function nodeMouseleave(e, node) {
    if (nodeMoving.value) {
      parenNode.value = null;
    }

    emit('on-node-mouseleave', e, node.$$data, node);
    return true;
  }

  const contextmenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const menuX = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const menuY = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const menuData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({});
  const nodeMenus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);

  function nodeContextmenu(e, node) {
    e.stopPropagation();
    e.preventDefault();
    const {
      defineMenus
    } = props;

    if (Array.isArray(defineMenus)) {
      nodeMenus.value = defineMenus;
    } else if (typeof defineMenus === 'function') {
      nodeMenus.value = defineMenus(e, node) || [];
    }

    contextmenu.value = true;
    menuX.value = e.clientX;
    menuY.value = e.clientY;
    menuData.value = node;
  }

  const scale = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(1);

  function zoomWheel(e) {
    if (!props.scalable) return;
    e.preventDefault(); // 鼠标滚轮缩放

    if (e.deltaY < 0) {
      zoomOrgchart(0.1);
    } else {
      zoomOrgchart(-0.1);
    }

    emit('on-zoom', scale.value);
  }

  function zoomOrgchart(zoom) {
    if (!props.scalable) return;
    const value = Number((Number(scale.value) + zoom).toFixed(1));

    if (zoom > 0) {
      scale.value = Math.min(3, value);
    } else {
      scale.value = Math.max(0.3, value);
    }
  }

  function restoreOrgchart() {
    scale.value = 1;
    left.value = 0;
    top.value = 0;
    emit('on-restore');
  }

  function autoDrag(el, lf, tp) {
    // 计算偏移量，保持根节点相对页面位置不变
    autoDragging.value = true;
    const x = el.offsetLeft - lf;
    const y = el.offsetTop - tp;
    left.value -= x;
    top.value -= y;
    preventOutOfBounds(left.value, top.value);
  }

  let timer;

  function handleClick(e, node) {
    // 由于鼠标事件执行顺序
    // mouseover--> mousedown-->mouseup-->click -->mouseout
    // 拖拽时会触发node-click
    // 通过 stopClick 判断，如果执行了拖拽，则不再执行node-click
    if (stopClick.get()) return; // 取消上次延时未执行的方法

    clearTimeout(timer); // 执行延时

    timer = setTimeout(() => {
      // 此处为单击事件要执行的代码
      emit('on-node-click', e, node.$$data, node);
    }, props.clickDelay);
  }

  function handleDblclick(e, node) {
    // 取消上次延时未执行的方法
    clearTimeout(timer); // 此处为单击事件要执行的代码

    emit('on-node-dblclick', e, node.$$data, node);
  }

  function handleExpand(e, node) {
    e.stopPropagation();
    const el = document.querySelector('.is-root');

    if (el) {
      const left = el.offsetLeft;
      const top = el.offsetTop;
      node.expand = !node.expand;

      if (node.expand) {
        expandedKeys.add(node.id);
      } else if (!node.expand && node.children) {
        expandedKeys.delete(node.id);
        collapse(node.children);
      }

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        autoDrag(el, left, top);
      });
      emit('on-expand', e, node.$$data, node);
    }
  }

  function filter(value) {
    const filterNodeMethod = props.filterNodeMethod;
    if (!filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');

    const traverse = function (node) {
      const childNodes = node.children || [];
      childNodes.forEach(child => {
        child.$$hidden = !filterNodeMethod.call(child, value, child);
        traverse(child);
      });

      if (node.$$hidden && childNodes.length) {
        let unHidden = true;
        unHidden = childNodes.some(child => !child.$$hidden);
        node.$$hidden = !unHidden;
      }

      if (!value) return;
      if (!node.$$hidden && node.children) node.expand = true;
    };

    traverse(treeData.value);
  }

  const keys = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(Object.assign({
    id: 'id',
    pid: 'pid',
    label: 'label',
    expand: 'expand',
    children: 'children'
  }, props.props));

  function handleBlur(e, data, node) {
    const {
      id,
      label
    } = keys;
    const childNodes = menuData.value.children || [];

    for (let i = childNodes.length; i > 0; i--) {
      const item = childNodes[i - 1];

      if (item[id] === '' && item[label] === '') {
        childNodes.splice(i - 1, 1);
        break;
      }
    }

    emit('on-node-blur', e, data, node);
  }

  const fullscreen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function handleFullscreen(e) {
    fullscreen.value = !fullscreen.value;

    if (e === 'esc') {
      return;
    }

    if (fullscreen.value) {
      launchIntoFullscreen();
    } else {
      exitFullscreen();
    }
  }

  function launchIntoFullscreen() {
    // 全屏
    const element = refs.eleRef.value;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }

  function exitFullscreen() {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function collapse(list) {
    list.forEach(child => {
      if (child.expand) {
        child.expand = false;
        expandedKeys.delete(child.id);
      }

      child.children && collapse(child.children);
    });
  }

  const expanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function expandChange() {
    expanded.value = !expanded.value;

    if (!expanded.value) {
      expandedKeys.clear();
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        onDragStop(left.value, top.value);
      });
    }

    toggleExpand(treeData.value, expanded.value);
    emit('on-expand-all', expanded.value);
  }

  function toggleExpand(data, val) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (val) {
          expandedKeys.add(item.id);
        }

        item.expand = val;

        if (item.children) {
          toggleExpand(item.children, val);
        }
      });
    } else {
      if (val) {
        expandedKeys.add(data.id);
      }

      data.expand = val;

      if (data.children) {
        toggleExpand(data.children, val);
      }
    }
  }

  function setData(data) {
    treeData.value = initNodes(data);
  }

  const zoomStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      width: `${100 / scale.value}%`,
      height: `${100 / scale.value}%`,
      transform: `scale(${scale.value})`
    };
  });
  const zoomPercent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return `${Math.round(scale.value * 100)}%`;
  });
  const dragCancel = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return props.draggableOnNode && !props.nodeDraggable ? '' : '.tree-org-node__content:not(.is-root)>.tree-org-node__inner';
  });
  const expandTitle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点';
  });
  const fullTiltle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点';
  });
  const cloneData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({});
  const nodeargs = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    const {
      cloneNodeDrag,
      onlyOneNode,
      data
    } = props;
    return {
      drag: props.nodeDraggable,
      dragData: {
        keys,
        nodeMoving,
        stopClick: stopClick,
        parenNode,
        cloneNodeDrag,
        onlyOneNode,
        contextmenu,
        cloneData,
        data
      },
      handleStart: props.nodeDragStart,
      handleMove: props.nodeDraging,
      initNodes: initNodes,
      beforeDragEnd: props.beforeDragEnd,
      handleEnd: props.nodeDragEnd
    };
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.horizontal, () => {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      onDragStop(left.value, top.value);
    });
  });
  const expandedKeys = new Set();

  function initNodes(nodeData) {
    const {
      defaultExpandLevel = 0
    } = props;

    const data2node = (data, level) => {
      const {
        id,
        label,
        pid,
        expand,
        children
      } = keys;
      const cloneData = {};
      Object.keys(data).map(key => {
        if (['hidden', 'disabled', 'className', 'style'].includes(key)) {
          cloneData[key] = data[key];
        }
      });
      const childNodes = data[children];
      const childLevel = level + 1;
      const _expand = data[expand];
      const _id = data[id];

      if (_expand) {
        expandedKeys.add(_id);
      } else if (_expand === undefined && level < defaultExpandLevel) {
        expandedKeys.add(_id);
      }

      return { ...cloneData,
        id: _id,
        label: data[label],
        pid: data[pid],
        expand: expandedKeys.has(_id),
        children: childNodes ? childNodes.map(child => {
          return data2node(child, childLevel);
        }) : undefined,
        $$level: level,
        $$data: data,
        $$focused: data.focused || false
      };
    };

    return data2node(nodeData, 0);
  }

  const treeData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(initNodes(props.data));
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.data, (newVal, oldVal) => {
    setData(props.data);

    if (newVal !== oldVal) {
      expandedKeys.clear();
    }
  }, {
    deep: true
  });
  const tools = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    visible: true,
    data: {
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
    if (typeof props.toolBar === 'object') {
      Object.assign(tools.data, props.toolBar);
    } else if (!props.toolBar) {
      tools.visible = false;
    }
  });
  return {
    keys,
    left,
    top,
    menuX,
    menuY,
    nodeMoving,
    zoomStyle,
    tools,
    zoomPercent,
    dragCancel,
    expandTitle,
    fullTiltle,
    nodeargs,
    expanded,
    fullscreen,
    treeData,
    autoDragging,
    contextmenu,
    nodeMenus,
    menuData,
    cloneData,
    filter,
    setData,
    zoomWheel,
    onDrag,
    onDragStop,
    expandChange,
    handleFullscreen,
    zoomOrgchart,
    restoreOrgchart,
    handleExpand,
    nodeMouseenter,
    nodeMouseleave,
    nodeContextmenu,
    handleBlur,
    handleClick,
    handleDblclick
  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tree-org/src/tree.vue?vue&type=script&lang=ts









/* harmony default export */ var treevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'vue3TreeOrg',
  components: {
    Tools: components_tools,
    CloneOrg: components_clone_org,
    Draggable: components_draggable,
    Contextmenu: components_contextmenu,
    TreeOrgNode: components_node
  },
  directives: {
    nodedrag: directives_drag
  },
  props: treeProps,
  emits: treeEmits,

  setup(props, ctx) {
    const defaultSlot = !!ctx.slots.default;
    const expandSlot = !!ctx.slots.expand;
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const treeRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const zoomRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const treeOrg = useTree(props, ctx, {
      eleRef,
      treeRef,
      zoomRef
    });
    return {
      eleRef,
      treeRef,
      zoomRef,
      defaultSlot,
      expandSlot,
      ...treeOrg
    };
  }

}));
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue





const tree_exports_ = /*#__PURE__*/exportHelper_default()(treevue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var tree = (tree_exports_);
// CONCATENATED MODULE: ./src/components/tree-org/index.ts

/* istanbul ignore next */

tree.install = function (app) {
  app.component(tree.name, tree);
};

/* harmony default export */ var tree_org = (tree);
// CONCATENATED MODULE: ./src/index.ts
// 核心插件
 // 组件

 // import '@/styles/index.scss'

const components = [tree_org];

const install = function (app) {
  components.forEach(component => {
    app.component(component.name, component);
  });
  app.use(core);
};


/* harmony default export */ var src_0 = ({
  install,
  Vue3TreeOrg: tree_org
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=vue3-tree-org.umd.js.map