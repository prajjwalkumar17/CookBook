function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
// ASSET: D:\CookBook\node_modules\core-js\internals\add-to-unscopables.js
var $f9cb2bc4475c56ab01b19a42566461b$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\well-known-symbol.js
var $b53a5b6a8f34b6cba070624bf2a48849$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\global.js
var $b2dfbcdc0cb248234bdeab56988638b1$exports = {};

var $b2dfbcdc0cb248234bdeab56988638b1$var$check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$b2dfbcdc0cb248234bdeab56988638b1$exports = // eslint-disable-next-line es/no-global-this -- safe
$b2dfbcdc0cb248234bdeab56988638b1$var$check(typeof globalThis == 'object' && globalThis) || $b2dfbcdc0cb248234bdeab56988638b1$var$check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
$b2dfbcdc0cb248234bdeab56988638b1$var$check(typeof self == 'object' && self) || $b2dfbcdc0cb248234bdeab56988638b1$var$check(typeof $parcel$global == 'object' && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

// ASSET: D:\CookBook\node_modules\core-js\internals\shared.js
var $c2e5f1808429f0e2512ef0a7c45834$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-pure.js
var $f753765fca2ce7a45b8c4480d2568$exports = {};
$f753765fca2ce7a45b8c4480d2568$exports = false;
// ASSET: D:\CookBook\node_modules\core-js\internals\shared-store.js
var $f3d0b26b5b93210fa1ebda3c105e1$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\set-global.js
var $ac41f668818336095b2c6e695156f858$exports = {};
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $ac41f668818336095b2c6e695156f858$var$defineProperty = Object.defineProperty;

$ac41f668818336095b2c6e695156f858$exports = function (key, value) {
  try {
    $ac41f668818336095b2c6e695156f858$var$defineProperty($b2dfbcdc0cb248234bdeab56988638b1$exports, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    $b2dfbcdc0cb248234bdeab56988638b1$exports[key] = value;
  }

  return value;
};

var $f3d0b26b5b93210fa1ebda3c105e1$var$SHARED = '__core-js_shared__';
var $f3d0b26b5b93210fa1ebda3c105e1$var$store = $b2dfbcdc0cb248234bdeab56988638b1$exports[$f3d0b26b5b93210fa1ebda3c105e1$var$SHARED] || $ac41f668818336095b2c6e695156f858$exports($f3d0b26b5b93210fa1ebda3c105e1$var$SHARED, {});
$f3d0b26b5b93210fa1ebda3c105e1$exports = $f3d0b26b5b93210fa1ebda3c105e1$var$store;
($c2e5f1808429f0e2512ef0a7c45834$exports = function (key, value) {
  return $f3d0b26b5b93210fa1ebda3c105e1$exports[key] || ($f3d0b26b5b93210fa1ebda3c105e1$exports[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: $f753765fca2ce7a45b8c4480d2568$exports ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
// ASSET: D:\CookBook\node_modules\core-js\internals\has-own-property.js
var $c70f1f739ae81b1578231e191e1f0$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\function-uncurry-this.js
var $fc9b83eb643c78fabc3eaedec34ef851$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\function-bind-native.js
var $a7743ac9f6aa0f8bfe0b9f6357a$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\fails.js
var $aef132f3eccbd652122c346f72f29314$exports = {};

$aef132f3eccbd652122c346f72f29314$exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

$a7743ac9f6aa0f8bfe0b9f6357a$exports = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});
var $fc9b83eb643c78fabc3eaedec34ef851$var$FunctionPrototype = Function.prototype;
var $fc9b83eb643c78fabc3eaedec34ef851$var$bind = $fc9b83eb643c78fabc3eaedec34ef851$var$FunctionPrototype.bind;
var $fc9b83eb643c78fabc3eaedec34ef851$var$call = $fc9b83eb643c78fabc3eaedec34ef851$var$FunctionPrototype.call;
var $fc9b83eb643c78fabc3eaedec34ef851$var$uncurryThis = $a7743ac9f6aa0f8bfe0b9f6357a$exports && $fc9b83eb643c78fabc3eaedec34ef851$var$bind.bind($fc9b83eb643c78fabc3eaedec34ef851$var$call, $fc9b83eb643c78fabc3eaedec34ef851$var$call);
$fc9b83eb643c78fabc3eaedec34ef851$exports = $a7743ac9f6aa0f8bfe0b9f6357a$exports ? function (fn) {
  return fn && $fc9b83eb643c78fabc3eaedec34ef851$var$uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return $fc9b83eb643c78fabc3eaedec34ef851$var$call.apply(fn, arguments);
  };
};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-object.js
var $e169c382b25155e03c3ba184e00d2a$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\require-object-coercible.js
var $a05d6244df8e05ad187ac5fd4875349b$exports = {};
var $a05d6244df8e05ad187ac5fd4875349b$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$a05d6244df8e05ad187ac5fd4875349b$exports = function (it) {
  if (it == undefined) throw $a05d6244df8e05ad187ac5fd4875349b$var$TypeError("Can't call method on " + it);
  return it;
};

var $e169c382b25155e03c3ba184e00d2a$var$Object = $b2dfbcdc0cb248234bdeab56988638b1$exports.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$e169c382b25155e03c3ba184e00d2a$exports = function (argument) {
  return $e169c382b25155e03c3ba184e00d2a$var$Object($a05d6244df8e05ad187ac5fd4875349b$exports(argument));
};

var $c70f1f739ae81b1578231e191e1f0$var$hasOwnProperty = $fc9b83eb643c78fabc3eaedec34ef851$exports({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
$c70f1f739ae81b1578231e191e1f0$exports = Object.hasOwn || function hasOwn(it, key) {
  return $c70f1f739ae81b1578231e191e1f0$var$hasOwnProperty($e169c382b25155e03c3ba184e00d2a$exports(it), key);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\uid.js
var $cfe1c1d3ee1a29ed7070cc61d3b69$exports = {};
var $cfe1c1d3ee1a29ed7070cc61d3b69$var$id = 0;
var $cfe1c1d3ee1a29ed7070cc61d3b69$var$postfix = Math.random();
var $cfe1c1d3ee1a29ed7070cc61d3b69$var$toString = $fc9b83eb643c78fabc3eaedec34ef851$exports(1.0.toString);

$cfe1c1d3ee1a29ed7070cc61d3b69$exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + $cfe1c1d3ee1a29ed7070cc61d3b69$var$toString(++$cfe1c1d3ee1a29ed7070cc61d3b69$var$id + $cfe1c1d3ee1a29ed7070cc61d3b69$var$postfix, 36);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\native-symbol.js
var $f1adc5705becf70cbaa285c22586$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-v8-version.js
var $be02266105a927ec6d51a5388524b8$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-user-agent.js
var $b912fd243e61f4d4be77ca482e261e8$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\get-built-in.js
var $b8fac1a4cb5c01e484df4a2cc7a2e76$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-callable.js
var $e88cf51f13e10e78d33d3e4b6f3045e6$exports = {};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$e88cf51f13e10e78d33d3e4b6f3045e6$exports = function (argument) {
  return typeof argument == 'function';
};

var $b8fac1a4cb5c01e484df4a2cc7a2e76$var$aFunction = function (argument) {
  return $e88cf51f13e10e78d33d3e4b6f3045e6$exports(argument) ? argument : undefined;
};

$b8fac1a4cb5c01e484df4a2cc7a2e76$exports = function (namespace, method) {
  return arguments.length < 2 ? $b8fac1a4cb5c01e484df4a2cc7a2e76$var$aFunction($b2dfbcdc0cb248234bdeab56988638b1$exports[namespace]) : $b2dfbcdc0cb248234bdeab56988638b1$exports[namespace] && $b2dfbcdc0cb248234bdeab56988638b1$exports[namespace][method];
};

$b912fd243e61f4d4be77ca482e261e8$exports = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('navigator', 'userAgent') || '';
var $be02266105a927ec6d51a5388524b8$var$process = $b2dfbcdc0cb248234bdeab56988638b1$exports.process;
var $be02266105a927ec6d51a5388524b8$var$Deno = $b2dfbcdc0cb248234bdeab56988638b1$exports.Deno;
var $be02266105a927ec6d51a5388524b8$var$versions = $be02266105a927ec6d51a5388524b8$var$process && $be02266105a927ec6d51a5388524b8$var$process.versions || $be02266105a927ec6d51a5388524b8$var$Deno && $be02266105a927ec6d51a5388524b8$var$Deno.version;
var $be02266105a927ec6d51a5388524b8$var$v8 = $be02266105a927ec6d51a5388524b8$var$versions && $be02266105a927ec6d51a5388524b8$var$versions.v8;
var $be02266105a927ec6d51a5388524b8$var$match, $be02266105a927ec6d51a5388524b8$var$version;

if ($be02266105a927ec6d51a5388524b8$var$v8) {
  $be02266105a927ec6d51a5388524b8$var$match = $be02266105a927ec6d51a5388524b8$var$v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  $be02266105a927ec6d51a5388524b8$var$version = $be02266105a927ec6d51a5388524b8$var$match[0] > 0 && $be02266105a927ec6d51a5388524b8$var$match[0] < 4 ? 1 : +($be02266105a927ec6d51a5388524b8$var$match[0] + $be02266105a927ec6d51a5388524b8$var$match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$be02266105a927ec6d51a5388524b8$var$version && $b912fd243e61f4d4be77ca482e261e8$exports) {
  $be02266105a927ec6d51a5388524b8$var$match = $b912fd243e61f4d4be77ca482e261e8$exports.match(/Edge\/(\d+)/);

  if (!$be02266105a927ec6d51a5388524b8$var$match || $be02266105a927ec6d51a5388524b8$var$match[1] >= 74) {
    $be02266105a927ec6d51a5388524b8$var$match = $b912fd243e61f4d4be77ca482e261e8$exports.match(/Chrome\/(\d+)/);
    if ($be02266105a927ec6d51a5388524b8$var$match) $be02266105a927ec6d51a5388524b8$var$version = +$be02266105a927ec6d51a5388524b8$var$match[1];
  }
}

$be02266105a927ec6d51a5388524b8$exports = $be02266105a927ec6d51a5388524b8$var$version;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
$f1adc5705becf70cbaa285c22586$exports = !!Object.getOwnPropertySymbols && !$aef132f3eccbd652122c346f72f29314$exports(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && $be02266105a927ec6d51a5388524b8$exports && $be02266105a927ec6d51a5388524b8$exports < 41;
});
// ASSET: D:\CookBook\node_modules\core-js\internals\use-symbol-as-uid.js
var $e18aa8c39bf87c36c7e199$exports = {};
$e18aa8c39bf87c36c7e199$exports = $f1adc5705becf70cbaa285c22586$exports && !Symbol.sham && typeof Symbol.iterator == 'symbol';
var $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore = $c2e5f1808429f0e2512ef0a7c45834$exports('wks');
var $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol = $b2dfbcdc0cb248234bdeab56988638b1$exports.Symbol;
var $b53a5b6a8f34b6cba070624bf2a48849$var$symbolFor = $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol && $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol['for'];
var $b53a5b6a8f34b6cba070624bf2a48849$var$createWellKnownSymbol = $e18aa8c39bf87c36c7e199$exports ? $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol : $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol && $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol.withoutSetter || $cfe1c1d3ee1a29ed7070cc61d3b69$exports;

$b53a5b6a8f34b6cba070624bf2a48849$exports = function (name) {
  if (!$c70f1f739ae81b1578231e191e1f0$exports($b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore, name) || !($f1adc5705becf70cbaa285c22586$exports || typeof $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if ($f1adc5705becf70cbaa285c22586$exports && $c70f1f739ae81b1578231e191e1f0$exports($b53a5b6a8f34b6cba070624bf2a48849$var$Symbol, name)) {
      $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore[name] = $b53a5b6a8f34b6cba070624bf2a48849$var$Symbol[name];
    } else if ($e18aa8c39bf87c36c7e199$exports && $b53a5b6a8f34b6cba070624bf2a48849$var$symbolFor) {
      $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore[name] = $b53a5b6a8f34b6cba070624bf2a48849$var$symbolFor(description);
    } else {
      $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore[name] = $b53a5b6a8f34b6cba070624bf2a48849$var$createWellKnownSymbol(description);
    }
  }

  return $b53a5b6a8f34b6cba070624bf2a48849$var$WellKnownSymbolsStore[name];
};

// ASSET: D:\CookBook\node_modules\core-js\internals\object-create.js
var $ef12a9a97d55c7d234596883bab0e54c$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\an-object.js
var $edafc3d62cbbbbb38cbb496d223bffe2$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-object.js
var $fc6d2e39baa3b220b427$exports = {};

$fc6d2e39baa3b220b427$exports = function (it) {
  return typeof it == 'object' ? it !== null : $e88cf51f13e10e78d33d3e4b6f3045e6$exports(it);
};

var $edafc3d62cbbbbb38cbb496d223bffe2$var$String = $b2dfbcdc0cb248234bdeab56988638b1$exports.String;
var $edafc3d62cbbbbb38cbb496d223bffe2$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `Assert: Type(argument) is Object`

// `Assert: Type(argument) is Object`
$edafc3d62cbbbbb38cbb496d223bffe2$exports = function (argument) {
  if ($fc6d2e39baa3b220b427$exports(argument)) return argument;
  throw $edafc3d62cbbbbb38cbb496d223bffe2$var$TypeError($edafc3d62cbbbbb38cbb496d223bffe2$var$String(argument) + ' is not an object');
};

// ASSET: D:\CookBook\node_modules\core-js\internals\descriptors.js
var $e00ad6be039fed7616edf60d1993dd68$exports = {};
// Detect IE8's incomplete defineProperty implementation
$e00ad6be039fed7616edf60d1993dd68$exports = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});
// ASSET: D:\CookBook\node_modules\core-js\internals\v8-prototype-define-bug.js
var $e2705fcb8708be872b9734af10340cc2$exports = {};
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$e2705fcb8708be872b9734af10340cc2$exports = $e00ad6be039fed7616edf60d1993dd68$exports && $aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});
// ASSET: D:\CookBook\node_modules\core-js\internals\ie8-dom-define.js
var $cb658f625d48faef67884c39164cb64e$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\document-create-element.js
var $c9b68b6f116d807b2e4e0f715be2a10$exports = {};
var $c9b68b6f116d807b2e4e0f715be2a10$var$document = $b2dfbcdc0cb248234bdeab56988638b1$exports.document; // typeof document.createElement is 'object' in old IE

// typeof document.createElement is 'object' in old IE
var $c9b68b6f116d807b2e4e0f715be2a10$var$EXISTS = $fc6d2e39baa3b220b427$exports($c9b68b6f116d807b2e4e0f715be2a10$var$document) && $fc6d2e39baa3b220b427$exports($c9b68b6f116d807b2e4e0f715be2a10$var$document.createElement);

$c9b68b6f116d807b2e4e0f715be2a10$exports = function (it) {
  return $c9b68b6f116d807b2e4e0f715be2a10$var$EXISTS ? $c9b68b6f116d807b2e4e0f715be2a10$var$document.createElement(it) : {};
};

// Thanks to IE8 for its funny defineProperty
$cb658f625d48faef67884c39164cb64e$exports = !$e00ad6be039fed7616edf60d1993dd68$exports && !$aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty($c9b68b6f116d807b2e4e0f715be2a10$exports('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});
// ASSET: D:\CookBook\node_modules\core-js\internals\to-property-key.js
var $b9250950a967cd410104f9dc0c16279$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-primitive.js
var $faebf17dc782313bbcda9bf7a16458b$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\function-call.js
var $dcf1edbae4500c7eefdab278edf50a$exports = {};
var $dcf1edbae4500c7eefdab278edf50a$var$call = Function.prototype.call;
$dcf1edbae4500c7eefdab278edf50a$exports = $a7743ac9f6aa0f8bfe0b9f6357a$exports ? $dcf1edbae4500c7eefdab278edf50a$var$call.bind($dcf1edbae4500c7eefdab278edf50a$var$call) : function () {
  return $dcf1edbae4500c7eefdab278edf50a$var$call.apply($dcf1edbae4500c7eefdab278edf50a$var$call, arguments);
};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-symbol.js
var $bf4b54ddcff738e5ff6fdd35467$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\object-is-prototype-of.js
var $c238b8ff962347e6537760e1732fb6$exports = {};
$c238b8ff962347e6537760e1732fb6$exports = $fc9b83eb643c78fabc3eaedec34ef851$exports({}.isPrototypeOf);
var $bf4b54ddcff738e5ff6fdd35467$var$Object = $b2dfbcdc0cb248234bdeab56988638b1$exports.Object;
$bf4b54ddcff738e5ff6fdd35467$exports = $e18aa8c39bf87c36c7e199$exports ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Symbol');
  return $e88cf51f13e10e78d33d3e4b6f3045e6$exports($Symbol) && $c238b8ff962347e6537760e1732fb6$exports($Symbol.prototype, $bf4b54ddcff738e5ff6fdd35467$var$Object(it));
};
// ASSET: D:\CookBook\node_modules\core-js\internals\get-method.js
var $a6d7559694e98dabe18236025$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\a-callable.js
var $c30363469204ca0751b8c2e548352e1$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\try-to-string.js
var $be41ffb030b7c8b0c84eb20cb07d39e$exports = {};
var $be41ffb030b7c8b0c84eb20cb07d39e$var$String = $b2dfbcdc0cb248234bdeab56988638b1$exports.String;

$be41ffb030b7c8b0c84eb20cb07d39e$exports = function (argument) {
  try {
    return $be41ffb030b7c8b0c84eb20cb07d39e$var$String(argument);
  } catch (error) {
    return 'Object';
  }
};

var $c30363469204ca0751b8c2e548352e1$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `Assert: IsCallable(argument) is true`

// `Assert: IsCallable(argument) is true`
$c30363469204ca0751b8c2e548352e1$exports = function (argument) {
  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(argument)) return argument;
  throw $c30363469204ca0751b8c2e548352e1$var$TypeError($be41ffb030b7c8b0c84eb20cb07d39e$exports(argument) + ' is not a function');
};

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$a6d7559694e98dabe18236025$exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : $c30363469204ca0751b8c2e548352e1$exports(func);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\ordinary-to-primitive.js
var $dcbb4a4571ea19b76f1ab2dc4df3e4b$exports = {};
var $dcbb4a4571ea19b76f1ab2dc4df3e4b$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$dcbb4a4571ea19b76f1ab2dc4df3e4b$exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && $e88cf51f13e10e78d33d3e4b6f3045e6$exports(fn = input.toString) && !$fc6d2e39baa3b220b427$exports(val = $dcf1edbae4500c7eefdab278edf50a$exports(fn, input))) return val;
  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(fn = input.valueOf) && !$fc6d2e39baa3b220b427$exports(val = $dcf1edbae4500c7eefdab278edf50a$exports(fn, input))) return val;
  if (pref !== 'string' && $e88cf51f13e10e78d33d3e4b6f3045e6$exports(fn = input.toString) && !$fc6d2e39baa3b220b427$exports(val = $dcf1edbae4500c7eefdab278edf50a$exports(fn, input))) return val;
  throw $dcbb4a4571ea19b76f1ab2dc4df3e4b$var$TypeError("Can't convert object to primitive value");
};

var $faebf17dc782313bbcda9bf7a16458b$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;
var $faebf17dc782313bbcda9bf7a16458b$var$TO_PRIMITIVE = $b53a5b6a8f34b6cba070624bf2a48849$exports('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$faebf17dc782313bbcda9bf7a16458b$exports = function (input, pref) {
  if (!$fc6d2e39baa3b220b427$exports(input) || $bf4b54ddcff738e5ff6fdd35467$exports(input)) return input;
  var exoticToPrim = $a6d7559694e98dabe18236025$exports(input, $faebf17dc782313bbcda9bf7a16458b$var$TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = $dcf1edbae4500c7eefdab278edf50a$exports(exoticToPrim, input, pref);
    if (!$fc6d2e39baa3b220b427$exports(result) || $bf4b54ddcff738e5ff6fdd35467$exports(result)) return result;
    throw $faebf17dc782313bbcda9bf7a16458b$var$TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return $dcbb4a4571ea19b76f1ab2dc4df3e4b$exports(input, pref);
};

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$b9250950a967cd410104f9dc0c16279$exports = function (argument) {
  var key = $faebf17dc782313bbcda9bf7a16458b$exports(argument, 'string');
  return $bf4b54ddcff738e5ff6fdd35467$exports(key) ? key : key + '';
};

var $ad80bdb8939ee74538b84fc75a84d27$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $ad80bdb8939ee74538b84fc75a84d27$var$$defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $ad80bdb8939ee74538b84fc75a84d27$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $ad80bdb8939ee74538b84fc75a84d27$var$ENUMERABLE = 'enumerable';
var $ad80bdb8939ee74538b84fc75a84d27$var$CONFIGURABLE = 'configurable';
var $ad80bdb8939ee74538b84fc75a84d27$var$WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

var $ad80bdb8939ee74538b84fc75a84d27$export$f = $e00ad6be039fed7616edf60d1993dd68$exports ? $e2705fcb8708be872b9734af10340cc2$exports ? function defineProperty(O, P, Attributes) {
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(O);
  P = $b9250950a967cd410104f9dc0c16279$exports(P);
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && $ad80bdb8939ee74538b84fc75a84d27$var$WRITABLE in Attributes && !Attributes[$ad80bdb8939ee74538b84fc75a84d27$var$WRITABLE]) {
    var current = $ad80bdb8939ee74538b84fc75a84d27$var$$getOwnPropertyDescriptor(O, P);

    if (current && current[$ad80bdb8939ee74538b84fc75a84d27$var$WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: $ad80bdb8939ee74538b84fc75a84d27$var$CONFIGURABLE in Attributes ? Attributes[$ad80bdb8939ee74538b84fc75a84d27$var$CONFIGURABLE] : current[$ad80bdb8939ee74538b84fc75a84d27$var$CONFIGURABLE],
        enumerable: $ad80bdb8939ee74538b84fc75a84d27$var$ENUMERABLE in Attributes ? Attributes[$ad80bdb8939ee74538b84fc75a84d27$var$ENUMERABLE] : current[$ad80bdb8939ee74538b84fc75a84d27$var$ENUMERABLE],
        writable: false
      };
    }
  }

  return $ad80bdb8939ee74538b84fc75a84d27$var$$defineProperty(O, P, Attributes);
} : $ad80bdb8939ee74538b84fc75a84d27$var$$defineProperty : function defineProperty(O, P, Attributes) {
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(O);
  P = $b9250950a967cd410104f9dc0c16279$exports(P);
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(Attributes);
  if ($cb658f625d48faef67884c39164cb64e$exports) try {
    return $ad80bdb8939ee74538b84fc75a84d27$var$$defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw $ad80bdb8939ee74538b84fc75a84d27$var$TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-indexed-object.js
var $f0977e1e57e5997d97203bdda40243$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\indexed-object.js
var $c2caaa0693f95ecb3268f3380cb$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\classof-raw.js
var $ff3cc50e74f09845d3cde3362e73cc90$exports = {};
var $ff3cc50e74f09845d3cde3362e73cc90$var$toString = $fc9b83eb643c78fabc3eaedec34ef851$exports({}.toString);
var $ff3cc50e74f09845d3cde3362e73cc90$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);

$ff3cc50e74f09845d3cde3362e73cc90$exports = function (it) {
  return $ff3cc50e74f09845d3cde3362e73cc90$var$stringSlice($ff3cc50e74f09845d3cde3362e73cc90$var$toString(it), 8, -1);
};

var $c2caaa0693f95ecb3268f3380cb$var$Object = $b2dfbcdc0cb248234bdeab56988638b1$exports.Object;
var $c2caaa0693f95ecb3268f3380cb$var$split = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

// fallback for non-array-like ES3 and non-enumerable old V8 strings
$c2caaa0693f95ecb3268f3380cb$exports = $aef132f3eccbd652122c346f72f29314$exports(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$c2caaa0693f95ecb3268f3380cb$var$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return $ff3cc50e74f09845d3cde3362e73cc90$exports(it) == 'String' ? $c2caaa0693f95ecb3268f3380cb$var$split(it, '') : $c2caaa0693f95ecb3268f3380cb$var$Object(it);
} : $c2caaa0693f95ecb3268f3380cb$var$Object;

$f0977e1e57e5997d97203bdda40243$exports = function (it) {
  return $c2caaa0693f95ecb3268f3380cb$exports($a05d6244df8e05ad187ac5fd4875349b$exports(it));
};

// ASSET: D:\CookBook\node_modules\core-js\internals\object-keys.js
var $d4855818cad3192457dbef73b232e41$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\object-keys-internal.js
var $aa4c670316347ca504692996aa26176$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\array-includes.js
var $d7cd59eba689385ceafd44ea17e6e8a0$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-absolute-index.js
var $b3eb09d4944f5f5f3c8197d274fa8cd$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-integer-or-infinity.js
var $bf8ad804a45a7758e2af68c24813726$exports = {};
var $bf8ad804a45a7758e2af68c24813726$var$ceil = Math.ceil;
var $bf8ad804a45a7758e2af68c24813726$var$floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$bf8ad804a45a7758e2af68c24813726$exports = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? $bf8ad804a45a7758e2af68c24813726$var$floor : $bf8ad804a45a7758e2af68c24813726$var$ceil)(number);
};

