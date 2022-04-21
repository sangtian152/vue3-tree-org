(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-tree-org"] = factory(require("vue"));
	else
		root["vue3-tree-org"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue3-tree-org\",\"version\":\"1.2.1\",\"author\":\"sangtian152\",\"private\":false,\"main\":\"lib/vue3-tree-org.common.js\",\"module\":\"lib/index.esm.js\",\"typings\":\"lib/index.d.ts\",\"license\":\"MIT\",\"homepage\":\"https://sangtian152.github.io/vue3-tree-org\",\"files\":[\"lib\"],\"repository\":{\"type\":\"git\",\"url\":\"https://gitee.com/sangtian152/vue3-tree-org.git\"},\"keywords\":[\"vue3-tree-org\",\"orgchart\",\"vue\",\"tree-org\",\"组织架构图\"],\"scripts\":{\"dev\":\"vuepress dev docs\",\"serve\":\"vue-cli-service serve\",\"lint\":\"vue-cli-service lint\",\"clean:dist\":\"rimraf dist\",\"build\":\"npm run build:docs && npm run build:lib && npm run build:esm\",\"build:docs\":\"vuepress build docs\",\"build:lib\":\"vue-cli-service build --target lib --name vue3-tree-org --dest lib src/index.ts\",\"build:esm\":\"npm run clean:dist && gulp --require sucrase/register/ts -f build/gulpfile.ts\"},\"peerDependencies\":{\"vue\":\"^3.0.0\"},\"dependencies\":{\"core-js\":\"^3.6.5\"},\"devDependencies\":{\"@rollup/plugin-json\":\"^4.1.0\",\"@rollup/plugin-node-resolve\":\"^13.0.5\",\"@types/gulp\":\"^4.0.9\",\"@types/gulp-rename\":\"^2.0.1\",\"@types/gulp-sass\":\"^5.0.0\",\"@types/sass\":\"^1.43.1\",\"@typescript-eslint/eslint-plugin\":\"^4.18.0\",\"@typescript-eslint/parser\":\"^4.18.0\",\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-plugin-eslint\":\"~4.5.0\",\"@vue/cli-plugin-router\":\"~4.5.0\",\"@vue/cli-plugin-typescript\":\"~4.5.0\",\"@vue/cli-service\":\"~4.5.0\",\"@vue/compiler-sfc\":\"^3.0.0\",\"@vue/eslint-config-standard\":\"^5.1.2\",\"@vue/eslint-config-typescript\":\"^7.0.0\",\"element-plus\":\"^1.3.0-beta.9\",\"escape-html\":\"^1.0.3\",\"eslint\":\"^6.7.2\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^4.0.0\",\"eslint-plugin-vue\":\"^7.0.0\",\"gulp\":\"^4.0.2\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^5.1.0\",\"markdown-it\":\"^12.3.2\",\"markdown-it-container\":\"^3.0.0\",\"node-sass\":\"^4.14.1\",\"rollup\":\"^2.58.0\",\"rollup-plugin-terser\":\"^7.0.2\",\"rollup-plugin-typescript2\":\"^0.30.0\",\"rollup-plugin-vue\":\"^6.0.0\",\"sass\":\"^1.49.9\",\"sass-loader\":\"^10.2.1\",\"sucrase\":\"^3.20.3\",\"typescript\":\"~4.1.5\",\"unplugin-element-plus\":\"^0.2.0\",\"vue-router\":\"^4.0.0-0\",\"vuepress\":\"^2.0.0-beta.35\"}}");

/***/ }),

/***/ "9ff4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export EMPTY_ARR */
/* unused harmony export EMPTY_OBJ */
/* unused harmony export NO */
/* unused harmony export NOOP */
/* unused harmony export PatchFlagNames */
/* unused harmony export camelize */
/* unused harmony export capitalize */
/* unused harmony export def */
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* unused harmony export extend */
/* unused harmony export generateCodeFrame */
/* unused harmony export getGlobalThis */
/* unused harmony export hasChanged */
/* unused harmony export hasOwn */
/* unused harmony export hyphenate */
/* unused harmony export includeBooleanAttr */
/* unused harmony export invokeArrayFns */
/* unused harmony export isArray */
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* unused harmony export isFunction */
/* unused harmony export isGloballyWhitelisted */
/* unused harmony export isHTMLTag */
/* unused harmony export isIntegerKey */
/* unused harmony export isKnownHtmlAttr */
/* unused harmony export isKnownSvgAttr */
/* unused harmony export isMap */
/* unused harmony export isModelListener */
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
/* unused harmony export isOn */
/* unused harmony export isPlainObject */
/* unused harmony export isPromise */
/* unused harmony export isReservedProp */
/* unused harmony export isSSRSafeAttrName */
/* unused harmony export isSVGTag */
/* unused harmony export isSet */
/* unused harmony export isSpecialBooleanAttr */
/* unused harmony export isString */
/* unused harmony export isSymbol */
/* unused harmony export isVoidTag */
/* unused harmony export looseEqual */
/* unused harmony export looseIndexOf */
/* unused harmony export makeMap */
/* unused harmony export normalizeClass */
/* unused harmony export normalizeProps */
/* unused harmony export normalizeStyle */
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* unused harmony export remove */
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* unused harmony export toHandlerKey */
/* unused harmony export toNumber */
/* unused harmony export toRawType */
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isArray(val) ||
            (isObject(val) &&
                (val.toString === objectToString || !isFunction(val.toString)))
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d959":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/utils/utils.ts
const isObject = function (arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
};
const isString = function (str) {
  return typeof str === 'string';
};
const isNumber = function (num) {
  return typeof num === 'number';
};
const fromPairs = function (pairs) {
  let index = -1;
  const // 循环索引
  length = pairs ? pairs.length : 0;
  const // 键值对数组的长度
  result = {}; // 结果对象

  while (++index < length) {
    // 循环并给结果对象加入属性
    const pair = pairs[index];
    result[pair[0]] = pair[1];
  }

  return result;
};
// CONCATENATED MODULE: ./src/utils/log.ts
/* eslint-disable no-console */

const log = {
  print: (text, type, back) => isString(type) || typeof back === 'boolean',
  pretty: (title, text, type) => isString(text) && isString(title) || typeof type === 'string',
  primary: (text, back) => isString(text) || typeof back === 'boolean',
  success: (text, back) => isString(text) || typeof back === 'boolean',
  info: (text, back) => isString(text) || typeof back === 'boolean',
  warning: (text, back) => isString(text) || typeof back === 'boolean',
  danger: (text, back) => isString(text) || typeof back === 'boolean'
};
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */

function typeColor(type = 'default') {
  let color = '';

  switch (type) {
    case 'primary':
      color = '#2d8cf0';
      break;

    case 'success':
      color = '#19be6b';
      break;

    case 'info':
      color = '#909399';
      break;

    case 'warning':
      color = '#ff9900';
      break;

    case 'danger':
      color = '#ff4d4f';
      break;

    case 'default':
      color = '#35495E';
      break;

    default:
      color = type;
      break;
  }

  return color;
}

log.print = function (text, type = 'default', back = false) {
  if (typeof text === 'object') {
    // 如果是对象则调用打印对象方式
    console.dir(text);
    return true;
  }

  if (back) {
    // 如果是打印带背景图的
    console.log(`%c ${text} `, `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`);
  } else {
    console.log(`%c ${text} `, `color: ${typeColor(type)};`);
  }

  return true;
}; // 漂亮的


log.pretty = function (title, text, type = 'primary') {
  console.log(`%c ${title} %c ${text} %c`, `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`, `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`, 'background:transparent');
  return true;
};

log.primary = function (text, back = false) {
  this.print && this.print(text, 'primary', back);
  return true;
};

log.success = function (text, back = false) {
  this.print && this.print(text, 'success', back);
  return true;
};

log.info = function (text, back = false) {
  this.print && this.print(text, 'info', back);
  return true;
};

log.warning = function (text, back = false) {
  this.print && this.print(text, 'warning', back);
  return true;
};

log.danger = function (text, back = false) {
  this.print && this.print(text, 'danger', back);
  return true;
};

