import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

interface IServerResponse {
    items: string[];
    total: number;
}

@Component({
    selector: 'one',
    template: `
    <ul class="meal-list">

   <li *ngFor="let item of asyncMeals | async | paginate: { id: 'server', itemsPerPage: 10, currentPage: p, totalItems:total}">
        {{item.label}}
    </li>
</ul>

<div class="has-text-centered">
    <div class="spinner" [ngClass]="{ 'hidden': !loading }"></div>
    <pagination-controls (pageChange)="getPage($event)" id="server"></pagination-controls>
</div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})



export class OneComponent {

    data: string[] = [];
    asyncMeals: Observable<string[]>;
    p: number = 1;
    total: number;
    page:number;
     totalItems:number;
constructor (private http: Http) {}

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {

       this.http.get('http://localhost:8080/app/components/pagination/dummy-data.json')
        //this.http.get('https://braykion.herokuapp.com/api/gestures/')
        .do((res: any) => {
                this.total = res.json().total;
                 this.page = page;
            })
            .map((response: Response) => response.json())
            .subscribe(data => this.data = data
        );

        this.asyncMeals = serverCall(this.data, page)
            .do(res => {
                this.total = res.total;
                this.p = page;
            })
            .map(res => res.items);
    }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */

function serverCall(data: string[], page: number): Observable<IServerResponse> {
    const perPage = 10;
    const start = (page) * perPage;
    const end = start + perPage;
    return Observable 
        .of({
            items: data.slice(start, end),
            total: 32,
        }).delay(100);
}
 