var $b3eb09d4944f5f5f3c8197d274fa8cd$var$max = Math.max;
var $b3eb09d4944f5f5f3c8197d274fa8cd$var$min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$b3eb09d4944f5f5f3c8197d274fa8cd$exports = function (index, length) {
  var integer = $bf8ad804a45a7758e2af68c24813726$exports(index);
  return integer < 0 ? $b3eb09d4944f5f5f3c8197d274fa8cd$var$max(integer + length, 0) : $b3eb09d4944f5f5f3c8197d274fa8cd$var$min(integer, length);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\length-of-array-like.js
var $be068fa7c9e9f9d8f456b093e8bd58e$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-length.js
var $e7bef2d1f081c78aabb47752ab106597$exports = {};
var $e7bef2d1f081c78aabb47752ab106597$var$min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$e7bef2d1f081c78aabb47752ab106597$exports = function (argument) {
  return argument > 0 ? $e7bef2d1f081c78aabb47752ab106597$var$min($bf8ad804a45a7758e2af68c24813726$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$be068fa7c9e9f9d8f456b093e8bd58e$exports = function (obj) {
  return $e7bef2d1f081c78aabb47752ab106597$exports(obj.length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var $d7cd59eba689385ceafd44ea17e6e8a0$var$createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = $f0977e1e57e5997d97203bdda40243$exports($this);
    var length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(O);
    var index = $b3eb09d4944f5f5f3c8197d274fa8cd$exports(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

$d7cd59eba689385ceafd44ea17e6e8a0$exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: $d7cd59eba689385ceafd44ea17e6e8a0$var$createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: $d7cd59eba689385ceafd44ea17e6e8a0$var$createMethod(false)
};
var $aa4c670316347ca504692996aa26176$var$indexOf = $d7cd59eba689385ceafd44ea17e6e8a0$exports.indexOf;
// ASSET: D:\CookBook\node_modules\core-js\internals\hidden-keys.js
var $bbd7d9b7276890abbf3ed0b7f1b5844$exports = {};
$bbd7d9b7276890abbf3ed0b7f1b5844$exports = {};
var $aa4c670316347ca504692996aa26176$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push);

$aa4c670316347ca504692996aa26176$exports = function (object, names) {
  var O = $f0977e1e57e5997d97203bdda40243$exports(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !$c70f1f739ae81b1578231e191e1f0$exports($bbd7d9b7276890abbf3ed0b7f1b5844$exports, key) && $c70f1f739ae81b1578231e191e1f0$exports(O, key) && $aa4c670316347ca504692996aa26176$var$push(result, key); // Don't enum bug & hidden keys


  // Don't enum bug & hidden keys
  while (names.length > i) if ($c70f1f739ae81b1578231e191e1f0$exports(O, key = names[i++])) {
    ~$aa4c670316347ca504692996aa26176$var$indexOf(result, key) || $aa4c670316347ca504692996aa26176$var$push(result, key);
  }

  return result;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\enum-bug-keys.js
var $ae15629d448bfdebfa6036c1d4b6a053$exports = {};
// IE8- don't enum bug keys
$ae15629d448bfdebfa6036c1d4b6a053$exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
$d4855818cad3192457dbef73b232e41$exports = Object.keys || function keys(O) {
  return $aa4c670316347ca504692996aa26176$exports(O, $ae15629d448bfdebfa6036c1d4b6a053$exports);
};

var $bec40dd79fa8d12cf11d4eb132f2d5b$export$f = $e00ad6be039fed7616edf60d1993dd68$exports && !$e2705fcb8708be872b9734af10340cc2$exports ? Object.defineProperties : function defineProperties(O, Properties) {
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(O);
  var props = $f0977e1e57e5997d97203bdda40243$exports(Properties);
  var keys = $d4855818cad3192457dbef73b232e41$exports(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) $ad80bdb8939ee74538b84fc75a84d27$export$f(O, key = keys[index++], props[key]);

  return O;
};
// ASSET: D:\CookBook\node_modules\core-js\internals\html.js
var $af66fa176871125275da6c44c658fd$exports = {};
$af66fa176871125275da6c44c658fd$exports = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('document', 'documentElement');
// ASSET: D:\CookBook\node_modules\core-js\internals\shared-key.js
var $b5ae13eacebb73589867cf6383efd43e$exports = {};
var $b5ae13eacebb73589867cf6383efd43e$var$keys = $c2e5f1808429f0e2512ef0a7c45834$exports('keys');

$b5ae13eacebb73589867cf6383efd43e$exports = function (key) {
  return $b5ae13eacebb73589867cf6383efd43e$var$keys[key] || ($b5ae13eacebb73589867cf6383efd43e$var$keys[key] = $cfe1c1d3ee1a29ed7070cc61d3b69$exports(key));
};

var $ef12a9a97d55c7d234596883bab0e54c$var$GT = '>';
var $ef12a9a97d55c7d234596883bab0e54c$var$LT = '<';
var $ef12a9a97d55c7d234596883bab0e54c$var$PROTOTYPE = 'prototype';
var $ef12a9a97d55c7d234596883bab0e54c$var$SCRIPT = 'script';
var $ef12a9a97d55c7d234596883bab0e54c$var$IE_PROTO = $b5ae13eacebb73589867cf6383efd43e$exports('IE_PROTO');

var $ef12a9a97d55c7d234596883bab0e54c$var$EmptyConstructor = function () {
  /* empty */
};

var $ef12a9a97d55c7d234596883bab0e54c$var$scriptTag = function (content) {
  return $ef12a9a97d55c7d234596883bab0e54c$var$LT + $ef12a9a97d55c7d234596883bab0e54c$var$SCRIPT + $ef12a9a97d55c7d234596883bab0e54c$var$GT + content + $ef12a9a97d55c7d234596883bab0e54c$var$LT + '/' + $ef12a9a97d55c7d234596883bab0e54c$var$SCRIPT + $ef12a9a97d55c7d234596883bab0e54c$var$GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write($ef12a9a97d55c7d234596883bab0e54c$var$scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  // avoid memory leak
  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


// Create object with fake `null` prototype: use iframe Object with cleared prototype
var $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = $c9b68b6f116d807b2e4e0f715be2a10$exports('iframe');
  var JS = 'java' + $ef12a9a97d55c7d234596883bab0e54c$var$SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  $af66fa176871125275da6c44c658fd$exports.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write($ef12a9a97d55c7d234596883bab0e54c$var$scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var $ef12a9a97d55c7d234596883bab0e54c$var$activeXDocument;

var $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObject = function () {
  try {
    $ef12a9a97d55c7d234596883bab0e54c$var$activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObject = typeof document != 'undefined' ? document.domain && $ef12a9a97d55c7d234596883bab0e54c$var$activeXDocument ? $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObjectViaActiveX($ef12a9a97d55c7d234596883bab0e54c$var$activeXDocument) // old IE
  : $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObjectViaIFrame() : $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObjectViaActiveX($ef12a9a97d55c7d234596883bab0e54c$var$activeXDocument); // WSH

  // WSH
  var length = $ae15629d448bfdebfa6036c1d4b6a053$exports.length;

  while (length--) delete $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObject[$ef12a9a97d55c7d234596883bab0e54c$var$PROTOTYPE][$ae15629d448bfdebfa6036c1d4b6a053$exports[length]];

  return $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObject();
};

$bbd7d9b7276890abbf3ed0b7f1b5844$exports[$ef12a9a97d55c7d234596883bab0e54c$var$IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$ef12a9a97d55c7d234596883bab0e54c$exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    $ef12a9a97d55c7d234596883bab0e54c$var$EmptyConstructor[$ef12a9a97d55c7d234596883bab0e54c$var$PROTOTYPE] = $edafc3d62cbbbbb38cbb496d223bffe2$exports(O);
    result = new $ef12a9a97d55c7d234596883bab0e54c$var$EmptyConstructor();
    $ef12a9a97d55c7d234596883bab0e54c$var$EmptyConstructor[$ef12a9a97d55c7d234596883bab0e54c$var$PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    // add "__proto__" for Object.getPrototypeOf polyfill
    result[$ef12a9a97d55c7d234596883bab0e54c$var$IE_PROTO] = O;
  } else result = $ef12a9a97d55c7d234596883bab0e54c$var$NullProtoObject();

  return Properties === undefined ? result : $bec40dd79fa8d12cf11d4eb132f2d5b$export$f(result, Properties);
};

var $f9cb2bc4475c56ab01b19a42566461b$var$UNSCOPABLES = $b53a5b6a8f34b6cba070624bf2a48849$exports('unscopables');
var $f9cb2bc4475c56ab01b19a42566461b$var$ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if ($f9cb2bc4475c56ab01b19a42566461b$var$ArrayPrototype[$f9cb2bc4475c56ab01b19a42566461b$var$UNSCOPABLES] == undefined) {
  $ad80bdb8939ee74538b84fc75a84d27$export$f($f9cb2bc4475c56ab01b19a42566461b$var$ArrayPrototype, $f9cb2bc4475c56ab01b19a42566461b$var$UNSCOPABLES, {
    configurable: true,
    value: $ef12a9a97d55c7d234596883bab0e54c$exports(null)
  });
} // add a key to Array.prototype[@@unscopables]


// add a key to Array.prototype[@@unscopables]
$f9cb2bc4475c56ab01b19a42566461b$exports = function (key) {
  $f9cb2bc4475c56ab01b19a42566461b$var$ArrayPrototype[$f9cb2bc4475c56ab01b19a42566461b$var$UNSCOPABLES][key] = true;
};

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$f9cb2bc4475c56ab01b19a42566461b$exports('flat');
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$f9cb2bc4475c56ab01b19a42566461b$exports('flatMap');
// ASSET: D:\CookBook\node_modules\core-js\internals\export.js
var $f09cf99f84fa9bbebf324815a05f0ad3$exports = {};
var $f8d5293c708e4ef08e2773bbb4855f$var$$propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $f8d5293c708e4ef08e2773bbb4855f$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

// Nashorn ~ JDK8 bug
var $f8d5293c708e4ef08e2773bbb4855f$var$NASHORN_BUG = $f8d5293c708e4ef08e2773bbb4855f$var$getOwnPropertyDescriptor && !$f8d5293c708e4ef08e2773bbb4855f$var$$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

var $f8d5293c708e4ef08e2773bbb4855f$export$f = $f8d5293c708e4ef08e2773bbb4855f$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = $f8d5293c708e4ef08e2773bbb4855f$var$getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $f8d5293c708e4ef08e2773bbb4855f$var$$propertyIsEnumerable;
// ASSET: D:\CookBook\node_modules\core-js\internals\create-property-descriptor.js
var $ab54931bf5075a19025488583689585$exports = {};

$ab54931bf5075a19025488583689585$exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $da043d3ed7c3b37c83995db3f7a128d$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

var $da043d3ed7c3b37c83995db3f7a128d$export$f = $e00ad6be039fed7616edf60d1993dd68$exports ? $da043d3ed7c3b37c83995db3f7a128d$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = $f0977e1e57e5997d97203bdda40243$exports(O);
  P = $b9250950a967cd410104f9dc0c16279$exports(P);
  if ($cb658f625d48faef67884c39164cb64e$exports) try {
    return $da043d3ed7c3b37c83995db3f7a128d$var$$getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if ($c70f1f739ae81b1578231e191e1f0$exports(O, P)) return $ab54931bf5075a19025488583689585$exports(!$dcf1edbae4500c7eefdab278edf50a$exports($f8d5293c708e4ef08e2773bbb4855f$export$f, O, P), O[P]);
};
var $f09cf99f84fa9bbebf324815a05f0ad3$var$getOwnPropertyDescriptor = $da043d3ed7c3b37c83995db3f7a128d$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\create-non-enumerable-property.js
var $f89e5c9fd7cf1eb7cc9$exports = {};
$f89e5c9fd7cf1eb7cc9$exports = $e00ad6be039fed7616edf60d1993dd68$exports ? function (object, key, value) {
  return $ad80bdb8939ee74538b84fc75a84d27$export$f(object, key, $ab54931bf5075a19025488583689585$exports(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
// ASSET: D:\CookBook\node_modules\core-js\internals\redefine.js
var $f6b650ac0564db3a1dfe92ff64a576d7$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\inspect-source.js
var $a978ea07562cc68485677368eebc$exports = {};
var $a978ea07562cc68485677368eebc$var$functionToString = $fc9b83eb643c78fabc3eaedec34ef851$exports(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$e88cf51f13e10e78d33d3e4b6f3045e6$exports($f3d0b26b5b93210fa1ebda3c105e1$exports.inspectSource)) {
  $f3d0b26b5b93210fa1ebda3c105e1$exports.inspectSource = function (it) {
    return $a978ea07562cc68485677368eebc$var$functionToString(it);
  };
}

$a978ea07562cc68485677368eebc$exports = $f3d0b26b5b93210fa1ebda3c105e1$exports.inspectSource;
// ASSET: D:\CookBook\node_modules\core-js\internals\internal-state.js
var $d0eec2865a2cfaac1ea7a85e0c511a46$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\native-weak-map.js
var $ef570c052a85b9c4550447075de3d9$exports = {};
var $ef570c052a85b9c4550447075de3d9$var$WeakMap = $b2dfbcdc0cb248234bdeab56988638b1$exports.WeakMap;
$ef570c052a85b9c4550447075de3d9$exports = $e88cf51f13e10e78d33d3e4b6f3045e6$exports($ef570c052a85b9c4550447075de3d9$var$WeakMap) && /native code/.test($a978ea07562cc68485677368eebc$exports($ef570c052a85b9c4550447075de3d9$var$WeakMap));
var $d0eec2865a2cfaac1ea7a85e0c511a46$var$OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var $d0eec2865a2cfaac1ea7a85e0c511a46$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;
var $d0eec2865a2cfaac1ea7a85e0c511a46$var$WeakMap = $b2dfbcdc0cb248234bdeab56988638b1$exports.WeakMap;
var $d0eec2865a2cfaac1ea7a85e0c511a46$var$set, $d0eec2865a2cfaac1ea7a85e0c511a46$var$get, $d0eec2865a2cfaac1ea7a85e0c511a46$var$has;

var $d0eec2865a2cfaac1ea7a85e0c511a46$var$enforce = function (it) {
  return $d0eec2865a2cfaac1ea7a85e0c511a46$var$has(it) ? $d0eec2865a2cfaac1ea7a85e0c511a46$var$get(it) : $d0eec2865a2cfaac1ea7a85e0c511a46$var$set(it, {});
};

var $d0eec2865a2cfaac1ea7a85e0c511a46$var$getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!$fc6d2e39baa3b220b427$exports(it) || (state = $d0eec2865a2cfaac1ea7a85e0c511a46$var$get(it)).type !== TYPE) {
      throw $d0eec2865a2cfaac1ea7a85e0c511a46$var$TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if ($ef570c052a85b9c4550447075de3d9$exports || $f3d0b26b5b93210fa1ebda3c105e1$exports.state) {
  var $d0eec2865a2cfaac1ea7a85e0c511a46$var$store = $f3d0b26b5b93210fa1ebda3c105e1$exports.state || ($f3d0b26b5b93210fa1ebda3c105e1$exports.state = new $d0eec2865a2cfaac1ea7a85e0c511a46$var$WeakMap());
  var $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmget = $fc9b83eb643c78fabc3eaedec34ef851$exports($d0eec2865a2cfaac1ea7a85e0c511a46$var$store.get);
  var $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmhas = $fc9b83eb643c78fabc3eaedec34ef851$exports($d0eec2865a2cfaac1ea7a85e0c511a46$var$store.has);
  var $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmset = $fc9b83eb643c78fabc3eaedec34ef851$exports($d0eec2865a2cfaac1ea7a85e0c511a46$var$store.set);

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$set = function (it, metadata) {
    if ($d0eec2865a2cfaac1ea7a85e0c511a46$var$wmhas($d0eec2865a2cfaac1ea7a85e0c511a46$var$store, it)) throw new $d0eec2865a2cfaac1ea7a85e0c511a46$var$TypeError($d0eec2865a2cfaac1ea7a85e0c511a46$var$OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmset($d0eec2865a2cfaac1ea7a85e0c511a46$var$store, it, metadata);
    return metadata;
  };

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$get = function (it) {
    return $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmget($d0eec2865a2cfaac1ea7a85e0c511a46$var$store, it) || {};
  };

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$has = function (it) {
    return $d0eec2865a2cfaac1ea7a85e0c511a46$var$wmhas($d0eec2865a2cfaac1ea7a85e0c511a46$var$store, it);
  };
} else {
  var $d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE = $b5ae13eacebb73589867cf6383efd43e$exports('state');
  $bbd7d9b7276890abbf3ed0b7f1b5844$exports[$d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE] = true;

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$set = function (it, metadata) {
    if ($c70f1f739ae81b1578231e191e1f0$exports(it, $d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE)) throw new $d0eec2865a2cfaac1ea7a85e0c511a46$var$TypeError($d0eec2865a2cfaac1ea7a85e0c511a46$var$OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    $f89e5c9fd7cf1eb7cc9$exports(it, $d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE, metadata);
    return metadata;
  };

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$get = function (it) {
    return $c70f1f739ae81b1578231e191e1f0$exports(it, $d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE) ? it[$d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE] : {};
  };

  $d0eec2865a2cfaac1ea7a85e0c511a46$var$has = function (it) {
    return $c70f1f739ae81b1578231e191e1f0$exports(it, $d0eec2865a2cfaac1ea7a85e0c511a46$var$STATE);
  };
}

$d0eec2865a2cfaac1ea7a85e0c511a46$exports = {
  set: $d0eec2865a2cfaac1ea7a85e0c511a46$var$set,
  get: $d0eec2865a2cfaac1ea7a85e0c511a46$var$get,
  has: $d0eec2865a2cfaac1ea7a85e0c511a46$var$has,
  enforce: $d0eec2865a2cfaac1ea7a85e0c511a46$var$enforce,
  getterFor: $d0eec2865a2cfaac1ea7a85e0c511a46$var$getterFor
};
// ASSET: D:\CookBook\node_modules\core-js\internals\function-name.js
var $efa56d6f38b18a3e8804095e0a0bd17$exports = {};
var $efa56d6f38b18a3e8804095e0a0bd17$var$FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $efa56d6f38b18a3e8804095e0a0bd17$var$getDescriptor = $e00ad6be039fed7616edf60d1993dd68$exports && Object.getOwnPropertyDescriptor;
var $efa56d6f38b18a3e8804095e0a0bd17$var$EXISTS = $c70f1f739ae81b1578231e191e1f0$exports($efa56d6f38b18a3e8804095e0a0bd17$var$FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

// additional protection from minified / mangled / dropped function names
var $efa56d6f38b18a3e8804095e0a0bd17$var$PROPER = $efa56d6f38b18a3e8804095e0a0bd17$var$EXISTS && function something() {
  /* empty */
}.name === 'something';

var $efa56d6f38b18a3e8804095e0a0bd17$var$CONFIGURABLE = $efa56d6f38b18a3e8804095e0a0bd17$var$EXISTS && (!$e00ad6be039fed7616edf60d1993dd68$exports || $e00ad6be039fed7616edf60d1993dd68$exports && $efa56d6f38b18a3e8804095e0a0bd17$var$getDescriptor($efa56d6f38b18a3e8804095e0a0bd17$var$FunctionPrototype, 'name').configurable);
$efa56d6f38b18a3e8804095e0a0bd17$exports = {
  EXISTS: $efa56d6f38b18a3e8804095e0a0bd17$var$EXISTS,
  PROPER: $efa56d6f38b18a3e8804095e0a0bd17$var$PROPER,
  CONFIGURABLE: $efa56d6f38b18a3e8804095e0a0bd17$var$CONFIGURABLE
};
var $f6b650ac0564db3a1dfe92ff64a576d7$var$CONFIGURABLE_FUNCTION_NAME = $efa56d6f38b18a3e8804095e0a0bd17$exports.CONFIGURABLE;
var $f6b650ac0564db3a1dfe92ff64a576d7$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.get;
var $f6b650ac0564db3a1dfe92ff64a576d7$var$enforceInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.enforce;
var $f6b650ac0564db3a1dfe92ff64a576d7$var$TEMPLATE = String(String).split('String');
($f6b650ac0564db3a1dfe92ff64a576d7$exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!$c70f1f739ae81b1578231e191e1f0$exports(value, 'name') || $f6b650ac0564db3a1dfe92ff64a576d7$var$CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      $f89e5c9fd7cf1eb7cc9$exports(value, 'name', name);
    }

    state = $f6b650ac0564db3a1dfe92ff64a576d7$var$enforceInternalState(value);

    if (!state.source) {
      state.source = $f6b650ac0564db3a1dfe92ff64a576d7$var$TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === $b2dfbcdc0cb248234bdeab56988638b1$exports) {
    if (simple) O[key] = value;else $ac41f668818336095b2c6e695156f858$exports(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else $f89e5c9fd7cf1eb7cc9$exports(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return $e88cf51f13e10e78d33d3e4b6f3045e6$exports(this) && $f6b650ac0564db3a1dfe92ff64a576d7$var$getInternalState(this).source || $a978ea07562cc68485677368eebc$exports(this);
});
// ASSET: D:\CookBook\node_modules\core-js\internals\copy-constructor-properties.js
var $cfde19457ced60d9b233fb1d0f71dc82$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\own-keys.js
var $d707a0557e23ff4c431585ef8403a207$exports = {};
var $fbfa8391e70d76de6161a305a015d0d1$var$hiddenKeys = $ae15629d448bfdebfa6036c1d4b6a053$exports.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

var $fbfa8391e70d76de6161a305a015d0d1$export$f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $aa4c670316347ca504692996aa26176$exports(O, $fbfa8391e70d76de6161a305a015d0d1$var$hiddenKeys);
};

var $ff61e696947cb3857363764f23a62f$export$f = Object.getOwnPropertySymbols;
var $d707a0557e23ff4c431585ef8403a207$var$concat = $fc9b83eb643c78fabc3eaedec34ef851$exports([].concat); // all object keys, includes non-enumerable and symbols

// all object keys, includes non-enumerable and symbols
$d707a0557e23ff4c431585ef8403a207$exports = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = $fbfa8391e70d76de6161a305a015d0d1$export$f($edafc3d62cbbbbb38cbb496d223bffe2$exports(it));
  var getOwnPropertySymbols = $ff61e696947cb3857363764f23a62f$export$f;
  return getOwnPropertySymbols ? $d707a0557e23ff4c431585ef8403a207$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};

$cfde19457ced60d9b233fb1d0f71dc82$exports = function (target, source, exceptions) {
  var keys = $d707a0557e23ff4c431585ef8403a207$exports(source);
  var defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
  var getOwnPropertyDescriptor = $da043d3ed7c3b37c83995db3f7a128d$export$f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!$c70f1f739ae81b1578231e191e1f0$exports(target, key) && !(exceptions && $c70f1f739ae81b1578231e191e1f0$exports(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

// ASSET: D:\CookBook\node_modules\core-js\internals\is-forced.js
var $fbd33e493d7c8a340fc2883c893e5b$exports = {};
var $fbd33e493d7c8a340fc2883c893e5b$var$replacement = /#|\.prototype\./;

var $fbd33e493d7c8a340fc2883c893e5b$var$isForced = function (feature, detection) {
  var value = $fbd33e493d7c8a340fc2883c893e5b$var$data[$fbd33e493d7c8a340fc2883c893e5b$var$normalize(feature)];
  return value == $fbd33e493d7c8a340fc2883c893e5b$var$POLYFILL ? true : value == $fbd33e493d7c8a340fc2883c893e5b$var$NATIVE ? false : $e88cf51f13e10e78d33d3e4b6f3045e6$exports(detection) ? $aef132f3eccbd652122c346f72f29314$exports(detection) : !!detection;
};

var $fbd33e493d7c8a340fc2883c893e5b$var$normalize = $fbd33e493d7c8a340fc2883c893e5b$var$isForced.normalize = function (string) {
  return String(string).replace($fbd33e493d7c8a340fc2883c893e5b$var$replacement, '.').toLowerCase();
};

var $fbd33e493d7c8a340fc2883c893e5b$var$data = $fbd33e493d7c8a340fc2883c893e5b$var$isForced.data = {};
var $fbd33e493d7c8a340fc2883c893e5b$var$NATIVE = $fbd33e493d7c8a340fc2883c893e5b$var$isForced.NATIVE = 'N';
var $fbd33e493d7c8a340fc2883c893e5b$var$POLYFILL = $fbd33e493d7c8a340fc2883c893e5b$var$isForced.POLYFILL = 'P';
$fbd33e493d7c8a340fc2883c893e5b$exports = $fbd33e493d7c8a340fc2883c893e5b$var$isForced;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
$f09cf99f84fa9bbebf324815a05f0ad3$exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = $b2dfbcdc0cb248234bdeab56988638b1$exports;
  } else if (STATIC) {
    target = $b2dfbcdc0cb248234bdeab56988638b1$exports[TARGET] || $ac41f668818336095b2c6e695156f858$exports(TARGET, {});
  } else {
    target = ($b2dfbcdc0cb248234bdeab56988638b1$exports[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = $f09cf99f84fa9bbebf324815a05f0ad3$var$getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = $fbd33e493d7c8a340fc2883c893e5b$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      $cfde19457ced60d9b233fb1d0f71dc82$exports(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      $f89e5c9fd7cf1eb7cc9$exports(sourceProperty, 'sham', true);
    } // extend global


    // extend global
    $f6b650ac0564db3a1dfe92ff64a576d7$exports(target, key, sourceProperty, options);
  }
};

// ASSET: D:\CookBook\node_modules\core-js\internals\native-promise-constructor.js
var $ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports = {};
$ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports = $b2dfbcdc0cb248234bdeab56988638b1$exports.Promise;
// ASSET: D:\CookBook\node_modules\core-js\internals\species-constructor.js
var $bdcd3a6831113dea0bda2c418f0fb1ba$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\a-constructor.js
var $aebc0e590fa45f699cb16b071606d01$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-constructor.js
var $fbf60d370810b40ddc55a9d03336e8$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\classof.js
var $e345bd0aabeeb025ab356e9e360a0b6f$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-string-tag-support.js
var $b5204ecd33fa517a5c9be065f9ebf48$exports = {};
var $b5204ecd33fa517a5c9be065f9ebf48$var$TO_STRING_TAG = $b53a5b6a8f34b6cba070624bf2a48849$exports('toStringTag');
var $b5204ecd33fa517a5c9be065f9ebf48$var$test = {};
$b5204ecd33fa517a5c9be065f9ebf48$var$test[$b5204ecd33fa517a5c9be065f9ebf48$var$TO_STRING_TAG] = 'z';
$b5204ecd33fa517a5c9be065f9ebf48$exports = String($b5204ecd33fa517a5c9be065f9ebf48$var$test) === '[object z]';
var $e345bd0aabeeb025ab356e9e360a0b6f$var$TO_STRING_TAG = $b53a5b6a8f34b6cba070624bf2a48849$exports('toStringTag');
var $e345bd0aabeeb025ab356e9e360a0b6f$var$Object = $b2dfbcdc0cb248234bdeab56988638b1$exports.Object; // ES3 wrong here

// ES3 wrong here
var $e345bd0aabeeb025ab356e9e360a0b6f$var$CORRECT_ARGUMENTS = $ff3cc50e74f09845d3cde3362e73cc90$exports(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

// fallback for IE11 Script Access Denied error
var $e345bd0aabeeb025ab356e9e360a0b6f$var$tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


// getting tag from ES6+ `Object.prototype.toString`
$e345bd0aabeeb025ab356e9e360a0b6f$exports = $b5204ecd33fa517a5c9be065f9ebf48$exports ? $ff3cc50e74f09845d3cde3362e73cc90$exports : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = $e345bd0aabeeb025ab356e9e360a0b6f$var$tryGet(O = $e345bd0aabeeb025ab356e9e360a0b6f$var$Object(it), $e345bd0aabeeb025ab356e9e360a0b6f$var$TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : $e345bd0aabeeb025ab356e9e360a0b6f$var$CORRECT_ARGUMENTS ? $ff3cc50e74f09845d3cde3362e73cc90$exports(O) // ES3 arguments fallback
  : (result = $ff3cc50e74f09845d3cde3362e73cc90$exports(O)) == 'Object' && $e88cf51f13e10e78d33d3e4b6f3045e6$exports(O.callee) ? 'Arguments' : result;
};

var $fbf60d370810b40ddc55a9d03336e8$var$noop = function () {
  /* empty */
};

var $fbf60d370810b40ddc55a9d03336e8$var$empty = [];
var $fbf60d370810b40ddc55a9d03336e8$var$construct = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Reflect', 'construct');
var $fbf60d370810b40ddc55a9d03336e8$var$constructorRegExp = /^\s*(?:class|function)\b/;
var $fbf60d370810b40ddc55a9d03336e8$var$exec = $fc9b83eb643c78fabc3eaedec34ef851$exports($fbf60d370810b40ddc55a9d03336e8$var$constructorRegExp.exec);
var $fbf60d370810b40ddc55a9d03336e8$var$INCORRECT_TO_STRING = !$fbf60d370810b40ddc55a9d03336e8$var$constructorRegExp.exec($fbf60d370810b40ddc55a9d03336e8$var$noop);

var $fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern = function isConstructor(argument) {
  if (!$e88cf51f13e10e78d33d3e4b6f3045e6$exports(argument)) return false;

  try {
    $fbf60d370810b40ddc55a9d03336e8$var$construct($fbf60d370810b40ddc55a9d03336e8$var$noop, $fbf60d370810b40ddc55a9d03336e8$var$empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var $fbf60d370810b40ddc55a9d03336e8$var$isConstructorLegacy = function isConstructor(argument) {
  if (!$e88cf51f13e10e78d33d3e4b6f3045e6$exports(argument)) return false;

  switch ($e345bd0aabeeb025ab356e9e360a0b6f$exports(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return $fbf60d370810b40ddc55a9d03336e8$var$INCORRECT_TO_STRING || !!$fbf60d370810b40ddc55a9d03336e8$var$exec($fbf60d370810b40ddc55a9d03336e8$var$constructorRegExp, $a978ea07562cc68485677368eebc$exports(argument));
  } catch (error) {
    return true;
  }
};

$fbf60d370810b40ddc55a9d03336e8$var$isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
$fbf60d370810b40ddc55a9d03336e8$exports = !$fbf60d370810b40ddc55a9d03336e8$var$construct || $aef132f3eccbd652122c346f72f29314$exports(function () {
  var called;
  return $fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern($fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern.call) || !$fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern(Object) || !$fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern(function () {
    called = true;
  }) || called;
}) ? $fbf60d370810b40ddc55a9d03336e8$var$isConstructorLegacy : $fbf60d370810b40ddc55a9d03336e8$var$isConstructorModern;
var $aebc0e590fa45f699cb16b071606d01$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `Assert: IsConstructor(argument) is true`

// `Assert: IsConstructor(argument) is true`
$aebc0e590fa45f699cb16b071606d01$exports = function (argument) {
  if ($fbf60d370810b40ddc55a9d03336e8$exports(argument)) return argument;
  throw $aebc0e590fa45f699cb16b071606d01$var$TypeError($be41ffb030b7c8b0c84eb20cb07d39e$exports(argument) + ' is not a constructor');
};

var $bdcd3a6831113dea0bda2c418f0fb1ba$var$SPECIES = $b53a5b6a8f34b6cba070624bf2a48849$exports('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
$bdcd3a6831113dea0bda2c418f0fb1ba$exports = function (O, defaultConstructor) {
  var C = $edafc3d62cbbbbb38cbb496d223bffe2$exports(O).constructor;
  var S;
  return C === undefined || (S = $edafc3d62cbbbbb38cbb496d223bffe2$exports(C)[$bdcd3a6831113dea0bda2c418f0fb1ba$var$SPECIES]) == undefined ? defaultConstructor : $aebc0e590fa45f699cb16b071606d01$exports(S);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\promise-resolve.js
var $ea76838a76216c2e91d161eacabe8f0$exports = {};

var $ff99268a4e032bba47b9b3dd1f6$var$PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = $c30363469204ca0751b8c2e548352e1$exports(resolve);
  this.reject = $c30363469204ca0751b8c2e548352e1$exports(reject);
}; // `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability


var $ff99268a4e032bba47b9b3dd1f6$export$f = function (C) {
  return new $ff99268a4e032bba47b9b3dd1f6$var$PromiseCapability(C);
};

$ea76838a76216c2e91d161eacabe8f0$exports = function (C, x) {
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(C);
  if ($fc6d2e39baa3b220b427$exports(x) && x.constructor === C) return x;
  var promiseCapability = $ff99268a4e032bba47b9b3dd1f6$export$f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var $c192a96af95022821ca5da584b77853$var$NON_GENERIC = !!$ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports && $aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  $ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports.prototype['finally'].call({
    then: function () {
      /* empty */
    }
  }, function () {
    /* empty */
  });
}); // `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  target: 'Promise',
  proto: true,
  real: true,
  forced: $c192a96af95022821ca5da584b77853$var$NON_GENERIC
}, {
  'finally': function (onFinally) {
    var C = $bdcd3a6831113dea0bda2c418f0fb1ba$exports(this, $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Promise'));
    var isFunction = $e88cf51f13e10e78d33d3e4b6f3045e6$exports(onFinally);
    return this.then(isFunction ? function (x) {
      return $ea76838a76216c2e91d161eacabe8f0$exports(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return $ea76838a76216c2e91d161eacabe8f0$exports(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
}); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!$f753765fca2ce7a45b8c4480d2568$exports && $e88cf51f13e10e78d33d3e4b6f3045e6$exports($ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports)) {
  var $c192a96af95022821ca5da584b77853$var$method = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Promise').prototype['finally'];

  if ($ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports.prototype['finally'] !== $c192a96af95022821ca5da584b77853$var$method) {
    $f6b650ac0564db3a1dfe92ff64a576d7$exports($ad6f0a0d0dbd81fe86f3b6a2e05f4bf$exports.prototype, 'finally', $c192a96af95022821ca5da584b77853$var$method, {
      unsafe: true
    });
  }
}

// ASSET: D:\CookBook\node_modules\core-js\internals\function-apply.js
var $ec27c5e32d6ae19849af55162a0c$exports = {};
var $ec27c5e32d6ae19849af55162a0c$var$FunctionPrototype = Function.prototype;
var $ec27c5e32d6ae19849af55162a0c$var$apply = $ec27c5e32d6ae19849af55162a0c$var$FunctionPrototype.apply;
var $ec27c5e32d6ae19849af55162a0c$var$call = $ec27c5e32d6ae19849af55162a0c$var$FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

// eslint-disable-next-line es/no-reflect -- safe
$ec27c5e32d6ae19849af55162a0c$exports = typeof Reflect == 'object' && Reflect.apply || ($a7743ac9f6aa0f8bfe0b9f6357a$exports ? $ec27c5e32d6ae19849af55162a0c$var$call.bind($ec27c5e32d6ae19849af55162a0c$var$apply) : function () {
  return $ec27c5e32d6ae19849af55162a0c$var$call.apply($ec27c5e32d6ae19849af55162a0c$var$apply, arguments);
});
// ASSET: D:\CookBook\node_modules\core-js\internals\fix-regexp-well-known-symbol-logic.js
var $a09dfd0500b53e937c717a11bee7cc$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-exec.js
var $b1b620b2b80a4d8bfed07a36c79c0$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-string.js
var $f83d2933d0b8cd4aeed3806c1$exports = {};
var $f83d2933d0b8cd4aeed3806c1$var$String = $b2dfbcdc0cb248234bdeab56988638b1$exports.String;

$f83d2933d0b8cd4aeed3806c1$exports = function (argument) {
  if ($e345bd0aabeeb025ab356e9e360a0b6f$exports(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $f83d2933d0b8cd4aeed3806c1$var$String(argument);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-flags.js
var $e5b8367937a8f32ba95adf2d58c3$exports = {};

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
$e5b8367937a8f32ba95adf2d58c3$exports = function () {
  var that = $edafc3d62cbbbbb38cbb496d223bffe2$exports(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-sticky-helpers.js
var $e0f450ca9bf558166c88b178a46541d8$exports = {};
// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $e0f450ca9bf558166c88b178a46541d8$var$$RegExp = $b2dfbcdc0cb248234bdeab56988638b1$exports.RegExp;
var $e0f450ca9bf558166c88b178a46541d8$var$UNSUPPORTED_Y = $aef132f3eccbd652122c346f72f29314$exports(function () {
  var re = $e0f450ca9bf558166c88b178a46541d8$var$$RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var $e0f450ca9bf558166c88b178a46541d8$var$MISSED_STICKY = $e0f450ca9bf558166c88b178a46541d8$var$UNSUPPORTED_Y || $aef132f3eccbd652122c346f72f29314$exports(function () {
  return !$e0f450ca9bf558166c88b178a46541d8$var$$RegExp('a', 'y').sticky;
});
var $e0f450ca9bf558166c88b178a46541d8$var$BROKEN_CARET = $e0f450ca9bf558166c88b178a46541d8$var$UNSUPPORTED_Y || $aef132f3eccbd652122c346f72f29314$exports(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $e0f450ca9bf558166c88b178a46541d8$var$$RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
$e0f450ca9bf558166c88b178a46541d8$exports = {
  BROKEN_CARET: $e0f450ca9bf558166c88b178a46541d8$var$BROKEN_CARET,
  MISSED_STICKY: $e0f450ca9bf558166c88b178a46541d8$var$MISSED_STICKY,
  UNSUPPORTED_Y: $e0f450ca9bf558166c88b178a46541d8$var$UNSUPPORTED_Y
};
var $b1b620b2b80a4d8bfed07a36c79c0$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.get;
// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-unsupported-dot-all.js
var $c86baf4418dbf2c60c6d182612794a0$exports = {};
// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $c86baf4418dbf2c60c6d182612794a0$var$$RegExp = $b2dfbcdc0cb248234bdeab56988638b1$exports.RegExp;
$c86baf4418dbf2c60c6d182612794a0$exports = $aef132f3eccbd652122c346f72f29314$exports(function () {
  var re = $c86baf4418dbf2c60c6d182612794a0$var$$RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});
// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-unsupported-ncg.js
var $f33eac8aa14a48a701b94937a6e87a$exports = {};
// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $f33eac8aa14a48a701b94937a6e87a$var$$RegExp = $b2dfbcdc0cb248234bdeab56988638b1$exports.RegExp;
$f33eac8aa14a48a701b94937a6e87a$exports = $aef132f3eccbd652122c346f72f29314$exports(function () {
  var re = $f33eac8aa14a48a701b94937a6e87a$var$$RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});
var $b1b620b2b80a4d8bfed07a36c79c0$var$nativeReplace = $c2e5f1808429f0e2512ef0a7c45834$exports('native-string-replace', String.prototype.replace);
var $b1b620b2b80a4d8bfed07a36c79c0$var$nativeExec = RegExp.prototype.exec;
var $b1b620b2b80a4d8bfed07a36c79c0$var$patchedExec = $b1b620b2b80a4d8bfed07a36c79c0$var$nativeExec;
var $b1b620b2b80a4d8bfed07a36c79c0$var$charAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charAt);
var $b1b620b2b80a4d8bfed07a36c79c0$var$indexOf = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.indexOf);
var $b1b620b2b80a4d8bfed07a36c79c0$var$replace = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.replace);
var $b1b620b2b80a4d8bfed07a36c79c0$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);

var $b1b620b2b80a4d8bfed07a36c79c0$var$UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$var$nativeExec, re1, 'a');
  $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$var$nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var $b1b620b2b80a4d8bfed07a36c79c0$var$UNSUPPORTED_Y = $e0f450ca9bf558166c88b178a46541d8$exports.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var $b1b620b2b80a4d8bfed07a36c79c0$var$NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var $b1b620b2b80a4d8bfed07a36c79c0$var$PATCH = $b1b620b2b80a4d8bfed07a36c79c0$var$UPDATES_LAST_INDEX_WRONG || $b1b620b2b80a4d8bfed07a36c79c0$var$NPCG_INCLUDED || $b1b620b2b80a4d8bfed07a36c79c0$var$UNSUPPORTED_Y || $c86baf4418dbf2c60c6d182612794a0$exports || $f33eac8aa14a48a701b94937a6e87a$exports;

if ($b1b620b2b80a4d8bfed07a36c79c0$var$PATCH) {
  $b1b620b2b80a4d8bfed07a36c79c0$var$patchedExec = function exec(string) {
    var re = this;
    var state = $b1b620b2b80a4d8bfed07a36c79c0$var$getInternalState(re);
    var str = $f83d2933d0b8cd4aeed3806c1$exports(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$var$patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = $b1b620b2b80a4d8bfed07a36c79c0$var$UNSUPPORTED_Y && re.sticky;
    var flags = $dcf1edbae4500c7eefdab278edf50a$exports($e5b8367937a8f32ba95adf2d58c3$exports, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = $b1b620b2b80a4d8bfed07a36c79c0$var$replace(flags, 'y', '');

      if ($b1b620b2b80a4d8bfed07a36c79c0$var$indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = $b1b620b2b80a4d8bfed07a36c79c0$var$stringSlice(str, re.lastIndex); // Support anchored sticky behavior.

      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && $b1b620b2b80a4d8bfed07a36c79c0$var$charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if ($b1b620b2b80a4d8bfed07a36c79c0$var$NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if ($b1b620b2b80a4d8bfed07a36c79c0$var$UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$var$nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = $b1b620b2b80a4d8bfed07a36c79c0$var$stringSlice(match.input, charsAdded);
        match[0] = $b1b620b2b80a4d8bfed07a36c79c0$var$stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if ($b1b620b2b80a4d8bfed07a36c79c0$var$UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if ($b1b620b2b80a4d8bfed07a36c79c0$var$NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$var$nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = $ef12a9a97d55c7d234596883bab0e54c$exports(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

$b1b620b2b80a4d8bfed07a36c79c0$exports = $b1b620b2b80a4d8bfed07a36c79c0$var$patchedExec;
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== $b1b620b2b80a4d8bfed07a36c79c0$exports
}, {
  exec: $b1b620b2b80a4d8bfed07a36c79c0$exports
});
var $a09dfd0500b53e937c717a11bee7cc$var$SPECIES = $b53a5b6a8f34b6cba070624bf2a48849$exports('species');
var $a09dfd0500b53e937c717a11bee7cc$var$RegExpPrototype = RegExp.prototype;

$a09dfd0500b53e937c717a11bee7cc$exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = $b53a5b6a8f34b6cba070624bf2a48849$exports(KEY);
  var DELEGATES_TO_SYMBOL = !$aef132f3eccbd652122c346f72f29314$exports(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !$aef132f3eccbd652122c346f72f29314$exports(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[$a09dfd0500b53e937c717a11bee7cc$var$SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = $fc9b83eb643c78fabc3eaedec34ef851$exports(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = $fc9b83eb643c78fabc3eaedec34ef851$exports(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === $b1b620b2b80a4d8bfed07a36c79c0$exports || $exec === $a09dfd0500b53e937c717a11bee7cc$var$RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    $f6b650ac0564db3a1dfe92ff64a576d7$exports(String.prototype, KEY, methods[0]);
    $f6b650ac0564db3a1dfe92ff64a576d7$exports($a09dfd0500b53e937c717a11bee7cc$var$RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) $f89e5c9fd7cf1eb7cc9$exports($a09dfd0500b53e937c717a11bee7cc$var$RegExpPrototype[SYMBOL], 'sham', true);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\advance-string-index.js
var $a00b099aa62046a6c1393a6ebcd944f2$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\string-multibyte.js
var $c4467e91600a59496715ba76dd77$exports = {};
var $c4467e91600a59496715ba76dd77$var$charAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charAt);
var $c4467e91600a59496715ba76dd77$var$charCodeAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charCodeAt);
var $c4467e91600a59496715ba76dd77$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);

var $c4467e91600a59496715ba76dd77$var$createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = $f83d2933d0b8cd4aeed3806c1$exports($a05d6244df8e05ad187ac5fd4875349b$exports($this));
    var position = $bf8ad804a45a7758e2af68c24813726$exports(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = $c4467e91600a59496715ba76dd77$var$charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = $c4467e91600a59496715ba76dd77$var$charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? $c4467e91600a59496715ba76dd77$var$charAt(S, position) : first : CONVERT_TO_STRING ? $c4467e91600a59496715ba76dd77$var$stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

$c4467e91600a59496715ba76dd77$exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: $c4467e91600a59496715ba76dd77$var$createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: $c4467e91600a59496715ba76dd77$var$createMethod(true)
};
var $a00b099aa62046a6c1393a6ebcd944f2$var$charAt = $c4467e91600a59496715ba76dd77$exports.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
$a00b099aa62046a6c1393a6ebcd944f2$exports = function (S, index, unicode) {
  return index + (unicode ? $a00b099aa62046a6c1393a6ebcd944f2$var$charAt(S, index).length : 1);
};

// ASSET: D:\CookBook\node_modules\core-js\internals\get-substitution.js
var $d1c63a661a5a77665244357d3242fd4b$exports = {};
var $d1c63a661a5a77665244357d3242fd4b$var$floor = Math.floor;
var $d1c63a661a5a77665244357d3242fd4b$var$charAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charAt);
var $d1c63a661a5a77665244357d3242fd4b$var$replace = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.replace);
var $d1c63a661a5a77665244357d3242fd4b$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);
var $d1c63a661a5a77665244357d3242fd4b$var$SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var $d1c63a661a5a77665244357d3242fd4b$var$SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
$d1c63a661a5a77665244357d3242fd4b$exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = $d1c63a661a5a77665244357d3242fd4b$var$SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = $e169c382b25155e03c3ba184e00d2a$exports(namedCaptures);
    symbols = $d1c63a661a5a77665244357d3242fd4b$var$SUBSTITUTION_SYMBOLS;
  }

  return $d1c63a661a5a77665244357d3242fd4b$var$replace(replacement, symbols, function (match, ch) {
    var capture;

    switch ($d1c63a661a5a77665244357d3242fd4b$var$charAt(ch, 0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return $d1c63a661a5a77665244357d3242fd4b$var$stringSlice(str, 0, position);

      case "'":
        return $d1c63a661a5a77665244357d3242fd4b$var$stringSlice(str, tailPos);

      case '<':
        capture = namedCaptures[$d1c63a661a5a77665244357d3242fd4b$var$stringSlice(ch, 1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = $d1c63a661a5a77665244357d3242fd4b$var$floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? $d1c63a661a5a77665244357d3242fd4b$var$charAt(ch, 1) : captures[f - 1] + $d1c63a661a5a77665244357d3242fd4b$var$charAt(ch, 1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
};

// ASSET: D:\CookBook\node_modules\core-js\internals\regexp-exec-abstract.js
var $edcb770ddb7559112cb4c38c2f26454$exports = {};
var $edcb770ddb7559112cb4c38c2f26454$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
$edcb770ddb7559112cb4c38c2f26454$exports = function (R, S) {
  var exec = R.exec;

  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(exec)) {
    var result = $dcf1edbae4500c7eefdab278edf50a$exports(exec, R, S);
    if (result !== null) $edafc3d62cbbbbb38cbb496d223bffe2$exports(result);
    return result;
  }

  if ($ff3cc50e74f09845d3cde3362e73cc90$exports(R) === 'RegExp') return $dcf1edbae4500c7eefdab278edf50a$exports($b1b620b2b80a4d8bfed07a36c79c0$exports, R, S);
  throw $edcb770ddb7559112cb4c38c2f26454$var$TypeError('RegExp#exec called on incompatible receiver');
};

var $f77f67559fb95ec0902c1757c855$var$REPLACE = $b53a5b6a8f34b6cba070624bf2a48849$exports('replace');
var $f77f67559fb95ec0902c1757c855$var$max = Math.max;
var $f77f67559fb95ec0902c1757c855$var$min = Math.min;
var $f77f67559fb95ec0902c1757c855$var$concat = $fc9b83eb643c78fabc3eaedec34ef851$exports([].concat);
var $f77f67559fb95ec0902c1757c855$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push);
var $f77f67559fb95ec0902c1757c855$var$stringIndexOf = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.indexOf);
var $f77f67559fb95ec0902c1757c855$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);

var $f77f67559fb95ec0902c1757c855$var$maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var $f77f67559fb95ec0902c1757c855$var$REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var $f77f67559fb95ec0902c1757c855$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[$f77f67559fb95ec0902c1757c855$var$REPLACE]) {
    return /./[$f77f67559fb95ec0902c1757c855$var$REPLACE]('a', '$0') === '';
  }

  return false;
}();

var $f77f67559fb95ec0902c1757c855$var$REPLACE_SUPPORTS_NAMED_GROUPS = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
}); // @@replace logic

// @@replace logic
$a09dfd0500b53e937c717a11bee7cc$exports('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = $f77f67559fb95ec0902c1757c855$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = $a05d6244df8e05ad187ac5fd4875349b$exports(this);
    var replacer = searchValue == undefined ? undefined : $a6d7559694e98dabe18236025$exports(searchValue, $f77f67559fb95ec0902c1757c855$var$REPLACE);
    return replacer ? $dcf1edbae4500c7eefdab278edf50a$exports(replacer, searchValue, O, replaceValue) : $dcf1edbae4500c7eefdab278edf50a$exports(nativeReplace, $f83d2933d0b8cd4aeed3806c1$exports(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    var rx = $edafc3d62cbbbbb38cbb496d223bffe2$exports(this);
    var S = $f83d2933d0b8cd4aeed3806c1$exports(string);

    if (typeof replaceValue == 'string' && $f77f67559fb95ec0902c1757c855$var$stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && $f77f67559fb95ec0902c1757c855$var$stringIndexOf(replaceValue, '$<') === -1) {
      var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
      if (res.done) return res.value;
    }

    var functionalReplace = $e88cf51f13e10e78d33d3e4b6f3045e6$exports(replaceValue);
    if (!functionalReplace) replaceValue = $f83d2933d0b8cd4aeed3806c1$exports(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = $edcb770ddb7559112cb4c38c2f26454$exports(rx, S);
      if (result === null) break;
      $f77f67559fb95ec0902c1757c855$var$push(results, result);
      if (!global) break;
      var matchStr = $f83d2933d0b8cd4aeed3806c1$exports(result[0]);
      if (matchStr === '') rx.lastIndex = $a00b099aa62046a6c1393a6ebcd944f2$exports(S, $e7bef2d1f081c78aabb47752ab106597$exports(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = $f83d2933d0b8cd4aeed3806c1$exports(result[0]);
      var position = $f77f67559fb95ec0902c1757c855$var$max($f77f67559fb95ec0902c1757c855$var$min($bf8ad804a45a7758e2af68c24813726$exports(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
      for (var j = 1; j < result.length; j++) $f77f67559fb95ec0902c1757c855$var$push(captures, $f77f67559fb95ec0902c1757c855$var$maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = $f77f67559fb95ec0902c1757c855$var$concat([matched], captures, position, S);
        if (namedCaptures !== undefined) $f77f67559fb95ec0902c1757c855$var$push(replacerArgs, namedCaptures);
        var replacement = $f83d2933d0b8cd4aeed3806c1$exports($ec27c5e32d6ae19849af55162a0c$exports(replaceValue, undefined, replacerArgs));
      } else {
        replacement = $d1c63a661a5a77665244357d3242fd4b$exports(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += $f77f67559fb95ec0902c1757c855$var$stringSlice(S, nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + $f77f67559fb95ec0902c1757c855$var$stringSlice(S, nextSourcePosition);
  }];
}, !$f77f67559fb95ec0902c1757c855$var$REPLACE_SUPPORTS_NAMED_GROUPS || !$f77f67559fb95ec0902c1757c855$var$REPLACE_KEEPS_$0 || $f77f67559fb95ec0902c1757c855$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
// ASSET: D:\CookBook\node_modules\core-js\internals\typed-array-constructor.js
var $b755421e36da8f415a57e5cd$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\typed-array-constructors-require-wrappers.js
var $f3f972b4143a1770d03e7a5387e2d62b$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\check-correctness-of-iteration.js
var $f6ff49298fed49ca4a1c03d8f1a8ba1$exports = {};
var $f6ff49298fed49ca4a1c03d8f1a8ba1$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $f6ff49298fed49ca4a1c03d8f1a8ba1$var$SAFE_CLOSING = false;

try {
  var $f6ff49298fed49ca4a1c03d8f1a8ba1$var$called = 0;
  var $f6ff49298fed49ca4a1c03d8f1a8ba1$var$iteratorWithReturn = {
    next: function () {
      return {
        done: !!$f6ff49298fed49ca4a1c03d8f1a8ba1$var$called++
      };
    },
    'return': function () {
      $f6ff49298fed49ca4a1c03d8f1a8ba1$var$SAFE_CLOSING = true;
    }
  };

  $f6ff49298fed49ca4a1c03d8f1a8ba1$var$iteratorWithReturn[$f6ff49298fed49ca4a1c03d8f1a8ba1$var$ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from($f6ff49298fed49ca4a1c03d8f1a8ba1$var$iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

$f6ff49298fed49ca4a1c03d8f1a8ba1$exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !$f6ff49298fed49ca4a1c03d8f1a8ba1$var$SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[$f6ff49298fed49ca4a1c03d8f1a8ba1$var$ITERATOR] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\array-buffer-view-core.js
var $eb879e9871798e5f9d6bdb496507397$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\array-buffer-native.js
var $a8a2fe21efc1b75729a75207d78fad1$exports = {};
// eslint-disable-next-line es/no-typed-arrays -- safe
$a8a2fe21efc1b75729a75207d78fad1$exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';
var $eb879e9871798e5f9d6bdb496507397$var$defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\object-get-prototype-of.js
var $d0fbb1d77f71b361afc84719072d$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\correct-prototype-getter.js
var $f71bff60848aa35067a98536efcbe2$exports = {};
$f71bff60848aa35067a98536efcbe2$exports = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var $d0fbb1d77f71b361afc84719072d$var$IE_PROTO = $b5ae13eacebb73589867cf6383efd43e$exports('IE_PROTO');
var $d0fbb1d77f71b361afc84719072d$var$Object = $b2dfbcdc0cb248234bdeab56988638b1$exports.Object;
var $d0fbb1d77f71b361afc84719072d$var$ObjectPrototype = $d0fbb1d77f71b361afc84719072d$var$Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$d0fbb1d77f71b361afc84719072d$exports = $f71bff60848aa35067a98536efcbe2$exports ? $d0fbb1d77f71b361afc84719072d$var$Object.getPrototypeOf : function (O) {
  var object = $e169c382b25155e03c3ba184e00d2a$exports(O);
  if ($c70f1f739ae81b1578231e191e1f0$exports(object, $d0fbb1d77f71b361afc84719072d$var$IE_PROTO)) return object[$d0fbb1d77f71b361afc84719072d$var$IE_PROTO];
  var constructor = object.constructor;

  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof $d0fbb1d77f71b361afc84719072d$var$Object ? $d0fbb1d77f71b361afc84719072d$var$ObjectPrototype : null;
};
// ASSET: D:\CookBook\node_modules\core-js\internals\object-set-prototype-of.js
var $f60ead7f75dbd9cd96e3d4fd154ac$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\a-possible-prototype.js
var $f70c4f19a0ff979305f48fee6b0fe43$exports = {};
var $f70c4f19a0ff979305f48fee6b0fe43$var$String = $b2dfbcdc0cb248234bdeab56988638b1$exports.String;
var $f70c4f19a0ff979305f48fee6b0fe43$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;

$f70c4f19a0ff979305f48fee6b0fe43$exports = function (argument) {
  if (typeof argument == 'object' || $e88cf51f13e10e78d33d3e4b6f3045e6$exports(argument)) return argument;
  throw $f70c4f19a0ff979305f48fee6b0fe43$var$TypeError("Can't set " + $f70c4f19a0ff979305f48fee6b0fe43$var$String(argument) + ' as a prototype');
};

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
$f60ead7f75dbd9cd96e3d4fd154ac$exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = $fc9b83eb643c78fabc3eaedec34ef851$exports(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    $edafc3d62cbbbbb38cbb496d223bffe2$exports(O);
    $f70c4f19a0ff979305f48fee6b0fe43$exports(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);
var $eb879e9871798e5f9d6bdb496507397$var$Int8Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Int8Array;
var $eb879e9871798e5f9d6bdb496507397$var$Int8ArrayPrototype = $eb879e9871798e5f9d6bdb496507397$var$Int8Array && $eb879e9871798e5f9d6bdb496507397$var$Int8Array.prototype;
var $eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArray = $b2dfbcdc0cb248234bdeab56988638b1$exports.Uint8ClampedArray;
var $eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArrayPrototype = $eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArray && $eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArray.prototype;
var $eb879e9871798e5f9d6bdb496507397$var$TypedArray = $eb879e9871798e5f9d6bdb496507397$var$Int8Array && $d0fbb1d77f71b361afc84719072d$exports($eb879e9871798e5f9d6bdb496507397$var$Int8Array);
var $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype = $eb879e9871798e5f9d6bdb496507397$var$Int8ArrayPrototype && $d0fbb1d77f71b361afc84719072d$exports($eb879e9871798e5f9d6bdb496507397$var$Int8ArrayPrototype);
var $eb879e9871798e5f9d6bdb496507397$var$ObjectPrototype = Object.prototype;
var $eb879e9871798e5f9d6bdb496507397$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;
var $eb879e9871798e5f9d6bdb496507397$var$TO_STRING_TAG = $b53a5b6a8f34b6cba070624bf2a48849$exports('toStringTag');
var $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG = $cfe1c1d3ee1a29ed7070cc61d3b69$exports('TYPED_ARRAY_TAG');
var $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_CONSTRUCTOR = $cfe1c1d3ee1a29ed7070cc61d3b69$exports('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var $eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS = $a8a2fe21efc1b75729a75207d78fad1$exports && !!$f60ead7f75dbd9cd96e3d4fd154ac$exports && $e345bd0aabeeb025ab356e9e360a0b6f$exports($b2dfbcdc0cb248234bdeab56988638b1$exports.opera) !== 'Opera';
var $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG_REQUIRED = false;
var $eb879e9871798e5f9d6bdb496507397$var$NAME, $eb879e9871798e5f9d6bdb496507397$var$Constructor, $eb879e9871798e5f9d6bdb496507397$var$Prototype;
var $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var $eb879e9871798e5f9d6bdb496507397$var$BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var $eb879e9871798e5f9d6bdb496507397$var$isView = function isView(it) {
  if (!$fc6d2e39baa3b220b427$exports(it)) return false;
  var klass = $e345bd0aabeeb025ab356e9e360a0b6f$exports(it);
  return klass === 'DataView' || $c70f1f739ae81b1578231e191e1f0$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList, klass) || $c70f1f739ae81b1578231e191e1f0$exports($eb879e9871798e5f9d6bdb496507397$var$BigIntArrayConstructorsList, klass);
};

var $eb879e9871798e5f9d6bdb496507397$var$isTypedArray = function (it) {
  if (!$fc6d2e39baa3b220b427$exports(it)) return false;
  var klass = $e345bd0aabeeb025ab356e9e360a0b6f$exports(it);
  return $c70f1f739ae81b1578231e191e1f0$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList, klass) || $c70f1f739ae81b1578231e191e1f0$exports($eb879e9871798e5f9d6bdb496507397$var$BigIntArrayConstructorsList, klass);
};

var $eb879e9871798e5f9d6bdb496507397$var$aTypedArray = function (it) {
  if ($eb879e9871798e5f9d6bdb496507397$var$isTypedArray(it)) return it;
  throw $eb879e9871798e5f9d6bdb496507397$var$TypeError('Target is not a typed array');
};

var $eb879e9871798e5f9d6bdb496507397$var$aTypedArrayConstructor = function (C) {
  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports(C) && (!$f60ead7f75dbd9cd96e3d4fd154ac$exports || $c238b8ff962347e6537760e1732fb6$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArray, C))) return C;
  throw $eb879e9871798e5f9d6bdb496507397$var$TypeError($be41ffb030b7c8b0c84eb20cb07d39e$exports(C) + ' is not a typed array constructor');
};

var $eb879e9871798e5f9d6bdb496507397$var$exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!$e00ad6be039fed7616edf60d1993dd68$exports) return;
  if (forced) for (var ARRAY in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
    var TypedArrayConstructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[ARRAY];
    if (TypedArrayConstructor && $c70f1f739ae81b1578231e191e1f0$exports(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) {
        /* empty */
      }
    }
  }

  if (!$eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype[KEY] || forced) {
    $f6b650ac0564db3a1dfe92ff64a576d7$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype, KEY, forced ? property : $eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS && $eb879e9871798e5f9d6bdb496507397$var$Int8ArrayPrototype[KEY] || property, options);
  }
};

var $eb879e9871798e5f9d6bdb496507397$var$exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!$e00ad6be039fed7616edf60d1993dd68$exports) return;

  if ($f60ead7f75dbd9cd96e3d4fd154ac$exports) {
    if (forced) for (ARRAY in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
      TypedArrayConstructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[ARRAY];
      if (TypedArrayConstructor && $c70f1f739ae81b1578231e191e1f0$exports(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) {
        /* empty */
      }
    }

    if (!$eb879e9871798e5f9d6bdb496507397$var$TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return $f6b650ac0564db3a1dfe92ff64a576d7$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArray, KEY, forced ? property : $eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS && $eb879e9871798e5f9d6bdb496507397$var$TypedArray[KEY] || property);
      } catch (error) {
        /* empty */
      }
    } else return;
  }

  for (ARRAY in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
    TypedArrayConstructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[ARRAY];

    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      $f6b650ac0564db3a1dfe92ff64a576d7$exports(TypedArrayConstructor, KEY, property);
    }
  }
};

for ($eb879e9871798e5f9d6bdb496507397$var$NAME in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
  $eb879e9871798e5f9d6bdb496507397$var$Constructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME];
  $eb879e9871798e5f9d6bdb496507397$var$Prototype = $eb879e9871798e5f9d6bdb496507397$var$Constructor && $eb879e9871798e5f9d6bdb496507397$var$Constructor.prototype;
  if ($eb879e9871798e5f9d6bdb496507397$var$Prototype) $f89e5c9fd7cf1eb7cc9$exports($eb879e9871798e5f9d6bdb496507397$var$Prototype, $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_CONSTRUCTOR, $eb879e9871798e5f9d6bdb496507397$var$Constructor);else $eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for ($eb879e9871798e5f9d6bdb496507397$var$NAME in $eb879e9871798e5f9d6bdb496507397$var$BigIntArrayConstructorsList) {
  $eb879e9871798e5f9d6bdb496507397$var$Constructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME];
  $eb879e9871798e5f9d6bdb496507397$var$Prototype = $eb879e9871798e5f9d6bdb496507397$var$Constructor && $eb879e9871798e5f9d6bdb496507397$var$Constructor.prototype;
  if ($eb879e9871798e5f9d6bdb496507397$var$Prototype) $f89e5c9fd7cf1eb7cc9$exports($eb879e9871798e5f9d6bdb496507397$var$Prototype, $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_CONSTRUCTOR, $eb879e9871798e5f9d6bdb496507397$var$Constructor);
} // WebKit bug - typed arrays constructors prototype is Object.prototype


// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!$eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS || !$e88cf51f13e10e78d33d3e4b6f3045e6$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArray) || $eb879e9871798e5f9d6bdb496507397$var$TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  $eb879e9871798e5f9d6bdb496507397$var$TypedArray = function TypedArray() {
    throw $eb879e9871798e5f9d6bdb496507397$var$TypeError('Incorrect invocation');
  };

  if ($eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS) for ($eb879e9871798e5f9d6bdb496507397$var$NAME in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
    if ($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME]) $f60ead7f75dbd9cd96e3d4fd154ac$exports($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME], $eb879e9871798e5f9d6bdb496507397$var$TypedArray);
  }
}

if (!$eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS || !$eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype || $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype === $eb879e9871798e5f9d6bdb496507397$var$ObjectPrototype) {
  $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype = $eb879e9871798e5f9d6bdb496507397$var$TypedArray.prototype;
  if ($eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS) for ($eb879e9871798e5f9d6bdb496507397$var$NAME in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) {
    if ($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME]) $f60ead7f75dbd9cd96e3d4fd154ac$exports($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME].prototype, $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype);
  }
} // WebKit bug - one more object in Uint8ClampedArray prototype chain


// WebKit bug - one more object in Uint8ClampedArray prototype chain
if ($eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS && $d0fbb1d77f71b361afc84719072d$exports($eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArrayPrototype) !== $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype) {
  $f60ead7f75dbd9cd96e3d4fd154ac$exports($eb879e9871798e5f9d6bdb496507397$var$Uint8ClampedArrayPrototype, $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype);
}

if ($e00ad6be039fed7616edf60d1993dd68$exports && !$c70f1f739ae81b1578231e191e1f0$exports($eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype, $eb879e9871798e5f9d6bdb496507397$var$TO_STRING_TAG)) {
  $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG_REQUIRED = true;
  $eb879e9871798e5f9d6bdb496507397$var$defineProperty($eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype, $eb879e9871798e5f9d6bdb496507397$var$TO_STRING_TAG, {
    get: function () {
      return $fc6d2e39baa3b220b427$exports(this) ? this[$eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG] : undefined;
    }
  });

  for ($eb879e9871798e5f9d6bdb496507397$var$NAME in $eb879e9871798e5f9d6bdb496507397$var$TypedArrayConstructorsList) if ($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME]) {
    $f89e5c9fd7cf1eb7cc9$exports($b2dfbcdc0cb248234bdeab56988638b1$exports[$eb879e9871798e5f9d6bdb496507397$var$NAME], $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG, $eb879e9871798e5f9d6bdb496507397$var$NAME);
  }
}

$eb879e9871798e5f9d6bdb496507397$exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: $eb879e9871798e5f9d6bdb496507397$var$NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_CONSTRUCTOR: $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_CONSTRUCTOR,
  TYPED_ARRAY_TAG: $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG_REQUIRED && $eb879e9871798e5f9d6bdb496507397$var$TYPED_ARRAY_TAG,
  aTypedArray: $eb879e9871798e5f9d6bdb496507397$var$aTypedArray,
  aTypedArrayConstructor: $eb879e9871798e5f9d6bdb496507397$var$aTypedArrayConstructor,
  exportTypedArrayMethod: $eb879e9871798e5f9d6bdb496507397$var$exportTypedArrayMethod,
  exportTypedArrayStaticMethod: $eb879e9871798e5f9d6bdb496507397$var$exportTypedArrayStaticMethod,
  isView: $eb879e9871798e5f9d6bdb496507397$var$isView,
  isTypedArray: $eb879e9871798e5f9d6bdb496507397$var$isTypedArray,
  TypedArray: $eb879e9871798e5f9d6bdb496507397$var$TypedArray,
  TypedArrayPrototype: $eb879e9871798e5f9d6bdb496507397$var$TypedArrayPrototype
};
var $f3f972b4143a1770d03e7a5387e2d62b$var$NATIVE_ARRAY_BUFFER_VIEWS = $eb879e9871798e5f9d6bdb496507397$exports.NATIVE_ARRAY_BUFFER_VIEWS;
var $f3f972b4143a1770d03e7a5387e2d62b$var$ArrayBuffer = $b2dfbcdc0cb248234bdeab56988638b1$exports.ArrayBuffer;
var $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Int8Array;
$f3f972b4143a1770d03e7a5387e2d62b$exports = !$f3f972b4143a1770d03e7a5387e2d62b$var$NATIVE_ARRAY_BUFFER_VIEWS || !$aef132f3eccbd652122c346f72f29314$exports(function () {
  $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(1);
}) || !$aef132f3eccbd652122c346f72f29314$exports(function () {
  new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(-1);
}) || !$f6ff49298fed49ca4a1c03d8f1a8ba1$exports(function (iterable) {
  new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array();
  new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(null);
  new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(1.5);
  new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(iterable);
}, true) || $aef132f3eccbd652122c346f72f29314$exports(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new $f3f972b4143a1770d03e7a5387e2d62b$var$Int8Array(new $f3f972b4143a1770d03e7a5387e2d62b$var$ArrayBuffer(2), 1, undefined).length !== 1;
});
// ASSET: D:\CookBook\node_modules\core-js\internals\array-buffer.js
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\redefine-all.js
var $d023e27ccf14e7a42c20ed6b04f61045$exports = {};

$d023e27ccf14e7a42c20ed6b04f61045$exports = function (target, src, options) {
  for (var key in src) $f6b650ac0564db3a1dfe92ff64a576d7$exports(target, key, src[key], options);

  return target;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\an-instance.js
var $efdb39c4d2e2c908195dbaea02$exports = {};
var $efdb39c4d2e2c908195dbaea02$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;

$efdb39c4d2e2c908195dbaea02$exports = function (it, Prototype) {
  if ($c238b8ff962347e6537760e1732fb6$exports(Prototype, it)) return it;
  throw $efdb39c4d2e2c908195dbaea02$var$TypeError('Incorrect invocation');
};

// ASSET: D:\CookBook\node_modules\core-js\internals\to-index.js
var $a77b2ecadc88d521bab51b4bea666a4f$exports = {};
var $a77b2ecadc88d521bab51b4bea666a4f$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError; // `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
$a77b2ecadc88d521bab51b4bea666a4f$exports = function (it) {
  if (it === undefined) return 0;
  var number = $bf8ad804a45a7758e2af68c24813726$exports(it);
  var length = $e7bef2d1f081c78aabb47752ab106597$exports(number);
  if (number !== length) throw $a77b2ecadc88d521bab51b4bea666a4f$var$RangeError('Wrong length or index');
  return length;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\ieee754.js
var $f02e50275e7d37ab27988d88b$exports = {};
var $f02e50275e7d37ab27988d88b$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array;
var $f02e50275e7d37ab27988d88b$var$abs = Math.abs;
var $f02e50275e7d37ab27988d88b$var$pow = Math.pow;
var $f02e50275e7d37ab27988d88b$var$floor = Math.floor;
var $f02e50275e7d37ab27988d88b$var$log = Math.log;
var $f02e50275e7d37ab27988d88b$var$LN2 = Math.LN2;

var $f02e50275e7d37ab27988d88b$var$pack = function (number, mantissaLength, bytes) {
  var buffer = $f02e50275e7d37ab27988d88b$var$Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? $f02e50275e7d37ab27988d88b$var$pow(2, -24) - $f02e50275e7d37ab27988d88b$var$pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = $f02e50275e7d37ab27988d88b$var$abs(number); // eslint-disable-next-line no-self-compare -- NaN check

  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = $f02e50275e7d37ab27988d88b$var$floor($f02e50275e7d37ab27988d88b$var$log(number) / $f02e50275e7d37ab27988d88b$var$LN2);
    c = $f02e50275e7d37ab27988d88b$var$pow(2, -exponent);

    if (number * c < 1) {
      exponent--;
      c *= 2;
    }

    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * $f02e50275e7d37ab27988d88b$var$pow(2, 1 - eBias);
    }

    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }

    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * $f02e50275e7d37ab27988d88b$var$pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * $f02e50275e7d37ab27988d88b$var$pow(2, eBias - 1) * $f02e50275e7d37ab27988d88b$var$pow(2, mantissaLength);
      exponent = 0;
    }
  }

  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }

  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;

  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }

  buffer[--index] |= sign * 128;
  return buffer;
};

var $f02e50275e7d37ab27988d88b$var$unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;

  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }

  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;

  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }

  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + $f02e50275e7d37ab27988d88b$var$pow(2, mantissaLength);
    exponent = exponent - eBias;
  }

  return (sign ? -1 : 1) * mantissa * $f02e50275e7d37ab27988d88b$var$pow(2, exponent - mantissaLength);
};

$f02e50275e7d37ab27988d88b$exports = {
  pack: $f02e50275e7d37ab27988d88b$var$pack,
  unpack: $f02e50275e7d37ab27988d88b$var$unpack
};
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getOwnPropertyNames = $fbfa8391e70d76de6161a305a015d0d1$export$f;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\array-fill.js
var $e53dba2bb7c0387b78df0e69419cbfa$exports = {};

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
$e53dba2bb7c0387b78df0e69419cbfa$exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = $e169c382b25155e03c3ba184e00d2a$exports(this);
  var length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(O);
  var argumentsLength = arguments.length;
  var index = $b3eb09d4944f5f5f3c8197d274fa8cd$exports(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : $b3eb09d4944f5f5f3c8197d274fa8cd$exports(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\array-slice-simple.js
var $cc6e9716afe9d69a463f4be768698ee3$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\create-property.js
var $de7c15d7bcf78fb13f7819be00d71291$exports = {};

$de7c15d7bcf78fb13f7819be00d71291$exports = function (object, key, value) {
  var propertyKey = $b9250950a967cd410104f9dc0c16279$exports(key);
  if (propertyKey in object) $ad80bdb8939ee74538b84fc75a84d27$export$f(object, propertyKey, $ab54931bf5075a19025488583689585$exports(0, value));else object[propertyKey] = value;
};

var $cc6e9716afe9d69a463f4be768698ee3$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array;
var $cc6e9716afe9d69a463f4be768698ee3$var$max = Math.max;

$cc6e9716afe9d69a463f4be768698ee3$exports = function (O, start, end) {
  var length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(O);
  var k = $b3eb09d4944f5f5f3c8197d274fa8cd$exports(start, length);
  var fin = $b3eb09d4944f5f5f3c8197d274fa8cd$exports(end === undefined ? length : end, length);
  var result = $cc6e9716afe9d69a463f4be768698ee3$var$Array($cc6e9716afe9d69a463f4be768698ee3$var$max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) $de7c15d7bcf78fb13f7819be00d71291$exports(result, n, O[k]);

  result.length = n;
  return result;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\set-to-string-tag.js
var $c58c59549867eac23eeb6$exports = {};
var $c58c59549867eac23eeb6$var$defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
var $c58c59549867eac23eeb6$var$TO_STRING_TAG = $b53a5b6a8f34b6cba070624bf2a48849$exports('toStringTag');

$c58c59549867eac23eeb6$exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;

  if (target && !$c70f1f739ae81b1578231e191e1f0$exports(target, $c58c59549867eac23eeb6$var$TO_STRING_TAG)) {
    $c58c59549867eac23eeb6$var$defineProperty(target, $c58c59549867eac23eeb6$var$TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROPER_FUNCTION_NAME = $efa56d6f38b18a3e8804095e0a0bd17$exports.PROPER;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$CONFIGURABLE_FUNCTION_NAME = $efa56d6f38b18a3e8804095e0a0bd17$exports.CONFIGURABLE;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.get;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ARRAY_BUFFER = 'ArrayBuffer';
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DATA_VIEW = 'DataView';
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE = 'prototype';
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$WRONG_LENGTH = 'Wrong length';
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$WRONG_INDEX = 'Wrong index';
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer = $b2dfbcdc0cb248234bdeab56988638b1$exports[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ARRAY_BUFFER];
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer && $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE];
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView = $b2dfbcdc0cb248234bdeab56988638b1$exports[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DATA_VIEW];
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView && $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE];
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ObjectPrototype = Object.prototype;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$fill = $fc9b83eb643c78fabc3eaedec34ef851$exports($e53dba2bb7c0387b78df0e69419cbfa$exports);
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$reverse = $fc9b83eb643c78fabc3eaedec34ef851$exports([].reverse);
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packIEEE754 = $f02e50275e7d37ab27988d88b$exports.pack;
var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackIEEE754 = $f02e50275e7d37ab27988d88b$exports.unpack;

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt8 = function (number) {
  return [number & 0xFF];
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packFloat32 = function (number) {
  return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packIEEE754(number, 23, 4);
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packFloat64 = function (number) {
  return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packIEEE754(number, 52, 8);
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$addGetter = function (Constructor, key) {
  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$defineProperty(Constructor[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE], key, {
    get: function () {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(this)[key];
    }
  });
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get = function (view, count, index, isLittleEndian) {
  var intIndex = $a77b2ecadc88d521bab51b4bea666a4f$exports(index);
  var store = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(view);
  if (intIndex + count > store.byteLength) throw $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$RangeError($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$WRONG_INDEX);
  var bytes = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = $cc6e9716afe9d69a463f4be768698ee3$exports(bytes, start, start + count);
  return isLittleEndian ? pack : $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$reverse(pack);
};

var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = $a77b2ecadc88d521bab51b4bea666a4f$exports(index);
  var store = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(view);
  if (intIndex + count > store.byteLength) throw $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$RangeError($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$WRONG_INDEX);
  var bytes = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);

  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!$a8a2fe21efc1b75729a75207d78fad1$exports) {
  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer = function ArrayBuffer(length) {
    $efdb39c4d2e2c908195dbaea02$exports(this, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype);
    var byteLength = $a77b2ecadc88d521bab51b4bea666a4f$exports(length);
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$setInternalState(this, {
      bytes: $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$fill($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!$e00ad6be039fed7616edf60d1993dd68$exports) this.byteLength = byteLength;
  };

  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE];

  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView = function DataView(buffer, byteOffset, byteLength) {
    $efdb39c4d2e2c908195dbaea02$exports(this, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype);
    $efdb39c4d2e2c908195dbaea02$exports(buffer, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype);
    var bufferLength = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getInternalState(buffer).byteLength;
    var offset = $bf8ad804a45a7758e2af68c24813726$exports(byteOffset);
    if (offset < 0 || offset > bufferLength) throw $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : $e7bef2d1f081c78aabb47752ab106597$exports(byteLength);
    if (offset + byteLength > bufferLength) throw $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$RangeError($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$WRONG_LENGTH);
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });

    if (!$e00ad6be039fed7616edf60d1993dd68$exports) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE];

  if ($e00ad6be039fed7616edf60d1993dd68$exports) {
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$addGetter($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer, 'byteLength');
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$addGetter($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView, 'buffer');
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$addGetter($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView, 'byteLength');
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$addGetter($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView, 'byteOffset');
  }

  $d023e27ccf14e7a42c20ed6b04f61045$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackInt32($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackInt32($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackIEEE754($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$unpackIEEE754($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 1, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 1, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 2, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 2, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 4, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 4, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 4, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$set(this, 8, byteOffset, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$INCORRECT_ARRAY_BUFFER_NAME = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROPER_FUNCTION_NAME && $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer.name !== $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */

  /* eslint-disable no-new -- required for testing */
  if (!$aef132f3eccbd652122c346f72f29314$exports(function () {
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer(1);
  }) || !$aef132f3eccbd652122c346f72f29314$exports(function () {
    new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer(-1);
  }) || $aef132f3eccbd652122c346f72f29314$exports(function () {
    new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer();
    new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer(1.5);
    new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer(NaN);
    return $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$INCORRECT_ARRAY_BUFFER_NAME && !$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer = function ArrayBuffer(length) {
      $efdb39c4d2e2c908195dbaea02$exports(this, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype);
      return new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer($a77b2ecadc88d521bab51b4bea666a4f$exports(length));
    };

    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$PROTOTYPE] = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype;

    for (var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$keys = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$getOwnPropertyNames($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer), $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$j = 0, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$key; $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$keys.length > $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$j;) {
      if (!(($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$key = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$keys[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$j++]) in $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer)) {
        $f89e5c9fd7cf1eb7cc9$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$key, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer[$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$key]);
      }
    }

    $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ArrayBufferPrototype.constructor = $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer;
  } else if ($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$INCORRECT_ARRAY_BUFFER_NAME && $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$CONFIGURABLE_FUNCTION_NAME) {
    $f89e5c9fd7cf1eb7cc9$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$NativeArrayBuffer, 'name', $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ARRAY_BUFFER);
  } // WebKit bug - the same parent prototype for typed arrays and data view


  // WebKit bug - the same parent prototype for typed arrays and data view
  if ($f60ead7f75dbd9cd96e3d4fd154ac$exports && $d0fbb1d77f71b361afc84719072d$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype) !== $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ObjectPrototype) {
    $f60ead7f75dbd9cd96e3d4fd154ac$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ObjectPrototype);
  } // iOS Safari 7.x bug


  // iOS Safari 7.x bug
  var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$testView = new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView(new $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer(2));
  var $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$setInt8 = $fc9b83eb643c78fabc3eaedec34ef851$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype.setInt8);
  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$testView.setInt8(0, 2147483648);
  $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$testView.setInt8(1, 2147483649);
  if ($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$testView.getInt8(0) || !$a76e01adb35d80a8d4c8bfbb7ee36ca5$var$testView.getInt8(1)) $d023e27ccf14e7a42c20ed6b04f61045$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, {
    unsafe: true
  });
}

$c58c59549867eac23eeb6$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$ARRAY_BUFFER);
$c58c59549867eac23eeb6$exports($a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView, $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$DATA_VIEW);
$a76e01adb35d80a8d4c8bfbb7ee36ca5$exports = {
  ArrayBuffer: $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$ArrayBuffer,
  DataView: $a76e01adb35d80a8d4c8bfbb7ee36ca5$var$$DataView
};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-integral-number.js
var $ed348fc65d4edcf7ed94d7d5818e04$exports = {};
var $ed348fc65d4edcf7ed94d7d5818e04$var$floor = Math.floor; // `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
$ed348fc65d4edcf7ed94d7d5818e04$exports = Number.isInteger || function isInteger(it) {
  return !$fc6d2e39baa3b220b427$exports(it) && isFinite(it) && $ed348fc65d4edcf7ed94d7d5818e04$var$floor(it) === it;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\to-offset.js
var $adf689a5ac98d8200f15be410337327c$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\to-positive-integer.js
var $a64aa242e63cf5c868d89f4be3fbe6d7$exports = {};
var $a64aa242e63cf5c868d89f4be3fbe6d7$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;

$a64aa242e63cf5c868d89f4be3fbe6d7$exports = function (it) {
  var result = $bf8ad804a45a7758e2af68c24813726$exports(it);
  if (result < 0) throw $a64aa242e63cf5c868d89f4be3fbe6d7$var$RangeError("The argument can't be less than 0");
  return result;
};

var $adf689a5ac98d8200f15be410337327c$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;

$adf689a5ac98d8200f15be410337327c$exports = function (it, BYTES) {
  var offset = $a64aa242e63cf5c868d89f4be3fbe6d7$exports(it);
  if (offset % BYTES) throw $adf689a5ac98d8200f15be410337327c$var$RangeError('Wrong offset');
  return offset;
};

var $b755421e36da8f415a57e5cd$var$getOwnPropertyNames = $fbfa8391e70d76de6161a305a015d0d1$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\typed-array-from.js
var $d69f328f61cacb256cae594fb9fa8cd2$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\function-bind-context.js
var $e4e74f51fd405dadc69f4a1afdc06$exports = {};
var $e4e74f51fd405dadc69f4a1afdc06$var$bind = $fc9b83eb643c78fabc3eaedec34ef851$exports($fc9b83eb643c78fabc3eaedec34ef851$exports.bind); // optional / simple context binding

// optional / simple context binding
$e4e74f51fd405dadc69f4a1afdc06$exports = function (fn, that) {
  $c30363469204ca0751b8c2e548352e1$exports(fn);
  return that === undefined ? fn : $a7743ac9f6aa0f8bfe0b9f6357a$exports ? $e4e74f51fd405dadc69f4a1afdc06$var$bind(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

// ASSET: D:\CookBook\node_modules\core-js\internals\get-iterator.js
var $dc6a74fdacf49990fb6b187d3b007a7$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\get-iterator-method.js
var $fa6ae4d1a291d78f4968842f8b8c$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\iterators.js
var $b0bd1c2782f402d6b48ede0feefacebd$exports = {};
$b0bd1c2782f402d6b48ede0feefacebd$exports = {};
var $fa6ae4d1a291d78f4968842f8b8c$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');

$fa6ae4d1a291d78f4968842f8b8c$exports = function (it) {
  if (it != undefined) return $a6d7559694e98dabe18236025$exports(it, $fa6ae4d1a291d78f4968842f8b8c$var$ITERATOR) || $a6d7559694e98dabe18236025$exports(it, '@@iterator') || $b0bd1c2782f402d6b48ede0feefacebd$exports[$e345bd0aabeeb025ab356e9e360a0b6f$exports(it)];
};

var $dc6a74fdacf49990fb6b187d3b007a7$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;

$dc6a74fdacf49990fb6b187d3b007a7$exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? $fa6ae4d1a291d78f4968842f8b8c$exports(argument) : usingIterator;
  if ($c30363469204ca0751b8c2e548352e1$exports(iteratorMethod)) return $edafc3d62cbbbbb38cbb496d223bffe2$exports($dcf1edbae4500c7eefdab278edf50a$exports(iteratorMethod, argument));
  throw $dc6a74fdacf49990fb6b187d3b007a7$var$TypeError($be41ffb030b7c8b0c84eb20cb07d39e$exports(argument) + ' is not iterable');
};

// ASSET: D:\CookBook\node_modules\core-js\internals\is-array-iterator-method.js
var $a591637d902a35aa4b24b0e0e1$exports = {};
var $a591637d902a35aa4b24b0e0e1$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $a591637d902a35aa4b24b0e0e1$var$ArrayPrototype = Array.prototype; // check on default Array iterator

// check on default Array iterator
$a591637d902a35aa4b24b0e0e1$exports = function (it) {
  return it !== undefined && ($b0bd1c2782f402d6b48ede0feefacebd$exports.Array === it || $a591637d902a35aa4b24b0e0e1$var$ArrayPrototype[$a591637d902a35aa4b24b0e0e1$var$ITERATOR] === it);
};

var $d69f328f61cacb256cae594fb9fa8cd2$var$aTypedArrayConstructor = $eb879e9871798e5f9d6bdb496507397$exports.aTypedArrayConstructor;

$d69f328f61cacb256cae594fb9fa8cd2$exports = function from(source
/* , mapfn, thisArg */
) {
  var C = $aebc0e590fa45f699cb16b071606d01$exports(this);
  var O = $e169c382b25155e03c3ba184e00d2a$exports(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = $fa6ae4d1a291d78f4968842f8b8c$exports(O);
  var i, length, result, step, iterator, next;

  if (iteratorMethod && !$a591637d902a35aa4b24b0e0e1$exports(iteratorMethod)) {
    iterator = $dc6a74fdacf49990fb6b187d3b007a7$exports(O, iteratorMethod);
    next = iterator.next;
    O = [];

    while (!(step = $dcf1edbae4500c7eefdab278edf50a$exports(next, iterator)).done) {
      O.push(step.value);
    }
  }

  if (mapping && argumentsLength > 2) {
    mapfn = $e4e74f51fd405dadc69f4a1afdc06$exports(mapfn, arguments[2]);
  }

  length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(O);
  result = new ($d69f328f61cacb256cae594fb9fa8cd2$var$aTypedArrayConstructor(C))(length);

  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }

  return result;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\array-iteration.js
var $a58b4b25974e8762493c5c36af8e72$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\array-species-create.js
var $cd71738eae096cf9f856b7eaaf142b88$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\array-species-constructor.js
var $c99f6b1861b76e4edb79198079752ec$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\is-array.js
var $ba3e7bdac623a8aba0b0cf50e71dfbd6$exports = {};

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
$ba3e7bdac623a8aba0b0cf50e71dfbd6$exports = Array.isArray || function isArray(argument) {
  return $ff3cc50e74f09845d3cde3362e73cc90$exports(argument) == 'Array';
};

var $c99f6b1861b76e4edb79198079752ec$var$SPECIES = $b53a5b6a8f34b6cba070624bf2a48849$exports('species');
var $c99f6b1861b76e4edb79198079752ec$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
$c99f6b1861b76e4edb79198079752ec$exports = function (originalArray) {
  var C;

  if ($ba3e7bdac623a8aba0b0cf50e71dfbd6$exports(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    // cross-realm fallback
    if ($fbf60d370810b40ddc55a9d03336e8$exports(C) && (C === $c99f6b1861b76e4edb79198079752ec$var$Array || $ba3e7bdac623a8aba0b0cf50e71dfbd6$exports(C.prototype))) C = undefined;else if ($fc6d2e39baa3b220b427$exports(C)) {
      C = C[$c99f6b1861b76e4edb79198079752ec$var$SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? $c99f6b1861b76e4edb79198079752ec$var$Array : C;
};

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
$cd71738eae096cf9f856b7eaaf142b88$exports = function (originalArray, length) {
  return new ($c99f6b1861b76e4edb79198079752ec$exports(originalArray))(length === 0 ? 0 : length);
};

var $a58b4b25974e8762493c5c36af8e72$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var $a58b4b25974e8762493c5c36af8e72$var$createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = $e169c382b25155e03c3ba184e00d2a$exports($this);
    var self = $c2caaa0693f95ecb3268f3380cb$exports(O);
    var boundFunction = $e4e74f51fd405dadc69f4a1afdc06$exports(callbackfn, that);
    var length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(self);
    var index = 0;
    var create = specificCreate || $cd71738eae096cf9f856b7eaaf142b88$exports;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          // some
          case 5:
            return value;
          // find

          // find
          case 6:
            return index;
          // findIndex

          // findIndex
          case 2:
            $a58b4b25974e8762493c5c36af8e72$var$push(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          // every
          case 7:
            $a58b4b25974e8762493c5c36af8e72$var$push(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

$a58b4b25974e8762493c5c36af8e72$exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: $a58b4b25974e8762493c5c36af8e72$var$createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: $a58b4b25974e8762493c5c36af8e72$var$createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: $a58b4b25974e8762493c5c36af8e72$var$createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: $a58b4b25974e8762493c5c36af8e72$var$createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: $a58b4b25974e8762493c5c36af8e72$var$createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: $a58b4b25974e8762493c5c36af8e72$var$createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: $a58b4b25974e8762493c5c36af8e72$var$createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: $a58b4b25974e8762493c5c36af8e72$var$createMethod(7)
};
var $b755421e36da8f415a57e5cd$var$forEach = $a58b4b25974e8762493c5c36af8e72$exports.forEach;
// ASSET: D:\CookBook\node_modules\core-js\internals\set-species.js
var $d069fbf1e0afc874b226487be88d7e$exports = {};
var $d069fbf1e0afc874b226487be88d7e$var$SPECIES = $b53a5b6a8f34b6cba070624bf2a48849$exports('species');

$d069fbf1e0afc874b226487be88d7e$exports = function (CONSTRUCTOR_NAME) {
  var Constructor = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports(CONSTRUCTOR_NAME);
  var defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;

  if ($e00ad6be039fed7616edf60d1993dd68$exports && Constructor && !Constructor[$d069fbf1e0afc874b226487be88d7e$var$SPECIES]) {
    defineProperty(Constructor, $d069fbf1e0afc874b226487be88d7e$var$SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

// ASSET: D:\CookBook\node_modules\core-js\internals\inherit-if-required.js
var $d4680b64440948019a691880f7e749e$exports = {};

// makes subclassing work correct for wrapped built-ins
$d4680b64440948019a691880f7e749e$exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  $f60ead7f75dbd9cd96e3d4fd154ac$exports && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  $e88cf51f13e10e78d33d3e4b6f3045e6$exports(NewTarget = dummy.constructor) && NewTarget !== Wrapper && $fc6d2e39baa3b220b427$exports(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) $f60ead7f75dbd9cd96e3d4fd154ac$exports($this, NewTargetPrototype);
  return $this;
};

var $b755421e36da8f415a57e5cd$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.get;
var $b755421e36da8f415a57e5cd$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $b755421e36da8f415a57e5cd$var$nativeDefineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
var $b755421e36da8f415a57e5cd$var$nativeGetOwnPropertyDescriptor = $da043d3ed7c3b37c83995db3f7a128d$export$f;
var $b755421e36da8f415a57e5cd$var$round = Math.round;
var $b755421e36da8f415a57e5cd$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;
var $b755421e36da8f415a57e5cd$var$ArrayBuffer = $a76e01adb35d80a8d4c8bfbb7ee36ca5$exports.ArrayBuffer;
var $b755421e36da8f415a57e5cd$var$ArrayBufferPrototype = $b755421e36da8f415a57e5cd$var$ArrayBuffer.prototype;
var $b755421e36da8f415a57e5cd$var$DataView = $a76e01adb35d80a8d4c8bfbb7ee36ca5$exports.DataView;
var $b755421e36da8f415a57e5cd$var$NATIVE_ARRAY_BUFFER_VIEWS = $eb879e9871798e5f9d6bdb496507397$exports.NATIVE_ARRAY_BUFFER_VIEWS;
var $b755421e36da8f415a57e5cd$var$TYPED_ARRAY_CONSTRUCTOR = $eb879e9871798e5f9d6bdb496507397$exports.TYPED_ARRAY_CONSTRUCTOR;
var $b755421e36da8f415a57e5cd$var$TYPED_ARRAY_TAG = $eb879e9871798e5f9d6bdb496507397$exports.TYPED_ARRAY_TAG;
var $b755421e36da8f415a57e5cd$var$TypedArray = $eb879e9871798e5f9d6bdb496507397$exports.TypedArray;
var $b755421e36da8f415a57e5cd$var$TypedArrayPrototype = $eb879e9871798e5f9d6bdb496507397$exports.TypedArrayPrototype;
var $b755421e36da8f415a57e5cd$var$aTypedArrayConstructor = $eb879e9871798e5f9d6bdb496507397$exports.aTypedArrayConstructor;
var $b755421e36da8f415a57e5cd$var$isTypedArray = $eb879e9871798e5f9d6bdb496507397$exports.isTypedArray;
var $b755421e36da8f415a57e5cd$var$BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var $b755421e36da8f415a57e5cd$var$WRONG_LENGTH = 'Wrong length';

var $b755421e36da8f415a57e5cd$var$fromList = function (C, list) {
  $b755421e36da8f415a57e5cd$var$aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);

  while (length > index) result[index] = list[index++];

  return result;
};

var $b755421e36da8f415a57e5cd$var$addGetter = function (it, key) {
  $b755421e36da8f415a57e5cd$var$nativeDefineProperty(it, key, {
    get: function () {
      return $b755421e36da8f415a57e5cd$var$getInternalState(this)[key];
    }
  });
};

var $b755421e36da8f415a57e5cd$var$isArrayBuffer = function (it) {
  var klass;
  return $c238b8ff962347e6537760e1732fb6$exports($b755421e36da8f415a57e5cd$var$ArrayBufferPrototype, it) || (klass = $e345bd0aabeeb025ab356e9e360a0b6f$exports(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var $b755421e36da8f415a57e5cd$var$isTypedArrayIndex = function (target, key) {
  return $b755421e36da8f415a57e5cd$var$isTypedArray(target) && !$bf4b54ddcff738e5ff6fdd35467$exports(key) && key in target && $ed348fc65d4edcf7ed94d7d5818e04$exports(+key) && key >= 0;
};

var $b755421e36da8f415a57e5cd$var$wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = $b9250950a967cd410104f9dc0c16279$exports(key);
  return $b755421e36da8f415a57e5cd$var$isTypedArrayIndex(target, key) ? $ab54931bf5075a19025488583689585$exports(2, target[key]) : $b755421e36da8f415a57e5cd$var$nativeGetOwnPropertyDescriptor(target, key);
};

var $b755421e36da8f415a57e5cd$var$wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = $b9250950a967cd410104f9dc0c16279$exports(key);

  if ($b755421e36da8f415a57e5cd$var$isTypedArrayIndex(target, key) && $fc6d2e39baa3b220b427$exports(descriptor) && $c70f1f739ae81b1578231e191e1f0$exports(descriptor, 'value') && !$c70f1f739ae81b1578231e191e1f0$exports(descriptor, 'get') && !$c70f1f739ae81b1578231e191e1f0$exports(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
  && !descriptor.configurable && (!$c70f1f739ae81b1578231e191e1f0$exports(descriptor, 'writable') || descriptor.writable) && (!$c70f1f739ae81b1578231e191e1f0$exports(descriptor, 'enumerable') || descriptor.enumerable)) {
    target[key] = descriptor.value;
    return target;
  }

  return $b755421e36da8f415a57e5cd$var$nativeDefineProperty(target, key, descriptor);
};

if ($e00ad6be039fed7616edf60d1993dd68$exports) {
  if (!$b755421e36da8f415a57e5cd$var$NATIVE_ARRAY_BUFFER_VIEWS) {
    $da043d3ed7c3b37c83995db3f7a128d$export$f = $b755421e36da8f415a57e5cd$var$wrappedGetOwnPropertyDescriptor;
    $ad80bdb8939ee74538b84fc75a84d27$export$f = $b755421e36da8f415a57e5cd$var$wrappedDefineProperty;
    $b755421e36da8f415a57e5cd$var$addGetter($b755421e36da8f415a57e5cd$var$TypedArrayPrototype, 'buffer');
    $b755421e36da8f415a57e5cd$var$addGetter($b755421e36da8f415a57e5cd$var$TypedArrayPrototype, 'byteOffset');
    $b755421e36da8f415a57e5cd$var$addGetter($b755421e36da8f415a57e5cd$var$TypedArrayPrototype, 'byteLength');
    $b755421e36da8f415a57e5cd$var$addGetter($b755421e36da8f415a57e5cd$var$TypedArrayPrototype, 'length');
  }

  $f09cf99f84fa9bbebf324815a05f0ad3$exports({
    target: 'Object',
    stat: true,
    forced: !$b755421e36da8f415a57e5cd$var$NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    getOwnPropertyDescriptor: $b755421e36da8f415a57e5cd$var$wrappedGetOwnPropertyDescriptor,
    defineProperty: $b755421e36da8f415a57e5cd$var$wrappedDefineProperty
  });

  $b755421e36da8f415a57e5cd$exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = $b2dfbcdc0cb248234bdeab56988638b1$exports[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = $b755421e36da8f415a57e5cd$var$getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = $b755421e36da8f415a57e5cd$var$getInternalState(that);
      if (CLAMPED) value = (value = $b755421e36da8f415a57e5cd$var$round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      $b755421e36da8f415a57e5cd$var$nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!$b755421e36da8f415a57e5cd$var$NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        $efdb39c4d2e2c908195dbaea02$exports(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;

        if (!$fc6d2e39baa3b220b427$exports(data)) {
          length = $a77b2ecadc88d521bab51b4bea666a4f$exports(data);
          byteLength = length * BYTES;
          buffer = new $b755421e36da8f415a57e5cd$var$ArrayBuffer(byteLength);
        } else if ($b755421e36da8f415a57e5cd$var$isArrayBuffer(data)) {
          buffer = data;
          byteOffset = $adf689a5ac98d8200f15be410337327c$exports(offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw $b755421e36da8f415a57e5cd$var$RangeError($b755421e36da8f415a57e5cd$var$WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw $b755421e36da8f415a57e5cd$var$RangeError($b755421e36da8f415a57e5cd$var$WRONG_LENGTH);
          } else {
            byteLength = $e7bef2d1f081c78aabb47752ab106597$exports($length) * BYTES;
            if (byteLength + byteOffset > $len) throw $b755421e36da8f415a57e5cd$var$RangeError($b755421e36da8f415a57e5cd$var$WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if ($b755421e36da8f415a57e5cd$var$isTypedArray(data)) {
          return $b755421e36da8f415a57e5cd$var$fromList(TypedArrayConstructor, data);
        } else {
          return $dcf1edbae4500c7eefdab278edf50a$exports($d69f328f61cacb256cae594fb9fa8cd2$exports, TypedArrayConstructor, data);
        }

        $b755421e36da8f415a57e5cd$var$setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new $b755421e36da8f415a57e5cd$var$DataView(buffer)
        });

        while (index < length) addElement(that, index++);
      });
      if ($f60ead7f75dbd9cd96e3d4fd154ac$exports) $f60ead7f75dbd9cd96e3d4fd154ac$exports(TypedArrayConstructor, $b755421e36da8f415a57e5cd$var$TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = $ef12a9a97d55c7d234596883bab0e54c$exports($b755421e36da8f415a57e5cd$var$TypedArrayPrototype);
    } else if ($f3f972b4143a1770d03e7a5387e2d62b$exports) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        $efdb39c4d2e2c908195dbaea02$exports(dummy, TypedArrayConstructorPrototype);
        return $d4680b64440948019a691880f7e749e$exports(function () {
          if (!$fc6d2e39baa3b220b427$exports(data)) return new NativeTypedArrayConstructor($a77b2ecadc88d521bab51b4bea666a4f$exports(data));
          if ($b755421e36da8f415a57e5cd$var$isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, $adf689a5ac98d8200f15be410337327c$exports(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, $adf689a5ac98d8200f15be410337327c$exports(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
          if ($b755421e36da8f415a57e5cd$var$isTypedArray(data)) return $b755421e36da8f415a57e5cd$var$fromList(TypedArrayConstructor, data);
          return $dcf1edbae4500c7eefdab278edf50a$exports($d69f328f61cacb256cae594fb9fa8cd2$exports, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });
      if ($f60ead7f75dbd9cd96e3d4fd154ac$exports) $f60ead7f75dbd9cd96e3d4fd154ac$exports(TypedArrayConstructor, $b755421e36da8f415a57e5cd$var$TypedArray);
      $b755421e36da8f415a57e5cd$var$forEach($b755421e36da8f415a57e5cd$var$getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructorPrototype, $b755421e36da8f415a57e5cd$var$TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

    if ($b755421e36da8f415a57e5cd$var$TYPED_ARRAY_TAG) {
      $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructorPrototype, $b755421e36da8f415a57e5cd$var$TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
    $f09cf99f84fa9bbebf324815a05f0ad3$exports({
      global: true,
      forced: TypedArrayConstructor != NativeTypedArrayConstructor,
      sham: !$b755421e36da8f415a57e5cd$var$NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!($b755421e36da8f415a57e5cd$var$BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructor, $b755421e36da8f415a57e5cd$var$BYTES_PER_ELEMENT, BYTES);
    }

    if (!($b755421e36da8f415a57e5cd$var$BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      $f89e5c9fd7cf1eb7cc9$exports(TypedArrayConstructorPrototype, $b755421e36da8f415a57e5cd$var$BYTES_PER_ELEMENT, BYTES);
    }

    $d069fbf1e0afc874b226487be88d7e$exports(CONSTRUCTOR_NAME);
  };
} else $b755421e36da8f415a57e5cd$exports = function () {
  /* empty */
};

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);
// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
$b755421e36da8f415a57e5cd$exports('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
var $b0871b0624537ff659e820de4cb$var$exportTypedArrayStaticMethod = $eb879e9871798e5f9d6bdb496507397$exports.exportTypedArrayStaticMethod;
// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
$b0871b0624537ff659e820de4cb$var$exportTypedArrayStaticMethod('from', $d69f328f61cacb256cae594fb9fa8cd2$exports, $f3f972b4143a1770d03e7a5387e2d62b$exports);
var $b9d467379d7980589bc81673cb043$var$aTypedArrayConstructor = $eb879e9871798e5f9d6bdb496507397$exports.aTypedArrayConstructor;
var $b9d467379d7980589bc81673cb043$var$exportTypedArrayStaticMethod = $eb879e9871798e5f9d6bdb496507397$exports.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of

// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
$b9d467379d7980589bc81673cb043$var$exportTypedArrayStaticMethod('of', function
  /* ...items */
of() {
  var index = 0;
  var length = arguments.length;
  var result = new ($b9d467379d7980589bc81673cb043$var$aTypedArrayConstructor(this))(length);

  while (length > index) result[index] = arguments[index++];

  return result;
}, $f3f972b4143a1770d03e7a5387e2d62b$exports);
var $c6c46560927d4863512ad1ec43204$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;
var $c6c46560927d4863512ad1ec43204$var$Int8Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Int8Array;
var $c6c46560927d4863512ad1ec43204$var$Int8ArrayPrototype = $c6c46560927d4863512ad1ec43204$var$Int8Array && $c6c46560927d4863512ad1ec43204$var$Int8Array.prototype;
var $c6c46560927d4863512ad1ec43204$var$$set = $c6c46560927d4863512ad1ec43204$var$Int8ArrayPrototype && $c6c46560927d4863512ad1ec43204$var$Int8ArrayPrototype.set;
var $c6c46560927d4863512ad1ec43204$var$aTypedArray = $eb879e9871798e5f9d6bdb496507397$exports.aTypedArray;
var $c6c46560927d4863512ad1ec43204$var$exportTypedArrayMethod = $eb879e9871798e5f9d6bdb496507397$exports.exportTypedArrayMethod;
var $c6c46560927d4863512ad1ec43204$var$WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  $dcf1edbae4500c7eefdab278edf50a$exports($c6c46560927d4863512ad1ec43204$var$$set, array, {
    length: 1,
    0: 3
  }, 1);
  return array[1] !== 3;
}); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var $c6c46560927d4863512ad1ec43204$var$TO_OBJECT_BUG = $c6c46560927d4863512ad1ec43204$var$WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && $eb879e9871798e5f9d6bdb496507397$exports.NATIVE_ARRAY_BUFFER_VIEWS && $aef132f3eccbd652122c346f72f29314$exports(function () {
  var array = new $c6c46560927d4863512ad1ec43204$var$Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
}); // `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
$c6c46560927d4863512ad1ec43204$var$exportTypedArrayMethod('set', function set(arrayLike
/* , offset */
) {
  $c6c46560927d4863512ad1ec43204$var$aTypedArray(this);
  var offset = $adf689a5ac98d8200f15be410337327c$exports(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = $e169c382b25155e03c3ba184e00d2a$exports(arrayLike);
  if ($c6c46560927d4863512ad1ec43204$var$WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return $dcf1edbae4500c7eefdab278edf50a$exports($c6c46560927d4863512ad1ec43204$var$$set, this, src, offset);
  var length = this.length;
  var len = $be068fa7c9e9f9d8f456b093e8bd58e$exports(src);
  var index = 0;
  if (len + offset > length) throw $c6c46560927d4863512ad1ec43204$var$RangeError('Wrong length');

  while (index < len) this[offset + index] = src[index++];
}, !$c6c46560927d4863512ad1ec43204$var$WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || $c6c46560927d4863512ad1ec43204$var$TO_OBJECT_BUG);
// ASSET: D:\CookBook\node_modules\core-js\internals\array-sort.js
var $be6258d2d8915b1aa21362b4c0704809$exports = {};
var $be6258d2d8915b1aa21362b4c0704809$var$floor = Math.floor;

var $be6258d2d8915b1aa21362b4c0704809$var$mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = $be6258d2d8915b1aa21362b4c0704809$var$floor(length / 2);
  return length < 8 ? $be6258d2d8915b1aa21362b4c0704809$var$insertionSort(array, comparefn) : $be6258d2d8915b1aa21362b4c0704809$var$merge(array, $be6258d2d8915b1aa21362b4c0704809$var$mergeSort($cc6e9716afe9d69a463f4be768698ee3$exports(array, 0, middle), comparefn), $be6258d2d8915b1aa21362b4c0704809$var$mergeSort($cc6e9716afe9d69a463f4be768698ee3$exports(array, middle), comparefn), comparefn);
};

var $be6258d2d8915b1aa21362b4c0704809$var$insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var $be6258d2d8915b1aa21362b4c0704809$var$merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }

  return array;
};

$be6258d2d8915b1aa21362b4c0704809$exports = $be6258d2d8915b1aa21362b4c0704809$var$mergeSort;
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-ff-version.js
var $c911b76667793b0934cb6ba0acd1c3$exports = {};
var $c911b76667793b0934cb6ba0acd1c3$var$firefox = $b912fd243e61f4d4be77ca482e261e8$exports.match(/firefox\/(\d+)/i);
$c911b76667793b0934cb6ba0acd1c3$exports = !!$c911b76667793b0934cb6ba0acd1c3$var$firefox && +$c911b76667793b0934cb6ba0acd1c3$var$firefox[1];
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-is-ie-or-edge.js
var $f3507dd56e68330681af1e9aa7ff1$exports = {};
$f3507dd56e68330681af1e9aa7ff1$exports = /MSIE|Trident/.test($b912fd243e61f4d4be77ca482e261e8$exports);
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-webkit-version.js
var $a47f35350868deb2a2772ac3679c0020$exports = {};
var $a47f35350868deb2a2772ac3679c0020$var$webkit = $b912fd243e61f4d4be77ca482e261e8$exports.match(/AppleWebKit\/(\d+)\./);
$a47f35350868deb2a2772ac3679c0020$exports = !!$a47f35350868deb2a2772ac3679c0020$var$webkit && +$a47f35350868deb2a2772ac3679c0020$var$webkit[1];
var $b4b181cd824703033757a9d2d48580$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array;
var $b4b181cd824703033757a9d2d48580$var$aTypedArray = $eb879e9871798e5f9d6bdb496507397$exports.aTypedArray;
var $b4b181cd824703033757a9d2d48580$var$exportTypedArrayMethod = $eb879e9871798e5f9d6bdb496507397$exports.exportTypedArrayMethod;
var $b4b181cd824703033757a9d2d48580$var$Uint16Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Uint16Array;
var $b4b181cd824703033757a9d2d48580$var$un$Sort = $b4b181cd824703033757a9d2d48580$var$Uint16Array && $fc9b83eb643c78fabc3eaedec34ef851$exports($b4b181cd824703033757a9d2d48580$var$Uint16Array.prototype.sort); // WebKit

// WebKit
var $b4b181cd824703033757a9d2d48580$var$ACCEPT_INCORRECT_ARGUMENTS = !!$b4b181cd824703033757a9d2d48580$var$un$Sort && !($aef132f3eccbd652122c346f72f29314$exports(function () {
  $b4b181cd824703033757a9d2d48580$var$un$Sort(new $b4b181cd824703033757a9d2d48580$var$Uint16Array(2), null);
}) && $aef132f3eccbd652122c346f72f29314$exports(function () {
  $b4b181cd824703033757a9d2d48580$var$un$Sort(new $b4b181cd824703033757a9d2d48580$var$Uint16Array(2), {});
}));
var $b4b181cd824703033757a9d2d48580$var$STABLE_SORT = !!$b4b181cd824703033757a9d2d48580$var$un$Sort && !$aef132f3eccbd652122c346f72f29314$exports(function () {
  // feature detection can be too slow, so check engines versions
  if ($be02266105a927ec6d51a5388524b8$exports) return $be02266105a927ec6d51a5388524b8$exports < 74;
  if ($c911b76667793b0934cb6ba0acd1c3$exports) return $c911b76667793b0934cb6ba0acd1c3$exports < 67;
  if ($f3507dd56e68330681af1e9aa7ff1$exports) return true;
  if ($a47f35350868deb2a2772ac3679c0020$exports) return $a47f35350868deb2a2772ac3679c0020$exports < 602;
  var array = new $b4b181cd824703033757a9d2d48580$var$Uint16Array(516);
  var expected = $b4b181cd824703033757a9d2d48580$var$Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  $b4b181cd824703033757a9d2d48580$var$un$Sort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var $b4b181cd824703033757a9d2d48580$var$getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
}; // `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
$b4b181cd824703033757a9d2d48580$var$exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) $c30363469204ca0751b8c2e548352e1$exports(comparefn);
  if ($b4b181cd824703033757a9d2d48580$var$STABLE_SORT) return $b4b181cd824703033757a9d2d48580$var$un$Sort(this, comparefn);
  return $be6258d2d8915b1aa21362b4c0704809$exports($b4b181cd824703033757a9d2d48580$var$aTypedArray(this), $b4b181cd824703033757a9d2d48580$var$getSortCompare(comparefn));
}, !$b4b181cd824703033757a9d2d48580$var$STABLE_SORT || $b4b181cd824703033757a9d2d48580$var$ACCEPT_INCORRECT_ARGUMENTS);
// ASSET: D:\CookBook\node_modules\core-js\internals\dom-iterables.js
var $c40430878c1899225044220de2de9a7$exports = {};
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
$c40430878c1899225044220de2de9a7$exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
// ASSET: D:\CookBook\node_modules\core-js\internals\dom-token-list-prototype.js
var $bb0111c60dd08f12de149af6df4b30c0$exports = {};
var $bb0111c60dd08f12de149af6df4b30c0$var$classList = $c9b68b6f116d807b2e4e0f715be2a10$exports('span').classList;
var $bb0111c60dd08f12de149af6df4b30c0$var$DOMTokenListPrototype = $bb0111c60dd08f12de149af6df4b30c0$var$classList && $bb0111c60dd08f12de149af6df4b30c0$var$classList.constructor && $bb0111c60dd08f12de149af6df4b30c0$var$classList.constructor.prototype;
$bb0111c60dd08f12de149af6df4b30c0$exports = $bb0111c60dd08f12de149af6df4b30c0$var$DOMTokenListPrototype === Object.prototype ? undefined : $bb0111c60dd08f12de149af6df4b30c0$var$DOMTokenListPrototype;
// ASSET: D:\CookBook\node_modules\core-js\modules\es.array.iterator.js
var $aeb7c38c382823571110e7fa019951$exports = {};
var $aeb7c38c382823571110e7fa019951$var$defineProperty = $ad80bdb8939ee74538b84fc75a84d27$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\define-iterator.js
var $e3d46602cddf8d37743b96ed8029241f$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\create-iterator-constructor.js
var $e5ad950cf58a6bf3ae4e13229f959a64$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\iterators-core.js
var $b01964a8fb8c8b077e7fc0bd06bf6$exports = {};
var $b01964a8fb8c8b077e7fc0bd06bf6$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $b01964a8fb8c8b077e7fc0bd06bf6$var$BUGGY_SAFARI_ITERATORS = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype, $b01964a8fb8c8b077e7fc0bd06bf6$var$PrototypeOfArrayIteratorPrototype, $b01964a8fb8c8b077e7fc0bd06bf6$var$arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  $b01964a8fb8c8b077e7fc0bd06bf6$var$arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in $b01964a8fb8c8b077e7fc0bd06bf6$var$arrayIterator)) $b01964a8fb8c8b077e7fc0bd06bf6$var$BUGGY_SAFARI_ITERATORS = true;else {
    $b01964a8fb8c8b077e7fc0bd06bf6$var$PrototypeOfArrayIteratorPrototype = $d0fbb1d77f71b361afc84719072d$exports($d0fbb1d77f71b361afc84719072d$exports($b01964a8fb8c8b077e7fc0bd06bf6$var$arrayIterator));
    if ($b01964a8fb8c8b077e7fc0bd06bf6$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype = $b01964a8fb8c8b077e7fc0bd06bf6$var$PrototypeOfArrayIteratorPrototype;
  }
}

var $b01964a8fb8c8b077e7fc0bd06bf6$var$NEW_ITERATOR_PROTOTYPE = $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype == undefined || $aef132f3eccbd652122c346f72f29314$exports(function () {
  var test = {}; // FF44- legacy iterators case

  // FF44- legacy iterators case
  return $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype[$b01964a8fb8c8b077e7fc0bd06bf6$var$ITERATOR].call(test) !== test;
});
if ($b01964a8fb8c8b077e7fc0bd06bf6$var$NEW_ITERATOR_PROTOTYPE) $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype = {};else if ($f753765fca2ce7a45b8c4480d2568$exports) $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype = $ef12a9a97d55c7d234596883bab0e54c$exports($b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype); // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!$e88cf51f13e10e78d33d3e4b6f3045e6$exports($b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype[$b01964a8fb8c8b077e7fc0bd06bf6$var$ITERATOR])) {
  $f6b650ac0564db3a1dfe92ff64a576d7$exports($b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype, $b01964a8fb8c8b077e7fc0bd06bf6$var$ITERATOR, function () {
    return this;
  });
}

$b01964a8fb8c8b077e7fc0bd06bf6$exports = {
  IteratorPrototype: $b01964a8fb8c8b077e7fc0bd06bf6$var$IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: $b01964a8fb8c8b077e7fc0bd06bf6$var$BUGGY_SAFARI_ITERATORS
};
var $e5ad950cf58a6bf3ae4e13229f959a64$var$IteratorPrototype = $b01964a8fb8c8b077e7fc0bd06bf6$exports.IteratorPrototype;

var $e5ad950cf58a6bf3ae4e13229f959a64$var$returnThis = function () {
  return this;
};

$e5ad950cf58a6bf3ae4e13229f959a64$exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = $ef12a9a97d55c7d234596883bab0e54c$exports($e5ad950cf58a6bf3ae4e13229f959a64$var$IteratorPrototype, {
    next: $ab54931bf5075a19025488583689585$exports(+!ENUMERABLE_NEXT, next)
  });
  $c58c59549867eac23eeb6$exports(IteratorConstructor, TO_STRING_TAG, false, true);
  $b0bd1c2782f402d6b48ede0feefacebd$exports[TO_STRING_TAG] = $e5ad950cf58a6bf3ae4e13229f959a64$var$returnThis;
  return IteratorConstructor;
};

var $e3d46602cddf8d37743b96ed8029241f$var$PROPER_FUNCTION_NAME = $efa56d6f38b18a3e8804095e0a0bd17$exports.PROPER;
var $e3d46602cddf8d37743b96ed8029241f$var$CONFIGURABLE_FUNCTION_NAME = $efa56d6f38b18a3e8804095e0a0bd17$exports.CONFIGURABLE;
var $e3d46602cddf8d37743b96ed8029241f$var$IteratorPrototype = $b01964a8fb8c8b077e7fc0bd06bf6$exports.IteratorPrototype;
var $e3d46602cddf8d37743b96ed8029241f$var$BUGGY_SAFARI_ITERATORS = $b01964a8fb8c8b077e7fc0bd06bf6$exports.BUGGY_SAFARI_ITERATORS;
var $e3d46602cddf8d37743b96ed8029241f$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $e3d46602cddf8d37743b96ed8029241f$var$KEYS = 'keys';
var $e3d46602cddf8d37743b96ed8029241f$var$VALUES = 'values';
var $e3d46602cddf8d37743b96ed8029241f$var$ENTRIES = 'entries';

var $e3d46602cddf8d37743b96ed8029241f$var$returnThis = function () {
  return this;
};

$e3d46602cddf8d37743b96ed8029241f$exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  $e5ad950cf58a6bf3ae4e13229f959a64$exports(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!$e3d46602cddf8d37743b96ed8029241f$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case $e3d46602cddf8d37743b96ed8029241f$var$KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case $e3d46602cddf8d37743b96ed8029241f$var$VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case $e3d46602cddf8d37743b96ed8029241f$var$ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[$e3d46602cddf8d37743b96ed8029241f$var$ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !$e3d46602cddf8d37743b96ed8029241f$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = $d0fbb1d77f71b361afc84719072d$exports(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!$f753765fca2ce7a45b8c4480d2568$exports && $d0fbb1d77f71b361afc84719072d$exports(CurrentIteratorPrototype) !== $e3d46602cddf8d37743b96ed8029241f$var$IteratorPrototype) {
        if ($f60ead7f75dbd9cd96e3d4fd154ac$exports) {
          $f60ead7f75dbd9cd96e3d4fd154ac$exports(CurrentIteratorPrototype, $e3d46602cddf8d37743b96ed8029241f$var$IteratorPrototype);
        } else if (!$e88cf51f13e10e78d33d3e4b6f3045e6$exports(CurrentIteratorPrototype[$e3d46602cddf8d37743b96ed8029241f$var$ITERATOR])) {
          $f6b650ac0564db3a1dfe92ff64a576d7$exports(CurrentIteratorPrototype, $e3d46602cddf8d37743b96ed8029241f$var$ITERATOR, $e3d46602cddf8d37743b96ed8029241f$var$returnThis);
        }
      } // Set @@toStringTag to native iterators


      // Set @@toStringTag to native iterators
      $c58c59549867eac23eeb6$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if ($f753765fca2ce7a45b8c4480d2568$exports) $b0bd1c2782f402d6b48ede0feefacebd$exports[TO_STRING_TAG] = $e3d46602cddf8d37743b96ed8029241f$var$returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if ($e3d46602cddf8d37743b96ed8029241f$var$PROPER_FUNCTION_NAME && DEFAULT == $e3d46602cddf8d37743b96ed8029241f$var$VALUES && nativeIterator && nativeIterator.name !== $e3d46602cddf8d37743b96ed8029241f$var$VALUES) {
    if (!$f753765fca2ce7a45b8c4480d2568$exports && $e3d46602cddf8d37743b96ed8029241f$var$CONFIGURABLE_FUNCTION_NAME) {
      $f89e5c9fd7cf1eb7cc9$exports(IterablePrototype, 'name', $e3d46602cddf8d37743b96ed8029241f$var$VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return $dcf1edbae4500c7eefdab278edf50a$exports(nativeIterator, this);
      };
    }
  } // export additional methods


  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod($e3d46602cddf8d37743b96ed8029241f$var$VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod($e3d46602cddf8d37743b96ed8029241f$var$KEYS),
      entries: getIterationMethod($e3d46602cddf8d37743b96ed8029241f$var$ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if ($e3d46602cddf8d37743b96ed8029241f$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        $f6b650ac0564db3a1dfe92ff64a576d7$exports(IterablePrototype, KEY, methods[KEY]);
      }
    } else $f09cf99f84fa9bbebf324815a05f0ad3$exports({
      target: NAME,
      proto: true,
      forced: $e3d46602cddf8d37743b96ed8029241f$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  // define iterator
  if ((!$f753765fca2ce7a45b8c4480d2568$exports || FORCED) && IterablePrototype[$e3d46602cddf8d37743b96ed8029241f$var$ITERATOR] !== defaultIterator) {
    $f6b650ac0564db3a1dfe92ff64a576d7$exports(IterablePrototype, $e3d46602cddf8d37743b96ed8029241f$var$ITERATOR, defaultIterator, {
      name: DEFAULT
    });
  }

  $b0bd1c2782f402d6b48ede0feefacebd$exports[NAME] = defaultIterator;
  return methods;
};

var $aeb7c38c382823571110e7fa019951$var$ARRAY_ITERATOR = 'Array Iterator';
var $aeb7c38c382823571110e7fa019951$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $aeb7c38c382823571110e7fa019951$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.getterFor($aeb7c38c382823571110e7fa019951$var$ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
$aeb7c38c382823571110e7fa019951$exports = $e3d46602cddf8d37743b96ed8029241f$exports(Array, 'Array', function (iterated, kind) {
  $aeb7c38c382823571110e7fa019951$var$setInternalState(this, {
    type: $aeb7c38c382823571110e7fa019951$var$ARRAY_ITERATOR,
    target: $f0977e1e57e5997d97203bdda40243$exports(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = $aeb7c38c382823571110e7fa019951$var$getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var $aeb7c38c382823571110e7fa019951$var$values = $b0bd1c2782f402d6b48ede0feefacebd$exports.Arguments = $b0bd1c2782f402d6b48ede0feefacebd$exports.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$f9cb2bc4475c56ab01b19a42566461b$exports('keys');
$f9cb2bc4475c56ab01b19a42566461b$exports('values');
$f9cb2bc4475c56ab01b19a42566461b$exports('entries'); // V8 ~ Chrome 45- bug

// V8 ~ Chrome 45- bug
if (!$f753765fca2ce7a45b8c4480d2568$exports && $e00ad6be039fed7616edf60d1993dd68$exports && $aeb7c38c382823571110e7fa019951$var$values.name !== 'values') try {
  $aeb7c38c382823571110e7fa019951$var$defineProperty($aeb7c38c382823571110e7fa019951$var$values, 'name', {
    value: 'values'
  });
} catch (error) {
  /* empty */
}
var $cd1581c117f2061f50d4a2364794a5$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $cd1581c117f2061f50d4a2364794a5$var$TO_STRING_TAG = $b53a5b6a8f34b6cba070624bf2a48849$exports('toStringTag');
var $cd1581c117f2061f50d4a2364794a5$var$ArrayValues = $aeb7c38c382823571110e7fa019951$exports.values;

var $cd1581c117f2061f50d4a2364794a5$var$handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[$cd1581c117f2061f50d4a2364794a5$var$ITERATOR] !== $cd1581c117f2061f50d4a2364794a5$var$ArrayValues) try {
      $f89e5c9fd7cf1eb7cc9$exports(CollectionPrototype, $cd1581c117f2061f50d4a2364794a5$var$ITERATOR, $cd1581c117f2061f50d4a2364794a5$var$ArrayValues);
    } catch (error) {
      CollectionPrototype[$cd1581c117f2061f50d4a2364794a5$var$ITERATOR] = $cd1581c117f2061f50d4a2364794a5$var$ArrayValues;
    }

    if (!CollectionPrototype[$cd1581c117f2061f50d4a2364794a5$var$TO_STRING_TAG]) {
      $f89e5c9fd7cf1eb7cc9$exports(CollectionPrototype, $cd1581c117f2061f50d4a2364794a5$var$TO_STRING_TAG, COLLECTION_NAME);
    }

    if ($c40430878c1899225044220de2de9a7$exports[COLLECTION_NAME]) for (var METHOD_NAME in $aeb7c38c382823571110e7fa019951$exports) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== $aeb7c38c382823571110e7fa019951$exports[METHOD_NAME]) try {
        $f89e5c9fd7cf1eb7cc9$exports(CollectionPrototype, METHOD_NAME, $aeb7c38c382823571110e7fa019951$exports[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = $aeb7c38c382823571110e7fa019951$exports[METHOD_NAME];
      }
    }
  }
};

for (var $cd1581c117f2061f50d4a2364794a5$var$COLLECTION_NAME in $c40430878c1899225044220de2de9a7$exports) {
  $cd1581c117f2061f50d4a2364794a5$var$handlePrototype($b2dfbcdc0cb248234bdeab56988638b1$exports[$cd1581c117f2061f50d4a2364794a5$var$COLLECTION_NAME] && $b2dfbcdc0cb248234bdeab56988638b1$exports[$cd1581c117f2061f50d4a2364794a5$var$COLLECTION_NAME].prototype, $cd1581c117f2061f50d4a2364794a5$var$COLLECTION_NAME);
}

$cd1581c117f2061f50d4a2364794a5$var$handlePrototype($bb0111c60dd08f12de149af6df4b30c0$exports, 'DOMTokenList');
// ASSET: D:\CookBook\node_modules\core-js\internals\task.js
var $eb10b1dcf14b9f3df45010fc859aa9ab$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\array-slice.js
var $b6da90ec95d3983441cad81$exports = {};
$b6da90ec95d3983441cad81$exports = $fc9b83eb643c78fabc3eaedec34ef851$exports([].slice);
// ASSET: D:\CookBook\node_modules\core-js\internals\validate-arguments-length.js
var $f326c16013020730ca5e26382f202511$exports = {};
var $f326c16013020730ca5e26382f202511$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;

$f326c16013020730ca5e26382f202511$exports = function (passed, required) {
  if (passed < required) throw $f326c16013020730ca5e26382f202511$var$TypeError('Not enough arguments');
  return passed;
};

// ASSET: D:\CookBook\node_modules\core-js\internals\engine-is-ios.js
var $cf0b4fccacba4e32429df87331541714$exports = {};
$cf0b4fccacba4e32429df87331541714$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($b912fd243e61f4d4be77ca482e261e8$exports);
// ASSET: D:\CookBook\node_modules\core-js\internals\engine-is-node.js
var $ff9329476a735fc580fe8224e809e199$exports = {};
$ff9329476a735fc580fe8224e809e199$exports = $ff3cc50e74f09845d3cde3362e73cc90$exports($b2dfbcdc0cb248234bdeab56988638b1$exports.process) == 'process';
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$set = $b2dfbcdc0cb248234bdeab56988638b1$exports.setImmediate;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$clear = $b2dfbcdc0cb248234bdeab56988638b1$exports.clearImmediate;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$process = $b2dfbcdc0cb248234bdeab56988638b1$exports.process;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$Dispatch = $b2dfbcdc0cb248234bdeab56988638b1$exports.Dispatch;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$Function = $b2dfbcdc0cb248234bdeab56988638b1$exports.Function;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$MessageChannel = $b2dfbcdc0cb248234bdeab56988638b1$exports.MessageChannel;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$String = $b2dfbcdc0cb248234bdeab56988638b1$exports.String;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$counter = 0;
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$queue = {};
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$ONREADYSTATECHANGE = 'onreadystatechange';
var $eb10b1dcf14b9f3df45010fc859aa9ab$var$location, $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer, $eb10b1dcf14b9f3df45010fc859aa9ab$var$channel, $eb10b1dcf14b9f3df45010fc859aa9ab$var$port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $eb10b1dcf14b9f3df45010fc859aa9ab$var$location = $b2dfbcdc0cb248234bdeab56988638b1$exports.location;
} catch (error) {
  /* empty */
}

var $eb10b1dcf14b9f3df45010fc859aa9ab$var$run = function (id) {
  if ($c70f1f739ae81b1578231e191e1f0$exports($eb10b1dcf14b9f3df45010fc859aa9ab$var$queue, id)) {
    var fn = $eb10b1dcf14b9f3df45010fc859aa9ab$var$queue[id];
    delete $eb10b1dcf14b9f3df45010fc859aa9ab$var$queue[id];
    fn();
  }
};

var $eb10b1dcf14b9f3df45010fc859aa9ab$var$runner = function (id) {
  return function () {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$run(id);
  };
};

var $eb10b1dcf14b9f3df45010fc859aa9ab$var$listener = function (event) {
  $eb10b1dcf14b9f3df45010fc859aa9ab$var$run(event.data);
};

var $eb10b1dcf14b9f3df45010fc859aa9ab$var$post = function (id) {
  // old engines have not location.origin
  $b2dfbcdc0cb248234bdeab56988638b1$exports.postMessage($eb10b1dcf14b9f3df45010fc859aa9ab$var$String(id), $eb10b1dcf14b9f3df45010fc859aa9ab$var$location.protocol + '//' + $eb10b1dcf14b9f3df45010fc859aa9ab$var$location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$eb10b1dcf14b9f3df45010fc859aa9ab$var$set || !$eb10b1dcf14b9f3df45010fc859aa9ab$var$clear) {
  $eb10b1dcf14b9f3df45010fc859aa9ab$var$set = function setImmediate(handler) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var fn = $e88cf51f13e10e78d33d3e4b6f3045e6$exports(handler) ? handler : $eb10b1dcf14b9f3df45010fc859aa9ab$var$Function(handler);
    var args = $b6da90ec95d3983441cad81$exports(arguments, 1);

    $eb10b1dcf14b9f3df45010fc859aa9ab$var$queue[++$eb10b1dcf14b9f3df45010fc859aa9ab$var$counter] = function () {
      $ec27c5e32d6ae19849af55162a0c$exports(fn, undefined, args);
    };

    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer($eb10b1dcf14b9f3df45010fc859aa9ab$var$counter);
    return $eb10b1dcf14b9f3df45010fc859aa9ab$var$counter;
  };

  $eb10b1dcf14b9f3df45010fc859aa9ab$var$clear = function clearImmediate(id) {
    delete $eb10b1dcf14b9f3df45010fc859aa9ab$var$queue[id];
  }; // Node.js 0.8-


  // Node.js 0.8-
  if ($ff9329476a735fc580fe8224e809e199$exports) {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = function (id) {
      $eb10b1dcf14b9f3df45010fc859aa9ab$var$process.nextTick($eb10b1dcf14b9f3df45010fc859aa9ab$var$runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if ($eb10b1dcf14b9f3df45010fc859aa9ab$var$Dispatch && $eb10b1dcf14b9f3df45010fc859aa9ab$var$Dispatch.now) {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = function (id) {
      $eb10b1dcf14b9f3df45010fc859aa9ab$var$Dispatch.now($eb10b1dcf14b9f3df45010fc859aa9ab$var$runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624

  } else if ($eb10b1dcf14b9f3df45010fc859aa9ab$var$MessageChannel && !$cf0b4fccacba4e32429df87331541714$exports) {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$channel = new $eb10b1dcf14b9f3df45010fc859aa9ab$var$MessageChannel();
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$port = $eb10b1dcf14b9f3df45010fc859aa9ab$var$channel.port2;
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$channel.port1.onmessage = $eb10b1dcf14b9f3df45010fc859aa9ab$var$listener;
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = $e4e74f51fd405dadc69f4a1afdc06$exports($eb10b1dcf14b9f3df45010fc859aa9ab$var$port.postMessage, $eb10b1dcf14b9f3df45010fc859aa9ab$var$port); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if ($b2dfbcdc0cb248234bdeab56988638b1$exports.addEventListener && $e88cf51f13e10e78d33d3e4b6f3045e6$exports($b2dfbcdc0cb248234bdeab56988638b1$exports.postMessage) && !$b2dfbcdc0cb248234bdeab56988638b1$exports.importScripts && $eb10b1dcf14b9f3df45010fc859aa9ab$var$location && $eb10b1dcf14b9f3df45010fc859aa9ab$var$location.protocol !== 'file:' && !$aef132f3eccbd652122c346f72f29314$exports($eb10b1dcf14b9f3df45010fc859aa9ab$var$post)) {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = $eb10b1dcf14b9f3df45010fc859aa9ab$var$post;
    $b2dfbcdc0cb248234bdeab56988638b1$exports.addEventListener('message', $eb10b1dcf14b9f3df45010fc859aa9ab$var$listener, false); // IE8-
  } else if ($eb10b1dcf14b9f3df45010fc859aa9ab$var$ONREADYSTATECHANGE in $c9b68b6f116d807b2e4e0f715be2a10$exports('script')) {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = function (id) {
      $af66fa176871125275da6c44c658fd$exports.appendChild($c9b68b6f116d807b2e4e0f715be2a10$exports('script'))[$eb10b1dcf14b9f3df45010fc859aa9ab$var$ONREADYSTATECHANGE] = function () {
        $af66fa176871125275da6c44c658fd$exports.removeChild(this);
        $eb10b1dcf14b9f3df45010fc859aa9ab$var$run(id);
      };
    }; // Rest old browsers

  } else {
    $eb10b1dcf14b9f3df45010fc859aa9ab$var$defer = function (id) {
      setTimeout($eb10b1dcf14b9f3df45010fc859aa9ab$var$runner(id), 0);
    };
  }
}

$eb10b1dcf14b9f3df45010fc859aa9ab$exports = {
  set: $eb10b1dcf14b9f3df45010fc859aa9ab$var$set,
  clear: $eb10b1dcf14b9f3df45010fc859aa9ab$var$clear
};
var $f90213b2d2b0d60bf998682b3da65b1$var$FORCED = !$b2dfbcdc0cb248234bdeab56988638b1$exports.setImmediate || !$b2dfbcdc0cb248234bdeab56988638b1$exports.clearImmediate; // http://w3c.github.io/setImmediate/

// http://w3c.github.io/setImmediate/
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  global: true,
  bind: true,
  enumerable: true,
  forced: $f90213b2d2b0d60bf998682b3da65b1$var$FORCED
}, {
  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  setImmediate: $eb10b1dcf14b9f3df45010fc859aa9ab$exports.set,
  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  clearImmediate: $eb10b1dcf14b9f3df45010fc859aa9ab$exports.clear
});
// ASSET: D:\CookBook\node_modules\core-js\modules\es.string.iterator.js
var $e745d60c3f928a6aa227fdf46ee1fc0e$var$charAt = $c4467e91600a59496715ba76dd77$exports.charAt;
var $e745d60c3f928a6aa227fdf46ee1fc0e$var$STRING_ITERATOR = 'String Iterator';
var $e745d60c3f928a6aa227fdf46ee1fc0e$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $e745d60c3f928a6aa227fdf46ee1fc0e$var$getInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.getterFor($e745d60c3f928a6aa227fdf46ee1fc0e$var$STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
$e3d46602cddf8d37743b96ed8029241f$exports(String, 'String', function (iterated) {
  $e745d60c3f928a6aa227fdf46ee1fc0e$var$setInternalState(this, {
    type: $e745d60c3f928a6aa227fdf46ee1fc0e$var$STRING_ITERATOR,
    string: $f83d2933d0b8cd4aeed3806c1$exports(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = $e745d60c3f928a6aa227fdf46ee1fc0e$var$getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = $e745d60c3f928a6aa227fdf46ee1fc0e$var$charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});
// ASSET: D:\CookBook\node_modules\core-js\internals\native-url.js
var $a8e9e5e41e80e9d28942c49acb6269fb$exports = {};
var $a8e9e5e41e80e9d28942c49acb6269fb$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
$a8e9e5e41e80e9d28942c49acb6269fb$exports = !$aef132f3eccbd652122c346f72f29314$exports(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return $f753765fca2ce7a45b8c4480d2568$exports && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[$a8e9e5e41e80e9d28942c49acb6269fb$var$ITERATOR] // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
  || result !== 'a1c3' // throws in Safari
  || new URL('http://x', undefined).host !== 'x';
});
var $df10ca4db49d6eeefe1ef9825b72$var$defineProperties = $bec40dd79fa8d12cf11d4eb132f2d5b$export$f;
// ASSET: D:\CookBook\node_modules\core-js\internals\object-assign.js
var $c304fd9bdc40189acd382a196b092f0b$exports = {};
// eslint-disable-next-line es/no-object-assign -- safe
var $c304fd9bdc40189acd382a196b092f0b$var$$assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var $c304fd9bdc40189acd382a196b092f0b$var$defineProperty = Object.defineProperty;
var $c304fd9bdc40189acd382a196b092f0b$var$concat = $fc9b83eb643c78fabc3eaedec34ef851$exports([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$c304fd9bdc40189acd382a196b092f0b$exports = !$c304fd9bdc40189acd382a196b092f0b$var$$assign || $aef132f3eccbd652122c346f72f29314$exports(function () {
  // should have correct order of operations (Edge bug)
  if ($e00ad6be039fed7616edf60d1993dd68$exports && $c304fd9bdc40189acd382a196b092f0b$var$$assign({
    b: 1
  }, $c304fd9bdc40189acd382a196b092f0b$var$$assign($c304fd9bdc40189acd382a196b092f0b$var$defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      $c304fd9bdc40189acd382a196b092f0b$var$defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $c304fd9bdc40189acd382a196b092f0b$var$$assign({}, A)[symbol] != 7 || $d4855818cad3192457dbef73b232e41$exports($c304fd9bdc40189acd382a196b092f0b$var$$assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = $e169c382b25155e03c3ba184e00d2a$exports(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = $ff61e696947cb3857363764f23a62f$export$f;
  var propertyIsEnumerable = $f8d5293c708e4ef08e2773bbb4855f$export$f;

  while (argumentsLength > index) {
    var S = $c2caaa0693f95ecb3268f3380cb$exports(arguments[index++]);
    var keys = getOwnPropertySymbols ? $c304fd9bdc40189acd382a196b092f0b$var$concat($d4855818cad3192457dbef73b232e41$exports(S), getOwnPropertySymbols(S)) : $d4855818cad3192457dbef73b232e41$exports(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!$e00ad6be039fed7616edf60d1993dd68$exports || $dcf1edbae4500c7eefdab278edf50a$exports(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $c304fd9bdc40189acd382a196b092f0b$var$$assign;
// ASSET: D:\CookBook\node_modules\core-js\internals\array-from.js
var $c36a9dd3e9c8df8be5f0f547037826b$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\call-with-safe-iteration-closing.js
var $e67039136e6dc1df9291389f26eb8$exports = {};
// ASSET: D:\CookBook\node_modules\core-js\internals\iterator-close.js
var $d9d5f2887eacf91731df6d8a4387b1a1$exports = {};

$d9d5f2887eacf91731df6d8a4387b1a1$exports = function (iterator, kind, value) {
  var innerResult, innerError;
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(iterator);

  try {
    innerResult = $a6d7559694e98dabe18236025$exports(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = $dcf1edbae4500c7eefdab278edf50a$exports(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  $edafc3d62cbbbbb38cbb496d223bffe2$exports(innerResult);
  return value;
};

// call something on iterator step with safe closing on error
$e67039136e6dc1df9291389f26eb8$exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn($edafc3d62cbbbbb38cbb496d223bffe2$exports(value)[0], value[1]) : fn(value);
  } catch (error) {
    $d9d5f2887eacf91731df6d8a4387b1a1$exports(iterator, 'throw', error);
  }
};

var $c36a9dd3e9c8df8be5f0f547037826b$var$Array = $b2dfbcdc0cb248234bdeab56988638b1$exports.Array; // `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
$c36a9dd3e9c8df8be5f0f547037826b$exports = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = $e169c382b25155e03c3ba184e00d2a$exports(arrayLike);
  var IS_CONSTRUCTOR = $fbf60d370810b40ddc55a9d03336e8$exports(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = $e4e74f51fd405dadc69f4a1afdc06$exports(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = $fa6ae4d1a291d78f4968842f8b8c$exports(O);
  var index = 0;
  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == $c36a9dd3e9c8df8be5f0f547037826b$var$Array && $a591637d902a35aa4b24b0e0e1$exports(iteratorMethod))) {
    iterator = $dc6a74fdacf49990fb6b187d3b007a7$exports(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];

    for (; !(step = $dcf1edbae4500c7eefdab278edf50a$exports(next, iterator)).done; index++) {
      value = mapping ? $e67039136e6dc1df9291389f26eb8$exports(iterator, mapfn, [step.value, index], true) : step.value;
      $de7c15d7bcf78fb13f7819be00d71291$exports(result, index, value);
    }
  } else {
    length = $be068fa7c9e9f9d8f456b093e8bd58e$exports(O);
    result = IS_CONSTRUCTOR ? new this(length) : $c36a9dd3e9c8df8be5f0f547037826b$var$Array(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      $de7c15d7bcf78fb13f7819be00d71291$exports(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var $df10ca4db49d6eeefe1ef9825b72$var$codeAt = $c4467e91600a59496715ba76dd77$exports.codeAt;
// ASSET: D:\CookBook\node_modules\core-js\internals\string-punycode-to-ascii.js
var $f88c1ea50772f9f966ca9305b487f25$exports = {};
var $f88c1ea50772f9f966ca9305b487f25$var$maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

// aka. 0x7FFFFFFF or 2^31-1
var $f88c1ea50772f9f966ca9305b487f25$var$base = 36;
var $f88c1ea50772f9f966ca9305b487f25$var$tMin = 1;
var $f88c1ea50772f9f966ca9305b487f25$var$tMax = 26;
var $f88c1ea50772f9f966ca9305b487f25$var$skew = 38;
var $f88c1ea50772f9f966ca9305b487f25$var$damp = 700;
var $f88c1ea50772f9f966ca9305b487f25$var$initialBias = 72;
var $f88c1ea50772f9f966ca9305b487f25$var$initialN = 128; // 0x80

// 0x80
var $f88c1ea50772f9f966ca9305b487f25$var$delimiter = '-'; // '\x2D'

// '\x2D'
var $f88c1ea50772f9f966ca9305b487f25$var$regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

// non-ASCII chars
var $f88c1ea50772f9f966ca9305b487f25$var$regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

// RFC 3490 separators
var $f88c1ea50772f9f966ca9305b487f25$var$OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var $f88c1ea50772f9f966ca9305b487f25$var$baseMinusTMin = $f88c1ea50772f9f966ca9305b487f25$var$base - $f88c1ea50772f9f966ca9305b487f25$var$tMin;
var $f88c1ea50772f9f966ca9305b487f25$var$RangeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.RangeError;
var $f88c1ea50772f9f966ca9305b487f25$var$exec = $fc9b83eb643c78fabc3eaedec34ef851$exports($f88c1ea50772f9f966ca9305b487f25$var$regexSeparators.exec);
var $f88c1ea50772f9f966ca9305b487f25$var$floor = Math.floor;
var $f88c1ea50772f9f966ca9305b487f25$var$fromCharCode = String.fromCharCode;
var $f88c1ea50772f9f966ca9305b487f25$var$charCodeAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charCodeAt);
var $f88c1ea50772f9f966ca9305b487f25$var$join = $fc9b83eb643c78fabc3eaedec34ef851$exports([].join);
var $f88c1ea50772f9f966ca9305b487f25$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push);
var $f88c1ea50772f9f966ca9305b487f25$var$replace = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.replace);
var $f88c1ea50772f9f966ca9305b487f25$var$split = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.split);
var $f88c1ea50772f9f966ca9305b487f25$var$toLowerCase = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.toLowerCase);
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var $f88c1ea50772f9f966ca9305b487f25$var$ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = $f88c1ea50772f9f966ca9305b487f25$var$charCodeAt(string, counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = $f88c1ea50772f9f966ca9305b487f25$var$charCodeAt(string, counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // Low surrogate.
        $f88c1ea50772f9f966ca9305b487f25$var$push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        $f88c1ea50772f9f966ca9305b487f25$var$push(output, value);
        counter--;
      }
    } else {
      $f88c1ea50772f9f966ca9305b487f25$var$push(output, value);
    }
  }

  return output;
};
/**
 * Converts a digit/integer into a basic code point.
 */


/**
 * Converts a digit/integer into a basic code point.
 */
var $f88c1ea50772f9f966ca9305b487f25$var$digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */


/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var $f88c1ea50772f9f966ca9305b487f25$var$adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? $f88c1ea50772f9f966ca9305b487f25$var$floor(delta / $f88c1ea50772f9f966ca9305b487f25$var$damp) : delta >> 1;
  delta += $f88c1ea50772f9f966ca9305b487f25$var$floor(delta / numPoints);

  while (delta > $f88c1ea50772f9f966ca9305b487f25$var$baseMinusTMin * $f88c1ea50772f9f966ca9305b487f25$var$tMax >> 1) {
    delta = $f88c1ea50772f9f966ca9305b487f25$var$floor(delta / $f88c1ea50772f9f966ca9305b487f25$var$baseMinusTMin);
    k += $f88c1ea50772f9f966ca9305b487f25$var$base;
  }

  return $f88c1ea50772f9f966ca9305b487f25$var$floor(k + ($f88c1ea50772f9f966ca9305b487f25$var$baseMinusTMin + 1) * delta / (delta + $f88c1ea50772f9f966ca9305b487f25$var$skew));
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */


/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var $f88c1ea50772f9f966ca9305b487f25$var$encode = function (input) {
  var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = $f88c1ea50772f9f966ca9305b487f25$var$ucs2decode(input); // Cache the length.

  // Cache the length.
  var inputLength = input.length; // Initialize the state.

  // Initialize the state.
  var n = $f88c1ea50772f9f966ca9305b487f25$var$initialN;
  var delta = 0;
  var bias = $f88c1ea50772f9f966ca9305b487f25$var$initialBias;
  var i, currentValue; // Handle the basic code points.

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];

    if (currentValue < 0x80) {
      $f88c1ea50772f9f966ca9305b487f25$var$push(output, $f88c1ea50772f9f966ca9305b487f25$var$fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.

  // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;
  // Finish the basic string with a delimiter unless it's empty.

  // number of code points that have been handled;
  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    $f88c1ea50772f9f966ca9305b487f25$var$push(output, $f88c1ea50772f9f966ca9305b487f25$var$delimiter);
  } // Main encoding loop:


  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = $f88c1ea50772f9f966ca9305b487f25$var$maxInt;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;

    if (m - n > $f88c1ea50772f9f966ca9305b487f25$var$floor(($f88c1ea50772f9f966ca9305b487f25$var$maxInt - delta) / handledCPCountPlusOne)) {
      throw $f88c1ea50772f9f966ca9305b487f25$var$RangeError($f88c1ea50772f9f966ca9305b487f25$var$OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < n && ++delta > $f88c1ea50772f9f966ca9305b487f25$var$maxInt) {
        throw $f88c1ea50772f9f966ca9305b487f25$var$RangeError($f88c1ea50772f9f966ca9305b487f25$var$OVERFLOW_ERROR);
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = $f88c1ea50772f9f966ca9305b487f25$var$base;

        while (true) {
          var t = k <= bias ? $f88c1ea50772f9f966ca9305b487f25$var$tMin : k >= bias + $f88c1ea50772f9f966ca9305b487f25$var$tMax ? $f88c1ea50772f9f966ca9305b487f25$var$tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = $f88c1ea50772f9f966ca9305b487f25$var$base - t;
          $f88c1ea50772f9f966ca9305b487f25$var$push(output, $f88c1ea50772f9f966ca9305b487f25$var$fromCharCode($f88c1ea50772f9f966ca9305b487f25$var$digitToBasic(t + qMinusT % baseMinusT)));
          q = $f88c1ea50772f9f966ca9305b487f25$var$floor(qMinusT / baseMinusT);
          k += $f88c1ea50772f9f966ca9305b487f25$var$base;
        }

        $f88c1ea50772f9f966ca9305b487f25$var$push(output, $f88c1ea50772f9f966ca9305b487f25$var$fromCharCode($f88c1ea50772f9f966ca9305b487f25$var$digitToBasic(q)));
        bias = $f88c1ea50772f9f966ca9305b487f25$var$adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }

  return $f88c1ea50772f9f966ca9305b487f25$var$join(output, '');
};

$f88c1ea50772f9f966ca9305b487f25$exports = function (input) {
  var encoded = [];
  var labels = $f88c1ea50772f9f966ca9305b487f25$var$split($f88c1ea50772f9f966ca9305b487f25$var$replace($f88c1ea50772f9f966ca9305b487f25$var$toLowerCase(input), $f88c1ea50772f9f966ca9305b487f25$var$regexSeparators, '\u002E'), '.');
  var i, label;

  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    $f88c1ea50772f9f966ca9305b487f25$var$push(encoded, $f88c1ea50772f9f966ca9305b487f25$var$exec($f88c1ea50772f9f966ca9305b487f25$var$regexNonASCII, label) ? 'xn--' + $f88c1ea50772f9f966ca9305b487f25$var$encode(label) : label);
  }

  return $f88c1ea50772f9f966ca9305b487f25$var$join(encoded, '.');
};

// ASSET: D:\CookBook\node_modules\core-js\modules\web.url-search-params.js
var $ad1ab51ff959d3b1e810f566ec$exports = {};
var $ad1ab51ff959d3b1e810f566ec$var$ITERATOR = $b53a5b6a8f34b6cba070624bf2a48849$exports('iterator');
var $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS = 'URLSearchParams';
var $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS_ITERATOR = $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS + 'Iterator';
var $ad1ab51ff959d3b1e810f566ec$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.getterFor($ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS);
var $ad1ab51ff959d3b1e810f566ec$var$getInternalIteratorState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.getterFor($ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS_ITERATOR);
var $ad1ab51ff959d3b1e810f566ec$var$n$Fetch = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('fetch');
var $ad1ab51ff959d3b1e810f566ec$var$N$Request = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Request');
var $ad1ab51ff959d3b1e810f566ec$var$Headers = $b8fac1a4cb5c01e484df4a2cc7a2e76$exports('Headers');
var $ad1ab51ff959d3b1e810f566ec$var$RequestPrototype = $ad1ab51ff959d3b1e810f566ec$var$N$Request && $ad1ab51ff959d3b1e810f566ec$var$N$Request.prototype;
var $ad1ab51ff959d3b1e810f566ec$var$HeadersPrototype = $ad1ab51ff959d3b1e810f566ec$var$Headers && $ad1ab51ff959d3b1e810f566ec$var$Headers.prototype;
var $ad1ab51ff959d3b1e810f566ec$var$RegExp = $b2dfbcdc0cb248234bdeab56988638b1$exports.RegExp;
var $ad1ab51ff959d3b1e810f566ec$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;
var $ad1ab51ff959d3b1e810f566ec$var$decodeURIComponent = $b2dfbcdc0cb248234bdeab56988638b1$exports.decodeURIComponent;
var $ad1ab51ff959d3b1e810f566ec$var$encodeURIComponent = $b2dfbcdc0cb248234bdeab56988638b1$exports.encodeURIComponent;
var $ad1ab51ff959d3b1e810f566ec$var$charAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charAt);
var $ad1ab51ff959d3b1e810f566ec$var$join = $fc9b83eb643c78fabc3eaedec34ef851$exports([].join);
var $ad1ab51ff959d3b1e810f566ec$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push);
var $ad1ab51ff959d3b1e810f566ec$var$replace = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.replace);
var $ad1ab51ff959d3b1e810f566ec$var$shift = $fc9b83eb643c78fabc3eaedec34ef851$exports([].shift);
var $ad1ab51ff959d3b1e810f566ec$var$splice = $fc9b83eb643c78fabc3eaedec34ef851$exports([].splice);
var $ad1ab51ff959d3b1e810f566ec$var$split = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.split);
var $ad1ab51ff959d3b1e810f566ec$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);
var $ad1ab51ff959d3b1e810f566ec$var$plus = /\+/g;
var $ad1ab51ff959d3b1e810f566ec$var$sequences = Array(4);

var $ad1ab51ff959d3b1e810f566ec$var$percentSequence = function (bytes) {
  return $ad1ab51ff959d3b1e810f566ec$var$sequences[bytes - 1] || ($ad1ab51ff959d3b1e810f566ec$var$sequences[bytes - 1] = $ad1ab51ff959d3b1e810f566ec$var$RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var $ad1ab51ff959d3b1e810f566ec$var$percentDecode = function (sequence) {
  try {
    return $ad1ab51ff959d3b1e810f566ec$var$decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var $ad1ab51ff959d3b1e810f566ec$var$deserialize = function (it) {
  var result = $ad1ab51ff959d3b1e810f566ec$var$replace(it, $ad1ab51ff959d3b1e810f566ec$var$plus, ' ');
  var bytes = 4;

  try {
    return $ad1ab51ff959d3b1e810f566ec$var$decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = $ad1ab51ff959d3b1e810f566ec$var$replace(result, $ad1ab51ff959d3b1e810f566ec$var$percentSequence(bytes--), $ad1ab51ff959d3b1e810f566ec$var$percentDecode);
    }

    return result;
  }
};

var $ad1ab51ff959d3b1e810f566ec$var$find = /[!'()~]|%20/g;
var $ad1ab51ff959d3b1e810f566ec$var$replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var $ad1ab51ff959d3b1e810f566ec$var$replacer = function (match) {
  return $ad1ab51ff959d3b1e810f566ec$var$replacements[match];
};

var $ad1ab51ff959d3b1e810f566ec$var$serialize = function (it) {
  return $ad1ab51ff959d3b1e810f566ec$var$replace($ad1ab51ff959d3b1e810f566ec$var$encodeURIComponent(it), $ad1ab51ff959d3b1e810f566ec$var$find, $ad1ab51ff959d3b1e810f566ec$var$replacer);
};

var $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsIterator = $e5ad950cf58a6bf3ae4e13229f959a64$exports(function Iterator(params, kind) {
  $ad1ab51ff959d3b1e810f566ec$var$setInternalState(this, {
    type: $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS_ITERATOR,
    iterator: $dc6a74fdacf49990fb6b187d3b007a7$exports($ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = $ad1ab51ff959d3b1e810f566ec$var$getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;

  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  }

  return step;
}, true);

var $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if ($fc6d2e39baa3b220b427$exports(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? $ad1ab51ff959d3b1e810f566ec$var$charAt(init, 0) === '?' ? $ad1ab51ff959d3b1e810f566ec$var$stringSlice(init, 1) : init : $f83d2933d0b8cd4aeed3806c1$exports(init));
  }
};

$ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsState.prototype = {
  type: $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = $fa6ae4d1a291d78f4968842f8b8c$exports(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = $dc6a74fdacf49990fb6b187d3b007a7$exports(object, iteratorMethod);
      next = iterator.next;

      while (!(step = $dcf1edbae4500c7eefdab278edf50a$exports(next, iterator)).done) {
        entryIterator = $dc6a74fdacf49990fb6b187d3b007a7$exports($edafc3d62cbbbbb38cbb496d223bffe2$exports(step.value));
        entryNext = entryIterator.next;
        if ((first = $dcf1edbae4500c7eefdab278edf50a$exports(entryNext, entryIterator)).done || (second = $dcf1edbae4500c7eefdab278edf50a$exports(entryNext, entryIterator)).done || !$dcf1edbae4500c7eefdab278edf50a$exports(entryNext, entryIterator).done) throw $ad1ab51ff959d3b1e810f566ec$var$TypeError('Expected sequence with length 2');
        $ad1ab51ff959d3b1e810f566ec$var$push(this.entries, {
          key: $f83d2933d0b8cd4aeed3806c1$exports(first.value),
          value: $f83d2933d0b8cd4aeed3806c1$exports(second.value)
        });
      }
    } else for (var key in object) if ($c70f1f739ae81b1578231e191e1f0$exports(object, key)) {
      $ad1ab51ff959d3b1e810f566ec$var$push(this.entries, {
        key: key,
        value: $f83d2933d0b8cd4aeed3806c1$exports(object[key])
      });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = $ad1ab51ff959d3b1e810f566ec$var$split(query, '&');
      var index = 0;
      var attribute, entry;

      while (index < attributes.length) {
        attribute = attributes[index++];

        if (attribute.length) {
          entry = $ad1ab51ff959d3b1e810f566ec$var$split(attribute, '=');
          $ad1ab51ff959d3b1e810f566ec$var$push(this.entries, {
            key: $ad1ab51ff959d3b1e810f566ec$var$deserialize($ad1ab51ff959d3b1e810f566ec$var$shift(entry)),
            value: $ad1ab51ff959d3b1e810f566ec$var$deserialize($ad1ab51ff959d3b1e810f566ec$var$join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      $ad1ab51ff959d3b1e810f566ec$var$push(result, $ad1ab51ff959d3b1e810f566ec$var$serialize(entry.key) + '=' + $ad1ab51ff959d3b1e810f566ec$var$serialize(entry.value));
    }

    return $ad1ab51ff959d3b1e810f566ec$var$join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
}; // `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsConstructor = function
  /* init */
URLSearchParams() {
  $efdb39c4d2e2c908195dbaea02$exports(this, $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  $ad1ab51ff959d3b1e810f566ec$var$setInternalState(this, new $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsState(init));
};

var $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype = $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsConstructor.prototype;
$d023e27ccf14e7a42c20ed6b04f61045$exports($ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 2);
    var state = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this);
    $ad1ab51ff959d3b1e810f566ec$var$push(state.entries, {
      key: $f83d2933d0b8cd4aeed3806c1$exports(name),
      value: $f83d2933d0b8cd4aeed3806c1$exports(value)
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var state = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this);
    var entries = state.entries;
    var key = $f83d2933d0b8cd4aeed3806c1$exports(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index].key === key) $ad1ab51ff959d3b1e810f566ec$var$splice(entries, index, 1);else index++;
    }

    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var entries = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this).entries;
    var key = $f83d2933d0b8cd4aeed3806c1$exports(name);
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }

    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var entries = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this).entries;
    var key = $f83d2933d0b8cd4aeed3806c1$exports(name);
    var result = [];
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) $ad1ab51ff959d3b1e810f566ec$var$push(result, entries[index].value);
    }

    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var entries = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this).entries;
    var key = $f83d2933d0b8cd4aeed3806c1$exports(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }

    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    $f326c16013020730ca5e26382f202511$exports(arguments.length, 1);
    var state = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $f83d2933d0b8cd4aeed3806c1$exports(name);
    var val = $f83d2933d0b8cd4aeed3806c1$exports(value);
    var index = 0;
    var entry;

    for (; index < entries.length; index++) {
      entry = entries[index];

      if (entry.key === key) {
        if (found) $ad1ab51ff959d3b1e810f566ec$var$splice(entries, index--, 1);else {
          found = true;
          entry.value = val;
        }
      }
    }

    if (!found) $ad1ab51ff959d3b1e810f566ec$var$push(entries, {
      key: key,
      value: val
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this);
    $be6258d2d8915b1aa21362b4c0704809$exports(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback
  /* , thisArg */
  ) {
    var entries = $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this).entries;
    var boundFunction = $e4e74f51fd405dadc69f4a1afdc06$exports(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsIterator(this, 'entries');
  }
}, {
  enumerable: true
}); // `URLSearchParams.prototype[@@iterator]` method

// `URLSearchParams.prototype[@@iterator]` method
$f6b650ac0564db3a1dfe92ff64a576d7$exports($ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype, $ad1ab51ff959d3b1e810f566ec$var$ITERATOR, $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype.entries, {
  name: 'entries'
}); // `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
$f6b650ac0564db3a1dfe92ff64a576d7$exports($ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsPrototype, 'toString', function toString() {
  return $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState(this).serialize();
}, {
  enumerable: true
});
$c58c59549867eac23eeb6$exports($ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsConstructor, $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS);
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  global: true,
  forced: !$a8e9e5e41e80e9d28942c49acb6269fb$exports
}, {
  URLSearchParams: $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsConstructor
}); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!$a8e9e5e41e80e9d28942c49acb6269fb$exports && $e88cf51f13e10e78d33d3e4b6f3045e6$exports($ad1ab51ff959d3b1e810f566ec$var$Headers)) {
  var $ad1ab51ff959d3b1e810f566ec$var$headersHas = $fc9b83eb643c78fabc3eaedec34ef851$exports($ad1ab51ff959d3b1e810f566ec$var$HeadersPrototype.has);
  var $ad1ab51ff959d3b1e810f566ec$var$headersSet = $fc9b83eb643c78fabc3eaedec34ef851$exports($ad1ab51ff959d3b1e810f566ec$var$HeadersPrototype.set);

  var $ad1ab51ff959d3b1e810f566ec$var$wrapRequestOptions = function (init) {
    if ($fc6d2e39baa3b220b427$exports(init)) {
      var body = init.body;
      var headers;

      if ($e345bd0aabeeb025ab356e9e360a0b6f$exports(body) === $ad1ab51ff959d3b1e810f566ec$var$URL_SEARCH_PARAMS) {
        headers = init.headers ? new $ad1ab51ff959d3b1e810f566ec$var$Headers(init.headers) : new $ad1ab51ff959d3b1e810f566ec$var$Headers();

        if (!$ad1ab51ff959d3b1e810f566ec$var$headersHas(headers, 'content-type')) {
          $ad1ab51ff959d3b1e810f566ec$var$headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }

        return $ef12a9a97d55c7d234596883bab0e54c$exports(init, {
          body: $ab54931bf5075a19025488583689585$exports(0, $f83d2933d0b8cd4aeed3806c1$exports(body)),
          headers: $ab54931bf5075a19025488583689585$exports(0, headers)
        });
      }
    }

    return init;
  };

  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports($ad1ab51ff959d3b1e810f566ec$var$n$Fetch)) {
    $f09cf99f84fa9bbebf324815a05f0ad3$exports({
      global: true,
      enumerable: true,
      forced: true
    }, {
      fetch: function fetch(input
      /* , init */
      ) {
        return $ad1ab51ff959d3b1e810f566ec$var$n$Fetch(input, arguments.length > 1 ? $ad1ab51ff959d3b1e810f566ec$var$wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if ($e88cf51f13e10e78d33d3e4b6f3045e6$exports($ad1ab51ff959d3b1e810f566ec$var$N$Request)) {
    var $ad1ab51ff959d3b1e810f566ec$var$RequestConstructor = function Request(input
    /* , init */
    ) {
      $efdb39c4d2e2c908195dbaea02$exports(this, $ad1ab51ff959d3b1e810f566ec$var$RequestPrototype);
      return new $ad1ab51ff959d3b1e810f566ec$var$N$Request(input, arguments.length > 1 ? $ad1ab51ff959d3b1e810f566ec$var$wrapRequestOptions(arguments[1]) : {});
    };

    $ad1ab51ff959d3b1e810f566ec$var$RequestPrototype.constructor = $ad1ab51ff959d3b1e810f566ec$var$RequestConstructor;
    $ad1ab51ff959d3b1e810f566ec$var$RequestConstructor.prototype = $ad1ab51ff959d3b1e810f566ec$var$RequestPrototype;
    $f09cf99f84fa9bbebf324815a05f0ad3$exports({
      global: true,
      forced: true
    }, {
      Request: $ad1ab51ff959d3b1e810f566ec$var$RequestConstructor
    });
  }
}

$ad1ab51ff959d3b1e810f566ec$exports = {
  URLSearchParams: $ad1ab51ff959d3b1e810f566ec$var$URLSearchParamsConstructor,
  getState: $ad1ab51ff959d3b1e810f566ec$var$getInternalParamsState
};
var $df10ca4db49d6eeefe1ef9825b72$var$setInternalState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.set;
var $df10ca4db49d6eeefe1ef9825b72$var$getInternalURLState = $d0eec2865a2cfaac1ea7a85e0c511a46$exports.getterFor('URL');
var $df10ca4db49d6eeefe1ef9825b72$var$URLSearchParams = $ad1ab51ff959d3b1e810f566ec$exports.URLSearchParams;
var $df10ca4db49d6eeefe1ef9825b72$var$getInternalSearchParamsState = $ad1ab51ff959d3b1e810f566ec$exports.getState;
var $df10ca4db49d6eeefe1ef9825b72$var$NativeURL = $b2dfbcdc0cb248234bdeab56988638b1$exports.URL;
var $df10ca4db49d6eeefe1ef9825b72$var$TypeError = $b2dfbcdc0cb248234bdeab56988638b1$exports.TypeError;
var $df10ca4db49d6eeefe1ef9825b72$var$parseInt = $b2dfbcdc0cb248234bdeab56988638b1$exports.parseInt;
var $df10ca4db49d6eeefe1ef9825b72$var$floor = Math.floor;
var $df10ca4db49d6eeefe1ef9825b72$var$pow = Math.pow;
var $df10ca4db49d6eeefe1ef9825b72$var$charAt = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.charAt);
var $df10ca4db49d6eeefe1ef9825b72$var$exec = $fc9b83eb643c78fabc3eaedec34ef851$exports(/./.exec);
var $df10ca4db49d6eeefe1ef9825b72$var$join = $fc9b83eb643c78fabc3eaedec34ef851$exports([].join);
var $df10ca4db49d6eeefe1ef9825b72$var$numberToString = $fc9b83eb643c78fabc3eaedec34ef851$exports(1.0.toString);
var $df10ca4db49d6eeefe1ef9825b72$var$pop = $fc9b83eb643c78fabc3eaedec34ef851$exports([].pop);
var $df10ca4db49d6eeefe1ef9825b72$var$push = $fc9b83eb643c78fabc3eaedec34ef851$exports([].push);
var $df10ca4db49d6eeefe1ef9825b72$var$replace = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.replace);
var $df10ca4db49d6eeefe1ef9825b72$var$shift = $fc9b83eb643c78fabc3eaedec34ef851$exports([].shift);
var $df10ca4db49d6eeefe1ef9825b72$var$split = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.split);
var $df10ca4db49d6eeefe1ef9825b72$var$stringSlice = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.slice);
var $df10ca4db49d6eeefe1ef9825b72$var$toLowerCase = $fc9b83eb643c78fabc3eaedec34ef851$exports(''.toLowerCase);
var $df10ca4db49d6eeefe1ef9825b72$var$unshift = $fc9b83eb643c78fabc3eaedec34ef851$exports([].unshift);
var $df10ca4db49d6eeefe1ef9825b72$var$INVALID_AUTHORITY = 'Invalid authority';
var $df10ca4db49d6eeefe1ef9825b72$var$INVALID_SCHEME = 'Invalid scheme';
var $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST = 'Invalid host';
var $df10ca4db49d6eeefe1ef9825b72$var$INVALID_PORT = 'Invalid port';
var $df10ca4db49d6eeefe1ef9825b72$var$ALPHA = /[a-z]/i; // eslint-disable-next-line regexp/no-obscure-range -- safe

// eslint-disable-next-line regexp/no-obscure-range -- safe
var $df10ca4db49d6eeefe1ef9825b72$var$ALPHANUMERIC = /[\d+-.a-z]/i;
var $df10ca4db49d6eeefe1ef9825b72$var$DIGIT = /\d/;
var $df10ca4db49d6eeefe1ef9825b72$var$HEX_START = /^0x/i;
var $df10ca4db49d6eeefe1ef9825b72$var$OCT = /^[0-7]+$/;
var $df10ca4db49d6eeefe1ef9825b72$var$DEC = /^\d+$/;
var $df10ca4db49d6eeefe1ef9825b72$var$HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */

/* eslint-disable regexp/no-control-character -- safe */
var $df10ca4db49d6eeefe1ef9825b72$var$FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var $df10ca4db49d6eeefe1ef9825b72$var$FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var $df10ca4db49d6eeefe1ef9825b72$var$LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var $df10ca4db49d6eeefe1ef9825b72$var$TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */

/* eslint-enable regexp/no-control-character -- safe */
var $df10ca4db49d6eeefe1ef9825b72$var$EOF; // https://url.spec.whatwg.org/#ipv4-number-parser

// https://url.spec.whatwg.org/#ipv4-number-parser
var $df10ca4db49d6eeefe1ef9825b72$var$parseIPv4 = function (input) {
  var parts = $df10ca4db49d6eeefe1ef9825b72$var$split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;

  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }

  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];

  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;

    if (part.length > 1 && $df10ca4db49d6eeefe1ef9825b72$var$charAt(part, 0) == '0') {
      radix = $df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$HEX_START, part) ? 16 : 8;
      part = $df10ca4db49d6eeefe1ef9825b72$var$stringSlice(part, radix == 8 ? 1 : 2);
    }

    if (part === '') {
      number = 0;
    } else {
      if (!$df10ca4db49d6eeefe1ef9825b72$var$exec(radix == 10 ? $df10ca4db49d6eeefe1ef9825b72$var$DEC : radix == 8 ? $df10ca4db49d6eeefe1ef9825b72$var$OCT : $df10ca4db49d6eeefe1ef9825b72$var$HEX, part)) return input;
      number = $df10ca4db49d6eeefe1ef9825b72$var$parseInt(part, radix);
    }

    $df10ca4db49d6eeefe1ef9825b72$var$push(numbers, number);
  }

  for (index = 0; index < partsLength; index++) {
    number = numbers[index];

    if (index == partsLength - 1) {
      if (number >= $df10ca4db49d6eeefe1ef9825b72$var$pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }

  ipv4 = $df10ca4db49d6eeefe1ef9825b72$var$pop(numbers);

  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * $df10ca4db49d6eeefe1ef9825b72$var$pow(256, 3 - index);
  }

  return ipv4;
}; // https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO


// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var $df10ca4db49d6eeefe1ef9825b72$var$parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return $df10ca4db49d6eeefe1ef9825b72$var$charAt(input, pointer);
  };

  if (chr() == ':') {
    if ($df10ca4db49d6eeefe1ef9825b72$var$charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }

  while (chr()) {
    if (pieceIndex == 8) return;

    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }

    value = length = 0;

    while (length < 4 && $df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$HEX, chr())) {
      value = value * 16 + $df10ca4db49d6eeefe1ef9825b72$var$parseInt(chr(), 16);
      pointer++;
      length++;
    }

    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;

      while (chr()) {
        ipv4Piece = null;

        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;else return;
        }

        if (!$df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$DIGIT, chr())) return;

        while ($df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$DIGIT, chr())) {
          number = $df10ca4db49d6eeefe1ef9825b72$var$parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }

        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }

      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;

    address[pieceIndex++] = value;
  }

  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;

    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;

  return address;
};

var $df10ca4db49d6eeefe1ef9825b72$var$findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;

  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }

      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }

  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }

  return maxIndex;
}; // https://url.spec.whatwg.org/#host-serializing


// https://url.spec.whatwg.org/#host-serializing
var $df10ca4db49d6eeefe1ef9825b72$var$serializeHost = function (host) {
  var result, index, compress, ignore0; // ipv4

  // ipv4
  if (typeof host == 'number') {
    result = [];

    for (index = 0; index < 4; index++) {
      $df10ca4db49d6eeefe1ef9825b72$var$unshift(result, host % 256);
      host = $df10ca4db49d6eeefe1ef9825b72$var$floor(host / 256);
    }

    return $df10ca4db49d6eeefe1ef9825b72$var$join(result, '.'); // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = $df10ca4db49d6eeefe1ef9825b72$var$findLongestZeroSequence(host);

    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;

      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += $df10ca4db49d6eeefe1ef9825b72$var$numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }

    return '[' + result + ']';
  }

  return host;
};

var $df10ca4db49d6eeefe1ef9825b72$var$C0ControlPercentEncodeSet = {};
var $df10ca4db49d6eeefe1ef9825b72$var$fragmentPercentEncodeSet = $c304fd9bdc40189acd382a196b092f0b$exports({}, $df10ca4db49d6eeefe1ef9825b72$var$C0ControlPercentEncodeSet, {
  ' ': 1,
  '"': 1,
  '<': 1,
  '>': 1,
  '`': 1
});
var $df10ca4db49d6eeefe1ef9825b72$var$pathPercentEncodeSet = $c304fd9bdc40189acd382a196b092f0b$exports({}, $df10ca4db49d6eeefe1ef9825b72$var$fragmentPercentEncodeSet, {
  '#': 1,
  '?': 1,
  '{': 1,
  '}': 1
});
var $df10ca4db49d6eeefe1ef9825b72$var$userinfoPercentEncodeSet = $c304fd9bdc40189acd382a196b092f0b$exports({}, $df10ca4db49d6eeefe1ef9825b72$var$pathPercentEncodeSet, {
  '/': 1,
  ':': 1,
  ';': 1,
  '=': 1,
  '@': 1,
  '[': 1,
  '\\': 1,
  ']': 1,
  '^': 1,
  '|': 1
});

var $df10ca4db49d6eeefe1ef9825b72$var$percentEncode = function (chr, set) {
  var code = $df10ca4db49d6eeefe1ef9825b72$var$codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !$c70f1f739ae81b1578231e191e1f0$exports(set, chr) ? chr : encodeURIComponent(chr);
}; // https://url.spec.whatwg.org/#special-scheme


// https://url.spec.whatwg.org/#special-scheme
var $df10ca4db49d6eeefe1ef9825b72$var$specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}; // https://url.spec.whatwg.org/#windows-drive-letter

// https://url.spec.whatwg.org/#windows-drive-letter
var $df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && $df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$ALPHA, $df10ca4db49d6eeefe1ef9825b72$var$charAt(string, 0)) && ((second = $df10ca4db49d6eeefe1ef9825b72$var$charAt(string, 1)) == ':' || !normalized && second == '|');
}; // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter


// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var $df10ca4db49d6eeefe1ef9825b72$var$startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && $df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter($df10ca4db49d6eeefe1ef9825b72$var$stringSlice(string, 0, 2)) && (string.length == 2 || (third = $df10ca4db49d6eeefe1ef9825b72$var$charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
}; // https://url.spec.whatwg.org/#single-dot-path-segment


// https://url.spec.whatwg.org/#single-dot-path-segment
var $df10ca4db49d6eeefe1ef9825b72$var$isSingleDot = function (segment) {
  return segment === '.' || $df10ca4db49d6eeefe1ef9825b72$var$toLowerCase(segment) === '%2e';
}; // https://url.spec.whatwg.org/#double-dot-path-segment


// https://url.spec.whatwg.org/#double-dot-path-segment
var $df10ca4db49d6eeefe1ef9825b72$var$isDoubleDot = function (segment) {
  segment = $df10ca4db49d6eeefe1ef9825b72$var$toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
}; // States:


// States:
var $df10ca4db49d6eeefe1ef9825b72$var$SCHEME_START = {};
var $df10ca4db49d6eeefe1ef9825b72$var$SCHEME = {};
var $df10ca4db49d6eeefe1ef9825b72$var$NO_SCHEME = {};
var $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_RELATIVE_OR_AUTHORITY = {};
var $df10ca4db49d6eeefe1ef9825b72$var$PATH_OR_AUTHORITY = {};
var $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE = {};
var $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE_SLASH = {};
var $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_SLASHES = {};
var $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var $df10ca4db49d6eeefe1ef9825b72$var$AUTHORITY = {};
var $df10ca4db49d6eeefe1ef9825b72$var$HOST = {};
var $df10ca4db49d6eeefe1ef9825b72$var$HOSTNAME = {};
var $df10ca4db49d6eeefe1ef9825b72$var$PORT = {};
var $df10ca4db49d6eeefe1ef9825b72$var$FILE = {};
var $df10ca4db49d6eeefe1ef9825b72$var$FILE_SLASH = {};
var $df10ca4db49d6eeefe1ef9825b72$var$FILE_HOST = {};
var $df10ca4db49d6eeefe1ef9825b72$var$PATH_START = {};
var $df10ca4db49d6eeefe1ef9825b72$var$PATH = {};
var $df10ca4db49d6eeefe1ef9825b72$var$CANNOT_BE_A_BASE_URL_PATH = {};
var $df10ca4db49d6eeefe1ef9825b72$var$QUERY = {};
var $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT = {};

var $df10ca4db49d6eeefe1ef9825b72$var$URLState = function (url, isBase, base) {
  var urlString = $f83d2933d0b8cd4aeed3806c1$exports(url);
  var baseState, failure, searchParams;

  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw $df10ca4db49d6eeefe1ef9825b72$var$TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new $df10ca4db49d6eeefe1ef9825b72$var$URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw $df10ca4db49d6eeefe1ef9825b72$var$TypeError(failure);
    searchParams = $df10ca4db49d6eeefe1ef9825b72$var$getInternalSearchParamsState(new $df10ca4db49d6eeefe1ef9825b72$var$URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

$df10ca4db49d6eeefe1ef9825b72$var$URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || $df10ca4db49d6eeefe1ef9825b72$var$SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;
    input = $f83d2933d0b8cd4aeed3806c1$exports(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = $df10ca4db49d6eeefe1ef9825b72$var$replace(input, $df10ca4db49d6eeefe1ef9825b72$var$LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = $df10ca4db49d6eeefe1ef9825b72$var$replace(input, $df10ca4db49d6eeefe1ef9825b72$var$TAB_AND_NEW_LINE, '');
    codePoints = $c36a9dd3e9c8df8be5f0f547037826b$exports(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];

      switch (state) {
        case $df10ca4db49d6eeefe1ef9825b72$var$SCHEME_START:
          if (chr && $df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$ALPHA, chr)) {
            buffer += $df10ca4db49d6eeefe1ef9825b72$var$toLowerCase(chr);
            state = $df10ca4db49d6eeefe1ef9825b72$var$SCHEME;
          } else if (!stateOverride) {
            state = $df10ca4db49d6eeefe1ef9825b72$var$NO_SCHEME;
            continue;
          } else return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_SCHEME;

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$SCHEME:
          if (chr && ($df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += $df10ca4db49d6eeefe1ef9825b72$var$toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (url.isSpecial() != $c70f1f739ae81b1578231e191e1f0$exports($df10ca4db49d6eeefe1ef9825b72$var$specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
            url.scheme = buffer;

            if (stateOverride) {
              if (url.isSpecial() && $df10ca4db49d6eeefe1ef9825b72$var$specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }

            buffer = '';

            if (url.scheme == 'file') {
              state = $df10ca4db49d6eeefe1ef9825b72$var$FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = $df10ca4db49d6eeefe1ef9825b72$var$PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              $df10ca4db49d6eeefe1ef9825b72$var$push(url.path, '');
              state = $df10ca4db49d6eeefe1ef9825b72$var$CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$NO_SCHEME;
            pointer = 0;
            continue;
          } else return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_SCHEME;

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$NO_SCHEME:
          if (!base || base.cannotBeABaseURL && chr != '#') return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_SCHEME;

          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
            break;
          }

          state = base.scheme == 'file' ? $df10ca4db49d6eeefe1ef9825b72$var$FILE : $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE;
          continue;

        case $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE;
            continue;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$AUTHORITY;
            break;
          } else {
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            continue;
          }

        case $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE:
          url.scheme = base.scheme;

          if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
            url.query = base.query;
          } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
            state = $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
            url.query = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
            url.query = base.query;
            url.fragment = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
            url.path.length--;
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            continue;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            continue;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_SLASHES:
          state = $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || $df10ca4db49d6eeefe1ef9825b72$var$charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$AUTHORITY;
            continue;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = $c36a9dd3e9c8df8be5f0f547037826b$exports(buffer);

            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];

              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }

              var encodedCodePoints = $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(codePoint, $df10ca4db49d6eeefe1ef9825b72$var$userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
            }

            buffer = '';
          } else if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (seenAt && buffer == '') return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_AUTHORITY;
            pointer -= $c36a9dd3e9c8df8be5f0f547037826b$exports(buffer).length + 1;
            buffer = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$HOST;
          } else buffer += chr;

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$HOST:
        case $df10ca4db49d6eeefe1ef9825b72$var$HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$PORT;
            if (stateOverride == $df10ca4db49d6eeefe1ef9825b72$var$HOSTNAME) return;
          } else if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (url.isSpecial() && buffer == '') return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
            buffer += chr;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$PORT:
          if ($df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$DIGIT, chr)) {
            buffer += chr;
          } else if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
            if (buffer != '') {
              var port = $df10ca4db49d6eeefe1ef9825b72$var$parseInt(buffer, 10);
              if (port > 0xFFFF) return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_PORT;
              url.port = url.isSpecial() && port === $df10ca4db49d6eeefe1ef9825b72$var$specialSchemes[url.scheme] ? null : port;
              buffer = '';
            }

            if (stateOverride) return;
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH_START;
            continue;
          } else return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_PORT;

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = $df10ca4db49d6eeefe1ef9825b72$var$FILE_SLASH;else if (base && base.scheme == 'file') {
            if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF) {
              url.host = base.host;
              url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
              url.query = '';
              state = $df10ca4db49d6eeefe1ef9825b72$var$QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
              url.query = base.query;
              url.fragment = '';
              state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
            } else {
              if (!$df10ca4db49d6eeefe1ef9825b72$var$startsWithWindowsDriveLetter($df10ca4db49d6eeefe1ef9825b72$var$join($cc6e9716afe9d69a463f4be768698ee3$exports(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = $cc6e9716afe9d69a463f4be768698ee3$exports(base.path);
                url.shortenPath();
              }

              state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
              continue;
            }
          } else {
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            continue;
          }
          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = $df10ca4db49d6eeefe1ef9825b72$var$FILE_HOST;
            break;
          }

          if (base && base.scheme == 'file' && !$df10ca4db49d6eeefe1ef9825b72$var$startsWithWindowsDriveLetter($df10ca4db49d6eeefe1ef9825b72$var$join($cc6e9716afe9d69a463f4be768698ee3$exports(codePoints, pointer), ''))) {
            if ($df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter(base.path[0], true)) $df10ca4db49d6eeefe1ef9825b72$var$push(url.path, base.path[0]);else url.host = base.host;
          }

          state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
          continue;

        case $df10ca4db49d6eeefe1ef9825b72$var$FILE_HOST:
          if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && $df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter(buffer)) {
              state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = $df10ca4db49d6eeefe1ef9825b72$var$PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = $df10ca4db49d6eeefe1ef9825b72$var$PATH_START;
            }

            continue;
          } else buffer += chr;

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$PATH_START:
          if (url.isSpecial()) {
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
          } else if (chr != $df10ca4db49d6eeefe1ef9825b72$var$EOF) {
            state = $df10ca4db49d6eeefe1ef9825b72$var$PATH;
            if (chr != '/') continue;
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$PATH:
          if (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
            if ($df10ca4db49d6eeefe1ef9825b72$var$isDoubleDot(buffer)) {
              url.shortenPath();

              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                $df10ca4db49d6eeefe1ef9825b72$var$push(url.path, '');
              }
            } else if ($df10ca4db49d6eeefe1ef9825b72$var$isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                $df10ca4db49d6eeefe1ef9825b72$var$push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && $df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = $df10ca4db49d6eeefe1ef9825b72$var$charAt(buffer, 0) + ':'; // normalize windows drive letter
              }

              $df10ca4db49d6eeefe1ef9825b72$var$push(url.path, buffer);
            }

            buffer = '';

            if (url.scheme == 'file' && (chr == $df10ca4db49d6eeefe1ef9825b72$var$EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                $df10ca4db49d6eeefe1ef9825b72$var$shift(url.path);
              }
            }

            if (chr == '?') {
              url.query = '';
              state = $df10ca4db49d6eeefe1ef9825b72$var$QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
            }
          } else {
            buffer += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(chr, $df10ca4db49d6eeefe1ef9825b72$var$pathPercentEncodeSet);
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
          } else if (chr != $df10ca4db49d6eeefe1ef9825b72$var$EOF) {
            url.path[0] += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(chr, $df10ca4db49d6eeefe1ef9825b72$var$C0ControlPercentEncodeSet);
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT;
          } else if (chr != $df10ca4db49d6eeefe1ef9825b72$var$EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(chr, $df10ca4db49d6eeefe1ef9825b72$var$C0ControlPercentEncodeSet);
          }

          break;

        case $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT:
          if (chr != $df10ca4db49d6eeefe1ef9825b72$var$EOF) url.fragment += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(chr, $df10ca4db49d6eeefe1ef9825b72$var$fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;

    if ($df10ca4db49d6eeefe1ef9825b72$var$charAt(input, 0) == '[') {
      if ($df10ca4db49d6eeefe1ef9825b72$var$charAt(input, input.length - 1) != ']') return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
      result = $df10ca4db49d6eeefe1ef9825b72$var$parseIPv6($df10ca4db49d6eeefe1ef9825b72$var$stringSlice(input, 1, -1));
      if (!result) return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
      this.host = result; // opaque host
    } else if (!this.isSpecial()) {
      if ($df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
      result = '';
      codePoints = $c36a9dd3e9c8df8be5f0f547037826b$exports(input);

      for (index = 0; index < codePoints.length; index++) {
        result += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(codePoints[index], $df10ca4db49d6eeefe1ef9825b72$var$C0ControlPercentEncodeSet);
      }

      this.host = result;
    } else {
      input = $f88c1ea50772f9f966ca9305b487f25$exports(input);
      if ($df10ca4db49d6eeefe1ef9825b72$var$exec($df10ca4db49d6eeefe1ef9825b72$var$FORBIDDEN_HOST_CODE_POINT, input)) return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
      result = $df10ca4db49d6eeefe1ef9825b72$var$parseIPv4(input);
      if (result === null) return $df10ca4db49d6eeefe1ef9825b72$var$INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return $c70f1f739ae81b1578231e191e1f0$exports($df10ca4db49d6eeefe1ef9825b72$var$specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;

    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !$df10ca4db49d6eeefe1ef9825b72$var$isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';

    if (host !== null) {
      output += '//';

      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }

      output += $df10ca4db49d6eeefe1ef9825b72$var$serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';

    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + $df10ca4db49d6eeefe1ef9825b72$var$join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw $df10ca4db49d6eeefe1ef9825b72$var$TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new $df10ca4db49d6eeefe1ef9825b72$var$URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + $df10ca4db49d6eeefe1ef9825b72$var$serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($f83d2933d0b8cd4aeed3806c1$exports(protocol) + ':', $df10ca4db49d6eeefe1ef9825b72$var$SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = $c36a9dd3e9c8df8be5f0f547037826b$exports($f83d2933d0b8cd4aeed3806c1$exports(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';

    for (var i = 0; i < codePoints.length; i++) {
      this.username += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(codePoints[i], $df10ca4db49d6eeefe1ef9825b72$var$userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = $c36a9dd3e9c8df8be5f0f547037826b$exports($f83d2933d0b8cd4aeed3806c1$exports(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';

    for (var i = 0; i < codePoints.length; i++) {
      this.password += $df10ca4db49d6eeefe1ef9825b72$var$percentEncode(codePoints[i], $df10ca4db49d6eeefe1ef9825b72$var$userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? '' : port === null ? $df10ca4db49d6eeefe1ef9825b72$var$serializeHost(host) : $df10ca4db49d6eeefe1ef9825b72$var$serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, $df10ca4db49d6eeefe1ef9825b72$var$HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : $df10ca4db49d6eeefe1ef9825b72$var$serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, $df10ca4db49d6eeefe1ef9825b72$var$HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $f83d2933d0b8cd4aeed3806c1$exports(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $f83d2933d0b8cd4aeed3806c1$exports(port);
    if (port == '') this.port = null;else this.parse(port, $df10ca4db49d6eeefe1ef9825b72$var$PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + $df10ca4db49d6eeefe1ef9825b72$var$join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, $df10ca4db49d6eeefe1ef9825b72$var$PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $f83d2933d0b8cd4aeed3806c1$exports(search);

    if (search == '') {
      this.query = null;
    } else {
      if ('?' == $df10ca4db49d6eeefe1ef9825b72$var$charAt(search, 0)) search = $df10ca4db49d6eeefe1ef9825b72$var$stringSlice(search, 1);
      this.query = '';
      this.parse(search, $df10ca4db49d6eeefe1ef9825b72$var$QUERY);
    }

    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $f83d2933d0b8cd4aeed3806c1$exports(hash);

    if (hash == '') {
      this.fragment = null;
      return;
    }

    if ('#' == $df10ca4db49d6eeefe1ef9825b72$var$charAt(hash, 0)) hash = $df10ca4db49d6eeefe1ef9825b72$var$stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, $df10ca4db49d6eeefe1ef9825b72$var$FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
}; // `URL` constructor
// https://url.spec.whatwg.org/#url-class

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var $df10ca4db49d6eeefe1ef9825b72$var$URLConstructor = function URL(url
/* , base */
) {
  var that = $efdb39c4d2e2c908195dbaea02$exports(this, $df10ca4db49d6eeefe1ef9825b72$var$URLPrototype);
  var base = $f326c16013020730ca5e26382f202511$exports(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = $df10ca4db49d6eeefe1ef9825b72$var$setInternalState(that, new $df10ca4db49d6eeefe1ef9825b72$var$URLState(url, false, base));

  if (!$e00ad6be039fed7616edf60d1993dd68$exports) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var $df10ca4db49d6eeefe1ef9825b72$var$URLPrototype = $df10ca4db49d6eeefe1ef9825b72$var$URLConstructor.prototype;

var $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return $df10ca4db49d6eeefe1ef9825b72$var$getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return $df10ca4db49d6eeefe1ef9825b72$var$getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if ($e00ad6be039fed7616edf60d1993dd68$exports) {
  $df10ca4db49d6eeefe1ef9825b72$var$defineProperties($df10ca4db49d6eeefe1ef9825b72$var$URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('serialize', 'setHref'),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getOrigin'),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getProtocol', 'setProtocol'),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getUsername', 'setUsername'),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getPassword', 'setPassword'),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getHost', 'setHost'),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getHostname', 'setHostname'),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getPort', 'setPort'),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getPathname', 'setPathname'),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getSearch', 'setSearch'),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getSearchParams'),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: $df10ca4db49d6eeefe1ef9825b72$var$accessorDescriptor('getHash', 'setHash')
  });
} // `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson


// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$f6b650ac0564db3a1dfe92ff64a576d7$exports($df10ca4db49d6eeefe1ef9825b72$var$URLPrototype, 'toJSON', function toJSON() {
  return $df10ca4db49d6eeefe1ef9825b72$var$getInternalURLState(this).serialize();
}, {
  enumerable: true
}); // `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
$f6b650ac0564db3a1dfe92ff64a576d7$exports($df10ca4db49d6eeefe1ef9825b72$var$URLPrototype, 'toString', function toString() {
  return $df10ca4db49d6eeefe1ef9825b72$var$getInternalURLState(this).serialize();
}, {
  enumerable: true
});

if ($df10ca4db49d6eeefe1ef9825b72$var$NativeURL) {
  var $df10ca4db49d6eeefe1ef9825b72$var$nativeCreateObjectURL = $df10ca4db49d6eeefe1ef9825b72$var$NativeURL.createObjectURL;
  var $df10ca4db49d6eeefe1ef9825b72$var$nativeRevokeObjectURL = $df10ca4db49d6eeefe1ef9825b72$var$NativeURL.revokeObjectURL; // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if ($df10ca4db49d6eeefe1ef9825b72$var$nativeCreateObjectURL) $f6b650ac0564db3a1dfe92ff64a576d7$exports($df10ca4db49d6eeefe1ef9825b72$var$URLConstructor, 'createObjectURL', $e4e74f51fd405dadc69f4a1afdc06$exports($df10ca4db49d6eeefe1ef9825b72$var$nativeCreateObjectURL, $df10ca4db49d6eeefe1ef9825b72$var$NativeURL)); // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL

  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if ($df10ca4db49d6eeefe1ef9825b72$var$nativeRevokeObjectURL) $f6b650ac0564db3a1dfe92ff64a576d7$exports($df10ca4db49d6eeefe1ef9825b72$var$URLConstructor, 'revokeObjectURL', $e4e74f51fd405dadc69f4a1afdc06$exports($df10ca4db49d6eeefe1ef9825b72$var$nativeRevokeObjectURL, $df10ca4db49d6eeefe1ef9825b72$var$NativeURL));
}

$c58c59549867eac23eeb6$exports($df10ca4db49d6eeefe1ef9825b72$var$URLConstructor, 'URL');
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  global: true,
  forced: !$a8e9e5e41e80e9d28942c49acb6269fb$exports,
  sham: !$e00ad6be039fed7616edf60d1993dd68$exports
}, {
  URL: $df10ca4db49d6eeefe1ef9825b72$var$URLConstructor
});
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$f09cf99f84fa9bbebf324815a05f0ad3$exports({
  target: 'URL',
  proto: true,
  enumerable: true
}, {
  toJSON: function toJSON() {
    return $dcf1edbae4500c7eefdab278edf50a$exports(URL.prototype.toString, this);
  }
});
// ASSET: D:\CookBook\node_modules\regenerator-runtime\runtime.js
var $e373b4328900cc8ac7f27037dcba5a8f$exports = {};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e373b4328900cc8ac7f27037dcba5a8f$var$runtime = function (exports) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
"object" === "object" ? $e373b4328900cc8ac7f27037dcba5a8f$exports : {});

try {
  regeneratorRuntime = $e373b4328900cc8ac7f27037dcba5a8f$var$runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = $e373b4328900cc8ac7f27037dcba5a8f$var$runtime;
  } else {
    Function("r", "regeneratorRuntime = r")($e373b4328900cc8ac7f27037dcba5a8f$var$runtime);
  }
}

const $c43a1f44f1e92dbc8bbad34e1b1b072c$export$API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const $c43a1f44f1e92dbc8bbad34e1b1b072c$export$TIMEOUT_SECONDS = 10;
const $c43a1f44f1e92dbc8bbad34e1b1b072c$export$RESULTS_PER_PAGE = 15;

const $db06590f1e587c641da841f8d63b63$var$timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long! Timeout after ".concat(s, " second")));
    }, s * 1000);
  });
};

const $db06590f1e587c641da841f8d63b63$export$getJson = async function (Url) {
  try {
    const unFilteredRes = await Promise.race([fetch(Url), $db06590f1e587c641da841f8d63b63$var$timeout($c43a1f44f1e92dbc8bbad34e1b1b072c$export$TIMEOUT_SECONDS)]);
    const realRes = await unFilteredRes.json();
    if (!unFilteredRes.ok) throw new Error("".concat(realRes.message, " (").concat(unFilteredRes.status, ")"));
    return realRes;
  } catch (err) {
    throw err;
  }
};

const $cf1e304235ccf25dc965a5cd06$export$state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: $c43a1f44f1e92dbc8bbad34e1b1b072c$export$RESULTS_PER_PAGE
  },
  bookmarks: []
};

const $cf1e304235ccf25dc965a5cd06$export$loadRecipe = async function (changedHash) {
  try {
    const realRes = await $db06590f1e587c641da841f8d63b63$export$getJson("".concat($c43a1f44f1e92dbc8bbad34e1b1b072c$export$API_URL).concat(changedHash));
    const {
      recipe
    } = realRes.data;
    $cf1e304235ccf25dc965a5cd06$export$state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    if ($cf1e304235ccf25dc965a5cd06$export$state.bookmarks.some(bookmark => bookmark.id === $cf1e304235ccf25dc965a5cd06$export$state.recipe.id)) $cf1e304235ccf25dc965a5cd06$export$state.recipe.bookmarked = true;else $cf1e304235ccf25dc965a5cd06$export$state.recipe.bookmarked = false;
    console.log($cf1e304235ccf25dc965a5cd06$export$state.recipe);
  } catch (err) {
    console.log("".concat(err, "\uD83D\uDCA3\uD83D\uDCA3\uD83D\uDCA3\uD83D\uDCA3"));
    throw err;
  }
};

const $cf1e304235ccf25dc965a5cd06$export$loadSearchResults = async function (searchText) {
  try {
    $cf1e304235ccf25dc965a5cd06$export$state.search.query = searchText;
    const datasearch = await $db06590f1e587c641da841f8d63b63$export$getJson("".concat($c43a1f44f1e92dbc8bbad34e1b1b072c$export$API_URL, "?search=").concat(searchText));
    console.log(datasearch);
    $cf1e304235ccf25dc965a5cd06$export$state.search.results = datasearch.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url
      };
    });
    $cf1e304235ccf25dc965a5cd06$export$state.search.page = 1;
  } catch (err) {
    console.log(err);
  }
};

const $cf1e304235ccf25dc965a5cd06$export$getSearchResultsPage = function () {
  let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $cf1e304235ccf25dc965a5cd06$export$state.search.page;
  $cf1e304235ccf25dc965a5cd06$export$state.search.page = page;
  const start = (page - 1) * $cf1e304235ccf25dc965a5cd06$export$state.search.resultsPerPage; //0

  //0
  const end = page * $cf1e304235ccf25dc965a5cd06$export$state.search.resultsPerPage; //9

  //9
  return $cf1e304235ccf25dc965a5cd06$export$state.search.results.slice(start, end);
};

const $cf1e304235ccf25dc965a5cd06$export$updateServings = function (newServings) {
  $cf1e304235ccf25dc965a5cd06$export$state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * newServings / $cf1e304235ccf25dc965a5cd06$export$state.recipe.servings;
  });
  $cf1e304235ccf25dc965a5cd06$export$state.recipe.servings = newServings;
};

const $cf1e304235ccf25dc965a5cd06$var$persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify($cf1e304235ccf25dc965a5cd06$export$state.bookmarks));
};

const $cf1e304235ccf25dc965a5cd06$export$addBookmark = function (recipe) {
  //add bookmark
  $cf1e304235ccf25dc965a5cd06$export$state.bookmarks.push(recipe); //mark.curr recipe as bookmark

  //mark.curr recipe as bookmark
  if (recipe.id === $cf1e304235ccf25dc965a5cd06$export$state.recipe.id) $cf1e304235ccf25dc965a5cd06$export$state.recipe.bookmarked = true;
  $cf1e304235ccf25dc965a5cd06$var$persistBookmarks();
};

const $cf1e304235ccf25dc965a5cd06$export$deleteBookmark = function (id) {
  const index = $cf1e304235ccf25dc965a5cd06$export$state.bookmarks.findIndex(el => el.id === id);
  $cf1e304235ccf25dc965a5cd06$export$state.bookmarks.splice(index, 1);
  if (id === $cf1e304235ccf25dc965a5cd06$export$state.recipe.id) $cf1e304235ccf25dc965a5cd06$export$state.recipe.bookmarked = false;
  $cf1e304235ccf25dc965a5cd06$var$persistBookmarks();
};

const $cf1e304235ccf25dc965a5cd06$var$init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) $cf1e304235ccf25dc965a5cd06$export$state.bookmarks = JSON.parse(storage);
};

$cf1e304235ccf25dc965a5cd06$var$init();
// ASSET: D:\CookBook\node_modules\@parcel\runtime-js\lib\JSRuntime.js
var $e5c60ae559fdfbf14ca6560f5e1f65c$exports = {};

/* globals document:readonly */
var $f8e3232e83f0b4b967dc34b60ada38c$var$bundleURL = null;

function $f8e3232e83f0b4b967dc34b60ada38c$var$getBundleURLCached() {
  if (!$f8e3232e83f0b4b967dc34b60ada38c$var$bundleURL) {
    $f8e3232e83f0b4b967dc34b60ada38c$var$bundleURL = $f8e3232e83f0b4b967dc34b60ada38c$var$getBundleURL();
  }

  return $f8e3232e83f0b4b967dc34b60ada38c$var$bundleURL;
}

function $f8e3232e83f0b4b967dc34b60ada38c$var$getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return $f8e3232e83f0b4b967dc34b60ada38c$var$getBaseURL(matches[0]);
    }
  }

  return '/';
}

function $f8e3232e83f0b4b967dc34b60ada38c$var$getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


var $f8e3232e83f0b4b967dc34b60ada38c$export$getBundleURL = $f8e3232e83f0b4b967dc34b60ada38c$var$getBundleURLCached;
$e5c60ae559fdfbf14ca6560f5e1f65c$exports = $f8e3232e83f0b4b967dc34b60ada38c$export$getBundleURL() + "icons.c781f215.svg";

function $cb491850c51946e606028ee6dbf$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var $e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default = $parcel$interopDefault($e5c60ae559fdfbf14ca6560f5e1f65c$exports);

class $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    $cb491850c51946e606028ee6dbf$var$_defineProperty(this, "_data", void 0);
  }

  render(data) {
    let render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElem = Array.from(newDom.querySelectorAll('*'));
    const currElem = Array.from(this._parentElement.querySelectorAll('*'));
    newElem.forEach((newElem, indx) => {
      var _newElem$firstChild;

      const curEl = currElem[indx]; //changes text

      //changes text
      if (!newElem.isEqualNode(curEl) && ((_newElem$firstChild = newElem.firstChild) === null || _newElem$firstChild === void 0 ? void 0 : _newElem$firstChild.nodeValue.trim()) !== '') {
        curEl.textContent = newElem.textContent;
      } //changes attributes


      //changes attributes
      if (!newElem.isEqualNode(curEl)) Array.from(newElem.attributes).forEach(newattr => curEl.setAttribute(newattr.name, newattr.value));
    });
  }

  renderError() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._Errormessage;
    const markup = " <div class=\"error\">\n        <div>\n          <svg>\n            <use href=\"".concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-alert-triangle\"></use>\n          </svg>\n        </div>\n        <p>").concat(message, "</p>\n      </div>\n    ");
    this._clear;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._Message;
    const markup = "   <div class=\"recipe\">\n        <div class=\"message\">\n          <div>\n            <svg>\n              <use href=\"".concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "icon-smile\"></use>\n            </svg>\n          </div>\n          <p>Start by searching for a recipe or an ingredient. Have fun!</p>\n        </div>\n    ");
    this._clear;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const Markup = "\n        <div class=\"spinner\">\n                <svg>\n                  <use href=\"".concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-loader\"></use>\n                </svg>\n              </div> \n");
    this._clear;

    this._parentElement.insertAdjacentHTML('afterbegin', Markup);
  }

}

function $a74eadbd724fe9d95557a8524f447$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

// import Fration from 'fractional';
class $a74eadbd724fe9d95557a8524f447$var$RecipeView extends $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    super(...arguments);
    $a74eadbd724fe9d95557a8524f447$var$_defineProperty(this, "_parentElement", document.querySelector('.recipe'));
    $a74eadbd724fe9d95557a8524f447$var$_defineProperty(this, "_Errormessage", "We couldn't find the recipe .Please try another");
    $a74eadbd724fe9d95557a8524f447$var$_defineProperty(this, "_Message", '');
  }

  _generateMarkup() {
    return "\n        <figure class=\"recipe__fig\">\n          <img src=\"".concat(this._data.image, "\"\n           alt=\"").concat(this._data.title, "\" class=\"recipe__img\" />\n          <h1 class=\"recipe__title\">\n            <span>").concat(this._data.title, "</span>\n          </h1>\n        </figure>\n\n        <div class=\"recipe__details\">\n          <div class=\"recipe__info\">\n            <svg class=\"recipe__info-icon\">\n              <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-clock\"></use>\n            </svg>\n            <span class=\"recipe__info-data recipe__info-data--minutes\">").concat(this._data.cookingTime, "</span>\n            <span class=\"recipe__info-text\">minutes</span>\n          </div>\n          <div class=\"recipe__info\">\n            <svg class=\"recipe__info-icon\">\n              <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-users\"></use>\n            </svg>\n            <span class=\"recipe__info-data recipe__info-data--people\">").concat(this._data.servings, "</span>\n            <span class=\"recipe__info-text\">servings</span>\n\n            <div class=\"recipe__info-buttons\">\n              <button class=\"btn--tiny btn--update-servings\" data-updateto=\"").concat(this._data.servings - 1, "\">\n                <svg>\n                  <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-minus-circle\"></use>\n                </svg>\n              </button>\n              <button class=\"btn--tiny btn--update-servings\" data-updateto=\"").concat(this._data.servings + 1, "\">\n                <svg>\n                  <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-plus-circle\"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"recipe__user-generated\">\n    \n          </div>\n          <button class=\"btn--round btn--bookmark\">\n            <svg class=\"\">\n              <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-bookmark").concat(this._data.bookmarked ? '-fill' : '', "\"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class=\"recipe__ingredients\">\n          <h2 class=\"heading--2\">Recipe ingredients</h2>\n          <ul class=\"recipe__ingredient-list\">\n          ").concat(this._data.ingredients.map(this._generateMarkup4Ingredients).join(''), "\n          </div>\n\n        <div class=\"recipe__directions\">\n          <h2 class=\"heading--2\">How to cook it</h2>\n          <p class=\"recipe__directions-text\">\n            This recipe was carefully designed and tested by\n            <span class=\"recipe__publisher\">").concat(this._data.publisher, "</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class=\"btn--small recipe__btn\"\n            href=\"").concat(this._data.sourceUrl, "\"\n            target=\"_blank\"\n          >\n            <span>Directions</span>\n            <svg class=\"search__icon\">\n              <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-arrow-right\"></use>\n            </svg>\n          </a>\n        </div>");
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup4Ingredients(ing) {
    return "\n              <li class=\"recipe__ingredient\">\n              <svg class=\"recipe__icon\">\n                <use href=\"".concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-check\"></use>\n              </svg>\n              <div class=\"recipe__quantity\">").concat(ing.quantity, "</div>\n              <div class=\"recipe__description\">\n                <span class=\"recipe__unit\">").concat(ing.unit, "</span>\n                ").concat(ing.description, "\n              </div>\n            </li>\n            ");
  } // #generateMarkup4Ingredients(ing) {
  //   return `
  //             <li class="recipe__ingredient">
  //             <svg class="recipe__icon">
  //               <use href="${icons}#icon-check"></use>
  //             </svg>
  //             <div class="recipe__quantity">${
  //               ing.quantity
  //                 ? new Fraction.Fraction(ing.quantity).toString()
  //                 : ''
  //             }</div>
  //             <div class="recipe__description">
  //               <span class="recipe__unit">${ing.unit}</span>
  //               ${ing.description}
  //             </div>
  //           </li>
  //           `;
  // }


  // #generateMarkup4Ingredients(ing) {
  //   return `
  //             <li class="recipe__ingredient">
  //             <svg class="recipe__icon">
  //               <use href="${icons}#icon-check"></use>
  //             </svg>
  //             <div class="recipe__quantity">${
  //               ing.quantity
  //                 ? new Fraction.Fraction(ing.quantity).toString()
  //                 : ''
  //             }</div>
  //             <div class="recipe__description">
  //               <span class="recipe__unit">${ing.unit}</span>
  //               ${ing.description}
  //             </div>
  //           </li>
  //           `;
  // }
  addHandler(subscriber) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, subscriber));
  }

  addHandlerServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const UpdateTo = Number(btn.dataset.updateto);
      if (UpdateTo > 0) handler(UpdateTo);
    });
  }

}