/* harmony default export */ var utils_log = (log);
// CONCATENATED MODULE: ./src/plugin/core/index.ts
 // 功能插件


/* harmony default export */ var core = ({
  async install(app) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // app.config.productionTip = false
    app.config.globalProperties.$log = utils_log; // 打印UI官网

    utils_log.pretty('[' + package_0.name + '] ' + package_0.version, 'success');
  }

});
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tree-org/src/tree.vue?vue&type=template&id=08ebe676&ts=true

const _hoisted_1 = {
  ref: "eleRef",
  class: "zm-tree-org"
};
const _hoisted_2 = {
  class: "tree-org-node__text"
};

const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "tree-org-node__expand-btn"
}, null, -1);

const _hoisted_4 = {
  class: "tree-org-node__text"
};

const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "tree-org-node__expand-btn"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_org_node = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("tree-org-node");

  const _component_Draggable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Draggable");

  const _component_Tools = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Tools");

  const _component_clone_org = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("clone-org");

  const _component_Contextmenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Contextmenu");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "zoomRef",
    class: "zoom-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.zoomStyle),
    onWheel: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.zoomWheel && _ctx.zoomWheel(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Draggable, {
    x: _ctx.left,
    y: _ctx.top,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      dragging: _ctx.autoDragging
    }),
    onDragging: _ctx.onDrag,
    onDragstop: _ctx.onDragStop,
    draggable: _ctx.draggable,
    "drag-cancel": _ctx.dragCancel
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      ref: "treeRef",
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tree-org", {
        horizontal: _ctx.horizontal,
        collapsable: _ctx.collapsable
      }])
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_tree_org_node, {
      data: _ctx.treeData,
      props: _ctx.keys,
      horizontal: _ctx.horizontal,
      labelStyle: _ctx.labelStyle,
      collapsable: _ctx.collapsable,
      renderContent: _ctx.renderContent,
      selectedKey: _ctx.selectedKey,
      defaultExpandLevel: _ctx.defaultExpandLevel,
      selectedClassName: _ctx.selectedClassName,
      labelClassName: _ctx.labelClassName,
      vNodedrag: _ctx.nodeargs,
      onOnExpand: _ctx.handleExpand,
      onNodeClick: _ctx.handleClick,
      onNodeDblclick: _ctx.handleDblclick,
      onNodeMouseenter: _ctx.nodeMouseenter,
      onNodeMouseleave: _ctx.nodeMouseleave,
      onNodeContextmenu: _ctx.nodeContextmenu,
      onNodeFocus: _cache[0] || (_cache[0] = (e, data) => {
        _ctx.$emit('on-node-focus', e, data);
      }),
      onNodeBlur: _ctx.handleBlur
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
        node
      }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        node: node
      }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(node.label), 1)])])]),
      expand: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
        node
      }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
        node: node
      }, () => [_hoisted_3])]),
      _: 3
    }, 8, ["data", "props", "horizontal", "labelStyle", "collapsable", "renderContent", "selectedKey", "defaultExpandLevel", "selectedClassName", "labelClassName", "vNodedrag", "onOnExpand", "onNodeClick", "onNodeDblclick", "onNodeMouseenter", "onNodeMouseleave", "onNodeContextmenu", "onNodeBlur"])], 2)]),
    _: 3
  }, 8, ["x", "y", "class", "onDragging", "onDragstop", "draggable", "drag-cancel"])], 36), _ctx.tools.visible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Tools, {
    key: 0,
    tools: _ctx.tools.data,
    scale: _ctx.zoomPercent,
    onOnExpand: _ctx.expandChange,
    onOnScale: _ctx.zoomOrgchart,
    onOnRestore: _ctx.restoreOrgchart,
    onOnFullscreen: _ctx.handleFullscreen
  }, null, 8, ["tools", "scale", "onOnExpand", "onOnScale", "onOnRestore", "onOnFullscreen"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.nodeDraggable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_clone_org, {
    key: 1,
    modelValue: _ctx.nodeMoving,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.nodeMoving = $event),
    props: _ctx.keys,
    data: _ctx.cloneData.data,
    horizontal: _ctx.horizontal,
    "label-style": _ctx.labelStyle,
    collapsable: _ctx.collapsable,
    "render-content": _ctx.renderContent,
    "label-class-name": _ctx.labelClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
      node: node
    }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(node[_ctx.keys.label]), 1)])])]),
    expand: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
      node: node
    }, () => [_hoisted_5])]),
    _: 3
  }, 8, ["modelValue", "props", "data", "horizontal", "label-style", "collapsable", "render-content", "label-class-name"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.defineMenus.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Contextmenu, {
    key: 2,
    modelValue: _ctx.contextmenu,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.contextmenu = $event),
    x: _ctx.menuX,
    y: _ctx.menuY,
    node: _ctx.menuData.data,
    data: _ctx.data,
    props: _ctx.keys,
    menus: _ctx.defineMenus,
    disabled: _ctx.disabled,
    "node-add": _ctx.nodeAdd,
    "node-delete": _ctx.nodeDelete,
    "node-edit": _ctx.nodeEdit,
    "node-copy": _ctx.nodeCopy,
    onContextmenu: _cache[4] || (_cache[4] = arg => {
      _ctx.$emit('on-contextmenu', arg);
    }),
    onOnNodeCopy: _cache[5] || (_cache[5] = txt => {
      _ctx.$emit('on-node-copy', txt);
    }),
    onOnNodeDelete: _cache[6] || (_cache[6] = txt => {
      _ctx.$emit('on-node-delete', txt);
    })
  }, null, 8, ["modelValue", "x", "y", "node", "data", "props", "menus", "disabled", "node-add", "node-delete", "node-edit", "node-copy"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512);
}
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue?vue&type=template&id=08ebe676&ts=true

// CONCATENATED MODULE: ./src/directives/drag/index.ts
 // 递归遍历处理数据

const recurseData = function (data, keys, cb) {
  const {
    children
  } = keys;

  if (isObject(data)) {
    fn(data);
  } else if (Array.isArray(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      fn(data[i]);
    }
  }

  function fn(obj) {
    cb(obj);

    if (Array.isArray(obj[children])) {
      const list = obj[children];

      for (let i = 0, len = list.length; i < len; i++) {
        fn(list[i]);
      }
    }
  }
}; // 获取父级节点


const drag_getNodeById = function (node, keys, value) {
  const {
    id,
    children
  } = keys;

  if (node[id] === value) {
    return node;
  } else if (Array.isArray(node[children])) {
    const list = node[children];

    for (let i = 0, len = list.length; i < len; i++) {
      const row = list[i];
      const pNode = drag_getNodeById(row, keys, value);

      if (pNode) {
        return pNode;
      }
    }
  }
}; // 移除节点


const removeNode = function (node, context) {
  const {
    keys,
    data,
    onlyOneNode
  } = context;
  const {
    id,
    pid,
    children
  } = keys;
  const oldPaNode = drag_getNodeById(data, keys, node[pid]);
  const list = oldPaNode[children];
  let index;

  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i][id] === node[id]) {
      list.splice(i, 1);
      index = i;
      break;
    }
  } // 如果仅移动当前节点，把当前节点的子节点添加到当前节点的父节点，并把当前节点子节点移除


  const childNodes = node[children];

  if (onlyOneNode && index !== undefined && childNodes) {
    node[children] = [];
    childNodes.forEach(it => {
      it[pid] = oldPaNode[id];
    });
    oldPaNode[children].splice(index, 0, ...childNodes);
  }
}; // 新增子节点节点


const addChildNode = function (node, context) {
  const {
    parenNode,
    onlyOneNode,
    cloneNodeDrag
  } = context;

  if (parenNode.value) {
    const {
      keys
    } = context;
    const {
      id,
      pid
    } = keys;
    const parentData = parenNode.value;
    const nodeClone = JSON.parse(JSON.stringify(node));

    if (nodeClone.root) {
      nodeClone.root = undefined;
    }

    if (!cloneNodeDrag) {
      // 如果拖拽节点
      removeNode(nodeClone, context);
      nodeClone[pid] = parentData[id];
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [].concat(nodeClone);
    } else {
      // 如果拷贝并拖拽节点
      recurseData(nodeClone, keys, function (item) {
        if (typeof item[id] === 'string' && item[id].indexOf('clone-node') !== -1) {
          item[id] = `clone-node-${item[id]}`;
        }
      });
      const {
        children
      } = keys;

      if (onlyOneNode && Array.isArray(nodeClone[children])) {
        nodeClone[children] = [];
      }

      nodeClone[keys.pid] = parentData[keys.id];
      parentData.children ? parentData.children.push(nodeClone) : parentData.children = [nodeClone];
    }
  }
};

