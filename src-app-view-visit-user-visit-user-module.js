(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-visit-user-visit-user-module"],{

/***/ "2gma":
/*!************************************************!*\
  !*** ./src/app/services/visit-user.service.ts ***!
  \************************************************/
/*! exports provided: VisitUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitUserService", function() { return VisitUserService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VisitUserService {
    constructor(http) {
        this.http = http;
        this.userProfile = [];
        this.userPosts = [];
        this.following = [];
        this.followers = [];
        this.skeltonLoading = true;
        this.userProfileLoading = true;
        this.friendsSkeltonLoading = true;
        this.skeltonLoadingFollowers = true;
        this.skeltonLoadingPhotos = true;
    }
    getuserProfile(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/profile/${id}`);
    }
    getUserFollowing(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/userFollowings/${id}`);
    }
    getUserFollowers(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/userFollowers/${id}`);
    }
    getUserPhotos(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/allUserPhotos/${id}`);
    }
}
VisitUserService.ɵfac = function VisitUserService_Factory(t) { return new (t || VisitUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VisitUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VisitUserService, factory: VisitUserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5/eo":
/*!**********************************************************************!*\
  !*** ./src/app/view/visit-user/visit-about/visit-about.component.ts ***!
  \**********************************************************************/
/*! exports provided: VisitAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitAboutComponent", function() { return VisitAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function VisitAboutComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitAboutComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.choseCategory(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r8.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.name);
} }
function VisitAboutComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-female": a0, "fa-male": a1 }; };
function VisitAboutComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, "about.basicInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "about.firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, "about.lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, (ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.gender) == "female", (ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.gender) == "male"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 22, ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.gender));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 24, "about.gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](41, 26, ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.birthDate, "longDate", undefined, ctx_r2.lang), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 31, "about.birthDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "about.email"));
} }
function VisitAboutComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "about.worksAt"), " ", ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.work, " ");
} }
function VisitAboutComponent_div_13_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "about.noWork"));
} }
function VisitAboutComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitAboutComponent_div_13_div_4_Template, 5, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitAboutComponent_div_13_ng_template_5_Template, 5, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "about.work"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.visitUserService.userProfile == null ? null : ctx_r3.visitUserService.userProfile.work)("ngIfElse", _r13);
} }
function VisitAboutComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "about.livesIn"), " ", ctx_r15.visitUserService.userProfile == null ? null : ctx_r15.visitUserService.userProfile.location, "");
} }
function VisitAboutComponent_div_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "about.noPlaceToShow"));
} }
function VisitAboutComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitAboutComponent_div_14_div_4_Template, 6, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitAboutComponent_div_14_ng_template_5_Template, 5, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "about.placeLived"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.visitUserService.userProfile == null ? null : ctx_r4.visitUserService.userProfile.location)("ngIfElse", _r16);
} }
function VisitAboutComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "about.studiedAt"), " ", ctx_r18.visitUserService.userProfile == null ? null : ctx_r18.visitUserService.userProfile.study, "");
} }
function VisitAboutComponent_div_15_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "about.noStudy"));
} }
function VisitAboutComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitAboutComponent_div_15_div_4_Template, 7, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitAboutComponent_div_15_ng_template_5_Template, 5, 3, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "about.edu"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.visitUserService.userProfile == null ? null : ctx_r5.visitUserService.userProfile.study)("ngIfElse", _r19);
} }
function VisitAboutComponent_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r21.visitUserService.userProfile == null ? null : ctx_r21.visitUserService.userProfile.socialCondition));
} }
function VisitAboutComponent_div_16_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "about.noRelation"));
} }
function VisitAboutComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitAboutComponent_div_16_div_4_Template, 6, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitAboutComponent_div_16_ng_template_5_Template, 5, 3, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "about.relation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.visitUserService.userProfile == null ? null : ctx_r6.visitUserService.userProfile.socialCondition)("ngIfElse", _r22);
} }
function VisitAboutComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r24.visitUserService.userProfile == null ? null : ctx_r24.visitUserService.userProfile.religion), "");
} }
function VisitAboutComponent_div_17_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "about.noReligion"));
} }
function VisitAboutComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitAboutComponent_div_17_div_4_Template, 6, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitAboutComponent_div_17_ng_template_5_Template, 5, 3, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "about.Religion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.visitUserService.userProfile == null ? null : ctx_r7.visitUserService.userProfile.religion)("ngIfElse", _r25);
} }
class VisitAboutComponent {
    constructor(visitUserService, userProfilesService, translate) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
        this.translate = translate;
        this.personalSub = translate.get("about.personalInfo").subscribe(res => this.personalInfo = res);
    }
    get lang() { return localStorage.getItem('currenLanguage') || 'en'; }
    ngOnInit() {
    }
    choseCategory(index) {
        for (let i = 0; i < this.personalInfo.length; i++) {
            this.personalInfo[i].status = false;
        }
        this.personalInfo[index].status = true;
    }
    ngOnDestroy() {
        if (this.personalSub)
            this.personalSub.unsubscribe();
    }
}
VisitAboutComponent.ɵfac = function VisitAboutComponent_Factory(t) { return new (t || VisitAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
VisitAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitAboutComponent, selectors: [["app-visit-about"]], decls: 18, vars: 13, consts: [[1, "container", "aboutParent"], [1, "paddinggx", "row"], [1, "col-md-4", "mb-4"], [1, "rounded-lg", "left", "h-100", "bg-white", "p-3"], [1, "font-weight-bold", "mb-2"], [1, "list-unstyled", "p-0"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "mb-4"], [1, "rounded-lg", "bg-white", "rightParent", "p-3", "h-100", "position-relative"], ["class", "aboutLoading  d-flex align-items-center justify-content-center", 4, "ngIf"], ["class", "imgsiz right", 4, "ngIf"], ["class", "right", 4, "ngIf"], [3, "click"], [1, "aboutLoading", "d-flex", "align-items-center", "justify-content-center"], [1, "lds-ring"], [1, "imgsiz", "right"], [1, "namee", "my-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex"], [1, "fas", "fa-file-signature"], [1, "mx-3"], [1, "d-block", "mb-1"], [1, "text-secondary"], [1, "gender", "my-3"], [1, "fas", 3, "ngClass"], [1, "d-block"], [1, "birthDate", "my-3"], [1, "fas", "fa-birthday-cake"], [1, "email", "my-3"], [1, "far", "fa-envelope"], [1, "right"], [4, "ngIf", "ngIfElse"], ["work", ""], [1, "mx-2", "fas", "fa-briefcase"], [1, "font-weight-bold", "noAvailable"], [1, "fas", "fa-briefcase"], [1, "mx-2"], ["city", ""], [1, "fas", "fa-home"], ["education", ""], [1, "d-flex", "align-items-center"], ["src", "assets/education.png", "alt", "", 1, "rounded-circle"], [1, "fas", "fa-graduation-cap"], ["relation", ""], [1, "fas", "fa-heart"], ["religion", ""], [1, "fas", "fa-praying-hands"]], template: function VisitAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisitAboutComponent_li_8_Template, 2, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisitAboutComponent_div_11_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VisitAboutComponent_div_12_Template, 54, 38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VisitAboutComponent_div_13_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VisitAboutComponent_div_14_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VisitAboutComponent_div_15_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VisitAboutComponent_div_16_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VisitAboutComponent_div_17_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "about.about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personalInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfileLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[0].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[1].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[3].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[2].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[4].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalInfo[5].status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".brdr[_ngcontent-%COMP%] {\n  border-right: 1px solid #dcdada;\n}\n\n.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n.left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.left[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background-color: #E7F3FF;\n}\n\n.left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #E4E6E9;\n}\n\n.right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.right[_ngcontent-%COMP%]   .noAvailable[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #216fdb;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border: 1px solid #216fdb;\n  border-radius: 50%;\n  padding: 5px;\n  color: #216fdb;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #216fdb;\n}\n\n.right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.datee) {\n  padding: 15px 20px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  margin-bottom: 20px;\n}\n\n.right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.datee):hover {\n  border-color: black;\n}\n\n.right[_ngcontent-%COMP%]   .cancell[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n}\n\n.right[_ngcontent-%COMP%]   .cancell[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.right[_ngcontent-%COMP%]   .fa-pen[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #E4E6E9;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.right[_ngcontent-%COMP%]   .fa-pen[_ngcontent-%COMP%]:hover {\n  background-color: #d8d6d6;\n}\n\n.right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.fa-pen, .fa-plus)[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #8C939D;\n  width: 25px;\n}\n\n.imgsiz[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.aboutLoading[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 11;\n  background: white;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background-color: #263951;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #3A3B3C;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.fa-plus), .aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   .noAvailable[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   .fa-pen[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   .fa-pen[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.fa-plus) {\n  color: #8C939D;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.datee) {\n  background-color: transparent;\n  border: 1px solid #716e6e !important;\n  color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]     .mat-form-field-underline {\n  background-color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: #E4E6EB;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .rightParent[_ngcontent-%COMP%]     .mat-button-wrapper {\n  color: #E4E6EB !important;\n}\n\n.aboutParent.darkMode[_ngcontent-%COMP%]   .aboutLoading[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n\n.eduImg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50x;\n  border-radius: 50%;\n}\n\n  .cdk-overlay-pane {\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcYWJvdXQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQkFBQTtBQ0FKOztBREdJO0VBQUksZUFBQTtBQ0NSOztBREFJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQ1E7RUFDSSx5QkFBQTtBQ0NaOztBREtJO0VBQUksOEJBQUE7QUNEUjs7QURFSTtFQUFhLGNBQUE7QUNDakI7O0FEQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUFTLDBCQUFBO0FDSWpCOztBREhRO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDS1o7O0FERlk7RUFBUyxnQ0FBQTtBQ0tyQjs7QURGSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0lSOztBREhRO0VBQVMsbUJBQUE7QUNNakI7O0FESkk7RUFDSSx5QkFBQTtBQ01SOztBRExRO0VBQ0kseUJBQUE7QUNPWjs7QURKSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ01SOztBRExRO0VBQ0kseUJBQUE7QUNPWjs7QURKTTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ01WOztBREFJO0VBQUssV0FBQTtBQ0lUOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSwyQ0FBQTtBQ0tKOztBREZJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FDS1I7O0FESlE7RUFBSSxjQUFBO0FDT1o7O0FETlE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNRWjs7QURMWTtFQUNJLHlCQUFBO0FDT2hCOztBREhJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FDS1I7O0FESlE7RUFBOEIsY0FBQTtBQ090Qzs7QUROUTtFQUNJLDBDQUFBO0FDUVo7O0FEUFk7RUFBUyx5QkFBQTtBQ1VyQjs7QURSUTtFQUFpQixjQUFBO0FDV3pCOztBRFZRO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNZWjs7QURWUTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQ1laOztBRFZRO0VBQXFDLHlCQUFBO0FDYTdDOztBRFpTO0VBQWtDLGNBQUE7QUNlM0M7O0FEZFM7RUFBK0IseUJBQUE7QUNpQnhDOztBRGJJO0VBQ0ksOEJBQUE7QUNlUjs7QURaQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNlSjs7QURaSTtFQUFrQiwyQkFBQTtBQ2dCdEIiLCJmaWxlIjoidmlzaXQtYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJyZHIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGNkYWRhO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIGgyIHtwYWRkaW5nOjAgMTBweDt9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgbGkuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0YzRkY7XHJcbiAgICB9XHJcbiAgICBsaTpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgaDIge21hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDt9XHJcbiAgICAubm9BdmFpbGFibGV7Y29sb3I6IzhDOTM5RDt9XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgJjpob3ZlciB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMyMTZmZGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTZmZGI7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0Om5vdCguZGF0ZWUpIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAmOmhvdmVyIHtib3JkZXItY29sb3I6IGJsYWNrO31cclxuICAgIH1cclxuICAgIC5jYW5jZWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZhLXBlbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFNEU2RTk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ2ZDZcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaTpub3QoLmZhLXBlbiwuZmEtcGx1cykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICM4QzkzOUQ7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgfVxyXG59XHJcblxyXG5cclxuLmltZ3NpeiB7XHJcbiAgICBpbWcge3dpZHRoOiAyNXB4O31cclxufVxyXG4uYWJvdXRMb2FkaW5nICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbn1cclxuLmFib3V0UGFyZW50LmRhcmtNb2RlIHtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNFNEU2RUI7XHJcbiAgICAgICAgbGkge2NvbG9yOiAjQjhCQkJGO31cclxuICAgICAgICBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzOTUxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodFBhcmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjRTRFNkVCO1xyXG4gICAgICAgIGk6bm90KC5mYS1wbHVzKSwubm9BdmFpbGFibGUge2NvbG9yOiAjOEM5MzlEO31cclxuICAgICAgICAuZmEtcGVuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO31cclxuICAgICAgICB9XHJcbiAgICAgICAgaTpub3QoLmZhLXBsdXMpIHtjb2xvcjogIzhDOTM5RDt9XHJcbiAgICAgICAgaW5wdXQ6bm90KC5kYXRlZSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcxNmU2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI0U0RTZFQjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0LCBvcHRpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRTRFNkVCO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7YmFja2dyb3VuZC1jb2xvcjojRTRFNkVCIDt9XHJcbiAgICAgICAgIDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtjb2xvcjogI0U0RTZFQjt9XHJcbiAgICAgICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O31cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5hYm91dExvYWRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzI0MjUyNiAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuLmVkdUltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAuY2RrLW92ZXJsYXktcGFuZXttYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7fVxyXG59IiwiLmJyZHIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGNkYWRhO1xufVxuXG4ubGVmdCBoMiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5sZWZ0IGxpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sZWZ0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjE2ZmRiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdGM0ZGO1xufVxuLmxlZnQgbGk6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cblxuLnJpZ2h0IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0IC5ub0F2YWlsYWJsZSB7XG4gIGNvbG9yOiAjOEM5MzlEO1xufVxuLnJpZ2h0IHAge1xuICBjb2xvcjogIzIxNmZkYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucmlnaHQgcDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnJpZ2h0IHAgaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTZmZGI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzIxNmZkYjtcbn1cbi5yaWdodCBwIHNwYW46aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIxNmZkYjtcbn1cbi5yaWdodCBpbnB1dDpub3QoLmRhdGVlKSB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yaWdodCBpbnB1dDpub3QoLmRhdGVlKTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4ucmlnaHQgLmNhbmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xufVxuLnJpZ2h0IC5jYW5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5yaWdodCAuZmEtcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjRTRFNkU5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmlnaHQgLmZhLXBlbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ2ZDY7XG59XG4ucmlnaHQgaTpub3QoLmZhLXBlbiwgLmZhLXBsdXMpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzhDOTM5RDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5pbWdzaXogaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5hYm91dExvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmctd2hpdGUge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuXG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmFib3V0UGFyZW50LmRhcmtNb2RlIC5sZWZ0IGxpIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLmxlZnQgbGkuYWN0aXZlIHtcbiAgY29sb3I6ICMyMTZmZGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjM5NTE7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLmxlZnQgbGk6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcbn1cbi5hYm91dFBhcmVudC5kYXJrTW9kZSAucmlnaHRQYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmFib3V0UGFyZW50LmRhcmtNb2RlIC5yaWdodFBhcmVudCBpOm5vdCguZmEtcGx1cyksIC5hYm91dFBhcmVudC5kYXJrTW9kZSAucmlnaHRQYXJlbnQgLm5vQXZhaWxhYmxlIHtcbiAgY29sb3I6ICM4QzkzOUQ7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLnJpZ2h0UGFyZW50IC5mYS1wZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLnJpZ2h0UGFyZW50IC5mYS1wZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xufVxuLmFib3V0UGFyZW50LmRhcmtNb2RlIC5yaWdodFBhcmVudCBpOm5vdCguZmEtcGx1cykge1xuICBjb2xvcjogIzhDOTM5RDtcbn1cbi5hYm91dFBhcmVudC5kYXJrTW9kZSAucmlnaHRQYXJlbnQgaW5wdXQ6bm90KC5kYXRlZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxNmU2ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5hYm91dFBhcmVudC5kYXJrTW9kZSAucmlnaHRQYXJlbnQgc2VsZWN0LCAuYWJvdXRQYXJlbnQuZGFya01vZGUgLnJpZ2h0UGFyZW50IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUI7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLnJpZ2h0UGFyZW50IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFQjtcbn1cbi5hYm91dFBhcmVudC5kYXJrTW9kZSAucmlnaHRQYXJlbnQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmFib3V0UGFyZW50LmRhcmtNb2RlIC5yaWdodFBhcmVudCA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4uYWJvdXRQYXJlbnQuZGFya01vZGUgLmFib3V0TG9hZGluZyB7XG4gIGJhY2tncm91bmQ6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cblxuLmVkdUltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "A6rF":
/*!************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-photos/visit-photos.component.ts ***!
  \************************************************************************/
/*! exports provided: VisitPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPhotosComponent", function() { return VisitPhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






const _c0 = function () { return { width: "100%", height: "160px", "border-radius": "10px" }; };
function VisitPhotosComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r3.userProfilesService.userProfile == null ? null : ctx_r3.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function VisitPhotosComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitPhotosComponent_ng_container_7_div_1_Template, 3, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loadingCount);
} }
function VisitPhotosComponent_ng_template_8_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisitPhotosComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitPhotosComponent_ng_template_8_ng_container_0_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.visitUserService.photos);
} }
function VisitPhotosComponent_ng_template_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "leftSide.noPhotos"), " ");
} }
function VisitPhotosComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VisitPhotosComponent_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitPhotosComponent_ng_template_8_ng_template_1_Template, 3, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.visitUserService.photos == null ? null : ctx_r2.visitUserService.photos.length)("ngIfElse", _r6);
} }
class VisitPhotosComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
        this.loadingCount = [];
        this.loadingCount.length = 8;
    }
    ngOnInit() {
    }
}
VisitPhotosComponent.ɵfac = function VisitPhotosComponent_Factory(t) { return new (t || VisitPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
VisitPhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitPhotosComponent, selectors: [["app-visit-photos"]], decls: 10, vars: 7, consts: [[1, "container", "photosSection"], [1, "paddinggx"], [1, "row", "bg-white", "mb-5", "mx-md-0", "p-3", "rounded-lg"], [1, "col-md-12", "mb-3"], [1, "font-weight-bold", "m-0"], [4, "ngIf", "ngIfElse"], ["content", ""], ["class", "col-md-3 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-4"], [1, "item", "bg-white", "postsLoadingg"], ["count", "1", "appearance", "circle", 3, "theme"], ["noPhotos", ""], ["class", "col-6 col-sm-4 col-md-3 mb-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3", "mb-4"], ["alt", "", 1, "w-100", 3, "src"], [1, "text-center", "mx-auto", "my-0", "pb-4", "font-weight-bold", "text-secondary"]], template: function VisitPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisitPhotosComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisitPhotosComponent_ng_template_8_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "leftSide.photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService == null ? null : ctx.visitUserService.skeltonLoadingPhotos)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".photosSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 160px;\n  border-radius: 10px;\n}\n\n.photosSection.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: #242526 !important;\n}\n\n  .postsLoadingg.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGhvdG9zU2VjdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx2aXNpdC1waG90b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURLSTtFQUNHLGNBQUE7RUFDQSxvQ0FBQTtBQ0ZQOztBREtFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0ZKIiwiZmlsZSI6InZpc2l0LXBob3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLyBzdGFydCBwaG90b3NTZWN0aW9uXHJcbi5waG90b3NTZWN0aW9uIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGhvdG9zU2VjdGlvbi5kYXJrTW9kZSB7XHJcbiAgICAuYmctd2hpdGUge1xyXG4gICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgOjpuZy1kZWVwIC5wb3N0c0xvYWRpbmdnLmRhcmtNb2RlIC5sb2FkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyXHJcbiB9XHJcbiAgLy8vLy8vLy8gZW5kIHBob3RvcyBzZWN0aW9ucyIsIi5waG90b3NTZWN0aW9uIGltZyB7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5waG90b3NTZWN0aW9uLmRhcmtNb2RlIC5iZy13aGl0ZSB7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAucG9zdHNMb2FkaW5nZy5kYXJrTW9kZSAubG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyO1xufSJdfQ== */"] });


/***/ }),

/***/ "PnmK":
/*!******************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-followers/visit-followers.component.ts ***!
  \******************************************************************************/
