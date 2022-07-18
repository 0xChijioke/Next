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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-css-theme-switcher */ \"react-css-theme-switcher\");\n/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ \"../../node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst subgraphUri = \"http://localhost:8000/subgraphs/name/scaffold-eth/your-contract\";\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    uri: subgraphUri,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\nfunction App({ Component , PageProps  }) {\n    const { 0: prevTheme , 1: setPrevTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const themes = {\n        dark: `${process.env.PUBLIC_URL}/dark-theme.css`,\n        light: `${process.env.PUBLIC_URL}/light-theme.css`\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setPrevTheme(window.localStorage.getItem(\"theme\"));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"%PUBLIC_URL%/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    \" */}\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=0.6, maximum-scale=1.0, user-scalable=0\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#000000\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Web site created using \\uD83C\\uDFD7 scaffold-eth\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        href: \"%PUBLIC_URL%/logo192.png\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"manifest\",\n                        href: \"%PUBLIC_URL%/manifest.json\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ethereum App\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_4__.ThemeSwitcherProvider, {\n                    themeMap: themes,\n                    defaultTheme: prevTheme || \"light\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...PageProps,\n                        subgraphUri: subgraphUri\n                    }, void 0, false, {\n                        fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/SVG-NFT/packages/next-app/src/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQytDO0FBQzFCO0FBQ2M7QUFDaEM7QUFDTDtBQUNBO0FBRTVCLE1BQU1TLFdBQVcsR0FBRyxpRUFBaUU7QUFFckYsTUFBTUMsTUFBTSxHQUFHLElBQUlWLHdEQUFZLENBQUM7SUFDOUJXLEdBQUcsRUFBRUYsV0FBVztJQUNoQkcsS0FBSyxFQUFFLElBQUlWLHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLFNBQVNXLEdBQUcsQ0FBQyxFQUFDQyxTQUFTLEdBQUVDLFNBQVMsR0FBQyxFQUNuQztJQUNFLE1BQU0sS0FBQ0MsU0FBUyxNQUFFQyxZQUFZLE1BQUlaLCtDQUFRLEVBQUU7SUFDNUMsTUFBTWEsTUFBTSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2hEQyxLQUFLLEVBQUUsQ0FBQyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0tBQ25EO0lBRURsQixnREFBUyxDQUFDLElBQU07UUFDaEJhLFlBQVksQ0FBQ08sTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2xELEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFTixxQkFDRTs7MEJBQ0UsOERBQUNsQixrREFBSTs7a0NBQ0QsOERBQUNtQixNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLDBCQUEwQjs7Ozs7NEJBQUc7b0JBQUEsTUFDbkQ7a0NBQUEsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsMkVBQTJFOzs7Ozs0QkFBRztrQ0FDNUcsOERBQUNGLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7NEJBQUc7a0NBQzdDLDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLGtEQUF1Qzs7Ozs7NEJBQUc7a0NBQzNFLDhEQUFDTCxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsa0JBQWtCO3dCQUFDQyxJQUFJLEVBQUMsMEJBQTBCOzs7Ozs0QkFBRztrQ0FFL0QsOERBQUNGLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxVQUFVO3dCQUFDQyxJQUFJLEVBQUMsNEJBQTRCOzs7Ozs0QkFBRztrQ0FDekQsOERBQUNJLE9BQUs7a0NBQUMsY0FBWTs7Ozs7NEJBQVE7Ozs7OztvQkFDdEI7MEJBQ1AsOERBQUNoQywwREFBYztnQkFBQ1MsTUFBTSxFQUFFQSxNQUFNOzBCQUMxQiw0RUFBQ0osMkVBQXFCO29CQUFDNEIsUUFBUSxFQUFFaEIsTUFBTTtvQkFBRWlCLFlBQVksRUFBRW5CLFNBQVMsSUFBSSxPQUFPOzhCQUN2RSw0RUFBQ0YsU0FBUzt3QkFBRSxHQUFHQyxTQUFTO3dCQUFFTixXQUFXLEVBQUVBLFdBQVc7Ozs7OzRCQUFJOzs7Ozt3QkFDbEM7Ozs7O29CQUNYOztvQkFDaEIsQ0FDSjtDQUNKO0FBRUQsaUVBQWVJLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzY2FmZm9sZC1ldGgvcmVhY3QtYXBwLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lU3dpdGNoZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jc3MtdGhlbWUtc3dpdGNoZXJcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmNvbnN0IHN1YmdyYXBoVXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvc3ViZ3JhcGhzL25hbWUvc2NhZmZvbGQtZXRoL3lvdXItY29udHJhY3RcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogc3ViZ3JhcGhVcmksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBQYWdlUHJvcHN9KVxue1xuICBjb25zdCBbcHJldlRoZW1lLCBzZXRQcmV2VGhlbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgdGhlbWVzID0ge1xuICAgIGRhcms6IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhcmstdGhlbWUuY3NzYCxcbiAgICBsaWdodDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vbGlnaHQtdGhlbWUuY3NzYCxcbiAgfTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gIHNldFByZXZUaGVtZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSk7XG4gIH0sW10pO1xuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTAuNiwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWIgc2l0ZSBjcmVhdGVkIHVzaW5nIPCfj5cgc2NhZmZvbGQtZXRoXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9sb2dvMTkyLnBuZ1wiIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiJVBVQkxJQ19VUkwlL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICAgIDx0aXRsZT5FdGhlcmV1bSBBcHA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICA8VGhlbWVTd2l0Y2hlclByb3ZpZGVyIHRoZW1lTWFwPXt0aGVtZXN9IGRlZmF1bHRUaGVtZT17cHJldlRoZW1lIHx8IFwibGlnaHRcIn0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4uUGFnZVByb3BzfSBzdWJncmFwaFVyaT17c3ViZ3JhcGhVcml9IC8+XG4gICAgICAgICAgICA8L1RoZW1lU3dpdGNoZXJQcm92aWRlcj5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiSW5NZW1vcnlDYWNoZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaGVtZVN3aXRjaGVyUHJvdmlkZXIiLCJSZWFjdERPTSIsIkhlYWQiLCJzdWJncmFwaFVyaSIsImNsaWVudCIsInVyaSIsImNhY2hlIiwiQXBwIiwiQ29tcG9uZW50IiwiUGFnZVByb3BzIiwicHJldlRoZW1lIiwic2V0UHJldlRoZW1lIiwidGhlbWVzIiwiZGFyayIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwibGlnaHQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGluayIsInJlbCIsImhyZWYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInRoZW1lTWFwIiwiZGVmYXVsdFRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "../../node_modules/antd/dist/antd.css":
/*!*********************************************!*\
  !*** ../../node_modules/antd/dist/antd.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-css-theme-switcher":
/*!*******************************************!*\
  !*** external "react-css-theme-switcher" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-css-theme-switcher");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();