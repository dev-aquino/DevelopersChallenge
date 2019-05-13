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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/tournament/tournament.component */ "./src/app/views/tournament/tournament.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");






var routes = [
    { path: 'tournament', component: _views_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_4__["TournamentComponent"] },
    { path: 'register', component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SPA';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/tournament/tournament.component */ "./src/app/views/tournament/tournament.component.ts");
/* harmony import */ var _services_tournament_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tournament.service */ "./src/app/services/tournament.service.ts");
/* harmony import */ var _custom_components_block_matches_block_matches_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-components/block-matches/block-matches.component */ "./src/app/custom-components/block-matches/block-matches.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _views_tournament_tournament_component__WEBPACK_IMPORTED_MODULE_11__["TournamentComponent"],
                _custom_components_block_matches_block_matches_component__WEBPACK_IMPORTED_MODULE_13__["BlockMatchesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            providers: [_services_tournament_service__WEBPACK_IMPORTED_MODULE_12__["TournamentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-components/block-matches/block-matches.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/custom-components/block-matches/block-matches.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-margin{\r\n    margin-bottom: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvYmxvY2stbWF0Y2hlcy9ibG9jay1tYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9ibG9jay1tYXRjaGVzL2Jsb2NrLW1hdGNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1tYXJnaW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/block-matches/block-matches.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/custom-components/block-matches/block-matches.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let match of listQuantityOfMatch; let i = index\" class=\"list-group my-margin\">\n  <button *ngFor=\"let item of matches[i].teams\" type=\"button\" class=\"list-group-item list-group-item-action\"\n    [ngClass]=\"isClassified(item.id) == true ? 'active' : ''\" (click)=\"increaseVictory(item.id, i)\"\n    [disabled]=\"isMatchFinished(i)\">{{item.name}}</button>\n</ul>"

/***/ }),

/***/ "./src/app/custom-components/block-matches/block-matches.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/custom-components/block-matches/block-matches.component.ts ***!
  \****************************************************************************/
/*! exports provided: BlockMatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMatchesComponent", function() { return BlockMatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tournament.service */ "./src/app/services/tournament.service.ts");
/* harmony import */ var src_app_custom_types_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-types/dictionary */ "./src/app/custom-types/dictionary.ts");




var BlockMatchesComponent = /** @class */ (function () {
    function BlockMatchesComponent(service) {
        this.service = service;
        this.listQuantityOfMatch = [];
    }
    BlockMatchesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BlockMatchesComponent.prototype, "matches", {
        get: function () {
            return this.service.matches;
        },
        enumerable: true,
        configurable: true
    });
    BlockMatchesComponent.prototype.isMatchFinished = function (indexMatch) {
        var result = this.service.tempClassifiedTeams.some(function (x) { return x.key == indexMatch; });
        return result;
    };
    BlockMatchesComponent.prototype.isClassified = function (idTeam) {
        var result = this.service.tempClassifiedTeams.some(function (x) { return x.value == idTeam; });
        return result;
    };
    BlockMatchesComponent.prototype.increaseVictory = function (idTeam, indexMatch) {
        var obj = new src_app_custom_types_dictionary__WEBPACK_IMPORTED_MODULE_3__["Dictionary"]();
        obj.key = indexMatch;
        obj.value = idTeam;
        this.service.tempClassifiedTeams.push(obj);
        var listClassified = this.service.tempClassifiedTeams.map(function (x) { return x.value; });
        var listTeams = this.service.teamList.filter(function (x) { return listClassified.includes(x.id); });
        this.service.updateClassifiedTeams(listTeams);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockMatchesComponent.prototype, "listQuantityOfMatch", void 0);
    BlockMatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-matches',
            template: __webpack_require__(/*! ./block-matches.component.html */ "./src/app/custom-components/block-matches/block-matches.component.html"),
            styles: [__webpack_require__(/*! ./block-matches.component.css */ "./src/app/custom-components/block-matches/block-matches.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"]])
    ], BlockMatchesComponent);
    return BlockMatchesComponent;
}());