const drag = {
  beforeMount(el, binding) {
    const {
      l,
      t
    } = binding.modifiers;
    const {
      drag,
      dragData,
      node,
      handleStart,
      handleMove,
      handleEnd
    } = binding.value;
    const {
      value
    } = binding;
    const instance = { ...dragData
    };
    el.addEventListener('mousedown', handleDownCb);
    let offsetLeft = 0;
    let hasRender = false;
    let cloneTree;
    let screenX = 0;
    let screenY = 0;

    function initData(e) {
      screenX = e.screenX;
      screenY = e.screenY;
      offsetLeft = 0;
      instance.contextmenu.value = false; // 隐藏右键菜单

      const {
        keys,
        onlyOneNode
      } = instance;

      if (onlyOneNode) {
        // 如果是仅移动当前节点
        const {
          children
        } = keys;
        const cloneNode = { ...node
        };
        cloneNode[children] = [];
        instance.cloneData.data = cloneNode;
      } else {
        instance.cloneData.data = node;
      }
    }

    function handleDownCb(e) {
      e.stopPropagation();
      const target = e.target;

      if (drag === false || e.button !== 0 || node.focused || node.noDragging || target.className.indexOf('tree-org-node-btn') > -1) {
        return false;
      }

      initData(e);
      document.addEventListener('mousemove', handleMoveCb);
      document.addEventListener('mouseup', handleUpCb);
      handleEmit('start');
    }

    function moveStart(e) {
      instance.nodeMoving.value = true;
      node.moving = true;
      let ndom = el;

      while (!ndom.classList.contains('tree-org-node')) {
        offsetLeft += ndom.offsetLeft;
        ndom = ndom.offsetParent;
      } // 拖动节点副本


      offsetLeft = offsetLeft + 2;
      cloneTree = document.querySelector('#clone-tree-org');

      if (cloneTree) {
        cloneTree.style.width = `${ndom.clientWidth}px`;
        cloneTree.style.opacity = '0.8';
        cloneTree.style.left = e.clientX - offsetLeft + 'px';
        cloneTree.style.top = e.clientY + 2 + 'px';
      }
    }

    function handleMoveCb(e) {
      e.preventDefault();

      if (Math.abs(e.screenX - screenX) < 5 && Math.abs(e.screenY - screenY) < 5) {
        return false;
      }

      if (!hasRender) {
        hasRender = true;
        moveStart(e);
      }

      if (l && t && value) {
        if (cloneTree) {
          cloneTree.style.left = e.clientX - offsetLeft + 'px';
          cloneTree.style.top = e.clientY + 2 + 'px';
        }

        handleEmit('move');
        return;
      }

      if (l && value) {
        el.style.left = e.clientX - offsetLeft + 'px';
        handleEmit('move');
        return;
      }

      if (t && value) {
        el.style.top = e.clientY + 'px';
        handleEmit('move');
      }
    }

    function handleUpCb(e) {
      document.removeEventListener('mousemove', handleMoveCb);
      document.removeEventListener('mouseup', handleUpCb);

      if (!hasRender) {
        return;
      }

      hasRender = false;
      cloneTree = null;
      node.moving = false;
      instance.nodeMoving.value = false;
      const movingNode = document.querySelector('.tree-org-node__moving');

      if (movingNode && movingNode.contains(e.target)) {
        handleEmit('end', true);
        return false;
      }

      addChildNode(node, instance);
      handleEmit('end', false);
    }

    function handleEmit(type, isSelf) {
      if (type === 'start') {
        typeof handleStart === 'function' && handleStart(node);
        return;
      }

      if (type === 'move') {
        typeof handleMove === 'function' && handleMove(node);
        return;
      }

      if (type === 'end') {
        typeof handleEnd === 'function' && handleEnd(node, isSelf);
      }
    }
  }

};
/* harmony default export */ var directives_drag = (drag);
// CONCATENATED MODULE: ./src/components/node/index.ts
// 功能插件



const EVENTS = {
  onClick: 'onNodeClick',
  onDblclick: 'onNodeDbclick',
  onContextmenu: 'onNodeContextmenu',
  onMouseenter: 'onNodeMouseenter',
  onMouseleave: 'onNodeMouseleave'
};

function createListener(handler, data) {
  if (typeof handler === 'function') {
    return function (e) {
      const target = e.target;
      if (target.className.indexOf('org-tree-node-btn') > -1) return;
      handler(e, data);
    };
  }
} // 判断是否叶子节点


const isLeaf = (data, prop) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0);
}; // 创建 node 节点


const renderNode = (h, data, context, root) => {
  const {
    attrs
  } = context;
  const cls = ['tree-org-node'];
  const childNodes = [];
  const defaultProps = attrs.props;
  const children = data[defaultProps.children]; // const show = resolveDirective('v-show')

  if (data[defaultProps.expand] === undefined && data.$$level < attrs.defaultExpandLevel) {
    data[defaultProps.expand] = true;
  }

  const isExpand = data[defaultProps.expand]; // 如果是叶子节点则追加leaf事件

  if (isLeaf(data, defaultProps.children)) {
    cls.push('is-leaf');
  } else if (attrs.collapsable && !isExpand) {
    // 追加是否展开class
    cls.push('collapsed');
  }

  if (data.moving) {
    cls.push('tree-org-node__moving');
  } // 渲染label块


  childNodes.push(renderLabel(h, data, context, root));

  if (!attrs.collapsable || isExpand) {
    childNodes.push(renderChildren(h, children, context, data.$$level));
  }

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('div', {
    class: cls,
    key: data[defaultProps.id]
  }, childNodes), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !data.hidden]]);
}; // 创建展开折叠按钮

const renderBtn = (h, data, context) => {
  const {
    attrs
  } = context;
  const expandHandler = attrs.onOnExpand;
  const cls = ['tree-org-node__expand'];
  const defaultProps = attrs.props;

  if (data[defaultProps.expand]) {
    cls.push('expanded');
  }

  const children = [];

  if (context.slots.expand) {
    children.push(context.slots.expand({
      node: data
    }));
  } else {
    children.push(h('span', {
      class: 'tree-org-node__expand-btn'
    }));
  }

  return h('span', {
    class: cls,
    onClick: e => {
      e.stopPropagation();
      expandHandler && expandHandler(e, data);
    }
  }, children);
}; // 创建 label 节点

