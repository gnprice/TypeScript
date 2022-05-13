// @declaration: true
// @Filename: a.ts
export type T = string;
export class O { x: number; }

// @Filename: b.ts
export * as A from './a';

// @Filename: c.ts
export * as B from './b';

// @Filename: d.ts
import * as C from './c';
export const u: C.B.A.T = 'x'; // ok
const v: C.B.A.T = 3; // error
const o: C.B.A.O = new C.B.A.O();
const x: number = o.x;
