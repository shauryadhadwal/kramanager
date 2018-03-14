webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content{\r\n    padding:1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n    <mat-tab label=\"Employees\">\r\n        <div class=\"tab-content\">\r\n            <app-admin-employees></app-admin-employees>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Projects\">\r\n        <div class=\"tab-content\">\r\n            <app-admin-projects></app-admin-projects>\r\n        </div>\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"Roles\">\r\n        <div class=\"tab-content\">\r\n            <app-admin-roles></app-admin-roles>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Credentials\">\r\n        <div class=\"tab-content\">\r\n            <app-credential-manager></app-credential-manager>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Caution\">\r\n        <div class=\"tab-content\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"executeTest()\">Execute Test</button>\r\n            </div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_dashboard_service__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard/shared/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(dataService) {
        this.dataService = dataService;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent.prototype.executeTest = function () {
        this.dataService.executeTest().subscribe(function (res) { console.log(res); });
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_dashboard_service__["a" /* DashboardService */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard/shared/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
    }
    DashboardService.prototype.executeTest = function () {
        var url = this.apiUrl + '/admin/test';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\r\n    overflow: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n#table-container {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.space-between {\r\n    visibility: hidden;\r\n    margin: 0 5px;\r\n}\r\n\r\n.turn-green:hover {\r\n    color: green;\r\n}\r\n\r\n.turn-red:hover {\r\n    color: red;\r\n}\r\n\r\n.turn-yellow:hover {\r\n    color: gold;\r\n}\r\n\r\n.stay-green {\r\n    color: green;\r\n}\r\n\r\n.stay-red {\r\n    color: red;\r\n}\r\n\r\n.btn-confirmation {\r\n    display: none;\r\n}\r\n\r\n.btn-confirmation.active {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Employees</h4>\r\n<div id=\"table-container\">\r\n    <div class=\"example-header\">\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- EmpoyeeId Column -->\r\n        <ng-container matColumnDef=\"empId\">\r\n            <mat-header-cell *matHeaderCellDef> Employee Id </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.empId}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Project Column -->\r\n        <ng-container matColumnDef=\"project\">\r\n            <mat-header-cell *matHeaderCellDef> Project </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.project}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n                <!-- Edit Column -->\r\n                <a class=\"turn-green\" (click)=\"openEditDialog(element.empId)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n                <a href=\"\" class=\"space-between\"></a>\r\n                <!-- Delete Column -->\r\n                <a class=\"turn-red\" (click)=\"toggleConfirmation(element.empId)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                </a>\r\n                <a href=\"\" class=\"space-between\"></a>\r\n                <span class=\"btn-confirmation\" [class.active]=\"checkConfirmation(element.empId)\">\r\n                    <!-- Delete  -->\r\n                    <a (click)=\"deleteEmployee(element.empId); toggleConfirmation(element.empId)\">\r\n                        <i class=\"turn-green fas fa-check\"></i>\r\n                    </a>\r\n                    <a href=\"\" class=\"space-between\"></a>\r\n                    <!-- Cancel Delete -->\r\n                    <a (click)=\"toggleConfirmation(element.empId)\">\r\n                        <i class=\"turn-red fas fa-times\"></i>\r\n                    </a>\r\n                    <a href=\"\" class=\"space-between\"></a>\r\n                </span>\r\n                <!-- Password Manager Column -->\r\n                <a class=\"turn-yellow\" (click)=\"openCredentialManager(element.empId)\">\r\n                    <i class=\"fas fa-key\"></i>\r\n                </a>\r\n                <a href=\"\" class=\"space-between\"></a>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n</div>\r\n<h5>Total: {{totalEmployees}}</h5>\r\n<div id=\"button-container\">\r\n    <button mat-raised-button (click)=\"openDialog()\" *ngIf=\"!isInputOpen\">\r\n        <i class=\"stay-green fas fa-plus\"></i> Add Employee</button>\r\n        <button mat-raised-button (click)=\"refreshTable()\">\r\n                <i class=\"stay-green fas fa-sync\"></i> Refresh </button>\r\n</div>\r\n<div id=\"backup-container\">\r\n    <h2>Backup</h2>\r\n    <button mat-raised-button (click)=\"createBackup()\">Create backup of Users</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_employee_dialog_new_employee_dialog_component__ = __webpack_require__("../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_admin_employees_service__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/admin-employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminEmployeesComponent = /** @class */ (function () {
    function AdminEmployeesComponent(dataService, dialog, router) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.isInputOpen = false;
        this.isConfirmationOpen = false;
        this.displayedColumns = ['name', 'empId', 'project', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTableDataSource */]();
        this.positionList = [];
        this.projectList = [];
    }
    AdminEmployeesComponent.prototype.ngOnInit = function () {
        this.refreshTable();
    };
    AdminEmployeesComponent.prototype.createBackup = function () {
        this.dataService.createBackup().subscribe(function (res) { return console.log(res); });
    };
    AdminEmployeesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminEmployeesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__new_employee_dialog_new_employee_dialog_component__["a" /* NewEmployeeDialogComponent */], {
            data: {
                user: null,
                positionList: this.positionList,
                projectList: this.projectList
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== null && result !== undefined) {
                _this.createNewEmployee(result);
            }
        });
    };
    AdminEmployeesComponent.prototype.openEditDialog = function (empId) {
        var _this = this;
        var dialogRef = null;
        this.dataService.getEmployeeById(empId).subscribe(function (res) {
            dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__new_employee_dialog_new_employee_dialog_component__["a" /* NewEmployeeDialogComponent */], {
                data: {
                    user: res,
                    positionList: _this.positionList,
                    projectList: _this.projectList
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result !== null && result !== undefined) {
                    _this.updateEmployee(result);
                }
            });
        });
    };
    AdminEmployeesComponent.prototype.refreshTable = function () {
        var _this = this;
        this.dataService.getUsers()
            .subscribe(function (res) {
            _this.totalEmployees = res.data.length;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTableDataSource */](res.data);
        });
        this.dataService.getPositions()
            .subscribe(function (res) {
            _this.positionList = res;
        });
        this.dataService.getProjects()
            .subscribe(function (res) {
            _this.projectList = res;
        });
    };
    AdminEmployeesComponent.prototype.createNewEmployee = function (dto) {
        var _this = this;
        this.dataService.createEmployee(dto).subscribe(function (res) {
            _this.refreshTable();
        });
    };
    AdminEmployeesComponent.prototype.updateEmployee = function (dto) {
        var _this = this;
        this.dataService.updateEmployee(dto).subscribe(function (res) {
            _this.refreshTable();
        });
    };
    AdminEmployeesComponent.prototype.deleteEmployee = function (empId) {
        var _this = this;
        this.dataService.deleteEmployee(empId).subscribe(function (res) {
            _this.refreshTable();
        });
    };
    AdminEmployeesComponent.prototype.openCredentialManager = function (empId) {
        this.router.navigate(['admin', 'credentials', empId]);
    };
    AdminEmployeesComponent.prototype.toggleConfirmation = function (empId) {
        if (this.confirmationValue === empId) {
            this.confirmationValue = 0;
        }
        else {
            this.confirmationValue = empId;
        }
        console.log(this.confirmationValue);
    };
    AdminEmployeesComponent.prototype.checkConfirmation = function (empId) {
        if (empId === this.confirmationValue) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-admin-employees',
            template: __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_admin_employees_service__["a" /* AdminEmployeesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminEmployeesComponent);
    return AdminEmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\r\n    width: 100%;\r\n}\r\n\r\nform{\r\n    width: 300px;\r\n}\r\n\r\nbutton{\r\n    margin: 10px 0 10px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>New Employee Form</h2>\n<div id=\"form-container\" mat-dialog-content>\n    <form [formGroup]=\"inputForm\" (ngSubmit)=\"onSubmit(inputForm.valid)\">\n        <!-- FIRST NAME -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"firstName\" placeholder=\"First Name\">\n            <mat-error *ngIf=\"inputForm.get('firstName').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- LAST NAME -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"lastName\" placeholder=\"Last Name\">\n            <mat-error *ngIf=\"inputForm.get('lastName').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- EMPLOYEE ID -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"empId\" placeholder=\"Employee Id\">\n            <mat-error *ngIf=\"inputForm.get('empId').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- EMAIL ID -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"emailId\" placeholder=\"Email Id\">\n            <mat-error *ngIf=\"inputForm.get('emailId').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- PROJECTS -->\n        <mat-form-field class=\"full-width\">\n            <mat-select matInput formControlName=\"projectId\" placeholder=\"Project\" >\n                <mat-option [value]=\"item.projectId\" *ngFor=\"let item of data.projectList\">{{item.project}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"inputForm.get('projectId').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- POSITIONS -->\n        <mat-form-field class=\"full-width\">\n            <mat-select matInput formControlName=\"positionId\" placeholder=\"Position\" >\n                <mat-option [value]=\"item.positionId\" *ngFor=\"let item of data.positionList\">{{item.position}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"inputForm.get('positionId').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <div>\n            <button mat-raised-button type=\"submit\">Submit</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmployeeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewEmployeeDialogComponent = /** @class */ (function () {
    function NewEmployeeDialogComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewEmployeeDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(null);
    };
    NewEmployeeDialogComponent.prototype.ngOnInit = function () {
        if (this.data.user) {
            this.createEditForm(this.data.user);
            // this.selectedProject = this.data.user.projectId || null;
            // this.selectedPosition = this.data.user.positionId || null;
        }
        else {
            this.createForm();
        }
    };
    NewEmployeeDialogComponent.prototype.ngAfterViewInit = function () {
    };
    NewEmployeeDialogComponent.prototype.createForm = function () {
        this.inputForm = this.formBuilder.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            lastName: ['', []],
            empId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            positionId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            projectId: ['', []],
            emailId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
        });
    };
    NewEmployeeDialogComponent.prototype.createEditForm = function (user) {
        this.inputForm = this.formBuilder.group({
            firstName: [user.firstName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            lastName: [user.lastName, []],
            empId: [user.empId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            positionId: [user.positionId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            projectId: [user.projectId, []],
            emailId: [user.emailId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
        });
    };
    NewEmployeeDialogComponent.prototype.onSubmit = function (isValid) {
        if (isValid) {
            this.dialogRef.close(this.inputForm.value);
        }
    };
    NewEmployeeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-employee-dialog',
            template: __webpack_require__("../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], NewEmployeeDialogComponent);
    return NewEmployeeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/shared/admin-employees.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEmployeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_model__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/position.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_model__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminEmployeesService = /** @class */ (function () {
    function AdminEmployeesService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    AdminEmployeesService.prototype.getUsers = function () {
        var url = this.apiUrl + '/users';
        return this.http.get(url).map(this.extractData);
    };
    AdminEmployeesService.prototype.createBackup = function () {
        var url = this.apiUrl + '/admin/backup';
        return this.http.get(url).map(this.extractData);
    };
    AdminEmployeesService.prototype.getProjects = function () {
        var url = this.apiUrl + '/projects';
        return this.http.get(url)
            .map(function (res) {
            var body = res.json();
            var list = [];
            body.data.forEach(function (element) {
                list.push(new __WEBPACK_IMPORTED_MODULE_3__project_model__["a" /* ProjectDTO */](element.projectId, element.name));
            });
            return list;
        });
    };
    AdminEmployeesService.prototype.getPositions = function () {
        var url = this.apiUrl + '/positions';
        return this.http.get(url)
            .map(function (res) {
            var body = res.json();
            var list = [];
            body.data.forEach(function (element) {
                list.push(new __WEBPACK_IMPORTED_MODULE_2__position_model__["a" /* PositionDTO */](element.positionId, element.position));
            });
            return list;
        });
    };
    AdminEmployeesService.prototype.getEmployeeById = function (empId) {
        var url = this.apiUrl + '/users/single/' + empId;
        return this.http.get(url).map(function (res) {
            var body = res.json();
            var user = body.data;
            return new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* EmployeeDTO */](user.firstName, user.lastName, user.positionId, user.empId, user.emailId, user.projectId);
        });
    };
    AdminEmployeesService.prototype.createEmployee = function (dto) {
        var url = this.apiUrl + '/admin/user';
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(url, dto, options).map(this.extractData);
    };
    AdminEmployeesService.prototype.updateEmployee = function (dto) {
        var url = this.apiUrl + '/admin/user/update';
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(url, dto, options).map(this.extractData);
    };
    AdminEmployeesService.prototype.deleteEmployee = function (empId) {
        var url = this.apiUrl + '//admin/user/remove/' + empId;
        return this.http.delete(url).map(this.extractData);
    };
    AdminEmployeesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    AdminEmployeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], AdminEmployeesService);
    return AdminEmployeesService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDTO; });
var EmployeeDTO = /** @class */ (function () {
    function EmployeeDTO(firstName, lastName, positionId, empId, emailId, projectId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.positionId = positionId;
        this.empId = empId;
        this.emailId = emailId;
        this.projectId = projectId;
    }
    return EmployeeDTO;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/shared/position.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionDTO; });
var PositionDTO = /** @class */ (function () {
    function PositionDTO(positionId, position) {
        this.positionId = positionId;
        this.position = position;
    }
    return PositionDTO;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/shared/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDTO; });
var ProjectDTO = /** @class */ (function () {
    function ProjectDTO(projectId, project) {
        this.projectId = projectId;
        this.project = project;
    }
    return ProjectDTO;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/admin-projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\r\n    overflow: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n#table-container{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.space-between{\r\n    visibility: hidden;\r\n    margin: 0 5px;\r\n}\r\n\r\n.turn-green:hover{\r\n    color: green;\r\n}\r\n\r\n.turn-red:hover{\r\n    color: red;\r\n}\r\n\r\n.turn-yellow:hover{\r\n    color: gold;\r\n}\r\n\r\n.stay-green{\r\n    color: green;\r\n}\r\n\r\n.stay-red{\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/admin-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Projects</h4>\n<div id=\"table-container\">\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n        </ng-container>\n\n        <!-- Project Id Column -->\n        <ng-container matColumnDef=\"projectId\">\n            <mat-header-cell *matHeaderCellDef> ProjectId </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.projectId}} </mat-cell>\n        </ng-container>\n\n        <!-- Manager Name Column -->\n        <ng-container matColumnDef=\"manager\">\n            <mat-header-cell *matHeaderCellDef> Manager </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.manager}} </mat-cell>\n        </ng-container>\n\n        <!-- Team Lead Name Column -->\n        <ng-container matColumnDef=\"teamLead\">\n            <mat-header-cell *matHeaderCellDef> Team Lead </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.teamLead}} </mat-cell>\n        </ng-container>\n\n        <!-- Actions Column -->\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <!-- Edit Column -->\n                <a class=\"turn-green\">\n                    <i class=\"fas fa-edit\"></i>\n                </a>\n                <a href=\"\" class=\"space-between\"></a>\n                <!-- Delete Column -->\n                <a class=\"turn-red\">\n                    <i class=\"fas fa-trash\"></i>\n                </a>\n                <a href=\"\" class=\"space-between\"></a>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n<h5>Total: {{totalProjects}}</h5>\n<div id=\"button-container\">\n    <button mat-raised-button (click)=\"openDialog()\">\n        <i class=\"stay-green fas fa-plus\"></i> Add Project</button>\n    <button mat-raised-button (click)=\"refreshTable()\">\n        <i class=\"stay-green fas fa-sync\"></i> Refresh </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/admin-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_projects_service__ = __webpack_require__("../../../../../src/app/admin/admin-projects/shared/admin-projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_project_dialog_new_project_dialog_component__ = __webpack_require__("../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminProjectsComponent = /** @class */ (function () {
    function AdminProjectsComponent(dataService, dialog, router) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.isInputOpen = false;
        this.displayedColumns = ['name', 'projectId', 'manager', 'teamLead', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */]();
    }
    AdminProjectsComponent.prototype.ngOnInit = function () {
        this.refreshTable();
    };
    AdminProjectsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminProjectsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__new_project_dialog_new_project_dialog_component__["a" /* NewProjectDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res !== null && res !== undefined) {
                _this.createNewProject(res);
            }
        });
    };
    AdminProjectsComponent.prototype.refreshTable = function () {
        var _this = this;
        this.dataService.getProjectsList()
            .subscribe(function (projectsList) {
            _this.totalProjects = projectsList.length;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](projectsList);
        });
    };
    AdminProjectsComponent.prototype.createNewProject = function (dto) {
        var _this = this;
        this.dataService.createProject(dto).subscribe(function (res) {
            console.log(res);
            _this.refreshTable();
        });
    };
    AdminProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-projects',
            template: __webpack_require__("../../../../../src/app/admin/admin-projects/admin-projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-projects/admin-projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_admin_projects_service__["a" /* AdminProjectsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminProjectsComponent);
    return AdminProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\r\n    width: 100%;\r\n}\r\n\r\nform{\r\n    width: 300px;\r\n}\r\n\r\nbutton{\r\n    margin: 10px 0 10px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>New Project Form</h2>\n<div id=\"form-container\" mat-dialog-content>\n    <form [formGroup]=\"inputForm\" (ngSubmit)=\"onSubmit(inputForm.valid)\">\n        <!-- PROJECT NAME -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"name\" placeholder=\"Project Name\">\n            <mat-error *ngIf=\"inputForm.get('name').hasError('required')\">Required</mat-error>\n        </mat-form-field>\n        <!-- MANAGER -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"managerId\" placeholder=\"Manager Id\">\n            <mat-error *ngIf=\"inputForm.get('managerId').hasError('required')\">Required</mat-error>\n            <mat-error *ngIf=\"inputForm.get('managerId').hasError('patternInvalid')\">Not a number</mat-error>\n        </mat-form-field>\n        <!-- TEAM LEAD -->\n        <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"teamLeadId\" placeholder=\"Team Lead Id\">\n            <mat-error *ngIf=\"inputForm.get('teamLeadId').hasError('required')\">Required</mat-error>\n            <mat-error *ngIf=\"inputForm.get('teamLeadId').hasError('patternInvalid')\">Not a number</mat-error>\n        </mat-form-field>\n        <div>\n            <button mat-raised-button type=\"submit\">Submit</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_numberValidator__ = __webpack_require__("../../../../../src/app/shared/validators/numberValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NewProjectDialogComponent = /** @class */ (function () {
    function NewProjectDialogComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewProjectDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(null);
    };
    NewProjectDialogComponent.prototype.ngOnInit = function () {
        if (this.data !== null && this.data.project !== null) {
            this.createEditForm(this.data.project);
        }
        else {
            this.createForm();
        }
    };
    NewProjectDialogComponent.prototype.createForm = function () {
        this.inputForm = this.formBuilder.group({
            projectId: [0, []],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            managerId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_3__shared_validators_numberValidator__["a" /* numberValidator */])()]],
            teamLeadId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_3__shared_validators_numberValidator__["a" /* numberValidator */])()]],
        });
    };
    NewProjectDialogComponent.prototype.createEditForm = function (project) {
        this.inputForm = this.formBuilder.group({
            name: [project.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators_numberValidator__["a" /* numberValidator */]]],
            managerId: [project.managerId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            teamLeadId: [project.teamLeadId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
        });
    };
    NewProjectDialogComponent.prototype.onSubmit = function (isValid) {
        if (isValid) {
            this.dialogRef.close(this.inputForm.value);
        }
    };
    NewProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-project-dialog',
            template: __webpack_require__("../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], NewProjectDialogComponent);
    return NewProjectDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/shared/admin-projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_model__ = __webpack_require__("../../../../../src/app/admin/admin-projects/shared/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminProjectsService = /** @class */ (function () {
    function AdminProjectsService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    AdminProjectsService.prototype.getProjectsList = function () {
        var url = this.apiUrl + '/admin/projects';
        return this.http.get(url)
            .map(function (res) {
            var body = res.json();
            if (body.data == null) {
                return [];
            }
            var list = [];
            body.data.forEach(function (project) {
                list.push(new __WEBPACK_IMPORTED_MODULE_1__project_model__["a" /* ProjectDTO */](project.projectId, project.name, project.manager, project.teamLead));
            });
            return list;
        });
    };
    AdminProjectsService.prototype.createProject = function (project) {
        var url = this.apiUrl + '/admin/projects';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(url, project, options)
            .map(this.extractData);
    };
    AdminProjectsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    AdminProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], AdminProjectsService);
    return AdminProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-projects/shared/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDTO; });