var $a74eadbd724fe9d95557a8524f447$export$default = new $a74eadbd724fe9d95557a8524f447$var$RecipeView();

function $db87620e5adae3ce1cfe9d683aa2$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class $db87620e5adae3ce1cfe9d683aa2$var$Searchview {
  constructor() {
    $db87620e5adae3ce1cfe9d683aa2$var$_defineProperty(this, "_parentElement", document.querySelector('.search'));
  }

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;

    this._clearInput();

    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(subscriber) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      subscriber();
    });
  }

}

var $db87620e5adae3ce1cfe9d683aa2$export$default = new $db87620e5adae3ce1cfe9d683aa2$var$Searchview();

function $c58ada9b6014615974e76bbf28b3c9$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class $c58ada9b6014615974e76bbf28b3c9$var$PaginationView extends $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    super(...arguments);
    $c58ada9b6014615974e76bbf28b3c9$var$_defineProperty(this, "_parentElement", document.querySelector('.pagination'));
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage); //page 1 and other pages

    //page 1 and other pages
    if (currPage === 1 && numPages > 1) {
      return "  \n                <button data-goto=\"".concat(currPage + 1, "\" class=\"btn--inline pagination__btn--next\">\n                            <span>Page ").concat(currPage + 1, "</span>\n                            <svg class=\"search__icon\">\n                            <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-arrow-right\"></use>\n                            </svg>\n                        </button>");
    } //last page


    //last page
    if (currPage === numPages && numPages > 1) {
      return "   <button data-goto=\"".concat(currPage - 1, "\" class=\"btn--inline pagination__btn--prev\">\n                <svg class=\"search__icon\">\n                  <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-arrow-left\"></use>\n                </svg>\n                <span>Page ").concat(currPage - 1, "</span>\n              </button>");
    } //other page


    //other page
    if (currPage < numPages) {
      return "  \n             <button data-goto=\"".concat(currPage - 1, "\" class=\"btn--inline pagination__btn--prev\">\n                    <svg class=\"search__icon\">\n                    <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-arrow-left\"></use>\n                    </svg>\n                    <span>Page ").concat(currPage - 1, "</span>\n                </button>\n                <button data-goto=\"").concat(currPage + 1, "\" class=\"btn--inline pagination__btn--next\">\n                            <span>Page ").concat(currPage + 1, "</span>\n                            <svg class=\"search__icon\">\n                            <use href=\"").concat($e5c60ae559fdfbf14ca6560f5e1f65c$$interop$default, "#icon-arrow-right\"></use>\n                            </svg>\n                        </button>");
    }

    return ""; //page 1 and no pages
  }

  addHandlerClick(HandlerSubscriber) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const bot = e.target.closest('.btn--inline');
      if (!bot) return;
      const gotoPage = Number(bot.dataset.goto);
      HandlerSubscriber(gotoPage);
    });
  }

}

