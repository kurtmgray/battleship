/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 40px;\n  }\n\n.boards-wrapper {\n    display: flex;\n    justify-content: space-around;\n    width: 1500px;\n    height: 600px;\n}\n\n.user-board, \n.enemy-board {\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    background-color: #fff;\n    color: rgb(145, 101, 101);\n}\n\n.user-position,\n.enemy-position,\n.occupied,\n.hit, \n.miss {\n    color: #fff;\n    border: 1px solid;\n    border-color: white;\n    padding: 20px;\n    font-size: 10%;\n}\n\n.user-position {\n    background-color: rgb(129, 129, 129);\n\n}\n\n.enemy-position,\n.enemy-occupied {\n    background-color: rgb(129, 129, 129);\n\n}\n\n\n\n\n.user-occupied {\n    background-color: rgb(0, 0, 0);\n\n}\n\n.hit {\n    background-color: rgb(250, 58, 0);\n\n} \n\n.miss {\n    background-color: rgb(0, 108, 250);\n\n} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;EACd;;AAEF;IACI,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,wEAAwE;IACxE,qEAAqE;IACrE,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;;;;;IAKI,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,oCAAoC;;AAExC;;AAEA;;IAEI,oCAAoC;;AAExC;;;;;AAKA;IACI,8BAA8B;;AAElC;;AAEA;IACI,iCAAiC;;AAErC;;AAEA;IACI,kCAAkC;;AAEtC","sourcesContent":["body {\n    margin: 40px;\n  }\n\n.boards-wrapper {\n    display: flex;\n    justify-content: space-around;\n    width: 1500px;\n    height: 600px;\n}\n\n.user-board, \n.enemy-board {\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    background-color: #fff;\n    color: rgb(145, 101, 101);\n}\n\n.user-position,\n.enemy-position,\n.occupied,\n.hit, \n.miss {\n    color: #fff;\n    border: 1px solid;\n    border-color: white;\n    padding: 20px;\n    font-size: 10%;\n}\n\n.user-position {\n    background-color: rgb(129, 129, 129);\n\n}\n\n.enemy-position,\n.enemy-occupied {\n    background-color: rgb(129, 129, 129);\n\n}\n\n\n\n\n.user-occupied {\n    background-color: rgb(0, 0, 0);\n\n}\n\n.hit {\n    background-color: rgb(250, 58, 0);\n\n} \n\n.miss {\n    background-color: rgb(0, 108, 250);\n\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// handle edge cases, organize



const Ship = (len) => {
    return {
        length: len,
        hitLocation: [],
        sunk: false,
        orientation: undefined,
        gridLocation: [],
        hit(x, y) {
            if(!this.hitLocation.includes(x + y) && this.gridLocation.includes(x + y)) {
                this.hitLocation.push(x + y)
                console.log('hit match')
                console.log(this.hitLocation)
                console.log(this.gridLocation)
            }
            this.isSunk()
        },
        isSunk() {
            if(this.hitLocation.length === this.length) {
                this.sunk = true
                console.log('sunk!')
            }
        },
    }       
}

const Gameboard = (size) => {
    const ships = []
    const board = []
    const moves = []
    const createShips = () => {
        const oneShipOne = Ship(1);
        const oneShipTwo = Ship(1);
        const oneShipThree = Ship(1);
        const oneShipFour = Ship(1);
        const twoShipOne = Ship(2);
        const twoShipTwo = Ship(2);
        const twoShipThree = Ship(2);
        const threeShipOne = Ship(3);
        const threeShipTwo = Ship(3);
        const fourShipOne = Ship(4);
        ships.push(
            oneShipOne, 
            oneShipTwo, 
            oneShipThree, 
            oneShipFour,
            twoShipOne, 
            twoShipTwo, 
            twoShipThree, 
            threeShipOne, 
            threeShipTwo,
            fourShipOne
        )

    }
    createShips()

    const createBoard = (size) => {
        for(let y = 0; y < size; y++){
            const yArr = [] 
            for(let x = 0; x < size; x++){
                const xArr = {
                    index: '' + x + y,
                    column: '' + x,
                    row: '' + y,
                    occupied: false,
                    hit: false,
                    miss: false
                }    
                yArr.push(xArr)
            }
            board.push(yArr)
        }
    }
    createBoard(size)


    const placeShips = (size) => {
        ships.forEach(ship => {
            const orientation = Boolean(Math.round(Math.random()))
            if (orientation) {
                ship.orientation = 'horizontal'
            } else {
                ship.orientation = 'vertical'
            }
            
            let x, y 
            const generateNewStartingCoordinate = (size) => {
                x = '' + Math.floor(Math.random() * size)
                y = '' + Math.floor(Math.random() * size)
            }

            const placeShip = () => {
                generateNewStartingCoordinate(size)
                board.forEach(row => {
                    row.forEach(position => {
                        while (position.index === x + y && position.occupied) {
                            generateNewStartingCoordinate(size)
                        }  
                        if (ship.orientation === 'horizontal' && size - x < ship.length) {
                            generateNewStartingCoordinate(size)
                        } else if (ship.orientation === 'horizontal' && size - ship.length >= x){ 
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push((parseInt(x) + i) + y)
                                } 
                            }
                        }
                        if (ship.orientation === 'vertical' && size - y < ship.length) {
                            generateNewStartingCoordinate(size)
                        } else if (ship.orientation === 'vertical' && size - ship.length >= y) {                            
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push((x + (parseInt(y) + i)))
                                }    
                            }
                        }
                        if (position.occupied) {
                            generateNewStartingCoordinate(size)
                        // } else if (// for loop to check for (length) spaces to the right (column values)) {
                        // //another for loop to check for (length) spaces below (row values) for occupied spaces
                        } else if (ship.gridLocation.indexOf(position.index) !== -1) {
                            position.occupied = true
                        }
                    })    
                })  
            }
        generateNewStartingCoordinate()
        placeShip()            
        })
        return {size}    
    }
    
    const receiveAttack = (x, y) => {
        let result
        board.forEach(row => {
            row.forEach(position => {
                if (position.index === x + y && position.occupied && !position.hit) {
                    position.hit = true
                    ships.forEach(ship => {
                        ship.hit(x,y)
                    })
                    result = 'hit'
                } else if (position.index === x + y && !position.occupied && !position.miss) {
                    position.miss = true
                    result = 'miss'               
                } else if (position.index === x + y && (position.hit || position.miss)){
                    result = false
                }
            })
        })
        return result
    }
    placeShips(size)

    const gameOver = () => {
        return ships.every(ship => ship.sunk)
    }
    
    return {
        board,  
        ships,
        moves,
        size,
        gameOver,
        receiveAttack,
    }
}

const Player = (name) => {
    return {
        name: name,
        active: false,
        attack(e) {
            const x = e.target.dataset.index.charAt(0)
            const y = e.target.dataset.index.charAt(1)
            return {x, y}
        },
        randomAttack(size) {
            const x = '' + Math.floor(Math.random() * size)
            const y = '' + Math.floor(Math.random() * size)
            console.log(x, y)
            return {x, y}
        }
    }
}

// UI
const contentDIV = document.querySelector('.content')
const boardsDIV = document.querySelector('.boards-wrapper')
const userBoardDIV = document.querySelector('.user-board')
const enemyBoardDIV = document.querySelector('.enemy-board')

const Game = () => {
    const enemyBoard = Gameboard(10)
    const userBoard = Gameboard(10)
    const boards = [userBoard, enemyBoard]
    console.log(boards)
    console.log(userBoard)
    const enemy = Player('Computer')
    const user = Player('Kurt')
    user.active = true

    // DOM
    const createBoardUI = (userBoard, enemyBoard) => {
        userBoard.board.forEach(row => {
            row.forEach(position => {
                const square = document.createElement('div')
                square.classList.add('user-position')
                square.innerText = position.column + position.row
                square.dataset.index = position.column + position.row
                userBoardDIV.appendChild(square)
    
                if(position.occupied){
                    square.classList.add('user-occupied')
                }
            })
        })
        enemyBoard.board.forEach(row => {
            row.forEach(position => {
                const square = document.createElement('div')
                square.classList.add('enemy-position')
                square.innerText = position.column + position.row
                square.dataset.index = position.column + position.row
                enemyBoardDIV.appendChild(square)
                
                if(position.occupied){
                    square.classList.add('enemy-occupied')
                }
            })
        })    
    }
    createBoardUI(userBoard, enemyBoard)

    const updateUI = () => {
        const userPositionsNL = document.querySelectorAll('.user-position')
        const userPositions = Array.from(userPositionsNL)
        const enemyPositionsNL = document.querySelectorAll('.enemy-position')
        const enemyPositions = Array.from(enemyPositionsNL)
        enemyBoard.board.forEach(row => {
            row.forEach(position => {
                if (position.hit) {
                    enemyPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('hit')
                        }
                    })
                } else if (position.miss) {
                    enemyPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('miss')
                        }
                    })
                }
            });
        })
        userBoard.board.forEach(row => {
            row.forEach(position => {
                if (position.hit) {
                    userPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('hit')
                        }
                    })
                } else if (position.miss) {
                    userPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('miss')
                        }
                    })
                }
            });
        })
    }
    
    // util
    
    const gameMoves = async () => {
        
        const computerMove = () => {
            console.log('computer move')
            return enemy.randomAttack(userBoard.size)
        }

        const userMove = async () => {
            return new Promise((resolve) => {
                enemyBoardDIV.addEventListener('click', function clickListener(e) {
                    const {x, y} = user.attack(e)
                    enemyBoardDIV.removeEventListener('click', clickListener)
                    resolve({x, y})    
                })    
            })
        }
        let result
        user.active ? result = userMove() : result = computerMove()
        return result
    }
    
    
    const gameLoop = async () => {
        while (true) {
        
            let otherBoard
            user.active ? otherBoard = enemyBoard : otherBoard = userBoard
            
            while (true) {
                const {x, y} = await gameMoves()
                const result = otherBoard.receiveAttack(x, y)
                if(result === 'miss' && user.active){
                    user.active = false
                    enemy.active = true
                    console.log('user ' + result)
                    updateUI()
                    break
                } else if(result === 'miss' && enemy.active){
                    user.active = true
                    enemy.active = false
                    console.log('enemy ' + result)
                    updateUI()
                    break
                } else {
                    updateUI()
                    break
                }  
            }

            const activeWin = otherBoard.gameOver()
            if (activeWin) {
                return user.active ? user.name : enemy.name
            }
        }            
    }

   return {
       gameLoop
    }
}