var ProjectDTO = /** @class */ (function () {
    function ProjectDTO(projectId, name, manager, teamLead, startDate) {
        this.projectId = projectId;
        this.name = name;
        this.manager = manager;
        this.teamLead = teamLead;
        this.startDate = startDate;
    }
    return ProjectDTO;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-roles/admin-roles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red {\r\n    color: red;\r\n}\r\n\r\n.list-container {\r\n    margin-bottom: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-roles/admin-roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons-container\">\n    <button mat-raised-button (click)=\"getUsersBasedOnRole(roles.ADMIN)\">Admin</button>\n    <button mat-raised-button (click)=\"getUsersBasedOnRole(roles.MANAGER)\">Manager</button>\n    <button mat-raised-button (click)=\"getUsersBasedOnRole(roles.LEAD)\">Lead</button>\n    <button mat-raised-button (click)=\"getUsersBasedOnRole(roles.BASIC)\">Basic</button>\n</div>\n<h3>Active: {{active}}</h3>\n<div class=\"list-container\">\n    <ng-container *ngFor=\"let user of usersList\"></ng-container>\n    <mat-table #table [dataSource]=\"dataSource\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"position\">\n            <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <a class=\"red\" (click)=\"removeUser(element.empId)\">\n                    <i class=\"fas fa-trash\"></i>\n                </a>\n            </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n<div *ngIf=\"active\">\n    <mat-form-field hintLabel=\"Filer records by name, id, etc.\" class=\"filter-container\">\n        <input matInput #input placeholder=\"Employee Id\">\n    </mat-form-field>\n    <button mat-raised-button (click)=\"addUser(input.value)\" *ngIf=\"!isInputOpen\">\n        <i class=\"stay-green fas fa-plus\"></i> Add Employee</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-roles/admin-roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_roles_service__ = __webpack_require__("../../../../../src/app/admin/admin-roles/shared/admin-roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRolesComponent = /** @class */ (function () {
    function AdminRolesComponent(dataService) {
        this.dataService = dataService;
        this.roles = __WEBPACK_IMPORTED_MODULE_1__shared_enums__["a" /* ROLES */];
        this.displayedColumns = ['name', 'position', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */]();
    }
    AdminRolesComponent.prototype.ngOnInit = function () {
        this.active = this.roles.BASIC;
        this.getUsersBasedOnRole(this.active);
    };
    AdminRolesComponent.prototype.getUsersBasedOnRole = function (role) {
        var _this = this;
        this.active = role;
        this.dataService.getUsersBasedOnRole(role).subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](res);
        });
    };
    AdminRolesComponent.prototype.addUser = function (value) {
        var _this = this;
        var employeeId = parseInt(value, 10);
        this.dataService.addRoleWithUserId(employeeId, this.active).subscribe(function (res) {
            _this.getUsersBasedOnRole(_this.active);
        });
    };
    AdminRolesComponent.prototype.removeUser = function (value) {
        var _this = this;
        var employeeId = parseInt(value, 10);
        this.dataService.removeRoleWithUserId(employeeId, this.active).subscribe(function (res) {
            console.log(res);
            _this.getUsersBasedOnRole(_this.active);
        });
    };
    AdminRolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-roles',
            template: __webpack_require__("../../../../../src/app/admin/admin-roles/admin-roles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-roles/admin-roles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_admin_roles_service__["a" /* AdminRolesService */]])
    ], AdminRolesComponent);
    return AdminRolesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-roles/shared/admin-roles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRolesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roleDTO__ = __webpack_require__("../../../../../src/app/admin/admin-roles/shared/roleDTO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRolesService = /** @class */ (function () {
    function AdminRolesService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    AdminRolesService.prototype.getUsersBasedOnRole = function (role) {
        var url = this.apiUrl + '/admin/roles/' + role;
        return this.http.get(url).map(function (res) {
            var data = res.json().data;
            if (data !== null) {
                return data.map(function (x) { return new __WEBPACK_IMPORTED_MODULE_0__roleDTO__["a" /* RoleDTO */](x.empId, x.name, x.position); });
            }
            return [];
        });
    };
    AdminRolesService.prototype.addRoleWithUserId = function (empId, role) {
        var url = this.apiUrl + '/admin/roles';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var body = { role: role, empId: empId };
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    AdminRolesService.prototype.removeRoleWithUserId = function (empId, role) {
        var url = this.apiUrl + '/admin/roles/remove';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var body = { role: role, empId: empId };
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    AdminRolesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]])
    ], AdminRolesService);
    return AdminRolesService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-roles/shared/roleDTO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleDTO; });
