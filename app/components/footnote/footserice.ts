import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestGestureComponent } from '../gesture/testgesture';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';

@Injectable()

export class FootService{
    constructor(private fvalues:TestGestureComponent){}

    getData():Observable<any[]> {
        this.fvalues;
        return ;
      }

    

}