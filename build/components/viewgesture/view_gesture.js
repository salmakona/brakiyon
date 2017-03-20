"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var gesture_service_1 = require("./gesture_service");
var ViewGestureComponent = (function () {
    function ViewGestureComponent(service) {
        this.service = service;
        this.posts = [];
        this.errorMessage = '';
    }
    ViewGestureComponent.prototype.getPosts = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    ViewGestureComponent.prototype.ngOnInit = function () { this.getPosts(); };
    return ViewGestureComponent;
}());
ViewGestureComponent = __decorate([
    core_1.Component({
        selector: 'viewgesture',
        templateUrl: 'app/components/viewgesture/view_gesture.html',
        providers: [gesture_service_1.GestureService]
    })
], ViewGestureComponent);
exports.ViewGestureComponent = ViewGestureComponent;