var RoleDTO = /** @class */ (function () {
    function RoleDTO(empId, name, position) {
        this.empId = empId;
        this.name = name;
        this.position = position;
    }
    return RoleDTO;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_projects_shared_admin_projects_service__ = __webpack_require__("../../../../../src/app/admin/admin-projects/shared/admin-projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_roles_shared_admin_roles_service__ = __webpack_require__("../../../../../src/app/admin/admin-roles/shared/admin-roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_dashboard_shared_dashboard_service__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard/shared/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_roles_admin_roles_component__ = __webpack_require__("../../../../../src/app/admin/admin-roles/admin-roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_employees_shared_admin_employees_service__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/admin-employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_employees_admin_employees_component__ = __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_projects_admin_projects_component__ = __webpack_require__("../../../../../src/app/admin/admin-projects/admin-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_employees_new_employee_dialog_new_employee_dialog_component__ = __webpack_require__("../../../../../src/app/admin/admin-employees/new-employee-dialog/new-employee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__credential_manager_credential_manager_component__ = __webpack_require__("../../../../../src/app/admin/credential-manager/credential-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_projects_new_project_dialog_new_project_dialog_component__ = __webpack_require__("../../../../../src/app/admin/admin-projects/new-project-dialog/new-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_employees_admin_employees_component__["a" /* AdminEmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_roles_admin_roles_component__["a" /* AdminRolesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_projects_admin_projects_component__["a" /* AdminProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_employees_new_employee_dialog_new_employee_dialog_component__["a" /* NewEmployeeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__credential_manager_credential_manager_component__["a" /* CredentialManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_roles_admin_roles_component__["a" /* AdminRolesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_projects_new_project_dialog_new_project_dialog_component__["a" /* NewProjectDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__admin_dashboard_shared_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_5__admin_employees_shared_admin_employees_service__["a" /* AdminEmployeesService */],
                __WEBPACK_IMPORTED_MODULE_0__admin_projects_shared_admin_projects_service__["a" /* AdminProjectsService */],
                __WEBPACK_IMPORTED_MODULE_1__admin_roles_shared_admin_roles_service__["a" /* AdminRolesService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__admin_employees_new_employee_dialog_new_employee_dialog_component__["a" /* NewEmployeeDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__admin_projects_new_project_dialog_new_project_dialog_component__["a" /* NewProjectDialogComponent */]],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/credential-manager/credential-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/credential-manager/credential-manager.component.html":
/***/ (function(module, exports) {

module.exports = "{{employeeId}}"

/***/ }),

/***/ "../../../../../src/app/admin/credential-manager/credential-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CredentialManagerComponent = /** @class */ (function () {
    function CredentialManagerComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CredentialManagerComponent.prototype.ngOnInit = function () {
        this.employeeId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    };
    CredentialManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-credential-manager',
            template: __webpack_require__("../../../../../src/app/admin/credential-manager/credential-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/credential-manager/credential-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], CredentialManagerComponent);
    return CredentialManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-navsidebar></app-navsidebar>\r\n<router-outlet name=\"loginOutlet\"></router-outlet>\r\n<!-- main router outlet is in navsidebar.html -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_login_login_service__ = __webpack_require__("../../../../../src/app/authentication/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.loginService.startUpLogin();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_login_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_routes_module__ = __webpack_require__("../../../../../src/app/routes/routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kra_kra_module__ = __webpack_require__("../../../../../src/app/kra/kra.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_navsidebar_navsidebar_component__ = __webpack_require__("../../../../../src/app/shared/navsidebar/navsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__records_records_module__ = __webpack_require__("../../../../../src/app/records/records.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_navsidebar_navsidebar_component__["a" /* NavsidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_13__records_records_module__["a" /* RecordsModule */],
                __WEBPACK_IMPORTED_MODULE_4__kra_kra_module__["a" /* KraModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_1__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__routes_routes_module__["a" /* RoutesModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_lead_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-lead.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_manager_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-manager.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_service__ = __webpack_require__("../../../../../src/app/authentication/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__password_reset_dialog_password_reset_dialog_component__ = __webpack_require__("../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_password_service__ = __webpack_require__("../../../../../src/app/authentication/shared/password.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthConfig"]({
        tokenName: 'jwt_token',
        tokenGetter: (function () { return sessionStorage.getItem('jwt_token'); })
    }), http, options);
}
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__password_reset_dialog_password_reset_dialog_component__["a" /* PasswordResetDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12__password_reset_dialog_password_reset_dialog_component__["a" /* PasswordResetDialogComponent */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_11__angular_http__["RequestOptions"]],
                },
                __WEBPACK_IMPORTED_MODULE_6__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_password_service__["a" /* PasswordService */],
                __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_2__guards_auth_admin_guard__["a" /* AuthAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_1__guards_auth_manager_guard__["a" /* AuthManagerGuard */],
                __WEBPACK_IMPORTED_MODULE_0__guards_auth_lead_guard__["a" /* AuthLeadGuard */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/guards/auth-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (next, state) {
        if (this.storageService.USER_OBJECT.isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthAdminGuard.prototype.canActivateChild = function (next, state) {
        if (this.storageService.USER_OBJECT.isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/guards/auth-lead.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLeadGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLeadGuard = /** @class */ (function () {
    function AuthLeadGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    AuthLeadGuard.prototype.canActivate = function (next, state) {
        if (this.storageService.USER_OBJECT.isLead) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthLeadGuard.prototype.canActivateChild = function (next, state) {
        if (this.storageService.USER_OBJECT.isLead) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthLeadGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthLeadGuard);
    return AuthLeadGuard;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/guards/auth-manager.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManagerGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthManagerGuard = /** @class */ (function () {
    function AuthManagerGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    AuthManagerGuard.prototype.canActivate = function (next, state) {
        if (this.storageService.USER_OBJECT.isManager) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthManagerGuard.prototype.canActivateChild = function (next, state) {
        if (this.storageService.USER_OBJECT.isManager) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthManagerGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthManagerGuard);
    return AuthManagerGuard;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/authentication/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, globalService) {
        this.router = router;
        this.authService = authService;
        this.globalService = globalService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.globalService.loggedOff();
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_0__core_global_events_manager_service__["a" /* GlobalEventsManagerService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-container{\r\n    margin: 10px;\r\n    border: 2px solid rgb(216, 218, 219);\r\n    border-radius: 10px;\r\n    -webkit-box-shadow:  3px 3px rgb(216, 218, 219);\r\n            box-shadow:  3px 3px rgb(216, 218, 219);\r\n    max-width : 50%;\r\n    width: 500px;\r\n}\r\n\r\nform{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding:2em;\r\n}\r\n\r\n.extra-padding{\r\n    padding-bottom: 1.5em;\r\n}\r\n\r\n.register-container{\r\n    text-align: center;\r\n}\r\n\r\na{\r\n    color: blue;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <h2>Login Page</h2>\r\n    <div class=\"form-container\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.valid)\" novalidate>\r\n            <mat-form-field class=\"full-width extra-padding\" hintLabel=\"Your Nagarro Employee Id\">\r\n                <input matInput formControlName=\"empId\" placeholder=\"Employee Id\" type=\"text\">\r\n                <mat-error *ngIf=\"isUserWrong\">*Employee does not exist</mat-error>\r\n                <mat-error *ngIf=\"loginForm.get('empId').hasError('required')\">*Cannot be empty</mat-error>\r\n                <mat-error *ngIf=\"loginForm.get('empId').hasError('patternInvalid') && !isUserWrong\">*Not a valid Employee Id</mat-error>\r\n                \r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width extra-padding\">\r\n                <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\">\r\n                <mat-error *ngIf=\"isPasswordWrong\">*Wrong Password</mat-error>\r\n                <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">*Cannot be empty</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <button type=\"submit\" mat-raised-button class=\"gs-btn-color-primary\">Login</button>\r\n            <hr>\r\n        </form>\r\n    </div>\r\n    <button mat-raised-button (click)=\"resetPassword()\"><i class=\"fas fa-key\"></i> Reset Password</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__password_reset_dialog_password_reset_dialog_component__ = __webpack_require__("../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service__ = __webpack_require__("../../../../../src/app/authentication/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_validators_numberValidator__ = __webpack_require__("../../../../../src/app/shared/validators/numberValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, router, globalEventsManager, dialog, snackBar) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.globalEventsManager = globalEventsManager;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.loginService.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            empId: ['', [Object(__WEBPACK_IMPORTED_MODULE_8__shared_validators_numberValidator__["a" /* numberValidator */])(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function (isValid) {
        var _this = this;
        this.isPasswordWrong = false;
        this.isUserWrong = false;
        if (isValid) {
            var employeeId_1 = this.loginForm.value.empId;
            var formValue = this.loginForm.value;
            this.loginService.login(formValue)
                .subscribe(function (res) {
                if (res.success !== true) {
                    if (res.loginFailType === 'password') {
                        _this.isPasswordWrong = true;
                        _this.loginForm.reset({ empId: employeeId_1, password: '' });
                    }
                    else if (res.loginFailType === 'id') {
                        _this.isUserWrong = true;
                        _this.loginForm.reset({ empId: '', password: '' });
                    }
                }
                else if (res.success === true) {
                    _this.globalEventsManager.loggedIn();
                    _this.router.navigate(['/dashboard']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.resetPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__password_reset_dialog_password_reset_dialog_component__["a" /* PasswordResetDialogComponent */], {
            width: 'auto',
            height: 'auto',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.snackBar.open(res, '', {
                    duration: 2000,
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManagerService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_snackbar_service__ = __webpack_require__("../../../../../src/app/core/snackbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_utils__ = __webpack_require__("../../../../../src/app/authentication/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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












var moment = __WEBPACK_IMPORTED_MODULE_11_moment__;


var LoginService = /** @class */ (function () {
    function LoginService(http, authHttp, globalEventsManager, router, storageService, snackbarService) {
        this.http = http;
        this.authHttp = authHttp;
        this.globalEventsManager = globalEventsManager;
        this.router = router;
        this.storageService = storageService;
        this.snackbarService = snackbarService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
    }
    LoginService.prototype.login = function (obj) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var encrypted = Object(__WEBPACK_IMPORTED_MODULE_13__shared_utils__["a" /* encryptPayload */])(obj).toString();
        var body = JSON.stringify({ cipher: encrypted });
        return this.http.post(this.apiUrl + '/login', body, options)
            .map(function (res) { return _this.handleAuthentication(res, _this); });
    };
    LoginService.prototype.handleAuthentication = function (res, self) {
        var response = res.json();
        if (response.success === true) {
            var token = response.data.jwt_token;
            var userData = response.data.userData;
            self.storageService.saveItem('jwt_token', token); // save token in storage
            self.storageService.saveUserObject(userData);
        }
        else {
            this.snackbarService.openSnackBar(response.message);
        }
        return {
            success: response.success,
            loginFailType: response.loginFailType
        };
    };
    LoginService.prototype.isAuthenticated = function () {
        var token = this.storageService.getItem('jwt_token');
        if (token != null) {
            var expiry = moment.unix(__WEBPACK_IMPORTED_MODULE_12_jwt_decode__(token).exp);
            // Check if token has expired
            if (moment(expiry).isAfter(moment.now())) {
                var empId = parseInt(__WEBPACK_IMPORTED_MODULE_12_jwt_decode__(token).empId, 10);
                if (empId === this.storageService.USER_OBJECT.empId) {
                    this.globalEventsManager.loggedIn();
                    return true;
                }
                return false;
            }
            else {
                this.router.navigate(['login']);
            }
        }
        else {
            this.globalEventsManager.loggedOff();
            return false;
        }
    };
    LoginService.prototype.FillUserDetails = function (empId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.storageService.USER_OBJECT.empId) return [3 /*break*/, 1];
                        return [2 /*return*/, true];
                    case 1: return [4 /*yield*/, this.getUserDetails(empId).subscribe(function (res) {
                            if (res.success) {
                                _this.storageService.saveUserObject(res.data);
                                return true;
                            }
                            else {
                                return false;
                            }
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Launch on application start.
    LoginService.prototype.startUpLogin = function () {
        // const token = this.storageService.getItem('jwt_token');
        // if (token != null && token.length > 0) {
        //     const expiry = jwt_decoder(token).exp;
        //     // Token not expired.
        //     if (moment(expiry).isAfter(moment.now())) {
        //         const empId = parseInt(jwt_decoder(token).empId, 10);
        //         this.getUserDetails(empId).subscribe(result => {
        //             if (result.success) {
        //                 this.storageService.saveUserObject(result.data);
        //                 this.globalEventsManager.loggedIn();
        //                 this.router.navigate(['/dashboard']);
        //             }
        //         });
        //     }
        // } else {
        //     this.globalEventsManager.loggedOff();
        // }
    };
    LoginService.prototype.getUserDetails = function (id) {
        var url = this.apiUrl + '/users/complete/' + id;
        return this.authHttp.get(url).map(function (res) { return res.json() || null; });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"],
            __WEBPACK_IMPORTED_MODULE_9__core_global_events_manager_service__["a" /* GlobalEventsManagerService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__core_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__core_snackbar_service__["a" /* SnackbarService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-container {\r\n    width: 400px;\r\n    height: auto;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.margin-bottom {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.header {\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.header span {\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n    display: block;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.header button {\r\n    border: none;\r\n    background-color: white;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: red;\r\n    padding: 2px;\r\n    width: 20px;\r\n    height: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container class=\"dialog-container\">\r\n    <div class=\"header\">\r\n        <span>Reset Password</span>\r\n        <button (click)=\"dialogRef.close()\">\r\n            <i class=\"fas fa-times\"></i>\r\n        </button>\r\n    </div>\r\n    <div mat-dialog-content>\r\n        <ng-container *ngIf=\"!showPasswordFields\">\r\n            <form [formGroup]=\"verificationForm\" (ngSubmit)=\"onSendVerificationSubmit(verificationForm.valid)\" novalidate>\r\n                <mat-form-field class=\"full-width margin-bottom\">\r\n                    <input matInput formControlName=\"empId\" placeholder=\"Employee Id\">\r\n                    <mat-error *ngIf=\"verificationForm.get('empId').hasError('required')\">*Cannot be empty</mat-error>\r\n                    <mat-error *ngIf=\"verificationForm.get('empId').hasError('patternInvalid')\">*Invalid employee id entered</mat-error>\r\n                    <mat-error *ngIf=\"isUserWrong\">*Employee does not exist</mat-error>\r\n                </mat-form-field>\r\n                <button mat-raised-button class=\"full-width gs-btn-color-primary\" type=\"submit\">Send OTP</button>\r\n            </form>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"showPasswordFields\">\r\n            <p>OTP sent to:\r\n                <strong>{{emailId}}</strong>\r\n            </p>\r\n            <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onResetPasswordSubmit(resetPasswordForm.valid)\" novalidate>\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput formControlName=\"code\" placeholder=\"OTP\">\r\n                    <mat-error *ngIf=\"resetPasswordForm.get('code').hasError('required')\">*Cannot be empty</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput formControlName=\"password\" placeholder=\"New Password\" type=\"password\">\r\n                    <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('required')\">*Cannot be empty</mat-error>\r\n                    <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('maxlength')\">*Max length allowed is 15</mat-error>\r\n                    <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('minlength')\">*Min Length allowed is 5</mat-error>\r\n                </mat-form-field>\r\n                <button mat-raised-button class=\"full-width gs-btn-color-primary\" type=\"submit\">Submit</button>\r\n            </form>\r\n        </ng-container>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_password_service__ = __webpack_require__("../../../../../src/app/authentication/shared/password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_numberValidator__ = __webpack_require__("../../../../../src/app/shared/validators/numberValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PasswordResetDialogComponent = /** @class */ (function () {
    function PasswordResetDialogComponent(dialogRef, data, dataService, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.dialogRef.disableClose = true;
    }
    PasswordResetDialogComponent.prototype.ngOnInit = function () {
        this.createVerificationForm();
        this.createResetPasswordForm();
    };
    PasswordResetDialogComponent.prototype.createVerificationForm = function () {
        this.verificationForm = this.formBuilder.group({
            empId: ['', [Object(__WEBPACK_IMPORTED_MODULE_4__shared_validators_numberValidator__["a" /* numberValidator */])(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
        });
    };
    PasswordResetDialogComponent.prototype.createResetPasswordForm = function () {
        this.resetPasswordForm = this.formBuilder.group({
            code: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(5)]],
        });
    };
    PasswordResetDialogComponent.prototype.onSendVerificationSubmit = function (isValid) {
        var _this = this;
        this.isUserWrong = false;
        if (isValid) {
            this.dataService.sendVerificationMail(parseInt(this.verificationForm.value.empId, 10))
                .subscribe(function (res) {
                if (res.success) {
                    _this.emailId = res.data.emailId;
                    _this.employeeId = parseInt(res.data.empId, 10);
                    _this.showPasswordFields = true;
                }
                else {
                    _this.isUserWrong = true;
                    _this.verificationForm.reset({ empId: '' });
                    _this.emailId = '';
                }
            });
        }
    };
    PasswordResetDialogComponent.prototype.onResetPasswordSubmit = function (isValid) {
        var _this = this;
        if (isValid) {
            this.dataService.resetPassword({
                empId: this.employeeId,
                verificationCode: this.resetPasswordForm.value.code,
                newPassword: this.resetPasswordForm.value.password
            }).subscribe(function (res) {
                if (res.success) {
                    _this.dialogRef.close('Password was reset successfully!');
                }
                else {
                }
            });
        }
    };
    PasswordResetDialogComponent.prototype.ngOnDestroy = function () {
    };
    PasswordResetDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-password-reset-dialog',
            template: __webpack_require__("../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/password-reset-dialog/password-reset-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_0__shared_password_service__["a" /* PasswordService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], PasswordResetDialogComponent);
    return PasswordResetDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/shared/password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__("../../../../../src/app/authentication/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PasswordService = /** @class */ (function () {
    function PasswordService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    PasswordService.prototype.sendVerificationMail = function (empId) {
        var url = this.apiUrl + '/password/reset/sendVerification/' + empId;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PasswordService.prototype.resetPassword = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var encrypted = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* encryptPayload */])(obj).toString();
        var body = JSON.stringify({ cipher: encrypted });
        var url = this.apiUrl + '/password/reset';
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
    };
    PasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = encryptPayload;
/* unused harmony export decryptPayload */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);


function encryptPayload(payLoad) {
    var ciphertext = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].encrypt(JSON.stringify(payLoad), __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].aesKey);
    // console.log('Encrypt: ' + ciphertext);
    return ciphertext;
}
function decryptPayload(ciphertextStr) {
    var bytes = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(ciphertextStr.toString(), __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].aesKey);
    var decryptedData = JSON.parse(bytes.toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8));
    // console.log('Decrypted: ' + decryptedData.empId);
    return decryptedData;
}


/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__snackbar_service__ = __webpack_require__("../../../../../src/app/core/snackbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventsManagerService */],
                __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_4__snackbar_service__["a" /* SnackbarService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/global-events-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventsManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalEventsManagerService = /** @class */ (function () {
    function GlobalEventsManagerService() {
        this.authenticationEmitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isAuthenticated = this.authenticationEmitter.asObservable();
    }
    GlobalEventsManagerService.prototype.loggedIn = function () {
        this.authenticationEmitter.next(true);
    };
    GlobalEventsManagerService.prototype.loggedOff = function () {
        this.authenticationEmitter.next(false);
    };
    GlobalEventsManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalEventsManagerService);
    return GlobalEventsManagerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/snackbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarService.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    SnackbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]])
    ], SnackbarService);
    return SnackbarService;
}());



/***/ }),

/***/ "../../../../../src/app/core/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* unused harmony export UserDetailsDTO */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.USER_OBJECT = new UserDetailsDTO();
    }
    StorageService.prototype.getItem = function (name) {
        return sessionStorage.getItem(name);
    };
    StorageService.prototype.saveItem = function (name, data) {
        sessionStorage.setItem(name, data);
    };
    StorageService.prototype.clearStorage = function () {
        sessionStorage.clear();
    };
    StorageService.prototype.saveUserObject = function (obj) {
        this.USER_OBJECT.name = obj.name || '';
        this.USER_OBJECT.email = obj.emailId || '';
        this.USER_OBJECT.empId = obj.empId;
        this.USER_OBJECT.projectId = obj.projectId || null;
        this.USER_OBJECT.projectName = obj.projectName || '';
        this.USER_OBJECT.positionId = obj.positionId || null;
        this.USER_OBJECT.positionName = obj.positionName || '';
        this.USER_OBJECT.projectLeadId = obj.projectLeadId || null;
        this.USER_OBJECT.projectLeadName = obj.projectLeadName || '';
        this.USER_OBJECT.projectManagerId = obj.projectManagerId || '';
        this.USER_OBJECT.projectManagerName = obj.projectManagerName || '';
        this.USER_OBJECT.isAdmin = obj.roles.includes(__WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* ROLES */].ADMIN) ? true : false;
        this.USER_OBJECT.isLead = obj.roles.includes(__WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* ROLES */].LEAD) ? true : false;
        this.USER_OBJECT.isManager = obj.roles.includes(__WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* ROLES */].MANAGER) ? true : false;
        this.USER_OBJECT.isBasic = obj.roles.includes(__WEBPACK_IMPORTED_MODULE_0__shared_enums__["a" /* ROLES */].BASIC) ? true : false;
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

var UserDetailsDTO = /** @class */ (function () {
    function UserDetailsDTO() {
    }
    return UserDetailsDTO;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cards-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-negative: inherit;\r\n        flex-shrink: inherit;\r\n}\r\n\r\n.mat-card-title {\r\n    font-size: 1em;\r\n}\r\n\r\n.mat-card {\r\n    margin: 0px 0px 10px 0px;\r\n    width: 50%;\r\n    height: auto;\r\n    border-radius: 15px;\r\n}\r\n\r\n.mat-card-content {\r\n    font-size: 2em;\r\n    font-weight: 900;\r\n}\r\n\r\n.card-content-spacing {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    font-size: 3em;\r\n}\r\n\r\n.large-font {\r\n    font-size: 1.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome {{viewObj.name}}!</h1>\n<h3>{{viewObj.email}}</h3>\n<div id=\"cards-container\">\n    <!-- PROJECT NAME -->\n    <mat-card>\n        <mat-card-title>\n            My Project\n        </mat-card-title>\n        <mat-card-content>\n            {{viewObj.projectName}}\n        </mat-card-content>\n    </mat-card>\n    <!-- TEAM LEAD NAME -->\n    <mat-card>\n        <mat-card-title>\n            Team Lead\n        </mat-card-title>\n        <mat-card-content>\n            {{viewObj.projectLeadName}}\n        </mat-card-content>\n    </mat-card>\n    <!-- PROJECT MANAGER -->\n    <mat-card>\n        <mat-card-title>\n            Project Manager\n        </mat-card-title>\n        <mat-card-content>\n            {{viewObj.projectManagerName}}\n        </mat-card-content>\n    </mat-card>\n</div>\n<div id=\"charts-container\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dashboard_data_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/dashboard-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, storageService) {
        this.dataService = dataService;
        this.storageService = storageService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.viewObj = this.storageService.USER_OBJECT;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dashboard_data_service__["a" /* DashboardDataService */],
            __WEBPACK_IMPORTED_MODULE_0__core_storage_service__["a" /* StorageService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_dashboard_data_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/dashboard-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dashboard_resolver_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/dashboard-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__shared_angular_material_module__["a" /* AngularMaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__shared_dashboard_data_service__["a" /* DashboardDataService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_dashboard_resolver_service__["a" /* DashboardResolverService */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/shared/dashboard-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboardDTO__ = __webpack_require__("../../../../../src/app/dashboard/shared/dashboardDTO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardDataService = /** @class */ (function () {
    function DashboardDataService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    DashboardDataService.prototype.getDashboardData = function () {
        var url = this.apiUrl + '/dashboard';
        return this.http.get(url).map(this.extractData);
    };
    DashboardDataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    DashboardDataService.prototype.getDashboardObject = function () {
        var obj = this.storageService.USER_OBJECT;
        var retVal = new __WEBPACK_IMPORTED_MODULE_0__dashboardDTO__["a" /* DashboardDTO */](obj.name, obj.empId, obj.email, obj.positionName, obj.projectName, obj.projectLeadName, obj.projectManagerName);
        return retVal;
    };
    DashboardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_7__core_storage_service__["a" /* StorageService */]])
    ], DashboardDataService);
    return DashboardDataService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/shared/dashboard-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_data_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/dashboard-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardResolverService = /** @class */ (function () {
    function DashboardResolverService(dataService) {
        this.dataService = dataService;
    }
    DashboardResolverService.prototype.resolve = function (route, state) {
        var retVal = this.dataService.getDashboardObject();
        return retVal;
    };
    DashboardResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__dashboard_data_service__["a" /* DashboardDataService */]])
    ], DashboardResolverService);
    return DashboardResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/shared/dashboardDTO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDTO; });
var DashboardDTO = /** @class */ (function () {
    function DashboardDTO(name, empId, email, positionName, projectName, teamLeadName, managerName) {
        this.name = name;
        this.empId = empId;
        this.email = email;
        this.positionName = positionName;
        this.projectName = projectName;
        this.teamLeadName = teamLeadName;
        this.managerName = managerName;
    }
    return DashboardDTO;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space-between {\r\n    visibility: hidden;\r\n    margin: 0 5px;\r\n}\r\n\r\n.turn-green:hover {\r\n    color: green;\r\n}\r\n\r\n.turn-red:hover {\r\n    color: red;\r\n}\r\n\r\n.stay-gold {\r\n    color: goldenrod;\r\n}\r\n\r\n.stay-green {\r\n    color: green;\r\n}\r\n\r\n.sub-headers {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.sub-headers h2 {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.sub-headers button {\r\n    padding: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sub-headers button:hover {\r\n    background-color: rgb(187, 199, 214);\r\n}\r\n\r\n.kra-input form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    background-color: white;\r\n    padding: 5px 10px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.kra-input form div {\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n\r\n.kra-input form button:hover {\r\n    background-color: rgb(187, 199, 214);\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.btn-confirmation {\r\n    display: none;\r\n}\r\n\r\n.btn-confirmation.active {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{name}}</h1>\r\n<div class=\"sub-headers\">\r\n    <h2>{{projectName}} {{year}} Q{{quarter}}</h2>\r\n    <button mat-raised-button *ngIf=\"!disableActions && !isKraInputOpen && isdataLoaded\" (click)=\"isKraInputOpen = !isKraInputOpen\">\r\n        <i class=\"stay-green fas fa-plus\"></i> Add Kra</button>\r\n</div>\r\n<div class=\"kra-input\" *ngIf=\"isKraInputOpen\">\r\n    <form [formGroup]=\"inputForm\" (ngSubmit)=\"onSubmit(inputForm.valid)\" novalidate>\r\n        <mat-form-field class=\"full-width\">\r\n            <textarea matInput formControlName=\"description\" placeholder=\"Enter Kra Description here\" matTextareaAutosize matAutosizeMinRows=\"1\"\r\n                matAutosizeMaxRows=\"10\"></textarea>\r\n            <mat-error *ngIf=\"inputForm.get('description').hasError('required')\">Cannot leave field empty</mat-error>\r\n        </mat-form-field>\r\n        <div>\r\n            <button mat-raised-button (click)=\"isKraInputOpen = !isKraInputOpen; inputForm.reset()\">Cancel</button>\r\n            <button mat-raised-button type=\"submit\">Submit</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div *ngIf=\"!isdataLoaded\">\r\n    <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\r\n    </mat-progress-spinner>\r\n</div>\r\n<div class=\"data-table\" *ngIf=\"isdataLoaded\">\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Rating Column -->\r\n        <ng-container matColumnDef=\"rating\">\r\n            <mat-header-cell *matHeaderCellDef> Rating </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n                <span class=\"stay-gold\">\r\n                    <i class=\"fas fa-star\" *ngFor=\"let item of element.rating | fill\"></i>\r\n                </span>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element, let index = index\">\r\n                <p *ngIf=\"!disableActions\">\r\n                    <a class=\"turn-green\" (click)=\"openDialog(element)\">\r\n                        <i class=\"fas fa-edit\"></i>\r\n                    </a>\r\n                    <a href=\"\" class=\"space-between\"></a>\r\n                    <a class=\"turn-red\" (click)=\" toggleConfirmation(index)\">\r\n                        <i class=\"fas fa-trash\"></i>\r\n                    </a>\r\n                    <a href=\"\" class=\"space-between\"></a>\r\n                    <span class=\"btn-confirmation\" [class.active]=\"checkConfirmation(index)\">\r\n                        <!-- Delete  -->\r\n                        <a (click)=\"deleteKra(element); toggleConfirmation(index)\">\r\n                            <i class=\"turn-green fas fa-check\"></i>\r\n                        </a>\r\n                        <a href=\"\" class=\"space-between\"></a>\r\n                        <!-- Cancel Delete -->\r\n                        <a (click)=\"toggleConfirmation(index)\">\r\n                            <i class=\"turn-red fas fa-times\"></i>\r\n                        </a>\r\n                        <a href=\"\" class=\"space-between\"></a>\r\n                    </span>\r\n                </p>\r\n                <p *ngIf=\"disableActions\">\r\n                    Disabled\r\n                </p>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns; let index = index;\"></mat-row>\r\n    </mat-table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kra_dialog_kra_dialog_component__ = __webpack_require__("../../../../../src/app/kra/kra-dialog/kra-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_shared_project_detail_service__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_kra_dashboard_service__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_kra_update_history_model__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra-update-history.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var KraDashboardComponent = /** @class */ (function () {
    function KraDashboardComponent(route, location, dataService, projectDetailService, dialog, formBuilder) {
        this.route = route;
        this.location = location;
        this.dataService = dataService;
        this.projectDetailService = projectDetailService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.isdataLoaded = false;
        this.isKraInputOpen = false;
        this.disableActions = false;
        this.displayedColumns = ['description', 'rating', 'actions'];
    }
    KraDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.year = parseInt(this.route.snapshot.paramMap.get('year'), 10);
        this.quarter = parseInt(this.route.snapshot.paramMap.get('qtr'), 10);
        this.employeeId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.refreshTable();
        this.dataService.getEmployeeDetails(this.employeeId)
            .subscribe(function (res) {
            res.lastName = res.lastName || '';
            _this.name = res.firstName + ' ' + res.lastName;
            _this.projectDetailService.getProjectDetails(res.projectId).subscribe(function (res2) {
                _this.projectId = res2.projectId;
                _this.projectName = res2.name;
            });
        }, function (err) {
            console.log(err.message);
        });
        this.createForm();
        this.setActionsStatus();
    };
    KraDashboardComponent.prototype.setActionsStatus = function () {
        var fullYear = new Date().getFullYear();
        this.disableActions = this.year === fullYear ? false : true;
    };
    KraDashboardComponent.prototype.openDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__kra_dialog_kra_dialog_component__["a" /* KraDialogComponent */], {
            width: 'auto',
            height: 'auto',
            data: { kra: element, showEditOptions: true }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.updateKraHistory(res, element.serial);
            }
        });
    };
    KraDashboardComponent.prototype.openConfirmationDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__shared_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {});
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.deleteKra(element);
            }
        });
    };
    KraDashboardComponent.prototype.createForm = function () {
        this.inputForm = this.formBuilder.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]
        });
    };
    KraDashboardComponent.prototype.onSubmit = function (isValid) {
        var _this = this;
        if (isValid) {
            this.isKraInputOpen = false;
            this.isdataLoaded = false;
            var description = this.inputForm.value.description;
            this.inputForm.reset();
            this.dataService.createKra({
                description: description,
                employeeId: this.employeeId,
                year: this.year,
                quarter: this.quarter
            })
                .subscribe(function (res) {
                _this.refreshTable();
            }, function (err) {
                console.log(err.statusMessage);
                _this.isdataLoaded = true;
                _this.refreshTable();
            }, function () {
                _this.isdataLoaded = true;
            });
        }
    };
    KraDashboardComponent.prototype.updateKraHistory = function (updatedHistory, kraSerial) {
        var _this = this;
        var dto = new __WEBPACK_IMPORTED_MODULE_9__shared_kra_update_history_model__["a" /* KraUpdateHistoryDTO */](this.employeeId, this.projectId, this.year, this.quarter, kraSerial, updatedHistory);
        this.dataService.updateHistory(dto).subscribe(function (res) {
            _this.refreshTable();
        });
    };
    KraDashboardComponent.prototype.refreshTable = function () {
        var _this = this;
        this.isdataLoaded = false;
        this.dataService.getKraList(this.employeeId, this.year, this.quarter).subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](res);
        }, function (err) {
            console.log(err.message);
        }, function () {
            _this.isdataLoaded = true;
        });
    };
    KraDashboardComponent.prototype.deleteKra = function (element) {
        var _this = this;
        this.isdataLoaded = false;
        this.dataService.deleteKra({
            employeeId: this.employeeId,
            year: this.year,
            quarter: this.quarter,
            kraSerial: element.serial
        }).subscribe(function (res) {
            if (res.success) {
                _this.refreshTable();
            }
        }, function (err) { }, function () {
            _this.isdataLoaded = true;
        });
    };
    KraDashboardComponent.prototype.toggleConfirmation = function (index) {
        if (this.confirmationValue === index) {
            this.confirmationValue = -1;
        }
        else {
            this.confirmationValue = index;
        }
    };
    KraDashboardComponent.prototype.checkConfirmation = function (index) {
        if (index === this.confirmationValue) {
            return true;
        }
        else {
            return false;
        }
    };
    KraDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'app-kra-dashboard',
            template: __webpack_require__("../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_8__shared_kra_dashboard_service__["a" /* KraDashboardService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_shared_project_detail_service__["a" /* ProjectDetailService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]])
    ], KraDashboardComponent);
    return KraDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/shared/kra-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_employees_shared_employee_model__ = __webpack_require__("../../../../../src/app/admin/admin-employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kra_model__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KraDashboardService = /** @class */ (function () {
    function KraDashboardService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    // GET kra by EMPLOYEE ID, YEAR, QUARTER
    KraDashboardService.prototype.getKraList = function (id, year, qtr) {
        return this.http.get(this.apiUrl + '/kra/' + id + '/' + year + '/' + qtr)
            .map(function (res) {
            var body = res.json();
            if (!body.data) {
                return [];
            }
            if (body.data) {
                var list = body.data.kra;
                var kraList_1 = [];
                list.forEach(function (ele) {
                    var history = [];
                    ele.history.forEach(function (element) {
                        history.push(new __WEBPACK_IMPORTED_MODULE_7__kra_model__["a" /* KraHistoryModel */](element.rating, element.comment, element.dateChanged));
                    });
                    kraList_1.push(new __WEBPACK_IMPORTED_MODULE_7__kra_model__["b" /* KraModel */](ele.serial, ele.rating, ele.description, history));
                });
                return kraList_1;
            }
            return null;
        });
    };
    KraDashboardService.prototype.getEmployeeDetails = function (id) {
        return this.http.get(this.apiUrl + '/users/single/' + id)
            .map(function (res) {
            var user = res.json().data;
            return new __WEBPACK_IMPORTED_MODULE_1__admin_admin_employees_shared_employee_model__["a" /* EmployeeDTO */](user.firstName, user.lastName, user.positionId, user.empId, user.emailId, user.projectId);
        });
    };
    // UPDATE rating of USER
    KraDashboardService.prototype.updateHistory = function (dto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var url = this.apiUrl + '/kra/history';
        return this.http.put(url, dto, options)
            .map(this.extractData);
    };
    KraDashboardService.prototype.deleteKra = function (dto) {
        var url = this.apiUrl + '/kra/delete/' + dto.employeeId + '/' + dto.year + '/' + dto.quarter + '/' + dto.kraSerial;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.delete(url, options)
            .map(this.extractData);
    };
    KraDashboardService.prototype.createKra = function (dto) {
        var url = this.apiUrl + '/kra/create';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(url, dto, options)
            .map(this.extractData);
    };
    KraDashboardService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    KraDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], KraDashboardService);
    return KraDashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/shared/kra-update-history.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraUpdateHistoryDTO; });
var KraUpdateHistoryDTO = /** @class */ (function () {
    function KraUpdateHistoryDTO(employeeId, projectId, year, quarter, kraSerial, updatedHistory) {
        this.employeeId = employeeId;
        this.projectId = projectId;
        this.year = year;
        this.quarter = quarter;
        this.kraSerial = kraSerial;
        this.updatedHistory = updatedHistory;
    }
    return KraUpdateHistoryDTO;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-dashboard/shared/kra.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KraModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraHistoryModel; });
var KraModel = /** @class */ (function () {
    function KraModel(serial, rating, description, history) {
        this.serial = serial;
        this.rating = rating;
        this.description = description;
        this.history = history;
    }
    return KraModel;
}());

var KraHistoryModel = /** @class */ (function () {
    function KraHistoryModel(rating, comment, dateChanged) {
        this.rating = rating;
        this.comment = comment;
        this.dateChanged = dateChanged;
    }
    return KraHistoryModel;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-dialog/kra-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container {}\r\n\r\n.header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.header button {\r\n    border: none;\r\n    background-color: white;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: red;\r\n    padding: 2px;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n#edit-container {\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.history-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\nli {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 5px;\r\n}\r\n\r\ntable {\r\n    border-spacing: 1;\r\n    border-collapse: collapse;\r\n    background: white;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n    min-width: 60vw;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\nthead tr {\r\n    height: 60px;\r\n    background: #323A45;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\ntbody tr {\r\n    height: 48px;\r\n    border-bottom: 1px solid #E3F1D5;\r\n}\r\n\r\ntbody td tr td:first-child {\r\n    text-align: center;\r\n}\r\n\r\n.text-align-center {\r\n    text-align: center;\r\n}\r\n\r\nth,\r\ntd,\r\nh1 {\r\n    padding: 0px 10px;\r\n}\r\n\r\nh1 {\r\n    border-radius: 5px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/kra-dialog/kra-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container>\n    <div class=\"header\">\n        <button (click)=\"dialogRef.close()\">\n            <i class=\"fas fa-times\"></i>\n        </button>\n    </div>\n    <h1 mat-dialog-title>\n        <strong>\n            {{element.description}}\n        </strong>\n    </h1>\n    <div mat-dialog-content>\n        <!-- EDIT OPTIONS -->\n        <div *ngIf=\"showEditOptions\" id=\"edit-container\">\n            <mat-form-field hintLabel=\"Select this to change rating\">\n                <mat-select #newRating placeholder=\"Current Rating\" [(value)]=\"currentRating\" (change)=\"isSubmitVisible=true\">\n                    <mat-option value=\"1\">1</mat-option>\n                    <mat-option value=\"2\">2</mat-option>\n                    <mat-option value=\"3\">3</mat-option>\n                    <mat-option value=\"4\">4</mat-option>\n                    <mat-option value=\"5\">5</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea #comment matInput placeholder=\"Add Comment\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"10\"\n                    (change)=\"isSubmitVisible=true\" class=\"full-width\"></textarea>\n            </mat-form-field>\n            <button *ngIf=\"isSubmitVisible\" class=\"gs-btn-color-primary\" mat-raised-button [mat-dialog-close]=\"onSubmit(newRating.value,comment.value)\">Submit</button>\n        </div>\n        <div *ngIf=\"showHistory\" id=\"history-container\">\n            <table>\n                <thead>\n                    <tr>\n                        <th class=\"fixed-width\">\n                            <i class=\"fas fa-star\"></i> Rating\n                        </th>\n                        <th>\n                            <i class=\"fas fa-comment\"></i> Comment\n                        </th>\n                        <th>\n                            <i class=\"fas fa-calendar-alt\"></i> Added On\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of element.history\">\n                        <td class=\"text-align-center\">{{item. rating}}</td>\n                        <td>{{item.comment}}</td>\n                        <td class=\"text-align-center\">{{item.dateChanged | date:'d MMM'}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div mat-dialog-actions>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/kra-dialog/kra-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kra_dashboard_shared_kra_model__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var KraDialogComponent = /** @class */ (function () {
    function KraDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.showHistory = false;
        this.isSubmitVisible = false;
        this.showEditOptions = true;
        this.dialogRef.disableClose = true;
    }
    KraDialogComponent.prototype.ngOnInit = function () {
        this.currentRating = this.data.kra.rating.toString();
        this.showHistory = this.data.kra.history.length > 0 ? true : false;
        this.element = this.data.kra;
        this.showEditOptions = this.data.showEditOptions;
    };
    KraDialogComponent.prototype.onSubmit = function (rating, comment) {
        return new __WEBPACK_IMPORTED_MODULE_0__kra_dashboard_shared_kra_model__["a" /* KraHistoryModel */](rating, comment, new Date());
    };
    KraDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-kra-dialog',
            template: __webpack_require__("../../../../../src/app/kra/kra-dialog/kra-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/kra-dialog/kra-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], KraDialogComponent);
    return KraDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra-user/kra-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space-between{\r\n    visibility: hidden;\r\n    margin: 0 5px;\r\n}\r\n.turn-green:hover{\r\n    color: green;\r\n}\r\n.turn-red:hover{\r\n    color: red;\r\n}\r\n.stay-gold{\r\n    color:goldenrod;\r\n}\r\n.stay-green{\r\n    color: green;\r\n}\r\n.sub-headers{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.sub-headers h2{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.sub-headers button{\r\npadding: 0;\r\nmargin-bottom: 10px;\r\n}\r\n.sub-headers button:hover{\r\n    background-color: rgb(187, 199, 214);\r\n}\r\n.kra-input form{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    background-color: white;\r\n    padding: 5px 10px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.kra-input form div{\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n.kra-input form button:hover{\r\n    background-color: rgb(187, 199, 214);\r\n}\r\n.full-width{\r\n    width: 100%;\r\n}\r\n.date-button{\r\n    background-color: rgb(204, 204, 204);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/kra-user/kra-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My KRA</h1>\n<div>\n    <mat-form-field>\n        <mat-select #year placeholder=\"Year\" [(value)]=\"selectedYear\" (change)=\"yearChanged($event)\">\n            <mat-option value=\"2018\">2018</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select #quarter placeholder=\"Quarter\" [(value)]=\"selectedQuarter\" (change)=\"quarterChanged($event)\">\n            <mat-option *ngFor=\"let qtr of currentQuarter | fillConsecutiveNumbers\" value=\"{{qtr}}\">{{qtr}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <button class=\"date-button\" *ngIf=\"isDataChanged\" mat-button (click)=\"onSubmit(year.value,quarter.value)\">Submit</button>\n</div>\n<div *ngIf=\"!isdataLoaded\">\n    <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n</div>\n<div *ngIf=\"isdataLoaded && !isKraAssigned\">\n    <h2>No Kra has been defined yet</h2>\n</div>\n<div class=\"data-table\" *ngIf=\"isdataLoaded && isKraAssigned\">\n    <mat-table #table [dataSource]=\"dataSource\">\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n            <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\n        </ng-container>\n\n        <!-- Rating Column -->\n        <ng-container matColumnDef=\"rating\">\n            <mat-header-cell *matHeaderCellDef class=\"text-center\"> Rating </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                <span class=\"stay-gold\">\n                    <i class=\"fas fa-star\" *ngFor=\"let item of element.rating | fill\"></i>\n                </span>\n            </mat-cell>\n        </ng-container>\n\n        <!-- Actions Column -->\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef class=\"text-center\"> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                <a class=\"turn-green\" (click)=\"openDialog(element)\">\n                    <i class=\"fas fa-edit\"></i> View History\n                </a>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/kra-user/kra-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kra_dialog_kra_dialog_component__ = __webpack_require__("../../../../../src/app/kra/kra-dialog/kra-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kra_dashboard_shared_kra_dashboard_service__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KraUserComponent = /** @class */ (function () {
    function KraUserComponent(route, dataService, dialog, storageService) {
        this.route = route;
        this.dataService = dataService;
        this.dialog = dialog;
        this.storageService = storageService;
        this.isdataLoaded = false;
        this.isDataChanged = false;
        this.isKraAssigned = false;
        this.displayedColumns = ['description', 'rating', 'actions'];
    }
    KraUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeId = this.storageService.USER_OBJECT.empId;
        this.setDates();
        this.dataService.getEmployeeDetails(this.employeeId)
            .subscribe(function (res) {
            res.lastName = res.lastName || '';
            _this.name = res.firstName + ' ' + res.lastName;
        }, function (err) {
            console.log(err.message);
        });
        this.refreshTable();
    };
    KraUserComponent.prototype.openDialog = function (element) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__kra_dialog_kra_dialog_component__["a" /* KraDialogComponent */], {
            width: 'auto',
            height: 'auto',
            data: { kra: element, showEditOptions: false }
        });
    };
    KraUserComponent.prototype.refreshTable = function () {
        this.isdataLoaded = false;
        this.getKraList(this.employeeId, this.selectedYear, this.selectedQuarter);
    };
    KraUserComponent.prototype.setDates = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.selectedYear = this.currentYear.toString();
        var month = date.getMonth();
        if (month > 8) {
            this.selectedQuarter = '4';
            this.currentQuarter = 4;
        }
        else if (month > 5) {
            this.currentQuarter = 3;
            this.selectedQuarter = '3';
        }
        else if (month > 2) {
            this.currentQuarter = 2;
            this.selectedQuarter = '2';
        }
        else {
            this.currentQuarter = 1;
            this.selectedQuarter = '1';
        }
    };
    KraUserComponent.prototype.yearChanged = function (event) {
        var newYear = parseInt(event.value, 10);
        if (newYear !== this.currentYear) {
            this.currentQuarter = 4;
        }
        else {
            this.setDates();
        }
        this.isDataChanged = true;
    };
    KraUserComponent.prototype.quarterChanged = function (event) {
        this.isDataChanged = true;
    };
    KraUserComponent.prototype.getKraList = function (empId, year, quarter) {
        var _this = this;
        this.dataService.getKraList(empId, year, quarter).subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](res);
            _this.isKraAssigned = res.length < 1 ? false : true;
        }, function (err) {
            console.log(err.message);
        }, function () {
            _this.isdataLoaded = true;
        });
    };
    // Get KRA List
    KraUserComponent.prototype.onSubmit = function (year, quarter) {
        this.isDataChanged = false;
        this.isdataLoaded = false;
        this.getKraList(this.employeeId, year, quarter);
    };
    KraUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-kra-user',
            template: __webpack_require__("../../../../../src/app/kra/kra-user/kra-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/kra-user/kra-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__kra_dashboard_shared_kra_dashboard_service__["a" /* KraDashboardService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__core_storage_service__["a" /* StorageService */]])
    ], KraUserComponent);
    return KraUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/kra.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kra_dialog_kra_dialog_component__ = __webpack_require__("../../../../../src/app/kra/kra-dialog/kra-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_shared_team_service__ = __webpack_require__("../../../../../src/app/kra/team/shared/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_fill_pipe__ = __webpack_require__("../../../../../src/app/kra/shared/fill.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kra_dashboard_shared_kra_dashboard_service__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/shared/kra-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_shared_project_detail_service__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_routes_module__ = __webpack_require__("../../../../../src/app/routes/routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_shared_projects_service__ = __webpack_require__("../../../../../src/app/kra/projects/shared/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_dashboard_projects_component__ = __webpack_require__("../../../../../src/app/kra/projects/projects-dashboard/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__projects_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/kra/projects/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kra_dashboard_kra_dashboard_component__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_shared_start_date_formatter_pipe__ = __webpack_require__("../../../../../src/app/kra/projects/shared/start-date-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_fill_consecutive_numbers_pipe__ = __webpack_require__("../../../../../src/app/kra/shared/fill-consecutive-numbers.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__kra_user_kra_user_component__ = __webpack_require__("../../../../../src/app/kra/kra-user/kra-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__team_team_component__ = __webpack_require__("../../../../../src/app/kra/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projects_shared_sum_pipe__ = __webpack_require__("../../../../../src/app/kra/projects/shared/sum.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var KraModule = /** @class */ (function () {
    function KraModule() {
    }
    KraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routes_routes_module__["a" /* RoutesModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_0__kra_dialog_kra_dialog_component__["a" /* KraDialogComponent */], __WEBPACK_IMPORTED_MODULE_20__shared_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__projects_projects_dashboard_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__projects_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__kra_dashboard_kra_dashboard_component__["a" /* KraDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_0__kra_dialog_kra_dialog_component__["a" /* KraDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_fill_pipe__["a" /* FillPipe */],
                __WEBPACK_IMPORTED_MODULE_15__projects_shared_start_date_formatter_pipe__["a" /* StartDateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__shared_fill_consecutive_numbers_pipe__["a" /* FillConsecutiveNumbersPipe */],
                __WEBPACK_IMPORTED_MODULE_17__kra_user_kra_user_component__["a" /* KraUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_19__projects_shared_sum_pipe__["a" /* SumPipe */],
                __WEBPACK_IMPORTED_MODULE_20__shared_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__projects_shared_projects_service__["a" /* ProjectsService */],
                __WEBPACK_IMPORTED_MODULE_4__projects_shared_project_detail_service__["a" /* ProjectDetailService */],
                __WEBPACK_IMPORTED_MODULE_3__kra_dashboard_shared_kra_dashboard_service__["a" /* KraDashboardService */],
                __WEBPACK_IMPORTED_MODULE_1__team_shared_team_service__["a" /* TeamService */]
            ]
        })
    ], KraModule);
    return KraModule;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/project-detail/project-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\na:hover{\r\n    color: blue;\r\n}\r\n.stay-red{\r\n    color: rgb(194, 9, 9);\r\n}\r\n.stay-green{\r\n    color: green;\r\n}\r\n.mat-row:hover{\r\n    background-color: #E0E0E0;\r\n    /* transition: all .3s ease-in-out; */\r\n    /* transform: scale(1.05); */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/projects/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{projectName}}</h1>\n<h3>{{year}} Q{{quarter}}</h3>\n<div *ngIf=\"!isdataLoaded\">\n        <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\n        </mat-progress-spinner>\n    </div>\n<div class=\"data-table\" *ngIf=\"isdataLoaded\">\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"firstName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                {{element.firstName}} {{element.lastName}}\n            </mat-cell>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"kraSet\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> KRA Status </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <span *ngIf=\"element.kraSet\">\n                        <i class=\"stay-green fas fa-check\"></i>\n                </span>\n                <span *ngIf=\"!element.kraSet\">\n                        <i class=\"stay-red fas fa-times\"></i>\n                </span>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"cellClick(row.empId)\"></mat-row>\n    </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/projects/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_project_detail_service__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, location, dataService, router) {
        this.route = route;
        this.location = location;
        this.dataService = dataService;
        this.router = router;
        this.isdataLoaded = false;
        this.displayedColumns = ['firstName', 'kraSet'];
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.year = this.route.snapshot.paramMap.get('year');
        this.quarter = this.route.snapshot.paramMap.get('qtr');
        this.projectId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.dataService.getProjectDetails(this.projectId)
            .subscribe(function (res) {
            _this.projectName = res.name;
        }, function (err) {
            console.log(err.statusText);
        }, function () {
            _this.isdataLoaded = true;
        });
        this.dataService.getProjectMembers(this.projectId, this.year, this.quarter)
            .subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](res);
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err.statusText);
        }, function () {
            _this.isdataLoaded = true;
        });
    };
    ProjectDetailComponent.prototype.cellClick = function (id) {
        this.router.navigate(['manager/kra', id, this.year, this.quarter]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], ProjectDetailComponent.prototype, "sort", void 0);
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__("../../../../../src/app/kra/projects/project-detail/project-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/projects/project-detail/project-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_0__shared_project_detail_service__["a" /* ProjectDetailService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/projects-dashboard/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data-table{\r\n    width: 100%;\r\n}\r\n\r\nbutton{\r\n    background-color: rgb(235, 235, 235);\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\na:hover{\r\n    color: blue;\r\n}\r\n\r\n.date-button{\r\n    background-color: rgb(204, 204, 204);\r\n}\r\n\r\n.stay-green{\r\n    color: green;\r\n}\r\n\r\n.text-center{\r\n    /* text-align: center */\r\n}\r\n\r\n.mat-row:hover{\r\n    background-color: #E0E0E0;\r\n    /* transition: all .3s ease-in-out; */\r\n    /* transform: scale(1.05); */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/projects/projects-dashboard/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Projects</h1>\n<div>\n    <mat-form-field>\n        <mat-select #year placeholder=\"Year\" [(value)]=\"selectedYear\" (change)=\"yearChanged($event)\">\n            <mat-option value=\"2018\">2018</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select #quarter placeholder=\"Quarter\" [(value)]=\"selectedQuarter\" (change)=\"quarterChanged($event)\">\n            <mat-option *ngFor=\"let qtr of currentQuarter | fillConsecutiveNumbers\" value=\"{{qtr}}\">{{qtr}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <button class=\"date-button\" *ngIf=\"isDataChanged\" mat-button (click)=\"submit(year.value,quarter.value)\">Submit</button>\n</div>\n<div *ngIf=\"!isdataLoaded\">\n    <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n</div>\n<div class=\"data-table\" *ngIf=\"isdataLoaded\">\n    <mat-table #table [dataSource]=\"dataSource\" class=\"text-center\">\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                {{element.name}}\n            </mat-cell>\n        </ng-container>\n\n        <!-- Pending Column -->\n        <ng-container matColumnDef=\"pending\">\n            <mat-header-cell *matHeaderCellDef> Pending Kra</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.pending}} / {{ element | sum }}</mat-cell>\n        </ng-container>\n\n        <!-- Completed Column -->\n        <ng-container matColumnDef=\"completed\">\n            <mat-header-cell *matHeaderCellDef> Completed </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" >\n                <span *ngIf=\"element.pending < 1\">\n                    <i class=\"stay-green fas fa-check\"></i>\n                </span>\n            </mat-cell>\n        </ng-container>\n\n        <!-- Pending Column -->\n        <ng-container matColumnDef=\"teamLead\">\n            <mat-header-cell *matHeaderCellDef> Team Lead</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.teamLeadName}} </mat-cell>\n        </ng-container>\n\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"navigate(row.projectId)\"></mat-row>\n    </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/projects/projects-dashboard/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_projects_service__ = __webpack_require__("../../../../../src/app/kra/projects/shared/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.isdataLoaded = false;
        this.displayedColumns = ['name', 'pending', 'completed', 'teamLead'];
        this.isDataChanged = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setValues();
        this.dataService.getProjectsByYearQuarter(parseInt(this.selectedYear, 10), parseInt(this.selectedQuarter, 10)).subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](res);
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err.message);
        }, function () {
            _this.isdataLoaded = true;
        });
    };
    ProjectsComponent.prototype.setValues = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.selectedYear = this.currentYear.toString();
        var month = date.getMonth();
        if (month > 8) {
            this.selectedQuarter = '4';
            this.currentQuarter = 4;
        }
        else if (month > 5) {
            this.currentQuarter = 3;
            this.selectedQuarter = '3';
        }
        else if (month > 2) {
            this.currentQuarter = 2;
            this.selectedQuarter = '2';
        }
        else {
            this.currentQuarter = 1;
            this.selectedQuarter = '1';
        }
    };
    ProjectsComponent.prototype.yearChanged = function (event) {
        var newYear = parseInt(event.value, 10);
        if (newYear !== this.currentYear) {
            this.currentQuarter = 4;
        }
        else {
            this.setValues();
        }
        this.isDataChanged = true;
    };
    ProjectsComponent.prototype.quarterChanged = function (event) {
        this.isDataChanged = true;
    };
    ProjectsComponent.prototype.submit = function (year, quarter) {
        var _this = this;
        this.isDataChanged = false;
        this.isdataLoaded = false;
        this.dataService.getProjectsByYearQuarter(year, quarter).subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](res);
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () {
            _this.isdataLoaded = true;
        });
    };
    ProjectsComponent.prototype.navigate = function (id) {
        this.router.navigate(['../projects', id, this.selectedYear, this.selectedQuarter], { relativeTo: this.route });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], ProjectsComponent.prototype, "sort", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/kra/projects/projects-dashboard/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/projects/projects-dashboard/projects.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/project-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_member_model__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project-member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_model__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectDetailService = /** @class */ (function () {
    function ProjectDetailService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    // GET details by PROJECT ID
    ProjectDetailService.prototype.getProjectDetails = function (id) {
        return this.http.get(this.apiUrl + '/projects/' + id)
            .map(function (res) {
            var obj = res.json().data;
            if (obj) {
                return new __WEBPACK_IMPORTED_MODULE_2__project_model__["a" /* Project */](obj.name, obj.startDate, obj.projectId, obj.teamLeadId, obj.teamLeadName);
            }
            return null;
        });
    };
    // Get users by Project id
    ProjectDetailService.prototype.getProjectMembers = function (id, year, quarter) {
        return this.http.get(this.apiUrl + '/users/project/' + id + '/' + year + '/' + quarter)
            .map(function (res) {
            var body = res.json();
            if (!body.data) {
                return [];
            }
            if (body.data.length > 0) {
                var list = body.data;
                var projectMembers_1 = [];
                list.forEach(function (ele) {
                    projectMembers_1.push(new __WEBPACK_IMPORTED_MODULE_1__project_member_model__["a" /* ProjectMember */](ele.firstName, ele.lastName, ele.empId, ele.kraSet));
                });
                return projectMembers_1;
            }
            return null;
        });
    };
    ProjectDetailService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    ProjectDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], ProjectDetailService);
    return ProjectDetailService;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/project-member.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMember; });
