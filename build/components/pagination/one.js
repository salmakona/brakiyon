"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
var OneComponent = (function () {
    function OneComponent(http) {
        this.http = http;
        this.data = [];
        this.p = 1;
    }
    return OneComponent;
}());
OneComponent = __decorate([
    core_1.Component({
        selector: 'one',
        template: "\n    <ul class=\"meal-list\">\n\n   <li *ngFor=\"let item of asyncMeals | async | paginate: { id: 'server', itemsPerPage: 10, currentPage: p, totalItems:total}\">\n        {{item.label}}\n    </li>\n</ul>\n\n<div class=\"has-text-centered\">\n    <div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\"></div>\n    <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\n</div>",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], OneComponent);
exports.OneComponent = OneComponent;
/* ngOnInit() {
     this.getPage(1);
 }

getPage(page: number) {

    this.http.get('app/components/pagination/dummy-data.json')
     //this.http.get('https://braykion.herokuapp.com/api/gestures/')
     .do((res: any) => {
             this.total = res.json().total;
              this.page = page;
         })
         .map((response: Response) => response.json())
         .subscribe(data => this.data = data
     );
     this.asyncMeals = serverCall(this.data, page)
         .do(res => {
             this.total = res.total;
             this.p = page;
         })
         .map(res => res.items);
 }
}

*/
/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(data, page) {
    var perPage = 10;
    var start = (page) * perPage;
    var end = start + perPage;
    return Observable_1.Observable
        .of({
        items: data.slice(start, end),
        total: 32,
    }).delay(100);
}
