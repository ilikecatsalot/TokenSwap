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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Configure the chains and provider for localhost\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.localhost\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\n// Set up the default connectors for the local chain\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\n// Create the Wagmi client with the configured chains and provider\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// Customize the RainbowKit theme\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\cs\\\\projects\\\\uniswap-tokem-marketplace-starter-file-main\\\\uniswap-tokem-marketplace-starter-file-main\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\cs\\\\projects\\\\uniswap-tokem-marketplace-starter-file-main\\\\uniswap-tokem-marketplace-starter-file-main\\\\pages\\\\_app.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\cs\\\\projects\\\\uniswap-tokem-marketplace-starter-file-main\\\\uniswap-tokem-marketplace-starter-file-main\\\\pages\\\\_app.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp); // import \"../styles/globals.css\";\n // import merge from \"lodash/merge\";\n // import \"@rainbow-me/rainbowkit/styles.css\";\n // import {\n // getDefaultWallets,\n // RainbowKitProvider,\n // darkTheme,\n // midnightTheme,\n // } from \"@rainbow-me/rainbowkit\";\n // import { chain, configureChains, createClient, WagmiConfig } from \"wagmi\";\n // import { infuraProvider } from \"wagmi/providers/infura\";\n // const {chains, provider } = configureChains(\n // [chain.polygonMumbai],\n // [\n // infuraProvider({\n // apiKey: \"3cb69152f0424d939a70182b8393834f\",\n // priority: 1,\n // }),\n // · ]\n // );\n // const { connectors } = getDefaultWallets({\n // \tappName: \"Custom Dex\",\n // \tchains,\n // });\n // const wagmiClient = createClient({\n // \tautoConnect: true,\n // \tconnectors,\n // \tprovider,\n // });\n // const myTheme = merge(midnightTheme(), {\n // colors: {\n // accentColor: \"#18181b\",\n // accentColorForeground: \"#fff\",\n // },\n // });\n // function MyApp({ Component, pageProps }) {\n // return (\n // <WagmiConfig client={wagmiClient}>\n // <RainbowKitProvider chains={chains} theme={my Theme}>\n // <Component {...pageProps} />\n // </RainbowKitProvider>\n // </WagmiConfig>\n // );\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7QUFDVTtBQUtYO0FBQzBDO0FBQ2xCO0FBRXhELGtEQUFrRDtBQUNsRCxNQUFNLEVBQUVTLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdMLHNEQUFlLENBQzFDO0lBQUNELGtEQUFlO0NBQUMsRUFDakI7SUFBQ0ksc0VBQWMsRUFBRTtDQUFDLENBQ25CO0FBRUQsb0RBQW9EO0FBQ3BELE1BQU0sRUFBRUksVUFBVSxHQUFFLEdBQUdYLHlFQUFpQixDQUFDO0lBQ3ZDWSxPQUFPLEVBQUUsWUFBWTtJQUNyQkosTUFBTTtDQUNQLENBQUM7QUFFRixrRUFBa0U7QUFDbEUsTUFBTUssV0FBVyxHQUFHUixtREFBWSxDQUFDO0lBQy9CUyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWRixRQUFRO0NBQ1QsQ0FBQztBQUVGLGlDQUFpQztBQUNqQyxNQUFNTSxPQUFPLEdBQUdoQixtREFBSyxDQUFDRyxxRUFBYSxFQUFFLEVBQUU7SUFDckNjLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMscUJBQXFCLEVBQUUsTUFBTTtLQUM5QjtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ2YsOENBQVc7UUFBQ2dCLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUNaLHNFQUFrQjtZQUFDTyxNQUFNLEVBQUVBLE1BQU07WUFBRWUsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyxDQUdyQixrQ0FBa0M7Q0FDbEMsb0NBQW9DO0NBQ3BDLDhDQUE4QztDQUM5QyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG1DQUFtQztDQUNuQyw2RUFBNkU7Q0FDN0UsMkRBQTJEO0NBRzNELCtDQUErQztDQUMvQyx5QkFBeUI7Q0FDekIsSUFBSTtDQUNKLG1CQUFtQjtDQUNuQiw4Q0FBOEM7Q0FDOUMsZUFBZTtDQUNmLE1BQU07Q0FDTixNQUFNO0NBQ04sS0FBSztDQUNMLDZDQUE2QztDQUM3QywwQkFBMEI7Q0FDMUIsV0FBVztDQUVYLE1BQU07Q0FFTixxQ0FBcUM7Q0FDckMsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsTUFBTTtDQUVOLDJDQUEyQztDQUMzQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxLQUFLO0NBQ0wsTUFBTTtDQUNOLDZDQUE2QztDQUM3QyxXQUFXO0NBQ1gscUNBQXFDO0NBQ3JDLHdEQUF3RDtDQUN4RCwrQkFBK0I7Q0FDL0Isd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQixLQUFLO0NBQ0wsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBtaWRuaWdodFRoZW1lLFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuXG4vLyBDb25maWd1cmUgdGhlIGNoYWlucyBhbmQgcHJvdmlkZXIgZm9yIGxvY2FsaG9zdFxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5sb2NhbGhvc3RdLFxuICBbcHVibGljUHJvdmlkZXIoKV1cbik7XG5cbi8vIFNldCB1cCB0aGUgZGVmYXVsdCBjb25uZWN0b3JzIGZvciB0aGUgbG9jYWwgY2hhaW5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcbiAgY2hhaW5zLFxufSk7XG5cbi8vIENyZWF0ZSB0aGUgV2FnbWkgY2xpZW50IHdpdGggdGhlIGNvbmZpZ3VyZWQgY2hhaW5zIGFuZCBwcm92aWRlclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuLy8gQ3VzdG9taXplIHRoZSBSYWluYm93S2l0IHRoZW1lXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XG4gIGNvbG9yczoge1xuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cblxuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG4vLyBpbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xuLy8gaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG4vLyBpbXBvcnQge1xuLy8gZ2V0RGVmYXVsdFdhbGxldHMsXG4vLyBSYWluYm93S2l0UHJvdmlkZXIsXG4vLyBkYXJrVGhlbWUsXG4vLyBtaWRuaWdodFRoZW1lLFxuLy8gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuLy8gaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuLy8gaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2luZnVyYVwiO1xuXG5cbi8vIGNvbnN0IHtjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4vLyBbY2hhaW4ucG9seWdvbk11bWJhaV0sXG4vLyBbXG4vLyBpbmZ1cmFQcm92aWRlcih7XG4vLyBhcGlLZXk6IFwiM2NiNjkxNTJmMDQyNGQ5MzlhNzAxODJiODM5MzgzNGZcIixcbi8vIHByaW9yaXR5OiAxLFxuLy8gfSksXG4vLyDCtyBdXG4vLyApO1xuLy8gY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4vLyBcdGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxuLy8gXHRjaGFpbnMsXG5cdFxuLy8gfSk7XG5cbi8vIGNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbi8vIFx0YXV0b0Nvbm5lY3Q6IHRydWUsXG4vLyBcdGNvbm5lY3RvcnMsXG4vLyBcdHByb3ZpZGVyLFxuLy8gfSk7XG5cbi8vIGNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcbi8vIGNvbG9yczoge1xuLy8gYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxuLy8gYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcbi8vIH0sXG4vLyB9KTtcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuLy8gcmV0dXJuIChcbi8vIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbi8vIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteSBUaGVtZX0+XG4vLyA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbi8vIDwvV2FnbWlDb25maWc+XG4vLyApO1xuLy8gfVxuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJsb2NhbGhvc3QiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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