var $c58ada9b6014615974e76bbf28b3c9$export$default = new $c58ada9b6014615974e76bbf28b3c9$var$PaginationView();

function $f28db9877f004fb84e3e9e5b1da60$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class $f28db9877f004fb84e3e9e5b1da60$var$PreviewView extends $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    super(...arguments);
    $f28db9877f004fb84e3e9e5b1da60$var$_defineProperty(this, "_parentElement", '');
  }

  _generateMarkup(results) {
    const id = window.location.hash.slice(1);
    return "  \n                <li class=\"preview\">\n                    <a class=\"preview__link ".concat(this._data.id === id ? 'preview__link--active' : '', "\" href=\"#").concat(this._data.id, "\">\n                    <figure class=\"preview__fig\">\n                        <img src=\"").concat(this._data.image, "\" alt=\"").concat(this._data.title, "\" />\n                    </figure>\n                    <div class=\"preview__data\">\n                        <h4 class=\"preview__title\">").concat(this._data.title, "</h4>\n                        <p class=\"preview__publisher\">").concat(this._data.publisher, "</p>\n                    </div>\n                    </a>\n                </li>\n          ");
  }

}

var $f28db9877f004fb84e3e9e5b1da60$export$default = new $f28db9877f004fb84e3e9e5b1da60$var$PreviewView();

