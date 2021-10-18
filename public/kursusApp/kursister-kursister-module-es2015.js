(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kursister-kursister-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kursister/kursister.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kursister/kursister.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page-section\" id=\"services\">\n    <div class=\"container\">\n        <h2 class=\"text-center mt-0 fas fa-4x fa-users text-primary mb-4\">Members</h2>\n        <hr class=\"divider my-4\">\n        \n        <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 text-primary\">\n                    <div class=\"mt-5\">\n                        <i class=\"fas fa-4x fa-info text-primary mb-4\"></i>\n                        \n                        <pre class=\"text-muted mb-0\">{{data|json}} </pre>\n                    </div>\n                </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./src/app/kursister/kursister-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/kursister/kursister-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: KursisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KursisterRoutingModule", function() { return KursisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kursister_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kursister.component */ "./src/app/kursister/kursister.component.ts");




const routes = [{ path: '', component: _kursister_component__WEBPACK_IMPORTED_MODULE_3__["KursisterComponent"] }];
let KursisterRoutingModule = class KursisterRoutingModule {
};
KursisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KursisterRoutingModule);



/***/ }),

/***/ "./src/app/kursister/kursister.component.css":
/*!***************************************************!*\
  !*** ./src/app/kursister/kursister.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2t1cnNpc3Rlci9rdXJzaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/kursister/kursister.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kursister/kursister.component.ts ***!
  \**************************************************/
/*! exports provided: KursisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KursisterComponent", function() { return KursisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let KursisterComponent = class KursisterComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(kursus => this.data = kursus);
    }
};
KursisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
KursisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kursister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kursister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kursister/kursister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kursister.component.css */ "./src/app/kursister/kursister.component.css")).default]
    })
], KursisterComponent);



/***/ }),

/***/ "./src/app/kursister/kursister.module.ts":
/*!***********************************************!*\
  !*** ./src/app/kursister/kursister.module.ts ***!
  \***********************************************/
/*! exports provided: KursisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KursisterModule", function() { return KursisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kursister_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kursister-routing.module */ "./src/app/kursister/kursister-routing.module.ts");
/* harmony import */ var _kursister_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kursister.component */ "./src/app/kursister/kursister.component.ts");





let KursisterModule = class KursisterModule {
};
KursisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kursister_component__WEBPACK_IMPORTED_MODULE_4__["KursisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kursister_routing_module__WEBPACK_IMPORTED_MODULE_3__["KursisterRoutingModule"]
        ]
    })
], KursisterModule);



/***/ })

}]);
//# sourceMappingURL=kursister-kursister-module-es2015.js.map