import {Component} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
@Component({
    selector: 'application',
    templateUrl:'app/components/main.html'

})
export class AppComponent {

    constructor(private _router: Router){
        this._router.navigate(["/home"]);
    }
}