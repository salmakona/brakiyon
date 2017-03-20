"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/map");
var GestureComponent = (function () {
    function GestureComponent(gf, http) {
        this.gf = gf;
        this.http = http;
        var fb = new forms_1.FormBuilder();
        this.gestureformModel = fb.group({
            'label': [null, forms_1.Validators.required],
            'description': [null, forms_1.Validators.required]
        });
    }
    GestureComponent.prototype.onSubmit = function (formValue, isFormValid) {
        console.log("Form Button Clicked");
        var url = "https://braykion.herokuapp.com/api/gestures";
        var x = formValue.label;
        var y = formValue.description;
        var data = {
            "label": x,
            "description": y
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(data);
        console.log(formValue.label, formValue.description);
        return this.http.post(url, JSON.stringify(data), options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert('ok');
        }, function (error) {
            console.log(error.json());
        });
    };
    return GestureComponent;
}());
GestureComponent = __decorate([
    core_1.Component({
        selector: 'gesture',
        templateUrl: 'app/components/gesture/gesture.html'
    })
], GestureComponent);
exports.GestureComponent = GestureComponent;
