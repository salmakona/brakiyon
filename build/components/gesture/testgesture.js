"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/map");
var TestGestureComponent = (function () {
    function TestGestureComponent(gf, http, route, router) {
        this.gf = gf;
        this.http = http;
        this.route = route;
        this.router = router;
        this.submitted = false;
        var fb = new forms_1.FormBuilder();
        this.gestureformModel = fb.group({
            'label': [null, forms_1.Validators.required],
            'description': [null, forms_1.Validators.required]
        });
    }
    TestGestureComponent.prototype.onSubmit = function (formValue, isFormValid) {
        if (this.submitted = true) {
            console.log("submitted from");
            console.log("Form Button Clicked");
            var x = formValue.label;
            var y = formValue.description;
            this.dd = x;
            this.dy = y;
            var url = "https://braykion.herokuapp.com/api/gestures";
            var data = {
                "label": x,
                "description": y
            };
            console.log("Onclick");
            var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
            var options = new http_1.RequestOptions({ headers: headers });
            var body = JSON.stringify(data);
            return this.http.post(url, JSON.stringify(data), options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                alert('ok');
            }, function (error) {
                console.log(error.json());
            });
        }
        else {
            console.log("Not submitted from");
        }
    };
    return TestGestureComponent;
}());
TestGestureComponent = __decorate([
    core_2.Component({
        selector: 'testgesture',
        templateUrl: "app/components/gesture/testgesture.html",
    }),
    core_1.Injectable()
], TestGestureComponent);
exports.TestGestureComponent = TestGestureComponent;
