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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/gagik/Documents/Projects/Hoagie/mainpage/mainpage/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser)(),\n      user = _useUser.user,\n      error = _useUser.error,\n      isLoading = _useUser.isLoading;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var queryParams = new URLSearchParams(location.search);\n\n    if (queryParams.has('code')) {\n      queryParams[\"delete\"]('code');\n      queryParams[\"delete\"]('state'); // TODO: add support for other params to persist using \n      // queryParam.toString() or remove the queryParams method\n\n      router.replace(\"/\", undefined, {\n        shallow: true\n      });\n    }\n  }, []);\n\n  var Section = function Section(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n        fontSize: \"22pt\",\n        lineHeight: \"40px\",\n        marginTop: \"10px\",\n        children: [props.title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: props.bold\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n          textAlign: \"left\",\n          marginTop: \"30px\",\n          marginBottom: \"40px\",\n          fontSize: \"15pt\",\n          children: props.children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      marginX: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.majorScale)(1),\n      paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.majorScale)(10),\n      paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.majorScale)(8),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n        borderRadius: 20,\n        display: \"flex\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        elevation: 1,\n        background: \"white\",\n        marginX: 20,\n        maxWidth: \"800px\",\n        width: \"100%\",\n        paddingX: \"10px\",\n        paddingTop: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.majorScale)(5),\n        paddingBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.majorScale)(10),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.LayoutAutoIcon, {\n          size: 100,\n          color: \"#F58025\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Pane, {\n          marginTop: \"30px\",\n          width: \"600px\",\n          textAlign: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"Hoagie is the Princeton application platform.\",\n            bold: \"Coming Fall 2021.\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. Hoagie Apps allow you to use the same profile accross the entire system, meaning you can do things like save your favorite courses on one application and then see them pop up on a different one instantly.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: [\"If you're interested in being part of creating this platform\\u2014the Hoagie \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: \"Club\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 93\n              }, this), \"\\u2014be on the lookout for recruitement emails early fall!\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              disabled: true,\n              children: \"Apply to Hoagie\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"How does this work?\",\n            children: \"The applications are all built from scratch, using shared UI elements, frameworks, and APIs. This allows all apps to get the latest updates all at the same time, save things like your course schedule accross applications, and just generally provide a better user experience.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"Why \",\n            bold: \"Hoagie?\",\n            children: \"In a world of Tiger[name], there was a need for something fresh. Hoagies represent many things\\u2014they represent how some in New Jersey call sandwiches. They also represent a certain iconic sandwich shop that has satisfied many Princetonian's late night cravings. In short, there's many things connecting Tigers to Hoagies, and Hoagie is embracing it to the fullest as we attempt to add a new word to Princeton's club names.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            title: \"I wanna learn more!\",\n            children: [\"More information will become available quite soon but if you'd like to connect now, feel free to email \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"hoagie@princeton\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 120\n            }, this), \".\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Index, \"d+j5aKfX6nyw/wDWk60U0l2gt6w=\", false, function () {\n  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VVc2VyIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwiU2VjdGlvbiIsInByb3BzIiwidGl0bGUiLCJib2xkIiwiY2hpbGRyZW4iLCJtYWpvclNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxpQkFDS0MsNERBQU8sRUFEWjtBQUFBLE1BQ3RCQyxJQURzQixZQUN0QkEsSUFEc0I7QUFBQSxNQUNoQkMsS0FEZ0IsWUFDaEJBLEtBRGdCO0FBQUEsTUFDVEMsU0FEUyxZQUNUQSxTQURTOztBQUc5QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyxlQUFKLENBQW9CQyxRQUFRLENBQUNDLE1BQTdCLENBQXBCOztBQUVBLFFBQUlILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQixNQUFoQixDQUFKLEVBQTZCO0FBQzNCSixpQkFBVyxVQUFYLENBQW1CLE1BQW5CO0FBQ0FBLGlCQUFXLFVBQVgsQ0FBbUIsT0FBbkIsRUFGMkIsQ0FHM0I7QUFDQTs7QUFDQUgsWUFBTSxDQUFDUSxPQUFQLENBQWUsR0FBZixFQUFvQkMsU0FBcEIsRUFBK0I7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBL0I7QUFDRDtBQUNGLEdBVk0sRUFVSixFQVZJLENBQVQ7O0FBWUUsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFB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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbURIOztHQTFGdUJyQixLO1VBQ2FDLHdELEVBRXBCSyxrRDs7O0tBSE9OLEsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5pbXBvcnQgeyBQYW5lLCBCdXR0b24sIG1ham9yU2NhbGUsIFNwaW5uZXIsIExheW91dEF1dG9JY29uLCBUZXh0IH0gZnJvbSAnZXZlcmdyZWVuLXVpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXMoJ2NvZGUnKSkge1xuICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ2NvZGUnKVxuICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3N0YXRlJylcbiAgICAgICAgLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIG90aGVyIHBhcmFtcyB0byBwZXJzaXN0IHVzaW5nIFxuICAgICAgICAvLyBxdWVyeVBhcmFtLnRvU3RyaW5nKCkgb3IgcmVtb3ZlIHRoZSBxdWVyeVBhcmFtcyBtZXRob2RcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXG4gICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBTZWN0aW9uID0gKHByb3BzKSA9PiAoXG4gICAgICA8UGFuZT5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICBmb250U2l6ZT1cIjIycHRcIlxuICAgICAgICAgIGxpbmVIZWlnaHQ9XCI0MHB4XCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIxMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy50aXRsZX0gPGI+e3Byb3BzLmJvbGR9PC9iPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgPFBhbmUgXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIG1hcmdpblRvcD1cIjMwcHhcIlxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiNDBweFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE1cHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmU+XG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIG1hcmdpblg9e21ham9yU2NhbGUoMSl9XG4gICAgICBwYWRkaW5nQm90dG9tPXttYWpvclNjYWxlKDEwKX1cbiAgICAgIHBhZGRpbmdUb3A9e21ham9yU2NhbGUoOCl9XG4gICAgICA+XG4gICAgICAgIDxQYW5lIFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsyMH0gXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgZWxldmF0aW9uPXsxfSBcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgbWFyZ2luWD17MjB9IFxuICAgICAgICAgICAgbWF4V2lkdGg9XCI4MDBweFwiIFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIHBhZGRpbmdYPVwiMTBweFwiXG4gICAgICAgICAgICBwYWRkaW5nVG9wPXttYWpvclNjYWxlKDUpfVxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbT17bWFqb3JTY2FsZSgxMCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExheW91dEF1dG9JY29uIHNpemU9ezEwMH0gY29sb3I9XCIjRjU4MDI1XCIvPlxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMHB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkhvYWdpZSBpcyB0aGUgUHJpbmNldG9uIGFwcGxpY2F0aW9uIHBsYXRmb3JtLlwiIGJvbGQ9XCJDb21pbmcgRmFsbCAyMDIxLlwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEhvYWdpZSBpcyBtb3JlIHRoYW4ganVzdCBhIGNvdXBsZSBvZiBkaWZmZXJlbnQgY2FtcHVzIGFwcGxpY2F0aW9uczsgaXQgaXMgYW4gaW50ZWdyYXRlZCBzeXN0ZW0uIEV2ZXJ5IGFwcGxpY2F0aW9uIGlzIGJ1aWx0IHdpdGggb3RoZXJzIGluIG1pbmQsIGZpbGxpbmcgZGlmZmVyZW50IGdhcHMgaW4geW91ciBjYW1wdXMgZXhwZXJpZW5jZS4gSG9hZ2llIEFwcHMgYWxsb3cgeW91IHRvIHVzZSB0aGUgc2FtZSBwcm9maWxlIGFjY3Jvc3MgdGhlIGVudGlyZSBzeXN0ZW0sIG1lYW5pbmcgeW91IGNhbiBkbyB0aGluZ3MgbGlrZSBzYXZlIHlvdXIgZmF2b3JpdGUgY291cnNlcyBvbiBvbmUgYXBwbGljYXRpb24gYW5kIHRoZW4gc2VlIHRoZW0gcG9wIHVwIG9uIGEgZGlmZmVyZW50IG9uZSBpbnN0YW50bHkuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSWYgeW91J3JlIGludGVyZXN0ZWQgaW4gYmVpbmcgcGFydCBvZiBjcmVhdGluZyB0aGlzIHBsYXRmb3Jt4oCUdGhlIEhvYWdpZSA8Yj5DbHViPC9iPuKAlGJlIG9uIHRoZSBsb29rb3V0IGZvciByZWNydWl0ZW1lbnQgZW1haWxzIGVhcmx5IGZhbGwhXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFwcGx5IHRvIEhvYWdpZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiSG93IGRvZXMgdGhpcyB3b3JrP1wiPlxuICAgICAgICAgICAgICAgIFRoZSBhcHBsaWNhdGlvbnMgYXJlIGFsbCBidWlsdCBmcm9tIHNjcmF0Y2gsIHVzaW5nIHNoYXJlZCBVSSBlbGVtZW50cywgZnJhbWV3b3JrcywgYW5kIEFQSXMuIFRoaXMgYWxsb3dzIGFsbCBhcHBzIHRvIGdldCB0aGUgbGF0ZXN0IHVwZGF0ZXMgYWxsIGF0IHRoZSBzYW1lIHRpbWUsIHNhdmUgdGhpbmdzIGxpa2UgeW91ciBjb3Vyc2Ugc2NoZWR1bGUgYWNjcm9zcyBhcHBsaWNhdGlvbnMsIGFuZCBqdXN0IGdlbmVyYWxseSBwcm92aWRlIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS4gXG4gICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJXaHkgXCIgYm9sZD1cIkhvYWdpZT9cIj5cbiAgICAgICAgICAgICAgICBJbiBhIHdvcmxkIG9mIFRpZ2VyW25hbWVdLCB0aGVyZSB3YXMgYSBuZWVkIGZvciBzb21ldGhpbmcgZnJlc2guIEhvYWdpZXMgcmVwcmVzZW50IG1hbnkgdGhpbmdz4oCUdGhleSByZXByZXNlbnQgaG93IHNvbWUgaW4gTmV3IEplcnNleSBjYWxsIHNhbmR3aWNoZXMuIFRoZXkgYWxzbyByZXByZXNlbnQgYSBjZXJ0YWluIGljb25pYyBzYW5kd2ljaCBzaG9wIHRoYXQgaGFzIHNhdGlzZmllZCBtYW55IFByaW5jZXRvbmlhbidzIGxhdGUgbmlnaHQgY3JhdmluZ3MuIEluIHNob3J0LCB0aGVyZSdzIG1hbnkgdGhpbmdzIGNvbm5lY3RpbmcgVGlnZXJzIHRvIEhvYWdpZXMsIGFuZCBIb2FnaWUgaXMgZW1icmFjaW5nIGl0IHRvIHRoZSBmdWxsZXN0IGFzIHdlIGF0dGVtcHQgdG8gYWRkIGEgbmV3IHdvcmQgdG8gUHJpbmNldG9uJ3MgY2x1YiBuYW1lcy5cbiAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkkgd2FubmEgbGVhcm4gbW9yZSFcIj5cbiAgICAgICAgICAgICAgICBNb3JlIGluZm9ybWF0aW9uIHdpbGwgYmVjb21lIGF2YWlsYWJsZSBxdWl0ZSBzb29uIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGNvbm5lY3Qgbm93LCBmZWVsIGZyZWUgdG8gZW1haWwgPGI+aG9hZ2llQHByaW5jZXRvbjwvYj4uXG4gICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});