/***/ }),

/***/ "./src/app/custom-types/dictionary.ts":
/*!********************************************!*\
  !*** ./src/app/custom-types/dictionary.ts ***!
  \********************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/custom-types/request-process-victory.ts":
/*!*********************************************************!*\
  !*** ./src/app/custom-types/request-process-victory.ts ***!
  \*********************************************************/
/*! exports provided: RequestProcessVictory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestProcessVictory", function() { return RequestProcessVictory; });
var RequestProcessVictory = /** @class */ (function () {
    function RequestProcessVictory() {
    }
    return RequestProcessVictory;
}());



/***/ }),

/***/ "./src/app/custom-types/request-register-team.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-types/request-register-team.ts ***!
  \*******************************************************/
/*! exports provided: RequestRegisterTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRegisterTeam", function() { return RequestRegisterTeam; });
var RequestRegisterTeam = /** @class */ (function () {
    function RequestRegisterTeam() {
    }
    return RequestRegisterTeam;
}());



/***/ }),

/***/ "./src/app/custom-types/team.ts":
/*!**************************************!*\
  !*** ./src/app/custom-types/team.ts ***!
  \**************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team() {
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/services/tournament.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tournament.service.ts ***!
  \************************************************/
/*! exports provided: TournamentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentService", function() { return TournamentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custom_types_request_register_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-types/request-register-team */ "./src/app/custom-types/request-register-team.ts");
/* harmony import */ var _custom_types_request_process_victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-types/request-process-victory */ "./src/app/custom-types/request-process-victory.ts");





