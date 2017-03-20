import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PagerService } from './pagination_service';

//import * as _ from 'underscore';
@Component({
    selector: 'pagination',
    templateUrl: 'app/components/pagination/pagination.html',
    //providers:[PagerService]
    
})
export class PaginationComponent implements OnInit{

    constructor(){
 
    }

    jsonURL1 = "https://braykion.herokuapp.com/api/gestures/";
    baseURL = "https://braykion.herokuapp.com";
    nextURL = "";
    prevURL = "";
    _id:number;
     xx:any[];
     jsonURL='';
    
    loadJSON(file:any, callback:any) {    
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4) {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);  

    }


    Item = function Item(_id:any, label:any, description:any) {

            this.id = this.id;
            this.label = label
            this.description = description;
    };

    load() {
       this.loadJSON(this.jsonURL,(response:any)=>{
            var itemsJson = JSON.parse(response);
            this.loadItemsTable(itemsJson)
        });
        
        
    }

loadpagi() {
       this.loadJSON(this.jsonURL1,(response:any)=>{
            var itemsJson = JSON.parse(response);
            this.loadItemsTable(itemsJson)
        });
        
        
    }

loadItemsTable(itemsJson:any)
        {
            let paginationObj = itemsJson["pagination"];
             console.log(paginationObj);

            if(paginationObj != null)
                {
                    this.nextURL = paginationObj["next_page_endpoint"];
                    this.prevURL = paginationObj["prev_page_endpoint"];


                    var total_items = paginationObj["total_records"];
                    var total_items_text = document.getElementById("total_items_text");
                    total_items_text.innerHTML = "Total Items: " + total_items;

                    var current_page = paginationObj["current_page"];
                    var current_page_text = document.getElementById("current_page");
                    current_page_text.innerHTML = current_page;
                }
            // We've got our items.  Let's parse and update the table!
            let itemsObj = itemsJson["gestures"];
            //var output = document.querySelector('#itemsTable tbody');

        /*itemsObj.forEach(function (item:any) {
            var row = document.createElement('tr');
            row.setAttribute('data-id', item["_id"]);
        });
*/
            console.log(itemsObj);
            this.xx=itemsObj;
            

}
 
     next() {
            
            this.jsonURL1 = this.baseURL+this.nextURL;
            //console.log("Salma"+this.jsonURL);
            this.loadpagi();
    }

    previous() {
            this.jsonURL1 = this.baseURL+this.prevURL;
            this.loadpagi();
        }

        ngOnInit(){
            this.jsonURL = 'https://braykion.herokuapp.com/api/gestures/';
            this.load();
            //this.next();
            //this.previous();

        }

}