"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_filtro-dash_filtro-dash_module_ts"],{

/***/ 5205:
/*!***********************************************************!*\
  !*** ./src/app/filtro-dash/filtro-dash-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroDashPageRoutingModule": () => (/* binding */ FiltroDashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _filtro_dash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro-dash.page */ 5524);




const routes = [
    {
        path: '',
        component: _filtro_dash_page__WEBPACK_IMPORTED_MODULE_0__.FiltroDashPage
    }
];
let FiltroDashPageRoutingModule = class FiltroDashPageRoutingModule {
};
FiltroDashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FiltroDashPageRoutingModule);



/***/ }),

/***/ 3571:
/*!***************************************************!*\
  !*** ./src/app/filtro-dash/filtro-dash.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroDashPageModule": () => (/* binding */ FiltroDashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _filtro_dash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro-dash-routing.module */ 5205);
/* harmony import */ var _filtro_dash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro-dash.page */ 5524);







let FiltroDashPageModule = class FiltroDashPageModule {
};
FiltroDashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filtro_dash_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiltroDashPageRoutingModule
        ],
        declarations: [_filtro_dash_page__WEBPACK_IMPORTED_MODULE_1__.FiltroDashPage]
    })
], FiltroDashPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_filtro-dash_filtro-dash_module_ts.js.map