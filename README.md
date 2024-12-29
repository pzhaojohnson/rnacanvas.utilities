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

