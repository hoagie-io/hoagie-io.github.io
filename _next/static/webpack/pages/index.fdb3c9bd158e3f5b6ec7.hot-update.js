/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/everpurple/AuthButton */ \"./src/everpurple/AuthButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/gagik/Documents/Projects/Hoagie/mainpage/mainpage/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser)(),\n      user = _useUser.user,\n      error = _useUser.error,\n      isLoading = _useUser.isLoading;\n\n  var Profile;\n  if (isLoading) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 28\n  }, this);else if (error) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 29\n  }, this);else if (user) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Welcome \", user.name, \"!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"This is just a demo but thank you for trying it out.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {\n      logout: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 28\n  }, this);else Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 18\n  }, this);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var queryParams = new URLSearchParams(location.search);\n\n    if (queryParams.has('code')) {\n      queryParams[\"delete\"]('code');\n      queryParams[\"delete\"]('state'); // TODO: add support for other params to persist using \n      // queryParam.toString() or remove the queryParams method\n\n      router.replace(\"/\", undefined, {\n        shallow: true\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      marginX: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(1),\n      paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(10),\n      paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(8),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n        borderRadius: 20,\n        display: \"flex\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        elevation: 1,\n        background: \"white\",\n        marginX: 20,\n        maxWidth: \"800px\",\n        width: \"100%\",\n        paddingX: \"10px\",\n        paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(5),\n        paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(10),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.LayoutAutoIcon, {\n          size: 100,\n          color: \"#F58025\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n          marginTop: \"40px\",\n          width: \"600px\",\n          textAlign: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Text, {\n            className: \"hoagie\",\n            fontSize: \"24pt\",\n            lineHeight: \"40px\",\n            children: [\"Hoagie is the Princeton application platform. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Coming Fall 2021.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 63\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n            textAlign: \"left\",\n            marginTop: \"40px\",\n            fontSize: \"15pt\",\n            children: [\"Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. Hoagie Apps allow you to use the same profile accross the entire system, meaning you do not have to do things like search for the courses you're enrolled in different applicaations.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, this), \"asa\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Index, \"d+j5aKfX6nyw/wDWk60U0l2gt6w=\", false, function () {\n  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VVc2VyIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiUHJvZmlsZSIsIm1lc3NhZ2UiLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwibWFqb3JTY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsaUJBQ0tDLDREQUFPLEVBRFo7QUFBQSxNQUN0QkMsSUFEc0IsWUFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLEtBRGdCLFlBQ2hCQSxLQURnQjtBQUFBLE1BQ1RDLFNBRFMsWUFDVEEsU0FEUzs7QUFFOUIsTUFBSUMsT0FBSjtBQUNBLE1BQUlELFNBQUosRUFBZUMsT0FBTyxnQkFBRyw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBZixLQUNLLElBQUlGLEtBQUosRUFBV0UsT0FBTyxnQkFBRztBQUFBLGNBQU1GLEtBQUssQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBWCxLQUNBLElBQUlKLElBQUosRUFBVUcsT0FBTyxnQkFBRyw4REFBQyw4Q0FBRDtBQUFBLDRCQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHFCLGVBRXJCO0FBQUEsNkJBQWFILElBQUksQ0FBQ0ssSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnFCLGVBR3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHFCLGVBSXJCLDhEQUFDLCtEQUFEO0FBQVksWUFBTSxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBVixLQU1BRixPQUFPLGdCQUFHLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVjtBQUVMLE1BQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsV0FBVyxHQUFHLElBQUlDLGVBQUosQ0FBb0JDLFFBQVEsQ0FBQ0MsTUFBN0IsQ0FBcEI7O0FBRUEsUUFBSUgsV0FBVyxDQUFDSSxHQUFaLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDM0JKLGlCQUFXLFVBQVgsQ0FBbUIsTUFBbkI7QUFDQUEsaUJBQVcsVUFBWCxDQUFtQixPQUFuQixFQUYyQixDQUczQjtBQUNBOztBQUNBSCxZQUFNLENBQUNRLE9BQVAsQ0FBZSxHQUFmLEVBQW9CQyxTQUFwQixFQUErQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUEvQjtBQUNEO0FBQ0YsR0FWTSxFQVVKLEVBVkksQ0FBVDtBQVdFLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsMkJBQ0EsOERBQUMsOENBQUQ7QUFBTSxhQUFPLEVBQUMsTUFBZDtBQUFxQixvQkFBYyxFQUFDLFFBQXBDO0FBQ0EsZ0JBQVUsRUFBQyxRQURYO0FBRUEsYUFBTyxFQUFFQyx3REFBVSxDQUFDLENBQUQsQ0FGbkI7QUFHQSxtQkFBYSxFQUFFQSx3REFBVSxDQUFDLEVBQUQsQ0FIekI7QUFJQSxnQkFBVSxFQUFFQSx3REFBVSxDQUFDLENBQUQsQ0FKdEI7QUFBQSw2QkFNRSw4REFBQyw4Q0FBRDtBQUNJLG9CQUFZLEVBQUUsRUFEbEI7QUFFSSxlQUFPLEVBQUMsTUFGWjtBQUdJLGtCQUFVLEVBQUMsUUFIZjtBQUlJLHFCQUFhLEVBQUMsUUFKbEI7QUFLSSxpQkFBUyxFQUFFLENBTGY7QUFNSSxrQkFBVSxFQUFDLE9BTmY7QUFPSSxlQUFPLEVBQUUsRUFQYjtBQVFJLGdCQUFRLEVBQUMsT0FSYjtBQVNJLGFBQUssRUFBQyxNQVRWO0FBVUksZ0JBQVEsRUFBQyxNQVZiO0FBV0ksa0JBQVUsRUFBRUEsd0RBQVUsQ0FBQyxDQUFELENBWDFCO0FBWUkscUJBQWEsRUFBRUEsd0RBQVUsQ0FBQyxFQUFELENBWjdCO0FBQUEsZ0NBY0ksOERBQUMsd0RBQUQ7QUFBZ0IsY0FBSSxFQUFFLEdBQXRCO0FBQTJCLGVBQUssRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUksOERBQUMsOENBQUQ7QUFDSSxtQkFBUyxFQUFDLE1BRGQ7QUFFSSxlQUFLLEVBQUMsT0FGVjtBQUdJLG1CQUFTLEVBQUMsUUFIZDtBQUFBLGtDQUtFLDhEQUFDLDhDQUFEO0FBQ0UscUJBQVMsRUFBQyxRQURaO0FBRUUsb0JBQVEsRUFBQyxNQUZYO0FBR0Usc0JBQVUsRUFBQyxNQUhiO0FBQUEsc0ZBS2dEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFZRSw4REFBQyw4Q0FBRDtBQUNFLHFCQUFTLEVBQUMsTUFEWjtBQUVFLHFCQUFTLEVBQUMsTUFGWjtBQUdFLG9CQUFRLEVBQUMsTUFIWDtBQUFBLCtaQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtESDs7R0EzRXVCbkIsSztVQUNhQyx3RCxFQVlwQlEsa0Q7OztLQWJPVCxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xuaW1wb3J0IHsgUGFuZSwgbWFqb3JTY2FsZSwgU3Bpbm5lciwgTGF5b3V0QXV0b0ljb24sIFRleHQgfSBmcm9tICdldmVyZ3JlZW4tdWknXG5pbXBvcnQgQXV0aEJ1dHRvbiBmcm9tICcuLi9zcmMvZXZlcnB1cnBsZS9BdXRoQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG4gIGxldCBQcm9maWxlO1xuICBpZiAoaXNMb2FkaW5nKSBQcm9maWxlID0gPFNwaW5uZXIgLz47XG4gIGVsc2UgaWYgKGVycm9yKSBQcm9maWxlID0gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIGVsc2UgaWYgKHVzZXIpIFByb2ZpbGUgPSA8UGFuZT5cbiAgICAgIDxoci8+XG4gICAgICA8aDI+V2VsY29tZSB7dXNlci5uYW1lfSE8L2gyPlxuICAgICAgPHA+VGhpcyBpcyBqdXN0IGEgZGVtbyBidXQgdGhhbmsgeW91IGZvciB0cnlpbmcgaXQgb3V0LjwvcD5cbiAgICAgIDxBdXRoQnV0dG9uIGxvZ291dD17dHJ1ZX0gLz5cbiAgICA8L1BhbmU+O1xuICBlbHNlIFByb2ZpbGUgPSA8QXV0aEJ1dHRvbiAvPlxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICBpZiAocXVlcnlQYXJhbXMuaGFzKCdjb2RlJykpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdjb2RlJylcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdzdGF0ZScpXG4gICAgICAgIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBvdGhlciBwYXJhbXMgdG8gcGVyc2lzdCB1c2luZyBcbiAgICAgICAgLy8gcXVlcnlQYXJhbS50b1N0cmluZygpIG9yIHJlbW92ZSB0aGUgcXVlcnlQYXJhbXMgbWV0aG9kXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZT5cbiAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgbWFyZ2luWD17bWFqb3JTY2FsZSgxKX1cbiAgICAgIHBhZGRpbmdCb3R0b209e21ham9yU2NhbGUoMTApfVxuICAgICAgcGFkZGluZ1RvcD17bWFqb3JTY2FsZSg4KX1cbiAgICAgID5cbiAgICAgICAgPFBhbmUgXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezIwfSBcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezF9IFxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIndoaXRlXCIgXG4gICAgICAgICAgICBtYXJnaW5YPXsyMH0gXG4gICAgICAgICAgICBtYXhXaWR0aD1cIjgwMHB4XCIgXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgcGFkZGluZ1g9XCIxMHB4XCJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A9e21ham9yU2NhbGUoNSl9XG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tPXttYWpvclNjYWxlKDEwKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGF5b3V0QXV0b0ljb24gc2l6ZT17MTAwfSBjb2xvcj1cIiNGNTgwMjVcIi8+XG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjQwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwcHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvYWdpZVwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIyNHB0XCJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiNDBweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIb2FnaWUgaXMgdGhlIFByaW5jZXRvbiBhcHBsaWNhdGlvbiBwbGF0Zm9ybS4gPGI+Q29taW5nIEZhbGwgMjAyMS48L2I+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFBhbmUgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNXB0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEhvYWdpZSBpcyBtb3JlIHRoYW4ganVzdCBhIGNvdXBsZSBvZiBkaWZmZXJlbnQgY2FtcHVzIGFwcGxpY2F0aW9uczsgaXQgaXMgYW4gaW50ZWdyYXRlZCBzeXN0ZW0uIEV2ZXJ5IGFwcGxpY2F0aW9uIGlzIGJ1aWx0IHdpdGggb3RoZXJzIGluIG1pbmQsIGZpbGxpbmcgZGlmZmVyZW50IGdhcHMgaW4geW91ciBjYW1wdXMgZXhwZXJpZW5jZS4gSG9hZ2llIEFwcHMgYWxsb3cgeW91IHRvIHVzZSB0aGUgc2FtZSBwcm9maWxlIGFjY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0sIG1lYW5pbmcgeW91IGRvIG5vdCBoYXZlIHRvIGRvIHRoaW5ncyBsaWtlIHNlYXJjaCBmb3IgdGhlIGNvdXJzZXMgeW91J3JlIGVucm9sbGVkIGluIGRpZmZlcmVudCBhcHBsaWNhYXRpb25zLlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGFzYVxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});