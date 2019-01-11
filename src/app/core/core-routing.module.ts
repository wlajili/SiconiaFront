import { MeterConnectionComponent } from '../device-control/meter-connection/meter-connection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { MeterDeconnectionComponent } from '../device-control/meter-deconnection/meter-deconnection.component';
import { MeterMessageComponent } from '../device-control/meter-message/meter-message.component';


export const routes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/meter-connection', pathMatch: 'full' },
        {path: 'meter-connection', component: MeterConnectionComponent},
        {path: 'meter-deconnection', component: MeterDeconnectionComponent},
        {path: 'meter-message', component: MeterMessageComponent}

    ]
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }

