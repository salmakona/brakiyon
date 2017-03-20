"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var pagination_service_1 = require("./pagination_service");
//import * as _ from 'underscore';
var PaginationComponent = (function () {
    function PaginationComponent(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        this.posts = [];
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get().subscribe(function (data) {
            // set items to json response
            _this.posts = data;
            // initialize to page 1
            _this.setPage(1);
        });
    };
    PaginationComponent.prototype.get = function () {
        // get dummy data
        //return this.http.get('./dummy-data.json')
        return this.http.get('https://braykion.herokuapp.com/api/gestures/')
            .map(function (response) { return response.json(); });
    };
    PaginationComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.posts.length, page);
        // get current page of items
        //this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        templateUrl: 'app/components/pagination/pagination.html',
        providers: [pagination_service_1.PagerService]
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
