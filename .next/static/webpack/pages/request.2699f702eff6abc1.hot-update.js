"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.jsx\");\n/* harmony import */ var _components_Request_RequestCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Request/RequestCard */ \"./components/Request/RequestCard.jsx\");\n/* harmony import */ var _components_Request_SingleRequestCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Request/SingleRequestCard */ \"./components/Request/SingleRequestCard.jsx\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// export const getStaticPaths = async () => {\n//   const { user } = useUser();\n//   if (user) {\n//     const path = user.email;\n//   }\n//   return {\n//     path\n//   }\n// }\nvar stop = true;\nfunction Request(param) {\n    var requests = param.requests;\n    var _this = this;\n    _s();\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__.useUser)().user;\n    if (user) {\n        get;\n    }\n    console.log(requests);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"relative py-20 bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container px-4 mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-3xl mb-20 mx-auto text-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xl text-green-600 font-semibold\",\n                                        children: \"Th\\xf4ng b\\xe1o \\u0111\\u01A1n h\\xe0ng\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap -m-3 mb-16\",\n                                    children: requests.map(function(request) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Request_RequestCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            userFrom: request.userfrom,\n                                            userTo: request.userto\n                                        }, request.id, false, {\n                                            fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200\",\n                                        children: \"Xem th\\xeam \\u0111\\u01A1n h\\xe0ng\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                        fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/pages/request.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Request, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__.useUser\n    ];\n});\n_c = Request;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\nvar _c;\n$RefreshReg$(_c, \"Request\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNJO0FBRU87QUFDWTtBQUMxQjtBQUNwQjs7QUFFMUIsOENBQThDO0FBQzlDLGdDQUFnQztBQUVoQyxnQkFBZ0I7QUFDaEIsK0JBQStCO0FBQy9CLE1BQU07QUFFTixhQUFhO0FBQ2IsV0FBVztBQUNYLE1BQU07QUFDTixJQUFJO0FBRUosSUFBSU0sSUFBSSxHQUFHLElBQUk7QUFXZixTQUFTQyxPQUFPLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7O0lBQ3pCLElBQU0sSUFBTSxHQUFLSiw0REFBTyxFQUFFLENBQWxCSyxJQUFJO0lBRVosSUFBSUEsSUFBSSxFQUFFO1FBQ1JDLEdBQUc7S0FDSjtJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDO0lBRW5CLHFCQUNFOzswQkFDRSw4REFBQ1IsaUVBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNhLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7O2tDQUN0Qyw4REFBQ0MsU0FBTzt3QkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjtrQ0FDMUMsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzhDQUNyQyw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHFDQUFxQzs4Q0FDbEQsNEVBQUNFLE1BQUk7d0NBQUNGLFNBQVMsRUFBQyxzQ0FBc0M7a0RBQUMsdUNBRXZEOzs7Ozs0Q0FBTzs7Ozs7d0NBQ0g7OENBQ04sOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQywyQkFBMkI7OENBQ3ZDTixRQUFRLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxPQUFPOzZEQUNwQiw4REFBQ2hCLHVFQUFXOzRDQUVWaUIsUUFBUSxFQUFFRCxPQUFPLENBQUNFLFFBQVE7NENBQzFCQyxNQUFNLEVBQUVILE9BQU8sQ0FBQ0ksTUFBTTsyQ0FGakJKLE9BQU8sQ0FBQ0ssRUFBRTs7OztpREFHZjtxQ0FDSCxDQUFDOzs7Ozt3Q0FDRTs4Q0FDTiw4REFBQ1YsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGFBQWE7OENBQzFCLDRFQUFDVSxRQUFNO3dDQUFDVixTQUFTLEVBQUMsNEdBQTRHO2tEQUFDLG1DQUUvSDs7Ozs7NENBQVM7Ozs7O3dDQUNMOzs7Ozs7Z0NBQ0Y7Ozs7OzRCQUNFO2tDQUNWLDhEQUFDYiw2REFBTTs7Ozs0QkFBRzs7Ozs7O29CQUNOOztvQkFDTCxDQUNIO0NBQ0w7R0F2Q1FNLE9BQU87O1FBQ0dILHdEQUFPOzs7QUFEakJHLEtBQUFBLE9BQU87O0FBeUNoQiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXF1ZXN0LmpzPzllMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IFJlcXVlc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcXVlc3QvUmVxdWVzdENhcmRcIjtcclxuaW1wb3J0IFNpbmdsZVJlcXVlc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcXVlc3QvU2luZ2xlUmVxdWVzdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcclxuXHJcbi8vICAgaWYgKHVzZXIpIHtcclxuLy8gICAgIGNvbnN0IHBhdGggPSB1c2VyLmVtYWlsO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhdGhcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmxldCBzdG9wID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7dXNlclJlcXVlc3R9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9yZXF1ZXN0YCk7XHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3JlcXVlc3RzfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0KHsgcmVxdWVzdHMgfSkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAodXNlcikge1xyXG4gICAgZ2V0XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHJlcXVlc3RzKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTIwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG1iLTIwIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmVlbi02MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICBUaMO0bmcgYsOhbyDEkcahbiBow6BuZ1xyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMyBtYi0xNlwiPlxyXG4gICAgICAgICAgICAgICAge3JlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVxdWVzdENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3JlcXVlc3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckZyb209e3JlcXVlc3QudXNlcmZyb219XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclRvPXtyZXF1ZXN0LnVzZXJ0b31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBYZW0gdGjDqm0gxJHGoW4gaMOgbmdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Il0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIlJlcXVlc3RDYXJkIiwiU2luZ2xlUmVxdWVzdENhcmQiLCJ1c2VVc2VyIiwiUmVhY3QiLCJzdG9wIiwiUmVxdWVzdCIsInJlcXVlc3RzIiwidXNlciIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3BhbiIsIm1hcCIsInJlcXVlc3QiLCJ1c2VyRnJvbSIsInVzZXJmcm9tIiwidXNlclRvIiwidXNlcnRvIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/request.js\n");

/***/ })

});