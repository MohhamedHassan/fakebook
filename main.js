(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\moHassan\socailMedia\src\main.ts */"zUnb");


/***/ }),

/***/ "1Ukq":
/*!***************************************!*\
  !*** ./src/app/shared/gender.pipe.ts ***!
  \***************************************/
/*! exports provided: GenderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPipe", function() { return GenderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GenderPipe {
    transform(imgUrl, gender) {
        if (imgUrl)
            return imgUrl;
        else {
            if (gender == 'male')
                return 'assets/male.png';
            else if (gender == 'female')
                return 'assets/female.png';
        }
        return 'assets/male.png';
    }
}
GenderPipe.ɵfac = function GenderPipe_Factory(t) { return new (t || GenderPipe)(); };
GenderPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gender", type: GenderPipe, pure: true });


/***/ }),

/***/ "2wBp":
/*!************************************************!*\
  !*** ./src/app/shared/second-reaction.pipe.ts ***!
  \************************************************/
/*! exports provided: SecondReactionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondReactionPipe", function() { return SecondReactionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SecondReactionPipe {
    constructor(rendrer) {
        this.rendrer = rendrer;
    }
    transform(numOfLove, numOfSad, numOfWow, numOfHaha, numOfAngr, numOfLike, bool) {
        let numberOfReactions = [numOfLove, numOfSad, numOfWow, numOfHaha, numOfAngr, numOfLike];
        let reaction = ['love', 'sad', 'wow', 'haha', 'angry', 'like'];
        let max;
        max = Math.max(...numberOfReactions);
        reaction.splice(numberOfReactions.indexOf(max), 1);
        numberOfReactions.splice(numberOfReactions.indexOf(max), 1);
        max = Math.max(...numberOfReactions);
        let imgSrc = reaction[numberOfReactions.indexOf(max)];
        if (max != 0) {
            this.rendrer.addClass(bool, "exist");
            this.rendrer.removeClass(bool, "d-none");
            return `assets/${imgSrc}.png`;
        }
        else {
            this.rendrer.addClass(bool, "d-none");
            this.rendrer.removeClass(bool, "exist");
            return '';
        }
    }
}
SecondReactionPipe.ɵfac = function SecondReactionPipe_Factory(t) { return new (t || SecondReactionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SecondReactionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "secondReaction", type: SecondReactionPipe, pure: false });


/***/ }),

/***/ "3DGB":
/*!***********************************************************!*\
  !*** ./src/app/notFound/not-found/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor(userProfilesService) {
        this.userProfilesService = userProfilesService;
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__["UserProfileService"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 3, consts: [[1, "notFound", "d-flex", "justify-content-center", "align-items-center"], [1, "notFoundWidth", "text-center"], ["alt", "", 3, "src"], [1, "font-weight-bold", "text-secondary"], [1, "my-2"], ["routerLink", "/homePage", 1, "btn", "btn-primary"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This page isn't available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go To News Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.userProfilesService.userProfile == null ? null : ctx.userProfilesService.userProfile.darkMode) ? "assets/darkModeNotFound.PNG" : "assets/notfound.PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".notFound[_ngcontent-%COMP%] {\n  background: #F0F2F5;\n  min-height: 100vh;\n  margin-top: -61px;\n  padding-top: 61px;\n}\n\n.notFound.darkMode[_ngcontent-%COMP%] {\n  background: #18191A;\n  color: #B8BBBF !important;\n}\n\n.notFound.darkMode[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\n.notFoundWidth[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media only screen and (max-width: 992px) {\n  .notFoundWidth[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQURJO0VBQWtCLHlCQUFBO0FBSXRCOztBQUZBO0VBQWdCLFVBQUE7QUFNaEI7O0FBTEE7RUFDSTtJQUFnQixVQUFBO0VBU2xCO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdEZvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMEYyRjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IC02MXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDYxcHg7XHJcbn1cclxuLm5vdEZvdW5kLmRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxODE5MUE7XHJcbiAgICBjb2xvcjogI0I4QkJCRiAhaW1wb3J0YW50O1xyXG4gICAgLnRleHQtc2Vjb25kYXJ5IHsgY29sb3I6ICNCOEJCQkYgIWltcG9ydGFudDt9XHJcbn1cclxuLm5vdEZvdW5kV2lkdGgge3dpZHRoOiAyNSU7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubm90Rm91bmRXaWR0aCB7d2lkdGg6IDYwJTt9XHJcbn0gIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://h-social-network.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BRi9":
/*!*************************************!*\
  !*** ./src/app/shared/lang.pipe.ts ***!
  \*************************************/
/*! exports provided: LangPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangPipe", function() { return LangPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LangPipe {
    constructor(rendrer) {
        this.rendrer = rendrer;
    }
    transform(text, elementt) {
        if (text.charCodeAt(0) > 200) {
            this.rendrer.setStyle(elementt, 'textAlign', "right");
            this.rendrer.setStyle(elementt, 'direction', "rtl");
        }
        return text;
    }
}
LangPipe.ɵfac = function LangPipe_Factory(t) { return new (t || LangPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LangPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lang", type: LangPipe, pure: true });


/***/ }),

/***/ "BmlJ":
/*!******************************************!*\
  !*** ./src/app/guarda/not-user.guard.ts ***!
  \******************************************/
/*! exports provided: NotUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotUserGuard", function() { return NotUserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotUserGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLogin()) {
            this.router.navigate(["/homePage"]);
            return false;
        }
        return true;
    }
}
NotUserGuard.ɵfac = function NotUserGuard_Factory(t) { return new (t || NotUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotUserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotUserGuard, factory: NotUserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "N7fZ":
/*!*************************************!*\
  !*** ./src/app/shared/text.pipe.ts ***!
  \*************************************/
