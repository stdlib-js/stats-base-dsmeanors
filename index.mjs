// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dssumors@v0.1.1-esm/index.mjs";function n(e,s,n){return e<=0?NaN:1===e||0===n?s[0]:r(e,s,n)/e}function t(e,r,n,t){return e<=0?NaN:1===e||0===n?r[t]:s(e,r,n,t)/e}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