var ProjectMember = /** @class */ (function () {
    function ProjectMember(firstName, lastName, empId, kraSet) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.empId = empId;
        this.kraSet = kraSet;
    }
    return ProjectMember;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(name, startDate, projectId, teamLeadId, teamLeadName, pending, completed) {
        this.name = name;
        this.startDate = startDate;
        this.projectId = projectId;
        this.teamLeadId = teamLeadId;
        this.teamLeadName = teamLeadName;
        this.pending = pending;
        this.completed = completed;
    }
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_model__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    ProjectsService.prototype.getProjectsByYearQuarter = function (year, quarter) {
        return this.http.get(this.apiUrl + '/kra/projects/' + year + '/' + quarter)
            .map(this.extractData);
    };
    ProjectsService.prototype.extractData = function (res) {
        var body = res.json();
        if (!body.data) {
            return [];
        }
        if (body.data.length > 0) {
            var projects_1 = [];
            body.data.forEach(function (ele) {
                var project = new __WEBPACK_IMPORTED_MODULE_1__project_model__["a" /* Project */](ele.name, ele.startDate, ele.projectId, ele.teamLeadId, ele.teamLeadName, ele.pending, ele.completed);
                projects_1.push(project);
            });
            return projects_1;
        }
        return null;
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/start-date-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartDateFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartDateFormatterPipe = /** @class */ (function () {
    function StartDateFormatterPipe() {
    }
    StartDateFormatterPipe.prototype.transform = function (value, args) {
        return value.toString().slice(0, 4) + ' Q' + value.toString().slice(5);
    };
    StartDateFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'startDateFormatter'
        })
    ], StartDateFormatterPipe);
    return StartDateFormatterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/kra/projects/shared/sum.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (value, args) {
        return parseInt(value.pending, 10) + parseInt(value.completed, 10);
    };
    SumPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sum'
        })
    ], SumPipe);
    return SumPipe;
}());



