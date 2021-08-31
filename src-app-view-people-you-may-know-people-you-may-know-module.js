(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-people-you-may-know-people-you-may-know-module"],{

/***/ "3nh0":
/*!************************************************************************!*\
  !*** ./src/app/view/people-you-may-know/people-you-may-know.module.ts ***!
  \************************************************************************/
/*! exports provided: PeopleYouMayKnowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleYouMayKnowModule", function() { return PeopleYouMayKnowModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _people_you_may_know_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-you-may-know-routing.module */ "8VTS");
/* harmony import */ var _suggested_users_suggested_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggested-users/suggested-users.component */ "CXsn");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PeopleYouMayKnowModule {
}
PeopleYouMayKnowModule.ɵfac = function PeopleYouMayKnowModule_Factory(t) { return new (t || PeopleYouMayKnowModule)(); };
PeopleYouMayKnowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PeopleYouMayKnowModule });
PeopleYouMayKnowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _people_you_may_know_routing_module__WEBPACK_IMPORTED_MODULE_1__["PeopleYouMayKnowRoutingModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PeopleYouMayKnowModule, { declarations: [_suggested_users_suggested_users_component__WEBPACK_IMPORTED_MODULE_2__["SuggestedUsersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _people_you_may_know_routing_module__WEBPACK_IMPORTED_MODULE_1__["PeopleYouMayKnowRoutingModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ }),

/***/ "8VTS":
/*!********************************************************************************!*\
  !*** ./src/app/view/people-you-may-know/people-you-may-know-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PeopleYouMayKnowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleYouMayKnowRoutingModule", function() { return PeopleYouMayKnowRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suggested_users_suggested_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggested-users/suggested-users.component */ "CXsn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _suggested_users_suggested_users_component__WEBPACK_IMPORTED_MODULE_1__["SuggestedUsersComponent"]
    }
];
class PeopleYouMayKnowRoutingModule {
}
PeopleYouMayKnowRoutingModule.ɵfac = function PeopleYouMayKnowRoutingModule_Factory(t) { return new (t || PeopleYouMayKnowRoutingModule)(); };
PeopleYouMayKnowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PeopleYouMayKnowRoutingModule });
PeopleYouMayKnowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PeopleYouMayKnowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "CXsn":
/*!***************************************************************************************!*\
  !*** ./src/app/view/people-you-may-know/suggested-users/suggested-users.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SuggestedUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestedUsersComponent", function() { return SuggestedUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/people-you-may-know.service */ "ERkD");
/* harmony import */ var src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/follow-or-unfollow.service */ "aTWD");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comment-socket.service */ "bVNP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/gender.pipe */ "1Ukq");











