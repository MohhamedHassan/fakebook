(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-post-details-post-details-module"],{

/***/ "AdQb":
/*!**************************************************************************!*\
  !*** ./src/app/view/post-details/post-details/post-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/most-reaction.pipe */ "k08z");
/* harmony import */ var _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/second-reaction.pipe */ "2wBp");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");
/* harmony import */ var _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/reaction-type.pipe */ "UnZl");















const _c0 = ["editCommentInpu"];
const _c1 = function () { return { width: "80px", height: "80px" }; };
const _c2 = function () { return { width: "90%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c3 = function () { return { width: "70%", "border-radius": "0", height: "15px" }; };
const _c4 = function () { return { width: "80%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c5 = function () { return { width: "60%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
function PostDetailsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r0.userService.userProfile == null ? null : ctx_r0.userService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
} }
const _c6 = function (a1) { return ["/visit", a1]; };
function PostDetailsComponent_ng_template_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author.profilePhoto, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c6, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, ctx_r13.postDetails == null ? null : ctx_r13.postDetails.author == null ? null : ctx_r13.postDetails.author.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Born on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, ctx_r13.userService.userProfile == null ? null : ctx_r13.userService.userProfile.birthDate), "");
} }
function PostDetailsComponent_ng_template_3_p_22_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_3_p_22_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.seeMoreIndex = ctx_r18.seeMoreIndex == ctx_r18.i ? -1 : ctx_r18.i; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.seeMoreIndex == ctx_r17.i ? "See Less" : "... See more", "");
} }
function PostDetailsComponent_ng_template_3_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailsComponent_ng_template_3_p_22_span_5_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, ctx_r14.postDetails == null ? null : ctx_r14.postDetails.content, ctx_r14.i, ctx_r14.seeMoreIndex), _r16), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.postDetails == null ? null : ctx_r14.postDetails.content == null ? null : ctx_r14.postDetails.content.length) > 500);
} }
function PostDetailsComponent_ng_template_3_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.postDetails == null ? null : ctx_r15.postDetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostDetailsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function PostDetailsComponent_ng_template_3_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.profileOnHoverMain = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PostDetailsComponent_ng_template_3_Template_div_mouseover_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.profileOnHoverMain = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PostDetailsComponent_ng_template_3_Template_div_mouseover_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.profileOnHoverMain = true; })("mouseleave", function PostDetailsComponent_ng_template_3_Template_div_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.profileOnHoverMain = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostDetailsComponent_ng_template_3_div_13_Template, 17, 27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostDetailsComponent_ng_template_3_p_22_Template, 6, 9, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostDetailsComponent_ng_template_3_img_23_Template, 1, 1, "img", 36);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c6, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author.profilePhoto, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c6, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 23, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.author == null ? null : ctx_r2.postDetails.author.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.profileOnHoverMain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 25, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.updatedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 28, ctx_r2.postDetails == null ? null : ctx_r2.postDetails.updatedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.postDetails == null ? null : ctx_r2.postDetails.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.postDetails == null ? null : ctx_r2.postDetails.image);
} }
function PostDetailsComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.reactionPipe == null ? null : ctx_r5.reactionPipe.numOfReactions, "");
} }
function PostDetailsComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.postComments == null ? null : ctx_r6.postComments.length, " ", (ctx_r6.postComments == null ? null : ctx_r6.postComments.length) == 1 ? "Comment" : "Comments", " ");
} }
function PostDetailsComponent_ng_container_16_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailsComponent_ng_container_16_ng_template_6_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemm_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + (itemm_r33 == null ? null : itemm_r33.reaction) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](itemm_r33 == null ? null : itemm_r33.reaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, itemm_r33.reaction), "");
} }
function PostDetailsComponent_ng_container_16_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailsComponent_ng_container_16_ng_template_6_ng_container_0_div_1_Template, 5, 6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemm_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.reactionPipe == null ? null : ctx_r32.reactionPipe.myReaction[0] == null ? null : ctx_r32.reactionPipe.myReaction[0].reaction) == (itemm_r33 == null ? null : itemm_r33.reaction));
} }
function PostDetailsComponent_ng_container_16_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostDetailsComponent_ng_container_16_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 66);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.reactions);
} }
function PostDetailsComponent_ng_container_16_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_container_16_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r36 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.makeReaction(item_r36 == null ? null : item_r36.reaction, _r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r36 == null ? null : item_r36.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostDetailsComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PostDetailsComponent_ng_container_16_Template_li_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.showParentOfReactionsOnHover(_r28); })("mouseleave", function PostDetailsComponent_ng_container_16_Template_li_mouseleave_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.hideParentOfReactionsOnHover(_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailsComponent_ng_container_16_div_5_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostDetailsComponent_ng_container_16_ng_template_6_Template, 1, 1, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostDetailsComponent_ng_container_16_li_11_Template, 2, 1, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_container_16_Template_li_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r30.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_container_16_Template_i_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.makeAComment($event, _r31, ctx_r43.postDetails == null ? null : ctx_r43.postDetails._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function PostDetailsComponent_ng_container_16_Template_textarea_keydown_enter_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.makeAComment($event, _r31, ctx_r44.postDetails == null ? null : ctx_r44.postDetails._id); })("input", function PostDetailsComponent_ng_container_16_Template_textarea_input_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.textAreaHeightAuto(_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r7.reactionPipe == null ? null : ctx_r7.reactionPipe.myReaction == null ? null : ctx_r7.reactionPipe.myReaction.length))("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.reactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 4, ctx_r7.userService.userProfile == null ? null : ctx_r7.userService.userProfile.profilePhoto, ctx_r7.userService.userProfile == null ? null : ctx_r7.userService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c7 = function () { return { "width": "32px", "height": "32px", "margin": "0" }; };
const _c8 = function () { return { width: "200px", "border-radius": "0", height: "5px", "margin-bottom": "5px" }; };
const _c9 = function () { return { width: "170px", "border-radius": "0", height: "5px" }; };
function PostDetailsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-skeleton-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r8.userService.userProfile == null ? null : ctx_r8.userService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r8.userService.userProfile == null ? null : ctx_r8.userService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c9));
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.profilePhoto, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Born on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.birthDate), "");
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Press Esc To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_i_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r59.updateComment(comment_r50 == null ? null : comment_r50._id, _r57.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r62.textAreaHeightAuto(_r57); })("focus", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_textarea_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r63.enterESCtoCancel = true; })("blur", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_textarea_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r64.enterESCtoCancel = false; })("keydown.esc", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_textarea_keydown_esc_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r65.editCommentIndex = -1; })("keydown.enter", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_textarea_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r66.updateComment(comment_r50 == null ? null : comment_r50._id, _r57.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_span_9_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r68.editCommentIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, comment_r50 == null ? null : comment_r50.comment, _r57));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.enterESCtoCancel);
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.profilePhoto, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Born on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user.birthDate), "");
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 89);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r72);
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template_p_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r75.profileOnHoverForComments = i_r51; })("mouseleave", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template_p_mouseleave_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r78.profileOnHoverForComments = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_div_10_Template, 17, 27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_i_11_Template, 1, 1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r79.editCommentIndex = i_r51; return ctx_r79.resizeTextArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const comment_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r81.deleteComment(comment_r50 == null ? null : comment_r50._id, comment_r50 == null ? null : comment_r50.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", null, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const comment_r50 = ctx_r83.$implicit;
    const i_r51 = ctx_r83.index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, comment_r50.user == null ? null : comment_r50.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, comment_r50.user == null ? null : comment_r50.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.profileOnHoverForComments == i_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id) == (ctx_r55.userService.userProfile == null ? null : ctx_r55.userService.userProfile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkModeMenu", ctx_r55.userService.userProfile == null ? null : ctx_r55.userService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 22, comment_r50 == null ? null : comment_r50.comment, _r73));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 25, comment_r50 == null ? null : comment_r50.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 28, comment_r50 == null ? null : comment_r50.createdAt, "medium"));
} }
function PostDetailsComponent_ng_template_20_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r84.profileOnHoverForCommentsIMG = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PostDetailsComponent_ng_template_20_ng_container_0_li_1_Template_img_mouseover_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const i_r51 = ctx.index; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r86.profileOnHoverForCommentsIMG = i_r51; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostDetailsComponent_ng_template_20_ng_container_0_li_1_div_4_Template, 17, 27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_container_5_Template, 13, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostDetailsComponent_ng_template_20_ng_container_0_li_1_ng_template_6_Template, 31, 33, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c6, comment_r50 == null ? null : comment_r50.user == null ? null : comment_r50.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, comment_r50.user == null ? null : comment_r50.user.profilePhoto, comment_r50.user == null ? null : comment_r50.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.profileOnHoverForCommentsIMG == i_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.editCommentIndex == i_r51)("ngIfElse", _r54);
} }
function PostDetailsComponent_ng_template_20_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailsComponent_ng_template_20_ng_container_0_li_1_Template, 8, 10, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.postComments);
} }
function PostDetailsComponent_ng_template_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Comments Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostDetailsComponent_ng_template_20_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailsComponent_ng_template_20_ng_template_1_Template, 2, 0, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.postComments == null ? null : ctx_r10.postComments.length)("ngIfElse", _r47);
} }
function PostDetailsComponent_ng_template_22_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_22_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r90.filterReactions = ""; return ctx_r90.reacionsModaClassIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("like", ctx_r87.filterReactions == "");
} }
function PostDetailsComponent_ng_template_22_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_22_ng_container_4_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r92 = ctx_r97.$implicit; const i_r93 = ctx_r97.index; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r95.filterReactions = item_r92 == null ? null : item_r92.reactionImg; return ctx_r95.reacionsModaClassIndex = i_r93; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r93 = ctx_r98.index;
    const item_r92 = ctx_r98.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r94.reacionsModaClassIndex == i_r93 ? item_r92 == null ? null : item_r92.reactionImg : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + (item_r92 == null ? null : item_r92.reactionImg) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r92 == null ? null : item_r92.length);
} }
function PostDetailsComponent_ng_template_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailsComponent_ng_template_22_ng_container_4_ng_template_1_Template, 4, 3, "ng-template", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PostDetailsComponent_ng_template_22_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_22_li_10_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r100.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_22_li_10_Template_h3_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r102.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c6, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user.profilePhoto, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + (item_r99 == null ? null : item_r99.reaction) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, item_r99 == null ? null : item_r99.user == null ? null : item_r99.user.lastName), 0, 12), " ");
} }
function PostDetailsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostDetailsComponent_ng_template_22_ng_template_3_Template, 2, 2, "ng-template", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostDetailsComponent_ng_template_22_ng_container_4_Template, 2, 0, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_ng_template_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostDetailsComponent_ng_template_22_li_10_Template, 12, 25, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "reactionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("popupDarkMode", ctx_r12.userService.userProfile == null ? null : ctx_r12.userService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r12.reactionSwiper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.sortReaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, ctx_r12.postReactions, ctx_r12.filterReactions));
} }
const _c10 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
class PostDetailsComponent {
    constructor(activatedroute, userService, commentService, rendrer, cd, modalService, router) {
        this.activatedroute = activatedroute;
        this.userService = userService;
        this.commentService = commentService;
        this.rendrer = rendrer;
        this.cd = cd;
        this.modalService = modalService;
        this.router = router;
        this.i = 0;
        this.seeMoreIndex = -1;
        this.commentsLoading = true;
        this.profileOnHoverMain = false;
        this.profileOnHoverForComments = -1;
        this.profileOnHoverForCommentsIMG = -1;
        this.skeltonLoading = true;
        this.subscriptions = [];
        this.editCommentIndex = -1;
        this.enterESCtoCancel = true;
        this.reactions = [
            { imgSrc: "assets/like.png", reaction: "like" },
            { imgSrc: "assets/love.png", reaction: "love" },
            { imgSrc: "assets/haha.png", reaction: "haha" },
            { imgSrc: "assets/wow.png", reaction: "wow" },
            { imgSrc: "assets/sad.png", reaction: "sad" },
            { imgSrc: "assets/angry.png", reaction: "angry" },
        ];
        this.postReactions = [];
        this.sortReaction = [];
        this.reactionModalImgSrc = "";
        this.filterReactions = '';
        this.reacionsModaClassIndex = -1;
        // start swiper carousel options
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
    }
    ngOnInit() {
        this.subscriptions.push(this.userService.getMyNotifications().subscribe((res) => {
            this.userService.myNotifications = res === null || res === void 0 ? void 0 : res.newNotification;
        }, err => { }));
        window.scroll(0, 0);
        // start listen to users comments to push the comment in the comments array
        this.commentService.listen("comment").subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (((_a = this.postDetails) === null || _a === void 0 ? void 0 : _a._id) == ((_c = (_b = res === null || res === void 0 ? void 0 : res.comment) === null || _b === void 0 ? void 0 : _b.post) === null || _c === void 0 ? void 0 : _c._id)) {
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
            this.updateReacts();
        }, err => { this.router.navigate(["/error"]); });
        // end listen to users comments to push the comment in the comments array
        // start get the post id to get the conetent and comments of it
        this.subscriptions.push(this.activatedroute.params.subscribe(param => {
            this.postId = param === null || param === void 0 ? void 0 : param.id;
            this.getPostComments(this.postId);
        }));
    }
    getPostComments(id) {
        this.commentsLoading = true;
        this.subscriptions.push(this.userService.getPostComment(id).subscribe((res) => {
            this.postDetails = res === null || res === void 0 ? void 0 : res.post;
            this.postComments = res === null || res === void 0 ? void 0 : res.comments;
            this.reactionPipe = res;
            this.skeltonLoading = false;
            this.commentsLoading = false;
        }, err => {
            this.commentsLoading = false;
        }));
    }
    openReactionModal(modal) {
        this.postReactions = [];
        this.sortReaction = [];
        this.subscriptions.push(this.userService.getPostComment(this.postId).subscribe((res) => {
            this.reactionPipe.numOfAngrys = res === null || res === void 0 ? void 0 : res.numOfAngrys;
            this.reactionPipe.numOfSads = res === null || res === void 0 ? void 0 : res.numOfSads;
            this.reactionPipe.numOfHahas = res === null || res === void 0 ? void 0 : res.numOfHahas;
            this.reactionPipe.numOfWows = res === null || res === void 0 ? void 0 : res.numOfWows;
            this.reactionPipe.numOfLikes = res === null || res === void 0 ? void 0 : res.numOfLikes;
            this.reactionPipe.numOfLoves = res === null || res === void 0 ? void 0 : res.numOfLoves;
            this.reactionPipe.numOfReactions = res === null || res === void 0 ? void 0 : res.numOfReactions;
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
    makeAComment(event, input, positId) {
        var _a;
        event.preventDefault();
        if ((input === null || input === void 0 ? void 0 : input.value.trim()) != "") {
            this.commentService.emit("addComment", {
                postId: positId,
                userId: (_a = this.userService.userProfile) === null || _a === void 0 ? void 0 : _a._id,
                comment: input === null || input === void 0 ? void 0 : input.value.trim()
            }).then(res => {
                input.value = '';
                input.style.height = 'auto';
                input.style.height = input.scrollHeight + 'px';
            }, err => { this.router.navigate(["/error"]); });
        }
    }
    deleteComment(commentId, postId) {
        this.subscriptions.push(this.userService.deletComment(commentId).subscribe(res => {
            this.getPostComments(postId);
        }, err => { }));
    }
    updateComment(id, comment, e) {
        e.preventDefault();
        if (comment.trim() !== '') {
            let updatedComment = { id, comment };
            this.subscriptions.push(this.userService.updateComment(updatedComment).subscribe(res => {
                this.getPostComments(this.postId);
                this.editCommentIndex = -1;
            }, err => { }));
        }
    }
    // start make user control on textarea height
    textAreaHeightAuto(textArea) {
        textArea.style.height = '34px';
        textArea.style.height = textArea.scrollHeight + 'px';
    }
    // end make user control on textarea height
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    resizeTextArea() {
        this.cd.detectChanges();
        let textarea = this.editCommentInpu.nativeElement;
        textarea.focus();
        textarea.selectionStart = textarea.value.length;
        this.rendrer.setStyle(textarea, "height", `${textarea.scrollHeight}px`);
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    // end swiper carousel options
    showParentOfReactionsOnHover(element) {
        this.rendrer.removeClass(element, "hideParentOfReactions");
    }
    hideParentOfReactionsOnHover(element) {
        this.rendrer.addClass(element, "hideParentOfReactions");
    }
    makeReaction(reactionName, parentOfReactions) {
        var _a, _b, _c, _d, _e, _f;
        this.rendrer.addClass(parentOfReactions, "hideParentOfReactions");
        if ((_b = (_a = this.reactionPipe) === null || _a === void 0 ? void 0 : _a.myReaction) === null || _b === void 0 ? void 0 : _b.length) {
            if (reactionName == ((_d = (_c = this.reactionPipe) === null || _c === void 0 ? void 0 : _c.myReaction[0]) === null || _d === void 0 ? void 0 : _d.reaction)) {
                this.reactionPipe.myReaction = [];
            }
            else {
                this.reactionPipe.myReaction = [];
                (_e = this.reactionPipe) === null || _e === void 0 ? void 0 : _e.myReaction.push({ reaction: reactionName });
            }
        }
        else {
            this.reactionPipe.myReaction = [];
            (_f = this.reactionPipe) === null || _f === void 0 ? void 0 : _f.myReaction.push({ reaction: reactionName });
        }
        this.commentService.emit("addReaction", {
            postId: this.postId,
            reaction: reactionName
        }).then(res => {
            this.updateReacts();
        }, err => { this.router.navigate(["/error"]); });
    }
    updateReacts() {
        this.userService.getPostComment(this.postId).subscribe((res) => {
            this.reactionPipe.numOfAngrys = res === null || res === void 0 ? void 0 : res.numOfAngrys;
            this.reactionPipe.numOfSads = res === null || res === void 0 ? void 0 : res.numOfSads;
            this.reactionPipe.numOfHahas = res === null || res === void 0 ? void 0 : res.numOfHahas;
            this.reactionPipe.numOfWows = res === null || res === void 0 ? void 0 : res.numOfWows;
            this.reactionPipe.numOfLikes = res === null || res === void 0 ? void 0 : res.numOfLikes;
            this.reactionPipe.numOfLoves = res === null || res === void 0 ? void 0 : res.numOfLoves;
            this.reactionPipe.numOfReactions = res === null || res === void 0 ? void 0 : res.numOfReactions;
        }, err => {
        });
    }
}
PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) { return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_3__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PostDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailsComponent, selectors: [["app-post-details"]], viewQuery: function PostDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editCommentInpu = _t.first);
    } }, decls: 24, vars: 43, consts: [[1, "parentOfPostss"], [1, "mx-auto", "my-5", "postss", "bg-white", "py-2", "rounded-lg", "mb-3"], [4, "ngIf", "ngIfElse"], ["postConetentt", ""], [1, "postOptions", "px-3"], [1, "mt-3", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount", 2, "cursor", "pointer", 3, "click"], ["alt", "", 1, "first", 3, "src"], ["first", ""], ["alt", "", 1, "last", 3, "src"], ["secondIMG", ""], [4, "ngIf"], [1, "parentOfComments", "mt-2"], [1, "comments", "list-unstyled", "my-2"], ["commentsConetent", ""], ["reaction", ""], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4", "my-3"], [1, "first-section-wrapper", "d-flex", "align-items-center", "mb-3"], [1, "gravatar"], ["appearance", "circle", 3, "theme"], [1, "gravatar-title", "mx-3"], [3, "theme"], [1, "second-section-wrapper"], [1, "wrapper"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", 3, "mouseleave"], [3, "mouseover"], ["alt", "", 1, "smllProfileImg", "mr-3", 2, "cursor", "pointer", 3, "routerLink", "src"], [3, "mouseover", "mouseleave"], [1, "userName", 2, "cursor", "pointer", 3, "routerLink"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "position-relative"], [1, "timee", "d-inline-block"], [1, "text-secondary"], [1, "timeOnHover"], ["class", "px-3  text-break", 4, "ngIf"], ["alt", "", "class", "w-100 mt-3", 3, "src", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 2, "cursor", "pointer", 3, "routerLink"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 2, "cursor", "pointer", 3, "routerLink"], [1, "far", "fa-calendar-alt", "mr-2"], [1, "px-3", "text-break"], ["elementt", ""], ["class", "font-weight-bold text-secondary", "style", "cursor: pointer;direction: inherit;", 3, "click", 4, "ngIf"], [1, "font-weight-bold", "text-secondary", 2, "cursor", "pointer", "direction", "inherit", 3, "click"], ["alt", "", 1, "w-100", "mt-3", 3, "src"], [1, "options", "list-unstyled", "d-flex", "justify-content-center", "my-3"], [1, "showReactions", 3, "mouseover", "mouseleave"], [1, "userReact"], ["reactionFound", ""], [1, "hideParentOfReactions", "parentOfReactions"], ["parentOfReactions", ""], [1, "reactions", "bg-white", "p-1", "d-flex", "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "far", "fa-comment-alt"], [1, "mx-2"], ["alt", "", 3, "src"], [1, "position-relative", "w-100"], [1, "mx-2", "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "10px", 3, "click"], ["rows", "1", "type", "text", "placeholder", "Write a comment...", 1, "mx-2", 3, "keydown.enter", "input"], ["textarea", "", "addCommentInput", ""], [1, "far", "fa-thumbs-up"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "src"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], ["noCommentsYet", ""], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "position-relative", 3, "mouseleave"], ["alt", "", 2, "cursor", "pointer", 3, "routerLink", "src", "mouseover"], ["commentContent", ""], [1, "w-100"], ["placeholder", "Write a comment...", 1, "mx-2", 2, "height", "32px !important", 3, "input", "focus", "blur", "keydown.esc", "keydown.enter"], ["editCommentInpu", ""], ["class", " d-none d-md-inline", 4, "ngIf"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "d-none", "d-md-inline"], [1, "commnetContent"], [1, "font-weight-bold", "position-relative", 2, "cursor", "pointer", 3, "routerLink", "mouseover", "mouseleave"], ["class", " fas fa-ellipsis-h mx-2", "style", "cursor: pointer;", 3, "matMenuTriggerFor", 4, "ngIf"], ["EditComment", "matMenu"], ["mat-menu-item", "", 3, "click"], ["commentP", ""], [1, "fas", "fa-ellipsis-h", "mx-2", 2, "cursor", "pointer", 3, "matMenuTriggerFor"], [1, "parentOfReactionsModal"], [1, "modal-header"], [3, "config"], ["swiperSlide", ""], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "parentOfimg", "reactionsModal"], [1, "list-unstyled"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "click"], [1, "d-flex", "align-items-center", "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "ngClass", "click"], ["alt", "", 2, "width", "20px", "height", "20px", "margin", "0 5px", 3, "src"], [1, "mb-3"], ["alt", "", 1, "mainIMG", 2, "cursor", "pointer", 3, "routerLink", "src", "click"], ["alt", "", 1, "reactionImg", 3, "src"], [1, "mx-3", 2, "cursor", "pointer", 3, "routerLink", "click"]], template: function PostDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailsComponent_ng_container_2_Template, 17, 14, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostDetailsComponent_ng_template_3_Template, 24, 35, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); ctx.filterReactions = ""; ctx.reacionsModaClassIndex = -1; return ctx.openReactionModal(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "mostReaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "secondReaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostDetailsComponent_span_14_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostDetailsComponent_p_15_Template, 2, 2, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PostDetailsComponent_ng_container_16_Template, 24, 7, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostDetailsComponent_ng_container_19_Template, 21, 16, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostDetailsComponent_ng_template_20_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostDetailsComponent_ng_template_22_Template, 12, 8, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userService.userProfile == null ? null : ctx.userService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skeltonLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](27, _c10, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfLoves, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfSads, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfWows, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfHahas, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfAngrys, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfLikes, _r3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](13, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](35, _c10, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfLoves, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfSads, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfWows, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfHahas, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfAngrys, ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfLikes, _r4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactionPipe == null ? null : ctx.reactionPipe.numOfReactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postComments == null ? null : ctx.postComments.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.commentsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentsLoading)("ngIfElse", _r9);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], swiper_angular__WEBPACK_IMPORTED_MODULE_8__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_8__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_9__["MostReactionPipe"], _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_10__["SecondReactionPipe"], _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_11__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_12__["LangPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_13__["TextPipe"], _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_14__["ReactionTypePipe"]], styles: [".parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.parentOfPostss[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #F0F2F5;\n  overflow: hidden;\n  padding-bottom: 100px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%] {\n  left: 13px;\n  z-index: 1;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: -1px;\n  display: block;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 35px !important;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .hideParentOfReactions[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .showReactions[_ngcontent-%COMP%]:hover   .reactions[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfReactions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -52px;\n  height: 60px;\n  padding: 10px 5px;\n  overflow: hidden;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  border-radius: 30px;\n  transition: 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 10px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  width: 300px !important;\n  top: 20px !important;\n  left: -100px !important;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%] {\n  color: #65676b;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: #F0F2F5;\n  border-radius: 20px;\n  padding: 7px 45px 7px 15px;\n  width: 100%;\n  resize: none;\n  height: auto;\n  overflow: hidden;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 2px 10px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border-radius: 5px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #65676b;\n  cursor: pointer;\n  padding: 10px 20px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .userReact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .timeOnHover[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  position: absolute;\n  top: 25px;\n  left: -18px;\n  background: rgba(13, 13, 13, 0.77);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 100px;\n  z-index: 11;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   small[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 1px solid var(--secondary);\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   .timeOnHover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.parentOfPostss[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #D8DADF;\n}\n\n.smllProfileImg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%] {\n  background-color: #18191A;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid gray;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #4E4F50;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-color: rgba(235, 235, 235, 0.1) !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfPostss.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF !important;\n}\n\n  .parentOfPostss.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  .postss[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .postss[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .timeOnHover[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .postss[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EE3050;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .sad[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA82A;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .angry[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DD6B0E;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .wow[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA85F;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .haha[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA823;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0B86ED;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .mainIMG[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .reactionImg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -6px;\n  bottom: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n  .parentOfReactionsModal .modal-header {\n  align-items: normal !important;\n  padding: 1rem 1rem 0 !important;\n}\n\n  .parentOfReactionsModal .close {\n  color: #b9b9b9;\n}\n\n  .darkModeMenu {\n  background-color: #242526 !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n  .darkModeMenu .mat-menu-item {\n  color: #B8BBBF;\n}\n\n  .darkModeMenu .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9zdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUdSOztBQUZRO0VBQ0kseUJBQUE7QUFJWjs7QUFBQTtFQUFRLGdCQUFBO0FBSVI7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUxJO0VBQ0ksa0JBQUE7QUFPUjs7QUFKZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTXBCOztBQUpnQjtFQUNJLFVBQUE7QUFNcEI7O0FBSmdCO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUFNcEI7O0FBSmlCO0VBQU0saUJBQUE7RUFDSCxnQkFBQTtFQUNDLGNBQUE7QUFPckI7O0FBTGdCO0VBQWUsNEJBQUE7QUFRL0I7O0FBTlk7RUFBd0IsV0FBQTtBQVNwQzs7QUFSWTtFQUFpQyxhQUFBO0FBVzdDOztBQVZZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBV2hCOztBQVRZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFXaEI7O0FBVmdCO0VBQ0Usa0JBQUE7QUFZbEI7O0FBVmdCO0VBQ0ksZ0JBQUE7QUFZcEI7O0FBWG9CO0VBQ0kscUJBQUE7QUFheEI7O0FBVFk7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFXaEI7O0FBVFk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBV2hCOztBQVZnQjtFQUNJLDBCQUFBO0FBWXBCOztBQVRZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdoQjs7QUFUWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVdoQjs7QUFUWTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQVdoQjs7QUFWZTtFQUlLLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBU3BCOztBQWxCb0I7RUFDSSx5QkFBQTtBQW9CeEI7O0FBVG9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFXeEI7O0FBTG9CO0VBQ0ksbUJBQUE7QUFPeEI7O0FBTG9CO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBT3hCOztBQURRO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUdaOztBQUZZO0VBQ0csOEJBQUE7QUFJZjs7QUFEUTtFQUVJLFNBQUE7QUFFWjs7QUFEWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdoQjs7QUFJUTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGVDs7QUFLSTtFQUFtQyx5Q0FBQTtBQUZ2Qzs7QUFHSTtFQUE0QixjQUFBO0FBQWhDOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBQVE7RUFDSSxtQkFBQTtBQUVaOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUVJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQURKOztBQUVJO0VBQVksdUJBQUE7QUFDaEI7O0FBQ0E7RUFFSyx5QkFBQTtBQUNMOztBQUNLO0VBQ0csb0NBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBQVE7RUFBVyw4QkFBQTtBQUduQjs7QUFEWTtFQUNHLDZCQUFBO0FBR2Y7O0FBQ1k7RUFDSSxtQkFBQTtBQUNoQjs7QUFFUTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtEQUFBO0FBQVo7O0FBQ1k7RUFDSSxxREFBQTtFQUNBLGNBQUE7QUFDaEI7O0FBQWdCO0VBQ0ksb0NBQUE7QUFFcEI7O0FBS1E7RUFDSSxpREFBQTtBQUhaOztBQUlZO0VBSUkseUJBQUE7QUFMaEI7O0FBRWdCO0VBQ0Msb0NBQUE7QUFBakI7O0FBS1M7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FBSGI7O0FBS1M7RUFBYyx5QkFBQTtBQUZ2Qjs7QUFLQztFQUNHLG9DQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJQTtFQUEwQixXQUFBO0FBQTFCOztBQUNBO0VBQ0k7SUFDSSxVQUFBO0VBRU47QUFDRjs7QUFDQTtFQUNJO0lBQ0ksVUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFFSTtJQUNJLHdCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksVUFBQTtFQUZOO0FBQ0Y7O0FBTUk7RUFDSSxnQ0FBQTtBQUpSOztBQU1JO0VBQ0ksZ0NBQUE7QUFKUjs7QUFNSTtFQUNJLGdDQUFBO0FBSlI7O0FBTUk7RUFDSSxnQ0FBQTtBQUpSOztBQU1JO0VBQ0ksZ0NBQUE7QUFKUjs7QUFNSTtFQUNJLGdDQUFBO0FBSlI7O0FBTUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUpSOztBQUtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhaOztBQUtRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFo7O0FBS1E7RUFBUywwQkFBQTtBQUZqQjs7QUFPSTtFQUFnQixXQUFBO0FBSHBCOztBQUtRO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQUhaOztBQUtRO0VBQVEsY0FBQTtBQUZoQjs7QUFLQTtFQUVHLG9DQUFBO0VBQ0Esa0RBQUE7QUFISDs7QUFJRztFQUNJLGNBQUE7QUFGUDs7QUFHTztFQUFTLHlCQUFBO0FBQWhCIiwiZmlsZSI6InBvc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVvdmVySU1HIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIgMTE1IDExNSAvIDE3JSk7XHJcbn1cclxuJXByb2ZpbGVPbkhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIGltZy5wcm9maWxlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYiA7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnAsaDIsaDN7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5wYXJlbnRPZlBvc3RzcyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgLnBvc3RzcyB7ICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucG9zdE9wdGlvbnMge1xyXG4gICAgICAgICAgICAucmVhY3Rpb25zQ291bnQge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nLmZpcnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBzcGFuIHttYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5leGlzdCArIHNwYW4ge21hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oaWRlUGFyZW50T2ZSZWFjdGlvbnMge3otaW5kZXg6IC0xO31cclxuICAgICAgICAgICAgLnNob3dSZWFjdGlvbnM6aG92ZXIgLnJlYWN0aW9ucyB7bWFyZ2luLXRvcDogMCA7fVxyXG4gICAgICAgICAgICAucGFyZW50T2ZSZWFjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC01MnB4O1xyXG4gICAgICAgICAgICAgIC8vICBsZWZ0OiAtNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgICAgICAgICAgICAgIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2ZpbGVPbkhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmF5UCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1Njc2YjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjBGMkY1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCA0NXB4IDdweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjJweCAxMHB4O1xyXG4gICAgICAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLnVzZXJSZWFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXJlbnRPZkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29tbW5ldENvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyTmFtZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlcjtcclxuICAgICAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgICAgICAgICAub3ZlcklNRyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgLnRpbWVPbkhvdmVyIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICAgbGVmdDogLTE4cHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMyAxMyAxMyAvIDc3JSk7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgIHotaW5kZXg6IDExXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAudGltZWU6aG92ZXIgIHNtYWxsOmZpcnN0LW9mLXR5cGUge2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO31cclxuICAgIC50aW1lZTpob3ZlciAudGltZU9uSG92ZXIgeyBkaXNwbGF5OiBibG9jayA7IH0gXHJcbiAgICAuZmEtZWxsaXBzaXMtaCB7XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNEOERBREY7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuLnNtbGxQcm9maWxlSW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wb3N0TG9hZGluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODkgODcgODcgLyA1MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHAuZGFya01vZGUge2NvbG9yOmJsYWNrICFpbXBvcnRhbnR9XHJcbn1cclxuLnBhcmVudE9mUG9zdHNzLmRhcmtNb2RlXHJcbiB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkxQTtcclxuICAgICBcclxuICAgICAucG9zdHNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICAuYmctd2hpdGUge2JhY2tncm91bmQ6ICMyNDI1MjYgIWltcG9ydGFudDt9XHJcbiAgICAgICAgLnVzZXJOYW1lIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1lbGxpcHNpcy1oIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAgIzRFNEY1MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDI0OSAyMzMgMjMzIC8gMjQlKSAwcHggM3B4IDE1cHg7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAucG9zdE9wdGlvbnMge1xyXG4gICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sb3I6I0I4QkJCRiAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICB0ZXh0YXJlYSwuY29tbW5ldENvbnRlbnQge1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIDo6cGxhY2Vob2xkZXJ7Y29sb3I6I0I4QkJCRiAhaW1wb3J0YW50fSBcclxuICAgIH1cclxuIH1cclxuIDo6bmctZGVlcCAucGFyZW50T2ZQb3N0c3MuZGFya01vZGUgLmxvYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzJcclxufVxyXG46Om5nLWRlZXAgLmdyYXZhdGFyLXRpdGxle3dpZHRoOiAxMDAlO31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnBvc3RzcyB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnBvc3RzcyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAucG9zdHNzIHtcclxuICAgIC5wcm9maWxlT25Ib3ZlciAsIC50aW1lT25Ib3ZlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICB9ICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnBvc3RzcyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG4vLy8vLy8gc3RhcnQgcmVhY3Rpb25zTW9kYWxcclxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwge1xyXG4gICAgLmxvdmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUUzMDUwO1xyXG4gICAgfVxyXG4gICAgLnNhZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MkE7XHJcbiAgICB9XHJcbiAgICAuYW5ncnkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREQ2QjBFO1xyXG4gICAgfVxyXG4gICAgLndvdyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4NUY7XHJcbiAgICB9XHJcbiAgICAuaGFoYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MjM7XHJcbiAgICB9XHJcbiAgICAubGlrZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjg2RUQ7XHJcbiAgICB9XHJcbiAgICAucmVhY3Rpb25zTW9kYWwge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLm1haW5JTUcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFjdGlvbkltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMzpob3Zlcnt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vIGVuZCByZWFjdGlvbnNNb2RhbFxyXG46Om5nLWRlZXAge1xyXG4gICAgLmdyYXZhdGFyLXRpdGxle3dpZHRoOiAxMDAlO31cclxuICAgIC5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIHtcclxuICAgICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6bm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZSB7Y29sb3I6ICNiOWI5Yjk7fVxyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCAuZGFya01vZGVNZW51XHJcbntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICBib3gtc2hhZG93OiByZ2IoMjQ5IDIzMyAyMzMgLyAyNCUpIDBweCAzcHggMTVweDtcclxuICAgLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgICAgY29sb3I6ICNCOEJCQkY7XHJcbiAgICAgICAmOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO31cclxuICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Uy+b":
/*!******************************************************************!*\
  !*** ./src/app/view/post-details/post-details-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: PostDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsRoutingModule", function() { return PostDetailsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-details/post-details.component */ "AdQb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_1__["PostDetailsComponent"]
    }
];
class PostDetailsRoutingModule {
}
PostDetailsRoutingModule.ɵfac = function PostDetailsRoutingModule_Factory(t) { return new (t || PostDetailsRoutingModule)(); };
PostDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PostDetailsRoutingModule });
PostDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PostDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "b9yr":
/*!**********************************************************!*\
  !*** ./src/app/view/post-details/post-details.module.ts ***!
  \**********************************************************/
/*! exports provided: PostDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsModule", function() { return PostDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-details-routing.module */ "Uy+b");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-details/post-details.component */ "AdQb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class PostDetailsModule {
}
PostDetailsModule.ɵfac = function PostDetailsModule_Factory(t) { return new (t || PostDetailsModule)(); };
PostDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PostDetailsModule });
PostDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _post_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["PostDetailsRoutingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PostDetailsModule, { declarations: [_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_2__["PostDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _post_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["PostDetailsRoutingModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-view-post-details-post-details-module.js.map