/***/ }),

/***/ "../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container>\n    <h1 mat-dialog-title>\n        Are you sure?\n    </h1>\n    <div mat-dialog-actions>\n        <button mat-raised-button  [mat-dialog-close]=\"true\">Yes</button>\n        <button mat-raised-button  [mat-dialog-close]=\"false\">No</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.dialogRef.disableClose = true;
    }
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/shared/confirm-dialog/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kra/shared/fill-consecutive-numbers.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillConsecutiveNumbersPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FillConsecutiveNumbersPipe = /** @class */ (function () {
    function FillConsecutiveNumbersPipe() {
    }
    FillConsecutiveNumbersPipe.prototype.transform = function (value, args) {
        return Array.from(Array(value).keys()).map(function (x) { return x + 1; });
    };
    FillConsecutiveNumbersPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fillConsecutiveNumbers'
        })
    ], FillConsecutiveNumbersPipe);
    return FillConsecutiveNumbersPipe;
}());



/***/ }),

/***/ "../../../../../src/app/kra/shared/fill.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FillPipe = /** @class */ (function () {
    function FillPipe() {
    }
    FillPipe.prototype.transform = function (value, args) {
        return (new Array(value)).fill(1);
    };
    FillPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fill'
        })
    ], FillPipe);
    return FillPipe;
}());



