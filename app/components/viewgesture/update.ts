import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule,Input,Output } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {EditGestureService }       from './edit_service';

@Component({
    selector: 'update',
    templateUrl:'app/components/viewgesture/update.html',
     providers: [ EditGestureService ]
   
})
export class UpdateGestureComponent implements OnInit{

 constructor(private service:EditGestureService,private route: ActivatedRoute){

 }
    private location: Location;
    private posts:any[] = [];
    private postid:any[] = [];
    private errorMessage:any = ''
    public label:string;
    submitted = false;
 


    ngOnInit() {

    this.gestPostById()   

     /*if(this.submitted = true){
         this.update();
     }*/
   
}

   /* getPosts() {
    this.service.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
     }
*/
    gestPostById() {
           return this.route.params.switchMap((params: Params) =>this.service.getdatabyId(params['id']))
            .subscribe( posts => this.posts = posts,
            error => this.errorMessage = <any>error);    
           
     }
    update(): void {

        //this.service.update(this.posts);
       this.service.onSubmit(this.posts);
    }
    
    goBack(): void {
        this.location.back();
    }
     
}