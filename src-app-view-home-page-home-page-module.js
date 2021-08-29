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
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");











const _c0 = ["updtaeSwiper"];
const _c1 = function () { return { width: "100%", height: "150px", "border-radius": "10px", margin: 0 }; };
const _c2 = function () { return { width: "100%", "border-radius": "0", height: "10px", "margin-bottom": "2px" }; };
const _c3 = function () { return { width: "100%", "border-radius": "0", height: "10px" }; };
function YouMayKnowComponent_ng_container_6_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-skeleton-loader", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ngx-skeleton-loader", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 16);
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
function YouMayKnowComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_ng_container_6_ng_container_1_ng_template_1_Template, 10, 6, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function YouMayKnowComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_ng_container_6_ng_container_1_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.swiperLoadingCount);
} }
function YouMayKnowComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_ng_template_7_ng_container_0_ng_template_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.navigatee(item_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_ng_template_7_ng_container_0_ng_template_1_Template_h2_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.navigatee(item_r8 == null ? null : item_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YouMayKnowComponent_ng_template_7_ng_container_0_ng_template_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.followOrUnFollow(item_r8 == null ? null : item_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, item_r8 == null ? null : item_r8.profilePhoto, item_r8 == null ? null : item_r8.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, item_r8 == null ? null : item_r8.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 17, item_r8 == null ? null : item_r8.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r10.followLoading);
} }
function YouMayKnowComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, YouMayKnowComponent_ng_template_7_ng_container_0_ng_template_1_Template, 15, 19, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function YouMayKnowComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, YouMayKnowComponent_ng_template_7_ng_container_0_Template, 2, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.suggestedFriends);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"],]);
class YouMayKnowComponent {
    constructor(peopleYouMayKnow, userProfileService, cd, _ngZone, router, folloOrUnfollowService, _snackBar) {
        this.peopleYouMayKnow = peopleYouMayKnow;
        this.userProfileService = userProfileService;
        this.cd = cd;
        this._ngZone = _ngZone;
        this.router = router;
        this.folloOrUnfollowService = folloOrUnfollowService;
        this._snackBar = _snackBar;
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
    }
    ngOnInit() {
        this.swiperLoadingCount.length = 5;
        this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(res => {
            this.suggestedFriends = res;
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
            this.subscriptions.push(this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(res => {
                this.suggestedFriends = res;
                this.peopleYouMayKnowLoading = false;
                this.followLoading = false;
                this.getMyFollowingPosts();
                this._snackBar.open("Followed up successfully", "successfully", {
                    horizontalPosition: 'left',
                    verticalPosition: 'bottom',
                    duration: 3000
                });
            }, err => {
            }));
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
YouMayKnowComponent.ɵfac = function YouMayKnowComponent_Factory(t) { return new (t || YouMayKnowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_2__["PeopleYouMayKnowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_5__["FollowOrUnfollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
YouMayKnowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YouMayKnowComponent, selectors: [["app-you-may-know"]], viewQuery: function YouMayKnowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.updtaeSwiper = _t.first);
    } }, decls: 12, vars: 5, consts: [[1, "mb-3"], [1, "bg-white", "parentOfSugested", "rounded-lg", "p-3"], [1, "mb-2"], [3, "config", "reachEnd"], ["updtaeSwiper", ""], [4, "ngIf", "ngIfElse"], ["swiperContent", ""], [1, "text-center", "mt-3"], ["routerLink", "/peopleYouMayKnow", 1, "text-primary", "font-weight-bold", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], [1, "first-section-wrapper"], [1, "item", "postsLoadingg"], ["count", "1", "appearance", "circle", 3, "theme"], [1, "gravatar-title"], [3, "theme"], [1, "peopleYouMayknow", "my-2"], ["alt", "", 1, "mainimg", 3, "src", "click"], [1, "px-2", "py-3"], [1, "overflow-hidden", "mb-2"], [1, "mainName", 3, "click"], [1, "follow", 3, "disabled", "click"], [1, "fas", "fa-user-plus"], [1, "mx-1"]], template: function YouMayKnowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "People you may know");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "swiper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reachEnd", function YouMayKnowComponent_Template_swiper_reachEnd_4_listener() { return ctx.fetchMoreSuggestedFriends(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, YouMayKnowComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, YouMayKnowComponent_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx.userProfileService.userProfile == null ? null : ctx.userProfileService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.swiperConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.peopleYouMayKnowLoading)("ngIfElse", _r2);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperSlideDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderComponent"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_10__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: [".swiper-button-prev,   .swiper-button-next {\n  width: auto !important;\n  height: auto !important;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background: white;\n  color: black;\n  padding: 15px;\n  border-radius: 50%;\n}\n  .swiper-button-prev:hover,   .swiper-button-next:hover {\n  background-color: #E4E6E9;\n}\n  .swiper-button-prev:after,   .swiper-button-next:after {\n  font-size: 20px;\n  font-weight: bold;\n}\n  .parentOfSugested.darkMode .swiper-button-prev,   .parentOfSugested.darkMode .swiper-button-next {\n  background: #242526;\n  color: white;\n}\n  .parentOfSugested.darkMode .swiper-button-prev:hover,   .parentOfSugested.darkMode .swiper-button-next:hover {\n  background-color: #4E4F50;\n}\n.peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 15px;\n  overflow: hidden;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .mainimg[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  cursor: pointer;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background: #E7F3FF;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #ccdef1;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.peopleYouMayknow[_ngcontent-%COMP%]   .mainName[_ngcontent-%COMP%] {\n  width: 1000px;\n  cursor: pointer;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n  background-color: #242526 !important;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background-color: #263951;\n}\n.parentOfSugested.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #3C4D63;\n}\n  .gravatar-title {\n  width: 100%;\n}\n  .swiper-button-prev.swiper-button-disabled,   .swiper-button-next.swiper-button-disabled {\n  pointer-events: visible;\n}\n  .parentOfSugested.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHlvdU1heUtub3cuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxceW91LW1heS1rbm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7O0VBQ0kseUJBQUE7QUNJUjtBREZJOztFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0tSO0FERkE7O0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDTUo7QURMSTs7RUFDSSx5QkFBQTtBQ1FSO0FESkE7RUFDSSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0QsZ0JBQUE7QUNPSDtBRE5JO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUVI7QUROSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUVI7QURQUTtFQUNJLG1CQUFBO0FDU1o7QURQUTtFQUFNLGdCQUFBO0FDVWQ7QURQSTtFQUFVLGFBQUE7RUFBYSxlQUFBO0FDVzNCO0FEUEE7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7QUNVSjtBRFRJO0VBQVUsb0NBQUE7QUNZZDtBRFhJO0VBQ0ksa0RBQUE7RUFDQSxvQ0FBQTtBQ2FSO0FEWlE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNjWjtBRGJZO0VBQ0ksbUJBQUE7QUNlaEI7QURUSztFQUFnQixXQUFBO0FDYXJCO0FEUk07O0VBRUUsdUJBQUE7QUNVUjtBRENRO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ0NaIiwiZmlsZSI6InlvdS1tYXkta25vdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVzd2lwZVByZXZBbmROZXh0IHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbiVzd2lwZVByZXZBbmROZXh0RGFya21vZGUgIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNDI1MjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xyXG4gICAgfVxyXG59XHJcbi8vLy8vLy8vLy8vICBzdGFydCBwZW9wbGUgeW91IG1heSBrbm93XHJcbi5wZW9wbGVZb3VNYXlrbm93IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLm1haW5pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmZvbGxvdyB7XHJcbiAgICAgICAgY29sb3I6ICMyMTZmZGI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0U3RjNGRjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NkZWYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtmb250LXNpemU6IGxhcmdlO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW5OYW1le3dpZHRoOjEwMDBweDtjdXJzb3I6IHBvaW50ZXI7fVxyXG59XHJcbi8vLy8vLy8vLy8gZW5kIHBlb3BsZSB5b3UgbWF5IGtub3dcclxuLy8gc3RhcnQgZGFyayBtb2RlXHJcbi5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIHtcclxuICAgIGNvbG9yOiNFNEU2RUI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAuYmctd2hpdGV7YmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O31cclxuICAgIC5wZW9wbGVZb3VNYXlrbm93IHtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjQ5IDIzMyAyMzMgLyAyNCUpIDBweCAzcHggMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIC5mb2xsb3cge1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxNmZkYjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2Mzk1MTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM0M0RDYzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgICAuZ3JhdmF0YXItdGl0bGV7d2lkdGg6IDEwMCU7fVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldixcclxuICAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgQGV4dGVuZCAlc3dpcGVQcmV2QW5kTmV4dDtcclxuICAgICAgfVxyXG4gICAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbiAgICAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLnBhcmVudE9mU3VnZXN0ZWQuZGFya01vZGUgIHtcclxuICAgICAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxyXG4gICAgICAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxyXG4gICAgICAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxyXG4gICAgICAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgICBAZXh0ZW5kICVzd2lwZVByZXZBbmROZXh0RGFya21vZGU7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSB7XHJcbiAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMyMzIzMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCI6Om5nLWRlZXAgLnN3aXBlci1idXR0b24tcHJldixcbjo6bmctZGVlcCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbjo6bmctZGVlcCAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyLFxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xufVxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG46Om5nLWRlZXAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxuOjpuZy1kZWVwIC5wYXJlbnRPZlN1Z2VzdGVkLmRhcmtNb2RlIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICBiYWNrZ3JvdW5kOiAjMjQyNTI2O1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLnBhcmVudE9mU3VnZXN0ZWQuZGFya01vZGUgLnN3aXBlci1idXR0b24tcHJldjpob3Zlcixcbjo6bmctZGVlcCAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAuc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cblxuLnBlb3BsZVlvdU1heWtub3cge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBlb3BsZVlvdU1heWtub3cgLm1haW5pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBlb3BsZVlvdU1heWtub3cgLmZvbGxvdyB7XG4gIGNvbG9yOiAjMjE2ZmRiO1xuICBiYWNrZ3JvdW5kOiAjRTdGM0ZGO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBlb3BsZVlvdU1heWtub3cgLmZvbGxvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2RlZjE7XG59XG4ucGVvcGxlWW91TWF5a25vdyAuZm9sbG93IHNwYW4ge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLnBlb3BsZVlvdU1heWtub3cgLm1haW5OYW1lIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSB7XG4gIGNvbG9yOiAjRTRFNkVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAucGVvcGxlWW91TWF5a25vdyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAucGVvcGxlWW91TWF5a25vdyAuZm9sbG93IHtcbiAgY29sb3I6ICMyMTZmZGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjM5NTE7XG59XG4ucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAucGVvcGxlWW91TWF5a25vdyAuZm9sbG93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNDNEQ2Mztcbn1cblxuOjpuZy1kZWVwIC5ncmF2YXRhci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbjo6bmctZGVlcCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcbn1cbjo6bmctZGVlcCAucGFyZW50T2ZTdWdlc3RlZC5kYXJrTW9kZSAubG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyO1xufSJdfQ== */"] });


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










function AddPostComponent_ng_template_14_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " posting");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("darkMode", ctx_r2.userProfilesService.userProfile == null ? null : ctx_r2.userProfilesService.userProfile.darkMode);
} }
function AddPostComponent_ng_template_14_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_ng_template_14_div_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.deletePostImg(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AddPostComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddPostComponent_ng_template_14_div_0_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_ng_template_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddPostComponent_ng_template_14_Template_form_ngSubmit_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.makeApost(ctx_r9.postForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddPostComponent_ng_template_14_div_19_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Add to your post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddPostComponent_ng_template_14_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.selectPostImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.postLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("popupDarkMode", ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 10, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.profilePhoto, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](13, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 17, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](15, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("dir", "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.postForm.invalid);
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
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 16, vars: 13, consts: [[1, "add-post", "bg-white", "p-3", "mb-3", "rounded-lg"], [1, "d-flex", "align-items-center"], ["routerLink", "/myProfile", "alt", "", 1, "smllProfileImg", "mr-3", 3, "src"], [1, "m-0", "w-100", "px-3", "py-2", 3, "click"], [1, "my-2"], [1, "d-flex", "justify-content-between", "align-items-center", "text-secondary", "font-weight-bold"], [1, "d-flex", "align-items-center", "photoIcon", "p-2", 2, "cursor", "pointer", 3, "click"], [1, "iconn", "mr-2"], ["template", ""], ["class", "postLoading d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "modal-header"], [1, "modal-title", "pull-left", "text-center", "w-100"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "d-flex", "align-items-center", "mb-2"], ["alt", "", 1, "smllProfileImg", "mr-3", 3, "src"], [3, "formGroup", "ngSubmit"], ["formControlName", "content", "placeholder", "What's on your mind?", 1, "p-3", "rounded-lg"], ["class", "parentOfimg position-relative mb-2", 4, "ngIf"], [1, "toYourPost", "d-flex", "justify-content-between", "align-items-center", "text-secondary", "font-weight-bold"], [1, "position-relative", "d-flex", "align-items-center", "photoIcon", "p-2"], ["accept", "image/*", "type", "file", 3, "change"], ["input", ""], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", "post", 3, "disabled"], [1, "postLoading", "d-flex", "justify-content-center", "align-items-center"], [1, "text-center"], [1, "lds-ellipsis"], [1, "font-weight-bold", "text-white"], [1, "parentOfimg", "position-relative", "mb-2"], [1, "fas", "fa-times", 3, "click"], ["alt", "", 1, "w-100", 3, "src"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Add to your post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPostComponent_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddPostComponent_ng_template_14_Template, 30, 25, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.profilePhoto, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" What's on your mind, ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.firstName), 0, 12), "? ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-post[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  border-radius: 25px;\n  cursor: pointer;\n  color: #65676b;\n  font-size: large;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #E4E6EB !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%] {\n  border: 1px solid #ced0d4;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border: none;\n  margin: 15px 0;\n  min-height: 50px;\n  width: 100%;\n  font-size: 20px;\n  background-color: transparent;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.modal-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 30px;\n  font-weight: normal;\n}\n\n.photoIcon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #F0F2F5;\n}\n\n.iconn[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  background-image: url('icon.png');\n  background-position: 0 -150px;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGFkZFBvc3Quc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FERFE7RUFDSSx5QkFBQTtBQ0daOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURBSTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQ0VSOztBRERRO0VBQVEseUJBQUE7QUNJaEI7O0FERkk7RUFDSSx5QkFBQTtBQ0lSOztBRERRO0VBQ0ksb0NBQUE7QUNHWjs7QURHSTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREVRO0VBRUUsMEJBQUE7QUNEVjs7QURJSTtFQUNJLDBCQUFBO0VBQ0Esb0NBQUE7QUNGUjs7QURHUTtFQUNJLG9DQUFBO0FDRFo7O0FETUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNKUjs7QURPSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDTFI7O0FETVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0paOztBRE9JO0VBRUksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ05SOztBRE9RO0VBQ0kseUJBQUE7QUNMWjs7QURTTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1BSOztBRFlFO0VBQVcsa0JBQUE7QUNSYjs7QURTRTtFQUlJLGVBQUE7RUFDQSxnQkFBQTtBQ1ROOztBREtNO0VBQ0kseUJBQUE7QUNIVjs7QURTRTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQ05OOztBRFFFO0VBRUksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDTk47O0FET007RUFBWSx1QkFBQTtBQ0psQiIsImZpbGUiOiJhZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVpbnB1dHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuLy8vLy8vLy8vLy8vLyBzdGFydCBhZGQgcG9zdCBzZWN0aW9uXHJcbi5hZGQtcG9zdCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzY1Njc2YjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8gZW5kIGFkZCBwb3N0IHNlY3Rpb25cclxuLmFkZC1wb3N0LmRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjRTRFNkVCO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcclxuICAgICAgICAmOmhvdmVye2JhY2tncm91bmQtY29sb3I6ICM0RTRGNTA7fVxyXG4gICAgfVxyXG4gICAgLnRleHQtc2Vjb25kYXJ5e1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5waG90b0ljb246aG92ZXIge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vLy8vLy8vLy8gc3RhcnQgbW9kYWwgYm9keVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICAudG9Zb3VyUG9zdFxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQwZDQ7XHJcbiAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgQGV4dGVuZCAlaW5wdXR0O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc3ZjIgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2NkZFNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhcmVudE9maW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAuZmEtdGltZXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tc2Vjb25kYXJ5XHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICMxODc3ZjI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIH1cclxuICAvLy8vLy8vLy8vIGVuZCBtb2RhbCBib2R5XHJcbiAgLy8vLyBzdGFydCBnbG9iYWxcclxuICAucGhvdG9JY29ue2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbiAgLnBob3RvSWNvbjpob3ZlciB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcclxuICAgICAgfVxyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IC41cztcclxuICB9XHJcbiAgXHJcbiAgLmljb25uIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaWNvbi5wbmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTUwcHg7XHJcbiAgfVxyXG4gIC5wb3N0TG9hZGluZ1xyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDg5IDg3IDg3IC8gNTAlKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHAuZGFya01vZGUge2NvbG9yOmJsYWNrICFpbXBvcnRhbnR9XHJcbiAgfVxyXG4gIC8vLy8gZW5kIGdsb2JhbCAiLCIubW9kYWwtYm9keSAudG9Zb3VyUG9zdCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wb3N0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5hZGQtcG9zdCBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY1Njc2YjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hZGQtcG9zdCBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cblxuLmFkZC1wb3N0LmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIHAge1xuICBjb2xvcjogI0U0RTZFQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIC50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjRTRFNkVCICFpbXBvcnRhbnQ7XG59XG4uYWRkLXBvc3QuZGFya01vZGUgLnBob3RvSWNvbjpob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0MgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkgLnRvWW91clBvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkMGQ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWJvZHkgLnRvWW91clBvc3QgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5wb3N0IHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc3ZjIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5wb3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NkZFNSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1vZGFsLWJvZHkgLnBhcmVudE9maW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubW9kYWwtYm9keSAucGFyZW50T2ZpbWcgLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtYm9keSAuYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzE4NzdmMjtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkU5O1xufVxuLm1vZGFsLWJvZHkgOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBob3RvSWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBob3RvSWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5waG90b0ljb246aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xufVxuXG4uaWNvbm4ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1MHB4O1xufVxuXG4ucG9zdExvYWRpbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg5LCA4NywgODcsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuLnBvc3RMb2FkaW5nIHAuZGFya01vZGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn0iXX0= */"] });


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
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-post/add-post.component */ "Tfk/");
/* harmony import */ var _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../you-may-know/you-may-know.component */ "E161");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");
/* harmony import */ var _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/lang.pipe */ "BRi9");
/* harmony import */ var _shared_text_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/text.pipe */ "N7fZ");
/* harmony import */ var _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/most-reaction.pipe */ "k08z");
/* harmony import */ var _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/second-reaction.pipe */ "2wBp");
/* harmony import */ var _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/reaction-type.pipe */ "UnZl");



