/*! exports provided: VisitFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitFollowersComponent", function() { return VisitFollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");








function VisitFollowersComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.visitUserService == null ? null : ctx_r0.visitUserService.followers == null ? null : ctx_r0.visitUserService.followers.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, (ctx_r0.visitUserService == null ? null : ctx_r0.visitUserService.followers == null ? null : ctx_r0.visitUserService.followers.length) == 1 ? "leftSide.follower" : "leftSide.followers"), " ");
} }
const _c0 = function (a1) { return ["/visit", a1]; };
function VisitFollowersComponent_div_11_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowersComponent_div_11_div_13_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowersComponent_div_11_div_13_Template_h2_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, item_r2 == null ? null : item_r2.profilePhoto, item_r2 == null ? null : item_r2.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, item_r2.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, item_r2 == null ? null : item_r2.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "posts.bornOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 24, item_r2 == null ? null : item_r2.birthDate, "longDate", undefined, ctx_r5.lang), "");
} }
function VisitFollowersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFollowersComponent_div_11_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r3 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.profileOnHoverforFollowers = i_r3; })("mouseleave", function VisitFollowersComponent_div_11_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.profileOnHoverforFollowers = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowersComponent_div_11_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowersComponent_div_11_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VisitFollowersComponent_div_11_div_13_Template, 20, 33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, item_r2 == null ? null : item_r2.profilePhoto, item_r2 == null ? null : item_r2.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, item_r2 == null ? null : item_r2.firstName), 0, 12), _r4), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, item_r2 == null ? null : item_r2.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profileOnHoverforFollowers == i_r3);
} }
class VisitFollowersComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
        this.profileOnHoverforFollowers = -1;
    }
    get lang() { return localStorage.getItem("currenLanguage") || 'en'; }
    ngOnInit() {
    }
    scrollTop() { }
}
VisitFollowersComponent.ɵfac = function VisitFollowersComponent_Factory(t) { return new (t || VisitFollowersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
VisitFollowersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitFollowersComponent, selectors: [["app-visit-followers"]], decls: 13, vars: 14, consts: [[1, "darkModeClass"], [1, "photos", "mb-3", "bg-white", "p-3", "rounded-lg"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "../friends", 1, "font-weight-bold", "main"], ["routerLink", "../friends"], ["class", "text-secondary mb-3", 4, "ngIf"], [1, "row"], ["class", "col-4 col-md-4  pb-3", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], [1, "text-secondary", "mb-3"], [1, "col-4", "col-md-4", "pb-3", 3, "mouseover", "mouseleave"], [2, "cursor", "pointer"], [1, "parentOfFollowing", 3, "routerLink", "click"], ["alt", "", 1, "followImg", 3, "src"], [1, "font-weight-bold", "d-inline", "namee", 3, "routerLink", "click"], ["elementt", ""], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink", "click"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 3, "routerLink", "click"], [1, "far", "fa-calendar-alt"], [1, "mx-1"]], template: function VisitFollowersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VisitFollowersComponent_p_9_Template, 3, 4, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisitFollowersComponent_div_11_Template, 14, 28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "leftSide.followers"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "leftSide.seeAllFollowers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.followers == null ? null : ctx.visitUserService.followers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 10, ctx.visitUserService.followers, 0, 6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_6__["GenderPipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_7__["LangPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after, .photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n.photos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n}\n.photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #216fdb;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 17px;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]   .followImg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  height: 100px;\n  position: relative;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  width: 300px;\n  top: 130px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  border-color: transparent;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGxhY2Vob2xkZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxsZWZ0U2lkZVBob3Rvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDSko7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSFI7QURLSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIUjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBRE1FO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0FDSEo7QURJSTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUNGUjtBREdRO0VBQ0ksb0NBQUE7QUNEWjtBREtFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQ0ZKO0FDMUNJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRDZDUjtBQzNDSTtFQUFPLG9DQUFBO0FEOENYO0FDNUNRO0VBQ0ksOEJBQUE7QUQ4Q1o7QUMzQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ2Q1I7QUM1Q1E7RUFDSSx5QkFBQTtBRDhDWjtBQzNDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FENkNSO0FDekNRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEMkNaO0FDdkNJO0VBRUksWUFBQTtFQUNBLFVBQUE7QUR3Q1I7QUN2Q1E7RUFBUSxlQUFBO0FEMENoQjtBQ3pDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDJDWjtBQ2xDSTtFQUFJLDhDQUFBO0FEcUNSO0FDcENJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FEc0NSO0FDckNRO0VBQ0ksMENBQUE7QUR1Q1o7QUN0Q1k7RUFDSSx5QkFBQTtBRHdDaEI7QUNyQ1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUR1Q1o7QUNyQ1E7RUFDSSxjQUFBO0FEdUNaO0FDckNRO0VBQWUsY0FBQTtBRHdDdkI7QUN0Q0k7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUR3Q1I7QUN0Q1k7RUFDSSxnQ0FBQTtBRHdDaEI7QUNwQ1k7RUFDSSx5QkFBQTtBRHNDaEIiLCJmaWxlIjoidmlzaXQtZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiVkYXJrbW9kZUxvYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzJcclxufVxyXG4lcHJvZmlsZU9uSG92ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgaW1nLnByb2ZpbGUge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViIDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcgMjI3IDIyNyAvIDEwJSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAlb3ZlcklNRyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyIDExNSAxMTUgLyAxNyUpO1xyXG4gIH0iLCIucGhvdG9zIC5wcm9maWxlT25Ib3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGltZy5wcm9maWxlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURGO1xufVxuXG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MCAhaW1wb3J0YW50O1xufVxuXG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciAub3ZlcklNRzpob3Zlcjo6YWZ0ZXIsIC5waG90b3MgLnBhcmVudE9mRm9sbG93aW5nOmhvdmVyOjphZnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMTUsIDExNSwgMC4xNyk7XG59XG5cbi5waG90b3MgaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5uYW1lZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5waG90b3MgaDIubWFpbjpob3ZlciwgLnBob3RvcyAubmFtZWU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4ucGhvdG9zIGEge1xuICBjb2xvcjogIzIxNmZkYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5waG90b3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG4ucGhvdG9zIC5wYXJlbnRPZkZvbGxvd2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnBob3RvcyAucGFyZW50T2ZGb2xsb3dpbmcgLmZvbGxvd0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdG9wOiAxMzBweDtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGltZywgLnBob3RvcyAucHJvZmlsZU9uSG92ZXIgaDIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciAub3ZlcklNRyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyBwLCAuZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gcDpob3ZlciwgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHRleHRhcmVhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyB0ZXh0YXJlYSB7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIGkge1xuICBjb2xvcjogIzhDOTM5RDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucGhvdG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5waG90b3MgaDIubWFpbjpob3ZlciwgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLnBob3RvcyAubmFtZWU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5waG90b3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59IiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9wbGFjZWhvbGRlci5zY3NzXCI7XHJcbi8vLy8vLy8vLy8vLy8gc3RhdCBwaG90b3Mgc2VjdGlvblxyXG4ucGhvdG9zIHtcclxuICAgIGgyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5hbWVle2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudH1cclxuICAgIGgyLm1haW4sLm5hbWVlIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhcmVudE9mRm9sbG93aW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICBAZXh0ZW5kICVvdmVySU1HO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9sbG93SW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgICAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlcjtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgdG9wOjEzMHB4O1xyXG4gICAgICAgIGltZyxoMiB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICAub3ZlcklNRyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVvdmVySU1HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8gIGVuZCBwaG90b3Mgc2VjdGlvblxyXG4gIC5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIHtcclxuICAgIGhyIHtib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNSAyMzUgMjM1IC8gMTAlKTt9XHJcbiAgICAuaW50cm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgIHAsdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpO1xyXG4gICAgICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4QzkzOUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6cGxhY2Vob2xkZXIge2NvbG9yOiNCOEJCQkZ9XHJcbiAgICB9XHJcbiAgICAucGhvdG9zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICBoMi5tYWluLC5uYW1lZSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEU2RUI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXJEYXJrTW9kZTtcclxuICAgICAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "R1dk":
/*!******************************************************!*\
  !*** ./src/app/view/visit-user/visit-user.module.ts ***!
  \******************************************************/
/*! exports provided: VisitUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitUserModule", function() { return VisitUserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _visit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visit-user-routing.module */ "RApr");
/* harmony import */ var _visit_layout_visit_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-layout/visit-layout.component */ "Rjcz");
/* harmony import */ var _visit_profile_visit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-profile/visit-profile.component */ "wl/x");
/* harmony import */ var _visit_about_visit_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visit-about/visit-about.component */ "5/eo");
/* harmony import */ var _visit_photos_visit_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit-photos/visit-photos.component */ "A6rF");
/* harmony import */ var _visit_friends_visit_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit-friends/visit-friends.component */ "WZ8F");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _viist_profile_photos_viist_profile_photos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viist-profile-photos/viist-profile-photos.component */ "zlc1");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _visit_intro_visit_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./visit-intro/visit-intro.component */ "dscg");
/* harmony import */ var _visit_following_visit_following_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./visit-following/visit-following.component */ "sE7x");
/* harmony import */ var _visit_followers_visit_followers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./visit-followers/visit-followers.component */ "PnmK");
/* harmony import */ var _left_side_photos_left_side_photos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./left-side-photos/left-side-photos.component */ "oSZT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class VisitUserModule {
}
VisitUserModule.ɵfac = function VisitUserModule_Factory(t) { return new (t || VisitUserModule)(); };
VisitUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: VisitUserModule });
VisitUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _visit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__["VisitUserRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_10__["SwiperModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](VisitUserModule, { declarations: [_visit_layout_visit_layout_component__WEBPACK_IMPORTED_MODULE_2__["VisitLayoutComponent"],
        _visit_profile_visit_profile_component__WEBPACK_IMPORTED_MODULE_3__["VisitProfileComponent"],
        _visit_about_visit_about_component__WEBPACK_IMPORTED_MODULE_4__["VisitAboutComponent"],
        _visit_photos_visit_photos_component__WEBPACK_IMPORTED_MODULE_5__["VisitPhotosComponent"],
        _visit_friends_visit_friends_component__WEBPACK_IMPORTED_MODULE_6__["VisitFriendsComponent"],
        _viist_profile_photos_viist_profile_photos_component__WEBPACK_IMPORTED_MODULE_12__["ViistProfilePhotosComponent"],
        _visit_intro_visit_intro_component__WEBPACK_IMPORTED_MODULE_15__["VisitIntroComponent"],
        _visit_following_visit_following_component__WEBPACK_IMPORTED_MODULE_16__["VisitFollowingComponent"],
        _visit_followers_visit_followers_component__WEBPACK_IMPORTED_MODULE_17__["VisitFollowersComponent"],
        _left_side_photos_left_side_photos_component__WEBPACK_IMPORTED_MODULE_18__["LeftSidePhotosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _visit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__["VisitUserRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_10__["SwiperModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"]] }); })();


/***/ }),

/***/ "RApr":
/*!**************************************************************!*\
  !*** ./src/app/view/visit-user/visit-user-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: VisitUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitUserRoutingModule", function() { return VisitUserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _viist_profile_photos_viist_profile_photos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viist-profile-photos/viist-profile-photos.component */ "zlc1");
