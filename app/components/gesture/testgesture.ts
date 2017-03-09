import {Component} from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
    selector: 'testgesture',
    templateUrl:'app/components/gesture/testgesture.html'
   
})
export class TestGestureComponent{

        gestureformModel: FormGroup;
           
        constructor(private gf:FormBuilder) {
         const fb = new FormBuilder();
            this.gestureformModel = fb.group({
                'name': [null,Validators.required],
                 //'name': [null, Validators.minLength(3)],
                'description': [null,Validators.required]
            })
        }
        /*onSubmit() {
            if (this.gestureformModel.valid) {
            console.log(this.gestureformModel.value);
            }
        }*/
        onSubmit(formValue: any, isFormValid: boolean) {
                if (isFormValid) {
                console.log(formValue);
                }
        }
}


 