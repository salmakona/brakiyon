import { Injectable,NgModule }    from '@angular/core';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { GestureService }       from './gesture_service';

@Injectable()
export class EditGestureService {

    constructor (private http: Http) {}
    private headers = new Headers({'Content-Type': 'application/json'});
    
    getData():Observable<any[]> {
            return this.http.get('https://braykion.herokuapp.com/api/gestures')
                .map(this.extractData)
                    .catch(this.handleError);
    }
        private getUrl ='https://braykion.herokuapp.com/api/gestures/id';
        getdatabyId(id: any): Observable<any> {
            console.log("Hello"+ id);
            const url = `${this.getUrl}/${id}`;
            console.log(url);
            return this.http.get(url).map(this.extractData).catch(this.handleError);
        }


         /*update(data:any): Observable<any> {
            const url = `${this.heroesUrl}/${data._id}`;
            return this.http
            .put(url, JSON.stringify(data), {headers: this.headers})
            .catch(this.handleError);
        }*/

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