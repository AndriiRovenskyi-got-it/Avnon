import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { AddQuestionDialogComponent } from './components/add-question-dialog/add-question-dialog.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [FormBuilderComponent, AddQuestionDialogComponent, ResultComponent],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FormBuilderModule {}