/*! exports provided: TextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPipe", function() { return TextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextPipe {
    transform(text, index, seeMoreIndex) {
        let output;
        if (index == seeMoreIndex)
            return text;
        else {
            output = text.slice(0, 500);
            return output;
        }
    }
}
TextPipe.ɵfac = function TextPipe_Factory(t) { return new (t || TextPipe)(); };
TextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "text", type: TextPipe, pure: true });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.pipe */ "N7fZ");
/* harmony import */ var _lang_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.pipe */ "BRi9");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ "ZPLk");
/* harmony import */ var _reaction_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reaction-type.pipe */ "UnZl");
/* harmony import */ var _gender_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gender.pipe */ "1Ukq");
/* harmony import */ var _most_reaction_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./most-reaction.pipe */ "k08z");
/* harmony import */ var _second_reaction_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second-reaction.pipe */ "2wBp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"],
        _lang_pipe__WEBPACK_IMPORTED_MODULE_2__["LangPipe"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"],
        _reaction_type_pipe__WEBPACK_IMPORTED_MODULE_4__["ReactionTypePipe"],
        _gender_pipe__WEBPACK_IMPORTED_MODULE_5__["GenderPipe"],
        _most_reaction_pipe__WEBPACK_IMPORTED_MODULE_6__["MostReactionPipe"],
        _second_reaction_pipe__WEBPACK_IMPORTED_MODULE_7__["SecondReactionPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_text_pipe__WEBPACK_IMPORTED_MODULE_1__["TextPipe"], _lang_pipe__WEBPACK_IMPORTED_MODULE_2__["LangPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _reaction_type_pipe__WEBPACK_IMPORTED_MODULE_4__["ReactionTypePipe"], _gender_pipe__WEBPACK_IMPORTED_MODULE_5__["GenderPipe"], _most_reaction_pipe__WEBPACK_IMPORTED_MODULE_6__["MostReactionPipe"], _second_reaction_pipe__WEBPACK_IMPORTED_MODULE_7__["SecondReactionPipe"]] }); })();


/***/ }),

/***/ "Q+Hy":
/*!**************************************************!*\
  !*** ./src/app/services/user-profile.service.ts ***!
  \**************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserProfileService {
    constructor(http) {
        this.http = http;
        this.userPosts = [];
        this.myFollowingPosts = [];
        this.followers = [];
        this.following = [];
        this.photos = [];
        this.myNotifications = [];
        this.skeltonLoading = true;
        this.skeltonLoadingForPhotos = true;
        this.skeltonLoadingForFollowing = true;
        this.skeltonLoadingFollowers = true;
        this.HomePageSkeltonLoading = true;
        this.popUP = false;
    }
    uploadCoverImg(coverImg) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/coverImage`, coverImg);
    }
    deletCoverImg() {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/coverImage`);
    }
    uploadProfileImg(coverImg) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/profilePhoto`, coverImg);
    }
    deletProfileImg() {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/mainProfilePhoto`);
    }
    deletOldProfileImg(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/oldProfilePhoto/${id}`);
    }
    getMyProfile() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/myProfile`);
    }
    makeApost(content) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/addPost`, content);
    }
    // getMyPosts() {
    //   return this.http.get(`${environment.apiUrl}/myPosts`)
    // } 
    deletPost(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/deletePost/${id}`);
    }
    updatePostContent(id, content) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/updatePost/${id}`, content);
    }
    updatePostImage(id, image) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/updatePostImage/${id}`, image);
    }
    addPersonalInfo(value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/personalInfo`, value);
    }
    updatePersonalInfo(value) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/profile`, value);
    }
    getFollowing() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/myFollowings`);
    }
    getFollowers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/myFollowers`);
    }
    updatePassword(value) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/changePassword`, value);
    }
    deleteInfo(value) {
        return this.http.request('DELETE', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/personalInfo`, {
            body: value
        });
    }
    getMyPhotos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/allPhotos`);
    }
    getMyFollowingPosts() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/followingPosts`);
    }
    getPostComment(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/singlePost/${id}`);
    }
    darkModeStatus() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/darkMode`, {});
    }
    deletComment(id) {
        return this.http.request('DELETE', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/deleteComment`, {
            body: { id }
        });
    }
    updateComment(body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/updateComment`, body);
    }
    searchForUsers(searchValue) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/searchUsers?userName=${searchValue}`);
    }
    getMyNotifications() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/myNotifications`);
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user-profile.service */ "Q+Hy");
/* harmony import */ var _services_comment_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/comment-socket.service */ "bVNP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/gender.pipe */ "1Ukq");