/* harmony import */ var _visit_about_visit_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-about/visit-about.component */ "5/eo");
/* harmony import */ var _visit_friends_visit_friends_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-friends/visit-friends.component */ "WZ8F");
/* harmony import */ var _visit_layout_visit_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visit-layout/visit-layout.component */ "Rjcz");
/* harmony import */ var _visit_photos_visit_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit-photos/visit-photos.component */ "A6rF");
/* harmony import */ var _visit_profile_visit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit-profile/visit-profile.component */ "wl/x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: 'profilePhotos',
        component: _viist_profile_photos_viist_profile_photos_component__WEBPACK_IMPORTED_MODULE_1__["ViistProfilePhotosComponent"]
    },
    {
        path: '',
        redirectTo: 'layout/posts',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        redirectTo: 'layout/posts',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        component: _visit_layout_visit_layout_component__WEBPACK_IMPORTED_MODULE_4__["VisitLayoutComponent"],
        children: [
            { path: 'posts', component: _visit_profile_visit_profile_component__WEBPACK_IMPORTED_MODULE_6__["VisitProfileComponent"] },
            { path: 'about', component: _visit_about_visit_about_component__WEBPACK_IMPORTED_MODULE_2__["VisitAboutComponent"] },
            { path: 'friends', component: _visit_friends_visit_friends_component__WEBPACK_IMPORTED_MODULE_3__["VisitFriendsComponent"] },
            { path: 'photos', component: _visit_photos_visit_photos_component__WEBPACK_IMPORTED_MODULE_5__["VisitPhotosComponent"] }
        ]
    }
];
class VisitUserRoutingModule {
}
VisitUserRoutingModule.ɵfac = function VisitUserRoutingModule_Factory(t) { return new (t || VisitUserRoutingModule)(); };
VisitUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: VisitUserRoutingModule });
VisitUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](VisitUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Rjcz":
/*!************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-layout/visit-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: VisitLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitLayoutComponent", function() { return VisitLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/follow-or-unfollow.service */ "aTWD");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function VisitLayoutComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.visituser.userProfile == null ? null : ctx_r0.visituser.userProfile.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisitLayoutComponent_h3_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.visituser.userProfile == null ? null : ctx_r2.visituser.userProfile.bio), " ");
} }
const _c0 = function (a1) { return ["/visit", a1]; };
function VisitLayoutComponent_ng_container_20_ul_4_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, follow_r7 == null ? null : follow_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, follow_r7 == null ? null : follow_r7.profilePhoto, follow_r7 == null ? null : follow_r7.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, follow_r7 == null ? null : follow_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, follow_r7 == null ? null : follow_r7.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, follow_r7 == null ? null : follow_r7.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "posts.bornOn"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 24, follow_r7 == null ? null : follow_r7.birthDate, "longDate", undefined, ctx_r9.lang), "");
} }
function VisitLayoutComponent_ng_container_20_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitLayoutComponent_ng_container_20_ul_4_li_1_Template_img_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r8 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.profileOnHoverforFollowers = i_r8; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisitLayoutComponent_ng_container_20_ul_4_li_1_div_3_Template, 20, 33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, follow_r7 == null ? null : follow_r7.profilePhoto, follow_r7 == null ? null : follow_r7.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, follow_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.profileOnHoverforFollowers == i_r8);
} }
function VisitLayoutComponent_ng_container_20_ul_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function VisitLayoutComponent_ng_container_20_ul_4_Template_ul_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.profileOnHoverforFollowers = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitLayoutComponent_ng_container_20_ul_4_li_1_Template, 4, 8, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r5.visituser.followers, 0, 6));
} }
function VisitLayoutComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitLayoutComponent_ng_container_20_ul_4_Template, 3, 5, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.visituser == null ? null : ctx_r3.visituser.followers == null ? null : ctx_r3.visituser.followers.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, (ctx_r3.visituser == null ? null : ctx_r3.visituser.followers == null ? null : ctx_r3.visituser.followers.length) == 1 ? "leftSide.follower" : "leftSide.followers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.visituser.followers == null ? null : ctx_r3.visituser.followers.length);
} }
function VisitLayoutComponent_div_21_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "layOut.unFollow"));
} }
function VisitLayoutComponent_div_21_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "layOut.follow"));
} }
function VisitLayoutComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitLayoutComponent_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.followOrUnFollow(ctx_r18.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisitLayoutComponent_div_21_ng_container_2_Template, 5, 3, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisitLayoutComponent_div_21_ng_template_3_Template, 4, 3, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.followLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.followingStatus)("ngIfElse", _r16);
} }
const _c1 = function (a0, a1, a2, a3) { return { "text-md-left": a0, "text-md-right": a1, "ml-md-5": a2, "mr-md-5": a3 }; };
class VisitLayoutComponent {
    constructor(activatedroute, visituser, rendrer, folloOrUnfollowService, title, userProfilesService, router, commentService) {
        this.activatedroute = activatedroute;
        this.visituser = visituser;
        this.rendrer = rendrer;
        this.folloOrUnfollowService = folloOrUnfollowService;
        this.title = title;
        this.userProfilesService = userProfilesService;
        this.router = router;
        this.commentService = commentService;
        this.profileOnHoverforFollowers = -1;
        this.followLoading = false;
        this.subscriptions = [];
    }
    get lang() { return localStorage.getItem("currenLanguage") || 'en'; }
    ngOnInit() {
        this.subscriptions.push(this.activatedroute.params.subscribe(param => {
            this.visituser.userId = param.id;
            this.subscriptions.push(this.visituser.getuserProfile(param.id).subscribe((res) => {
                var _a, _b, _c, _d;
                this.userId = param.id;
                this.followingStatus = res === null || res === void 0 ? void 0 : res.follow;
                this.visituser.userProfile = res === null || res === void 0 ? void 0 : res.user;
                this.title.setTitle(`${(_a = this.visituser.userProfile) === null || _a === void 0 ? void 0 : _a.firstName.slice(0, 1).toUpperCase()}${(_b = this.visituser.userProfile) === null || _b === void 0 ? void 0 : _b.firstName.slice(1)} 
            ${(_c = this.visituser.userProfile) === null || _c === void 0 ? void 0 : _c.lastName.slice(0, 1).toUpperCase()}${(_d = this.visituser.userProfile) === null || _d === void 0 ? void 0 : _d.lastName.slice(1)}`);
                this.visituser.userPosts = res === null || res === void 0 ? void 0 : res.posts;
                this.visituser.skeltonLoading = false;
                this.visituser.userProfileLoading = false;
                this.visituser.darkMode = res === null || res === void 0 ? void 0 : res.darkMode;
                window.scroll(0, 0);
            }, err => { }));
            this.subscriptions.push(this.visituser.getUserFollowers(param.id).subscribe((res) => {
                this.visituser.followers = res === null || res === void 0 ? void 0 : res.followers;
                this.visituser.skeltonLoadingFollowers = false;
            }, err => { }));
            this.subscriptions.push(this.visituser.getUserFollowing(param.id).subscribe((res) => {
                this.visituser.following = res === null || res === void 0 ? void 0 : res.following;
                this.visituser.friendsSkeltonLoading = false;
            }, err => { }));
            this.subscriptions.push(this.visituser.getUserPhotos(param.id).subscribe((res) => {
                this.visituser.photos = res;
                this.visituser.skeltonLoadingPhotos = false;
            }, err => { }));
        }));
        this.subscriptions.push(this.userProfilesService.getMyNotifications().subscribe((res) => {
            this.userProfilesService.myNotifications = res === null || res === void 0 ? void 0 : res.newNotification;
            console.log(this.userProfilesService.myNotifications);
        }, err => { }));
    }
    profilePhotoss(img) {
        var _a;
        if ((_a = this.visituser.userProfile) === null || _a === void 0 ? void 0 : _a.profilePhoto) {
            this.rendrer.setStyle(img, "borderWidth", "6px");
            setTimeout(() => {
                this.rendrer.setStyle(img, "borderWidth", "3px");
            }, 100);
            setTimeout(() => {
                this.router.navigate([`../visit/${this.userId}/profilePhotos`]);
            }, 140);
        }
    }
    followOrUnFollow(id) {
        this.followLoading = true;
        this.subscriptions.push(this.folloOrUnfollowService.followOrUnFollow(id).subscribe(res => {
            if (!this.followingStatus) {
                this.commentService.emit("follow", {
                    id
                }).then(res => { }, err => { this.router.navigate(["/error"]); });
            }
            this.followingStatus = !this.followingStatus;
            this.subscriptions.push(this.visituser.getUserFollowers(this.userId).subscribe((res) => {
                this.followLoading = false;
                this.visituser.followers = res === null || res === void 0 ? void 0 : res.followers;
                this.visituser.skeltonLoadingFollowers = false;
            }, err => { }));
        }, err => { }));
    }
    ngOnDestroy() {
        this.visituser.userProfile = null;
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
VisitLayoutComponent.ɵfac = function VisitLayoutComponent_Factory(t) { return new (t || VisitLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_2__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_3__["FollowOrUnfollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_6__["CommentSocketService"])); };
VisitLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitLayoutComponent, selectors: [["app-visit-layout"]], decls: 42, vars: 46, consts: [[1, "bx"], [1, "container"], [1, "profile-upper"], [1, "mx-lg-5", "coverImg", "d-flex", "justify-content-center", "align-items-center", "position-relative"], ["class", "w-100 h-100", "alt", "", 3, "src", 4, "ngIf"], [1, "profileImg", "paddinggx"], [1, "flex-column", "flex-lg-row", "align-items-center", "d-flex"], [1, "imgg", "position-relative"], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], ["profileImG", ""], [1, "w-100", "d-flex", "text-center", "flex-column", "flex-md-row", "justify-content-between", "align-items-center", "position-relative", 3, "ngClass"], [1, "mt-3", "mb-1", "font-weight-bold"], ["class", "my-2 d-md-none", 4, "ngIf"], [4, "ngIf"], [1, "mb-0"], [1, "list-unstyled", "d-flex", "mb-0", "pageItems", "p-0"], ["routerLinkActive", "active", "routerLink", "../layout/posts"], ["routerLinkActive", "active", "routerLink", "../layout/about"], ["routerLinkActive", "active", "routerLink", "../layout/friends"], ["routerLinkActive", "active", "routerLink", "../layout/photos"], [1, "profile-down", "pt-4", 2, "padding-bottom", "150px"], ["alt", "", 1, "w-100", "h-100", 3, "src"], [1, "my-2", "d-md-none"], ["routerLink", "friends", 1, "d-none", "d-md-block", "font-weight-bold", "mb-1", "followersLength"], ["class", "mb-5 d-none d-md-flex position-relative followersIMGS list-unstyled", 3, "mouseleave", 4, "ngIf"], [1, "mb-5", "d-none", "d-md-flex", "position-relative", "followersIMGS", "list-unstyled", 3, "mouseleave"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "routerLink", "mouseover"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 3, "routerLink"], [1, "far", "fa-calendar-alt"], [1, "mx-1"], [1, "btn", "btn-primary", "mt-3", 2, "font-weight", "500", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["followw", ""], [1, "fas", "fa-user-minus", "mx-2"], [1, "mx-2"], [1, "fas", "fa-user-plus", "mx-2"]], template: function VisitLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitLayoutComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitLayoutComponent_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.profilePhotoss(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VisitLayoutComponent_h3_19_Template, 3, 3, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VisitLayoutComponent_ng_container_20_Template, 5, 5, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VisitLayoutComponent_div_21_Template, 5, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.coverImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 18, ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.profilePhoto, ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](41, _c1, ctx.lang != "ar", ctx.lang == "ar", ctx.lang != "ar", ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](17, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 31, ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.lastName), 0, 12), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visituser == null ? null : ctx.visituser.followers == null ? null : ctx.visituser.followers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile._id) != ctx.visituser.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tr", ctx.lang == "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 33, "layOut.posts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 35, "layOut.about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, "layOut.friends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 39, "layOut.photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".profileImg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .coverImg[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mat-menu-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  cursor: pointer;\n}\n\n.bx[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cacaca;\n}\n\n.coverImg[_ngcontent-%COMP%] {\n  height: 300px;\n  border: 1px solid #ededed;\n  border-top: none;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: #e7e7e7;\n}\n\n.coverImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.coverImg[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #d8d6d6;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  position: absolute;\n  padding: 7px 10px;\n  font-weight: bold;\n  font-size: 15px;\n  bottom: 25px;\n  right: 25px;\n  border-radius: 5px;\n}\n\n.coverImg[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%]:hover {\n  background-color: #e7e7e7;\n}\n\n.coverImg[_ngcontent-%COMP%]   .ovr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n@media only screen and (max-width: 991px) {\n  .coverImg[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .coverImg[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    font-size: 20px;\n    bottom: 60px;\n  }\n}\n\n.profileImg[_ngcontent-%COMP%]   .imgg[_ngcontent-%COMP%] {\n  width: 166px;\n  margin-top: -83px;\n}\n\n.profileImg[_ngcontent-%COMP%]   .imgg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 166px;\n  height: 166px;\n  border-radius: 50%;\n  border: 3px solid white;\n  position: relative;\n  z-index: 11;\n}\n\n.profileImg[_ngcontent-%COMP%]   .followersLength[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   .followersLength[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.profileImg[_ngcontent-%COMP%]   .addprofileImg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  bottom: 15px;\n  right: 0;\n  z-index: 11;\n  background: #d8d6d6;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 35px;\n  font-size: 20px;\n}\n\n.profileImg[_ngcontent-%COMP%]   .addprofileImg[_ngcontent-%COMP%]:hover {\n  background: #e7e7e7;\n}\n\n.profileImg[_ngcontent-%COMP%]   .ovr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 166px;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: 111;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profileImg[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid transparent;\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 15px;\n}\n\n.profileImg[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   span[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.profileImg[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #1877f2;\n  color: #1877f2;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type)    > img[_ngcontent-%COMP%] {\n  border-right: 2px solid white;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(6)    > img[_ngcontent-%COMP%] {\n  left: 145px;\n  z-index: 1;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(5)    > img[_ngcontent-%COMP%] {\n  left: 120px;\n  z-index: 2;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(4)    > img[_ngcontent-%COMP%] {\n  left: 90px;\n  z-index: 3;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(3)    > img[_ngcontent-%COMP%] {\n  left: 60px;\n  z-index: 4;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2)    > img[_ngcontent-%COMP%] {\n  left: 30px;\n  z-index: 5;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type    > img[_ngcontent-%COMP%] {\n  left: 0;\n  z-index: 6;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -50px;\n  z-index: 1000;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  width: 300px;\n  top: 37px;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.profileImg[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.profile-down[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n}\n\n.profile-down.darkMode[_ngcontent-%COMP%] {\n  background-color: #18191A;\n}\n\n@media only screen and (max-width: 600px) {\n  .profileImg[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n  .mat-menu-content {\n  padding: 0 !important;\n}\n\n.bx.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526;\n  border-bottom: 1px solid transparent;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .coverImg[_ngcontent-%COMP%] {\n  background-color: #171818;\n  border: 1px solid #171818;\n  border-top: none;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%] {\n  background-color: #414242;\n  color: #E7E9EC;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .addCVR[_ngcontent-%COMP%]:hover {\n  background-color: #373839;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   .imgg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 3px solid #242526;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n  color: #E4E6EB;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .profileImg[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .addprofileImg[_ngcontent-%COMP%] {\n  background-color: #414242;\n  color: #E7E9EC;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .addprofileImg[_ngcontent-%COMP%]:hover {\n  background-color: #373839;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   span[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C;\n}\n\n.bx.darkMode[_ngcontent-%COMP%]   ul.followersIMGS[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type)    > img[_ngcontent-%COMP%] {\n  border-color: #242526 !important;\n}\n\n  .darkModeMenu {\n  background-color: #242526 !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n  .darkModeMenu .mat-menu-item {\n  color: #B8BBBF;\n}\n\n  .darkModeMenu .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n@media only screen and (max-width: 600px) {\n  .profileImg[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 15px;\n  }\n  .profileImg[_ngcontent-%COMP%]   .pageItems.tr[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 10px;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcdXNlci1sYXlvdXQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQztFQUNHLGVBQUE7QUNFSjs7QURLQTtFQUFLLGdDQUFBO0FDREw7O0FERUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREFJO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQ0VSOztBREFJO0VBS0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRFhRO0VBQ0kseUJBQUE7QUNhWjs7QURNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNKUjs7QURRQTtFQUNBO0lBQ0ksYUFBQTtFQ0xGO0VETUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQ0pOO0FBQ0Y7O0FEU0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURRUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ05aOztBRFVHO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDUlA7O0FEU087RUFDSSwwQkFBQTtBQ1BYOztBRFVJO0VBS0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNaUjs7QURGUTtFQUNJLG1CQUFBO0FDSVo7O0FEYUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWFI7O0FEaUJJO0VBQ0ksb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNmUjs7QURnQlM7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNkYjs7QURpQks7RUFDSSx5QkFBQTtBQ2ZUOztBRGlCSztFQUNJLGdDQUFBO0VBQ0EsY0FBQTtBQ2ZUOztBRHFCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNuQlI7O0FEdUJHO0VBQTRCLDZCQUFBO0FDcEIvQjs7QURzQk87RUFDSyxXQUFBO0VBQ0EsVUFBQTtBQ3BCWjs7QUR3Qkk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ3RCUjs7QUQwQkU7RUFDTSxVQUFBO0VBQ0EsVUFBQTtBQ3hCUjs7QUQ0QkU7RUFDTSxVQUFBO0VBQ0EsVUFBQTtBQzFCUjs7QUQ4Qkc7RUFDSyxVQUFBO0VBQ0EsVUFBQTtBQzVCUjs7QURnQ0c7RUFDSyxPQUFBO0VBQ0EsVUFBQTtBQzlCUjs7QURpQ0c7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQy9CSjs7QURnQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzlCUjs7QURnQ0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDOUJSOztBRCtCUTtFQUNJLHlCQUFBO0FDN0JaOztBRGdDSTtFQUFRLGVBQUE7QUM3Qlo7O0FEOEJJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVCUjs7QUQ2QlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUMzQlo7O0FEa0NBO0VBRUksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2hDSjs7QURpQ0k7RUFDSSx5QkFBQTtBQy9CUjs7QURrQ0E7RUFDSSx5QkFBQTtBQy9CSjs7QURpQ0E7RUFBd0IseUJBQUE7QUM3QnhCOztBRDhCQTtFQUdZO0lBQ0ksZUFBQTtFQzdCZDtBQUNGOztBRGlDSTtFQUE0QixxQkFBQTtBQzlCaEM7O0FEb0NBO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtBQ2pDSjs7QURrQ0k7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNoQ1I7O0FEa0NJO0VBSUkseUJBQUE7RUFDQSxjQUFBO0FDbkNSOztBRCtCUTtFQUNJLHlCQUFBO0FDN0JaOztBRG9DUTtFQUFNLHlCQUFBO0FDakNkOztBRG9DSTtFQUFTLGNBQUE7QUNqQ2I7O0FEa0NJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7QUNoQ1I7O0FEaUNRO0VBQ0ksMENBQUE7RUFDQSxjQUFBO0FDL0JaOztBRGdDWTtFQUNJLHlCQUFBO0FDOUJoQjs7QURtQ0E7RUFJSSx5QkFBQTtFQUNBLGNBQUE7QUNwQ0o7O0FEZ0NJO0VBQ0kseUJBQUE7QUM5QlI7O0FEbUNBO0VBQUksOENBQUE7QUNoQ0o7O0FEaUNBO0VBQ0ksY0FBQTtBQy9CSjs7QURpQ1E7RUFDQSx5QkFBQTtBQy9CUjs7QURvQ0k7RUFBNEIsZ0NBQUE7QUNqQ2hDOztBRHFDQztFQUVFLG9DQUFBO0VBQ0Esa0RBQUE7QUNuQ0g7O0FEb0NHO0VBQ0ksY0FBQTtBQ2xDUDs7QURtQ087RUFBUyx5QkFBQTtBQ2hDaEI7O0FEbUNBO0VBSWdCO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUNuQ2xCO0VEeUNjO0lBQ0ksYUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ3ZDbEI7QUFDRiIsImZpbGUiOiJ2aXNpdC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlaW5wdXR0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIEBleHRlbmQgJWlucHV0dDtcclxuICAgIH1cclxufVxyXG4uYngge2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjYWNhY2F9XHJcbi5jb3ZlckltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZENWUntcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDZkNjtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG4gICAgICAgaW5wdXQge1xyXG4gICAgICAgIEBleHRlbmQgJWlucHV0dDtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3ZyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuLmNvdmVySW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAuYWRkQ1ZSe1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgIH1cclxufSBcclxufVxyXG5cclxuLnByb2ZpbGVJbWcgIHtcclxuICAgIC5pbWdne1xyXG4gICAgICAgIHdpZHRoOiAxNjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtODNweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTY2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTY2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7ICBcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjExXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAuZm9sbG93ZXJzTGVuZ3RoIHtcclxuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgICAuYWRkcHJvZmlsZUltZyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkOGQ2ZDY7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBcclxuICAgIH1cclxuICBcclxuICAgIC5vdnIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTY2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDExMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIEBleHRlbmQgJWlucHV0dFxyXG4gICAgfVxyXG4ucGFnZUl0ZW1zIHtcclxuICAgIGxpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIGxpOm5vdCguYWN0aXZlKSBzcGFuOmhvdmVyICB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgfVxyXG4gICAgIC5hY3RpdmUge1xyXG4gICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE4NzdmMjtcclxuICAgICAgICAgY29sb3I6IzE4NzdmMlxyXG4gICAgIH1cclxufVxyXG4gXHJcbnVsLmZvbGxvd2Vyc0lNR1Mge1xyXG4gICBsaSB7XHJcbiAgICA+IGltZyB7XHJcbiAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgXHJcbiAgIH1cclxuICAgbGk6bm90KDpsYXN0LW9mLXR5cGUpID4gaW1ne2JvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlfVxyXG4gICAgbGk6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgICBsZWZ0OjE0NXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgbGk6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgPiBpbWcge1xyXG4gICAgICAgIGxlZnQ6MTIwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgfVxyXG4gICBsaTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgPiAgaW1nIHtcclxuICAgICAgICBsZWZ0OjkwcHg7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgIH1cclxuICAgfVxyXG4gICBsaTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgPiAgaW1nIHtcclxuICAgICAgICBsZWZ0OjYwcHg7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgIH1cclxuICAgfVxyXG4gICBsaTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgID4gaW1nIHtcclxuICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICB9XHJcbiAgIH1cclxuICAgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgID4gaW1nIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0b3A6MzdweDtcclxuICAgIGltZy5wcm9maWxlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYiA7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1nLGgyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgLm92ZXJJTUcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyIDExNSAxMTUgLyAxNyUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMxODc3ZjI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlLWRvd24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxufVxyXG4ucHJvZmlsZS1kb3duLmRhcmtNb2RlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTFBO31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnByb2ZpbGVJbWcge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAgIDo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudHtwYWRkaW5nOjAgIWltcG9ydGFudH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYnguZGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC5jb3ZlckltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxODtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTcxODE4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWRkQ1ZSIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzgzOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDI0MjtcclxuICAgICAgICBjb2xvcjojRTdFOUVDO1xyXG4gICAgfVxyXG4ucHJvZmlsZUltZyB7XHJcbiAgICAuaW1nZyB7XHJcbiAgICAgICAgaW1nIHsgYm9yZGVyOiAzcHggc29saWQgIzI0MjUyNjsgfVxyXG4gICAgfVxyXG4gICBcclxuICAgIGgxLGgzLHAge2NvbG9yOiNFNEU2RUI7fVxyXG4gICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjQ5IDIzMyAyMzMgLyAyNCUpIDBweCAzcHggMTVweDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpO1xyXG4gICAgICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hZGRwcm9maWxlSW1nIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzM4Mzk7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MjQyO1xyXG4gICAgY29sb3I6I0U3RTlFQ1xyXG59XHJcbmhyIHtib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNSAyMzUgMjM1IC8gMTAlKTt9XHJcbi5wYWdlSXRlbXMge1xyXG4gICAgY29sb3I6ICNCOEJCQkY7XHJcbiAgICBsaTpub3QoLmFjdGl2ZSkgc3Bhbjpob3ZlciB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcclxuICAgIH1cclxuICAgIH1cclxufVxyXG51bC5mb2xsb3dlcnNJTUdTIHtcclxuICAgIGxpOm5vdCg6bGFzdC1vZi10eXBlKSA+IGltZ3tib3JkZXItY29sb3I6ICAjMjQyNTI2ICFpbXBvcnRhbnQ7fVxyXG59XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAgIC5kYXJrTW9kZU1lbnVcclxue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4O1xyXG4gICAubWF0LW1lbnUtaXRlbSB7XHJcbiAgICAgICBjb2xvcjogI0I4QkJCRjtcclxuICAgICAgICY6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7fVxyXG4gICB9XHJcbn0gXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5wcm9maWxlSW1nIHtcclxuICAgICAgICAucGFnZUl0ZW1zIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZUl0ZW1zLnRyIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5wcm9maWxlSW1nIGlucHV0LCAuY292ZXJJbWcgLmFkZENWUiBpbnB1dCwgLm1hdC1tZW51LWl0ZW0gaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ4IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XG59XG5cbi5jb3ZlckltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuLmNvdmVySW1nIGltZyB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmNvdmVySW1nIC5hZGRDVlIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkOGQ2ZDY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb3ZlckltZyAuYWRkQ1ZSOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbi5jb3ZlckltZyAub3ZyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY292ZXJJbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLmNvdmVySW1nIC5hZGRDVlIge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvdHRvbTogNjBweDtcbiAgfVxufVxuLnByb2ZpbGVJbWcgLmltZ2cge1xuICB3aWR0aDogMTY2cHg7XG4gIG1hcmdpbi10b3A6IC04M3B4O1xufVxuLnByb2ZpbGVJbWcgLmltZ2cgaW1nIHtcbiAgd2lkdGg6IDE2NnB4O1xuICBoZWlnaHQ6IDE2NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDExO1xufVxuLnByb2ZpbGVJbWcgLmZvbGxvd2Vyc0xlbmd0aCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGVJbWcgLmZvbGxvd2Vyc0xlbmd0aDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnByb2ZpbGVJbWcgLmFkZHByb2ZpbGVJbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTE7XG4gIGJhY2tncm91bmQ6ICNkOGQ2ZDY7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2ZpbGVJbWcgLmFkZHByb2ZpbGVJbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuLnByb2ZpbGVJbWcgLm92ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZUltZyAucGFnZUl0ZW1zIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlSW1nIC5wYWdlSXRlbXMgbGkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucHJvZmlsZUltZyAucGFnZUl0ZW1zIGxpOm5vdCguYWN0aXZlKSBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cbi5wcm9maWxlSW1nIC5wYWdlSXRlbXMgLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTg3N2YyO1xuICBjb2xvcjogIzE4NzdmMjtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgbGkgPiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGVJbWcgdWwuZm9sbG93ZXJzSU1HUyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkgPiBpbWcge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgbGk6bnRoLW9mLXR5cGUoNikgPiBpbWcge1xuICBsZWZ0OiAxNDVweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgbGk6bnRoLW9mLXR5cGUoNSkgPiBpbWcge1xuICBsZWZ0OiAxMjBweDtcbiAgei1pbmRleDogMjtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgbGk6bnRoLW9mLXR5cGUoNCkgPiBpbWcge1xuICBsZWZ0OiA5MHB4O1xuICB6LWluZGV4OiAzO1xufVxuLnByb2ZpbGVJbWcgdWwuZm9sbG93ZXJzSU1HUyBsaTpudGgtb2YtdHlwZSgzKSA+IGltZyB7XG4gIGxlZnQ6IDYwcHg7XG4gIHotaW5kZXg6IDQ7XG59XG4ucHJvZmlsZUltZyB1bC5mb2xsb3dlcnNJTUdTIGxpOm50aC1vZi10eXBlKDIpID4gaW1nIHtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogNTtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgbGk6Zmlyc3Qtb2YtdHlwZSA+IGltZyB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDY7XG59XG4ucHJvZmlsZUltZyB1bC5mb2xsb3dlcnNJTUdTIC5wcm9maWxlT25Ib3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTUwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdG9wOiAzN3B4O1xufVxuLnByb2ZpbGVJbWcgdWwuZm9sbG93ZXJzSU1HUyAucHJvZmlsZU9uSG92ZXIgaW1nLnByb2ZpbGUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XG59XG4ucHJvZmlsZUltZyB1bC5mb2xsb3dlcnNJTUdTIC5wcm9maWxlT25Ib3ZlciBpbWcsIC5wcm9maWxlSW1nIHVsLmZvbGxvd2Vyc0lNR1MgLnByb2ZpbGVPbkhvdmVyIGgyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGVJbWcgdWwuZm9sbG93ZXJzSU1HUyAucHJvZmlsZU9uSG92ZXIgLm92ZXJJTUcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGVJbWcgdWwuZm9sbG93ZXJzSU1HUyAucHJvZmlsZU9uSG92ZXIgLm92ZXJJTUc6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMTUsIDExNSwgMC4xNyk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMTg3N2YyO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XG59XG5cbi5wcm9maWxlLWRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xufVxuXG4ucHJvZmlsZS1kb3duLmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkxQTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvZmlsZUltZyBsaSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmJ4LmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJ4LmRhcmtNb2RlIC5jb3ZlckltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE4MTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE4MTg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uYnguZGFya01vZGUgLmFkZENWUiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQyNDI7XG4gIGNvbG9yOiAjRTdFOUVDO1xufVxuLmJ4LmRhcmtNb2RlIC5hZGRDVlI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczODM5O1xufVxuLmJ4LmRhcmtNb2RlIC5wcm9maWxlSW1nIC5pbWdnIGltZyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyNDI1MjY7XG59XG4uYnguZGFya01vZGUgLnByb2ZpbGVJbWcgaDEsIC5ieC5kYXJrTW9kZSAucHJvZmlsZUltZyBoMywgLmJ4LmRhcmtNb2RlIC5wcm9maWxlSW1nIHAge1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5ieC5kYXJrTW9kZSAucHJvZmlsZUltZyAucHJvZmlsZU9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBib3gtc2hhZG93OiByZ2JhKDI0OSwgMjMzLCAyMzMsIDAuMjQpIDBweCAzcHggMTVweDtcbn1cbi5ieC5kYXJrTW9kZSAucHJvZmlsZUltZyAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5ieC5kYXJrTW9kZSAucHJvZmlsZUltZyAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5ieC5kYXJrTW9kZSAuYWRkcHJvZmlsZUltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQyNDI7XG4gIGNvbG9yOiAjRTdFOUVDO1xufVxuLmJ4LmRhcmtNb2RlIC5hZGRwcm9maWxlSW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzgzOTtcbn1cbi5ieC5kYXJrTW9kZSBociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XG59XG4uYnguZGFya01vZGUgLnBhZ2VJdGVtcyB7XG4gIGNvbG9yOiAjQjhCQkJGO1xufVxuLmJ4LmRhcmtNb2RlIC5wYWdlSXRlbXMgbGk6bm90KC5hY3RpdmUpIHNwYW46aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xufVxuLmJ4LmRhcmtNb2RlIHVsLmZvbGxvd2Vyc0lNR1MgbGk6bm90KDpsYXN0LW9mLXR5cGUpID4gaW1nIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiByZ2JhKDI0OSwgMjMzLCAyMzMsIDAuMjQpIDBweCAzcHggMTVweDtcbn1cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IC5tYXQtbWVudS1pdGVtIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG46Om5nLWRlZXAgLmRhcmtNb2RlTWVudSAubWF0LW1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnByb2ZpbGVJbWcgLnBhZ2VJdGVtcyBsaSBzcGFuIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAucHJvZmlsZUltZyAucGFnZUl0ZW1zLnRyIGxpIHNwYW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "WZ8F":
/*!**************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-friends/visit-friends.component.ts ***!
  \**************************************************************************/
/*! exports provided: VisitFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitFriendsComponent", function() { return VisitFriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/search.pipe */ "ZPLk");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");










const _c0 = function () { return { width: "80px", height: "80px", "border-radius": "10px" }; };
const _c1 = function () { return { width: "90%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c2 = function () { return { width: "70%", "border-radius": "0", height: "15px" }; };
function VisitFriendsComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r6.userProfilesService.userProfile == null ? null : ctx_r6.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
} }
function VisitFriendsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_container_12_div_1_Template, 10, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loadingCount);
} }
const _c3 = function (a1) { return ["/visit", a1]; };
function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, item_r15 == null ? null : item_r15._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, item_r15 == null ? null : item_r15.profilePhoto, item_r15 == null ? null : item_r15.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, item_r15 == null ? null : item_r15._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, item_r15 == null ? null : item_r15.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, item_r15 == null ? null : item_r15.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "posts.bornOn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 24, item_r15 == null ? null : item_r15.birthDate, "longDate", undefined, ctx_r17.lang), "");
} }
function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template_div_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r19.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r16 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r21.profileOnHover = i_r16; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template_div_mouseover_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r16 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.profileOnHover = i_r16; })("mouseleave", function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template_div_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_div_20_Template, 20, 33, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, item_r15._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, item_r15 == null ? null : item_r15.profilePhoto, item_r15 == null ? null : item_r15.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c3, item_r15 == null ? null : item_r15._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, item_r15 == null ? null : item_r15.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, item_r15 == null ? null : item_r15.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 23, "posts.bornOn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 25, item_r15 == null ? null : item_r15.birthDate, "longDate", undefined, ctx_r13.lang), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.profileOnHover == i_r16);
} }
function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "leftSide.noResultFor"), " ", ctx_r14.searchPipeValue, " ");
} }
function VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_div_1_Template, 21, 34, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_h2_3_Template, 3, 4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r12 = ctx.ngIf;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r11.visitUserService.following, ctx_r11.searchPipeValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (result_r12 == null ? null : result_r12.length) === 0);
} }
function VisitFriendsComponent_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_13_ng_container_0_ng_container_1_Template, 4, 5, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r8.visitUserService.following, ctx_r8.searchPipeValue));
} }
function VisitFriendsComponent_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "leftSide.noFriends"), " ");
} }
function VisitFriendsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VisitFriendsComponent_ng_template_13_ng_container_0_Template, 3, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_13_ng_template_1_Template, 3, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.visitUserService.following == null ? null : ctx_r2.visitUserService.following.length)("ngIfElse", _r9);
} }
function VisitFriendsComponent_ng_container_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r24.userProfilesService.userProfile == null ? null : ctx_r24.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
} }
function VisitFriendsComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_container_25_div_1_Template, 10, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.loadingCount);
} }
function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, item_r33 == null ? null : item_r33._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, item_r33 == null ? null : item_r33.profilePhoto, item_r33 == null ? null : item_r33.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, item_r33 == null ? null : item_r33._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, item_r33 == null ? null : item_r33.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, item_r33 == null ? null : item_r33.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "posts.bornOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 24, item_r33 == null ? null : item_r33.birthDate, "longDate", undefined, ctx_r35.lang), "");
} }
function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template_div_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r37.followersOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r34 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r39.followersOnHover = i_r34; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template_div_mouseover_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r34 = ctx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r40.followersOnHover = i_r34; })("mouseleave", function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template_div_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r41.followersOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_div_20_Template, 20, 33, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, item_r33 == null ? null : item_r33._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, item_r33 == null ? null : item_r33.profilePhoto, item_r33 == null ? null : item_r33.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c3, item_r33 == null ? null : item_r33._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, item_r33 == null ? null : item_r33.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, item_r33 == null ? null : item_r33.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 23, "posts.bornOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 25, item_r33.birthDate, "longDate", undefined, ctx_r31.lang), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.followersOnHover == i_r34);
} }
function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "leftSide.noResultFor"), " ", ctx_r32.searchPipeValueTwo, " ");
} }
function VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_div_1_Template, 21, 34, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_h2_3_Template, 3, 4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const resultTwo_r30 = ctx.ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r29.visitUserService.followers, ctx_r29.searchPipeValueTwo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (resultTwo_r30 == null ? null : resultTwo_r30.length) === 0);
} }
function VisitFriendsComponent_ng_template_26_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_26_ng_container_0_ng_container_1_Template, 4, 5, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r26.visitUserService.followers, ctx_r26.searchPipeValueTwo));
} }
function VisitFriendsComponent_ng_template_26_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "leftSide.noFriends"), " ");
} }
function VisitFriendsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VisitFriendsComponent_ng_template_26_ng_container_0_Template, 3, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitFriendsComponent_ng_template_26_ng_template_1_Template, 3, 3, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.visitUserService.followers == null ? null : ctx_r5.visitUserService.followers.length)("ngIfElse", _r27);
} }
class VisitFriendsComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
        this.profileOnHover = -1;
        this.followersOnHover = -1;
        this.loadingCount = [];
        this.loadingCount.length = 4;
    }
    get lang() { return localStorage.getItem("currenLanguage") || 'en'; }
    ngOnInit() {
    }
}
VisitFriendsComponent.ɵfac = function VisitFriendsComponent_Factory(t) { return new (t || VisitFriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
VisitFriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitFriendsComponent, selectors: [["app-visit-friends"]], decls: 28, vars: 20, consts: [[1, "container"], [1, "paddinggx"], [1, "row", "bg-white", "mb-5", "mx-md-0", "p-3", "rounded-lg"], [1, "col-md-12", "mb-3"], [1, "d-block", "d-md-flex", "justify-content-between", "align-items-center"], [1, "font-weight-bold", "mb-2", "mb-md-0"], [1, "position-relative", "parentOfSearch"], ["type", "search", 3, "ngModel", "placeholder", "ngModelChange"], [1, "fas", "fa-search", "text-secondary"], [4, "ngIf", "ngIfElse"], ["content", ""], [1, "row", "bg-white", "mx-md-0", "p-3", "rounded-lg"], ["contentTwo", ""], ["class", "col-md-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-3"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4"], [1, "first-section-wrapper", "d-flex", "align-items-center", "mb-3"], [1, "item", "bg-white", "postsLoadingg"], ["count", "1", "appearance", "circle", 3, "theme"], [1, "gravatar-title", "mx-3"], [3, "theme"], ["noFollowing", ""], [4, "ngIf"], ["class", "col-md-6 mb-4", 4, "ngFor", "ngForOf"], ["class", "text-center mx-auto my-0 pb-4 font-weight-bold text-secondary", 4, "ngIf"], [1, "col-md-6", "mb-4"], [1, "borderAround"], [1, "d-flex", "align-items-center", 3, "mouseleave"], [1, "overIMG", 3, "routerLink", "mouseover"], ["alt", "", 3, "src"], [1, "mx-3", 3, "mouseover", "mouseleave"], [1, "userName", "mb-1", 3, "routerLink"], [1, "text-secondary", "m-0"], [1, "far", "fa-calendar-alt"], [1, "mx-1"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 3, "routerLink"], [1, "text-center", "mx-auto", "my-0", "pb-4", "font-weight-bold", "text-secondary"], ["noFollowers", ""]], template: function VisitFriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisitFriendsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchPipeValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VisitFriendsComponent_ng_container_12_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VisitFriendsComponent_ng_template_13_Template, 3, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisitFriendsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.searchPipeValueTwo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VisitFriendsComponent_ng_container_25_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VisitFriendsComponent_ng_template_26_Template, 3, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "leftSide.following"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, "posts.search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchPipeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.friendsSkeltonLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "leftSide.followers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 18, "posts.search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchPipeValueTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.skeltonLoadingFollowers)("ngIfElse", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"], _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_9__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after, .borderAround[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n  border-radius: 10px;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.borderAround[_ngcontent-%COMP%] {\n  border: 1px solid #edebeb;\n  border-radius: 10px;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.borderAround[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n}\n\n.borderAround[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n}\n\n.borderAround[_ngcontent-%COMP%]   h2.userName[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  top: 56px;\n}\n\n.borderAround[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.borderAround[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.borderAround[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #D8DADF;\n}\n\n.borderAround[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.parentOfSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #F0F2F5;\n  border: none;\n  border-radius: 30px;\n  padding: 6px 10px 6px 30px;\n}\n\n.parentOfSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 8px;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: #242526 !important;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .borderAround[_ngcontent-%COMP%] {\n  border: 1px solid #424040;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.container.darkMode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n  color: #E4E6EB;\n}\n\n.container.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n  .postsLoadingg.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n\n  .gravatar-title {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZnJpZW5kcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx2aXNpdC1mcmllbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQztFQUNHLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQ0VKOztBRERJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNHUjs7QURGUTtFQUNJLHlCQUFBO0FDSVo7O0FEQUM7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNHSjs7QURGSTtFQUNHLGtCQUFBO0VBQ1MsbUJBQUE7QUNJaEI7O0FEQUs7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERU87RUFDRSwwQkFBQTtBQ0FUOztBREdJO0VBRUcsU0FBQTtBQ0ZQOztBREdPO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RYOztBRE9JO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0FDTFA7O0FETU87RUFDSSxtQkFBQTtBQ0pYOztBRE9JO0VBQUcsZUFBQTtBQ0pQOztBRFFJO0VBQ0csbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0xQOztBRFFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ05QOztBRFVJO0VBQ0csY0FBQTtFQUNBLG9DQUFBO0FDUFA7O0FEU0k7RUFDRyx5QkFBQTtBQ1BQOztBRFVPO0VBQ0cseUJBQUE7QUNSVjs7QURXRztFQUlHLGNBQUE7RUFDRiwwQ0FBQTtBQ1pKOztBRFFNO0VBQ0MseUJBQUE7QUNOUDs7QURXRztFQUNDLGtEQUFBO0FDVEo7O0FEVUk7RUFDSSwwQ0FBQTtFQUNBLGNBQUE7QUNSUjs7QURTUTtFQUNJLHlCQUFBO0FDUFo7O0FEWUM7RUFDRyxvQ0FBQTtFQUNBLHlCQUFBO0FDVEo7O0FEWUc7RUFBZ0Isc0JBQUE7QUNSbkIiLCJmaWxlIjoidmlzaXQtZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVvdmVySU1HIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIgMTE1IDExNSAvIDE3JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG4gJXByb2ZpbGVPbkhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIGltZy5wcm9maWxlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYiA7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gfVxyXG4gLmJvcmRlckFyb3VuZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAub3ZlcklNRyB7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICB9XHJcbiAgICB9XHJcbiAgICBoMi51c2VyTmFtZSB7XHJcbiAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXI7XHJcbiAgICAgICB0b3A6IDU2cHg7XHJcbiAgICAgICAub3ZlcklNRyB7XHJcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZhLWVsbGlwc2lzLWgge1xyXG4gICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiNEOERBREY7XHJcbiAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgaDJ7Y3Vyc29yOiBwb2ludGVyO31cclxuIFxyXG4gfVxyXG4gLnBhcmVudE9mU2VhcmNoe1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgYmFja2dyb3VuZDogI0YwRjJGNTtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICBwYWRkaW5nOiA2cHggMTBweCA2cHggMzBweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgdG9wOiA4cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAuY29udGFpbmVyLmRhcmtNb2RlIHtcclxuICAgIC5iZy13aGl0ZSB7XHJcbiAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJvcmRlckFyb3VuZCB7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MDQwO1xyXG4gICAgfVxyXG4gICAgLmZhLWVsbGlwc2lzLWgge1xyXG4gICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xyXG4gICAgICAgfVxyXG4gICAgfSBcclxuICAgaW5wdXQge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7XHJcbiAgICAgIH1cclxuICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcclxuICAgfVxyXG4gICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDI0OSAyMzMgMjMzIC8gMjQlKSAwcHggM3B4IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcgMjI3IDIyNyAvIDEwJSk7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gfVxyXG4gfVxyXG4gOjpuZy1kZWVwIC5wb3N0c0xvYWRpbmdnLmRhcmtNb2RlIC5sb2FkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyXHJcbiB9XHJcbiA6Om5nLWRlZXAge1xyXG4gICAuZ3JhdmF0YXItdGl0bGV7d2lkdGg6IDEwMCUgIWltcG9ydGFudDt9XHJcbiB9XHJcbiBcclxuICIsIi5ib3JkZXJBcm91bmQgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HOmhvdmVyOjphZnRlciwgLmJvcmRlckFyb3VuZCAub3ZlcklNRzpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDExNSwgMTE1LCAwLjE3KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJvcmRlckFyb3VuZCAucHJvZmlsZU9uSG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4uYm9yZGVyQXJvdW5kIC5wcm9maWxlT25Ib3ZlciBpbWcucHJvZmlsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvcmRlckFyb3VuZCAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmJvcmRlckFyb3VuZCAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcbn1cblxuLmJvcmRlckFyb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib3JkZXJBcm91bmQgLm92ZXJJTUcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYm9yZGVyQXJvdW5kIC5vdmVySU1HIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYm9yZGVyQXJvdW5kIGgyLnVzZXJOYW1lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYm9yZGVyQXJvdW5kIC5wcm9maWxlT25Ib3ZlciB7XG4gIHRvcDogNTZweDtcbn1cbi5ib3JkZXJBcm91bmQgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib3JkZXJBcm91bmQgLmZhLWVsbGlwc2lzLWgge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ib3JkZXJBcm91bmQgLmZhLWVsbGlwc2lzLWg6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRDhEQURGO1xufVxuLmJvcmRlckFyb3VuZCBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhcmVudE9mU2VhcmNoIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI0YwRjJGNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTBweCA2cHggMzBweDtcbn1cbi5wYXJlbnRPZlNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDhweDtcbn1cblxuLmNvbnRhaW5lci5kYXJrTW9kZSAuYmctd2hpdGUge1xuICBjb2xvcjogI0U0RTZFQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci5kYXJrTW9kZSAuYm9yZGVyQXJvdW5kIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNDA0MDtcbn1cbi5jb250YWluZXIuZGFya01vZGUgLmZhLWVsbGlwc2lzLWg6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xufVxuLmNvbnRhaW5lci5kYXJrTW9kZSBpbnB1dCB7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XG59XG4uY29udGFpbmVyLmRhcmtNb2RlIGlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5jb250YWluZXIuZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIHtcbiAgYm94LXNoYWRvdzogcmdiYSgyNDksIDIzMywgMjMzLCAwLjI0KSAwcHggM3B4IDE1cHg7XG59XG4uY29udGFpbmVyLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmNvbnRhaW5lci5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cblxuOjpuZy1kZWVwIC5wb3N0c0xvYWRpbmdnLmRhcmtNb2RlIC5sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzI7XG59XG5cbjo6bmctZGVlcCAuZ3JhdmF0YXItdGl0bGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "dscg":
/*!**********************************************************************!*\
  !*** ./src/app/view/visit-user/visit-intro/visit-intro.component.ts ***!
  \**********************************************************************/
/*! exports provided: VisitIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitIntroComponent", function() { return VisitIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function VisitIntroComponent_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.visitUserService.userProfile == null ? null : ctx_r0.visitUserService.userProfile.bio), "");
} }
function VisitIntroComponent_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "about.worksAt"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r1.visitUserService.userProfile == null ? null : ctx_r1.visitUserService.userProfile.work), "");
} }
function VisitIntroComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "about.studiedAt"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r2.visitUserService.userProfile == null ? null : ctx_r2.visitUserService.userProfile.study));
} }
function VisitIntroComponent_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "about.livesIn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r3.visitUserService.userProfile == null ? null : ctx_r3.visitUserService.userProfile.location), " ");
} }
function VisitIntroComponent_h3_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r4.visitUserService.userProfile == null ? null : ctx_r4.visitUserService.userProfile.socialCondition));
} }
class VisitIntroComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
    }
    ngOnInit() {
    }
}
VisitIntroComponent.ɵfac = function VisitIntroComponent_Factory(t) { return new (t || VisitIntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
VisitIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitIntroComponent, selectors: [["app-visit-intro"]], decls: 11, vars: 12, consts: [[1, "darkModeClass"], [1, "intro", "bg-white", "p-3", "rounded-lg", "mb-3"], [1, "font-weight-bold"], [1, "d-none", "d-md-block"], ["class", "bi my-2 text-center", 4, "ngIf"], ["class", "my-2 d-flex ", 4, "ngIf"], ["class", "my-2 d-flex", 4, "ngIf"], [1, "bi", "my-2", "text-center"], [1, "my-2", "d-flex"], [1, "fas", "fa-briefcase"], [1, "mx-2"], [1, "fas", "fa-graduation-cap"], [1, "fas", "fa-home"], [1, "fas", "fa-heart"]], template: function VisitIntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisitIntroComponent_h3_6_Template, 3, 3, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisitIntroComponent_h3_7_Template, 9, 6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisitIntroComponent_h3_8_Template, 8, 6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VisitIntroComponent_h3_9_Template, 8, 6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisitIntroComponent_h3_10_Template, 5, 3, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "leftSide.intro"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfile == null ? null : ctx.visitUserService.userProfile.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfile == null ? null : ctx.visitUserService.userProfile.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfile == null ? null : ctx.visitUserService.userProfile.study);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfile == null ? null : ctx.visitUserService.userProfile.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.userProfile == null ? null : ctx.visitUserService.userProfile.socialCondition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["i[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.intro[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d0d0d0;\n  padding-bottom: 5px;\n}\n\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #e4e6eb;\n  cursor: pointer;\n  letter-spacing: 1px;\n}\n\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.intro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8C939D;\n  font-size: 20px;\n  width: 25px;\n}\n\n.intro[_ngcontent-%COMP%]   .cancell[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n}\n\n.intro[_ngcontent-%COMP%]   .cancell[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.intro[_ngcontent-%COMP%]   .bioLoading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(239, 239, 239, 0.5);\n  z-index: 1;\n}\n\n.intro[_ngcontent-%COMP%]   .bioLoading[_ngcontent-%COMP%]   .lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #acabab;\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  border-color: transparent;\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcaW50cm8uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBRSxlQUFBO0FDQ0Y7O0FEQ0k7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VSOztBRERRO0VBQ0kseUJBQUE7QUNHWjs7QURBSztFQUFHLGNBQUE7RUFBZSxlQUFBO0VBQWdCLFdBQUE7QUNLdkM7O0FESkk7RUFDSSx5QkFBQTtBQ01SOztBRExRO0VBQ0kseUJBQUE7QUNPWjs7QURKSTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDTUo7O0FETEk7RUFBbUIseUJBQUE7QUNRdkI7O0FESEk7RUFBSSw4Q0FBQTtBQ09SOztBRE5JO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FDUVI7O0FEUFE7RUFDSSwwQ0FBQTtBQ1NaOztBRFJZO0VBQ0kseUJBQUE7QUNVaEI7O0FEUFE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNTWjs7QURQUTtFQUNJLGNBQUE7QUNTWjs7QURQUTtFQUFlLGNBQUE7QUNVdkIiLCJmaWxlIjoidmlzaXQtaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vIHN0YXJ0IGludHJvIHNlY3Rpb24gXHJcbml7bWFyZ2luLXRvcDogNHB4O31cclxuLmludHJvIHtcclxuICAgIC5iaSB7ICAgIFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViIDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgaSB7Y29sb3I6ICM4QzkzOUQ7Zm9udC1zaXplOiAyMHB4O3dpZHRoOiAyNXB4O31cclxuICAgIC5jYW5jZWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJpb0xvYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOSAyMzkgMjM5IC8gNTAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcxLCAxNzEpO31cclxuICAgIH1cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLyBlbmQgaW50cm8gc2VjdGlvblxyXG4gIC5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIHtcclxuICAgIGhyIHtib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNSAyMzUgMjM1IC8gMTAlKTt9XHJcbiAgICAuaW50cm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgIHAsdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpO1xyXG4gICAgICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4QzkzOUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6cGxhY2Vob2xkZXIge2NvbG9yOiNCOEJCQkZ9XHJcbiAgICB9XHJcblxyXG59IiwiaSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmludHJvIC5iaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmludHJvIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaW50cm8gcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XG59XG4uaW50cm8gaSB7XG4gIGNvbG9yOiAjOEM5MzlEO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuLmludHJvIC5jYW5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbn1cbi5pbnRybyAuY2FuY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XG59XG4uaW50cm8gLmJpb0xvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC41KTtcbiAgei1pbmRleDogMTtcbn1cbi5pbnRybyAuYmlvTG9hZGluZyAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2FiYWI7XG59XG5cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4xKTtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUI7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gcCwgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHA6aG92ZXIsIC5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyB0ZXh0YXJlYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gdGV4dGFyZWEge1xuICBjb2xvcjogI0U0RTZFQjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyBpIHtcbiAgY29sb3I6ICM4QzkzOUQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQjhCQkJGO1xufSJdfQ== */"] });


/***/ }),

/***/ "oSZT":
/*!********************************************************************************!*\
  !*** ./src/app/view/visit-user/left-side-photos/left-side-photos.component.ts ***!
  \********************************************************************************/
/*! exports provided: LeftSidePhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidePhotosComponent", function() { return LeftSidePhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function LeftSidePhotosComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LeftSidePhotosComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
    }
    ngOnInit() {
    }
}
LeftSidePhotosComponent.ɵfac = function LeftSidePhotosComponent_Factory(t) { return new (t || LeftSidePhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
LeftSidePhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSidePhotosComponent, selectors: [["app-left-side-photos"]], decls: 12, vars: 13, consts: [[1, "darkModeClass"], [1, "photos", "mb-3", "bg-white", "p-3", "rounded-lg"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "../photos", 1, "font-weight-bold", "main"], ["routerLink", "../photos"], [1, "row"], ["class", "col-4 col-md-4 py-3", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-4", "py-3"], [1, "parentOfFollowing"], ["alt", "", 1, "followImg", 3, "src"]], template: function LeftSidePhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeftSidePhotosComponent_div_10_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "leftSide.photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "leftSide.seeAllPhotos"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 9, ctx.visitUserService.photos, 0, 3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after, .photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n.photos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n}\n.photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #216fdb;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 17px;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]   .followImg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  height: 100px;\n  position: relative;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  width: 300px;\n  top: 130px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  border-color: transparent;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGxhY2Vob2xkZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGVmdC1zaWRlLXBob3Rvcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbGVmdFNpZGVQaG90b3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQ0pKO0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FES0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSFI7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURNRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtBQ0hKO0FESUk7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FDRlI7QURHUTtFQUNJLG9DQUFBO0FDRFo7QURLRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUNGSjtBQzFDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ2Q1I7QUMzQ0k7RUFBTyxvQ0FBQTtBRDhDWDtBQzVDUTtFQUNJLDhCQUFBO0FEOENaO0FDM0NJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FENkNSO0FDNUNRO0VBQ0kseUJBQUE7QUQ4Q1o7QUMzQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRDZDUjtBQ3pDUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRDJDWjtBQ3ZDSTtFQUVJLFlBQUE7RUFDQSxVQUFBO0FEd0NSO0FDdkNRO0VBQVEsZUFBQTtBRDBDaEI7QUN6Q1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQyQ1o7QUNsQ0k7RUFBSSw4Q0FBQTtBRHFDUjtBQ3BDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBRHNDUjtBQ3JDUTtFQUNJLDBDQUFBO0FEdUNaO0FDdENZO0VBQ0kseUJBQUE7QUR3Q2hCO0FDckNRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FEdUNaO0FDckNRO0VBQ0ksY0FBQTtBRHVDWjtBQ3JDUTtFQUFlLGNBQUE7QUR3Q3ZCO0FDdENJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FEd0NSO0FDdENZO0VBQ0ksZ0NBQUE7QUR3Q2hCO0FDcENZO0VBQ0kseUJBQUE7QURzQ2hCIiwiZmlsZSI6ImxlZnQtc2lkZS1waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJWRhcmttb2RlTG9hZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyMzIzMlxyXG59XHJcbiVwcm9maWxlT25Ib3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBpbWcucHJvZmlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZWIgO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJXByb2ZpbGVPbkhvdmVyRGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDI0OSAyMzMgMjMzIC8gMjQlKSAwcHggM3B4IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNyAyMjcgMjI3IC8gMTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICVvdmVySU1HIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIgMTE1IDExNSAvIDE3JSk7XHJcbiAgfSIsIi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuLnBob3RvcyAucHJvZmlsZU9uSG92ZXIgaW1nLnByb2ZpbGUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XG59XG5cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNDksIDIzMywgMjMzLCAwLjI0KSAwcHggM3B4IDE1cHggIWltcG9ydGFudDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwICFpbXBvcnRhbnQ7XG59XG5cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HOmhvdmVyOjphZnRlciwgLnBob3RvcyAucGFyZW50T2ZGb2xsb3dpbmc6aG92ZXI6OmFmdGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDExNSwgMTE1LCAwLjE3KTtcbn1cblxuLnBob3RvcyBoMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90b3MgLm5hbWVlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnBob3RvcyBoMi5tYWluOmhvdmVyLCAucGhvdG9zIC5uYW1lZTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi5waG90b3MgYSB7XG4gIGNvbG9yOiAjMjE2ZmRiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnBob3RvcyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cbi5waG90b3MgLnBhcmVudE9mRm9sbG93aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGhvdG9zIC5wYXJlbnRPZkZvbGxvd2luZyAuZm9sbG93SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICB0b3A6IDEzMHB4O1xufVxuLnBob3RvcyAucHJvZmlsZU9uSG92ZXIgaW1nLCAucGhvdG9zIC5wcm9maWxlT25Ib3ZlciBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSBociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHAsIC5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyBwOmhvdmVyLCAuZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gdGV4dGFyZWE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHRleHRhcmVhIHtcbiAgY29sb3I6ICNFNEU2RUI7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gaSB7XG4gIGNvbG9yOiAjOEM5MzlEO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0I4QkJCRjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5waG90b3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLnBob3RvcyBoMi5tYWluOmhvdmVyLCAuZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucGhvdG9zIC5uYW1lZTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTRFNkVCO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLnBob3RvcyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcbn0iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3BsYWNlaG9sZGVyLnNjc3NcIjtcclxuLy8vLy8vLy8vLy8vLyBzdGF0IHBob3RvcyBzZWN0aW9uXHJcbi5waG90b3Mge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmFtZWV7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50fVxyXG4gICAgaDIubWFpbiwubmFtZWUge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiMyMTZmZGI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFyZW50T2ZGb2xsb3dpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb2xsb3dJbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgICAgIEBleHRlbmQgJXByb2ZpbGVPbkhvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB0b3A6MTMwcHg7XHJcbiAgICAgICAgaW1nLGgyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5vdmVySU1HIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLyAgZW5kIHBob3RvcyBzZWN0aW9uXHJcbiAgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUge1xyXG4gICAgaHIge2JvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM1IDIzNSAyMzUgLyAxMCUpO31cclxuICAgIC5pbnRybyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUI7XHJcbiAgICAgICAgcCx0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcgMjI3IDIyNyAvIDEwJSk7XHJcbiAgICAgICAgICAgICY6aG92ZXIgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgIGNvbG9yOiNFNEU2RUI7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzhDOTM5RDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpwbGFjZWhvbGRlciB7Y29sb3I6I0I4QkJCRn1cclxuICAgIH1cclxuICAgIC5waG90b3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgIGgyLm1haW4sLm5hbWVlIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTZFQjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgICAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlO1xyXG4gICAgICB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "sE7x":
/*!******************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-following/visit-following.component.ts ***!
  \******************************************************************************/
/*! exports provided: VisitFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitFollowingComponent", function() { return VisitFollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");








function VisitFollowingComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.visitUserService == null ? null : ctx_r0.visitUserService.following == null ? null : ctx_r0.visitUserService.following.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "leftSide.following"), "");
} }
const _c0 = function (a1) { return ["/visit", a1]; };
function VisitFollowingComponent_div_11_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowingComponent_div_11_div_13_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowingComponent_div_11_div_13_Template_h2_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, item_r2 == null ? null : item_r2.profilePhoto, item_r2 == null ? null : item_r2.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, item_r2 == null ? null : item_r2.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, item_r2 == null ? null : item_r2.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "posts.bornOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 24, item_r2 == null ? null : item_r2.birthDate, "longDate", undefined, ctx_r5.lang), "");
} }
function VisitFollowingComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisitFollowingComponent_div_11_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r3 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.profileOnHoverforFollowing = i_r3; })("mouseleave", function VisitFollowingComponent_div_11_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.profileOnHoverforFollowing = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowingComponent_div_11_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisitFollowingComponent_div_11_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VisitFollowingComponent_div_11_div_13_Template, 20, 33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, item_r2 == null ? null : item_r2.profilePhoto, item_r2 == null ? null : item_r2.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, item_r2 == null ? null : item_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, item_r2 == null ? null : item_r2.firstName), 0, 12), _r4), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, item_r2 == null ? null : item_r2.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profileOnHoverforFollowing == i_r3);
} }
class VisitFollowingComponent {
    constructor(visitUserService, userProfilesService) {
        this.visitUserService = visitUserService;
        this.userProfilesService = userProfilesService;
        this.profileOnHoverforFollowing = -1;
    }
    get lang() { return localStorage.getItem("currenLanguage") || 'en'; }
    ngOnInit() {
    }
    scrollTop() { }
}
VisitFollowingComponent.ɵfac = function VisitFollowingComponent_Factory(t) { return new (t || VisitFollowingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
VisitFollowingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitFollowingComponent, selectors: [["app-visit-following"]], decls: 13, vars: 14, consts: [[1, "darkModeClass"], [1, "photos", "mb-3", "bg-white", "p-3", "rounded-lg"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "../friends", 1, "font-weight-bold", "main"], ["routerLink", "../friends"], ["class", "text-secondary mb-3", 4, "ngIf"], [1, "row"], ["class", "col-4 col-md-4 pb-3", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], [1, "text-secondary", "mb-3"], [1, "col-4", "col-md-4", "pb-3", 3, "mouseover", "mouseleave"], [2, "cursor", "pointer"], [1, "parentOfFollowing", 3, "routerLink", "click"], ["alt", "", 1, "followImg", 3, "src"], [1, "font-weight-bold", "d-inline", "namee", 3, "routerLink", "click"], ["elementt", ""], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink", "click"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 3, "routerLink", "click"], [1, "far", "fa-calendar-alt"], [1, "mx-1"]], template: function VisitFollowingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VisitFollowingComponent_p_9_Template, 3, 4, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisitFollowingComponent_div_11_Template, 14, 28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "leftSide.following"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "leftSide.seeAllFollowing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visitUserService.following == null ? null : ctx.visitUserService.following.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 10, ctx.visitUserService.following, 0, 6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_6__["GenderPipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_7__["LangPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after, .photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n.photos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n}\n.photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #216fdb;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 17px;\n}\n.photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.photos[_ngcontent-%COMP%]   .parentOfFollowing[_ngcontent-%COMP%]   .followImg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  height: 100px;\n  position: relative;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  width: 300px;\n  top: 130px;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.photos[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  border-color: transparent;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8C939D;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   h2.main[_ngcontent-%COMP%]:hover, .darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   .namee[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #E4E6EB;\n}\n.darkModeClass.darkMode[_ngcontent-%COMP%]   .photos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGxhY2Vob2xkZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxsZWZ0U2lkZVBob3Rvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDSko7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSFI7QURLSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIUjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBRE1FO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0FDSEo7QURJSTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUNGUjtBREdRO0VBQ0ksb0NBQUE7QUNEWjtBREtFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQ0ZKO0FDMUNJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRDZDUjtBQzNDSTtFQUFPLG9DQUFBO0FEOENYO0FDNUNRO0VBQ0ksOEJBQUE7QUQ4Q1o7QUMzQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ2Q1I7QUM1Q1E7RUFDSSx5QkFBQTtBRDhDWjtBQzNDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FENkNSO0FDekNRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEMkNaO0FDdkNJO0VBRUksWUFBQTtFQUNBLFVBQUE7QUR3Q1I7QUN2Q1E7RUFBUSxlQUFBO0FEMENoQjtBQ3pDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDJDWjtBQ2xDSTtFQUFJLDhDQUFBO0FEcUNSO0FDcENJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FEc0NSO0FDckNRO0VBQ0ksMENBQUE7QUR1Q1o7QUN0Q1k7RUFDSSx5QkFBQTtBRHdDaEI7QUNyQ1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUR1Q1o7QUNyQ1E7RUFDSSxjQUFBO0FEdUNaO0FDckNRO0VBQWUsY0FBQTtBRHdDdkI7QUN0Q0k7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUR3Q1I7QUN0Q1k7RUFDSSxnQ0FBQTtBRHdDaEI7QUNwQ1k7RUFDSSx5QkFBQTtBRHNDaEIiLCJmaWxlIjoidmlzaXQtZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiVkYXJrbW9kZUxvYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzJcclxufVxyXG4lcHJvZmlsZU9uSG92ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgaW1nLnByb2ZpbGUge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViIDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcgMjI3IDIyNyAvIDEwJSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAlb3ZlcklNRyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyIDExNSAxMTUgLyAxNyUpO1xyXG4gIH0iLCIucGhvdG9zIC5wcm9maWxlT25Ib3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGltZy5wcm9maWxlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURGO1xufVxuXG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MCAhaW1wb3J0YW50O1xufVxuXG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciAub3ZlcklNRzpob3Zlcjo6YWZ0ZXIsIC5waG90b3MgLnBhcmVudE9mRm9sbG93aW5nOmhvdmVyOjphZnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMTUsIDExNSwgMC4xNyk7XG59XG5cbi5waG90b3MgaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5uYW1lZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5waG90b3MgaDIubWFpbjpob3ZlciwgLnBob3RvcyAubmFtZWU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4ucGhvdG9zIGEge1xuICBjb2xvcjogIzIxNmZkYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5waG90b3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG4ucGhvdG9zIC5wYXJlbnRPZkZvbGxvd2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnBob3RvcyAucGFyZW50T2ZGb2xsb3dpbmcgLmZvbGxvd0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdG9wOiAxMzBweDtcbn1cbi5waG90b3MgLnByb2ZpbGVPbkhvdmVyIGltZywgLnBob3RvcyAucHJvZmlsZU9uSG92ZXIgaDIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG9zIC5wcm9maWxlT25Ib3ZlciAub3ZlcklNRyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyBwLCAuZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAuaW50cm8gcDpob3ZlciwgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIHRleHRhcmVhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyB0ZXh0YXJlYSB7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLmludHJvIGkge1xuICBjb2xvcjogIzhDOTM5RDtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5pbnRybyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG4uZGFya01vZGVDbGFzcy5kYXJrTW9kZSAucGhvdG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5waG90b3MgaDIubWFpbjpob3ZlciwgLmRhcmtNb2RlQ2xhc3MuZGFya01vZGUgLnBob3RvcyAubmFtZWU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTZFQjtcbn1cbi5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIC5waG90b3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59IiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9wbGFjZWhvbGRlci5zY3NzXCI7XHJcbi8vLy8vLy8vLy8vLy8gc3RhdCBwaG90b3Mgc2VjdGlvblxyXG4ucGhvdG9zIHtcclxuICAgIGgyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5hbWVle2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudH1cclxuICAgIGgyLm1haW4sLm5hbWVlIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjojMjE2ZmRiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhcmVudE9mRm9sbG93aW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICBAZXh0ZW5kICVvdmVySU1HO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9sbG93SW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgICAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlcjtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgdG9wOjEzMHB4O1xyXG4gICAgICAgIGltZyxoMiB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICAub3ZlcklNRyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVvdmVySU1HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8gIGVuZCBwaG90b3Mgc2VjdGlvblxyXG4gIC5kYXJrTW9kZUNsYXNzLmRhcmtNb2RlIHtcclxuICAgIGhyIHtib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNSAyMzUgMjM1IC8gMTAlKTt9XHJcbiAgICAuaW50cm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgIHAsdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpO1xyXG4gICAgICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4QzkzOUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6cGxhY2Vob2xkZXIge2NvbG9yOiNCOEJCQkZ9XHJcbiAgICB9XHJcbiAgICAucGhvdG9zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICBoMi5tYWluLC5uYW1lZSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEU2RUI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXJEYXJrTW9kZTtcclxuICAgICAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "wl/x":
/*!**************************************************************************!*\
  !*** ./src/app/view/visit-user/visit-profile/visit-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: VisitProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitProfileComponent", function() { return VisitProfileComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/people-you-may-know.service */ "ERkD");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/follow-or-unfollow.service */ "aTWD");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _visit_intro_visit_intro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../visit-intro/visit-intro.component */ "dscg");
