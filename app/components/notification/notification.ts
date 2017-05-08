import {Component,OnInit} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'notification',
    templateUrl:'app/components/notification/notification.html'
   
})

export class NotificationComponent{

    constructor (private http: Http) {}

        //ngOnInit() { 

        //}

        
        private errorMessage:any = '';

        private proximityNoDectect:any[] = [];

        getproximityHandWash($event:any) {
            console.log("One");
            console.log($event);
                this.proximityHandWashData()
                .subscribe(
                proximityNoDectect => this.proximityNoDectect = proximityNoDectect,
                error => this.errorMessage = <any>error);
        }

        proximityHandWashData():Observable<any[]> {
            return this.http.get('http://braykion.herokuapp.com/api/notifications/proximity/handwash/true')
                .map(this.extractData)
                .catch(this.handleError);
        }


        private proximityDectect:any[] = [];

        getproximityHandWashDatadectect($event:any) {
            console.log("TWO");
            console.log($event);
            
                this.proximityHandWashDatadectect().subscribe(
                proximityDectect => this.proximityDectect = proximityDectect,
                error => this.errorMessage = <any>error);
        }

        proximityHandWashDatadectect():Observable<any[]> {
            return this.http.get('http://braykion.herokuapp.com/api/notifications/proximity/handwash/true')
                .map(this.extractData)
                .catch(this.handleError);
        }


        private handwashdataSoapan:any[] = [];

        gethandwashdataSoapandWater($event:any){
            console.log("Three");
            console.log($event);
            this.handwashdataSoapandWater().subscribe(
                handwashdataSoapan => this.handwashdataSoapan = handwashdataSoapan,
                error => this.errorMessage = <any>error);
        }

        handwashdataSoapandWater(){
            return this.http.get('http://braykion.herokuapp.com/api/notifications/handwash/soapandwater')
                .map(this.extractData).catch(this.handleError);
        }



        private handwashAlcohol:any[] = [];

        gethandwashAlcohol($event:any){
            console.log("Four");
            console.log($event);
            this.handwashAlcoholData().subscribe(
                handwashAlcohol => this.handwashAlcohol = handwashAlcohol,
                error => this.errorMessage = <any>error);
        }

        handwashAlcoholData(){
            return this.http.get('http://braykion.herokuapp.com/api/notifications/handwash/alcoholbasedsanitizer')
                .map(this.extractData).catch(this.handleError);
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