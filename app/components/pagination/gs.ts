import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule } from '@angular/core';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Ng2PaginationModule} from 'ng2-pagination';
import { GesturePaginationService } from './gs-service';

export interface PagedResponse<T> {
    total: number;
    data: T[];
}

export interface DataModel {
    id: number;
    data: string;
}

@Component({
    selector: 'gesturepagination',
    templateUrl: 'app/components/pagination/gs.html',
    providers:[GesturePaginationService]
})

export class GesturePaginationComponent implements OnInit {
    private xx: Observable<DataModel[]>;
    private currentpage: number;
    private _total: number;
    private previous_page:number;
    private next_page:number;
    private next_page_endpoint:number;
    private prev_page_endpoint:number;
    
   constructor(private service:GesturePaginationService,private http:Http){}
    private data:any[] = [];
    private errorMessage:any = ''

    ngOnInit() {
      this.getPosts();
      //this.pagination(1);   
      this. getqq();  
       this.setPage(1); 
    }

        getPosts() {
        this.service.getData()
            .subscribe(
                data => this.data = data,
                error => this.errorMessage = <any>error);
               
        }
    



     pagination(page:number){
        //this._data = this.http.get("http://localhost:52472/api/data/" + page + "/10")
        return this.http.get("https://braykion.herokuapp.com/api/gestures/").map((res: any) => res.json()
                .do((res: any) => {
                    this._total = res.json().pagination.total_records;
                    this.currentpage = res.json().pagination.current_page;
                    this.previous_page = res.json().pagination.previous_page;
                    this.next_page = res.json().pagination.next_page;
                    this.next_page_endpoint = res.json().pagination.next_page_endpoint;
                    this.prev_page_endpoint = res.json().pagination.prev_page_endpoint;
                                
            }));
     }
        getqq(){
             console.log("XXXXXXX");
             console.log(this.pagination(1));
        }


///Pagination code
   
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
  

    setPage(page: number) {

        this.http.get("https://braykion.herokuapp.com/api/gestures/").map((res: any) => res.json()
                .do((res: any) => {
                    this._total = res.json().pagination.total_records;
                    this.currentpage = res.json().pagination.current_page;
                    this.previous_page = res.json().pagination.previous_page;
                    this.next_page = res.json().pagination.next_page;
                    this.next_page_endpoint = res.json().pagination.next_page_endpoint;
                    this.prev_page_endpoint = res.json().pagination.prev_page_endpoint;
                                
            }));

        if (page < 1 || page > this.pager._total) {
            return;
        }

        // get pager object from service
        this.pager = this.service.getPager(this.data.length, page);

        
       // console.log(this.pager);
        // get current page of items
        this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}