(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-auth-auth-module"],{

/***/ "39rN":
/*!******************************************************!*\
  !*** ./src/app/view/auth/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignupComponent_i_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 43);
} }
function SignupComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", day_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r10);
} }
function SignupComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", month_r11, " ");
} }
function SignupComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r13);
} }
function SignupComponent_p_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.signupError);
} }
function SignupComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye": a0, "fa-eye-slash": a1 }; };
class SignupComponent {
    constructor(fb, rendere, authservice, title, router, userservice) {
        this.fb = fb;
        this.rendere = rendere;
        this.authservice = authservice;
        this.title = title;
        this.router = router;
        this.userservice = userservice;
        this.signupErrorLoading = false;
        this.signupError = "";
        this.textOrPassword = true;
        this.daysOfBirth = [];
        this.yearsOfBirth = [];
        this.monthsOfBirth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.subscriptions = [];
        title.setTitle('Sign Up');
    }
    get inputs() {
        return this.signUpForm.controls;
    }
    ngOnInit() {
        for (let i = 1; i <= 31; i++)
            this.daysOfBirth.push(i);
        for (let i = 2021; i >= 1905; i--)
            this.yearsOfBirth.push(i);
        this.signUpForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            day: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            month: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    signUp(userInfo) {
        if (this.signUpForm.status == 'VALID') {
            this.signupErrorLoading = true;
            let user = {
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                password: userInfo.password,
                birthDate: `${userInfo.year}/${userInfo.month.length == 1 ? '0' + userInfo.month : userInfo.month}/${userInfo.day.length == 1 ? '0' + userInfo.day : userInfo.day}`,
                gender: userInfo.gender
            };
            this.subscriptions.push(this.authservice.signup(user).subscribe((res) => {
                this.signupErrorLoading = false;
                this.signupError = '';
                this.userservice.myNotifications = [];
                localStorage.setItem('fakebookToken', res.token);
                location.reload();
                this.subscriptions.push(this.userservice.getMyNotifications().subscribe((res) => {
                    this.userservice.myNotifications = res === null || res === void 0 ? void 0 : res.newNotification;
                    this.subscriptions.push(this.userservice.getMyProfile().subscribe((res) => {
                        this.userservice.userProfile = res === null || res === void 0 ? void 0 : res.user;
                        this.router.navigate(["/homePage"]);
                    }, err => {
                    }));
                }, err => { }));
            }, err => {
                this.signupErrorLoading = false;
                this.signupError = err.error.error;
            }));
        }
    }
    showErrorMessage(errorText, control) {
        var _a, _b;
        if (((_a = this.signUpForm.get(control)) === null || _a === void 0 ? void 0 : _a.touched) && ((_b = this.signUpForm.get(control)) === null || _b === void 0 ? void 0 : _b.errors)) {
            this.rendere.removeClass(errorText, 'd-none');
        }
        else {
            this.rendere.addClass(errorText, 'd-none');
        }
    }
    hideErrorMessage(errorText) {
        this.rendere.addClass(errorText, 'd-none');
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 72, vars: 28, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "100vh", "background-color", "#F0F2F5", "overflow", "hidden"], [1, "signUp", "py-4", "position-relative"], ["routerLink", "/auth/signin", 1, "fas", "fa-times", "signupp"], [1, "px-3"], [1, "font-weight-bold", "mb-1"], [1, "easy", "my-2"], [3, "formGroup", "ngSubmit"], [1, "px-3", "pt-3", "upperInputs"], [1, "d-flex"], [1, "position-relative", "w-50", "mr-3"], ["type", "text", "formControlName", "firstName", "placeholder", "First name", 1, "w-100", 3, "keyup", "focus", "blur"], [1, "errorBG", "m-0", "d-none"], ["firstErr", ""], [1, "position-relative", "w-50"], ["type", "text", "formControlName", "lastName", "placeholder", "Surname", 1, "w-100", 3, "keyup", "focus", "blur"], ["lastErr", ""], [1, "position-relative"], ["type", "email", "formControlName", "email", "placeholder", "Email address", 1, "w-100", 3, "keyup", "focus", "blur"], ["emailErr", ""], ["formControlName", "password", "placeholder", "New password", 1, "w-100", 3, "type", "keyup", "focus", "blur"], [1, "fas", 3, "click"], ["passErr", ""], [1, "px-3", "pt-2", "lowerInputs"], [1, "d-flex", "mb-2", "justify-content-between", "align-items-center"], [1, "dateAndGender"], [1, "fas", "fa-question-circle"], ["class", "fas fa-exclamation-circle", "style", "color: #BE4B49;padding-right:10px;", 4, "ngIf"], ["formControlName", "day"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "month"], ["formControlName", "year"], [1, "px-3", "pt-3", "lowerInputs"], [1, "mb-2", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "labParent"], [1, "labl"], ["formControlName", "gender", "type", "radio", "name", "gender", "value", "female"], ["formControlName", "gender", "type", "radio", "name", "gender", "value", "male"], [2, "width", "32%"], ["class", "responseError m-3 p-2", 4, "ngIf"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-success", "green", 3, "disabled"], ["style", "height:50px", 4, "ngIf"], [1, "fas", "fa-exclamation-circle", 2, "color", "#BE4B49", "padding-right", "10px"], [3, "value"], [1, "responseError", "m-3", "p-2"], [2, "height", "50px"], [1, "lds-facebook"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "It's quick and easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() { return ctx.signUp(ctx.signUpForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SignupComponent_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.showErrorMessage(_r0, "firstName"); })("focus", function SignupComponent_Template_input_focus_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.showErrorMessage(_r0, "firstName"); })("blur", function SignupComponent_Template_input_blur_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.hideErrorMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "What's your name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SignupComponent_Template_input_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.showErrorMessage(_r1, "lastName"); })("focus", function SignupComponent_Template_input_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.showErrorMessage(_r1, "lastName"); })("blur", function SignupComponent_Template_input_blur_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.hideErrorMessage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 11, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "What's your surname name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SignupComponent_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return ctx.showErrorMessage(_r2, "email"); })("focus", function SignupComponent_Template_input_focus_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return ctx.showErrorMessage(_r2, "email"); })("blur", function SignupComponent_Template_input_blur_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return ctx.hideErrorMessage(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 11, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Enter a valid Email, You'll use this when you log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SignupComponent_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return ctx.showErrorMessage(_r3, "password"); })("focus", function SignupComponent_Template_input_focus_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return ctx.showErrorMessage(_r3, "password"); })("blur", function SignupComponent_Template_input_blur_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return ctx.hideErrorMessage(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_i_click_29_listener() { return ctx.textOrPassword = !ctx.textOrPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 11, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Enter at least six numbers or letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Date of birth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SignupComponent_i_38_Template, 1, 0, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SignupComponent_option_43_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, SignupComponent_option_47_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, SignupComponent_option_51_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, SignupComponent_p_67_Template, 2, 1, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, SignupComponent_div_71_Template, 5, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inputsError", (ctx.inputs.firstName.errors == null ? null : ctx.inputs.firstName.errors.required) && ctx.inputs.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inputsError", (ctx.inputs.lastName.errors == null ? null : ctx.inputs.lastName.errors.required) && ctx.inputs.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inputsError", ctx.inputs.email.errors !== null && ctx.inputs.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inputsError", ctx.inputs.password.errors !== null && ctx.inputs.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.textOrPassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c0, ctx.textOrPassword, !ctx.textOrPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.inputs.day.errors == null ? null : ctx.inputs.day.errors.required) && ctx.inputs.day.touched || (ctx.inputs.month.errors == null ? null : ctx.inputs.month.errors.required) && ctx.inputs.month.touched || (ctx.inputs.year.errors == null ? null : ctx.inputs.year.errors.required) && ctx.inputs.year.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("errorr", (ctx.inputs.day.errors == null ? null : ctx.inputs.day.errors.required) && ctx.inputs.day.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.daysOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("errorr", (ctx.inputs.month.errors == null ? null : ctx.inputs.month.errors.required) && ctx.inputs.month.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monthsOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("errorr", (ctx.inputs.year.errors == null ? null : ctx.inputs.year.errors.required) && ctx.inputs.year.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yearsOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signupError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.signUpForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signupErrorLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], styles: [".signUp[_ngcontent-%COMP%] {\n  width: 35%;\n  margin: 50px auto;\n}\n.signUp[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.signUp[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  font-size: 25px;\n  position: absolute;\n  right: 15px;\n  cursor: pointer;\n}\n.signUp[_ngcontent-%COMP%]   p.easy[_ngcontent-%COMP%] {\n  color: #606770;\n  font-size: 15px;\n}\n.signUp[_ngcontent-%COMP%]   p.dateAndGender[_ngcontent-%COMP%] {\n  color: #606770;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0;\n}\n.signUp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ccd0d5;\n  -webkit-appearance: none;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  background-size: 14px;\n  padding: 0 8px;\n  padding-right: 20px;\n  height: 35px;\n  border-radius: 5px;\n  width: 32%;\n}\n.signUp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:not(:last-child), .signUp[_ngcontent-%COMP%]   .labParent[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 2%;\n}\n.signUp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.signUp[_ngcontent-%COMP%]   .labParent[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n.signUp[_ngcontent-%COMP%]   .labl[_ngcontent-%COMP%] {\n  border: 1px solid #ccd0d5;\n  height: 35px;\n  width: 32%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding: 0 8px;\n}\n.signUp[_ngcontent-%COMP%]   button.green[_ngcontent-%COMP%] {\n  padding: 5px 65px !important;\n}\n.signUp[_ngcontent-%COMP%]   .errorBG[_ngcontent-%COMP%] {\n  z-index: 111;\n  background-color: #BE4B49;\n  color: white;\n  border-radius: 2px;\n  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);\n  padding: 10px;\n  left: -94%;\n  top: 0;\n  position: absolute;\n  width: 90%;\n}\n.signUp[_ngcontent-%COMP%]   .errorBG[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -15px;\n  top: 12px;\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-left: 15px solid #BE4B49;\n  border-bottom: 10px solid transparent;\n}\n.fa-eye[_ngcontent-%COMP%], .fa-eye-slash[_ngcontent-%COMP%] {\n  top: 12px;\n}\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .errorBG[_ngcontent-%COMP%] {\n    width: 50% !important;\n    left: -54% !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .errorBG[_ngcontent-%COMP%] {\n    top: 50px !important;\n    left: 0% !important;\n  }\n  .errorBG[_ngcontent-%COMP%]::after {\n    top: -15px !important;\n    left: 10px !important;\n    border-top: 0px solid transparent !important;\n    border-left: 10px solid transparent !important;\n    border-right: 10px solid transparent !important;\n    border-bottom: 15px solid #BE4B49 !important;\n  }\n}\n\nselect[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\nselect[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\nselect[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: gray;\n  border-radius: 10px;\n}\n\nselect[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUFJLFNBQUE7QUFHUjtBQUZJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJUjtBQUZJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFJUjtBQUZJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFJUjtBQUZJO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUVBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHUjtBQUFJO0VBQTJELGdCQUFBO0FBRy9EO0FBRkk7RUFBTyxTQUFBO0FBS1g7QUFKSTtFQUFrQixZQUFBO0FBT3RCO0FBTkk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFRUjtBQU5JO0VBQ0ksNEJBQUE7QUFRUjtBQU5JO0VBWUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIUjtBQWpCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7QUFtQlo7QUFGQTtFQUVBLFNBQUE7QUFJQTtBQUZBO0VBQ0k7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0k7SUFTQSxvQkFBQTtJQUNBLG1CQUFBO0VBSEY7RUFOTTtJQUNJLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSw0Q0FBQTtJQUNBLDhDQUFBO0lBQ0EsK0NBQUE7SUFDQSw0Q0FBQTtFQVFWO0FBQ0Y7QUFIQSxVQUFBO0FBQ0E7RUFDSSxXQUFBO0FBS0o7QUFGRSxVQUFBO0FBQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFGRSxXQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFGRSxvQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFLSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnblVwIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGhyIHttYXJnaW46IDA7fVxyXG4gICAgLmZhLXRpbWVzIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIHAuZWFzeSB7XHJcbiAgICAgICAgY29sb3I6ICM2MDY3NzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcC5kYXRlQW5kR2VuZGVyIHtcclxuICAgICAgICBjb2xvcjogIzYwNjc3MDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2QwZDU7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2Fycm93RG93bi5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgNXB4IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNlbGVjdDpub3QoOmxhc3QtY2hpbGQpLC5sYWJQYXJlbnQgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7bWFyZ2luLXJpZ2h0OiAyJTt9XHJcbiAgICBsYWJlbCB7bWFyZ2luOiAwO31cclxuICAgIC5sYWJQYXJlbnQgPiBkaXYge2ZsZXgtZ3JvdzogNDt9XHJcbiAgICAubGFibCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjZDBkNTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5ncmVlbiB7ICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDVweCA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZXJyb3JCRyB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI0JFNEI0OTsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHotaW5kZXg6IDExMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkU0QjQ5O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxMzkgMyAwIC8gNzUlKSwgMCAxcHggMTBweCByZ2IoMCAwIDAgLyAzNSUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogLTk0JTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuLmZhLWV5ZSwuZmEtZXllLXNsYXNoXHJcbiB7XHJcbnRvcDoxMnB4XHJcbiB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmVycm9yQkcgIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IC01NCUgIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpICB7XHJcbiAgICAuZXJyb3JCRyAge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjQkU0QjQ5ICFpbXBvcnRhbnQ7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB0b3A6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxufVxyXG4vKiB3aWR0aCAqL1xyXG5zZWxlY3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIHNlbGVjdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICBzZWxlY3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgc2VsZWN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5OyBcclxuICB9XHJcbiAgXHJcblxyXG4iXX0= */", "select[_ngcontent-%COMP%] { background-image: url(\"assets/arrowDown.png\");}"] });


