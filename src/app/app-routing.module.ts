import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path:'admin',
  loadChildren: () => import("./admin/admin.module").then(a => a.AdminModule)
}, {
  path:'',
  redirectTo: 'login',
  pathMatch:'full'
},{
  path:'**',
  component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
