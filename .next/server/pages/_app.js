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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Configure the chains and provider for localhost\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.localhost\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\n// Set up the default connectors for the local chain\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\n// Create the Wagmi client with the configured chains and provider\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// Customize the RainbowKit theme\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\TokenSwap\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\TokenSwap\\\\pages\\\\_app.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\TokenSwap\\\\pages\\\\_app.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp); // import \"../styles/globals.css\";\n // import merge from \"lodash/merge\";\n // import \"@rainbow-me/rainbowkit/styles.css\";\n // import {\n // getDefaultWallets,\n // RainbowKitProvider,\n // darkTheme,\n // midnightTheme,\n // } from \"@rainbow-me/rainbowkit\";\n // import { chain, configureChains, createClient, WagmiConfig } from \"wagmi\";\n // import { infuraProvider } from \"wagmi/providers/infura\";\n // const {chains, provider } = configureChains(\n // [chain.polygonMumbai],\n // [\n // infuraProvider({\n // apiKey: \"3cb69152f0424d939a70182b8393834f\",\n // priority: 1,\n // }),\n // · ]\n // );\n // const { connectors } = getDefaultWallets({\n // \tappName: \"Custom Dex\",\n // \tchains,\n // });\n // const wagmiClient = createClient({\n // \tautoConnect: true,\n // \tconnectors,\n // \tprovider,\n // });\n // const myTheme = merge(midnightTheme(), {\n // colors: {\n // accentColor: \"#18181b\",\n // accentColorForeground: \"#fff\",\n // },\n // });\n // function MyApp({ Component, pageProps }) {\n // return (\n // <WagmiConfig client={wagmiClient}>\n // <RainbowKitProvider chains={chains} theme={my Theme}>\n // <Component {...pageProps} />\n // </RainbowKitProvider>\n // </WagmiConfig>\n // );\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7QUFDVTtBQUtYO0FBQzBDO0FBQ2xCO0FBRXhELGtEQUFrRDtBQUNsRCxNQUFNLEVBQUVTLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdMLHNEQUFlLENBQzFDO0lBQUNELGtEQUFlO0NBQUMsRUFDakI7SUFBQ0ksc0VBQWMsRUFBRTtDQUFDLENBQ25CO0FBRUQsb0RBQW9EO0FBQ3BELE1BQU0sRUFBRUksVUFBVSxHQUFFLEdBQUdYLHlFQUFpQixDQUFDO0lBQ3ZDWSxPQUFPLEVBQUUsWUFBWTtJQUNyQkosTUFBTTtDQUNQLENBQUM7QUFFRixrRUFBa0U7QUFDbEUsTUFBTUssV0FBVyxHQUFHUixtREFBWSxDQUFDO0lBQy9CUyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWRixRQUFRO0NBQ1QsQ0FBQztBQUVGLGlDQUFpQztBQUNqQyxNQUFNTSxPQUFPLEdBQUdoQixtREFBSyxDQUFDRyxxRUFBYSxFQUFFLEVBQUU7SUFDckNjLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMscUJBQXFCLEVBQUUsTUFBTTtLQUM5QjtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ2YsOENBQVc7UUFBQ2dCLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUNaLHNFQUFrQjtZQUFDTyxNQUFNLEVBQUVBLE1BQU07WUFBRWUsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyxDQUdyQixrQ0FBa0M7Q0FDbEMsb0NBQW9DO0NBQ3BDLDhDQUE4QztDQUM5QyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG1DQUFtQztDQUNuQyw2RUFBNkU7Q0FDN0UsMkRBQTJEO0NBRzNELCtDQUErQztDQUMvQyx5QkFBeUI7Q0FDekIsSUFBSTtDQUNKLG1CQUFtQjtDQUNuQiw4Q0FBOEM7Q0FDOUMsZUFBZTtDQUNmLE1BQU07Q0FDTixNQUFNO0NBQ04sS0FBSztDQUNMLDZDQUE2QztDQUM3QywwQkFBMEI7Q0FDMUIsV0FBVztDQUVYLE1BQU07Q0FFTixxQ0FBcUM7Q0FDckMsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsTUFBTTtDQUVOLDJDQUEyQztDQUMzQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxLQUFLO0NBQ0wsTUFBTTtDQUNOLDZDQUE2QztDQUM3QyxXQUFXO0NBQ1gscUNBQXFDO0NBQ3JDLHdEQUF3RDtDQUN4RCwrQkFBK0I7Q0FDL0Isd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQixLQUFLO0NBQ0wsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xyXG5cclxuLy8gQ29uZmlndXJlIHRoZSBjaGFpbnMgYW5kIHByb3ZpZGVyIGZvciBsb2NhbGhvc3RcclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2NoYWluLmxvY2FsaG9zdF0sXHJcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXHJcbik7XHJcblxyXG4vLyBTZXQgdXAgdGhlIGRlZmF1bHQgY29ubmVjdG9ycyBmb3IgdGhlIGxvY2FsIGNoYWluXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxyXG4gIGNoYWlucyxcclxufSk7XHJcblxyXG4vLyBDcmVhdGUgdGhlIFdhZ21pIGNsaWVudCB3aXRoIHRoZSBjb25maWd1cmVkIGNoYWlucyBhbmQgcHJvdmlkZXJcclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuLy8gQ3VzdG9taXplIHRoZSBSYWluYm93S2l0IHRoZW1lXHJcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuICBjb2xvcnM6IHtcclxuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG5cclxuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbi8vIGltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbi8vIGltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyBnZXREZWZhdWx0V2FsbGV0cyxcclxuLy8gUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4vLyBkYXJrVGhlbWUsXHJcbi8vIG1pZG5pZ2h0VGhlbWUsXHJcbi8vIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuLy8gaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xyXG4vLyBpbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvaW5mdXJhXCI7XHJcblxyXG5cclxuLy8gY29uc3Qge2NoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuLy8gW2NoYWluLnBvbHlnb25NdW1iYWldLFxyXG4vLyBbXHJcbi8vIGluZnVyYVByb3ZpZGVyKHtcclxuLy8gYXBpS2V5OiBcIjNjYjY5MTUyZjA0MjRkOTM5YTcwMTgyYjgzOTM4MzRmXCIsXHJcbi8vIHByaW9yaXR5OiAxLFxyXG4vLyB9KSxcclxuLy8gwrcgXVxyXG4vLyApO1xyXG4vLyBjb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuLy8gXHRhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxuLy8gXHRjaGFpbnMsXHJcblx0XHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4vLyBcdGF1dG9Db25uZWN0OiB0cnVlLFxyXG4vLyBcdGNvbm5lY3RvcnMsXHJcbi8vIFx0cHJvdmlkZXIsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xyXG4vLyBjb2xvcnM6IHtcclxuLy8gYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxyXG4vLyBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxyXG4vLyB9LFxyXG4vLyB9KTtcclxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbi8vIHJldHVybiAoXHJcbi8vIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuLy8gPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gdGhlbWU9e215IFRoZW1lfT5cclxuLy8gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4vLyA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuLy8gPC9XYWdtaUNvbmZpZz5cclxuLy8gKTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsibWVyZ2UiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsIm1pZG5pZ2h0VGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJjaGFpbnMiLCJwcm92aWRlciIsImxvY2FsaG9zdCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();