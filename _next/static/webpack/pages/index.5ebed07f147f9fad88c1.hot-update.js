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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/everpurple/AuthButton */ \"./src/everpurple/AuthButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/gagik/Documents/Projects/Hoagie/mainpage/mainpage/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser)(),\n      user = _useUser.user,\n      error = _useUser.error,\n      isLoading = _useUser.isLoading;\n\n  var Profile;\n  if (isLoading) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 28\n  }, this);else if (error) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 29\n  }, this);else if (user) Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Welcome \", user.name, \"!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"This is just a demo but thank you for trying it out.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {\n      logout: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 28\n  }, this);else Profile = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_everpurple_AuthButton__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 18\n  }, this);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var queryParams = new URLSearchParams(location.search);\n\n    if (queryParams.has('code')) {\n      queryParams[\"delete\"]('code');\n      queryParams[\"delete\"]('state'); // TODO: add support for other params to persist using \n      // queryParam.toString() or remove the queryParams method\n\n      router.replace(\"/\", undefined, {\n        shallow: true\n      });\n    }\n  }, []);\n\n  var Section = function Section(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n        fontSize: \"22pt\",\n        lineHeight: \"40px\",\n        marginTop: \"10px\",\n        children: [props.title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: props.bold\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n          textAlign: \"left\",\n          marginTop: \"30px\",\n          marginBottom: \"40px\",\n          fontSize: \"15pt\",\n          children: props.children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      marginX: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(1),\n      paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(10),\n      paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(8),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n        borderRadius: 20,\n        display: \"flex\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        elevation: 1,\n        background: \"white\",\n        marginX: 20,\n        maxWidth: \"800px\",\n        width: \"100%\",\n        paddingX: \"10px\",\n        paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(5),\n        paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.majorScale)(10),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.LayoutAutoIcon, {\n          size: 100,\n          color: \"#F58025\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Pane, {\n          marginTop: \"30px\",\n          width: \"600px\",\n          textAlign: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"Hoagie is the Princeton application platform.\",\n            bold: \"Coming Fall 2021.\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. Hoagie Apps allow you to use the same profile accross the entire system, meaning you can do things like save your favorite courses on one application and then see them pop up on a different one instantly.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"If you're interested in being part of creating this platform, be on the lookout for recruitement emails early fall!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              disabled: true,\n              children: \"Apply to Hoagie\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"How does this work?\",\n            children: \"The applications are all built from scratch, using shared UI elements, frameworks, and APIs. This allows all apps to get the latest updates all at the same time, save things like your course schedule accross applications, and just generally provide a better user experience.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Index, \"d+j5aKfX6nyw/wDWk60U0l2gt6w=\", false, function () {\n  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VVc2VyIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiUHJvZmlsZSIsIm1lc3NhZ2UiLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwiU2VjdGlvbiIsInByb3BzIiwidGl0bGUiLCJib2xkIiwiY2hpbGRyZW4iLCJtYWpvclNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxpQkFDS0MsNERBQU8sRUFEWjtBQUFBLE1BQ3RCQyxJQURzQixZQUN0QkEsSUFEc0I7QUFBQSxNQUNoQkMsS0FEZ0IsWUFDaEJBLEtBRGdCO0FBQUEsTUFDVEMsU0FEUyxZQUNUQSxTQURTOztBQUU5QixNQUFJQyxPQUFKO0FBQ0EsTUFBSUQsU0FBSixFQUFlQyxPQUFPLGdCQUFHLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVixDQUFmLEtBQ0ssSUFBSUYsS0FBSixFQUFXRSxPQUFPLGdCQUFHO0FBQUEsY0FBTUYsS0FBSyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVixDQUFYLEtBQ0EsSUFBSUosSUFBSixFQUFVRyxPQUFPLGdCQUFHLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEcUIsZUFFckI7QUFBQSw2QkFBYUgsSUFBSSxDQUFDSyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGcUIsZUFHckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFI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QUFwRTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFPSSw4REFBQyxnREFBRDtBQUFRLHNCQUFRLEVBQUUsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBY0UsOERBQUMsT0FBRDtBQUFTLGlCQUFLLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4Q0g7O0dBL0Z1QnhCLEs7VUFDYUMsd0QsRUFZcEJRLGtEOzs7S0FiT1QsSyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcbmltcG9ydCB7IFBhbmUsIEJ1dHRvbiwgbWFqb3JTY2FsZSwgU3Bpbm5lciwgTGF5b3V0QXV0b0ljb24sIFRleHQgfSBmcm9tICdldmVyZ3JlZW4tdWknXG5pbXBvcnQgQXV0aEJ1dHRvbiBmcm9tICcuLi9zcmMvZXZlcnB1cnBsZS9BdXRoQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG4gIGxldCBQcm9maWxlO1xuICBpZiAoaXNMb2FkaW5nKSBQcm9maWxlID0gPFNwaW5uZXIgLz47XG4gIGVsc2UgaWYgKGVycm9yKSBQcm9maWxlID0gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIGVsc2UgaWYgKHVzZXIpIFByb2ZpbGUgPSA8UGFuZT5cbiAgICAgIDxoci8+XG4gICAgICA8aDI+V2VsY29tZSB7dXNlci5uYW1lfSE8L2gyPlxuICAgICAgPHA+VGhpcyBpcyBqdXN0IGEgZGVtbyBidXQgdGhhbmsgeW91IGZvciB0cnlpbmcgaXQgb3V0LjwvcD5cbiAgICAgIDxBdXRoQnV0dG9uIGxvZ291dD17dHJ1ZX0gLz5cbiAgICA8L1BhbmU+O1xuICBlbHNlIFByb2ZpbGUgPSA8QXV0aEJ1dHRvbiAvPlxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICBpZiAocXVlcnlQYXJhbXMuaGFzKCdjb2RlJykpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdjb2RlJylcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdzdGF0ZScpXG4gICAgICAgIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBvdGhlciBwYXJhbXMgdG8gcGVyc2lzdCB1c2luZyBcbiAgICAgICAgLy8gcXVlcnlQYXJhbS50b1N0cmluZygpIG9yIHJlbW92ZSB0aGUgcXVlcnlQYXJhbXMgbWV0aG9kXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgU2VjdGlvbiA9IChwcm9wcykgPT4gKFxuICAgICAgPFBhbmU+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgZm9udFNpemU9XCIyMnB0XCJcbiAgICAgICAgICBsaW5lSGVpZ2h0PVwiNDBweFwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiMTBweFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9IDxiPntwcm9wcy5ib2xkfTwvYj5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgIDxQYW5lIFxuICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICBtYXJnaW5Ub3A9XCIzMHB4XCJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjQwcHhcIlxuICAgICAgICAgICAgZm9udFNpemU9XCIxNXB0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lPlxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBtYXJnaW5YPXttYWpvclNjYWxlKDEpfVxuICAgICAgcGFkZGluZ0JvdHRvbT17bWFqb3JTY2FsZSgxMCl9XG4gICAgICBwYWRkaW5nVG9wPXttYWpvclNjYWxlKDgpfVxuICAgICAgPlxuICAgICAgICA8UGFuZSBcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MjB9IFxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17MX0gXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIiBcbiAgICAgICAgICAgIG1hcmdpblg9ezIwfSBcbiAgICAgICAgICAgIG1heFdpZHRoPVwiODAwcHhcIiBcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBwYWRkaW5nWD1cIjEwcHhcIlxuICAgICAgICAgICAgcGFkZGluZ1RvcD17bWFqb3JTY2FsZSg1KX1cbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b209e21ham9yU2NhbGUoMTApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMYXlvdXRBdXRvSWNvbiBzaXplPXsxMDB9IGNvbG9yPVwiI0Y1ODAyNVwiLz5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MDBweFwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJIb2FnaWUgaXMgdGhlIFByaW5jZXRvbiBhcHBsaWNhdGlvbiBwbGF0Zm9ybS5cIiBib2xkPVwiQ29taW5nIEZhbGwgMjAyMS5cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIb2FnaWUgaXMgbW9yZSB0aGFuIGp1c3QgYSBjb3VwbGUgb2YgZGlmZmVyZW50IGNhbXB1cyBhcHBsaWNhdGlvbnM7IGl0IGlzIGFuIGludGVncmF0ZWQgc3lzdGVtLiBFdmVyeSBhcHBsaWNhdGlvbiBpcyBidWlsdCB3aXRoIG90aGVycyBpbiBtaW5kLCBmaWxsaW5nIGRpZmZlcmVudCBnYXBzIGluIHlvdXIgY2FtcHVzIGV4cGVyaWVuY2UuIEhvYWdpZSBBcHBzIGFsbG93IHlvdSB0byB1c2UgdGhlIHNhbWUgcHJvZmlsZSBhY2Nyb3NzIHRoZSBlbnRpcmUgc3lzdGVtLCBtZWFuaW5nIHlvdSBjYW4gZG8gdGhpbmdzIGxpa2Ugc2F2ZSB5b3VyIGZhdm9yaXRlIGNvdXJzZXMgb24gb25lIGFwcGxpY2F0aW9uIGFuZCB0aGVuIHNlZSB0aGVtIHBvcCB1cCBvbiBhIGRpZmZlcmVudCBvbmUgaW5zdGFudGx5LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIElmIHlvdSdyZSBpbnRlcmVzdGVkIGluIGJlaW5nIHBhcnQgb2YgY3JlYXRpbmcgdGhpcyBwbGF0Zm9ybSwgYmUgb24gdGhlIGxvb2tvdXQgZm9yIHJlY3J1aXRlbWVudCBlbWFpbHMgZWFybHkgZmFsbCFcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9PkFwcGx5IHRvIEhvYWdpZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiSG93IGRvZXMgdGhpcyB3b3JrP1wiPlxuICAgICAgICAgICAgICAgIFRoZSBhcHBsaWNhdGlvbnMgYXJlIGFsbCBidWlsdCBmcm9tIHNjcmF0Y2gsIHVzaW5nIHNoYXJlZCBVSSBlbGVtZW50cywgZnJhbWV3b3JrcywgYW5kIEFQSXMuIFRoaXMgYWxsb3dzIGFsbCBhcHBzIHRvIGdldCB0aGUgbGF0ZXN0IHVwZGF0ZXMgYWxsIGF0IHRoZSBzYW1lIHRpbWUsIHNhdmUgdGhpbmdzIGxpa2UgeW91ciBjb3Vyc2Ugc2NoZWR1bGUgYWNjcm9zcyBhcHBsaWNhdGlvbnMsIGFuZCBqdXN0IGdlbmVyYWxseSBwcm92aWRlIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS4gXG4gICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});