function AppComponent_nav_0_div_14_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/visit", a1]; };
function AppComponent_nav_0_div_14_ng_template_3_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, item_r19 == null ? null : item_r19._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, item_r19 == null ? null : item_r19.profilePhoto, ctx_r18.searchResult == null ? null : ctx_r18.searchResult.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, item_r19 == null ? null : item_r19.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, item_r19 == null ? null : item_r19.lastName), 0, 12), " ");
} }
function AppComponent_nav_0_div_14_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_0_div_14_ng_template_3_ng_container_0_li_1_Template, 12, 21, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.searchResult);
} }
function AppComponent_nav_0_div_14_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_nav_0_div_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_div_14_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_0_div_14_ng_template_3_ng_template_1_Template, 2, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.searchResult.length)("ngIfElse", _r16);
} }
function AppComponent_nav_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_nav_0_div_14_li_2_Template, 6, 0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_nav_0_div_14_ng_template_3_Template, 3, 2, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.searchLoading)("ngIfElse", _r13);
} }
function AppComponent_nav_0_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.userProfilesService == null ? null : ctx_r5.userProfilesService.myNotifications == null ? null : ctx_r5.userProfilesService.myNotifications.length, " ");
} }
function AppComponent_nav_0_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_nav_0_ng_template_37_button_0_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function AppComponent_nav_0_ng_template_37_button_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 71);
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + (item_r21 == null ? null : item_r21.type) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_nav_0_ng_template_37_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_ng_template_37_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r21 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.openNotification(item_r21 == null ? null : item_r21._id, item_r21 == null ? null : item_r21.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_nav_0_ng_template_37_button_0_i_5_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_nav_0_ng_template_37_button_0_ng_template_6_Template, 1, 1, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 7, item_r21 == null ? null : item_r21.sender == null ? null : item_r21.sender.profilePhoto, item_r21 == null ? null : item_r21.sender == null ? null : item_r21.sender.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r21 == null ? null : item_r21.type) == "comment")("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 10, item_r21 == null ? null : item_r21.sender == null ? null : item_r21.sender.firstName, 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 14, item_r21 == null ? null : item_r21.sender == null ? null : item_r21.sender.lastName, 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.type) == "comment" ? "Cmomented on" : "Reacted to", " your post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, item_r21 == null ? null : item_r21.createdAt), "");
} }
function AppComponent_nav_0_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_ng_template_37_button_0_Template, 18, 20, "button", 66);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.userProfilesService == null ? null : ctx_r9.userProfilesService.myNotifications);
} }
function AppComponent_nav_0_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.userProfilesService == null ? null : ctx_r10.userProfilesService.myNotifications == null ? null : ctx_r10.userProfilesService.myNotifications.length, " ");
} }
function AppComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fakebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_nav_0_Template_input_blur_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.cloaseSearcConatiner(_r3); })("keydown.enter", function AppComponent_nav_0_Template_input_keydown_enter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.searchForUsers(_r3); })("keydown.esc", function AppComponent_nav_0_Template_input_keydown_esc_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.showSearchContainer = false; })("keyup", function AppComponent_nav_0_Template_input_keyup_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.cleartheInput(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_nav_0_div_14_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_li_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.getMyNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_nav_0_small_29_Template, 2, 1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppComponent_nav_0_ng_container_36_Template, 3, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_nav_0_ng_template_37_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AppComponent_nav_0_small_40_Template, 2, 1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-menu", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "See your profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.darkModeToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Dark Mood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "mat-slide-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSearchContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 20, ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.profilePhoto, ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](26, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 27, ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.firstName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.myNotifications == null ? null : ctx_r0.userProfilesService.myNotifications.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkModeNotification", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.myNotifications == null ? null : ctx_r0.userProfilesService.myNotifications.length))("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.myNotifications == null ? null : ctx_r0.userProfilesService.myNotifications.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 29, ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.profilePhoto, ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](56, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 36, ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.firstName), 0, 12), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](58, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 42, ctx_r0.userProfilesService == null ? null : ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.lastName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx_r0.userProfilesService.userProfile == null ? null : ctx_r0.userProfilesService.userProfile.darkMode);
} }
function AppComponent_div_3_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 83);
} }
function AppComponent_div_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r38.reactImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.commentService.showNotification = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.commentSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_3_i_11_Template, 1, 0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_3_ng_template_12_Template, 1, 1, "ng-template", null, 80, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "a few seconds ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkMode", ctx_r1.userProfilesService.userProfile == null ? null : ctx_r1.userProfilesService.userProfile.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx_r1.commentService.ownerOfTheComent == null ? null : ctx_r1.commentService.ownerOfTheComent.profilePhoto, ctx_r1.commentService.ownerOfTheComent == null ? null : ctx_r1.commentService.ownerOfTheComent.gender), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.commentService.commenrOrReact == "comment")("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, ctx_r1.commentService.ownerOfTheComent == null ? null : ctx_r1.commentService.ownerOfTheComent.firstName), 0, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.commentService.commenrOrReact == "comment" ? "Commented" : "Reacted", " on your post");
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(userProfilesService, commentService, router, authService) {
        this.userProfilesService = userProfilesService;
        this.commentService = commentService;
        this.router = router;
        this.authService = authService;
        this.title = 'Fakebook';
        this.darkModeLoading = false;
        this.searchResult = [];
        this.searchLoading = true;
        this.showSearchContainer = false;
        this.reactImgSrc = "";
        userProfilesService.myNotifications = [];
        if (this.authService.isLogin()) {
            this.getProfile();
            this.getMyNotifications();
        }
        this.commentService.listen("comment").subscribe((res) => {
            var _a, _b, _c, _d, _e;
            if ((res === null || res === void 0 ? void 0 : res.author) == ((_a = this.userProfilesService.userProfile) === null || _a === void 0 ? void 0 : _a._id) &&
                ((_b = res === null || res === void 0 ? void 0 : res.user) === null || _b === void 0 ? void 0 : _b._id) != ((_c = this.userProfilesService.userProfile) === null || _c === void 0 ? void 0 : _c._id)) {
                this.getMyNotifications();
                this.commentService.ownerOfTheComent = res === null || res === void 0 ? void 0 : res.user;
                this.commentService.postId = (_e = (_d = res === null || res === void 0 ? void 0 : res.comment) === null || _d === void 0 ? void 0 : _d.post) === null || _e === void 0 ? void 0 : _e._id;
                this.commentService.notificationId = res === null || res === void 0 ? void 0 : res.notificationId;
                this.commentService.commenrOrReact = "comment";
                this.commentService.showNotification = true;
                setTimeout(() => {
                    this.commentService.showNotification = false;
                }, 4000);
            }
        }, err => {
            this.router.navigate(["/error"]);
        });
        this.commentService.listen("reaction").subscribe((res) => {
            var _a, _b, _c, _d, _e, _f;
            if ((res === null || res === void 0 ? void 0 : res.author) == ((_a = this.userProfilesService.userProfile) === null || _a === void 0 ? void 0 : _a._id) &&
                ((_b = res === null || res === void 0 ? void 0 : res.user) === null || _b === void 0 ? void 0 : _b._id) != ((_c = this.userProfilesService.userProfile) === null || _c === void 0 ? void 0 : _c._id)) {
                this.getMyNotifications();
                this.commentService.ownerOfTheComent = res === null || res === void 0 ? void 0 : res.user;
                this.commentService.postId = (_e = (_d = res === null || res === void 0 ? void 0 : res.react) === null || _d === void 0 ? void 0 : _d.post) === null || _e === void 0 ? void 0 : _e._id;
                this.commentService.notificationId = res === null || res === void 0 ? void 0 : res.notificationId;
                this.commentService.commenrOrReact = "react";
                this.reactImgSrc = `assets/${(_f = res === null || res === void 0 ? void 0 : res.react) === null || _f === void 0 ? void 0 : _f.reaction}.png`;
                this.commentService.showNotification = true;
                setTimeout(() => {
                    this.commentService.showNotification = false;
                }, 4000);
            }
        }, err => { this.router.navigate(["/error"]); });
    }
    ngOnInit() {
        if (this.authService.isLogin()) {
            this.getProfile();
            this.getMyNotifications();
        }
    }
    commentSound() {
        this.openNotification(this.commentService.notificationId, this.commentService.postId);
    }
    getProfile() {
        this.userProfilesService.getMyProfile().subscribe((res) => {
            this.userProfilesService.userProfile = res === null || res === void 0 ? void 0 : res.user;
            this.darkModeLoading = false;
        }, err => {
        });
    }
    darkModeToggle() {
        this.darkModeLoading = true;
        this.userProfilesService.darkModeStatus().subscribe(res => {
            this.getProfile();
        }, err => {
        });
    }
    logOut() {
        this.authService.logout().subscribe(res => {
            location.reload();
            this.userProfilesService.userProfile = [];
            localStorage.removeItem("fakebookToken");
            this.router.navigate(["/auth/signin"]);
        }, err => {
        });
    }
    searchForUsers(inputValue) {
        if (inputValue.value.trim() != "") {
            this.showSearchContainer = true;
            this.searchLoading = true;
            this.userProfilesService.searchForUsers(inputValue.value).subscribe(res => {
                this.searchLoading = false;
                if (Array.isArray(res)) {
                    this.searchResult = res;
                }
                else {
                    this.searchResult = [];
                }
            }, err => { });
        }
    }
    cleartheInput(searcValue) {
        if (searcValue.value.trim() == "") {
            this.searchResult = [];
        }
    }
    cloaseSearcConatiner(input) {
        setTimeout(() => {
            this.showSearchContainer = false;
            input.value = "";
        }, 200);
    }
    getMyNotifications() {
        this.userProfilesService.getMyNotifications().subscribe((res) => {
            this.userProfilesService.myNotifications = res === null || res === void 0 ? void 0 : res.newNotification;
        }, err => { });
    }
    openNotification(id, postId) {
        let audio = new Audio();
        audio.src = "assets/Facebook Louder.mp3";
        audio.load();
        audio.play();
        this.commentService.emit("opened", {
            id
        }).then(res => {
            this.router.navigate(["/postDetails", postId]);
            this.commentService.showNotification = false;
            this.getMyNotifications();
        }, err => {
            this.router.navigate(["/error"]);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_socket_service__WEBPACK_IMPORTED_MODULE_2__["CommentSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 7, consts: [["id", "nav", "class", "bg-white", 3, "darkMode", 4, "ngIf"], ["class", "notification", 3, "darkMode", 4, "ngIf"], ["class", "darkModeLoading", 4, "ngIf"], ["id", "nav", 1, "bg-white"], [1, "container-fluid"], [1, "px-3", "pt-2", "d-flex", "d-md-none", "justify-content-between", "align-items-center"], ["routerLink", "/search", 1, "fas", "fa-search"], [1, "text-primary"], [1, "d-flex", "ju", "justify-content-between", "align-items-center"], [1, "mainLogo", "d-none", "d-md-flex", "align-items-center"], ["routerLink", "/homePage", "src", "assets/mainLogo.png", "alt", ""], [1, "position-relative", "mx-2"], [1, "position-relative"], ["type", "search", "placeholder", "Search Fakebook", 3, "blur", "keydown.enter", "keydown.esc", "keyup"], ["searcValue", ""], [1, "fas", "fa-search"], ["class", "searcContainer", 4, "ngIf"], [1, "order-2", "order-md-1", "list-unstyled", "d-flex", "m-0", "pageItems"], ["routerLinkActive", "active", "routerLink", "/homePage"], [1, "bi", "bi-house-door"], ["routerLinkActive", "active", "routerLink", "/peopleYouMayKnow"], [1, "bi", "bi-people"], [1, "order-1", "order-md-2", "list-unstyled", "d-flex", "align-items-center", "m-0", "rightUL"], ["routerLinkActive", "active", "routerLink", "/myProfile", 1, "img", "d-none", "d-md-flex", "align-items-center"], ["alt", "", 3, "src"], [1, "mx-2", "userNameSpan"], ["mat-button", "", 1, "order-2", "bell", "notificationsForLargeScreen", "order-md-1", "position-relative", 3, "matMenuTriggerFor", "click"], ["class", "counter", 4, "ngIf"], [1, "fas", "fa-bell"], [1, "test"], ["notifications", "matMenu"], [1, "notificationsMenuee"], ["mat-menu-item", "", 1, "font-weight-bold"], [4, "ngIf", "ngIfElse"], ["notificationsContent", ""], ["routerLink", "/notifications", 1, "order-2", "bell", "notificationsForMobile", "order-md-1", "position-relative"], [1, "far", "fa-bell"], [1, "order-1", "order-md-2", "pt-md-1", 3, "matMenuTriggerFor"], [1, "d-none", "d-md-block", "bi", "bi-caret-down-fill"], [1, "d-md-none", "fas", "fa-bars"], ["navbar", "matMenu"], [1, "p-2", "navBarMenu"], ["mat-menu-item", ""], ["routerLink", "/myProfile", 1, "d-flex", "py-2"], [1, "mr-3"], [1, "m-0"], [1, "text-secondary"], ["mat-menu-item", "", "routerLink", "/myProfile/layout/about"], [1, "fas", "fa-cog"], [1, "mx-3"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-moon"], [1, "fas", "fa-sign-out-alt"], [1, "searcContainer"], [1, "list-unstyled", "m-0"], ["class", "d-flex justify-content-center", 4, "ngIf", "ngIfElse"], ["searchContent", ""], [1, "d-flex", "justify-content-center"], [1, "lds-ring"], ["noResult", ""], ["class", "p-2 rounded-lg", "style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "p-2", "rounded-lg", 2, "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "mx-2"], [1, "p-2", "rounded-lg"], [1, "counter"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "fas fa-comment-alt nav", 4, "ngIf", "ngIfElse"], ["react", ""], [1, "ml-3"], [1, "fas", "fa-comment-alt", "nav"], ["alt", "", 1, "notificationImg", 3, "src"], [1, "notification"], [1, "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-times", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "align-items-center", 2, "cursor", "pointer", 3, "click"], [1, "mb-0", "commentOrReaction"], [1, "mx-auto", "position-relative", 2, "width", "60px"], ["alt", "", 1, "userImg", 3, "src"], ["class", "fas fa-comment-alt", 4, "ngIf", "ngIfElse"], ["reactionTemplate", ""], [1, "d-none", "d-md-block", "text-primary"], [1, "d-none", "d-md-block", "sign", "bg-primary"], [1, "fas", "fa-comment-alt"], [1, "darkModeLoading"], [1, "text-center"], [1, "mb-2", "text-white", "fas", "fa-moon", 2, "font-size", "50px"], [1, "text-white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 75, 44, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 24, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preventScroll", ctx.userProfilesService.popUP)("marginn", ctx.authService.isLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentService.showNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkModeLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_shared_gender_pipe__WEBPACK_IMPORTED_MODULE_8__["GenderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".navBarMenu i, nav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.img) {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background: #F0F2F5;\n  border-radius: 50%;\n}\n\n.notification[_ngcontent-%COMP%]   .commentOrReaction[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(.userImg), .notification[_ngcontent-%COMP%]   .commentOrReaction[_ngcontent-%COMP%]   .fa-comment-alt[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.notification[_ngcontent-%COMP%] {\n  width: 300px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  z-index: 1000000;\n  padding: 10px;\n}\n\n.notification[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.notification[_ngcontent-%COMP%]   .commentOrReaction[_ngcontent-%COMP%]   .fa-comment-alt[_ngcontent-%COMP%] {\n  background: #48D06A;\n  color: white;\n  padding: 8px;\n  border-radius: 50%;\n  right: -10px;\n  bottom: 0;\n}\n\n.notification[_ngcontent-%COMP%]   .commentOrReaction[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(.userImg) {\n  width: 20px;\n  height: 20px;\n  bottom: 5px;\n  right: -5px;\n}\n\n.notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.notification[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.notification.darkMode[_ngcontent-%COMP%] {\n  background: #242526 !important;\n  color: #B8BBBF !important;\n}\n\n.notification.darkMode[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  background: rgba(227, 227, 227, 0.1);\n}\n\n.notification.darkMode[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\nnav[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  position: fixed;\n  width: 100%;\n  z-index: 11111111111111110000;\n  top: 0;\n}\n\nnav[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: #F02849;\n  color: white;\n  padding: 4px;\n  border-radius: 50%;\n  position: absolute;\n  line-height: 1;\n  top: 0;\n  right: -6px;\n  font-size: small;\n}\n\nnav[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%] {\n  height: 60vh;\n  background: white;\n  position: absolute;\n  padding: 20px;\n  overflow: auto;\n  width: 100%;\n  top: 50px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\nnav[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nnav[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #E3E4E5;\n}\n\nnav[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  margin: 8px;\n  border: 2px solid gray;\n  border-color: #c4c4c4 transparent transparent transparent;\n}\n\nnav[_ngcontent-%COMP%]   .mainLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   .mainLogo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: #F0F2F5;\n  padding: 12px 5px 8px 35px;\n  border-radius: 20px;\n  width: 280px;\n}\n\nnav[_ngcontent-%COMP%]   .mainLogo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 12px;\n}\n\nnav[_ngcontent-%COMP%]   .mainLogo[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 15px;\n}\n\nnav[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid transparent;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 15px;\n  width: 80px;\n  text-align: center;\n  color: #65676b;\n  font-size: 25px;\n}\n\nnav[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   i[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\nnav[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #1877f2 !important;\n}\n\nnav[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1877f2 !important;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   .userNameSpan[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 5px;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.img) {\n  margin-left: 10px;\n  font-size: 20px;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover {\n  background: #E4E6E9;\n}\n\nnav[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #1877f2 !important;\n  background: #DBE7F2;\n}\n\n  .cdk-overlay-container {\n  top: 10px;\n}\n\n  .navBarMenu button {\n  font-size: medium;\n  height: auto;\n}\n\n  .navBarMenu img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n@media only screen and (max-width: 600px) {\n    .test {\n    display: none !important;\n  }\n    .navBarMenu img {\n    width: 40px;\n    height: 40px;\n  }\n    .navBarMenu h2 {\n    font-size: medium;\n  }\n    .notification {\n    width: 100% !important;\n    left: 0 !important;\n    top: 0 !important;\n    bottom: auto !important;\n    z-index: 1111111111111111 !important;\n    border-radius: 0 !important;\n  }\n    .notificationsForLargeScreen {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n    .notificationsForMobile {\n    display: none;\n  }\n}\n\nnav.darkMode[_ngcontent-%COMP%] {\n  background: #242526 !important;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B8BBBF !important;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .pageItems[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #3A3B3C !important;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .mainLogo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nav.darkMode[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%], nav.darkMode[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #B8BBBF !important;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #B8BBBF;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #4E4F50;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.img) {\n  background-color: rgba(227, 227, 227, 0.1);\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .rightUL[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #263951;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%] {\n  background: #242526;\n  color: #D0D2D7;\n}\n\nnav.darkMode[_ngcontent-%COMP%]   .searcContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #292A2C;\n}\n\n  .navBarMenu.darkMode {\n  background: #242526 !important;\n}\n\n  .navBarMenu.darkMode i {\n  background-color: rgba(227, 227, 227, 0.1) !important;\n  color: #B8BBBF !important;\n}\n\n  .navBarMenu.darkMode button,   .navBarMenu.darkMode h2 {\n  color: #B8BBBF !important;\n}\n\n  .navBarMenu.darkMode .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n  .darkModeNotification {\n  background-color: #242526 !important;\n}\n\n  .darkModeNotification .mat-menu-item {\n  color: #B8BBBF !important;\n}\n\n  .darkModeNotification .mat-menu-item:hover {\n  background-color: #3A3B3C;\n}\n\n  {\n  \n  \n  \n}\n\n  .mat-menu-item {\n  line-height: 20px !important;\n  height: auto !important;\n  padding: 10px 16px !important;\n  white-space: normal !important;\n}\n\n  .test::-webkit-scrollbar {\n  width: 7px !important;\n}\n\n  .test::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #dfdddd !important;\n  border-radius: 10px !important;\n}\n\n  .test::-webkit-scrollbar-thumb {\n  background: #c7c7c7 !important;\n  border-radius: 10px !important;\n}\n\n  .test::-webkit-scrollbar-thumb:hover {\n  background: #dfdddd !important;\n}\n\n  .test {\n  min-height: 70vh !important;\n  max-height: 70vh !important;\n  min-width: 300px !important;\n}\n\n  .test .notificationImg,   .test .fa-comment-alt.nav {\n  position: absolute !important;\n  bottom: 0 !important;\n  right: -6px !important;\n}\n\n  .test .fa-comment-alt.nav {\n  color: white;\n  background: #48D06A;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n  .test .notificationImg {\n  width: 25px !important;\n  height: 25px !important;\n}\n\n  .test .notificationsMenuee {\n  padding-top: 10px;\n}\n\n  .test .mat-menu-panel {\n  min-height: auto !important;\n}\n\n  .mat-menu-content {\n  padding: 0 !important;\n}\n\n  .mat-menu-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.marginn[_ngcontent-%COMP%] {\n  margin-top: 61px;\n}\n\n@media only screen and (max-width: 767px) {\n  .bell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    top: 1px !important;\n    right: 1px !important;\n  }\n\n  .pageItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 55px !important;\n  }\n\n  .rightUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.img) {\n    background: transparent !important;\n  }\n\n  .marginn[_ngcontent-%COMP%] {\n    margin-top: 101px;\n  }\n}\n\n.darkModeLoading[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 111111111111111100000000000000000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 992px) {\n  .rightUL[_ngcontent-%COMP%]   .userNameSpan[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  right: 12px;\n  bottom: 25px;\n}\n\n.preventScroll[_ngcontent-%COMP%] {\n  height: 100vh !important;\n  overflow: hidden !important;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFBUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBRVo7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ1o7O0FBSUk7RUFBRyxTQUFBO0FBRFA7O0FBRUk7RUFBVyx1QkFBQTtBQUNmOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUFJO0VBQ0ksb0NBQUE7QUFFUjs7QUFEUTtFQUNJLHlCQUFBO0FBR1o7O0FBQ0E7RUFDSSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxNQUFBO0FBRUo7O0FBQVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRVo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFBSTtFQUNJLG1CQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5REFBQTtBQUVSOztBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBWjs7QUFFUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQVo7O0FBRVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQVo7O0FBRVE7RUFBYyxlQUFBO0FBQ3RCOztBQUVRO0VBQ0ksb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFBWjs7QUFDYTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDakI7O0FBRVM7RUFDSSx5QkFBQTtBQUFiOztBQUVTO0VBQ0ksMkNBQUE7QUFBYjs7QUFDYTtFQUNHLHlCQUFBO0FBQ2hCOztBQUlRO0VBQWUsaUJBQUE7QUFEdkI7O0FBRVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFBWjs7QUFDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDaEI7O0FBRVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBWjs7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQURaOztBQUlZO0VBQ0ksbUJBQUE7QUFGaEI7O0FBS1E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBSFo7O0FBT0E7RUFDSSxTQUFBO0FBSko7O0FBT0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFTSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQUjs7QUFZSTtFQUNJO0lBQU8sd0JBQUE7RUFSYjtFQVVTO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFSYjtFQVVTO0lBQUksaUJBQUE7RUFQYjtFQVNTO0lBQ0Msc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQ0FBQTtJQUNBLDJCQUFBO0VBUFY7RUFTTTtJQUE4QixhQUFBO0VBTnBDO0FBQ0Y7O0FBT0k7RUFDRztJQUF5QixhQUFBO0VBSjlCO0FBQ0Y7O0FBTUE7RUFDSSw4QkFBQTtBQUhKOztBQUtRO0VBRUkseUJBQUE7QUFKWjs7QUFHWTtFQUFTLG9DQUFBO0FBQXJCOztBQUlJO0VBQ0kscURBQUE7QUFGUjs7QUFJSTtFQUEyQyx5QkFBQTtBQUQvQzs7QUFHUTtFQUNJLGNBQUE7QUFEWjs7QUFFWTtFQUFTLHlCQUFBO0FBQ3JCOztBQUNRO0VBQ0ksMENBQUE7QUFDWjs7QUFDUTtFQUFTLG1CQUFBO0FBRWpCOztBQUFJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRVI7O0FBRFE7RUFDSSxtQkFBQTtBQUdaOztBQUVJO0VBQ0ksOEJBQUE7QUFDUjs7QUFBUTtFQUNJLHFEQUFBO0VBQ0EseUJBQUE7QUFFWjs7QUFBUTtFQUNJLHlCQUFBO0FBRVo7O0FBQ1k7RUFBUyx5QkFBQTtBQUVyQjs7QUFDSTtFQUNJLG9DQUFBO0FBQ1I7O0FBQ1E7RUFDSSx5QkFBQTtBQUNaOztBQUFZO0VBQVMseUJBQUE7QUFHckI7O0FBQ0k7RUFVUyxVQUFBO0VBTUosV0FBQTtFQU1BLG9CQUFBO0FBakJUOztBQUpRO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFNWjs7QUFKUTtFQUNJLHFCQUFBO0FBTVo7O0FBSFM7RUFDRSw0Q0FBQTtFQUNBLDhCQUFBO0FBS1g7O0FBRFE7RUFDRyw4QkFBQTtFQUNBLDhCQUFBO0FBR1g7O0FBQ1M7RUFDRSw4QkFBQTtBQUNYOztBQUVRO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQVo7O0FBRVE7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBWjs7QUFFUTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURaOztBQUdRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQURaOztBQUtRO0VBQ0ksaUJBQUE7QUFIWjs7QUFNUTtFQUFnQiwyQkFBQTtBQUh4Qjs7QUFLSTtFQUNJLHFCQUFBO0FBSFI7O0FBSVE7RUFBSyxXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0FBQ3RDOztBQUVBO0VBQVUsZ0JBQUE7QUFFVjs7QUFEQTtFQUVRO0lBQ0ksbUJBQUE7SUFDQSxxQkFBQTtFQUdWOztFQUVXO0lBQ0ksc0JBQUE7RUFDZjs7RUFJVTtJQUFjLGtDQUFBO0VBQXhCOztFQUVNO0lBQVUsaUJBQUE7RUFFaEI7QUFDRjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFFUTtJQUFlLDJCQUFBO0VBR3JCO0FBQ0Y7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBSUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGMEYyRjU7ICAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuJXJlYWN0aW9uc0ltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudE9yUmVhY3Rpb24ge1xyXG4gICAgICAgIC5mYS1jb21tZW50LWFsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0OEQwNkE7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICBcclxuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgQGV4dGVuZCAlcmVhY3Rpb25zSW1nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWc6bm90KC51c2VySW1nKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgQGV4dGVuZCAlcmVhY3Rpb25zSW1nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBwIHttYXJnaW46IDA7fVxyXG4gICAgLmZhLXRpbWVzIHtwYWRkaW5nOiA1cHggIWltcG9ydGFudDt9XHJcblxyXG59XHJcbi5ub3RpZmljYXRpb24uZGFya01vZGUge1xyXG4gICAgYmFja2dyb3VuZDogIzI0MjUyNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNCOEJCQkYgIWltcG9ydGFudDtcclxuICAgIC5mYS10aW1lcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpOztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEY1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxubmF2IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDExMTExMTExMTExMTExMTExMTExO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLmJlbGwge1xyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwMjg0OTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogLTZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAuc2VhcmNDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0UzRTRFNTtcclxuICAgIH1cclxuICAgIC5sZHMtcmluZyBkaXYge1xyXG4gICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2M0YzRjNCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbiAgICAubWFpbkxvZ28ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRjJGNTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCA1cHggOHB4IDM1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnBsYWNlaG9sZGVye2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICB9XHJcbiAgICAucGFnZUl0ZW1zIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiAjNjU2NzZiO1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBsaTpub3QoLmFjdGl2ZSkgaTpob3ZlciAge1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTg3N2YyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMxODc3ZjIgIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHRVTCB7XHJcbiAgICAgICAgLnVzZXJOYW1lU3BhbiB7Zm9udC1zaXplOiBtZWRpdW07fVxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpub3QoLmltZykge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVpY29uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U0RTZFOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IzE4NzdmMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREJFN0YyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAgICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwICAgLm5hdkJhck1lbnUge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBAZXh0ZW5kICVpY29uXHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiBcclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC50ZXN0IHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgIC5uYXZCYXJNZW51IHtcclxuICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBoMiB7Zm9udC1zaXplOiBtZWRpdW07fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAubm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDExMTExMTExMTExMTExMTEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAubm90aWZpY2F0aW9uc0ZvckxhcmdlU2NyZWVuIHtkaXNwbGF5Om5vbmV9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICAgICAubm90aWZpY2F0aW9uc0Zvck1vYmlsZSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICB9XHJcbn1cclxubmF2LmRhcmtNb2RlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgIC5wYWdlSXRlbXMge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQjNDICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgICAgICBjb2xvcjogI0I4QkJCRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYWluTG9nbyBpbnB1dCwgLmZhLXNlYXJjaCw6OnBsYWNlaG9sZGVyIHtjb2xvcjogI0I4QkJCRiAhaW1wb3J0YW50O31cclxuICAgIC5yaWdodFVMIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQjhCQkJGO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RjUwO31cclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bm90KC5pbWcpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtiYWNrZ3JvdW5kOiAjMjYzOTUxO31cclxuICAgIH1cclxuICAgIC5zZWFyY0NvbnRhaW5lciAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNDI1MjY7XHJcbiAgICAgICAgY29sb3I6ICNEMEQyRDc7XHJcbiAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyQTJDO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAgIHtcclxuICAgIC5uYXZCYXJNZW51LmRhcmtNb2RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjQyNTI2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI0I4QkJCRiAhaW1wb3J0YW50OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbixoMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQjhCQkJGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQzt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhcmtNb2RlTm90aWZpY2F0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjYgIWltcG9ydGFudDtcclxuICAgICAgICAgIFxyXG4gICAgICAgIC5tYXQtbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6ICNCOEJCQkYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgJjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNBM0IzQzt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgICA6Om5nLWRlZXAgIHtcclxuICAgICAgICAubWF0LW1lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVzdDo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLyogVHJhY2sgKi9cclxuICAgICAgICAgLnRlc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigyMjMsIDIyMSwgMjIxKSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAvKiBIYW5kbGUgKi9cclxuICAgICAgICAudGVzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE5OSwgMTk5LCAxOTkpICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgICAgICAgIC50ZXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMjEsIDIyMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAudGVzdCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgJW5vdGlmaWNhdGlvbm5uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICByaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtY29tbWVudC1hbHQubmF2IHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlbm90aWZpY2F0aW9ubm47XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ4RDA2QTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbkltZyAge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgQGV4dGVuZCAlbm90aWZpY2F0aW9ubm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbnNNZW51ZWV7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAubWF0LW1lbnUtcGFuZWx7bWluLWhlaWdodDogIGF1dG8gIWltcG9ydGFudDt9XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxuICAgICAgICBpbWcge3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4gICAgfSBcclxuICAgIH1cclxuLm1hcmdpbm4ge21hcmdpbi10b3A6IDYxcHg7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuYmVsbCB7XHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICB0b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICByaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZ2VJdGVtcyB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDU1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHRVTCB7XHJcbiAgICAgICAgICAgIGxpOm5vdCguaW1nKSB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXJnaW5uIHttYXJnaW4tdG9wOiAxMDFweDt9XHJcbn1cclxuXHJcbi5kYXJrTW9kZUxvYWRpbmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIHotaW5kZXg6IDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnJpZ2h0VUwge1xyXG4gICAgICAgIC51c2VyTmFtZVNwYW4ge2ZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDt9XHJcbiAgICB9XHJcbn1cclxuLnNpZ24ge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJvdHRvbTogMjVweDsgICAgXHJcbn1cclxuLnByZXZlbnRTY3JvbGwge1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "UnZl":
/*!**********************************************!*\
  !*** ./src/app/shared/reaction-type.pipe.ts ***!
  \**********************************************/
/*! exports provided: ReactionTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionTypePipe", function() { return ReactionTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReactionTypePipe {
    transform(users, reactionType) {
        if (!reactionType)
            return users;
        return users.filter((item) => (item === null || item === void 0 ? void 0 : item.reaction) == reactionType);
    }
}
ReactionTypePipe.ɵfac = function ReactionTypePipe_Factory(t) { return new (t || ReactionTypePipe)(); };
ReactionTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reactionType", type: ReactionTypePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "hkG8");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _notFound_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notFound/not-found/not-found.component */ "3DGB");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "t2gh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _notFound_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]] }); })();


/***/ }),

/***/ "ZPLk":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(friends, inputValue) {
        if (!inputValue)
            return friends;
        return friends.filter(i => {
            if (i.firstName) {
                return i.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
                    i.lastName.toLowerCase().includes(inputValue.toLowerCase());
            }
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ "bVNP":
/*!****************************************************!*\
  !*** ./src/app/services/comment-socket.service.ts ***!
  \****************************************************/
/*! exports provided: CommentSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentSocketService", function() { return CommentSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CommentSocketService {
    constructor() {
        this.showNotification = false;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`, { query: { token: `${localStorage.getItem('fakebookToken')}` } });
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((Subscriber) => {
            this.socket.on(eventName, (data) => {
                Subscriber.next(data);
            });
        });
    }
    emit(eventname, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.socket.emit(eventname, data);
        });
    }
}
CommentSocketService.ɵfac = function CommentSocketService_Factory(t) { return new (t || CommentSocketService)(); };
CommentSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CommentSocketService, factory: CommentSocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cASh":
/*!**************************************!*\
  !*** ./src/app/guarda/user.guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLogin()) {
            this.router.navigate(["/auth/signin"]);
            return false;
        }
        return true;
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hkG8":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");


class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        let token = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken()}`
            }
        });
        return next.handle(token);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "k08z":
/*!**********************************************!*\
  !*** ./src/app/shared/most-reaction.pipe.ts ***!
  \**********************************************/
/*! exports provided: MostReactionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostReactionPipe", function() { return MostReactionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MostReactionPipe {
    constructor(renrder) {
        this.renrder = renrder;
    }
    transform(numOfLove, numOfSad, numOfWow, numOfHaha, numOfAngr, numOfLike, img) {
        let numberOfReactions = [numOfLove, numOfSad, numOfWow, numOfHaha, numOfAngr, numOfLike];
        let max;
        let reaction = ['love', 'sad', 'wow', 'haha', 'angry', 'like'];
        max = Math.max(...numberOfReactions);
        let imgSrc = reaction[numberOfReactions.indexOf(max)];
        if (max != 0) {
            this.renrder.removeClass(img, "d-none");
            return `assets/${imgSrc}.png`;
        }
        else {
            this.renrder.addClass(img, "d-none");
            return '';
        }
    }
}
MostReactionPipe.ɵfac = function MostReactionPipe_Factory(t) { return new (t || MostReactionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MostReactionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mostReaction", type: MostReactionPipe, pure: false });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    signup(userInfo) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/register`, userInfo);
    }
    signin(userInfo) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/login`, userInfo);
    }
    getToken() {
        return localStorage.getItem('fakebookToken');
    }
    logout() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/logout`, '');
    }
    isloggedIn() {
        return !!localStorage.getItem('fakebookToken');
    }
    isLogin() {
        return !!localStorage.getItem("fakebookToken");
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "t2gh":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            console.log(err);
            if (!err.url.includes('login') && !err.url.includes('register')) {
                if ([401, 403].indexOf(err.status) !== -1) {
                    this.router.navigate(["/auth/signin"]);
                    localStorage.removeItem("fakebookToken");
                }
                else {
                    this.router.navigate(["/error"]);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guarda_not_user_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guarda/not-user.guard */ "BmlJ");
/* harmony import */ var _guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guarda/user.guard */ "cASh");
/* harmony import */ var _notFound_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notFound/not-found/not-found.component */ "3DGB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        canActivate: [_guarda_not_user_guard__WEBPACK_IMPORTED_MODULE_1__["NotUserGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-view-auth-auth-module */ "src-app-view-auth-auth-module").then(__webpack_require__.bind(null, /*! src/app/view/auth/auth.module */ "3y/0")).then(m => m.AuthModule)
    },
    {
        path: 'myProfile',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => Promise.all(/*! import() | src-app-view-user-profile-user-profile-module */[__webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~736daa40"), __webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~7e44cae5"), __webpack_require__.e("default~src-app-view-user-profile-user-profile-module~src-app-view-visit-user-visit-user-module"), __webpack_require__.e("common"), __webpack_require__.e("src-app-view-user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! src/app/view/user-profile/user-profile.module */ "n6yD")).then(m => m.UserProfileModule)
    },
    {
        path: 'postDetails/:id',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => Promise.all(/*! import() | src-app-view-post-details-post-details-module */[__webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~736daa40"), __webpack_require__.e("src-app-view-post-details-post-details-module")]).then(__webpack_require__.bind(null, /*! src/app/view/post-details/post-details.module */ "b9yr")).then(m => m.PostDetailsModule)
    },
    {
        path: 'peopleYouMayKnow',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => Promise.all(/*! import() | src-app-view-people-you-may-know-people-you-may-know-module */[__webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~736daa40"), __webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~7e44cae5"), __webpack_require__.e("src-app-view-people-you-may-know-people-you-may-know-module")]).then(__webpack_require__.bind(null, /*! src/app/view/people-you-may-know/people-you-may-know.module */ "3nh0")).then(m => m.PeopleYouMayKnowModule)
    },
    {
        path: 'visit/:id',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => Promise.all(/*! import() | src-app-view-visit-user-visit-user-module */[__webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~736daa40"), __webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~7e44cae5"), __webpack_require__.e("default~src-app-view-user-profile-user-profile-module~src-app-view-visit-user-visit-user-module"), __webpack_require__.e("src-app-view-visit-user-visit-user-module")]).then(__webpack_require__.bind(null, /*! src/app/view/visit-user/visit-user.module */ "R1dk")).then(m => m.VisitUserModule)
    },
    {
        path: 'homePage',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => Promise.all(/*! import() | src-app-view-home-page-home-page-module */[__webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~736daa40"), __webpack_require__.e("default~src-app-view-home-page-home-page-module~src-app-view-people-you-may-know-people-you-may-know~7e44cae5"), __webpack_require__.e("common"), __webpack_require__.e("src-app-view-home-page-home-page-module")]).then(__webpack_require__.bind(null, /*! src/app/view/home-page/home-page.module */ "0FjA")).then(m => m.HomePageModule)
    },
    {
        path: 'search',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-view-users-search-users-search-module */ "src-app-view-users-search-users-search-module").then(__webpack_require__.bind(null, /*! src/app/view/users-search/users-search.module */ "e0pe")).then(m => m.UsersSearchModule)
    },
    {
        path: 'notifications',
        canActivate: [_guarda_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-view-notifications-for-mobile-notifications-for-mobile-module */ "src-app-view-notifications-for-mobile-notifications-for-mobile-module").then(__webpack_require__.bind(null, /*! src/app/view/notifications-for-mobile/notifications-for-mobile.module */ "d/c2")).then(m => m.NotificationsForMobileModule)
    },
    {
        path: "**",
        component: _notFound_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map