const renderLabel = (h, data, context, root) => {
  const {
    attrs
  } = context;
  const defaultProps = attrs.props;
  const label = data[defaultProps.label];
  const renderContent = attrs.renderContent; // const { directives } = context.data

  const childNodes = [];

  if (context.slots.default) {
    childNodes.push(context.slots.default({
      node: data
    }));
  } else if (typeof renderContent === 'function') {
    utils_log.warning('scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
    const vnode = renderContent(h, data);
    vnode && childNodes.push(vnode);
  } else {
    childNodes.push(label);
  }

  if (attrs.collapsable && !isLeaf(data, defaultProps.children)) {
    childNodes.push(renderBtn(h, data, context));
  }

  const cls = ['tree-org-node__inner'];
  let {
    labelStyle,
    labelClassName,
    selectedClassName,
    selectedKey
  } = attrs;

  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data);
  }

  labelClassName && cls.push(labelClassName);
  data.className && cls.push(data.className); // add selected class and key from props

  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(data);
  }

  if (selectedKey !== undefined) {
    selectedKey = Array.isArray(selectedKey) ? selectedKey : [selectedKey];
  }

  selectedClassName && selectedKey && selectedKey.includes(data[defaultProps.id]) && cls.push(selectedClassName);
  const nodeLabelClass = ['tree-org-node__content'];

  if (root) {
    nodeLabelClass.push('is-root');
  }

  if (!data[defaultProps.label]) {
    nodeLabelClass.push('is-empty');
  }

  if (data.focused) {
    nodeLabelClass.push('is-edit');
  } // directives
  // let cloneDirs
  // if (Array.isArray(directives)) {
  //   cloneDirs = directives.map(item => {
  //     const newValue = Object.assign({ node: data }, item.value)
  //     return Object.assign({ ...item }, { value: newValue })
  //   })
  // }


  const vNodedrag = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])('nodedrag');
  const cloneDirs = [];

  if (attrs.vNodedrag && vNodedrag && !root) {
    cloneDirs.push([vNodedrag, Object.assign({
      node: data
    }, attrs.vNodedrag), '', {
      l: true,
      t: true
    }]);
  } // event handlers


  const NODEEVENTS = {};

  for (const EKEY in EVENTS) {
    if (Object.prototype.hasOwnProperty.call(EVENTS, EKEY)) {
      const EVENT = EVENTS[EKEY];
      const handler = attrs[EVENT];

      if (handler) {
        NODEEVENTS[EKEY] = createListener(handler, data);
      }
    }
  } // texterea event handles


  const focusHandler = attrs.onOnNodeFocus;
  const blurHandler = attrs.onOnNodeBlur;
  const vFocus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])('focus');
  const directives = [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], data.focused]];

  if (vFocus) {
    directives.push([vFocus, data.focused]);
  }

  return h('div', {
    class: nodeLabelClass
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('div', {
    class: cls,
    style: data.style ? data.style : labelStyle,
    ...NODEEVENTS
  }, childNodes), cloneDirs), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(h('textarea', {
    class: 'tree-org-node__textarea',
    placeholder: '请输入节点名称',
    value: data[defaultProps.label],
    onFocus: e => focusHandler && focusHandler(e, data),
    onInput: event => {
      data[defaultProps.label] = event.target.value;
    },
    onBlur: e => {
      data.focused = false;
      blurHandler && blurHandler(e, data);
    },
    onClick: e => e.stopPropagation()
  }), directives)]);
}; // 创建 node 子节点

const renderChildren = (h, list, context, level) => {
  if (Array.isArray(list) && list.length) {
    const children = list.map(item => {
      item.$$level = level + 1;
      return renderNode(h, item, context, false);
    });
    return h('div', {
      class: 'tree-org-node__children'
    }, children);
  }

  return '';
};
const TreeOrgNode = (props, context) => {
  if (!props.data) return '';
  props.data.root = !props.isClone;
  props.data.$$level = 0;
  return renderNode(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], props.data, context, true);
};
TreeOrgNode.directives = {
  // 自定义指令
  nodedrag: directives_drag
};
/* harmony default export */ var components_node = (TreeOrgNode);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tools/tools.vue?vue&type=template&id=07d7f18e

const toolsvue_type_template_id_07d7f18e_hoisted_1 = {
  class: "zm-tree-handle"
};
const toolsvue_type_template_id_07d7f18e_hoisted_2 = {
  key: 0,
  class: "zm-tree-percent"
};
const toolsvue_type_template_id_07d7f18e_hoisted_3 = ["title"];
const toolsvue_type_template_id_07d7f18e_hoisted_4 = {
  class: "zm-tree-svg"
};

const toolsvue_type_template_id_07d7f18e_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-icon"
}, "+", -1);

const _hoisted_6 = [toolsvue_type_template_id_07d7f18e_hoisted_5];

const _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-icon"
}, "-", -1);

const _hoisted_8 = [_hoisted_7];

const _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "zm-tree-restore"
}, null, -1);

const _hoisted_10 = [_hoisted_9];
const _hoisted_11 = ["title"];
const _hoisted_12 = {
  class: "zm-tree-svg"
};
function toolsvue_type_template_id_07d7f18e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", toolsvue_type_template_id_07d7f18e_hoisted_1, [_ctx.tools.scale ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", toolsvue_type_template_id_07d7f18e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.scale), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.expand ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 1,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleExpand && _ctx.handleExpand(...args)),
    title: _ctx.expandTitle,
    class: "zm-tree-handle-item"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", toolsvue_type_template_id_07d7f18e_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['iconfont', _ctx.expanded ? 'icon-collapse' : 'icon-expand'])
  }, null, 2)])], 8, toolsvue_type_template_id_07d7f18e_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.zoom ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 2,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.handleScale('out')),
    title: "放大",
    class: "zm-tree-handle-item zoom-out"
  }, _hoisted_6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.zoom ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 3,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.handleScale('in')),
    title: "缩小",
    class: "zm-tree-handle-item zoom-in"
  }, _hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.restore ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 4,
    onClick: _cache[3] || (_cache[3] = $event => _ctx.handleScale('restore')),
    title: "还原",
    class: "zm-tree-handle-item"
  }, _hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.tools.fullscreen ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 5,
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleFullscreen && _ctx.handleFullscreen(...args)),
    title: _ctx.fullTiltle,
    class: "zm-tree-handle-item"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['iconfont', _ctx.fullscreen ? 'icon-unfullscreen' : 'icon-fullscreen'])
  }, null, 2)])], 8, _hoisted_11)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/tools/tools.vue?vue&type=template&id=07d7f18e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tools/tools.vue?vue&type=script&lang=js

/* harmony default export */ var toolsvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    scale: String,
    tools: Object
  },

  setup(props, {
    emit
  }) {
    const expanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    const fullscreen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    function handleExpand() {
      expanded.value = !expanded.value;
      emit('onExpand');
    }

    function handleScale(scale) {
      if (scale === 'out') {
        emit('onScale', 0.1);
      } else if (scale === 'in') {
        emit('onScale', -0.1);
      } else {
        emit('onRestore');
      }
    }

    function handleFullscreen() {
      fullscreen.value = !fullscreen.value;
      emit('onFullscreen');
    }

    const expandTitle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return expanded.value ? '全部收起' : '全部展开';
    });
    const fullTiltle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return fullscreen.value ? '退出全屏' : '全屏';
    });
    return {
      expanded,
      fullscreen,
      expandTitle,
      fullTiltle,
      handleExpand,
      handleScale,
      handleFullscreen
    };
  }

}));
// CONCATENATED MODULE: ./src/components/tools/tools.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("d959");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/tools/tools.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(toolsvue_type_script_lang_js, [['render',toolsvue_type_template_id_07d7f18e_render]])

/* harmony default export */ var tools_tools = (__exports__);
// CONCATENATED MODULE: ./src/components/tools/index.ts

/* harmony default export */ var components_tools = (tools_tools);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/draggable/src/draggable.vue?vue&type=template&id=79ff2fba&ts=true

function draggablevue_type_template_id_79ff2fba_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.style),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      [_ctx.classNameActive]: _ctx.enabled,
      [_ctx.classNameDragging]: _ctx.dragging,
      [_ctx.classNameDraggable]: _ctx.draggable
    }, _ctx.className]),
    ref: "eleRef",
    onMousedown: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.elementMouseDown && _ctx.elementMouseDown(...args)),
    onTouchstart: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.elementTouchDown && _ctx.elementTouchDown(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 38);
}
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue?vue&type=template&id=79ff2fba&ts=true

// CONCATENATED MODULE: ./src/utils/fns.ts
function isFunction(func) {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}
function snapToGrid(grid, pendingX, pendingY, scale = 1) {
  const deltaX = Math.round(pendingX / scale / grid[0]) * grid[0];
  const deltaY = Math.round(pendingY / scale / grid[1]) * grid[1];
  return {
    deltaX,
    deltaY
  };
}
function getSize(el) {
  const rect = el.getBoundingClientRect();
  return [rect.width, rect.height];
}
function restrictToBounds(value, min, max) {
  if (value < min) {
    return min;
  }

  if (max < value) {
    return max;
  }

  return value;
}
// CONCATENATED MODULE: ./src/utils/dom.ts

