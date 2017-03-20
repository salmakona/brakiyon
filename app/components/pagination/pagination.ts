import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PagerService } from './pagination_service';
//import * as _ from 'underscore';
@Component({
    selector: 'pagination',
    templateUrl: 'app/components/pagination/pagination.html',
    providers:[PagerService]
})

export class PaginationComponent implements OnInit {
    constructor(private http: Http, private pagerService: PagerService) { }

    // array of all items to be paged
     allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
    private posts:any[] = [];

    ngOnInit() {
     this.get().subscribe(data => {
                // set items to json response
                this.posts = data;
                // initialize to page 1
                 this.setPage(1);
        }); 
    }

    get():Observable<any[]>{
        // get dummy data
        //return this.http.get('./dummy-data.json')
        return this.http.get('https://braykion.herokuapp.com/api/gestures/')
            .map((response: Response) => response.json())
            
    }

            setPage(page: number) {
                if (page < 1 || page > this.pager.totalPages) {
                    return;
                }

        // get pager object from service
         this.pager = this.pagerService.getPager(this.posts.length, page);

        // get current page of items
        //this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }
}