const _c0 = function () { return { width: "100%", height: "150px", "border-radius": "10px", margin: 0 }; };
const _c1 = function () { return { width: "100%", "border-radius": "0", height: "10px", "margin-bottom": "2px" }; };
const _c2 = function () { return { width: "100%", "border-radius": "0", height: "10px" }; };
function SuggestedUsersComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-skeleton-loader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
} }
function SuggestedUsersComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuggestedUsersComponent_ng_container_5_div_1_Template, 11, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loadingItems);
} }
const _c3 = function (a1) { return ["/visit", a1]; };
function SuggestedUsersComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestedUsersComponent_ng_template_6_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.followOrUnFollow(item_r6 == null ? null : item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, item_r6._id))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, item_r6 == null ? null : item_r6.profilePhoto, item_r6 == null ? null : item_r6.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c3, item_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, item_r6 == null ? null : item_r6.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, item_r6 == null ? null : item_r6.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.followLoading);
} }
function SuggestedUsersComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SuggestedUsersComponent_ng_template_6_div_0_Template, 16, 25, "div", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.users);
} }
class SuggestedUsersComponent {
    constructor(peopleYouMayKnowService, folloOrUnfollowService, _snackBar, userService, title, socketService, router) {
        this.peopleYouMayKnowService = peopleYouMayKnowService;
        this.folloOrUnfollowService = folloOrUnfollowService;
        this._snackBar = _snackBar;
        this.userService = userService;
        this.title = title;
        this.socketService = socketService;
        this.router = router;
        this.users = [];
        this.loading = true;
        this.loadingItems = [];
        this.followLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.title.setTitle("Friends | Fakebook");
        window.scroll(0, 0);
        this.loadingItems.length = 8;
        this.getSuggested();
    }
    // start follow users method
    followOrUnFollow(id) {
        this.followLoading = true;
        this.loading = true;
        this.subscriptions.push(this.folloOrUnfollowService.followOrUnFollow(id).subscribe(res => {
            this.socketService.emit("follow", { id }).then(res => {
                this._snackBar.open("Followed up successfully", "successfully", {
                    horizontalPosition: 'left',
                    verticalPosition: 'bottom',
                    duration: 3000
                });
                this.getSuggested();
            }, err => { this.router.navigate(["/error"]); });
        }, err => { }));
    }
    // end follow users method
    getSuggested() {
        this.subscriptions.push(this.peopleYouMayKnowService.getAllPeopleYouMAyKnow().subscribe(res => {
            this.users = res;
            this.loading = false;
            this.followLoading = false;
        }, err => {
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
SuggestedUsersComponent.ɵfac = function SuggestedUsersComponent_Factory(t) { return new (t || SuggestedUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_people_you_may_know_service__WEBPACK_IMPORTED_MODULE_1__["PeopleYouMayKnowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_follow_or_unfollow_service__WEBPACK_IMPORTED_MODULE_2__["FollowOrUnfollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_6__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
SuggestedUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuggestedUsersComponent, selectors: [["app-suggested-users"]], decls: 8, vars: 4, consts: [[1, "parentOfSugg", "py-2"], [1, "container"], [1, "font-weight-bold", "mb-2", "mt-5"], [1, "row"], [4, "ngIf", "ngIfElse"], ["content", ""], ["class", "col-sm-6 col-md-4 col-lg-3 mb-5", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3", "mb-5"], [1, "fb-item", "p-3", "bg-white", "postsLoadingg", "rounded-lg"], [1, "first-section-wrapper"], [1, "item", "postsLoadingg"], ["count", "1", "appearance", "circle", 3, "theme"], [1, "gravatar-title"], [3, "theme"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "peopleYouMayknow", "my-2"], ["alt", "", 1, "mainimg", 3, "routerLink", "src"], [1, "px-2", "py-3"], [1, "overflow-hidden", "mb-2"], [1, "mainName", 3, "routerLink"], [1, "follow", 3, "disabled", "click"], [1, "fas", "fa-user-plus"], [1, "mx-1"]], template: function SuggestedUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "People you may know");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SuggestedUsersComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SuggestedUsersComponent_ng_template_6_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userService.userProfile == null ? null : ctx.userService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_10__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: [".parentOfSugg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #F0F2F5;\n  overflow: hidden;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 5px;\n  background: white;\n  overflow: hidden;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainimg[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  cursor: pointer;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background: #E7F3FF;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #ccdef1;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainName[_ngcontent-%COMP%] {\n  width: 1000px;\n  cursor: pointer;\n}\n.parentOfSugg.darkMode[_ngcontent-%COMP%] {\n  color: #E4E6EB;\n  background-color: #242526 !important;\n}\n.parentOfSugg.darkMode[_ngcontent-%COMP%]   .bg-white[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n.parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%] {\n  box-shadow: rgba(249, 233, 233, 0.24) 0px 3px 15px;\n  background-color: #242526;\n}\n.parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n  color: #216fdb;\n  background-color: #263951;\n}\n.parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]:hover {\n  background: #3C4D63;\n}\n  .parentOfSugg.darkMode .loader {\n  background-color: #323232 !important;\n  border: 1px solid #323232;\n}\n@media only screen and (max-width: 575px) {\n  .parentOfSugg[_ngcontent-%COMP%] {\n    background: white;\n  }\n\n  .parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%], .parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%] {\n    box-shadow: none;\n    background: transparent;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n  }\n  .parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainimg[_ngcontent-%COMP%], .parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainimg[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n  }\n  .parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%], .parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .parentOfSugg[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainName[_ngcontent-%COMP%], .parentOfSugg.darkMode[_ngcontent-%COMP%]   .peopleYouMayknow[_ngcontent-%COMP%]   .mainName[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3VnZ2VzdGVkLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0csaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQUg7QUFDRztFQUNDLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNELGdCQUFBO0FBQ0g7QUFBSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxtQkFBQTtBQUdaO0FBRFE7RUFBTSxnQkFBQTtBQUlkO0FBREk7RUFBVSxhQUFBO0VBQWEsZUFBQTtBQUszQjtBQURBO0VBQ1EsY0FBQTtFQUNBLG9DQUFBO0FBSVI7QUFIUTtFQUFXLDhCQUFBO0FBTW5CO0FBTFE7RUFFSSxrREFBQTtFQUNBLHlCQUFBO0FBTVo7QUFMWTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQU9oQjtBQU5nQjtFQUNJLG1CQUFBO0FBUXBCO0FBSEE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FBTUo7QUFKQTtFQUNJO0lBQWMsaUJBQUE7RUFRaEI7O0VBTk07SUFDSSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQVNWO0VBUlU7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBVWQ7RUFSVTtJQUFRLFdBQUE7RUFXbEI7RUFWVTtJQUFXLFdBQUE7RUFhckI7QUFDRiIsImZpbGUiOiJzdWdnZXN0ZWQtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhcmVudE9mU3VnZyB7XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAucGVvcGxlWW91TWF5a25vdyB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAubWFpbmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9sbG93IHtcclxuICAgICAgICBjb2xvcjogIzIxNmZkYjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTdGM0ZGO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2RlZjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge2ZvbnQtc2l6ZTogbGFyZ2U7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbk5hbWV7d2lkdGg6MTAwMHB4O2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG59XHJcbn1cclxuLnBhcmVudE9mU3VnZy5kYXJrTW9kZSB7XHJcbiAgICAgICAgY29sb3I6I0U0RTZFQjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmJnLXdoaXRlIHtiYWNrZ3JvdW5kOiAjMjQyNTI2ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgIC5wZW9wbGVZb3VNYXlrbm93IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDI0OSAyMzMgMjMzIC8gMjQlKSAwcHggM3B4IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjY7XHJcbiAgICAgICAgICAgIC5mb2xsb3cge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTZmZGI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzOTUxO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNDNEQ2M1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcbjo6bmctZGVlcCAucGFyZW50T2ZTdWdnLmRhcmtNb2RlIC5sb2FkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMjMyXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLnBhcmVudE9mU3VnZ3tiYWNrZ3JvdW5kOiB3aGl0ZTt9XHJcbiAgICAucGFyZW50T2ZTdWdnLC5wYXJlbnRPZlN1Z2cuZGFya01vZGUgIHtcclxuICAgICAgICAucGVvcGxlWW91TWF5a25vdyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAubWFpbmltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb2xsb3d7d2lkdGg6IGF1dG87fVxyXG4gICAgICAgICAgICAubWFpbk5hbWUge3dpZHRoOiBhdXRvO31cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gfSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-view-people-you-may-know-people-you-may-know-module.js.map