function matchesSelectorToParentElements(el, selector, baseNode) {
  let node = el;
  const matchesSelectorFunc = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].find(func => node && isFunction(node[func])) || '';
  if (!isFunction(node[matchesSelectorFunc])) return false;

  do {
    if (node[matchesSelectorFunc](selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}
function getComputedSize($el) {
  const style = window.getComputedStyle($el);
  return [parseFloat(style.getPropertyValue('width')), parseFloat(style.getPropertyValue('height'))];
}
const addEvent = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
/* istanbul ignore next */

const removeEvent = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
// CONCATENATED MODULE: ./src/components/draggable/src/use-draggable.ts



const useDraggable = (props, {
  emit
}, refs) => {
  const events = {
    mouse: {
      start: 'mousedown',
      move: 'mousemove',
      stop: 'mouseup'
    },
    touch: {
      start: 'touchstart',
      move: 'touchmove',
      stop: 'touchend'
    }
  };
  const userSelectNone = {
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none'
  };
  const userSelectAuto = {
    userSelect: 'auto',
    MozUserSelect: 'auto',
    WebkitUserSelect: 'auto',
    MsUserSelect: 'auto'
  };
  let eventsFor = events.mouse;
  const left = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.x);
  const top = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.y);
  const zIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.z);
  const enabled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.active);
  const dragging = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const right = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const bottom = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const width = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const height = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentHeight = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  let mouseClickPosition = {};
  let bounds = {};

  function resetBoundsAndMouseState() {
    mouseClickPosition = {
      mouseX: 0,
      mouseY: 0,
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    bounds = {
      minLeft: -Infinity,
      maxLeft: Infinity,
      minRight: -Infinity,
      maxRight: Infinity,
      minTop: -Infinity,
      maxTop: Infinity,
      minBottom: -Infinity,
      maxBottom: Infinity
    };
  }

  function checkParentSize() {
    if (props.parent) {
      const [newParentWidth, newParentHeight] = getParentSize();
      parentWidth.value = newParentWidth || 0;
      parentHeight.value = newParentHeight || 0;
    }
  }

  function getParentSize() {
    if (props.parent && refs.eleRef.value) {
      const style = window.getComputedStyle(refs.eleRef.value.parentNode, null);
      return [parseInt(style.getPropertyValue('width'), 10), parseInt(style.getPropertyValue('height'), 10)];
    }

    return [0, 0];
  }

  function elementTouchDown(e) {
    // e.stopPropagation()
    eventsFor = events.touch;
    elementDown(e);
  }

  function elementMouseDown(e) {
    // e.stopPropagation()
    eventsFor = events.mouse;
    elementDown(e);
  }

  function elementDown(e) {
    if (e instanceof MouseEvent && e.which !== 1) {
      return;
    }

    const target = e.target || e.srcElement;

    if (target && refs.eleRef.value && refs.eleRef.value.contains(target)) {
      if (props.dragCancel && matchesSelectorToParentElements(target, props.dragCancel, refs.eleRef.value)) {
        dragging.value = false;
        return;
      }

      if (!enabled.value) {
        enabled.value = true;
        emit('activated');
        emit('update:active', true);
      }

      if (props.draggable) {
        dragging.value = true;
      }

      if (e instanceof MouseEvent) {
        mouseClickPosition.mouseX = e.pageX;
        mouseClickPosition.mouseY = e.pageY;
      } else {
        mouseClickPosition.mouseX = e.touches[0].pageX;
        mouseClickPosition.mouseY = e.touches[0].pageY;
      }

      mouseClickPosition.left = left.value;
      mouseClickPosition.right = right.value;
      mouseClickPosition.top = top.value;
      mouseClickPosition.bottom = bottom.value;

      if (props.parent) {
        bounds = calcDragLimits();
      }

      addEvent(document.documentElement, eventsFor.move, move);
      addEvent(document.documentElement, eventsFor.stop, handleUp);
    }
  }

  function calcDragLimits() {
    const grid = props.grid;
    return {
      minLeft: left.value % grid[0],
      maxLeft: Math.floor((parentWidth.value - width.value - left.value) / grid[0]) * grid[0] + left.value,
      minRight: right.value % grid[0],
      maxRight: Math.floor((parentWidth.value - width.value - right.value) / grid[0]) * grid[0] + right.value,
      minTop: top.value % grid[1],
      maxTop: Math.floor((parentHeight.value - height.value - top.value) / grid[1]) * grid[1] + top.value,
      minBottom: bottom.value % grid[1],
      maxBottom: Math.floor((parentHeight.value - height.value - bottom.value) / grid[1]) * grid[1] + bottom.value
    };
  }

  function deselect(e) {
    const target = e.target || e.srcElement;

    if (refs.eleRef.value && !refs.eleRef.value.contains(target)) {
      if (enabled.value && !props.preventDeactivation) {
        enabled.value = false;
        emit('deactivated');
        emit('update:active', false);
      }
    } // resetBoundsAndMouseState()

  }

  function move(e) {
    if (dragging.value) {
      handleDrag(e);
    }
  }

  function handleDrag(e) {
    const axis = props.axis;
    const grid = props.grid;
    let pageX = 0;
    let pageY = 0;

    if (e instanceof MouseEvent) {
      pageX = e.pageX;
      pageY = e.pageY;
    } else {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }

    const tmpDeltaX = axis && axis !== 'y' ? mouseClickPosition.mouseX - pageX : 0;
    const tmpDeltaY = axis && axis !== 'x' ? mouseClickPosition.mouseY - pageY : 0;
    const {
      deltaX,
      deltaY
    } = snapToGrid(grid, tmpDeltaX, tmpDeltaY, props.scale);
    const lf = restrictToBounds(mouseClickPosition.left - deltaX, bounds.minLeft, bounds.maxLeft);
    const tp = restrictToBounds(mouseClickPosition.top - deltaY, bounds.minTop, bounds.maxTop);
    const rt = restrictToBounds(mouseClickPosition.right + deltaX, bounds.minRight, bounds.maxRight);
    const bt = restrictToBounds(mouseClickPosition.bottom + deltaY, bounds.minBottom, bounds.maxBottom);
    left.value = lf;
    top.value = tp;
    right.value = rt;
    bottom.value = bt;
    emit('dragging', left.value, top.value);
  }

  function moveHorizontally(val) {
    const {
      deltaX
    } = snapToGrid(props.grid, val, top.value, props.scale);
    const lf = restrictToBounds(deltaX, bounds.minLeft, bounds.maxLeft);
    left.value = lf;
    right.value = parentWidth.value - width.value - lf;
  }

  function moveVertically(val) {
    const {
      deltaY
    } = snapToGrid(props.grid, left.value, val, props.scale);
    const tp = restrictToBounds(deltaY, bounds.minTop, bounds.maxTop);
    top.value = tp;
    bottom.value = parentHeight.value - height.value - tp;
  }

  function handleUp() {
    resetBoundsAndMouseState();

    if (dragging.value) {
      dragging.value = false;
      emit('dragstop', left.value, top.value);
    }
  }

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
    resetBoundsAndMouseState();
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    if (!props.enableNativeDrag && refs.eleRef.value) {
      refs.eleRef.value.ondragstart = () => false;
    }

    const [pw, ph] = getParentSize();
    parentWidth.value = pw;
    parentHeight.value = ph;

    if (refs.eleRef.value) {
      const [elWidth, elHeight] = getComputedSize(refs.eleRef.value);
      width.value = elWidth;
      height.value = elHeight;
      right.value = parentWidth.value - width.value - left.value;
      bottom.value = parentHeight.value - height.value - top.value;
    }

    addEvent(document.documentElement, 'mousedown', deselect);
    addEvent(document.documentElement, 'touchend touchcancel', deselect);
    addEvent(window, 'resize', checkParentSize);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    removeEvent(document.documentElement, 'mousedown', deselect);
    removeEvent(document.documentElement, 'touchstart', handleUp);
    removeEvent(document.documentElement, 'mousemove', move);
    removeEvent(document.documentElement, 'touchmove', move);
    removeEvent(document.documentElement, 'mouseup', handleUp);
    removeEvent(document.documentElement, 'touchend touchcancel', deselect);
    removeEvent(window, 'resize', checkParentSize);
  });
  const style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      transform: `translate(${left.value}px, ${top.value}px)`,
      zIndex: zIndex.value,
      ...(dragging.value && props.disableUserSelect ? userSelectNone : userSelectAuto)
    };
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.active, active => {
    enabled.value = active;

    if (active) {
      emit('activated');
    } else {
      emit('deactivated');
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.z, value => {
    if (value >= 0 || value === 'auto') {
      zIndex.value = value;
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.x, value => {
    if (dragging.value) {
      return;
    }

    if (props.parent) {
      bounds = calcDragLimits();
    }

    moveHorizontally(value);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.y, value => {
    if (dragging.value) {
      return;
    }

    if (props.parent) {
      bounds = calcDragLimits();
    }

    moveVertically(value);
  });
  return {
    enabled,
    dragging,
    style,
    resetBoundsAndMouseState,
    elementTouchDown,
    elementMouseDown
  };
};
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__("9ff4");

// CONCATENATED MODULE: ./src/utils/props.ts



const wrapperKey = Symbol('wrapper');
const propKey = '__elPropsReservedKey';
/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */

function buildProp(option, key) {
  // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
  if (!Object(shared_esm_bundler["a" /* isObject */])(option) || !!option[propKey]) return option;
  const {
    values,
    required,
    default: defaultValue,
    type,
    validator
  } = option;

  const _validator = values || validator ? val => {
    let valid = false;
    let allowedValues = [];

    if (values) {
      allowedValues = [...values, defaultValue];
      valid = valid || allowedValues.includes(val);
    }

    if (validator) valid = valid || validator(val);

    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map(value => JSON.stringify(value)).join(', ');
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["warn"])(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }

    return valid;
  } : undefined;

  return {
    type: typeof type === 'object' && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    validator: _validator,
    [propKey]: true,
    default: defaultValue,
    required: !!required
  };
}
const buildProps = props => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
const definePropType = val => ({
  [wrapperKey]: val
});
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.ts


const draggableProps = buildProps({
  className: {
    type: String,
    default: 'zm-draggable'
  },
  classNameDraggable: {
    type: String,
    default: 'draggable'
  },
  classNameDragging: {
    type: String,
    default: 'dragging'
  },
  classNameActive: {
    type: String,
    default: 'active'
  },
  disableUserSelect: {
    type: Boolean,
    default: true
  },
  enableNativeDrag: {
    type: Boolean,
    default: false
  },
  preventDeactivation: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: true
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  z: {
    type: [String, Number],
    default: 'auto',
    validator: val => typeof val === 'string' ? val === 'auto' : val >= 0
  },
  dragCancel: String,
  axis: {
    type: String,
    default: 'both',
    validator: val => ['x', 'y', 'both'].includes(val)
  },
  grid: {
    type: Array,
    default: () => [1, 1]
  },
  parent: {
    type: Boolean,
    default: false
  },
  scale: {
    type: Number,
    default: 1,
    validator: val => val > 0
  }
});
const draggableEmits = {
  activated: () => true,
  deactivated: () => true,
  dragging: (x, y) => isNumber(x) && isNumber(y),
  dragstop: (x, y) => isNumber(x) && isNumber(y),
  'update:active': value => typeof value === 'boolean'
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/draggable/src/draggable.vue?vue&type=script&lang=ts



/* harmony default export */ var draggablevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  replace: true,
  name: 'Draggable',
  props: draggableProps,
  emits: draggableEmits,

  setup(props, ctx) {
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const draggable = useDraggable(props, ctx, {
      eleRef
    });
    return {
      top,
      eleRef,
      ...draggable
    };
  }

}));
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/draggable/src/draggable.vue





