(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-home-page-home-page-module"],{

/***/ "0FjA":
/*!****************************************************!*\
  !*** ./src/app/view/home-page/home-page.module.ts ***!
  \****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-routing.module */ "tzih");
/* harmony import */ var _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hompage/hompage.component */ "gF0r");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./you-may-know/you-may-know.component */ "E161");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-post/add-post.component */ "Tfk/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomePageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_hompage_hompage_component__WEBPACK_IMPORTED_MODULE_2__["HompageComponent"],
        _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_9__["YouMayKnowComponent"],
        _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_10__["AddPostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomePageRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]] }); })();


/***/ }),

/***/ "E161":
/*!***********************************************************************!*\
  !*** ./src/app/view/home-page/you-may-know/you-may-know.component.ts ***!
  \***********************************************************************/
/*! exports provided: YouMayKnowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouMayKnowComponent", function() { return YouMayKnowComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/people-you-may-know.service */ "ERkD");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/follow-or-unfollow.service */ "aTWD");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");













const _c0 = ["updtaeSwiper"];
const _c1 = function () { return { width: "100%", height: "150px", "border-radius": "10px", margin: 0 }; };
const _c2 = function () { return { width: "100%", "border-radius": "0", height: "10px", "margin-bottom": "2px" }; };
const _c3 = function () { return { width: "100%", "border-radius": "0", height: "10px" }; };
function YouMayKnowComponent_div_0_ng_container_7_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ngx-skeleton-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));
} }
function YouMayKnowComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_div_0_ng_container_7_ng_container_1_ng_template_1_Template, 10, 6, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function YouMayKnowComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_div_0_ng_container_7_ng_container_1_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.swiperLoadingCount);
} }
function YouMayKnowComponent_div_0_ng_template_8_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_div_0_ng_template_8_ng_container_0_ng_template_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.navigatee(item_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_div_0_ng_template_8_ng_container_0_ng_template_1_Template_h2_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.navigatee(item_r9 == null ? null : item_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_div_0_ng_template_8_ng_container_0_ng_template_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.followOrUnFollow(item_r9 == null ? null : item_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, item_r9 == null ? null : item_r9.profilePhoto, item_r9 == null ? null : item_r9.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, item_r9 == null ? null : item_r9.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, item_r9 == null ? null : item_r9.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.followLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 20, "youMayKnow.follow"));
} }
function YouMayKnowComponent_div_0_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_div_0_ng_template_8_ng_container_0_ng_template_1_Template, 16, 22, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function YouMayKnowComponent_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, YouMayKnowComponent_div_0_ng_template_8_ng_container_0_Template, 2, 0, "ng-container", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.suggestedFriends);
} }
function YouMayKnowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "swiper", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reachEnd", function YouMayKnowComponent_div_0_Template_swiper_reachEnd_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.fetchMoreSuggestedFriends(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, YouMayKnowComponent_div_0_ng_container_7_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, YouMayKnowComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r0.userProfileService.userProfile == null ? null : ctx_r0.userProfileService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "youMayKnow.people"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r0.swiperConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.peopleYouMayKnowLoading)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "youMayKnow.seeAll"));
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"],]);
class YouMayKnowComponent {
    constructor(peopleYouMayKnow, userProfileService, cd, _ngZone, router, folloOrUnfollowService, _snackBar, socketService, translate) {
        this.peopleYouMayKnow = peopleYouMayKnow;
        this.userProfileService = userProfileService;
        this.cd = cd;
        this._ngZone = _ngZone;
        this.router = router;
        this.folloOrUnfollowService = folloOrUnfollowService;
        this._snackBar = _snackBar;
        this.socketService = socketService;
        this.translate = translate;
        this.skip = 0;
        this.suggestedFriends = [];
        this.peopleYouMayKnowLoading = true;
        this.followLoading = false;
        this.swiperLoadingCount = [];
        this.subscriptions = [];
        this.swiperConfig = {
            slidesPerView: "2.6",
            spaceBetween: "50",
            pagination: "{ clickable: true ,type: 'fraction'}",
            navigation: "true",
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }
        };
        this.subscriptions.push(this.translate.get('youMayKnow.snackBarOne').subscribe(res => {
            this.translatedSnacBarTextOne = res;
        }));
        this.subscriptions.push(this.translate.get('youMayKnow.snackBarTwo').subscribe(res => {
            this.translatedSnacBarTextTwo = res;
        }));
    }
    ngOnInit() {
        this.swiperLoadingCount.length = 5;
        this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe((res) => {
            this.suggestedFriends = res;
            console.log(this.suggestedFriends.length);
            this.peopleYouMayKnowLoading = false;
        }, err => {
        }));
    }
    // start fetch more suggested on click on swiper arrow
    fetchMoreSuggestedFriends() {
        this.skip += 10;
        this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(this.skip).subscribe((res) => {
            this.suggestedFriends.push(...res);
            this.cd.detectChanges();
            this.updtaeSwiper.swiperRef.update();
        }, err => { }));
    }
    // end fetch more suggested on click on swiper arrow
    // start navigate from swiper carousel to another component 
    navigatee(id) {
        this._ngZone.run(() => {
            this.router.navigate(['/visit', id]);
        });
    }
    // end navigate from swiper carousel to another component 
    // statr follow users method
    followOrUnFollow(id) {
        this.followLoading = true;
        this.peopleYouMayKnowLoading = true;
        this.subscriptions.push(this.folloOrUnfollowService.followOrUnFollow(id).subscribe(res => {
            this.socketService.emit("follow", { id }).then(res => {
                this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe((res) => {
                    this.suggestedFriends = res;
                    this.peopleYouMayKnowLoading = false;
                    this.followLoading = false;
                    this.getMyFollowingPosts();
                    this._snackBar.open(this.translatedSnacBarTextOne, this.translatedSnacBarTextTwo, {
                        horizontalPosition: 'left',
                        verticalPosition: 'bottom',
                        duration: 3000
                    });
                }, err => { }));
            }, err => {
                this.router.navigate(["/error"]);
            });
        }, err => { }));
    }
    // end follow users method
    getMyFollowingPosts() {
        this.subscriptions.push(this.userProfileService.getMyFollowingPosts().subscribe(res => {
            this.userProfileService.myFollowingPosts = res;
            this.userProfileService.HomePageSkeltonLoading = false;
        }, err => {
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
YouMayKnowComponent.ɵfac = function YouMayKnowComponent_Factory(t) { return new (t || YouMayKnowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_2__["PeopleYouMayKnowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_5__["FollowOrUnfollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_7__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
YouMayKnowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YouMayKnowComponent, selectors: [["app-you-may-know"]], viewQuery: function YouMayKnowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.updtaeSwiper = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", " mb-3", 4, "ngIf"], [1, "mb-3"], [1, "bg-white", "parentOfSugested", "rounded-lg", "p-3"], [1, "mb-2"], [3, "config", "reachEnd"], ["updtaeSwiper", ""], [4, "ngIf", "ngIfElse"], ["swiperContent", ""], [1, "text-center", "mt-3"], ["routerLink", "/peopleYouMayKnow", 1, "text-primary", "font-weight-bold", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], [1, "first-section-wrapper"], [1, "item", "postsLoadingg"], ["count", "1", "appearance", "circle", 3, "theme"], [1, "gravatar-title"], [3, "theme"], [1, "peopleYouMayknow", "my-2"], ["alt", "", 1, "mainimg", 3, "src", "click"], [1, "px-2", "py-3"], [1, "overflow-hidden", "mb-2"], [1, "mainName", 3, "click"], [1, "follow", 3, "disabled", "click"], [1, "fas", "fa-user-plus"], [1, "mx-1"]], template: function YouMayKnowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, YouMayKnowComponent_div_0_Template, 14, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suggestedFriends == null ? null : ctx.suggestedFriends.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_10__["SwiperComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_10__["SwiperSlideDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__["NgxSkeletonLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_12__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: [".swiper-button-prev,   .swiper-button-next {\n  width: auto !important;\n  height: auto !important;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background: white;\n  color: black;\n  padding: 15px;\n  border-radius: 50%;\n}\n  .swiper-button-prev:hover,   .swiper-button-next:hover {\n  background-color: #E4E6E9;\n}\n  .swiper-button-prev:after,   .swiper-button-next:after {\n  font-size: 20px;\n  font-weight: bold;\n}\n  .parentOfSugested.darkMode .swiper-button-prev,   .parentOfSugested.darkMode .swiper-button-next {\n  background: #242526;\n  color: white;\n}\n  .parentOfSugested.darkMode .swiper-button-prev:hover,   .parentOfSugested.darkMode .swiper-button-next:hover {\n  background-color: #4E4F50;\n}\n.peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 15px;\n  overflow: hidden;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .mainimg[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  cursor: pointer;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background: #E7F3FF;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #ccdef1;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .mainName[_ngcontent-%COMP%] {\n  width: 1000px;\n  cursor: pointer;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background-color: #263951;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #3C4D63;\n}\n  .gravatar-title {\n  width: 100%;\n}\n  .swiper-button-prev.swiper-button-disabled,   .swiper-button-next.swiper-button-disabled {\n  pointer-events: visible;\n}\n  .parentOfSugested.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xceW91TWF5S25vdy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx5b3UtbWF5LWtub3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTs7RUFDSSx5QkFBQTtBQ0lSO0FERkk7O0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDS1I7QURGQTs7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNNSjtBRExJOztFQUNJLHlCQUFBO0FDUVI7QURKQTtFQUNJLDJDQUFBO0VBQ0EsbUJBQUE7RUFDRCxnQkFBQTtBQ09IO0FETkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNRUjtBRE5JO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNRUjtBRFBRO0VBQ0ksbUJBQUE7QUNTWjtBRFBRO0VBQU0sZ0JBQUE7QUNVZDtBRFBJO0VBQVUsYUFBQTtFQUFhLGVBQUE7QUNXM0I7QURQQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtBQ1VKO0FEVEk7RUFBVSxvQ0FBQTtBQ1lkO0FEWEk7RUFDSSxrREFBQTtFQUNBLG9DQUFBO0FDYVI7QURaUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ2NaO0FEYlk7RUFDSSxtQkFBQTtBQ2VoQjtBRFRLO0VBQWdCLFdBQUE7QUNhckI7QURSTTs7RUFFRSx1QkFBQTtBQ1VSO0FEQ1E7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FDQ1oiLCJmaWxlIjoieW91LW1heS1rbm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJXN3aXBlUHJldkFuZE5leHQge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuJXN3aXBlUHJldkFuZE5leHREYXJrbW9kZSAge1xyXG4gICAgYmFja2dyb3VuZDogIzI0MjUyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vLy8vLy8gIHN0YXJ0IHBlb3BsZSB5b3UgbWF5IGtub3dcclxuLnBlb3BsZVlvdU1heWtub3cge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAubWFpbmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9sbG93IHtcclxuICAgICAgICBjb2xvcjogIzIxNmZkYjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTdGM0ZGO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2RlZjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge2ZvbnQtc2l6ZTogbGFyZ2U7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbk5hbWV7d2lkdGg6MTAwMHB4O2N1cnNvcjogcG9pbnRlcjt9XHJcbn1cclxuLy8vLy8vLy8vLyBlbmQgcGVvcGxlIHlvdSBtYXkga25vd1xyXG4vLyBzdGFydCBkYXJrIG1vZGVcclxuLnBhcmVudE9mU3VnZXN0ZWQuZGFya01vZGUge1xyXG4gICAgY29sb3I6I0U0RTZFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIC5iZy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7fVxyXG4gICAgLnBlb3BsZVlvdU1heWtub3cge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDsgXHJcbiAgICAgICAgLmZvbGxvdyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjE2ZmRiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzOTUxO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzQzRENjNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgIC5ncmF2YXRhci10aXRsZXt3aWR0aDogMTAwJTt9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxyXG4gICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICBAZXh0ZW5kICVzd2lwZVByZXZBbmROZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcclxuICAgICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAge1xyXG4gICAgICAgIC5zd2lwZXItYnV0dG9uLXByZXYsXHJcbiAgICAgICAgIC5zd2lwZXItYnV0dG9uLW5leHQsXHJcbiAgICAgICAgIC5zd2lwZXItYnV0dG9uLXByZXYsXHJcbiAgICAgICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgIEBleHRlbmQgJXN3aXBlUHJldkFuZE5leHREYXJrbW9kZTtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIHtcclxuICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIjo6bmctZGVlcCAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIsXG46Om5nLWRlZXAgLnN3aXBlci1idXR0b24tbmV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XG59XG46Om5nLWRlZXAgLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbjo6bmctZGVlcCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5zd2lwZXItYnV0dG9uLXByZXYsXG46Om5nLWRlZXAgLnBhcmVudE9mU3VnZXN0ZWQuZGFya01vZGUgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIGJhY2tncm91bmQ6ICMyNDI1MjY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyLFxuOjpuZy1kZWVwIC5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xufVxuXG4ucGVvcGxlWW91TWF5a25vdyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGVvcGxlWW91TWF5a25vdyAubWFpbmltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGVvcGxlWW91TWF5a25vdyAuZm9sbG93IHtcbiAgY29sb3I6ICMyMTZmZGI7XG4gIGJhY2tncm91bmQ6ICNFN0YzRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucGVvcGxlWW91TWF5a25vdyAuZm9sbG93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjZGVmMTtcbn1cbi5wZW9wbGVZb3VNYXlrbm93IC5mb2xsb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4ucGVvcGxlWW91TWF5a25vdyAubWFpbk5hbWUge1xuICB3aWR0aDogMTAwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIHtcbiAgY29sb3I6ICNFNEU2RUI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5wZW9wbGVZb3VNYXlrbm93IHtcbiAgYm94LXNoYWRvdzogcmdiYSgyNDksIDIzMywgMjMzLCAwLjI0KSAwcHggM3B4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5wZW9wbGVZb3VNYXlrbm93IC5mb2xsb3cge1xuICBjb2xvcjogIzIxNmZkYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2Mzk1MTtcbn1cbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5wZW9wbGVZb3VNYXlrbm93IC5mb2xsb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM0M0RDYzO1xufVxuXG46Om5nLWRlZXAgLmdyYXZhdGFyLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xufVxuOjpuZy1kZWVwIC5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzI7XG59Il19 */"] });


/***/ }),

/***/ "Tfk/":
/*!***************************************************************!*\
  !*** ./src/app/view/home-page/add-post/add-post.component.ts ***!
  \***************************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_emptyContentValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/emptyContentValidator */ "RRGy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function AddPostComponent_ng_template_19_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("darkMode", ctx_r2.userProfilesService.userProfile == null ? null : ctx_r2.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "addPost.posting"), " ");
} }
function AddPostComponent_ng_template_19_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_ng_template_19_div_21_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.deletePostImg(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AddPostComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddPostComponent_ng_template_19_div_0_Template, 10, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_ng_template_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddPostComponent_ng_template_19_Template_form_ngSubmit_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.makeApost(ctx_r9.postForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AddPostComponent_ng_template_19_div_21_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddPostComponent_ng_template_19_Template_input_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.selectPostImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.postLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("popupDarkMode", ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 15, "addPost.createPost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 17, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.profilePhoto, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](14, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 24, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 26, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 30, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 32, "addPost.yourMind"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("dir", "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 34, "addPost.toYourPost"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 36, "addPost.photo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.postForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 38, "addPost.post"), "");
} }
class AddPostComponent {
    constructor(userProfilesService, modalService, fb) {
        this.userProfilesService = userProfilesService;
        this.modalService = modalService;
        this.fb = fb;
        this.subscriptions = [];
        this.postLoading = false;
    }
    ngOnInit() {
    }
    openModal(template) {
        this.imgUrl = null;
        this.postImage = null;
        this.modalRef = this.modalService.show(template);
        this.postForm = this.fb.group({
            content: [``, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_shared_emptyContentValidator__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]]
        });
    }
    makeApost(value) {
        this.postLoading = true;
        let postFormData = new FormData;
        postFormData.append('content', value.content);
        if (this.postImage) {
            postFormData.append('image', this.postImage);
        }
        this.subscriptions.push(this.userProfilesService.makeApost(postFormData).subscribe(res => {
            this.postImage = '';
            this.modalRef.hide();
            this.postLoading = false;
            this.getMyFollowingPosts();
        }, err => {
            this.postImage = '';
            this.modalRef.hide();
            this.postLoading = false;
        }));
    }
    // start make img appear once user chose it
    selectPostImg(event) {
        var _a, _b;
        this.postImage = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            this.imgUrl = reader.result;
        };
        if ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.files[0]) {
            reader.readAsDataURL(this.postImage);
        }
        else {
            this.imgUrl = null;
            this.postImage = null;
        }
    }
    // end make img appear once user chose it
    // start clear the input file if user click cancel
    deletePostImg(input) {
        input.value = '';
        this.imgUrl = null;
        this.postImage = null;
    }
    // end clear the input file if user click cancel
    getMyFollowingPosts() {
        this.subscriptions.push(this.userProfilesService.getMyFollowingPosts().subscribe(res => {
            this.userProfilesService.myFollowingPosts = res;
            this.userProfilesService.HomePageSkeltonLoading = false;
        }, err => {
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 21, vars: 25, consts: [[1, "add-post", "bg-white", "p-3", "mb-3", "rounded-lg"], [1, "d-flex", "align-items-center"], ["routerLink", "/myProfile", "alt", "", 1, "smllProfileImg", 3, "src"], [1, "mb-0", "yrMind", "w-100", "px-3", "py-2", 3, "click"], [1, "my-2"], [1, "d-flex", "justify-content-between", "align-items-center", "text-secondary", "font-weight-bold"], [1, "d-flex", "align-items-center", "photoIcon", "p-2", 2, "cursor", "pointer", 3, "click"], [1, "iconn"], [1, "mx-2"], ["template", ""], ["class", "postLoading d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "modal-header"], [1, "modal-title", "pull-left", "text-center", "w-100"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "d-flex", "align-items-center", "mb-2"], ["alt", "", 1, "smllProfileImg", 3, "src"], [1, "mx-3"], [3, "formGroup", "ngSubmit"], ["formControlName", "content", 1, "p-3", "rounded-lg", 3, "placeholder"], ["class", "parentOfimg position-relative mb-2", 4, "ngIf"], [1, "toYourPost", "d-flex", "justify-content-between", "align-items-center", "text-secondary", "font-weight-bold"], [1, "position-relative", "d-flex", "align-items-center", "photoIcon", "p-2"], ["accept", "image/*", "type", "file", 3, "change"], ["input", ""], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", "post", 3, "disabled"], [1, "postLoading", "d-flex", "justify-content-center", "align-items-center"], [1, "text-center"], [1, "font-weight-bold", "text-white"], [1, "lds-ellipsis"], [1, "parentOfimg", "position-relative", "mb-2"], [1, "fas", "fa-times", 3, "click"], ["alt", "", 1, "w-100", 3, "src"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddPostComponent_ng_template_19_Template, 35, 40, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 8, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.profilePhoto, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 11, "addPost.yourMind"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 17, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 19, "addPost.mark"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 21, "addPost.toYourPost"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 23, "addPost.photo"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__["GenderPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-post[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  border-radius: 25px;\n  cursor: pointer;\n  color: #65676b;\n  font-size: large;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.add-post[_ngcontent-%COMP%]   .yrMind[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #E4E6EB !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%] {\n  border: 1px solid #ced0d4;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border: none;\n  margin: 15px 0;\n  min-height: 50px;\n  width: 100%;\n  font-size: 20px;\n  background-color: transparent;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.modal-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 30px;\n  font-weight: normal;\n}\n\n.photoIcon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #F0F2F5;\n}\n\n.iconn[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  background-image: url('icon.png');\n  background-position: 0 -150px;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcYWRkUG9zdC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtBQ0NKOztBREFJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QUREUTtFQUNJLHlCQUFBO0FDR1o7O0FEQUk7RUFBUyxpQkFBQTtBQ0diOztBREFBO0VBQ0ksb0NBQUE7QUNHSjs7QURGSTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQ0lSOztBREhRO0VBQVEseUJBQUE7QUNNaEI7O0FESkk7RUFDSSx5QkFBQTtBQ01SOztBREhRO0VBQ0ksb0NBQUE7QUNLWjs7QURDSTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREFRO0VBRUUsMEJBQUE7QUNDVjs7QURFSTtFQUNJLDBCQUFBO0VBQ0Esb0NBQUE7QUNBUjs7QURDUTtFQUNJLG9DQUFBO0FDQ1o7O0FESUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNGUjs7QURLSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDSFI7O0FESVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBREtJO0VBRUksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0pSOztBREtRO0VBQ0kseUJBQUE7QUNIWjs7QURPTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0xSOztBRFVFO0VBQVcsa0JBQUE7QUNOYjs7QURPRTtFQUlJLGVBQUE7RUFDQSxnQkFBQTtBQ1BOOztBREdNO0VBQ0kseUJBQUE7QUNEVjs7QURPRTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQ0pOOztBRE1FO0VBRUksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDSk47O0FES007RUFBWSx1QkFBQTtBQ0ZsQiIsImZpbGUiOiJhZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVpbnB1dHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuLy8vLy8vLy8vLy8vLyBzdGFydCBhZGQgcG9zdCBzZWN0aW9uXHJcbi5hZGQtcG9zdCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzY1Njc2YjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnlyTWluZCB7bWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8gZW5kIGFkZCBwb3N0IHNlY3Rpb25cclxuLmFkZC1wb3N0LmRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjRTRFNkVCO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcclxuICAgICAgICAmOmhvdmVye2JhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7fVxyXG4gICAgfVxyXG4gICAgLnRleHQtc2Vjb25kYXJ5e1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5waG90b0ljb246aG92ZXIge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vLy8vLy8vLy8gc3RhcnQgbW9kYWwgYm9keVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICAudG9Zb3VyUG9zdFxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQwZDQ7XHJcbiAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgQGV4dGVuZCAlaW5wdXR0O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc3ZjIgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2NkZFNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhcmVudE9maW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAuZmEtdGltZXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tc2Vjb25kYXJ5XHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICMxODc3ZjI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIH1cclxuICAvLy8vLy8vLy8vIGVuZCBtb2RhbCBib2R5XHJcbiAgLy8vLyBzdGFydCBnbG9iYWxcclxuICAucGhvdG9JY29ue2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbiAgLnBob3RvSWNvbjpob3ZlciB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxuICAgICAgfVxyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IC41cztcclxuICB9XHJcbiAgXHJcbiAgLmljb25uIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaWNvbi5wbmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTUwcHg7XHJcbiAgfVxyXG4gIC5wb3N0TG9hZGluZ1xyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDg5IDg3IDg3IC8gNTAlKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHAuZGFya01vZGUge2NvbG9yOmJsYWNrICFpbXBvcnRhbnR9XHJcbiAgfVxyXG4gIC8vLy8gZW5kIGdsb2JhbCAiLCIubW9kYWwtYm9keSAudG9Zb3VyUG9zdCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wb3N0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5hZGQtcG9zdCBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY1Njc2YjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hZGQtcG9zdCBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5hZGQtcG9zdCAueXJNaW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hZGQtcG9zdC5kYXJrTW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwIHtcbiAgY29sb3I6ICNFNEU2RUI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSAudGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIC5waG90b0ljb246aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDBkNDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjZGRTUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tb2RhbC1ib2R5IC5wYXJlbnRPZmltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLm1vZGFsLWJvZHkgLnBhcmVudE9maW1nIC5mYS10aW1lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxODc3ZjI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbC1ib2R5IC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5tb2RhbC1ib2R5IDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5waG90b0ljb24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waG90b0ljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucGhvdG9JY29uOmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbn1cblxuLmljb25uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTBweDtcbn1cblxuLnBvc3RMb2FkaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSg4OSwgODcsIDg3LCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3N0TG9hZGluZyBwLmRhcmtNb2RlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "gF0r":
/*!*************************************************************!*\
  !*** ./src/app/view/home-page/hompage/hompage.component.ts ***!
  \*************************************************************/
/*! exports provided: HompageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HompageComponent", function() { return HompageComponent; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-post/add-post.component */ "Tfk/");
/* harmony import */ var _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../you-may-know/you-may-know.component */ "E161");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");
/* harmony import */ var _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/most-reaction.pipe */ "k08z");
/* harmony import */ var _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/second-reaction.pipe */ "2wBp");
/* harmony import */ var _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/reaction-type.pipe */ "UnZl");
























const _c0 = ["editCommentInpu"];
const _c1 = ["addCommentInput"];
const _c2 = function () { return { "width": "80px", "height": "80px" }; };
const _c3 = function () { return { width: "90%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c4 = function () { return { width: "70%", "border-radius": "0", height: "15px" }; };
const _c5 = function () { return { width: "80%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c6 = function () { return { width: "60%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c7 = function () { return { width: "80px", height: "80px" }; };
function HompageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c6));
} }
const _c8 = function (a1) { return ["/visit", a1]; };
function HompageComponent_ng_template_5_ng_container_0_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c8, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].profilePhoto, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c8, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 14, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 20, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, "posts.bornOn"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](19, 24, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].birthDate, "longDate", undefined, ctx_r12.lang), " ");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r27.seeMoreIndex = ctx_r27.seeMoreIndex == i_r11 ? -1 : i_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r14.seeMoreIndex == i_r11 ? "posts.seeLess" : "posts.seeMore"), "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const post_r10 = ctx_r33.$implicit; const i_r11 = ctx_r33.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); ctx_r31.postComments = []; ctx_r31.userProfileService.popUP = true; return ctx_r31.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", post_r10 == null ? null : post_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", post_r10 == null ? null : post_r10.numOfReactions, "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_p_40_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_p_40_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const post_r10 = ctx_r37.$implicit; const i_r11 = ctx_r37.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r36.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", post_r10 == null ? null : post_r10.numOfComments, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, (post_r10 == null ? null : post_r10.numOfComments) == 1 ? "posts.comment" : "posts.comments"), " ");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "posts.like"));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemm_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", itemm_r41 == null ? null : itemm_r41.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](itemm_r41.reaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, itemm_r41.lang), "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_ng_container_0_div_1_Template, 5, 6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemm_r41 = ctx.$implicit;
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (post_r10 == null ? null : post_r10.myReaction[0] == null ? null : post_r10.myReaction[0].reaction) == itemm_r41.reaction);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_ng_container_0_Template, 2, 1, "ng-container", 65);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.reactions);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_li_51_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_li_51_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const item_r45 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const i_r11 = ctx_r47.index; const post_r10 = ctx_r47.$implicit; const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r46.makeReaction(item_r45 == null ? null : item_r45.reaction, i_r11, _r23, post_r10 == null ? null : post_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r45 == null ? null : item_r45.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c9 = function (a0, a1) { return { paddingRight: a0, paddingLeft: a1 }; };
const _c10 = function (a0, a1) { return { "ml-2": a0, "mr-2": a1 }; };
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "textarea", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_div_1_Template_textarea_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); const post_r10 = ctx_r56.$implicit; const i_r11 = ctx_r56.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r54.makeAComment($event, _r53, post_r10 == null ? null : post_r10._id, i_r11); })("input", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_div_1_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r57.textAreaHeightAuto(_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_div_1_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); const post_r10 = ctx_r59.$implicit; const i_r11 = ctx_r59.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r58.makeAComment($event, _r53, post_r10 == null ? null : post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, ctx_r49.userProfilesService.userProfile == null ? null : ctx_r49.userProfilesService.userProfile.profilePhoto, ctx_r49.userProfilesService.userProfile == null ? null : ctx_r49.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c9, ctx_r49.lang == "ar" ? "0" : "25px", ctx_r49.lang == "ar" ? "25px" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, "posts.writeComment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c10, ctx_r49.lang != "ar", ctx_r49.lang == "ar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("dir", "auto");
} }
const _c11 = function () { return { "width": "32px", "height": "32px", "margin": "0" }; };
const _c12 = function () { return { width: "90%", "border-radius": "0", height: "5px", "margin-bottom": "5px" }; };
const _c13 = function () { return { width: "70%", "border-radius": "0", height: "5px" }; };
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("darkMode", ctx_r60.userProfilesService.userProfile == null ? null : ctx_r60.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c13));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_container_4_li_1_Template, 10, 8, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r50.swiperLoadingCount);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "posts.pressESC"), " ");
} }
const _c14 = function (a0, a1) { return { "paddingRight": a0, "paddingLeft": a1 }; };
const _c15 = function (a0, a1, a2, a3) { return { "ml-2": a0, "mr-2": a1, "mr-0": a2, "ml-0": a3 }; };
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "textarea", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8); return ctx_r73.textAreaHeightAuto(_r71); })("focus", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_focus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8); return ctx_r75.enterESCtoCancel = true; })("blur", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8); return ctx_r76.enterESCtoCancel = false; })("keydown.esc", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_esc_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8); return ctx_r77.editCommentIndex = -1; })("keydown.enter", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); const comment_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r78.updateComment(comment_r66 == null ? null : comment_r66._id, _r71.value, comment_r66 == null ? null : comment_r66.post, i_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); const comment_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r81.updateComment(comment_r66 == null ? null : comment_r66._id, _r71.value, comment_r66 == null ? null : comment_r66.post, i_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_span_9_Template, 3, 3, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](8); return ctx_r84.editCommentIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c14, ctx_r68.lang != "ar" ? "15px" : "0", ctx_r68.lang == "ar" ? "15px" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, "posts.writeComment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](14, _c15, ctx_r68.lang != "ar", ctx_r68.lang == "ar", ctx_r68.lang != "ar", ctx_r68.lang == "ar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("dir", "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r66 == null ? null : comment_r66.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r68.enterESCtoCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "posts.cancel"));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 99);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r87);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template, 1, 1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-menu", null, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); const commentIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7); ctx_r89.editCommentIndex = commentIndex_r67; return ctx_r89.resizeTextArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); const comment_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).index; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r92.deleteComment(comment_r66 == null ? null : comment_r66._id, comment_r66 == null ? null : comment_r66.post, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", null, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
    const comment_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](44, _c8, comment_r66 == null ? null : comment_r66.user == null ? null : comment_r66.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 19, comment_r66.user == null ? null : comment_r66.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](7, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 25, comment_r66.user == null ? null : comment_r66.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (comment_r66 == null ? null : comment_r66.user == null ? null : comment_r66.user._id) == (ctx_r70.userProfilesService.userProfile == null ? null : ctx_r70.userProfilesService.userProfile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("darkModeMenu", ctx_r70.userProfilesService.userProfile == null ? null : ctx_r70.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-right", ctx_r70.lang == "ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 27, "posts.edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-right", ctx_r70.lang == "ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 29, "posts.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 31, comment_r66 == null ? null : comment_r66.comment, _r88), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](27, 34, comment_r66 == null ? null : comment_r66.createdAt, "longDate", undefined, ctx_r70.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](30, 39, comment_r66 == null ? null : comment_r66.createdAt, "longDate", undefined, ctx_r70.lang));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_container_3_Template, 14, 19, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_ng_template_4_Template, 31, 46, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r66 = ctx.$implicit;
    const commentIndex_r67 = ctx.index;
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c8, comment_r66 == null ? null : comment_r66.user == null ? null : comment_r66.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 4, comment_r66 == null ? null : comment_r66.user == null ? null : comment_r66.user.profilePhoto, comment_r66.user == null ? null : comment_r66.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r65.editCommentIndex == commentIndex_r67)("ngIfElse", _r69);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_li_1_Template, 6, 9, "li", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r62.postComments);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "posts.noComments"));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_ng_template_1_Template, 3, 3, "ng-template", null, 80, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r52.postComments == null ? null : ctx_r52.postComments.length)("ngIfElse", _r63);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_div_1_Template, 8, 16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_container_4_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_ng_template_5_Template, 3, 2, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r25.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.commentsLoading)("ngIfElse", _r51);
} }
const _c16 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
function HompageComponent_ng_template_5_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r96.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const i_r11 = ctx.index; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r98.profileOnHover = i_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseover_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const i_r11 = ctx.index; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r99.profileOnHover = i_r11; })("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseleave_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r100.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HompageComponent_ng_template_5_ng_container_0_div_1_div_14_Template, 20, 33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const post_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); ctx_r101.filterReactions = ""; ctx_r101.reacionsModaClassIndex = -1; return ctx_r101.openReactionModal(post_r10._id, _r3, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "img", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, HompageComponent_ng_template_5_ng_container_0_div_1_span_39_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, HompageComponent_ng_template_5_ng_container_0_div_1_p_40_Template, 3, 4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_mouseover_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r102.showParentOfReactionsOnHover(_r23); })("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_mouseleave_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r103.hideParentOfReactionsOnHover(_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, HompageComponent_ng_template_5_ng_container_0_div_1_div_45_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_46_Template, 1, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, HompageComponent_ng_template_5_ng_container_0_div_1_li_51_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const post_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r104.getPostComments(post_r10._id, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_57_Template, 7, 3, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](70, _c8, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 20, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].profilePhoto, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](72, _c8, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 27, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](12, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 33, post_r10 == null ? null : post_r10.author[0] == null ? null : post_r10.author[0].lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.profileOnHover == i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](19, 35, post_r10 == null ? null : post_r10.updatedAt, "longDate", undefined, ctx_r9.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](22, 40, post_r10 == null ? null : post_r10.updatedAt, "longDate", undefined, ctx_r9.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](27, 48, post_r10 == null ? null : post_r10.content, i_r11, ctx_r9.seeMoreIndex), _r13), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (post_r10 == null ? null : post_r10.content == null ? null : post_r10.content.length) > 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](35, 52, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](74, _c16, post_r10.love, post_r10.sad, post_r10.wow, post_r10.haha, post_r10.angry, post_r10.like, _r16)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](38, 60, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](82, _c16, post_r10.love, post_r10.sad, post_r10.wow, post_r10.haha, post_r10.angry, post_r10.like, _r17)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", post_r10 == null ? null : post_r10.numOfComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(post_r10 == null ? null : post_r10.myReaction == null ? null : post_r10.myReaction.length))("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.reactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 68, "posts.comment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.postCommentsIndex == i_r11);
} }
function HompageComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_Template, 58, 90, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.userProfileService.myFollowingPosts)("ngForTrackBy", ctx_r6.track);
} }
function HompageComponent_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "posts.noMorePosts"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "posts.homePageNoPostsOne"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, "posts.findFriends"));
} }
function HompageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_template_1_Template, 10, 9, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.userProfileService.myFollowingPosts == null ? null : ctx_r2.userProfileService.myFollowingPosts.length)("ngIfElse", _r7);
} }
function HompageComponent_ng_template_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r108.filterReactions = ""; return ctx_r108.reacionsModaClassIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("like", ctx_r105.filterReactions == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "reactionModal.all"));
} }
function HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r110 = ctx_r115.$implicit; const i_r111 = ctx_r115.index; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r113.filterReactions = item_r110 == null ? null : item_r110.reactionImg; return ctx_r113.reacionsModaClassIndex = i_r111; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r111 = ctx_r116.index;
    const item_r110 = ctx_r116.$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r112.reacionsModaClassIndex == i_r111 ? item_r110 == null ? null : item_r110.reactionImg : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/" + (item_r110 == null ? null : item_r110.reactionImg) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r110 == null ? null : item_r110.length);
} }
function HompageComponent_ng_template_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template, 4, 3, "ng-template", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function HompageComponent_ng_template_7_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_li_10_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r118.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_li_10_Template_h3_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r120.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c8, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 6, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user.profilePhoto, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/" + (item_r117 == null ? null : item_r117.reaction) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c8, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 13, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 19, item_r117 == null ? null : item_r117.user == null ? null : item_r117.user.lastName), 0, 12), " ");
} }
function HompageComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "swiper", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HompageComponent_ng_template_7_ng_template_3_Template, 3, 5, "ng-template", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HompageComponent_ng_template_7_ng_container_4_Template, 2, 0, "ng-container", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r121.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HompageComponent_ng_template_7_li_10_Template, 12, 25, "li", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "reactionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("popupDarkMode", ctx_r4.userProfilesService.userProfile == null ? null : ctx_r4.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx_r4.reactionSwiper);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.sortReaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 5, ctx_r4.postReactions, ctx_r4.filterReactions));
} }
function HompageComponent_div_9_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 69);
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r123.popupPost == null ? null : ctx_r123.popupPost.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function HompageComponent_div_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HompageComponent_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_div_13_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r133.navigate(ctx_r133.popupPost == null ? null : ctx_r133.popupPost.author == null ? null : ctx_r133.popupPost.author._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_div_13_Template_h2_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r135.navigate(ctx_r135.popupPost == null ? null : ctx_r135.popupPost.author == null ? null : ctx_r135.popupPost.author._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_div_13_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r136.hideCommentsInMobileScreen(_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 4, ctx_r127.popupPost == null ? null : ctx_r127.popupPost.author == null ? null : ctx_r127.popupPost.author.profilePhoto, ctx_r127.popupPost == null ? null : ctx_r127.popupPost.author == null ? null : ctx_r127.popupPost.author.gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 11, ctx_r127.popupPost == null ? null : ctx_r127.popupPost.author == null ? null : ctx_r127.popupPost.author.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 17, ctx_r127.popupPost == null ? null : ctx_r127.popupPost.author == null ? null : ctx_r127.popupPost.author.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](12, 19, ctx_r127.popupPost == null ? null : ctx_r127.popupPost.updatedAt, "longDate", undefined, ctx_r127.lang), " ");
} }
function HompageComponent_div_9_div_20_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r139.popupReactions == null ? null : ctx_r139.popupReactions.numOfReactions, "");
} }
function HompageComponent_div_9_div_20_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r140.postComments == null ? null : ctx_r140.postComments.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, (ctx_r140.postComments == null ? null : ctx_r140.postComments.length) == 1 ? "posts.comment" : "posts.comments"), " ");
} }
function HompageComponent_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 37, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HompageComponent_div_9_div_20_span_8_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HompageComponent_div_9_div_20_p_9_Template, 3, 4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](20, _c16, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfLoves, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfSads, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfWows, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfHahas, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfAngrys, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfLikes, _r137)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](7, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](28, _c16, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfLoves, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfSads, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfWows, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfHahas, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfAngrys, ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfLikes, _r138)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r129.popupReactions == null ? null : ctx_r129.popupReactions.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r129.postComments == null ? null : ctx_r129.postComments.length);
} }
function HompageComponent_div_9_ng_container_23_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("darkMode", ctx_r141.userProfilesService.userProfile == null ? null : ctx_r141.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c13));
} }
function HompageComponent_div_9_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_div_9_ng_container_23_li_1_Template, 10, 8, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r130.swiperLoadingCount);
} }
function HompageComponent_div_9_ng_template_24_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_ng_template_24_ng_container_0_li_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r151); const comment_r147 = ctx.$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r150.navigate(comment_r147 == null ? null : comment_r147.user == null ? null : comment_r147.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_ng_template_24_ng_container_0_li_1_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r151); const comment_r147 = ctx.$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r152.navigate(comment_r147 == null ? null : comment_r147.user == null ? null : comment_r147.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", null, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r147 = ctx.$implicit;
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, comment_r147 == null ? null : comment_r147.user == null ? null : comment_r147.user.profilePhoto, comment_r147.user == null ? null : comment_r147.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 12, comment_r147.user == null ? null : comment_r147.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](9, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 18, comment_r147.user == null ? null : comment_r147.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 20, comment_r147 == null ? null : comment_r147.comment, _r149));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](19, 23, comment_r147 == null ? null : comment_r147.createdAt, "longDate", undefined, ctx_r146.lang));
} }
function HompageComponent_div_9_ng_template_24_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_div_9_ng_template_24_ng_container_0_li_1_Template, 20, 28, "li", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r143.postComments);
} }
function HompageComponent_div_9_ng_template_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "posts.noComments"));
} }
function HompageComponent_div_9_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HompageComponent_div_9_ng_template_24_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HompageComponent_div_9_ng_template_24_ng_template_1_Template, 3, 3, "ng-template", null, 80, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r132.postComments == null ? null : ctx_r132.postComments.length)("ngIfElse", _r144);
} }
function HompageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HompageComponent_div_9_img_2_Template, 1, 1, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HompageComponent_div_9_ng_template_3_Template, 5, 0, "ng-template", null, 123, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r154); const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r153.showCommentsInMobileScreen(_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HompageComponent_div_9_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r154); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r155.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HompageComponent_div_9_div_13_Template, 14, 24, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, HompageComponent_div_9_div_20_Template, 10, 36, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HompageComponent_div_9_ng_container_23_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, HompageComponent_div_9_ng_template_24_Template, 3, 2, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("darkMode", ctx_r5.userProfilesService.userProfile == null ? null : ctx_r5.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.popupPost == null ? null : ctx_r5.popupPost.image)("ngIfElse", _r124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, "posts.showComments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 12, ctx_r5.popupPost == null ? null : ctx_r5.popupPost.content, _r128));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.commentsLoading)("ngIfElse", _r131);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_2__["Navigation"],]);
class HompageComponent {
    constructor(userProfileService, cd, commentService, userProfilesService, modalService, title, rendrer, router, auth, translate) {
        this.userProfileService = userProfileService;
        this.cd = cd;
        this.commentService = commentService;
        this.userProfilesService = userProfilesService;
        this.modalService = modalService;
        this.title = title;
        this.rendrer = rendrer;
        this.router = router;
        this.auth = auth;
        this.translate = translate;
        this.profileOnHover = -1;
        this.seeMoreIndex = -1;
        this.swiperLoadingCount = [];
        this.postComments = [];
        this.postCommentsIndex = -1;
        this.commentsLoading = true;
        this.subscriptions = [];
        this.editCommentIndex = -1;
        this.enterESCtoCancel = true;
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
        this.subscriptions.push(translate.get('posts.reactions').subscribe(res => this.reactions = res));
    }
    ngOnInit() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`, { query: { token: `${localStorage.getItem('fakebookToken')}` } });
        this.title.setTitle("Fakebook");
        window.scroll(0, 0);
        this.swiperLoadingCount.length = 5;
        // start listen to users comments to push the comment in the comments array
        this.commentService.listen("comment").subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.getMyFollowingPosts();
            if (this.postCommentsIndex != -1 &&
                ((_a = this.userProfileService.myFollowingPosts[this.postCommentsIndex]) === null || _a === void 0 ? void 0 : _a._id) == ((_c = (_b = res === null || res === void 0 ? void 0 : res.comment) === null || _b === void 0 ? void 0 : _b.post) === null || _c === void 0 ? void 0 : _c._id)) {
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
            this.getMyFollowingPosts();
        }, err => { this.router.navigate(["/error"]); });
        // end listen to users comments to push the comment in the comments array
        this.getMyFollowingPosts();
    }
    getMyFollowingPosts() {
        this.subscriptions.push(this.userProfileService.getMyFollowingPosts().subscribe(res => {
            this.postCommentsIndex = -1;
            this.userProfileService.myFollowingPosts = res;
            console.log(res);
            this.userProfileService.HomePageSkeltonLoading = false;
        }, err => {
        }));
    }
    // end swiper carousel options
    makeAComment(event, input, positId, i) {
        var _a, _b;
        event.preventDefault();
        if (input.value.trim() != '' && ((_a = this.userProfilesService.userProfile) === null || _a === void 0 ? void 0 : _a._id)) {
            this.commentService.emit("addComment", {
                postId: positId,
                userId: (_b = this.userProfilesService.userProfile) === null || _b === void 0 ? void 0 : _b._id,
                comment: input.value.trim()
            }).then(res => {
                this.userProfilesService.myFollowingPosts[i].numOfComments += 1;
                input.value = '';
                input.style.height = 'auto';
                input.style.height = input.scrollHeight + 'px';
            }, err => { this.router.navigate(["/error"]); });
        }
    }
    track(index) {
        return index;
    }
    get lang() { return localStorage.getItem("currenLanguage") || "en"; }
    getPostComments(id, i) {
        this.scrollY = window.scrollY;
        this.commentsLoading = true;
        this.postComments = [];
        this.postCommentsIndex = i;
        this.subscriptions.push(this.userProfilesService.getPostComment(id).subscribe((res) => {
            this.commentsLoading = false;
            if (!this.userProfileService.popUP) {
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
            let userPost = this.userProfileService.myFollowingPosts[i];
            userPost.angry = res === null || res === void 0 ? void 0 : res.numOfAngrys;
            userPost.sad = res === null || res === void 0 ? void 0 : res.numOfSads;
            userPost.haha = res === null || res === void 0 ? void 0 : res.numOfHahas;
            userPost.wow = res === null || res === void 0 ? void 0 : res.numOfWows;
            userPost.like = res === null || res === void 0 ? void 0 : res.numOfLikes;
            userPost.love = res === null || res === void 0 ? void 0 : res.numOfLoves;
            userPost.numOfReactions = res === null || res === void 0 ? void 0 : res.numOfReactions;
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
            this.getPostComments(postId, i);
            this.userProfilesService.myFollowingPosts[i].numOfComments -= 1;
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
    // start make user control on textarea height
    textAreaHeightAuto(textArea) {
        textArea.style.height = '34px';
        textArea.style.height = textArea.scrollHeight + 'px';
    }
    // end make user control on textarea height
    openModal(template) {
        this.modalRef = this.modalService.show(template);
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
        this.userProfileService.popUP = false;
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
        if (this.userProfileService.popUP) {
            this.closePopup();
        }
    }
    makeReaction(reactionName, i, parentOfReactions, postId) {
        var _a, _b;
        console.log(reactionName);
        let userPost = this.userProfileService.myFollowingPosts[i];
        this.rendrer.addClass(parentOfReactions, "hideParentOfReactions");
        if ((_a = userPost === null || userPost === void 0 ? void 0 : userPost.myReaction) === null || _a === void 0 ? void 0 : _a.length) {
            if (reactionName == ((_b = userPost === null || userPost === void 0 ? void 0 : userPost.myReaction[0]) === null || _b === void 0 ? void 0 : _b.reaction)) {
                userPost.myReaction = [];
            }
            else {
                userPost.myReaction = [];
                userPost.myReaction.push({ reaction: reactionName });
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
}
HompageComponent.ɵfac = function HompageComponent_Factory(t) { return new (t || HompageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_5__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
HompageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HompageComponent, selectors: [["app-hompage"]], viewQuery: function HompageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editCommentInpu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addCommentInput = _t.first);
    } }, hostBindings: function HompageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function HompageComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 10, vars: 5, consts: [[1, "parentOfHomePage", "py-5"], [1, "parentOfHomePageContainer", "mx-auto"], [4, "ngIf", "ngIfElse"], ["content", ""], ["reaction", ""], ["class", "popupp", 3, "darkMode", 4, "ngIf"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4"], [1, "first-section-wrapper", "d-flex", "align-items-center", "mb-3"], [1, "gravatar"], ["appearance", "circle", 3, "theme"], [1, "gravatar-title", "mx-3"], [3, "theme"], [1, "second-section-wrapper"], [1, "wrapper"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4", "my-3"], ["noPosts", ""], ["class", " postss bg-white py-1 rounded-lg mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "postss", "bg-white", "py-1", "rounded-lg", "mb-3"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", 3, "mouseleave"], [3, "routerLink", "mouseover"], ["alt", "", 1, "smllProfileImg", 3, "src"], [1, "mx-3"], [3, "mouseover", "mouseleave"], [1, "userName", 3, "routerLink"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "position-relative"], [1, "timee", "d-inline-block"], [1, "text-secondary"], [1, "timeOnHover"], [1, "px-3", "text-break"], ["elementt", ""], ["class", "font-weight-bold text-secondary", "style", "cursor: pointer;direction: inherit;", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "alt", "", "class", "w-100 mt-3", 3, "src", "click", 4, "ngIf"], [1, "postOptions", "px-3"], [1, "my-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount", 2, "cursor", "pointer", 3, "click"], ["alt", "", 1, "first", 3, "src"], ["first", ""], ["alt", "", 1, "last", 3, "src"], ["secondIMG", ""], [4, "ngIf"], ["class", " numOfComments", 3, "click", 4, "ngIf"], [1, "options", "list-unstyled", "d-flex", "justify-content-center", "mb-3"], [1, "showReactions", 3, "mouseover", "mouseleave"], [1, "userReact"], ["reactionFound", ""], [1, "hideParentOfReactions", "parentOfReactions"], ["parentOfReactions", ""], [1, "reactions", "bg-white", "p-1", "d-flex", "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "far", "fa-comment-alt"], [1, "mx-2"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink"], ["alt", "", 1, "profile", 3, "src"], [1, "mb-2", 3, "routerLink"], [1, "far", "fa-calendar-alt"], [1, "mx-1"], [1, "font-weight-bold", "text-secondary", 2, "cursor", "pointer", "direction", "inherit", 3, "click"], ["alt", "", 1, "w-100", "mt-3", 2, "cursor", "pointer", 3, "src", "click"], [1, "numOfComments", 3, "click"], [1, "far", "fa-thumbs-up"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "src"], ["alt", "", 3, "src"], ["class", "d-flex writeAcomment", 4, "ngIf"], [1, "parentOfComments", "mt-2"], [1, "comments", "list-unstyled", "my-2", "p-0"], ["commentsConetent", ""], [1, "d-flex", "writeAcomment"], [1, "position-relative", "w-100", 3, "ngStyle"], ["rows", "1", "type", "text", 3, "ngClass", "placeholder", "keydown.enter", "input"], ["addCommentInput", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "30px", 3, "click"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], ["noCommentsYet", ""], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["alt", "", 2, "cursor", "pointer", 3, "routerLink", "src"], ["commentContent", ""], [1, "w-100"], [1, "position-relative", 3, "ngStyle"], [2, "height", "32px !important", 3, "ngClass", "placeholder", "input", "focus", "blur", "keydown.esc", "keydown.enter"], ["editCommentInpu", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "20px", 3, "click"], ["class", "d-none d-md-inline", 4, "ngIf"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "d-none", "d-md-inline"], [1, "commnetContent"], [1, "font-weight-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", " fas fa-ellipsis-h mx-2", "style", "cursor: pointer;", 3, "matMenuTriggerFor", 4, "ngIf"], ["EditComment", "matMenu"], ["mat-menu-item", "", 3, "click"], ["commentP", ""], [1, "fas", "fa-ellipsis-h", "mx-2", 2, "cursor", "pointer", 3, "matMenuTriggerFor"], [1, "text-center", "bg-white", "p-3", "my-3", "rounded-lg", "noMorePosts"], [1, "font-weight-bold", "text-secondary"], [1, "my-2"], ["routerLink", "/peopleYouMayKnow", 1, "btn", "btn-primary"], [1, "parentOfReactionsModal"], [1, "modal-header"], [3, "config"], ["swiperSlide", ""], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "parentOfimg", "reactionsModal"], [1, "list-unstyled", "p-0"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "click"], [1, "d-flex", "align-items-center", "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "ngClass", "click"], ["alt", "", 2, "width", "20px", "height", "20px", "margin", "0 5px", 3, "src"], [1, "mb-3"], ["alt", "", 1, "mainIMG", 2, "cursor", "pointer", 3, "routerLink", "src", "click"], ["alt", "", 1, "reactionImg", 3, "src"], [1, "mx-3", 2, "cursor", "pointer", 3, "routerLink", "click"], [1, "popupp"], [1, "imgSection", "d-flex", "justify-content-center", "align-items-center"], ["alt", "", 3, "src", 4, "ngIf", "ngIfElse"], ["popupLoading", ""], [1, "showComments", 3, "click"], [1, "fas", "fa-times", 3, "click"], [1, "zIndex", "commentsSection", "p-3"], ["commentsSection", ""], ["class", "d-flex align-items-center pt-3 ", 4, "ngIf"], [1, "autoScroll", "parentOfComments"], [1, "py-3", "mx-2"], ["el", ""], [1, "postOptions"], ["class", "m-2 d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "comments", "px-0", "list-unstyled", "m-2"], [1, "lds-ring"], [1, "d-flex", "align-items-center", "pt-3"], ["alt", "", 1, "profilePopup", 2, "cursor", "pointer", 3, "src", "click"], [1, "m-0", 2, "cursor", "pointer", 3, "click"], [1, "m-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount"], ["firstIMG", ""], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], [1, "font-weight-bold", 2, "cursor", "pointer", 3, "click"]], template: function HompageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-add-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-you-may-know");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HompageComponent_ng_container_4_Template, 33, 24, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HompageComponent_ng_template_5_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HompageComponent_ng_template_7_Template, 12, 8, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HompageComponent_div_9_Template, 26, 15, "div", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProfileService.HomePageSkeltonLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userProfileService.popUP);
    } }, directives: [_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__["AddPostComponent"], _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_12__["YouMayKnowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__["NgxSkeletonLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], swiper_angular__WEBPACK_IMPORTED_MODULE_17__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_17__["SwiperSlideDirective"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_18__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_19__["LangPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_20__["TextPipe"], _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_21__["MostReactionPipe"], _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_22__["SecondReactionPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_23__["ReactionTypePipe"]], styles: [".postsLoadingg.darkMode .loader,   .parentOfHomePage.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-post[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  border-radius: 25px;\n  cursor: pointer;\n  color: #65676b;\n  font-size: large;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.add-post[_ngcontent-%COMP%]   .yrMind[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #E4E6EB !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%] {\n  border: 1px solid #ced0d4;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border: none;\n  margin: 15px 0;\n  min-height: 50px;\n  width: 100%;\n  font-size: 20px;\n  background-color: transparent;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.modal-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 30px;\n  font-weight: normal;\n}\n\n.photoIcon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #F0F2F5;\n}\n\n.iconn[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  background-image: url('icon.png');\n  background-position: 0 -150px;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 2px 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border-radius: 5px;\n  font-weight: 500;\n  font-size: 15px;\n  color: #65676b;\n  cursor: pointer;\n  padding: 6px 20px;\n  text-align: center;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .userReact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .writeAcomment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%] {\n  left: 13px;\n  z-index: 1;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: -1px;\n  display: block;\n}\n\n.popupp[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 35px !important;\n}\n\n.postss[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .hideParentOfReactions[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .showReactions[_ngcontent-%COMP%]:hover   .reactions[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfReactions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -52px;\n  height: 60px;\n  padding: 10px 5px;\n  overflow: hidden;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  border-radius: 30px;\n  transition: 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%] {\n  color: #65676b;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: #F0F2F5;\n  border-radius: 20px;\n  padding: 7px 45px 7px 15px;\n  width: 100%;\n  resize: none;\n  height: 32px;\n  overflow: hidden;\n  margin-right: 15px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.postss[_ngcontent-%COMP%]   .timeOnHover[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  position: absolute;\n  top: 25px;\n  left: -18px;\n  background: rgba(13, 13, 13, 0.77);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 100px;\n  z-index: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   small[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 1px solid var(--secondary);\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   .timeOnHover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #D8DADF;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EE3050;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .sad[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA82A;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .angry[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DD6B0E;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .wow[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA85F;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .haha[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA823;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0B86ED;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .mainIMG[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .reactionImg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -6px;\n  bottom: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid gray;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #4E4F50;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-color: rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n\n@media only screen and (max-width: 992px) {\n  .profileOnHover[_ngcontent-%COMP%], .timeOnHover[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n  .darkModeMenu {\n  background-color: #242526 !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n  .darkModeMenu .mat-menu-item {\n  color: #B8BBBF;\n}\n\n  .darkModeMenu .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n.popupp[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: black;\n  z-index: 11111111111111110000;\n  display: flex;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  text-align: center;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  left: 15px;\n  top: 20px;\n  font-size: large;\n  background: none;\n  color: white;\n  padding: 0;\n  cursor: pointer;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background: white;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .autoScroll[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow: auto;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   img.profilePopup[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  background: none;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: none !important;\n  overflow-y: auto !important;\n}\n\n.popupp.darkMode[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n}\n\n.popupp.darkMode[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    color: white;\n    position: absolute;\n    bottom: 4.5%;\n    width: 100%;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n  }\n  .popupp[_ngcontent-%COMP%]   .zIndex[_ngcontent-%COMP%] {\n    z-index: -1;\n  }\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n  .parentOfReactionsModal .modal-header {\n  align-items: normal !important;\n  padding: 1rem 1rem 0 !important;\n}\n\n  .parentOfReactionsModal .close {\n  color: #b9b9b9;\n}\n\n.parentOfHomePage[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #F0F2F5;\n}\n\n.parentOfHomePage[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%] {\n  background-color: #18191A;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .noMorePosts[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .noMorePosts[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n@media only screen and (max-width: 600px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n.fa-paper-plane[_ngcontent-%COMP%] {\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xccGxhY2Vob2xkZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcYWRkUG9zdC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx1c2VyLXZpc2l0LWhvbWVQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0kseUJBQUE7QUNJWjs7QURBRTs7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7QUNJSjs7QURISTs7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FDTVI7O0FETFE7O0VBQ0ksb0NBQUE7QUNRWjs7QURKRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUNPSjs7QUN0REE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHlESjs7QUN0REE7RUFDSSwyQ0FBQTtBRHlESjs7QUN4REk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDBEUjs7QUN6RFE7RUFDSSx5QkFBQTtBRDJEWjs7QUN4REk7RUFBUyxpQkFBQTtBRDJEYjs7QUN4REE7RUFDSSxvQ0FBQTtBRDJESjs7QUMxREk7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUQ0RFI7O0FDM0RRO0VBQVEseUJBQUE7QUQ4RGhCOztBQzVESTtFQUNJLHlCQUFBO0FEOERSOztBQzNEUTtFQUNJLG9DQUFBO0FENkRaOztBQ3ZESTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRHlEUjs7QUN4RFE7RUFFRSwwQkFBQTtBRHlEVjs7QUN0REk7RUFDSSwwQkFBQTtFQUNBLG9DQUFBO0FEd0RSOztBQ3ZEUTtFQUNJLG9DQUFBO0FEeURaOztBQ3BESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRHNEUjs7QUNuREk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBRHFEUjs7QUNwRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRHNEWjs7QUNuREk7RUFFSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEb0RSOztBQ25EUTtFQUNJLHlCQUFBO0FEcURaOztBQ2pETTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRG1EUjs7QUM5Q0U7RUFBVyxrQkFBQTtBRGtEYjs7QUNqREU7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7QURpRE47O0FDckRNO0VBQ0kseUJBQUE7QUR1RFY7O0FDakRFO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0FEb0ROOztBQ2xERTtFQUVJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRG9ETjs7QUNuRE07RUFBWSx1QkFBQTtBRHNEbEI7O0FFbExFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FGcUxKOztBRXBMRztFQUlLLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZtTFI7O0FFN0xRO0VBQ0kseUJBQUE7QUYrTFo7O0FFbkxRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUZxTFo7O0FFaExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRm1MSjs7QUVoTEk7RUFDSSxvQkFBQTtBRm1MUjs7QUVsTFE7RUFDSSxtQkFBQTtBRm9MWjs7QUVsTFE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZvTFo7O0FFNUtJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRjhLUjs7QUU1S0k7RUFDSSxVQUFBO0FGOEtSOztBRTVLSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FGOEtSOztBRTVLSztFQUFNLGlCQUFBO0VBQ0gsZ0JBQUE7RUFDQyxjQUFBO0FGK0tUOztBRTdLSTtFQUFlLDRCQUFBO0FGZ0xuQjs7QUU5S0E7RUFDSSxrQkFBQTtBRmlMSjs7QUUvS1E7RUFDSSxlQUFBO0FGaUxaOztBRWhMWTtFQUFTLDBCQUFBO0FGbUxyQjs7QUU5S1E7RUFBd0IsV0FBQTtBRmlMaEM7O0FFaExRO0VBQWlDLGFBQUE7QUZtTHpDOztBRWxMUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRm1MWjs7QUVqTFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBRm1MWjs7QUVsTFk7RUFDRSxrQkFBQTtBRm9MZDs7QUVsTFk7RUFDSSxnQkFBQTtBRm9MaEI7O0FFbkxnQjtFQUNJLHFCQUFBO0FGcUxwQjs7QUVqTFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FGbUxaOztBRWxMWTtFQUNJLDBCQUFBO0FGb0xoQjs7QUVqTFE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRm1MWjs7QUU5S1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FGZ0xaOztBRXRLSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUZ3S1I7O0FFdktRO0VBQ0csOEJBQUE7QUZ5S1g7O0FFdEtJO0VBRUksU0FBQTtBRnVLUjs7QUV0S1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUZ3S1o7O0FFaktJO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRm1LTDs7QUVoS0E7RUFBbUMseUNBQUE7QUZtS25DOztBRWxLQTtFQUE0QixjQUFBO0FGcUs1Qjs7QUVwS0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUZzS0o7O0FFcktJO0VBQ0ksbUJBQUE7QUZ1S1I7O0FFaEtJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksZ0NBQUE7QUZtS1I7O0FFaktJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUZtS1I7O0FFbEtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRm9LWjs7QUVsS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZvS1o7O0FFbEtRO0VBQVMsMEJBQUE7QUZxS2pCOztBRTdKRTs7RUFBSSw4Q0FBQTtBRmtLTjs7QUVqS0U7O0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FGb0tOOztBRW5LTTs7RUFBYSxvQ0FBQTtBRnVLbkI7O0FFdEtNOztFQUFvQixvQ0FBQTtBRjBLMUI7O0FFeEtVOztFQUNHLDZCQUFBO0FGMktiOztBRXZLVTs7RUFDSSxtQkFBQTtBRjBLZDs7QUVqS0s7O0VBQ0ksc0NBQUE7QUZvS1Q7O0FFbktROztFQUlLLGNBQUE7QUZtS2I7O0FFdEthOztFQUNDLHlCQUFBO0FGeUtkOztBRXBLTTs7O0VBQ0kscURBQUE7RUFDQSx5QkFBQTtBRndLVjs7QUV0S007O0VBQWMsY0FBQTtBRjBLcEI7O0FFcEtBO0VBRUs7SUFDSSx3QkFBQTtFRnNLUDtBQUNGOztBRWpLQztFQUVHLG9DQUFBO0VBQ0Esa0RBQUE7QUZrS0o7O0FFaktJO0VBQ0ksY0FBQTtBRm1LUjs7QUVsS1E7RUFBUyx5QkFBQTtBRnFLakI7O0FFMUpBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBRjZKSjs7QUU1Skk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRjhKUjs7QUU3SlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUYrSlo7O0FFN0pRO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FGOEpaOztBRTNKSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUY2SlI7O0FFNUpRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUY4Slo7O0FFNUpRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRjhKWjs7QUU1SlE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUY2Slo7O0FFMUpJO0VBRUksMkJBQUE7RUFDQSwyQkFBQTtBRjJKUjs7QUVuSkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FGcUpSOztBRXBKUTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUZzSlo7O0FFbEpBO0VBRVE7SUFDSSxVQUFBO0VGb0pWO0VFaEpVO0lBQ0ksYUFBQTtFRmtKZDtFRS9JTTtJQUNJLFVBQUE7RUZpSlY7QUFDRjs7QUU5SUE7RUFFUTtJQUNJLGFBQUE7RUYrSVY7O0VFM0lNO0lBQVcsYUFBQTtFRitJakI7QUFDRjs7QUU3SUE7RUFFUTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUY4SVY7RUV6SVU7SUFFSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRjBJZDtFRXZJTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFRnlJVjtFRXZJTTtJQUFTLFdBQUE7RUYwSWY7QUFDRjs7QUV0SUk7RUFBZ0IsV0FBQTtBRnlJcEI7O0FFdklRO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBRnlJWjs7QUV2SVE7RUFBUSxjQUFBO0FGMEloQjs7QUFyakJBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQXdqQko7O0FBdmpCSTtFQUFtQixlQUFBO0FBMGpCdkI7O0FBeGpCQTtFQUNJLHlCQUFBO0FBMmpCSjs7QUExakJJO0VBQVcsOEJBQUE7QUE2akJmOztBQTVqQkk7RUFDSSx5QkFBQTtBQThqQlI7O0FBN2pCUTtFQUFpQix5QkFBQTtBQWdrQnpCOztBQTFqQkE7RUFDSTtJQUNJLFVBQUE7RUE2akJOOztFQTFqQk07SUFDSSwyQkFBQTtFQTZqQlY7QUFDRjs7QUF6akJBO0VBQ0k7SUFDSSxVQUFBO0VBMmpCTjtBQUNGOztBQXpqQkE7RUFDSTtJQUNJLFVBQUE7RUEyakJOO0FBQ0Y7O0FBempCQTtFQUEwQixXQUFBO0FBNGpCMUI7O0FBM2pCQTtFQUFpQixXQUFBO0FBK2pCakIiLCJmaWxlIjoiaG9tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4lZGFya21vZGVMb2FkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyXHJcbn1cclxuJXByb2ZpbGVPbkhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIGltZy5wcm9maWxlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlYiA7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAlcHJvZmlsZU9uSG92ZXJEYXJrTW9kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjQ5IDIzMyAyMzMgLyAyNCUpIDBweCAzcHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3IDIyNyAyMjcgLyAxMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJW92ZXJJTUcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiAxMTUgMTE1IC8gMTclKTtcclxuICB9IiwiOjpuZy1kZWVwIC5wb3N0c0xvYWRpbmdnLmRhcmtNb2RlIC5sb2FkZXIsXG46Om5nLWRlZXAgLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLmxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyMzIzMjtcbn1cblxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciBpbWcucHJvZmlsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFERjtcbn1cblxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucHJvZmlsZU9uSG92ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciAub3ZlcklNRzpob3Zlcjo6YWZ0ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTE1LCAxMTUsIDAuMTcpO1xufVxuXG4ubW9kYWwtYm9keSAudG9Zb3VyUG9zdCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wb3N0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5hZGQtcG9zdCBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY1Njc2YjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hZGQtcG9zdCBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5hZGQtcG9zdCAueXJNaW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hZGQtcG9zdC5kYXJrTW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwIHtcbiAgY29sb3I6ICNFNEU2RUI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSAudGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIC5waG90b0ljb246aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDBkNDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjZGRTUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tb2RhbC1ib2R5IC5wYXJlbnRPZmltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLm1vZGFsLWJvZHkgLnBhcmVudE9maW1nIC5mYS10aW1lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxODc3ZjI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbC1ib2R5IC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5tb2RhbC1ib2R5IDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5waG90b0ljb24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waG90b0ljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucGhvdG9JY29uOmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbn1cblxuLmljb25uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTBweDtcbn1cblxuLnBvc3RMb2FkaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSg4OSwgODcsIDg3LCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3N0TG9hZGluZyBwLmRhcmtNb2RlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5vcHRpb25zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGkge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NTY3NmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm9wdGlvbnMgLnVzZXJSZWFjdCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAud3JpdGVBY29tbWVudCBpbWcsIC5wb3B1cHAgLnBhcmVudE9mQ29tbWVudHMgaW1nLCAucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZDb21tZW50cyBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wb3B1cHAgLnBhcmVudE9mQ29tbWVudHMgLmNvbW1lbnRzLCAucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5wb3B1cHAgLnBhcmVudE9mQ29tbWVudHMgLmNvbW1lbnRzIGxpLCAucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMgLmNvbW1uZXRDb250ZW50LCAucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMgLmNvbW1uZXRDb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucG9wdXBwIC5yZWFjdGlvbnNDb3VudCBpbWcsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucG9wdXBwIC5yZWFjdGlvbnNDb3VudCBpbWcuZmlyc3QsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBpbWcuZmlyc3Qge1xuICB6LWluZGV4OiAyO1xufVxuLnBvcHVwcCAucmVhY3Rpb25zQ291bnQgaW1nLmxhc3QsIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBpbWcubGFzdCB7XG4gIGxlZnQ6IDEzcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ucG9wdXBwIC5yZWFjdGlvbnNDb3VudCBzcGFuLCAucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zQ291bnQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wb3B1cHAgLnJlYWN0aW9uc0NvdW50IC5leGlzdCArIHNwYW4sIC5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCAuZXhpc3QgKyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbn1cblxuLnBvc3RzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5udW1PZkNvbW1lbnRzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm51bU9mQ29tbWVudHM6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5oaWRlUGFyZW50T2ZSZWFjdGlvbnMge1xuICB6LWluZGV4OiAtMTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5zaG93UmVhY3Rpb25zOmhvdmVyIC5yZWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mUmVhY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MnB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnMgbGkge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9ucyBsaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5ncmF5UCB7XG4gIGNvbG9yOiAjNjU2NzZiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5ncmF5UDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgdGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGMEYyRjU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDdweCA0NXB4IDdweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5wYXJlbnRPZkNvbW1lbnRzIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5wb3N0c3MgLnVzZXJOYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnBvc3RzcyAudXNlck5hbWU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4ucG9zdHNzIC5wcm9maWxlT25Ib3ZlciB7XG4gIHRvcDogMzdweDtcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIC5vdmVySU1HIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucG9zdHNzIC50aW1lT25Ib3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IC0xOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAxMywgMTMsIDAuNzcpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3N0c3MgLnRpbWVlOmhvdmVyIHNtYWxsOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi5wb3N0c3MgLnRpbWVlOmhvdmVyIC50aW1lT25Ib3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBvc3RzcyAuZmEtZWxsaXBzaXMtaCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnBvc3RzcyAuZmEtZWxsaXBzaXMtaDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEOERBREY7XG59XG5cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5sb3ZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFRTMwNTA7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAuc2FkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MkE7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAuYW5ncnkge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RENkIwRTtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC53b3cge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VBQTg1Rjtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5oYWhhIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MjM7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAubGlrZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMEI4NkVEO1xufVxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLnJlYWN0aW9uc01vZGFsIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25zTW9kYWwgLm1haW5JTUcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25zTW9kYWwgLnJlYWN0aW9uSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgYm90dG9tOiAzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25zTW9kYWwgaDM6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgaHIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4xKTtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0c3MsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTRFNkVCO1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RzcyAucmVhY3Rpb25zLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdHNzIC5yZWFjdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdHNzIC5jb21tZW50c1NlY3Rpb24sXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3MgLmNvbW1lbnRzU2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0c3MgLnVzZXJOYW1lOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdHNzIC51c2VyTmFtZTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RzcyAuZmEtZWxsaXBzaXMtaDpob3Zlcixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RzcyAuZmEtZWxsaXBzaXMtaDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0RTRGNTA7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGksXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyA+IGxpIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaTpob3Zlcixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RPcHRpb25zIHRleHRhcmVhLCAucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLmNvbW1uZXRDb250ZW50LFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdE9wdGlvbnMgdGV4dGFyZWEsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAuY29tbW5ldENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyA6OnBsYWNlaG9sZGVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdE9wdGlvbnMgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQjhCQkJGO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9maWxlT25Ib3ZlciwgLnRpbWVPbkhvdmVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiByZ2JhKDI0OSwgMjMzLCAyMzMsIDAuMjQpIDBweCAzcHggMTVweDtcbn1cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IC5tYXQtbWVudS1pdGVtIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG46Om5nLWRlZXAgLmRhcmtNb2RlTWVudSAubWF0LW1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59XG5cbi5wb3B1cHAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHotaW5kZXg6IDExMTExMTExMTExMTExMTEwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBvcHVwcCAuaW1nU2VjdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucG9wdXBwIC5pbWdTZWN0aW9uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5wb3B1cHAgLmltZ1NlY3Rpb24gLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMjBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wdXBwIC5jb21tZW50c1NlY3Rpb24ge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIC5hdXRvU2Nyb2xsIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wb3B1cHAgLmNvbW1lbnRzU2VjdGlvbiBpbWcucHJvZmlsZVBvcHVwIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIC5mYS10aW1lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5wb3B1cHAgLnBhcmVudE9mQ29tbWVudHMge1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5wb3B1cHAuZGFya01vZGUgLmNvbW1lbnRzU2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbn1cbi5wb3B1cHAuZGFya01vZGUgLmNvbW1lbnRzU2VjdGlvbiAuY29tbW5ldENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wb3B1cHAgLmltZ1NlY3Rpb24ge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiAuc2hvd0NvbW1lbnRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wb3B1cHAgLmNvbW1lbnRzU2VjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW1nU2VjdGlvbiAuc2hvd0NvbW1lbnRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbW1lbnRzU2VjdGlvbiAuZmEtdGltZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wb3B1cHAgLmltZ1NlY3Rpb24gLnNob3dDb21tZW50cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQuNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnBvcHVwcCAuekluZGV4IHtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuOjpuZy1kZWVwIC5ncmF2YXRhci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5tb2RhbC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmNsb3NlIHtcbiAgY29sb3I6ICNiOWI5Yjk7XG59XG5cbi5wYXJlbnRPZkhvbWVQYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG59XG4ucGFyZW50T2ZIb21lUGFnZSAucHJvZmlsZU9uSG92ZXIgaDIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkxQTtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5ub01vcmVQb3N0cyB7XG4gIGNvbG9yOiAjQjhCQkJGICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAubm9Nb3JlUG9zdHMgLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNCOEJCQkYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucGFyZW50T2ZIb21lUGFnZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5hZGQtcG9zdCBwIHtcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBhcmVudE9mSG9tZVBhZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhcmVudE9mSG9tZVBhZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbjo6bmctZGVlcCAuZ3JhdmF0YXItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZhLXBhcGVyLXBsYW5lIHtcbiAgcmlnaHQ6IDE1cHg7XG59IiwiJWlucHV0dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4vLy8vLy8vLy8vLy8vIHN0YXJ0IGFkZCBwb3N0IHNlY3Rpb25cclxuLmFkZC1wb3N0IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAueXJNaW5kIHttYXJnaW4tbGVmdDogMTBweDt9XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLyBlbmQgYWRkIHBvc3Qgc2VjdGlvblxyXG4uYWRkLXBvc3QuZGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNFNEU2RUI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xyXG4gICAgICAgICY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDt9XHJcbiAgICB9XHJcbiAgICAudGV4dC1zZWNvbmRhcnl7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBob3RvSWNvbjpob3ZlciB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0MgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vLy8vLyBzdGFydCBtb2RhbCBib2R5XHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIC50b1lvdXJQb3N0XHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDBkNDtcclxuICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVpbnB1dHQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9zdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdmMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2RkU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFyZW50T2ZpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7IFxyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC5mYS10aW1lcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zZWNvbmRhcnlcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogIzE4NzdmMjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIC8vLy8vLy8vLy8gZW5kIG1vZGFsIGJvZHlcclxuICAvLy8vIHN0YXJ0IGdsb2JhbFxyXG4gIC5waG90b0ljb257Ym9yZGVyLXJhZGl1czogNXB4O31cclxuICAucGhvdG9JY29uOmhvdmVyIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIH1cclxuICBcclxuICAuaWNvbm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pY29uLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTBweDtcclxuICB9XHJcbiAgLnBvc3RMb2FkaW5nXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoODkgODcgODcgLyA1MCUpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgcC5kYXJrTW9kZSB7Y29sb3I6YmxhY2sgIWltcG9ydGFudH1cclxuICB9XHJcbiAgLy8vLyBlbmQgZ2xvYmFsICIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvcGxhY2Vob2xkZXIuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL2FkZFBvc3Quc2Nzc1wiO1xyXG4gICVvcHRpb25zIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nOjJweCAxMHB4O1xyXG4gICA+IGxpIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOjZweCAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB9XHJcbiAgICAgLnVzZXJSZWFjdCB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4gIH1cclxuLy8vLy8vLy8vLy8vLy8vIHN0YXJ0IHBvc3RzIHNlY3Rpb25cclxuJWNvbW1lbnRzSW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiVwYXJlbnRPZkNvbWVudHNzcyB7XHJcbiAgICAuY29tbWVudHMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1uZXRDb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxuICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIEBleHRlbmQgJWNvbW1lbnRzSW1nO1xyXG4gICAgfVxyXG59XHJcbiVyZWFjdGlvbnNDb3VudCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBpbWcuZmlyc3Qge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICBpbWcubGFzdCB7XHJcbiAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgIHNwYW4ge21hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmV4aXN0ICsgc3BhbiB7bWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDt9XHJcbn1cclxuLnBvc3RzcyB7ICAgICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnBvc3RPcHRpb25zIHtcclxuICAgICAgICAubnVtT2ZDb21tZW50c3tcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFjdGlvbnNDb3VudCB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVyZWFjdGlvbnNDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhpZGVQYXJlbnRPZlJlYWN0aW9ucyB7ei1pbmRleDogLTE7fVxyXG4gICAgICAgIC5zaG93UmVhY3Rpb25zOmhvdmVyIC5yZWFjdGlvbnMge21hcmdpbi10b3A6IDAgO31cclxuICAgICAgICAucGFyZW50T2ZSZWFjdGlvbnN7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNTJweDtcclxuICAgICAgICAgIC8vICBsZWZ0OiAtNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgLnJlYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICAgICAgICAgIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JheVAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY1Njc2YjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMEYyRjU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA0NXB4IDdweCAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgIEBleHRlbmQgJW9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYXJlbnRPZkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBAZXh0ZW5kICVwYXJlbnRPZkNvbWVudHNzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLndyaXRlQWNvbW1lbnQge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlY29tbWVudHNJbWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnVzZXJOYW1lIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgICAgIEBleHRlbmQgJXByb2ZpbGVPbkhvdmVyO1xyXG4gICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAub3ZlcklNRyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVvdmVySU1HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAudGltZU9uSG92ZXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDI1cHg7XHJcbiAgICAgbGVmdDogLTE4cHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiKDEzIDEzIDEzIC8gNzclKTtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgIHotaW5kZXg6IDE7XHJcbiB9XHJcblxyXG4udGltZWU6aG92ZXIgIHNtYWxsOmZpcnN0LW9mLXR5cGUge2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO31cclxuLnRpbWVlOmhvdmVyIC50aW1lT25Ib3ZlciB7IGRpc3BsYXk6IGJsb2NrIDsgfSBcclxuLmZhLWVsbGlwc2lzLWgge1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNEOERBREY7XHJcbiAgICB9XHJcbn0gXHJcbn1cclxuLy8vLy8vLy8vLy8vLy8gZW5kIHBvc3RzIHNlY3Rpb25cclxuLy8vLy8vIHN0YXJ0IHJlYWN0aW9uc01vZGFsXHJcbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIHtcclxuICAgIC5sb3ZlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VFMzA1MDtcclxuICAgIH1cclxuICAgIC5zYWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUFBODJBO1xyXG4gICAgfVxyXG4gICAgLmFuZ3J5IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RENkIwRTtcclxuICAgIH1cclxuICAgIC53b3cge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUFBODVGO1xyXG4gICAgfVxyXG4gICAgLmhhaGEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUFBODIzO1xyXG4gICAgfVxyXG4gICAgLmxpa2Uge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMEI4NkVEO1xyXG4gICAgfVxyXG4gICAgLnJlYWN0aW9uc01vZGFsIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC5tYWluSU1HIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVhY3Rpb25JbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNnB4O1xyXG4gICAgICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDM6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxyXG4gICAgfVxyXG59XHJcbi8vLy8vLyBlbmQgcmVhY3Rpb25zTW9kYWxcclxuXHJcbi8vLyBzdGFydCBkYXJrIG1vZGVcclxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUsXHJcbi5wYWRkaW5nZ3guZGFya01vZGUge1xyXG4gIGhyIHtib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNSAyMzUgMjM1IC8gMTAlKTt9XHJcbiAgLnBvc3RzcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgLnJlYWN0aW9uc3sgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDt9XHJcbiAgICAgIC5jb21tZW50c1NlY3Rpb24gIHsgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O31cclxuICAgICAgLnVzZXJOYW1lIHtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZhLWVsbGlwc2lzLWgge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogICM0RTRGNTBcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICAucHJvZmlsZU9uSG92ZXIge1xyXG4gICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXJEYXJrTW9kZTtcclxuICB9XHJcblxyXG4gLnBvc3RPcHRpb25zIHtcclxuICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xyXG4gICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGNvbG9yOiNCOEJCQkZcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHRhcmVhLC5jb21tbmV0Q29udGVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgOjpwbGFjZWhvbGRlcntjb2xvcjojQjhCQkJGfVxyXG4gfVxyXG59XHJcblxyXG4vLy8gZW5kIGRhcmsgbW9kZVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgIFxyXG4gICAgIC5wcm9maWxlT25Ib3ZlciAsIC50aW1lT25Ib3ZlciB7XHJcbiAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgICBcclxuIH1cclxuIFxyXG5cclxuIDo6bmctZGVlcCAuZGFya01vZGVNZW51XHJcbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMjQ5IDIzMyAyMzMgLyAyNCUpIDBweCAzcHggMTVweDtcclxuICAgIC5tYXQtbWVudS1pdGVtIHtcclxuICAgICAgICBjb2xvcjogI0I4QkJCRjtcclxuICAgICAgICAmOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO31cclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgLnBvc3RzTG9hZGluZ2cuZGFya01vZGUgLmxvYWRlcixcclxuICAgIC5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5sb2FkZXJcclxue1xyXG4gIEBleHRlbmQgJWRhcmttb2RlTG9hZGVyO1xyXG59XHJcbn1cclxuXHJcbi5wb3B1cHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB6LWluZGV4OiAxMTExMTExMTExMTExMTExMTExMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW1nU2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10aW1lc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbW1lbnRzU2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgLmF1dG9TY3JvbGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcucHJvZmlsZVBvcHVwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtdGltZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFyZW50T2ZDb21tZW50c1xyXG4gICAge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdy15OiAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIEBleHRlbmQgJXBhcmVudE9mQ29tZW50c3NzO1xyXG4gICAgfVxyXG4gICAgLnJlYWN0aW9uc0NvdW50IHtcclxuICAgICAgICBAZXh0ZW5kICVyZWFjdGlvbnNDb3VudDtcclxuICAgICAgfVxyXG59XHJcbi5wb3B1cHAuZGFya01vZGUge1xyXG4gICAgLmNvbW1lbnRzU2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgICAuY29tbW5ldENvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucG9wdXBwIHtcclxuICAgICAgICAuaW1nU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC8vIGltZyB7XHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC5zaG93Q29tbWVudHMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltZ1NlY3Rpb24ge1xyXG4gICAgICAgIC5zaG93Q29tbWVudHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb21tZW50c1NlY3Rpb24ge1xyXG4gICAgICAgIC5mYS10aW1lcyB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnBvcHVwcCB7XHJcbiAgICAgICAgLmltZ1NlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gaW1nIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLnNob3dDb21tZW50c1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDQuNSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50c1NlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuekluZGV4IHt6LWluZGV4OiAtMTt9XHJcbiAgICB9XHJcbn1cclxuLy8vLyByZWFjdGlvbk1vZGVcclxuOjpuZy1kZWVwIHtcclxuICAgIC5ncmF2YXRhci10aXRsZXt3aWR0aDogMTAwJTt9XHJcbiAgICAucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCB7XHJcbiAgICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOm5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2Uge2NvbG9yOiAjYjliOWI5O31cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "tzih":
/*!************************************************************!*\
  !*** ./src/app/view/home-page/home-page-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hompage/hompage.component */ "gF0r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_1__["HompageComponent"]
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-view-home-page-home-page-module.js.map