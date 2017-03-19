import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule } from '@angular/core';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GesturePaginationService {

  constructor (private http: Http) {}

    getData():Observable<any[]> {
            return this.http.get('https://braykion.herokuapp.com/api/gestures')
                .map(this.extractData)
                    .catch(this.handleError);
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

    
    
    print(){
            console.log("Hello");
        }



    //pagination code
        getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        //let pages = _.range(startPage, endPage + 1);
        let pages =[startPage, endPage + 1];

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}