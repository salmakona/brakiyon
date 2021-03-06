import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home";
import{GestureComponent} from"./components/gesture/gesture";
import{AppComponent} from './components/app.component';
import{ViewGestureComponent} from './components/viewgesture/view_gesture';
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

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
    {path: 'gesture', component: GestureComponent},
    {path: 'viewgesture', component: ViewGestureComponent},
    {path: 'footnote', component: FootNoteComponent},
    {path: 'add_customer', component: AddCustomerComponent},
    {path: 'view_customer', component: ViewCustomerComponent},
    {path: 'edit_customer', component: EditCustomerComponent},
    {path: 'view_device', component: ViewDeviceComponent},
    {path: 'add_device', component: AddDeviceComponent},
    {path: 'edit_device', component: EditDeviceComponent},
    {path: 'play_ground', component: PlayGroundComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'view_user', component: ViewUserComponent},
    {path: 'add_user', component: AddUserComponent},
    {path: 'edit_user', component: EditUserComponent},
    {path: 'testgesture', component: TestGestureComponent},
    {path:'edit_gesture',component: EditGestureComponent},
    { path: 'update/:id', component: UpdateGestureComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'delete/:id', component: DeleteGestureComponent },
     { path: 'notification', component: NotificationComponent }
];

export const routing = RouterModule.forRoot(routes);