/* harmony import */ var _visit_following_visit_following_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visit-following/visit-following.component */ "sE7x");
/* harmony import */ var _visit_followers_visit_followers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../visit-followers/visit-followers.component */ "PnmK");
/* harmony import */ var _left_side_photos_left_side_photos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../left-side-photos/left-side-photos.component */ "oSZT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");
/* harmony import */ var _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/most-reaction.pipe */ "k08z");
/* harmony import */ var _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/second-reaction.pipe */ "2wBp");
/* harmony import */ var _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/reaction-type.pipe */ "UnZl");


























const _c0 = ["updtaeSwiper"];
const _c1 = ["editCommentInpu"];
const _c2 = ["addCommentInput"];
const _c3 = function () { return { "width": "80px", "height": "80px" }; };
const _c4 = function () { return { width: "90%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c5 = function () { return { width: "70%", "border-radius": "0", height: "15px" }; };
const _c6 = function () { return { width: "80%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c7 = function () { return { width: "60%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c8 = function () { return { width: "80px", height: "80px" }; };
function VisitProfileComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c7));
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_div_14_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r26.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.profilePhoto, ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 18, ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, "posts.bornOn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](19, 22, ctx_r12.visitUserService.userProfile == null ? null : ctx_r12.visitUserService.userProfile.birthDate, "longDate", undefined, ctx_r12.lang), "");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.seeMoreIndex = ctx_r28.seeMoreIndex == i_r11 ? -1 : i_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r14.seeMoreIndex == i_r11 ? "posts.seeLess" : "posts.seeMore"), "");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_img_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_img_29_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const post_r10 = ctx_r34.$implicit; const i_r11 = ctx_r34.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r32.postComments = []; ctx_r32.userProfilesService.popUP = true; return ctx_r32.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r10 == null ? null : post_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r10 == null ? null : post_r10.numOfReactions, "");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_p_40_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_p_40_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const post_r10 = ctx_r38.$implicit; const i_r11 = ctx_r38.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r37.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", post_r10 == null ? null : post_r10.numOfComments, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, (post_r10 == null ? null : post_r10.numOfComments) == 1 ? "posts.comment" : "posts.comments"), " ");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "posts.like"));
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemm_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", itemm_r42 == null ? null : itemm_r42.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](itemm_r42.reaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, itemm_r42.lang), "");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_ng_container_0_div_1_Template, 5, 6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemm_r42 = ctx.$implicit;
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r10 == null ? null : post_r10.myReaction[0] == null ? null : post_r10.myReaction[0].reaction) == itemm_r42.reaction);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_ng_container_0_Template, 2, 1, "ng-container", 69);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.reactions);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_li_51_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_li_51_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const item_r46 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const i_r11 = ctx_r48.index; const post_r10 = ctx_r48.$implicit; const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r47.makeReaction(item_r46 == null ? null : item_r46.reaction, i_r11, _r23, post_r10 == null ? null : post_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r46 == null ? null : item_r46.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c9 = function (a0, a1) { return { paddingRight: a0, paddingLeft: a1 }; };
const _c10 = function (a0, a1) { return { "ml-2": a0, "mr-2": a1 }; };
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_div_1_Template_textarea_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const post_r10 = ctx_r57.$implicit; const i_r11 = ctx_r57.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r55.makeAComment($event, _r54, post_r10 == null ? null : post_r10._id, i_r11); })("input", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_div_1_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r58.textAreaHeightAuto(_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_div_1_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const post_r10 = ctx_r60.$implicit; const i_r11 = ctx_r60.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r59.makeAComment($event, _r54, post_r10 == null ? null : post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, ctx_r50.userProfilesService.userProfile == null ? null : ctx_r50.userProfilesService.userProfile.profilePhoto, ctx_r50.userProfilesService.userProfile == null ? null : ctx_r50.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c9, ctx_r50.lang == "ar" ? "0" : "25px", ctx_r50.lang == "ar" ? "25px" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "posts.writeComment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c10, ctx_r50.lang != "ar", ctx_r50.lang == "ar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", "auto");
} }
const _c11 = function () { return { "width": "32px", "height": "32px", "margin": "0" }; };
const _c12 = function () { return { width: "90%", "border-radius": "0", height: "5px", "margin-bottom": "5px" }; };
const _c13 = function () { return { width: "70%", "border-radius": "0", height: "5px" }; };
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r61.userProfilesService.userProfile == null ? null : ctx_r61.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c13));
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_container_4_li_1_Template, 10, 8, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r51.swiperLoadingCount);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "posts.pressESC"), " ");
} }
const _c14 = function (a0, a1) { return { "paddingRight": a0, "paddingLeft": a1 }; };
const _c15 = function (a0, a1, a2, a3) { return { "ml-2": a0, "mr-2": a1, "mr-0": a2, "ml-0": a3 }; };
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r74.textAreaHeightAuto(_r72); })("focus", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_focus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r76.enterESCtoCancel = true; })("blur", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r77.enterESCtoCancel = false; })("keydown.esc", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_esc_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r78.editCommentIndex = -1; })("keydown.enter", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const comment_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r79.updateComment(comment_r67 == null ? null : comment_r67._id, _r72.value, comment_r67 == null ? null : comment_r67.post, i_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_i_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const comment_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r82.updateComment(comment_r67 == null ? null : comment_r67._id, _r72.value, comment_r67 == null ? null : comment_r67.post, i_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_span_10_Template, 3, 3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r85.editCommentIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const comment_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c14, ctx_r69.lang != "ar" ? "15px" : "0", ctx_r69.lang == "ar" ? "15px" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "posts.writeComment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](16, _c15, ctx_r69.lang != "ar", ctx_r69.lang == "ar", ctx_r69.lang != "ar", ctx_r69.lang == "ar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 8, comment_r67 == null ? null : comment_r67.comment, _r72));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.enterESCtoCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, "posts.cancel"), " ");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 103);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r88);
} }
const _c16 = function (a1) { return ["/visit", a1]; };
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template, 1, 1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", null, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const commentIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7); ctx_r90.editCommentIndex = commentIndex_r68; return ctx_r90.resizeTextArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const comment_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r93.deleteComment(comment_r67 == null ? null : comment_r67._id, comment_r67 == null ? null : comment_r67.post, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", null, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const comment_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c16, comment_r67 == null ? null : comment_r67.user == null ? null : comment_r67.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 19, comment_r67.user == null ? null : comment_r67.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 25, comment_r67.user == null ? null : comment_r67.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (comment_r67 == null ? null : comment_r67.user == null ? null : comment_r67.user._id) == (ctx_r71.userProfilesService.userProfile == null ? null : ctx_r71.userProfilesService.userProfile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkModeMenu", ctx_r71.userProfilesService.userProfile == null ? null : ctx_r71.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", ctx_r71.lang == "ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 27, "posts.edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", ctx_r71.lang == "ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 29, "posts.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 31, comment_r67 == null ? null : comment_r67.comment, _r89), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](27, 34, comment_r67 == null ? null : comment_r67.createdAt, "longDate", undefined, ctx_r71.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](30, 39, comment_r67 == null ? null : comment_r67.createdAt, "longDate", undefined, ctx_r71.lang));
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template, 15, 21, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template, 31, 46, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r67 = ctx.$implicit;
    const commentIndex_r68 = ctx.index;
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c16, comment_r67 == null ? null : comment_r67.user == null ? null : comment_r67.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, comment_r67 == null ? null : comment_r67.user == null ? null : comment_r67.user.profilePhoto, comment_r67.user == null ? null : comment_r67.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.editCommentIndex == commentIndex_r68)("ngIfElse", _r70);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_Template, 6, 9, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r63.postComments);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "posts.noComments"), " ");
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_ng_template_1_Template, 3, 3, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.postComments == null ? null : ctx_r53.postComments.length)("ngIfElse", _r64);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_div_1_Template, 8, 16, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_ng_template_5_Template, 3, 2, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r25.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.commentsLoading)("ngIfElse", _r52);
} }
const _c17 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_div_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r97.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const i_r11 = ctx.index; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r99.profileOnHover = i_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r100.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_div_mouseover_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const i_r11 = ctx.index; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r101.profileOnHover = i_r11; })("mouseleave", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_div_mouseleave_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r102.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VisitProfileComponent_ng_template_11_ng_container_0_div_1_div_14_Template, 20, 27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, VisitProfileComponent_ng_template_11_ng_container_0_div_1_span_28_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, VisitProfileComponent_ng_template_11_ng_container_0_div_1_img_29_Template, 1, 1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const post_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); ctx_r103.filterReactions = ""; ctx_r103.reacionsModaClassIndex = -1; return ctx_r103.openReactionModal(post_r10._id, _r3, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, VisitProfileComponent_ng_template_11_ng_container_0_div_1_span_39_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, VisitProfileComponent_ng_template_11_ng_container_0_div_1_p_40_Template, 3, 4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_li_mouseover_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r104.showParentOfReactionsOnHover(_r23); })("mouseleave", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_li_mouseleave_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r105.hideParentOfReactionsOnHover(_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, VisitProfileComponent_ng_template_11_ng_container_0_div_1_div_45_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_template_46_Template, 1, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, VisitProfileComponent_ng_template_11_ng_container_0_div_1_li_51_Template, 2, 1, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template_li_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const post_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r106.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, VisitProfileComponent_ng_template_11_ng_container_0_div_1_ng_container_57_Template, 7, 3, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 18, ctx_r9.visitUserService.userProfile == null ? null : ctx_r9.visitUserService.userProfile.profilePhoto, ctx_r9.visitUserService.userProfile == null ? null : ctx_r9.visitUserService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 25, ctx_r9.visitUserService.userProfile == null ? null : ctx_r9.visitUserService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 31, ctx_r9.visitUserService.userProfile == null ? null : ctx_r9.visitUserService.userProfile.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.profileOnHover == i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](19, 33, post_r10 == null ? null : post_r10.updatedAt, "longDate", undefined, ctx_r9.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](22, 38, post_r10 == null ? null : post_r10.updatedAt, "longDate", undefined, ctx_r9.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](27, 46, post_r10.content, i_r11, ctx_r9.seeMoreIndex), _r13), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r10.content == null ? null : post_r10.content.length) > 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](35, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](68, _c17, post_r10.love, post_r10.sad, post_r10.wow, post_r10.haha, post_r10.angry, post_r10.like, _r16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](38, 58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](76, _c17, post_r10.love, post_r10.sad, post_r10.wow, post_r10.haha, post_r10.angry, post_r10.like, _r17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.numOfComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(post_r10 == null ? null : post_r10.myReaction == null ? null : post_r10.myReaction.length))("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.reactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 66, "posts.comment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.postCommentsIndex == i_r11);
} }
function VisitProfileComponent_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_container_0_div_1_Template, 58, 84, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.visitUserService.userPosts);
} }
function VisitProfileComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "posts.noPostsAvailable"), " ");
} }
function VisitProfileComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VisitProfileComponent_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_11_ng_template_1_Template, 3, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.visitUserService.userPosts == null ? null : ctx_r2.visitUserService.userPosts.length) > 0)("ngIfElse", _r7);
} }
function VisitProfileComponent_ng_template_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_14_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r110.filterReactions = ""; return ctx_r110.reacionsModaClassIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("like", ctx_r107.filterReactions == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "reactionModal.all"));
} }
function VisitProfileComponent_ng_template_14_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_14_ng_container_4_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const item_r112 = ctx_r117.$implicit; const i_r113 = ctx_r117.index; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r115.filterReactions = item_r112 == null ? null : item_r112.reactionImg; return ctx_r115.reacionsModaClassIndex = i_r113; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r113 = ctx_r118.index;
    const item_r112 = ctx_r118.$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r114.reacionsModaClassIndex == i_r113 ? item_r112 == null ? null : item_r112.reactionImg : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + (item_r112 == null ? null : item_r112.reactionImg) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r112 == null ? null : item_r112.length);
} }
function VisitProfileComponent_ng_template_14_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_ng_template_14_ng_container_4_ng_template_1_Template, 4, 3, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function VisitProfileComponent_ng_template_14_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_14_li_10_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r120.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_14_li_10_Template_h3_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r122.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c16, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user.profilePhoto, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + (item_r119 == null ? null : item_r119.reaction) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c16, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 19, item_r119 == null ? null : item_r119.user == null ? null : item_r119.user.lastName), 0, 12), " ");
} }
function VisitProfileComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "swiper", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VisitProfileComponent_ng_template_14_ng_template_3_Template, 3, 5, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VisitProfileComponent_ng_template_14_ng_container_4_Template, 2, 0, "ng-container", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_ng_template_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r123.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VisitProfileComponent_ng_template_14_li_10_Template, 12, 25, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "reactionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("popupDarkMode", ctx_r4.userProfilesService.userProfile == null ? null : ctx_r4.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r4.reactionSwiper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.sortReaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 5, ctx_r4.postReactions, ctx_r4.filterReactions));
} }
function VisitProfileComponent_div_16_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 73);
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r125.popupPost == null ? null : ctx_r125.popupPost.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function VisitProfileComponent_div_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitProfileComponent_div_16_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_div_13_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r135.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_div_13_Template_h2_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r137.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_div_13_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r138.hideCommentsInMobileScreen(_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, ctx_r129.popupPost == null ? null : ctx_r129.popupPost.author == null ? null : ctx_r129.popupPost.author.profilePhoto, ctx_r129.popupPost == null ? null : ctx_r129.popupPost.author == null ? null : ctx_r129.popupPost.author.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 11, ctx_r129.popupPost == null ? null : ctx_r129.popupPost.author == null ? null : ctx_r129.popupPost.author.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 17, ctx_r129.popupPost == null ? null : ctx_r129.popupPost.author == null ? null : ctx_r129.popupPost.author.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](12, 19, ctx_r129.popupPost == null ? null : ctx_r129.popupPost.updatedAt, "longDate", undefined, ctx_r129.lang), " ");
} }
function VisitProfileComponent_div_16_div_20_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r141.popupReactions == null ? null : ctx_r141.popupReactions.numOfReactions, "");
} }
function VisitProfileComponent_div_16_div_20_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r142.postComments == null ? null : ctx_r142.postComments.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, (ctx_r142.postComments == null ? null : ctx_r142.postComments.length) == 1 ? "posts.comment" : "posts.comments"), " ");
} }
function VisitProfileComponent_div_16_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VisitProfileComponent_div_16_div_20_span_8_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VisitProfileComponent_div_16_div_20_p_9_Template, 3, 4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](20, _c17, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfLoves, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfSads, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfWows, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfHahas, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfAngrys, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfLikes, _r139)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](7, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](28, _c17, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfLoves, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfSads, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfWows, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfHahas, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfAngrys, ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfLikes, _r140)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r131.popupReactions == null ? null : ctx_r131.popupReactions.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r131.postComments == null ? null : ctx_r131.postComments.length);
} }
function VisitProfileComponent_div_16_ng_container_23_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r143.userProfilesService.userProfile == null ? null : ctx_r143.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c13));
} }
function VisitProfileComponent_div_16_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_div_16_ng_container_23_li_1_Template, 10, 8, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r132.swiperLoadingCount);
} }
function VisitProfileComponent_div_16_ng_template_24_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_ng_template_24_ng_container_0_li_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153); const comment_r149 = ctx.$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r152.navigate(comment_r149 == null ? null : comment_r149.user == null ? null : comment_r149.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_ng_template_24_ng_container_0_li_1_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153); const comment_r149 = ctx.$implicit; const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r154.navigate(comment_r149 == null ? null : comment_r149.user == null ? null : comment_r149.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", null, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r149 = ctx.$implicit;
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, comment_r149 == null ? null : comment_r149.user == null ? null : comment_r149.user.profilePhoto, comment_r149.user == null ? null : comment_r149.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, comment_r149.user == null ? null : comment_r149.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, comment_r149.user == null ? null : comment_r149.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 20, comment_r149 == null ? null : comment_r149.comment, _r151));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](19, 23, comment_r149 == null ? null : comment_r149.createdAt, "longDate", undefined, ctx_r148.lang));
} }
function VisitProfileComponent_div_16_ng_template_24_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_div_16_ng_template_24_ng_container_0_li_1_Template, 20, 28, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r145.postComments);
} }
function VisitProfileComponent_div_16_ng_template_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "posts.noComments"));
} }
function VisitProfileComponent_div_16_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VisitProfileComponent_div_16_ng_template_24_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitProfileComponent_div_16_ng_template_24_ng_template_1_Template, 3, 3, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r134.postComments == null ? null : ctx_r134.postComments.length)("ngIfElse", _r146);
} }
function VisitProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VisitProfileComponent_div_16_img_2_Template, 1, 1, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VisitProfileComponent_div_16_ng_template_3_Template, 5, 0, "ng-template", null, 124, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r156); const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r155.showCommentsInMobileScreen(_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitProfileComponent_div_16_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r156); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r157.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VisitProfileComponent_div_16_div_13_Template, 14, 24, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 131, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, VisitProfileComponent_div_16_div_20_Template, 10, 36, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VisitProfileComponent_div_16_ng_container_23_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VisitProfileComponent_div_16_ng_template_24_Template, 3, 2, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r5.userProfilesService.userProfile == null ? null : ctx_r5.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.popupPost == null ? null : ctx_r5.popupPost.image)("ngIfElse", _r126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "posts.showComments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 12, ctx_r5.popupPost == null ? null : ctx_r5.popupPost.content, _r130));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.commentsLoading)("ngIfElse", _r133);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"],]);
class VisitProfileComponent {
    constructor(visitUserService, peopleYouMayKnow, userProfilesService, commentService, folloOrUnfollowService, cd, _snackBar, rendrer, modalService, router, translate) {
        this.visitUserService = visitUserService;
        this.peopleYouMayKnow = peopleYouMayKnow;
        this.userProfilesService = userProfilesService;
        this.commentService = commentService;
        this.folloOrUnfollowService = folloOrUnfollowService;
        this.cd = cd;
        this._snackBar = _snackBar;
        this.rendrer = rendrer;
        this.modalService = modalService;
        this.router = router;
        this.translate = translate;
        this.profileOnHover = -1;
        this.seeMoreIndex = -1;
        this.swiperLoadingCount = [];
        this.postComments = [];
        this.postCommentsIndex = -1;
        this.commentsLoading = true;
        this.followLoading = false;
        this.subscriptions = [];
        this.editCommentIndex = -1;
        this.enterESCtoCancel = true;
        this.postReactions = [];
        this.sortReaction = [];
        this.reactionModalImgSrc = "";
        this.filterReactions = '';
        this.reacionsModaClassIndex = -1;
        this.reactionSwiper = {
            slidesPerView: "2.6",
            spaceBetween: "50",
            pagination: "{ clickable: true ,type: 'fraction'}",
            navigation: "false",
            breakpoints: {
                0: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
            }
        };
        this.subscriptions.push(translate.get('posts.reactions').subscribe(res => this.reactions = res));
        this.subscriptions.push(this.translate.get('youMayKnow.snackBarOne').subscribe(res => {
            this.translatedSnacBarTextOne = res;
        }));
        this.subscriptions.push(this.translate.get('youMayKnow.snackBarTwo').subscribe(res => {
            this.translatedSnacBarTextTwo = res;
        }));
    }
    get lang() { return localStorage.getItem("currenLanguage") || 'en'; }
    ngOnInit() {
        this.scrollTop();
        this.swiperLoadingCount.length = 5;
        this.commentService.listen("comment").subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.updatePosts();
            if (this.postCommentsIndex != -1 &&
                ((_a = this.visitUserService.userPosts[this.postCommentsIndex]) === null || _a === void 0 ? void 0 : _a._id) == ((_c = (_b = res === null || res === void 0 ? void 0 : res.comment) === null || _b === void 0 ? void 0 : _b.post) === null || _c === void 0 ? void 0 : _c._id)) {
                let newComment = {
                    comment: (_d = res === null || res === void 0 ? void 0 : res.comment) === null || _d === void 0 ? void 0 : _d.comment,
                    createdAt: (_e = res === null || res === void 0 ? void 0 : res.comment) === null || _e === void 0 ? void 0 : _e.createdAt,
                    post: (_g = (_f = res === null || res === void 0 ? void 0 : res.comment) === null || _f === void 0 ? void 0 : _f.post) === null || _g === void 0 ? void 0 : _g._id,
                    user: res === null || res === void 0 ? void 0 : res.user,
                    _id: (_h = res === null || res === void 0 ? void 0 : res.comment) === null || _h === void 0 ? void 0 : _h._id
                };
                this.postComments.unshift(newComment);
            }
        }, err => {
            this.router.navigate(["/error"]);
        });
        this.commentService.listen("reaction").subscribe((res) => {
            this.updatePosts();
        }, err => { this.router.navigate(["/error"]); });
    }
    updatePosts() {
        this.subscriptions.push(this.visitUserService.getuserProfile(this.visitUserService.userId).subscribe((res) => { this.visitUserService.userPosts = res === null || res === void 0 ? void 0 : res.posts; }, err => { }));
    }
    scrollTop() { window.scroll(0, 0); }
    makeAComment(event, input, positId, i) {
        var _a, _b;
        event.preventDefault();
        if (input.value.trim() != '' && ((_a = this.userProfilesService.userProfile) === null || _a === void 0 ? void 0 : _a._id)) {
            this.commentService.emit("addComment", {
                postId: positId,
                userId: (_b = this.userProfilesService.userProfile) === null || _b === void 0 ? void 0 : _b._id,
                comment: input.value.trim()
            }).then(res => {
                this.visitUserService.userPosts[i].numOfComments += 1;
                input.value = '';
                input.style.height = 'auto';
                input.style.height = input.scrollHeight + 'px';
            }, err => { this.router.navigate(["/error"]); });
        }
    }
    getPostComments(id, i) {
        this.scrollY = window.scrollY;
        this.commentsLoading = true;
        this.postComments = [];
        this.postCommentsIndex = i;
        this.subscriptions.push(this.userProfilesService.getPostComment(id).subscribe((res) => {
            this.commentsLoading = false;
            if (!this.userProfilesService.popUP) {
                this.cd.detectChanges();
                this.addCommentInput.nativeElement.focus();
            }
            this.popupReactions = res;
            this.postComments = res === null || res === void 0 ? void 0 : res.comments;
            this.popupPost = res === null || res === void 0 ? void 0 : res.post;
        }, err => {
        }));
    }
    openReactionModal(id, modal, i) {
        this.postReactions = [];
        this.sortReaction = [];
        this.subscriptions.push(this.userProfilesService.getPostComment(id).subscribe((res) => {
            this.updatePosts();
            this.postReactions = res === null || res === void 0 ? void 0 : res.reactions;
            let containerOfReactions = [
                res === null || res === void 0 ? void 0 : res.numOfLoves,
                res === null || res === void 0 ? void 0 : res.numOfHahas,
                res === null || res === void 0 ? void 0 : res.numOfWows,
                res === null || res === void 0 ? void 0 : res.numOfSads,
                res === null || res === void 0 ? void 0 : res.numOfLikes,
                res === null || res === void 0 ? void 0 : res.numOfAngrys
            ];
            let imgOfReaction = [
                "love",
                "haha",
                "wow",
                "sad",
                "like",
                "angry"
            ];
            for (let i = 0; i < 6; i++) {
                let max = Math.max(...containerOfReactions);
                this.sortReaction.push({ length: max, reactionImg: imgOfReaction[containerOfReactions.indexOf(max)] });
                imgOfReaction.splice(containerOfReactions.indexOf(max), 1);
                containerOfReactions.splice(containerOfReactions.indexOf(max), 1);
            }
            this.openModal(modal);
        }, err => {
        }));
    }
    deleteComment(commentId, postId, i) {
        this.subscriptions.push(this.userProfilesService.deletComment(commentId).subscribe(res => {
            this.visitUserService.userPosts[i].numOfComments -= 1;
            this.getPostComments(postId, i);
        }, err => { }));
    }
    updateComment(id, comment, postId, i, e) {
        e.preventDefault();
        if (comment.trim() !== '') {
            let updatedComment = { id, comment };
            this.subscriptions.push(this.userProfilesService.updateComment(updatedComment).subscribe(res => {
                this.getPostComments(postId, i);
                this.editCommentIndex = -1;
            }, err => { }));
        }
    }
    resizeTextArea() {
        this.cd.detectChanges();
        let textarea = this.editCommentInpu.nativeElement;
        textarea.focus();
        textarea.selectionStart = textarea.value.length;
        this.rendrer.setStyle(textarea, "height", `${textarea.scrollHeight}px`);
    }
    textAreaHeightAuto(textArea) {
        textArea.style.height = '34px';
        textArea.style.height = textArea.scrollHeight + 'px';
    }
    followOrUnFollow(id) {
        this.followLoading = true;
        this.subscriptions.push(this.folloOrUnfollowService.followOrUnFollow(id).subscribe(res => {
            this.commentService.emit("follow", {
                id
            }).then(res => {
                this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(res => {
                    this.followLoading = false;
                    this._snackBar.open(this.translatedSnacBarTextOne, this.translatedSnacBarTextTwo, {
                        horizontalPosition: 'left',
                        verticalPosition: 'bottom',
                        duration: 3000
                    });
                }, err => {
                }));
            }, err => {
                this.router.navigate(["/error"]);
            });
        }, err => { }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    showCommentsInMobileScreen(element) {
        this.rendrer.removeClass(element, "zIndex");
    }
    hideCommentsInMobileScreen(element) {
        this.rendrer.addClass(element, "zIndex");
    }
    closePopup() {
        this.userProfilesService.popUP = false;
        setTimeout(() => window.scrollTo(0, this.scrollY), 0);
        this.postComments = [];
        this.popupPost = [];
        this.postReactions = [];
        this.postCommentsIndex = -1;
    }
    navigate(id) {
        this.closePopup();
        this.router.navigate(['/visit', id]);
    }
    onKeydownHandler(event) {
        if (this.userProfilesService.popUP) {
            this.closePopup();
        }
    }
    makeReaction(reactionName, i, parentOfReactions, postId) {
        var _a, _b;
        let userPost = this.visitUserService.userPosts[i];
        this.rendrer.addClass(parentOfReactions, "hideParentOfReactions");
        if ((_a = userPost === null || userPost === void 0 ? void 0 : userPost.myReaction) === null || _a === void 0 ? void 0 : _a.length) {
            if (reactionName == ((_b = userPost === null || userPost === void 0 ? void 0 : userPost.myReaction[0]) === null || _b === void 0 ? void 0 : _b.reaction)) {
                userPost.myReaction = [];
            }
            else {
                userPost.myReaction = [];
                userPost === null || userPost === void 0 ? void 0 : userPost.myReaction.push({ reaction: reactionName });
            }
        }
        else {
            userPost.myReaction = [];
            userPost.myReaction.push({ reaction: reactionName });
        }
        this.commentService.emit("addReaction", {
            postId: postId,
            reaction: reactionName
        }).then(res => {
            this.userProfilesService.getPostComment(postId).subscribe((res) => {
                userPost.angry = res === null || res === void 0 ? void 0 : res.numOfAngrys;
                userPost.sad = res === null || res === void 0 ? void 0 : res.numOfSads;
                userPost.haha = res === null || res === void 0 ? void 0 : res.numOfHahas;
                userPost.wow = res === null || res === void 0 ? void 0 : res.numOfWows;
                userPost.like = res === null || res === void 0 ? void 0 : res.numOfLikes;
                userPost.love = res === null || res === void 0 ? void 0 : res.numOfLoves;
                userPost.numOfReactions = res === null || res === void 0 ? void 0 : res.numOfReactions;
            }, err => {
                this.router.navigate(["/error"]);
            });
        });
    }
    showParentOfReactionsOnHover(element) {
        this.rendrer.removeClass(element, "hideParentOfReactions");
    }
    hideParentOfReactionsOnHover(element) {
        this.rendrer.addClass(element, "hideParentOfReactions");
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
VisitProfileComponent.ɵfac = function VisitProfileComponent_Factory(t) { return new (t || VisitProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_2__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_3__["PeopleYouMayKnowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_5__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_6__["FollowOrUnfollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
VisitProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitProfileComponent, selectors: [["app-visit-profile"]], viewQuery: function VisitProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.updtaeSwiper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editCommentInpu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addCommentInput = _t.first);
    } }, hostBindings: function VisitProfileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function VisitProfileComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 17, vars: 5, consts: [[1, "container", 2, "min-height", "100vh"], [1, "row", "paddinggx"], [1, "col-lg-5", "mb-3"], ["id", "sticky", 1, "sticky-top"], [1, "col-lg-7", "mb-3"], [4, "ngIf", "ngIfElse"], ["contentt", ""], [1, "poppup"], ["reaction", ""], ["class", "popupp", 3, "darkMode", 4, "ngIf"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4"], [1, "first-section-wrapper", "d-flex", "align-items-center", "mb-3"], [1, "gravatar"], ["appearance", "circle", 3, "theme"], [1, "gravatar-title", "mx-3"], [3, "theme"], [1, "second-section-wrapper"], [1, "wrapper"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4", "my-3"], ["noPosts", ""], ["class", "py-1 postss bg-white  rounded-lg mb-3", 4, "ngFor", "ngForOf"], [1, "py-1", "postss", "bg-white", "rounded-lg", "mb-3"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", 3, "mouseleave"], [3, "mouseover"], ["alt", "", 1, "smllProfileImg", 3, "src", "click"], [1, "mx-3"], [3, "mouseover", "mouseleave"], [1, "userName"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "position-relative"], [1, "timee", "d-inline-block"], [1, "text-secondary"], [1, "timeOnHover"], [1, "px-3", "text-break"], ["elementt", ""], ["class", "font-weight-bold text-secondary", "style", "cursor: pointer;direction: inherit;", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "alt", "", "class", "w-100 mt-3", 3, "src", "click", 4, "ngIf"], [1, "postOptions", "px-3"], [1, "my-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount", 2, "cursor", "pointer", 3, "click"], ["alt", "", 1, "first", 3, "src"], ["first", ""], ["alt", "", 1, "last", 3, "src"], ["secondIMG", ""], [4, "ngIf"], ["class", " numOfComments", 3, "click", 4, "ngIf"], [1, "options", "list-unstyled", "d-flex", "justify-content-center", "mb-3"], [1, "showReactions", 3, "mouseover", "mouseleave"], [1, "userReact"], ["reactionFound", ""], [1, "hideParentOfReactions", "parentOfReactions"], ["parentOfReactions", ""], [1, "reactions", "bg-white", "p-1", "d-flex", "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "far", "fa-comment-alt"], [1, "mx-2"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "click"], ["alt", "", 1, "profile", 3, "src"], [1, "mb-2"], [1, "far", "fa-calendar-alt"], [1, "mx-1"], [1, "font-weight-bold", "text-secondary", 2, "cursor", "pointer", "direction", "inherit", 3, "click"], ["alt", "", 1, "w-100", "mt-3", 2, "cursor", "pointer", 3, "src", "click"], [1, "numOfComments", 3, "click"], [1, "far", "fa-thumbs-up"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "src"], ["alt", "", 3, "src"], ["class", "d-flex writeAcomment", 4, "ngIf"], [1, "parentOfComments", "mt-2"], [1, "comments", "list-unstyled", "my-2", "p-0"], ["commentsConetent", ""], [1, "d-flex", "writeAcomment"], [1, "position-relative", "w-100", 3, "ngStyle"], ["rows", "1", "type", "text", 1, "ml-2", 3, "ngClass", "placeholder", "keydown.enter", "input"], ["addCommentInput", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "30px", 3, "click"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], ["noCommentsYet", ""], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["alt", "", 2, "cursor", "pointer", 3, "routerLink", "src"], ["commentContent", ""], [1, "w-100"], [1, "position-relative", 3, "ngStyle"], [2, "margin-right", "0", "height", "32px !important", 3, "ngClass", "placeholder", "input", "focus", "blur", "keydown.esc", "keydown.enter"], ["editCommentInpu", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "20px", 3, "click"], ["class", "d-none d-md-inline", 4, "ngIf"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "d-none", "d-md-inline"], [1, "commnetContent"], [1, "font-weight-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", " fas fa-ellipsis-h mx-2", "style", "cursor: pointer;", 3, "matMenuTriggerFor", 4, "ngIf"], ["EditComment", "matMenu"], ["mat-menu-item", "", 3, "click"], ["commentP", ""], [1, "fas", "fa-ellipsis-h", "mx-2", 2, "cursor", "pointer", 3, "matMenuTriggerFor"], [1, "text-center", "py-4", "font-weight-bold", "text-secondary"], [1, "parentOfReactionsModal"], [1, "modal-header"], [3, "config"], ["swiperSlide", ""], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "parentOfimg", "reactionsModal"], [1, "list-unstyled", "p-0"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "click"], [1, "d-flex", "align-items-center", "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "ngClass", "click"], ["alt", "", 2, "width", "20px", "height", "20px", "margin", "0 5px", 3, "src"], [1, "mb-3"], ["alt", "", 1, "mainIMG", 2, "cursor", "pointer", 3, "routerLink", "src", "click"], ["alt", "", 1, "reactionImg", 3, "src"], [1, "mx-3", 2, "cursor", "pointer", 3, "routerLink", "click"], [1, "popupp"], [1, "imgSection", "d-flex", "justify-content-center", "align-items-center"], ["alt", "", 3, "src", 4, "ngIf", "ngIfElse"], ["popupLoading", ""], [1, "showComments", 3, "click"], [1, "fas", "fa-times", 3, "click"], [1, "zIndex", "commentsSection", "p-3"], ["commentsSection", ""], ["class", "d-flex align-items-center pt-3 ", 4, "ngIf"], [1, "autoScroll", "parentOfComments"], [1, "py-3", "mx-2"], ["ee", ""], [1, "postOptions"], ["class", "m-2 d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "lds-ring"], [1, "d-flex", "align-items-center", "pt-3"], ["alt", "", 1, "profilePopup", 2, "cursor", "pointer", 3, "src", "click"], [1, "m-0", 2, "cursor", "pointer", 3, "click"], [1, "m-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount"], ["firstImg", ""], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], [1, "font-weight-bold", 2, "cursor", "pointer", 3, "click"]], template: function VisitProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-visit-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-visit-following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-visit-followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-left-side-photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VisitProfileComponent_ng_container_10_Template, 33, 28, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VisitProfileComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VisitProfileComponent_ng_template_14_Template, 12, 8, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VisitProfileComponent_div_16_Template, 26, 15, "div", 9);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visitUserService.skeltonLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfilesService.popUP);
    } }, directives: [_visit_intro_visit_intro_component__WEBPACK_IMPORTED_MODULE_11__["VisitIntroComponent"], _visit_following_visit_following_component__WEBPACK_IMPORTED_MODULE_12__["VisitFollowingComponent"], _visit_followers_visit_followers_component__WEBPACK_IMPORTED_MODULE_13__["VisitFollowersComponent"], _left_side_photos_left_side_photos_component__WEBPACK_IMPORTED_MODULE_14__["LeftSidePhotosComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__["NgxSkeletonLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgStyle"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], swiper_angular__WEBPACK_IMPORTED_MODULE_19__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_19__["SwiperSlideDirective"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_20__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_21__["LangPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_22__["TextPipe"], _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_23__["MostReactionPipe"], _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_24__["SecondReactionPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_25__["ReactionTypePipe"]], styles: [".postsLoadingg.darkMode .loader,   .parentOfHomePage.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-post[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  border-radius: 25px;\n  cursor: pointer;\n  color: #65676b;\n  font-size: large;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.add-post[_ngcontent-%COMP%]   .yrMind[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #E4E6EB !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%] {\n  border: 1px solid #ced0d4;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border: none;\n  margin: 15px 0;\n  min-height: 50px;\n  width: 100%;\n  font-size: 20px;\n  background-color: transparent;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.modal-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 30px;\n  font-weight: normal;\n}\n\n.photoIcon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #F0F2F5;\n}\n\n.iconn[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  background-image: url('icon.png');\n  background-position: 0 -150px;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 2px 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border-radius: 5px;\n  font-weight: 500;\n  font-size: 15px;\n  color: #65676b;\n  cursor: pointer;\n  padding: 6px 20px;\n  text-align: center;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .userReact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .writeAcomment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%] {\n  left: 13px;\n  z-index: 1;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: -1px;\n  display: block;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 35px !important;\n}\n\n.postss[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .hideParentOfReactions[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .showReactions[_ngcontent-%COMP%]:hover   .reactions[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfReactions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -52px;\n  height: 60px;\n  padding: 10px 5px;\n  overflow: hidden;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  border-radius: 30px;\n  transition: 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%] {\n  color: #65676b;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: #F0F2F5;\n  border-radius: 20px;\n  padding: 7px 45px 7px 15px;\n  width: 100%;\n  resize: none;\n  height: 32px;\n  overflow: hidden;\n  margin-right: 15px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.postss[_ngcontent-%COMP%]   .timeOnHover[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  position: absolute;\n  top: 25px;\n  left: -18px;\n  background: rgba(13, 13, 13, 0.77);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 100px;\n  z-index: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   small[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 1px solid var(--secondary);\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   .timeOnHover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #D8DADF;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EE3050;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .sad[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA82A;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .angry[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DD6B0E;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .wow[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA85F;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .haha[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA823;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0B86ED;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .mainIMG[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .reactionImg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -6px;\n  bottom: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid gray;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #4E4F50;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-color: rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n\n@media only screen and (max-width: 992px) {\n  .profileOnHover[_ngcontent-%COMP%], .timeOnHover[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n  .darkModeMenu {\n  background-color: #242526 !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n  .darkModeMenu .mat-menu-item {\n  color: #B8BBBF;\n}\n\n  .darkModeMenu .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n.popupp[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: black;\n  z-index: 11111111111111110000;\n  display: flex;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  text-align: center;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  left: 15px;\n  top: 20px;\n  font-size: large;\n  background: none;\n  color: white;\n  padding: 0;\n  cursor: pointer;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background: white;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .autoScroll[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow: auto;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   img.profilePopup[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  background: none;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: none !important;\n  overflow-y: auto !important;\n}\n\n.popupp.darkMode[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n}\n\n.popupp.darkMode[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    color: white;\n    position: absolute;\n    bottom: 4.5%;\n    width: 100%;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n  }\n  .popupp[_ngcontent-%COMP%]   .zIndex[_ngcontent-%COMP%] {\n    z-index: -1;\n  }\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n  .parentOfReactionsModal .modal-header {\n  align-items: normal !important;\n  padding: 1rem 1rem 0 !important;\n}\n\n  .parentOfReactionsModal .close {\n  color: #b9b9b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGxhY2Vob2xkZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcYWRkUG9zdC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx1c2VyLXZpc2l0LWhvbWVQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0kseUJBQUE7QUNJWjs7QURBRTs7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7QUNJSjs7QURISTs7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FDTVI7O0FETFE7O0VBQ0ksb0NBQUE7QUNRWjs7QURKRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUNPSjs7QUN0REE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHlESjs7QUN0REE7RUFDSSwyQ0FBQTtBRHlESjs7QUN4REk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDBEUjs7QUN6RFE7RUFDSSx5QkFBQTtBRDJEWjs7QUN4REk7RUFBUyxpQkFBQTtBRDJEYjs7QUN4REE7RUFDSSxvQ0FBQTtBRDJESjs7QUMxREk7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUQ0RFI7O0FDM0RRO0VBQVEseUJBQUE7QUQ4RGhCOztBQzVESTtFQUNJLHlCQUFBO0FEOERSOztBQzNEUTtFQUNJLG9DQUFBO0FENkRaOztBQ3ZESTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRHlEUjs7QUN4RFE7RUFFRSwwQkFBQTtBRHlEVjs7QUN0REk7RUFDSSwwQkFBQTtFQUNBLG9DQUFBO0FEd0RSOztBQ3ZEUTtFQUNJLG9DQUFBO0FEeURaOztBQ3BESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRHNEUjs7QUNuREk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBRHFEUjs7QUNwRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRHNEWjs7QUNuREk7RUFFSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEb0RSOztBQ25EUTtFQUNJLHlCQUFBO0FEcURaOztBQ2pETTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRG1EUjs7QUM5Q0U7RUFBVyxrQkFBQTtBRGtEYjs7QUNqREU7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7QURpRE47O0FDckRNO0VBQ0kseUJBQUE7QUR1RFY7O0FDakRFO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0FEb0ROOztBQ2xERTtFQUVJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRG9ETjs7QUNuRE07RUFBWSx1QkFBQTtBRHNEbEI7O0FFbExFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FGcUxKOztBRXBMRztFQUlLLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZtTFI7O0FFN0xRO0VBQ0kseUJBQUE7QUYrTFo7O0FFbkxRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUZxTFo7O0FFaExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRm1MSjs7QUVoTEk7RUFDSSxvQkFBQTtBRm1MUjs7QUVsTFE7RUFDSSxtQkFBQTtBRm9MWjs7QUVsTFE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZvTFo7O0FFNUtJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRjhLUjs7QUU1S0k7RUFDSSxVQUFBO0FGOEtSOztBRTVLSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FGOEtSOztBRTVLSztFQUFNLGlCQUFBO0VBQ0gsZ0JBQUE7RUFDQyxjQUFBO0FGK0tUOztBRTdLSTtFQUFlLDRCQUFBO0FGZ0xuQjs7QUU5S0E7RUFDSSxrQkFBQTtBRmlMSjs7QUUvS1E7RUFDSSxlQUFBO0FGaUxaOztBRWhMWTtFQUFTLDBCQUFBO0FGbUxyQjs7QUU5S1E7RUFBd0IsV0FBQTtBRmlMaEM7O0FFaExRO0VBQWlDLGFBQUE7QUZtTHpDOztBRWxMUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRm1MWjs7QUVqTFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBRm1MWjs7QUVsTFk7RUFDRSxrQkFBQTtBRm9MZDs7QUVsTFk7RUFDSSxnQkFBQTtBRm9MaEI7O0FFbkxnQjtFQUNJLHFCQUFBO0FGcUxwQjs7QUVqTFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FGbUxaOztBRWxMWTtFQUNJLDBCQUFBO0FGb0xoQjs7QUVqTFE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRm1MWjs7QUU5S1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FGZ0xaOztBRXRLSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUZ3S1I7O0FFdktRO0VBQ0csOEJBQUE7QUZ5S1g7O0FFdEtJO0VBRUksU0FBQTtBRnVLUjs7QUV0S1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUZ3S1o7O0FFaktJO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRm1LTDs7QUVoS0E7RUFBbUMseUNBQUE7QUZtS25DOztBRWxLQTtFQUE0QixjQUFBO0FGcUs1Qjs7QUVwS0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUZzS0o7O0FFcktJO0VBQ0ksbUJBQUE7QUZ1S1I7O0FFaEtJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUZtS1I7O0FFbEtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRm9LWjs7QUVsS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZvS1o7O0FFbEtRO0VBQVMsMEJBQUE7QUZxS2pCOztBRTdKRTs7RUFBSSw4Q0FBQTtBRmtLTjs7QUVqS0U7O0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FGb0tOOztBRW5LTTs7RUFBYSxvQ0FBQTtBRnVLbkI7O0FFdEtNOztFQUFvQixvQ0FBQTtBRjBLMUI7O0FFeEtVOztFQUNHLDZCQUFBO0FGMktiOztBRXZLVTs7RUFDSSxtQkFBQTtBRjBLZDs7QUVqS0s7O0VBQ0ksc0NBQUE7QUZvS1Q7O0FFbktROztFQUlLLGNBQUE7QUZtS2I7O0FFdEthOztFQUNDLHlCQUFBO0FGeUtkOztBRXBLTTs7O0VBQ0kscURBQUE7RUFDQSx5QkFBQTtBRndLVjs7QUV0S007O0VBQWMsY0FBQTtBRjBLcEI7O0FFcEtBO0VBRUs7SUFDSSx3QkFBQTtFRnNLUDtBQUNGOztBRWpLQztFQUVHLG9DQUFBO0VBQ0Esa0RBQUE7QUZrS0o7O0FFaktJO0VBQ0ksY0FBQTtBRm1LUjs7QUVsS1E7RUFBUyx5QkFBQTtBRnFLakI7O0FFMUpBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBRjZKSjs7QUU1Skk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRjhKUjs7QUU3SlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUYrSlo7O0FFN0pRO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FGOEpaOztBRTNKSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUY2SlI7O0FFNUpRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUY4Slo7O0FFNUpRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRjhKWjs7QUU1SlE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUY2Slo7O0FFMUpJO0VBRUksMkJBQUE7RUFDQSwyQkFBQTtBRjJKUjs7QUVuSkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FGcUpSOztBRXBKUTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUZzSlo7O0FFbEpBO0VBRVE7SUFDSSxVQUFBO0VGb0pWO0VFaEpVO0lBQ0ksYUFBQTtFRmtKZDtFRS9JTTtJQUNJLFVBQUE7RUZpSlY7QUFDRjs7QUU5SUE7RUFFUTtJQUNJLGFBQUE7RUYrSVY7O0VFM0lNO0lBQVcsYUFBQTtFRitJakI7QUFDRjs7QUU3SUE7RUFFUTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUY4SVY7RUV6SVU7SUFFSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRjBJZDtFRXZJTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFRnlJVjtFRXZJTTtJQUFTLFdBQUE7RUYwSWY7QUFDRjs7QUV0SUk7RUFBZ0IsV0FBQTtBRnlJcEI7O0FFdklRO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBRnlJWjs7QUV2SVE7RUFBUSxjQUFBO0FGMEloQiIsImZpbGUiOiJ2aXNpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiVkYXJrbW9kZUxvYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzJcclxufVxyXG4lcHJvZmlsZU9uSG92ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgaW1nLnByb2ZpbGUge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViIDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcgMjI3IDIyNyAvIDEwJSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAlb3ZlcklNRyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyIDExNSAxMTUgLyAxNyUpO1xyXG4gIH0iLCI6Om5nLWRlZXAgLnBvc3RzTG9hZGluZ2cuZGFya01vZGUgLmxvYWRlcixcbjo6bmctZGVlcCAucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAubG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyO1xufVxuXG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIGltZy5wcm9maWxlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURGO1xufVxuXG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNDksIDIzMywgMjMzLCAwLjI0KSAwcHggM3B4IDE1cHggIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b24sXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wcm9maWxlT25Ib3ZlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HOmhvdmVyOjphZnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMTUsIDExNSwgMC4xNyk7XG59XG5cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXBvc3Qge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuLmFkZC1wb3N0IHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjU2NzZiO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmFkZC1wb3N0IHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xufVxuLmFkZC1wb3N0IC55ck1pbmQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFkZC1wb3N0LmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIHAge1xuICBjb2xvcjogI0U0RTZFQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIC50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4uYWRkLXBvc3QuZGFya01vZGUgLnBob3RvSWNvbjpob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0MgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkgLnRvWW91clBvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkMGQ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWJvZHkgLnRvWW91clBvc3QgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5wb3N0IHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc3ZjIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5wb3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NkZFNSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1vZGFsLWJvZHkgLnBhcmVudE9maW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubW9kYWwtYm9keSAucGFyZW50T2ZpbWcgLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtYm9keSAuYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzE4NzdmMjtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xufVxuLm1vZGFsLWJvZHkgOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBob3RvSWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBob3RvSWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5waG90b0ljb246aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xufVxuXG4uaWNvbm4ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1MHB4O1xufVxuXG4ucG9zdExvYWRpbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg5LCA4NywgODcsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuLnBvc3RMb2FkaW5nIHAuZGFya01vZGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm9wdGlvbnMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY1Njc2YjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAub3B0aW9ucyAudXNlclJlYWN0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC53cml0ZUFjb21tZW50IGltZywgLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyBpbWcsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5wYXJlbnRPZkNvbW1lbnRzIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5wYXJlbnRPZkNvbW1lbnRzIC5jb21tZW50cyB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMgbGksIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5wYXJlbnRPZkNvbW1lbnRzIC5jb21tZW50cyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucG9wdXBwIC5wYXJlbnRPZkNvbW1lbnRzIC5jb21tZW50cyAuY29tbW5ldENvbnRlbnQsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5wYXJlbnRPZkNvbW1lbnRzIC5jb21tZW50cyAuY29tbW5ldENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wb3B1cHAgLnJlYWN0aW9uc0NvdW50IGltZywgLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wb3B1cHAgLnJlYWN0aW9uc0NvdW50IGltZy5maXJzdCwgLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IGltZy5maXJzdCB7XG4gIHotaW5kZXg6IDI7XG59XG4ucG9wdXBwIC5yZWFjdGlvbnNDb3VudCBpbWcubGFzdCwgLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IGltZy5sYXN0IHtcbiAgbGVmdDogMTNweDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3B1cHAgLnJlYWN0aW9uc0NvdW50IHNwYW4sIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBvcHVwcCAucmVhY3Rpb25zQ291bnQgLmV4aXN0ICsgc3BhbiwgLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IC5leGlzdCArIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdHNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm51bU9mQ29tbWVudHMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAubnVtT2ZDb21tZW50czpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmhpZGVQYXJlbnRPZlJlYWN0aW9ucyB7XG4gIHotaW5kZXg6IC0xO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnNob3dSZWFjdGlvbnM6aG92ZXIgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZSZWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUycHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnMgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9ucyBsaSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zIGxpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmdyYXlQIHtcbiAgY29sb3I6ICM2NTY3NmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmdyYXlQOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI0YwRjJGNTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogN3B4IDQ1cHggN3B4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mQ29tbWVudHMge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnBvc3RzcyAudXNlck5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ucG9zdHNzIC51c2VyTmFtZTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIHtcbiAgdG9wOiAzN3B4O1xufVxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgLm92ZXJJTUcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb3N0c3MgLnRpbWVPbkhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogLTE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDEzLCAxMywgMC43Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnBvc3RzcyAudGltZWU6aG92ZXIgc21hbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnBvc3RzcyAudGltZWU6aG92ZXIgLnRpbWVPbkhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucG9zdHNzIC5mYS1lbGxpcHNpcy1oIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0Q4REFERjtcbn1cblxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmxvdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VFMzA1MDtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5zYWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VBQTgyQTtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5hbmdyeSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREQ2QjBFO1xufVxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLndvdyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUFBODVGO1xufVxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmhhaGEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VBQTgyMztcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5saWtlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjg2RUQ7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25zTW9kYWwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCAubWFpbklNRyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25JbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICBib3R0b206IDNweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCBoMzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSBocixcbi5wYWRkaW5nZ3guZGFya01vZGUgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3Rzcyxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUI7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdHNzIC5yZWFjdGlvbnMsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3MgLnJlYWN0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0c3MgLmNvbW1lbnRzU2VjdGlvbixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RzcyAuY29tbWVudHNTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RzcyAudXNlck5hbWU6aG92ZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3MgLnVzZXJOYW1lOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRFNEY1MDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaSxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGkge1xuICBjb2xvcjogI0I4QkJCRjtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyA+IGxpOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgdGV4dGFyZWEsIC5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAuY29tbW5ldENvbnRlbnQsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyB0ZXh0YXJlYSxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5jb21tbmV0Q29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RPcHRpb25zIDo6cGxhY2Vob2xkZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnByb2ZpbGVPbkhvdmVyLCAudGltZU9uSG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4O1xufVxuOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnUgLm1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogI0I4QkJCRjtcbn1cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IC5tYXQtbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcbn1cblxuLnBvcHVwcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogMTExMTExMTExMTExMTExMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9wdXBwIC5pbWdTZWN0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3B1cHAgLmltZ1NlY3Rpb24gaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnBvcHVwcCAuaW1nU2VjdGlvbiAuZmEtdGltZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAyMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wb3B1cHAgLmNvbW1lbnRzU2VjdGlvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucG9wdXBwIC5jb21tZW50c1NlY3Rpb24gLmF1dG9TY3JvbGwge1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIGltZy5wcm9maWxlUG9wdXAge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucG9wdXBwIC5jb21tZW50c1NlY3Rpb24gLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyB7XG4gIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuLnBvcHVwcC5kYXJrTW9kZSAuY29tbWVudHNTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLnBvcHVwcC5kYXJrTW9kZSAuY29tbWVudHNTZWN0aW9uIC5jb21tbmV0Q29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucG9wdXBwIC5pbWdTZWN0aW9uIC5zaG93Q29tbWVudHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbWdTZWN0aW9uIC5zaG93Q29tbWVudHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29tbWVudHNTZWN0aW9uIC5mYS10aW1lcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9wdXBwIC5pbWdTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiAuc2hvd0NvbW1lbnRzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNC41JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucG9wdXBwIC5jb21tZW50c1NlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucG9wdXBwIC56SW5kZXgge1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG46Om5nLWRlZXAgLmdyYXZhdGFyLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBub3JtYWwgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAuY2xvc2Uge1xuICBjb2xvcjogI2I5YjliOTtcbn0iLCIlaW5wdXR0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbi8vLy8vLy8vLy8vLy8gc3RhcnQgYWRkIHBvc3Qgc2VjdGlvblxyXG4uYWRkLXBvc3Qge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIHAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM2NTY3NmI7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC55ck1pbmQge21hcmdpbi1sZWZ0OiAxMHB4O31cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vIGVuZCBhZGQgcG9zdCBzZWN0aW9uXHJcbi5hZGQtcG9zdC5kYXJrTW9kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogI0U0RTZFQjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSk7XHJcbiAgICAgICAgJjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO31cclxuICAgIH1cclxuICAgIC50ZXh0LXNlY29uZGFyeXtcclxuICAgICAgICBjb2xvcjojRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGhvdG9JY29uOmhvdmVyIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy8vLy8vLy8vIHN0YXJ0IG1vZGFsIGJvZHlcclxuLm1vZGFsLWJvZHkge1xyXG4gICAgLnRvWW91clBvc3RcclxuICAgIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkMGQ0O1xyXG4gICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIEBleHRlbmQgJWlucHV0dDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wb3N0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjZGRTUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXJlbnRPZmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLmZhLXRpbWVzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXNlY29uZGFyeVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjMTg3N2YyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgLy8vLy8vLy8vLyBlbmQgbW9kYWwgYm9keVxyXG4gIC8vLy8gc3RhcnQgZ2xvYmFsXHJcbiAgLnBob3RvSWNvbntib3JkZXItcmFkaXVzOiA1cHg7fVxyXG4gIC5waG90b0ljb246aG92ZXIge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XHJcbiAgICAgIH1cclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ubiB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ljb24ucG5nJyk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1MHB4O1xyXG4gIH1cclxuICAucG9zdExvYWRpbmdcclxuICB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig4OSA4NyA4NyAvIDUwJSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwLmRhcmtNb2RlIHtjb2xvcjpibGFjayAhaW1wb3J0YW50fVxyXG4gIH1cclxuICAvLy8vIGVuZCBnbG9iYWwgIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9wbGFjZWhvbGRlci5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvYWRkUG9zdC5zY3NzXCI7XHJcbiAgJW9wdGlvbnMge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIHBhZGRpbmc6MnB4IDEwcHg7XHJcbiAgID4gbGkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2l0aW9uOi41cztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NTY3NmI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6NnB4IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIH1cclxuICAgICAudXNlclJlYWN0IHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgfVxyXG4vLy8vLy8vLy8vLy8vLy8gc3RhcnQgcG9zdHMgc2VjdGlvblxyXG4lY29tbWVudHNJbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuJXBhcmVudE9mQ29tZW50c3NzIHtcclxuICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tbW5ldENvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgQGV4dGVuZCAlY29tbWVudHNJbWc7XHJcbiAgICB9XHJcbn1cclxuJXJlYWN0aW9uc0NvdW50IHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIGltZy5maXJzdCB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIGltZy5sYXN0IHtcclxuICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAgc3BhbiB7bWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZXhpc3QgKyBzcGFuIHttYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O31cclxufVxyXG4ucG9zdHNzIHsgICAgICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAucG9zdE9wdGlvbnMge1xyXG4gICAgICAgIC5udW1PZkNvbW1lbnRze1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYWN0aW9uc0NvdW50IHtcclxuICAgICAgICAgIEBleHRlbmQgJXJlYWN0aW9uc0NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGlkZVBhcmVudE9mUmVhY3Rpb25zIHt6LWluZGV4OiAtMTt9XHJcbiAgICAgICAgLnNob3dSZWFjdGlvbnM6aG92ZXIgLnJlYWN0aW9ucyB7bWFyZ2luLXRvcDogMCA7fVxyXG4gICAgICAgIC5wYXJlbnRPZlJlYWN0aW9uc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC01MnB4O1xyXG4gICAgICAgICAgLy8gIGxlZnQ6IC01MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAucmVhY3Rpb25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgICAgICAgICAgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmF5UCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRjJGNTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDQ1cHggN3B4IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgQGV4dGVuZCAlb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcmVudE9mQ29tbWVudHMge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIEBleHRlbmQgJXBhcmVudE9mQ29tZW50c3NzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud3JpdGVBY29tbWVudCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVjb21tZW50c0ltZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXI7XHJcbiAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgICAgIC5vdmVySU1HIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIC50aW1lT25Ib3ZlciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogMjVweDtcclxuICAgICBsZWZ0OiAtMThweDtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2IoMTMgMTMgMTMgLyA3NyUpO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgei1pbmRleDogMTtcclxuIH1cclxuXHJcbi50aW1lZTpob3ZlciAgc21hbGw6Zmlyc3Qtb2YtdHlwZSB7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7fVxyXG4udGltZWU6aG92ZXIgLnRpbWVPbkhvdmVyIHsgZGlzcGxheTogYmxvY2sgOyB9IFxyXG4uZmEtZWxsaXBzaXMtaCB7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6I0Q4REFERjtcclxuICAgIH1cclxufSBcclxufVxyXG4vLy8vLy8vLy8vLy8vLyBlbmQgcG9zdHMgc2VjdGlvblxyXG4vLy8vLy8gc3RhcnQgcmVhY3Rpb25zTW9kYWxcclxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwge1xyXG4gICAgLmxvdmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUUzMDUwO1xyXG4gICAgfVxyXG4gICAgLnNhZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MkE7XHJcbiAgICB9XHJcbiAgICAuYW5ncnkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREQ2QjBFO1xyXG4gICAgfVxyXG4gICAgLndvdyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4NUY7XHJcbiAgICB9XHJcbiAgICAuaGFoYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MjM7XHJcbiAgICB9XHJcbiAgICAubGlrZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjg2RUQ7XHJcbiAgICB9XHJcbiAgICAucmVhY3Rpb25zTW9kYWwge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLm1haW5JTUcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFjdGlvbkltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMzpob3Zlcnt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vIGVuZCByZWFjdGlvbnNNb2RhbFxyXG5cclxuLy8vIHN0YXJ0IGRhcmsgbW9kZVxyXG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSxcclxuLnBhZGRpbmdneC5kYXJrTW9kZSB7XHJcbiAgaHIge2JvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM1IDIzNSAyMzUgLyAxMCUpO31cclxuICAucG9zdHNzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAucmVhY3Rpb25zeyAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O31cclxuICAgICAgLmNvbW1lbnRzU2VjdGlvbiAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAudXNlck5hbWUge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmEtZWxsaXBzaXMtaCB7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAgIzRFNEY1MFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlO1xyXG4gIH1cclxuXHJcbiAucG9zdE9wdGlvbnMge1xyXG4gICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XHJcbiAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgY29sb3I6I0I4QkJCRlxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dGFyZWEsLmNvbW1uZXRDb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICA6OnBsYWNlaG9sZGVye2NvbG9yOiNCOEJCQkZ9XHJcbiB9XHJcbn1cclxuXHJcbi8vLyBlbmQgZGFyayBtb2RlXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgXHJcbiAgICAgLnByb2ZpbGVPbkhvdmVyICwgLnRpbWVPbkhvdmVyIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAgIFxyXG4gfVxyXG4gXHJcblxyXG4gOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnVcclxuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4O1xyXG4gICAgLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAjQjhCQkJGO1xyXG4gICAgICAgICY6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7fVxyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAucG9zdHNMb2FkaW5nZy5kYXJrTW9kZSAubG9hZGVyLFxyXG4gICAgLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLmxvYWRlclxyXG57XHJcbiAgQGV4dGVuZCAlZGFya21vZGVMb2FkZXI7XHJcbn1cclxufVxyXG5cclxuLnBvcHVwcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHotaW5kZXg6IDExMTExMTExMTExMTExMTExMTExO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5pbWdTZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXRpbWVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAuYXV0b1Njcm9sbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZy5wcm9maWxlUG9wdXAge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10aW1lc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXJlbnRPZkNvbW1lbnRzXHJcbiAgICB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93LXk6ICBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgQGV4dGVuZCAlcGFyZW50T2ZDb21lbnRzc3M7XHJcbiAgICB9XHJcbiAgICAucmVhY3Rpb25zQ291bnQge1xyXG4gICAgICAgIEBleHRlbmQgJXJlYWN0aW9uc0NvdW50O1xyXG4gICAgICB9XHJcbn1cclxuLnBvcHVwcC5kYXJrTW9kZSB7XHJcbiAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jb21tbmV0Q29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5wb3B1cHAge1xyXG4gICAgICAgIC5pbWdTZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgLy8gaW1nIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLnNob3dDb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50c1NlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW1nU2VjdGlvbiB7XHJcbiAgICAgICAgLnNob3dDb21tZW50cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbW1lbnRzU2VjdGlvbiB7XHJcbiAgICAgICAgLmZhLXRpbWVzIHtkaXNwbGF5OiBub25lO31cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucG9wdXBwIHtcclxuICAgICAgICAuaW1nU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAvLyBpbWcge1xyXG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAuc2hvd0NvbW1lbnRzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNC41JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1lbnRzU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC56SW5kZXgge3otaW5kZXg6IC0xO31cclxuICAgIH1cclxufVxyXG4vLy8vIHJlYWN0aW9uTW9kZVxyXG46Om5nLWRlZXAge1xyXG4gICAgLmdyYXZhdGFyLXRpdGxle3dpZHRoOiAxMDAlO31cclxuICAgIC5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIHtcclxuICAgICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6bm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZSB7Y29sb3I6ICNiOWI5Yjk7fVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "zlc1":
/*!****************************************************************************************!*\
  !*** ./src/app/view/visit-user/viist-profile-photos/viist-profile-photos.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViistProfilePhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViistProfilePhotosComponent", function() { return ViistProfilePhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visit-user.service */ "2gma");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ViistProfilePhotosComponent_slide_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.visituser == null ? null : ctx_r0.visituser.userProfile == null ? null : ctx_r0.visituser.userProfile.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ViistProfilePhotosComponent_ng_container_6_slide_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3 == null ? null : item_r3.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ViistProfilePhotosComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViistProfilePhotosComponent_ng_container_6_slide_1_Template, 3, 1, "slide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.visituser == null ? null : ctx_r1.visituser.userProfile == null ? null : ctx_r1.visituser.userProfile.previousProfilePhotos);
} }
const _c0 = function (a1) { return ["/visit", a1]; };
class ViistProfilePhotosComponent {
    constructor(visituser, activatedroute, title, router) {
        this.visituser = visituser;
        this.activatedroute = activatedroute;
        this.title = title;
        this.router = router;
        this.subscriptions = [];
    }
    ngOnInit() {
        window.scroll(0, 0);
        this.subscriptions.push(this.activatedroute.params.subscribe(param => {
            this.visituser.userId = param.id;
            this.subscriptions.push(this.visituser.getuserProfile(param.id).subscribe((res) => {
                var _a, _b, _c, _d;
                this.visituser.userProfile = res.user;
                this.title.setTitle(`${(_a = this.visituser.userProfile) === null || _a === void 0 ? void 0 : _a.firstName.slice(0, 1).toUpperCase()}${(_b = this.visituser.userProfile) === null || _b === void 0 ? void 0 : _b.firstName.slice(1)} 
              ${(_c = this.visituser.userProfile) === null || _c === void 0 ? void 0 : _c.lastName.slice(0, 1).toUpperCase()}${(_d = this.visituser.userProfile) === null || _d === void 0 ? void 0 : _d.lastName.slice(1)}`);
            }, err => { }));
        }));
    }
    reload() { location.reload(); }
    onKeydownHandler(event) {
        var _a;
        this.router.navigate(['/visit', (_a = this.visituser) === null || _a === void 0 ? void 0 : _a.userId]);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
ViistProfilePhotosComponent.ɵfac = function ViistProfilePhotosComponent_Factory(t) { return new (t || ViistProfilePhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_visit_user_service__WEBPACK_IMPORTED_MODULE_1__["VisitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViistProfilePhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViistProfilePhotosComponent, selectors: [["app-viist-profile-photos"]], hostBindings: function ViistProfilePhotosComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function ViistProfilePhotosComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 7, vars: 6, consts: [[1, "profilePhotos", "position-relative", "overflow-hidden"], [1, "fas", "fa-times", 3, "routerLink"], [1, "fas", "fa-redo-alt", 3, "click"], [1, "profilePhotosWidth", "mx-auto"], [3, "interval"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh"], ["alt", "first slide", 1, "vhIMG", 2, "display", "block", 3, "src"], [4, "ngFor", "ngForOf"], ["alt", "second slide", 1, "vhIMG", 2, "display", "block", 3, "src"]], template: function ViistProfilePhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViistProfilePhotosComponent_Template_i_click_2_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViistProfilePhotosComponent_slide_5_Template, 3, 1, "slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViistProfilePhotosComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.visituser == null ? null : ctx.visituser.userId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visituser == null ? null : ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.profilePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visituser == null ? null : ctx.visituser.userProfile == null ? null : ctx.visituser.userProfile.previousProfilePhotos == null ? null : ctx.visituser.userProfile.previousProfilePhotos.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.profilePhotos[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: black;\n}\n.profilePhotos[_ngcontent-%COMP%]   .fa-redo-alt[_ngcontent-%COMP%], .profilePhotos[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%], .profilePhotos[_ngcontent-%COMP%]   .fa-trash-alt[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  text-shadow: black 0px 3px 8px;\n  background: none !important;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  z-index: 111;\n}\n.profilePhotos[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  top: 40px;\n  right: 35px;\n  font-size: 15px;\n}\n.profilePhotos[_ngcontent-%COMP%]   .fa-redo-alt[_ngcontent-%COMP%] {\n  top: 40px;\n  right: 75px;\n  font-size: 15px;\n}\n.profilePhotos[_ngcontent-%COMP%]   .fa-trash-alt[_ngcontent-%COMP%] {\n  top: 40px;\n  right: 120px;\n  font-size: 15px;\n}\n  .vhIMG {\n  max-height: 100vh;\n  max-width: 100%;\n}\n  .carousel-indicators {\n  display: none;\n}\n  .icon-next,   .icon-prev {\n  background-image: none;\n}\n  .icon-next:after,   .icon-prev:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 600;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background: gray;\n  color: black;\n  padding: 15px;\n  border-radius: 50%;\n  font-size: 20px;\n  position: absolute;\n}\n  .icon-next:after {\n  content: \"\uF054\";\n  right: 45px;\n}\n  .icon-prev:after {\n  content: \"\uF053\";\n  left: 45px;\n}\n@media only screen and (max-width: 600px) {\n  .fa-trash-alt[_ngcontent-%COMP%] {\n    top: 40px !important;\n    right: unset !important;\n    left: 40px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlpc3QtcHJvZmlsZS1waG90b3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHByb2ZpbGUtcGhvdG9zLXNsaWRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBREVKO0FDREk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURHUjtBQ0RJO0VBQVUsU0FBQTtFQUFVLFdBQUE7RUFBWSxlQUFBO0FETXBDO0FDTEk7RUFBYSxTQUFBO0VBQVUsV0FBQTtFQUFZLGVBQUE7QURVdkM7QUNUSTtFQUFjLFNBQUE7RUFBVSxZQUFBO0VBQWEsZUFBQTtBRGN6QztBQ1hJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEY1I7QUNaSTtFQUFxQixhQUFBO0FEZXpCO0FDZEk7RUFDSSxzQkFBQTtBRGdCUjtBQ2ZRO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEaUJaO0FDZGdCO0VBQVMsWUFBQTtFQUFpQixXQUFBO0FEa0IxQztBQ2pCZ0I7RUFBUyxZQUFBO0VBQWlCLFVBQUE7QURxQjFDO0FDbEJBO0VBSUk7SUFFSSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RURpQk47QUFDRiIsImZpbGUiOiJ2aWlzdC1wcm9maWxlLXBob3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9maWxlUGhvdG9zIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4ucHJvZmlsZVBob3RvcyAuZmEtcmVkby1hbHQsIC5wcm9maWxlUGhvdG9zIC5mYS10aW1lcywgLnByb2ZpbGVQaG90b3MgLmZhLXRyYXNoLWFsdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogYmxhY2sgMHB4IDNweCA4cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTE7XG59XG4ucHJvZmlsZVBob3RvcyAuZmEtdGltZXMge1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZmlsZVBob3RvcyAuZmEtcmVkby1hbHQge1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiA3NXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZmlsZVBob3RvcyAuZmEtdHJhc2gtYWx0IHtcbiAgdG9wOiA0MHB4O1xuICByaWdodDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuOjpuZy1kZWVwIC52aElNRyB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5pY29uLW5leHQsIDo6bmctZGVlcCAuaWNvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbjo6bmctZGVlcCAuaWNvbi1uZXh0OmFmdGVyLCA6Om5nLWRlZXAgLmljb24tcHJldjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOjpuZy1kZWVwIC5pY29uLW5leHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+BlFwiO1xuICByaWdodDogNDVweDtcbn1cbjo6bmctZGVlcCAuaWNvbi1wcmV2OmFmdGVyIHtcbiAgY29udGVudDogXCLvgZNcIjtcbiAgbGVmdDogNDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZmEtdHJhc2gtYWx0IHtcbiAgICB0b3A6IDQwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIucHJvZmlsZVBob3RvcyB7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIC5mYS1yZWRvLWFsdCwuZmEtdGltZXMsLmZhLXRyYXNoLWFsdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAgMCAwKSAwcHggM3B4IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxMTE7XHJcbiAgICB9XHJcbiAgICAuZmEtdGltZXN7dG9wOiA0MHB4O3JpZ2h0OiAzNXB4O2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAuZmEtcmVkby1hbHR7dG9wOiA0MHB4O3JpZ2h0OiA3NXB4O2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAuZmEtdHJhc2gtYWx0e3RvcDogNDBweDtyaWdodDogMTIwcHg7Zm9udC1zaXplOiAxNXB4O31cclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgLnZoSU1HIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tkaXNwbGF5OiBub25lO31cclxuICAgIC5pY29uLW5leHQsLmljb24tcHJldiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb24tbmV4dCB7JjphZnRlciB7Y29udGVudDogXCJcXGYwNTRcIjtyaWdodDogNDVweDt9fVxyXG4gICAgLmljb24tcHJldiB7JjphZnRlciB7Y29udGVudDogXCJcXGYwNTNcIjtsZWZ0OiA0NXB4O319XHJcbn1cclxuLy8gLnByb2ZpbGVQaG90b3NXaWR0aCB7d2lkdGg6IDUwJTt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC8vIC5wcm9maWxlUGhvdG9zV2lkdGgge1xyXG4gICAgLy8gICAgIHdpZHRoOiA5NSU7XHJcbiAgICAvLyB9XHJcbiAgICAuZmEtdHJhc2gtYWx0XHJcbiAgICB7XHJcbiAgICAgICAgdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6dW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-view-visit-user-visit-user-module.js.map