/***/ }),

/***/ "3y/0":
/*!******************************************!*\
  !*** ./src/app/view/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ "CoT4");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "EAvp");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "39rN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "CoT4":
/*!**************************************************!*\
  !*** ./src/app/view/auth/auth-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ "EAvp");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "39rN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "EAvp":
/*!******************************************************!*\
  !*** ./src/app/view/auth/signin/signin.component.ts ***!
  \******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-profile.service */ "Q+Hy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SigninComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 19);
} }
function SigninComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 19);
} }
function SigninComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.signinError, "");
} }
function SigninComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye": a0, "fa-eye-slash": a1 }; };
class SigninComponent {
    constructor(fb, authservice, title, userservice, router) {
        this.fb = fb;
        this.authservice = authservice;
        this.title = title;
        this.userservice = userservice;
        this.router = router;
        this.textOrPassword = true;
        this.signinError = '';
        this.signinErrorLoading = false;
        this.subscriptions = [];
        title.setTitle('Sign In');
    }
    ngOnInit() {
        this.signinForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    signin(userInfo) {
        this.signinErrorLoading = true;
        this.subscriptions.push(this.authservice.signin(userInfo).subscribe((res) => {
            this.signinError = '';
            this.signinErrorLoading = false;
            this.userservice.myNotifications = [];
            localStorage.setItem('fakebookToken', res === null || res === void 0 ? void 0 : res.token);
            location.reload();
            this.subscriptions.push(this.userservice.getMyNotifications().subscribe((res) => {
                this.userservice.myNotifications = res === null || res === void 0 ? void 0 : res.newNotification;
                this.subscriptions.push(this.userservice.getMyProfile().subscribe((res) => {
                    this.userservice.userProfile = res === null || res === void 0 ? void 0 : res.user;
                    this.router.navigate(["/homePage"]);
                }, err => {
                }));
            }, err => { }));
        }, err => {
            var _a;
            this.signinError = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error;
            this.signinErrorLoading = false;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 27, vars: 18, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "py-5", 2, "min-height", "100vh", "background-color", "#F0F2F5", "overflow", "hidden"], [1, "container"], [1, "left", "row", "align-items-center"], [1, "col-md-7", "mb-4"], [1, "mb-4"], [1, "col-md-5"], [1, "signin", "p-4"], [3, "formGroup", "ngSubmit"], [1, "upperInputs"], [1, "position-relative"], ["formControlName", "email", "type", "email", "placeholder", "Email address", 1, "w-100"], ["class", "fas fa-exclamation-triangle", 4, "ngIf"], ["class", "text-danger mb-2", 4, "ngIf"], ["formControlName", "password", "placeholder", "Password", 1, "w-100", 3, "type"], [1, "fas", 3, "click"], ["class", "responseError  p-2 my-2", 4, "ngIf"], ["type", "submit", 1, "w-100", "btn", "btn-primary", "blue", "font-weight-bold", "py-2", 3, "disabled"], ["type", "button", "routerLink", "/auth/signup", 1, "btn", "btn-success", "green", "w-100", "py-2", "mt-2"], ["style", "height:50px", "class", "text-center", 4, "ngIf"], [1, "fas", "fa-exclamation-triangle"], [1, "text-danger", "mb-2"], [1, "responseError", "p-2", "my-2"], [1, "text-center", 2, "height", "50px"], [1, "lds-facebook"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "fakebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fakebook helps you connect and share with the people in your life.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_10_listener() { return ctx.signin(ctx.signinForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SigninComponent_i_14_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SigninComponent_p_15_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_i_click_18_listener() { return ctx.textOrPassword = !ctx.textOrPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SigninComponent_i_19_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SigninComponent_p_20_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SigninComponent_p_21_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SigninComponent_div_26_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border", (ctx.signinForm.controls.email == null ? null : ctx.signinForm.controls.email.errors) != null && ctx.signinForm.controls.email.touched ? "1px solid red" : "1px solid #ccd0d5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signinForm.controls.email == null ? null : ctx.signinForm.controls.email.errors) != null && ctx.signinForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signinForm.controls.email == null ? null : ctx.signinForm.controls.email.errors) != null && ctx.signinForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border", (ctx.signinForm.controls.password == null ? null : ctx.signinForm.controls.password.errors) != null && ctx.signinForm.controls.password.touched ? "1px solid red" : "1px solid #ccd0d5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.textOrPassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.textOrPassword, !ctx.textOrPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signinForm.controls.password == null ? null : ctx.signinForm.controls.password.errors) != null && ctx.signinForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signinForm.controls.password == null ? null : ctx.signinForm.controls.password.errors) != null && ctx.signinForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signinError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.signinForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signinErrorLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".signin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: white !important;\n  padding: 10px !important;\n}\n.signin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #166FE5 !important;\n}\n.signin[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  background-color: #1877f2 !important;\n}\n.signin[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%]:hover {\n  background-color: #166FE5 !important;\n}\n.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #166FE5;\n  font-weight: bold;\n}\n.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.fa-eye[_ngcontent-%COMP%], .fa-eye-slash[_ngcontent-%COMP%] {\n  top: 15px;\n}\n.fa-exclamation-triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBSUksa0NBQUE7RUFDQSx3QkFBQTtBQUpMO0FBQUs7RUFDSSxnQ0FBQTtBQUVUO0FBR0E7RUFJSSwwQkFBQTtFQUNBLG9DQUFBO0FBSko7QUFBSTtFQUNJLG9DQUFBO0FBRVI7QUFNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUtJO0VBQ0ksMEJBQUE7QUFIUjtBQU1BO0VBRUEsU0FBQTtBQUpBO0FBTUM7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUhMIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduaW4ge1xyXG4gXHJcbiBpbnB1dCB7XHJcbiAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgIGJvcmRlci1jb2xvcjogIzE2NkZFNSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgIHBhZGRpbmc6MTBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG5idXR0b24uYmx1ZSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2RkU1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc3ZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxufVxyXG4ubGVmdCB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIGNvbG9yOiMxNjZGRTU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmZhLWV5ZSwuZmEtZXllLXNsYXNoXHJcbiB7XHJcbnRvcDoxNXB4XHJcbiB9XHJcbiAuZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDE1cHg7XHJcbiAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgY29sb3I6IHJlZDtcclxuIH0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-view-auth-auth-module.js.map