const draggable_exports_ = /*#__PURE__*/exportHelper_default()(draggablevue_type_script_lang_ts, [['render',draggablevue_type_template_id_79ff2fba_ts_true_render]])

/* harmony default export */ var src_draggable = (draggable_exports_);
// CONCATENATED MODULE: ./src/components/draggable/index.ts

/* harmony default export */ var components_draggable = (src_draggable);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/clone-org/clone-org.vue?vue&type=template&id=5538cbc6&ts=true

const clone_orgvue_type_template_id_5538cbc6_ts_true_hoisted_1 = {
  id: "clone-tree-org",
  class: "clone-tree-org tree-org"
};
function clone_orgvue_type_template_id_5538cbc6_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_org_node = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("tree-org-node");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", clone_orgvue_type_template_id_5538cbc6_ts_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_tree_org_node, {
    data: _ctx.data,
    props: _ctx.props,
    isClone: false,
    horizontal: _ctx.horizontal,
    labelStyle: _ctx.labelStyle,
    collapsable: _ctx.collapsable,
    renderContent: _ctx.renderContent,
    labelClassName: _ctx.labelClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
      node: node
    })]),
    expand: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(({
      node
    }) => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "expand", {
      node: node
    })]),
    _: 3
  }, 8, ["data", "props", "horizontal", "labelStyle", "collapsable", "renderContent", "labelClassName"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.modelValue]])]);
}
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue?vue&type=template&id=5538cbc6&ts=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/clone-org/clone-org.vue?vue&type=script&lang=ts



const cloneorgProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType(Object)
  },
  modelValue: Boolean,
  horizontal: Boolean,
  selectedKey: String,
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  }
});
/* harmony default export */ var clone_orgvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    TreeOrgNode: components_node
  },
  props: cloneorgProps
}));
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/clone-org/clone-org.vue





const clone_org_exports_ = /*#__PURE__*/exportHelper_default()(clone_orgvue_type_script_lang_ts, [['render',clone_orgvue_type_template_id_5538cbc6_ts_true_render]])

/* harmony default export */ var clone_org = (clone_org_exports_);
// CONCATENATED MODULE: ./src/components/clone-org/index.ts

/* harmony default export */ var components_clone_org = (clone_org);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/contextmenu/src/contextmenu.vue?vue&type=template&id=c9139626&ts=true

const contextmenuvue_type_template_id_c9139626_ts_true_hoisted_1 = ["action"];
function contextmenuvue_type_template_id_c9139626_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "dialog-fade",
    onAfterEnter: _ctx.afterEnter,
    onAfterLeave: _ctx.afterLeave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.position),
      onClick: _cache[1] || (_cache[1] = //@ts-ignore
      (...args) => _ctx.handleMenu && _ctx.handleMenu(...args)),
      ref: "eleRef",
      class: "zm-tree-contextmenu"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.menus, item => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.editable || !['add', 'edit', 'delete'].includes(item.command) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
        class: "zm-tree-menu-item",
        action: item.command,
        key: item.command
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.name), 9, contextmenuvue_type_template_id_c9139626_ts_true_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
    }), 256))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
      class: "copy-textarea",
      ref: "inputRef",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.copyText = $event)
    }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.copyText]])], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.modelValue]])]),
    _: 1
  }, 8, ["onAfterEnter", "onAfterLeave"])]);
}
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue?vue&type=template&id=c9139626&ts=true

// CONCATENATED MODULE: ./src/utils/constants.ts
const UPDATE_MODEL_EVENT = 'update:modelValue';
// CONCATENATED MODULE: ./src/components/contextmenu/src/use-contextmenu.ts



