// @declaration: true
// @Filename: a.ts
export type T = string;

// @Filename: b.ts
export * as A from './a';

// @Filename: c.ts
export * as B from './b';

// @Filename: d.ts
import * as C from './c';
export const x: C.B.A.T = 'x'; // ok
const y: C.B.A.T = 3; // error
