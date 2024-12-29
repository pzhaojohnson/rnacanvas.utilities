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
ele1.tabIndex = '0';
ele2.tabIndex = '0';

ele1.focus();
containsFocus(ele1); // true
containsFocus(ele2); // false

ele2.focus();
containsFocus(ele1); // true
containsFocus(ele2); // true
```
