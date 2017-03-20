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
require("rxjs/add/operator/do");
var gs_service_1 = require("./gs-service");
var GesturePaginationComponent = (function () {
    function GesturePaginationComponent(service, http) {
        this.service = service;
        this.http = http;
        this.data = [];
        this.errorMessage = '';
        ///Pagination code
        // pager object
        this.pager = {};
    }
    GesturePaginationComponent.prototype.ngOnInit = function () {
        this.getPosts();
        //this.pagination(1);   
        this.getqq();
        this.setPage(1);
    };
    GesturePaginationComponent.prototype.getPosts = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
    };
    GesturePaginationComponent.prototype.pagination = function (page) {
        var _this = this;
        //this._data = this.http.get("http://localhost:52472/api/data/" + page + "/10")
        return this.http.get("https://braykion.herokuapp.com/api/gestures/").map(function (res) { return res.json()
            .do(function (res) {
            _this._total = res.json().pagination.total_records;
            _this.currentpage = res.json().pagination.current_page;
            _this.previous_page = res.json().pagination.previous_page;
            _this.next_page = res.json().pagination.next_page;
            _this.next_page_endpoint = res.json().pagination.next_page_endpoint;
            _this.prev_page_endpoint = res.json().pagination.prev_page_endpoint;
        }); });
    };
    GesturePaginationComponent.prototype.getqq = function () {
        console.log("XXXXXXX");
        console.log(this.pagination(1));
    };
    GesturePaginationComponent.prototype.setPage = function (page) {
        var _this = this;
        this.http.get("https://braykion.herokuapp.com/api/gestures/").map(function (res) { return res.json()
            .do(function (res) {
            _this._total = res.json().pagination.total_records;
            _this.currentpage = res.json().pagination.current_page;
            _this.previous_page = res.json().pagination.previous_page;
            _this.next_page = res.json().pagination.next_page;
            _this.next_page_endpoint = res.json().pagination.next_page_endpoint;
            _this.prev_page_endpoint = res.json().pagination.prev_page_endpoint;
        }); });
        if (page < 1 || page > this.pager._total) {
            return;
        }
        // get pager object from service
        this.pager = this.service.getPager(this.data.length, page);
        // console.log(this.pager);
        // get current page of items
        this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return GesturePaginationComponent;
}());
GesturePaginationComponent = __decorate([
    core_1.Component({
        selector: 'gesturepagination',
        templateUrl: 'app/components/pagination/gs.html',
        providers: [gs_service_1.GesturePaginationService]
    })
], GesturePaginationComponent);
exports.GesturePaginationComponent = GesturePaginationComponent;
