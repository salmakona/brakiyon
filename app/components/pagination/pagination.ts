import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PagerService } from './pagination_service';
//import  'underscore';
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

    ngOnInit() {
        // get dummy data
        this.http.get('http://localhost:8080/app/components/pagination/dummy-data.json')
       // this.http.get('https://braykion.herokuapp.com/api/gestures/')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.allItems = data;

                // initialize to page 1
                this.setPage(1);
            });
    }


            setPage(page: number) {
                if (page < 1 || page > this.pager.totalPages) {
                    return;
                }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }
}