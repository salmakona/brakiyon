"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var ng2_pagination_1 = require("ng2-pagination");
var http_1 = require("@angular/http");
var home_1 = require("./components/home/home");
var gesture_1 = require("./components/gesture/gesture");
var view_gesture_1 = require("./components/viewgesture/view_gesture");
var app_component_1 = require("./components/app.component");
var footnote_1 = require("./components/footnote/footnote");
var add_customer_1 = require("./components/customers/add_customer");
var view_customer_1 = require("./components/customers/view_customer");
var edit_customer_1 = require("./components/customers/edit_customer");
var view_device_1 = require("./components/devices/view_device");
var add_device_1 = require("./components/devices/add_device");
var edit_device_1 = require("./components/devices/edit_device");
var playground_1 = require("./components/playground/playground");
var report_1 = require("./components/reports/report");
var view_user_1 = require("./components/users/view_user");
var add_user_1 = require("./components/users/add_user");
var edit_user_1 = require("./components/users/edit_user");
var testgesture_1 = require("./components/gesture/testgesture");
var edit_gesture_1 = require("./components/viewgesture/edit_gesture");
var update_1 = require("./components/viewgesture/update");
var pagination_1 = require("./components/pagination/pagination");
var gs_1 = require("./components/pagination/gs");
var one_1 = require("./components/pagination/one");
var two_1 = require("./components/pagination/two");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, ng2_pagination_1.Ng2PaginationModule],
        declarations: [app_component_1.AppComponent, home_1.HomeComponent, gesture_1.GestureComponent,
            view_gesture_1.ViewGestureComponent, footnote_1.FootNoteComponent, add_customer_1.AddCustomerComponent,
            view_customer_1.ViewCustomerComponent, edit_customer_1.EditCustomerComponent, view_device_1.ViewDeviceComponent,
            add_device_1.AddDeviceComponent, edit_device_1.EditDeviceComponent, playground_1.PlayGroundComponent,
            report_1.ReportsComponent, view_user_1.ViewUserComponent, add_user_1.AddUserComponent, edit_user_1.EditUserComponent,
            testgesture_1.TestGestureComponent, edit_gesture_1.EditGestureComponent, update_1.UpdateGestureComponent,
            pagination_1.PaginationComponent, gs_1.GesturePaginationComponent, one_1.OneComponent, two_1.twoappcomponent
        ],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
