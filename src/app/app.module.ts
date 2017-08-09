import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { menuService } from "./menu-service.service";
import { MenuListComponent } from './menu-list/menu-list.component';
import { ResumeComponent } from './resume/resume.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomDivComponent } from './custom-div/custom-div.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    TutorialsComponent,
    MenuListComponent,
    ResumeComponent,
    ProductListComponent,
    CustomDivComponent,
    CheckboxComponent,
    ToasterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [menuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
