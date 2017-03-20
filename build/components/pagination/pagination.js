"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("./gestures");
//import * as _ from 'underscore';
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.jsonURL = "https://braykion.herokuapp.com/api/gestures/";
        this.baseURL = "http://braykion.herokuapp.com";
        this.nextURL = "";
        this.prevURL = "";
        this.searchTerm = "";
        this.searchURL = baseURL + "/api/items/search/" + searchTerm;
        this.Item = function Item(_id, label, description) {
            this.id = _id;
            this.label = label;
            this.description = description;
        };
    }
    PaginationComponent.prototype.loadJSON = function (file, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    };
    PaginationComponent.prototype.sendJSON = function (url, data, callback) {
        var xobj = new XMLHttpRequest();
        xobj.open('PUT', url, true);
        xobj.setRequestHeader('Content-Type', 'application/json');
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4) {
                callback(xobj.responseText);
            }
        };
        console.log(JSON.stringify(data));
        xobj.send(JSON.stringify(data));
    };
    PaginationComponent.prototype.load = function () {
        loadJSON(jsonURL, function (response) {
            var itemsJson = JSON.parse(response);
            loadItemsTable(itemsJson);
        });
    };
    PaginationComponent.prototype.next = function () {
        jsonURL = baseURL + nextURL;
        load();
    };
    PaginationComponent.prototype.previous = function () {
        jsonURL = baseURL + prevURL;
        load();
    };
    PaginationComponent.prototype.loadItemsTable = function (itemsJson) {
        var paginationObj = itemsJson["pagination"];
        if (paginationObj != null) {
            nextURL = paginationObj["next_page_endpoint"];
            prevURL = paginationObj["prev_page_endpoint"];
            var total_items = paginationObj["total_records"];
            var total_items_text = document.getElementById("total_items_text");
            total_items_text.innerHTML = "Total Items: " + total_items;
            var current_page = paginationObj["current_page"];
            var current_page_text = document.getElementById("current_page");
            current_page_text.innerHTML = current_page;
        }
        // We've got our items.  Let's parse and update the table!
        var itemsObj = itemsJson["gestures"];
        var output = document.querySelector('#itemsTable tbody');
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        templateUrl: 'app/components/pagination/pagination.html',
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
