import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule,OnInit,Input}      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import{routing} from './app.routes';
import {Ng2PaginationModule} from 'ng2-pagination';
import { HttpModule, JsonpModule } from '@angular/http';
import{platformBrowser} from '@angular/platform-browser';
import{HomeComponent} from './components/home/home';
import{GestureComponent} from './components/gesture/gesture';
import{ViewGestureComponent} from './components/viewgesture/view_gesture';
import{AppComponent} from './components/app.component';
import{FootNoteComponent} from './components/footnote/footnote';
import{AddCustomerComponent} from './components/customers/add_customer';
import{ViewCustomerComponent} from './components/customers/view_customer';
import{EditCustomerComponent} from './components/customers/edit_customer';
import{ViewDeviceComponent} from './components/devices/view_device';
import{AddDeviceComponent} from './components/devices/add_device';
import{EditDeviceComponent} from './components/devices/edit_device';
import{PlayGroundComponent} from './components/playground/playground';
import{ReportsComponent} from './components/reports/report';
import{ViewUserComponent} from'./components/users/view_user';
import{AddUserComponent} from'./components/users/add_user';
import{EditUserComponent} from'./components/users/edit_user';
import{TestGestureComponent} from'./components/gesture/testgesture';
import{EditGestureComponent} from './components/viewgesture/edit_gesture';
import{UpdateGestureComponent} from'./components/viewgesture/update';
import{PaginationComponent} from './components/pagination/pagination';
import{DeleteGestureComponent} from './components/viewgesture/delete';
import{NotificationComponent}  from './components/notification/notification';
@NgModule({
    imports: [ BrowserModule, routing, ReactiveFormsModule,HttpModule,JsonpModule,Ng2PaginationModule, FormsModule],

    declarations: [AppComponent,HomeComponent,GestureComponent,
                    ViewGestureComponent,FootNoteComponent,AddCustomerComponent,
                    ViewCustomerComponent,EditCustomerComponent,ViewDeviceComponent,
                    AddDeviceComponent,EditDeviceComponent,PlayGroundComponent,
                     ReportsComponent,ViewUserComponent,AddUserComponent,EditUserComponent,
                     TestGestureComponent,EditGestureComponent,UpdateGestureComponent,
                     PaginationComponent,DeleteGestureComponent,NotificationComponent
                ],

    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);