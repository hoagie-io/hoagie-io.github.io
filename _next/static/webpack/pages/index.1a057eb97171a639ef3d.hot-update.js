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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/everpurple/AuthButton */ \"./src/everpurple/AuthButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/gagik/Documents/Projects/Hoagie/mainpage/mainpage/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser)(),\n      user = _useUser.user,\n      error = _useUser.error,\n      isLoading = _useUser.isLoading;\n\n  var Profile;\n  if (isLoading) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 28\n  }, this);else if (error) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 29\n  }, this);else if (user) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Welcome \", user.name, \"!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"This is just a demo but thank you for trying it out.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {\n      logout: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 28\n  }, this);else Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 18\n  }, this);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var queryParams = new URLSearchParams(location.search);\n\n    if (queryParams.has('code')) {\n      queryParams[\"delete\"]('code');\n      queryParams[\"delete\"]('state'); // TODO: add support for other params to persist using \n      // queryParam.toString() or remove the queryParams method\n\n      router.replace(\"/\", undefined, {\n        shallow: true\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      marginX: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(1),\n      paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(10),\n      paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(8),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n        borderRadius: 20,\n        display: \"flex\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        elevation: 1,\n        background: \"white\",\n        marginX: 20,\n        maxWidth: \"800px\",\n        width: \"100%\",\n        paddingX: \"10px\",\n        paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(5),\n        paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(7),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.LayoutAutoIcon, {\n          size: 100,\n          color: \"#F58025\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n          marginTop: \"10px\",\n          width: \"300px\",\n          textAlign: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Text, {\n            className: \"hoagie\",\n            fontSize: \"24pt\",\n            children: \"Hoagie is the campus application platform.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Index, \"d+j5aKfX6nyw/wDWk60U0l2gt6w=\", false, function () {\n  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VVc2VyIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiUHJvZmlsZSIsIm1lc3NhZ2UiLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwibWFqb3JTY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsaUJBQ0tDLDREQUFPLEVBRFo7QUFBQSxNQUN0QkMsSUFEc0IsWUFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLEtBRGdCLFlBQ2hCQSxLQURnQjtBQUFBLE1BQ1RDLFNBRFMsWUFDVEEsU0FEUzs7QUFFOUIsTUFBSUMsT0FBSjtBQUNBLE1BQUlELFNBQUosRUFBZUMsT0FBTyxnQkFBRyw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBZixLQUNLLElBQUlGLEtBQUosRUFBV0UsT0FBTyxnQkFBRztBQUFBLGNBQU1GLEtBQUssQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBWCxLQUNBLElBQUlKLElBQUosRUFBVUcsT0FBTyxnQkFBRyw4REFBQyw4Q0FBRDtBQUFBLDRCQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHFCLGVBRXJCO0FBQUEsNkJBQWFILElBQUksQ0FBQ0ssSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnFCLGVBR3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHFCLGVBSXJCLDhEQUFDLCtEQUFEO0FBQVksWUFBTSxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVYsQ0FBVixLQU1BRixPQUFPLGdCQUFHLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVjtBQUVMLE1BQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsV0FBVyxHQUFHLElBQUlDLGVBQUosQ0FBb0JDLFFBQVEsQ0FBQ0MsTUFBN0IsQ0FBcEI7O0FBRUEsUUFBSUgsV0FBVyxDQUFDSSxHQUFaLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDM0JKLGlCQUFXLFVBQVgsQ0FBbUIsTUFBbkI7QUFDQUEsaUJBQVcsVUFBWCxDQUFtQixPQUFuQixFQUYyQixDQUczQjtBQUNBOztBQUNBSCxZQUFNLENBQUNRLE9BQVAsQ0FBZSxHQUFmLEVBQW9CQyxTQUFwQixFQUErQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUEvQjtBQUNEO0FBQ0YsR0FWTSxFQVVKLEVBVkksQ0FBVDtBQVdFLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsMkJBQ0EsOERBQUMsOENBQUQ7QUFBTSxhQUFPLEVBQUMsTUFBZDtBQUFxQixvQkFBYyxFQUFDLFFBQXBDO0FBQ0EsZ0JBQVUsRUFBQyxRQURYO0FBRUEsYUFBTyxFQUFFQyx3REFBVSxDQUFDLENBQUQsQ0FGbkI7QUFHQSxtQkFBYSxFQUFFQSx3REFBVSxDQUFDLEVBQUQsQ0FIekI7QUFJQSxnQkFBVSxFQUFFQSx3REFBVSxDQUFDLENBQUQsQ0FKdEI7QUFBQSw2QkFNRSw4REFBQyw4Q0FBRDtBQUNJLG9CQUFZLEVBQUUsRUFEbEI7QUFFSSxlQUFPLEVBQUMsTUFGWjtBQUdJLGtCQUFVLEVBQUMsUUFIZjtBQUlJLHFCQUFhLEVBQUMsUUFKbEI7QUFLSSxpQkFBUyxFQUFFLENBTGY7QUFNSSxrQkFBVSxFQUFDLE9BTmY7QUFPSSxlQUFPLEVBQUUsRUFQYjtBQVFJLGdCQUFRLEVBQUMsT0FSYjtBQVNJLGFBQUssRUFBQyxNQVRWO0FBVUksZ0JBQVEsRUFBQyxNQVZiO0FBV0ksa0JBQVUsRUFBRUEsd0RBQVUsQ0FBQyxDQUFELENBWDFCO0FBWUkscUJBQWEsRUFBRUEsd0RBQVUsQ0FBQyxDQUFELENBWjdCO0FBQUEsZ0NBY0ksOERBQUMsd0RBQUQ7QUFBZ0IsY0FBSSxFQUFFLEdBQXRCO0FBQTJCLGVBQUssRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUksOERBQUMsOENBQUQ7QUFDSSxtQkFBUyxFQUFDLE1BRGQ7QUFFSSxlQUFLLEVBQUMsT0FGVjtBQUdJLG1CQUFTLEVBQUMsUUFIZDtBQUFBLGlDQUtFLDhEQUFDLDhDQUFEO0FBQ0UscUJBQVMsRUFBQyxRQURaO0FBRUUsb0JBQVEsRUFBQyxNQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNIOztHQWhFdUJuQixLO1VBQ2FDLHdELEVBWXBCUSxrRDs7O0tBYk9ULEsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5pbXBvcnQgeyBQYW5lLCBtYWpvclNjYWxlLCBTcGlubmVyLCBMYXlvdXRBdXRvSWNvbiwgVGV4dCB9IGZyb20gJ2V2ZXJncmVlbi11aSdcbmltcG9ydCBBdXRoQnV0dG9uIGZyb20gJy4uL3NyYy9ldmVycHVycGxlL0F1dGhCdXR0b24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHVzZXIsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcbiAgbGV0IFByb2ZpbGU7XG4gIGlmIChpc0xvYWRpbmcpIFByb2ZpbGUgPSA8U3Bpbm5lciAvPjtcbiAgZWxzZSBpZiAoZXJyb3IpIFByb2ZpbGUgPSA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgZWxzZSBpZiAodXNlcikgUHJvZmlsZSA9IDxQYW5lPlxuICAgICAgPGhyLz5cbiAgICAgIDxoMj5XZWxjb21lIHt1c2VyLm5hbWV9ITwvaDI+XG4gICAgICA8cD5UaGlzIGlzIGp1c3QgYSBkZW1vIGJ1dCB0aGFuayB5b3UgZm9yIHRyeWluZyBpdCBvdXQuPC9wPlxuICAgICAgPEF1dGhCdXR0b24gbG9nb3V0PXt0cnVlfSAvPlxuICAgIDwvUGFuZT47XG4gIGVsc2UgUHJvZmlsZSA9IDxBdXRoQnV0dG9uIC8+XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXMoJ2NvZGUnKSkge1xuICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ2NvZGUnKVxuICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3N0YXRlJylcbiAgICAgICAgLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIG90aGVyIHBhcmFtcyB0byBwZXJzaXN0IHVzaW5nIFxuICAgICAgICAvLyBxdWVyeVBhcmFtLnRvU3RyaW5nKCkgb3IgcmVtb3ZlIHRoZSBxdWVyeVBhcmFtcyBtZXRob2RcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lPlxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBtYXJnaW5YPXttYWpvclNjYWxlKDEpfVxuICAgICAgcGFkZGluZ0JvdHRvbT17bWFqb3JTY2FsZSgxMCl9XG4gICAgICBwYWRkaW5nVG9wPXttYWpvclNjYWxlKDgpfVxuICAgICAgPlxuICAgICAgICA8UGFuZSBcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MjB9IFxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17MX0gXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIiBcbiAgICAgICAgICAgIG1hcmdpblg9ezIwfSBcbiAgICAgICAgICAgIG1heFdpZHRoPVwiODAwcHhcIiBcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBwYWRkaW5nWD1cIjEwcHhcIlxuICAgICAgICAgICAgcGFkZGluZ1RvcD17bWFqb3JTY2FsZSg1KX1cbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b209e21ham9yU2NhbGUoNyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExheW91dEF1dG9JY29uIHNpemU9ezEwMH0gY29sb3I9XCIjRjU4MDI1XCIvPlxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob2FnaWVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjRwdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIb2FnaWUgaXMgdGhlIGNhbXB1cyBhcHBsaWNhdGlvbiBwbGF0Zm9ybS5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});