const useContextmenu = (defaultProps, {
  emit
}, refs) => {
  const copyText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(''); // 递归遍历实现

  function getNodeById(data, key, value) {
    if (data[key] === value) {
      return data;
    } else if (Array.isArray(data.children)) {
      const list = data.children;

      for (let i = 0, len = list.length; i < len; i++) {
        const row = list[i];
        const pNode = getNodeById(row, key, value);

        if (pNode) {
          return pNode;
        }
      }
    }
  } // 移除节点


  function handleDelete() {
    const {
      props,
      data,
      node
    } = defaultProps;

    if (defaultProps.nodeDelete) {
      defaultProps.nodeDelete(node);
      return;
    }

    if (node.root) {
      utils_log.pretty('[提示] ', '根节点不允许删除', 'danger');
      return;
    }

    const {
      id,
      pid,
      children
    } = props;
    const oldPaNode = getNodeById(data, id, node[pid]);

    if (oldPaNode) {
      const list = oldPaNode[children];

      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i][id] === node[id]) {
          list.splice(i, 1);
          emit('onNodeDelete', node);
          break;
        }
      }
    }
  }

  function handleMenu(e) {
    const el = e.target;

    if (el.className === 'zm-tree-menu-item') {
      const command = el.getAttribute('action');

      switch (command) {
        case 'copy':
          handleCopy();
          break;

        case 'add':
          handleAdd();
          break;

        case 'edit':
          handleEdit();
          break;

        case 'delete':
          handleDelete();
          break;
      }

      emit('contextmenu', {
        command,
        node: defaultProps.node
      });
      emit(UPDATE_MODEL_EVENT, false);
    }
  }

  function handleCopy() {
    if (defaultProps.nodeCopy) {
      defaultProps.nodeCopy(defaultProps.node);
      return;
    }

    copyText.value = defaultProps.node[defaultProps.props.label];
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      if (refs.inputRef && refs.inputRef.value) {
        refs.inputRef && refs.inputRef.value.select(); // 选中文本

        navigator.clipboard.writeText(copyText.value).then(function () {
          /* clipboard successfully set */
          utils_log.pretty('[提示] ', '文本复制成功', 'success');
        }, function () {
          /* clipboard write failed */
          utils_log.pretty('[错误] ', '浏览器不支持', 'danger');
        });
        emit('onNodeCopy', copyText.value);
      }
    });
  }

  function handleAdd() {
    if (defaultProps.nodeAdd) {
      defaultProps.nodeAdd(defaultProps.node);
      return;
    }

    const {
      id,
      pid,
      label,
      expand,
      children
    } = defaultProps.props;
    const {
      node
    } = defaultProps;
    const json = {
      [id]: String(new Date().getTime()),
      [pid]: node[id],
      [label]: '',
      [expand]: false,
      [children]: [],
      newNode: true,
      focused: true
    };

    if (Array.isArray(node[children])) {
      node[children].push(json);
    } else {
      node[children] = [json];
    }
  }

  function handleEdit() {
    const {
      nodeEdit,
      node
    } = defaultProps;

    if (nodeEdit) {
      nodeEdit(node);
      return;
    }

    node.focused = true;
  }

  function handleClose(e) {
    if (defaultProps.modelValue) {
      if (refs.eleRef.value && refs.eleRef.value.contains(e.target)) {
        return false;
      }

      emit('update:modelValue', false);
    }
  }

  function afterEnter() {
    emit('opened');
  }

  function afterLeave() {
    emit('closed');
  }

  const position = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      left: `${defaultProps.x}px`,
      top: `${defaultProps.y}px`
    };
  });
  const editable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return !defaultProps.disabled && !defaultProps.node.disabled;
  }); // mounted

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    document.addEventListener('mousedown', handleClose);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    document.removeEventListener('mousedown', handleClose);
  });
  return {
    position,
    editable,
    handleMenu,
    handleEdit,
    handleClose,
    afterEnter,
    afterLeave
  };
};
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenus.ts


const contextmenuProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  node: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType(Object)
  },
  x: Number,
  y: Number,
  menus: {
    type: definePropType(Array)
  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function,
  disabled: Boolean
});
const contextmenuEmits = {
  onNodeDelete: data => isObject(data),
  onNodeCopy: str => isString(str),
  contextmenu: arg => isObject(arg),
  opened: () => true,
  closed: () => true,
  'update:modelValue': value => typeof value === 'boolean'
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/contextmenu/src/contextmenu.vue?vue&type=script&lang=ts



/* harmony default export */ var contextmenuvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'Contextmenu',
  props: contextmenuProps,
  emits: contextmenuEmits,

  setup(props, ctx) {
    const inputRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const copyText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');
    const oldData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({});
    const contextmenu = useContextmenu(props, ctx, {
      inputRef,
      eleRef
    });
    return {
      eleRef,
      inputRef,
      copyText,
      oldData,
      ...contextmenu
    };
  }

}));
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/contextmenu/src/contextmenu.vue





const contextmenu_exports_ = /*#__PURE__*/exportHelper_default()(contextmenuvue_type_script_lang_ts, [['render',contextmenuvue_type_template_id_c9139626_ts_true_render]])

/* harmony default export */ var src_contextmenu = (contextmenu_exports_);
// CONCATENATED MODULE: ./src/components/contextmenu/index.ts

/* harmony default export */ var components_contextmenu = (src_contextmenu);
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.ts


const menus = [{
  name: '复制文本',
  command: 'copy'
}, {
  name: '新增节点',
  command: 'add'
}, {
  name: '编辑节点',
  command: 'edit'
}, {
  name: '删除节点',
  command: 'delete'
}];
const treeProps = buildProps({
  data: {
    type: Object,
    required: true
  },
  props: {
    type: definePropType(Object),
    default: () => ({
      id: 'id',
      pid: 'pid',
      label: 'label',
      expand: 'expand',
      children: 'children'
    })
  },
  toolBar: {
    type: [Object, Boolean],
    default: () => ({
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    })
  },
  disabled: {
    // 是否禁用编辑
    type: Boolean,
    default: false
  },
  scalable: {
    // 是否可缩放
    type: Boolean,
    default: true
  },
  draggable: {
    // 是否可拖拽移动位置
    type: Boolean,
    default: true
  },
  draggableOnNode: {
    // 是否可拖拽节点移动位置
    type: Boolean,
    default: false
  },
  nodeDraggable: {
    // 节点是否可拖拽
    type: Boolean,
    default: true
  },
  cloneNodeDrag: {
    // 拷贝并拖拽节点
    type: Boolean,
    default: true
  },
  onlyOneNode: {
    // 是否仅拖动当前节点
    type: Boolean,
    default: true
  },
  clickDelay: {
    // 是否仅拖动当前节点
    type: Number,
    default: 260
  },
  defaultExpandLevel: Number,
  nodeDragStart: Function,
  nodeDraging: Function,
  nodeDragEnd: Function,
  horizontal: Boolean,
  selectedKey: {
    type: [Array, String, Number]
  },
  collapsable: Boolean,
  renderContent: Function,
  labelStyle: Object,
  labelClassName: {
    type: [Function, String]
  },
  selectedClassName: {
    type: [Function, String]
  },
  defineMenus: {
    type: definePropType(Array),

    default() {
      return menus;
    }

  },
  nodeAdd: Function,
  nodeDelete: Function,
  nodeEdit: Function,
  nodeCopy: Function
});
const treeEmits = {
  'on-drag': ({
    x,
    y
  }) => isNumber(x) && isNumber(y),
  'on-drag-stop': ({
    x,
    y
  }) => isNumber(x) && isNumber(y),
  'on-zoom': val => isNumber(val),
  'on-expand': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-node-blur': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-node-click': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-node-dblclick': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-node-mouseenter': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-node-mouseleave': (e, data) => e instanceof MouseEvent && isObject(data),
  'on-contextmenu': data => isObject(data),
  'on-node-copy': str => isString(str),
  'on-node-delete': node => isObject(node),
  'on-node-focus': (e, data) => e instanceof MouseEvent && isObject(data)
};
// CONCATENATED MODULE: ./src/components/tree-org/src/use-tree.ts

