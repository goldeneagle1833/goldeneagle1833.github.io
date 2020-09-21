(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AboutComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", time_r1.date, " ", time_r1.job, "");
} }
class AboutComponent {
    constructor() {
        this.times = [
            {
                date: 2016,
                job: "marines",
                discription: "asdfafe"
            },
            {
                date: 2018,
                job: "CNC opratior",
                discription: "school"
            },
            {
                date: 2019,
                job: "CNC op",
                discription: "cincy"
            },
            {
                date: 2019,
                job: "hiking",
                discription: "AT"
            },
            {
                date: 2020,
                job: "King memory",
                discription: "ram lots of ram"
            }
        ];
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 16, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "dis"], [1, "img"], ["src", "../../assets/IMG_0241.jpg", "alt", "Pic of me", "width", "200px", 1, "pic"], [1, "text"], [1, "timeline"], ["class", "time", 4, "ngFor", "ngForOf"], [1, "skills"], [1, "time"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " From becoming a United States Marine to hiking 2,192 miles on the application trail in 2019, there is very little that will prevent me from accomplishing the task at hand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AboutComponent_div_14_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.times);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Georgia, serif;\r\n}\r\n\r\n.dis[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 30vh;\r\n  background-color: aqua;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n  max-width: 50%;\r\n  background-color: brown;\r\n  text-align: center;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-left: 10px;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 50vh;\r\n  background-color: blue;\r\n}\r\n\r\n.bar[_ngcontent-%COMP%]{\r\n\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]{\r\n  height: 25vh;\r\n}\r\n\r\n.time[_ngcontent-%COMP%]{\r\n  \r\n  font-size: 25px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbn1cclxuXHJcbi5kaXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG4uaW1ne1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4udGV4dHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi50aW1lbGluZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi5iYXJ7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2tpbGxze1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG4udGltZXtcclxuICBcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _code_prodjects_code_prodjects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-prodjects/code-prodjects.component */ "./src/app/code-prodjects/code-prodjects.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _hobbys_hobbys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hobbys/hobbys.component */ "./src/app/hobbys/hobbys.component.ts");
/* harmony import */ var _referances_referances_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referances/referances.component */ "./src/app/referances/referances.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/pictures/pictures.component.ts");











