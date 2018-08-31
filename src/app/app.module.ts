import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { RulesComponent } from './rules/rules.component';
import { AlertmanageComponent } from './alertmanage/alertmanage.component';
import { LogbookComponent } from './logbook/logbook.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    LoginpageComponent,
    SidebarComponent,
    UsermanageComponent,
    RulesComponent,
    AlertmanageComponent,
    LogbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
