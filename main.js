(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.checkAuthState().then(function (result) {
                            if (result === true) {
                                console.log('[GUARD]: Logged in, so staying on current page!');
                                return true;
                            }
                            else {
                                console.log('[GUARD]: Not logged in, now navigating to login page!');
                                _this.router.navigate(['/login']);
                                return false;
                            }
                        })];
                    case 1: 
                    /* This method checks the firebase AuthState and navigates to login, if the user is not logged in.
                       The method is used by the router on each Route that has this specification: "canActivate: [AuthGuard]" */
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/configuration.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/configuration.service.ts ***!
  \****************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(afs) {
        this.afs = afs;
    }
    ConfigurationService.prototype.getConfiguration = function () {
        return this.afs.collection('configuration').valueChanges();
    };
    ConfigurationService.prototype.getServiceProviders = function () {
        return this.afs.collection('configuration').doc('rsidBwFzO3Kp356emm9N').valueChanges();
    };
    ConfigurationService.prototype.getDisabledServices = function () {
        return this.afs.collection('configuration').doc('Lt8fpXKYGVNy6qjpi0hU').valueChanges();
    };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/_services/global.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/global.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_language_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/language/language */ "./src/app/language/language.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = /** @class */ (function () {
    function GlobalService() {
    }
    /**
     * Returns the label_key translation from list_name defined in LANGUAGE.app_list_strings constant in language.ts
     */
    GlobalService.prototype.translateAppListStrings = function (list_name, label_key) {
        if (underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](list_name) || underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](label_key)) {
            return '';
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](_app_language_language__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE"]['app_list_strings'][list_name]) && !underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](_app_language_language__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE"]['app_list_strings'][list_name][label_key])) {
            return _app_language_language__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE"]['app_list_strings'][list_name][label_key];
        }
        return label_key; // return the un translated label if translation not found
    };
    /**
     * Returns the label_key translation from LANGUAGE.app_strings constant in language.ts
     */
    GlobalService.prototype.translateAppStrings = function (label_key) {
        if (underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](label_key)) {
            return '';
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](_app_language_language__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE"]['app_strings'][label_key])) {
            return _app_language_language__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE"]['app_strings'][label_key];
        }
        return label_key; // return the un translated label if translation not found
    };
    GlobalService.prototype.showNotification = function (message, type) {
        var icon = '';
        switch (type) {
            case 'info':
                icon = 'info';
                break;
            case 'success':
                icon = 'check_circle';
                break;
            case 'danger':
                icon = 'error';
                break;
            case 'warning':
                icon = 'warning';
                break;
            default:
                icon = 'notifications';
        }
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: type || 'info',
            timer: 3000,
            placement: {
                from: 'top',
                align: 'center'
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/_services/loader.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/loader.service.ts ***!
  \*********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/configuration.service */ "./src/app/_services/configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var LoaderService = /** @class */ (function () {
    function LoaderService(res, os, router, us, auth, conf, ngxSmartModalService) {
        this.res = res;
        this.os = os;
        this.router = router;
        this.us = us;
        this.auth = auth;
        this.conf = conf;
        this.ngxSmartModalService = ngxSmartModalService;
        this.loaded = false;
        this.initializeScroller = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollerInitialized = false;
    }
    /**
     * Gets called from App component and login component. Initializes the user data for according to its role if the user is authenticated.
     */
    LoaderService.prototype.getDataAfterAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[1]: Initializing Loader-Service!');
                        console.log('[2]: Loader started, awaiting User-Initialization!');
                        return [4 /*yield*/, this.auth.initializeUser().then(function (result) {
                                console.log('[5]: User initialized, continuing!');
                                return new Promise(function (resolve) {
                                    var user = JSON.parse(sessionStorage.getItem('user'));
                                    if (user == null) {
                                        console.log('[6]: Nobody logged in');
                                        console.log('[7]: Skipping loading database-data.');
                                    }
                                    else {
                                        console.log('[6]: User logged in, starting to load data from the database!');
                                        _this.uid = user.uid;
                                        // User-Tutorial
                                        if (_this.auth.emailVerified === false) {
                                            _this.ngxSmartModalService.getModal('emailVerificationModal').open();
                                        }
                                        else {
                                            _this.checkTutorial();
                                        }
                                        /* The following construct is used to avoid unneccessary database reads and to load all data
                                        before component initialisation, so the data is already loaded on route change and we do not
                                        have a loading spinner on almost every page. This whole service replaces the approach of using
                                        a route resolver to load the route specific contents before showing the UI to not have to show
                                        loading spinners. They would not work with Firebase, because unlike with the HTTP Service,
                                        the Firebase observables dont end, thus it would either never resolve or if we use first it
                                        would resolve and load, but we would lose the realtime features.
                                        Ideal would be to just work with async pipes (which I replaced with subscriptions in this case),
                                        but this would only work if we would load all this data in the app.component.html with the async
                                        pipe and then all child components would have access to this data and we would never have to
                                        subscribe and then unsubscribe on logout, however the way we structured the application,
                                        the components are not child components, while we could change all that, it would
                                        be more work then just subscribing and unsubscribing in this service, which was used before anyways
                                        as a resolver for the custom user data and the
                                        Subscriptions added on 28th February */
                                        // ToDo: Suborders for Dienstleister & Kunde
                                        if (_this.auth.role === 'Kunde') {
                                            console.log('[7]: Loading relevant database-data for role "Kunde"!');
                                            _this.$1 = _this.res.getMyRealestates().subscribe(function (data) {
                                                _this.res.myRealestates = data;
                                            });
                                            _this.$2 = _this.os.getCreatedOrders(_this.uid).subscribe(function (data) {
                                                _this.os.myCreatedOrders = data;
                                            });
                                            _this.$3 = _this.os.getAllSubordersTemp(_this.uid, _this.auth.role).subscribe(function (data) {
                                                _this.os.allSubordersTemp = data;
                                            });
                                            _this.$4 = _this.conf.getServiceProviders().subscribe(function (data) {
                                                _this.conf.serviceProviders = data;
                                            });
                                            _this.$6 = _this.conf.getDisabledServices().subscribe(function (data) {
                                                _this.conf.disabledServices = data;
                                            });
                                        }
                                        else if (_this.auth.role === 'Dienstleister') {
                                            console.log('[7]: Loading relevant database-data for role "Dienstleister"!');
                                            _this.$1 = _this.os.getAllUnassignedSuborders().subscribe(function (data) {
                                                // todo: this.os.allSuborders = data; (suborder-overview)
                                                _this.os.allSuborders = data;
                                            });
                                            _this.$2 = _this.os.getMyRequestedSuborders(_this.uid).subscribe(function (data) {
                                                _this.os.myRequestedSuborders = data;
                                            });
                                            _this.$3 = _this.os.getAssignedSuborders(_this.uid).subscribe(function (data) {
                                                _this.os.myAssignedSuborders = data;
                                            });
                                            _this.$4 = _this.os.getMyCompletedSuborders(_this.uid).subscribe(function (data) {
                                                _this.os.myCompletedSuborders = data;
                                            });
                                            // todo: getAllSuborders (suborder-overview)
                                            _this.$5 = _this.os.getAllSubordersTemp().subscribe(function (data) {
                                                _this.os.allSubordersTemp = data;
                                            });
                                            _this.$6 = _this.os.getMyUploadedSuborders(_this.uid).subscribe(function (data) {
                                                _this.os.myUploadedSuborders = data;
                                            });
                                        }
                                        else if (_this.auth.role === 'Administrator') {
                                            console.log('[7]: Loading relevant database-data for role "Administrator"!');
                                            _this.$1 = _this.res.getMyRealestates().subscribe(function (data) {
                                                _this.res.myRealestates = data;
                                            });
                                            _this.$2 = _this.os.getAllOrders().subscribe(function (data) {
                                                _this.os.allOrders = data;
                                            });
                                            _this.$3 = _this.os.getCreatedOrders(_this.uid).subscribe(function (data) {
                                                _this.os.myCreatedOrders = data;
                                            });
                                            _this.$4 = _this.us.getAllUsers().subscribe(function (data) {
                                                _this.us.allUsers = data;
                                                // Sorting by role
                                                _this.us.allUsers = _this.us.allUsers.sort(function (a, b) { return a.role.localeCompare(b.role); });
                                            }); // only relevant for Admins
                                            // todo: getAllSuborders (suborder-overview)
                                            _this.$5 = _this.os.getAllSubordersTemp().subscribe(function (data) {
                                                _this.os.allSubordersTemp = data;
                                            });
                                            _this.$7 = _this.conf.getServiceProviders().subscribe(function (data) {
                                                _this.conf.serviceProviders = data;
                                            });
                                            _this.$8 = _this.conf.getDisabledServices().subscribe(function (data) {
                                                _this.conf.disabledServices = data;
                                            });
                                        }
                                        else {
                                            window.alert('Es gab einen Fehler beim Laden Ihrer Daten. Dieser Fehler betrifft spezifisch Ihren Account! Bitte kontaktieren Sie den IMOGENT-Support mit dem Error-Code: 18-5');
                                        }
                                    }
                                    console.log('[8]: Loading of database-data completed!');
                                    console.log('[9]: Loader done!');
                                    setTimeout(function () {
                                        _this.loaded = true;
                                        _this.initializeScroller.emit(true);
                                    }, 750);
                                    resolve(true);
                                    _this.dataAfterAuthenticated = Promise.resolve(true);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets called from the app.component.html when user clicks verify email button in the modal. User the auth service to verify email.
     * If the email is verified user is navigated to tutorial.
     */
    LoaderService.prototype.verifyEmail = function () {
        var _this = this;
        this.auth.verifyEmail().then(function (result) {
            if (result === true) {
                _this.checkTutorial();
            }
            else {
                console.log('Verification Promise resolved, but false.');
                // do nothing for now
            }
        });
    };
    /**
     * Start the tutorial for the logged in user role. Skip it if user pressed the skip button.
     */
    LoaderService.prototype.checkTutorial = function () {
        var _this = this;
        if (this.us.tutorialSkipped !== true && this.router.isActive('home', true) === true) {
            this.realestateSub = this.res.getMyRealestates().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.auth.role === 'Kunde' && res.length === 0) {
                        this.ngxSmartModalService.getModal('firstImmoModal').open();
                        this.realestateSub.unsubscribe();
                    }
                    else if (this.auth.role === 'Dienstleister' && this.auth.profileCompleted === false) {
                        this.ngxSmartModalService.getModal('newDienstleisterModal').open();
                        this.realestateSub.unsubscribe();
                    }
                    else {
                        console.log('Tutorial not necessary');
                        this.realestateSub.unsubscribe();
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            console.log('Tutorial skipped!');
        }
    };
    LoaderService.prototype.logout = function () {
        // Unsubscribe from all Subscriptions to prevent memory leaks and insufficient permission errors
        console.log('Starting to unsubscribe!');
        this.auth.sessionEnded = true;
        sessionStorage.setItem('user', null);
        if (this.auth.role === 'Kunde') {
            this.$1.unsubscribe();
            this.$2.unsubscribe();
            this.$3.unsubscribe();
            this.$4.unsubscribe();
            if (this.$5 != null) {
                this.$5.unsubscribe();
            }
            this.$6.unsubscribe();
        }
        else if (this.auth.role === 'Dienstleister') {
            this.$1.unsubscribe();
            this.$2.unsubscribe();
            this.$3.unsubscribe();
            this.$4.unsubscribe();
            this.$5.unsubscribe();
            this.$6.unsubscribe();
        }
        else if (this.auth.role === 'Administrator') {
            this.$1.unsubscribe();
            this.$2.unsubscribe();
            this.$3.unsubscribe();
            this.$4.unsubscribe();
            this.$5.unsubscribe();
            if (this.$6 != null) {
                this.$6.unsubscribe();
            }
            this.$7.unsubscribe();
            this.$8.unsubscribe();
        }
        // unsubscribe remaining subscriptions
        if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](this.os.$suborderSub)) {
            this.os.$suborderSub.unsubscribe();
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](this.res.$realestateSub)) {
            this.res.$realestateSub.unsubscribe();
        }
        this.auth.logout();
    };
    LoaderService.prototype.getSubordersID = function (orderID) {
        var _this = this;
        // Unsubscribe from all Subscriptions to prevent memory leaks and insufficient permission errors
        if (this.auth.role === 'Kunde') {
            // todo: this.os.allSubordersID (suborder-overview)
            this.os.allSuborders = null;
            // issue fix
            // if this.$4 is already subscribed we need to unsubscribe it first
            // otherwise if the user will open a different record it will subscribe again so we
            // will have multiple subscriptions and if any of the data from opened records is updated
            // this.os.allSuborders will get updated with this record and we will lose the information
            // for the current record that user is vieweing
            if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isUndefined"](this.$5) && !underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](this.$4)) {
                this.$5.unsubscribe();
            }
            this.$5 = this.os.getSubordersID(orderID).subscribe(function (data) {
                // todo: this.os.allSubordersId (suborder-overview)
                _this.os.allSuborders = data;
            });
        }
        else if (this.auth.role === 'Administrator') {
            // issue fix: see above comment
            if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isUndefined"](this.$6) && !underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](this.$6)) {
                this.$6.unsubscribe();
            }
            this.$6 = this.os.getSubordersID(orderID).subscribe(function (data) {
                // todo: this.os.allSubordersId (suborder-overview)
                _this.os.allSuborders = data;
            });
        }
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__["RealestateService"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/_services/orders.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/orders.service.ts ***!
  \*********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var OrdersService = /** @class */ (function () {
    function OrdersService(afs, realestateservice, fns) {
        this.afs = afs;
        this.realestateservice = realestateservice;
        this.fns = fns;
        this.orderCompletionEmailCallable = this.fns.httpsCallable('sendOrderCompletionEmail');
    }
    OrdersService.prototype.getAllOrders = function () {
        return this.afs.collection('orders', function (ref) {
            return ref
                .orderBy('createdOn', 'desc');
        }).valueChanges();
    };
    // todo: temporary for getAllSuborders (suborder-overview)
    OrdersService.prototype.getAllSubordersTemp = function (userId, role) {
        if (role === 'Kunde') {
            return this.afs.collection('suborders', function (ref) {
                return ref
                    .where('createdBy', '==', userId);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                return response.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            }));
        }
        else {
            return this.afs.collection('suborders').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                return response.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            }));
        }
    };
    // gets triggered when suborder status changes. Checks status of all suborders related to this orderId and changes status of order
    OrdersService.prototype.updateOrderStatus = function (suborderId) {
        var processing = true;
        var completed = true;
        var adminActionRequired = false;
        var subOrder = underscore__WEBPACK_IMPORTED_MODULE_4__["find"](this.allSubordersTemp, function (suborder) { return suborder.id === suborderId; }, this);
        var relatedSubOrders = underscore__WEBPACK_IMPORTED_MODULE_4__["filter"](this.allSubordersTemp, function (suborder) { return suborder.orderId === subOrder.orderId; }, this);
        relatedSubOrders.forEach(function (element) {
            if (element.status === 'opened') {
                processing = false;
            }
            if (element.status !== 'completed') {
                completed = false;
            }
            if (element.status === 'opened' || element.status === 'requested' || element.status === 'uploaded' || element.status === 'canceled') {
                adminActionRequired = true;
            }
        });
        var status = 'opened';
        if (processing) {
            status = 'processing';
        }
        if (completed) {
            status = 'completed';
        }
        this.afs.collection('orders').doc(subOrder.orderId).update({
            status: status,
            adminActionRequired: adminActionRequired
        });
    };
    OrdersService.prototype.getAllUnassignedOrders = function () {
        // Returned alle unzugeordneten Orders, die aber schon "checked" sind, als Observable für HTML Async Usage
        return this.afs.collection('orders', function (ref) {
            return ref
                .where('assignedTo', '==', '')
                .where('status', '==', 'checked');
        }).valueChanges();
    };
    OrdersService.prototype.assignSuborder = function (orderId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection('suborders').doc(orderId).update({
                            assignedTo: userId,
                            status: 'requested'
                        })];
                    case 1:
                        _a.sent();
                        this.updateOrderStatus(orderId);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersService.prototype.changeAssignment = function (service, id) {
        console.log('changeAssignment');
        var batch = this.afs.firestore.batch();
        underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.allSubordersTemp, function (suborder) {
            if (suborder.assignedTo !== id && suborder.orderType === service && suborder.status !== 'uploaded' && suborder.status !== 'completed') {
                console.log(suborder.id, ', ', suborder.assignedTo);
                batch.update(this.afs.firestore.doc('suborders/' + suborder.id), {
                    assignedTo: id
                });
            }
        }, this);
        batch.commit();
    };
    OrdersService.prototype.acceptRequest = function (orderId, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!response) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.afs.collection('suborders').doc(orderId).update({
                                status: 'processing'
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.afs.collection('suborders').doc(orderId).update({
                            status: 'checked',
                            assignedTo: '',
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.updateOrderStatus(orderId);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersService.prototype.unAssignOrder = function (orderId) {
        var _this = this;
        this.afs.collection('suborders').doc(orderId).update({
            assignedTo: '',
            status: 'checked'
        }).then(function () {
            // parent order's status is affected when suborder status chanages
            _this.updateOrderStatus(orderId);
        });
    };
    OrdersService.prototype.getCreatorDetails = function (uidParam) {
        return this.afs.collection('users').doc(uidParam).valueChanges();
    };
    OrdersService.prototype.getAssignedOrders = function (userId) {
        return this.afs.collection('orders', function (ref) {
            return ref
                .where('assignedTo', '==', userId);
        }).valueChanges();
    };
    OrdersService.prototype.getRequestedOrders = function (userId) {
        return this.afs.collection('orders', function (ref) {
            return ref
                .where('assignedTo', '==', userId)
                .where('status', '==', 'requested');
        }).valueChanges();
    };
    OrdersService.prototype.getCreatedOrders = function (userId) {
        return this.afs.collection('orders', function (ref) {
            return ref
                .where('createdBy', '==', userId);
        }).valueChanges();
    };
    OrdersService.prototype.getRealestateDetails = function (ridParam) {
        return this.realestateservice.getRealestate(ridParam).valueChanges();
    };
    OrdersService.prototype.getOrder = function (orderIdParam) {
        return this.afs.doc("orders/" + orderIdParam);
    };
    OrdersService.prototype.getOrderDetails = function (orderIdParam) {
        return this.getOrder(orderIdParam).valueChanges();
    };
    OrdersService.prototype.getSubOrder = function (suborderIdParam) {
        return this.afs.doc("suborders/" + suborderIdParam).snapshotChanges();
    };
    OrdersService.prototype.getSuborderDetails = function (suborderIdParam) {
        var _this = this;
        if (!underscore__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](this.$suborderSub)) {
            this.$suborderSub.unsubscribe();
        }
        this.$suborderSub = this.getSubOrder(suborderIdParam).subscribe({
            next: function (response) {
                var data = response.payload.data();
                var id = response.payload.id;
                _this.currentSuborder = __assign({ id: id }, data);
            }
        });
        return this.$suborderSub;
    };
    OrdersService.prototype.setStatusChecked = function (orderIdParam) {
        return __awaiter(this, void 0, void 0, function () {
            var batch, firstSuborderId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batch = this.afs.firestore.batch();
                        firstSuborderId = '';
                        underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.allSuborders, function (suborder) {
                            if (firstSuborderId === '') {
                                firstSuborderId = suborder.id;
                            }
                            if (suborder.status === 'opened') {
                                var status_1 = 'checked';
                                // for retouching, virtual staging, directly set status to processing
                                if (suborder.orderType === 'retouching' || suborder.orderType === 'vstaging' || suborder.orderType === 'floorplan' || suborder.orderType === 'hdphotos') {
                                    status_1 = 'processing';
                                }
                                batch.update(this.afs.firestore.doc('suborders/' + suborder.id), {
                                    status: status_1
                                });
                            }
                        }, this);
                        return [4 /*yield*/, batch.commit()];
                    case 1:
                        _a.sent();
                        this.updateOrderStatus(firstSuborderId);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersService.prototype.setStatusUploaded = function (oid) {
        return this.afs.collection('orders').doc(oid).update({
            status: 'uploaded'
        });
    };
    OrdersService.prototype.updateDocument = function (docType, docId, data) {
        if (underscore__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](data)) {
            return;
        }
        return this.afs.collection(docType).doc(docId).update(data);
    };
    // Reusable method to add or update a field and its value both provided as parameters
    OrdersService.prototype.changeOrder = function (oid, fieldToChange, value) {
        console.log(oid, fieldToChange, value);
        var data = {};
        data[fieldToChange] = value;
        return this.afs.collection('orders').doc(oid).update(data);
    };
    OrdersService.prototype.setStatusCompleted = function (oid, rid) {
        return this.afs.collection('orders').doc(oid).update({
            status: 'completed'
        });
    };
    OrdersService.prototype.changeSuborderStatus = function (oid, status) {
        var _this = this;
        return this.afs.collection('suborders').doc(oid).update({
            status: status
        }).then(function () {
            if (status === 'completed') {
                _this.sendOrderCompletionEmail(oid);
            }
            // parent order's status is affected when suborder status chanages
            _this.updateOrderStatus(oid);
        });
    };
    OrdersService.prototype.setPhotoLink = function (orderIdParam, formValue) {
        return this.afs.collection('orders').doc(orderIdParam).update({
            editedPictures: formValue.photoLink
        });
    };
    // customer can cancel order if admin did not accept order before
    OrdersService.prototype.cancelOrder = function (oidParam) {
        var _this = this;
        // set status for order and all related suborders to 'canceled'
        var relatedSubOrders = underscore__WEBPACK_IMPORTED_MODULE_4__["filter"](this.allSubordersTemp, function (suborder) { return suborder.orderId === oidParam; }, this);
        relatedSubOrders.forEach(function (element) {
            _this.afs.collection('suborders').doc(element.id).update({
                status: 'canceled'
            });
        });
        this.afs.collection('orders').doc(oidParam).update({
            status: 'canceled'
        });
        // admin can delete order
    };
    OrdersService.prototype.deleteOrder = function (oidParam, ridParam) {
        this.afs.collection('orders').doc(oidParam).delete();
        // also delete the suborders when the order is deleted
        var batch = this.afs.firestore.batch();
        underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.allSuborders, function (suborder) {
            batch.delete(this.afs.firestore.doc('suborders/' + suborder.id));
        }, this);
        batch.commit().then(function () {
            console.log('Suborders deleted');
        });
    };
    // Suborders
    OrdersService.prototype.getSubordersID = function (orderID) {
        // fetch data as an observable and attach document id to it
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('orderId', '==', orderID);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getAllUnassignedSuborders = function () {
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('assignedTo', '==', '')
                .where('status', '==', 'checked');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getMyRequestedSuborders = function (userId) {
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('assignedTo', '==', userId)
                .where('status', '==', 'requested');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getAssignedSuborders = function (userId) {
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('assignedTo', '==', userId)
                .where('status', '==', 'processing');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getMyCompletedSuborders = function (userId) {
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('assignedTo', '==', userId)
                .where('status', '==', 'completed');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getMyUploadedSuborders = function (userId) {
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('assignedTo', '==', userId)
                .where('status', '==', 'uploaded');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getSubcollection = function (docType, docId, subColName) {
        return this.afs.collection(docType).doc(docId)
            .collection(subColName)
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.getPendingSuborders = function (suborderId) {
        // fetch data as an observable and attach document id to it
        return this.afs.collection('suborders', function (ref) {
            return ref
                .where('pendingOnSuborderId', '==', suborderId);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    OrdersService.prototype.updatePendingSuborder = function (suborderId) {
        var _this = this;
        var $subOrders, subOrders;
        $subOrders = this.getPendingSuborders(suborderId).subscribe(function (data) {
            $subOrders.unsubscribe();
            underscore__WEBPACK_IMPORTED_MODULE_4__["each"](data, function (subOrder) {
                this.afs.collection('suborders').doc(subOrder.id).update({
                    status: 'processing'
                });
            }, _this);
        });
    };
    OrdersService.prototype.addSubCollectionDocument = function (parentType, parentId, subCollectionName, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afs.collection(parentType).doc(parentId)
                .collection(subCollectionName).add(data).then(function () {
                console.log('Uploaded file reference added to subcollection');
                resolve();
            });
        });
    };
    OrdersService.prototype.sendOrderCompletionEmail = function (subOrderId) {
        var _this = this;
        this.getSubOrder(subOrderId).subscribe(function (response) {
            var subOrderDetails = response.payload.data();
            subOrderDetails['subOrderId'] = subOrderId;
            var data = {
                subOrderDetails: subOrderDetails,
                orderId: subOrderDetails['orderId'],
                customerEmail: JSON.parse(sessionStorage.getItem('user')).email
                // customerEmail: 'nandeesh.patel@imogent.com, peer.bausch@imogent.com'
                // customerEmail: 'nandeesh.patel@imogent.com'
            };
            var subCollectionName = '';
            subOrderDetails.description = subOrderDetails.description || 'Nicht angegeben';
            switch (subOrderDetails.orderType) {
                case 'dronemedia':
                    subCollectionName = 'dronePhotos';
                    subOrderDetails.optionalWishPilot = subOrderDetails.optionalWishPilot || 'Nicht angegeben';
                    break;
                case 'retouching':
                    subCollectionName = 'retouchedPhotos';
                    break;
                case 'vstaging':
                    subCollectionName = 'stagedPhotos';
                    break;
                case 'floorplan':
                    subCollectionName = 'floorplans';
                    break;
                case 'visualisation':
                    subCollectionName = 'visualisation';
                    break;
                case 'hdphotos':
                    subCollectionName = 'hdphotos';
                    break;
            }
            _this.getSubcollection('suborders', subOrderId, subCollectionName).subscribe(function (attachments) {
                data.subOrderDetails['attachments'] = attachments;
                console.log(JSON.stringify(data));
                _this.orderCompletionEmailCallable(data).subscribe();
            });
            /* if (subOrderDetails['orderType'] === 'floorplan') {
              this.getSubcollection('suborders', subOrderId, subCollectionName).subscribe(attachments => {
                data.subOrderDetails['attachments'] = attachments;
                console.log(JSON.stringify(data));
                //this.orderCompletionEmailCallable(data).subscribe();
              });
            } */
        });
    };
    OrdersService.prototype.getAllSuborders = function (orderId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afs.collection('suborders', function (ref) {
                return ref
                    .where('orderId', '==', orderId);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var subOrders = [];
                response.forEach(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    if (data['orderType'] === 'floorplan') {
                        data['attachments'] = data['planImages'];
                        data['logoImage'] && data['attachments'].push(data['logoImage']);
                        subOrders.push(__assign({ id: id }, data));
                        if (subOrders.length === response.length) {
                            resolve(subOrders);
                        }
                    }
                    else if (data['orderType'] === 'dronemedia' || data['orderType'] === 'visualisation') {
                        data['attachments'] = [];
                        subOrders.push(__assign({ id: id }, data));
                        if (subOrders.length === response.length) {
                            resolve(subOrders);
                        }
                    }
                    else if (data['orderType'] === 'hdphotos') {
                        data['attachments'] = [data['logoImage']];
                        subOrders.push(__assign({ id: id }, data));
                        if (subOrders.length === response.length) {
                            resolve(subOrders);
                        }
                    }
                    else {
                        _this.getSubcollection('suborders', id, 'originalPhotos').subscribe(function (attachments) {
                            data['attachments'] = attachments.map(function (file) {
                                return {
                                    'fileName': file['file_name'],
                                    'url': file['download_url']
                                };
                            });
                            subOrders.push(__assign({ id: id }, data));
                            if (subOrders.length === response.length) {
                                resolve(subOrders);
                            }
                        });
                    }
                });
            })).subscribe();
        });
    };
    /**
     * This is a sample method to add new services to the firebase.
     */
    OrdersService.prototype.addServices = function () {
        // var services = {
        //   'expose': [{
        //     'service_title': 'Expose',
        //     'title': 'Exposé',
        //     'name': 'Digitales Exposé',
        //     'service_key': 'expose',
        //     'disabled': true,
        //     'package_key': '23',
        //     'price': '0,00',
        //     'price_pre_text': '',
        //     'package_contents': ['Professionelles Design', 'Unterstützung verschiedener Medien', 'Optimiert für mobile Ansicht'],
        //     'extra_details': '',
        //     'package_images': ['Expose.jpg'],
        //     'newProperty': true,
        //     'phsysical_products': false
        //   }]
        // };
        // Object.keys(services).forEach(service => {
        //   let serviceData = {
        //     id: service,
        //     packages: services[service]
        //   };
        //   this.afs.collection('services').doc(service).set(serviceData).then(() => {
        //     console.log(service + ' added.');
        //   });
        // });
    };
    OrdersService.prototype.getAllServices = function () {
        return this.afs.collection('services').valueChanges();
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_2__["RealestateService"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/_services/realestate.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/realestate.service.ts ***!
  \*************************************************/
/*! exports provided: RealestateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateService", function() { return RealestateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RealestateService = /** @class */ (function () {
    function RealestateService(db, authService) {
        this.db = db;
        this.authService = authService;
        // View States:
        this.add = false;
        this.edit = false;
        this.title = null;
    }
    RealestateService.prototype.getMyRealestates = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        var userRef = user.uid;
        return this.db.collection('realestates', function (ref) { return ref.where('ownerID', '==', userRef); }).valueChanges();
    };
    RealestateService.prototype.getAllRealestates = function () {
        return this.allRealEstates = this.db.collection('realestates').valueChanges();
    };
    RealestateService.prototype.getRealestate = function (realestateId) {
        return this.db.collection('realestates').doc("" + realestateId);
    };
    RealestateService.prototype.getRealestateSubscription = function (realestateId) {
        var _this = this;
        if (!underscore__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.$realestateSub)) {
            this.$realestateSub.unsubscribe();
        }
        this.$realestateSub = this.db.doc("realestates/" + realestateId).snapshotChanges().subscribe({
            next: function (response) {
                var data = response.payload.data();
                var id = response.payload.id;
                _this.currentRealestate = __assign({ id: id }, data);
            }
        });
    };
    RealestateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RealestateService);
    return RealestateService;
}());



/***/ }),

/***/ "./src/app/_services/upload.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/upload.service.ts ***!
  \*********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders.service */ "./src/app/_services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UploadService = /** @class */ (function () {
    function UploadService(afStorage, afs, os) {
        this.afStorage = afStorage;
        this.afs = afs;
        this.os = os;
    }
    UploadService.prototype.upload = function (event, filePath, fileName) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.fileRef = this.afStorage.ref("users/" + filePath + "/" + fileName);
                        this.task = this.fileRef.put(event.target.files[0]);
                        _a = this;
                        return [4 /*yield*/, this.task.percentageChanges()];
                    case 1:
                        _a.uploadProgress = _b.sent();
                        return [4 /*yield*/, this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                                _this.fileRef.getDownloadURL().subscribe(function (data) {
                                    _this.downloadURL = data;
                                    resolve();
                                });
                            }))
                                .subscribe()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Uploading a file to firebase storage
     * @param filePath is the orderId. The files are stored in a folder named with order id
     */
    UploadService.prototype.uploadToOrder = function (event, filePath, fileName) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.fileRef = this.afStorage.ref("orders/" + filePath + "/" + fileName);
                        this.task = this.fileRef.put(event.target.files[0]);
                        _a = this;
                        return [4 /*yield*/, this.task.percentageChanges()];
                    case 1:
                        _a.uploadProgress = _b.sent();
                        return [4 /*yield*/, this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                                _this.fileRef.getDownloadURL().subscribe(function (data) {
                                    _this.downloadURL = data;
                                    resolve();
                                });
                            }))
                                .subscribe()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    UploadService.prototype.uploadtoSubOrder = function (file, filePath, prefix) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var fileRef, task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileRef = this.afStorage.ref("suborders/" + filePath + "/" + (prefix + file.name));
                        task = fileRef.put(file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                                fileRef.getDownloadURL().subscribe(function (data) {
                                    resolve(data);
                                }, function (error) {
                                    console.log(error);
                                });
                            }))
                                .subscribe()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    UploadService.prototype.deleteAttachment = function (docType, docId, subColName, subColDocId, filePath) {
        var _this = this;
        this.afs.collection(docType).doc(docId).collection(subColName).doc(subColDocId).delete()
            .then(function () {
            console.log('Document deleted, now deleting actual file');
            _this.afStorage.ref(filePath).delete();
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadService.prototype.getAttachments = function (docType, docId, subColName) {
        return this.os.getSubcollection(docType, docId, subColName);
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/_services/users.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/users.service.ts ***!
  \********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(afs, afStorage) {
        this.afs = afs;
        this.afStorage = afStorage;
        this.tutorialSkipped = false;
        this.cartItems = [];
        this.selectedServices = [];
    }
    UsersService.prototype.getAllUsers = function () {
        return this.afs.collection('users').valueChanges();
    };
    UsersService.prototype.getUserDetails = function (uid) {
        return this.afs.collection('users').doc(uid).valueChanges();
    };
    UsersService.prototype.setVerified = function (uid) {
        return this.afs.collection('users').doc(uid).update({
            pilotVerified: true,
            verificationNeeded: false
        });
    };
    UsersService.prototype.updateUser = function (uid, data) {
        return this.afs.collection('users').doc(uid).update(data);
    };
    UsersService.prototype.deleteDoc = function (doc, uid) {
        var confirmed = confirm('Das Dokument wird aus dem Profil gelöscht und der Nutzer auf unverifiziert gesetzt. Er kann die Plattform dann nicht mehr nutzen, falls er vorher bereits verifiziert war. Bitte nur nutzen, wenn bei der anfänglichen Verifikation falsche oder ungültige Dokumente hochgeladen wurden! Nach dem Löschvorgang wird der Nutzer darüber informiert, dass die Verifikation gescheitert ist und er betreffende Dokumente neu hochladen muss.');
        if (confirmed) {
            var docName = '';
            switch (doc) {
                case 'doc0':
                    docName = 'vertragliche-vereinbarung';
                    break;
                case 'doc1':
                    docName = 'haftpflicht';
                    break;
                case 'doc2':
                    docName = 'kenntnisnachweis';
                    break;
                case 'doc3':
                    docName = 'aufstiegsgenehmigung';
                    break;
            }
            this.afStorage.ref("users/" + uid + "/" + docName).delete();
            if (doc === 'doc0') {
                return this.afs.collection('users').doc(uid).update({
                    verificationDocument0: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    pilotVerified: false,
                    verificationNeeded: false,
                    verificationFailed: true
                });
            }
            else if (doc === 'doc1') {
                return this.afs.collection('users').doc(uid).update({
                    verificationDocument1: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    pilotVerified: false,
                    verificationNeeded: false,
                    verificationFailed: true
                });
            }
            else if (doc === 'doc2') {
                return this.afs.collection('users').doc(uid).update({
                    verificationDocument2: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    pilotVerified: false,
                    verificationNeeded: false,
                    verificationFailed: true
                });
            }
            else if (doc === 'doc3') {
                return this.afs.collection('users').doc(uid).update({
                    verificationDocument3: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    pilotVerified: false,
                    verificationNeeded: false,
                    verificationFailed: true
                });
            }
        }
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mp-no-login {\n  width: 100%;\n  background: #f6fafd;\n}\n.custom-spinner .spinner-overlay{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: black;\n  top: 0;\n  left: 0;\n  z-index: 3000;\n  opacity: 0.2;\n}\n.custom-spinner .lds-ring.ring-default{\n  z-index: 3001;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tcC1uby1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xufVxuLmN1c3RvbS1zcGlubmVyIC5zcGlubmVyLW92ZXJsYXl7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMzAwMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmN1c3RvbS1zcGlubmVyIC5sZHMtcmluZy5yaW5nLWRlZmF1bHR7XG4gIHotaW5kZXg6IDMwMDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modals, included here so they are already loaded before we even render the home.component.html -->\n<section>\n  <ngx-smart-modal #emailVerificationModal identifier=\"emailVerificationModal\" [closable]=\"false\" [dismissable]=\"false\" [escapable]=\"false\">\n    <!-- Modal Title -->\n    <h2 class=\"card-title b\">E-Mail-Bestätigung</h2>\n\n    <!-- Modal Text -->\n    <p>Bitte bestätigen Sie jetzt Ihre E-Mail und drücken Sie dann auf \"E-Mail bestätigt\".</p>\n    <p>Danach können Sie die ersten Schritte auf der Plattform machen!</p>\n\n    <!-- Loading Spinner: It is shown while checking the e-mail verification status -->\n    <ng-container *ngIf=\"auth.checkingEmail\">\n      <div class=\"lds-ring ring-small\"><div></div><div></div><div></div><div></div></div>\n    </ng-container>\n\n    <!-- Modal Buttons -->\n    <div class=\"row\">\n\n      <!-- Button to tell app to check if E-Mail was verified -->\n      <div class=\"col\">\n        <button class=\"btn btn-primary btn-modal\" (click)=\"loader.verifyEmail()\" [disabled]=\"auth.emailVerificationFailed\" [hidden]=\"auth.checkingEmail\">E-Mail bestätigt</button>\n      </div>\n\n      <!-- Resend Verification E-Mail Button -->\n      <div class=\"col d-none-block d-sm-flex flex-wrap justify-content-end\">\n        <button class=\"btn btn-warning btn-modal\" (click)=\"resendVerificationEmail()\" [hidden]=\"auth.checkingEmail\">E-Mail erneut senden</button>\n      </div>\n\n    </div>\n\n    <!-- Verification Failed Alert -->\n    <span *ngIf=\"auth.emailVerificationFailed === true\" [hidden]=\"auth.checkingEmail\"><br><br><span class=\"alert alert-danger\">Sie haben Ihre E-Mail noch nicht bestätigt!</span></span>\n\n    <!-- Verification E-Mail resent Alert -->\n    <span *ngIf=\"emailResent === true\"><br><br><span class=\"alert alert-success\">E-Mail wurde erneut versendet!</span></span>\n\n  </ngx-smart-modal>\n  <ngx-smart-modal #firstImmoModal identifier=\"firstImmoModal\" [closable]=\"false\" [dismissable]=\"false\" [escapable]=\"false\">\n    <!-- Modal Title -->\n    <h2 class=\"card-title b\">Willkommen!</h2>\n\n    <!-- Modal Text -->\n    <p>Legen Sie jetzt Ihre erste Immobilie an, um loszulegen!</p>\n    <p>Wenn Sie sich selbst umsehen möchten, können Sie das Tutorial überspringen.</p>\n\n    <!-- Modal Buttons -->\n    <div class=\"row\">\n\n      <!-- Button to follow the tutorial -->\n      <div class=\"col\">\n        <button class=\"btn btn-primary btn-modal\" (click)=\"navigateToRealestates()\">\n          <span>Immobilie anlegen</span>\n        </button>\n      </div>\n\n      <!-- Button to skip the tutorial -->\n      <div class=\"col d-none-block d-sm-flex flex-wrap justify-content-end\">\n        <button class=\"btn btn-danger btn-modal\" (click)=\"skipTutorial()\">\n\n          <!-- Longer Button Text on bigger devices -->\n          <span class=\"d-none d-sm-block\">Tutorial überspringen</span>\n          <!-- Shorter Button Text on small devices -->\n          <span class=\"d-sm-none\">Überspringen</span>\n\n        </button>\n      </div>\n\n    </div>\n  </ngx-smart-modal>\n  <ngx-smart-modal #newDienstleisterModal identifier=\"newDienstleisterModal\" [closable]=\"false\" [dismissable]=\"false\" [escapable]=\"false\">\n    <!-- Modal Title -->\n    <h2 class=\"card-title b\">Willkommen!</h2>\n\n    <!-- Modal text -->\n    <p>Um als Dienstleister loszulegen, legen Sie bitte Ihr Profil an, geben Sie ihre angebotenen Dienstleistungen an und laden Sie gegebenenfalls die erforderlichen Dokumente hoch!</p>\n\n    <!-- Add profile data button -->\n    <button class=\"btn btn-primary\" (click)=\"navigateToProfile()\">Profil anlegen</button>\n  </ngx-smart-modal>\n</section>\n\n<!-- This html is rendered on every page of the app. We include the sidebar and router here, and add some dynamic css \nso that the login, register & password-reset-page have different background-colors and padding -->\n\n<!-- Only show content to the user if all necessary data is loaded, else show loading spinner -->\n<ng-container *ngIf=\"loader.loaded; else loading\">\n  \n  <!-- Specific body styling for login/register/reset-page vs all other pages -->\n  <div [className]=\"!(isLoggedIn) ? 'body-white' : 'tschau'\">\n\n    <!-- Detached Sidebar toggle button: \n    Only show f the sidebar is actually rendered (all pages except login/register/reset-page) -->\n    <ng-container *ngIf=\"isLoggedIn\">\n\n      <!-- The sidebar will only render if data is loaded and E-Mail is verified (defined inside the sidebar.component.html),\n      because this toggle is detached we have to do it for it aswell -->\n      <ng-container *ngIf=\"loader.loaded && auth.emailVerified\">\n\n        <!-- Toggle -->\n        <!-- <a class=\"btn btn-sm\" (click)=\"toggleSidebar()\" style=\"margin-top: 0.2em; margin-left: 0.05em; position:fixed; top: 2.5em; left: 0em;\">\n          <i class=\"fa fa-angle-right hovernavicon\" style=\"font-size: 1.3em; color: #f6fafd;\"></i>\n        </a> -->\n\n      </ng-container>\n\n    </ng-container>\n\n    <!-- Styling wrapper for all pages, if sidebar is active, add css class toggled (see navcss.css) -->\n    <div class=\"page-wrapper chiller-theme\" [ngClass]=\"{'toggled' : getSideBarState()}\">\n        <div class=\"wrapper\">\n          <!-- Only show the sidebar if user is logged in -->\n          <div *ngIf=\"isLoggedIn\" class=\"sidebar\" data-color=\"white\" data-background-color=\"imogent-green\" data-image=\"./assets/img/sidebar-1.jpg\">\n              <app-sidebar-cmp></app-sidebar-cmp>\n          </div>\n           <div class=\"main-panel\" [ngClass]=\"{'mp-no-login' : !isLoggedIn}\">\n              <app-navbar-cmp *ngIf=\"isLoggedIn\"></app-navbar-cmp>\n              <div class=\"main-content\">\n                <div class=\"container-fluid\">\n                  <router-outlet></router-outlet>\n                </div>\n              </div>\n          </div>\n      </div>\n    </div>\n\n  </div>\n\n</ng-container>\n\n<!-- CSS Loading Spinner -->\n<ng-template #loading><div class=\"lds-ring ring-default centered\"><div></div><div></div><div></div><div></div></div></ng-template>\n\n<div *ngIf=\"showLoader\" class=\"custom-spinner\">\n  <div class=\"spinner-overlay\"></div>\n  <div class=\"lds-ring ring-default centered\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/sidebar/sidebar.service */ "./src/app/sidebar/sidebar.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(sidebarservice, loader, auth, res, us, router, ngxSmartModalService) {
        this.sidebarservice = sidebarservice;
        this.loader = loader;
        this.auth = auth;
        this.res = res;
        this.us = us;
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.emailResent = false;
        this.showLoader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('App-Component initialised');
        this.loader.getDataAfterAuthenticated();
        this.auth.showLoader.subscribe(function (showLoader) {
            _this.showLoader = showLoader;
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loader.initializeScroller.subscribe(function () {
            setTimeout(function () {
                if (!_this.loader.scrollerInitialized) {
                    var elemMainPanel = document.querySelector('.main-panel');
                    var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
                    var html = document.getElementsByTagName('html')[0];
                    if (!_this.isMac() && window.matchMedia("(min-width: 960px)").matches) {
                        var ps = void 0;
                        if (elemMainPanel) {
                            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"](elemMainPanel);
                        }
                        if (elemSidebar) {
                            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"](elemSidebar);
                        }
                        html.classList.add('perfect-scrollbar-on');
                    }
                    else {
                        html.classList.add('perfect-scrollbar-off');
                    }
                    _this.loader.scrollerInitialized = true;
                }
            }, 100);
        });
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AppComponent.prototype.toggleSidebar = function () {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    };
    AppComponent.prototype.getSideBarState = function () {
        return this.sidebarservice.getSidebarState();
    };
    AppComponent.prototype.hideSidebar = function () {
        this.sidebarservice.setSidebarState(true);
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(sessionStorage.getItem('user'));
            return (user !== null) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.navigateToRealestates = function () {
        this.res.add = true;
        this.router.navigate(['/realestate']);
        this.ngxSmartModalService.close('firstImmoModal');
    };
    AppComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/profile']);
        this.ngxSmartModalService.close('newDienstleisterModal');
    };
    AppComponent.prototype.reloadPage = function () {
        location.reload();
    };
    AppComponent.prototype.resendVerificationEmail = function () {
        var _this = this;
        try {
            this.auth.SendVerificationMail().then(function (result) {
                _this.emailResent = true;
            }).catch(function (error) {
                window.alert(error);
                _this.emailResent = false;
            });
            setTimeout(function () {
                _this.emailResent = false;
            }, 3500);
        }
        catch (error) {
            window.alert(error);
        }
    };
    AppComponent.prototype.skipTutorial = function () {
        this.ngxSmartModalService.close('firstImmoModal');
        this.us.tutorialSkipped = true;
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_realestate_service__WEBPACK_IMPORTED_MODULE_5__["RealestateService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_realestate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./faq */ "./src/app/faq/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");
/* harmony import */ var _orderoverview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orderoverview */ "./src/app/orderoverview/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _realestate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./realestate */ "./src/app/realestate/index.ts");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./inbox */ "./src/app/inbox/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sidebar/sidebar.service */ "./src/app/sidebar/sidebar.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./package-list/package-list.component */ "./src/app/package-list/package-list.component.ts");
/* harmony import */ var _package_package_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./package/package.component */ "./src/app/package/package.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _suborder_overview_suborder_overview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./suborder-overview/suborder-overview.component */ "./src/app/suborder-overview/suborder-overview.component.ts");
/* harmony import */ var _suborder_list_suborder_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./suborder-list/suborder-list.component */ "./src/app/suborder-list/suborder-list.component.ts");
/* harmony import */ var _dronemedia_suborder_overview_dronemedia_suborder_overview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dronemedia-suborder-overview/dronemedia-suborder-overview.component */ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.ts");
/* harmony import */ var _retouching_suborder_overview_retouching_suborder_overview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./retouching-suborder-overview/retouching-suborder-overview.component */ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modals/package-editor/package-editor.component */ "./src/app/modals/package-editor/package-editor.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _floorplan_suborder_overview_floorplan_suborder_overview_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./floorplan-suborder-overview/floorplan-suborder-overview.component */ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.ts");
/* harmony import */ var _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./upload-task/upload-task.component */ "./src/app/upload-task/upload-task.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _retouching_service_retouching_service_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./retouching-service/retouching-service.component */ "./src/app/retouching-service/retouching-service.component.ts");
/* harmony import */ var _virtual_staging_service_virtual_staging_service_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./virtual-staging-service/virtual-staging-service.component */ "./src/app/virtual-staging-service/virtual-staging-service.component.ts");
/* harmony import */ var _virtual_staging_suborder_overview_virtual_staging_suborder_overview_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./virtual-staging-suborder-overview/virtual-staging-suborder-overview.component */ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.ts");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./_services/global.service */ "./src/app/_services/global.service.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixed_cart_fixed_cart_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./shared/fixed-cart/fixed-cart.module */ "./src/app/shared/fixed-cart/fixed-cart.module.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/@rxweb/reactive-form-validators.es5.js");
/* harmony import */ var _visualisation_service_visualisation_service_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./visualisation-service/visualisation-service.component */ "./src/app/visualisation-service/visualisation-service.component.ts");
/* harmony import */ var _visualisation_service_overview_visualisation_service_overview_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./visualisation-service-overview/visualisation-service-overview.component */ "./src/app/visualisation-service-overview/visualisation-service-overview.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _hdphotos_service_hdphotos_service_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./hdphotos-service/hdphotos-service.component */ "./src/app/hdphotos-service/hdphotos-service.component.ts");
/* harmony import */ var _hdphotos_suborder_overview_hdphotos_suborder_overview_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./hdphotos-suborder-overview/hdphotos-suborder-overview.component */ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.ts");
/* harmony import */ var _expose_service_expose_service_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./expose-service/expose-service.component */ "./src/app/expose-service/expose-service.component.ts");
/* harmony import */ var _expose_service_overview_expose_service_overview_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./expose-service-overview/expose-service-overview.component */ "./src/app/expose-service-overview/expose-service-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































//import { SidebarComponent } from './sidebar/sidebar.component';

// Bootstrap Components [NGX]












;

 // for using bootstrap image slider (ngb-carousel)
//For Angular material


//Angular Material module




// File upload module




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_32__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_33__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_35__["CollapseModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_48__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_51__["FileUploadModule"],
                _angular_fire_functions__WEBPACK_IMPORTED_MODULE_58__["AngularFireFunctionsModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_60__["SidebarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["MatSlideToggleModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_61__["NavbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_48__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
                _shared_fixed_cart_fixed_cart_module__WEBPACK_IMPORTED_MODULE_62__["FixedCartModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_63__["RxReactiveFormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _home__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _profile__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _orderoverview__WEBPACK_IMPORTED_MODULE_22__["OrderoverviewComponent"],
                _services__WEBPACK_IMPORTED_MODULE_23__["ServicesComponent"],
                _realestate__WEBPACK_IMPORTED_MODULE_24__["RealestateComponent"],
                _inbox__WEBPACK_IMPORTED_MODULE_25__["InboxComponent"],
                _faq__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
                _settings__WEBPACK_IMPORTED_MODULE_26__["SettingsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_27__["LogoutComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_28__["ForgotComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_29__["PaymentsComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_30__["TermsComponent"],
                //SidebarComponent,
                _users_users_component__WEBPACK_IMPORTED_MODULE_31__["UsersComponent"],
                _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_38__["PackageListComponent"],
                _package_package_component__WEBPACK_IMPORTED_MODULE_39__["PackageComponent"],
                _suborder_overview_suborder_overview_component__WEBPACK_IMPORTED_MODULE_41__["SuborderOverviewComponent"],
                _suborder_list_suborder_list_component__WEBPACK_IMPORTED_MODULE_42__["SuborderListComponent"],
                _dronemedia_suborder_overview_dronemedia_suborder_overview_component__WEBPACK_IMPORTED_MODULE_43__["DronemediaSuborderOverviewComponent"],
                _retouching_suborder_overview_retouching_suborder_overview_component__WEBPACK_IMPORTED_MODULE_44__["RetouchingSuborderOverviewComponent"],
                _modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_46__["PackageEditorComponent"],
                _floorplan_suborder_overview_floorplan_suborder_overview_component__WEBPACK_IMPORTED_MODULE_52__["FloorplanSuborderOverviewComponent"],
                _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_53__["UploadTaskComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_54__["FileUploadComponent"],
                _floorplan_suborder_overview_floorplan_suborder_overview_component__WEBPACK_IMPORTED_MODULE_52__["FloorplanSuborderOverviewComponent"],
                _retouching_service_retouching_service_component__WEBPACK_IMPORTED_MODULE_55__["RetouchingServiceComponent"],
                _virtual_staging_service_virtual_staging_service_component__WEBPACK_IMPORTED_MODULE_56__["VirtualStagingServiceComponent"],
                _virtual_staging_suborder_overview_virtual_staging_suborder_overview_component__WEBPACK_IMPORTED_MODULE_57__["VirtualStagingSuborderOverviewComponent"],
                _visualisation_service_overview_visualisation_service_overview_component__WEBPACK_IMPORTED_MODULE_65__["VisualisationServiceOverviewComponent"],
                _visualisation_service_visualisation_service_component__WEBPACK_IMPORTED_MODULE_64__["VisualisationServiceComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_66__["ChangePasswordComponent"],
                _hdphotos_service_hdphotos_service_component__WEBPACK_IMPORTED_MODULE_67__["HdphotosServiceComponent"],
                _hdphotos_suborder_overview_hdphotos_suborder_overview_component__WEBPACK_IMPORTED_MODULE_68__["HdphotosSuborderOverviewComponent"],
                _expose_service_expose_service_component__WEBPACK_IMPORTED_MODULE_69__["ExposeServiceComponent"],
                _expose_service_overview_expose_service_overview_component__WEBPACK_IMPORTED_MODULE_70__["ExposeServiceOverviewComponent"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services_realestate_service__WEBPACK_IMPORTED_MODULE_11__["RealestateService"],
                _services_orders_service__WEBPACK_IMPORTED_MODULE_12__["OrdersService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_13__["UsersService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_37__["LoaderService"],
                _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_36__["SidebarService"],
                _services_upload_service__WEBPACK_IMPORTED_MODULE_14__["UploadService"],
                _services_global_service__WEBPACK_IMPORTED_MODULE_59__["GlobalService"],
                {
                    provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["FirestoreSettingsToken"],
                    useValue: {}
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");
/* harmony import */ var _orderoverview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderoverview */ "./src/app/orderoverview/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox */ "./src/app/inbox/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _realestate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./realestate */ "./src/app/realestate/index.ts");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq */ "./src/app/faq/index.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");


















var appRoutes = [
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'orderoverview', component: _orderoverview__WEBPACK_IMPORTED_MODULE_6__["OrderoverviewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'services', component: _services__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'realestate', component: _realestate__WEBPACK_IMPORTED_MODULE_10__["RealestateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'faq', component: _faq__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'inbox', component: _inbox__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'settings', component: _settings__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"] },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_13__["PaymentsComponent"] },
    { path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_15__["TermsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"] },
    { path: 'changepassword', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"] },
    { path: '**', redirectTo: 'home' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _app_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/global.service */ "./src/app/_services/global.service.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var AuthService = /** @class */ (function () {
    function AuthService(afs, afAuth, router, ngZone, ngxSmartModalService, fns, gs) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.ngxSmartModalService = ngxSmartModalService;
        this.fns = fns;
        this.gs = gs;
        this.sessionEnded = false;
        this.emailVerificationFailed = false;
        this.emailVerified = false;
        this.profileCompleted = true;
        this.authorised = false;
        this.checkingEmail = false;
        this.registering = false;
        this.uid = null;
        this.showLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createUserCallable = this.fns.httpsCallable('createUser');
    }
    AuthService.prototype.checkAuthState = function () {
        var _this = this;
        /* Since the router calls  the CanActivate() method on almost every route which in turn calls this,
        we would have many superflous database calls on every route-change, thus we set authorised = true;
        after the first AuthCheck, so we can catch every call after the successful-login with a simple if-statement.
        When the user logs out, this.authorised has to be set to false, because the page is not reloaded.
        */
        if (this.authorised === true) {
            // Not needed to ask Firebase
            return new Promise(function (resolve) {
                console.log('[AUTH]: Logged-in! [*]');
                resolve(true);
            });
        }
        else {
            return new Promise(function (resolve) {
                _this.afAuth.authState.subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    var currUser;
                    var _this = this;
                    return __generator(this, function (_a) {
                        if (user) {
                            this.authorised = true;
                            currUser = JSON.parse(sessionStorage.getItem('user'));
                            if (!this.uid && currUser && currUser.uid) {
                                this.uid = currUser.uid;
                            }
                            if (this.uSub) {
                                this.uSub.unsubscribe();
                            }
                            this.uSub = this.afs.collection('users').doc("" + this.uid).valueChanges().subscribe(function (data) {
                                if (data) {
                                    _this.myUserObservable = data;
                                    _this.emailVerified = _this.myUserObservable.emailVerified || user.emailVerified;
                                }
                                else {
                                    _this.emailVerified = user.emailVerified;
                                }
                                console.log('[AUTH]: AuthState: Logged-in!');
                                // close email verify popup
                                underscore__WEBPACK_IMPORTED_MODULE_5__["each"](_this.ngxSmartModalService.getOpenedModals(), function (obj) {
                                    if (obj.id === 'emailVerificationModal') {
                                        if (this.emailVerified) {
                                            this.ngxSmartModalService.close('emailVerificationModal');
                                        }
                                    }
                                }, _this);
                                resolve(true);
                            });
                            //this.emailVerified = user.emailVerified;
                            //resolve(true);
                        }
                        else {
                            this.emailVerified = false;
                            console.log('[AUTH]: AuthState: Not logged-in!');
                            sessionStorage.setItem('user', null);
                            resolve(false);
                        }
                        return [2 /*return*/];
                    });
                }); });
            });
        }
    };
    /* Method used by the Loader-Service inside the getDataAfterAuthenticated(),
    returns a promise, to ensure that we don't try to load data before the user is initialisied and
    we can access his role and won't work with an undefined value for it. */
    AuthService.prototype.initializeUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.userAuthState = _this.afAuth.authState.subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (user) {
                        console.log('[3]: Initializing User-Values!');
                        this.userData = user;
                        this.authorised = true;
                        sessionStorage.setItem('user', JSON.stringify(this.userData));
                        this.userSub = this.getCustomUserDoc().valueChanges().subscribe(function (data) {
                            _this.myUserObservable = data;
                        });
                        this.getCustomUserData().then(function (result) {
                            if (result === true) {
                                resolve(true);
                            }
                            else {
                                //
                                window.alert('Fehler 18-5: Bitte kontaktieren Sie den Support!');
                            }
                        });
                    }
                    else {
                        console.log('[3 & 4]: AuthState: Not logged-in!');
                        sessionStorage.setItem('user', null);
                        this.authorised = false;
                        resolve(false);
                    }
                    this.userAuthState.unsubscribe();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    /**
     * Use the angularfire auth service to check if the user email is verified. If it is verified, we updated the emailVerified bit to true
     * in user document in the user collection.
     */
    AuthService.prototype.verifyEmail = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkingEmail = true;
            setTimeout(function () {
                /* We need to update the user to see if the E-Mail has been verified. The Auth User Object is not
                   updated automatically */
                _this.afAuth.auth.currentUser.reload()
                    .then((function (result) {
                    _this.emailSub = _this.afAuth.authState.subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            // if the email is verified already in user document
                            if (this.myUserObservable && this.myUserObservable.emailVerified) {
                                console.log('[EMAIL]: Verified in user document!');
                                this.emailVerified = true;
                                this.emailSub.unsubscribe();
                                this.ngxSmartModalService.close('emailVerificationModal');
                                resolve(true);
                            }
                            else if (user.emailVerified === true) {
                                console.log('[EMAIL]: Verified!');
                                this.emailVerified = true;
                                this.afs.collection('users').doc(user.uid).update({
                                    emailVerified: true
                                }).then(function (success) {
                                    _this.emailSub.unsubscribe();
                                    _this.ngxSmartModalService.close('emailVerificationModal');
                                    resolve(true);
                                });
                            }
                            else {
                                console.warn('[EMAIL]: Not verified!');
                                this.emailVerificationFailed = true;
                                resolve(false);
                                this.emailSub.unsubscribe();
                                setTimeout(function () {
                                    _this.emailVerificationFailed = false;
                                }, 3500);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }));
                _this.checkingEmail = false;
            }, 1000); // cosmetic delay
        });
    };
    // Getting the the user role, so it can be used by the loader's process to only load specific data
    AuthService.prototype.getCustomUserData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getCustomUserDoc().get().toPromise().then(function (result) {
                console.log('[4]: All values assigned');
                _this.role = result.data().role;
                _this.emailVerified = result.data().emailVerified;
                _this.profileCompleted = result.data().profileCompleted;
                _this.floorplan = result.data().floorplan;
                _this.dronepilot = result.data().dronepilot;
                _this.retouching = result.data().retouching;
                resolve(true);
            });
        });
    };
    // Login with email & password
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['/home']);
            });
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Register with email & password
    AuthService.prototype.register = function (rFV) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                if (!_this.adminFlag) {
                    _this.afAuth.auth.createUserWithEmailAndPassword(rFV.email, rFV.password1)
                        .then(function (result) {
                        _this.SendVerificationMail();
                        _this.uid = result.user.uid;
                        _this.SetUserData(result.user, rFV)
                            .then(function (userdataset) {
                            _this.registering = false;
                            _this.router.navigate(['/home']);
                            resolve();
                        });
                    });
                }
                else {
                    _this.showLoader.emit(true);
                    _this.createUserCallable({
                        'email': rFV.email,
                        'password': rFV.password1
                    }).subscribe(function (response) {
                        _this.showLoader.emit(false);
                        if (!response.message) {
                            _this.SetUserData(response, rFV)
                                .then(function (userdataset) {
                                _this.gs.showNotification('User created successfully', 'success');
                                resolve();
                            });
                        }
                        else {
                            _this.gs.showNotification(response.message, 'danger');
                            Object(q__WEBPACK_IMPORTED_MODULE_8__["reject"])();
                        }
                    });
                }
            }
            catch (error) {
                window.alert(error.message);
            }
        });
    };
    // Send Verfication-Email
    AuthService.prototype.SendVerificationMail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    };
    // Reset Forggot password
    AuthService.prototype.forgot = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('E-Mail wurde gesendet. Überprüfen Sie ihr E-Mail Postfach!');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Just used by the Sidebar and for css classes, not needed to run any database checks.
        get: function () {
            var user = JSON.parse(sessionStorage.getItem('user'));
            return (user !== null) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user, rFV) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            role: rFV.role,
            anrede: rFV.anrede,
            firstName: rFV.firstName,
            lastName: rFV.lastName,
            registeredOn: new Date(),
            pilotVerified: false,
            verificationNeeded: false,
            profileCompleted: false
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Logging the user out
    AuthService.prototype.logout = function () {
        var _this = this;
        this.userSub && this.userSub.unsubscribe();
        this.uSub && this.uSub.unsubscribe();
        this.authorised = false;
        this.adminFlag = false;
        return this.afAuth.auth.signOut()
            .then(function (result) {
            _this.router.navigate(['/logout']);
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    // Getting the Document
    AuthService.prototype.getCustomUserDoc = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        var uid = user.uid;
        return this.afs.collection('users').doc("" + uid);
    };
    AuthService.prototype.reAuthenticateUser = function (password) {
        var credentials = firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].EmailAuthProvider.credential(this.userData.email, password);
        return this.afAuth.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(credentials);
    };
    AuthService.prototype.changePassword = function (password) {
        return this.afAuth.auth.currentUser.updatePassword(password);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_6__["AngularFireFunctions"],
            _app_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-12 col-md-8 col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title text-left wsn mb-0\">Passwort ändern</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"changePasswordForm\">\n          <div class=\"form-group\">\n            <input autocomplete=\"current-password\" type=\"password\" formControlName=\"currentPassword\" class=\"form-control\" #currentPwd\n              placeholder=\"Aktuelles Passwort *\" (input)=\"validateOtherFields(['newPassword1'])\">\n            <span *ngIf=\"currentPassword.invalid && currentPassword.touched\">\n              <br>\n              <span *ngIf=\"currentPassword.errors.required\" class=\"alert alert-warning\">Bitte geben Sie Ihr aktuelles\n                Passwort ein!</span>\n              <span *ngIf=\"!currentPassword.errors.required && currentPassword.errors.passwordError\"\n                class=\"alert alert-warning\">{{currentPassword.errors.passwordError.value}}</span>\n            </span>\n          </div>\n          <div class=\"form-group\">\n            <input autocomplete=\"new-password\" type=\"password\" formControlName=\"newPassword1\" class=\"form-control\" #newPwd\n              placeholder=\"Neues Passwort *\" (input)=\"validateOtherFields(['newPassword2'])\">\n            <span *ngIf=\"newPassword1.invalid && newPassword1.touched\">\n              <br>\n              <span *ngIf=\"newPassword1.errors.required\" class=\"alert alert-warning\">Bitte geben Sie ein neues\n                Passwort ein!</span>\n              <span *ngIf=\"!newPassword1.errors.required && newPassword1.errors.passwordError\"\n                class=\"alert alert-warning\">{{newPassword1.errors.passwordError.value}}</span>\n              <span\n                *ngIf=\"!newPassword1.errors.required && !newPassword1.errors.passwordError && newPassword1.errors.noRepeatPasswordError\"\n                class=\"alert alert-warning\">{{newPassword1.errors.noRepeatPasswordError.value}}</span>\n            </span>\n          </div>\n          <div class=\"form-group\">\n            <input autocomplete=\"repeat-password\" type=\"password\" formControlName=\"newPassword2\" class=\"form-control\"\n              placeholder=\"Neues Passwort wiederholen *\">\n            <span *ngIf=\"newPassword2.invalid && newPassword2.touched\">\n              <br>\n              <span *ngIf=\"newPassword2.errors.required\" class=\"alert alert-warning\">Die eingegebenen Passwörter stimmen\n                nicht\n                überein!</span>\n              <span *ngIf=\"!newPassword2.errors.required && newPassword2.errors.passwordError\"\n                class=\"alert alert-warning\">{{newPassword2.errors.passwordError.value}}</span>\n              <span\n                *ngIf=\"!newPassword2.errors.required && !newPassword2.errors.passwordError && newPassword2.errors.repeatPasswordError\"\n                class=\"alert alert-warning\">{{newPassword2.errors.repeatPasswordError.value}}</span>\n            </span>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer \">\n        <button mat-raised-button type=\"submit\" (click)=\"changePassword()\" class=\"btn btn-fill btn-primary\">Passwort\n          ändern</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/form.validators */ "./src/app/shared/form.validators.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/global.service */ "./src/app/_services/global.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, gs, loader) {
        this.authService = authService;
        this.gs = gs;
        this.loader = loader;
        this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'currentPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'newPassword1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["passwordValidator"])()]),
            'newPassword2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["passwordValidator"])()])
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () { };
    ChangePasswordComponent.prototype.ngAfterViewInit = function () {
        var currentPwd = this.currentPwd.nativeElement;
        var newPwd = this.newPwd.nativeElement;
        this.newPassword1.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["passwordValidator"])(), Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["noRepeatPasswordValidator"])(currentPwd)]);
        this.newPassword2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["passwordValidator"])(), Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_2__["repeatPasswordValidator"])(newPwd)]);
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "currentPassword", {
        get: function () {
            return this.changePasswordForm.get('currentPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "newPassword1", {
        get: function () {
            return this.changePasswordForm.get('newPassword1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "newPassword2", {
        get: function () {
            return this.changePasswordForm.get('newPassword2');
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        Object.keys(this.changePasswordForm.controls).forEach(function (control) {
            _this.changePasswordForm.controls[control].updateValueAndValidity();
            _this.changePasswordForm.controls[control].markAsTouched();
        });
        if (this.changePasswordForm.valid) {
            this.authService.reAuthenticateUser(this.currentPassword.value).then(function (success) {
                _this.authService.changePassword(_this.newPassword1.value).then(function (success) {
                    _this.gs.showNotification('Password has been changed successfully. Please login with new credentials.', 'success');
                    _this.loader.logout();
                }, function (error) {
                    _this.gs.showNotification('Password could not be changed. Please try again later.', 'danger');
                });
            }, function (error) {
                _this.gs.showNotification('Incorrect current password!', 'danger');
            });
        }
    };
    ChangePasswordComponent.prototype.validateOtherFields = function (controls) {
        var _this = this;
        controls.forEach(function (control) {
            if (_this.changePasswordForm.controls[control].touched) {
                _this.changePasswordForm.controls[control].updateValueAndValidity();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('currentPwd'),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "currentPwd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newPwd'),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "newPwd", void 0);
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb25lbWVkaWEtc3Vib3JkZXItb3ZlcnZpZXcvZHJvbmVtZWRpYS1zdWJvcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Guide for Service provider -->\n<ng-container *ngIf=\"auth.myUserObservable.role == 'Dienstleister' && os.currentSuborder.status == 'processing'\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h5 class=\"card-title text-left wsn\">Kurz-Anleitung:</h5>\n            <p class=\"mb-1\"><strong>1. Schritt:</strong> Kunde kontaktieren und Termin für die Aufnahmen ausmachen.</p>\n            <p class=\"mb-1\"><strong>2. Schritt:</strong> Vor Ort (falls Aufnahmetermin ohne Kunde, vorab per E-Mail) die Einverständniserklärung des/der Eigentümer einfordern.</p>\n            <p class=\"mb-1\"><strong>3. Schritt:</strong> Die Aufnahmen nach den Vorgaben für Aerial // Extended (siehe Anforderungen) machen. Evtl. Sonderwünsche des Kundes beachten.</p>\n            <p class=\"mb-1\"><strong>4. Schritt:</strong> Die Aufnahmen unkomprimiert hier hochladen und anschließend auf \"Auftrag abschließen\" klicken.</p>\n            <p><i>Genaue Anweisungen für die Art der Aufnahmen sind nach Auftragstyp sortiert unter dem Menüpunkt\n          Anforderungen zu finden.</i></p>\n        </div>\n    </div>\n</ng-container>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <!-- Comment for Service provider -->\n        <p class=\"mb-1\"><strong>Kommentar für den Piloten: </strong> <span *ngIf=\"os.currentSuborder.optionalWishPilot === ''\">Nicht\n        angegeben</span>{{ os.currentSuborder.optionalWishPilot }}</p>\n        <!-- Agreement for customer -->\n        <div *ngIf=\"auth.myUserObservable.role === 'Kunde'\">\n            <a class=\"btn btn-danger mb-2\" target=\"_blank\" rel=\"noopener\" href=\"../../assets//documents/customer/Einverstaendniserklaerung_Drohnenaufnahmen.pdf\">\n                <i class=\"far fa-file-pdf\"></i> - Einverständniserklärung\n            </a>\n            <p style=\"color:#dc3545;\">Der Drohnenpilot benötigt diese Einverständniserklärung unterschrieben vom Immobilieneigentümer, um Aufnahmen anzufertigen. Bitte bringen Sie diese entweder zum Termin mit oder falls der Drohnenpilot die Aufnahmen alleine machen soll, lassen\n                Sie diesem die unterzeichnete Erklärung vorher zukommen.</p>\n        </div>\n\n    </div>\n</div>\n<!-- File upload component -->\n<app-file-upload *ngIf=\"(auth.myUserObservable.role == 'Dienstleister' || auth.myUserObservable.role == 'Administrator') && \n  os.currentSuborder.status === 'processing' || os.currentSuborder.status === 'uploaded' ||\n  os.currentSuborder.status === 'completed'\" [parentId]=\"os.currentSuborder.id\" [allowedFileExt]=\"allowedFileExt\" (setSubmitDisabled)=\"setSubmitDisabledHanlder($event)\" [subFolderName]=\"'dronePhotos/'\" [parentType]=\"'suborders'\" [subCollectionName]=\"'dronePhotos'\"\n    [parent]=\"this\">\n</app-file-upload>"

/***/ }),

/***/ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DronemediaSuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DronemediaSuborderOverviewComponent", function() { return DronemediaSuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DronemediaSuborderOverviewComponent = /** @class */ (function () {
    function DronemediaSuborderOverviewComponent(os, auth, us) {
        this.os = os;
        this.auth = auth;
        this.us = us;
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for drone photos
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DronemediaSuborderOverviewComponent.prototype.ngOnInit = function () {
    };
    DronemediaSuborderOverviewComponent.prototype.setSubmitDisabledHanlder = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    /**
     * controls disabling of attachment deletion
     */
    DronemediaSuborderOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' ||
            this.os.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    /**
   * controls disabling of attachment upload
   */
    DronemediaSuborderOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' ||
            this.os.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DronemediaSuborderOverviewComponent.prototype, "setSubmitDisabled", void 0);
    DronemediaSuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dronemedia-suborder-overview',
            template: __webpack_require__(/*! ./dronemedia-suborder-overview.component.html */ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./dronemedia-suborder-overview.component.css */ "./src/app/dronemedia-suborder-overview/dronemedia-suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], DronemediaSuborderOverviewComponent);
    return DronemediaSuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/expose-service-overview/expose-service-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/expose-service-overview/expose-service-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-list .row {\n  padding: 5px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3NlLXNlcnZpY2Utb3ZlcnZpZXcvZXhwb3NlLXNlcnZpY2Utb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2V4cG9zZS1zZXJ2aWNlLW92ZXJ2aWV3L2V4cG9zZS1zZXJ2aWNlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1saXN0IC5yb3cge1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/expose-service-overview/expose-service-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/expose-service-overview/expose-service-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-2\">\n      <div class=\"row plan\">\n        <img class=\"card-img-top\" src=\"../../assets/images/Expose.jpg\">\n      </div>\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5 details-list\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h5>Spezifikationen</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <strong>Kommentare</strong>\n        </div>\n        <div class=\"col-6\">\n          {{ subOrderDetails.description || '-' }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/expose-service-overview/expose-service-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/expose-service-overview/expose-service-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExposeServiceOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExposeServiceOverviewComponent", function() { return ExposeServiceOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExposeServiceOverviewComponent = /** @class */ (function () {
    function ExposeServiceOverviewComponent(orderService) {
        this.orderService = orderService;
        this.subOrderDetails = this.orderService.currentSuborder;
    }
    ExposeServiceOverviewComponent.prototype.ngOnInit = function () {
    };
    ExposeServiceOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expose-service-overview',
            template: __webpack_require__(/*! ./expose-service-overview.component.html */ "./src/app/expose-service-overview/expose-service-overview.component.html"),
            styles: [__webpack_require__(/*! ./expose-service-overview.component.css */ "./src/app/expose-service-overview/expose-service-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], ExposeServiceOverviewComponent);
    return ExposeServiceOverviewComponent;
}());



/***/ }),

/***/ "./src/app/expose-service/expose-service.component.css":
/*!*************************************************************!*\
  !*** ./src/app/expose-service/expose-service.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cG9zZS1zZXJ2aWNlL2V4cG9zZS1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/expose-service/expose-service.component.html":
/*!**************************************************************!*\
  !*** ./src/app/expose-service/expose-service.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Description what the customer will get -->\n<div class=\"row\">\n  <div class=\"col\">\n    <h4>Das erwartet Sie:</h4>\n    <ul class=\"list-unstyled mt-3 mb-4\">\n      <li *ngFor=\"let item of package.package_contents\" class=\"text-truncate\"> ✓ {{item}}</li>\n    </ul>\n    <!-- Border -->\n    <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\n\n    <!-- Form for special wishes of the customer -->\n    <form [formGroup]=\"exposeForm\">\n      <p>Digitales Exposé als eigene Objekthomepage. Stellt die von Ihnen zusätzlich ausgewählten Inhalte dynamisch dar.\n      </p>\n      <h4>Sonderwünsche:</h4>\n      <p class=\"mb-0\">Sollten Sie besondere Bearbeitungswünsche für das Exposé haben, erläutern Sie diese bitte\n        möglichst detailiert in dem Kommentarfeld für den Dienstleister.</p>\n      <a href=\"../../assets/images/formulierungshilfe.svg\" target=\"_blank\" rel=\"noopener\"\n        class=\"my-link\">Formulierungshilfe</a>\n\n      <!-- Decription for vstaging -->\n      <div class=\"form-group mt-4\">\n        <p class=\"mb-0\">Kommentar für das Exposé:</p>\n        <!-- placeholder for package 6 -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"{{package.description_placeholder}}\"\n          formControlName=\"description\">\n      </div>\n    </form>\n  </div>\n</div>\n<!-- Show price -->\n<div class=\"row mb-2\">\n  <div class=\"col-4\"></div>\n  <div class=\"col-8\">\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-2\"></div>\n      <div class=\"col-10 text-right font-sz-20\">Es fallen die vereinbarten Extrakosten je Exposé an</div>\n      <!-- <div class=\"col-4 text-right font-sz-20\"> € {{calculatePrice()}} </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/expose-service/expose-service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/expose-service/expose-service.component.ts ***!
  \************************************************************/
/*! exports provided: ExposeServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExposeServiceComponent", function() { return ExposeServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExposeServiceComponent = /** @class */ (function () {
    function ExposeServiceComponent(fb) {
        this.fb = fb;
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exposeForm = this.fb.group({
            description: ['']
        });
    }
    ExposeServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.package["validate"] = true;
        this.exposeForm.valueChanges.subscribe(function () {
            var formValues = {};
            formValues['description'] = _this.exposeForm.value.description;
            formValues['packageNum'] = _this.package['package_key'];
            _this.onFormChange.emit(formValues);
        });
        this.package.form = this.exposeForm;
    };
    ExposeServiceComponent.prototype.ngAfterViewInit = function () {
    };
    ExposeServiceComponent.prototype.onChange = function () {
        this.package.form = this.exposeForm;
    };
    Object.defineProperty(ExposeServiceComponent.prototype, "description", {
        get: function () {
            return this.exposeForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    ExposeServiceComponent.prototype.calculatePrice = function () {
        return this.package.price;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExposeServiceComponent.prototype, "onFormChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("package"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_1__["Package"])
    ], ExposeServiceComponent.prototype, "package", void 0);
    ExposeServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expose-service',
            template: __webpack_require__(/*! ./expose-service.component.html */ "./src/app/expose-service/expose-service.component.html"),
            styles: [__webpack_require__(/*! ./expose-service.component.css */ "./src/app/expose-service/expose-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ExposeServiceComponent);
    return ExposeServiceComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow card cgrid\">\r\n  <div class=\"card-header\">\r\n    <a class=\"my-link clickable\" (click)=\"active = !active\" [attr.aria-expanded]=\"active\" aria-controls=\"collapse1\">\r\n      <h5 class=\"card-title text-left wsn\">Aerial // Extended</h5>\r\n    </a>\r\n  </div>\r\n  <div [collapse]=\"!active\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">Wählt der Kunde keine speziellen Perspektiven und Höhen für die Luftaufnahmen aus,\r\n        beinhaltet das Extended Paket folgende Aufnahmen für den Kunden:</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <p><strong>Luftaufnahmen:</strong></p>\r\n          <ul>\r\n            <li>1. Seitenansicht <strong>(P1, H1)</strong></li>\r\n            <li>2. Seitenansicht <strong>(P1, H2)</strong></li>\r\n            <li>3. Seitenansicht <strong>(P3, H2)</strong></li>\r\n            <li>4. Seitenansicht <strong>(P5, H2)</strong></li>\r\n            <li>5. Seitenansicht <strong>(P7, H2)</strong></li>\r\n            <li>6. Draufsicht <strong>H2</strong></li>\r\n            <li>7. Draufsicht <strong>H9</strong></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/perspektiven.png\" style=\"max-width: 195px;\">\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/draufsicht.png\" style=\"max-width: 140px;\">\r\n        </div>\r\n      </div>\r\n      <p class=\"card-text\">Der Winkel und die Flughöhe sollen so gewählt werden, dass die Immobilie in einer\r\n        vorteilhaften Perspektive gezeigt wird und keine Teile der Immobilie abgeschnitten werden. Die optimale\r\n        Flughöhe bei Wohnhäusern liegt zwischen 20-30 Metern und bei Mehrfamilienhäusern zwischen 30-40 Metern.</p>\r\n      <p class=\"card-text mb-0 text-danger\"><strong>Wichtig!</strong> Die Haustür entspricht immer\r\n        der Perspektive P1.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"shadow card cgrid\">\r\n  <div class=\"card-header\">\r\n    <a class=\"my-link clickable\" (click)=\"active2 = !active2\" [attr.aria-expanded]=\"active2\" aria-controls=\"collapse2\">\r\n      <h5 class=\"card-title text-left wsn\">Beispiele Seitenansichten</h5>\r\n    </a>\r\n  </div>\r\n  <div [collapse]=\"!active2\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/seitenansicht.png\">\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/beispiele_seitenansicht.jpeg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"shadow card cgrid\">\r\n  <div class=\"card-header\">\r\n    <a class=\"my-link clickable\" (click)=\"active3 = !active3\" [attr.aria-expanded]=\"active3\" aria-controls=\"collapse2\">\r\n      <h5 class=\"card-title text-left wsn\">Beispiele Draufsichten</h5>\r\n    </a>\r\n  </div>\r\n  <div [collapse]=\"!active3\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/draufsicht1.png\">\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/beispiele_draufsicht.jpeg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.active = true; // Initial States der einklappbaren Cards
        this.active2 = true;
        this.active3 = true;
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/faq/index.ts":
/*!******************************!*\
  !*** ./src/app/faq/index.ts ***!
  \******************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return _faq_component__WEBPACK_IMPORTED_MODULE_0__["FaqComponent"]; });




/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fileContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fileContainer [type=file] {\n  cursor: inherit;\n  display: block;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}\n\n.file-list .file-entry{\n  border-radius: 5%;\n  padding: 5px 0 5px 0;\n}\n\n.file-list .file-entry:nth-child(odd){\n  background-color: #e5f9f6;\n}\n\n.file-list .file-entry .file-name{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-list:not(.logo-file){\n  height: 123px;\n  overflow-y: auto;\n}\n\n.upload-button-container{\n  padding-top: 40px;\n}\n\n.file-list .file-entry .file-remove{\n  cursor: pointer;\n}\n\nh1, h2, h3, h4, h5, h6\n{\n  color: #50535b !important;\n  font-weight: initial !important;\n}\n\n/* .uploaded-img {\n  width: 100px;\n  height: 80px;\n  border: 1px red solid;\n} */\n\n.img-wrap {\n  position: relative;\n  display: inline-block;\n  margin-left: 1%;\n}\n\n.img-wrap .close {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .5;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.img-wrap:hover .close {\n  opacity: 1;\n}\n\n.img-download {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100px;\n  text-overflow: ellipsis;\n}\n\n.uploaded-img,\n.download-layer{\n    height: 110px;\n    width: 110px;\n}\n\n.download-layer{\n    z-index: 10;\n    opacity: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    color: #FFF;\n    font-size: 0.8rem;\n    top: 0;\n    padding-left: 5px;\n}\n\n.download-layer:hover{\n    opacity: 1;\n}\n\n.file-delete,\n.file-download{\n    position: absolute;\n    color: #FFF;\n    cursor: pointer;\n}\n\n.file-download{\n  bottom: 5px;\n  left: 20px;\n}\n\n.file-delete{\n  left: 50px;\n  bottom: 10px;\n}\n\n.attachment{\n    margin-right: 15px;\n    position: relative;\n    border: 1px solid;\n    border-radius: 10%;\n    overflow: hidden;\n}\n\n.details-list .row.style-image{\n    background-color: #FFF;\n    font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsTUFBTTtBQUNSOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLCtCQUErQjtBQUNqQzs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZUNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDk5OXB4O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogMDtcbn1cbi5maWxlLWxpc3QgLmZpbGUtZW50cnl7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbn1cbi5maWxlLWxpc3QgLmZpbGUtZW50cnk6bnRoLWNoaWxkKG9kZCl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY5ZjY7XG59XG4uZmlsZS1saXN0IC5maWxlLWVudHJ5IC5maWxlLW5hbWV7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZpbGUtbGlzdDpub3QoLmxvZ28tZmlsZSl7XG4gIGhlaWdodDogMTIzcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4udXBsb2FkLWJ1dHRvbi1jb250YWluZXJ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeSAuZmlsZS1yZW1vdmV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxue1xuICBjb2xvcjogIzUwNTM1YiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4vKiAudXBsb2FkZWQtaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbn0gKi9cblxuLmltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbi5pbWctd3JhcCAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbWctZG93bmxvYWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udXBsb2FkZWQtaW1nLFxuLmRvd25sb2FkLWxheWVye1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xufVxuLmRvd25sb2FkLWxheWVye1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uZG93bmxvYWQtbGF5ZXI6aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5maWxlLWRlbGV0ZSxcbi5maWxlLWRvd25sb2Fke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmlsZS1kb3dubG9hZHtcbiAgYm90dG9tOiA1cHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZmlsZS1kZWxldGV7XG4gIGxlZnQ6IDUwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cbi5hdHRhY2htZW50e1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZGV0YWlscy1saXN0IC5yb3cuc3R5bGUtaW1hZ2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"auth.myUserObservable.role != 'Kunde' && status != 'completed'\">\n    <div class=\"col-6\">\n        <form [formGroup]=\"filesForm\">\n            <h5 class=\"font-weight-light\">Fotos ({{allowedFileExt.toString()}})</h5>\n            <div class=\"form-group row mt-3\">\n                <div class=\"col-3 upload-button-container\">\n                    <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                        Datei auswählen\n                        <input type=\"file\" [writeFile]=\"true\" formControlName=\"uploadedFiles\" multiple=\"true\"\n                            #uploadFileElem (change)=\"onChange()\" accept=\".png,.jpeg,.pdf,.jpg\" ng2FileSelect\n                            [uploader]=\"uploader\" />\n                    </label>\n                </div>\n                <div class=\"col-9 file-list\">\n                    <div class=\"file-entry row\" *ngFor=\"let file of uploader.queue\">\n                        <div class=\"col-8 file-name\">\n                            {{ file?.file?.name }}\n                        </div>\n                        <div class=\"col-4 text-right\">\n                            <span class=\"fas fa-trash-alt text-danger file-remove\" (click)=\"onRemoveFile(file)\"></span>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"uploadedFiles.invalid && (uploadedFiles.dirty || uploadedFiles.touched)\"\n                    class=\"alert alert-danger col-12\">\n                    <div *ngIf=\"uploadedFiles.errors.required\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                    <div *ngIf=\"uploadedFiles.errors.forbiddenFile\">\n                        Bitte laden Sie ein gültiges Dateiformat hoch\n                    </div>\n                    <div *ngIf=\"!uploadedFiles.errors.required && uploadedFiles.errors.fileRequired\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                </div>\n            </div>\n            <button class=\"fileContainer btn btn-dark btn-sm\" [disabled]=\"uploadedFiles.invalid || isUploadDisabled()\"\n                (click)=\"initiateUpload()\">Datei hochladen</button>\n        </form>\n        <!-- Individual file upload tasks -->\n        <ng-container *ngIf=\"startUpload\">\n            <ng-container *ngFor=\"let file of files\">\n                <app-upload-task (removeFileFromQueue)=\"onRemoveFile($event)\" [file]=\"file\"\n                    [path]=\"parentType + '/' + parentId + '/' + subFolderName + file.name\" [parentId]=\"parentId\"\n                    [parentType]=\"parentType\" [subCollectionName]=\"subCollectionName\"></app-upload-task>\n            </ng-container>\n        </ng-container>\n    </div>\n</div>\n<!-- Fetch uploaded photos by async pipe -->\n<!-- <ng-container *ngIf=\"attachments; else loading\">\n  <div class=\"row mt-2\">\n    <div class=\"col-12\">\n      <h5 class=\"mb-2\">Uploaded Photos</h5>\n      <div class=\"img-wrap\" *ngFor='let attachment of attachments'>\n        <span [ngStyle]=\"getDelAttachmentStyle()\" class=\"close\"\n          (click)=\"deleteAttachement(attachment?.id, attachment?.file_name)\">&times;</span>\n        <img class=\"uploaded-img\" [src]=\"attachment?.download_url\" *ngIf=\"attachment?.file_name.indexOf('.pdf') < 0\">\n        <img class=\"uploaded-img\" src=\"../../assets/images/PDF_file_icon.svg\"\n          *ngIf=\"attachment?.file_name.indexOf('.pdf') >= 0\">\n        <br>\n        <p class=\"img-download\"><a [href]=\"attachment?.download_url\" target=\"_blank\"\n            rel=\"noopener\">{{attachment?.file_name}}</a></p>\n      </div>\n    </div>\n  </div>\n</ng-container> -->\n\n<div class=\"row mt-4 mb-4\" *ngIf=\"attachments && attachments.length > 0\">\n    <div class=\"col-12 row\">\n        <div class=\"col-12\">\n            <h5>Hochgeladene Dateien</h5>\n        </div>\n        <div class=\"col-12 mt-3\">\n            <div class=\"row container\">\n                <div *ngFor='let attachment of attachments' class=\"attachment\">\n                    <div class=\"uploaded-img\">\n                        <img class=\"uploaded-img\" [src]=\"attachment?.download_url\"\n                            *ngIf=\"attachment?.file_name.indexOf('.pdf') < 0\">\n                        <img class=\"uploaded-img\" src=\"../../assets/images/PDF_file_icon.svg\"\n                            *ngIf=\"attachment?.file_name.indexOf('.pdf') >= 0\">\n                        <div class=\"download-layer\">\n                            <span class=\"file-name\">\n                                {{attachment.file_name}}\n                            </span>\n                            <a class=\"file-download\" target=\"_blank\" rel=\"noopener\" [href]=\"attachment?.download_url\">\n                                <i class=\"fas fa-cloud-download-alt\"></i>\n                            </a>\n                            <i [ngStyle]=\"getDelAttachmentStyle()\" class=\"fas fa-trash file-delete\"\n                                (click)=\"deleteAttachement(attachment?.id, attachment?.file_name)\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/package-editor/package-editor.component */ "./src/app/modals/package-editor/package-editor.component.ts");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(formBuilder, os, us, auth) {
        this.formBuilder = formBuilder;
        this.os = os;
        this.us = us;
        this.auth = auth;
        this.readOnly = false; // if the component should only show the files and not allow any actions
        this.subFolderName = ''; // subfolder name in the suborder main folder
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startUpload = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
        this.files = [];
        this.status = "";
        this.initializeForm();
    }
    FileUploadComponent.prototype.initializeForm = function () {
        this.filesForm = this.formBuilder.group({
            uploadedFiles: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_3__["forbiddenFileValidator"])(this.allowedFileExt, this.filesElem),
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_3__["fileRequiredValidator"])(this.uploader.queue)
                ]]
        });
    };
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch already uploaded files
        this.$attachments = this.us.getAttachments(this.parentType, this.parentId, this.subCollectionName)
            .subscribe(function (data) {
            _this.attachments = data;
            // handle enabling/disabled state of submit button in this function
            _this.setSubmitDisabledHanlder();
        });
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent) && !underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent.os)
            && !underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent.os.currentSuborder)) {
            this.status = this.parent.os.currentSuborder.status;
        }
        else if (this.parent && this.parent.orderService && this.parent.orderService.currentSuborder) {
            this.status = this.parent.orderService.currentSuborder.status;
        }
    };
    Object.defineProperty(FileUploadComponent.prototype, "uploadedFiles", {
        get: function () {
            return this.filesForm.get('uploadedFiles');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * add condition to disable submit button according to your suborder type
     */
    FileUploadComponent.prototype.setSubmitDisabledHanlder = function () {
        var disabled = false;
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent) && !underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent.os)
            && !underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent.os.currentSuborder)) {
            // condition for dronemedia and retouching suborder package number 2
            if ((this.parent.os.currentSuborder.orderType === 'dronemedia' ||
                this.parent.os.currentSuborder.orderType === 'retouching') &&
                String(this.parent.os.currentSuborder.packageNum) === '2' && this.attachments.length !== 7) {
                console.log('disabled is true: ', this.parent.os.currentSuborder.packageNum);
                disabled = true;
            }
            else if ((['6', '7', '8', '9'].indexOf(String(this.parent.os.currentSuborder.packageNum), 0) != -1) &&
                this.attachments.length !== this.parent.os.currentSuborder.requiredUploads) {
                // retouching and virtual staging suborders
                disabled = true;
            }
        }
        if (this.parent && this.parent.orderService && this.parent.orderService.currentSuborder && this.parent.orderService.currentSuborder.orderType === 'floorplan' && this.attachments.length <= 0) {
            disabled = true;
        }
        if (this.parent && this.parent.orderService && this.parent.orderService.currentSuborder && this.parent.orderService.currentSuborder.orderType === 'hdphotos' && this.attachments.length <= 0) {
            disabled = true;
        }
        this.setSubmitDisabled.emit(disabled);
    };
    FileUploadComponent.prototype.ngAfterViewInit = function () {
        if (underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.uploadFileElem)) {
            return;
        }
        var self = this;
        this.filesElem = this.uploadFileElem.nativeElement;
        this.filesForm = this.formBuilder.group({
            uploadedFiles: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_3__["forbiddenFileValidator"])(this.allowedFileExt, this.filesElem),
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_3__["fileRequiredValidator"])(this.uploader.queue)
                ]]
        });
        this.filesForm.valueChanges.subscribe(function () {
            var formValues = {};
            Object.keys(self.filesForm.controls).forEach(function (control) {
                if (control === 'uploadedFiles') {
                    self.files = [];
                    self.uploader.queue.forEach(function (entry) { return self.files.push(entry.file.rawFile); });
                }
            });
        });
    };
    FileUploadComponent.prototype.onChange = function () {
        var fileListLength = this.uploader.queue.length;
        var lastFile = this.uploader.queue[fileListLength - 1];
        for (var i = 0; i < fileListLength - 1; i++) {
            if (lastFile.file.name === this.uploader.queue[i].file.name && lastFile.file.size === this.uploader.queue[i].file.size) {
                lastFile.remove();
            }
        }
        // fix for Internet Explorer. Manually set the file value
        if (this.uploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.filesForm.get('uploadedFiles').value)) {
            this.filesForm.controls['uploadedFiles'].setValue(this.uploader.queue[0].file.name);
        }
        this.filesForm.controls.uploadedFiles.updateValueAndValidity();
    };
    FileUploadComponent.prototype.initiateUpload = function () {
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.uploader.queue)) {
            this.startUpload = true;
        }
    };
    /**
     * Remove the file from upload queue
     */
    FileUploadComponent.prototype.onRemoveFile = function (file, type) {
        var _this = this;
        if (underscore__WEBPACK_IMPORTED_MODULE_6__["isFunction"](file.remove)) {
            file.remove();
        }
        else {
            this.uploader.queue.forEach(function (entry) {
                if (entry.file.name === file.name) {
                    entry.remove();
                }
                if (underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](_this.uploader.queue)) {
                    _this.startUpload = false;
                }
            });
            // when uploader queue is empty reset the form touch state to remove
            // validation errors as the form is submitted
            if (this.uploader.queue.length === 0) {
                Object.keys(this.filesForm.controls).forEach(function (control) {
                    _this.filesForm.controls[control].markAsUntouched();
                    _this.filesForm.controls[control].markAsPristine();
                });
            }
        }
        this.filesForm.controls.uploadedFiles.updateValueAndValidity();
    };
    /**
     * Delete the uploaded filed
     */
    FileUploadComponent.prototype.deleteAttachement = function (subColDocId, fileName) {
        if (this.readOnly || (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent) && underscore__WEBPACK_IMPORTED_MODULE_6__["isFunction"](this.parent.deleteAttachmentDisabled) &&
            this.parent.deleteAttachmentDisabled())) {
            return;
        }
        var confirmed = confirm('Sind Sie sicher, dass Sie diese Datei löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden!');
        if (confirmed) {
            var path = this.parentType + "/" + this.parentId + "/" + this.subFolderName + fileName;
            this.us.deleteAttachment(this.parentType, this.parentId, this.subCollectionName, subColDocId, path);
        }
        else {
            alert('Löschvorgang abgebrochen!');
        }
    };
    /**
     * Disable the delete attachment icon conditionally
     */
    FileUploadComponent.prototype.getDelAttachmentStyle = function () {
        var style = {};
        if (this.readOnly) {
            style = { 'cursor': 'not-allowed' };
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent) && underscore__WEBPACK_IMPORTED_MODULE_6__["isFunction"](this.parent.deleteAttachmentDisabled) &&
            this.parent.deleteAttachmentDisabled()) {
            style = { 'cursor': 'not-allowed' };
        }
        return style;
    };
    /**
     * Disable the upload files button conditionally
     */
    FileUploadComponent.prototype.isUploadDisabled = function () {
        if (this.readOnly) {
            return true;
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.parent) && underscore__WEBPACK_IMPORTED_MODULE_6__["isFunction"](this.parent.isUploadDisabled) &&
            this.parent.isUploadDisabled()) {
            return true;
        }
        return false;
    };
    FileUploadComponent.prototype.ngOnDestroy = function () {
        // unsubscripte the obeservables when the view is destroyed
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.$attachments)) {
            console.log('un subscribing from attachments');
            this.$attachments.unsubscribe();
            this.attachments = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("uploadFileElem"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FileUploadComponent.prototype, "uploadFileElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parentId'),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "parentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parentType'),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "parentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('subCollectionName'),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "subCollectionName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('allowedFileExt'),
        __metadata("design:type", Array)
    ], FileUploadComponent.prototype, "allowedFileExt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parent'),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('readOnly'),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('subFolderName'),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "subFolderName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "setSubmitDisabled", void 0);
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-list .row{\n    padding: 5px 0 5px 0;\n}\n.details-list .row:nth-child(even){\n    background-color: #f6fafd;\n}\n.comments-section{\n    border: 1px solid;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 5px;\n}\n.file-thumbnail,\n.download-layer{\n    height: 110px;\n    width: 110px;\n}\n.download-layer{\n    z-index: 10;\n    opacity: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    color: #FFF;\n    font-size: 0.8rem;\n    top: 0;\n    padding-left: 5px;\n}\n.download-layer:hover{\n    opacity: 1;\n}\n.file-download{\n    position: absolute;\n    bottom: 5px;\n    left: 20px;\n    color: #FFF;\n}\n.attachment{\n    margin-right: 15px;\n    position: relative;\n    border: 1px solid;\n    border-radius: 10%;\n    overflow: hidden;\n}\n.details-list .row.style-image{\n    background-color: #FFF;\n    font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxvb3JwbGFuLXN1Ym9yZGVyLW92ZXJ2aWV3L2Zsb29ycGxhbi1zdWJvcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04saUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zsb29ycGxhbi1zdWJvcmRlci1vdmVydmlldy9mbG9vcnBsYW4tc3Vib3JkZXItb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWxpc3QgLnJvd3tcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbn1cbi5kZXRhaWxzLWxpc3QgLnJvdzpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmFmZDtcbn1cbi5jb21tZW50cy1zZWN0aW9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5maWxlLXRodW1ibmFpbCxcbi5kb3dubG9hZC1sYXllcntcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbn1cbi5kb3dubG9hZC1sYXllcntcbiAgICB6LWluZGV4OiAxMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmRvd25sb2FkLWxheWVyOmhvdmVye1xuICAgIG9wYWNpdHk6IDE7XG59XG4uZmlsZS1kb3dubG9hZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbi5hdHRhY2htZW50e1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZGV0YWlscy1saXN0IC5yb3cuc3R5bGUtaW1hZ2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-6 details-list\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h5>Spezifikationen</h5>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Möbliert</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n          'fa-check text-success': subOrderDetails.mobliert,\n          'fa-times text-danger': !subOrderDetails.mobliert\n        }\"></i>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Bemaßung</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n            'fa-check text-success': subOrderDetails.bemasung,\n            'fa-times text-danger': !subOrderDetails.bemasung\n          }\"></i>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Nordpfeil</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n            'fa-check text-success': subOrderDetails.nordpfeil,\n            'fa-times text-danger': !subOrderDetails.nordpfeil\n          }\"></i>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Raumbezeichnung</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n            'fa-check text-success': subOrderDetails.raumbezeichnung,\n            'fa-times text-danger': !subOrderDetails.raumbezeichnung\n          }\"></i>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Wie immer?</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n            'fa-check text-success': subOrderDetails.allRooms,\n            'fa-times text-danger': !subOrderDetails.allRooms\n          }\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 col-md-6 mt-3 mt-md-0 details-list\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h5>Produktdetails anzeigen</h5>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>zusätzliche Etage: </strong>\n      </div>\n      <div class=\"col-6\">\n        {{subOrderDetails.additionalFloor}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Isometrische Ansicht</strong>\n      </div>\n      <div class=\"col-6\">\n        <i class=\"fas\" [ngClass]=\"{\n            'fa-check text-success': subOrderDetails.isometric,\n            'fa-times text-danger': !subOrderDetails.isometric\n          }\"></i>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Produkt: </strong>\n      </div>\n      <div class=\"col-6\">\n        {{subOrderDetails.packageName}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 text-right\">\n        <strong>Style: </strong>\n      </div>\n      <div class=\"col-6\">\n        {{subOrderDetails.styleName}}\n      </div>\n    </div>\n    <div class=\"row style-image\">\n      <div class=\"col-6 text-right\">\n        <img src=\"{{subOrderDetails.imgUrl}}\" class=\"file-thumbnail\">\n      </div>\n      <div class=\"col-6\">\n        *Nur zu Anschaungszwecken. Ihr Grundriss kann auf Basis Ihrer Auswahl abweichen.\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row mt-4 align-items-center\">\n  <div class=\"col-12 col-md-4 col-xl-2 text-md-right\">\n    <strong>Kommentare/Anmerkungen: </strong>\n  </div>\n  <div class=\"col-12 col-md-8 comments-section\">\n    {{subOrderDetails.comments || 'N/A'}}\n  </div>\n</div>\n<div class=\"row mt-4\">\n  <div class=\"col-12 col-md-8 col-lg-6 row\" *ngIf=\"subOrderDetails.planImages?.length > 0\">\n    <div class=\"col-12\">\n      <h5>Grundrisse</h5>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"row container\">\n        <div *ngFor=\"let file of subOrderDetails.planImages\" class=\"attachment\">\n          <div class=\"uploaded-img\">\n            <img src=\"{{file.url}}\" class=\"file-thumbnail\">\n            <div class=\"download-layer\">\n              <span class=\"file-name\">\n                {{file.fileName}}\n              </span>\n              <a class=\"file-download\" target=\"_blank\" rel=\"noopener\" download=\"{{file.fileName}}\" [href]=\"file.url\">\n                <i class=\"fas fa-cloud-download-alt\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 col-md-8 col-lg-6 row\" *ngIf=\"subOrderDetails.logoImage\">\n    <div class=\"col-12\">\n      <h5>Logo</h5>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"row container\">\n        <div class=\"attachment\">\n          <div class=\"uploaded-img\">\n            <img src=\"{{subOrderDetails.logoImage.url}}\" class=\"file-thumbnail\">\n            <div class=\"download-layer\">\n              <span class=\"file-name\">\n                {{subOrderDetails.logoImage.fileName}}\n              </span>\n              <a class=\"file-download\" target=\"_blank\" rel=\"noopener\" download=\"{{subOrderDetails.logoImage.fileName}}\"\n                [href]=\"subOrderDetails.logoImage.url\">\n                <i class=\"fas fa-cloud-download-alt\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- File upload component -->\n<div class=\"mt-5 mb-5\">\n  <app-file-upload *ngIf=\"(auth.myUserObservable.role == 'Dienstleister' || auth.myUserObservable.role == 'Administrator') && \n    orderService.currentSuborder.status === 'processing' || orderService.currentSuborder.status === 'uploaded' ||\n    orderService.currentSuborder.status === 'completed'\" [parentId]=\"orderService.currentSuborder.id\"\n    [allowedFileExt]=\"allowedFileExt\" (setSubmitDisabled)=\"setSubmitDisabledHanlder($event)\"\n    [subFolderName]=\"'floorplans/'\" [parentType]=\"'suborders'\" [subCollectionName]=\"'floorplans'\" [parent]=\"this\">\n  </app-file-upload>\n</div>"

/***/ }),

/***/ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FloorplanSuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplanSuborderOverviewComponent", function() { return FloorplanSuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FloorplanSuborderOverviewComponent = /** @class */ (function () {
    function FloorplanSuborderOverviewComponent(orderService, auth) {
        this.orderService = orderService;
        this.auth = auth;
        this.allowedFileExt = ['pdf', 'jpeg', 'png', 'jpg', 'JPG'];
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subOrderDetails = this.orderService.currentSuborder;
    }
    FloorplanSuborderOverviewComponent.prototype.ngOnInit = function () {
    };
    FloorplanSuborderOverviewComponent.prototype.setSubmitDisabledHanlder = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    /**
     * controls disabling of attachment deletion
     */
    FloorplanSuborderOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.orderService.currentSuborder.status === 'uploaded' ||
            this.orderService.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    /**
   * controls disabling of attachment upload
   */
    FloorplanSuborderOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.orderService.currentSuborder.status === 'uploaded' ||
            this.orderService.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FloorplanSuborderOverviewComponent.prototype, "setSubmitDisabled", void 0);
    FloorplanSuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floorplan-suborder-overview',
            template: __webpack_require__(/*! ./floorplan-suborder-overview.component.html */ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./floorplan-suborder-overview.component.css */ "./src/app/floorplan-suborder-overview/floorplan-suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FloorplanSuborderOverviewComponent);
    return FloorplanSuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page-Content -->\n<div id=\"paddingdiv\">\n\n  <!-- Aligining content with Logo -->\n  <div style=\"max-width: 300px; width: 100%; height: auto; margin: 0 auto;\">\n\n    <!-- Logo -->\n    <img class=\"mb-4\" src=\"assets/images/Logo-IMOGENT-mit-Schrift-300x94.png\">\n\n    <!-- Password Reset Form -->\n    <h3 class=\"b\">Passwort vergessen</h3>\n    <form>\n\n      <!-- E-Mail -->\n      <div class=\"form-group\">\n\n        <!-- E-Mail Input -->\n        <label class=\"font-italic b sr-only\" for=\"email\">E-Mail</label>\n        <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Email\" #userEmail required autofocus>\n\n      </div>\n\n      <!-- Form Buttons: Reset & Cancel -->\n      <div class=\"form-group\">\n\n        <!-- Reset -->\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"authService.forgot(userEmail.value)\">Zurücksetzen</button>\n        <!-- Cancel -->\n        <a routerLink=\"/login\" class=\"btn btn-link\">Abbrechen</a>\n\n      </div>\n\n    </form>\n\n    <!-- Footer -->\n    <section>\n      <p class=\"b nomarbot\">&copy;2019 IMOGENT GmbH</p>\n      <!-- Privacy Policy & Imprint -->\n      <a href=\"https://www.imogent.de/datenschutz\" class=\"my-link\">Datenschutz</a><span> | </span><a class=\"my-link\" href=\"https:www.imogent.de/impressum\">Impressum</a>\n    </section>\n    \n  </div>\n  \n</div>\n  "

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService) {
        this.authService = authService;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/hdphotos-service/hdphotos-service.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/hdphotos-service/hdphotos-service.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header{\n    border-radius: 5px;\n    background: rgba(44,179,160,0.5);\n    padding: 7px 7px;\n}\n\nlabel,\n:host ::ng-deep .mat-checkbox-layout {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGRwaG90b3Mtc2VydmljZS9oZHBob3Rvcy1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGRwaG90b3Mtc2VydmljZS9oZHBob3Rvcy1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsMTc5LDE2MCwwLjUpO1xuICAgIHBhZGRpbmc6IDdweCA3cHg7XG59XG5cbmxhYmVsLFxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/hdphotos-service/hdphotos-service.component.html":
/*!******************************************************************!*\
  !*** ./src/app/hdphotos-service/hdphotos-service.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-lg-4\">\n    <img class=\"card-img-top\" src=\"../../assets/images/{{package.package_images[0]}}\">\n  </div>\n  <div class=\"col-12 col-lg-8\">\n    <form [formGroup]=\"photosForm\">\n      <div class=\"card cgrid margin\">\n        <div class=\"card-header\">\n          <a class=\"my-link clickable\" (click)=\"active1 = !active1\" [attr.aria-expanded]=\"active1\"\n            aria-controls=\"collapse1\">\n            <h5 class=\"card-title text-white text-left wsn row\">\n              <span class=\"col\">\n                <span class=\"fas text-left mr-2\" [ngClass]=\"{\n              'fa-chevron-right': !active1,\n              'fa-chevron-down': active1\n            }\">\n                </span> Produktdetails anzeigen\n              </span>\n            </h5>\n          </a>\n        </div>\n        <div [collapse]=\"!active1\">\n          <div class=\"card-body\">\n            <ul class=\"list-unstyled font-500\">\n              <li>✓ Anfahrt bis 150 Kilometer</li>\n              <li>✓ Auflösung min. 4 Megapixel</li>\n              <li>✓ 2 Fotoformate 16:9 und 4:3</li>\n              <li>✓ Professionelle Nachbearbeitung</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-md-8 col-lg-9 pl-4\">\n          <h4 class=\"mb-0\"><b>7 professionelle Fotos</b></h4>\n          <span>aus verschiedenen Perspektiven</span>\n        </div>\n        <div class=\"col-12 col-md-4 col-lg-3 text-md-right pl-4\">\n          <strong>{{package.pack_price + \" €\"}}</strong>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-4 col-md-2\">\n          <input type=\"number\" id=\"additionalFloor\" matTooltip=\"{{errorMsg}}\" [matTooltipClass]=\"{'error-tooltip':true}\"\n            formControlName=\"additionalPhotos\" class=\"form-control numberText text-center\" min=\"0\"\n            (change)=\"calculateSum()\" value=\"0\">\n        </div>\n        <div class=\"col-4 col-md-2\">\n          <div class=\"font-200 text-center\">\n            {{package.price}} € <br> je Foto\n          </div>\n        </div>\n        <div class=\"col-4 d-block d-md-none text-right\">\n          <p class=\"font-300\">\n            {{num_photos_price}} €\n          </p>\n        </div>\n        <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n          <div class=\"font-300\">\n            <strong>5 zusätzliche Fotos</strong>\n          </div>\n          <div class=\"font-200 text-justify\">\n            Handelt es sich um eine sehr große Immobilie und Sie wünschen weitere Fotoaufnahmen, können Sie an dieser\n            Stelle noch weitere Aufnahmen der Bestellung hinzufügen.\n          </div>\n        </div>\n        <div class=\"col-2 d-none d-md-block text-right\">\n          <p class=\"font-300\">\n            {{num_photos_price}} €\n          </p>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-4 col-md-2\">\n          <div class=\"checkbox_align text-center\">\n            <mat-checkbox #postprocessingCheck formControlName=\"postProcessing\" color=\"primary\"\n              id=\"postprocessing-check\" (change)=\"onPostProcessingChange($event)\">\n            </mat-checkbox>\n            <div class=\"font-200\">hinzufügen</div>\n          </div>\n        </div>\n        <div class=\"col-4 col-md-2\">\n        </div>\n        <div class=\"col-4 d-block d-md-none text-right text-primary\">\n          <span>gratis</span>\n        </div>\n        <div class=\"col-10 col-md-6 pt-3 pt-md-0\">\n          <div class=\"font-300\">\n            <strong>Nachbearbeitung</strong>\n          </div>\n          <div class=\"font-200\">\n            Farbkorrekturen, Licht-und Winkelanpassungen\n          </div>\n        </div>\n        <div class=\"col-2 d-none d-md-block text-right text-primary\">\n          <span>gratis</span>\n        </div>\n      </div>\n      <hr>\n      <div class=\"card cgrid margin\">\n        <div class=\"card-header\">\n          <a class=\"my-link clickable\" (click)=\"active2 = !active2\" [attr.aria-expanded]=\"active2\"\n            aria-controls=\"collapse2\">\n            <h5 class=\"card-title text-white text-left wsn row\">\n              <span class=\"col\">\n                <span class=\"fas text-left mr-2\" [ngClass]=\"{\n                'fa-chevron-right': !active2,\n                'fa-chevron-down': active2\n              }\">\n                </span> Produktdetails anzeigen\n              </span>\n            </h5>\n          </a>\n        </div>\n        <div [collapse]=\"!active2\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3\">\n                <mat-checkbox #logocheck formControlName=\"logo\" class=\"example-margin\" color=\"primary\"\n                  (change)=\"onLogoCheck()\">Logo\n                </mat-checkbox>\n                <br />\n                <mat-checkbox #blurcheck formControlName=\"blurred\" class=\"example-margin\" color=\"primary\">Blurren\n                </mat-checkbox>\n                <br />\n              </div>\n              <div class=\"col-12 col-md-9\" [hidden]=\"!postProcessing.value\">\n                <ng-container class=\"mt-2\">\n                  <h5 class=\"mb-2 font-weight-light\">Bitte laden Sie Ihr Logo im PNG-Format hoch</h5>\n                  <div class=\"mb-4 form-group row uploadArea\">\n                    <div class=\"col-12 col-sm-3 buttonUpload\">\n                      <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                        Datei hochladen\n                        <input type=\"file\" [writeFile]=\"true\" formControlName=\"logoImage\" #logoImg (change)=\"onChange()\"\n                          accept=\".png\" ng2FileSelect [uploader]=\"logoUploader\" />\n                      </label>\n                    </div>\n                    <div *ngIf=\"logoUploader.queue.length > 0\" class=\"col-12 col-sm-9 mt-2\">\n                      <div class=\"file-entry row\" *ngFor=\"let file of logoUploader.queue\">\n                        <div class=\"col-8 file-name\">\n                          {{ file?.file?.name }}\n                        </div>\n                        <div class=\"col-4 text-right\">\n                          <span class=\"fas fa-trash-alt text-danger file-remove\" (click)=\"onRemoveFile(file)\"></span>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"logoImage.invalid && (logoImage.dirty || logoImage.touched)\"\n                      class=\"alert alert-danger col-12\">\n                      <div *ngIf=\"logoImage.errors.required\">\n                        Bitte laden Sie das Logo in einem unterstützten Format hoch!\n                      </div>\n                      <div *ngIf=\"logoImage.errors.forbiddenFile\">\n                        Bitte laden Sie ein gültiges Format hoch (PNG)\n                      </div>\n                      <div *ngIf=\"!logoImage.errors.required && logoImage.errors.fileRequired\">\n                        Bitte laden Sie das Logo in einem unterstützten Format hoch!\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n              <div class=\"col-12 mt-4 mb-4\">\n                <div class=\"form-group col-12\">\n                  <textarea class=\"form-control\" formControlName=\"postprocessingComments\"\n                    placeholder=\"Kommentare/Anmerkungen für Nachbearbeitung\" #postprocessingComments></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"form-group col-12\">\n          <textarea class=\"form-control\" formControlName=\"photographerComments\"\n            placeholder=\"Kommentare/Anmerkungen für Fotografen\" #photographerComments></textarea>\n        </div>\n      </div>\n      <hr class=\"hr_floorplan\">\n      <div class=\"row mb-4\">\n        <div class=\"col-8\">\n          <h4>Summe</h4>\n        </div>\n        <div class=\"col-4 font-sz-20 text-right\">\n          {{total_price}} €\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hdphotos-service/hdphotos-service.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hdphotos-service/hdphotos-service.component.ts ***!
  \****************************************************************/
/*! exports provided: HdphotosServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdphotosServiceComponent", function() { return HdphotosServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modals/package-editor/package-editor.component */ "./src/app/modals/package-editor/package-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HdphotosServiceComponent = /** @class */ (function () {
    function HdphotosServiceComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMsg = '';
        this.additional_photos = 1;
        this.active2 = false;
        this.active1 = false;
        this.logoUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.isPostProcessing = false;
        this.photosForm = this.formBuilder.group({
            'additionalPhotos': [0],
            'postProcessing': [false],
            'blurred': [{
                    value: false,
                    disabled: true
                }],
            'logo': [{
                    value: false,
                    disabled: true
                }],
            'photographerComments': [''],
            'postprocessingComments': [{
                    value: '',
                    disabled: true
                }],
            'logoImage': ['']
        });
    }
    Object.defineProperty(HdphotosServiceComponent.prototype, "additionalPhotos", {
        get: function () {
            return this.photosForm.get('additionalPhotos');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "postProcessing", {
        get: function () {
            return this.photosForm.get('postProcessing');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "blurred", {
        get: function () {
            return this.photosForm.get('blurred');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "photographerComments", {
        get: function () {
            return this.photosForm.get('photographerComments');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "postprocessingComments", {
        get: function () {
            return this.photosForm.get('postprocessingComments');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "logoImage", {
        get: function () {
            return this.photosForm.get('logoImage');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdphotosServiceComponent.prototype, "logo", {
        get: function () {
            return this.photosForm.get('logo');
        },
        enumerable: true,
        configurable: true
    });
    HdphotosServiceComponent.prototype.ngOnInit = function () {
        this.package['photo_price'] = accounting__WEBPACK_IMPORTED_MODULE_2__["unformat"](this.package['price'], ',');
        this.num_photos_price = this.additional_photos * this.package['photo_price'];
        this.package.form = this.photosForm;
        this.package["validate"] = true;
        this.oldValidate = this.package["validate"];
        this.sum = this.package['pack_price'];
        this.package['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_2__["formatMoney"](this.sum, '', 2, '.', ',');
        this.total_price = this.package['total_price'];
    };
    HdphotosServiceComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.logoImgElem = this.logoImg.nativeElement;
        this.photosForm = this.formBuilder.group({
            'additionalPhotos': [0],
            'postProcessing': [false],
            'blurred': [false],
            'logo': [false],
            'photographerComments': [''],
            'postprocessingComments': [{
                    value: '',
                    disabled: !this.isPostProcessing
                }],
            'logoImage': ['', [
                    Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_6__["forbiddenFileValidator"])(["png"], this.logoImgElem)
                ]]
        });
        self.photosForm.valueChanges.subscribe(function () {
            self.emitFormValues();
        });
    };
    HdphotosServiceComponent.prototype.ngAfterContentInit = function () {
        this.calculateSum();
    };
    HdphotosServiceComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.package["validate"] != this.oldValidate) {
            Object.keys(this.photosForm.controls).forEach(function (control) {
                _this.photosForm.controls[control].markAsTouched();
            });
        }
    };
    HdphotosServiceComponent.prototype.calculateSum = function () {
        if (this.additionalPhotos.value < 0) {
            this.additionalPhotos.setValue(0);
            return;
        }
        this.num_photos_price = accounting__WEBPACK_IMPORTED_MODULE_2__["formatMoney"](this.additionalPhotos.value * this.package['photo_price'], '', 2, '.', ',');
        this.sum = (this.additionalPhotos.value * this.package['photo_price']) + accounting__WEBPACK_IMPORTED_MODULE_2__["unformat"](this.package['pack_price'], ',');
        this.package['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_2__["formatMoney"](this.sum, '', 2, '.', ',');
        this.total_price = this.package['total_price'];
    };
    HdphotosServiceComponent.prototype.onLogoCheck = function () {
        if (this.photosForm.controls.logo.value) {
            this.logoImage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_6__["forbiddenFileValidator"])(["png"], this.logoImgElem), Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_6__["fileRequiredValidator"])(this.logoUploader.queue)]);
        }
        else {
            this.logoImage.setValidators([Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_6__["forbiddenFileValidator"])(["png"], this.logoImgElem)]);
        }
        this.logoImage.updateValueAndValidity();
        this.package.form = this.photosForm;
    };
    HdphotosServiceComponent.prototype.onChange = function () {
        this.package.form = this.photosForm;
        if (this.logoUploader.queue.length > 1) {
            this.logoUploader.queue[0].remove();
        }
        if (this.logoUploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](this.photosForm.get('logoImage').value)) {
            this.photosForm.controls['logoImage'].setValue(this.logoUploader.queue[0].file.name);
        }
        this.logoImage.updateValueAndValidity();
    };
    HdphotosServiceComponent.prototype.onRemoveFile = function (file) {
        file.remove();
        this.logoImage.setValue("");
        this.logoImage.updateValueAndValidity();
    };
    HdphotosServiceComponent.prototype.emitFormValues = function () {
        var self = this;
        var formValues = {};
        var fileList = [];
        Object.keys(self.photosForm.controls).forEach(function (control) {
            if (control !== 'planImages' && control !== 'logoImage') {
                formValues[control] = self.photosForm.get(control).value;
            }
            else {
                fileList = [];
                self.logoUploader.queue.forEach(function (entry) { return fileList.push(entry.file.rawFile); });
                formValues[control] = fileList;
            }
        });
        formValues["orderType"] = this.package.service_key;
        formValues['packageNum'] = this.package['package_key'];
        self.onFormChange.emit(formValues);
    };
    HdphotosServiceComponent.prototype.onPostProcessingChange = function (event) {
        if (!event.checked) {
            this.logo.reset(false);
            this.logo.disable();
            this.blurred.reset(false);
            this.blurred.disable();
            this.logoImage.reset();
            this.logoImage.disable();
            this.logoUploader.clearQueue();
            this.postprocessingComments.reset();
            this.postprocessingComments.disable();
        }
        else {
            this.logo.enable();
            this.blurred.enable();
            this.logoImage.enable();
            this.postprocessingComments.enable();
            this.active2 = true;
        }
        this.emitFormValues();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("imoPackage"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_1__["Package"])
    ], HdphotosServiceComponent.prototype, "package", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HdphotosServiceComponent.prototype, "onFormChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("logoImg"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HdphotosServiceComponent.prototype, "logoImg", void 0);
    HdphotosServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hdphotos-service',
            template: __webpack_require__(/*! ./hdphotos-service.component.html */ "./src/app/hdphotos-service/hdphotos-service.component.html"),
            styles: [__webpack_require__(/*! ./hdphotos-service.component.css */ "./src/app/hdphotos-service/hdphotos-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], HdphotosServiceComponent);
    return HdphotosServiceComponent;
}());



/***/ }),

/***/ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".suborder-details .row:nth-child(odd){\n    background-color: #f6fafd;\n}\n.logo-img{\n    width: 50%;\n}\n.comments-section{\n    border: 1px solid;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 5px;\n}\n.file-thumbnail,\n.download-layer{\n    height: 110px;\n    width: 110px;\n}\n.download-layer{\n    z-index: 10;\n    opacity: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    color: #FFF;\n    font-size: 0.8rem;\n    top: 0;\n    padding-left: 5px;\n}\n.download-layer:hover{\n    opacity: 1;\n}\n.file-download{\n    position: absolute;\n    bottom: 5px;\n    left: 20px;\n    color: #FFF;\n}\n.attachment{\n    margin-right: 15px;\n    position: relative;\n    border: 1px solid;\n    border-radius: 10%;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGRwaG90b3Mtc3Vib3JkZXItb3ZlcnZpZXcvaGRwaG90b3Mtc3Vib3JkZXItb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9oZHBob3Rvcy1zdWJvcmRlci1vdmVydmlldy9oZHBob3Rvcy1zdWJvcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym9yZGVyLWRldGFpbHMgLnJvdzpudGgtY2hpbGQob2RkKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmYWZkO1xufVxuLmxvZ28taW1ne1xuICAgIHdpZHRoOiA1MCU7XG59XG4uY29tbWVudHMtc2VjdGlvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZmlsZS10aHVtYm5haWwsXG4uZG93bmxvYWQtbGF5ZXJ7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB3aWR0aDogMTEwcHg7XG59XG4uZG93bmxvYWQtbGF5ZXJ7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5kb3dubG9hZC1sYXllcjpob3ZlcntcbiAgICBvcGFjaXR5OiAxO1xufVxuLmZpbGUtZG93bmxvYWR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNGRkY7XG59XG4uYXR0YWNobWVudHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-12 col-md-4 col-lg-2\">\n    <img class=\"card-img-top\" src=\"../../assets/images/hd_fotos/hd_photos_inside.jpg\">\n  </div>\n  <div class=\"col-12 col-md-8 col-lg-10\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 suborder-details pt-3\">\n        <div class=\"row\">\n          <div class=\"col-6 text-right\">\n            <strong>5 zusätzliche Fotos:</strong>\n          </div>\n          <div class=\"col-6\">\n            <span>{{subOrderDetails.additionalPhotos}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6 text-right\">\n            <strong>Nachbearbeitung:</strong>\n          </div>\n          <div class=\"col-6\">\n            <i class=\"fas\" [ngClass]=\"{\n                'fa-check text-success': subOrderDetails.postProcessing,\n                'fa-times text-danger': !subOrderDetails.postProcessing\n              }\"></i>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6 text-right\">\n            <strong>Blurren:</strong>\n          </div>\n          <div class=\"col-6\">\n            <i class=\"fas\" [ngClass]=\"{\n                'fa-check text-success': subOrderDetails.blurred,\n                'fa-times text-danger': !subOrderDetails.blurred\n              }\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6 pt-3\">\n        <div class=\"row\">\n          <div class=\"col-6 text-right\">\n            <strong>Logo:</strong>\n          </div>\n          <div class=\"col-6\">\n            <img src=\"{{subOrderDetails.logoImage.url}}\" class=\"logo-img\" alt=\"logo\" *ngIf=\"subOrderDetails.logo\">\n            <i class=\"fas fa-times text-danger\" *ngIf=\"!subOrderDetails.logo\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-4 align-items-center\">\n      <div class=\"col-12 col-md-4 text-md-right\">\n        <strong>Kommentare/Anmerkungen für Fotografen: </strong>\n      </div>\n      <div class=\"col-12 col-md-8 comments-section\">\n        {{subOrderDetails.photographerComments || 'N/A'}}\n      </div>\n    </div>\n    <div class=\"row mt-4 align-items-center\">\n      <div class=\"col-12 col-md-4 text-md-right\">\n        <strong>Kommentare/Anmerkungen für Nachbearbeitung: </strong>\n      </div>\n      <div class=\"col-12 col-md-8 comments-section\">\n        {{subOrderDetails.postprocessingComments || 'N/A'}}\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"mt-5 mb-5\">\n  <app-file-upload *ngIf=\"(auth.myUserObservable.role == 'Dienstleister' || auth.myUserObservable.role == 'Administrator') && \n      orderService.currentSuborder.status === 'processing' || orderService.currentSuborder.status === 'uploaded' ||\n      orderService.currentSuborder.status === 'completed'\" [parentId]=\"orderService.currentSuborder.id\"\n    [allowedFileExt]=\"allowedFileExt\" (setSubmitDisabled)=\"setSubmitDisabledHanlder($event)\"\n    [subFolderName]=\"'hdphotos/'\" [parentType]=\"'suborders'\" [subCollectionName]=\"'hdphotos'\" [parent]=\"this\">\n  </app-file-upload>\n</div>"

/***/ }),

/***/ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: HdphotosSuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdphotosSuborderOverviewComponent", function() { return HdphotosSuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HdphotosSuborderOverviewComponent = /** @class */ (function () {
    function HdphotosSuborderOverviewComponent(orderService, auth) {
        this.orderService = orderService;
        this.auth = auth;
        this.allowedFileExt = ['jpeg', 'png', 'jpg', 'JPG'];
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subOrderDetails = this.orderService.currentSuborder;
    }
    HdphotosSuborderOverviewComponent.prototype.ngOnInit = function () {
    };
    HdphotosSuborderOverviewComponent.prototype.setSubmitDisabledHanlder = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    /**
     * controls disabling of attachment deletion
     */
    HdphotosSuborderOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.orderService.currentSuborder.status === 'uploaded' ||
            this.orderService.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    /**
   * controls disabling of attachment upload
   */
    HdphotosSuborderOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.orderService.currentSuborder.status === 'uploaded' ||
            this.orderService.currentSuborder.status === 'completed') {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HdphotosSuborderOverviewComponent.prototype, "setSubmitDisabled", void 0);
    HdphotosSuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hdphotos-suborder-overview',
            template: __webpack_require__(/*! ./hdphotos-suborder-overview.component.html */ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./hdphotos-suborder-overview.component.css */ "./src/app/hdphotos-suborder-overview/hdphotos-suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HdphotosSuborderOverviewComponent);
    return HdphotosSuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Only showing content after new-user registration if user verified his e-mail. While he hasn't verified it, there will be a blank page with a loading spinner behind the verification modal. -->\r\n<ng-container *ngIf=\"(!auth.registering && auth.emailVerified)\">\r\n  <!-- Page-Content -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Column for the greetings and role specific information -->\r\n    <div class=\"col\">\r\n      <div class=\"shadow card fluid cgrid\">\r\n        <div class=\"card-body\">\r\n          <ng-container *ngIf=\"auth.myUserObservable as user\">\r\n            <ng-container *ngIf=\"user.profileCompleted === true || user.role === 'Kunde'; else profiledata\">\r\n\r\n              <!-- Customer greeting -->\r\n              <ng-container *ngIf=\"user.role === 'Kunde'\">\r\n                <h3 *ngIf=\"user.lastName !== undefined\" class=\"card-title b\">Herzlich willkommen {{user.anrede}}\r\n                  {{user.lastName}}!</h3>\r\n                <p class=\"card-text\">Vielen Dank, dass Sie die IMOGENT-Plattform nutzen, um Ihre Immobilien besser zu\r\n                  präsentieren.</p>\r\n                <p class=\"card-text\">Um einen Service buchen zu können, müssen Sie als erstes unter dem Menüpunkt\r\n                  \"Immobilien\" eine Immobilie anlegen.</p>\r\n                <p *ngIf=\"user.profileCompleted\" class=\"card-text\"\r\n                  style=\"color: #2cb3a0; padding-top: 0.5em; margin-bottom: 0em;\">Viel Spaß!</p>\r\n              </ng-container>\r\n\r\n              <!-- Pilot greeting -->\r\n              <ng-container *ngIf=\"user.role === 'Dienstleister'\">\r\n                <h3 *ngIf=\"user.lastName !== undefined\" class=\"card-title b\">Herzlich willkommen {{user.anrede}}\r\n                  {{user.lastName}}!</h3>\r\n                <p class=\"card-text\">Um als Dienstleister auf der Plattform loszulegen, müssen Sie sich als erstes einen\r\n                  Auftrag aus der globalen Auftragsdatenbank zuweisen.</p>\r\n                <p class=\"card-text\">Diese finden Sie unter dem Menüpunkt \"Aufträge\".</p>\r\n                <div *ngIf=\"user.dronepilot === true\">\r\n                  <p *ngIf=\"user.verificationNeeded === false && user.pilotVerified === false\" class=\"card-text\"\r\n                    style=\"color: #dc3545;\">Sie haben noch nicht alle erforderliche Dokumente\r\n                    hochgeladen. Dies können Sie unter dem Menüpunkt \"Profil\" erledigen. Erst dann können Sie sich\r\n                    Aufträge zuweisen und bearbeiten.</p>\r\n                  <p *ngIf=\"user.verificationNeeded === true && user.pilotVerified === false\" class=\"card-text\"\r\n                    style=\"color: orange;\">Wir überprüfen aktuell Ihre hochgeladenen Dokumente. In\r\n                    kurzer Zeit können Sie die Plattform uneingeschränkt nutzen.</p>\r\n                  <p *ngIf=\"user.verificationFailed === true\" class=\"card-text font-weight-bold\"\r\n                    style=\"color: #dc3545;\">Die Verifikation Ihrer Dokumente war\r\n                    nicht erfolgreich. Bitte laden Sie gültige Dokumente hoch in den wieder offenen Upload-Feldern.</p>\r\n                  <p *ngIf=\"user.pilotVerified === true\" class=\"card-text\"\r\n                    style=\"color: #2cb3a0; padding-top: 0.5em; margin-bottom: 0em;\">Viel Spaß!</p>\r\n                </div>\r\n              </ng-container>\r\n\r\n              <!-- Admin greeting -->\r\n              <ng-container *ngIf=\"user.role === 'Administrator'\">\r\n                <h3 class=\"card-title b\">Hallo {{user.firstName}}!</h3>\r\n                <p class=\"card-text\" style=\"color: #dc3545;\">Du hast Administratoren-Berechtigungen!</p>\r\n                <p class=\"card-text\" style=\"color: #dc3545;\">Du kannst unter \"Aufträge\" alle jemals erstellen Aufträge\r\n                  einsehen. Von Kunden neu erstellte Aufträge müssen von dir erst geprüft werden, bezüglich eventueller\r\n                  Flugverbote. Wenn du in einem Auftrag auf geprüft klickst, wird dieser in der Liste offener Aufträge\r\n                  den Drohnenpiloten angezeigt und Sie können sich diesen zuweisen.</p>\r\n                <p class=\"card-text\" style=\"color: #dc3545;\">Außerdem hast du einen weiteren Menüpunkt:\r\n                  \"User-Management\". Hier kannst du alle registrierten User einsehen. Drohnenpiloten deren Dokumente\r\n                  noch nicht überprüft wurden werden in dieser Ansicht mit einem Tag markiert. Du hast die Aufgabe diese\r\n                  Dokumente zu überprüfen und dann den Status des Piloten auf verifziert zu setzen. Vorher werden dem\r\n                  Drohnenpiloten keine Aufträge angezeigt!</p>\r\n              </ng-container>\r\n\r\n            </ng-container>\r\n\r\n            <!-- Card which is shown to all users except customers, if they have not yet completed their profile on the profile page. -->\r\n            <ng-template #profiledata>\r\n              <h3 class=\"card-title b\">Hallo {{user.anrede}} {{user.lastName}}!</h3>\r\n              <p class=\"card-text\" style=\"color: #dc3545;\">Sie haben Ihre persönlichen Daten noch nicht eingepflegt. Um\r\n                die Plattform vollumfänglich nutzen zu können, pflegen Sie bitte Ihre persönlichen Daten unter dem\r\n                Menüpunkt \"Profil\" ein.</p>\r\n            </ng-template>\r\n\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Card to show some other information, currently shown to everybody. -->\r\n      <div class=\"shadow card fluid cgrid\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title m\">Allgemeine Information</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">Wir freuen uns, dass Sie an unserem Projekt teilnehmen möchten. Vorab soll schon einmal\r\n            gesagt sein, dass sich diese Plattform noch im Aufbau befindet, also durchaus noch Fehler auftreten können.\r\n          </p>\r\n          <p class=\"card-text\">Daher betonen wir von Beginn an: Wenn Sie Verbesserungsvorschläge für oder Fragen an uns\r\n            haben, kommen jederzeit gerne auf uns zu. Gemeinsam können wir die Plattform perfektionieren!</p>\r\n        </div>\r\n        <!-- Use this to create a new service (order.service.ts -> addServices()) -->\r\n        <!-- <button class=\"btn btn-primary\" (click)=\"os.addServices()\">neuen Service anlegen</button> -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Column for general information which is not user/role specific -->\r\n    <div class=\"col-sm-4 d-none d-lg-block\">\r\n\r\n      <!-- Featured quote -->\r\n      <div class=\"shadow card fluid cgrid\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fas fa-quote-left\"></i>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"blockquote mb-0\">\r\n            <p>Modernste Digitaltechnik macht's möglich. Die „virtuelle“ Immobilien-Besichtigung spart jede Menge Zeit\r\n              und bringt Spaß.</p>\r\n            <footer class=\"blockquote-footer\">Robin Kroll, Gründer von IMOGENT</footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Featured blog-entry from www.imogent.de/blog -->\r\n      <div class=\"shadow card fluid cgrid\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title m\">Blogeintrag zur Plattform</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text nomarbot\">Eine digitale rundum Lösung für das Immobilienmarketing: innovativ,\r\n            zentralisiert, automatisiert – das schafft IMOGENT mit seiner Plattform zur ... <span><a\r\n                href=\"https://www.imogent.de/blogbeitrag/wie-sie-ihre-immobilienvermarktung-effizienter-gestalten/\"\r\n                class=\"my-link\">weiterlesen</a></span></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"shadow card fluid cgrid\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-left wsn\">Zum Showcase</h5>\r\n          <p class=\"card-text text-left\">Lassen Sie sich von unseren virtuellen Rundgängen und\r\n            Drohnenaufnahmen von verschiedenen Immobilien, öffentlichen Gebäuden und Working\r\n            Spaces begeistern und überzeugen Sie Ihre Kunden!\r\n          </p>\r\n          <a href=\"https://www.imogent.de/show-case/\" class=\"btn btn-primary\">Jetzt\r\n            ansehen</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ng-template #loading>\r\n    <!-- CSS Loading Spinner -->\r\n    <div class=\"lds-ring ring-default centered\">\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ng-container>\r\n\r\n<!-- <ng-template #loading>\r\n  <div class=\"lds-ring ring-default centered\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n</ng-template> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, loader, ngxSmartModalService, res, us, router, os) {
        this.auth = auth;
        this.loader = loader;
        this.ngxSmartModalService = ngxSmartModalService;
        this.res = res;
        this.us = us;
        this.router = router;
        this.os = os;
        this.emailResent = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"],
            _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__["RealestateService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 border-bottom bbcg\">\n  <h2>Benachrichtigungen</h2>\n  <div class=\"btn-group float-right\">\n    <!-- <button class=\"btn btn-sm btn-outline-secondary\">Änderungen speichern</button> -->\n  </div>\n</div>\n<div class=\"shadow card cgrid\">\n  <div class=\"card-header\">\n    <a class=\"my-link\" (click)=\"active = !active\" [attr.aria-expanded]=\"true\" aria-controls=\"collapse1\">\n      <h5 class=\"card-title text-left wsn\">Information</h5>\n    </a>\n  </div>\n  <div id=\"collapse1\" [collapse]=\"!active\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">Hier können Sie alle für Sie relevanten Benachrichtigungen einsehen.</p>\n      <p class=\"card-text mb-0\">Dieses Feature befindet sich noch in der Entwicklung. Vielen Dank für Ihr Verständnis.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = /** @class */ (function () {
    function InboxComponent() {
        this.active = true; // Initial State der einklappbaren Card
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/inbox/index.ts":
/*!********************************!*\
  !*** ./src/app/inbox/index.ts ***!
  \********************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return _inbox_component__WEBPACK_IMPORTED_MODULE_0__["InboxComponent"]; });




/***/ }),

/***/ "./src/app/language/language.ts":
/*!**************************************!*\
  !*** ./src/app/language/language.ts ***!
  \**************************************/
/*! exports provided: LANGUAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE", function() { return LANGUAGE; });
var LANGUAGE = {
    'app_list_strings': {
        'order_type_list': {
            'dronemedia': 'Drohnenaufnahmen',
            'retouching': 'Bildbearbeitung',
            'floorplan': 'Grundrisse',
            'vstaging': 'Virtual Staging',
            'visualisation': '3D Visualisierung',
            'hdphotos': 'HD Fotos',
            'expose': 'Exposé'
        }
    },
    'app_strings': {
    // add standalone translations in this object e.g 'foo' : 'bar'
    }
};


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"paddingdiv\">\n\n  <!-- Aligning the contents of the page with the logo -->\n  <div style=\"max-width: 300px; width: 100%; height: auto; margin: 0 auto;\">\n\n    <!-- Logo -->\n    <img class=\"mb-4\" src=\"assets/images/Logo-IMOGENT-mit-Schrift-300x94.png\">\n\n    <!-- Login-Form -->\n    <h3 class=\"b text-center\">Bitte anmelden!</h3>\n    <form>\n\n      <!-- E-Mail -->\n      <div class=\"form-group\">\n\n        <!-- E-Mail Input -->\n        <label class=\"font-italic b sr-only\" for=\"email\">E-Mail</label>\n        <input type=\"text\" class=\"form-control mb-2\" autocomplete=\"username\" placeholder=\"Email\" #userEmail autofocus>\n\n      </div>\n\n      <!-- Password -->\n      <div class=\"form-group\">\n\n        <!-- Password Input -->\n        <label class=\"font-italic b sr-only\" for=\"password\">Passwort</label>\n        <input type=\"password\" class=\"form-control mb-2\" autocomplete=\"current-password\" placeholder=\"Passwort\" #userPassword>\n\n      </div>\n\n      <!-- Form Buttons -->\n      <div class=\"form-group\">\n\n        <!-- Login -->\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(userEmail.value, userPassword.value);\">Einloggen</button>\n        <!-- Go to register-page -->\n        <a routerLink=\"/register\" class=\"btn btn-link\">Registrieren</a>\n\n      </div>\n\n      <!-- Link to Reset-Password Page -->\n      <a routerLink=\"/forgot\" class=\"btn btn-link\" style=\"padding-left: 0em;\">Passwort zurücksetzen</a>\n\n    </form>\n\n    <!-- Footer -->\n    <p class=\"b nomarbot\">&copy;2019 IMOGENT GmbH</p>\n    <!-- Privacy Policy & Imprint -->\n    <a href=\"https://www.imogent.de/datenschutz\" class=\"my-link\">Datenschutz</a><span> | </span><a class=\"my-link\" href=\"https:www.imogent.de/impressum\">Impressum</a>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, loader) {
        this.authService = authService;
        this.loader = loader;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('Login-Component initialised');
    };
    /**
     * Called when login button is pressed. Uses the auth service to login.
     */
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.loader.loaded = false;
        this.authService.login(email, password).then(function (result) {
            /* Important, since this method loads user specific data,
            if you switch accounts without page refreshing,
            this method would not be called again otherwise */
            _this.loader.getDataAfterAuthenticated();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"paddingdiv\">\n<div style=\"max-width: 300px; width: 100%; height: auto; margin: 0 auto;\">\n<img class=\"mb-4\" src=\"assets/images/Logo-IMOGENT-mit-Schrift-300x94.png\">\n  <ng-container *ngIf=\"authservice.sessionEnded === true; else forbidden\">\n  <h4 class=\"mb-2\">Du hast dich erfolgreich ausgeloggt.</h4>\n  <h4>Bis zum nächsten Mal!</h4>\n  <br>\n  </ng-container>\n  <ng-template #forbidden>  \n    <h4 class=\"b mb-2\">Du bist nicht eingeloggt!</h4>\n    <h4>Bitte logge dich zuerst ein.</h4>\n    <br>\n  </ng-template>\n  <a class=\"btn btn-link\" routerLink=\"/login\" style=\"padding-left: 0em;\">Einloggen</a>\n  <p class=\"b nomarbot\">&copy;2019 IMOGENT GmbH</p>\n  <a href=\"https://www.imogent.de/datenschutz\" class=\"my-link\">Datenschutz</a><span> | </span><a class=\"my-link\" href=\"https:www.imogent.de/impressum\">Impressum</a>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authservice) {
        this.authservice = authservice;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/modals/package-editor/package-editor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modals/package-editor/package-editor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label, :host ::ng-deep .mat-checkbox-layout {\n  color: #000;\n}\n\n.plan img {\n    position: absolute;\n    left: 0;\n    width: 80%;\n    margin-left: 3vh;\n}\n\n.plan img:first-child {\n    position: relative;\n    padding: 0;\n    height: 50%;\n}\n\n.plan {\n    margin-top: 30px;\n}\n\n.style-card .img-thumb {\n    height: 200px;\n}\n\n:host ::ng-deep .carousel-row {\n    padding: 0 15px 0 15px;\n}\n\n:host ::ng-deep .carousel-indicators {\n    bottom: -30px !important;\n}\n\n:host ::ng-deep .carousel-indicators li {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n    height: 6px;\n}\n\n:host ::ng-deep .carousel-indicators li.active {\n    background-color: #2cb3a0 !important;\n}\n\n:host ::ng-deep .carousel-item .style-card {\n    cursor: pointer;\n}\n\n:focus {\n    outline: none;\n}\n\n:host ::ng-deep .carousel-item .style-card {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n:host ::ng-deep .carousel-item .style-card.active {\n    border: 3px solid #2cb3a0;\n    color: #000 !important;\n}\n\n:host ::ng-deep .carousel-item .style-card .mat-card-content {\n    text-align: center;\n    margin-top: 10px;\n    font-size: 12px;\n}\n\n.font-300 {\n    font-weight: 300;\n    font-size: large;\n}\n\n.font-200 {\n    font-weight: 200;\n    font-size: small;\n}\n\n.text-primary {\n    color: #2cb3a0 !important;\n}\n\n.numberText {\n    text-align: center;\n}\n\n.font-sz-20 {\n    font-size: 20px;\n}\n\n.fileName {\n    color: #FFF;\n    outline: none;\n}\n\n.fileContainer {\n    overflow: hidden;\n    position: relative;\n}\n\n.fileContainer [type=file] {\n    cursor: inherit;\n    display: block;\n    font-size: 999px;\n    filter: alpha(opacity=0);\n    min-height: 100%;\n    min-width: 100%;\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    text-align: right;\n    top: 0;\n}\n\n.file-list .file-entry {\n    border-radius: 5%;\n    padding: 5px 0 5px 0;\n}\n\n.file-list .file-entry:nth-child(odd) {\n    background-color: #e5f9f6;\n}\n\n.file-list .file-entry .file-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.file-list {\n    height: 120px;\n    overflow-y: auto;\n}\n\n.file-list .file-entry .file-remove {\n    cursor: pointer;\n}\n\n.uploadArea {\n    margin: 0px;\n}\n\n:host ::ng-deep .carousel-control-next, :host ::ng-deep .carousel-control-prev {\n    width: 4% !important;\n    background-color: #2cb3a0;\n    height: 20%;\n    top: 37%;\n}\n\n.card-package {\n    padding: 10px;\n}\n\n.margin {\n    margin-bottom: 10px;\n}\n\n.buttonUpload {\n    padding: 0px;\n}\n\n.checkbox_align {\n    text-align: center;\n    /* center checkbox horizontally */\n    margin-top: 5px;\n}\n\n.no_padding {\n    padding: 0px;\n}\n\n.vertical_align {\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.card-header{\n    border-radius: 5px;\n    background: rgba(44,179,160,0.5);\n    padding: 7px 7px;\n}\n\n.form-control.ng-invalid{\n    background-size: 100% 100%, 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3BhY2thZ2UtZWRpdG9yL3BhY2thZ2UtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3BhY2thZ2UtZWRpdG9yL3BhY2thZ2UtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCwgOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wbGFuIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogM3ZoO1xufVxuXG4ucGxhbiBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4ucGxhbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN0eWxlLWNhcmQgLmltZy10aHVtYiB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1yb3cge1xuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNiM2EwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSAuc3R5bGUtY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSAuc3R5bGUtY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0gLnN0eWxlLWNhcmQuYWN0aXZlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmNiM2EwO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSAuc3R5bGUtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9udC0zMDAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmZvbnQtMjAwIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICAgIGNvbG9yOiAjMmNiM2EwICFpbXBvcnRhbnQ7XG59XG5cbi5udW1iZXJUZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb250LXN6LTIwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5maWxlTmFtZSB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpbGVDb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XG4gICAgY3Vyc29yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogOTk5cHg7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRvcDogMDtcbn1cblxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeSB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG5cbi5maWxlLWxpc3QgLmZpbGUtZW50cnk6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY5ZjY7XG59XG5cbi5maWxlLWxpc3QgLmZpbGUtZW50cnkgLmZpbGUtbmFtZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZmlsZS1saXN0IHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5maWxlLWxpc3QgLmZpbGUtZW50cnkgLmZpbGUtcmVtb3ZlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51cGxvYWRBcmVhIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIDpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB3aWR0aDogNCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNiM2EwO1xuICAgIGhlaWdodDogMjAlO1xuICAgIHRvcDogMzclO1xufVxuXG4uY2FyZC1wYWNrYWdlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9uVXBsb2FkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jaGVja2JveF9hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGNlbnRlciBjaGVja2JveCBob3Jpem9udGFsbHkgKi9cbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5ub19wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi52ZXJ0aWNhbF9hbGlnbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ0LDE3OSwxNjAsMC41KTtcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xufVxuXG4uZm9ybS1jb250cm9sLm5nLWludmFsaWR7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwMCUgMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modals/package-editor/package-editor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modals/package-editor/package-editor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 col-lg-4\">\n        <ngb-carousel>\n            <ng-template *ngFor=\"let entry of carouselStyles\" ngbSlide>\n                <div class=\"row justify-content-center carousel-row\">\n                    <mat-card *ngFor=\"let style of entry; let i = index\" class=\"style-card col-3 card-package\"\n                        (click)=\"selected(style.index, style.name)\" [ngClass]=\"{\n                'active': selectedStyleIndex == style.index\n              }\">\n                        <img src=\"{{style.baseUrl + 'Grundriss_unmoebliert.jpeg'}}\" alt=\"{{style.name || 'style'}}\"\n                            class=\"img-fluid\">\n                        <mat-card-content>\n                            {{style.name}}\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </ng-template>\n        </ngb-carousel>\n        <div class=\"row plan\">\n            <img class=\"card-img-top\" src=\"../../assets/images/blank.png\">\n            <img class=\"card-img-top\" src=\"{{ styles[selectedStyleIndex].baseUrl + 'Grundriss_unmoebliert.jpeg'}}\">\n            <img *ngIf=\"mobliertcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].baseUrl + 'Grundriss_moebliert.jpeg'}}\">\n            <img class=\"card-img-top\" src=\"{{ styles[selectedStyleIndex].featuresUrl + 'eingangspfeil.png'}}\">\n            <img *ngIf=\"qmcheck.checked && !mobliertcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'unmoebliert_QM.png'}}\">\n            <img *ngIf=\"qmcheck.checked && mobliertcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'moebliert_QM.png'}}\">\n            <img *ngIf=\"rbcheck.checked && !mobliertcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'unmoebliert_RB.png'}}\">\n            <img *ngIf=\"rbcheck.checked && mobliertcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'moebliert_RB.png'}}\">\n            <img *ngIf=\"nordpfeilcheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'nordfpeil.png'}}\">\n            <img *ngIf=\"logocheck.checked\" class=\"card-img-top\"\n                src=\"{{ styles[selectedStyleIndex].featuresUrl + 'logo.png'}}\">\n        </div>\n        <div id=\"test\">\n\n        </div>\n        <div style=\"clear: both;\"></div>\n    </div>\n    <div class=\"col-12 col-lg-8 scroll-section\">\n        <form [formGroup]=\"filesForm\" class=\"\">\n            <div class=\"card cgrid margin\">\n                <div class=\"card-header\">\n                    <a class=\"my-link clickable\" (click)=\"active1 = !active1\" [attr.aria-expanded]=\"active1\"\n                        aria-controls=\"collapse1\">\n                        <h5 class=\"card-title text-white text-left wsn row\">\n                            <span class=\"col\">\n                                <span class=\"fas text-left mr-2\" [ngClass]=\"{\n                      'fa-chevron-right': !active1,\n                      'fa-chevron-down': active1\n                    }\">\n                                </span> Produktdetails anzeigen\n                            </span>\n                        </h5>\n                    </a>\n                </div>\n                <div [collapse]=\"!active1\">\n                    <div class=\"card-body\">\n                        <ul class=\"list-unstyled font-500\">\n                            <li>✓ ein Grundriss pro Etage</li>\n                            <li>✓ Output je Grundriss: PDF, JPEG</li>\n                            <li>✓ Zwei Auflösungsstufen (Web optimiert, hochauflösend)</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row vertical_align\">\n                <div class=\"col-4 col-md-2\">\n                    <input type=\"number\" id=\"additionalFloor\" matTooltip=\"{{errorMsg}}\"\n                        [matTooltipClass]=\"{'error-tooltip':true}\" formControlName=\"additionalFloor\"\n                        class=\"form-control numberText\" min=\"1\" (change)=\"calculateSum()\" value=\"1\">\n                </div>\n                <div class=\"col-4 col-md-2\">\n                    <div class=\"font-200\">\n                        {{imoPackage.price}} € je Grundriss\n                    </div>\n                </div>\n                <div class=\"col-4 d-block d-md-none text-center\">\n                    <p class=\"font-300\">\n                        {{num_floorplans_price}} €\n                    </p>\n                </div>\n                <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n                    <div class=\"font-300\">\n                        Anzahl der Grundrisse\n                    </div>\n                    <div class=\"font-200\">\n                        Bitte geben Sie die gewünschte Anzahl an Grundrissen an\n                    </div>\n                </div>\n                <div class=\"col-2 d-none d-md-block text-center\">\n                    <p class=\"font-300\">\n                        {{num_floorplans_price}} €\n                    </p>\n                </div>\n            </div>\n            <hr class=\"hr_floorplan\">\n            <div class=\"row vertical_align\" *ngIf=\"imoPackage.dimension !== '2d'\">\n                <div class=\"col-4 col-md-2\">\n                    <div class=\"checkbox_align\">\n                        <mat-checkbox #isoCheck formControlName=\"isometric\" color=\"primary\" (change)=\"calculateSum()\"\n                            id=\"iso-check\">\n                        </mat-checkbox>\n\n                        <div class=\"font-200\">hinzufügen</div>\n                    </div>\n                </div>\n                <div class=\"col-4 col-md-2\">\n                    <div class=\"font-200\">\n                        5,90 € je Grundriss\n                    </div>\n                </div>\n                <div class=\"col-4 d-block d-md-none text-center\">\n                    <p class=\"font-300\" [hidden]=\"!isoCheck.checked\">\n                        {{additional_views_price_sum}} €\n                    </p>\n                    <p class=\"font-300\" [hidden]=\"isoCheck.checked\">\n                        0,00 €\n                    </p>\n                </div>\n                <div class=\"col-10 col-md-4 pt-3 pt-md-0\">\n                    <div class=\"font-300\">\n                        isometrische Ansicht\n                    </div>\n                    <div class=\"font-200\">\n                        erweitertes natürliches Raumgefühl, perfekte Kombination mit dem 3D Grundriss\n                    </div>\n                </div>\n                <div class=\"col-2 no_padding pt-3 pt-md-0\">\n                    <img class=\"img-fluid\" *ngIf=\"!mobliertcheck.checked\"\n                        src=\"{{ styles[selectedStyleIndex].baseUrl + 'Seitenansicht_unmoebliert.jpeg'}}\">\n                    <img *ngIf=\"mobliertcheck.checked\" class=\"img-fluid\"\n                        src=\"{{ styles[selectedStyleIndex].baseUrl + 'Seitenansicht_moebliert.jpeg'}}\">\n                </div>\n                <div class=\"col-2 d-none d-md-block text-center\">\n                    <p class=\"font-300\" [hidden]=\"!isoCheck.checked\">\n                        {{additional_views_price_sum}} €\n                    </p>\n                    <p class=\"font-300\" [hidden]=\"isoCheck.checked\">\n                        0,00 €\n                    </p>\n                </div>\n            </div>\n            <div class=\"card cgrid\">\n                <div class=\"card-header\">\n                    <a class=\"my-link clickable\" (click)=\"active2 = !active2\" [attr.aria-expanded]=\"active2\"\n                        aria-controls=\"collapse2\">\n                        <h5 class=\"card-title text-white text-left wsn row\">\n                            <span class=\"col-12\">\n                                <span class=\"fas text-left mr-1\" [ngClass]=\"{\n                      'fa-chevron-right': !active2,\n                      'fa-chevron-down': active2\n                    }\">\n                                </span> Spezifikationen\n                            </span>\n                        </h5>\n                    </a>\n                </div>\n                <div [collapse]=\"!active2\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-3\">\n                                <mat-checkbox #mobliertcheck formControlName=\"mobliert\" class=\"example-margin\"\n                                    color=\"primary\">Möbliert\n                                </mat-checkbox><br />\n                                <mat-checkbox #qmcheck formControlName=\"bemasung\" class=\"example-margin\"\n                                    color=\"primary\">Bemaßung\n                                </mat-checkbox>\n                                <br />\n                                <mat-checkbox #nordpfeilcheck formControlName=\"nordpfeil\" class=\"example-margin\"\n                                    color=\"primary\">\n                                    Nordpfeil\n                                </mat-checkbox><br />\n                                <mat-checkbox #rbcheck formControlName=\"raumbezeichnung\" class=\"example-margin\"\n                                    color=\"primary\">\n                                    Raumbezeichnung\n                                </mat-checkbox><br />\n                                <mat-checkbox #logocheck formControlName=\"logo\" class=\"example-margin\" color=\"primary\"\n                                    (change)=\"onLogoCheck()\">Auftraggeber Logo\n                                </mat-checkbox><br />\n                            </div>\n                            <div class=\"col-12 col-sm-9 pt-3 pt-md-0\">\n                                <ng-container class=\"mt-2\">\n                                    <h5 class=\"mb-2 font-weight-light\">Bitte laden Sie Ihre Grundrisse im passenden\n                                        Format hoch (PDF, PNG, JPEG)</h5>\n                                    <div class=\"mb-4 form-group row uploadArea\">\n                                        <div class=\"col-12 col-md-3 buttonUpload\">\n                                            <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                                                Datei hochladen\n                                                <input type=\"file\" [writeFile]=\"true\" formControlName=\"planImages\"\n                                                    multiple=\"true\" #plnImages (change)=\"onChange()\"\n                                                    accept=\".png,.jpeg,.pdf,.jpg\" ng2FileSelect [uploader]=\"uploader\" />\n                                            </label>\n                                        </div>\n                                        <div *ngIf=\"uploader.queue.length > 0\" class=\"col-12 col-md-9 file-list\">\n                                            <div class=\"file-entry row\" *ngFor=\"let file of uploader.queue\">\n                                                <div class=\"col-8 file-name\">\n                                                    {{ file?.file?.name }}\n                                                </div>\n                                                <div class=\"col-4 text-right\">\n                                                    <span class=\"fas fa-trash-alt text-danger file-remove\"\n                                                        (click)=\"onRemoveFile(file)\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"planImages.invalid && (planImages.dirty || planImages.touched)\"\n                                            class=\"alert alert-danger col-12\">\n                                            <div *ngIf=\"planImages.errors.required\">\n                                                Bitte laden Sie die Grundrisse in einem unterstützten Format hoch!\n                                            </div>\n                                            <div *ngIf=\"planImages.errors.forbiddenFile\">\n                                                Bitte laden Sie ein gültiges Format hoch (PDF, PNG, JPEG)\n                                            </div>\n                                            <div *ngIf=\"!planImages.errors.required && planImages.errors.fileRequired\">\n                                                Bitte laden Sie die Grundrisse in einem unterstützten Format hoch!\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <ng-container class=\"mt-2\">\n                                    <h5 class=\"mb-2 font-weight-light\">Bitte laden Sie Ihr Logo im PNG-Format hoch</h5>\n                                    <div class=\"mb-4 form-group row uploadArea\">\n                                        <div class=\"col-12 col-sm-3 buttonUpload\">\n                                            <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                                                Datei hochladen\n                                                <input type=\"file\" [writeFile]=\"true\" formControlName=\"logoImage\"\n                                                    #logoImg (change)=\"onChange()\" accept=\".png\" ng2FileSelect\n                                                    [uploader]=\"logoUploader\" />\n                                            </label>\n                                        </div>\n                                        <div *ngIf=\"logoUploader.queue.length > 0\"\n                                            class=\"col-12 col-sm-9 logo-file file-list\">\n                                            <div class=\"file-entry row\" *ngFor=\"let file of logoUploader.queue\">\n                                                <div class=\"col-8 file-name\">\n                                                    {{ file?.file?.name }}\n                                                </div>\n                                                <div class=\"col-4 text-right\">\n                                                    <span class=\"fas fa-trash-alt text-danger file-remove\"\n                                                        (click)=\"onRemoveFile(file, 'logo')\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"logoImage.invalid && (logoImage.dirty || logoImage.touched)\"\n                                            class=\"alert alert-danger col-12\">\n                                            <div *ngIf=\"logoImage.errors.required\">\n                                                Bitte laden Sie das Logo in einem unterstützten Format hoch!\n                                            </div>\n                                            <div *ngIf=\"logoImage.errors.forbiddenFile\">\n                                                Bitte laden Sie ein gültiges Format hoch (PNG)\n                                            </div>\n                                            <div *ngIf=\"!logoImage.errors.required && logoImage.errors.fileRequired\">\n                                                Bitte laden Sie das Logo in einem unterstützten Format hoch!\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-4\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" formControlName=\"comments\"\n                        placeholder=\"Kommentare/Anmerkungen für den Dienstleister\" #comments></textarea>\n                </div>\n            </div>\n            <hr class=\"hr_floorplan\">\n            <div class=\"row mb-4\">\n                <div class=\"col-8\">\n                    <h4>Summe</h4>\n                </div>\n                <div class=\"col-4 font-sz-20 text-right\">\n                    {{total_price}} €\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/package-editor/package-editor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modals/package-editor/package-editor.component.ts ***!
  \*******************************************************************/
/*! exports provided: PackageEditorComponent, forbiddenFileValidator, fileRequiredValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageEditorComponent", function() { return PackageEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenFileValidator", function() { return forbiddenFileValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileRequiredValidator", function() { return fileRequiredValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PackageEditorComponent = /** @class */ (function () {
    function PackageEditorComponent(config, formBuilder) {
        this.config = config;
        this.formBuilder = formBuilder;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.logoUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carouselStyles = [];
        this.selectedStyleIndex = 0;
        this.isoCount = 1;
        this.active2 = true;
        this.active1 = false;
        this.sum = 0;
        this.needIso = false;
        this.selectedStyleName = '';
        this.additional_view_price = 5.90;
        this.errorMsg = '';
        config.interval = 100000;
        //config.showNavigationArrows = false;
        config.showNavigationIndicators = true;
        this.filesForm = this.formBuilder.group({
            planImages: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    forbiddenFileValidator(["png", "jpeg", "pdf", "jpg"], this.planImgElem),
                    fileRequiredValidator(this.uploader.queue)
                ]],
            logoImage: [''],
            additionalFloor: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
            isometric: [''],
            mobliert: [''],
            bemasung: [''],
            nordpfeil: [''],
            raumbezeichnung: [''],
            logo: [''],
            allRooms: [''],
            comments: ['']
        });
    }
    Object.defineProperty(PackageEditorComponent.prototype, "planImages", {
        get: function () {
            return this.filesForm.get("planImages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageEditorComponent.prototype, "logoImage", {
        get: function () {
            return this.filesForm.get("logoImage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageEditorComponent.prototype, "additionalFloor", {
        get: function () {
            return this.filesForm.get('additionalFloor');
        },
        enumerable: true,
        configurable: true
    });
    PackageEditorComponent.prototype.ngOnInit = function () {
        this.imoPackage['pack_price'] = accounting__WEBPACK_IMPORTED_MODULE_5__["unformat"](this.imoPackage['price'], ',');
        this.num_floorplans_price = this.isoCount * this.imoPackage['pack_price'];
        this.additional_views_price_sum = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](this.isoCount * this.additional_view_price, '', 2, '.', ',');
        this.styles = this.imoPackage.styles ? this.imoPackage.styles : [{ name: '', baseUrl: '', featuresUrl: '', index: null }];
        for (var i = 0; i < this.styles.length; i += 4) {
            var list = [];
            list.push(this.styles[i]);
            this.styles[i + 1] && list.push(this.styles[i + 1]);
            this.styles[i + 2] && list.push(this.styles[i + 2]);
            this.styles[i + 3] && list.push(this.styles[i + 3]);
            this.carouselStyles.push(list);
        }
        if (this.carouselStyles.length > 2) {
            this.config.showNavigationIndicators = true;
        }
        this.imoPackage.form = this.filesForm;
        this.imoPackage["validate"] = true;
        this.oldValidate = this.imoPackage["validate"];
        this.selectedStyleName = this.styles[0].name.toString();
        this.sum = this.imoPackage['pack_price'];
        this.imoPackage['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](this.sum, '', 2, '.', ',');
        this.total_price = this.imoPackage['total_price'];
        // this.calculateSum();
    };
    PackageEditorComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.planImgElem = this.planImgs.nativeElement;
        this.logoImgElem = this.logoImg.nativeElement;
        this.filesForm = this.formBuilder.group({
            planImages: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    forbiddenFileValidator(["png", "jpeg", "pdf", "jpg"], this.planImgElem),
                    fileRequiredValidator(this.uploader.queue)
                ]],
            logoImage: ['', [
                    forbiddenFileValidator(["png"], this.logoImgElem)
                ]],
            additionalFloor: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
            isometric: [false],
            mobliert: [false],
            bemasung: [false],
            nordpfeil: [false],
            raumbezeichnung: [false],
            logo: [false],
            allRooms: [false],
            comments: ['']
        });
        this.filesForm.valueChanges.subscribe(function () {
            /* let formValues = {};
            let fileList = [];
            Object.keys(self.filesForm.controls).forEach(control => {
              if (control !== 'planImages' && control !== 'logoImage') {
                formValues[control] = self.filesForm.get(control).value;
              } else if (control == 'planImages') {
                fileList = [];
                self.uploader.queue.forEach(entry => fileList.push(entry.file.rawFile));
                formValues[control] = fileList;
              } else {
                fileList = [];
                self.logoUploader.queue.forEach(entry => fileList.push(entry.file.rawFile));
                formValues[control] = fileList;
              }
            });
            formValues["orderType"] = this.imoPackage.service_key;
            formValues['packageNum'] = this.imoPackage['package_key'];
            formValues['styleName'] = this.selectedStyleName;
            self.onFormChange.emit(formValues); */
            self.emitFormValues();
        });
        // this.calculateSum();
    };
    PackageEditorComponent.prototype.ngAfterContentInit = function () {
        this.calculateSum();
    };
    PackageEditorComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.imoPackage["validate"] != this.oldValidate) {
            Object.keys(this.filesForm.controls).forEach(function (control) {
                _this.filesForm.controls[control].markAsTouched();
            });
        }
    };
    PackageEditorComponent.prototype.selected = function (index, name) {
        var self = this;
        this.selectedStyleIndex = index;
        this.selectedStyleName = name;
        this.emitFormValues();
    };
    PackageEditorComponent.prototype.onLogoCheck = function () {
        if (this.filesForm.controls.logo.value) {
            this.logoImage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, forbiddenFileValidator(["png"], this.logoImgElem), fileRequiredValidator(this.logoUploader.queue)]);
        }
        else {
            this.logoImage.setValidators([forbiddenFileValidator(["png"], this.logoImgElem)]);
        }
        this.logoImage.updateValueAndValidity();
    };
    PackageEditorComponent.prototype.onChange = function () {
        this.imoPackage.form = this.filesForm;
        var fileListLength = this.uploader.queue.length;
        var lastFile = this.uploader.queue[fileListLength - 1];
        for (var i = 0; i < fileListLength - 1; i++) {
            if (lastFile.file.name === this.uploader.queue[i].file.name && lastFile.file.size === this.uploader.queue[i].file.size) {
                lastFile.remove();
            }
        }
        if (this.logoUploader.queue.length > 1) {
            this.logoUploader.queue[0].remove();
        }
        // fix for Internet Explorer. Manually set the file value
        if (this.uploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.filesForm.get('planImages').value)) {
            this.filesForm.controls['planImages'].setValue(this.uploader.queue[0].file.name);
        }
        if (this.logoUploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.filesForm.get('logoImage').value)) {
            this.filesForm.controls['logoImage'].setValue(this.logoUploader.queue[0].file.name);
        }
        this.logoImage.updateValueAndValidity();
        this.filesForm.controls.planImages.updateValueAndValidity();
    };
    PackageEditorComponent.prototype.calculateSum = function () {
        this.isoCount = this.filesForm.get("additionalFloor").value;
        if (this.isoCount <= 0) {
            this.errorMsg = 'Mindestens ein Grundriss muss bestellt werden.';
        }
        else if (this.isoCount > 0) {
            this.errorMsg = '';
        }
        if (!this.isoCount) {
            this.isoCount = 1;
        }
        this.num_floorplans_price = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](this.isoCount * this.imoPackage['pack_price'], '', 2, '.', ',');
        this.additional_views_price_sum = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](this.isoCount * this.additional_view_price, '', 2, '.', ',');
        if (this.imoPackage.service_key !== '2dfloorplan' && this.filesForm.get("isometric").value == true) {
            this.sum = this.isoCount * this.imoPackage["pack_price"] + this.isoCount * 5.90;
        }
        else {
            this.sum = this.isoCount * this.imoPackage["pack_price"];
        }
        this.imoPackage['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](this.sum, '', 2, '.', ',');
        this.total_price = this.imoPackage['total_price'];
    };
    PackageEditorComponent.prototype.onRemoveFile = function (file, type) {
        file.remove();
        if (type === 'logo') {
            this.logoImage.setValue("");
        }
        this.filesForm.controls.planImages.updateValueAndValidity();
        this.logoImage.updateValueAndValidity();
    };
    PackageEditorComponent.prototype.emitFormValues = function () {
        var self = this;
        var formValues = {};
        var fileList = [];
        Object.keys(self.filesForm.controls).forEach(function (control) {
            if (control !== 'planImages' && control !== 'logoImage') {
                formValues[control] = self.filesForm.get(control).value;
            }
            else if (control == 'planImages') {
                fileList = [];
                self.uploader.queue.forEach(function (entry) { return fileList.push(entry.file.rawFile); });
                formValues[control] = fileList;
            }
            else {
                fileList = [];
                self.logoUploader.queue.forEach(function (entry) { return fileList.push(entry.file.rawFile); });
                formValues[control] = fileList;
            }
        });
        formValues["orderType"] = this.imoPackage.service_key;
        formValues['packageNum'] = this.imoPackage['package_key'];
        formValues['styleName'] = this.selectedStyleName;
        formValues['dimension'] = this.imoPackage.dimension;
        formValues['baseurl'] = self.styles[self.selectedStyleIndex].baseUrl;
        self.onFormChange.emit(formValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("imoPackage"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_2__["Package"])
    ], PackageEditorComponent.prototype, "imoPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("plnImages"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PackageEditorComponent.prototype, "planImgs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("logoImg"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PackageEditorComponent.prototype, "logoImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PackageEditorComponent.prototype, "onFormChange", void 0);
    PackageEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package-editor',
            template: __webpack_require__(/*! ./package-editor.component.html */ "./src/app/modals/package-editor/package-editor.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./package-editor.component.css */ "./src/app/modals/package-editor/package-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PackageEditorComponent);
    return PackageEditorComponent;
}());

/** A hero's name can't match the given regular expression */
function forbiddenFileValidator(acceptedFormats, elem) {
    return function (control) {
        var files = elem ? elem.files : [];
        var isInValid = false;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileType = file.name.substring(file.name.lastIndexOf(".") + 1);
            if (acceptedFormats.indexOf(fileType) < 0) {
                isInValid = true;
                elem.value = "";
                break;
            }
        }
        return isInValid ? { 'forbiddenFile': { value: '' } } : null;
    };
}
function fileRequiredValidator(fileQueue) {
    return function (control) {
        return fileQueue.length <= 0 ? { 'fileRequired': { value: '' } } : null;
    };
}


/***/ }),

/***/ "./src/app/models/package.ts":
/*!***********************************!*\
  !*** ./src/app/models/package.ts ***!
  \***********************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
// Package model
var Package = /** @class */ (function () {
    function Package() {
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/orderoverview/index.ts":
/*!****************************************!*\
  !*** ./src/app/orderoverview/index.ts ***!
  \****************************************/
/*! exports provided: OrderoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderoverview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderoverview.component */ "./src/app/orderoverview/orderoverview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderoverviewComponent", function() { return _orderoverview_component__WEBPACK_IMPORTED_MODULE_0__["OrderoverviewComponent"]; });




/***/ }),

/***/ "./src/app/orderoverview/orderoverview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/orderoverview/orderoverview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-margin {\n    margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJvdmVydmlldy9vcmRlcm92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vcmRlcm92ZXJ2aWV3L29yZGVyb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWFyZ2luIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/orderoverview/orderoverview.component.html":
/*!************************************************************!*\
  !*** ./src/app/orderoverview/orderoverview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page-Content -->\n<ng-container *ngIf=\"auth.myUserObservable as user; else loading\">\n\n  <!-- Only show page content if profile is complete -->\n  <ng-container *ngIf=\"user.profileCompleted; else notCompleted\">\n\n    <!-- Customer Content -->\n    <div *ngIf=\"user.role === 'Kunde'\">\n\n      <!-- Default state, table overview of all the orders-->\n      <div *ngIf=\"state === 'default'\">\n        <div class=\"row\">\n\n          <!-- Big left column -->\n          <div class=\"col\">\n\n            <!-- Card with explanation -->\n            <div class=\"shadow card cgrid\">\n\n              <div class=\"card-header\">\n                <h5 class=\"card-title text-left wsn mb-0\">Information</h5>\n              </div>\n\n              <div class=\"card-body\">\n                <p class=\"card-text mb-0\">Hier können Sie ihre erstellten Aufträge mit dem jeweiligen Status einsehen.\n                  Einen Auftrag können Sie unter dem Menüpunkt \"Service buchen\" erstellen.</p>\n                <p class=\"card-text\">Genaue Objektdaten sind nur dem Drohnenpiloten ersichtlich, der Ihrem Auftrag\n                  zugewiesen wurde.</p>\n                <p class=\"card-text mb-0\">Die hochgeladenen Materialien finden Sie in der Detail-Ansicht des Auftrags,\n                  sobald der Auftrag abgeschlossen ist.</p>\n              </div>\n            </div>\n\n            <ng-container *ngIf=\"os.myCreatedOrders as orders; else loading\">\n\n              <!-- Display the table inside a card -->\n              <div class=\"shadow card cgrid\">\n\n                <div class=\"card-header\">\n                  <h5 class=\"mb-0\">Meine Aufträge</h5>\n                </div>\n\n                <!-- Table that shows the customers open orders -->\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped table-sm\">\n\n                      <thead>\n                        <tr>\n                          <th>Auftrag vom</th>\n                          <th>Objekt-Titel</th>\n                          <th>Region</th>\n                          <th>Auftragsstatus</th>\n                          <th></th>\n                        </tr>\n                      </thead>\n\n                      <tbody>\n                        <ng-container *ngIf=\"orders; else noOrders\">\n\n                          <ng-container *ngFor=\"let order of orders;\">\n                            <tr>\n                              <td>{{ order.createdOn.toDate() | date: 'dd.MM.yy HH:mm'}}</td>\n                              <td>{{ order.Desc }}</td>\n                              <td>{{ order.areaDesc }}</td>\n                              <td>\n                                <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n                              </td>\n                              <td><button class=\"btn btn-primary btn-sm align-self-center float-right\"\n                                  (click)=\"openDetailPage(order.orderId, order.realestateId, true)\">Details</button>\n                              </td>\n                            </tr>\n\n                            <!-- Differently colored status messages -->\n                            <ng-template #orderStatus>\n                              <span [ngSwitch]=\"order.status\">\n                                <!-- possible status for orders:  opened, processing, completed, canceled -->\n                                <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                                  In Prüfung\n                                </span>\n                                <span class=\"text-warning\" *ngSwitchCase=\"'processing'\">\n                                  In Bearbeitung\n                                </span>\n                                <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n                                  Abgeschlossen\n                                </span>\n                                <span class=\"text-danger\" *ngSwitchCase=\"'canceled'\">\n                                  Storniert\n                                </span>\n                                <span *ngSwitchDefault>\n                                  {{ order.status }}\n                                </span>\n                              </span>\n                            </ng-template>\n\n                          </ng-container>\n\n                          <!-- If there are no orders, display a text inside the empty table -->\n                        </ng-container>\n                        <ng-template #noOrders>\n                          <tr>\n                            <td>Keine Aufträge vorhanden</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                        </ng-template>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- Right column: General stuff -->\n          <div class=\"col-3 d-none d-lg-block\">\n\n            <!-- Show-Case card, placeholder for now -->\n            <div class=\"shadow card fluid cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title text-left wsn\">Showcase</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text text-left\">Lassen Sie sich von unseren virtuellen Rundgängen und Drohnenaufnahmen\n                  von verschiedenen Immobilien, öffentlichen Gebäuden und Working Spaces begeistern und überzeugen Sie\n                  Ihre Kunden!</p>\n                <a href=\"https://www.imogent.de/show-case/\" class=\"my-link\">Jetzt ansehen</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- Order-Detail View -->\n      <div *ngIf=\"state === 'my-detail-view'\">\n\n        <!-- Loading data of the selected realestate with the html async pipe -->\n        <ng-container *ngIf='currentRealestateData | async as realestate; else loading'>\n\n          <!-- Loading order data related to the selected realestate with the html async pipe -->\n          <ng-container *ngIf='currentOrderData | async as orderData else loading'>\n\n            <div class=\"shadow card fluid cgrid\">\n\n              <!-- Order-Heading -->\n              <div class=\"card-header\">\n                <button class=\"btn btn-sm btn-primary float-right\"\n                  (click)=\"state = 'default'; suborder_state = 'list-view'\">Zurück</button>\n                <h5>Detailansicht</h5>\n              </div>\n\n\n              <!-- Order Details -->\n              <div class=\"card-body\">\n\n                <!-- Split the card body into left and right columns -->\n                <div class=\"row\">\n\n                  <!-- Left column: Order-Details -->\n                  <div class=\"col-6\">\n\n                    <h5 class=\"card-title text-left wsn\">Auftrags-Details:</h5>\n                    <p class=\"mb-1\"><strong>Eingegangen am:</strong>\n                      {{ orderData.createdOn.toDate() | date: 'dd.MM.yyyy HH:mm'}}</p>\n                    <p class=\"mb-1\"><strong>ID:</strong> {{ orderData.orderId }} (für Supportanfragen)</p>\n                    <p class=\"mb-1\"><strong>Aktueller Status: </strong>\n                      <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n                    </p>\n                    <p *ngIf=\"orderData.price\"><strong>Summe:</strong> {{orderData.price}} €</p>\n                    <!-- Start Invoice -->\n                    <ng-container *ngIf=\"orderData.customerInvoiceUrl && orderData.customerInvoiceName\">\n                      <h5 class=\"card-title text-left wsn\">Rechnung:</h5>\n                      <a class=\"my-link\" href=\"{{ orderData.customerInvoiceUrl }}\" target=\"_blank\"\n                        rel=\"noopener\">{{orderData.customerInvoiceName}}</a>\n                    </ng-container>\n                    <!-- End: Invoice -->\n                  </div>\n\n                  <!-- Right column: Realestate Details -->\n                  <div class=\"col-6\">\n                    <h5 class=\"card-title text-left wsn\">Immobilien-Details:</h5>\n                    <p class=\"mb-1\"><strong>Objekt:</strong> {{ realestate.title }}</p>\n                    <p class=\"mb-1\" *ngIf=\"realestate.objectNumber\"><strong>Objektnummer:</strong>\n                      {{ realestate.objectNumber }}</p>\n                    <p><strong>Adresse:</strong> {{ realestate.street }} {{ realestate.streetnumber }},\n                      {{ realestate.postalcode }} {{realestate.city }}</p>\n                  </div>\n\n                </div>\n                <!-- For customer, add a button to delete the order if it is not accepted yet by admin -->\n                <!-- Otherwise we don't show this button -->\n                <ng-container *ngIf=\"orderData.status == 'opened'\">\n                  <button class=\"btn btn-danger mt-2 mr-2\" (click)=\"cancelOrder(orderData.orderId)\">Stornieren</button>\n                </ng-container>\n              </div>\n\n\n\n              <!-- Showing the current status in different colors -->\n              <ng-template #orderStatus>\n                <span [ngSwitch]=\"orderData.status\">\n                  <!-- possible status for orders:  opened, processing, completed, canceled -->\n                  <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                    In Prüfung\n                  </span>\n                  <span class=\"text-warning\" *ngSwitchCase=\"'processing'\">\n                    In Bearbeitung\n                  </span>\n                  <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n                    Abgeschlossen\n                  </span>\n                  <span class=\"text-danger\" *ngSwitchCase=\"'canceled'\">\n                    Storniert\n                  </span>\n                  <span *ngSwitchDefault>\n                    {{ orderData.status }}\n                  </span>\n                </span>\n              </ng-template>\n            </div>\n            <!-- Suborder List Component-->\n            <app-suborder-list [orderId]=\"orderData.orderId\"></app-suborder-list>\n          </ng-container>\n        </ng-container>\n\n        <ng-template #loading>\n          <div class=\"lds-ring\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n\n\n    <!-- Only added detailed comments to the customer for now, as we might create a generic component -->\n\n    <!-- Dienstleister Content -->\n    <div *ngIf=\"user.role === 'Dienstleister'\">\n      <app-suborder-list></app-suborder-list>\n    </div>\n\n    <!-- Administrator Content -->\n    <div *ngIf=\"user.role === 'Administrator'\">\n\n      <!-- Default: Show all orders, filter this later, or allow filtering by the user -->\n      <div *ngIf=\"state === 'default'\">\n        <div class=\"shadow card cgrid\">\n          <div class=\"card-header\">\n            <h5 class=\"mb-0\">Alle Aufträge </h5>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped table-sm\">\n                <thead>\n                  <tr>\n                    <th>Auftrag vom</th>\n                    <th>Auftragsnummer</th>\n                    <th>Immobilie</th>\n                    <th>Region</th>\n                    <th></th>\n                    <th>Status</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <ng-container *ngIf=\"os.allOrders as orders; else loading\">\n                    <ng-container *ngFor=\"let order of orders\">\n                      <tr>\n                        <td>{{ order.createdOn.toDate() | date: 'dd.MM.yy HH:mm'}}</td>\n                        <td>{{ order.orderId }}</td>\n                        <td>{{ order.Desc }}</td>\n                        <td>{{ order.areaDesc }}</td>\n                        <td>\n                          <div *ngIf=\"order.adminActionRequired\"><i class=\"fas fa-exclamation-triangle text-danger\"></i>\n                          </div>\n                          <div><i *ngIf=\"!order.adminActionRequired\"\n                              class=\"fas fa-check-circle text-success\">&nbsp;</i><i\n                              *ngIf=\"order.status == 'completed' && !order.customerInvoiceName\"\n                              class=\"fas fa-file-alt text-warning\"></i></div>\n                        </td>\n                        <td>\n                          <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n                        </td>\n                        <td>\n                          <button class=\"btn btn-primary btn-sm align-self-center float-right\"\n                            (click)=\"openDetailPage(order.orderId, order.realestateId, false, order.createdBy)\">Auftrag\n                            bearbeiten</button>\n                        </td>\n                      </tr>\n                      <ng-template #orderStatus>\n                        <span [ngSwitch]=\"order.status\">\n                          <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                            Prüfung erforderlich\n                          </span>\n                          <span class=\"text-warning\" *ngSwitchCase=\"'checked'\">\n                            In Vermittlung\n                          </span>\n                          <span class=\"text-warning\" *ngSwitchCase=\"'requested'\">\n                            Zuweisungs-Anfrage\n                          </span>\n                          <span class=\"text-success\" *ngSwitchCase=\"'processing'\">\n                            In Bearbeitung\n                          </span>\n                          <span class=\"text-danger\" *ngSwitchCase=\"'uploaded'\">\n                            Nachbearbeitung erforderlich!\n                          </span>\n                          <span class=\"text-danger\" *ngSwitchCase=\"'canceled'\">\n                            Storniert\n                          </span>\n                          <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n                            Abgeschlossen\n                          </span>\n                          <span *ngSwitchDefault>\n                            {{ order.status }}\n                          </span>\n                        </span>\n                      </ng-template>\n                    </ng-container>\n                  </ng-container>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n\n\n        </div>\n        <ng-template #loading>\n          <div class=\"lds-ring\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </ng-template>\n      </div>\n\n      <!-- Detail-view:  -->\n      <div *ngIf=\"state === 'detail-view'\">\n        <ng-container *ngIf='currentRealestateData | async as realestate; else loading'>\n          <ng-container *ngIf='currentOrderData | async as orderData; else loading'>\n            <ng-container *ngIf=\"createdByPersonData | async as Kunde;\">\n              <div class=\"shadow card fluid cgrid\">\n                <div class=\"card-header\">\n                  <button class=\"btn btn-sm btn-primary float-right\" (click)=\"state = 'default'\">Zurück</button>\n                  <h5>Detailansicht\n                  </h5>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-6\">\n                      <h5 class=\"card-title text-left wsn\">Auftrags-Details:</h5>\n                      <p class=\"mb-1\"><strong>Erstellt am:</strong>\n                        {{ orderData.createdOn.toDate() | date: 'dd.MM.yyyy HH:mm'}}</p>\n\n                      <p class=\"mb-4\">\n                        <strong>Erstellt von:</strong> {{ Kunde.firstName }} {{ Kunde.lastName }} aus {{ Kunde.city }}\n                        <br>\n                        <strong>E-Mail:</strong> {{ Kunde.email }}\n                        <br>\n                        <strong>Telefon:</strong> {{ Kunde.phone }}\n                        <br>\n                        <strong>Erreichbarkeit:</strong> {{ Kunde.reachability }}\n                        <br>\n                        <i>UID: {{ orderData.createdBy }}</i>\n                        <br>\n                        <ng-container *ngIf=\"orderData.price\"><strong>Summe:</strong> {{orderData.price}} €\n                        </ng-container>\n                      </p>\n                      <p><strong>Status:</strong>\n                        <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n                      </p>\n                    </div>\n                    <div class=\"col-12 col-md-6\">\n                      <h5 class=\"card-title text-left wsn\">Immobilien-Details:</h5>\n                      <p><strong>Titel:</strong> {{ realestate.title }}</p>\n                      <p *ngIf=\"realestate.objectNumber\"><strong>Objektnummer:</strong> {{ realestate.objectNumber }}\n                      </p>\n                      <p><strong>Adresse:</strong> {{ realestate.street }} {{ realestate.streetnumber }},\n                        {{ realestate.postalcode }} {{realestate.city }}</p>\n                      <p><i>Immobilien-ID: {{ realestate.id }}</i></p>\n                      <!-- Start: Invoice -->\n                      <hr />\n                      <h5 class=\"card-title text-left wsn\">Rechnung:</h5>\n                      <ng-container *ngIf=\"user.role === 'Administrator' && orderData.customerInvoiceUrl === undefined\"\n                        class=\"mt-2\">\n                        <!-- <h5 class=\"mb-2 font-weight-light\">Vertragliche Vereinbarung</h5> -->\n                        <!-- Don't show upload fields while uploading -->\n                        <div class=\"custom-file\" *ngIf=\"uploading === false; else loading\">\n                          <div class=\"form-group\">\n                            <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                              Datei hochladen\n                              <input type=\"file\" class=\"alert alert-info initial-file\"\n                                (change)=\"uploadToOrder($event, orderData.orderId)\">\n                            </label>\n                          </div>\n                        </div>\n                        <ng-container *ngIf=\"uploading\">\n                          <ng-container *ngTemplateOutlet=\"spinner\"></ng-container>\n                        </ng-container>\n                      </ng-container>\n                      <ng-container *ngIf=\"orderData.customerInvoiceUrl && orderData.customerInvoiceName\">\n                        <a class=\"my-link\" href=\"{{ orderData.customerInvoiceUrl }}\" target=\"_blank\"\n                          rel=\"noopener\">{{orderData.customerInvoiceName}}</a>\n                        <span> - </span><a style=\"color: #dc3545;\" href=\"javascript:void(0);\"\n                          (click)=\"deleteFile(orderData.orderId, 'customerInvoiceUrl', orderData.customerInvoiceName)\">löschen</a>\n                      </ng-container>\n                      <!-- End: Invoice -->\n                    </div>\n\n                  </div>\n                  <!-- Show different additional things (buttons, uploaded materials, upload fields) to the content depending on the order status -->\n                  <ng-container *ngTemplateOutlet=\"orderDynPart\"></ng-container>\n                  <ng-template #orderDynPart>\n                    <span [ngSwitch]=\"orderData.status\">\n                      <span *ngSwitchCase=\"'opened'\">\n                        <button class=\"btn btn-warning mt-2 mr-2\"\n                          (click)=\"os.setStatusChecked(orderData.orderId)\">Geprüft</button>\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span>\n                      <span *ngSwitchCase=\"'checked'\">\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span>\n                      <!-- <span *ngSwitchCase=\"'requested'\">\n                        <button class=\"btn btn-warning mt-2 mr-2\" [disabled]=\"!orderData.status === 'requested'\"\n                          (click)=\"os.acceptOrder(orderData.orderId)\">Zuteilen</button>\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span> -->\n                      <span *ngSwitchCase=\"'processing'\">\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span>\n                      <!-- <span *ngSwitchCase=\"'uploaded'\">\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span> -->\n                      <span *ngSwitchCase=\"'completed'\">\n                      </span>\n                      <span *ngSwitchCase=\"'caceled'\">\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span>\n                      <span *ngSwitchDefault>\n                        <ng-container *ngTemplateOutlet=\"adminDeleteButton\"></ng-container>\n                      </span>\n                    </span>\n                  </ng-template>\n                </div>\n              </div>\n              <app-suborder-list [orderId]=\"orderData.orderId\"></app-suborder-list>\n\n\n              <ng-template #orderStatus>\n                <span [ngSwitch]=\"orderData.status\">\n                  <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                    Prüfung erforderlich\n                  </span>\n                  <span class=\"text-success\" *ngSwitchCase=\"'checked'\">\n                    In Vermittlung\n                  </span>\n                  <span class=\"text-warning\" *ngSwitchCase=\"'requested'\">\n                    Zuweisungs-Anfrage\n                  </span>\n                  <span class=\"text-success\" *ngSwitchCase=\"'processing'\">\n                    In Bearbeitung\n                  </span>\n                  <span class=\"text-danger\" *ngSwitchCase=\"'uploaded'\">\n                    Nachbearbeitung erforderlich!\n                  </span>\n                  <span *ngSwitchCase=\"'completed'\">\n                    <span class=\"text-success\">Abgeschlossen</span>\n                    <br>\n                  </span>\n                  <span *ngSwitchDefault>\n                    {{ orderData.status }}\n                  </span>\n                </span>\n              </ng-template>\n              <ng-template #adminDeleteButton>\n                <button class=\"btn btn-danger mt-2 mr-2\"\n                  (click)=\"deleteOrder(orderData.orderId, realestate.id)\">Löschen</button>\n              </ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <ng-template #loading>\n          <div class=\"lds-ring\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n\n  </ng-container>\n\n  <!-- Telling the user to complete his profile to see this page  -->\n  <ng-template #notCompleted>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"shadow card cgrid\">\n          <div class=\"card-header\">\n            <h5 class=\"mb-0\">\n              <h3 class=\"card-title text-left b wsn nomarbot\">Achtung</h3>\n            </h5>\n          </div>\n          <div class=\"card-body\">\n            <p class=\"card-text\" style=\"color: #dc3545;\"><strong>Sie haben Ihre Profil-Daten noch nicht eingepflegt,\n                daher ist diese Seite noch gesperrt.</strong></p>\n            <p class=\"card-text mb-0\">Sollten Sie Hilfe beim Einpflegen Ihrer Daten benötigen können Sie uns gerne\n              kontaktieren!</p>\n            <a class=\"my-link\"\n              href=\"mailto:kontakt@imogent.com?subject=Problem%20beim%20Daten%20einpflegen\">Kontaktieren</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<ng-template #loading>\n  <!-- CSS Loading Spinner -->\n  <div class=\"lds-ring ring-default\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>\n\n<ng-template #loadingSmall>\n  <!-- CSS Loading Spinner small -->\n  <div class=\"lds-ring ring-small\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>\n\n<!-- Alert: Successfully saved -->\n<div *ngIf=\"success\" class=\"alert alert-success float-right\" style=\"position: absolute; right: 0.5em; bottom: 0.5em;\">\n  Erfolgreich gespeichert!\n</div>\n<ng-template #spinner>\n  <div class=\"spinner-border text-secondary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/orderoverview/orderoverview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/orderoverview/orderoverview.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderoverviewComponent", function() { return OrderoverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var OrderoverviewComponent = /** @class */ (function () {
    function OrderoverviewComponent(realestateservice, os, auth, fb, uploadService, afs, loader, afStorage) {
        this.realestateservice = realestateservice;
        this.os = os;
        this.auth = auth;
        this.fb = fb;
        this.uploadService = uploadService;
        this.afs = afs;
        this.loader = loader;
        this.afStorage = afStorage;
        this.success = false;
        this.uploading = false;
        this.error = false;
        this.photoUploadForm = this.fb.group({
            photoLink: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^(http|https|ftp)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*[^\.\,\)\(\s]$')
                ]]
        });
    }
    OrderoverviewComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.userRef = user.uid;
        this.state = 'default';
        this.suborder_state = 'list-view';
    };
    Object.defineProperty(OrderoverviewComponent.prototype, "photoLink", {
        get: function () {
            return this.photoUploadForm.get('photoLink');
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * Gets triggered when order detail button is clicked
     * Shows the details of the order and set the component state according to user role
     */
    OrderoverviewComponent.prototype.openDetailPage = function (orderIdParam, ridParam, myornotParam, creatorId) {
        this.currentRealestateData = this.os.getRealestateDetails(ridParam);
        this.currentOrderData = this.os.getOrderDetails(orderIdParam);
        if (creatorId === undefined) {
            // do nothing when creatorId is undefined
        }
        else {
            this.createdByPersonData = this.os.getCreatorDetails(creatorId);
        }
        if (myornotParam) {
            this.state = 'my-detail-view';
        }
        else {
            this.state = 'detail-view';
        }
    };
    /**
     * Admin can delete an order. Delete the order document and update the realestate
     */
    OrderoverviewComponent.prototype.deleteOrder = function (oidParam, ridParam) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmed = confirm('Möchten Sie den Auftrag wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden!');
                        if (!confirmed) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.os.deleteOrder(oidParam, ridParam)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.state = 'default';
                            _this.success = false;
                        }, 600);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.success = false;
                        this.error = true;
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        alert('Löschvorgang abgebrochen!');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Customer can cancel an order. Status of order and suborders will be changed to 'canceled'
   */
    OrderoverviewComponent.prototype.cancelOrder = function (oidParam) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmed = confirm('Möchten Sie den Auftrag wirklich stornieren? Diese Aktion kann nicht rückgängig gemacht werden!');
                        if (!confirmed) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.os.cancelOrder(oidParam)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.state = 'default';
                            _this.success = false;
                        }, 600);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        this.success = false;
                        this.error = true;
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        alert('Stornierung abgebrochen!');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Saves the information that both parties have been notified via E-Mail by an Admin as
     * a property inside the order database entry. This property will later be used to hide the buttons
     * so different Admins or the same Admin will not notify the customer & pilot again.
     */
    OrderoverviewComponent.prototype.saveNotificationStatusChange = function (oidParam) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.os.changeOrder(oidParam, 'notifcationSent', true);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Gets triggered when service provider completes uploading all the photos and marks the order as complete
     */
    OrderoverviewComponent.prototype.uploadOrder = function (oidParam) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.os.setStatusUploaded(oidParam)];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.state = 'default';
                        }, 600);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        this.error = true;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets triggered when admin finishes the post processing and marks the oder as complete after uploading all the files.
     */
    OrderoverviewComponent.prototype.completeOrder = function (oidParam, ridParam) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmed = confirm('Sind Sie sicher, dass Sie den Auftrag abschließen wollen? Diese Aktion kann nicht rückgängig gemacht werden. Dem Kunde wird der abgeschlossene Auftrag sofort angezeigt.');
                        if (!confirmed) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.os.setStatusCompleted(oidParam, ridParam)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.state = 'default';
                            _this.success = false;
                        }, 600);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        this.success = false;
                        this.error = true;
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        alert('Löschvorgang abgebrochen!');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets triggered when service provider uploads a photo to an order
     */
    OrderoverviewComponent.prototype.uploadBild = function (event, orderid, nameParam) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filename, downloadURL;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filename = event.target.files[0].name;
                        this.uploading = true;
                        // Upload the file to firestore storage
                        return [4 /*yield*/, this.uploadService.uploadToOrder(event, orderid, filename)];
                    case 1:
                        // Upload the file to firestore storage
                        _b.sent();
                        downloadURL = this.uploadService.downloadURL;
                        // update the uploaded file url in orders document
                        return [4 /*yield*/, this.afs.collection('orders').doc(orderid).update((_a = {},
                                _a[nameParam] = downloadURL,
                                _a))];
                    case 2:
                        // update the uploaded file url in orders document
                        _b.sent();
                        this.uploading = false;
                        this.success = true;
                        setTimeout(function () {
                            _this.success = false;
                        }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Gets triggered when administrator uploads a file to the order (e.g invoice)
   * Uploads the file to firebase storage and updates the url in order document
   */
    OrderoverviewComponent.prototype.uploadToOrder = function (event, orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var downloadURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uploading = true;
                        return [4 /*yield*/, this.uploadService.uploadToOrder(event, orderId, event.target.files[0].name)];
                    case 1:
                        _a.sent();
                        downloadURL = this.uploadService.downloadURL;
                        return [4 /*yield*/, this.afs.collection('orders').doc(orderId).update({
                                customerInvoiceUrl: downloadURL,
                                customerInvoiceName: event.target.files[0].name
                            })];
                    case 2:
                        _a.sent();
                        this.uploading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete a document from the order
     */
    OrderoverviewComponent.prototype.deleteFile = function (orderId, urlField, fileName) {
        var _this = this;
        var confirmed = confirm('Sind Sie sicher, dass Sie dieses Dokument löschen möchten?');
        if (confirmed) {
            if (urlField === 'customerInvoiceUrl') {
                // delete file reference from order document
                return this.afs.collection('orders').doc(orderId).update({
                    customerInvoiceUrl: firebase_app__WEBPACK_IMPORTED_MODULE_8__["firestore"].FieldValue.delete(),
                    customerInvoiceName: firebase_app__WEBPACK_IMPORTED_MODULE_8__["firestore"].FieldValue.delete()
                }).then(function () {
                    // delete file from storage
                    _this.afStorage.ref("orders/" + orderId + "/" + fileName).delete();
                })
                    .catch(function (error) { return console.log(error); });
            }
        }
    };
    OrderoverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderoverview',
            template: __webpack_require__(/*! ./orderoverview.component.html */ "./src/app/orderoverview/orderoverview.component.html"),
            styles: [__webpack_require__(/*! ./orderoverview.component.css */ "./src/app/orderoverview/orderoverview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__["RealestateService"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]])
    ], OrderoverviewComponent);
    return OrderoverviewComponent;
}());



/***/ }),

/***/ "./src/app/package-list/package-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/package-list/package-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid.shadow.rounded {\n    padding-top: 0.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZS1saXN0L3BhY2thZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZS1saXN0L3BhY2thZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC5zaGFkb3cucm91bmRlZCB7XG4gICAgcGFkZGluZy10b3A6IDAuNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/package-list/package-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/package-list/package-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container for multiple packages -->\n<!-- <div class=\"container-fluid shadow rounded\"> -->\n<!-- <h4 class=\"text-white\">{{serviceLabel}}</h4> -->\n<!-- <div class=\"card-deck mb-3 text-center\"> -->\n<!-- Loop the packages and render them all as individual components -->\n<div class=\"container-fluid row\">\n    <div *ngFor=\"let j of packages\" class=\"col-12 col-sm-6 col-md-4 col-lg-3\">\n        <!-- <div class=\"card mb-4 shadow\">\n                            <app-package [package]=\"j\" [servicesComponent]=\"servicesComponent\"></app-package>\n                        </div> -->\n        <div class=\"cards\">\n            <div class=\"card card-pricing card-raised\">\n                <div class=\"card-body\">\n                    <app-package [package]=\"j\" [servicesComponent]=\"servicesComponent\"></app-package>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- </div> -->\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/package-list/package-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/package-list/package-list.component.ts ***!
  \********************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/services.component */ "./src/app/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageListComponent = /** @class */ (function () {
    function PackageListComponent() {
    }
    PackageListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PackageListComponent.prototype, "packages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PackageListComponent.prototype, "serviceLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_services_services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"])
    ], PackageListComponent.prototype, "servicesComponent", void 0);
    PackageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package-list',
            template: __webpack_require__(/*! ./package-list.component.html */ "./src/app/package-list/package-list.component.html"),
            styles: [__webpack_require__(/*! ./package-list.component.css */ "./src/app/package-list/package-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PackageListComponent);
    return PackageListComponent;
}());



/***/ }),

/***/ "./src/app/package/package.component.css":
/*!***********************************************!*\
  !*** ./src/app/package/package.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #50535b;\n}\n\n.package-image {\n  /* width: 150px;\n  height: 150px; */\n}\n\nul li {\n  padding: 0;\n  border: none;\n  color: #3C4858;\n}\n\n.package {\n  cursor: pointer;\n  border: 2px solid #FFF;\n  border-radius: 6px;\n}\n\n.selected-service, .selected-package {\n  border: 2px solid #22bca4;\n}\n\n.cards {\n  height: 100%;\n}\n\n.package-cards {\n  /* height: 87% !important; */\n}\n\n.cards .card {\n  height: 90%;\n}\n\n.cards .selected-tick {\n  position: absolute;\n  top: 32px;\n  right: 17px;\n}\n\n.cards .selected-tick::before, .cards .selected-tick::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.cards .selected-tick::after {\n  border-width: 1.35em;\n  border-right-color: #22bca4;\n  border-top-color: #22bca4;\n}\n\n.cards .tick-icon {\n  position: absolute;\n  top: 36px;\n  right: 23px;\n  color: #FFF;\n}\n\n.disabled-service {\n  background: rgba(222, 222, 222, 0.5);\n  border: 2px solid #BBB;\n}\n\n.grayscale {\n  filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#grayscale\");\n  /* Firefox 3.5+ */\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%) !important;\n  /* Chrome 19+ & Safari 6+ */\n}\n\n.grayscale:hover {\n  filter: none;\n  -webkit-filter: grayscale(0%) !important;\n}\n\n.card-pricing .card-body {\n  padding: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZS9wYWNrYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7a0JBQ2dCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbVFBQW1RO0VBQ25RLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLDBDQUEwQztFQUMxQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZS9wYWNrYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIGNvbG9yOiAjNTA1MzViO1xufVxuXG4ucGFja2FnZS1pbWFnZSB7XG4gIC8qIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDsgKi9cbn1cblxudWwgbGkge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjM0M0ODU4O1xufVxuXG4ucGFja2FnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc2VsZWN0ZWQtc2VydmljZSwgLnNlbGVjdGVkLXBhY2thZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjJiY2E0O1xufVxuXG4uY2FyZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWNrYWdlLWNhcmRzIHtcbiAgLyogaGVpZ2h0OiA4NyUgIWltcG9ydGFudDsgKi9cbn1cblxuLmNhcmRzIC5jYXJkIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jYXJkcyAuc2VsZWN0ZWQtdGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogMTdweDtcbn1cblxuLmNhcmRzIC5zZWxlY3RlZC10aWNrOjpiZWZvcmUsIC5jYXJkcyAuc2VsZWN0ZWQtdGljazo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uY2FyZHMgLnNlbGVjdGVkLXRpY2s6OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxLjM1ZW07XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyYmNhNDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIyYmNhNDtcbn1cblxuLmNhcmRzIC50aWNrLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzZweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uZGlzYWJsZWQtc2VydmljZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC41KTtcbiAgYm9yZGVyOiAycHggc29saWQgI0JCQjtcbn1cblxuLmdyYXlzY2FsZSB7XG4gIGZpbHRlcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJz48ZmlsdGVyIGlkPVxcJ2dyYXlzY2FsZVxcJz48ZmVDb2xvck1hdHJpeCB0eXBlPVxcJ21hdHJpeFxcJyB2YWx1ZXM9XFwnMC4zMzMzIDAuMzMzMyAwLjMzMzMgMCAwIDAuMzMzMyAwLjMzMzMgMC4zMzMzIDAgMCAwLjMzMzMgMC4zMzMzIDAuMzMzMyAwIDAgMCAwIDAgMSAwXFwnLz48L2ZpbHRlcj48L3N2Zz4jZ3JheXNjYWxlXCIpO1xuICAvKiBGaXJlZm94IDMuNSsgKi9cbiAgZmlsdGVyOiBncmF5O1xuICAvKiBJRTYtOSAqL1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8qIENocm9tZSAxOSsgJiBTYWZhcmkgNisgKi9cbn1cblxuLmdyYXlzY2FsZTpob3ZlciB7XG4gIGZpbHRlcjogbm9uZTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcHJpY2luZyAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/package/package.component.html":
/*!************************************************!*\
  !*** ./src/app/package/package.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards\" [ngClass]=\"{\n  'package-cards' : servicesComponent.state === '3'\n  }\">\n  <div class=\"card card-pricing card-raised package\" (click)=\"packageSelectHandler(package, $event)\" [ngClass]=\"{\n    'selected-service': servicesComponent.state === '1' && servicesComponent.selectedServices.indexOf(package.service_key) >= 0 && package.disabled === false,\n    'selected-package': servicesComponent.state === '3' && servicesComponent.selectedPackages.indexOf(package.package_key) >= 0,\n    'disabled-service': package.disabled === true\n  }\">\n    <div class=\"card-body\">\n      <ngb-carousel [showNavigationArrows]=\"false\" [showNavigationIndicators]=\"false\">\n        <ng-template *ngFor=\"let image of package.package_images\" ngbSlide>\n          <img class=\"card-img-top package-image\" src=\"../../assets/images/{{image}}\" alt=\"Random first slide\">\n        </ng-template>\n      </ngb-carousel>\n      <div class=\"card-body\">\n        <ng-container *ngIf=\"servicesComponent.state === '3' && package.price !== '0,00'\">\n          <h4 class=\"card-title\">\n            {{package.name}}\n          </h4>\n          <h5 class=\"mb-0\"><b *ngIf=\"package.price_pre_text\">{{package.price_pre_text}} </b><b>{{package.price}}€</b>\n          </h5>\n          <p *ngIf=\"package.price_note\"><small class=\"text-muted\">{{package.price_note}}</small></p>\n        </ng-container>\n        <ng-container *ngIf=\"servicesComponent.state === '3' && package.price === '0,00'\">\n          <h4 class=\"card-title\">\n            {{package.name}}\n          </h4>\n        </ng-container>\n        <ng-container *ngIf=\"servicesComponent.state !== '3'\">\n          <h4 class=\"card-title\">\n            {{package.title}}\n          </h4>\n          <!-- <p class=\"card-title\" *ngIf=\"servicesComponent.state !== '3' && package.disabled === true\">\n            Bald verfügbar\n          </p> -->\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <ng-container\n    *ngIf=\"(servicesComponent.state === '1' && servicesComponent.selectedServices.indexOf(package.service_key) >= 0) || (servicesComponent.state === '3' && servicesComponent.selectedPackages.indexOf(package.package_key) >= 0)\">\n    <div class=\"selected-tick\">\n    </div>\n    <i class=\"fa fa-check tick-icon\"></i>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/package/package.component.ts":
/*!**********************************************!*\
  !*** ./src/app/package/package.component.ts ***!
  \**********************************************/
/*! exports provided: PackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function() { return PackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/package */ "./src/app/models/package.ts");
/* harmony import */ var _app_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/configuration.service */ "./src/app/_services/configuration.service.ts");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var PackageComponent = /** @class */ (function () {
    function PackageComponent(dialog, afs, conf, userService) {
        this.dialog = dialog;
        this.afs = afs;
        this.conf = conf;
        this.userService = userService;
        this.selectedPackages = [];
        this.selectedServices = [];
    }
    PackageComponent.prototype.ngOnInit = function () {
        // console.log(this.servicesComponent.selectedPackages);
    };
    PackageComponent.prototype.packageSelectHandler = function (service, event) {
        return __awaiter(this, void 0, void 0, function () {
            var option, i, updateDisabledServices, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = service.service_key;
                        if (!!service.disabled) return [3 /*break*/, 1];
                        if (this.servicesComponent.state === '3') {
                            if (this.servicesComponent.selectedPackages.indexOf(service.package_key) < 0) {
                                this.servicesComponent.selectedPackages.push(service.package_key);
                            }
                            else {
                                this.servicesComponent.selectedPackages.splice(this.servicesComponent.selectedPackages.indexOf(service.package_key), 1);
                            }
                            this.servicesComponent.packageSelectHandler();
                            return [2 /*return*/];
                        }
                        if (this.servicesComponent.selectedServices.indexOf(option) < 0) {
                            this.servicesComponent.selectedServices.push(option);
                            this.servicesComponent.cartItems.push(this.servicesComponent.availablePackages.filter(function (service) { return service.service_key === option; })[0]);
                        }
                        else {
                            i = 0;
                            for (; i < this.servicesComponent.cartItems.length; i++) {
                                if (this.servicesComponent.cartItems[i].service_key === option) {
                                    break;
                                }
                            }
                            this.servicesComponent.selectedServices.splice(this.servicesComponent.selectedServices.indexOf(option), 1);
                            this.servicesComponent.cartItems.splice(i, 1);
                        }
                        this.userService.cartItems = this.servicesComponent.cartItems;
                        this.userService.selectedServices = this.servicesComponent.selectedServices;
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        updateDisabledServices = {};
                        if (this.conf.disabledServices[service.title]) {
                            updateDisabledServices[service.title] = this.conf.disabledServices[service.title] + 1;
                        }
                        else {
                            updateDisabledServices[service.title] = 1;
                        }
                        return [4 /*yield*/, this.afs.collection('configuration').doc('Lt8fpXKYGVNy6qjpi0hU/').update(updateDisabledServices)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.success = false;
                        }, 1500);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('package'),
        __metadata("design:type", _models_package__WEBPACK_IMPORTED_MODULE_1__["Package"])
    ], PackageComponent.prototype, "package", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"])
    ], PackageComponent.prototype, "servicesComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PackageComponent.prototype, "selectedPackages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PackageComponent.prototype, "selectedServices", void 0);
    PackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package',
            template: __webpack_require__(/*! ./package.component.html */ "./src/app/package/package.component.html"),
            styles: [__webpack_require__(/*! ./package.component.css */ "./src/app/package/package.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/payments/payments.component.css":
/*!*************************************************!*\
  !*** ./src/app/payments/payments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/payments/payments.component.html":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page-Content -->\n<ng-container *ngIf=\"auth.myUserObservable as user; else loading\">\n  <div class=\"shadow card cgrid\">\n    <div class=\"card-header\">\n      <h5 class=\"mb-0\">Alle Aufträge </h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n\n        <!-- Administrator Content -->\n        <div *ngIf=\"user.role === 'Administrator'\">\n          <ng-container *ngIf=\"os.allOrders as orders; else noOrders\">\n            <table class=\"table table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>Auftrag vom</th>\n                  <th>Auftragsnummer</th>\n                  <th>Region</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let order of orders\">\n                  <tr *ngIf=\"order.customerInvoiceName\">\n                    <td>{{ order.createdOn.toDate() | date: 'dd.MM.yy HH:mm'}}</td>\n                    <td>{{ order.orderId }}</td>\n                    <td>{{ order.areaDesc }}</td>\n                    <td>\n                      <a class=\"btn btn-primary  btn-sm align-self-center float-right\" target=\"_blank\" rel=\"noopener\"\n                        href=\"{{order.customerInvoiceUrl}}\">\n                        <i class=\"far fa-file-pdf\"></i> - Download\n                      </a>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </ng-container>\n        </div>\n\n        <!-- Customer Content -->\n        <div *ngIf=\"user.role === 'Kunde'\">\n          <ng-container *ngIf=\"os.myCreatedOrders as orders; else noOrders\">\n            <table class=\"table table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>Auftrag vom</th>\n                  <th>Auftragsnummer</th>\n                  <th>Region</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let order of orders\">\n                  <tr *ngIf=\"order.customerInvoiceName\">\n                    <td>{{ order.createdOn.toDate() | date: 'dd.MM.yy HH:mm'}}</td>\n                    <td>{{ order.orderId }}</td>\n                    <td>{{ order.areaDesc }}</td>\n                    <td>\n                      <a class=\"btn btn-primary  btn-sm align-self-center float-right\" target=\"_blank\" rel=\"noopener\"\n                        href=\"{{order.customerInvoiceUrl}}\">\n                        <i class=\"far fa-file-pdf\"></i> - Download\n                      </a>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <!-- CSS Loading Spinner -->\n  <div class=\"lds-ring ring-default centered\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/payments/payments.component.ts":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(auth, os) {
        this.auth = auth;
        this.os = os;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.css */ "./src/app/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/profile/index.ts":
/*!**********************************!*\
  !*** ./src/app/profile/index.ts ***!
  \**********************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page-Content -->\n<ng-container *ngIf=\"authService.myUserObservable as user; else loading\">\n  <div class=\"shadow card cgrid\">\n    <div class=\"card-body\">\n      <form *ngIf=\"authService.emailVerified === true\" [formGroup]=\"profileForm\" (ngSubmit)=\"submitHandler()\">\n        <div *ngIf=\"user.role === 'Kunde'\" class=\"row\">\n          <div class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Unternehmensname:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Unternehmen\" formControlName=\"company\">\n            </div>\n          </div>\n          <div class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">USt-ID:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Ust-ID\" formControlName=\"ustid\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Vorname <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Vorname\" formControlName=\"firstName\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"firstName.invalid && firstName.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie einen gültigen Vornamen an!\n            </div>\n          </div>\n          <div class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Nachname <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nachname\" formControlName=\"lastName\">\n            </div>\n            <div *ngIf=\"lastName.invalid && lastName.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie einen gültigen Nachnamen an!\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-8 col-lg-6\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Straße <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Straße\" formControlName=\"street\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"street.invalid && street.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine gültige Straße an!\n            </div>\n          </div>\n          <div class=\"col-4 col-lg-2\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Hausnummer <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Hausnummer\" formControlName=\"streetNumber\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"streetNumber.invalid && streetNumber.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine gültige Hausnummer an!\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-4 col-lg-2\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Postleitzahl <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Postleitzahl\" formControlName=\"postalcode\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"postalcode.invalid && postalcode.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine gültige Postleitzahl an!\n            </div>\n          </div>\n          <div class=\"col-8 col-lg-6\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Stadt <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Stadt\" formControlName=\"city\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"city.invalid && city.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine gültige Stadt an!\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Telefonnummer <span class=\"text-danger\">*</span>:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Telefonnummer\" formControlName=\"phone\">\n            </div>\n            <!-- Form Verification Error -->\n            <div *ngIf=\"phone.invalid && phone.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine gültige Telefonnummer an!\n            </div>\n          </div>\n          <div *ngIf=\"user.role === 'Kunde'\" class=\"col-6 col-lg-4\">\n            <div class=\"form-group mt-4\">\n              <p class=\"mb-0\">Erreichbarkeit:</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"z.B. Mo-Fr 9:00 Uhr bis 17:00 Uhr\"\n                formControlName=\"reachability\">\n            </div>\n          </div>\n        </div>\n\n        <!-- Service provider skills -->\n        <div *ngIf=\"user.role === 'Dienstleister'\" class=\"row\">\n          <div class=\"col-6 col-lg-4 shadow card fluid cgrid\">\n            <div class=\"card-header\">\n              <h5 class=\"card-title text-left wsn\">Dienstleistungen</h5>\n            </div>\n\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-2\">\n                  <mat-checkbox #isoCheck formControlName=\"dronepilot\" color=\"primary\">\n                  </mat-checkbox>\n                </div>\n                <div class=\"col-8\">\n                  Drohnenpilot\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-2\">\n                  <mat-checkbox #isoCheck formControlName=\"visualisation\" color=\"primary\">\n                  </mat-checkbox>\n                </div>\n                <div class=\"col-8\">\n                  3D Visualisierung\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <!-- Form Status -->\n            <div class=\"form-group\" *ngIf=\"profileForm.pristine\">\n              <!-- No changes (unclickable button that acts as a status),  -->\n              <button class=\"btn btn-outline-secondary\" [disabled]=\"true\">Keine Änderungen</button>\n            </div>\n\n            <!-- Form Submit Button -->\n            <div class=\"form-group\" *ngIf=\"!profileForm.pristine\">\n              <!-- Save changes -->\n              <button class=\"btn btn-primary \" [disabled]=\"profileForm.invalid || profileForm.pristine\">\n                Änderungen speichern\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf=\"user.dronepilot && !user.pilotVerified\">\n    <div *ngIf=\"!user.verificationDocument0\" class=\"shadow card cgrid\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title text-left wsn\">Vertragliche Vereinbarungen</h5>\n      </div>\n\n      <div class=\"card-body\">\n        <p style=\"color: #dc3545;\">Bevor Sie Aufträge annehmen können, müssen Sie diese Vereinbarung\n          unterzeichnen und unterschrieben wieder hochladen</p>\n        <a class=\"btn btn-primary\" target=\"_blank\" rel=\"noopener\"\n          href=\"../../assets/documents/pilot/Vertragliche_Vereinbarung.pdf\">\n          <i class=\"far fa-file-pdf\"></i> - Vertragliche Vereinbarung\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"user.dronepilot && !user.pilotVerified\">\n    <div class=\"shadow card cgrid\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title text-left wsn\">Dokumentenupload</h5>\n      </div>\n\n      <div class=\"card-body\">\n        <!-- Don't show upload fields while uploading -->\n        <ng-container class=\"mb-2\" *ngIf=\"uploading === false; else loading\">\n\n          <!-- Start file upload -->\n          <div class=\"form-group row\">\n            <div class=\"col-2 upload-button-container\">\n              Vertragliche Vereinbarung\n            </div>\n            <div *ngIf=\"user.verificationDocument0 === undefined\" class=\"col-2 upload-button-container\">\n              <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                Datei hochladen\n                <input type=\"file\" class=\"alert alert-info\"\n                  (change)=\"uploadDocument($event, 'vertragliche-vereinbarung', user.uid)\">\n              </label>\n            </div>\n            <div *ngIf=\"user.verificationDocument0\" class=\"col-4\">\n              <a class=\"btn btn-primary\" target=\"_blank\" rel=\"noopener\" href=\"{{user.verificationDocument0}}\">\n                <i class=\"far fa-file\"></i> - Vertragliche Vereinbarung\n              </a></div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-2 upload-button-container\">\n              Haftpflicht\n            </div>\n            <div *ngIf=\"!user.verificationDocument1\" class=\"col-2 upload-button-container\">\n              <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                Datei hochladen\n                <input type=\"file\" class=\"alert alert-info\" (change)=\"uploadDocument($event, 'haftpflicht', user.uid)\">\n              </label>\n            </div>\n            <div *ngIf=\"user.verificationDocument1\" class=\"col-4\">\n              <a class=\"btn btn-primary\" target=\"_blank\" rel=\"noopener\" href=\"{{user.verificationDocument1}}\">\n                <i class=\"far fa-file\"></i> - Haftpflicht\n              </a></div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-2 upload-button-container\">\n              Kenntnisnachweis\n            </div>\n            <div *ngIf=\"!user.verificationDocument2\" class=\"col-2 upload-button-container\">\n              <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                Datei hochladen\n                <input type=\"file\" class=\"alert alert-info\"\n                  (change)=\"uploadDocument($event, 'kenntnisnachweis', user.uid)\">\n              </label>\n            </div>\n            <div *ngIf=\"user.verificationDocument2\" class=\"col-4\">\n              <a class=\"btn btn-primary\" target=\"_blank\" rel=\"noopener\" href=\"{{user.verificationDocument2}}\">\n                <i class=\"far fa-file\"></i> - Kenntnisnachweis\n              </a></div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-2 upload-button-container\">\n              Aufstiegsgenehmigung\n            </div>\n            <div *ngIf=\"!user.verificationDocument3\" class=\"col-2 upload-button-container\">\n              <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                Datei hochladen\n                <input type=\"file\" class=\"alert alert-info\"\n                  (change)=\"uploadDocument($event, 'aufstiegsgenehmigung', user.uid)\">\n              </label>\n            </div>\n            <div *ngIf=\"user.verificationDocument3\" class=\"col-4\">\n              <a class=\"btn btn-primary\" target=\"_blank\" rel=\"noopener\" href=\"{{user.verificationDocument3}}\">\n                <i class=\"far fa-file\"></i> - Aufstiegsgenehmigung\n              </a></div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <!-- CSS Loading Spinner -->\n    <div class=\"lds-ring ring-default\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<!-- Information regarding personal data -->\n<div class=\"shadow card fluid cgrid\">\n\n  <div class=\"card-header\">\n    <h5 class=\"card-title text-left wsn\">Datenschutz</h5>\n  </div>\n\n\n  <div class=\"card-body\">\n    <!-- Dynamic Content -->\n    <p *ngIf=\"role === 'Dienstleister'\" class=\"card-text\">\n      Ihre persönliche Adresse wird nicht mit den Auftraggebern geteilt, sondern lediglich von uns\n      verwendet um in Zukunft die Entfernung zu den eingestellten Aufträgen berechnen zu können und diese\n      danach zu filtern. Alle Daten werden über eine gesicherte\n      SSL-Verbindung übertragen und sind für Dritte nicht mitlesbar oder einsehbar.\n    </p>\n    <p *ngIf=\"role === 'Kunde'\" class=\"card-text\">\n      Ihre geschäftliche Adresse wird nicht mit unseren Dienstleistern geteilt, sondern dient lediglich\n      der Rechnungsstellung von uns an Sie. Alle Daten werden über eine gesicherte SSL-Verbindung\n      übertragen und sind für Dritte nicht mitlesbar oder einsehbar.\n    </p>\n    <a target=\"_blank\" rel=\"noopener\" href=\"https://www.imogent.de/datenschutz/\" class=\"my-link\">Mehr zum\n      Datenschutz</a>\n  </div>\n\n</div>\n\n<ng-template #loading>\n  <!-- CSS Loading Spinner -->\n  <div class=\"lds-ring ring-default centered\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, afs, authService, uploadService, loader) {
        this.fb = fb;
        this.afs = afs;
        this.authService = authService;
        this.uploadService = uploadService;
        this.loader = loader;
        // Form State
        this.success = false;
        this.uploading = false;
        this.uploaded = false;
        this.profileForm = this.fb.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß-][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß-][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            company: [''],
            ustid: [''],
            street: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß.-][a-zA-ZäöüÄÖÜß. -]*[a-zA-ZäöüÄÖÜß.]$)')
                ]],
            streetNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[1-9][0-9]{0,3}[a-zA-Z]?$')
                ]],
            postalcode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß -][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9+/]*')
                ]],
            drone: [''],
            dronepilot: [''],
            visualisation: [''],
            // floorplan: [''],,
            // vstaging: [''],
            reachability: ['']
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.role = this.authService.myUserObservable['role'];
        var uid = user.uid;
        this.user = uid; // UID;
        this.preloadData();
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profile.unsubscribe(); // Missing or insufficient permissions Error, Memory Leak fix
    };
    Object.defineProperty(ProfileComponent.prototype, "firstName", {
        get: function () {
            return this.profileForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "lastName", {
        get: function () {
            return this.profileForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "company", {
        get: function () {
            return this.profileForm.get('company');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "ustid", {
        get: function () {
            return this.profileForm.get('ustid');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "street", {
        get: function () {
            return this.profileForm.get('street');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "streetNumber", {
        get: function () {
            return this.profileForm.get('streetNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "postalcode", {
        get: function () {
            return this.profileForm.get('postalcode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "city", {
        get: function () {
            return this.profileForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "phone", {
        get: function () {
            return this.profileForm.get('phone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "dronepilot", {
        get: function () {
            return this.profileForm.get('dronepilot');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "visualisation", {
        get: function () {
            return this.profileForm.get('visualisation');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "reachability", {
        // get floorplan() {
        //   return this.profileForm.get('floorplan');
        // }
        // get vstaging() {
        //   return this.profileForm.get('vstaging');
        // }
        get: function () {
            return this.profileForm.get('reachability');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Submit handler for profile form. Updates the user document in firebase
     */
    ProfileComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colRef, formValue, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        colRef = this.afs.collection('users');
                        this.profileForm.value.profileCompleted = true;
                        formValue = this.profileForm.value;
                        this.profileForm.markAsPristine();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, colRef.doc(this.user).update(formValue)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.success = false;
                        }, 1500);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Preload data for user profile
     */
    ProfileComponent.prototype.preloadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.afs.doc("users/" + this.user).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                                _this.profileForm.patchValue(data);
                            }))
                                .subscribe()];
                    case 1:
                        _a.profile = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update a few attributes in user document (verificationNeeded and verificationFailed) when user has uploaded a document and needs verification.
     */
    ProfileComponent.prototype.verificationNeeded = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.authService.myUserObservable !== undefined) {
                    if (this.authService.myUserObservable.verificationDocument0 !== undefined) {
                        if (this.authService.myUserObservable.verificationDocument1 !== undefined) {
                            if (this.authService.myUserObservable.verificationDocument2 !== undefined) {
                                this.afs.collection('users').doc(this.authService.myUserObservable.uid).update({
                                    verificationNeeded: true,
                                    verificationFailed: false
                                });
                            }
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Gets triggered when user uploads the Pilot Contract document
     * Uploads the document to firebase and updates the verificationDocument0 url in user document on firebase
     */
    ProfileComponent.prototype.uploadDocument = function (event, fileName, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var downloadURL, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.uploading = true;
                        return [4 /*yield*/, this.uploadService.upload(event, uid, fileName)];
                    case 1:
                        _b.sent();
                        downloadURL = this.uploadService.downloadURL;
                        _a = fileName;
                        switch (_a) {
                            case 'vertragliche-vereinbarung': return [3 /*break*/, 2];
                            case 'haftpflicht': return [3 /*break*/, 4];
                            case 'kenntnisnachweis': return [3 /*break*/, 6];
                            case 'aufstiegsgenehmigung': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 10];
                    case 2: return [4 /*yield*/, this.afs.collection('users').doc(uid).update({
                            verificationDocument0: downloadURL
                        })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 4: return [4 /*yield*/, this.afs.collection('users').doc(uid).update({
                            verificationDocument1: downloadURL
                        })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6: return [4 /*yield*/, this.afs.collection('users').doc(uid).update({
                            verificationDocument2: downloadURL
                        })];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.afs.collection('users').doc(uid).update({
                            verificationDocument3: downloadURL
                        })];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        this.uploading = false;
                        this.uploaded = true;
                        setTimeout(function () {
                            _this.verificationNeeded();
                            _this.uploaded = false;
                        }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/realestate/index.ts":
/*!*************************************!*\
  !*** ./src/app/realestate/index.ts ***!
  \*************************************/
/*! exports provided: RealestateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _realestate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./realestate.component */ "./src/app/realestate/realestate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealestateComponent", function() { return _realestate_component__WEBPACK_IMPORTED_MODULE_0__["RealestateComponent"]; });




/***/ }),

/***/ "./src/app/realestate/realestate.component.css":
/*!*****************************************************!*\
  !*** ./src/app/realestate/realestate.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new-realestate .add-new-realestate-body,\n.adress-card-body{\n    padding: 0.9375rem 0.5rem;\n}\n.add-new-realestate{\n    height: 79%;\n    min-height: 171px;\n    background: transparent;\n    border: 2px dashed #22bca4;\n    cursor: pointer;\n}\n.add-new-realestate .add-new-realestate-body i{\n    font-size: 11rem;\n    color: #22bca4;\n}\n.add-new-realestate .add-new-realestate-body .plus-box{\n    height: 100px;\n    width: 100px;\n}\n.add-new-realestate .add-new-realestate-body .plus-box div\n{\n    width: 50%;\n    height: 50%;\n    display: inline-block;\n}\n.add-new-realestate .add-new-realestate-body{\n    position: relative;\n    top: 17%;\n}\n.add-new-realestate .add-new-realestate-body .plus-box .tl{\n    border-right: 5px solid #22bca4;\n    border-bottom: 5px solid #22bca4;\n}\n.add-new-realestate .add-new-realestate-body .plus-box .tr{\n    border-left: 5px solid #22bca4;\n    border-bottom: 5px solid #22bca4;\n}\n.add-new-realestate .add-new-realestate-body .plus-box .bl{\n    border-right: 5px solid #22bca4;\n    border-top: 5px solid #22bca4;\n    position: relative;\n    top: -7px;\n}\n.add-new-realestate .add-new-realestate-body .plus-box .br{\n    border-left: 5px solid #22bca4;\n    border-top: 5px solid #22bca4;\n    position: relative;\n    top: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbGVzdGF0ZS9yZWFsZXN0YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVhbGVzdGF0ZS9yZWFsZXN0YXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW5ldy1yZWFsZXN0YXRlIC5hZGQtbmV3LXJlYWxlc3RhdGUtYm9keSxcbi5hZHJlc3MtY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDAuOTM3NXJlbSAwLjVyZW07XG59XG4uYWRkLW5ldy1yZWFsZXN0YXRle1xuICAgIGhlaWdodDogNzklO1xuICAgIG1pbi1oZWlnaHQ6IDE3MXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMjJiY2E0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5IGl7XG4gICAgZm9udC1zaXplOiAxMXJlbTtcbiAgICBjb2xvcjogIzIyYmNhNDtcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5IC5wbHVzLWJveHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5IC5wbHVzLWJveCBkaXZcbntcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE3JTtcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5IC5wbHVzLWJveCAudGx7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzIyYmNhNDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzIyYmNhNDtcbn1cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5IC5wbHVzLWJveCAudHJ7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjJiY2E0O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjJiY2E0O1xufVxuLmFkZC1uZXctcmVhbGVzdGF0ZSAuYWRkLW5ldy1yZWFsZXN0YXRlLWJvZHkgLnBsdXMtYm94IC5ibHtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMjJiY2E0O1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMjJiY2E0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC03cHg7XG59XG4uYWRkLW5ldy1yZWFsZXN0YXRlIC5hZGQtbmV3LXJlYWxlc3RhdGUtYm9keSAucGx1cy1ib3ggLmJye1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzIyYmNhNDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzIyYmNhNDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/realestate/realestate.component.html":
/*!******************************************************!*\
  !*** ./src/app/realestate/realestate.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\n  <h2></h2>\n  <div class=\"btn-toolbar mb-2 mb-md-0\">\n    <div class=\"btn-group mr-2\">\n      <button class=\"btn btn-primary\" (click)=\"resetForm(); realestateservice.add = true\">Immobilie\n        hinzufügen</button>\n    </div>\n  </div>\n</div> -->\n<ngx-smart-modal #firstImmoCreatedModal identifier=\"firstImmoCreatedModal\" [closable]=\"false\" [dismissable]=\"false\"\n  [escapable]=\"false\">\n  <h2 class=\"card-title b\">Super!</h2>\n  <p>Sie haben Ihre erste Immobilie angelegt! Jetzt können Sie das erste Mal einen Service buchen!</p>\n  <button class=\"btn btn-primary\" (click)=\"navigateToServices()\">Service buchen</button>\n  <button class=\"btn btn-danger\" style=\"margin-left: 1.024em;\" (click)=\"skipTutorial()\">Tutorial überspringen</button>\n</ngx-smart-modal>\n<div *ngIf=\"!(realestateservice.add || realestateservice.edit)\" class=\"container-fluid\" name=\"show-when-not-add\">\n  <div class=\"row\">\n    <!-- <div *ngFor='let realestate of realestateservice.myRealestates | async'>\n    <div class=\"col-sm-12\">\n            <div class=\"shadow card fluid cgrid\">\n                <div class=\"card-body\">\n                <h5 class=\"card-title text-left wsn\">{{realestate.title}}</h5>\n                <p class=\"card-text text-left\">{{realestate.street}} {{realestate.streetnumber}}, {{realestate.postalcode}} {{realestate.city}}</p>\n                <button class=\"btn btn-primary\" style=\"margin-right: 0.5em;\" [disabled]=\"realestate.hasActiveOrder\" (click)=\"loadEditData(realestate.id)\">Bearbeiten</button>\n                <button class=\"btn btn-danger\" [disabled]=\"realestate.hasActiveOrder\" (click)=\"deleteRealestate(realestate.id)\">Löschen</button>\n                </div>\n            </div>\n    </div>\n    </div> -->\n    <!-- For a new real estate -->\n    <div class=\"col-6 col-md-3 col-xl-2\">\n      <!-- <div> -->\n        <div class=\"shadow card fluid cgrid add-new-realestate align-items-center\" (click)=\"resetForm(); realestateservice.add = true\">\n          <div class=\"card-body adress-card-body add-new-realestate-body text-center\">\n            <!-- <i class=\"material-icons\">add</i> -->\n            <div class=\"plus-box\">\n              <div class=\"tl\"></div>\n              <div class=\"tr\"></div>\n              <div class=\"bl\"></div>\n              <div class=\"br\"></div>\n            </div>\n          </div>\n        </div>\n      <!-- </div> -->\n    </div>\n    <div *ngFor=\"let realestate of realestateservice.myRealestates\" class=\"col-6 col-md-3 col-xl-2\">\n      <!-- <div> -->\n        <div class=\"shadow card fluid cgrid\">\n          <div class=\"card-body adress-card-body\">\n            <h5 class=\"card-title text-left wsn\">{{realestate.title}}</h5>\n            <p class=\"card-text text-left\">\n              {{realestate.street}} {{realestate.streetnumber}},\n              <br>\n              {{realestate.postalcode}} {{realestate.city}}\n            </p>\n            <button class=\"btn btn-primary\" style=\"margin-right: 0.5em;\"\n              (click)=\"loadEditData(realestate.id)\">Bearbeiten</button>\n            <button class=\"btn btn-danger\" (click)=\"deleteRealestate(realestate.id)\">Löschen</button>\n          </div>\n        </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</div>\n<div *ngIf=\"realestateservice.add\" name=\"show-when-add\">\n  <div class=\"\">\n    <form [formGroup]=\"realestateForm\" (ngSubmit)=\"submitNewHandler()\">\n      <div class=\"form-group\">\n        <div class=\"shadow input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektart/Titel <span class=\"text-danger\">*</span></span>\n          </div>\n          <input formControlName=\"title\" class=\"form-control\"\n            placeholder=\"(Bspw.) Modernes Einfamilienhaus am Stadtrand\">\n        </div>\n        <span class=\"alert alert-warning\" *ngIf=\"title.invalid && title.touched\" class=\"alert alert-warning\">\n          Dieses Feld wird benötigt!\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"shadow input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektnummer</span>\n          </div>\n          <input formControlName=\"objectNumber\" type=\"text\" class=\"form-control\" placeholder=\"(Optional)\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <div class=\"shadow input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Straße <span class=\"text-danger\">*</span></span>\n              </div>\n              <input formControlName=\"street\" type=\"text\" class=\"form-control\" placeholder=\"Straße\">\n            </div>\n            <span *ngIf=\"street.invalid && street.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine (gültige) Straße an!\n            </span>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <div class=\"shadow input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Nr. <span class=\"text-danger\">*</span></span>\n              </div>\n              <input formControlName=\"streetnumber\" type=\"text\" class=\"form-control\" placeholder=\"Hausnummer\">\n            </div>\n            <span *ngIf=\"streetnumber.invalid && streetnumber.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine (gültige) Hausnummer an!\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <div class=\"shadow input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Postleitzahl <span class=\"text-danger\">*</span></span>\n              </div>\n              <input formControlName=\"postalcode\" type=\"text\" class=\"form-control\" placeholder=\"Postleitzahl\">\n            </div>\n            <span *ngIf=\"postalcode.invalid && postalcode.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine (gültige) Postleitzahl an!\n            </span>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <div class=\"shadow input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Stadt <span class=\"text-danger\">*</span></span>\n              </div>\n              <input formControlName=\"city\" type=\"text\" class=\"form-control\" placeholder=\"Stadt\">\n            </div>\n            <span *ngIf=\"city.invalid && city.touched\" class=\"alert alert-warning\">\n              Bitte geben Sie eine (gültige) Stadt an!\n            </span>\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary \" [disabled]=\"realestateForm.invalid || realestateForm.pristine \">\n        Änderungen speichern</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"resetForm()\"\n        style=\"margin-left: 0.54em;\">Abbrechen</button>\n\n    </form>\n  </div>\n</div>\n<div name=\"show-when-edit\" *ngIf=\"realestateservice.edit\">\n  <form [formGroup]=\"realestateForm\" (ngSubmit)=\"submitUpdateHandler(mySelectedRealestate)\">\n    <div class=\"form-group\">\n      <div class=\"shadow input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektart/Titel <span class=\"text-danger\">*</span></span>\n        </div>\n        <input formControlName=\"title\" class=\"form-control\" placeholder=\"Titel der Immobilie\">\n      </div>\n      <span *ngIf=\"title.invalid && title.touched\" class=\"alert alert-warning\">\n        Dieses Feld wird benötigt!\n      </span>\n\n    </div>\n    <div class=\"form-group\">\n      <div class=\"shadow input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektnummer</span>\n        </div>\n        <input formControlName=\"objectNumber\" type=\"text\" class=\"form-control\" placeholder=\"(Optional)\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <div class=\"shadow input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Straße <span class=\"text-danger\">*</span></span>\n            </div>\n            <input formControlName=\"street\" type=\"text\" class=\"form-control\" placeholder=\"Straße\">\n          </div>\n          <span *ngIf=\"street.invalid && street.touched\" class=\"alert alert-warning\">\n            Bitte geben Sie eine (gültige) Straße an!\n          </span>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <div class=\"shadow input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Nr. <span class=\"text-danger\">*</span></span>\n            </div>\n            <input formControlName=\"streetnumber\" type=\"text\" class=\"form-control\" placeholder=\"Hausnummer\">\n          </div>\n          <span *ngIf=\"streetnumber.invalid && streetnumber.touched\" class=\"alert alert-warning\">\n            Bitte geben Sie eine (gültige) Hausnummer an!\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <div class=\"shadow input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Postleitzahl <span class=\"text-danger\">*</span></span>\n            </div>\n            <input formControlName=\"postalcode\" type=\"text\" class=\"form-control\" placeholder=\"Postleitzahl\">\n          </div>\n          <span *ngIf=\"postalcode.invalid && postalcode.touched\" class=\"alert alert-warning\">\n            Bitte geben Sie eine (gültige) Postleitzahl an!\n          </span>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <div class=\"shadow input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Stadt <span class=\"text-danger\">*</span></span>\n            </div>\n            <input formControlName=\"city\" type=\"text\" class=\"form-control\" placeholder=\"Stadt\">\n          </div>\n          <span *ngIf=\"city.invalid && city.touched\" class=\"alert alert-warning\">\n            Bitte geben Sie eine (gültige) Stadt an!\n          </span>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"realestateForm.invalid || realestateForm.pristine \">\n      Änderungen speichern</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"resetForm()\"\n      style=\"margin-left: 0.54em;\">Abbrechen</button>\n  </form>\n</div>\n<div *ngIf=\"success\" class=\"alert alert-success float-right\" style=\"position: absolute; right: 0.5em; bottom: 0.5em;\">\n  Erfolgreich gespeichert!\n</div>"

/***/ }),

/***/ "./src/app/realestate/realestate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/realestate/realestate.component.ts ***!
  \****************************************************/
/*! exports provided: RealestateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateComponent", function() { return RealestateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var RealestateComponent = /** @class */ (function () {
    /**
     * Set the real estate form validation in the constructor.
     */
    function RealestateComponent(realestateservice, fb, afs, auth, ngxSmartModalService, us, router, route) {
        this.realestateservice = realestateservice;
        this.fb = fb;
        this.afs = afs;
        this.auth = auth;
        this.ngxSmartModalService = ngxSmartModalService;
        this.us = us;
        this.router = router;
        this.route = route;
        // Form States:
        this.loading = false;
        this.success = false;
        this.realestateForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            objectNumber: [''],
            street: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([A-ZäöüÄÖÜß.-][a-zA-ZäöüÄÖÜß. -]*[a-zA-ZäöüÄÖÜß.]$)')
                ]],
            streetnumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[1-9][0-9]{0,3}[a-zA-Z]?$')
                ]],
            postalcode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}$')
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([A-ZäöüÄÖÜß -][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
        });
    }
    /**
     * Gets called by default when the class is initialised
     * store the logged in user id in the class attribute to be used later on
     */
    RealestateComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.userRef = user.uid; // UID
    };
    /**
     * Gets called by default when the component is destroyed.
     * We unsubscribe from real estate document in this method.
     */
    RealestateComponent.prototype.ngOnDestroy = function () {
        // Fixing memory leak / permission error thrownif uses leaves open edit tab and logs out
        if (this.formSub !== undefined) {
            this.formSub.unsubscribe();
        }
    };
    Object.defineProperty(RealestateComponent.prototype, "title", {
        /**
         * The below getters are called when the form is rendered. For each input element there is a get function.
         */
        get: function () {
            return this.realestateForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RealestateComponent.prototype, "objectNumber", {
        get: function () {
            return this.realestateForm.get('objectNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RealestateComponent.prototype, "street", {
        get: function () {
            return this.realestateForm.get('street');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RealestateComponent.prototype, "streetnumber", {
        get: function () {
            return this.realestateForm.get('streetnumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RealestateComponent.prototype, "postalcode", {
        get: function () {
            return this.realestateForm.get('postalcode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RealestateComponent.prototype, "city", {
        get: function () {
            return this.realestateForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the real estate add/edit form. Is called when user try to add a new real estate
     * or cancel/exits the real estate form (during add/edit)
     */
    RealestateComponent.prototype.resetForm = function () {
        this.realestateForm.reset();
        this.realestateservice.add = false;
        this.realestateservice.edit = false;
        if (this.formSub !== undefined) {
            this.formSub.unsubscribe();
        }
    };
    RealestateComponent.prototype.skipTutorial = function () {
        this.us.tutorialSkipped = true;
        this.ngxSmartModalService.close('firstImmoCreatedModal');
    };
    RealestateComponent.prototype.navigateToServices = function () {
        this.router.navigate(['/services']);
    };
    /**
     * Is triggered when user submits the form to add a new realstate. Stores the new property in the database.
     */
    RealestateComponent.prototype.submitNewHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colRef, formValue, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.realestateservice.add = false;
                        this.loading = true;
                        colRef = this.afs.collection('realestates');
                        formValue = this.realestateForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Redo this later, to prevent two calls to the database.
                        // We can add ownerId, createdOn, hasActiveOrder to the formValue object and do this in one call.
                        return [4 /*yield*/, colRef.add(formValue).then(function (docRef) {
                                var docId = docRef.id;
                                colRef.doc(docId).update({
                                    id: docId,
                                    ownerID: _this.userRef,
                                    createdOn: new Date(),
                                });
                                _this.realestateForm.reset();
                                _this.realestateForm.markAsPristine();
                            })];
                    case 2:
                        // Redo this later, to prevent two calls to the database.
                        // We can add ownerId, createdOn, hasActiveOrder to the formValue object and do this in one call.
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            console.log('Continueing Tutorial!');
                            _this.success = false;
                            // Redo this later, instead of doing the new call to the database we can use this.realestateservice.myRealestates
                            _this.realestateSub = _this.realestateservice.getMyRealestates().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('Realestates erhalten');
                                    if (this.auth.role === 'Kunde' && res.length === 1) {
                                        this.ngxSmartModalService.getModal('firstImmoCreatedModal').open();
                                        this.realestateSub.unsubscribe();
                                    }
                                    else {
                                        this.realestateSub.unsubscribe();
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        }, 1000);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Is triggered when user finishes editing a property (clicks Änderungen speichern button)
     * Updates the realstate document in the database
     */
    RealestateComponent.prototype.submitUpdateHandler = function (realestateIdParam) {
        return __awaiter(this, void 0, void 0, function () {
            var formValue, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(realestateIdParam);
                        this.loading = true;
                        formValue = this.realestateForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        formValue.lastChanged = Date();
                        return [4 /*yield*/, this.afs.doc("realestates/" + realestateIdParam).update(formValue)];
                    case 2:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.realestateForm.reset();
                            _this.realestateservice.edit = false;
                            _this.success = false;
                            _this.realestateForm.markAsPristine();
                        }, 1000);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Triggered when user edits a property (clicks Bearbeiten button).
     * Subscribes to the real state document which is edited
     */
    RealestateComponent.prototype.loadEditData = function (realestateIdParam) {
        var _this = this;
        // console.log(realestateIdParam);
        this.mySelectedRealestate = realestateIdParam;
        this.realestateservice.edit = true;
        this.formSub = this.realestateservice.getRealestate(realestateIdParam).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this.realestateForm.patchValue(data);
        }))
            .subscribe();
    };
    /**
     * Triggered when user deletes a real estate
     * Deletes the real estate document from the database
     */
    RealestateComponent.prototype.deleteRealestate = function (realestateIdParam) {
        return __awaiter(this, void 0, void 0, function () {
            var r, user, userRef;
            return __generator(this, function (_a) {
                r = confirm('Möchten Sie die Immobilie wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden!');
                if (r) {
                    user = JSON.parse(sessionStorage.getItem('user'));
                    userRef = user.uid;
                    this.realestateservice.getRealestate(realestateIdParam).delete();
                }
                return [2 /*return*/];
            });
        });
    };
    RealestateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-realestate',
            template: __webpack_require__(/*! ./realestate.component.html */ "./src/app/realestate/realestate.component.html"),
            styles: [__webpack_require__(/*! ./realestate.component.css */ "./src/app/realestate/realestate.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_realestate_service__WEBPACK_IMPORTED_MODULE_1__["RealestateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], RealestateComponent);
    return RealestateComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element, :host ::ng-deep .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #2cb3a0 !important;\n}\n\nul {\n  list-style: none;\n  padding-left: 0px;\n}\n\n.password-rules{\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LCA6aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2IzYTAgIWltcG9ydGFudDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnBhc3N3b3JkLXJ1bGVze1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Hide page after user pressed register button -->\n<ng-container *ngIf=\"!(auth.registering) || !adminFlag\">\n\n  <!-- Page-Content -->\n  <div id=\"paddingdiv\">\n\n    <!-- Aligning the contents of the page with the logo -->\n    <div style=\"max-width: 300px; width: 100%; height: auto; margin: 0 auto;\">\n\n      <!-- Logo -->\n      <img class=\"mb-4\" *ngIf=\"!adminFlag\" src=\"assets/images/Logo-IMOGENT-mit-Schrift-300x94.png\">\n\n      <!-- Registration Form -->\n      <h3 class=\"b text-center\">Registrierung</h3>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitHandler()\">\n\n        <!-- Form of address -->\n        <div class=\"form-group\">\n\n          <!-- Form of address Selection -->\n          <!-- <mat-form-field>\n            <mat-label>\n              Anrede\n            </mat-label>\n            <select matNativeControl [(ngModel)]=\"anrede\" formControlName=\"anrede\">\n              <option>Anrede auswählen</option>\n              <option>Herr</option>\n              <option>Frau</option>\n            </select>\n          </mat-form-field> -->\n\n          <mat-form-field>\n            <mat-label>Anrede</mat-label>\n            <mat-select [formControl]=\"anrede\" required>\n              <mat-option [value]=\"'Herr'\">Herr</mat-option>\n              <mat-option [value]=\"'Frau'\">Frau</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <!-- Form Validation Error -->\n          <span *ngIf=\"anrede.invalid && anrede.touched\">\n            <div class=\"alert alert-warning\">Bitte geben Sie eine Anrede an!</div>\n          </span>\n\n        </div>\n\n        <!-- First Name -->\n        <div class=\"form-group\">\n\n          <!-- First Name Input -->\n          <input formControlName=\"firstName\" class=\"form-control\" placeholder=\"Vorname *\">\n          <!-- Form Validation Error -->\n          <span *ngIf=\"firstName.invalid && firstName.touched\">\n            <br>\n            <div class=\"alert alert-warning\">Bitte geben Sie einen (gültigen) Vornamen ein!</div>\n          </span>\n\n        </div>\n\n        <!-- Last Name -->\n        <div class=\"form-group\">\n\n          <!-- Input Last Name -->\n          <input formControlName=\"lastName\" class=\"form-control\" placeholder=\"Nachname *\">\n          <!-- Validation Error -->\n          <span *ngIf=\"lastName.invalid && lastName.touched\">\n            <br>\n            <div class=\"alert alert-warning\">Bitte geben Sie einen (gültigen) Nachnamen ein!</div>\n          </span>\n\n        </div>\n\n\n        <!-- Email -->\n        <div class=\"form-group\">\n\n          <!-- E-Mail Input -->\n          <input type=\"email\" autocomplete=\"username\" formControlName=\"email\" class=\"form-control\" placeholder=\"E-Mail *\">\n          <!-- Validation Error -->\n          <span *ngIf=\"email.invalid && email.touched\">\n            <br>\n            <div class=\"alert alert-warning\">Bitte geben Sie eine gültige E-Mail ein!</div>\n          </span>\n\n        </div>\n\n        <!-- Password -->\n        <div class=\"form-group\">\n\n          <!-- Password Input -->\n          <input autocomplete=\"new-password\" type=\"password\" formControlName=\"password1\" class=\"form-control\"\n            placeholder=\"Passwort *\" #newPwd [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n            placement=\"{{popoverPlacement}}\" triggers=\"focus active\">\n          <span *ngIf=\"password1.invalid && password1.touched\">\n            <br>\n            <div class=\"alert alert-warning\">Bitte geben Sie ein gültiges Passwort ein!</div>\n          </span>\n          <ng-template #popTitle><b>Passwortanforderungen</b></ng-template>\n          <ng-template #popContent>\n            <ul>\n              <li><i *ngIf=\"!password1.errors || password1.errors.passwordError.length; else notCorrect\"\n                  class=\"fas fa-check-circle text-success\"></i> mindestens 6,\n                maximal 32 Zeichen</li>\n              <li><i *ngIf=\"!password1.errors || password1.errors.passwordError.lowerCase; else notCorrect\"\n                  class=\"fas fa-check-circle text-success\"></i> mindestens einen\n                Kleinbuchstaben</li>\n              <li><i *ngIf=\"!password1.errors || password1.errors.passwordError.upperCase; else notCorrect\"\n                  class=\"fas fa-check-circle text-success\"></i> mindestens einen\n                Großbuchstaben</li>\n              <li><i *ngIf=\"!password1.errors || password1.errors.passwordError.digit; else notCorrect\"\n                  class=\"fas fa-check-circle text-success\"></i> mindestens eine Zahl\n              </li>\n            </ul>\n          </ng-template>\n          <ng-template #notCorrect>\n            <i class=\"fas fa-times-circle text-danger\"></i>\n          </ng-template>\n        </div>\n\n        <!-- Repeat Password -->\n        <div class=\"form-group\">\n          <!-- Password Input -->\n          <input autocomplete=\"new-password\" type=\"password\" formControlName=\"password2\" class=\"form-control\"\n            placeholder=\"Passwort wiederholen *\">\n          <!-- Validation Error -->\n          <span *ngIf=\"password2.invalid && password2.touched\">\n            <br>\n            <div *ngIf=\"password2.errors.required\" class=\"alert alert-warning\">Passwörter stimmen nicht\n              überein!</div>\n            <div *ngIf=\"!password2.errors.required && password2.errors.passwordError\" class=\"alert alert-warning\">\n              {{password2.errors.passwordError.value}}</div>\n            <div\n              *ngIf=\"!password2.errors.required && !password2.errors.passwordError && password2.errors.repeatPasswordError\"\n              class=\"alert alert-warning\">{{password2.errors.repeatPasswordError.value}}</div>\n          </span>\n        </div>\n\n        <!-- Choose Role -->\n        <div class=\"form-group\">\n\n          <!-- Role Selection -->\n          <!-- <select class=\"form-control\" formControlName=\"role\">\n            <option>Nutzerrolle wählen</option>\n            <option>Kunde</option>\n            <option>Dienstleister</option>\n          </select> -->\n\n          <mat-form-field>\n            <mat-label>Nutzerrolle</mat-label>\n            <mat-select [formControl]=\"role\" required>\n              <mat-option [value]=\"'Kunde'\">Kunde</mat-option>\n              <mat-option [value]=\"'Dienstleister'\">Dienstleister</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!-- Validation Error -->\n          <span *ngIf=\"role.invalid && role.touched\">\n            <div class=\"alert alert-warning\">Bitte geben Sie eine Rolle an!</div>\n          </span>\n        </div>\n\n        <!-- Accept the terms & conditions (AGB) -->\n        <div class=\"form-group\">\n\n          <div class=\"form-check\">\n\n            <!-- Checkbox Input -->\n            <!-- <input class=\"form-check-input\" type=\"checkbox\" id=\"invalidCheck\" (click)=\"conditionsChecked();\" required> -->\n            <mat-checkbox color=\"primary\" id=\"invalidCheck\" [formControl]=\"conditions\" (click)=\"conditionsChecked();\"\n              required>\n            </mat-checkbox>\n            <div class=\"b\">\n              Ich habe die\n              <a href=\"https://www.imogent.de/agb\" class=\"my-link\" target=\"_blank\"> AGB </a>\n              gelesen und erkläre mich mit diesen einverstanden.\n            </div>\n            <div *ngIf=\"conditions.invalid && conditions.touched\">\n              <br>\n              <div class=\"alert alert-warning\">Um die Registrierung abzuschließen, bestätigen Sie bitte unsere\n                AGB!</div>\n            </div>\n            <!-- Legal Clause next to the checkbox -->\n          </div>\n        </div>\n\n        <!-- Buttons: Register or cancel -->\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Registrieren</button>\n          <a routerLink=\"/login\" *ngIf=\"!adminFlag\" class=\"btn btn-link\">Abbrechen</a>\n          <button class=\"btn btn-outline-secondary ml-2\" *ngIf=\"adminFlag\" routerLink=\"/users\">\n            Abbrechen\n          </button>\n        </div>\n\n      </form>\n\n      <!-- Footer -->\n      <section *ngIf=\"!adminFlag\">\n        <p class=\"b nomarbot\">&copy;2019 IMOGENT GmbH</p>\n        <!-- Privacy Policy & Imprint -->\n        <a href=\"https://www.imogent.de/datenschutz\" class=\"my-link\">Datenschutz</a><span> | </span><a class=\"my-link\"\n          href=\"https:www.imogent.de/impressum\">Impressum</a>\n      </section>\n\n    </div>\n  </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/form.validators */ "./src/app/shared/form.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, fb, loader, router) {
        this.auth = auth;
        this.fb = fb;
        this.loader = loader;
        this.router = router;
        this.lowerCase = false;
        this.upperCase = false;
        this.digit = false;
        this.length = false;
        this.passwordHelp = false;
        this.conditionsAccepted = false;
        this.passwordError = false;
        this.roleError = false;
        this.registerForm = this.fb.group({
            anrede: ['Anrede auswählen', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')
                ]],
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([A-ZäöüÄÖÜß-][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([A-ZäöüÄÖÜß-][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
                ]],
            password1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_5__["passwordValidator"])()
                ]],
            password2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_5__["passwordValidator"])()
                ]],
            role: ['Nutzerrolle wählen', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')
                ]],
            conditions: [false, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminFlag = this.auth.adminFlag;
        this.auth.checkAuthState().then(function (result) {
            if (result && !_this.adminFlag) {
                _this.router.navigate(['/users']);
            }
        });
        if (window.matchMedia("(min-width: 960px)").matches) {
            this.popoverPlacement = 'right';
        }
        else {
            this.popoverPlacement = 'top';
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        var newPwd = this.newPwd.nativeElement;
        this.password2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_5__["passwordValidator"])(), Object(_app_shared_form_validators__WEBPACK_IMPORTED_MODULE_5__["repeatPasswordValidator"])(newPwd)]);
    };
    Object.defineProperty(RegisterComponent.prototype, "anrede", {
        get: function () {
            return this.registerForm.get('anrede');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () {
            return this.registerForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () {
            return this.registerForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password1", {
        get: function () {
            return this.registerForm.get('password1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password2", {
        get: function () {
            return this.registerForm.get('password2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "role", {
        get: function () {
            return this.registerForm.get('role');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "conditions", {
        get: function () {
            return this.registerForm.get('conditions');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formValue = this.registerForm.value;
                        Object.keys(this.registerForm.controls).forEach(function (control) {
                            _this.registerForm.controls[control].updateValueAndValidity();
                            _this.registerForm.controls[control].markAsTouched();
                        });
                        console.log(this.registerForm);
                        if (!this.registerForm.valid || !this.conditionsAccepted) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!(formValue.password1 === formValue.password2)) return [3 /*break*/, 3];
                        this.roleError = false;
                        this.passwordError = false;
                        if (!this.adminFlag) {
                            this.auth.registering = true;
                        }
                        return [4 /*yield*/, this.auth.register(formValue).then(function (result) {
                                if (!_this.adminFlag) {
                                    _this.loader.getDataAfterAuthenticated();
                                }
                                else {
                                    _this.router.navigate(['/users']);
                                }
                            }, function (reject) {
                                console.log('Do Nothing');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        console.log(formValue.password1);
                        console.log(formValue.password2);
                        this.passwordError = true;
                        console.log('Passwort Error');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        window.alert(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.conditionsChecked = function () {
        this.conditionsAccepted = !this.conditionsAccepted;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newPwd'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "newPwd", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/retouching-service/retouching-service.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/retouching-service/retouching-service.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fileContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fileContainer [type=file] {\n  cursor: inherit;\n  display: block;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}\n\n.file-list .file-entry{\n  border-radius: 5%;\n  padding: 5px 0 5px 0;\n}\n\n.file-list .file-entry:nth-child(odd){\n  background-color: #e5f9f6;\n}\n\n.file-list .file-entry .file-name{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-list:not(.logo-file){\n  height: 123px;\n  overflow-y: auto;\n}\n\n.file-list .file-entry .file-remove{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0b3VjaGluZy1zZXJ2aWNlL3JldG91Y2hpbmctc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JldG91Y2hpbmctc2VydmljZS9yZXRvdWNoaW5nLXNlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOTk5cHg7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAwO1xufVxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeXtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xufVxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeTpudGgtY2hpbGQob2RkKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjlmNjtcbn1cbi5maWxlLWxpc3QgLmZpbGUtZW50cnkgLmZpbGUtbmFtZXtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZmlsZS1saXN0Om5vdCgubG9nby1maWxlKXtcbiAgaGVpZ2h0OiAxMjNweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeSAuZmlsZS1yZW1vdmV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/retouching-service/retouching-service.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/retouching-service/retouching-service.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Description what the customer will get -->\n<div class=\"row\">\n    <div class=\"col\">\n        <h4>Das erwartet Sie:</h4>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n            <li *ngFor=\"let item of package.package_contents\" class=\"text-truncate\"> ✓ {{item}}</li>\n        </ul>\n        <!-- Border -->\n        <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\n\n        <!-- Form for special wishes of the customer -->\n        <form [formGroup]=\"retouchingForm\">\n            <!-- Start file upload -->\n            <div class=\"form-group row\">\n                <div class=\"col-3 upload-button-container\">\n                    <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n                        Datei hochladen\n                        <input type=\"file\" formControlName=\"uploadedFiles\" multiple=\"true\" #uploadFileElem\n                            (change)=\"onChange()\" [writeFile]=\"true\"  accept=\".png,.jpeg,.pdf,.jpg\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t\t</label>\n                </div>\n                <div class=\"col-4 file-list\">\n                    <div class=\"file-entry row\" *ngFor=\"let file of uploader.queue\">\n                        <div class=\"col-8 file-name\">\n                            {{ file?.file?.name }}\n                        </div>\n                        <div class=\"col-4 text-right\">\n                            <span class=\"fas fa-trash-alt text-danger file-remove\" (click)=\"onRemoveFile(file)\"></span>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"uploadedFiles.invalid && (uploadedFiles.dirty || uploadedFiles.touched)\"\n                    class=\"alert alert-danger col-12\">\n                    <div *ngIf=\"uploadedFiles.errors.required\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                    <div *ngIf=\"uploadedFiles.errors.forbiddenFile\">\n                        Bitte laden Sie ein gültiges Dateiformat hoch\n                    </div>\n                    <div *ngIf=\"!uploadedFiles.errors.required && uploadedFiles.errors.fileRequired\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                </div>\n            </div>\n            <!-- End file upload field -->\n            <h4>Sonderwünsche:</h4>\n            <p class=\"mb-0\">Sollten Sie besondere Bearbeitungswünsche für die hochgeladenen Aufnahmen haben, erläutern\n                Sie diese bitte möglichst detailiert in dem Kommentarfeld für den Dienstleister.</p>\n            <a href=\"../../assets/images/formulierungshilfe.svg\" target=\"_blank\" rel=\"noopener\"\n                class=\"my-link\">Formulierungshilfe</a>\n\n            <!-- Decription for retouching -->\n            <div class=\"form-group mt-4\">\n                <p class=\"mb-0\">Kommentar für die Bildbearbeitung:</p>\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{package.description_placeholder}}\"\n                    formControlName=\"description\">\n            </div>\n        </form>\n    </div>\n</div>\n<!-- Show price -->\n<div class=\"row mb-2\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n        <hr />\n        <div class=\"row\">\n            <div class=\"col-8\">\n                <h4>Summe</h4>\n            </div>\n            <div class=\"col-4 text-right font-sz-20\"> € {{calculatePrice()}} </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/retouching-service/retouching-service.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/retouching-service/retouching-service.component.ts ***!
  \********************************************************************/
/*! exports provided: RetouchingServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetouchingServiceComponent", function() { return RetouchingServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/package-editor/package-editor.component */ "./src/app/modals/package-editor/package-editor.component.ts");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RetouchingServiceComponent = /** @class */ (function () {
    function RetouchingServiceComponent(fb) {
        this.fb = fb;
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for drone photos
        this.retouchingForm = this.fb.group({
            description: [''],
            uploadedFiles: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["forbiddenFileValidator"])(this.allowedFileExt, this.filesElem),
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["fileRequiredValidator"])(this.uploader.queue)
                ]]
        });
    }
    RetouchingServiceComponent.prototype.ngOnInit = function () {
        this.package.form = this.retouchingForm;
        this.package["validate"] = true;
        this.oldValidate = this.package["validate"];
    };
    Object.defineProperty(RetouchingServiceComponent.prototype, "uploadedFiles", {
        get: function () {
            return this.retouchingForm.get('uploadedFiles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RetouchingServiceComponent.prototype, "description", {
        get: function () {
            return this.retouchingForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    RetouchingServiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.filesElem = this.uploadFileElem.nativeElement;
        this.retouchingForm = this.fb.group({
            description: [''],
            uploadedFiles: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["forbiddenFileValidator"])(this.allowedFileExt, this.filesElem),
                    Object(_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["fileRequiredValidator"])(this.uploader.queue)
                ]]
        });
        this.retouchingForm.valueChanges.subscribe(function () {
            var formValues = {};
            var fileList = [];
            // handle file uploads
            Object.keys(_this.retouchingForm.controls).forEach(function (control) {
                if (control === 'uploadedFiles') {
                    fileList = [];
                    _this.uploader.queue.forEach(function (entry) { return fileList.push(entry.file.rawFile); });
                    formValues[control] = fileList;
                }
            });
            formValues['description'] = _this.retouchingForm.value.description;
            formValues['packageNum'] = _this.package['package_key'];
            _this.onFormChange.emit(formValues);
        });
    };
    RetouchingServiceComponent.prototype.onChange = function () {
        this.package.form = this.retouchingForm;
        var fileListLength = this.uploader.queue.length;
        var lastFile = this.uploader.queue[fileListLength - 1];
        for (var i = 0; i < fileListLength - 1; i++) {
            if (lastFile.file.name === this.uploader.queue[i].file.name && lastFile.file.size === this.uploader.queue[i].file.size) {
                lastFile.remove();
            }
        }
        // fix for Internet Explorer. Manually set the file value
        if (this.uploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.retouchingForm.get('uploadedFiles').value)) {
            this.retouchingForm.controls['uploadedFiles'].setValue(this.uploader.queue[0].file.name);
        }
        this.retouchingForm.controls.uploadedFiles.updateValueAndValidity();
    };
    RetouchingServiceComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.package["validate"] != this.oldValidate) {
            Object.keys(this.retouchingForm.controls).forEach(function (control) {
                _this.retouchingForm.controls[control].markAsTouched();
            });
        }
    };
    RetouchingServiceComponent.prototype.onRemoveFile = function (file, type) {
        file.remove();
        this.retouchingForm.controls.uploadedFiles.updateValueAndValidity();
    };
    RetouchingServiceComponent.prototype.calculatePrice = function () {
        var unformated_number = accounting__WEBPACK_IMPORTED_MODULE_5__["unformat"](this.package.price, ',');
        var total_price = unformated_number * this.uploader.queue.length;
        this.package['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](total_price, '', 2, '.', ',');
        // return formatted price
        return this.package['total_price'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("uploadFileElem"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RetouchingServiceComponent.prototype, "uploadFileElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RetouchingServiceComponent.prototype, "onFormChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("package"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_2__["Package"])
    ], RetouchingServiceComponent.prototype, "package", void 0);
    RetouchingServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retouching-service',
            template: __webpack_require__(/*! ./retouching-service.component.html */ "./src/app/retouching-service/retouching-service.component.html"),
            styles: [__webpack_require__(/*! ./retouching-service.component.css */ "./src/app/retouching-service/retouching-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RetouchingServiceComponent);
    return RetouchingServiceComponent;
}());



/***/ }),

/***/ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/retouching-suborder-overview/retouching-suborder-overview.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldG91Y2hpbmctc3Vib3JkZXItb3ZlcnZpZXcvcmV0b3VjaGluZy1zdWJvcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/retouching-suborder-overview/retouching-suborder-overview.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <p><strong>Kommentar für die Nachbearbeitung: </strong> <span *ngIf=\"os.currentSuborder.description === ''\">Nicht\n        angegeben</span>{{ os.currentSuborder.description }}</p>\n\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-6\">\n    <h5 class=\"mb-2\"> Original</h5>\n  </div>\n</div>\n<!-- File upload component to show uploaded photos without retouching-->\n<app-file-upload *ngIf=\"os.currentSuborder.status !== 'pending'\"\n  [parentId]=\" os.currentSuborder.pendingOnSuborderId ? os.currentSuborder.pendingOnSuborderId : os.currentSuborder.id \"\n  [allowedFileExt]=\"allowedFileExt\" [parentType]=\"'suborders'\" [readOnly]=\"true\"\n  [subCollectionName]=\"os.currentSuborder.pendingOnSuborderId ? 'dronePhotos' : 'originalPhotos'\" [parent]=\"this\">\n</app-file-upload>\n<hr />\n<div class=\"row\">\n  <div class=\"col-6\">\n    <h5 class=\"mb-2\">Retouched</h5>\n  </div>\n</div>\n<!-- File upload component to upload/show photos with retouching-->\n<app-file-upload *ngIf=\"os.currentSuborder.status !== 'pending'\" [parentId]=\"os.currentSuborder.id\"\n  [allowedFileExt]=\"allowedFileExt\" [parentType]=\"'suborders'\" [subFolderName]=\"'retouchedPhotos/'\"\n  (setSubmitDisabled)=\"setSubmitDisabledHandler($event)\" [subCollectionName]=\"'retouchedPhotos'\" [parent]=\"this\">\n</app-file-upload>"

/***/ }),

/***/ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/retouching-suborder-overview/retouching-suborder-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RetouchingSuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetouchingSuborderOverviewComponent", function() { return RetouchingSuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetouchingSuborderOverviewComponent = /** @class */ (function () {
    function RetouchingSuborderOverviewComponent(os, auth) {
        this.os = os;
        this.auth = auth;
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for retouching photos
    }
    RetouchingSuborderOverviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * controls disabling of attachment deletion
     */
    RetouchingSuborderOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' || this.os.currentSuborder.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    /**
     * controls disabling of attachment upload
     */
    RetouchingSuborderOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' || this.os.currentSuborder.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    RetouchingSuborderOverviewComponent.prototype.setSubmitDisabledHandler = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RetouchingSuborderOverviewComponent.prototype, "setSubmitDisabled", void 0);
    RetouchingSuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retouching-suborder-overview',
            template: __webpack_require__(/*! ./retouching-suborder-overview.component.html */ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./retouching-suborder-overview.component.css */ "./src/app/retouching-suborder-overview/retouching-suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RetouchingSuborderOverviewComponent);
    return RetouchingSuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.component */ "./src/app/services/services.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return _services_component__WEBPACK_IMPORTED_MODULE_0__["ServicesComponent"]; });




/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #50535b;\n}\n\n.container-fluid.shadow.rounded {\n  padding-top: 0.5%;\n}\n\nh6 {\n  color: #50535b;\n}\n\n.form-check.package {\n  margin-top: 10%;\n}\n\n.package .card-header h5 {\n  color: #fff !important;\n}\n\n.default-header {\n  border-radius: 5px;\n  background: rgba(44, 179, 160, 0.5);\n  padding: 7px 7px;\n}\n\n.package {\n  width: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\n.fixed_div {\n  position: fixed;\n  top: 0;\n  background-color: #616b7a;\n  left: 260px;\n  right: 0px;\n  margin-left: 0px;\n  padding-left: 30px;\n  padding-right: 30px;\n  z-index: 5;\n}\n\n.content {\n  z-index: 1;\n  margin-top: 80px;\n  margin-right: 30px;\n}\n\n/* .mat-pseudo-checkbox {\n    /deep/ .mat-accent .mat-pseudo-checkbox-checked,\n    .mat-accent .mat-pseudo-checkbox-indeterminate,\n    .mat-pseudo-checkbox-checked,\n    .mat-pseudo-checkbox-indeterminate {\n         background: #2cb3a0;\n    }\n} */\n\n/* .mat-pseudo-checkbox {\n    background: #2cb3a0 !important;\n} */\n\n::ng-deep .mat-primary .mat-pseudo-checkbox-checked {\n  background: #2cb3a0;\n}\n\n::ng-deep .mat-pseudo-checkbox .mat-pseudo-checkbox-checked {\n  background: #2cb3a0;\n}\n\n::ng-deep .mat-accent .mat-pseudo-checkbox-checked, .mat-accent .mat-pseudo-checkbox-indeterminate, .mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate {\n  background: #2cb3a0;\n}\n\n/* /deep/ .mat-primary .mat-pseudo-checkbox-checked {\n  background: #2cb3a0;\n}\n\n/deep/ .mat-pseudo-checkbox .mat-pseudo-checkbox-checked {\n  background: #2cb3a0;\n}\n\n/deep/ .mat-accent .mat-pseudo-checkbox-checked, .mat-accent .mat-pseudo-checkbox-indeterminate, .mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate {\n  background: #2cb3a0;\n} */\n\n.mat-pseudo-checkbox .mat-pseudo-checkbox-checked {\n  background: #2cb3a0;\n}\n\n.mat-pseudo-checkbox.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate {\n  background: #2cb3a0;\n  border-color: black;\n}\n\n/* .packages-container{\n  max-height: 110vh;\n  overflow-y: auto;\n} */\n\n.cart-container .cart-items {\n  max-width: 95%;\n}\n\n.cart-container .cart-item-thumbnail {\n  height: 40px;\n  width: 40px;\n}\n\n.cart-container .remove-item-icon {\n  cursor: pointer;\n}\n\n.new-property-switch {\n  margin-bottom: 0;\n}\n\n:host ::ng-deep .new-property-switch label {\n  color: #3C4858;\n}\n\n:host ::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb, :host ::ng-deep .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #2cb3a0;\n}\n\n:host ::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(44, 179, 160, 0.54);\n}\n\n.cart-container .selected-service {\n  background-color: #2cb3a0;\n  color: #fff !important;\n}\n\n.page-title {\n  font-size: 1.55rem;\n}\n\n:host ::ng-deep .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element, :host ::ng-deep .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #2cb3a0 !important;\n}\n\n.card-wizard .tab-content {\n  padding: 0;\n}\n\n.package-card-body .package-accordian {\n  width: 100%;\n}\n\n.add-new-realestate .add-new-realestate-body, .realestate-card-body {\n  padding: 0.9375rem 0.5rem;\n}\n\n.add-new-realestate {\n  height: 73%;\n  min-height: 171px;\n  background: transparent;\n  border: 2px dashed #22bca4;\n  cursor: pointer;\n}\n\n.add-new-realestate .add-new-realestate-body i {\n  font-size: 8rem;\n  color: #22bca4;\n}\n\n.filter-padding {\n  padding-right: 20px !important;\n}\n\n.hd-photos-header{\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIGNvbG9yOiAjNTA1MzViO1xufVxuXG4uY29udGFpbmVyLWZsdWlkLnNoYWRvdy5yb3VuZGVkIHtcbiAgcGFkZGluZy10b3A6IDAuNSU7XG59XG5cbmg2IHtcbiAgY29sb3I6ICM1MDUzNWI7XG59XG5cbi5mb3JtLWNoZWNrLnBhY2thZ2Uge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5wYWNrYWdlIC5jYXJkLWhlYWRlciBoNSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kZWZhdWx0LWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg0NCwgMTc5LCAxNjAsIDAuNSk7XG4gIHBhZGRpbmc6IDdweCA3cHg7XG59XG5cbi5wYWNrYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5maXhlZF9kaXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNmI3YTtcbiAgbGVmdDogMjYwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmNvbnRlbnQge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi8qIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICAvZGVlcC8gLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAgIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gICAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAgICBiYWNrZ3JvdW5kOiAjMmNiM2EwO1xuICAgIH1cbn0gKi9cblxuLyogLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICMyY2IzYTAgIWltcG9ydGFudDtcbn0gKi9cblxuOjpuZy1kZWVwIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzJjYjNhMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHNldWRvLWNoZWNrYm94IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMmNiM2EwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMyY2IzYTA7XG59XG5cbi8qIC9kZWVwLyAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICMyY2IzYTA7XG59XG5cbi9kZWVwLyAubWF0LXBzZXVkby1jaGVja2JveCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzJjYjNhMDtcbn1cblxuL2RlZXAvIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjMmNiM2EwO1xufSAqL1xuXG4ubWF0LXBzZXVkby1jaGVja2JveCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzJjYjNhMDtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjMmNiM2EwO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4vKiAucGFja2FnZXMtY29udGFpbmVye1xuICBtYXgtaGVpZ2h0OiAxMTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0gKi9cblxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIHtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtLXRodW1ibmFpbCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciAucmVtb3ZlLWl0ZW0taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1wcm9wZXJ0eS1zd2l0Y2gge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5ldy1wcm9wZXJ0eS1zd2l0Y2ggbGFiZWwge1xuICBjb2xvcjogIzNDNDg1ODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLCA6aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2IzYTA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCAxNzksIDE2MCwgMC41NCk7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc2VydmljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2IzYTA7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjU1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCwgOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNiM2EwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXdpemFyZCAudGFiLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucGFja2FnZS1jYXJkLWJvZHkgLnBhY2thZ2UtYWNjb3JkaWFuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGQtbmV3LXJlYWxlc3RhdGUgLmFkZC1uZXctcmVhbGVzdGF0ZS1ib2R5LCAucmVhbGVzdGF0ZS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwLjkzNzVyZW0gMC41cmVtO1xufVxuXG4uYWRkLW5ldy1yZWFsZXN0YXRlIHtcbiAgaGVpZ2h0OiA3MyU7XG4gIG1pbi1oZWlnaHQ6IDE3MXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMyMmJjYTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1uZXctcmVhbGVzdGF0ZSAuYWRkLW5ldy1yZWFsZXN0YXRlLWJvZHkgaSB7XG4gIGZvbnQtc2l6ZTogOHJlbTtcbiAgY29sb3I6ICMyMmJjYTQ7XG59XG5cbi5maWx0ZXItcGFkZGluZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmhkLXBob3Rvcy1oZWFkZXJ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 border-bottom bbcg\">\r\n    <h3>Services</h3>\r\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    </div>\r\n  </div> -->\r\n  <div class=\"\">\r\n    <!-- Page-Content -->\r\n    <ng-container *ngIf=\"auth.myUserObservable as user; else loading\">\r\n\r\n      <!-- Following are multiple \"pages\" (steps) within this page (component) -->\r\n      <!-- First Page in the ordering process -->\r\n      <div *ngIf=\"state === '1'\">\r\n\r\n        <!-- Top Row -->\r\n        <!-- <div class=\"row\"> -->\r\n\r\n        <!-- Big column (left) -->\r\n        <!-- <div class=\"col\">\r\n            <div class=\"shadow card cgrid\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                <a class=\"my-link\" (click)=\"active = !active\" [attr.aria-expanded]=\"!isCollapsed\"\r\n                  aria-controls=\"collapse1\">\r\n                  <h5 class=\"card-title text-left wsn\">Verfügbare Dienste</h5>\r\n                </a>\r\n              </div>\r\n              <div id=\"collapse1\" [collapse]=\"active\">\r\n                <div class=\"card-body\">\r\n                  <h6 class=\"card-title text-left wsn\">Produktübersicht</h6>\r\n                  <p class=\"card-text\">\r\n                    Wählen Sie über die Kacheln die gewünschten Services und Produkte aus. Im anschließenden Schritt\r\n                    können Sie Produktdetails, wie Design, Menge und Besonderheiten definieren.\r\n                  </p>\r\n                  <p class=\"card-text mb-0\">Wenn Sie eine genauere Beratung wünschen können Sie oben\r\n                    Kontakt mit uns aufnehmen. Wir freuen uns auf Ihre Anfrage.</p>\r\n                  <br />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n        <!-- Small informational column (right) -->\r\n        <!-- <div class=\"col-4 d-none d-lg-block\"> -->\r\n\r\n        <!-- Showcase Card, links to a showcase on the wordpress page -->\r\n        <!-- <div class=\"shadow card fluid cgrid\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title text-left wsn\">Zum Showcase</h5>\r\n                <p class=\"card-text text-left\">Lassen Sie sich von unseren virtuellen Rundgängen und\r\n                  Drohnenaufnahmen von verschiedenen Immobilien, öffentlichen Gebäuden und Working\r\n                  Spaces begeistern und überzeugen Sie Ihre Kunden!\r\n                </p>\r\n                <a href=\"https://www.imogent.de/show-case/\" class=\"btn btn-primary\">Jetzt\r\n                  ansehen</a>\r\n              </div>\r\n            </div> -->\r\n        <!-- </div> -->\r\n\r\n        <!-- </div> -->\r\n        <!-- Show available packages-->\r\n        <!-- Heading for the pacakges -->\r\n        <!-- <h3\r\n          *ngIf=\"dronemediacheck.checked || floorplanscheck.checked || retouchingcheck.checked || vstagingcheck.checked\">\r\n          Paket auswählen:\r\n        </h3> -->\r\n        <!-- <br> -->\r\n        <!-- Drone-Media Packages - Shown if checkbox is checked -->\r\n        <!-- <app-package-list *ngIf=\"dronemediacheck.checked\" [packages]=\"packages.dronemedia\" [servicesComponent]=\"this\"\r\n          serviceLabel=\"{{gs.translateAppListStrings('order_type_list', 'dronemedia')}}\">\r\n        </app-package-list> -->\r\n        <!-- Floorplan Packages - Shown if checkbox is checked-->\r\n        <!-- <app-package-list *ngIf=\"floorplanscheck.checked\" [packages]=\"packages.floorplans\" [servicesComponent]=\"this\"\r\n          serviceLabel=\"{{gs.translateAppListStrings('order_type_list', 'floorplan')}}\">\r\n        </app-package-list> -->\r\n        <!-- Retouching Packages - Shown if checkbox is checked-->\r\n        <!-- <app-package-list *ngIf=\"retouchingcheck.checked\" [packages]=\"packages.retouching\" [servicesComponent]=\"this\"\r\n          serviceLabel=\"{{gs.translateAppListStrings('order_type_list', 'retouching')}}\">\r\n        </app-package-list> -->\r\n        <!-- Retouching Packages - Shown if checkbox is checked-->\r\n        <!-- <app-package-list *ngIf=\"vstagingcheck.checked\" [packages]=\"packages.vstaging\" [servicesComponent]=\"this\"\r\n          serviceLabel=\"{{gs.translateAppListStrings('order_type_list', 'vstaging')}}\">\r\n        </app-package-list> -->\r\n        <div class=\"row\">\r\n          <div class=\"col-12 d-block d-md-none align-self-start\">\r\n            <div class=\"card cgrid margin\">\r\n              <div class=\"card-header default-header\">\r\n                <a class=\"my-link clickable\" (click)=\"active1 = !active1\" [attr.aria-expanded]=\"active1\"\r\n                  aria-controls=\"collapse1\">\r\n                  <h5 class=\"card-title text-white text-left wsn row\">\r\n                    <span class=\"col-8\">\r\n                      <span class=\"fas text-left mr-2\" [ngClass]=\"{\r\n                        'fa-chevron-right': !active1,\r\n                        'fa-chevron-down': active1\r\n                      }\">\r\n                      </span> Produktübersicht\r\n                    </span>\r\n                  </h5>\r\n                </a>\r\n              </div>\r\n              <div [collapse]=\"!active1\">\r\n                <div class=\"card-body\">\r\n                  <p class=\"card-text mt-3\">\r\n                    Wählen Sie über die Kacheln die gewünschten Services und Produkte aus. Im anschließenden Schritt\r\n                    können Sie Produktdetails, wie Design, Menge und Besonderheiten definieren.\r\n                  </p>\r\n                  <p class=\"card-text mb-0\">Wenn Sie eine genauere Beratung wünschen können Sie oben\r\n                    Kontakt mit uns aufnehmen. Wir freuen uns auf Ihre Anfrage.</p>\r\n                  <br />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"cards\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title wsn\">Produktübersicht</h4>\r\n                  <p class=\"card-text mt-3\">\r\n                    Wählen Sie über die Kacheln die gewünschten Services und Produkte aus. Im anschließenden Schritt\r\n                    können Sie Produktdetails, wie Design, Menge und Besonderheiten definieren.\r\n                  </p>\r\n                  <p class=\"card-text mb-0\">Wenn Sie eine genauere Beratung wünschen können Sie oben\r\n                    Kontakt mit uns aufnehmen. Wir freuen uns auf Ihre Anfrage.</p>\r\n                  <br />\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"col packages-container align-self-start\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 cards mb-4\">\r\n                <div class=\"card new-property-switch\">\r\n                  <div class=\"card-body\">\r\n                    <mat-slide-toggle class=\"filter-padding\" [color]=\"green\" (change)=\"filterNewProperties($event)\">\r\n                      Neubau</mat-slide-toggle>\r\n                    <!-- <mat-slide-toggle [color]=\"green\" (change)=\"filterPhysicalProducts($event)\">physische Produkte\r\n                    </mat-slide-toggle> -->\r\n                    <button class=\"btn btn-primary\" (click)=\"sendConfirmationEmail('fSCTUG6M3vMGCAqOPuhu')\">\r\n                      Click\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngFor=\"let package of availablePackages\" class=\"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <app-package [package]=\"package\" [servicesComponent]=\"this\" [selectedServices]=\"selectedServices\">\r\n                </app-package>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 d-none d-md-block row align-self-start\">\r\n            <div class=\"col cart-container\">\r\n              <div class=\"cards\">\r\n                <div class=\"card card-pricing card-raised\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">\r\n                      Warenkorb\r\n                    </h4>\r\n                    <ul class=\"list-unstyled mt-3 mb-4 cart-items\"\r\n                      *ngIf=\"cartItems && cartItems.length > 0; else noItems\">\r\n                      <li class=\"text-truncate row align-items-center text-left\">\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <strong>Artikel</strong>\r\n                        </div>\r\n                        <div class=\"d-none d-lg-block col-8\">\r\n                          <strong>Beschreibung</strong>\r\n                        </div>\r\n                      </li>\r\n                      <li *ngFor=\"let item of cartItems; let index = index\"\r\n                        class=\"text-truncate row align-items-center text-left\">\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <img class=\"cart-item-thumbnail\" src=\"../../assets/images/{{item.package_images[0]}}\"\r\n                            alt=\"Card image cap\">\r\n                        </div>\r\n                        <div class=\"d-none d-lg-block col-8\">\r\n                          {{item.title}}\r\n                        </div>\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <i class=\"material-icons text-danger remove-item-icon\"\r\n                            (click)=\"removeItemFromCart(item, index)\">delete</i>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                    <ng-template #noItems>\r\n                      <p class=\"pt-3\">\r\n                        Ihr Warenkorb ist leer.\r\n                      </p>\r\n                    </ng-template>\r\n                    <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-primary\" (click)=\"onCheckout()\">\r\n                      Weiter\r\n                    </button>\r\n                    <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-danger\"\r\n                      (click)=\"removeAllItemsFromCart()\">\r\n                      Warenkorb leeren\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div class=\"cards\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title wsn\">Produktübersicht</h4>\r\n                    <p class=\"card-text mt-3\">\r\n                      Wählen Sie über die Kacheln die gewünschten Services und Produkte aus. Im anschließenden Schritt\r\n                      können Sie Produktdetails, wie Design, Menge und Besonderheiten definieren.\r\n                    </p>\r\n                    <p class=\"card-text mb-0\">Wenn Sie eine genauere Beratung wünschen können Sie oben\r\n                      Kontakt mit uns aufnehmen. Wir freuen uns auf Ihre Anfrage.</p>\r\n                    <br />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-block d-md-none\">\r\n          <app-fixed-cart [cartItems]=\"cartItems\" [parent]=\"this\"></app-fixed-cart>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div *ngIf=\"state === '2'\">\r\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\r\n          <h2></h2>\r\n          <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n            <div class=\"btn-group mr-2\">\r\n              <button class=\"btn btn-sm btn-primary\" (click)=\"state = '1'; selectedPackages = []\">\r\n                Zuruck\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col cards\">\r\n            <div class=\"card card-plain\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">\r\n                  {{chosenPackages[0].service_title}}\r\n                </h4>\r\n                <div class=\"row packages-container align-self-start\">\r\n                  <div *ngFor=\"let package of chosenPackages\" class=\"col-12 col-sm-6 col-lg-4\">\r\n                    <app-package [package]=\"package\" [servicesComponent]=\"this\" [selectedPackages]=\"selectedPackages\">\r\n                    </app-package>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 row align-self-start\">\r\n            <div class=\"col cart-container\">\r\n              <div class=\"cards\">\r\n                <div class=\"card card-pricing card-raised\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">\r\n                      Warenkorb\r\n                    </h4>\r\n                    <ul class=\"list-unstyled mt-3 mb-4 cart-items\"\r\n                      *ngIf=\"cartItems && cartItems.length > 0; else noItems\">\r\n                      <li class=\"text-truncate row align-items-center text-left\">\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <strong>Artikel</strong>\r\n                        </div>\r\n                        <div class=\"d-none d-lg-block col-8\">\r\n                          <strong>Beschreibung</strong>\r\n                        </div>\r\n                      </li>\r\n                      <li *ngFor=\"let item of cartItems; let index = index\" (click)=\"onServiceChange(item)\"\r\n                        class=\"text-truncate row align-items-center text-left clickable\" [ngClass]=\"{\r\n                          'selected-service': selectedService === item.service_key\r\n                        }\">\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <img class=\"cart-item-thumbnail\" src=\"../../assets/images/{{item.package_images[0]}}\"\r\n                            alt=\"Card image cap\">\r\n                        </div>\r\n                        <div class=\"d-none d-lg-block col-8\">\r\n                          {{item.title}}\r\n                        </div>\r\n                        <div class=\"col-6 col-lg-2\">\r\n                          <i class=\"material-icons text-danger remove-item-icon\"\r\n                            (click)=\"removeItemFromCart(item, index)\">delete</i>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                    <ng-template #noItems>\r\n                      <p class=\"pt-3\">\r\n                        Ihr Warenkorb ist leer.\r\n                      </p>\r\n                    </ng-template>\r\n                    <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-sm btn-primary\"\r\n                      (click)=\"onCheckout()\">\r\n                      Weiter\r\n                    </button>\r\n                    <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-sm btn-danger\"\r\n                      (click)=\"removeAllItemsFromCart()\">\r\n                      Alles löschen\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n\r\n      <!-- 2nd Page -->\r\n      <div *ngIf=\"state === '2'\">\r\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\r\n          <span class=\"page-title\">Immobilie auswählen</span>\r\n          <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n            <div class=\"btn-group mr-2\">\r\n              <button class=\"btn btn-primary\" (click)=\"goBack('1')\">\r\n                Zurück\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!realestateservice.add\">\r\n          <div class=\"row\">\r\n            <!-- Displaying all realestates, excluding ones with related open orders -->\r\n            <ng-container *ngIf=\"realestateservice.myRealestates as realestates; else loading\">\r\n              <!-- The first tile is to add a new real estate -->\r\n              <div class=\"col-6 col-md-3 col-xl-2\" *ngIf=\"!realestateservice.add\"\r\n                (click)=\"navigateToRealestateCreation()\">\r\n                <div class=\"shadow card fluid cgrid add-new-realestate\">\r\n                  <div class=\"card-body add-new-realestate-body text-center\">\r\n                    <i class=\"material-icons\">add</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Display each loaded realestate as a small card -->\r\n              <div *ngFor='let realestate of realestates' class=\"col-6 col-md-3 col-xl-2\">\r\n                <div class=\"shadow card fluid cgrid\">\r\n                  <div class=\"card-body realestate-card-body\">\r\n                    <!-- Realestate Title -->\r\n                    <h5 class=\"card-title text-left wsn\">{{realestate.title}}</h5>\r\n                    <!-- Realestate Address -->\r\n                    <p class=\"card-text text-left\">\r\n                      {{realestate.street}}\r\n                      {{realestate.streetnumber}},\r\n                      <br>\r\n                      {{realestate.postalcode}}\r\n                      {{realestate.city}}\r\n                    </p>\r\n                    <!-- Select Button -->\r\n                    <button class=\"btn btn-primary\" style=\"margin-right: 0.5em;\"\r\n                      (click)=\"realEstateSelectHandler(realestate.id, realestate.postalcode, realestate.city, realestate.title)\">Auswählen</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <!-- Button to get to the realestate page and immediately create a new realestate -->\r\n          <button class=\"btn btn-primary mt-3 ml-2 d-none\" style=\"margin-left: -15px;\"\r\n            (click)=\"navigateToRealestateCreation()\">Neue\r\n            Immobilie anlegen</button>\r\n        </div>\r\n        <br>\r\n        <div *ngIf=\"realestateservice.add\" class=\"container-fluid\">\r\n          <div class=\"row\" style=\"margin-left: -30px;\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"shadow card fluid cgrid\">\r\n                <div class=\"card-body\">\r\n                  <!-- Realestate Title -->\r\n                  <h3 class=\"card-title text-left wsn mb-3\">Neue Immobilie</h3>\r\n                  <!-- Profile Form with prefilled data if available -->\r\n                  <form [formGroup]=\"realestateForm\" (ngSubmit)=\"createNewRealestate()\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"shadow input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektart/Titel <span\r\n                              class=\"text-danger\">*</span></span>\r\n                        </div>\r\n                        <input formControlName=\"title\" class=\"form-control\"\r\n                          placeholder=\"z.B.: Modernes Einfamilienhaus am Stadtrand\">\r\n                      </div>\r\n                      <div *ngIf=\"re_title.invalid && re_title.touched\" class=\"alert alert-warning\">\r\n                        Bitte geben Sie einen Objektnamen an!\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"shadow input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Objektnummer</span>\r\n                        </div>\r\n                        <input formControlName=\"objectNumber\" type=\"text\" class=\"form-control\" placeholder=\"(Optional)\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"shadow input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Straße <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"street\" type=\"text\" class=\"form-control\" placeholder=\"Straße\">\r\n                          </div>\r\n                          <div *ngIf=\"re_street.invalid && re_street.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Straße an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"shadow input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Nr. <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"streetnumber\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"Hausnummer\">\r\n                          </div>\r\n                          <div *ngIf=\"re_streetnumber.invalid && re_streetnumber.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Hausnummer an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"shadow input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Postleitzahl <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"postalcode\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"Postleitzahl\">\r\n                          </div>\r\n                          <div *ngIf=\"re_postalcode.invalid && re_postalcode.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Postleitzahl an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"shadow input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Stadt <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"city\" type=\"text\" class=\"form-control\" placeholder=\"Stadt\">\r\n                          </div>\r\n                          <div *ngIf=\"re_city.invalid && re_city.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Stadt an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary \" [disabled]=\"realestateForm.invalid || realestateForm.pristine\">\r\n                      Änderungen speichern</button>\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"navigateToRealestateCreation()\">\r\n                      Abbrechen\r\n                    </button>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- 3rd Page -->\r\n      <div [hidden]=\"state !== '3'\">\r\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\r\n          <span class=\"page-title\">Pakete auswählen</span>\r\n          <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n            <div class=\"btn-group mr-2\">\r\n              <button class=\"btn btn-primary\" (click)=\"goBack('2')\">\r\n                Zurück\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Card that shows a conclusional overview of the order -->\r\n        <div class=\"row\" *ngIf=\"!reset\">\r\n          <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <!--      Wizard container        -->\r\n            <div class=\"wizard-container\">\r\n              <div class=\"card card-wizard\" data-color=\"purple\" id=\"wizardProfile\">\r\n                <!-- Wizard Header -->\r\n                <div class=\"card-header text-center\">\r\n                  <!-- <h3 class=\"card-title\">\r\n                    Package Wizard\r\n                  </h3>\r\n                  <h5 class=\"card-description\">Please complete your order details.</h5> -->\r\n                </div>\r\n                <!-- Wizard Navigation -->\r\n                <div class=\"wizard-navigation\">\r\n                  <ul class=\"nav nav-pills\">\r\n                    <li *ngFor=\"let item of cartItems; let index = index\" [attr.data-index]=\"index\" class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#{{item.service_key}}\" data-toggle=\"tab\" role=\"tab\">\r\n                        {{item.title}}\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div> <!-- End Wizard Navigation !-->\r\n                <div class=\"card-body package-card-body\">\r\n                  <div class=\"tab-content\">\r\n                    <!-- First tab of the wizard -->\r\n                    <div class=\"tab-pane active\" id=\"dronemedia\">\r\n                      <!-- <h5 class=\"info-text\"> Let's start with the basic information (with validation) </h5> -->\r\n                      <!-- Order input page-->\r\n                      <!-- <div class=\"row\"> -->\r\n                      <!-- Show available package for the service -->\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.dronemedia\" class=\"col-12 col-sm-6 col-lg-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div> <!-- End available packages !-->\r\n                      <!-- dronemedia -->\r\n                      <div class=\"row\" *ngIf=\"arrayContainsValue(selectedPackages, '2')\">\r\n                        <!-- <div class=\"shadow card cgrid package\">\r\n                          <div class=\"card-header bg-secondary\">\r\n                            <a class=\"my-link clickable\" (click)=\"droneMediaExpandedView = !droneMediaExpandedView\"\r\n                              [attr.aria-expanded]=\"droneMediaExpandedView\">\r\n                              <h5 class=\"card-title text-white text-left wsn row\">\r\n                                <span class=\"col-12\">\r\n                                  <span class=\"fas text-left mr-1\" [ngClass]=\"{\r\n                                      'fa-chevron-right': droneMediaExpandedView,\r\n                                      'fa-chevron-down': !droneMediaExpandedView\r\n                                    }\">\r\n                                  </span> {{\"Drohnenaufnahmen - \" + selectedDroneMedia.name}}\r\n                                </span>\r\n                              </h5>\r\n                            </a>\r\n                          </div>\r\n                          <div [collapse]=\"droneMediaExpandedView\">\r\n                            <div class=\"card-body\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                  <h4>Das erwartet Sie:</h4>\r\n                                  <p class=\"mb-0\">Wir erstellen 7 hochwertige Drohnenfotos von Ihrem\r\n                                    gewählten Objekt aus der Vogelperspektive. Die Fotos beinhalten\r\n                                    standardmäßig 5 Seitenansichten, sowie zwei Draufsichten aus\r\n                                    unterschiedlichen Höhen.\r\n                                  </p>\r\n                                  <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\r\n                                    <form [formGroup]=\"droneMediaForm\">\r\n                                    <h4>Sonderwünsche:</h4>\r\n                                    <p class=\"mb-0\">Sollten Sie besondere Wünsche für die einzelnen\r\n                                      Perspektiven und Aufnahmehöhen der Fotos haben, dann können Sie\r\n                                      dies unten im Kommentarfeld für den Drohnenpiloten äußern.</p>\r\n                                    <a href=\"../../assets/images/formulierungshilfe.svg\" target=\"_blank\" rel=\"noopener\"\r\n                                      class=\"my-link\">Formulierungshilfe</a>\r\n\r\n                                    <div class=\"form-group mt-4\">\r\n                                      <p class=\"mb-0\">Kommentar für den Piloten:</p>\r\n                                      <input type=\"text\" class=\"form-control\"\r\n                                        placeholder=\"zB.: Bitte die Aussicht vom Balkon fotografieren!\"\r\n                                        formControlName=\"wishPilot\" #optionalWishPilot>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                      <p class=\"mb-0\">Kommentar für die Nachbearbeitung der\r\n                                        Luftaufnahmen:</p>\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"(Optional)\"\r\n                                        formControlName=\"description\" #description>\r\n                                    </div>\r\n                                  </form>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row mb-2\">\r\n                                <div class=\"col-4\"></div>\r\n                                <div class=\"col-8\">\r\n                                  <hr />\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-8\">\r\n                                      <h4>Summe</h4>\r\n                                    </div>\r\n                                    <div class=\"col-4 text-right font-sz-20\"> €\r\n                                      {{selectedDroneMedia.price}}\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div> -->\r\n                        <div id=\"dm-accordion\" class=\"col-12\" role=\"tablist\">\r\n                          <div class=\"card-collapse\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\"\r\n                                  href=\"#{{selectedDroneMedia.service_key + selectedDroneMedia.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{selectedDroneMedia.title + \" - \" + selectedDroneMedia.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{selectedDroneMedia.service_key + selectedDroneMedia.package_key}}\"\r\n                              class=\"collapse show\" role=\"tabpanel\" data-parent=\"#dm-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <!-- Description what the customer will get for drone photos aerial-extended package -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col\">\r\n                                    <h4>Das erwartet Sie:</h4>\r\n                                    <p class=\"mb-0\">Wir erstellen 7 hochwertige Drohnenfotos von Ihrem\r\n                                      gewählten Objekt aus der Vogelperspektive. Die Fotos beinhalten\r\n                                      standardmäßig 5 Seitenansichten, sowie zwei Draufsichten aus\r\n                                      unterschiedlichen Höhen.\r\n                                    </p>\r\n                                    <!-- Border -->\r\n                                    <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\r\n\r\n                                    <!-- Form for special wishes of the customer -->\r\n                                    <form [formGroup]=\"droneMediaForm\">\r\n                                      <h4>Sonderwünsche:</h4>\r\n                                      <p class=\"mb-0\">Sollten Sie besondere Wünsche für die einzelnen\r\n                                        Perspektiven und Aufnahmehöhen der Fotos haben, dann können Sie\r\n                                        dies unten im Kommentarfeld für den Drohnenpiloten äußern.</p>\r\n                                      <a href=\"../../assets/images/formulierungshilfe.svg\" target=\"_blank\"\r\n                                        rel=\"noopener\" class=\"my-link\">Formulierungshilfe</a>\r\n\r\n                                      <!-- Wishes regarding the pilot's work -->\r\n                                      <div class=\"form-group mt-4\">\r\n                                        <p class=\"mb-0\">Kommentar für den Piloten:</p>\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                          placeholder=\"zB.: Bitte die Aussicht vom Balkon fotografieren!\"\r\n                                          formControlName=\"wishPilot\" #optionalWishPilot>\r\n                                      </div>\r\n\r\n                                      <!-- Wishes regarding the post-processing -->\r\n                                      <div class=\"form-group\">\r\n                                        <p class=\"mb-0\">Kommentar für die Nachbearbeitung der\r\n                                          Luftaufnahmen:</p>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"(Optional)\"\r\n                                          formControlName=\"description\" #description>\r\n                                      </div>\r\n                                    </form>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- End row -->\r\n                                <div class=\"row mb-2\">\r\n                                  <div class=\"col-4\"></div>\r\n                                  <div class=\"col-8\">\r\n                                    <hr />\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-8\">\r\n                                        <h4>Summe</h4>\r\n                                      </div>\r\n                                      <div class=\"col-4 text-right font-sz-20\"> €\r\n                                        {{selectedDroneMedia.price}}\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- </div> End row - Order page -->\r\n                    </div> <!-- End dronemedia tab -->\r\n                    <!-- floorplans -->\r\n                    <div class=\"tab-pane\" id=\"floorplan\">\r\n                      <!-- Show available package for the service -->\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.floorplans\" class=\"col-12 col-sm-6 col-lg-4 col-xl-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div> <!-- End available packages !-->\r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"shadow card cgrid package\" *ngFor=\"let package of selectedFloorplans\"> -->\r\n                        <!-- <div class=\"card-header bg-secondary\">\r\n                            <a class=\"my-link clickable\" (click)=\"package.expandedView = !package.expandedView\"\r\n                              [attr.aria-expanded]=\"package.expandedView\">\r\n                              <h5 class=\"card-title text-white text-left wsn row\">\r\n                                <span class=\"col-12\">\r\n                                  <span class=\"fas text-left mr-1\" [ngClass]=\"{\r\n                                    'fa-chevron-right': package.expandedView,\r\n                                    'fa-chevron-down': !package.expandedView\r\n                                  }\">\r\n                                  </span> {{package.title + \" - \" + package.name}}\r\n                                </span>\r\n                              </h5>\r\n                            </a>\r\n                          </div>\r\n                          <div [collapse]=\"package.expandedView\">\r\n                            <div class=\"card-body\">\r\n                              <app-package-editor [imoPackage]=\"package\" (onFormChange)=\"onFloorPlanChange($event)\">\r\n                              </app-package-editor>\r\n                            </div>\r\n                          </div> -->\r\n                        <div id=\"fp-accordion\" class=\"package-accordian\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selectedFloorplans\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#fp-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-package-editor [imoPackage]=\"package\" (onFormChange)=\"onFloorPlanChange($event)\">\r\n                                </app-package-editor>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- </div> -->\r\n                      </div>\r\n                    </div>\r\n                    <!-- retouching -->\r\n                    <div class=\"tab-pane\" id=\"retouching\">\r\n                      <!-- retouching -->\r\n                      <!-- Show available package for the service -->\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.retouching\" class=\"col-12 col-sm-6 col-lg-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div> <!-- End available packages !-->\r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"shadow card cgrid package\" *ngFor=\"let package of selectedRetouching\">\r\n                          <div class=\"card-header bg-secondary\">\r\n                            <a class=\"my-link clickable\" (click)=\"package.expandedView = !package.expandedView\"\r\n                              [attr.aria-expanded]=\"package.expandedView\">\r\n                              <h5 class=\"card-title text-white text-left wsn row\">\r\n                                <span class=\"col-12\">\r\n                                  <span class=\"fas text-left mr-1\" [ngClass]=\"{\r\n                                                                                      'fa-chevron-right': package.expandedView,\r\n                                                                                      'fa-chevron-down': !package.expandedView\r\n                                                                                    }\">\r\n                                  </span> {{\"Bildbearbeitung - \" + package.name}}\r\n                                </span>\r\n                              </h5>\r\n                            </a>\r\n                          </div>\r\n                          <div [collapse]=\"package.expandedView\">\r\n                            <div class=\"card-body\">\r\n                              <app-retouching-service [package]=\"package\" (onFormChange)=\"onRetouchingChange($event)\">\r\n                              </app-retouching-service>\r\n                            </div>\r\n                          </div>\r\n                        </div> -->\r\n                        <div id=\"rt-accordion\" class=\"col-12\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selectedRetouching\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#rt-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-retouching-service [package]=\"package\" (onFormChange)=\"onRetouchingChange($event)\">\r\n                                </app-retouching-service>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- virtual staging -->\r\n                    <div class=\"tab-pane\" id=\"vstaging\">\r\n                      <!-- Show available package for the service -->\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.vstaging\" class=\"col-12 col-sm-6 col-lg-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div> <!-- End available packages !-->\r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"shadow card cgrid package\" *ngFor=\"let package of selectedVStaging\">\r\n                          <div class=\"card-header bg-secondary\">\r\n                            <a class=\"my-link clickable\" (click)=\"package.expandedView = !package.expandedView\"\r\n                              [attr.aria-expanded]=\"package.expandedView\">\r\n                              <h5 class=\"card-title text-white text-left wsn row\">\r\n                                <span class=\"col-12\">\r\n                                  <span class=\"fas text-left mr-1\" [ngClass]=\"{\r\n                                                                                        'fa-chevron-right': package.expandedView,\r\n                                                                                        'fa-chevron-down': !package.expandedView\r\n                                                                                      }\">\r\n                                  </span> {{\"Virtual Staging - \" + package.name}}\r\n                                </span>\r\n                              </h5>\r\n                            </a>\r\n                          </div>\r\n                          <div [collapse]=\"package.expandedView\">\r\n                            <div class=\"card-body\">\r\n                              <app-virtual-staging-service [package]=\"package\"\r\n                                (onFormChange)=\"onVStagingChange($event)\">\r\n                              </app-virtual-staging-service>\r\n                            </div>\r\n                          </div>\r\n                        </div> -->\r\n                        <div id=\"vs-accordion\" class=\"col-12\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selectedVStaging\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#vs-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-virtual-staging-service [package]=\"package\"\r\n                                  (onFormChange)=\"onVStagingChange($event)\">\r\n                                </app-virtual-staging-service>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- virtual staging -->\r\n                    <div class=\"tab-pane\" id=\"visualisation\">\r\n                      <!-- Show available package for the service -->\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.visualisation\" class=\"col-12 col-sm-6 col-lg-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n\r\n                        <div id=\"vs-accordion\" class=\"col-12\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selected3dVisualisation\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#vs-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-visualisation-service [package]=\"package\"\r\n                                  (onFormChange)=\"on3dVisualisationChange($event)\"></app-visualisation-service>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- End available packages !-->\r\n                    </div>\r\n\r\n                    <!-- Tab for HD Photos-->\r\n                    <div class=\"tab-pane\" id=\"hdphotos\">\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.hdphotos\" class=\"col-12 col-sm-6 col-lg-4 col-xl-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n\r\n                        <div id=\"vs-accordion\" class=\"col-12\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selectedHDPhotos\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#vs-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-hdphotos-service [imoPackage]=\"package\" (onFormChange)=\"onHDPhotosChange($event)\">\r\n                                </app-hdphotos-service>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- Tab for Expose -->\r\n                    <div class=\"tab-pane\" id=\"expose\">\r\n                      <div class=\"col row packages-container align-self-start\">\r\n                        <div *ngFor=\"let package of packages.expose\" class=\"col-12 col-sm-6 col-lg-4 col-xl-3\">\r\n                          <app-package [package]=\"package\" [servicesComponent]=\"this\"\r\n                            [selectedPackages]=\"selectedPackages\">\r\n                          </app-package>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div id=\"fp-accordion\" class=\"package-accordian\" role=\"tablist\">\r\n                          <div class=\"card-collapse\" *ngFor=\"let package of selectedExposes\">\r\n                            <div class=\"card-header\" role=\"tab\">\r\n                              <h5 class=\"mb-0\">\r\n                                <a data-toggle=\"collapse\" href=\"#{{package.service_key + package.package_key}}\"\r\n                                  aria-expanded=\"true\" class=\"collapsed\">\r\n                                  {{package.title + \" - \" + package.name}}\r\n                                  <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                                </a>\r\n                              </h5>\r\n                            </div>\r\n                            <div id=\"{{package.service_key + package.package_key}}\" class=\"collapse show\"\r\n                              role=\"tabpanel\" data-parent=\"#fp-accordion\">\r\n                              <div class=\"card-body\">\r\n                                <app-expose-service [package]=\"package\" (onFormChange)=\"onExposeChange($event)\">\r\n                                </app-expose-service>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> <!-- End tab-content -->\r\n                </div> <!-- End card body -->\r\n                <!-- Wizard Footer -->\r\n                <div class=\"card-footer\">\r\n                  <div class=\"mr-auto\">\r\n                    <!-- <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\"\r\n                      value=\"Previous\"> -->\r\n                    <button class=\"btn btn-previous btn-default disabled\">\r\n                      Zurück\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"ml-auto\">\r\n                    <!-- <input type=\"button\" class=\"btn btn-next btn-fill btn-primary btn-wd\" name=\"next\" value=\"Next\"> -->\r\n                    <!-- <input type=\"button\" class=\"btn btn-finish btn-fill btn-primary btn-wd\" name=\"finish\" value=\"Finish\"\r\n                      style=\"display: none;\"> -->\r\n                    <button class=\"btn btn-next btn-primary\" style=\"display:none;\">\r\n                      Weiter\r\n                    </button>\r\n                    <button class=\"btn btn-finish btn-primary\" (click)=\"goNext()\" style=\"display:none;\">\r\n                      Weiter\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- Continue Button -->\r\n              <!-- <button class=\"btn btn-primary mr-2 mt-2\" (click)=\"goNext()\">Weiter</button> -->\r\n              <!-- Cancel Button -->\r\n              <!-- <button class=\"btn btn-danger mt-2\" (click)=\"goToPackageSelection()\">Abbrechen</button> -->\r\n              <ng-template #loading>\r\n                <!-- CSS Loading Spinner -->\r\n                <div class=\"lds-ring ring-default\">\r\n                  <div></div>\r\n                  <div></div>\r\n                  <div></div>\r\n                  <div></div>\r\n                </div>\r\n              </ng-template>\r\n            </div> <!-- End Wizard container -->\r\n          </div>\r\n        </div>\r\n        <!--End Row  -->\r\n      </div>\r\n      <!-- 5th Page -->\r\n      <div *ngIf=\"state === '5'\">\r\n\r\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\r\n          <span class=\"page-title\">Auftragsfinalisierung</span>\r\n          <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n            <div class=\"btn-group mr-2\">\r\n              <button class=\"btn btn-primary\" (click)=\"goBack('3')\">\r\n                Zurück\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Final Page with \"billing-details\" and the final button to book the service -->\r\n        <div class=\"shadow card fluid cgrid\">\r\n\r\n          <!-- <div class=\"card-header\">\r\n            <button class=\"btn btn-primary float-right\" (click)=\"goBack('3')\">Zurück</button>\r\n            <h5 class=\"card-title text-left wsn\">Auftragsfinalisierung:</h5>\r\n          </div> -->\r\n\r\n          <!--  -->\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div\r\n                  *ngIf=\"arrayContainsValue(selectedPackages, '2') || selectedFloorplans.length > 0 || selectedRetouching.length > 0 || selectedVStaging.length > 0 || selectedExposes.length > 0 || selected3dVisualisation.length > 0 || selectedHDPhotos.length > 0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 col-md-6\">\r\n                      <h4>Ausgewähltes Paket:</h4>\r\n                      <table class=\"table\">\r\n                        <tr *ngFor=\"let package_price of package_price_list\">\r\n                          <td width=\"75%\">{{package_price.package_label}}</td>\r\n                          <td width=\"25%\" class=\"text-right\"><strong>{{package_price.total_price}}\r\n                              €</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"75%\">\r\n                            <strong>Summe</strong>\r\n                          </td>\r\n                          <td width=\"25%\" class=\"text-right\">\r\n                            <strong>{{total_price_sum}} €</strong>\r\n                          </td>\r\n                        </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6\">\r\n                      <ng-container *ngIf=\"selectedRealestate | async as realestate; else loading\">\r\n                        <h4>Objekt:</h4>\r\n                        <h5 class=\"card-title text-left wsn\">{{ realestate.title }}</h5>\r\n                        <p class=\"card-text text-left mb-1\" *ngIf=\"realestate.objectNumber\">\r\n                          {{ realestate.objectNumber }}\r\n                        </p>\r\n                        <p class=\"card-text text-left\">{{ realestate.street }}\r\n                          {{ realestate.streetnumber }}, {{ realestate.postalcode }} {{ realestate.city }}\r\n                        </p>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Border -->\r\n                  <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\r\n\r\n                  <!-- Billing details -->\r\n                  <h4>Rechnungsdaten:</h4>\r\n                  <h5>{{user.firstName}} {{user.lastName}}</h5>\r\n\r\n                  <!-- Profile Form with prefilled data if available -->\r\n                  <form [formGroup]=\"profileForm\" (ngSubmit)=\"submitHandler()\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Unternehmensname</span>\r\n                            </div>\r\n                            <input formControlName=\"company\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"Unternehmensname\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">USt-ID</span>\r\n                            </div>\r\n                            <input formControlName=\"ustid\" type=\"text\" class=\"form-control\" placeholder=\"USt-ID\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Straße <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"street\" type=\"text\" class=\"form-control\" placeholder=\"Straße\">\r\n                          </div>\r\n                          <div *ngIf=\"street.invalid && street.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Straße an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Nr. <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"streetNumber\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"Hausnummer\">\r\n                          </div>\r\n                          <div *ngIf=\"streetNumber.invalid && streetNumber.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Hausnummer an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-row\">\r\n\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Postleitzahl <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"postalcode\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"Postleitzahl\">\r\n                          </div>\r\n                          <div *ngIf=\"postalcode.invalid && postalcode.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine gültige Postleitzahl an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Stadt <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"city\" type=\"text\" class=\"form-control\" placeholder=\"Stadt\">\r\n                          </div>\r\n                          <div *ngIf=\"city.invalid && city.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine (gültige) Stadt an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Telefonnummer <span\r\n                                  class=\"text-danger\">*</span></span>\r\n                            </div>\r\n                            <input formControlName=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Telefonnummer\">\r\n                          </div>\r\n                          <div *ngIf=\"phone.invalid && phone.touched\" class=\"alert alert-warning\">\r\n                            Bitte geben Sie eine (gültige) Telefonnummer an!\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"input-group mb-md-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Erreichbarkeit</span>\r\n                            </div>\r\n                            <input formControlName=\"reachability\" type=\"text\" class=\"form-control\"\r\n                              placeholder=\"z.B.: Mo-Fr 09:00 Uhr bis 17:00 Uhr\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n\r\n\r\n                    <!-- Border -->\r\n                    <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\r\n\r\n                    <!-- Invoice details -->\r\n                    <h4>Kauf auf Rechnung:</h4>\r\n                    <p>Beim Kauf auf Rechnung erhalten Sie eine Rechnung. Die Zahlungsfrist beträgt 14 Tage.</p>\r\n                    <p class=\"font-weight-bold\">Überweisungen/Zahlungen an:</p>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li>IMOGENT GmbH</li>\r\n                          <li>Technologiepark 8</li>\r\n                          <li>33100 Paderborn</li>\r\n                          <li>Gesellschafter: Peer Bausch, Robin Kroll</li>\r\n                        </ul>\r\n\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li>Kontoinhaber: IMOGENT GmbH</li>\r\n                          <li>Sparkasse Hameln-Weserbergland</li>\r\n                          <li>IBAN: DE47 2545 0110 0031 0398 86</li>\r\n                          <li>BIC: NOLADE21SWB</li>\r\n                        </ul>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li>UStId: DE319399373</li>\r\n                          <li>Registernummer: 13537</li>\r\n                          <li>Amtsgericht: Paderborn</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <!-- Border -->\r\n                    <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-check\">\r\n                        <!-- <input class=\"form-check-input\" type=\"checkbox\" id=\"invalidCheck\" (click)=\"toggleWiderruf();\"\r\n                          required> -->\r\n                        <mat-checkbox color=\"primary\" formControlName=\"conditionsCheck\" id=\"invalidCheck\"\r\n                          required=\"true\">\r\n                        </mat-checkbox>\r\n                        <b> Ich stimme zu, dass IMOGENT vor Ablauf der 14 tägigen\r\n                          Widerrufsfrist mit der Ausführung des Auftrages beginnt. Mir ist\r\n                          bekannt, dass ich durch diese Zustimmung mit Beginn der Ausführung\r\n                          des Auftrages mein\r\n                          Widerrufsrecht verliere. <span class=\"text-danger\">*</span></b>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- Book service button -->\r\n                    <button class=\"btn btn-primary mr-2 mt-2\" [disabled]=\"profileForm.invalid\">Kostenpflichtig\r\n                      buchen</button>\r\n                    <!-- Cancel Button -->\r\n                    <button class=\"btn btn-danger mt-2\" (click)=\"goToPackageSelection()\">Abbrechen</button>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <ng-template #loading>\r\n              <!-- CSS Loading Spinner -->\r\n              <div class=\"lds-ring ring-default\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 6th Page -->\r\n      <div *ngIf=\"state === '6'\">\r\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\r\n          <span class=\"page-title\">Auftragsbestätigung</span>\r\n        </div>\r\n        <!-- Final Page with \"billing-details\" and the final button to book the service -->\r\n        <div class=\"shadow card fluid cgrid\">\r\n\r\n          <!-- <div class=\"card-header\">\r\n                    <button class=\"btn btn-primary float-right\" (click)=\"goBack('3')\">Zurück</button>\r\n                    <h5 class=\"card-title text-left wsn\">Auftragsfinalisierung:</h5>\r\n                  </div> -->\r\n          <!--  -->\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h5 class=\"w\">Vielen Dank für Ihre Bestellung</h5>\r\n                <p class=\"w\">\r\n                  Ihr Auftrag ist bei uns eingegangen und wird bereits bearbeitet. Wir freuen uns auf die\r\n                  Lieferung der Ergebnisse.\r\n                </p>\r\n                <p class=\"w\">\r\n                  Sollten Sie in der Zwischenzeit Fragen haben, kontaktieren Sie uns gerne.\r\n                </p>\r\n                <!-- Button that links to the orders-page -->\r\n                <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/orderoverview\">Zu meinen\r\n                  Aufträgen</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n  <!-- CSS Loading Spinner -->\r\n  <div class=\"lds-ring ring-default\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/_services/configuration.service */ "./src/app/_services/configuration.service.ts");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_language_language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/language/language */ "./src/app/language/language.ts");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_services_global_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/_services/global.service */ "./src/app/_services/global.service.ts");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var ServicesComponent = /** @class */ (function () {
    /**
     * Set the form validation in the constructor. This form is displayed during booking a service.
     */
    function ServicesComponent(fb, realestateservice, afs, auth, conf, router, uploadService, fns, os, gs, userService) {
        this.fb = fb;
        this.realestateservice = realestateservice;
        this.afs = afs;
        this.auth = auth;
        this.conf = conf;
        this.router = router;
        this.uploadService = uploadService;
        this.fns = fns;
        this.os = os;
        this.gs = gs;
        this.userService = userService;
        this.verzichtWiderruf = false;
        this.selectedPackages = [];
        this.packages = {}; // predefined packages hardcoded in models/package.ts
        this.selectedFloorplans = [];
        this.selectedRetouching = [];
        this.onFloorplanOrderCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.floorplanOrderCount = 0;
        this.selectedVStaging = [];
        this.selected3dVisualisation = [];
        this.selectedExposes = [];
        this.package_price_list = []; // maintain selected packages and their prices in this list
        this.subOrderCount = 0;
        this.onSubOrdersCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartItems = [];
        this.chosenPackages = [];
        this.selectedService = '';
        this.selectedServices = [];
        this.wizardIntialized = false;
        this.reset = false;
        this.selectedHDPhotos = [];
        this.realestateForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            objectNumber: [''],
            street: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß.-][a-zA-ZäöüÄÖÜß. -]*[a-zA-ZäöüÄÖÜß.]$)')
                ]],
            streetnumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[1-9][0-9]{0,3}[a-zA-Z]?$')
                ]],
            postalcode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß -][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
        });
        this.profileForm = this.fb.group({
            company: [''],
            ustid: [''],
            street: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß.-][a-zA-ZäöüÄÖÜß. -]*[a-zA-ZäöüÄÖÜß.]$)')
                ]],
            streetNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[1-9][0-9]{0,3}[a-zA-Z]?$')
                ]],
            postalcode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([A-ZäöüÄÖÜß -][a-zA-ZäöüÄÖÜß -]*[a-zA-ZäöüÄÖÜß]$)')
                ]],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9+/]*')
                ]],
            'reachability': [''],
            conditionsCheck: [false, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
        this.droneMediaForm = this.fb.group({
            wishPilot: [''],
            description: ['']
        });
        // this.emailSendCallable = this.fns.httpsCallable('sendMail');
        this.emailSendCallable = this.fns.httpsCallable('sendOrderConfirmationEmail');
    }
    Object.defineProperty(ServicesComponent.prototype, "conditionsCheck", {
        get: function () {
            return this.profileForm.get('conditionsCheck');
        },
        enumerable: true,
        configurable: true
    });
    ServicesComponent.prototype.ngOnInit = function () {
        var self = this;
        self.state = '1';
        this.os.getAllServices().subscribe(function (services) {
            var PACKAGES = {};
            self.packageList = [];
            services.forEach(function (service) {
                PACKAGES[service.id] = service.packages;
                self.packageList = self.packageList.concat(service.packages);
            });
            self.packages = PACKAGES;
            self.availablePackages = self.fetchAvailableServices('', false);
            var user = JSON.parse(sessionStorage.getItem('user'));
            var uid = user.uid;
            self.user = uid; // UID;
            self.preloadData();
            self.packages.dronemedia = self.packages.dronemedia.filter(function (pckg) { return !pckg.disabled; });
            self.packages.floorplans = self.packages.floorplans.filter(function (pckg) { return !pckg.disabled; });
            self.packages.retouching = self.packages.retouching.filter(function (pckg) { return !pckg.disabled; });
            self.packages.vstaging = self.packages.vstaging.filter(function (pckg) { return !pckg.disabled; });
            self.packages.visualisation = self.packages.visualisation.filter(function (pckg) { return !pckg.disabled; });
            self.packages.hdphotos = self.packages.hdphotos.filter(function (pckg) { return !pckg.disabled; });
            if (self.userService.cartItems) {
                self.cartItems = self.userService.cartItems;
            }
            if (self.userService.selectedServices) {
                self.selectedServices = self.userService.selectedServices;
            }
        });
    };
    ServicesComponent.prototype.ngOnDestroy = function () {
        /* Prevent Memory Leaks and insufficient permission errors */
        if (this.profile !== undefined) {
            this.profile.unsubscribe();
        }
    };
    /**
     * Preload user profile data when bookign a service
     */
    ServicesComponent.prototype.preloadData = function () {
        var _this = this;
        this.profile = this.afs.doc("users/" + this.user).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            _this.profileForm.patchValue(data);
        }))
            .subscribe();
    };
    Object.defineProperty(ServicesComponent.prototype, "street", {
        /**
         * Store any additional comments for post processing and for pilot's work
         * These comments are given by Customer during placing an order
         */
        //   setWishes(pilot, editor) {
        //     this.optionalWishPilot = pilot;
        //     this.optionalWishEditor = editor;
        //     console.log(this.optionalWishEditor);
        //     console.log(this.optionalWishPilot);
        //     console.log('droneMediaFormValue: ', this.droneMediaForm.value);
        //   }
        get: function () {
            return this.profileForm.get('street');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "streetNumber", {
        get: function () {
            return this.profileForm.get('streetNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "postalcode", {
        get: function () {
            return this.profileForm.get('postalcode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "city", {
        get: function () {
            return this.profileForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "phone", {
        get: function () {
            return this.profileForm.get('phone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "reachability", {
        get: function () {
            return this.profileForm.get('phone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "wishPilot", {
        get: function () {
            return this.droneMediaForm.get('wishPilot');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "wishEditor", {
        get: function () {
            return this.droneMediaForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "re_title", {
        get: function () {
            return this.realestateForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "re_street", {
        get: function () {
            return this.realestateForm.get('street');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "re_streetnumber", {
        get: function () {
            return this.realestateForm.get('streetnumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "re_postalcode", {
        get: function () {
            return this.realestateForm.get('postalcode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "re_city", {
        get: function () {
            return this.realestateForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Submit handler for booking a service for a realestate.
     * Also updates the address in user profile if the billing address is updated in during booking a service.
     */
    ServicesComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colRef, formValue;
            return __generator(this, function (_a) {
                console.log('Check');
                colRef = this.afs.collection('users');
                this.profileForm.value.profileCompleted = true;
                formValue = this.profileForm.value;
                colRef.doc(this.user).update(formValue);
                this.bookOrder();
                return [2 /*return*/];
            });
        });
    };
    ServicesComponent.prototype.createNewRealestate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colRef, formValue, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.realestateservice.add = false;
                        colRef = this.afs.collection('realestates');
                        formValue = this.realestateForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, colRef.add(formValue).then(function (docRef) {
                                var docId = docRef.id;
                                colRef.doc(docId).update({
                                    id: docId,
                                    ownerID: _this.user,
                                    createdOn: new Date(),
                                });
                                _this.realestateForm.reset();
                                _this.realestateForm.markAsPristine();
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets triggered when user selects a real estate to book a service. Set the desired class attributes and change the state
     */
    ServicesComponent.prototype.realEstateSelectHandler = function (ridParam, selCity, selPostalcode, selDesc) {
        var _this = this;
        var self = this;
        this.selRID = ridParam;
        this.selCity = selCity;
        this.selPostalcode = selPostalcode;
        this.selDesc = selDesc;
        this.selectedRealestate = this.realestateservice.getRealestate(this.selRID).valueChanges();
        this.state = '3';
        // this.packageSelectHandler();
        // initialize the wizard, a delay is added because $('.card-wizard') is not immediately available
        setTimeout(function () {
            _this.wizardInitialization();
        }, 10);
    };
    ServicesComponent.prototype.packageSelectHandler = function () {
        var self = this;
        this.selectedFloorplans = this.packages.floorplans.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
        for (var i = 0; i < self.packages.dronemedia.length; i++) {
            if (self.selectedPackages.indexOf(self.packages.dronemedia[i].package_key) >= 0) {
                self.selectedDroneMedia = self.packages.dronemedia[i];
            }
        }
        this.selectedRetouching = this.packages.retouching.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
        this.selectedVStaging = this.packages.vstaging.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
        this.selected3dVisualisation = this.packages.visualisation.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
        this.selectedHDPhotos = this.packages.hdphotos.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
        this.selectedExposes = this.packages.expose.filter(function (plan) {
            return self.selectedPackages.indexOf(plan.package_key) >= 0;
        });
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        /* if (!this.wizardIntialized) {
          return;
        } */
        $(window).resize(function () {
            $('.card-wizard').each(function () {
                var $wizard = $(this);
                var index = $wizard.bootstrapWizard('currentIndex');
                var $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', $li_width + '%');
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });
    };
    ServicesComponent.prototype.wizardInitialization = function () {
        var self = this;
        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                console.log('onNext called');
                // self.onServiceChange(self.cartItems[index]);
                // var $valid = $('.card-wizard form').valid();
                // if (!$valid) {
                //   $validator.focusInvalid();
                //   return false;
                // }
                if (!self.areAllFormsValid()) {
                    self.gs.showNotification('Bitte laden Sie die benötigten Dateien hoch', 'danger');
                    return false;
                }
            },
            onPrevious: function (tab, navigation, index) {
                if (!self.areAllFormsValid()) {
                    self.gs.showNotification('Bitte laden Sie die benötigten Dateien hoch', 'danger');
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                console.log('onInit called');
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.card-wizard .wizard-navigation').append($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                // console.log('in OnTabClick');
                // console.log(self.state);
                // self.onServiceChange(self.cartItems[index]);
                // const $valid = $('.card-wizard form').valid();
                // if (!$valid) {
                //   return false;
                // } else {
                //   return true;
                // }
                if (!self.areAllFormsValid()) {
                    self.gs.showNotification('Bitte laden Sie die benötigten Dateien hoch', 'danger');
                    return false;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        self.cartItems = self.cartItems;
        this.wizardIntialized = true;
    };
    /**
     * Navigate to realestate component and open the form to add the new real estate by default.
     */
    ServicesComponent.prototype.navigateToRealestateCreation = function () {
        // this.router.navigate(['realestate']);
        this.realestateservice.add = !this.realestateservice.add;
    };
    /**
     * Check if array contains value
     */
    ServicesComponent.prototype.arrayContainsValue = function (list, value) {
        return list.indexOf(value) > -1;
    };
    /**
     * Book the order. Create a new order in orders collection
     */
    ServicesComponent.prototype.bookOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [2 /*return*/];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicesComponent.prototype.create3dVisualisationSubOrder = function (id, visualisation) {
        var _this = this;
        console.log('Creating 3D visualisation sub order', visualisation);
        var selectedPackage = (visualisation.package_key == 10 ? 'Innenvisualisierung' : 'Außenvisualisierung');
        var outputFormatArray = ['', 'Standbild', '360° Tour', 'Rundflug'];
        var qualityArray = ['', 'Basic', 'Standard', 'High Quality', 'Premium'];
        var lengthArray = ['', '30 Sekunden', '40 Sekunden', '50 Sekunden'];
        var appartmentsArray = ['', '1 - 4 Appartments', '5 - 10 Appartments', 'mehr als 10 Appartments'];
        var suborder = {
            createdOn: new Date(),
            createdBy: this.user,
            status: 'opened',
            realestateId: this.selRID,
            assignedTo: '',
            orderType: 'visualisation',
            areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
            Desc: "" + this.selDesc,
            orderId: id,
            packageNum: visualisation.package_key,
            selectedPackage: selectedPackage,
            outputFormat: outputFormatArray[visualisation.outputFormat],
            quality: qualityArray[visualisation.quality],
            length: lengthArray[visualisation.length],
            apartments: appartmentsArray[visualisation.apartments],
            price: visualisation.total_price,
            numPhotos: visualisation.numPhotos
        };
        if (visualisation.description) {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                description: visualisation.description
            });
        }
        else {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                description: ''
            });
        }
        this.afs.collection('suborders').add(suborder).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // upload attachments
                this.subOrderCount++;
                console.log("3D visualisation order created. Suborder count: " + this.subOrderCount);
                if (this.subOrderCount === this.selectedPackages.length) {
                    this.onSubOrdersCreation.emit(true);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ServicesComponent.prototype.createExposeSubOrder = function (id, formValues, expose) {
        console.log('Creating expose sub order');
        var suborder = {
            createdOn: new Date(),
            createdBy: this.user,
            status: 'opened',
            realestateId: this.selRID,
            assignedTo: '',
            orderType: 'expose',
            areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
            Desc: "" + this.selDesc,
            orderId: id,
            packageNum: expose.package_key
        };
        if (formValues) {
            if (formValues.description) {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: formValues.description
                });
            }
            else {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: ''
                });
            }
        }
        else {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                description: ''
            });
        }
        this.afs.collection('suborders').add(suborder);
    };
    /**
     * Create drone-media suborder against an order
     */
    ServicesComponent.prototype.createDroneMediaSubOrder = function (orderId) {
        var _this = this;
        if (this.selectedPackages.indexOf('2') > -1) {
            var suborder = {
                createdOn: new Date(),
                createdBy: this.user,
                status: 'opened',
                realestateId: this.selRID,
                assignedTo: '',
                orderType: 'dronemedia',
                optionalWishPilot: this.droneMediaForm.value.wishPilot,
                areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
                Desc: "" + this.selDesc,
                orderId: orderId
            };
            // store the package number also, every package is assigned a fixed number
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                packageNum: '2'
            });
            this.afs.collection('suborders').add(suborder).then(function (doc) {
                console.log('sub order dronemedia created');
                // retouching is part of package number 2
                _this.createRetouchingSubOrder(orderId, doc.id, true);
            });
        }
    };
    /**
     * Create retouching sub order against an order
     */
    ServicesComponent.prototype.createRetouchingSubOrder = function (orderId, values, drone, selectedPackage) {
        var _this = this;
        if (selectedPackage === void 0) { selectedPackage = {}; }
        console.log('Creating retouching sub order');
        var suborder;
        suborder = {
            createdOn: new Date(),
            createdBy: this.user,
            // status: 'opened',
            realestateId: this.selRID,
            assignedTo: this.conf.serviceProviders.retouchingService,
            orderType: 'retouching',
            // description: values.description,
            areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
            Desc: "" + this.selDesc,
            orderId: orderId
        };
        if (drone) {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                status: 'pending',
                packageNum: '2',
                pendingOnSuborderId: values
            });
            if (this.droneMediaForm.value.description) {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: this.droneMediaForm.value.description
                });
            }
            else {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: ''
                });
            }
        }
        else {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                status: 'opened',
                packageNum: values.packageNum
            });
            // add price for selected package
            if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](selectedPackage)) {
                var total_price = selectedPackage['total_price'] ? selectedPackage['total_price'] : selectedPackage['price'];
                suborder['price'] = total_price;
            }
            if (values.description) {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: values.description
                });
            }
            else {
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    description: ''
                });
            }
            if (values.uploadedFiles && values.uploadedFiles.length > 0) {
                // the number of retouched photos required is equal to number of original photos provided
                suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                    requiredUploads: values.uploadedFiles.length
                });
            }
        }
        this.afs.collection('suborders').add(suborder).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            var uploadedFileCount, data_1, _loop_1, this_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadedFileCount = 0;
                        if (!(values.uploadedFiles && values.uploadedFiles.length > 0)) return [3 /*break*/, 5];
                        data_1 = {};
                        _loop_1 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.uploadService.uploadtoSubOrder(values.uploadedFiles[i], doc.id + '/originalPhotos', '').then(function (url) {
                                            console.log('file uploaded, now adding to subcollection');
                                            data_1 = {
                                                download_url: url,
                                                file_name: values.uploadedFiles[i].name
                                            };
                                            _this.os.addSubCollectionDocument('suborders', doc.id, 'originalPhotos', data_1).then(function () {
                                                uploadedFileCount++;
                                                if (uploadedFileCount == values.uploadedFiles.length) {
                                                    _this.subOrderCount++;
                                                    console.log("retouching order created. Suborder count: " + _this.subOrderCount);
                                                    if (_this.subOrderCount === _this.selectedPackages.length) {
                                                        _this.onSubOrdersCreation.emit(true);
                                                    }
                                                }
                                            });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < values.uploadedFiles.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.subOrderCount++;
                        console.log("retouching order created. Suborder count: " + this.subOrderCount);
                        if (this.subOrderCount === this.selectedPackages.length) {
                            this.onSubOrdersCreation.emit(true);
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
       * Create virtual staging sub order against an order
       */
    ServicesComponent.prototype.createVStagingSubOrder = function (orderId, values, selectedPackage) {
        var _this = this;
        if (selectedPackage === void 0) { selectedPackage = {}; }
        console.log('Creating virtual staging sub order');
        var suborder = {
            createdOn: new Date(),
            createdBy: this.user,
            status: 'opened',
            realestateId: this.selRID,
            assignedTo: this.conf.serviceProviders.vstagingService,
            orderType: 'vstaging',
            areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
            Desc: "" + this.selDesc,
            orderId: orderId,
            packageNum: values.packageNum
        };
        if (values.description) {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                description: values.description
            });
        }
        else {
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                description: ''
            });
        }
        // add price for selected package
        if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](selectedPackage)) {
            var total_price = selectedPackage['total_price'] ? selectedPackage['total_price'] : selectedPackage['price'];
            suborder['price'] = total_price;
        }
        if (values.uploadedFiles && values.uploadedFiles.length > 0) {
            // the number of staging photos required is equal to number of original photos provided
            suborder = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](suborder, {
                requiredUploads: values.uploadedFiles.length
            });
        }
        this.afs.collection('suborders').add(suborder).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            var uploadedFileCount, data_2, _loop_2, this_2, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadedFileCount = 0;
                        if (!(values.uploadedFiles && values.uploadedFiles.length > 0)) return [3 /*break*/, 5];
                        data_2 = {};
                        _loop_2 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_2.uploadService.uploadtoSubOrder(values.uploadedFiles[i], doc.id + '/originalPhotos', '').then(function (url) {
                                            console.log('virtual staging file uploaded, now adding to subcollection');
                                            data_2 = {
                                                download_url: url,
                                                file_name: values.uploadedFiles[i].name
                                            };
                                            _this.os.addSubCollectionDocument('suborders', doc.id, 'originalPhotos', data_2).then(function () {
                                                uploadedFileCount++;
                                                if (uploadedFileCount == values.uploadedFiles.length) {
                                                    _this.subOrderCount++;
                                                    console.log("virtual staging order created. Suborder count: " + _this.subOrderCount);
                                                    if (_this.subOrderCount === _this.selectedPackages.length) {
                                                        _this.onSubOrdersCreation.emit(true);
                                                    }
                                                }
                                            });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < values.uploadedFiles.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.subOrderCount++;
                        console.log("virtual staging order created. Suborder count: " + this.subOrderCount);
                        if (this.subOrderCount === this.selectedPackages.length) {
                            this.onSubOrdersCreation.emit(true);
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    ServicesComponent.prototype.goNext = function () {
        var _this = this;
        if (this.selectedPackages && this.selectedPackages.length <= 0) {
            this.gs.showNotification('Bitte wählen Sie ein Paket aus', 'danger');
            return;
        }
        var errorMsg = '';
        var canContinue = true;
        this.total_price_sum = 0;
        this.package_price_list = [];
        // add price for dronemedia package
        if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](this.selectedDroneMedia) && canContinue) {
            this.priceCalculation(this.selectedDroneMedia);
        }
        this.selectedFloorplans.forEach(function (plan) {
            if (plan.form.invalid) {
                canContinue = false;
                plan.validate = !plan.validate;
            }
            else if (canContinue) {
                _this.priceCalculation(plan);
            }
        });
        // retouching form validation
        this.selectedRetouching.forEach(function (retouching) {
            if (retouching.form.invalid) {
                canContinue = false;
                retouching.validate = !retouching.validate;
            }
            else if (canContinue) {
                _this.priceCalculation(retouching);
            }
        });
        // virtual staging form valdiation
        this.selectedVStaging.forEach(function (staging) {
            if (staging.form.invalid) {
                canContinue = false;
                staging.validate = !staging.validate;
            }
            else if (canContinue) {
                _this.priceCalculation(staging);
            }
        });
        // // 3D Visualisation form valdiation
        this.selected3dVisualisation.forEach(function (vis) {
            if (!vis.total_price || vis.total_price === '0,00') {
                canContinue = false;
                vis.validate = !vis.validate;
                errorMsg = 'Bitte geben Sie alle benötigten Informationen an';
            }
            else if (canContinue) {
                _this.priceCalculation(vis);
            }
        });
        this.selectedHDPhotos.forEach(function (hdPhotos) {
            if (hdPhotos.form.invalid) {
                canContinue = false;
                hdPhotos.validate = !hdPhotos.validate;
                errorMsg = 'Bitte geben Sie alle benötigten Informationen an';
            }
            else if (canContinue) {
                _this.priceCalculation(hdPhotos);
            }
        });
        // expose form valdiation
        this.selectedExposes.forEach(function (expose) {
            if (expose.form.invalid) {
                canContinue = false;
                expose.validate = !expose.validate;
            }
            else if (canContinue) {
                _this.priceCalculation(expose);
            }
        });
        if (canContinue) {
            this.state = '5';
            this.verzichtWiderruf = false;
            this.total_price_sum = accounting__WEBPACK_IMPORTED_MODULE_13__["formatMoney"](this.total_price_sum, '', 2, '.', ',');
        }
        else {
            if (!errorMsg) {
                this.gs.showNotification('Bitte laden Sie die benötigten Dateien hoch', 'danger');
            }
            else {
                this.gs.showNotification(errorMsg, 'danger');
            }
        }
    };
    ServicesComponent.prototype.priceCalculation = function (package_data) {
        var total_price = package_data.total_price ? package_data.total_price : package_data.price;
        // add price
        this.total_price_sum += accounting__WEBPACK_IMPORTED_MODULE_13__["unformat"](total_price, ',');
        this.package_price_list.push({
            package_label: _app_language_language__WEBPACK_IMPORTED_MODULE_12__["LANGUAGE"].app_list_strings.order_type_list[package_data.service_key] + ' - ' + package_data.name,
            total_price: total_price
        });
    };
    ServicesComponent.prototype.onFloorPlanChange = function (formValues) {
        for (var i = 0; i < this.selectedFloorplans.length; i++) {
            if (this.selectedFloorplans[i].package_key === formValues.packageNum) {
                this.selectedFloorplans[i].formValues = formValues;
                break;
            }
        }
    };
    ServicesComponent.prototype.onRetouchingChange = function (formValues) {
        for (var i = 0; i < this.selectedRetouching.length; i++) {
            if (formValues.packageNum == this.selectedRetouching[i].package_key) {
                this.selectedRetouching[i].formValues = formValues;
            }
        }
    };
    ServicesComponent.prototype.onVStagingChange = function (formValues) {
        for (var i = 0; i < this.selectedVStaging.length; i++) {
            if (formValues.packageNum == this.selectedVStaging[i].package_key) {
                this.selectedVStaging[i].formValues = formValues;
            }
        }
    };
    ServicesComponent.prototype.on3dVisualisationChange = function (formValues) {
        for (var i = 0; i < this.selected3dVisualisation.length; i++) {
            if (formValues.packageNum === this.selected3dVisualisation[i].package_key) {
                this.selected3dVisualisation[i].formValues = formValues;
            }
        }
    };
    ServicesComponent.prototype.onHDPhotosChange = function (formValues) {
        for (var i = 0; i < this.selectedHDPhotos.length; i++) {
            if (formValues.packageNum === this.selectedHDPhotos[i].package_key) {
                this.selectedHDPhotos[i].formValues = formValues;
            }
        }
    };
    ServicesComponent.prototype.onExposeChange = function (formValues) {
        for (var i = 0; i < this.selectedExposes.length; i++) {
            if (formValues.packageNum == this.selectedExposes[i].package_key) {
                this.selectedExposes[i].formValues = formValues;
                console.log(this.selectedExposes[i]);
            }
        }
    };
    ServicesComponent.prototype.createFloorPlanSubOrder = function (orderId, fpValues, packageName, selectedPackage) {
        if (selectedPackage === void 0) { selectedPackage = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var self, suborder, total_price;
            var _this = this;
            return __generator(this, function (_a) {
                self = this;
                suborder = {
                    createdOn: new Date(),
                    createdBy: this.user,
                    status: 'opened',
                    realestateId: this.selRID,
                    assignedTo: this.conf.serviceProviders.floorplanService,
                    areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
                    Desc: "" + this.selDesc,
                    orderId: orderId,
                    packageName: packageName,
                    imgUrl: fpValues.baseurl + 'Grundriss_moebliert.jpeg'
                };
                // add price for selected package
                if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](selectedPackage)) {
                    total_price = selectedPackage['total_price'] ? selectedPackage['total_price'] : selectedPackage['price'];
                    suborder['price'] = total_price;
                }
                Object.keys(fpValues).forEach(function (key) {
                    if (!(fpValues[key] instanceof FileList) && key !== 'planImages' && key !== 'logoImage') {
                        suborder[key] = fpValues[key];
                    }
                });
                this.afs.collection('suborders').add(suborder).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                    var fpImageLst_1, _loop_3, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                fpValues.subOrderId = doc.id;
                                if (!(fpValues.planImages.length > 0)) return [3 /*break*/, 5];
                                fpImageLst_1 = [];
                                _loop_3 = function (i) {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, self.uploadService.uploadtoSubOrder(fpValues.planImages[i], doc.id, 'fp_').then(function (url) {
                                                    fpImageLst_1.push({
                                                        'url': url,
                                                        'fileName': fpValues.planImages[i].name
                                                    });
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < fpValues.planImages.length)) return [3 /*break*/, 4];
                                return [5 /*yield**/, _loop_3(i)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4:
                                this.afs.collection('suborders').doc(doc.id).update({
                                    planImages: fpImageLst_1
                                });
                                _a.label = 5;
                            case 5:
                                if (fpValues.logoImage.length > 0) {
                                    self.uploadService.uploadtoSubOrder(fpValues.logoImage[0], doc.id, 'logo_').then(function (url) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.afs.collection('suborders').doc(doc.id).update({
                                                        logoImage: {
                                                            'url': url,
                                                            'fileName': fpValues.logoImage[0].name
                                                        }
                                                    }).then(function () {
                                                        self.floorplanOrderCount += 1;
                                                        self.subOrderCount++;
                                                        console.log("Floorplan order created. Suborder count: " + self.subOrderCount);
                                                        if (self.floorplanOrderCount === self.selectedFloorplans.length) {
                                                            self.onFloorplanOrderCreation.emit(true);
                                                        }
                                                        if (_this.subOrderCount === _this.selectedPackages.length) {
                                                            _this.onSubOrdersCreation.emit(true);
                                                        }
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                else {
                                    self.floorplanOrderCount += 1;
                                    self.subOrderCount++;
                                    console.log("Floorplan order created. Suborder count: " + self.subOrderCount);
                                    if (self.floorplanOrderCount === self.selectedFloorplans.length) {
                                        self.onFloorplanOrderCreation.emit(true);
                                    }
                                    if (this.subOrderCount === this.selectedPackages.length) {
                                        this.onSubOrdersCreation.emit(true);
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ServicesComponent.prototype.createHDPhotosSubOrder = function (orderId, hdpValues, packageName, selectedPackage) {
        if (selectedPackage === void 0) { selectedPackage = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var self, suborder, total_price;
            var _this = this;
            return __generator(this, function (_a) {
                self = this;
                suborder = {
                    createdOn: new Date(),
                    createdBy: this.user,
                    status: 'opened',
                    realestateId: this.selRID,
                    assignedTo: this.conf.serviceProviders.floorplanService,
                    areaDesc: "" + this.selCity + (" (" + this.selPostalcode + ")"),
                    Desc: "" + this.selDesc,
                    orderId: orderId,
                    packageName: packageName
                };
                // add price for selected package
                if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](selectedPackage)) {
                    total_price = selectedPackage['total_price'] ? selectedPackage['total_price'] : selectedPackage['price'];
                    suborder['price'] = total_price;
                }
                Object.keys(hdpValues).forEach(function (key) {
                    if (!(hdpValues[key] instanceof FileList) && key !== 'logoImage') {
                        suborder[key] = hdpValues[key];
                    }
                });
                this.afs.collection('suborders').add(suborder).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        hdpValues.subOrderId = doc.id;
                        if (hdpValues.logoImage.length > 0) {
                            self.uploadService.uploadtoSubOrder(hdpValues.logoImage[0], doc.id, 'logo_').then(function (url) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.afs.collection('suborders').doc(doc.id).update({
                                                logoImage: {
                                                    'url': url,
                                                    'fileName': hdpValues.logoImage[0].name
                                                }
                                            }).then(function () {
                                                self.subOrderCount++;
                                                console.log("HD Photos order created. Suborder count: " + self.subOrderCount);
                                                if (_this.subOrderCount === _this.selectedPackages.length) {
                                                    _this.onSubOrdersCreation.emit(true);
                                                }
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            self.subOrderCount++;
                            console.log("HD Photos order created. Suborder count: " + self.subOrderCount);
                            if (this.subOrderCount === this.selectedPackages.length) {
                                this.onSubOrdersCreation.emit(true);
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ServicesComponent.prototype.sendEmail = function (orderId, userEmail) {
        console.log('sendEmail');
        userEmail = JSON.parse(sessionStorage.getItem('user')).email;
        var self = this;
        var data = {
            dronemedia: [],
            imageEditings: [],
            virtualStagings: [],
            floorPlans: [],
            attachments: [],
            orderId: orderId,
            customerEmail: userEmail
        };
        var files = [];
        var referenceFiles = [];
        if (this.selectedFloorplans.length > 0) {
            this.selectedFloorplans.forEach(function (fp) {
                var formData = fp.formValues;
                formData.attachments = [];
                formData.planImages.forEach(function (file) { return files.push(file); });
                if (formData.logoImage.length > 0) {
                    files.push(formData.logoImage[0]);
                }
                referenceFiles.push(formData.baseurl + 'Grundriss_moebliert.jpeg');
                if (formData.dimension === '3d' && formData.isometric) {
                    referenceFiles.push(formData.baseurl + 'Seitenansicht_moebliert.jpeg');
                }
                data.floorPlans.push(fp.formValues);
            });
        }
        if (self.selectedPackages.indexOf('2') > -1) {
            data.dronemedia.push({
                'optionalWishPilot': this.droneMediaForm.value.wishPilot
            });
        }
        if (this.selectedRetouching.length > 0) {
            this.selectedRetouching.forEach(function (retouch) {
                var formData = retouch.formValues || {};
                formData.uploadedFiles && formData.uploadedFiles.forEach(function (file) { return files.push(file); });
                data.imageEditings.push(retouch.formValues);
            });
        }
        if (this.selectedVStaging.length > 0) {
            this.selectedVStaging.forEach(function (vstaging) {
                var formData = vstaging.formValues || {};
                formData.uploadedFiles && formData.uploadedFiles.forEach(function (file) { return files.push(file); });
                data.virtualStagings.push(vstaging.formValues);
            });
        }
        if (referenceFiles.length > 0) {
            self.fetchAllFiles(referenceFiles).then(function (referenceFileContents) {
                referenceFileContents.forEach(function (fileContent) {
                    fileContent['style'] = true;
                    files.push(fileContent);
                });
                self.readAllFiles(files).then(function (fileContents) {
                    data.attachments = fileContents;
                    // this.emailSendCallable(data).subscribe();
                });
            });
        }
        else if (files.length > 0) {
            self.readAllFiles(files).then(function (fileContents) {
                data.attachments = fileContents;
                // console.log(data);
                // this.emailSendCallable(data).subscribe();
            });
        }
        else {
            // console.log(data);
            // this.emailSendCallable(data).subscribe();
        }
    };
    ServicesComponent.prototype.fetchAllFiles = function (fileList) {
        var fileContents = [];
        return new Promise(function (resolve) {
            fileList.forEach(function (file) {
                var filepath = file.url;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.responseType = 'blob';
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
                        fileContents.push(new File([xmlhttp.response], file.fileName, {
                            'type': xmlhttp.getResponseHeader('content-type')
                        }));
                        if (fileContents.length === fileList.length) {
                            resolve(fileContents);
                        }
                    }
                };
                xmlhttp.open("GET", filepath, true);
                xmlhttp.send();
            });
        });
    };
    ServicesComponent.prototype.readAllFiles = function (fileList) {
        var files = [];
        var fileNames = {};
        return new Promise(function (resolve) {
            var _loop_4 = function (i) {
                var file = fileList[i];
                var myReader = new FileReader();
                myReader.readAsDataURL(file);
                myReader.onload = function () {
                    var fileName = '';
                    fileName = file.name;
                    files.push({
                        url: myReader.result,
                        fileName: fileName,
                        style: file.style || false
                    });
                    if (files.length === fileList.length) {
                        resolve(files);
                    }
                };
            };
            for (var i = 0; i < fileList.length; i++) {
                _loop_4(i);
            }
        });
    };
    ServicesComponent.prototype.sendConfirmationEmail = function (orderId) {
        var _this = this;
        var user = JSON.parse(sessionStorage.getItem('user'));
        // if (user.sendConfirmationEmail) {
        console.log('sendConfirmationEmail');
        var self = this;
        var userEmail = JSON.parse(sessionStorage.getItem('user')).email;
        var requestData = {
            dronemedia: [],
            imageEditings: [],
            virtualStagings: [],
            floorPlans: [],
            hdphotos: [],
            visualisations: [],
            attachments: [],
            orderId: orderId,
            customerEmail: userEmail
        };
        this.os.getAllSuborders(orderId).then(function (subOrders) {
            var referenceFiles = [];
            subOrders.forEach(function (subOrder) {
                subOrder.description = subOrder.description || 'Nicht angegeben';
                switch (subOrder.orderType) {
                    case 'dronemedia':
                        subOrder.optionalWishPilot = subOrder.optionalWishPilot || 'Nicht angegeben';
                        requestData.dronemedia.push(subOrder);
                        break;
                    case 'retouching':
                        requestData.imageEditings.push(subOrder);
                        break;
                    case 'vstaging':
                        requestData.virtualStagings.push(subOrder);
                        break;
                    case 'floorplan':
                        referenceFiles.push({
                            url: subOrder.baseurl + 'Grundriss_moebliert.jpeg',
                            fileName: subOrder.id + "_style.jpeg"
                        });
                        if (subOrder.dimension === '3d' && subOrder.isometric) {
                            referenceFiles.push({
                                url: subOrder.baseurl + 'Seitenansicht_moebliert.jpeg',
                                fileName: subOrder.id + "_style_isometric.jpeg"
                            });
                        }
                        requestData.floorPlans.push(subOrder);
                        break;
                    case 'hdphotos':
                        requestData.hdphotos.push(subOrder);
                        break;
                    case 'visualisation':
                        requestData.visualisations.push(subOrder);
                        break;
                }
                subOrder.attachments.forEach(function (attachment, index) {
                    requestData.attachments.push({
                        'fileName': subOrder.id + '_' + (index + 1) + attachment.fileName.substr(attachment.fileName.lastIndexOf(".")),
                        'url': attachment.url
                    });
                });
            });
            if (referenceFiles.length > 0) {
                var files_1 = [];
                self.fetchAllFiles(referenceFiles).then(function (referenceFileContents) {
                    referenceFileContents.forEach(function (fileContent) {
                        fileContent['style'] = true;
                        files_1.push(fileContent);
                    });
                    self.readAllFiles(files_1).then(function (fileContents) {
                        fileContents.forEach(function (attachment) {
                            requestData.attachments.push(attachment);
                        });
                        _this.emailSendCallable(requestData).subscribe();
                    });
                });
            }
            else {
                _this.emailSendCallable(requestData).subscribe();
            }
        });
        // } else {
        // console.log('email confirmation service disabled');
        // }
    };
    ServicesComponent.prototype.removeItemFromCart = function (service, index) {
        var _this = this;
        this.cartItems.splice(index, 1);
        if (this.state === '2') {
            this.chosenPackages.forEach(function (pckg) {
                _this.selectedPackages.splice(_this.selectedPackages.indexOf(pckg.package_key), 1);
            });
            if (this.cartItems.length === 0) {
                this.goToPackageSelection();
                return;
            }
            this.onServiceChange(this.cartItems[0]);
        }
        else {
            this.selectedServices.splice(this.selectedServices.indexOf(service.service_key), 1);
        }
        this.userService.cartItems = this.cartItems;
        this.userService.selectedServices = this.selectedServices;
    };
    ServicesComponent.prototype.removeAllItemsFromCart = function () {
        this.cartItems = [];
        this.selectedServices = [];
        if (this.state === '2') {
            this.goToPackageSelection();
        }
        this.userService.cartItems = this.cartItems;
        this.userService.selectedServices = this.selectedServices;
    };
    ServicesComponent.prototype.fetchAvailableServices = function (filter, event) {
        var availableServices = [];
        var serviceList = [];
        this.packageList.forEach(function (pack) {
            if (serviceList.indexOf(pack.service_key) < 0) {
                availableServices.push({
                    'package_images': pack.package_images,
                    'title': pack.service_title,
                    'package_key': serviceList.length,
                    'newProperty': pack.newProperty,
                    'physicalProduct': pack.physicalProduct,
                    'service_key': pack.service_key,
                    'disabled': pack.disabled
                });
                serviceList.push(pack.service_key);
            }
            else {
                var service_index = serviceList.indexOf(pack.service_key);
                availableServices[service_index].package_images = availableServices[service_index].package_images.concat(pack.package_images);
                availableServices[service_index].newProperty = availableServices[service_index].newProperty && pack.newProperty;
                availableServices[service_index].disabled = availableServices[service_index].disabled && pack.disabled;
            }
        });
        //sort availableServices by disabled
        availableServices = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](availableServices, 'disabled');
        switch (filter) {
            case 'newProperty':
                if (event) {
                    availableServices = availableServices.filter(function (service) { return service.newProperty; });
                }
                break;
            case 'physicalProduct':
                if (event) {
                    availableServices = availableServices.filter(function (service) { return service.physicalProduct; });
                }
                break;
            default:
                break;
        }
        return availableServices;
    };
    ServicesComponent.prototype.filterNewProperties = function (event) {
        this.availablePackages = this.fetchAvailableServices('newProperty', event.checked);
    };
    ServicesComponent.prototype.filterPhysicalProducts = function (event) {
        this.availablePackages = this.fetchAvailableServices('physicalProduct', event.checked);
    };
    ServicesComponent.prototype.goToPackageSelection = function () {
        var self = this;
        // self.selectedServices = [];
        // self.cartItems = [];
        self.state = '1';
        self.availablePackages = self.fetchAvailableServices('', false);
    };
    ServicesComponent.prototype.onCheckout = function () {
        var self = this;
        if (self.state === '1') {
            self.state = '2';
            self.selectedService = self.cartItems[0].service_key;
            self.chosenPackages = self.packageList.filter(function (pack) { return pack.service_key === self.selectedService && !pack.disabled; });
        }
        else {
            self.state = '3';
        }
    };
    ServicesComponent.prototype.onServiceChange = function (item) {
        var self = this;
        self.selectedService = item.service_key;
        self.chosenPackages = self.packageList.filter(function (pack) { return pack.service_key === self.selectedService && !pack.disabled; });
    };
    ServicesComponent.prototype.goToPackageForms = function () {
        // setTimeout(() => this.wizardInitialization(), 10);
        /* setTimeout(() => {
          $('.card-wizard').bootstrapWizard();
        }); */
        this.state = "3";
    };
    ServicesComponent.prototype.goBack = function (state) {
        var _this = this;
        var self = this;
        switch (state) {
            case '1':
                self.state = '1';
                this.realestateservice.add = false;
                break;
            case '2':
                self.reset = true;
                setTimeout(function () {
                    self.reset = false;
                    self.state = '2';
                }, 10);
                self.selectedPackages = [];
                this.realestateservice.add = false;
                self.packageSelectHandler();
                break;
            case '3':
                self.state = '3';
                setTimeout(function () { return _this.wizardInitialization(); }, 10);
                break;
        }
    };
    ServicesComponent.prototype.areAllFormsValid = function () {
        var self = this;
        var canContinue = true;
        self.selectedFloorplans.forEach(function (plan) {
            if (plan.form.invalid) {
                plan.validate = !plan.validate;
                canContinue = false;
            }
        });
        // retouching form validation
        self.selectedRetouching.forEach(function (retouching) {
            if (retouching.form.invalid) {
                retouching.validate = !retouching.validate;
                canContinue = false;
            }
        });
        // virtual staging form valdiation
        self.selectedVStaging.forEach(function (staging) {
            if (staging.form.invalid) {
                staging.validate = !staging.validate;
                canContinue = false;
            }
        });
        self.selectedHDPhotos.forEach(function (hdPhoto) {
            if (hdPhoto.form.invalid) {
                hdPhoto.validate = !hdPhoto.validate;
                canContinue = false;
            }
        });
        self.selected3dVisualisation.forEach(function (visualisation) {
            if (visualisation.form.invalid) {
                visualisation.validate = !visualisation.validate;
                canContinue = false;
            }
        });
        return canContinue;
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_2__["RealestateService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _app_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_10__["AngularFireFunctions"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_11__["OrdersService"],
            _app_services_global_service__WEBPACK_IMPORTED_MODULE_14__["GlobalService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/settings/index.ts":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return _settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"]; });




/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow card cgrid\">\n  <div class=\"card-header\">\n    <a class=\"my-link\" (click)=\"active = !active\" [attr.aria-expanded]=\"active\" aria-controls=\"collapse1\">\n      <h5 class=\"card-title text-left wsn\">Information</h5>\n    </a>\n  </div>\n  <div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"settingsForm\">\n        <div class=\"row\">\n          <div class=\"col-1 position\">\n            <mat-checkbox formControlName=\"sendConfirmationEmail\" color=\"primary\" (change)=\"submitHandler()\">\n            </mat-checkbox>\n          </div>\n          <div class=\"col-6\">\n            Emailbestätigungen\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(auth, afs, fb) {
        this.auth = auth;
        this.afs = afs;
        this.fb = fb;
        this.active = true; // Initial State der einklappbaren Card
        this.settingsForm = this.fb.group({
            sendConfirmationEmail: ['']
        });
    }
    /**
     * Submit handler for settings form. Updates the config document in firebase
     */
    SettingsComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afs.doc("users/" + this.auth.uid).update(this.settingsForm.value)];
                    case 1:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.success = false;
                        }, 1500);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Preload data for user profile
     */
    SettingsComponent.prototype.preloadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.afs.doc("users/" + this.auth.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                                _this.settingsForm.patchValue(data);
                            }))
                                .subscribe()];
                    case 1:
                        _a.settings = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.preloadData();
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.settings.unsubscribe(); // Missing or insufficient permissions Error, Memory Leak fix
    };
    SettingsComponent.prototype.onChanges = function () {
        this.settingsForm.get('sendConfirmationEmail').valueChanges.subscribe(this.submitHandler());
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixed-cart/fixed-cart.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/fixed-cart/fixed-cart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-container .cart-item-thumbnail{\n    height: 40px;\n    width: 40px;\n}\n.cart-container .remove-item-icon{\n    cursor: pointer;\n}\n.cart-container .cart-item{\n    margin: 0.5rem 0 0.5rem 0;\n    border-bottom: 1px solid rgba(153, 153, 153, 0.3);\n    color: #999999;\n    padding: 12px 0;\n}\n.fixed-plugin .cart-icon{\n    color: #FFF !important;\n    margin: 1rem 0 1rem 0;\n}\n.fixed-plugin .text-default{\n    color: #000;\n}\n.fixed-plugin .item-count{\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 9px;\n    background: #22bca4;\n    color: #fff;\n    min-width: 20px;\n    padding: 1px 5px;\n    height: 20px;\n    border-radius: 10px;\n    text-align: center;\n    line-height: 19px;\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpeGVkLWNhcnQvZml4ZWQtY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpeGVkLWNhcnQvZml4ZWQtY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0tdGh1bWJuYWlse1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucmVtb3ZlLWl0ZW0taWNvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXtcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMyk7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgcGFkZGluZzogMTJweCAwO1xufVxuLmZpeGVkLXBsdWdpbiAuY2FydC1pY29ue1xuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xufVxuLmZpeGVkLXBsdWdpbiAudGV4dC1kZWZhdWx0e1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmZpeGVkLXBsdWdpbiAuaXRlbS1jb3VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgYmFja2dyb3VuZDogIzIyYmNhNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/fixed-cart/fixed-cart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixed-cart/fixed-cart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\n<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n            <i class=\"cart-icon material-icons\">shopping_cart</i>\n            <span [hidden]=\"cartItems.length < 1\" class=\"item-count\">{{cartItems.length}}</span>\n        </a>\n        <div class=\"dropdown-menu text-center\">\n            <div class=\"cards pt-3 pb-3\">\n                <h4 class=\"card-title\">\n                    Warenkorb\n                </h4>\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <div class=\"mt-3 mb-4 cart-container\" *ngIf=\"cartItems && cartItems.length > 0; else noItems\">\n                        <div class=\"text-truncate row align-items-center cart-item text-left\">\n                            <div class=\"col-3\">\n                                <strong>Artikel</strong>\n                            </div>\n                            <div class=\"col-9\">\n                                <strong>Beschreibung</strong>\n                            </div>\n                        </div>\n                        <div *ngFor=\"let item of cartItems; let index = index\"\n                            class=\"text-truncate row align-items-center text-left cart-item\">\n                            <div class=\"col-3\">\n                                <img class=\"cart-item-thumbnail\" src=\"../../../assets/images/{{item.package_images[0]}}\"\n                                    alt=\"Card image cap\">\n                            </div>\n                            <div class=\"col-7\">\n                                {{item.title}}\n                            </div>\n                            <div class=\"col-2\">\n                                <i class=\"material-icons text-danger remove-item-icon\"\n                                    (click)=\"parent.removeItemFromCart(item, index)\">delete</i>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n                <ng-template #noItems>\n                    <p class=\"pt-3 text-default text-center\">\n                        Ihr Warenkorb ist leer.\n                    </p>\n                </ng-template>\n                <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-sm btn-primary\"\n                    (click)=\"parent.onCheckout()\">\n                    Weiter\n                </button>\n                <button *ngIf=\"cartItems && cartItems.length > 0\" class=\"btn btn-sm btn-danger\"\n                    (click)=\"parent.removeAllItemsFromCart()\">\n                    Warenkorb leeren\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/fixed-cart/fixed-cart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/fixed-cart/fixed-cart.component.ts ***!
  \***********************************************************/
/*! exports provided: FixedCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedCartComponent", function() { return FixedCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedCartComponent = /** @class */ (function () {
    function FixedCartComponent() {
    }
    FixedCartComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FixedCartComponent.prototype, "cartItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FixedCartComponent.prototype, "parent", void 0);
    FixedCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixed-cart',
            template: __webpack_require__(/*! ./fixed-cart.component.html */ "./src/app/shared/fixed-cart/fixed-cart.component.html"),
            styles: [__webpack_require__(/*! ./fixed-cart.component.css */ "./src/app/shared/fixed-cart/fixed-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedCartComponent);
    return FixedCartComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixed-cart/fixed-cart.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/fixed-cart/fixed-cart.module.ts ***!
  \********************************************************/
/*! exports provided: FixedCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedCartModule", function() { return FixedCartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fixed_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-cart.component */ "./src/app/shared/fixed-cart/fixed-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FixedCartModule = /** @class */ (function () {
    function FixedCartModule() {
    }
    FixedCartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fixed_cart_component__WEBPACK_IMPORTED_MODULE_2__["FixedCartComponent"]],
            exports: [_fixed_cart_component__WEBPACK_IMPORTED_MODULE_2__["FixedCartComponent"]]
        })
    ], FixedCartModule);
    return FixedCartModule;
}());



/***/ }),

/***/ "./src/app/shared/form.validators.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/form.validators.ts ***!
  \*******************************************/
/*! exports provided: passwordValidator, repeatPasswordValidator, noRepeatPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatPasswordValidator", function() { return repeatPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noRepeatPasswordValidator", function() { return noRepeatPasswordValidator; });
function passwordValidator() {
    return function (control) {
        var lowerCase = /(.*[a-z].*)/.test(control.value);
        var upperCase = /(.*[A-Z].*)/.test(control.value);
        var digit = /(.*\d.*)/.test(control.value);
        var length = control.value.length >= 6 && control.value.length <= 32;
        var validation = null;
        if (!length || !lowerCase || !upperCase || !digit) {
            validation = {
                'passwordError': {
                    value: 'Password not meeting requirements',
                    length: length,
                    lowerCase: lowerCase,
                    upperCase: upperCase,
                    digit: digit
                }
            };
        }
        return validation;
    };
}
function repeatPasswordValidator(firstPassword) {
    return function (control) {
        var validation = null;
        if (firstPassword.value !== control.value) {
            validation = {
                'repeatPasswordError': {
                    value: 'Passwörter stimmen nicht überein!'
                }
            };
        }
        return validation;
    };
}
function noRepeatPasswordValidator(firstPassword) {
    return function (control) {
        var validation = null;
        if (firstPassword.value === control.value) {
            validation = {
                'noRepeatPasswordError': {
                    value: 'New Password cannot be same as existing.'
                }
            };
        }
        return validation;
    };
}


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" [routerLink]=\"getPath()\"> {{getTitle()}}</a>\n    </div>\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"'profile'\">\n            <i class=\"material-icons\">person</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"'settings'\">\n            <i class=\"material-icons\">settings</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Settings</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" target=\"_blank\" href=\"https://www.imogent.de/kontakt/\">\n            <i class=\"material-icons\">help</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Help</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link clickable\" (click)=\"loader.logout()\">\n            <i class=\"material-icons\">power_settings_new</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Logout</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router, loader) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.loader = loader;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                // $('.sidebar').addClass('animation');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            if (typeof $toggle !== 'undefined') {
                $toggle.classList.remove('toggled');
            }
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        switch (titlee) {
            case '/settings':
                return 'Einstellungen';
            case '/profile':
                return 'Profil';
            case '/changepassword':
                return 'Passwort ändern';
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(!authService.registering && authService.emailVerified)\">\n  <ng-container *ngIf=\"authService.myUserObservable as user; else loading\">\n    <div class=\"logo\">\n      <a [routerLink]=\"'home'\" class=\"simple-text logo-mini\">\n        <div class=\"logo-img\">\n          <!-- <img src=\"/assets/img/angular2-logo-white.png\" /> -->\n          <img src=\"/assets/images/favicon.ico\">\n        </div>\n      </a>\n      <a [routerLink]=\"'home'\" class=\"simple-text logo-normal\">\n        IMOGENT\n      </a>\n    </div>\n\n\n    <div class=\"sidebar-wrapper\">\n\n      <div class=\"user\">\n        <div class=\"user-info\">\n          <a data-toggle=\"collapse\" href=\"#user-settings\" class=\"collapsed\">\n            <span>\n              <strong>{{ user.firstName }} {{ user.lastName }}</strong>\n              <b class=\"caret\"></b>\n            </span>\n            <span *ngIf=\"user.role == 'Kunde'\" class=\"user-role mt-1\">{{ user.company }}</span>\n            <span *ngIf=\"user.role != 'Kunde'\" class=\"user-role mt-1\">{{ user.role }}</span>\n          </a>\n          <div class=\"collapse\" id=\"user-settings\">\n            <ul class=\"nav\">\n              <li class=\"nav-item\">\n                <a [routerLink]=\"'profile'\" class=\"nav-link\">\n                  <i class=\"material-icons\">person</i>\n                  <span class=\"sidebar-normal\">Mein Profil</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a [routerLink]=\"'changepassword'\" class=\"nav-link\">\n                  <i class=\"material-icons\">lock</i>\n                  <span class=\"sidebar-normal\">Passwort ändern</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"isMobileMenu()\">\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link clickable\" (click)=\"loader.logout()\">\n              <i class=\"material-icons\">power_settings_new</i>\n              <p>\n                <span class=\"d-lg-none d-md-block\">Logout</span>\n              </p>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n          <ng-container *ngIf=\"menuitem.roles[0] == 'all' || inArray(user.role, menuitem.roles)\">\n            <!--If is a single link-->\n            <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n              <i class=\"material-icons\">{{menuitem.icontype}}</i>\n              <p>{{menuitem.title}}</p>\n            </a>\n            <!--If it have a submenu-->\n            <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\"\n              class=\"nav-link\">\n              <i class=\"material-icons\">{{menuitem.icontype}}</i>\n              <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n            </a>\n\n            <!--Display the submenu items-->\n            <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n              <ul class=\"nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\"\n                  class=\"nav-item nav-item-transform\">\n                  <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </ng-container>\n        </li>\n        <!-- Display some Official links -->\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a data-toggle=\"collapse\" href=\"#rechtliches\" (click)=\"updatePS()\" class=\"nav-link\">\n            <i class=\"material-icons\">grid_on</i>\n            <p>Rechtliches<b class=\"caret\"></b></p>\n          </a>\n          <div id=\"rechtliches\" class=\"collapse\">\n            <!-- Impressum -->\n            <ul class=\"nav\">\n              <li class=\"nav-item\">\n                <a href=\"https://www.imogent.de/impressum/\" target=\"_blank\" rel=\"noopener\" class=\"nav-link\">\n                  <i class=\"material-icons\">copyright</i>\n                  <span class=\"sidebar-normal\">Impressum</span>\n                </a>\n              </li>\n            </ul>\n            <!-- AGB -->\n            <ul class=\"nav\">\n              <li class=\"nav-item\">\n                <a href=\"https://www.imogent.de/agb/\" target=\"_blank\" rel=\"noopener\" class=\"nav-link\">\n                  <i class=\"material-icons\">assignment</i>\n                  <span class=\"sidebar-normal\">AGB</span>\n                </a>\n              </li>\n            </ul>\n            <!-- Datenschutz -->\n            <ul class=\"nav\">\n              <li class=\"nav-item\">\n                <a href=\"https://www.imogent.de/datenschutz/\" target=\"_blank\" rel=\"noopener\" class=\"nav-link\">\n                  <i class=\"material-icons\">security</i>\n                  <span class=\"sidebar-normal\">Datenschutz</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _app_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/sidebar/sidebar.service */ "./src/app/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Menu Items
var ROUTES = [{
        path: '/home',
        title: 'Startseite',
        type: 'link',
        icontype: 'dashboard',
        roles: ['all'],
    },
    {
        path: '/orderoverview',
        title: 'Aufträge',
        type: 'link',
        icontype: 'business_center',
        roles: ['all'],
    },
    {
        path: '/services',
        title: 'Service buchen',
        type: 'link',
        icontype: 'note_add',
        roles: ['Kunde', 'Administrator'],
    },
    {
        path: '/realestate',
        title: 'Immobilien',
        type: 'link',
        icontype: 'store',
        roles: ['Kunde', 'Administrator'],
    },
    {
        path: '/payments',
        title: 'Zahlungen',
        type: 'link',
        icontype: 'credit_card',
        roles: ['all'],
    },
    {
        path: '/faq',
        title: 'Anforderungen',
        type: 'link',
        icontype: 'question_answer',
        roles: ['Dienstleister', 'Administrator'],
    },
    {
        path: '/users',
        title: 'User Management',
        type: 'link',
        icontype: 'supervisor_account',
        roles: ['Administrator']
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarservice, authService, loader) {
        this.sidebarservice = sidebarservice;
        this.authService = authService;
        this.loader = loader;
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent.prototype.inArray = function (val, arr) {
        return arr.indexOf(val) > -1;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_app_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.service.ts":
/*!********************************************!*\
  !*** ./src/app/sidebar/sidebar.service.ts ***!
  \********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.toggled = true;
    }
    SidebarService.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    SidebarService.prototype.getSidebarState = function () {
        return this.toggled;
    };
    SidebarService.prototype.setSidebarState = function (state) {
        this.toggled = state;
    };
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/suborder-list/suborder-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/suborder-list/suborder-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym9yZGVyLWxpc3Qvc3Vib3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/suborder-list/suborder-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/suborder-list/suborder-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Suborder List -->\n<ng-container *ngIf=\"auth.myUserObservable as user; else loading\">\n  <div *ngIf=\"user.role === 'Dienstleister'\">\n    <!-- Only show this page to the pilots after they were verified -->\n    <ng-container *ngIf=\"user.pilotVerified || !user.dronepilot; else notVerified\">\n      <div *ngIf=\"suborder_state == 'detail-view'\" class=\"shadow card cgrid\">\n        <div class=\"card-header\">\n          <!-- Sub orders navigation button -->\n          <button class=\"btn btn-sm btn-primary float-right\" (click)=\"suborder_state = 'list-view';\">Zurück</button>\n          <h5 class=\"mb-0\" *ngIf=\"os.currentSuborder != undefined\">\n            <strong>{{ os.currentSuborder.createdOn.toDate() | date: 'dd.MM.yy'}}:</strong>\n            {{ os.currentSuborder.Desc }} in {{ os.currentSuborder.areaDesc }}</h5>\n        </div>\n        <div class=\"card-body\">\n          <!-- Show suborder detail component -->\n          <app-suborder-overview *ngIf=\"suborder_state == 'detail-view'\" [realestateId]=\"realestateId\"\n            [parentContext]=\"this\" [suborderId]=\"suborderId\" [createdById]=\"createdById\">\n          </app-suborder-overview>\n        </div>\n      </div>\n\n      <!-- Default: Show 4 lists to the pilot -->\n      <div *ngIf=\"suborder_state === 'list-view'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"shadow card cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"mb-0\">Globale Auftragsdatenbank</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">Hier findest du alle offenen unzugewiesenene Aufträge, die du\n                  annehmen kannst.\n                </p>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Auftragstyp</th>\n                        <th>Auftrag vom</th>\n                        <th>Immobilie</th>\n                        <th>Region</th>\n                        <th> </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <!-- todo: os.allUnassignedSuborders (suborder-overview) -->\n                      <ng-container *ngIf=\"os.allSuborders as orders; else loadingSmall\">\n                        <ng-container *ngFor=\"let order of orders;\">\n                          <!-- Filter for skills -->\n                          <tr\n                            *ngIf=\"(user.dronepilot && order.orderType === 'dronemedia') || (user.retouching && order.orderType === 'retouching') || (user.floorplan && order.orderType === 'floorplan') || (user.vstaging && order.orderType === 'vstaging') || (user.visualisation && order.orderType === 'visualisation')\">\n                            <td>\n                              {{gs.translateAppListStrings('order_type_list', order.orderType)}}\n                            </td>\n                            <td>\n                              <ng-container *ngIf=\"order.createdOn\">\n                                {{ order.createdOn.toDate() | date: 'dd.MM.yy'}}\n                              </ng-container>\n                            </td>\n                            <td>{{ order.Desc }}</td>\n                            <td>{{ order.areaDesc }}</td>\n                            <!-- Details -->\n                            <!-- Not passing the realestateId here because it is not required in this status type of order -->\n                            <td><button class=\"btn btn-primary btn-sm align-self-center\"\n                                (click)=\"suborderId = order.id; realestateId = ''; createdById = ''; suborder_state = 'detail-view'\">Details</button>\n                            </td>\n                            <ng-template #orderStatus>\n                              <span [ngSwitch]=\"order.status\">\n                                <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                                  In Prüfung\n                                </span>\n                                <span class=\"text-danger\" *ngSwitchCase=\"'pending'\">\n                                  Wartet auf Aufnahmen\n                                </span>\n                                <span class=\"text-warning\" *ngSwitchCase=\"'checked'\">\n                                  In Vermittlung\n                                </span>\n                                <span class=\"text-warning\" *ngSwitchCase=\"'requested'\">\n                                  Angefragt\n                                </span>\n                                <span class=\"text-warning\" *ngSwitchCase=\"'processing'\">\n                                  In Bearbeitung\n                                </span>\n                                <span class=\"text-danger\" *ngSwitchCase=\"'uploaded'\">\n                                  In Nachbearbeitung\n                                </span>\n                                <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n                                  Abgeschlossen\n                                </span>\n                                <span *ngSwitchDefault>\n                                  {{ order.status }}\n                                </span>\n                              </span>\n                            </ng-template>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class=\"border-bottom bbcw\"></div>\n            <div class=\"shadow card cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"mb-0\">Angefragte Aufträge</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">Deine angefragten Aufträge. Die Prüfung der Zuweisung dauert in der\n                  Regel nicht lange.\n                </p>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Auftragstyp</th>\n                        <th>Auftrag vom</th>\n                        <th>Immobilie</th>\n                        <th>Region</th>\n                        <th> </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <ng-container *ngIf=\"os.myRequestedSuborders as orders; else loadingSmall\">\n                        <ng-container *ngFor=\"let order of orders;\">\n                          <!-- Filter for skills -->\n                          <tr\n                            *ngIf=\"(user.dronepilot && order.orderType === 'dronemedia') || (user.retouching && order.orderType === 'retouching') ||(user.floorplan && order.orderType === 'floorplan') || (user.vstaging && order.orderType === 'vstaging') || (user.visualisation && order.orderType === 'visualisation')\">\n                            <td>\n                              {{gs.translateAppListStrings('order_type_list', order.orderType)}}\n                            </td>\n                            <td>\n                              <ng-container *ngIf=\"order.createdOn\">\n                                {{ order.createdOn.toDate() | date: 'dd.MM.yy'}}\n                              </ng-container>\n                            </td>\n                            <td>{{ order.Desc }}</td>\n                            <td>{{ order.areaDesc }}</td>\n                            <!-- Details -->\n                            <td><button class=\"btn btn-primary btn-sm align-self-center\"\n                                (click)=\"suborderId = order.id; realestateId = ''; createdById = ''; suborder_state = 'detail-view'\">Details</button>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"border-bottom bbcw\"></div>\n            <div class=\"shadow card cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"mb-0\">Zu bearbeitende Aufträge</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">Dir zugeordnete offene Aufträge.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Auftragstyp</th>\n                        <th>Auftrag vom</th>\n                        <th>Immobilie</th>\n                        <th>Region</th>\n                        <th> </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <ng-container *ngIf=\"os.myAssignedSuborders as orders; else loadingSmall\">\n                        <ng-container *ngFor=\"let order of orders;\">\n                          <!-- Filter for skills -->\n                          <tr\n                            *ngIf=\"(user.dronepilot && order.orderType === 'dronemedia') || (user.retouching && order.orderType === 'retouching') ||(user.floorplan && order.orderType === 'floorplan') || (user.vstaging && order.orderType === 'vstaging') || (user.visualisation && order.orderType === 'visualisation')\">\n                            <td>\n                              {{gs.translateAppListStrings('order_type_list', order.orderType)}}\n                            </td>\n                            <td>\n                              <ng-container *ngIf=\"order.createdOn\">\n                                {{ order.createdOn.toDate() | date: 'dd.MM.yy'}}\n                              </ng-container>\n                            </td>\n                            <td>{{ order.Desc }}</td>\n                            <td>{{ order.areaDesc }}</td>\n                            <!-- Details -->\n                            <td><button class=\"btn btn-primary btn-sm align-self-center\" (click)=\"suborderId = order.id;\n                                                                realestateId = order.realestateId;\n                                                                createdById = order.createdBy;\n                                                                suborder_state = 'detail-view'\">Auftrag\n                                bearbeiten</button>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n\n                    </tbody>\n                  </table>\n\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"border-bottom bbcw\"></div>\n            <div class=\"shadow card cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"mb-0\">Abgeschlossene Aufträge</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">Deine erledigten Aufträge. Diese werden im Anschluss von IMOGENT\n                  überprüft und an den Auftragsgeber weitergeleitet.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Auftragstyp</th>\n                        <th>Auftrag vom</th>\n                        <th>Immobilie</th>\n                        <th>Region</th>\n                        <th> </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <ng-container *ngIf=\"os.myUploadedSuborders as orders; else loadingSmall\">\n                        <ng-container *ngFor=\"let order of orders;\">\n                          <!-- Filter for skills -->\n                          <tr\n                            *ngIf=\"(user.dronepilot && order.orderType === 'dronemedia') || (user.retouching && order.orderType === 'retouching') ||(user.floorplan && order.orderType === 'floorplan') || (user.vstaging && order.orderType === 'vstaging') || (user.visualisation && order.orderType === 'visualisation')\">\n                            <td>\n                              {{gs.translateAppListStrings('order_type_list', order.orderType)}}\n                            </td>\n                            <td>\n                              <ng-container *ngIf=\"order.createdOn\">\n                                {{ order.createdOn.toDate() | date: 'dd.MM.yy'}}\n                              </ng-container>\n                            </td>\n                            <td>{{ order.Desc }}</td>\n                            <td>{{ order.areaDesc }}</td>\n                            <!-- Details -->\n                            <td><button class=\"btn btn-primary btn-sm align-self-center\"\n                                (click)=\"suborderId = order.id ; realestateId = order.realestateId; createdById= order.createdBy; suborder_state = 'detail-view'\">Details</button>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"border-bottom bbcw\"></div>\n            <div class=\"shadow card cgrid\">\n              <div class=\"card-header\">\n                <h5 class=\"mb-0\">Geprüfte Aufträge</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">Deine geprüften Aufträge.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Auftragstyp</th>\n                        <th>Auftrag vom</th>\n                        <th>Immobilie</th>\n                        <th>Region</th>\n                        <th> </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <ng-container *ngIf=\"os.myCompletedSuborders as orders; else loadingSmall\">\n                        <ng-container *ngFor=\"let order of orders;\">\n                          <!-- Filter for skills -->\n                          <tr\n                            *ngIf=\"(user.dronepilot && order.orderType === 'dronemedia') || (user.retouching && order.orderType === 'retouching') ||(user.floorplan && order.orderType === 'floorplan') || (user.vstaging && order.orderType === 'vstaging') || (user.visualisation && order.orderType === 'visualisation')\">\n                            <td>\n                              {{gs.translateAppListStrings('order_type_list', order.orderType)}}\n                            </td>\n                            <td>\n                              <ng-container *ngIf=\"order.createdOn\">\n                                {{ order.createdOn.toDate() | date: 'dd.MM.yy'}}\n                              </ng-container>\n                            </td>\n                            <td>{{ order.Desc }}</td>\n                            <td>{{ order.areaDesc }}</td>\n                            <!-- Details -->\n                            <td><button class=\"btn btn-primary btn-sm align-self-center\"\n                                (click)=\"suborderId = order.id ;realestateId = order.realestateId; createdById= order.createdBy; suborder_state = 'detail-view'\">Details</button>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3 d-none d-lg-block\">\n          <div class=\"shadow card fluid cgrid\">\n            <div class=\"card-header\">\n              <h5 class=\"card-title text-left wsn\">Information</h5>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"card-text text-left\">Wenn du Fragen zur Funktionsweise der Auftragsvergabe hast,\n                dann zögere nicht uns zu kontakieren.</p>\n              <a href=\"mailto:kontakt@imogent.com?subject=Problem%20beim%20Daten%20einpflegen\"\n                class=\"my-link\">Kontakt</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <!-- Showing information about when the pilots will be able to see this page -->\n  <ng-template #notVerified>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"shadow card fluid cgrid\">\n          <div class=\"card-header\">\n            <h5 class=\"card-title text-left wsn\">Achtung</h5>\n          </div>\n          <div class=\"card-body\">\n            <p class=\"card-text text-left\" style=\"color: orange;\">Ihre Unterlagen sind noch nicht überprüft\n              worden. Sobald wir dies erledigt haben, wird die Auftragsübersicht freigeschaltet und hier\n              erscheinen.\n            </p>\n            <p class=\"card-text text-left\">In der Zwischenzeit empfehlen wir als Lektüre unsere\n              Auftragsanforderungen. Diese sind kategoriert nach Auftragstyp und geben eine genaue\n              Anleitung was je nach Auftragstyp zu tun ist.</p>\n            <a routerLink=\"/faq\" class=\"my-link\">Jetzt ansehen</a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Right small column -->\n      <div class=\"col-3 d-none d-lg-block\">\n        <div class=\"shadow card fluid cgrid\">\n\n          <div class=\"card-header\">\n            <h5 class=\"card-title text-left wsn\">Anforderungen</h5>\n          </div>\n\n          <div class=\"card-body\">\n            <p class=\"card-text text-left\">Bitte lese dir bevor du deinen ersten Auftrag bearbeitest unsere\n              Auftragsanforderungen durch. Diese sind kategoriert nach Auftragstyp und geben dir eine\n              genaue Anleitung was zu tun ist.</p>\n            <a routerLink=\"/faq\" class=\"my-link\">Jetzt ansehen</a>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </ng-template>\n\n  <div *ngIf=\"user.role != 'Dienstleister'\">\n    <!-- Display the sub order list table inside a card -->\n    <div class=\"shadow card cgrid\">\n      <div class=\"card-header\">\n        <!-- Sub orders navigation button -->\n        <button *ngIf=\"suborder_state == 'detail-view'\" class=\"btn btn-sm btn-primary float-right\"\n          (click)=\"suborder_state = 'list-view';\">Zurück</button>\n        <h5 class=\"mb-0\">Dienstleistungen</h5>\n      </div>\n      <div class=\"card-body\">\n        <!-- Show suborder detail component -->\n        <app-suborder-overview *ngIf=\"suborder_state == 'detail-view'\" [realestateId]=\"realestateId\"\n          [suborderId]=\"suborderId\" [assignedTo]=\"assignedTo\">\n        </app-suborder-overview>\n        <!-- Table that shows the customer's suborders -->\n        <div class=\"table-responsive\" *ngIf=\"suborder_state == 'list-view'\">\n          <table class=\"table table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Auftragstyp</th>\n                <th>Status</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <!-- todo: os.allSubordersId (suborder-overview) -->\n              <ng-container *ngIf=\"os.allSuborders as s_orders; else loading\">\n                <ng-container *ngFor=\"let s_order of s_orders;\">\n                  <tr>\n                    <!-- Order type -->\n                    <td>\n                      {{gs.translateAppListStrings('order_type_list', s_order.orderType)}}\n                    </td>\n                    <!-- Order status -->\n                    <td>\n                      <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n                    </td>\n                    <td><button class=\"btn btn-primary btn-sm align-self-center float-right\"\n                        (click)=\"suborderId = s_order.id; realestateId = s_order.realestateId; assignedTo = s_order.assignedTo; suborder_state = 'detail-view'\">Details</button>\n                    </td>\n                    <ng-template #orderStatus>\n                      <span [ngSwitch]=\"s_order.status\">\n                        <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n                          In Prüfung\n                        </span>\n                        <span class=\"text-danger\" *ngSwitchCase=\"'pending'\">\n                          Wartet auf Aufnahmen\n                        </span>\n                        <span class=\"text-warning\" *ngSwitchCase=\"'checked'\">\n                          In Vermittlung\n                        </span>\n                        <div *ngSwitchCase=\"'requested'\">\n                          <span *ngIf=\"user.role == 'Administrator'\" class=\"text-warning\">\n                            Angefragt\n                          </span>\n                          <span *ngIf=\"user.role == 'Kunde'\" class=\"text-warning\">\n                            In Vermittlung\n                          </span>\n                        </div>\n                        <span class=\"text-warning\" *ngSwitchCase=\"'processing'\">\n                          In Bearbeitung\n                        </span>\n                        <div *ngSwitchCase=\"'uploaded'\">\n                          <span *ngIf=\"s_order.orderType == 'dronemedia'\" class=\"text-danger\">\n                            In Nachbearbeitung\n                          </span>\n                          <span *ngIf=\"s_order.orderType != 'dronemedia'\" class=\"text-danger\">\n                            In Prüfung\n                          </span>\n                        </div>\n                        <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n                          Abgeschlossen\n                        </span>\n                        <span class=\"text-danger\" *ngSwitchCase=\"'canceled'\">\n                          Storniert\n                        </span>\n                        <span *ngSwitchDefault>\n                          {{ s_order.status }}\n                        </span>\n                      </span>\n                    </ng-template>\n                  </tr>\n                </ng-container>\n              </ng-container>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <!-- CSS Loading Spinner -->\n  <div class=\"lds-ring\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/suborder-list/suborder-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/suborder-list/suborder-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SuborderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuborderListComponent", function() { return SuborderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/global.service */ "./src/app/_services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuborderListComponent = /** @class */ (function () {
    // userRef: any;
    function SuborderListComponent(os, auth, loader, gs) {
        this.os = os;
        this.auth = auth;
        this.loader = loader;
        this.gs = gs;
    }
    SuborderListComponent.prototype.ngOnInit = function () {
        this.suborder_state = 'list-view';
        if (this.auth.role !== 'Dienstleister') {
            this.loader.getSubordersID(this.orderId);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SuborderListComponent.prototype, "orderId", void 0);
    SuborderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suborder-list',
            template: __webpack_require__(/*! ./suborder-list.component.html */ "./src/app/suborder-list/suborder-list.component.html"),
            styles: [__webpack_require__(/*! ./suborder-list.component.css */ "./src/app/suborder-list/suborder-list.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            _app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], SuborderListComponent);
    return SuborderListComponent;
}());



/***/ }),

/***/ "./src/app/suborder-overview/suborder-overview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/suborder-overview/suborder-overview.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin:5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vib3JkZXItb3ZlcnZpZXcvc3Vib3JkZXItb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N1Ym9yZGVyLW92ZXJ2aWV3L3N1Ym9yZGVyLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIG1hcmdpbjo1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/suborder-overview/suborder-overview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/suborder-overview/suborder-overview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"auth.myUserObservable as user; else loading\">\n  <ng-container *ngIf=\"os.currentSuborder as suborder; else loading\">\n    <ng-container *ngIf=\"suborder !== undefined\">\n      <ng-container *ngIf=\"user.role !== 'Dienstleister'\">\n        <div class=\"row\">\n          <!-- Left column: Order-Details -->\n          <!-- Common order details for every type of order -->\n          <div class=\"col-12 col-md-6\">\n            <h5 class=\"card-title text-left wsn\">Informationen:</h5>\n            <!-- todo: suborder (suborder-overview) -->\n            <p class=\"mb-1\"><strong>Eingegangen am:</strong>\n              {{ suborder.createdOn.toDate() | date: 'dd.MM.yyyy HH:mm'}}</p>\n            <!-- todo: os.allSubordersId (suborder-overview) -->\n            <p class=\"mb-1\"><strong>ID:</strong> {{ suborder.id }} (bitte geben Sie diese bei\n              Supportanfragen an)\n            </p>\n            <p class=\"mb-1\"><strong>Auftragstyp:\n              </strong>{{gs.translateAppListStrings('order_type_list', suborder.orderType)}}</p>\n            <p class=\"mb-1\"><strong>Aktueller Status:</strong>\n              <ng-container *ngTemplateOutlet=\"orderStatus\"></ng-container>\n            </p>\n            <!-- todo: os.allSubordersId (suborder-overview) -->\n            <p class=\"mb-1\" *ngIf=\"suborder.price\"><strong>Preis:</strong> {{suborder.price}} €\n            </p>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"user.role === 'Dienstleister'\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-6\">\n            <h5 class=\"card-title text-left wsn\">Auftrags-Details:</h5>\n            <p class=\"mb-1\"><strong>Eingegangen am:</strong>\n              {{ suborder.createdOn.toDate() | date: 'dd.MM.yyyy'}}</p>\n            <p class=\"mb-1\"><strong>ID:</strong> {{ suborder.id }} (bitte geben Sie diese bei\n              Supportanfragen an)\n              <p><strong>Auftragstyp: </strong>{{gs.translateAppListStrings('order_type_list', suborder.orderType)}}</p>\n              <!-- <h5 class=\"card-title text-left wsn\">Ihre Verdienstmöglichkeit:</h5>\n            <p><strong>Auftragshonorar:</strong> 130,00 €</p> -->\n          </div>\n          <div class=\"col-12 col-md-6\">\n            <h5 class=\"card-title text-left wsn\">Immobilien-Details:</h5>\n            <ng-container\n              *ngIf=\"suborder.status == 'checked' || suborder.status == 'requested' || suborder.status == 'pending'\">\n              <p class=\"mb-1\"><strong>Objektbeschreibung:</strong> {{ suborder.Desc }}</p>\n              <p class=\"mb-1\"><strong>Ort:</strong> {{ suborder.areaDesc }}</p>\n            </ng-container>\n            <ng-container\n              *ngIf=\"suborder.status == 'processing' || suborder.status == 'uploaded' || suborder.status == 'completed'\">\n              <ng-container *ngIf=\"res.currentRealestate\">\n                <p class=\"mb-1\"><strong>Objekt-Titel:</strong> {{ res.currentRealestate.title }}</p>\n                <p><strong>Adresse:</strong> {{ res.currentRealestate.street }}\n                  {{ res.currentRealestate.streetnumber }},\n                  {{ res.currentRealestate.postalcode }} {{res.currentRealestate.city }}</p>\n              </ng-container>\n              <ng-container *ngIf='createdByUserData | async as Kunde;'>\n                <h5 class=\"card-title text-left wsn\">Kunde-Details:</h5>\n                <p class=\"mb-1\"><strong>Name:</strong> {{ Kunde.firstName }} {{ Kunde.lastName }} </p>\n                <p class=\"mb-1\"><strong>Telefon-Nummer:</strong> {{ Kunde.phone }}</p>\n                <p class=\"mb-1\"><strong>E-Mail:</strong> {{ Kunde.email }}</p>\n                <p><strong>Erreichbarkeit:</strong> {{ Kunde.reachability }}</p>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <hr />\n      <!-- Placeholder for suborders detail-->\n      <ng-container *ngTemplateOutlet=\"orderType\"></ng-container>\n      <!-- Placeholder for order action buttons -->\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <ng-container *ngTemplateOutlet=\"orderAction\"></ng-container>\n        </div>\n      </div>\n\n      <!-- Showing the current status for sub order in different colors -->\n      <ng-template #orderStatus>\n        <span [ngSwitch]=\"suborder.status\">\n          <span class=\"text-danger\" *ngSwitchCase=\"'opened'\">\n            In Prüfung\n          </span>\n          <span class=\"text-danger\" *ngSwitchCase=\"'pending'\">\n            Wartet auf Aufnahmen\n          </span>\n          <span class=\"text-warning\" *ngSwitchCase=\"'checked'\">\n            In Vermittlung\n          </span>\n          <div *ngSwitchCase=\"'requested'\">\n            <span *ngIf=\"user.role == 'Administrator'\" class=\"text-warning\">\n              Angefragt\n            </span>\n            <span *ngIf=\"user.role == 'Kunde'\" class=\"text-warning\">\n              In Vermittlung\n            </span>\n          </div>\n          <span class=\"text-success\" *ngSwitchCase=\"'processing'\">\n            In Bearbeitung\n          </span>\n          <div *ngSwitchCase=\"'uploaded'\">\n            <span *ngIf=\"suborder.orderType == 'dronemedia'\" class=\"text-danger\">\n              In Nachbearbeitung\n            </span>\n            <span *ngIf=\"suborder.orderType != 'dronemedia'\" class=\"text-danger\">\n              In Prüfung\n            </span>\n          </div>\n          <span class=\"text-success\" *ngSwitchCase=\"'completed'\">\n            Abgeschlossen\n          </span>\n          <span class=\"text-danger\" *ngSwitchCase=\"'canceled'\">\n            Storniert\n          </span>\n          <span *ngSwitchDefault>\n            {{ suborder.status }}\n          </span>\n        </span>\n      </ng-template>\n\n      <!-- Show details for subordertype -->\n      <ng-template #orderType>\n\n        <!-- todo: os.allSubordersId (suborder-overview) -->\n        <div [ngSwitch]=\"suborder.orderType\">\n          <div *ngSwitchCase=\"'dronemedia'\">\n            <app-dronemedia-suborder-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-dronemedia-suborder-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'retouching'\">\n            <app-retouching-suborder-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-retouching-suborder-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'floorplan'\">\n            <app-floorplan-suborder-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-floorplan-suborder-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'vstaging'\">\n            <app-virtual-staging-suborder-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-virtual-staging-suborder-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'visualisation'\">\n            <app-visualisation-service-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-visualisation-service-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'hdphotos'\">\n            <app-hdphotos-suborder-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-hdphotos-suborder-overview>\n          </div>\n\n          <div *ngSwitchCase=\"'expose'\">\n            <app-expose-service-overview (setSubmitDisabled)=\"setSubmitDisabled($event)\">\n            </app-expose-service-overview>\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template #orderAction>\n        <div [ngSwitch]=\"user.role\">\n          <div *ngSwitchCase=\"'Kunde'\">\n            <!-- Customer can only cancel the complete order for now -->\n          </div>\n          <div *ngSwitchCase=\"'Administrator'\">\n            <!-- accept request -->\n            <div *ngIf=\"suborder.status == 'requested'\">\n              <div *ngIf='requestServiceProvider | async as ServiceProvider;'>\n                <p>Der Dienstleister {{ ServiceProvider.firstName }} {{ ServiceProvider.lastName }} (ID:\n                  {{suborder.assignedTo}}) hat diesen Auftrag\n                  angefragt.</p>\n                <button class=\"btn btn-success\" (click)=\"acceptRequest(suborder.id, true)\">Auftrag erteilen</button>\n                <button class=\"btn btn-danger\" (click)=\"acceptRequest(suborder.id, false)\">Anfrage ablehnen</button>\n              </div>\n            </div>\n            <div *ngIf=\"suborder.status == 'uploaded'\">\n              <div *ngIf='requestServiceProvider | async as ServiceProvider;'>\n                <p>Der Dienstleister {{ ServiceProvider.firstName }} {{ ServiceProvider.lastName }} (ID:\n                  {{suborder.assignedTo}}) hat diesen Auftrag\n                  angeschlossen.</p>\n                <button class=\"btn btn-success\" (click)=\"changeSuborderStatus(suborder.id, 'completed')\">Auftrag\n                  abschließen</button>\n                <button class=\"btn btn-danger\" (click)=\"changeSuborderStatus(suborder.id, 'processing')\">Anfrage\n                  zurückweisen</button>\n              </div>\n            </div>\n            <button *ngIf=\"suborder.status == 'processing'\" [disabled]=\"isSubmitDisabled()\" class=\"btn btn-warning\"\n              (click)=\"completeOrder(suborder.id)\">Auftrag abschließen</button>\n            <button *ngIf=\"suborder.status == 'completed'\" class=\"btn btn-success\" disabled><span\n                class=\"fas fa-check-circle\"></span>&nbsp; Abgeschlossen</button>\n          </div>\n          <div *ngSwitchCase=\"'Dienstleister'\">\n            <!-- Request suborder button -->\n            <button *ngIf=\"suborder.status == 'checked'\" class=\"btn btn-warning\"\n              (click)=\"requestOrder(suborder.id)\">Auftrag annehmen</button>\n            <button *ngIf=\"suborder.status == 'requested'\" class=\"btn btn-secondary\" disabled>Auftrag angefragt</button>\n            <!-- Complete suborder -->\n            <button *ngIf=\"suborder.status == 'processing'\" [disabled]=\"isSubmitDisabled()\" class=\"btn btn-warning\"\n              (click)=\"completeOrder(suborder.id)\">Auftrag abschließen</button>\n            <button *ngIf=\"suborder.status == 'uploaded' || suborder.status == 'completed'\" class=\"btn btn-success\"\n              disabled><span class=\"fas fa-check-circle\"></span>&nbsp; Abgeschlossen</button>\n          </div>\n        </div>\n      </ng-template>\n    </ng-container>\n  </ng-container>\n</ng-container>\n<ng-template #loading>\n  <!-- CSS Loading Spinner -->\n  <div class=\"lds-ring\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/suborder-overview/suborder-overview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/suborder-overview/suborder-overview.component.ts ***!
  \******************************************************************/
/*! exports provided: SuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuborderOverviewComponent", function() { return SuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/realestate.service */ "./src/app/_services/realestate.service.ts");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _app_services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services/upload.service */ "./src/app/_services/upload.service.ts");
/* harmony import */ var _app_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/global.service */ "./src/app/_services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SuborderOverviewComponent = /** @class */ (function () {
    function SuborderOverviewComponent(os, auth, res, us, ups, gs) {
        this.os = os;
        this.auth = auth;
        this.res = res;
        this.us = us;
        this.ups = ups;
        this.gs = gs;
        this.submitDisabled = false;
    }
    SuborderOverviewComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.os.currentSuborder) &&
                            this.os.currentSuborder.id !== this.suborderId) ||
                            underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.os.currentSuborder))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.os.getSuborderDetails(this.suborderId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // fetch current realestate detail on intiailize
                        if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.realestateId)) {
                            this.res.getRealestateSubscription(this.realestateId);
                        }
                        // fetch current service provider detail on intiailize
                        if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.assignedTo)) {
                            this.requestServiceProvider = this.us.getUserDetails(this.assignedTo);
                        }
                        // fetch current realestate detail on intiailize
                        if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.createdById)) {
                            this.createdByUserData = this.us.getUserDetails(this.createdById);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Gets triggered when service provider requests the order. The order gets assigned to current logged in service provider
   */
    SuborderOverviewComponent.prototype.requestOrder = function (orderIdParam) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmed = confirm('Sie verpflichten Sich hiermit, sollten wir Ihnen den Auftrag nach einer Prüfung durch uns final erteilen, diesen zu dem vereinbarten Auftragshonorar zu erledigen.');
                        if (!confirmed) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.os.assignSuborder(orderIdParam, this.auth.userData.uid)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Gets triggered when service provider completes the order.
   */
    SuborderOverviewComponent.prototype.completeOrder = function (orderIdParam) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed, status_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmed = confirm('Sind Sie sicher, dass Sie diesen Auftrag final abschließen möchten?');
                        if (!confirmed) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        status_1 = this.auth.myUserObservable.role === 'Administrator' ? 'completed' : 'uploaded';
                        return [4 /*yield*/, this.os.changeSuborderStatus(orderIdParam, status_1)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        alert(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Disable the submit button "Auftrag abschließen" for dienstleister depending on suborder type
     * add your conditions for enabling/disabling inside this function based on your suborder type
     */
    SuborderOverviewComponent.prototype.isSubmitDisabled = function () {
        if (this.submitDisabled) {
            return true;
        }
        return false;
    };
    SuborderOverviewComponent.prototype.setSubmitDisabled = function (value) {
        this.submitDisabled = value;
    };
    /**
   * change suborder status for Admin.
   */
    SuborderOverviewComponent.prototype.changeSuborderStatus = function (orderIdParam, status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.os.changeSuborderStatus(orderIdParam, status)];
                    case 1:
                        _a.sent();
                        // additional actions for dronemedia suborder
                        if (this.os.currentSuborder.orderType === 'dronemedia' && status === 'completed') {
                            // update pending retoucing suborder status
                            this.os.updatePendingSuborder(this.os.currentSuborder.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Gets triggered when service provider requests the order. The order gets assigned to current logged in service provider
   */
    SuborderOverviewComponent.prototype.acceptRequest = function (orderIdParam, response) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.os.acceptRequest(orderIdParam, response)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        alert(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SuborderOverviewComponent.prototype.ngOnDestroy = function () {
        // unsubscripte the obeservables when the view is destroyed
        if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.os.$suborderSub)) {
            this.os.$suborderSub.unsubscribe();
            this.os.currentSuborder = null;
        }
        if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.res.$realestateSub)) {
            this.res.$realestateSub.unsubscribe();
            this.res.currentRealestate = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SuborderOverviewComponent.prototype, "suborderId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SuborderOverviewComponent.prototype, "realestateId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SuborderOverviewComponent.prototype, "createdById", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SuborderOverviewComponent.prototype, "assignedTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SuborderOverviewComponent.prototype, "parentContext", void 0);
    SuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suborder-overview',
            template: __webpack_require__(/*! ./suborder-overview.component.html */ "./src/app/suborder-overview/suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./suborder-overview.component.css */ "./src/app/suborder-overview/suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_services_realestate_service__WEBPACK_IMPORTED_MODULE_4__["RealestateService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _app_services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"],
            _app_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]])
    ], SuborderOverviewComponent);
    return SuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.css":
/*!*******************************************!*\
  !*** ./src/app/terms/terms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  terms works!\n</p>\n"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/upload-task/upload-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-task/upload-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "progress::-webkit-progress-value {\n-webkit-transition: width 0.1s ease;\ntransition: width 0.1s ease;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLXRhc2svdXBsb2FkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLG1DQUEyQjtBQUEzQiwyQkFBMkI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtdGFzay91cGxvYWQtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xudHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/upload-task/upload-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-task/upload-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"percentage | async as pct\">\n  <progress [value]=\"pct\" max=\"100\"></progress>\n  {{ pct | number }}%\n</div>\n<div *ngIf=\"snapshot | async as snap\">\n</div>"

/***/ }),

/***/ "./src/app/upload-task/upload-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-task/upload-task.component.ts ***!
  \******************************************************/
/*! exports provided: UploadTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTaskComponent", function() { return UploadTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UploadTaskComponent = /** @class */ (function () {
    function UploadTaskComponent(storage, db) {
        this.storage = storage;
        this.db = db;
        this.removeFileFromQueue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadTaskComponent.prototype.ngOnInit = function () {
        this.startUpload();
    };
    UploadTaskComponent.prototype.startUpload = function () {
        var _this = this;
        // The storage path
        //const path = `folderName/${Date.now()}_${this.file.name}`;
        var self = this;
        // Reference to storage bucket
        var ref = this.storage.ref(this.path);
        // The main task
        this.task = this.storage.upload(this.path, this.file);
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(
        // The file's download URL
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = self;
                        return [4 /*yield*/, ref.getDownloadURL().toPromise()];
                    case 1:
                        _a.downloadURL = _b.sent();
                        // add reference to file in the parent's subcollection
                        self.db.collection(self.parentType).doc(self.parentId)
                            .collection(self.subCollectionName).add({
                            download_url: self.downloadURL,
                            file_name: self.file.name
                        }).then(function () {
                            console.log('file uploaded. Now removing from upload queue');
                            self.removeFileFromQueue.emit(self.file);
                        });
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", File)
    ], UploadTaskComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadTaskComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadTaskComponent.prototype, "parentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadTaskComponent.prototype, "parentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadTaskComponent.prototype, "subCollectionName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadTaskComponent.prototype, "removeFileFromQueue", void 0);
    UploadTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-task',
            template: __webpack_require__(/*! ./upload-task.component.html */ "./src/app/upload-task/upload-task.component.html"),
            styles: [__webpack_require__(/*! ./upload-task.component.css */ "./src/app/upload-task/upload-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UploadTaskComponent);
    return UploadTaskComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This component is only rendered for administrators -->\n\n<!-- Page-Content below -->\n<ng-container *ngIf=\"state === 'default'\">\n  <ng-container *ngIf=\"auth.myUserObservable as user\">\n    <!-- Only show content to users that are Administrators -->\n    <ng-container *ngIf=\"user.role === 'Administrator'; else forbidden\">\n\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom bbcg\">\n        <span class=\"page-title\">Alle Nutzer</span>\n        <div class=\"btn-toolbar mb-2 mb-md-0\">\n          <div class=\"btn-group mr-2\">\n            <button class=\"btn btn-primary\" (click)=\"createNewUser()\">\n              Benutzer anlegen\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Show User list in a card -->\n      <div class=\"shadow card cgrid\">\n        <!-- <div class=\"card-header\">\n          <h5 class=\"mb-0\">Alle Nutzer</h5>\n        </div> -->\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n\n            <!-- Table that lists all users that are signed up on the platform to the Admin User -->\n            <table class=\"table table-striped table-sm\">\n\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>E-Mail</th>\n                  <th>Nutzertyp</th>\n                  <th>ID</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <!-- Show all users in a table/list for now with the fields Name, E-Mail, Role and status badge and a button to open detail page -->\n                <ng-container *ngIf=\"us.allUsers as users; else loadingSmall\">\n                  <ng-container *ngFor=\"let user of users\">\n                    <tr>\n                      <td>{{ user.firstName }} {{ user.lastName }}</td>\n                      <td>{{ user.email }}</td>\n                      <td>{{ user.role }}</td>\n                      <td>{{ user.uid }}</td>\n                      <td>\n                        <ng-container *ngTemplateOutlet=\"userStatus\"></ng-container>\n                      </td>\n                      <td><button class=\"btn btn-primary btn-sm align-self-center float-right\"\n                          (click)=\"openDetailPage(user.uid)\"><span><i class=\"far fa-edit\"></i></span></button></td>\n\n                    </tr>\n                    <!-- Display different Status badges -->\n                    <ng-template #userStatus>\n                      <span *ngIf=\"user.emailVerified === true\">\n                        <span *ngIf=\"user.test !== true\">\n                          <span *ngIf=\"user.profileCompleted === true && user.role === 'Kunde'\"\n                            class=\"badge badge-info\">Kunde</span>\n                          <span *ngIf=\"user.profileCompleted === false\" class=\"badge badge-danger\">Profil nicht\n                            ausgefüllt</span>\n                          <span *ngIf=\"user.verificationNeeded === true\" class=\"badge badge-danger\">Prüfung\n                            notwendig</span>\n                          <!-- Dienstleister -->\n                          <div *ngIf=\"user.role === 'Dienstleister'\">\n                            <!-- important: all variables have to be boolean! -->\n                            <span class=\"badge badge-warning\">Dienstleister</span>\n                            <span *ngIf=\"user.floorplan === true\" class=\"badge badge-success\">Grundrisse</span>\n                            <span *ngIf=\"user.retouching === true\" class=\"badge badge-success\">Bildbearbeitung</span>\n                            <span *ngIf=\"user.dronepilot === true\" class=\"badge badge-success\">Drohnenpilot</span>\n                            <span *ngIf=\"user.vstaging\" class=\"badge badge-success\">Virtual Staging</span>\n                            <span *ngIf=\"user.visualisation\" class=\"badge badge-success\">3D Visualisierung</span>\n                            <!-- test -->\n                            <!-- <span class=\"badge badge-success\">Grundrisse {{user.floorplan}}</span>\n                            <span class=\"badge badge-success\">Grundrisse {{user.retouching}}</span>\n                            <span class=\"badge badge-success\">Drohnenpilot {{user.dronepilot}}</span> -->\n                            <!-- end test -->\n                          </div>\n                          <!-- <div *ngIf=\"user.dronepilot === true\">\n                            <span *ngIf=\"user.profileCompleted === true && user.pilotVerified === true\"\n                              class=\"badge badge-success\">Verifiziert</span>\n                            <span\n                              *ngIf=\"user.pilotVerified === false && user.profileCompleted === true && user.verificationNeeded === false\"\n                              class=\"badge badge-warning\">Verifikationsdokumente ausstehend</span>\n                          </div> -->\n                          <span *ngIf=\"user.role === 'Administrator'\" class=\"badge badge-dark\">Admin</span>\n                        </span>\n                        <span *ngIf=\"user.test === true\" class=\"badge badge-dark\">Testaccount</span>\n                      </span>\n                      <span *ngIf=\"user.emailVerified !== true\">\n                        <span class=\"badge badge-danger\">E-Mail nicht bestätigt!</span>\n                      </span>\n                    </ng-template>\n\n                  </ng-container>\n                </ng-container>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <!-- Show assigned roles in a card -->\n      <div class=\"shadow card cgrid\">\n        <div class=\"card-header\">\n          <h5 class=\"msb-0\">Zuweisung Dienstleister</h5>\n        </div>\n        <div class=\"card-body\">\n\n          <form [formGroup]=\"serviceForm\" (ngSubmit)=\"submitHandler()\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-1 col-form-label\" style=\"color: black\">Grundrisse</label>\n              <div class=\"col-sm-4\">\n                <input formControlName=\"floorplanService\" type=\"text\" class=\"form-control\" id=\"floorplanService\"\n                  aria-describedby=\"floorplanHelp\" placeholder=\"Benutzer-ID\">\n                <small id=\"floorplanHelp\" class=\"form-text text-muted\">Bitte geben Sie eine gültige Benutzer-ID\n                  an.</small>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-1 col-form-label\" style=\"color: black\">Bildbearbeitung</label>\n              <div class=\"col-sm-4\">\n                <input formControlName=\"retouchingService\" type=\"text\" class=\"form-control\" id=\"retouchingService\"\n                  aria-describedby=\"retouchingHelp\" placeholder=\"Benutzer-ID\">\n                <small id=\"retouchingHelp\" class=\"form-text text-muted\">Bitte geben Sie eine gültige Benutzer-ID\n                  an.</small>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-1 col-form-label\" style=\"color: black\">Virtual Staging</label>\n              <div class=\"col-sm-4\">\n                <input formControlName=\"vstagingService\" type=\"text\" class=\"form-control\" id=\"vstagingService\"\n                  aria-describedby=\"vstagingHelp\" placeholder=\"Benutzer-ID\">\n                <small id=\"vstagingHelp\" class=\"form-text text-muted\">Bitte geben Sie eine gültige Benutzer-ID\n                  an.</small>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"serviceForm.invalid || serviceForm.pristine\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- Message displayed to all users that are not administrators but try to access this route manually in their browser -->\n    <ng-template #forbidden>\n      <h2>Du hast keine Zugangsberechtigung für diese Seite!</h2>\n    </ng-template>\n\n  </ng-container>\n</ng-container>\n\n<!-- Detailed Page for each user -->\n<ng-container *ngIf=\"state === 'detail-view'\">\n  <ng-container *ngIf=\"currentUserData | async as user; else loading\">\n    <div class=\"shadow card fluid cgrid\">\n      <div class=\"card-header\">\n        <button class=\"btn btn-sm btn-primary float-right\" (click)=\"state = 'default'\">Zurück</button>\n\n        <!-- Display some general user details in the header -->\n        <h5>{{ user.firstName }} {{ user.lastName }} ({{ user.uid }})</h5>\n      </div>\n      <div class=\"card-body\">\n\n        <div class=\"row\">\n\n          <!-- This column displays almost all relevant fields of the selected user's database entry -->\n          <div class=\"col-6\">\n            <h5 class=\"card-title text-left wsn\">Nutzer-Details:</h5>\n            <p class=\"mb-0\"><strong>Name: </strong> {{ user.firstName }} {{ user.lastName }}</p>\n            <p class=\"mb-0\"><strong>Unternehmen: </strong>{{ user.company }}</p>\n            <p class=\"mb-0\"><strong>Adressdaten: </strong> {{ user.street }} {{ user.streetNumber }},\n              {{ user.postalcode }} {{ user.city }}</p>\n            <p class=\"mb-0\"><strong>Telefonnummer: </strong> {{ user.phone }}</p>\n            <p class=\"mb-0\"><strong>E-Mail Adresse: </strong> {{ user.email }}</p>\n            <p class=\"mb-2\"><strong>Registriert am: </strong> {{ user.registeredOn.toDate() | date: 'dd.MM.yyyy HH:mm'}}\n              Uhr</p>\n          </div>\n\n          <!-- This column displays the uploaded documents of the user to the Admin -->\n          <div class=\"col-6\">\n            <h5 class=\"card-title text-left wsn\">Profildokumente:</h5>\n            <p\n              *ngIf=\"user.verificationDocument0 === undefined && user.verificationDocument1 === undefined && user.verificationDocument2 === undefined && user.verificationDocument3 === undefined\">\n              Keine Dokumente vorhanden.</p>\n            <ng-container *ngIf=\"user.verificationDocument0 !== undefined\">\n              <a class=\"my-link\" href=\"{{ user.verificationDocument0 }}\" target=\"_blank\" rel=\"noopener\">Vertragliche\n                Vereinbarung</a><span> - </span><a style=\"color: #dc3545;\"\n                (click)=\"deleteDoc('doc0', user.uid)\">löschen</a><br>\n            </ng-container>\n            <ng-container *ngIf=\"user.verificationDocument1 !== undefined\">\n              <a class=\"my-link\" href=\"{{ user.verificationDocument1 }}\" target=\"_blank\"\n                rel=\"noopener\">Haftpflicht</a><span> - </span><a style=\"color: #dc3545;\"\n                (click)=\"deleteDoc('doc1', user.uid)\">löschen</a><br>\n            </ng-container>\n            <ng-container *ngIf=\"user.verificationDocument2 !== undefined\">\n              <a class=\"my-link\" href=\"{{ user.verificationDocument2 }}\" target=\"_blank\"\n                rel=\"noopener\">Kenntnisnachweis</a><span> - </span><a style=\"color: #dc3545;\"\n                (click)=\"deleteDoc('doc2', user.uid)\">löschen</a><br>\n            </ng-container>\n            <ng-container *ngIf=\"user.verificationDocument3 !== undefined\">\n              <a class=\"my-link\" href=\"{{ user.verificationDocument3 }}\" target=\"_blank\" rel=\"noopener\">Allg.\n                Aufstiegsgenehmigung</a><span> - </span><a style=\"color: #dc3545;\"\n                (click)=\"deleteDoc('doc3', user.uid)\">löschen</a><br>\n            </ng-container>\n          </div>\n\n        </div>\n\n        <!-- Button to set pilots to verified, after the Admin has checked the documents of the pilot -->\n        <span *ngIf=\"success === true\" class=\"alert alert-success float-left\">Erfolgreich gesetzt!</span>\n        <button *ngIf=\"user.verificationNeeded === true\" class=\"btn btn-warning mt-2 float-left\"\n          (click)=\"setVerified(user.uid)\">Dokumente geprüft</button>\n        <span *ngIf=\"showSuccessMessage === true\" class=\"alert alert-success float-left\">{{successMessage}}</span>\n        <button *ngIf=\"!user.emailVerified\" class=\"btn btn-warning mt-2 float-left\"\n          (click)=\"setEmailVerified(user.uid)\">E-Mail bestätigen</button>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n\n<!-- CSS Loading Spinner -->\n<ng-template #loadingSmall>\n  <div class=\"lds-ring ring-small\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/loader.service */ "./src/app/_services/loader.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var UsersComponent = /** @class */ (function () {
    function UsersComponent(fb, afs, auth, loader, us, os, router) {
        this.fb = fb;
        this.afs = afs;
        this.auth = auth;
        this.loader = loader;
        this.us = us;
        this.os = os;
        this.router = router;
        this.state = 'default';
        this.success = false;
        this.configurationDocumentId = 'rsidBwFzO3Kp356emm9N';
        this.showSuccessMessage = false;
        this.successMessage = '';
        // Set the validations for the serviceProvider form
        this.serviceForm = this.fb.group({
            floorplanService: [''],
            retouchingService: [''],
            vstagingService: ['']
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        var uid = user.uid;
        this.user = uid; // UID;
        this.preloadData();
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.configuration.unsubscribe(); // Missing or insufficient permissions Error, Memory Leak fix
    };
    /**
     * Opens user's detail view
     */
    UsersComponent.prototype.openDetailPage = function (uidParam) {
        this.currentUserData = this.us.getUserDetails(uidParam);
        this.state = 'detail-view';
    };
    /**
     * Sets the pilot as verified (called by admin) after he(the pilot/service provider) uploads the required documents.
     */
    UsersComponent.prototype.setVerified = function (uidParam) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.us.setVerified(uidParam)];
                    case 1:
                        _a.sent();
                        this.success = true;
                        setTimeout(function () {
                            _this.success = false;
                        }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the emailVerfied as true in user document (called by admin)
     */
    UsersComponent.prototype.setEmailVerified = function (uid) {
        var _this = this;
        this.us.updateUser(uid, { emailVerified: true }).then(function () {
            console.log('email verfied successfully: ');
            _this.successMessage = 'E-Mail erfolgreich verifiziert!';
            _this.showSuccessMessage = true;
        }).catch(function (error) {
            alert('Unable to verify email!');
            console.log('unable to verify email: ', error);
        });
        setTimeout(function () {
            _this.showSuccessMessage = false;
            _this.successMessage = '';
        }, 2000);
    };
    /**
     *  Admin can delete the uploaded documents by users (service providers)
     */
    UsersComponent.prototype.deleteDoc = function (doc, uid) {
        this.us.deleteDoc(doc, uid);
    };
    Object.defineProperty(UsersComponent.prototype, "floorplanService", {
        get: function () {
            return this.serviceForm.get('floorplanService');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "retouchingService", {
        get: function () {
            return this.serviceForm.get('retouchingService');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "vstagingService", {
        get: function () {
            return this.serviceForm.get('vstagingService');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Submite handler for service provider form. Updates the user document in firebase
     */
    UsersComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colRef, config, formValue, updateServiceProviderError, err_1, err_2, updateServiceProviderError, err_3, err_4, updateServiceProviderError, err_5, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        colRef = this.afs.collection('users');
                        config = this.afs.collection('configuration');
                        formValue = this.serviceForm.value;
                        this.serviceForm.markAsPristine();
                        if (!(formValue.floorplanService !== this.currentUserData.floorplanService)) return [3 /*break*/, 10];
                        updateServiceProviderError = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, colRef.doc(formValue.floorplanService).update({
                                floorplan: true
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        updateServiceProviderError = true;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!!updateServiceProviderError) return [3 /*break*/, 10];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, colRef.doc(this.currentUserData.floorplanService).update({
                                floorplan: false
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, config.doc(this.configurationDocumentId).update({
                                floorplanService: formValue.floorplanService
                            })];
                    case 7:
                        _a.sent();
                        this.os.changeAssignment('floorplan', formValue.floorplanService);
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        if (!(formValue.retouchingService !== this.currentUserData.retouchingService)) return [3 /*break*/, 20];
                        updateServiceProviderError = false;
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, colRef.doc(formValue.retouchingService).update({
                                retouching: true
                            })];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        err_3 = _a.sent();
                        console.error(err_3);
                        updateServiceProviderError = true;
                        return [3 /*break*/, 14];
                    case 14:
                        if (!!updateServiceProviderError) return [3 /*break*/, 20];
                        _a.label = 15;
                    case 15:
                        _a.trys.push([15, 18, , 19]);
                        return [4 /*yield*/, colRef.doc(this.currentUserData.retouchingService).update({
                                retouching: false
                            })];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, config.doc(this.configurationDocumentId).update({
                                retouchingService: formValue.retouchingService
                            })];
                    case 17:
                        _a.sent();
                        this.os.changeAssignment('retouching', formValue.retouchingService);
                        return [3 /*break*/, 19];
                    case 18:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 19];
                    case 19: return [3 /*break*/, 20];
                    case 20:
                        if (!(formValue.vstagingService !== this.currentUserData.vstagingService)) return [3 /*break*/, 30];
                        updateServiceProviderError = false;
                        _a.label = 21;
                    case 21:
                        _a.trys.push([21, 23, , 24]);
                        return [4 /*yield*/, colRef.doc(formValue.vstagingService).update({
                                vstaging: true
                            })];
                    case 22:
                        _a.sent();
                        return [3 /*break*/, 24];
                    case 23:
                        err_5 = _a.sent();
                        console.error(err_5);
                        updateServiceProviderError = true;
                        return [3 /*break*/, 24];
                    case 24:
                        if (!!updateServiceProviderError) return [3 /*break*/, 30];
                        _a.label = 25;
                    case 25:
                        _a.trys.push([25, 28, , 29]);
                        return [4 /*yield*/, colRef.doc(this.currentUserData.vstagingService).update({
                                vstaging: false
                            })];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, config.doc(this.configurationDocumentId).update({
                                vstagingService: formValue.vstagingService
                            })];
                    case 27:
                        _a.sent();
                        this.os.changeAssignment('vstaging', formValue.vstagingService);
                        return [3 /*break*/, 29];
                    case 28:
                        err_6 = _a.sent();
                        console.error(err_6);
                        return [3 /*break*/, 29];
                    case 29: return [3 /*break*/, 30];
                    case 30: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Preload data for user configuration
     */
    UsersComponent.prototype.preloadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.afs.doc("configuration/" + this.configurationDocumentId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
                                _this.serviceForm.patchValue(data);
                                _this.currentUserData = data;
                            }))
                                .subscribe()];
                    case 1:
                        _a.configuration = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.createNewUser = function () {
        this.auth.adminFlag = true;
        this.router.navigate(['/register']);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/virtual-staging-service/virtual-staging-service.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/virtual-staging-service/virtual-staging-service.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fileContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fileContainer [type=file] {\n  cursor: inherit;\n  display: block;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}\n\n.file-list .file-entry{\n  border-radius: 5%;\n  padding: 5px 0 5px 0;\n}\n\n.file-list .file-entry:nth-child(odd){\n  background-color: #e5f9f6;\n}\n\n.file-list .file-entry .file-name{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-list:not(.logo-file){\n  height: 123px;\n  overflow-y: auto;\n}\n\n.file-list .file-entry .file-remove{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlydHVhbC1zdGFnaW5nLXNlcnZpY2UvdmlydHVhbC1zdGFnaW5nLXNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsTUFBTTtBQUNSOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aXJ0dWFsLXN0YWdpbmctc2VydmljZS92aXJ0dWFsLXN0YWdpbmctc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVDb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWxlQ29udGFpbmVyIFt0eXBlPWZpbGVdIHtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA5OTlweDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0b3A6IDA7XG59XG4uZmlsZS1saXN0IC5maWxlLWVudHJ5e1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG4uZmlsZS1saXN0IC5maWxlLWVudHJ5Om50aC1jaGlsZChvZGQpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmOWY2O1xufVxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeSAuZmlsZS1uYW1le1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5maWxlLWxpc3Q6bm90KC5sb2dvLWZpbGUpe1xuICBoZWlnaHQ6IDEyM3B4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZmlsZS1saXN0IC5maWxlLWVudHJ5IC5maWxlLXJlbW92ZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/virtual-staging-service/virtual-staging-service.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/virtual-staging-service/virtual-staging-service.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Description what the customer will get -->\n<div class=\"row\">\n    <div class=\"col\">\n        <h4>Das erwartet Sie:</h4>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n            <li *ngFor=\"let item of package.package_contents\" class=\"text-truncate\"> ✓ {{item}}</li>\n        </ul>\n        <!-- Border -->\n        <div class=\"border-bottom bbcb mt-3 mb-3\"></div>\n\n        <!-- Form for special wishes of the customer -->\n        <form [formGroup]=\"vstagingForm\">\n            <!-- Start file upload -->\n            <div class=\"form-group row\">\n                <div class=\"col-3 upload-button-container\">\n                    <label class=\"fileContainer btn btn-dark btn-sm text-white\">\n            Datei hochladen\n            <input type=\"file\" [writeFile]=\"true\" formControlName=\"uploadedFiles\" multiple=\"true\" #uploadFileElem (change)=\"onChange()\"\n              accept=\".png,.jpeg,.pdf,.jpg\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t\t</label>\n                </div>\n                <div class=\"col-4 file-list\">\n                    <div class=\"file-entry row\" *ngFor=\"let file of uploader.queue\">\n                        <div class=\"col-8 file-name\">\n                            {{ file?.file?.name }}\n                        </div>\n                        <div class=\"col-4 text-right\">\n                            <span class=\"fas fa-trash-alt text-danger file-remove\" (click)=\"onRemoveFile(file)\"></span>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"uploadedFiles.invalid && (uploadedFiles.dirty || uploadedFiles.touched)\" class=\"alert alert-danger col-12\">\n                    <div *ngIf=\"uploadedFiles.errors.required\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                    <div *ngIf=\"uploadedFiles.errors.forbiddenFile\">\n                        Bitte laden Sie ein gültiges Dateiformat hoch\n                    </div>\n                    <div *ngIf=\"!uploadedFiles.errors.required && uploadedFiles.errors.fileRequired\">\n                        Bitte geben Sie ein (gültiges) Foto ein!\n                    </div>\n                </div>\n            </div>\n            <!-- End file upload field -->\n            <h4>Sonderwünsche:</h4>\n            <p class=\"mb-0\">Sollten Sie besondere Bearbeitungswünsche für die hochgeladenen Aufnahmen haben, erläutern Sie diese bitte möglichst detailiert in dem Kommentarfeld für den Dienstleister.</p>\n            <a href=\"../../assets/images/formulierungshilfe.svg\" target=\"_blank\" rel=\"noopener\" class=\"my-link\">Formulierungshilfe</a>\n\n            <!-- Decription for vstaging -->\n            <div class=\"form-group mt-4\">\n                <p class=\"mb-0\">Kommentar für das virtuelle Staging:</p>\n                <!-- placeholder for package 6 -->\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{package.description_placeholder}}\" formControlName=\"description\">\n            </div>\n        </form>\n    </div>\n</div>\n<!-- Show price -->\n<div class=\"row mb-2\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n        <hr />\n        <div class=\"row\">\n            <div class=\"col-8\">\n                <h4>Summe</h4>\n            </div>\n            <div class=\"col-4 text-right font-sz-20\"> € {{calculatePrice()}} </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/virtual-staging-service/virtual-staging-service.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/virtual-staging-service/virtual-staging-service.component.ts ***!
  \******************************************************************************/
/*! exports provided: VirtualStagingServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualStagingServiceComponent", function() { return VirtualStagingServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modals/package-editor/package-editor.component */ "./src/app/modals/package-editor/package-editor.component.ts");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VirtualStagingServiceComponent = /** @class */ (function () {
    function VirtualStagingServiceComponent(fb) {
        this.fb = fb;
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for drone photos
        this.vstagingForm = this.fb.group({
            description: [''],
            uploadedFiles: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["forbiddenFileValidator"])(this.allowedFileExt, this.filesElem),
                    Object(_app_modals_package_editor_package_editor_component__WEBPACK_IMPORTED_MODULE_4__["fileRequiredValidator"])(this.uploader.queue)
                ]]
        });
    }
    VirtualStagingServiceComponent.prototype.ngOnInit = function () {
        this.package.form = this.vstagingForm;
        this.package["validate"] = true;
        this.oldValidate = this.package["validate"];
    };
    VirtualStagingServiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.filesElem = this.uploadFileElem.nativeElement;
        this.vstagingForm.valueChanges.subscribe(function () {
            var formValues = {};
            var fileList = [];
            // handle file uploads
            Object.keys(_this.vstagingForm.controls).forEach(function (control) {
                if (control === 'uploadedFiles') {
                    fileList = [];
                    _this.uploader.queue.forEach(function (entry) { return fileList.push(entry.file.rawFile); });
                    formValues[control] = fileList;
                }
            });
            formValues['description'] = _this.vstagingForm.value.description;
            formValues['packageNum'] = _this.package['package_key'];
            _this.onFormChange.emit(formValues);
        });
    };
    VirtualStagingServiceComponent.prototype.onChange = function () {
        this.package.form = this.vstagingForm;
        var fileListLength = this.uploader.queue.length;
        var lastFile = this.uploader.queue[fileListLength - 1];
        for (var i = 0; i < fileListLength - 1; i++) {
            if (lastFile.file.name === this.uploader.queue[i].file.name && lastFile.file.size === this.uploader.queue[i].file.size) {
                lastFile.remove();
            }
        }
        // fix for Internet Explorer. Manually set the file value
        if (this.uploader.queue.length > 0 && underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.vstagingForm.get('uploadedFiles').value)) {
            this.vstagingForm.controls['uploadedFiles'].setValue(this.uploader.queue[0].file.name);
        }
        this.vstagingForm.controls.uploadedFiles.updateValueAndValidity();
    };
    VirtualStagingServiceComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.package["validate"] != this.oldValidate) {
            Object.keys(this.vstagingForm.controls).forEach(function (control) {
                _this.vstagingForm.controls[control].markAsTouched();
            });
        }
    };
    VirtualStagingServiceComponent.prototype.onRemoveFile = function (file, type) {
        file.remove();
        this.vstagingForm.controls.uploadedFiles.updateValueAndValidity();
    };
    Object.defineProperty(VirtualStagingServiceComponent.prototype, "uploadedFiles", {
        get: function () {
            return this.vstagingForm.get('uploadedFiles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualStagingServiceComponent.prototype, "description", {
        get: function () {
            return this.vstagingForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    VirtualStagingServiceComponent.prototype.calculatePrice = function () {
        var unformated_number = accounting__WEBPACK_IMPORTED_MODULE_5__["unformat"](this.package.price, ',');
        var total_price = unformated_number * this.uploader.queue.length;
        this.package['total_price'] = accounting__WEBPACK_IMPORTED_MODULE_5__["formatMoney"](total_price, '', 2, '.', ',');
        // return formatted price
        return this.package['total_price'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VirtualStagingServiceComponent.prototype, "onFormChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("package"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_2__["Package"])
    ], VirtualStagingServiceComponent.prototype, "package", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("uploadFileElem"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VirtualStagingServiceComponent.prototype, "uploadFileElem", void 0);
    VirtualStagingServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtual-staging-service',
            template: __webpack_require__(/*! ./virtual-staging-service.component.html */ "./src/app/virtual-staging-service/virtual-staging-service.component.html"),
            styles: [__webpack_require__(/*! ./virtual-staging-service.component.css */ "./src/app/virtual-staging-service/virtual-staging-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], VirtualStagingServiceComponent);
    return VirtualStagingServiceComponent;
}());



/***/ }),

/***/ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWwtc3RhZ2luZy1zdWJvcmRlci1vdmVydmlldy92aXJ0dWFsLXN0YWdpbmctc3Vib3JkZXItb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-6\">\n      <p><strong>Kommentar für die Nachbearbeitung: </strong> <span\n          *ngIf=\"os.currentSuborder.description === ''\">Nicht\n          angegeben</span>{{ os.currentSuborder.description }}</p>\n  \n    </div>\n  </div>\n\n  <div  class=\"row\">\n    <div class=\"col-6\">\n      <h5 class=\"mb-2\"> Original</h5>\n    </div>\n  </div>\n  <!-- File upload component to show uplaoded photos without staging-->\n  <app-file-upload\n    [parentId]=\"os.currentSuborder.id \"\n    [allowedFileExt]=\"allowedFileExt\" [parentType]=\"'suborders'\" [readOnly]=\"true\"\n    [subCollectionName]=\"'originalPhotos'\" [parent]=\"this\">\n  </app-file-upload>\n  <hr />\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h5 class=\"mb-2\">Staged</h5>\n    </div>\n  </div>\n  <!-- File upload component to upload/show photos with staging-->\n  <app-file-upload [parentId]=\"os.currentSuborder.id\"\n    [allowedFileExt]=\"allowedFileExt\" [parentType]=\"'suborders'\" [subFolderName]=\"'stagedPhotos/'\"\n    (setSubmitDisabled)=\"setSubmitDisabledHanlder($event)\" [subCollectionName]=\"'stagedPhotos'\" [parent]=\"this\">\n  </app-file-upload>"

/***/ }),

/***/ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: VirtualStagingSuborderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualStagingSuborderOverviewComponent", function() { return VirtualStagingSuborderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VirtualStagingSuborderOverviewComponent = /** @class */ (function () {
    function VirtualStagingSuborderOverviewComponent(os, auth) {
        this.os = os;
        this.auth = auth;
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for virtual staging photos
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VirtualStagingSuborderOverviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * controls disabling of attachment deletion
     */
    VirtualStagingSuborderOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' || this.os.currentSuborder.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    /**
     * controls disabling of attachment upload
     */
    VirtualStagingSuborderOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.os.currentSuborder.status === 'uploaded' || this.os.currentSuborder.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    VirtualStagingSuborderOverviewComponent.prototype.setSubmitDisabledHanlder = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VirtualStagingSuborderOverviewComponent.prototype, "setSubmitDisabled", void 0);
    VirtualStagingSuborderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtual-staging-suborder-overview',
            template: __webpack_require__(/*! ./virtual-staging-suborder-overview.component.html */ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.html"),
            styles: [__webpack_require__(/*! ./virtual-staging-suborder-overview.component.css */ "./src/app/virtual-staging-suborder-overview/virtual-staging-suborder-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VirtualStagingSuborderOverviewComponent);
    return VirtualStagingSuborderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/visualisation-service-overview/visualisation-service-overview.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/visualisation-service-overview/visualisation-service-overview.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-list .row {\n  padding: 5px 0 5px 0;\n}\n\n.details-list .row:nth-child(even) {\n  background-color: #f6fafd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXNhdGlvbi1zZXJ2aWNlLW92ZXJ2aWV3L3Zpc3VhbGlzYXRpb24tc2VydmljZS1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXNhdGlvbi1zZXJ2aWNlLW92ZXJ2aWV3L3Zpc3VhbGlzYXRpb24tc2VydmljZS1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtbGlzdCAucm93IHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG5cbi5kZXRhaWxzLWxpc3QgLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmYWZkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/visualisation-service-overview/visualisation-service-overview.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/visualisation-service-overview/visualisation-service-overview.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-2\">\n      <div class=\"row plan\">\n        <div *ngIf=\"subOrderDetails.selectedPackage == 'Innenvisualisierung'\">\n          <img class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor.jpg\">\n        </div>\n        <div *ngIf=\"subOrderDetails.selectedPackage == 'Außenvisualisierung'\">\n          <img class=\"card-img-top\" src=\"../../assets/images/visualisation/outdoor.jpeg\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-12 col-md-5 details-list\">\n      <div class=\"row\">\n        <div class=\"pt-2\">\n          <h5>Spezifikationen - {{subOrderDetails.selectedPackage}}\n          </h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <strong>Ausgabeformat</strong>\n        </div>\n        <div class=\"col-6\">\n          <span>{{subOrderDetails.outputFormat}}</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <strong>Qualitätsstufe</strong>\n        </div>\n        <div class=\"col-6\">\n          <span>{{subOrderDetails.quality}}</span>\n        </div>\n      </div>\n      <div *ngIf=\"subOrderDetails.outputFormat == 'Rundflug'\" class=\"row\">\n        <div class=\"col-6\">\n          <strong>Videolänge</strong>\n        </div>\n        <div class=\"col-6\">\n          <span>{{subOrderDetails.length}}</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <strong>Anzahl der\n            <span *ngIf=\"subOrderDetails.outputFormat != 'Rundflug'\">Bilder</span>\n            <span *ngIf=\"subOrderDetails.outputFormat == 'Rundflug'\">Räume</span>\n          </strong>\n        </div>\n        <div class=\"col-6\">\n          <span>{{ subOrderDetails.numPhotos }}</span>\n        </div>\n      </div>\n      <div *ngIf=\"subOrderDetails.selectedPackage == 'Außenvisualisierung'\" class=\"row\">\n        <div class=\"col-6\">\n          <strong>Anzahl der Wohneinheiten</strong>\n        </div>\n        <div class=\"col-6\">\n          <span>{{subOrderDetails.apartments}}</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <strong>Kommentare</strong>\n        </div>\n        <div class=\"col-6\">\n          {{ subOrderDetails.description || '-' }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- File upload component to upload/show photos for visualisation-->\n  <app-file-upload\n    *ngIf=\"subOrderDetails.status == 'processing' || subOrderDetails.status == 'uploaded' || subOrderDetails.status == 'completed'\"\n    [parentId]=\"subOrderDetails.id\" [allowedFileExt]=\"allowedFileExt\" [parentType]=\"'suborders'\"\n    [subFolderName]=\"'visualisation/'\" (setSubmitDisabled)=\"setSubmitDisabledHandler($event)\"\n    [subCollectionName]=\"'visualisation'\" [parent]=\"this\">\n  </app-file-upload>\n\n</div>\n<div *ngIf=\"this.auth.role === 'Kunde'\">\n  <div *ngIf=\"subOrderDetails.selectedPackage == 'Innenvisualisierung'\">\n    <a class=\"typeform-share button\" href=\"https://vietbui815905.typeform.com/to/CYYDf2\" data-mode=\"popup\"\n      style=\"display:inline-block;text-decoration:none;background-color:#2CB3A0;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:7px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;\"\n      target=\"_blank\">Bestelldetails eingeben </a>\n    <script> (function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = \"typef_orm_share\", b = \"https://embed.typeform.com/\"; if (!gi.call(d, id)) { js = ce.call(d, \"script\"); js.id = id; js.src = b + \"embed.js\"; q = gt.call(d, \"script\")[0]; q.parentNode.insertBefore(js, q) } })() </script>\n    <script> (function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = \"typef_orm_share\", b = \"https://embed.typeform.com/\"; if (!gi.call(d, id)) { js = ce.call(d, \"script\"); js.id = id; js.src = b + \"embed.js\"; q = gt.call(d, \"script\")[0]; q.parentNode.insertBefore(js, q) } })() </script>\n  </div>\n  <div *ngIf=\"subOrderDetails.selectedPackage == 'Außenvisualisierung'\">\n    <a class=\"typeform-share button\" href=\"https://vietbui815905.typeform.com/to/IIejon\" data-mode=\"popup\"\n      style=\"display:inline-block;text-decoration:none;background-color:#2CB3A0;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:7px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;\"\n      target=\"_blank\">Bestelldetails eingeben </a>\n    <script> (function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = \"typef_orm_share\", b = \"https://embed.typeform.com/\"; if (!gi.call(d, id)) { js = ce.call(d, \"script\"); js.id = id; js.src = b + \"embed.js\"; q = gt.call(d, \"script\")[0]; q.parentNode.insertBefore(js, q) } })() </script>\n    <script> (function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = \"typef_orm_share\", b = \"https://embed.typeform.com/\"; if (!gi.call(d, id)) { js = ce.call(d, \"script\"); js.id = id; js.src = b + \"embed.js\"; q = gt.call(d, \"script\")[0]; q.parentNode.insertBefore(js, q) } })() </script>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/visualisation-service-overview/visualisation-service-overview.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/visualisation-service-overview/visualisation-service-overview.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VisualisationServiceOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationServiceOverviewComponent", function() { return VisualisationServiceOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services/orders.service */ "./src/app/_services/orders.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualisationServiceOverviewComponent = /** @class */ (function () {
    function VisualisationServiceOverviewComponent(orderService, auth) {
        this.orderService = orderService;
        this.auth = auth;
        this.setSubmitDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allowedFileExt = ['jpg', 'jpeg', 'png', 'JPG']; // allowed file extensions for retouching photos
        this.subOrderDetails = this.orderService.currentSuborder;
    }
    VisualisationServiceOverviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * controls disabling of attachment deletion
     */
    VisualisationServiceOverviewComponent.prototype.deleteAttachmentDisabled = function () {
        if (this.subOrderDetails.status === 'uploaded' || this.subOrderDetails.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    /**
     * controls disabling of attachment upload
     */
    VisualisationServiceOverviewComponent.prototype.isUploadDisabled = function () {
        if (this.subOrderDetails.status === 'uploaded' || this.subOrderDetails.status === 'completed'
            || this.auth.role === 'Kunde') {
            return true;
        }
        return false;
    };
    VisualisationServiceOverviewComponent.prototype.setSubmitDisabledHandler = function (value) {
        this.setSubmitDisabled.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisualisationServiceOverviewComponent.prototype, "setSubmitDisabled", void 0);
    VisualisationServiceOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualisation-service-overview',
            template: __webpack_require__(/*! ./visualisation-service-overview.component.html */ "./src/app/visualisation-service-overview/visualisation-service-overview.component.html"),
            styles: [__webpack_require__(/*! ./visualisation-service-overview.component.css */ "./src/app/visualisation-service-overview/visualisation-service-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VisualisationServiceOverviewComponent);
    return VisualisationServiceOverviewComponent;
}());



/***/ }),

/***/ "./src/app/visualisation-service/visualisation-service.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/visualisation-service/visualisation-service.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label, :host ::ng-deep .mat-checkbox-layout {\n  color: #000;\n}\n\n.plan img {\n  position: absolute;\n  left: 0;\n  width: 80%;\n  margin-left: 3vh;\n}\n\n/* .plan img:first-child {\n  position: relative;\n  padding: 0;\n  height: 50%;\n} */\n\n.plan {\n  margin-top: 30px;\n}\n\n.style-card .img-thumb {\n  height: 200px;\n}\n\n:host ::ng-deep .carousel-row {\n  padding: 0 15px 0 15px;\n}\n\n:host ::ng-deep .carousel-indicators {\n  bottom: -30px !important;\n}\n\n:host ::ng-deep .carousel-indicators li {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  height: 6px;\n}\n\n:host ::ng-deep .carousel-indicators li.active {\n  background-color: #2cb3a0 !important;\n}\n\n:host ::ng-deep .carousel-item .style-card {\n  cursor: pointer;\n}\n\n:focus {\n  outline: none;\n}\n\n:host ::ng-deep .carousel-item .style-card {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n:host ::ng-deep .carousel-item .style-card.active {\n  border: 3px solid #2cb3a0;\n  color: #000 !important;\n}\n\n:host ::ng-deep .carousel-item .style-card .mat-card-content {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.font-300 {\n  font-weight: 300;\n  font-size: large;\n}\n\n.font-200 {\n  font-weight: 200;\n  font-size: small;\n}\n\n.text-primary {\n  color: #2cb3a0 !important;\n}\n\n.numberText {\n  text-align: center;\n}\n\n.font-sz-20 {\n  font-size: 20px;\n}\n\n:host ::ng-deep .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element, :host ::ng-deep .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #2cb3a0 !important;\n}\n\n.fileName {\n  color: #FFF;\n  outline: none;\n}\n\n.fileContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fileContainer [type=file] {\n  cursor: inherit;\n  display: block;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}\n\n.file-list .file-entry {\n  border-radius: 5%;\n  padding: 5px 0 5px 0;\n}\n\n.file-list .file-entry:nth-child(odd) {\n  background-color: #e5f9f6;\n}\n\n.file-list .file-entry .file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-list {\n  height: 120px;\n  overflow-y: auto;\n}\n\n.file-list .file-entry .file-remove {\n  cursor: pointer;\n}\n\n.uploadArea {\n  margin: 0px;\n}\n\n:host ::ng-deep .carousel-control-next, :host ::ng-deep .carousel-control-prev {\n  width: 4% !important;\n  background-color: #2cb3a0;\n  height: 20%;\n  top: 37%;\n}\n\n.card-package {\n  padding: 10px;\n}\n\n.margin {\n  margin-bottom: 10px;\n  margin-left: 0px;\n}\n\n.buttonUpload {\n  padding: 0px;\n}\n\n.checkbox_align {\n  text-align: center;\n  /* center checkbox horizontally */\n  margin-top: 5px;\n}\n\n.no_padding {\n  padding: 0px;\n}\n\n.vertical_align {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.card-header {\n  border-radius: 5px;\n  background: rgba(44, 179, 160, 0.5);\n  padding: 7px 7px;\n}\n\n.form-control.ng-invalid {\n  background-size: 100% 100%, 100% 100%;\n}\n\nlabel {\n  color: #50535b;\n}\n\n.package-image {\n  width: 150px;\n  height: 150px;\n}\n\nul li {\n  padding: 0;\n  border: none;\n  color: #3C4858;\n}\n\n.package {\n  cursor: pointer;\n  border: 2px solid #FFF;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n\n.selected-service, .selected-package {\n  border: 2px solid #22bca4;\n}\n\n.cards {\n  height: 100%;\n}\n\n.package-cards {\n  height: 87% !important;\n}\n\n.cards .card {\n  height: 90%;\n}\n\n.cards .selected-tick {\n  position: absolute;\n  top: 6px;\n  right: 17px;\n}\n\n.cards .selected-tick::before, .cards .selected-tick::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.cards .selected-tick::after {\n  border-width: 1.35em;\n  border-right-color: #22bca4;\n  border-top-color: #22bca4;\n}\n\n.cards .tick-icon {\n  position: absolute;\n  top: 10px;\n  right: 23px;\n  color: #FFF;\n}\n\n.not-avialable {\n  background: rgba(222, 222, 222, 0.5);\n  border: 2px solid #BBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXNhdGlvbi1zZXJ2aWNlL3Zpc3VhbGlzYXRpb24tc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXNhdGlvbi1zZXJ2aWNlL3Zpc3VhbGlzYXRpb24tc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwsIDpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucGxhbiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAzdmg7XG59XG5cbi8qIC5wbGFuIGltZzpmaXJzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA1MCU7XG59ICovXG5cbi5wbGFuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN0eWxlLWNhcmQgLmltZy10aHVtYiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtcm93IHtcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNiM2EwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSAuc3R5bGUtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtIC5zdHlsZS1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0gLnN0eWxlLWNhcmQuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzJjYjNhMDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtIC5zdHlsZS1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb250LTMwMCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5mb250LTIwMCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzJjYjNhMCAhaW1wb3J0YW50O1xufVxuXG4ubnVtYmVyVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvbnQtc3otMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LCA6aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2IzYTAgIWltcG9ydGFudDtcbn1cblxuLmZpbGVOYW1lIHtcbiAgY29sb3I6ICNGRkY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5maWxlQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOTk5cHg7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAwO1xufVxuXG4uZmlsZS1saXN0IC5maWxlLWVudHJ5IHtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xufVxuXG4uZmlsZS1saXN0IC5maWxlLWVudHJ5Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjlmNjtcbn1cblxuLmZpbGUtbGlzdCAuZmlsZS1lbnRyeSAuZmlsZS1uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5maWxlLWxpc3Qge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZmlsZS1saXN0IC5maWxlLWVudHJ5IC5maWxlLXJlbW92ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVwbG9hZEFyZWEge1xuICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIDpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgd2lkdGg6IDQlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2IzYTA7XG4gIGhlaWdodDogMjAlO1xuICB0b3A6IDM3JTtcbn1cblxuLmNhcmQtcGFja2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYnV0dG9uVXBsb2FkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY2hlY2tib3hfYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIGNlbnRlciBjaGVja2JveCBob3Jpem9udGFsbHkgKi9cbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm9fcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnZlcnRpY2FsX2FsaWduIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ0LCAxNzksIDE2MCwgMC41KTtcbiAgcGFkZGluZzogN3B4IDdweDtcbn1cblxuLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwMCUgMTAwJTtcbn1cblxubGFiZWwge1xuICBjb2xvcjogIzUwNTM1Yjtcbn1cblxuLnBhY2thZ2UtaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbnVsIGxpIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzNDNDg1ODtcbn1cblxuLnBhY2thZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VsZWN0ZWQtc2VydmljZSwgLnNlbGVjdGVkLXBhY2thZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjJiY2E0O1xufVxuXG4uY2FyZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWNrYWdlLWNhcmRzIHtcbiAgaGVpZ2h0OiA4NyUgIWltcG9ydGFudDtcbn1cblxuLmNhcmRzIC5jYXJkIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jYXJkcyAuc2VsZWN0ZWQtdGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIHJpZ2h0OiAxN3B4O1xufVxuXG4uY2FyZHMgLnNlbGVjdGVkLXRpY2s6OmJlZm9yZSwgLmNhcmRzIC5zZWxlY3RlZC10aWNrOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5jYXJkcyAuc2VsZWN0ZWQtdGljazo6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDEuMzVlbTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjJiY2E0O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjJiY2E0O1xufVxuXG4uY2FyZHMgLnRpY2staWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjNweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5ub3QtYXZpYWxhYmxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjQkJCO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/visualisation-service/visualisation-service.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/visualisation-service/visualisation-service.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-lg-4\">\n    <div class=\"row plan\">\n      <div *ngIf=\"package.name == 'Innenvisualisierung'\">\n        <img class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor.jpg\">\n        <img *ngIf=\"quality == 1\" class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor_basic.jpg\">\n        <img *ngIf=\"quality == 2\" class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor_standard.jpg\">\n        <img *ngIf=\"quality == 3\" class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor_high_quality.jpg\">\n        <img *ngIf=\"quality == 4\" class=\"card-img-top\" src=\"../../assets/images/visualisation/indoor_premium.jpg\">\n      </div>\n      <div *ngIf=\"package.name == 'Außenvisualisierung'\">\n        <img class=\"card-img-top\" src=\"../../assets/images/visualisation/outdoor.jpeg\">\n        <img *ngIf=\"quality == 1\" class=\"card-img-top\" src=\"../../assets/images/visualisation/outdoor_basic.jpeg\">\n        <img *ngIf=\"quality == 2\" class=\"card-img-top\" src=\"../../assets/images/visualisation/outdoor_standard.jpeg\">\n        <img *ngIf=\"quality == 3\" class=\"card-img-top\"\n          src=\"../../assets/images/visualisation/outdoor_high_quality.jpeg\">\n        <img *ngIf=\"quality == 4\" class=\"card-img-top\" src=\"../../assets/images/visualisation/outdoor_premium.jpeg\">\n      </div>\n    </div>\n  </div>\n  <div style=\"clear: both;\"></div>\n  <div class=\"col-12 col-lg-8 scroll-section\">\n    <form [formGroup]=\"visualisationForm\" class=\"\">\n      <div class=\"card cgrid margin\">\n        <div class=\"card-header\">\n          <a class=\"my-link clickable\" (click)=\"active1 = !active1\" [attr.aria-expanded]=\"active1\"\n            aria-controls=\"collapse1\">\n            <h5 class=\"card-title text-white text-left wsn row\">\n              <span class=\"col-8\">\n                <span class=\"fas text-left mr-2\" [ngClass]=\"{\n                    'fa-chevron-right': !active1,\n                    'fa-chevron-down': active1\n                  }\">\n                </span> Produktdetails anzeigen\n              </span>\n            </h5>\n          </a>\n        </div>\n        <div [collapse]=\"!active1\">\n          <div class=\"card-body\">\n            <ul class=\"list-unstyled font-500\">\n              <li *ngFor=\"let item of package.package_contents\" class=\"text-truncate\"> ✓ {{item}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- ############ -->\n      <div class=\"row vertical_align\">\n        <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n          <div class=\"font-300\">\n            Wählen Sie das Ausgabeformat\n          </div>\n        </div>\n      </div>\n      <div class=\"row vertical_align\">\n        <div class=\"cards col-4\" (click)=\"packageSelectHandler('outputFormat', 1, $event)\">\n          <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': outputFormat==1}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                Standbild\n              </h4>\n              <!-- <div *ngIf=\"(package.name == 'Außenvisualisierung')\">✓ verfügbar</div> -->\n            </div>\n          </div>\n          <div *ngIf=\"outputFormat == 1\" class=\"selected-tick\">\n          </div>\n          <i class=\"fa fa-check tick-icon\"></i>\n        </div>\n        <div class=\"cards col-4\" (click)=\"packageSelectHandler('outputFormat', 2, $event)\">\n          <div class=\"card card-pricing card-raised package\"\n            [ngClass]=\"{'selected-service': outputFormat==2, 'not-avialable': package.name == 'Außenvisualisierung'}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                360° Tour\n              </h4>\n              <!-- <div *ngIf=\"(package.name == 'Außenvisualisierung')\">bald verfügbar</div> -->\n            </div>\n          </div>\n          <div *ngIf=\"outputFormat == 2 && !(package.name == 'Außenvisualisierung')\" class=\"selected-tick\">\n          </div>\n          <i *ngIf=\"!(package.name == 'Außenvisualisierung')\" class=\"fa fa-check tick-icon\"></i>\n        </div>\n        <div class=\"cards col-4\" (click)=\"packageSelectHandler('outputFormat', 3, $event)\">\n          <div class=\"card card-pricing card-raised package\"\n            [ngClass]=\"{'selected-service': outputFormat==3, 'not-avialable': package.name == 'Außenvisualisierung'}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                Rundflug\n              </h4>\n              <!-- <div *ngIf=\"(package.name == 'Außenvisualisierung')\">bald verfügbar</div> -->\n            </div>\n          </div>\n          <div *ngIf=\"outputFormat == 3 && !(package.name == 'Außenvisualisierung')\" class=\"selected-tick\">\n          </div>\n          <i *ngIf=\"!(package.name == 'Außenvisualisierung')\" class=\"fa fa-check tick-icon\"></i>\n        </div>\n      </div>\n\n      <hr class=\"hr_floorplan\">\n      <!-- ############ -->\n\n      <!-- ############ -->\n      <div class=\"row vertical_align\">\n        <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n          <div class=\"font-300\">\n            Wählen Sie die gewünschte Qualitätsstufe\n          </div>\n        </div>\n      </div>\n      <div class=\"row vertical_align\">\n        <div class=\"cards col-3\" (click)=\"packageSelectHandler('quality', 1, $event)\">\n          <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': quality==1}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                Basic\n              </h4>\n              <div *ngIf=\"outputFormat\">{{ priceMatrix[outputFormat-1][0] }} € pro\n                <span *ngIf=\"outputFormat != 3\"> Bild</span>\n                <span *ngIf=\"outputFormat == 3\"> Sekunde</span>\n              </div>\n              <div>✓ 1 Korrektur</div>\n            </div>\n          </div>\n          <div *ngIf=\"quality == 1\" class=\"selected-tick\">\n          </div>\n          <i class=\"fa fa-check tick-icon\"></i>\n        </div>\n        <div class=\"cards col-3\" (click)=\"packageSelectHandler('quality', 2, $event)\">\n          <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': quality==2}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                Standard\n              </h4>\n              <div *ngIf=\"outputFormat\">{{ priceMatrix[outputFormat-1][1] }} € pro\n                <span *ngIf=\"outputFormat != 3\"> Bild</span>\n                <span *ngIf=\"outputFormat == 3\"> Sekunde</span></div>\n              <div>✓ 2 Korrekturen</div>\n            </div>\n          </div>\n          <div *ngIf=\"quality == 2\" class=\"selected-tick\">\n          </div>\n          <i class=\"fa fa-check tick-icon\"></i>\n        </div>\n        <div *ngIf=\"outputFormat != 3\" class=\"cards col-3\" (click)=\"packageSelectHandler('quality', 3, $event)\">\n          <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': quality==3}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                High Quality\n              </h4>\n              <div *ngIf=\"outputFormat\">{{ priceMatrix[outputFormat-1][2] }} € pro Bild</div>\n              <div>✓ 3 Korrekturen</div>\n            </div>\n          </div>\n          <div *ngIf=\"quality == 3\" class=\"selected-tick\">\n          </div>\n          <i class=\"fa fa-check tick-icon\"></i>\n        </div>\n        <div *ngIf=\"outputFormat != 3\" class=\"cards col-3\" (click)=\"packageSelectHandler('quality', 4, $event)\">\n          <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': quality==4}\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">\n                Premium\n              </h4>\n              <div *ngIf=\"outputFormat\">{{ priceMatrix[outputFormat-1][3] }} € pro Bild</div>\n              <div>✓ 3 Korrekturen</div>\n            </div>\n          </div>\n          <div *ngIf=\"quality == 4\" class=\"selected-tick\">\n          </div>\n          <i class=\"fa fa-check tick-icon\"></i>\n        </div>\n      </div>\n\n      <hr class=\"hr_floorplan\">\n      <div *ngIf=\"outputFormat == 3\">\n        <div class=\"row vertical_align\">\n          <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n            <div class=\"font-300\">\n              Wählen Sie die gewünschte Videolänge\n            </div>\n          </div>\n        </div>\n        <div class=\"row vertical_align\">\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('length', 1, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': length==1}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  ca. 30 Sekunden\n                </h4>\n                <!-- <div *ngIf=\"quality\">+ {{ additionalMatrix[0] }} €</div> -->\n              </div>\n            </div>\n            <div *ngIf=\"length == 1\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('length', 2, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': length==2}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  ca. 40 Sekunden\n                </h4>\n                <!-- <div *ngIf=\"quality\">+ {{ additionalMatrix[1] }} €</div> -->\n              </div>\n            </div>\n            <div *ngIf=\"length == 2\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('length', 3, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': length==3}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  ca. 50 Sekunden\n                </h4>\n                <!-- <div *ngIf=\"quality\">+ {{ additionalMatrix[2] }} €</div> -->\n              </div>\n            </div>\n            <div *ngIf=\"length == 3\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n        </div>\n        <hr class=\"hr_floorplan\">\n      </div>\n\n      <div *ngIf=\"package.name == 'Außenvisualisierung'\">\n        <div class=\"row vertical_align\">\n          <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n            <div class=\"font-300\">\n              Wie viele Wohneinhheiten hat das Objekt?\n            </div>\n          </div>\n        </div>\n        <div class=\"row vertical_align\">\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('apartments', 1, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': apartments==1}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  1 - 4\n                </h4>\n                <div *ngIf=\"quality\">inklusive</div>\n              </div>\n            </div>\n            <div *ngIf=\"apartments == 1\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('apartments', 2, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': apartments==2}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  5 - 10\n                </h4>\n                <div *ngIf=\"quality\">+ {{ apartmentsMatrix[quality - 1] }} € pro Bild</div>\n              </div>\n            </div>\n            <div *ngIf=\"apartments == 2\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n          <div class=\"cards col-3\" (click)=\"packageSelectHandler('apartments', 3, $event)\">\n            <div class=\"card card-pricing card-raised package\" [ngClass]=\"{'selected-service': apartments==3}\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">\n                  10 +\n                </h4>\n                <div *ngIf=\"quality\">+ {{ 2 * apartmentsMatrix[quality - 1] }} € pro Bild</div>\n              </div>\n            </div>\n            <div *ngIf=\"apartments == 3\" class=\"selected-tick\">\n            </div>\n            <i class=\"fa fa-check tick-icon\"></i>\n          </div>\n        </div>\n        <hr class=\"hr_floorplan\">\n      </div>\n\n      <!-- ############ -->\n\n      <div class=\"row vertical_align\">\n        <div class=\"col-4 col-md-2\">\n          <input type=\"number\" id=\"numberPhotos\" matTooltip=\"{{errorMsg}}\" [matTooltipClass]=\"{'error-tooltip':true}\"\n            formControlName=\"numberPhotos\" class=\"form-control numberText\" min=\"1\" (change)=\"updatePrice()\" value=\"1\">\n        </div>\n        <div class=\"col-4 col-md-2\">\n          <div class=\"font-200\">\n            <span *ngIf=\"outputFormat != 3\">{{ price }} € je Bild</span>\n            <span *ngIf=\"outputFormat == 3 && this.visualisationForm.get('numberPhotos').value > 2\">+\n              {{ additionalPrice }} € je weiteren Raum</span>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6 pt-3 pt-md-0\">\n          <div class=\"font-300\">\n            <span *ngIf=\"outputFormat != 3\">Anzahl der Bilder</span>\n            <span *ngIf=\"outputFormat == 3\">Anzahl der Räume</span>\n          </div>\n          <div class=\"font-200\">\n            <span *ngIf=\"outputFormat != 3\">Bitte geben Sie die gewünschte Anzahl an Bildern an</span>\n            <span *ngIf=\"outputFormat == 3\">Bitte geben Sie die gewünschte Anzahl an Räumen an. Die ersten 3 Räume sind\n              inklusive</span>\n          </div>\n        </div>\n        <div class=\"col-2 d-none d-md-block text-center\">\n          <p class=\"font-300\">\n            {{total_price}} €\n          </p>\n        </div>\n      </div>\n\n      <hr class=\"hr_floorplan\">\n\n      <div class=\"mb-4\">\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" formControlName=\"description\"\n            placeholder=\"Kommentare/Anmerkungen für den Dienstleister\" #comments (change)=\"onChange()\"></textarea>\n        </div>\n      </div>\n\n      <hr class=\"hr_floorplan\">\n\n      <div class=\"row mb-4\">\n        <div class=\"col-8\">\n          <h4>Summe</h4>\n        </div>\n        <div class=\"col-4 font-sz-20 text-right\">\n          {{total_price}} €\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/visualisation-service/visualisation-service.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/visualisation-service/visualisation-service.component.ts ***!
  \**************************************************************************/
/*! exports provided: VisualisationServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationServiceComponent", function() { return VisualisationServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_models_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/models/package */ "./src/app/models/package.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisualisationServiceComponent = /** @class */ (function () {
    function VisualisationServiceComponent(fb) {
        this.fb = fb;
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active1 = false;
        this.outputFormat = 0;
        this.quality = 0;
        this.length = 0;
        this.apartments = 0;
        this.price = 0;
        this.total_price = '0,00';
        this.additionalPrice = 100;
        this.lengthMatrix = [30, 40, 50];
        this.apartmentsMatrix = [20, 25, 50, 100];
        this.visualisationForm = this.fb.group({
            description: [''],
            numberPhotos: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]]
        });
    }
    VisualisationServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.package.form = this.visualisationForm;
        this.visualisationForm.valueChanges.subscribe(function () {
            var formValues = {};
            formValues['description'] = _this.visualisationForm.value.description;
            formValues['numberPhotos'] = _this.visualisationForm.value.numberPhotos;
            formValues['packageNum'] = _this.package['package_key'];
            _this.onFormChange.emit(formValues);
        });
        if (this.package.name === 'Innenvisualisierung') {
            this.priceMatrix = [[210, 290, 450, 800],
                [290, 390, 700, 900],
                [40, 60, 0, 0]]; // video
        }
        else {
            this.priceMatrix = [[250, 300, 650, 950],
                [0, 0, 0, 0],
                [0, 0, 0, 0]]; // video
        }
    };
    VisualisationServiceComponent.prototype.onChange = function () {
        this.package['outputFormat'] = this.outputFormat;
        this.package['quality'] = this.quality;
        this.package['length'] = this.length;
        this.package['apartments'] = this.apartments;
        this.package['total_price'] = this.total_price;
        this.package['numPhotos'] = this.visualisationForm.value.numberPhotos;
        this.package['description'] = this.visualisationForm.value.description;
        this.package.form = this.visualisationForm;
    };
    Object.defineProperty(VisualisationServiceComponent.prototype, "description", {
        get: function () {
            return this.visualisationForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualisationServiceComponent.prototype, "numberPhotos", {
        get: function () {
            return this.visualisationForm.get('numberPhotos');
        },
        enumerable: true,
        configurable: true
    });
    VisualisationServiceComponent.prototype.packageSelectHandler = function (service, number, event) {
        switch (service) {
            case 'outputFormat':
                if (this.package.name === 'Innenvisualisierung') {
                    if (this.outputFormat === 3 || number === 3) {
                        this.quality = 0;
                        this.length = 0;
                        this.visualisationForm.controls['numberPhotos'].setValue(1);
                    }
                    if (this.outputFormat === number) {
                        this.outputFormat = 0;
                    }
                    else {
                        this.outputFormat = number;
                    }
                }
                else {
                    if (this.outputFormat === number || number > 1) {
                        this.outputFormat = 0;
                    }
                    else {
                        this.outputFormat = number;
                    }
                }
                break;
            case 'quality':
                if (this.quality === number) {
                    this.quality = 0;
                }
                else {
                    this.quality = number;
                }
                break;
            case 'length':
                if (this.length === number) {
                    this.length = 0;
                }
                else {
                    this.length = number;
                }
                break;
            case 'apartments':
                if (this.apartments === number) {
                    this.apartments = 0;
                }
                else {
                    this.apartments = number;
                }
                break;
        }
        this.updatePrice();
    };
    VisualisationServiceComponent.prototype.updatePrice = function () {
        if (!this.outputFormat || !this.quality) {
            this.price = 0;
        }
        else {
            this.price = this.priceMatrix[this.outputFormat - 1][this.quality - 1];
            if (this.package.name === 'Innenvisualisierung') {
                if (this.outputFormat === 3) {
                    if (this.length) {
                        this.price *= this.lengthMatrix[this.length - 1];
                    }
                    else {
                        this.price = 0;
                    }
                }
            }
            else {
                if (this.apartments) {
                    this.price += (this.apartments - 1) * this.apartmentsMatrix[this.quality - 1];
                }
                else {
                    this.price = 0;
                }
            }
        }
        this.calculateSum();
    };
    VisualisationServiceComponent.prototype.calculateSum = function () {
        if (this.outputFormat === 3) {
            if (this.visualisationForm.get('numberPhotos').value > 3) {
                this.total_price = accounting__WEBPACK_IMPORTED_MODULE_3__["formatMoney"](this.price + (this.visualisationForm.get('numberPhotos').value - 3) * this.additionalPrice, '', 2, '.', ',');
            }
            else {
                this.total_price = accounting__WEBPACK_IMPORTED_MODULE_3__["formatMoney"](this.price, '', 2, '.', ',');
            }
        }
        else {
            this.total_price = accounting__WEBPACK_IMPORTED_MODULE_3__["formatMoney"](this.price * this.visualisationForm.get('numberPhotos').value, '', 2, '.', ',');
        }
        this.onChange();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisualisationServiceComponent.prototype, "onFormChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("package"),
        __metadata("design:type", _app_models_package__WEBPACK_IMPORTED_MODULE_1__["Package"])
    ], VisualisationServiceComponent.prototype, "package", void 0);
    VisualisationServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualisation-service',
            template: __webpack_require__(/*! ./visualisation-service.component.html */ "./src/app/visualisation-service/visualisation-service.component.html"),
            styles: [__webpack_require__(/*! ./visualisation-service.component.css */ "./src/app/visualisation-service/visualisation-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], VisualisationServiceComponent);
    return VisualisationServiceComponent;
}());



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
// `ng build --configuration=staging` replaces `environment.ts` with `environment.staging.ts`
// `ng build --configuration=dev` replaces `environment.ts` with `environment.dev.ts`
// The list of file replacements can be found in `angular.json`.
/* Following is the dev key */
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCwL6AECH6fvbclRAyoC2rKs1YMRocZZXo',
        authDomain: 'imogent-platform-staging.firebaseapp.com',
        databaseURL: 'https://imogent-platform-staging.firebaseio.com',
        projectId: 'imogent-platform-staging',
        storageBucket: 'imogent-platform-staging.appspot.com',
        messagingSenderId: '750422950001'
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    if (window) {
        window.console.log = function () { }; // keine console.logs im Production Mode
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nandeesh/Documents/Imogent/imogent-platform/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map