import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {EditGestureService }       from './edit_service';

@Component({
    selector: 'edit_gesture',
    templateUrl:'app/components/viewgesture/edit_gesture.html',
     providers: [ EditGestureService ]
   
})
export class EditGestureComponent implements OnInit{

 constructor(private service:EditGestureService){

 }
    private route: ActivatedRoute;
    private location: Location;
    private posts:any[] = [];
     private postid:any[] = [];
    private errorMessage:any = ''

    ngOnInit() {
      this.getPosts();
    //this.gestPostById();
    }

    getPosts() {
    this.service.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
     }

      gestPostById() {
            this.route.params.switchMap((params: Params) =>this.service.getdatabyId(+params['id']))
            .subscribe(id=>this.postid = id,
            error => this.errorMessage = <any>error);

     }
     
}