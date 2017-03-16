import {Injectable} from "@angular/core";
import { Component, OnInit,NgModule } from '@angular/core';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GesturePaginationService } from './gs-service';

@Component({
    selector: 'gesturepagination',
    templateUrl: 'app/components/pagination/gs.html',
    providers:[GesturePaginationService]
})

export class GesturePaginationComponent implements OnInit {
    
   constructor(private service:GesturePaginationService){



 }

    private data:any[] = [];
    private errorMessage:any = ''

    ngOnInit() {
      this.getPosts();
    }

    getPosts() {
    this.service.getData()
        .subscribe(
            data => this.data = data,
            error => this.errorMessage = <any>error);
             this.setPage(1);
     }


///Pagination code
   
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.service.getPager(this.data.length, page);

        
        console.log(this.pager);
        // get current page of items
        this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}