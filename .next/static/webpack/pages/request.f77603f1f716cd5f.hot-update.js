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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Git_test_ViRento_react_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Git_test_ViRento_react_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Git_test_ViRento_react_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.jsx\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.jsx\");\n/* harmony import */ var _components_Request_RequestCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Request/RequestCard */ \"./components/Request/RequestCard.jsx\");\n/* harmony import */ var _components_Request_SingleRequestCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Request/SingleRequestCard */ \"./components/Request/SingleRequestCard.jsx\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_10__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// export const getStaticProps = async () => {\n//   // const { user } = useUser();\n//   // console.log(user);\n//     const res = await fetch(`${baseUrl}/request`);\n//     const requests = await res.json();\n//     return {\n//       props: { requests },\n//     }\n// };\n// const getRequest = async ({userRequest}) => {\n//   const requests = await fetch(`${baseUrl}/request/${userRequest}`).then((res) =>\n//     res.json()\n//   );\n//   // const requests = await res.json();\n//   // console.log(requests)\n//   return requests;\n// };\nfunction Request() {\n    var _this = this;\n    _s();\n    // const { user } = useUser();\n    // if (user) {\n    //   const request = getRequest(user.email);\n    //   // console.log(requests);\n    //   const requests = request.then((res) => res.json());\n    //   console.log(requests);\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__.useUser)().user;\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_8___default().useState([]), 2), requests = ref[0], setRequests = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        function loadData() {\n            return _loadData.apply(this, arguments);\n        }\n        function _loadData() {\n            _loadData = _asyncToGenerator(D_Git_test_ViRento_react_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, requestList;\n                return D_Git_test_ViRento_react_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!user) {\n                                _ctx.next = 8;\n                                break;\n                            }\n                            _ctx.next = 3;\n                            return fetch(\"\".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"/request/\").concat(user.email));\n                        case 3:\n                            response = _ctx.sent;\n                            _ctx.next = 6;\n                            return response.json();\n                        case 6:\n                            requestList = _ctx.sent;\n                            setRequests(requestList);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _loadData.apply(this, arguments);\n        }\n        loadData();\n    }, [\n        user,\n        requests\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"relative py-20 bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"container px-4 mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"max-w-3xl mb-20 mx-auto text-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-xl text-green-600 font-semibold\",\n                                        children: \"\\u0110\\u01A1n h\\xe0ng c\\u1EE7a t\\xf4i\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap -m-3 mb-16\",\n                                    children: requests.length !== 0 ? requests.map(function(request) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                            children: [\n                                                \"                        \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Request_RequestCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    productID: request.productid,\n                                                    productTitle: request.producttitle,\n                                                    userFrom: request.userfrom,\n                                                    userTo: request.userto,\n                                                    id: request.id\n                                                }, request.id, false, {\n                                                    fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 51\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"text-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                        className: \"px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200\",\n                                                        children: \"Xem th\\xeam \\u0111\\u01A1n h\\xe0ng\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 15\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true);\n                                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: \"B\\u1EA1n hi\\u1EC7n t\\u1EA1i kh\\xf4ng c\\xf3 y\\xeau c\\u1EA7u cho thu\\xea\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                        fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Git test\\\\ViRento-react\\\\Virento-frontend\\\\pages\\\\request.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Request, \"30WefhpMpIMyqF0oZV59gu/SZvs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__.useUser\n    ];\n});\n_c = Request;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\nvar _c;\n$RefreshReg$(_c, \"Request\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0k7QUFDZDtBQUNxQjtBQUNZO0FBQzFCO0FBQ3BCO0FBQ2M7QUFDSjtBQUNMOztBQUcvQiw4Q0FBOEM7QUFDOUMsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQixxREFBcUQ7QUFDckQseUNBQXlDO0FBRXpDLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsUUFBUTtBQUVSLEtBQUs7QUFFTCxnREFBZ0Q7QUFDaEQsb0ZBQW9GO0FBQ3BGLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsMENBQTBDO0FBRTFDLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsS0FBSztBQUVMLFNBQVNVLE9BQU8sR0FBRzs7O0lBQ2pCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLDhCQUE4QjtJQUU5Qix3REFBd0Q7SUFFeEQsMkJBQTJCO0lBRTNCLElBQU0sSUFBTSxHQUFLTCw0REFBTyxFQUFFLENBQWxCTSxJQUFJO0lBQ1osSUFBZ0NMLEdBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxFQUFFLENBQUMsTUFBM0NPLFFBQVEsR0FBaUJQLEdBQWtCLEdBQW5DLEVBQUVRLFdBQVcsR0FBSVIsR0FBa0IsR0FBdEI7SUFFNUJHLGdEQUFTLENBQUMsV0FBTTtpQkFDQ00sUUFBUTttQkFBUkEsU0FBUTs7aUJBQVJBLFNBQVE7WUFBUkEsU0FBUSxHQUF2QiwwTEFBMEI7b0JBRWhCQyxRQUFRLEVBQ1JDLFdBQVc7Ozs7Z0NBRmZOLENBQUFBLElBQUk7Ozs7O21DQUNpQk8sS0FBSyxDQUFDLEVBQUMsQ0FBcUJQLE1BQVUsQ0FBN0JULHNEQUFPLEVBQUMsV0FBUyxDQUFhLFFBQVhTLElBQUksQ0FBQ1EsS0FBSyxDQUFFLENBQUM7OzRCQUExREgsUUFBUSxZQUFrRDs7bUNBQ3RDQSxRQUFRLENBQUNJLElBQUksRUFBRTs7NEJBQW5DSCxXQUFXLFlBQXdCOzRCQUN6Q0gsV0FBVyxDQUFDRyxXQUFXLENBQUMsQ0FBQzs7Ozs7O2FBRTVCO21CQU5jRixTQUFROztRQVF2QkEsUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFO1FBQUNKLElBQUk7UUFBRUUsUUFBUTtLQUFDLENBQUMsQ0FBQztJQUVyQixxQkFDRTs7MEJBQ0UsOERBQUNiLGlFQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDcUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0NBQ3RDLDhEQUFDQyxTQUFPO3dCQUFDRCxTQUFTLEVBQUMseUJBQXlCO2tDQUMxQyw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdCQUF3Qjs7OENBQ3JDLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMscUNBQXFDOzhDQUNsRCw0RUFBQ0UsTUFBSTt3Q0FBQ0YsU0FBUyxFQUFDLHNDQUFzQztrREFBQyx1Q0FFdkQ7Ozs7OzRDQUFPOzs7Ozt3Q0FDSDs4Q0FDTiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDJCQUEyQjs4Q0FFdENULFFBQVEsQ0FBQ1ksTUFBTSxLQUFLLENBQUMsR0FDakJaLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLE9BQU87NkRBQ2pCOztnREFBRSwwQkFBd0I7OERBQUEsOERBQUN4Qix1RUFBVztvREFFdEN5QixTQUFTLEVBQUVELE9BQU8sQ0FBQ0UsU0FBUztvREFDNUJDLFlBQVksRUFBRUgsT0FBTyxDQUFDSSxZQUFZO29EQUNsQ0MsUUFBUSxFQUFFTCxPQUFPLENBQUNNLFFBQVE7b0RBQzFCQyxNQUFNLEVBQUVQLE9BQU8sQ0FBQ1EsTUFBTTtvREFDdEJDLEVBQUUsRUFBRVQsT0FBTyxDQUFDUyxFQUFFO21EQUxUVCxPQUFPLENBQUNTLEVBQUU7Ozs7eURBTWI7OERBQ0YsOERBQUNmLEtBQUc7b0RBQUNDLFNBQVMsRUFBQyxhQUFhOzhEQUN0Qyw0RUFBQ2UsUUFBTTt3REFBQ2YsU0FBUyxFQUFDLDRHQUE0RztrRUFBQyxtQ0FFL0g7Ozs7OzZEQUFTOzs7Ozt5REFDeUI7O3dEQUNIO3FDQUV4QixDQUFDLGlCQUVGLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsYUFBYTtrREFBQyx3RUFBc0M7Ozs7OzRDQUFNOzs7Ozt3Q0FHM0U7Ozs7OztnQ0FFRjs7Ozs7NEJBQ0U7a0NBQ1YsOERBQUNyQiw2REFBTTs7Ozs0QkFBRzs7Ozs7O29CQUNOOztvQkFDTCxDQUNIO0NBQ0g7R0FwRVFTLE9BQU87O1FBVUdMLHdEQUFPOzs7QUFWakJLLEtBQUFBLE9BQU87QUFzRWhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcXVlc3QuanM/OWUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgUmVxdWVzdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVxdWVzdC9SZXF1ZXN0Q2FyZFwiO1xyXG5pbXBvcnQgU2luZ2xlUmVxdWVzdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVxdWVzdC9TaW5nbGVSZXF1ZXN0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIC8vIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vcmVxdWVzdGApO1xyXG4vLyAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7IHJlcXVlc3RzIH0sXHJcbi8vICAgICB9XHJcblxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgZ2V0UmVxdWVzdCA9IGFzeW5jICh7dXNlclJlcXVlc3R9KSA9PiB7XHJcbi8vICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9yZXF1ZXN0LyR7dXNlclJlcXVlc3R9YCkudGhlbigocmVzKSA9PlxyXG4vLyAgICAgcmVzLmpzb24oKVxyXG4vLyAgICk7XHJcbi8vICAgLy8gY29uc3QgcmVxdWVzdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0cylcclxuLy8gICByZXR1cm4gcmVxdWVzdHM7XHJcbi8vIH07XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0KCkge1xyXG4gIC8vIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gIC8vIGlmICh1c2VyKSB7XHJcbiAgLy8gICBjb25zdCByZXF1ZXN0ID0gZ2V0UmVxdWVzdCh1c2VyLmVtYWlsKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcclxuXHJcbiAgLy8gICBjb25zdCByZXF1ZXN0cyA9IHJlcXVlc3QudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IFtyZXF1ZXN0cywgc2V0UmVxdWVzdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9yZXF1ZXN0LyR7dXNlci5lbWFpbH1gKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0TGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRSZXF1ZXN0cyhyZXF1ZXN0TGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSgpO1xyXG4gIH0sIFt1c2VyLCByZXF1ZXN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMjAgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBtYi0yMCBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyZWVuLTYwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICDEkMahbiBow6BuZyBj4bunYSB0w7RpXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0zIG1iLTE2XCI+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdHMubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlcXVlc3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJRD17cmVxdWVzdC5wcm9kdWN0aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZT17cmVxdWVzdC5wcm9kdWN0dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJGcm9tPXtyZXF1ZXN0LnVzZXJmcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyVG89e3JlcXVlc3QudXNlcnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17cmVxdWVzdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgWGVtIHRow6ptIMSRxqFuIGjDoG5nXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QuG6oW4gaGnhu4duIHThuqFpIGtow7RuZyBjw7MgecOqdSBj4bqndSBjaG8gdGh1w6o8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJiYXNlVXJsIiwiUmVxdWVzdENhcmQiLCJTaW5nbGVSZXF1ZXN0Q2FyZCIsInVzZVVzZXIiLCJSZWFjdCIsInVzZVJvdXRlciIsImRhdGEiLCJ1c2VFZmZlY3QiLCJSZXF1ZXN0IiwidXNlciIsInVzZVN0YXRlIiwicmVxdWVzdHMiLCJzZXRSZXF1ZXN0cyIsImxvYWREYXRhIiwicmVzcG9uc2UiLCJyZXF1ZXN0TGlzdCIsImZldGNoIiwiZW1haWwiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInNwYW4iLCJsZW5ndGgiLCJtYXAiLCJyZXF1ZXN0IiwicHJvZHVjdElEIiwicHJvZHVjdGlkIiwicHJvZHVjdFRpdGxlIiwicHJvZHVjdHRpdGxlIiwidXNlckZyb20iLCJ1c2VyZnJvbSIsInVzZXJUbyIsInVzZXJ0byIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/request.js\n");

/***/ })

});