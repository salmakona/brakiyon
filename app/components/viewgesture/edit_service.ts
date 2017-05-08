import { Injectable,NgModule }    from '@angular/core';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { GestureService }       from './gesture_service';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Injectable()
export class EditGestureService {
    
        dd:string;
        dy:string;  
        submitted = false;
        private getUrl ='https://braykion.herokuapp.com/api/gestures/id';

        constructor (private http: Http,private gf:FormBuilder) {

            const fb = new FormBuilder();

        }

        private headers = new Headers({'Content-Type': 'application/json'});
        
        getData():Observable<any[]> {
                return this.http.get('https://braykion.herokuapp.com/api/gestures')
                    .map(this.extractData)
                        .catch(this.handleError);
        }
        
            
        getdatabyId(id: any): Observable<any> {
            const url = `${this.getUrl}/${id}`;
            console.log("Hello SAlma "+url);
            return this.http.get(url).map(this.extractData).catch(this.handleError);
        }


        onSubmit(formValue: any): Observable<any>{
           
              console.log("submitted from");
                    console.log("Form Button Clicked"); 
                    var x = formValue.label;
                    var y = formValue.description;
                    var id= formValue._id;
                    this.dd = x;
                    this.dy = y;
                    var data = {
                        "label":x,
                        "description":y
                    }
                    console.log("Onclick");         
                    console.log(data);
                    const url = `${this.getUrl}/${id}`;
                    console.log(url);
                    return this.http.put(url, JSON.stringify(data), {headers: this.headers}).catch(this.handleError);
    }

    deleteById(id: any): Observable<any>{
        const url = `${this.getUrl}/${id}`;
        console.log("Hello delete "+url);
        return this.http.delete(url, {headers: this.headers}).map(this.extractData).catch(this.handleError);
    }


    private extractData(res:Response) {
            let body = res.json();
            return body || [];
        }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
    }


 
}