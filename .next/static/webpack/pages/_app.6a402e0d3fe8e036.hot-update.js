"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/providers/AuthProvider */ \"./src/providers/AuthProvider.jsx\");\n/* harmony import */ var _providers_UserDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/providers/UserDataProvider */ \"./src/providers/UserDataProvider.jsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction App(param) {\n    let { Component, pageProps } = param;\n    const Layout = Component.Layout || ((param)=>{\n        let { children } = param;\n        return children;\n    });\n    const LayoutAcc = Component.Layoutacc || ((param)=>{\n        let { children } = param;\n        return children;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_UserDataProvider__WEBPACK_IMPORTED_MODULE_2__.UserDataProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ferst-web\\\\bilito\\\\src\\\\pages\\\\_app.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ferst-web\\\\bilito\\\\src\\\\pages\\\\_app.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ferst-web\\\\bilito\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\ferst-web\\\\bilito\\\\src\\\\pages\\\\_app.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ferst-web\\\\bilito\\\\src\\\\pages\\\\_app.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNRO0FBQ1o7QUFDRjtBQUMxQjtBQUVyQixNQUFNSSxjQUFjLElBQUlGLDhEQUFXQTtBQUVwQixTQUFTRyxJQUFJLEtBQXNCO1FBQXRCLEVBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFDLEdBQXRCO0lBQzFCLE1BQU1DLFNBQVNGLFVBQVVFLE1BQU0sSUFBSztZQUFDLEVBQUNDLFFBQVEsRUFBQztlQUFLQTtLQUFPO0lBQzNELE1BQU1DLFlBQVlKLFVBQVVLLFNBQVMsSUFBSztZQUFDLEVBQUNGLFFBQVEsRUFBQztlQUFLQTtLQUFPO0lBRWpFLHFCQUNFLDhEQUFDTiw0REFBbUJBO1FBQUNTLFFBQVFSO2tCQUMzQiw0RUFBQ0gseUVBQWdCQTtzQkFDZiw0RUFBQ0QsaUVBQVlBOzBCQUNYLDRFQUFDUTs4QkFDQyw0RUFBQ0Y7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7S0Fmd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tICdAL3Byb3ZpZGVycy9BdXRoUHJvdmlkZXInXHJcbmltcG9ydCB7VXNlckRhdGFQcm92aWRlcn0gZnJvbSAnQC9wcm92aWRlcnMvVXNlckRhdGFQcm92aWRlcidcclxuaW1wb3J0IHtRdWVyeUNsaWVudH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQge1F1ZXJ5Q2xpZW50UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgJy4uL2luZGV4LmNzcydcclxuXHJcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCAoKHtjaGlsZHJlbn0pID0+IGNoaWxkcmVuKVxyXG4gIGNvbnN0IExheW91dEFjYyA9IENvbXBvbmVudC5MYXlvdXRhY2MgfHwgKCh7Y2hpbGRyZW59KSA9PiBjaGlsZHJlbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICA8VXNlckRhdGFQcm92aWRlcj5cclxuICAgICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICAgIDwvVXNlckRhdGFQcm92aWRlcj5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlVzZXJEYXRhUHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImNoaWxkcmVuIiwiTGF5b3V0QWNjIiwiTGF5b3V0YWNjIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n"));

/***/ })

});