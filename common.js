(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "RRGy":
/*!*************************************************!*\
  !*** ./src/app/shared/emptyContentValidator.ts ***!
  \*************************************************/
/*! exports provided: emptyContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyContent", function() { return emptyContent; });
function emptyContent(control) {
    if (control.value) {
        if (control.value.trim() == '')
            return { invalidContetn: true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map