/***/ }),

/***/ "../../../../../src/app/kra/team/shared/team.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(name, projectId) {
        this.name = name;
        this.projectId = projectId;
    }
    return Team;
}());



/***/ }),

/***/ "../../../../../src/app/kra/team/shared/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__team_model__ = __webpack_require__("../../../../../src/app/kra/team/shared/team.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_shared_project_member_model__ = __webpack_require__("../../../../../src/app/kra/projects/shared/project-member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    // GET details by PROJECT ID
    TeamService.prototype.getProjectDetails = function (projectId) {
        return this.http.get(this.apiUrl + '/projects/' + projectId)
            .map(function (res) {
            var obj = res.json().data;
            if (obj) {
                return new __WEBPACK_IMPORTED_MODULE_0__team_model__["a" /* Team */](obj.name, obj.projectId);
            }
            return null;
        });
    };
    // Get users by Project projectId, EXCLUDE TEAM LEAD
    TeamService.prototype.getTeamMembers = function (projectId, year, quarter, excludeId) {
        return this.http.get(this.apiUrl + '/users/project/' + projectId + '/' + year + '/' + quarter)
            .map(function (res) {
            var body = res.json();
            if (!body.data) {
                return [];
            }
            if (body.data.length > 0) {
                var list = body.data;
                var projectMembers_1 = [];
                list.forEach(function (ele) {
                    if (ele.empId !== excludeId) {
                        projectMembers_1.push(new __WEBPACK_IMPORTED_MODULE_1__projects_shared_project_member_model__["a" /* ProjectMember */](ele.firstName, ele.lastName, ele.empId, ele.kraSet));
                    }
                });
                return projectMembers_1;
            }
            return null;
        });
    };
    TeamService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/kra/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\na:hover{\r\n    color: blue;\r\n}\r\n.stay-red{\r\n    color: rgb(194, 9, 9);\r\n}\r\n.stay-green{\r\n    color: green;\r\n}\r\n.date-button{\r\n    background-color: rgb(204, 204, 204);\r\n}\r\n.mat-row:hover{\r\n    background-color: #E0E0E0;\r\n    /* transition: all .3s ease-in-out; */\r\n    /* transform: scale(1.05); */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kra/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Manage Team's KRA</h1>\r\n<h4>{{projectName}}</h4>\r\n<div>\r\n    <mat-form-field>\r\n        <mat-select #year placeholder=\"Year\" [(value)]=\"selectedYear\" (change)=\"yearChanged($event)\">\r\n            <mat-option value=\"2018\">2018</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-select #quarter placeholder=\"Quarter\" [(value)]=\"selectedQuarter\" (change)=\"quarterChanged($event)\">\r\n            <mat-option *ngFor=\"let qtr of currentQuarter | fillConsecutiveNumbers\" value=\"{{qtr}}\">{{qtr}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <button class=\"date-button\" *ngIf=\"isDataChanged\" mat-button (click)=\"onSubmit(year.value,quarter.value)\">Submit</button>\r\n</div>\r\n<div class=\"data-table\" *ngIf=\"isdataLoaded\">\r\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\">\r\n                    {{element.firstName}} {{element.lastName}}\r\n                </mat-cell>\r\n            </ng-container>\r\n    \r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"kraSet\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> KRA Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\">\r\n                    <span *ngIf=\"element.kraSet\">\r\n                            <i class=\"stay-green fas fa-check\"></i>\r\n                    </span>\r\n                    <span *ngIf=\"!element.kraSet\">\r\n                            <i class=\"stay-red fas fa-times\"></i>\r\n                    </span>\r\n                </mat-cell>\r\n            </ng-container>\r\n    \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"cellClick(row.empId)\"></mat-row>\r\n        </mat-table>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/kra/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_team_service__ = __webpack_require__("../../../../../src/app/kra/team/shared/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamComponent = /** @class */ (function () {
    function TeamComponent(route, dataService, router, storageService) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.storageService = storageService;
        this.isdataLoaded = false;
        this.isDataChanged = false;
        this.displayedColumns = ['name', 'kraSet'];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.employeeId = this.storageService.USER_OBJECT.empId;
        this.projectId = this.storageService.USER_OBJECT.projectId;
        this.setDates();
        this.getTeamMembers();
    };
    TeamComponent.prototype.getTeamMembers = function () {
        var _this = this;
        this.dataService.getTeamMembers(this.projectId, this.selectedYear, this.selectedQuarter, this.employeeId)
            .subscribe(function (res) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](res);
        }, function (err) {
            console.log(err.statusText);
        }, function () {
            _this.isdataLoaded = true;
        });
    };
    TeamComponent.prototype.yearChanged = function (event) {
        var newYear = parseInt(event.value, 10);
        if (newYear !== this.currentYear) {
            this.currentQuarter = 4;
        }
        else {
            this.setDates();
        }
        this.isDataChanged = true;
    };
    TeamComponent.prototype.quarterChanged = function (event) {
        this.isDataChanged = true;
    };
    TeamComponent.prototype.setDates = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.selectedYear = this.currentYear.toString();
        var month = date.getMonth();
        if (month > 8) {
            this.selectedQuarter = '4';
            this.currentQuarter = 4;
        }
        else if (month > 5) {
            this.currentQuarter = 3;
            this.selectedQuarter = '3';
        }
        else if (month > 2) {
            this.currentQuarter = 2;
            this.selectedQuarter = '2';
        }
        else {
            this.currentQuarter = 1;
            this.selectedQuarter = '1';
        }
    };
    TeamComponent.prototype.cellClick = function (id) {
        this.router.navigate(['lead/kra', id, this.currentYear, this.currentQuarter]);
    };
    TeamComponent.prototype.onSubmit = function (year, quarter) {
        this.getTeamMembers();
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/kra/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kra/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__core_storage_service__["a" /* StorageService */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/records/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\r\n    overflow: auto;\r\n    max-height: 350px;\r\n}\r\n\r\n#table-container{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.mat-row:hover{\r\n    background-color: #E0E0E0;\r\n    /* transition: all .3s ease-in-out; */\r\n    /* transform: scale(1.05); */\r\n}\r\n\r\n.filter-container{\r\n    width: 100%;\r\n    margin: 0 0 10px 0;\r\n    border-radius: 15px;\r\n    padding: 2px 10px;\r\n}\r\n\r\n.filter-container:hover{\r\n-webkit-transition: all .3s ease-in-out;\r\ntransition: all .3s ease-in-out;\r\n/* transform: scale(1.05); */\r\nbackground-color: rgb(223, 223, 223);\r\n}\r\n\r\nthead tr {\r\n    height: 60px;\r\n    background: #323A45;\r\n    font-size: 16px;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/records/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Employee Records</h1>\n<div *ngIf=\"!isDataLoaded\">\n    <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n</div>\n<div *ngIf=\"isDataLoaded\">\n    <div >\n        <mat-form-field hintLabel=\"Filer records by name, id, etc.\" class=\"filter-container\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </div>\n    <div class=\"data-table\">\n        <mat-table #table [dataSource]=\"dataSource\">\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef > Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell>\n            </ng-container>\n\n            <!-- employeeId Column -->\n            <ng-container matColumnDef=\"employeeId\">\n                <mat-header-cell *matHeaderCellDef> Employee Id </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.employeeId}}</mat-cell>\n            </ng-container>\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n                <mat-header-cell *matHeaderCellDef > Position </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell>\n            </ng-container>\n            <!-- Project Column -->\n            <ng-container matColumnDef=\"project\">\n                <mat-header-cell *matHeaderCellDef > Project </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.project}}</mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n    </div>\n</div>\n<h5>Total: {{totalEmployees}}</h5>"

/***/ }),

