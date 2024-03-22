import { userResponse } from './interfaces/userResponse.interface';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewExpertsComponent } from './components/view-experts/view-experts.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { ExpertComponent } from './components/expert/expert.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { ChatExpertComponent } from './components/chat-expert/chat-expert.component';
import { ExpertAddAppointmentComponent } from './components/expert-add-appointment/expert-add-appointment.component';
import { SingleExpertPageComponent } from './components/single-expert-page/single-expert-page.component';
import { ViewBookingUserComponent } from './components/view-booking-user/view-booking-user.component';
import { ExpertCardComponent } from './components/expert-card/expert-card.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent, children:[
        {path: 'view-expert', component: ViewExpertsComponent},
        {path: 'view-users', component: ViewUsersComponent},
    ]} ,
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'view-expert-post', component: SingleExpertPageComponent},
    {path: 'add-booking', component: ExpertAddAppointmentComponent},
    {path: 'edit-user', component: EditUserComponent},
    
    { path: 'user', component: UserComponent,children:[
        {path: 'view-booking-user', component: ViewBookingUserComponent},
        {path: 'view-chat', component: ChatExpertComponent},
        {path: 'add-booking', component: ExpertAddAppointmentComponent},
       
    ]} ,
    { path: 'expert', component: ExpertComponent, children:[
        {path: 'view-booking', component: ViewBookingComponent},
        {path: 'view-chat', component: ChatExpertComponent},
        {path: 'add-booking', component: ExpertAddAppointmentComponent},
        {path: 'expert-card', component: ExpertCardComponent},
    ]} ,

];
