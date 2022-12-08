import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  { path: 'builder', component: FormBuilderComponent },
  { path: 'result', component: ResultComponent },
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBuilderRoutingModule {}
