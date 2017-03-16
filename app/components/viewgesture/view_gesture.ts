import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { GestureService }       from './gesture_service';

@Component({
    selector: 'viewgesture',
    templateUrl:'app/components/viewgesture/view_gesture.html',
     providers: [ GestureService ]
   
})
export class ViewGestureComponent implements OnInit{
    constructor(private service:GestureService){}
    private posts:any[] = [];
    private errorMessage:any = '';
    getPosts() {
    this.service.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
     }
    ngOnInit() { this.getPosts(); }
}