/***/ "../../../../../src/app/records/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_employees_dashboard_service__ = __webpack_require__("../../../../../src/app/records/employees/shared/employees-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(dataService) {
        this.dataService = dataService;
        this.isDataLoaded = false;
        this.displayedColumns = ['name', 'employeeId', 'position', 'project'];
    }
    EmployeesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllUsers().subscribe(function (res) {
            _this.totalEmployees = res.length;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](res);
        }, function (err) {
            _this.isDataLoaded = true;
        }, function () {
            _this.isDataLoaded = true;
        });
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__("../../../../../src/app/records/employees/employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/records/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_employees_dashboard_service__["a" /* EmployeesDashboardService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/records/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDTO; });
var EmployeeDTO = /** @class */ (function () {
    function EmployeeDTO(name, employeeId, position, project) {
        this.name = name;
        this.employeeId = employeeId;
        this.position = position;
        this.project = project;
    }
    return EmployeeDTO;
}());



/***/ }),

/***/ "../../../../../src/app/records/employees/shared/employees-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__("../../../../../src/app/records/employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeesDashboardService = /** @class */ (function () {
    function EmployeesDashboardService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    EmployeesDashboardService.prototype.getAllUsers = function () {
        var url = this.apiUrl + '/users';
        return this.http.get(url).map(this.extractData);
    };
    EmployeesDashboardService.prototype.extractData = function (res) {
        var body = res.json();
        if (!body.data) {
            return [];
        }
        if (body.data.length > 0) {
            var list_1 = [];
            body.data.forEach(function (ele) {
                var employee = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* EmployeeDTO */](ele.name, ele.empId, ele.position, ele.project);
                list_1.push(employee);
            });
            return list_1;
        }
        return null;
    };
    EmployeesDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"]])
    ], EmployeesDashboardService);
    return EmployeesDashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/records/records.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_angular_material_module__ = __webpack_require__("../../../../../src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_employees_component__ = __webpack_require__("../../../../../src/app/records/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_shared_employees_dashboard_service__ = __webpack_require__("../../../../../src/app/records/employees/shared/employees-dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RecordsModule = /** @class */ (function () {
    function RecordsModule() {
    }
    RecordsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_angular_material_module__["a" /* AngularMaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__employees_employees_component__["a" /* EmployeesComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__employees_shared_employees_dashboard_service__["a" /* EmployeesDashboardService */]
            ]
        })
    ], RecordsModule);
    return RecordsModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_guards_auth_lead_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-lead.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_employees_employees_component__ = __webpack_require__("../../../../../src/app/records/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kra_kra_user_kra_user_component__ = __webpack_require__("../../../../../src/app/kra/kra-user/kra-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_manager_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth-manager.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__ = __webpack_require__("../../../../../src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__kra_kra_dashboard_kra_dashboard_component__ = __webpack_require__("../../../../../src/app/kra/kra-dashboard/kra-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kra_projects_projects_dashboard_projects_component__ = __webpack_require__("../../../../../src/app/kra/projects/projects-dashboard/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kra_projects_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/kra/projects/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kra_team_team_component__ = __webpack_require__("../../../../../src/app/kra/team/team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__authentication_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_2__records_employees_employees_component__["a" /* EmployeesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mykra', component: __WEBPACK_IMPORTED_MODULE_3__kra_kra_user_kra_user_component__["a" /* KraUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */]], data: { showEditOptions: false } },
    {
        path: 'manager', canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_manager_guard__["a" /* AuthManagerGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_manager_guard__["a" /* AuthManagerGuard */]], children: [
            { path: 'manager/dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'kra/projects/:id/:year/:qtr', component: __WEBPACK_IMPORTED_MODULE_13__kra_projects_project_detail_project_detail_component__["a" /* ProjectDetailComponent */] },
            { path: 'kra/projects', component: __WEBPACK_IMPORTED_MODULE_10__kra_projects_projects_dashboard_projects_component__["a" /* ProjectsComponent */] },
            { path: 'kra/:id/:year/:qtr', component: __WEBPACK_IMPORTED_MODULE_9__kra_kra_dashboard_kra_dashboard_component__["a" /* KraDashboardComponent */], data: { showEditOptions: true } },
        ]
    },
    {
        path: 'lead', canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__authentication_guards_auth_lead_guard__["a" /* AuthLeadGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__authentication_guards_auth_lead_guard__["a" /* AuthLeadGuard */]], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'kra/team', component: __WEBPACK_IMPORTED_MODULE_14__kra_team_team_component__["a" /* TeamComponent */] },
            { path: 'kra/:id/:year/:qtr', component: __WEBPACK_IMPORTED_MODULE_9__kra_kra_dashboard_kra_dashboard_component__["a" /* KraDashboardComponent */], data: { showEditOptions: true } },
        ]
    },
    {
        path: 'admin', canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_guards_auth_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_admin_guard__["a" /* AuthAdminGuard */]], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '*/', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */]
            ],
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatStepperModule */]
            ],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/enums.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROLES; });
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["LEAD"] = "lead";
    ROLES["MANAGER"] = "manager";
    ROLES["BASIC"] = "basic";
})(ROLES || (ROLES = {}));


