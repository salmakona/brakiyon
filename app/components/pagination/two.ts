import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'twoapp',
  template: `
    <div class="text-center">
      <h1>ng2-pagination live demo</h1>
      <p>A bare-bones demo for your experimenting / bug-reproducing pleasure.</p>
    </div>
    <div class="row">
      <div class="medium-8 medium-offset-2 columns">
        <h2 class="subheader"></h2>
        <ul>
          <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }">{{ item }}</li>
        </ul>
        
        <pagination-controls (pageChange)="p = $event" #api></pagination-controls>
      </div>
    </div>
  `
})
export class twoappcomponent {
  collection:any[];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}