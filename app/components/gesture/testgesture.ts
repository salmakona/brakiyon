import {Injectable} from "@angular/core";
import {Component,NgModule,OnInit} from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'testgesture',
    templateUrl:`app/components/gesture/testgesture.html`,
   
   
})
@Injectable()
export class TestGestureComponent{
    
        gestureformModel: FormGroup;
        dd:string;
        dy:string;  
        submitted = false;
        returnUrl: string;
        constructor(private gf:FormBuilder,private http:Http,private route: ActivatedRoute,private router: Router) {
         const fb = new FormBuilder();
            this.gestureformModel = fb.group({
                'label': [null,Validators.required],
                'description': [null,Validators.required]
            })
           
            
        }

     
        onSubmit(formValue: any, isFormValid: boolean) {

                    if(this.submitted = true){

                            console.log("submitted from");
                            console.log("Form Button Clicked"); 
                            var x = formValue.label;
                            var y = formValue.description;
                            this.dd = x;
                            this.dy = y;
                            var url = "https://braykion.herokuapp.com/api/gestures";
                            var data = {
                                "label":x,
                                "description":y
                            }
                            console.log("Onclick");
                            let headers = new Headers({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*" });
                            let options = new RequestOptions({ headers: headers });
                            let body =JSON.stringify(data);
                            return this.http.post(url,JSON.stringify(data), options).map((res: Response) => res.json())
                                    .subscribe(data => {alert('ok');
                                        }, error => {console.log(error.json());
                            });

                    }else{
                        console.log("Not submitted from");
                    }
     }
         
}



