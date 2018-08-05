import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { RulesComponent } from './rules/rules.component';
import { AlertmanageComponent } from './alertmanage/alertmanage.component';
import { LogbookComponent } from './logbook/logbook.component';


const routes: Routes = [

  
  { path: 'landpage', component: LandpageComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: '', redirectTo: '/loginpage', pathMatch: 'full'},
  { path: 'usermanagement', component: UsermanageComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'alertmanagement', component: AlertmanageComponent },
  { path: 'logbook', component: LogbookComponent },
  
];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
