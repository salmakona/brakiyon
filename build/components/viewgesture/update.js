"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var edit_service_1 = require("./edit_service");
var UpdateGestureComponent = (function () {
    function UpdateGestureComponent(service, route) {
        this.service = service;
        this.route = route;
        this.posts = [];
        this.postid = [];
        this.errorMessage = '';
    }
    UpdateGestureComponent.prototype.ngOnInit = function () {
        this.gestPostById();
        this.getPosts();
    };
    UpdateGestureComponent.prototype.getPosts = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    UpdateGestureComponent.prototype.gestPostById = function () {
        var _this = this;
        return this.route.params.switchMap(function (params) { return _this.service.getdatabyId(params['id']); })
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    /*save(): void {
        this.service.update(this.posts);
    }
    */
    UpdateGestureComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateGestureComponent;
}());
UpdateGestureComponent = __decorate([
    core_1.Component({
        selector: 'update',
        templateUrl: 'app/components/viewgesture/update.html',
        providers: [edit_service_1.EditGestureService]
    })
], UpdateGestureComponent);
exports.UpdateGestureComponent = UpdateGestureComponent;
