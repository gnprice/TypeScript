//// [tests/cases/conformance/externalModules/reExportNamespace.ts] ////

//// [a.ts]
export type T = string;

//// [b.ts]
export * as A from './a';

//// [c.ts]
export * as B from './b';

//// [d.ts]
import * as C from './c';
const x: C.B.A.T = 'x';
const y: C.B.A.T = 3;


//// [a.js]
"use strict";
exports.__esModule = true;
//// [b.js]
"use strict";
exports.__esModule = true;
exports.A = void 0;
exports.A = require("./a");
//// [c.js]
"use strict";
exports.__esModule = true;
exports.B = void 0;
exports.B = require("./b");
//// [d.js]
"use strict";
exports.__esModule = true;
var x = 'x';
var y = 3;
