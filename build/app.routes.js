"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./components/home/home");
var gesture_1 = require("./components/gesture/gesture");
var app_component_1 = require("./components/app.component");
var view_gesture_1 = require("./components/viewgesture/view_gesture");
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
var routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'gesture', component: gesture_1.GestureComponent },
    { path: 'viewgesture', component: view_gesture_1.ViewGestureComponent },
    { path: 'footnote', component: footnote_1.FootNoteComponent },
    { path: 'add_customer', component: add_customer_1.AddCustomerComponent },
    { path: 'view_customer', component: view_customer_1.ViewCustomerComponent },
    { path: 'edit_customer', component: edit_customer_1.EditCustomerComponent },
    { path: 'view_device', component: view_device_1.ViewDeviceComponent },
    { path: 'add_device', component: add_device_1.AddDeviceComponent },
    { path: 'edit_device', component: edit_device_1.EditDeviceComponent },
    { path: 'play_ground', component: playground_1.PlayGroundComponent },
    { path: 'reports', component: report_1.ReportsComponent },
    { path: 'view_user', component: view_user_1.ViewUserComponent },
    { path: 'add_user', component: add_user_1.AddUserComponent },
    { path: 'edit_user', component: edit_user_1.EditUserComponent },
    { path: 'testgesture', component: testgesture_1.TestGestureComponent },
    { path: 'edit_gesture', component: edit_gesture_1.EditGestureComponent },
    { path: 'update/:id', component: update_1.UpdateGestureComponent },
    { path: 'pagination', component: pagination_1.PaginationComponent },
    { path: 'gesturepagination', component: gs_1.GesturePaginationComponent },
    { path: 'one', component: one_1.OneComponent },
    { path: 'twoapp', component: two_1.twoappcomponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
