"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\r\n                body { margin: 0; color: #000; background: #fff; }\r\n                .next-error-h1 {\r\n                  border-right: 1px solid rgba(0, 0, 0, .3);\r\n                }\r\n                @media (prefers-color-scheme: dark) {\r\n                  body { color: #fff; background: #000; }\r\n                  .next-error-h1 {\r\n                    border-right: 1px solid rgba(255, 255, 255, .3);\r\n                  }\r\n                }`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nexports[\"default\"] = Error;\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n}; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsS0FBSyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBb0IsQ0FBQyxDQUFDO0FBQ2pFLFNBQVNELHNCQUFzQixDQUFDRyxHQUFHLEVBQUU7SUFDakMsT0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHO1FBQ2pDTCxPQUFPLEVBQUVLLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxNQUFNRSxXQUFXLEdBQUc7QUFDaEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsT0FBRyxFQUFFLDhCQUE4QjtBQUNuQyxPQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLE9BQUcsRUFBRSx1QkFBdUI7Q0FDL0I7QUFDRCxTQUFTQyxnQkFBZ0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUdDLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxJQUFJQSxHQUFHLENBQUNFLFVBQVUsR0FBR0YsR0FBRyxDQUFDRSxVQUFVLEdBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBLFVBQVU7S0FDYixDQUFDO0NBQ0w7QUFDRCxNQUFNQyxLQUFLLFNBQVNYLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxTQUFTO0lBQ3hDQyxNQUFNLEdBQUc7UUFDTCxNQUFNLEVBQUVILFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQ0ksS0FBSztRQUNsQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUssSUFBSVQsV0FBVyxDQUFDSSxVQUFVLENBQUMsSUFBSSxrQ0FBa0M7UUFDL0YsT0FBTyxhQUFhLENBQUNWLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDaUIsYUFBYSxDQUFDLEtBQUssRUFBRTtZQUNyREMsS0FBSyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7U0FDdEIsRUFBRSxhQUFhLENBQUNuQixNQUFNLENBQUNELE9BQU8sQ0FBQ2lCLGFBQWEsQ0FBQ2IsS0FBSyxDQUFDSixPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQ0MsTUFBTSxDQUFDRCxPQUFPLENBQUNpQixhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRU4sVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxDQUFDLEVBQUUsRUFBRUssS0FBSyxDQUFDLENBQUMsR0FBRyx5REFBeUQsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDZixNQUFNLENBQUNELE9BQU8sQ0FBQ2lCLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQ2hCLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDaUIsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUMzVUksdUJBQXVCLEVBQUU7Z0JBQ3JCQyxNQUFNLEVBQUUsQ0FBQzthQVdaO1NBQ0osQ0FBQyxFQUFFWCxVQUFVLEdBQUc7WUFDYlksU0FBUyxFQUFFLGVBQWU7WUFDMUJMLEtBQUs7U0FDUixFQUFFUCxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDVixNQUFNLENBQUNEO1lBQ3hDa0IsS0FBSyxFQUFFQyxNQUFNLENBQUNNLElBQUk7U0FDckIsRUFBRSxhQUFhLENBQUN4QixNQUFNLENBQUNEO1lBQ3BCa0IsS0FBSyxFQUFFQyxNQUFNLENBQUNPLEVBQUU7U0FDbkIsRUFBRSxJQUFJLENBQUNYO0tBQ1g7Q0FDSjtBQUNEakIsT0FBTyxDQUFDRSxPQUFPLEdBQUdZLEtBQUssQ0FBQztBQUN4QkEsS0FBSyxDQUFDZ0IsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNoQ2hCLEtBQUssQ0FBQ2lCLGVBQWUsR0FBR3JCO0FBQ3hCSSxLQUFLLENBQUNrQixtQkFBbUIsR0FBR3RCLGdCQUFnQixDQUFDO0FBQzdDLE1BQU1XLE1BQU0sR0FBRztJQUNYQyxLQUFLLEVBQUU7UUFDSFcsVUFBVSxFQUFFO1FBQ1pDLE1BQU0sRUFBRSxPQUFPOzs7a0JBR2ZHLE1BQWEsRUFBRTtRQUNmQyxVQUFVLEVBQUUsUUFBUTtRQUNwQkMsY0FBYyxFQUFFLFFBQVE7S0FDM0I7SUFDRFosSUFBSSxFQUFFO1FBQ0ZTO1FBQ0FELFNBQVMsRUFBRSxNQUFNO1FBQ2pCSyxVQUFVLEVBQUU7UUFDWk4sTUFBTSxFQUFFLE1BQU07UUFDZE8sYUFBYSxFQUFFO0tBQ2xCO0lBQ0RmLEVBQUUsRUFBRTtRQUNBVSxPQUFPLEVBQUUsY0FBYzs7UUFFdkJPO1FBQ0FDLE9BQU8sRUFBRTtRQUNUQyxRQUFRLEVBQUUsTUFBTTtRQUNoQkMsVUFBVSxFQUFFLEdBQUc7UUFDZkwsYUFBYSxFQUFFO0tBQ2xCO0lBQ0RiLEVBQUU7UUFDRWlCO1FBQ0FDLFVBQVUsRUFBRSxRQUFRO1FBQ3BCTixVQUFVO1FBQ1ZFLE1BQU0sRUFBRSxDQUFDO1FBQ1RFLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixFQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlyZW50by8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzPzE4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xyXG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxyXG4gICAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXHJcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxyXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgfTtcclxufVxyXG5jbGFzcyBFcnJvciBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxyXG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICAgICAgYm9keSB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB9XHJcbiAgICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXHJcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcclxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XHJcbkVycm9yLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XHJcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBlcnJvcjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBkZXNjOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXHJcbiAgICB9LFxyXG4gICAgaDE6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();