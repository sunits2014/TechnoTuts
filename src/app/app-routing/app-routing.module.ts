import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { AboutComponent } from "../about/about.component";
import { TutorialsComponent } from "../tutorials/tutorials.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'tutorials',
        component: TutorialsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
