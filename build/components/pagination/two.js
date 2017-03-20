"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
var twoappcomponent = (function () {
    function twoappcomponent() {
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
    }
    return twoappcomponent;
}());
twoappcomponent = __decorate([
    core_1.Component({
        selector: 'twoapp',
        template: "\n    <div class=\"text-center\">\n      <h1>ng2-pagination live demo</h1>\n      <p>A bare-bones demo for your experimenting / bug-reproducing pleasure.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"medium-8 medium-offset-2 columns\">\n        <h2 class=\"subheader\"></h2>\n        <ul>\n          <li *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">{{ item }}</li>\n        </ul>\n        \n        <pagination-controls (pageChange)=\"p = $event\" #api></pagination-controls>\n      </div>\n    </div>\n  "
    })
], twoappcomponent);
exports.twoappcomponent = twoappcomponent;
