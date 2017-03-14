import {Injectable} from "@angular/core";
import {Component} from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions}from '@angular/http';
import { FormsModule} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'testgesture',
    templateUrl:'app/components/gesture/testgesture.html'
   
})
@Injectable()
export class TestGestureComponent{

        gestureformModel: FormGroup;   
        constructor(private gf:FormBuilder,private http:Http) {
         const fb = new FormBuilder();
            this.gestureformModel = fb.group({
                'label': [null,Validators.required],
                'description': [null,Validators.required]
            })
        }

       onSubmit(formValue: any, isFormValid: boolean) {
           console.log("Form Button Clicked"); 
           var url = "https://braykion.herokuapp.com/api/gestures";
            var x = formValue.label;
            var y = formValue.description;
            var data = {
                "label":x,
                "description":y
            }
            let headers = new Headers({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*" });
            let options = new RequestOptions({ headers: headers });
            let body =JSON.stringify(data);
            console.log(formValue.label,formValue.description);
                return this.http.post(url,JSON.stringify(data), options).map((res: Response) => res.json())
                    .subscribe(data => {alert('ok');
                        }, error => {console.log(error.json());
                    });

                }
                
            }