const game = Game()
game.gameLoop().then(result => {
    alert(`${result} wins!`)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICB9XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxNTAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxufVxcblxcbi51c2VyLWJvYXJkLCBcXG4uZW5lbXktYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYigxNDUsIDEwMSwgMTAxKTtcXG59XFxuXFxuLnVzZXItcG9zaXRpb24sXFxuLmVuZW15LXBvc2l0aW9uLFxcbi5vY2N1cGllZCxcXG4uaGl0LCBcXG4ubWlzcyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxMCU7XFxufVxcblxcbi51c2VyLXBvc2l0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xcblxcbn1cXG5cXG4uZW5lbXktcG9zaXRpb24sXFxuLmVuZW15LW9jY3VwaWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xcblxcbn1cXG5cXG5cXG5cXG5cXG4udXNlci1vY2N1cGllZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG5cXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDU4LCAwKTtcXG5cXG59IFxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwOCwgMjUwKTtcXG5cXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYix3RUFBd0U7SUFDeEUscUVBQXFFO0lBQ3JFLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDOztBQUVBOztJQUVJLG9DQUFvQzs7QUFFeEM7Ozs7O0FBS0E7SUFDSSw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gIH1cXG5cXG4uYm9hcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLnVzZXItYm9hcmQsIFxcbi5lbmVteS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4IDUwcHggNTBweCA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDE0NSwgMTAxLCAxMDEpO1xcbn1cXG5cXG4udXNlci1wb3NpdGlvbixcXG4uZW5lbXktcG9zaXRpb24sXFxuLm9jY3VwaWVkLFxcbi5oaXQsIFxcbi5taXNzIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEwJTtcXG59XFxuXFxuLnVzZXItcG9zaXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XFxuXFxufVxcblxcbi5lbmVteS1wb3NpdGlvbixcXG4uZW5lbXktb2NjdXBpZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XFxuXFxufVxcblxcblxcblxcblxcbi51c2VyLW9jY3VwaWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcblxcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgNTgsIDApO1xcblxcbn0gXFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTA4LCAyNTApO1xcblxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaGFuZGxlIGVkZ2UgY2FzZXMsIG9yZ2FuaXplXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IFNoaXAgPSAobGVuKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoOiBsZW4sXG4gICAgICAgIGhpdExvY2F0aW9uOiBbXSxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIG9yaWVudGF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGdyaWRMb2NhdGlvbjogW10sXG4gICAgICAgIGhpdCh4LCB5KSB7XG4gICAgICAgICAgICBpZighdGhpcy5oaXRMb2NhdGlvbi5pbmNsdWRlcyh4ICsgeSkgJiYgdGhpcy5ncmlkTG9jYXRpb24uaW5jbHVkZXMoeCArIHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRMb2NhdGlvbi5wdXNoKHggKyB5KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQgbWF0Y2gnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGl0TG9jYXRpb24pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkTG9jYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzU3VuaygpXG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaGl0TG9jYXRpb24ubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VuayEnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0gICAgICAgXG59XG5cbmNvbnN0IEdhbWVib2FyZCA9IChzaXplKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXVxuICAgIGNvbnN0IGJvYXJkID0gW11cbiAgICBjb25zdCBtb3ZlcyA9IFtdXG4gICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZVNoaXBPbmUgPSBTaGlwKDEpO1xuICAgICAgICBjb25zdCBvbmVTaGlwVHdvID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3Qgb25lU2hpcFRocmVlID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3Qgb25lU2hpcEZvdXIgPSBTaGlwKDEpO1xuICAgICAgICBjb25zdCB0d29TaGlwT25lID0gU2hpcCgyKTtcbiAgICAgICAgY29uc3QgdHdvU2hpcFR3byA9IFNoaXAoMik7XG4gICAgICAgIGNvbnN0IHR3b1NoaXBUaHJlZSA9IFNoaXAoMik7XG4gICAgICAgIGNvbnN0IHRocmVlU2hpcE9uZSA9IFNoaXAoMyk7XG4gICAgICAgIGNvbnN0IHRocmVlU2hpcFR3byA9IFNoaXAoMyk7XG4gICAgICAgIGNvbnN0IGZvdXJTaGlwT25lID0gU2hpcCg0KTtcbiAgICAgICAgc2hpcHMucHVzaChcbiAgICAgICAgICAgIG9uZVNoaXBPbmUsIFxuICAgICAgICAgICAgb25lU2hpcFR3bywgXG4gICAgICAgICAgICBvbmVTaGlwVGhyZWUsIFxuICAgICAgICAgICAgb25lU2hpcEZvdXIsXG4gICAgICAgICAgICB0d29TaGlwT25lLCBcbiAgICAgICAgICAgIHR3b1NoaXBUd28sIFxuICAgICAgICAgICAgdHdvU2hpcFRocmVlLCBcbiAgICAgICAgICAgIHRocmVlU2hpcE9uZSwgXG4gICAgICAgICAgICB0aHJlZVNoaXBUd28sXG4gICAgICAgICAgICBmb3VyU2hpcE9uZVxuICAgICAgICApXG5cbiAgICB9XG4gICAgY3JlYXRlU2hpcHMoKVxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoc2l6ZSkgPT4ge1xuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHlBcnIgPSBbXSBcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBzaXplOyB4Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHhBcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAnJyArIHggKyB5LFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46ICcnICsgeCxcbiAgICAgICAgICAgICAgICAgICAgcm93OiAnJyArIHksXG4gICAgICAgICAgICAgICAgICAgIG9jY3VwaWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWlzczogZmFsc2VcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgIHlBcnIucHVzaCh4QXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaCh5QXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKHNpemUpXG5cblxuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoc2l6ZSkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb24gPSAndmVydGljYWwnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB4LCB5IFxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVOZXdTdGFydGluZ0Nvb3JkaW5hdGUgPSAoc2l6ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHggPSAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpXG4gICAgICAgICAgICAgICAgeSA9ICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGxhY2VTaGlwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlTmV3U3RhcnRpbmdDb29yZGluYXRlKHNpemUpXG4gICAgICAgICAgICAgICAgYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAocG9zaXRpb24uaW5kZXggPT09IHggKyB5ICYmIHBvc2l0aW9uLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdTdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiBzaXplIC0geCA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdTdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHNpemUgLSBzaGlwLmxlbmd0aCA+PSB4KXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLmdyaWRMb2NhdGlvbi5sZW5ndGggPCBzaGlwLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmdyaWRMb2NhdGlvbi5wdXNoKChwYXJzZUludCh4KSArIGkpICsgeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBzaXplIC0geSA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdTdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBzaXplIC0gc2hpcC5sZW5ndGggPj0geSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAuZ3JpZExvY2F0aW9uLmxlbmd0aCA8IHNoaXAubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuZ3JpZExvY2F0aW9uLnB1c2goKHggKyAocGFyc2VJbnQoeSkgKyBpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdTdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoLy8gZm9yIGxvb3AgdG8gY2hlY2sgZm9yIChsZW5ndGgpIHNwYWNlcyB0byB0aGUgcmlnaHQgKGNvbHVtbiB2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvL2Fub3RoZXIgZm9yIGxvb3AgdG8gY2hlY2sgZm9yIChsZW5ndGgpIHNwYWNlcyBiZWxvdyAocm93IHZhbHVlcykgZm9yIG9jY3VwaWVkIHNwYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLmdyaWRMb2NhdGlvbi5pbmRleE9mKHBvc2l0aW9uLmluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5vY2N1cGllZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgICAgXG4gICAgICAgICAgICAgICAgfSkgIFxuICAgICAgICAgICAgfVxuICAgICAgICBnZW5lcmF0ZU5ld1N0YXJ0aW5nQ29vcmRpbmF0ZSgpXG4gICAgICAgIHBsYWNlU2hpcCgpICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7c2l6ZX0gICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0XG4gICAgICAgIGJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24uaW5kZXggPT09IHggKyB5ICYmIHBvc2l0aW9uLm9jY3VwaWVkICYmICFwb3NpdGlvbi5oaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uaGl0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoeCx5KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAnaGl0J1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24uaW5kZXggPT09IHggKyB5ICYmICFwb3NpdGlvbi5vY2N1cGllZCAmJiAhcG9zaXRpb24ubWlzcykge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5taXNzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAnbWlzcycgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uLmluZGV4ID09PSB4ICsgeSAmJiAocG9zaXRpb24uaGl0IHx8IHBvc2l0aW9uLm1pc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHBsYWNlU2hpcHMoc2l6ZSlcblxuICAgIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmspXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLCAgXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtb3ZlcyxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgZ2FtZU92ZXIsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgfVxufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGF0dGFjayhlKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleC5jaGFyQXQoMClcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4LmNoYXJBdCgxKVxuICAgICAgICAgICAgcmV0dXJuIHt4LCB5fVxuICAgICAgICB9LFxuICAgICAgICByYW5kb21BdHRhY2soc2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgeCA9ICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSlcbiAgICAgICAgICAgIGNvbnN0IHkgPSAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4LCB5KVxuICAgICAgICAgICAgcmV0dXJuIHt4LCB5fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBVSVxuY29uc3QgY29udGVudERJViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbmNvbnN0IGJvYXJkc0RJViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtd3JhcHBlcicpXG5jb25zdCB1c2VyQm9hcmRESVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ib2FyZCcpXG5jb25zdCBlbmVteUJvYXJkRElWID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWJvYXJkJylcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gR2FtZWJvYXJkKDEwKVxuICAgIGNvbnN0IHVzZXJCb2FyZCA9IEdhbWVib2FyZCgxMClcbiAgICBjb25zdCBib2FyZHMgPSBbdXNlckJvYXJkLCBlbmVteUJvYXJkXVxuICAgIGNvbnNvbGUubG9nKGJvYXJkcylcbiAgICBjb25zb2xlLmxvZyh1c2VyQm9hcmQpXG4gICAgY29uc3QgZW5lbXkgPSBQbGF5ZXIoJ0NvbXB1dGVyJylcbiAgICBjb25zdCB1c2VyID0gUGxheWVyKCdLdXJ0JylcbiAgICB1c2VyLmFjdGl2ZSA9IHRydWVcblxuICAgIC8vIERPTVxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkVUkgPSAodXNlckJvYXJkLCBlbmVteUJvYXJkKSA9PiB7XG4gICAgICAgIHVzZXJCb2FyZC5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndXNlci1wb3NpdGlvbicpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IHBvc2l0aW9uLmNvbHVtbiArIHBvc2l0aW9uLnJvd1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmluZGV4ID0gcG9zaXRpb24uY29sdW1uICsgcG9zaXRpb24ucm93XG4gICAgICAgICAgICAgICAgdXNlckJvYXJkRElWLmFwcGVuZENoaWxkKHNxdWFyZSlcbiAgICBcbiAgICAgICAgICAgICAgICBpZihwb3NpdGlvbi5vY2N1cGllZCl7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd1c2VyLW9jY3VwaWVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBlbmVteUJvYXJkLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1wb3NpdGlvbicpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IHBvc2l0aW9uLmNvbHVtbiArIHBvc2l0aW9uLnJvd1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmluZGV4ID0gcG9zaXRpb24uY29sdW1uICsgcG9zaXRpb24ucm93XG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZERJVi5hcHBlbmRDaGlsZChzcXVhcmUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYocG9zaXRpb24ub2NjdXBpZWQpe1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZW5lbXktb2NjdXBpZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICAgIFxuICAgIH1cbiAgICBjcmVhdGVCb2FyZFVJKHVzZXJCb2FyZCwgZW5lbXlCb2FyZClcblxuICAgIGNvbnN0IHVwZGF0ZVVJID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlci1wb3NpdGlvbicpXG4gICAgICAgIGNvbnN0IHVzZXJQb3NpdGlvbnMgPSBBcnJheS5mcm9tKHVzZXJQb3NpdGlvbnNOTClcbiAgICAgICAgY29uc3QgZW5lbXlQb3NpdGlvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1wb3NpdGlvbicpXG4gICAgICAgIGNvbnN0IGVuZW15UG9zaXRpb25zID0gQXJyYXkuZnJvbShlbmVteVBvc2l0aW9uc05MKVxuICAgICAgICBlbmVteUJvYXJkLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24uaGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15UG9zaXRpb25zLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uLmluZGV4ID09PSBkaXYuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24ubWlzcykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteVBvc2l0aW9ucy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvbi5pbmRleCA9PT0gZGl2LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIHVzZXJCb2FyZC5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmhpdCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyUG9zaXRpb25zLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uLmluZGV4ID09PSBkaXYuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24ubWlzcykge1xuICAgICAgICAgICAgICAgICAgICB1c2VyUG9zaXRpb25zLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uLmluZGV4ID09PSBkaXYuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gdXRpbFxuICAgIFxuICAgIGNvbnN0IGdhbWVNb3ZlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wdXRlciBtb3ZlJylcbiAgICAgICAgICAgIHJldHVybiBlbmVteS5yYW5kb21BdHRhY2sodXNlckJvYXJkLnNpemUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVuZW15Qm9hcmRESVYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbGlja0xpc3RlbmVyKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3gsIHl9ID0gdXNlci5hdHRhY2soZSlcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZERJVi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe3gsIHl9KSAgICBcbiAgICAgICAgICAgICAgICB9KSAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdFxuICAgICAgICB1c2VyLmFjdGl2ZSA/IHJlc3VsdCA9IHVzZXJNb3ZlKCkgOiByZXN1bHQgPSBjb21wdXRlck1vdmUoKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGdhbWVMb29wID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBcbiAgICAgICAgICAgIGxldCBvdGhlckJvYXJkXG4gICAgICAgICAgICB1c2VyLmFjdGl2ZSA/IG90aGVyQm9hcmQgPSBlbmVteUJvYXJkIDogb3RoZXJCb2FyZCA9IHVzZXJCb2FyZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IGF3YWl0IGdhbWVNb3ZlcygpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3RoZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0ID09PSAnbWlzcycgJiYgdXNlci5hY3RpdmUpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgJyArIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVUkoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyZXN1bHQgPT09ICdtaXNzJyAmJiBlbmVteS5hY3RpdmUpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZW15ICcgKyByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVJKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVVSSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVdpbiA9IG90aGVyQm9hcmQuZ2FtZU92ZXIoKVxuICAgICAgICAgICAgaWYgKGFjdGl2ZVdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLmFjdGl2ZSA/IHVzZXIubmFtZSA6IGVuZW15Lm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgIH1cblxuICAgcmV0dXJuIHtcbiAgICAgICBnYW1lTG9vcFxuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IEdhbWUoKVxuZ2FtZS5nYW1lTG9vcCgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICBhbGVydChgJHtyZXN1bHR9IHdpbnMhYClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9