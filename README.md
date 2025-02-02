# Installation

With `npm`:

```
npm install @rnacanvas/utilities
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// some example imports
import { detectMacOS } from '@rnacanvas/utilities';
import { DownloadableFile } from '@rnacanvas/utilities';
import { KeyBinding } from '@rnacanvas/utilities';
```

## `function splitLines()`

Splits a string into its constituent lines
regardless of newline character encoding
(e.g., CR, LF, CRLF).

```javascript
splitLines('asdf\nqwer'); // ["asdf", "qwer"]

splitLines('1\n2\r3\r\n4'); // ["1", "2", "3", "4"]
```

Note that empty strings might be present in the returned array
after splitting.

```javascript
splitLines('\nasdf'); // ["", "asdf"]

splitLines('qwer\r'); // ["qwer", ""]

splitLines('asdf\n\n\nqwer'); // ["asdf", "", "", "qwer"]
```

## `function isJSONSerializable()`

Return `true` if the provided value can be serialized
using the `JSON.stringify()` method
without the `JSON.stringify()` method throwing.

Returns `false` otherwise.

```javascript
var obj1 = { 'a': 1, 'b': 2 };

isJSONSerializable(obj1); // true

var obj2 = {};

// a circular reference
obj2.obj2 = obj2;

isJSONSerializable(obj2); // false
```

## `function shuffled()`

Returns a new array containing the same values as in the input array
but shuffled in random order.

(Does not modify the input array of values.)

```javascript
shuffled([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4]
```

## `function hasFocus()`

The `hasFocus()` function returns `true` if and only if
the passed in node is the active element of the document.

```javascript
hasFocus(document.activeElement); // true

hasFocus(document.createElement('div')); // false
```

## `function containsFocus()`

The `containsFocus()` function returns `true` if and only if
the passed in node contains the active element of the document
(or is the active element of the document).

```javascript
var ele1 = document.createElement('div');
var ele2 = document.createElement('div');

// element 1 contains element 2
ele1.append(ele2);

// make elements focusable
ele1.tabIndex = 0;
ele2.tabIndex = 0;

ele1.focus();
containsFocus(ele1); // true
containsFocus(ele2); // false

ele2.focus();
containsFocus(ele1); // true
containsFocus(ele2); // true
```

## `class KeyBinding`

The `KeyBinding` class represents a key binding.

See the [@rnacanvas/key-bindings](https://pzhaojohnson.github.io/rnacanvas.key-bindings/) package for documentation.

## `function detectMacOS()`

Returns `true` if it is detected that the user is using macOS.

Returns `false` otherwise.