const useTree = (props, {
  emit
}, refs) => {
  const left = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const top = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const autoDragging = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function onDrag(x, y) {
    autoDragging.value = false;
    left.value = x;
    top.value = y;
    emit('on-drag', {
      x,
      y
    });
  }

  function onDragStop(x, y) {
    // 防止拖拽出边界
    const zoom = refs.zoomRef.value;
    const orgchart = refs.treeRef.value;
    const maxX = zoom.clientWidth / 2;
    const maxY = zoom.clientHeight / 2;
    let minY = zoom.clientHeight - orgchart.clientHeight;
    let minX = zoom.clientWidth - orgchart.clientWidth;

    if (minY > 0) {
      minY = 0;
    }

    if (minX > 0) {
      minX = 0;
    }

    if (x > maxX) {
      left.value = maxX;
    } else if (x < minX) {
      left.value = minX;
    } else {
      left.value = x;
    }

    if (y < minY) {
      top.value = minY;
    } else if (y > maxY) {
      top.value = maxY;
    } else {
      top.value = y;
    }

    emit('on-drag-stop', {
      x,
      y
    });
  }

  const nodeMoving = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const parenNode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    value: {}
  });

  function nodeMouseenter(e, data) {
    if (nodeMoving.value) {
      parenNode.value = data;
    }

    emit('on-node-mouseenter', e, data);
    return true;
  }

  function nodeMouseleave(e, data) {
    if (nodeMoving.value) {
      parenNode.value = null;
    }

    emit('on-node-mouseleave', e, data);
    return true;
  }

  const contextmenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  const menuX = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const menuY = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const menuData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    data: {}
  });

  function nodeContextmenu(e, data) {
    e.stopPropagation();
    e.preventDefault();
    contextmenu.value = true;
    menuX.value = e.clientX;
    menuY.value = e.clientY;
    menuData.data = data;
  }

  const scale = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(1);

  function zoomWheel(e) {
    if (!props.scalable) return;
    e.preventDefault(); // 鼠标滚轮缩放

    if (e.deltaY < 0) {
      zoomOrgchart(0.1);
    } else {
      zoomOrgchart(-0.1);
    }

    emit('on-zoom', scale.value);
  }

  function zoomOrgchart(zoom) {
    if (!props.scalable) return;
    const value = Number((Number(scale.value) + zoom).toFixed(1));

    if (zoom > 0) {
      scale.value = Math.min(3, value);
    } else {
      scale.value = Math.max(0.3, value);
    }
  }

  function restoreOrgchart() {
    scale.value = 1;
    left.value = 0;
    top.value = 0;
  }

  function autoDrag(el, lf, tp) {
    // 计算偏移量，保持根节点相对页面位置不变
    autoDragging.value = true;
    const x = el.offsetLeft - lf;
    const y = el.offsetTop - tp;
    left.value -= x;
    top.value -= y;
  }

  let timer;

  function handleClick(e, data) {
    // 取消上次延时未执行的方法
    clearTimeout(timer); // 执行延时

    timer = setTimeout(() => {
      // 此处为单击事件要执行的代码
      emit('on-node-click', e, data);
    }, props.clickDelay);
  }

  function handleDblclick(e, data) {
    // 取消上次延时未执行的方法
    clearTimeout(timer); // 此处为单击事件要执行的代码

    emit('on-node-dblclick', e, data);
  }

  function handleExpand(e, data) {
    e.stopPropagation();
    const el = document.querySelector('.is-root');

    if (el) {
      const left = el.offsetLeft;
      const top = el.offsetTop;

      if ('expand' in data) {
        data.expand = !data.expand;

        if (!data.expand && data.children) {
          collapse(data.children);
        }
      } else {
        data.expand = true;
      }

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        autoDrag(el, left, top);
      });
      emit('on-expand', e, data);
    }
  }

  const keys = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(Object.assign({
    id: 'id',
    pid: 'pid',
    label: 'label',
    expand: 'expand',
    children: 'children'
  }, props.props));

  function handleBlur(e, data) {
    const {
      children,
      id,
      label
    } = keys;
    const childNodes = menuData.data[children] || [];

    for (let i = childNodes.length; i > 0; i--) {
      const item = childNodes[i - 1];

      if (item[id] === '' && item[label] === '') {
        childNodes.splice(i - 1, 1);
        break;
      }
    }

    emit('on-node-blur', e, data);
  }

  const fullscreen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function handleFullscreen() {
    fullscreen.value = !fullscreen.value;

    if (fullscreen.value) {
      launchIntoFullscreen();
    } else {
      exitFullscreen();
    }
  }

  function launchIntoFullscreen() {
    // 全屏
    const element = refs.eleRef.value;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }

  function exitFullscreen() {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function collapse(list) {
    list.forEach(child => {
      if (child.expand) {
        child.expand = false;
      }

      child.children && collapse(child.children);
    });
  }

  const expanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  function expandChange() {
    expanded.value = !expanded.value;
    toggleExpand(props.data, expanded.value);

    if (!expanded.value) {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        onDragStop(left.value, top.value);
      });
    }
  }

  function toggleExpand(data, val) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        item.expand = val;

        if (item.children) {
          toggleExpand(item.children, val);
        }
      });
    } else {
      data.expand = val;

      if (data.children) {
        toggleExpand(data.children, val);
      }
    }
  }

  const zoomStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return {
      width: `${100 / scale.value}%`,
      height: `${100 / scale.value}%`,
      transform: `scale(${scale.value})`
    };
  });
  const zoomPercent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return `${Math.round(scale.value * 100)}%`;
  });
  const dragCancel = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return props.draggableOnNode || !props.nodeDraggable ? '' : '.tree-org-node-label';
  });
  const expandTitle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点';
  });
  const fullTiltle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    return expanded.value ? '收起全部节点' : '展开全部节点';
  });
  const cloneData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    data: {}
  });
  const nodeargs = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
    const {
      cloneNodeDrag,
      onlyOneNode
    } = props;
    return {
      drag: props.nodeDraggable,
      dragData: {
        keys,
        nodeMoving,
        parenNode,
        cloneNodeDrag,
        onlyOneNode,
        contextmenu,
        cloneData
      },
      handleStart: props.nodeDragStart,
      handleMove: props.nodeDraging,
      handleEnd: props.nodeDragEnd
    };
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.horizontal, () => {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      onDragStop(left.value, top.value);
    });
  });
  const tools = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    visible: true,
    data: {
      expand: true,
      scale: true,
      zoom: true,
      restore: true,
      fullscreen: true
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
    if (typeof props.toolBar === 'object') {
      Object.assign(tools.data, props.toolBar);
    } else if (!props.toolBar) {
      tools.visible = false;
    }
  });
  return {
    keys,
    left,
    top,
    menuX,
    menuY,
    nodeMoving,
    zoomStyle,
    tools,
    zoomPercent,
    dragCancel,
    expandTitle,
    fullTiltle,
    nodeargs,
    expanded,
    fullscreen,
    autoDragging,
    contextmenu,
    menuData,
    cloneData,
    zoomWheel,
    onDrag,
    onDragStop,
    expandChange,
    handleFullscreen,
    zoomOrgchart,
    restoreOrgchart,
    handleExpand,
    nodeMouseenter,
    nodeMouseleave,
    nodeContextmenu,
    handleBlur,
    handleClick,
    handleDblclick
  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tree-org/src/tree.vue?vue&type=script&lang=ts









/* harmony default export */ var treevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'vue3TreeOrg',
  components: {
    Tools: components_tools,
    CloneOrg: components_clone_org,
    Draggable: components_draggable,
    Contextmenu: components_contextmenu,
    TreeOrgNode: components_node
  },
  directives: {
    nodedrag: directives_drag
  },
  props: treeProps,
  emits: treeEmits,

  setup(props, ctx) {
    const eleRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const treeRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const zoomRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const treeData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(props.data);
    const treeOrg = useTree(props, ctx, {
      eleRef,
      treeRef,
      zoomRef
    });
    return {
      eleRef,
      treeRef,
      zoomRef,
      treeData,
      ...treeOrg
    };
  }

}));
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/tree-org/src/tree.vue





const tree_exports_ = /*#__PURE__*/exportHelper_default()(treevue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var tree = (tree_exports_);
// CONCATENATED MODULE: ./src/components/tree-org/index.ts

/* istanbul ignore next */

tree.install = function (app) {
  app.component(tree.name, tree);
};

/* harmony default export */ var tree_org = (tree);
// CONCATENATED MODULE: ./src/index.ts
// 核心插件
 // 组件

 // import '@/styles/index.scss'

const components = [tree_org];

const install = function (app) {
  components.forEach(component => {
    app.component(component.name, component);
  });
  app.use(core);
  app.directive('focus', {
    mounted: function (el, {
      value
    }) {
      if (value) {
        el.focus();
      }
    },

    updated(el, {
      value
    }) {
      if (value) {
        el.focus();
      }
    }

  });
};

/* harmony default export */ var src_0 = ({
  install,
  Vue3TreeOrg: tree_org
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vue3-tree-org.umd.js.map