const _c0 = ["editCommentInpu"];
const _c1 = ["addCommentInput"];
const _c2 = function () { return { "width": "80px", "height": "80px" }; };
const _c3 = function () { return { width: "90%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c4 = function () { return { width: "70%", "border-radius": "0", height: "15px" }; };
const _c5 = function () { return { width: "80%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c6 = function () { return { width: "60%", "border-radius": "0", height: "15px", "margin-bottom": "10px" }; };
const _c7 = function () { return { width: "80px", height: "80px" }; };
function HompageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-skeleton-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c6));
} }
const _c8 = function (a1) { return ["/visit", a1]; };
function HompageComponent_ng_template_5_ng_container_0_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c8, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].profilePhoto, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c8, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 19, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].lastName), 0, 12), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Born on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 21, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].birthDate), "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.seeMoreIndex = ctx_r26.seeMoreIndex == i_r10 ? -1 : i_r10; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.seeMoreIndex == i_r10 ? "See Less" : "... See more", "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const post_r9 = ctx_r32.$implicit; const i_r10 = ctx_r32.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r30.postComments = []; ctx_r30.getPostComments(post_r9._id, i_r10); return ctx_r30.popUP = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r9 == null ? null : post_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r9 == null ? null : post_r9.numOfReactions, "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_p_39_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_p_39_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const post_r9 = ctx_r36.$implicit; const i_r10 = ctx_r36.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r35.getPostComments(post_r9._id, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", post_r9 == null ? null : post_r9.numOfComments, " ", (post_r9 == null ? null : post_r9.numOfComments) == 1 ? "Comment" : "Comments", " ");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemm_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + itemm_r40.reaction + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](itemm_r40.reaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, itemm_r40.reaction), "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_ng_container_0_div_1_Template, 5, 6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemm_r40 = ctx.$implicit;
    const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r9 == null ? null : post_r9.myReaction[0] == null ? null : post_r9.myReaction[0].reaction) == itemm_r40.reaction);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_ng_container_0_Template, 2, 1, "ng-container", 63);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.reactions);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_li_50_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_li_50_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const item_r44 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const i_r10 = ctx_r46.index; const post_r9 = ctx_r46.$implicit; const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r45.makeReaction(item_r44 == null ? null : item_r44.reaction, i_r10, _r21, post_r9 == null ? null : post_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r44 == null ? null : item_r44.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_div_1_Template_textarea_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const post_r9 = ctx_r55.$implicit; const i_r10 = ctx_r55.index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r53.makeAComment($event, _r52, post_r9 == null ? null : post_r9._id, i_r10); })("input", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_div_1_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r56.textAreaHeightAuto(_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_div_1_Template_i_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const post_r9 = ctx_r58.$implicit; const i_r10 = ctx_r58.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r57.makeAComment($event, _r52, post_r9 == null ? null : post_r9._id, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r48.userProfilesService.userProfile == null ? null : ctx_r48.userProfilesService.userProfile.profilePhoto, ctx_r48.userProfilesService.userProfile == null ? null : ctx_r48.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c9 = function () { return { "width": "32px", "height": "32px", "margin": "0" }; };
const _c10 = function () { return { width: "200px", "border-radius": "0", height: "5px", "margin-bottom": "5px" }; };
const _c11 = function () { return { width: "170px", "border-radius": "0", height: "5px" }; };
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r59.userProfilesService.userProfile == null ? null : ctx_r59.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c11));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_container_4_li_1_Template, 10, 8, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r49.swiperLoadingCount);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Press Esc To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r72.textAreaHeightAuto(_r70); })("focus", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_focus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r74.enterESCtoCancel = true; })("blur", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r75.enterESCtoCancel = false; })("keydown.esc", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_esc_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r76.editCommentIndex = -1; })("keydown.enter", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_textarea_keydown_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const comment_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r77.updateComment(comment_r65 == null ? null : comment_r65._id, _r70.value, comment_r65 == null ? null : comment_r65.post, i_r10, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const comment_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r80.updateComment(comment_r65 == null ? null : comment_r65._id, _r70.value, comment_r65 == null ? null : comment_r65.post, i_r10, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_span_9_Template, 2, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](8); return ctx_r83.editCommentIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const comment_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, comment_r65 == null ? null : comment_r65.comment, _r70));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.enterESCtoCancel);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 97);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r86);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_i_9_Template, 1, 1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", null, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const commentIndex_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7); ctx_r88.editCommentIndex = commentIndex_r66; return ctx_r88.resizeTextArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const comment_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r91.deleteComment(comment_r65 == null ? null : comment_r65._id, comment_r65 == null ? null : comment_r65.post, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", null, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const comment_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c8, comment_r65 == null ? null : comment_r65.user == null ? null : comment_r65.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 13, comment_r65.user == null ? null : comment_r65.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, comment_r65.user == null ? null : comment_r65.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (comment_r65 == null ? null : comment_r65.user == null ? null : comment_r65.user._id) == (ctx_r69.userProfilesService.userProfile == null ? null : ctx_r69.userProfilesService.userProfile._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkModeMenu", ctx_r69.userProfilesService.userProfile == null ? null : ctx_r69.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 21, comment_r65 == null ? null : comment_r65.comment, _r87), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 24, comment_r65 == null ? null : comment_r65.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 27, comment_r65 == null ? null : comment_r65.createdAt, "medium"));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_container_3_Template, 13, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_ng_template_4_Template, 29, 32, "ng-template", null, 82, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r65 = ctx.$implicit;
    const commentIndex_r66 = ctx.index;
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c8, comment_r65 == null ? null : comment_r65.user == null ? null : comment_r65.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, comment_r65 == null ? null : comment_r65.user == null ? null : comment_r65.user.profilePhoto, comment_r65.user == null ? null : comment_r65.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.editCommentIndex == commentIndex_r66)("ngIfElse", _r68);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_li_1_Template, 6, 9, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r61.postComments);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Comments Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_ng_template_1_Template, 2, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r51.postComments == null ? null : ctx_r51.postComments.length)("ngIfElse", _r62);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_div_1_Template, 7, 4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_container_4_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_ng_template_5_Template, 3, 2, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r23.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.commentsLoading)("ngIfElse", _r50);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 67);
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r95.popupPost == null ? null : ctx_r95.popupPost.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r104.popupReactions == null ? null : ctx_r104.popupReactions.numOfReactions, "");
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r105.postComments == null ? null : ctx_r105.postComments.length, " ", (ctx_r105.postComments == null ? null : ctx_r105.postComments.length) == 1 ? "Comment" : "Comments", " ");
} }
const _c12 = function (a0, a1, a2, a3, a4, a5) { return [a0, a1, a2, a3, a4, a5]; };
const _c13 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_span_7_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_p_8_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](19, _c12, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfLoves, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfSads, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfWows, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfHahas, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfAngrys, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfLikes)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](6, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](26, _c13, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfLoves, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfSads, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfWows, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfHahas, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfAngrys, ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfLikes, _r103)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r99.popupReactions == null ? null : ctx_r99.popupReactions.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r99.postComments == null ? null : ctx_r99.postComments.length);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_container_33_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r106.userProfilesService.userProfile == null ? null : ctx_r106.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c11));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_container_33_li_1_Template, 10, 8, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r100.swiperLoadingCount);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", null, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r112 = ctx.$implicit;
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c8, comment_r112 == null ? null : comment_r112.user == null ? null : comment_r112.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 8, comment_r112 == null ? null : comment_r112.user == null ? null : comment_r112.user.profilePhoto, comment_r112.user == null ? null : comment_r112.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c8, comment_r112 == null ? null : comment_r112.user == null ? null : comment_r112.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, comment_r112.user == null ? null : comment_r112.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 21, comment_r112.user == null ? null : comment_r112.user.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 23, comment_r112 == null ? null : comment_r112.comment, _r114));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 26, comment_r112 == null ? null : comment_r112.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 29, comment_r112 == null ? null : comment_r112.createdAt, "medium"));
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_container_0_li_1_Template, 23, 36, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r108.postComments);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Comments Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_ng_template_1_Template, 2, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r102.postComments == null ? null : ctx_r102.postComments.length)("ngIfElse", _r109);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_img_2_Template, 1, 1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_3_Template, 5, 0, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r115.showCommentsInMobileScreen(_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r117.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 104, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_div_56_Template_i_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r118.hideCommentsInMobileScreen(_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_div_30_Template, 9, 34, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_container_33_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_ng_template_34_Template, 3, 2, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.popupPost == null ? null : ctx_r24.popupPost.image)("ngIfElse", _r96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 10, ctx_r24.popupPost == null ? null : ctx_r24.popupPost.author == null ? null : ctx_r24.popupPost.author.profilePhoto, ctx_r24.popupPost == null ? null : ctx_r24.popupPost.author == null ? null : ctx_r24.popupPost.author.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](18, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 17, ctx_r24.popupPost == null ? null : ctx_r24.popupPost.author == null ? null : ctx_r24.popupPost.author.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](20, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 23, ctx_r24.popupPost == null ? null : ctx_r24.popupPost.author == null ? null : ctx_r24.popupPost.author.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 25, ctx_r24.popupPost == null ? null : ctx_r24.popupPost.updatedAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.popupPost == null ? null : ctx_r24.popupPost.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r24.commentsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.commentsLoading)("ngIfElse", _r101);
} }
function HompageComponent_ng_template_5_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r119.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const i_r10 = ctx.index; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r121.profileOnHover = i_r10; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseover_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const i_r10 = ctx.index; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r122.profileOnHover = i_r10; })("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_mouseleave_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r123.profileOnHover = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HompageComponent_ng_template_5_ng_container_0_div_1_div_14_Template, 17, 27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HompageComponent_ng_template_5_ng_container_0_div_1_span_28_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HompageComponent_ng_template_5_ng_container_0_div_1_img_29_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const post_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); ctx_r124.filterReactions = ""; ctx_r124.reacionsModaClassIndex = -1; return ctx_r124.openReactionModal(post_r9._id, _r3, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "mostReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "secondReaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, HompageComponent_ng_template_5_ng_container_0_div_1_span_38_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, HompageComponent_ng_template_5_ng_container_0_div_1_p_39_Template, 2, 2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_mouseover_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r125.showParentOfReactionsOnHover(_r21); })("mouseleave", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_mouseleave_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r126.hideParentOfReactionsOnHover(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HompageComponent_ng_template_5_ng_container_0_div_1_div_44_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HompageComponent_ng_template_5_ng_container_0_div_1_ng_template_45_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HompageComponent_ng_template_5_ng_container_0_div_1_li_50_Template, 2, 1, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_5_ng_container_0_div_1_Template_li_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const post_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r127.getPostComments(post_r9._id, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, HompageComponent_ng_template_5_ng_container_0_div_1_ng_container_55_Template, 7, 3, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, HompageComponent_ng_template_5_ng_container_0_div_1_div_56_Template, 36, 28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](63, _c8, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 20, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].profilePhoto, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](65, _c8, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0]._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 27, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 33, post_r9 == null ? null : post_r9.author[0] == null ? null : post_r9.author[0].lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.profileOnHover == i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 35, post_r9 == null ? null : post_r9.updatedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 38, post_r9 == null ? null : post_r9.updatedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](27, 44, post_r9 == null ? null : post_r9.content, i_r10, ctx_r8.seeMoreIndex), _r12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r9 == null ? null : post_r9.content == null ? null : post_r9.content.length) > 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r9 == null ? null : post_r9.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](34, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](67, _c12, post_r9.love, post_r9.sad, post_r9.wow, post_r9.haha, post_r9.angry, post_r9.like)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](37, 55, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](74, _c13, post_r9.love, post_r9.sad, post_r9.wow, post_r9.haha, post_r9.angry, post_r9.like, _r15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r9 == null ? null : post_r9.numOfReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r9 == null ? null : post_r9.numOfComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(post_r9 == null ? null : post_r9.myReaction == null ? null : post_r9.myReaction.length))("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.reactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.postCommentsIndex == i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.popUP);
} }
function HompageComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_container_0_div_1_Template, 57, 82, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.userProfileService.myFollowingPosts);
} }
function HompageComponent_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No More Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add more friends to see more posts in your News Feed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Find Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HompageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HompageComponent_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_5_ng_template_1_Template, 7, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userProfileService.myFollowingPosts == null ? null : ctx_r2.userProfileService.myFollowingPosts.length)("ngIfElse", _r6);
} }
function HompageComponent_ng_template_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r131.filterReactions = ""; return ctx_r131.reacionsModaClassIndex = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("like", ctx_r128.filterReactions == "");
} }
function HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const item_r133 = ctx_r138.$implicit; const i_r134 = ctx_r138.index; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r136.filterReactions = item_r133 == null ? null : item_r133.reactionImg; return ctx_r136.reacionsModaClassIndex = i_r134; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r134 = ctx_r139.index;
    const item_r133 = ctx_r139.$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r135.reacionsModaClassIndex == i_r134 ? item_r133 == null ? null : item_r133.reactionImg : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + (item_r133 == null ? null : item_r133.reactionImg) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r133 == null ? null : item_r133.length);
} }
function HompageComponent_ng_template_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HompageComponent_ng_template_7_ng_container_4_ng_template_1_Template, 4, 3, "ng-template", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function HompageComponent_ng_template_7_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_li_10_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r141.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_li_10_Template_h3_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r143.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c8, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user.profilePhoto, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user.gender), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + (item_r140 == null ? null : item_r140.reaction) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c8, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 19, item_r140 == null ? null : item_r140.user == null ? null : item_r140.user.lastName), 0, 12), " ");
} }
function HompageComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "swiper", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HompageComponent_ng_template_7_ng_template_3_Template, 2, 2, "ng-template", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HompageComponent_ng_template_7_ng_container_4_Template, 2, 0, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HompageComponent_ng_template_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r144.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HompageComponent_ng_template_7_li_10_Template, 12, 25, "li", 128);
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
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"],]);
class HompageComponent {
    constructor(userProfileService, cd, commentService, userProfilesService, modalService, title, rendrer, router) {
        this.userProfileService = userProfileService;
        this.cd = cd;
        this.commentService = commentService;
        this.userProfilesService = userProfilesService;
        this.modalService = modalService;
        this.title = title;
        this.rendrer = rendrer;
        this.router = router;
        this.profileOnHover = -1;
        this.seeMoreIndex = -1;
        this.swiperLoadingCount = [];
        this.postComments = [];
        this.postCommentsIndex = -1;
        this.commentsLoading = true;
        this.subscriptions = [];
        this.editCommentIndex = -1;
        this.enterESCtoCancel = true;
        this.popUP = false;
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
            this.userProfileService.myFollowingPosts = res;
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
    getPostComments(id, i) {
        this.commentsLoading = true;
        this.postComments = [];
        this.postCommentsIndex = i;
        this.subscriptions.push(this.userProfilesService.getPostComment(id).subscribe((res) => {
            this.commentsLoading = false;
            if (!this.popUP) {
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
        this.postComments = [];
        this.popupPost = [];
        this.postReactions = [];
        this.postCommentsIndex = -1;
        this.popUP = false;
    }
    onKeydownHandler(event) {
        if (this.popUP) {
            this.closePopup();
        }
    }
    makeReaction(reactionName, i, parentOfReactions, postId) {
        var _a, _b;
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
HompageComponent.ɵfac = function HompageComponent_Factory(t) { return new (t || HompageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_3__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HompageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HompageComponent, selectors: [["app-hompage"]], viewQuery: function HompageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editCommentInpu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addCommentInput = _t.first);
    } }, hostBindings: function HompageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function HompageComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 4, consts: [[1, "parentOfHomePage", "py-5"], [1, "parentOfHomePageContainer", "mx-auto"], [4, "ngIf", "ngIfElse"], ["content", ""], ["reaction", ""], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4"], [1, "first-section-wrapper", "d-flex", "align-items-center", "mb-3"], [1, "gravatar"], ["appearance", "circle", 3, "theme"], [1, "gravatar-title", "mx-3"], [3, "theme"], [1, "second-section-wrapper"], [1, "wrapper"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg", "p-4", "my-3"], ["noPosts", ""], ["class", " postss bg-white py-1 rounded-lg mb-3", 4, "ngFor", "ngForOf"], [1, "postss", "bg-white", "py-1", "rounded-lg", "mb-3"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", 3, "mouseleave"], [3, "routerLink", "mouseover"], ["alt", "", 1, "smllProfileImg", "mr-3", 3, "src"], [3, "mouseover", "mouseleave"], [1, "userName", 3, "routerLink"], ["class", " profileOnHover bg-white rounded-lg p-3", 4, "ngIf"], [1, "position-relative"], [1, "timee", "d-inline-block"], [1, "text-secondary"], [1, "timeOnHover"], [1, "px-3", "text-break"], ["elementt", ""], ["class", "font-weight-bold text-secondary", "style", "cursor: pointer;direction: inherit;", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "alt", "", "class", "w-100 mt-3", 3, "src", "click", 4, "ngIf"], [1, "postOptions", "px-3"], [1, "my-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount", 2, "cursor", "pointer", 3, "click"], ["alt", "", 1, "first", 3, "src"], ["alt", "", 1, "last", 3, "src"], ["secondIMG", ""], [4, "ngIf"], ["class", " numOfComments", 3, "click", 4, "ngIf"], [1, "options", "list-unstyled", "d-flex", "justify-content-center", "mb-3"], [1, "showReactions", 3, "mouseover", "mouseleave"], [1, "userReact"], ["reactionFound", ""], [1, "hideParentOfReactions", "parentOfReactions"], ["parentOfReactions", ""], [1, "reactions", "bg-white", "p-1", "d-flex", "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "far", "fa-comment-alt"], [1, "mx-2"], ["class", "popupp", 4, "ngIf"], [1, "profileOnHover", "bg-white", "rounded-lg", "p-3"], [1, "d-flex", "align-items-center"], [1, "overIMG", 3, "routerLink"], ["alt", "", 1, "profile", 3, "src"], [1, "mx-3"], [1, "mb-2", 3, "routerLink"], [1, "far", "fa-calendar-alt", "mr-2"], [1, "font-weight-bold", "text-secondary", 2, "cursor", "pointer", "direction", "inherit", 3, "click"], ["alt", "", 1, "w-100", "mt-3", 2, "cursor", "pointer", 3, "src", "click"], [1, "numOfComments", 3, "click"], [1, "far", "fa-thumbs-up"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "src"], ["alt", "", 3, "src"], ["class", "d-flex writeAcomment", 4, "ngIf"], [1, "parentOfComments", "mt-2"], [1, "comments", "list-unstyled", "my-2"], ["commentsConetent", ""], [1, "d-flex", "writeAcomment"], [1, "position-relative", "w-100", 2, "padding-right", "25px"], ["rows", "1", "type", "text", "placeholder", "Write a comment...", 1, "ml-2", 3, "keydown.enter", "input"], ["addCommentInput", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "30px", 3, "click"], [1, "fb-item", "bg-white", "postsLoadingg", "rounded-lg"], ["noCommentsYet", ""], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["alt", "", 2, "cursor", "pointer", 3, "routerLink", "src"], ["commentContent", ""], [1, "w-100"], [1, "position-relative", 2, "padding-right", "15px"], ["placeholder", "Write a comment...", 1, "ml-2", 2, "margin-right", "0", "height", "32px !important", 3, "input", "focus", "blur", "keydown.esc", "keydown.enter"], ["editCommentInpu", ""], [1, "fas", "fa-paper-plane", "text-primary", "d-md-none", 2, "right", "20px", 3, "click"], ["class", "d-none d-md-inline", 4, "ngIf"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "d-none", "d-md-inline"], [1, "commnetContent"], [1, "font-weight-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", " fas fa-ellipsis-h mx-2", "style", "cursor: pointer;", 3, "matMenuTriggerFor", 4, "ngIf"], ["EditComment", "matMenu"], ["mat-menu-item", "", 3, "click"], ["commentP", ""], [1, "fas", "fa-ellipsis-h", "mx-2", 2, "cursor", "pointer", 3, "matMenuTriggerFor"], [1, "popupp"], [1, "imgSection"], ["alt", "", 3, "src", 4, "ngIf", "ngIfElse"], ["popupLoading", ""], [1, "showComments", 3, "click"], [1, "fas", "fa-times", 3, "click"], [1, "zIndex", "commentsSection", "p-3"], ["commentsSection", ""], [1, "d-flex", "align-items-center", "pt-3"], ["alt", "", 1, "profilePopup", 3, "src"], [1, "m-0"], [1, "autoScroll", "parentOfComments"], [1, "py-3", "mx-2"], [1, "postOptions"], ["class", "m-2 d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "lds-ring"], [1, "m-2", "d-flex", "justify-content-between", "align-items-center"], [1, "position-relative", "reactionsCount"], [1, "text-center", "bg-white", "p-3", "my-3", "rounded-lg", "noMorePosts"], [1, "font-weight-bold", "text-secondary"], [1, "my-2"], ["routerLink", "/peopleYouMayKnow", 1, "btn", "btn-primary"], [1, "parentOfReactionsModal"], [1, "modal-header"], [3, "config"], ["swiperSlide", ""], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "parentOfimg", "reactionsModal"], [1, "list-unstyled"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "click"], [1, "d-flex", "align-items-center", "p-2", 2, "cursor", "pointer", "text-align", "center", 3, "ngClass", "click"], ["alt", "", 2, "width", "20px", "height", "20px", "margin", "0 5px", 3, "src"], [1, "mb-3"], ["alt", "", 1, "mainIMG", 2, "cursor", "pointer", 3, "routerLink", "src", "click"], ["alt", "", 1, "reactionImg", 3, "src"], [1, "mx-3", 2, "cursor", "pointer", 3, "routerLink", "click"]], template: function HompageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-add-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-you-may-know");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HompageComponent_ng_container_4_Template, 33, 24, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HompageComponent_ng_template_5_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HompageComponent_ng_template_7_Template, 12, 8, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfileService.HomePageSkeltonLoading)("ngIfElse", _r1);
    } }, directives: [_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_7__["AddPostComponent"], _you_may_know_you_may_know_component__WEBPACK_IMPORTED_MODULE_8__["YouMayKnowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], swiper_angular__WEBPACK_IMPORTED_MODULE_12__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_12__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_13__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _shared_lang_pipe__WEBPACK_IMPORTED_MODULE_14__["LangPipe"], _shared_text_pipe__WEBPACK_IMPORTED_MODULE_15__["TextPipe"], _shared_most_reaction_pipe__WEBPACK_IMPORTED_MODULE_16__["MostReactionPipe"], _shared_second_reaction_pipe__WEBPACK_IMPORTED_MODULE_17__["SecondReactionPipe"], _shared_reaction_type_pipe__WEBPACK_IMPORTED_MODULE_18__["ReactionTypePipe"]], styles: [".postsLoadingg.darkMode .loader,   .parentOfHomePage.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   img.profile[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e4e6eb;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #D8DADF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50 !important;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%]:hover::after {\n  cursor: pointer;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(122, 115, 115, 0.17);\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-post[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  border-radius: 25px;\n  cursor: pointer;\n  color: #65676b;\n  font-size: large;\n}\n\n.add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #E4E6EB !important;\n}\n\n.add-post.darkMode[_ngcontent-%COMP%]   .photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #3A3B3C !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%] {\n  border: 1px solid #ced0d4;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%]   .toYourPost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  border: none;\n  margin: 15px 0;\n  min-height: 50px;\n  width: 100%;\n  font-size: 20px;\n  background-color: transparent;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.modal-body[_ngcontent-%COMP%]   .parentOfimg[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1877f2;\n  border: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #E4E6E9;\n}\n\n.modal-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 30px;\n  font-weight: normal;\n}\n\n.photoIcon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.photoIcon[_ngcontent-%COMP%]:hover:hover {\n  background-color: #F0F2F5;\n}\n\n.iconn[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  background-image: url('icon.png');\n  background-position: 0 -150px;\n}\n\n.postLoading[_ngcontent-%COMP%] {\n  background: rgba(89, 87, 87, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.postLoading[_ngcontent-%COMP%]   p.darkMode[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 2px 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border-radius: 5px;\n  font-weight: 500;\n  font-size: 15px;\n  color: #65676b;\n  cursor: pointer;\n  padding: 6px 20px;\n  width: 137px;\n  text-align: center;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .userReact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .writeAcomment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.postss[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .numOfComments[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.first[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   img.last[_ngcontent-%COMP%] {\n  left: 13px;\n  z-index: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: -1px;\n  display: block;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactionsCount[_ngcontent-%COMP%]   .exist[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 35px !important;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .hideParentOfReactions[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .showReactions[_ngcontent-%COMP%]:hover   .reactions[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfReactions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -52px;\n  height: 60px;\n  padding: 10px 5px;\n  overflow: hidden;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  border-radius: 30px;\n  transition: 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%] {\n  color: #65676b;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .grayP[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  background: #F0F2F5;\n  border-radius: 20px;\n  padding: 7px 35px 7px 15px;\n  width: 100%;\n  resize: none;\n  height: 32px;\n  overflow: hidden;\n  margin-right: 15px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  line-height: 1;\n}\n\n.postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\n.postss[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   .overIMG[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.postss[_ngcontent-%COMP%]   .timeOnHover[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  position: absolute;\n  top: 25px;\n  left: -18px;\n  background: rgba(13, 13, 13, 0.77);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   small[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 1px solid var(--secondary);\n}\n\n.postss[_ngcontent-%COMP%]   .timee[_ngcontent-%COMP%]:hover   .timeOnHover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #D8DADF;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EE3050;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .sad[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA82A;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .angry[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DD6B0E;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .wow[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA85F;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .haha[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #EAA823;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0B86ED;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .mainIMG[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   .reactionImg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -6px;\n  bottom: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.parentOfReactionsModal[_ngcontent-%COMP%]   .reactionsModal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n  color: #E4E6EB;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .reactions[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  background-color: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid gray;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postss[_ngcontent-%COMP%]   .fa-ellipsis-h[_ngcontent-%COMP%]:hover {\n  background: #4E4F50;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-color: rgba(235, 235, 235, 0.1);\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   .commnetContent[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #E4E6EB !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, .paddinggx.darkMode[_ngcontent-%COMP%]   .postOptions[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF;\n}\n\n@media only screen and (max-width: 992px) {\n  .profileOnHover[_ngcontent-%COMP%], .timeOnHover[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n  .darkModeMenu {\n  background-color: #242526 !important;\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n}\n\n  .darkModeMenu .mat-menu-item {\n  color: #B8BBBF;\n}\n\n  .darkModeMenu .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n.popupp[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: black;\n  z-index: 11111111111111110000;\n  display: flex;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  text-align: center;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n}\n\n.popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  left: 15px;\n  top: 20px;\n  font-size: large;\n  background: none;\n  color: white;\n  padding: 0;\n  cursor: pointer;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background: white;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .autoScroll[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow: auto;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   img.profilePopup[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  background: none;\n}\n\n.popupp[_ngcontent-%COMP%]   .parentOfComments[_ngcontent-%COMP%] {\n  max-height: none !important;\n  overflow-y: auto !important;\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .commentsSection[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 70%;\n  }\n  .popupp[_ngcontent-%COMP%]   .imgSection[_ngcontent-%COMP%]   .showComments[_ngcontent-%COMP%] {\n    color: white;\n    position: absolute;\n    bottom: 4.5%;\n    width: 100%;\n  }\n  .popupp[_ngcontent-%COMP%]   .commentsSection[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n  }\n  .popupp[_ngcontent-%COMP%]   .zIndex[_ngcontent-%COMP%] {\n    z-index: -1;\n  }\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n  .parentOfReactionsModal .modal-header {\n  align-items: normal !important;\n  padding: 1rem 1rem 0 !important;\n}\n\n  .parentOfReactionsModal .close {\n  color: #b9b9b9;\n}\n\n.parentOfHomePage[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #F0F2F5;\n}\n\n.parentOfHomePage[_ngcontent-%COMP%]   .profileOnHover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%] {\n  background-color: #18191A;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .noMorePosts[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n.parentOfHomePage.darkMode[_ngcontent-%COMP%]   .noMorePosts[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n@media only screen and (max-width: 600px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .add-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .parentOfHomePageContainer[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n  .gravatar-title {\n  width: 100%;\n}\n\n.fa-paper-plane[_ngcontent-%COMP%] {\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHBsYWNlaG9sZGVyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxhZGRQb3N0LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx1c2VyLXZpc2l0LWhvbWVQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0kseUJBQUE7QUNJWjs7QURBRTs7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7QUNJSjs7QURISTs7RUFDSSxxREFBQTtFQUNBLHlCQUFBO0FDTVI7O0FETFE7O0VBQ0ksb0NBQUE7QUNRWjs7QURKRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUNPSjs7QUN0REE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHlESjs7QUN0REE7RUFDSSwyQ0FBQTtBRHlESjs7QUN4REk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDBEUjs7QUN6RFE7RUFDSSx5QkFBQTtBRDJEWjs7QUN0REE7RUFDSSxvQ0FBQTtBRHlESjs7QUN4REk7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUQwRFI7O0FDekRRO0VBQVEseUJBQUE7QUQ0RGhCOztBQzFESTtFQUNJLHlCQUFBO0FENERSOztBQ3pEUTtFQUNJLG9DQUFBO0FEMkRaOztBQ3JESTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRHVEUjs7QUN0RFE7RUFFRSwwQkFBQTtBRHVEVjs7QUNwREk7RUFDSSwwQkFBQTtFQUNBLG9DQUFBO0FEc0RSOztBQ3JEUTtFQUNJLG9DQUFBO0FEdURaOztBQ2xESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRG9EUjs7QUNqREk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBRG1EUjs7QUNsRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRG9EWjs7QUNqREk7RUFFSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEa0RSOztBQ2pEUTtFQUNJLHlCQUFBO0FEbURaOztBQy9DTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRGlEUjs7QUM1Q0U7RUFBVyxrQkFBQTtBRGdEYjs7QUMvQ0U7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7QUQrQ047O0FDbkRNO0VBQ0kseUJBQUE7QURxRFY7O0FDL0NFO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0FEa0ROOztBQ2hERTtFQUVJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRGtETjs7QUNqRE07RUFBWSx1QkFBQTtBRG9EbEI7O0FFL0tFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FGa0xKOztBRWpMRztFQUlLLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGZ0xSOztBRTNMUTtFQUNJLHlCQUFBO0FGNkxaOztBRWhMUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FGa0xaOztBRTdLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUZnTEo7O0FFOUtBO0VBQ0ksa0JBQUE7QUZpTEo7O0FFL0tRO0VBQ0ksZUFBQTtBRmlMWjs7QUVoTFk7RUFBUywwQkFBQTtBRm1MckI7O0FFaExZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRmtMaEI7O0FFaExZO0VBQ0ksVUFBQTtBRmtMaEI7O0FFaExZO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUZrTGhCOztBRWhMYTtFQUFNLGlCQUFBO0VBQ0gsZ0JBQUE7RUFDQyxjQUFBO0FGbUxqQjs7QUVqTFk7RUFBZSw0QkFBQTtBRm9MM0I7O0FFbExRO0VBQXdCLFdBQUE7QUZxTGhDOztBRXBMUTtFQUFpQyxhQUFBO0FGdUx6Qzs7QUV0TFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUZ1TFo7O0FFckxRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUZ1TFo7O0FFdExZO0VBQ0Usa0JBQUE7QUZ3TGQ7O0FFdExZO0VBQ0ksZ0JBQUE7QUZ3TGhCOztBRXZMZ0I7RUFDSSxxQkFBQTtBRnlMcEI7O0FFckxRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBRnVMWjs7QUV0TFk7RUFDSSwwQkFBQTtBRndMaEI7O0FFckxRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUZ1TFo7O0FFbExRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBRm9MWjs7QUVuTFk7RUFDSSxvQkFBQTtBRnFMaEI7O0FFcExnQjtFQUNJLG1CQUFBO0FGc0xwQjs7QUVwTGdCO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGc0xwQjs7QUV4S0k7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FGMEtSOztBRXpLUTtFQUNHLDhCQUFBO0FGMktYOztBRXhLSTtFQUVJLFNBQUE7QUZ5S1I7O0FFeEtRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGMEtaOztBRW5LSTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRnFLTDs7QUVsS0E7RUFBbUMseUNBQUE7QUZxS25DOztBRXBLQTtFQUE0QixjQUFBO0FGdUs1Qjs7QUV0S0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUZ3S0o7O0FFdktJO0VBQ0ksbUJBQUE7QUZ5S1I7O0FFbEtJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksZ0NBQUE7QUZxS1I7O0FFbktJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUZxS1I7O0FFcEtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRnNLWjs7QUVwS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZzS1o7O0FFcEtRO0VBQVMsMEJBQUE7QUZ1S2pCOztBRS9KRTs7RUFBSSw4Q0FBQTtBRm9LTjs7QUVuS0U7O0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FGc0tOOztBRXJLTTs7RUFBYSxvQ0FBQTtBRnlLbkI7O0FFeEtNOztFQUFvQixvQ0FBQTtBRjRLMUI7O0FFMUtVOztFQUNHLDZCQUFBO0FGNktiOztBRXpLVTs7RUFDSSxtQkFBQTtBRjRLZDs7QUVuS0s7O0VBQ0ksc0NBQUE7QUZzS1Q7O0FFcktROztFQUlLLGNBQUE7QUZxS2I7O0FFeEthOztFQUNDLHlCQUFBO0FGMktkOztBRXRLTTs7O0VBQ0kscURBQUE7RUFDQSx5QkFBQTtBRjBLVjs7QUV4S007O0VBQWMsY0FBQTtBRjRLcEI7O0FFdEtBO0VBRUs7SUFDSSx3QkFBQTtFRndLUDtBQUNGOztBRW5LQztFQUVHLG9DQUFBO0VBQ0Esa0RBQUE7QUZvS0o7O0FFbktJO0VBQ0ksY0FBQTtBRnFLUjs7QUVwS1E7RUFBUyx5QkFBQTtBRnVLakI7O0FFNUpBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBRitKSjs7QUU5Skk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRmdLUjs7QUUvSlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBRmlLWjs7QUUvSlE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUZnS1o7O0FFN0pJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRitKUjs7QUU5SlE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBRmdLWjs7QUU5SlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGZ0taOztBRTlKUTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBRitKWjs7QUU1Skk7RUFFSSwyQkFBQTtFQUNBLDJCQUFBO0FGNkpSOztBRXpKQTtFQUVRO0lBQ0ksVUFBQTtFRjJKVjtFRTFKVTtJQUNJLFVBQUE7RUY0SmQ7RUUxSlU7SUFDSSxhQUFBO0VGNEpkO0VFekpNO0lBQ0ksVUFBQTtFRjJKVjtBQUNGOztBRXhKQTtFQUVRO0lBQ0ksYUFBQTtFRnlKVjs7RUVySk07SUFBVyxhQUFBO0VGeUpqQjtBQUNGOztBRXZKQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFRndKVjtFRXZKVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VGeUpkO0VFdkpVO0lBRUksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUZ3SmQ7RUVySk07SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUZ1SlY7RUVySk07SUFBUyxXQUFBO0VGd0pmO0FBQ0Y7O0FFcEpJO0VBQWdCLFdBQUE7QUZ1SnBCOztBRXJKUTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7QUZ1Slo7O0FFckpRO0VBQVEsY0FBQTtBRndKaEI7O0FBaGpCQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFtakJKOztBQWxqQkk7RUFBbUIsZUFBQTtBQXFqQnZCOztBQW5qQkE7RUFDSSx5QkFBQTtBQXNqQko7O0FBcmpCSTtFQUFXLDhCQUFBO0FBd2pCZjs7QUF2akJJO0VBQ0kseUJBQUE7QUF5akJSOztBQXhqQlE7RUFBaUIseUJBQUE7QUEyakJ6Qjs7QUFyakJBO0VBQ0k7SUFDSSxVQUFBO0VBd2pCTjs7RUFyakJNO0lBQ0ksMkJBQUE7RUF3akJWO0FBQ0Y7O0FBcGpCQTtFQUNJO0lBQ0ksVUFBQTtFQXNqQk47QUFDRjs7QUFwakJBO0VBQ0k7SUFDSSxVQUFBO0VBc2pCTjtBQUNGOztBQXBqQkE7RUFBMEIsV0FBQTtBQXVqQjFCOztBQXRqQkE7RUFBaUIsV0FBQTtBQTBqQmpCIiwiZmlsZSI6ImhvbXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJWRhcmttb2RlTG9hZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyMzIzMlxyXG59XHJcbiVwcm9maWxlT25Ib3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBpbWcucHJvZmlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZWIgO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJXByb2ZpbGVPbkhvdmVyRGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDI0OSAyMzMgMjMzIC8gMjQlKSAwcHggM3B4IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNyAyMjcgMjI3IC8gMTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICVvdmVySU1HIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIgMTE1IDExNSAvIDE3JSk7XHJcbiAgfSIsIjo6bmctZGVlcCAucG9zdHNMb2FkaW5nZy5kYXJrTW9kZSAubG9hZGVyLFxuOjpuZy1kZWVwIC5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjMyMzI7XG59XG5cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgaW1nLnByb2ZpbGUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREY7XG59XG5cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wcm9maWxlT25Ib3Zlcixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiByZ2JhKDI0OSwgMjMzLCAyMzMsIDAuMjQpIDBweCAzcHggMTVweCAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbjpob3Zlcixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnByb2ZpbGVPbkhvdmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RTRGNTAgIWltcG9ydGFudDtcbn1cblxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgLm92ZXJJTUc6aG92ZXI6OmFmdGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDExNSwgMTE1LCAwLjE3KTtcbn1cblxuLm1vZGFsLWJvZHkgLnRvWW91clBvc3QgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcG9zdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4uYWRkLXBvc3QgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2NTY3NmI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4uYWRkLXBvc3QgcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XG59XG5cbi5hZGQtcG9zdC5kYXJrTW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwIHtcbiAgY29sb3I6ICNFNEU2RUI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKTtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcbn1cbi5hZGQtcG9zdC5kYXJrTW9kZSAudGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLmFkZC1wb3N0LmRhcmtNb2RlIC5waG90b0ljb246aG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDBkNDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tb2RhbC1ib2R5IC50b1lvdXJQb3N0IGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAucG9zdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjZGRTUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tb2RhbC1ib2R5IC5wYXJlbnRPZmltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLm1vZGFsLWJvZHkgLnBhcmVudE9maW1nIC5mYS10aW1lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxODc3ZjI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbC1ib2R5IC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTZFOTtcbn1cbi5tb2RhbC1ib2R5IDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5waG90b0ljb24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waG90b0ljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucGhvdG9JY29uOmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbn1cblxuLmljb25uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTBweDtcbn1cblxuLnBvc3RMb2FkaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSg4OSwgODcsIDg3LCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3N0TG9hZGluZyBwLmRhcmtNb2RlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5vcHRpb25zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGkge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NTY3NmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIHdpZHRoOiAxMzdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAub3B0aW9ucyAudXNlclJlYWN0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC53cml0ZUFjb21tZW50IGltZywgLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mQ29tbWVudHMgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucG9zdHNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLm51bU9mQ29tbWVudHMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAubnVtT2ZDb21tZW50czpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBpbWcuZmlyc3Qge1xuICB6LWluZGV4OiAyO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IGltZy5sYXN0IHtcbiAgbGVmdDogMTNweDtcbiAgei1pbmRleDogMTtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnNDb3VudCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9uc0NvdW50IC5leGlzdCArIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmhpZGVQYXJlbnRPZlJlYWN0aW9ucyB7XG4gIHotaW5kZXg6IC0xO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnNob3dSZWFjdGlvbnM6aG92ZXIgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZSZWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUycHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbn1cbi5wb3N0c3MgLnBvc3RPcHRpb25zIC5yZWFjdGlvbnMgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnJlYWN0aW9ucyBsaSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucmVhY3Rpb25zIGxpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmdyYXlQIHtcbiAgY29sb3I6ICM2NTY3NmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLmdyYXlQOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI0YwRjJGNTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogN3B4IDM1cHggN3B4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mQ29tbWVudHMge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mQ29tbWVudHMgLmNvbW1lbnRzIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4ucG9zdHNzIC5wb3N0T3B0aW9ucyAucGFyZW50T2ZDb21tZW50cyAuY29tbWVudHMgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBvc3RzcyAucG9zdE9wdGlvbnMgLnBhcmVudE9mQ29tbWVudHMgLmNvbW1lbnRzIC5jb21tbmV0Q29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBvc3RzcyAudXNlck5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ucG9zdHNzIC51c2VyTmFtZTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi5wb3N0c3MgLnByb2ZpbGVPbkhvdmVyIHtcbiAgdG9wOiAzN3B4O1xufVxuLnBvc3RzcyAucHJvZmlsZU9uSG92ZXIgLm92ZXJJTUcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb3N0c3MgLnRpbWVPbkhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogLTE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDEzLCAxMywgMC43Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnBvc3RzcyAudGltZWU6aG92ZXIgc21hbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnBvc3RzcyAudGltZWU6aG92ZXIgLnRpbWVPbkhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucG9zdHNzIC5mYS1lbGxpcHNpcy1oIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0Q4REFERjtcbn1cblxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmxvdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VFMzA1MDtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5zYWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VBQTgyQTtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5hbmdyeSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREQ2QjBFO1xufVxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLndvdyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUFBODVGO1xufVxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmhhaGEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VBQTgyMztcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5saWtlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjg2RUQ7XG59XG4ucGFyZW50T2ZSZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25zTW9kYWwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCAubWFpbklNRyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCAucmVhY3Rpb25JbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICBib3R0b206IDNweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5yZWFjdGlvbnNNb2RhbCBoMzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSBocixcbi5wYWRkaW5nZ3guZGFya01vZGUgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjEpO1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3Rzcyxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFNEU2RUI7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdHNzIC5yZWFjdGlvbnMsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3MgLnJlYWN0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0c3MgLmNvbW1lbnRzU2VjdGlvbixcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RzcyAuY29tbWVudHNTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RzcyAudXNlck5hbWU6aG92ZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0c3MgLnVzZXJOYW1lOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdHNzIC5mYS1lbGxpcHNpcy1oOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRFNEY1MDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaSxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5vcHRpb25zID4gbGkge1xuICBjb2xvcjogI0I4QkJCRjtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAub3B0aW9ucyA+IGxpOmhvdmVyLFxuLnBhZGRpbmdneC5kYXJrTW9kZSAucG9zdE9wdGlvbnMgLm9wdGlvbnMgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAucG9zdE9wdGlvbnMgdGV4dGFyZWEsIC5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5wb3N0T3B0aW9ucyAuY29tbW5ldENvbnRlbnQsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyB0ZXh0YXJlYSxcbi5wYWRkaW5nZ3guZGFya01vZGUgLnBvc3RPcHRpb25zIC5jb21tbmV0Q29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0U0RTZFQiAhaW1wb3J0YW50O1xufVxuLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLnBvc3RPcHRpb25zIDo6cGxhY2Vob2xkZXIsXG4ucGFkZGluZ2d4LmRhcmtNb2RlIC5wb3N0T3B0aW9ucyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCOEJCQkY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnByb2ZpbGVPbkhvdmVyLCAudGltZU9uSG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjQ5LCAyMzMsIDIzMywgMC4yNCkgMHB4IDNweCAxNXB4O1xufVxuOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnUgLm1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogI0I4QkJCRjtcbn1cbjo6bmctZGVlcCAuZGFya01vZGVNZW51IC5tYXQtbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQztcbn1cblxuLnBvcHVwcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogMTExMTExMTExMTExMTExMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9wdXBwIC5pbWdTZWN0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3B1cHAgLmltZ1NlY3Rpb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjAlO1xufVxuLnBvcHVwcCAuaW1nU2VjdGlvbiAuZmEtdGltZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAyMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wb3B1cHAgLmNvbW1lbnRzU2VjdGlvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucG9wdXBwIC5jb21tZW50c1NlY3Rpb24gLmF1dG9TY3JvbGwge1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIGltZy5wcm9maWxlUG9wdXAge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucG9wdXBwIC5jb21tZW50c1NlY3Rpb24gLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnBvcHVwcCAucGFyZW50T2ZDb21tZW50cyB7XG4gIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucG9wdXBwIC5pbWdTZWN0aW9uIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAucG9wdXBwIC5pbWdTZWN0aW9uIC5zaG93Q29tbWVudHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbWdTZWN0aW9uIC5zaG93Q29tbWVudHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29tbWVudHNTZWN0aW9uIC5mYS10aW1lcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9wdXBwIC5pbWdTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBvcHVwcCAuaW1nU2VjdGlvbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICB9XG4gIC5wb3B1cHAgLmltZ1NlY3Rpb24gLnNob3dDb21tZW50cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQuNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBvcHVwcCAuY29tbWVudHNTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnBvcHVwcCAuekluZGV4IHtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuOjpuZy1kZWVwIC5ncmF2YXRhci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5wYXJlbnRPZlJlYWN0aW9uc01vZGFsIC5tb2RhbC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwgLmNsb3NlIHtcbiAgY29sb3I6ICNiOWI5Yjk7XG59XG5cbi5wYXJlbnRPZkhvbWVQYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG59XG4ucGFyZW50T2ZIb21lUGFnZSAucHJvZmlsZU9uSG92ZXIgaDIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkxQTtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICMyNDI1MjYgIWltcG9ydGFudDtcbn1cbi5wYXJlbnRPZkhvbWVQYWdlLmRhcmtNb2RlIC5ub01vcmVQb3N0cyB7XG4gIGNvbG9yOiAjQjhCQkJGICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSAubm9Nb3JlUG9zdHMgLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNCOEJCQkYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucGFyZW50T2ZIb21lUGFnZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5hZGQtcG9zdCBwIHtcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBhcmVudE9mSG9tZVBhZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhcmVudE9mSG9tZVBhZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbjo6bmctZGVlcCAuZ3JhdmF0YXItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZhLXBhcGVyLXBsYW5lIHtcbiAgcmlnaHQ6IDE1cHg7XG59IiwiJWlucHV0dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4vLy8vLy8vLy8vLy8vIHN0YXJ0IGFkZCBwb3N0IHNlY3Rpb25cclxuLmFkZC1wb3N0IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLyBlbmQgYWRkIHBvc3Qgc2VjdGlvblxyXG4uYWRkLXBvc3QuZGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNFNEU2RUI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xyXG4gICAgICAgICY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDt9XHJcbiAgICB9XHJcbiAgICAudGV4dC1zZWNvbmRhcnl7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBob3RvSWNvbjpob3ZlciB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTNCM0MgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vLy8vLyBzdGFydCBtb2RhbCBib2R5XHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIC50b1lvdXJQb3N0XHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDBkNDtcclxuICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVpbnB1dHQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9zdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdmMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2RkU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFyZW50T2ZpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7IFxyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC5mYS10aW1lcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zZWNvbmRhcnlcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogIzE4NzdmMjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIC8vLy8vLy8vLy8gZW5kIG1vZGFsIGJvZHlcclxuICAvLy8vIHN0YXJ0IGdsb2JhbFxyXG4gIC5waG90b0ljb257Ym9yZGVyLXJhZGl1czogNXB4O31cclxuICAucGhvdG9JY29uOmhvdmVyIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIH1cclxuICBcclxuICAuaWNvbm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pY29uLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTBweDtcclxuICB9XHJcbiAgLnBvc3RMb2FkaW5nXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoODkgODcgODcgLyA1MCUpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgcC5kYXJrTW9kZSB7Y29sb3I6YmxhY2sgIWltcG9ydGFudH1cclxuICB9XHJcbiAgLy8vLyBlbmQgZ2xvYmFsICIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvcGxhY2Vob2xkZXIuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL2FkZFBvc3Quc2Nzc1wiO1xyXG4gICVvcHRpb25zIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nOjJweCAxMHB4O1xyXG4gICA+IGxpIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOjZweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIC51c2VyUmVhY3Qge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICB9XHJcbi8vLy8vLy8vLy8vLy8vLyBzdGFydCBwb3N0cyBzZWN0aW9uXHJcbiVjb21tZW50c0ltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ucG9zdHNzIHsgICAgICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAucG9zdE9wdGlvbnMge1xyXG4gICAgICAgIC5udW1PZkNvbW1lbnRze1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYWN0aW9uc0NvdW50IHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5maXJzdCB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5sYXN0IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBzcGFuIHttYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4aXN0ICsgc3BhbiB7bWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaWRlUGFyZW50T2ZSZWFjdGlvbnMge3otaW5kZXg6IC0xO31cclxuICAgICAgICAuc2hvd1JlYWN0aW9uczpob3ZlciAucmVhY3Rpb25zIHttYXJnaW4tdG9wOiAwIDt9XHJcbiAgICAgICAgLnBhcmVudE9mUmVhY3Rpb25ze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTUycHg7XHJcbiAgICAgICAgICAvLyAgbGVmdDogLTUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIC5yZWFjdGlvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgICAgICAgICBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyYXlQIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NTY3NmI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjBGMkY1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMzVweCA3cHggMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICBAZXh0ZW5kICVvcHRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYXJlbnRPZkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgLmNvbW1lbnRzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbW5ldENvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVjb21tZW50c0ltZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAud3JpdGVBY29tbWVudCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVjb21tZW50c0ltZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlcHJvZmlsZU9uSG92ZXI7XHJcbiAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgICAgIC5vdmVySU1HIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJW92ZXJJTUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIC50aW1lT25Ib3ZlciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogMjVweDtcclxuICAgICBsZWZ0OiAtMThweDtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2IoMTMgMTMgMTMgLyA3NyUpO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgd2lkdGg6MTAwcHhcclxuIH1cclxuXHJcbi50aW1lZTpob3ZlciAgc21hbGw6Zmlyc3Qtb2YtdHlwZSB7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7fVxyXG4udGltZWU6aG92ZXIgLnRpbWVPbkhvdmVyIHsgZGlzcGxheTogYmxvY2sgOyB9IFxyXG4uZmEtZWxsaXBzaXMtaCB7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6I0Q4REFERjtcclxuICAgIH1cclxufSBcclxufVxyXG4vLy8vLy8vLy8vLy8vLyBlbmQgcG9zdHMgc2VjdGlvblxyXG4vLy8vLy8gc3RhcnQgcmVhY3Rpb25zTW9kYWxcclxuLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwge1xyXG4gICAgLmxvdmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUUzMDUwO1xyXG4gICAgfVxyXG4gICAgLnNhZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MkE7XHJcbiAgICB9XHJcbiAgICAuYW5ncnkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREQ2QjBFO1xyXG4gICAgfVxyXG4gICAgLndvdyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4NUY7XHJcbiAgICB9XHJcbiAgICAuaGFoYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQUE4MjM7XHJcbiAgICB9XHJcbiAgICAubGlrZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjg2RUQ7XHJcbiAgICB9XHJcbiAgICAucmVhY3Rpb25zTW9kYWwge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLm1haW5JTUcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWFjdGlvbkltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMzpob3Zlcnt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vIGVuZCByZWFjdGlvbnNNb2RhbFxyXG5cclxuLy8vIHN0YXJ0IGRhcmsgbW9kZVxyXG4ucGFyZW50T2ZIb21lUGFnZS5kYXJrTW9kZSxcclxuLnBhZGRpbmdneC5kYXJrTW9kZSB7XHJcbiAgaHIge2JvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM1IDIzNSAyMzUgLyAxMCUpO31cclxuICAucG9zdHNzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojRTRFNkVCO1xyXG4gICAgICAucmVhY3Rpb25zeyAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjUyNiAhaW1wb3J0YW50O31cclxuICAgICAgLmNvbW1lbnRzU2VjdGlvbiAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAudXNlck5hbWUge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmEtZWxsaXBzaXMtaCB7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAgIzRFNEY1MFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5wcm9maWxlT25Ib3ZlciB7XHJcbiAgICBAZXh0ZW5kICVwcm9maWxlT25Ib3ZlckRhcmtNb2RlO1xyXG4gIH1cclxuXHJcbiAucG9zdE9wdGlvbnMge1xyXG4gICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMSk7XHJcbiAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgY29sb3I6I0I4QkJCRlxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dGFyZWEsLmNvbW1uZXRDb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICNFNEU2RUIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICA6OnBsYWNlaG9sZGVye2NvbG9yOiNCOEJCQkZ9XHJcbiB9XHJcbn1cclxuXHJcbi8vLyBlbmQgZGFyayBtb2RlXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgXHJcbiAgICAgLnByb2ZpbGVPbkhvdmVyICwgLnRpbWVPbkhvdmVyIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAgIFxyXG4gfVxyXG4gXHJcblxyXG4gOjpuZy1kZWVwIC5kYXJrTW9kZU1lbnVcclxuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyNDkgMjMzIDIzMyAvIDI0JSkgMHB4IDNweCAxNXB4O1xyXG4gICAgLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAjQjhCQkJGO1xyXG4gICAgICAgICY6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzQTNCM0M7fVxyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAucG9zdHNMb2FkaW5nZy5kYXJrTW9kZSAubG9hZGVyLFxyXG4gICAgLnBhcmVudE9mSG9tZVBhZ2UuZGFya01vZGUgLmxvYWRlclxyXG57XHJcbiAgQGV4dGVuZCAlZGFya21vZGVMb2FkZXI7XHJcbn1cclxufVxyXG5cclxuLnBvcHVwcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHotaW5kZXg6IDExMTExMTExMTExMTExMTExMTExO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5pbWdTZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXRpbWVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAuYXV0b1Njcm9sbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZy5wcm9maWxlUG9wdXAge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10aW1lc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXJlbnRPZkNvbW1lbnRzXHJcbiAgICB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93LXk6ICBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnBvcHVwcCB7XHJcbiAgICAgICAgLmltZ1NlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvd0NvbW1lbnRzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1lbnRzU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pbWdTZWN0aW9uIHtcclxuICAgICAgICAuc2hvd0NvbW1lbnRzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICAuZmEtdGltZXMge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5wb3B1cHAge1xyXG4gICAgICAgIC5pbWdTZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG93Q29tbWVudHNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0LjUlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tbWVudHNTZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnpJbmRleCB7ei1pbmRleDogLTE7fVxyXG4gICAgfVxyXG59XHJcbi8vLy8gcmVhY3Rpb25Nb2RlXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuZ3JhdmF0YXItdGl0bGV7d2lkdGg6IDEwMCU7fVxyXG4gICAgLnBhcmVudE9mUmVhY3Rpb25zTW9kYWwge1xyXG4gICAgICAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsb3NlIHtjb2xvcjogI2I5YjliOTt9XHJcbiAgICB9XHJcbn0iXX0= */"] });


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