/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n    background-color: #323A45;\r\n    color: white;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    min-height: 70px;\r\n    padding: 0 2em;\r\n}\r\n\r\n.nav-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width:100%;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left-container{\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n.nav-right-container{\r\n    padding: 1em;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end\r\n}\r\n\r\n.inactiveLink {\r\n    color: white;\r\n    pointer-events: none;\r\n    cursor: default;\r\n    text-decoration: none;\r\n }\r\n\r\nbutton{\r\n     margin-left: 2em;\r\n }\r\n\r\na{\r\n     text-decoration: none;\r\n     color: white;\r\n }\r\n\r\nh1:hover{\r\n    text-shadow: 0px 0px 1em rgb(234, 237, 240);\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"mat-elevation-z6\">\n    <div class=\"nav-container\">\n        <div class=\"nav-left-container\">\n           <h1>KRA MANAGER</h1>\n        </div>\n        <div class=\"nav-right-container\" *ngIf=\"showDetails\">\n            EmployeeId : {{employeeId}}\n            <button mat-raised-button (click)=\"logout()\" color=\"accent\">Logout</button>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(globalEventsManager, router, storageService) {
        this.globalEventsManager = globalEventsManager;
        this.router = router;
        this.storageService = storageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalEventsManager.isAuthenticated.subscribe(function (res) {
            _this.showDetails = res;
            if (res) {
                _this.employeeId = _this.storageService.USER_OBJECT.empId;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.globalEventsManager.loggedOff();
        this.storageService.clearStorage();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManagerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_storage_service__["a" /* StorageService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navsidebar/navsidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-sidenav-content{\r\n    background-color: white;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height:100vh;\r\n}\r\n\r\n.mat-sidenav{\r\n    color: white;\r\n}\r\n\r\n.navsidebar-container{\r\n    top:70px;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.sidenav{\r\n    width: 200px;\r\n    background-color: #546677;\r\n    position: fixed;\r\n    top:70px;\r\n    \r\n  }\r\n\r\n.sidenav-content-inner{\r\n    margin: 50px;\r\n}\r\n\r\n.sidenav-info{\r\n    margin: 50px 0 50px 0;\r\n    padding: 0 10px;\r\n    font-size: 0.8em;\r\n }\r\n\r\nul{\r\n    list-style: none;\r\n    margin:0px;\r\n    padding:0px;\r\n    text-align: left;\r\n}\r\n\r\n.sidenav-tabs li{\r\n    width: 100%;\r\n    border-bottom: 0.5px solid #38434e;\r\n    \r\n}\r\n\r\n.sidenav-tabs li:hover{\r\n    background-color: #97a1ac;\r\n}\r\n\r\n.sidenav-tabs li a{\r\n    color: white;\r\n\tdisplay:block;\r\n\twidth:180px;\r\n\tpadding:10px;\r\n\ttext-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navsidebar/navsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"navsidebar-container\">\r\n    <mat-sidenav mode=\"side\" opened=\"true\" class=\"sidenav\" *ngIf=\"showSideNav\">\r\n        <ul class=\"sidenav-tabs\">\r\n            <li>\r\n                <a routerLink=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/employees\">Search</a>\r\n            </li>\r\n            <li>\r\n                <ng-container *ngIf=\"isBasic\">\r\n                    <a routerLink=\"/mykra\">My KRA</a>\r\n                </ng-container>\r\n            </li>\r\n            <li>\r\n                <ng-container *ngIf=\"isManager\">\r\n                    <a routerLink=\"/manager/kra/projects\">Manage KRA</a>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isLead\">\r\n                    <a routerLink=\"/lead/kra/team\">Team KRA</a>\r\n                </ng-container>\r\n            </li>\r\n            <li>\r\n                <ng-container *ngIf=\"isAdmin\">\r\n                    <a routerLink=\"/admin/dashboard\">Admin</a>\r\n                </ng-container>\r\n            </li>\r\n        </ul>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <div class=\"sidenav-content-inner\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/shared/navsidebar/navsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__ = __webpack_require__("../../../../../src/app/core/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavsidebarComponent = /** @class */ (function () {
    function NavsidebarComponent(globalService, storageService) {
        this.globalService = globalService;
        this.storageService = storageService;
        this.showSideNav = false;
        this.isLead = false;
        this.isManager = false;
        this.isAdmin = false;
        this.isBasic = false;
    }
    NavsidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.isAuthenticated.subscribe(function (res) {
            _this.showSideNav = res;
            if (res) {
                _this.setRoles();
            }
            if (!res) {
                _this.showSideNav = res;
                _this.reset();
            }
        });
    };
    NavsidebarComponent.prototype.setRoles = function () {
        var obj = this.storageService.USER_OBJECT;
        this.isAdmin = obj.isAdmin;
        this.isLead = obj.isLead;
        this.isBasic = obj.isBasic;
        this.isManager = obj.isManager;
    };
    NavsidebarComponent.prototype.ngOnDestroy = function () { };
    NavsidebarComponent.prototype.reset = function () {
        this.isAdmin = false;
        this.isBasic = false;
        this.isLead = false;
        this.isManager = false;
    };
    NavsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-navsidebar',
            template: __webpack_require__("../../../../../src/app/shared/navsidebar/navsidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navsidebar/navsidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManagerService */],
            __WEBPACK_IMPORTED_MODULE_0__core_storage_service__["a" /* StorageService */]])
    ], NavsidebarComponent);
    return NavsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/validators/numberValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberValidator;
function numberValidator() {
    return function (control) {
        var value = control.value;
        var regexp = (/^[0-9]{1,8}$/);
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'https://kramanager.herokuapp.com/api',
    aesKey: 'ad82hda2'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);