var TournamentService = /** @class */ (function () {
    function TournamentService(http) {
        this.http = http;
        this.urlBase = 'https://localhost:44375/api/tournament/';
        this.canStartTournament = false;
        this.teamList = [];
        this.classifiedTeams = [];
        this.tempClassifiedTeams = [];
        this.matches = [];
    }
    TournamentService.prototype.registerTeam = function (team) {
        var _this = this;
        var request = new _custom_types_request_register_team__WEBPACK_IMPORTED_MODULE_3__["RequestRegisterTeam"]();
        if (team.name !== undefined && team.name !== null && team.name.trim().length == 0) {
            team.name = 'vazio';
        }
        request.team = team;
        this.http.post(this.urlBase + 'RegisterTeam', request).subscribe(function (result) {
            if (result.notifications.length == 0) {
                _this.teamList.push(result.response);
            }
            else {
                result.notifications.forEach(function (msg) {
                    console.log(msg);
                });
            }
            ;
        });
    };
    TournamentService.prototype.removeRegisteredTeams = function () {
        var _this = this;
        this.http.get(this.urlBase + 'RemoveRegisteredTeams').subscribe(function (result) {
            if (result.notifications.length == 0 && result.response == true) {
                _this.teamList = [];
            }
            else {
                result.notifications.forEach(function (msg) {
                    console.log(msg);
                });
            }
            ;
        });
    };
    TournamentService.prototype.checkIfTournamentCanStart = function () {
        var _this = this;
        this.http.get(this.urlBase + 'CheckIfTournamentCanStart').subscribe(function (result) {
            _this.canStartTournament = result.response;
        });
    };
    TournamentService.prototype.checkIfTeamLimitReached = function () {
        return this.teamList.length == 8;
    };
    TournamentService.prototype.getTeams = function () {
        var _this = this;
        this.http.get(this.urlBase + 'GetTeams').subscribe(function (result) {
            if (result.notifications.length == 0) {
                _this.teamList = result.response;
            }
            else {
                result.notifications.forEach(function (msg) {
                    console.log(msg);
                });
            }
            ;
        });
    };
    TournamentService.prototype.processVictory = function (idsTeam) {
        var _this = this;
        var request = new _custom_types_request_process_victory__WEBPACK_IMPORTED_MODULE_4__["RequestProcessVictory"]();
        request.idsTeam = idsTeam;
        this.http.post(this.urlBase + 'ProcessVictory', request).subscribe(function (result) {
            if (result.notifications.length == 0) {
                _this.classifiedTeams = result.response;
                _this.createMatches();
            }
            else {
                result.notifications.forEach(function (msg) {
                    console.log(msg);
                });
            }
            ;
        });
    };
    TournamentService.prototype.createMatches = function () {
        var _this = this;
        this.http.get(this.urlBase + 'CreateMatches').subscribe(function (result) {
            if (result.notifications.length == 0) {
                _this.matches = result.response;
            }
            else {
                result.notifications.forEach(function (msg) {
                    console.log(msg);
                });
            }
            ;
        });
    };
    TournamentService.prototype.updateClassifiedTeams = function (teamList) {
        this.classifiedTeams = teamList;
    };
    TournamentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TournamentService);
    return TournamentService;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Gerenciador de torneio</h1>\n      <p class=\"lead\">Leia abaixo como funciona o gerenciador de torneio.</p>\n      <hr class=\"my-4\">\n      <p>Deve ser cadastrado 4 ou 8 times.</p>\n      <p>O torneio só poderá ser iniciado quando o critério acima for atendido.</p>\n      <button type=\"button\" class=\"btn-lg btn-block\"\n        [ngClass]=\"teamLimitReached == false ? 'btn btn-primary' : 'btn btn-danger'\" routerLink=\"/register\"\n        [disabled]=\"teamLimitReached\">Cadastrar times</button>\n      <button type=\"button\" class=\"btn-lg btn-block\"\n        [ngClass]=\"canStartTournament == true ? 'btn btn-success' : 'btn btn-danger'\" routerLink=\"/tournament\"\n        [disabled]=\"!canStartTournament\">Iniciar torneio</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tournament.service */ "./src/app/services/tournament.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
        this.service.getTeams();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.service.checkIfTournamentCanStart();
    };
    Object.defineProperty(HomeComponent.prototype, "teamLimitReached", {
        get: function () {
            var result = this.service.checkIfTeamLimitReached();
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "canStartTournament", {
        get: function () {
            return this.service.canStartTournament;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-header\">\n        TIMES\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li *ngFor=\"let item of teamList; let i = index; let l = last;\" class=\"list-group-item\"\n          [ngClass]=\"l == true ? 'active' : ''\">{{i + 1}} | {{item.name}}</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-4 align-self-center\">\n    <div class=\"card\" style=\"height: 100vh;\">\n      <div class=\"card-body\">\n        <div class=\"form-group\" style=\"margin-top: 50%;\">\n          <label>Nome do time :</label>\n          <input class=\"form-control\" type=\"text\" placeholder=\"Insira o nome do time\" [(ngModel)]=\"team.name\"\n            [disabled]=\"teamLimitReached\">\n        </div>\n        <div class=\"d-flex justify-content-around\">\n          <button [ngClass]=\"teamLimitReached == false ? 'btn btn-success' : 'btn btn-danger'\"\n            [disabled]=\"teamLimitReached\" (click)=\"submit()\">Registrar time</button>\n          <button [ngClass]=\"teamLimitReached == true ? 'btn btn-success' : 'btn btn-primary'\"\n            routerLink=\"/home\">Voltar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tournament.service */ "./src/app/services/tournament.service.ts");
/* harmony import */ var src_app_custom_types_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-types/team */ "./src/app/custom-types/team.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service) {
        this.service = service;
        this.team = new src_app_custom_types_team__WEBPACK_IMPORTED_MODULE_3__["Team"]();
        this.service.getTeams();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterComponent.prototype, "teamList", {
        get: function () {
            return this.service.teamList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "teamLimitReached", {
        get: function () {
            return this.service.checkIfTeamLimitReached();
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submit = function () {
        this.service.registerTeam(this.team);
        this.team = new src_app_custom_types_team__WEBPACK_IMPORTED_MODULE_3__["Team"]();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/tournament/tournament.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/tournament/tournament.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvdXJuYW1lbnQvdG91cm5hbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/tournament/tournament.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/tournament/tournament.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-between\">\n  <div class=\"col-md-4 align-self-start\">\n    <app-block-matches [listQuantityOfMatch]=\"quantityOfMatch\"></app-block-matches>\n  </div>\n  <div class=\"offset-md-4 col-md-4 align-self-center\">\n    <h1>Selecione o vencedor de cada confronto ao lado.</h1>\n  </div>\n  <div class=\"w-100\"></div>\n  <div class=\"col\">\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-around\">\n          <button class=\"btn btn-primary\" routerLink=\"/home\">Voltar</button>\n          <button [ngClass]=\"canToGoNextStep == true ? 'btn btn-success' : 'btn btn-danger'\"\n            [disabled]=\"!canToGoNextStep\" (click)=\"toNextStep()\">Avançar fase</button>\n        </div>\n        <div *ngIf=\"hasWinner\">\n          <h1>VENCEDOR</h1>\n          <h3>{{ nameWinner }}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/tournament/tournament.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/tournament/tournament.component.ts ***!
  \**********************************************************/
/*! exports provided: TournamentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentComponent", function() { return TournamentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tournament.service */ "./src/app/services/tournament.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TournamentComponent = /** @class */ (function () {
    function TournamentComponent(service, router) {
        this.service = service;
        this.router = router;
        this.hasWinner = false;
        this.nameWinner = '';
        this._showBlockMatches = true;
        if (this.service.classifiedTeams.length == 0) {
            var classifiedTeams = this.service.teamList;
            this.service.updateClassifiedTeams(classifiedTeams);
        }
    }
    Object.defineProperty(TournamentComponent.prototype, "showBlockMatches", {
        get: function () {
            return this._showBlockMatches;
        },
        enumerable: true,
        configurable: true
    });
    TournamentComponent.prototype.ngOnInit = function () {
        this.service.createMatches();
    };
    Object.defineProperty(TournamentComponent.prototype, "quantityOfMatch", {
        get: function () {
            var iterableFake = [];
            var size = this.service.matches.length;
            for (var index = 0; index < size; index++) {
                iterableFake.push(null);
            }
            return iterableFake;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TournamentComponent.prototype, "matches", {
        get: function () {
            return this.service.matches;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TournamentComponent.prototype, "canToGoNextStep", {
        get: function () {
            var result = this.matches.length == this.service.tempClassifiedTeams.length && this.hasWinner == false;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    TournamentComponent.prototype.toNextStep = function () {
        this.router.navigate(['/home']);
        this.prepareNextStep();
        this.router.navigate(['/tournament']);
    };
    TournamentComponent.prototype.changeExibitionBlockMatches = function () {
        this._showBlockMatches = !this.showBlockMatches;
    };
    TournamentComponent.prototype.prepareNextStep = function () {
        var idsTeams = this.service.classifiedTeams.map(function (x) { return x.id; });
        if (idsTeams.length == 1) {
            this.hasWinner = true;
            this.nameWinner = this.service.classifiedTeams[0].name;
            this.service.updateClassifiedTeams([]);
            this.service.removeRegisteredTeams();
        }
        else {
            this.service.processVictory(idsTeams);
        }
        this.service.tempClassifiedTeams = [];
    };
    TournamentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament',
            template: __webpack_require__(/*! ./tournament.component.html */ "./src/app/views/tournament/tournament.component.html"),
            styles: [__webpack_require__(/*! ./tournament.component.css */ "./src/app/views/tournament/tournament.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TournamentComponent);
    return TournamentComponent;
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
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\GitHub\DevelopersChallenge\Nibo Challenge\Nibo Challenge\SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map