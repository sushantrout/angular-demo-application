import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((a) => a.EmployeeModule),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./department/department.module').then(
            (a) => a.DepartmentModule
          ),
      }, {
        path:'',
        redirectTo: 'employee',
        pathMatch:'full'
      }
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