function $deb0ee05d924f9a802b7fb2624b60$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class $deb0ee05d924f9a802b7fb2624b60$var$ResultsView extends $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    super(...arguments);
    $deb0ee05d924f9a802b7fb2624b60$var$_defineProperty(this, "_parentElement", document.querySelector('.results'));
    $deb0ee05d924f9a802b7fb2624b60$var$_defineProperty(this, "_Errormessage", "We couldn't find the recipe .Please try another");
    $deb0ee05d924f9a802b7fb2624b60$var$_defineProperty(this, "_Message", '');
  }

  _generateMarkup() {
    return this._data.map(result => $f28db9877f004fb84e3e9e5b1da60$export$default.render(result, false)).join('');
  }

}

var $deb0ee05d924f9a802b7fb2624b60$export$default = new $deb0ee05d924f9a802b7fb2624b60$var$ResultsView();

function $e0993785a82aaedf4cc55d8f17dbdff$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class $e0993785a82aaedf4cc55d8f17dbdff$var$BookmarksView extends $cb491850c51946e606028ee6dbf$export$default {
  constructor() {
    super(...arguments);
    $e0993785a82aaedf4cc55d8f17dbdff$var$_defineProperty(this, "_parentElement", document.querySelector('.bookmarks__list'));
    $e0993785a82aaedf4cc55d8f17dbdff$var$_defineProperty(this, "_Errormessage", 'No bookmarks yet. Find a nice recipe and bookmark it :)');
    $e0993785a82aaedf4cc55d8f17dbdff$var$_defineProperty(this, "_Message", '');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(boookmark => $f28db9877f004fb84e3e9e5b1da60$export$default.render(boookmark, false)).join('');
  }

}