const routes = [
    {
        path: "",
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"]
    },
    {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: "code",
        component: _code_prodjects_code_prodjects_component__WEBPACK_IMPORTED_MODULE_3__["CodeProdjectsComponent"]
    },
    {
        path: "hobbies",
        component: _hobbys_hobbys_component__WEBPACK_IMPORTED_MODULE_5__["HobbysComponent"]
    },
    {
        path: "experience",
        component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]
    },
    {
        path: "references",
        component: _referances_referances_component__WEBPACK_IMPORTED_MODULE_6__["ReferancesComponent"]
    },
    {
        path: "Pictures",
        component: _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_8__["PicturesComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'BruceHawthorn';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _referances_referances_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referances/referances.component */ "./src/app/referances/referances.component.ts");
/* harmony import */ var _hobbys_hobbys_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hobbys/hobbys.component */ "./src/app/hobbys/hobbys.component.ts");
/* harmony import */ var _code_prodjects_code_prodjects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code-prodjects/code-prodjects.component */ "./src/app/code-prodjects/code-prodjects.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/pictures/pictures.component.ts");
/* harmony import */ var _landing_page_about_home_about_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/about-home/about-home.component */ "./src/app/landing-page/about-home/about-home.component.ts");
/* harmony import */ var _landing_page_experiences_home_experiences_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/experiences-home/experiences-home.component */ "./src/app/landing-page/experiences-home/experiences-home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
        _referances_referances_component__WEBPACK_IMPORTED_MODULE_6__["ReferancesComponent"],
        _hobbys_hobbys_component__WEBPACK_IMPORTED_MODULE_7__["HobbysComponent"],
        _code_prodjects_code_prodjects_component__WEBPACK_IMPORTED_MODULE_8__["CodeProdjectsComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__["PicturesComponent"],
        _landing_page_about_home_about_home_component__WEBPACK_IMPORTED_MODULE_12__["AboutHomeComponent"],
        _landing_page_experiences_home_experiences_home_component__WEBPACK_IMPORTED_MODULE_13__["ExperiencesHomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
                    _referances_referances_component__WEBPACK_IMPORTED_MODULE_6__["ReferancesComponent"],
                    _hobbys_hobbys_component__WEBPACK_IMPORTED_MODULE_7__["HobbysComponent"],
                    _code_prodjects_code_prodjects_component__WEBPACK_IMPORTED_MODULE_8__["CodeProdjectsComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__["PicturesComponent"],
                    _landing_page_about_home_about_home_component__WEBPACK_IMPORTED_MODULE_12__["AboutHomeComponent"],
                    _landing_page_experiences_home_experiences_home_component__WEBPACK_IMPORTED_MODULE_13__["ExperiencesHomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/code-prodjects/code-prodjects.component.ts":
/*!************************************************************!*\
  !*** ./src/app/code-prodjects/code-prodjects.component.ts ***!
  \************************************************************/
/*! exports provided: CodeProdjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeProdjectsComponent", function() { return CodeProdjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CodeProdjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CodeProdjectsComponent.ɵfac = function CodeProdjectsComponent_Factory(t) { return new (t || CodeProdjectsComponent)(); };
CodeProdjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeProdjectsComponent, selectors: [["app-code-prodjects"]], decls: 13, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://goldeneagle1833.github.io/Shadow-Maze-V2.github.io/"], ["href", "Pictures"]], template: function CodeProdjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shadow Maze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pictures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtcHJvZGplY3RzL2NvZGUtcHJvZGplY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeProdjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-prodjects',
                templateUrl: './code-prodjects.component.html',
                styleUrls: ['./code-prodjects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 39, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=\\, initial-scale=1.0"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "list"], [1, "king"], [1, "hike"], [1, "geo"], [1, "operator"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EXPERIENCE King Memory 380 Morrison Rd, Columbus, OH 43213 April 1st to present \u25CF\tHandled and processed orders for specific ram specifications Sabbatical/Per scholas 112 Jefferson Ave -Columbus, OH February 2019 to March 10 \u25CF\tHiked the 2,192 Appalachian Trail \u25CF\tPlanning and execution of a five-month cross country trip \u25CF\tAttend Per scholas and obtained a CompTIA A + and Network + Certification CNC Set-up Operator Geotech Pattern & Mold Inc. \u2013 Loveland, OH July 2018 to February 2019 \u25CF\tSet up material and programs with command line provided by the engineer. \u25CF\tEdited the program to match the material and set up for a successful program path. \u25CF\tTroubleshooting networks and program errors CNC Operator Ingenuity Industrial Machining \u2013 Mora, MN September 2017 to June 2018 \u25CF\tOperated a 250,000-dollar mill running parts for car engines to water pumps \u25CF\tTroubleshooting mechanical failures and poor part finishes Store Associate Walmart \u2013 Pine City, MN September 2016 to February 2016 \u25CF\tManaged unloading and organizing merchandise for moving to the sales floor. \u25CF\tInteracted with customers and help with any problems U.S. Marine Anti-Tank Missile man May 2012 to July 2016 \u25CF\tDeployed twice to Japan and South Korea. \u25CF\tTraining in how to handle high stress situation and remaining calm to complete the task \u25CF\tTook part in a significant amount of training on accomplishing tasks with a team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Work Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "King Memory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "April 1st to present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sabbatical/Per scholas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "February 2019 to March 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Geotech Pattern & Mold Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "July 2018 to February 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Operator Ingenuity Industrial Machining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "September 2017 to June 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  \r\n  .list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    text-align: center;\r\n    width: 60vw;\r\n    font-family: Georgia, serif;\r\n  }\r\n  \r\n  .geo[_ngcontent-%COMP%] {\r\n    \r\n  }\r\n  \r\n  .king[_ngcontent-%COMP%] {\r\n  }\r\n  \r\n  .hike[_ngcontent-%COMP%] {\r\n  }\r\n  \r\n  .operator[_ngcontent-%COMP%] {\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCOztFQUNBOztFQUVBOztFQUNBO0VBQ0E7O0VBQ0E7RUFDQTs7RUFDQTtFQUNBIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgfVxyXG4gIC5nZW8ge1xyXG4gICAgXHJcbiAgfVxyXG4gIC5raW5nIHtcclxuICB9XHJcbiAgLmhpa2Uge1xyXG4gIH1cclxuICAub3BlcmF0b3Ige1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [["href", "", 1, "button", "hover"], ["href", "https://github.com/goldeneagle1833", 1, "button", "hover"], ["href", "https://www.linkedin.com/in/bruce-hawthorn-4707a4167/", 1, "button", "hover"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Git Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: black;\r\n  }\r\n  nav[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    background: rgb(255, 255, 255);\r\n    background: radial-gradient(\r\n      circle,\r\n      rgba(255, 255, 255, 1) 0%,\r\n      rgba(61, 61, 61, 1) 0%,\r\n      rgba(0, 0, 0, 1) 100%\r\n    );\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n  }\r\n  .button[_ngcontent-%COMP%] {\r\n    font-family: Georgia, serif;\r\n    font-size: 25px;\r\n    letter-spacing: -0.2px;\r\n    word-spacing: 2px;\r\n    color: #b1b4ba;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    font-style: italic;\r\n    font-variant: small-caps;\r\n    text-transform: capitalize;\r\n    padding-left: 2vw;\r\n    padding-right: 2vw;\r\n  \r\n  }\r\n  .button[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUI7Ozs7O0tBS0M7RUFDSDtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7OzRFQUUwRTtFQUMxRTtFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgY2lyY2xlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLFxyXG4gICAgICByZ2JhKDYxLCA2MSwgNjEsIDEpIDAlLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDEpIDEwMCVcclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogI2IxYjRiYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gIC8qIFxyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDEwcHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyAqL1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/hobbys/hobbys.component.ts":
/*!********************************************!*\
  !*** ./src/app/hobbys/hobbys.component.ts ***!
  \********************************************/
/*! exports provided: HobbysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbysComponent", function() { return HobbysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HobbysComponent {
    constructor() { }
    ngOnInit() {
    }
}
HobbysComponent.ɵfac = function HobbysComponent_Factory(t) { return new (t || HobbysComponent)(); };
HobbysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbysComponent, selectors: [["app-hobbys"]], decls: 2, vars: 0, template: function HobbysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hobbys works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvYmJ5cy9ob2JieXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HobbysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hobbys',
                templateUrl: './hobbys.component.html',
                styleUrls: ['./hobbys.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing-page/about-home/about-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/landing-page/about-home/about-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHomeComponent", function() { return AboutHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutHomeComponent.ɵfac = function AboutHomeComponent_Factory(t) { return new (t || AboutHomeComponent)(); };
AboutHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutHomeComponent, selectors: [["app-about-home"]], decls: 17, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "display"], [1, "text"], [1, "tech"], ["src", "../../../assets/computer-icons-logo-brand-javascript-javaserver-pages-free-892749.png", "alt", "JavaScript", "width", "125vw", "height", "100vh", 1, "JS"], ["src", "../../../assets/1_mn6bOs7s6Qbao15PMNRyOA.png", "alt", "TypeScript", "height", "100vh", 1, "ts"], ["src", "../../../assets/141px-Java_programming_language_logo.svg.png", "alt", "Java", "height", "100vh", 1, "java"], ["src", "../../../assets/angular.png", "alt", "Angular", "height", "100vh", 1, "angular"], ["src", "../../../assets/PgcSR.png", "alt", "HTML 5", "height", "100vh", 1, "Html"]], template: function AboutHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I started out learning G-code for CNC machines. Knowing that I loved making useful tools, my interest lead me to programing. I recently completed a Full stack web development bootcamp through Per Scholas. My portfolio can be found above and my resume below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".display[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50vw;\r\n  background-color: #141414;\r\n  border-radius: 15px;\r\n  opacity: 0.65;\r\n}\r\n.tech[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  padding: 20px;\r\n  height: 15vh;\r\n\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: #b1b4ba;\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2Fib3V0LWhvbWUvYWJvdXQtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGNBQWM7O0FBRWhCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0dBY0ciLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvYWJvdXQtaG9tZS9hYm91dC1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcbi50ZWNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG5cclxufVxyXG4udGV4dCB7XHJcbiAgY29sb3I6ICNiMWI0YmE7XHJcbiBcclxufVxyXG4vKiAuSlN7XHJcbiAgbWFyZ2luOiAzdmg7XHJcbn1cclxuLnRze1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcbi5qYXZhe1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcbi5hbmd1bGFye1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcbi5IdG1se1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-home',
                templateUrl: './about-home.component.html',
                styleUrls: ['./about-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing-page/experiences-home/experiences-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/landing-page/experiences-home/experiences-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExperiencesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesHomeComponent", function() { return ExperiencesHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExperiencesHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperiencesHomeComponent.ɵfac = function ExperiencesHomeComponent_Factory(t) { return new (t || ExperiencesHomeComponent)(); };
ExperiencesHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperiencesHomeComponent, selectors: [["app-experiences-home"]], decls: 0, vars: 0, template: function ExperiencesHomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9leHBlcmllbmNlcy1ob21lL2V4cGVyaWVuY2VzLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencesHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experiences-home',
                templateUrl: './experiences-home.component.html',
                styleUrls: ['./experiences-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-home/about-home.component */ "./src/app/landing-page/about-home/about-home.component.ts");



class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 19, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "backgroundImg"], [1, "welcome"], [1, "quote"], [1, "credit"], [1, "about"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bruce Hawthorn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Of those immortal dead who live again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-George Eliot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-about-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_about_home_about_home_component__WEBPACK_IMPORTED_MODULE_1__["AboutHomeComponent"]], styles: [".backgroundImg[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  background-image: url('20190630_181140.jpg');\r\n  background-size: cover;\r\n  text-align: center;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n  font-family: Georgia, serif;\r\n  font-size: 80px;\r\n  letter-spacing: -0.2px;\r\n  word-spacing: 2px;\r\n  color: #000000;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),\r\n    0 0 10px rgba(255, 255, 255, 0.5), 10px 7px 5px rgba(0, 0, 0, 0.32);\r\n  margin: 0;\r\n  margin-bottom: 2vh;\r\n}\r\n.quote[_ngcontent-%COMP%] {\r\n  font-family: Georgia, serif;\r\n  font-size: 25px;\r\n  letter-spacing: -0.2px;\r\n  word-spacing: 2px;\r\n  color: #000000;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n  text-transform: capitalize;\r\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),\r\n    0 0 10px rgba(255, 255, 255, 0.5), 10px 7px 5px rgba(0, 0, 0, 0.32);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.credit[_ngcontent-%COMP%] {\r\n  font-family: Georgia, serif;\r\n  font-size: 15px;\r\n  letter-spacing: -0.2px;\r\n  word-spacing: 2px;\r\n  color: #000000;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),\r\n    0 0 10px rgba(255, 255, 255, 0.5), 10px 7px 5px rgba(0, 0, 0, 0.32);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.about[_ngcontent-%COMP%] {\r\n  margin-top: 30vh;\r\n  display: flex;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDRDQUF1RDtFQUN2RCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUI7dUVBQ3FFO0VBQ3JFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUI7dUVBQ3FFO0VBQ3JFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQjt1RUFDcUU7RUFDckUsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZEltZyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzLzIwMTkwNjMwXzE4MTE0MC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZWxjb21lIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAxMHB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcbi5xdW90ZSB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDEwcHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jcmVkaXQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDEwcHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hYm91dCB7XHJcbiAgbWFyZ2luLXRvcDogMzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 13, vars: 0, consts: [["href", "", 1, "button", "hover"], ["href", "about", 1, "button", "hover"], ["href", "code", 1, "button", "hover"], ["href", "references", 1, "button", "hover"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "References");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: black;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: rgb(255, 255, 255);\r\n  background: radial-gradient(\r\n    circle,\r\n    rgba(255, 255, 255, 1) 0%,\r\n    rgba(61, 61, 61, 1) 0%,\r\n    rgba(20, 20, 20, 1) 100%\r\n  );\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  font-family: Georgia, serif;\r\n  font-size: 25px;\r\n  letter-spacing: -0.2px;\r\n  word-spacing: 2px;\r\n  color:  #b1b4ba;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  padding-left: 3vw;\r\n  padding-right: 3vw;\r\n\r\n}\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7MEVBRTBFO0FBQzFFO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbm5hdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgIGNpcmNsZSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICByZ2JhKDYxLCA2MSwgNjEsIDEpIDAlLFxyXG4gICAgcmdiYSgyMCwgMjAsIDIwLCAxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLm1lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICAjYjFiNGJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XHJcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xyXG4vKiBcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDEwcHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyAqL1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pictures/pictures.component.ts":
/*!************************************************!*\
  !*** ./src/app/pictures/pictures.component.ts ***!
  \************************************************/
/*! exports provided: PicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesComponent", function() { return PicturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PicturesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", picture_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", picture_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](picture_r1.description);
} }
class PicturesComponent {
    constructor() {
        this.pictures = [
            {
                url: "../../assets/20190813_142139.jpg",
                description: "First real view of Mt Katatian",
                location: "Maine",
                date: 20190813
            },
            {
                url: "../../assets/20190415_222357.jpg",
                description: "After a very cold night",
                location: "unknown",
                date: 20190415
            },
            {
                url: "../../assets/20190510_222359.jpg",
                description: "Angels rest",
                location: "Virginia",
                date: 20190510
            },
            {
                url: "../../assets/20190707_201207.jpg",
                description: "Mt Killington",
                location: "Killington, Vermont",
                date: 20190707
            },
            {
                url: "../../assets/FullSizeR (2).jpg",
                description: "Smoky Mountains",
                location: "Tennessee",
                date: 0
            },
            {
                url: "../../assets/IMG-20190416-WA0003.jpg",
                description: "Same day of the post",
                location: "Damascus, Virginia",
                date: 20190416
            },
            {
                url: "../../assets/IMG-20190430-WA0001.jpg",
                description: "Myself leaving Damascus Virginia on the Appalachian Trail",
                location: "Damascus, Virginia",
                date: 20190430
            },
        ];
    }
    ngOnInit() {
    }
}
PicturesComponent.ɵfac = function PicturesComponent_Factory(t) { return new (t || PicturesComponent)(); };
PicturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicturesComponent, selectors: [["app-pictures"]], decls: 9, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "pictures"], ["class", "picture", 4, "ngFor", "ngForOf"], [1, "picture"], ["width", "90%", 1, "pic", 3, "src", "alt"], [1, "text"]], template: function PicturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PicturesComponent_div_8_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pictures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".picture[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: black;\r\n    width: 75%;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 5px;\r\n\r\n}\r\n.picture[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n.pictures[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    margin-top: 15px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZXMvcGljdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9waWN0dXJlcy9waWN0dXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3R1cmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxufVxyXG4ucGljdHVyZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGljdHVyZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbmJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBpY3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pictures',
                templateUrl: './pictures.component.html',
                styleUrls: ['./pictures.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/referances/referances.component.ts":
/*!****************************************************!*\
  !*** ./src/app/referances/referances.component.ts ***!
  \****************************************************/
/*! exports provided: ReferancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferancesComponent", function() { return ReferancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReferancesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReferancesComponent.ɵfac = function ReferancesComponent_Factory(t) { return new (t || ReferancesComponent)(); };
ReferancesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferancesComponent, selectors: [["app-referances"]], decls: 2, vars: 0, template: function ReferancesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Work in progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyYW5jZXMvcmVmZXJhbmNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferancesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-referances',
                templateUrl: './referances.component.html',
                styleUrls: ['./referances.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal-Site\Bruce-Hawtorn\BruceHawthorn\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map