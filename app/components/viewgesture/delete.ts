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
import {EditGestureService }       from './edit_service';

@Component({
    selector: 'delete',
    template:`<h1>Hello {{posts._id}}</h1>`,
     providers: [ EditGestureService ]
   
})

export class DeleteGestureComponent implements OnInit{

 constructor(private service:EditGestureService,private route: ActivatedRoute){

 }
  private posts:any[] = [];
   private errorMessage:any = '';
    ngOnInit() {
    return this.route.params.switchMap((params: Params) =>this.service.deleteById(params['id']))
            .subscribe( posts => this.posts = posts,
            error => this.errorMessage = <any>error);    
    }

     
}