var $e0993785a82aaedf4cc55d8f17dbdff$export$default = new $e0993785a82aaedf4cc55d8f17dbdff$var$BookmarksView();

///////////////////////////////////////
//FUNCTIONS
const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlRecipies = async function () {
  try {
    const changedHash = window.location.hash.slice(1);
    if (!changedHash) return;
    $a74eadbd724fe9d95557a8524f447$export$default.renderSpinner(); //Update resuls view to mark selected search results active

    //Update resuls view to mark selected search results active
    $deb0ee05d924f9a802b7fb2624b60$export$default.update($cf1e304235ccf25dc965a5cd06$export$getSearchResultsPage());
    $e0993785a82aaedf4cc55d8f17dbdff$export$default.update($cf1e304235ccf25dc965a5cd06$export$state.bookmarks);
    await $cf1e304235ccf25dc965a5cd06$export$loadRecipe(changedHash);
    $a74eadbd724fe9d95557a8524f447$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.recipe);
  } catch (err) {
    $a74eadbd724fe9d95557a8524f447$export$default.renderError();
    console.log(err);
  }
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlSearchResults = async () => {
  try {
    $deb0ee05d924f9a802b7fb2624b60$export$default.renderSpinner(); //Get search qiery from view

    //Get search qiery from view
    const searchQuery = $db87620e5adae3ce1cfe9d683aa2$export$default.getQuery();
    if (!$db87620e5adae3ce1cfe9d683aa2$export$default.getQuery) return; //Render results

    //Render results
    await $cf1e304235ccf25dc965a5cd06$export$loadSearchResults(searchQuery); // resultsView.render(model.state.search.results);

    // resultsView.render(model.state.search.results);
    $deb0ee05d924f9a802b7fb2624b60$export$default.render($cf1e304235ccf25dc965a5cd06$export$getSearchResultsPage()); //Render initial pagenation

    //Render initial pagenation
    $c58ada9b6014615974e76bbf28b3c9$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.search);
  } catch (err) {
    console.log(err);
  }
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlPagenation = function (gotoPage) {
  //Render new results
  $deb0ee05d924f9a802b7fb2624b60$export$default.render($cf1e304235ccf25dc965a5cd06$export$getSearchResultsPage(gotoPage)); //Render new pagenation bots

  //Render new pagenation bots
  $c58ada9b6014615974e76bbf28b3c9$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.search);
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlServings = function (newServings) {
  //Update recepi servings
  $cf1e304235ccf25dc965a5cd06$export$updateServings(newServings); // recipeView.render(model.state.recipe);

  // recipeView.render(model.state.recipe);
  $a74eadbd724fe9d95557a8524f447$export$default.update($cf1e304235ccf25dc965a5cd06$export$state.recipe); //update the recipe view
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlAddBookmark = function () {
  if (!$cf1e304235ccf25dc965a5cd06$export$state.recipe.bookmarked) $cf1e304235ccf25dc965a5cd06$export$addBookmark($cf1e304235ccf25dc965a5cd06$export$state.recipe);else $cf1e304235ccf25dc965a5cd06$export$deleteBookmark($cf1e304235ccf25dc965a5cd06$export$state.recipe);
  $a74eadbd724fe9d95557a8524f447$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.recipe);
  $e0993785a82aaedf4cc55d8f17dbdff$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.bookmarks);
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlBookmarks = function () {
  $e0993785a82aaedf4cc55d8f17dbdff$export$default.render($cf1e304235ccf25dc965a5cd06$export$state.bookmarks);
};

const $cc9f3a2fdbaefcad8aa8b190c48de7bf$var$init = () => {
  $e0993785a82aaedf4cc55d8f17dbdff$export$default.addHandlerRender($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlBookmarks);
  $a74eadbd724fe9d95557a8524f447$export$default.addHandler($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlRecipies);
  $a74eadbd724fe9d95557a8524f447$export$default.addHandlerServings($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlServings);
  $a74eadbd724fe9d95557a8524f447$export$default.addHandlerAddBookmark($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlAddBookmark);
  $db87620e5adae3ce1cfe9d683aa2$export$default.addHandlerSearch($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlSearchResults);
  $c58ada9b6014615974e76bbf28b3c9$export$default.addHandlerClick($cc9f3a2fdbaefcad8aa8b190c48de7bf$var$controlPagenation);
};

$cc9f3a2fdbaefcad8aa8b190c48de7bf$var$init();
//# sourceMappingURL=controller.1e15ddc1.js.map
