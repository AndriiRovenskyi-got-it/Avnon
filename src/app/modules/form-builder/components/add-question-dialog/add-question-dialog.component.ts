import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QuestionTypes } from '../../interfaces/question.interface';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss'],
})
export class AddQuestionDialogComponent implements OnInit {
  public types = Object.values(QuestionTypes);
  public form!: FormGroup;
  public submitted = false;
  public showOptionsField: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddQuestionDialogComponent>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      questionText: new FormControl('', Validators.required),
      type: new FormControl(QuestionTypes.Paragraph),
      options: new FormArray([]),
      withOwnAnswer: new FormControl(''),
      requiredField: new FormControl('', Validators.requiredTrue),
    });
  }

  get options() {
    return this.form.controls['options'] as FormArray;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }

  }

  onRadioBtnChange() {
    this.showOptionsField =
      this.form.controls['type'].value === QuestionTypes.CheckboxList;
    this.form.controls['options'] = new FormArray([new FormControl('')]);
  }

  removeAnswerControl(index: number) {
    if ((this.form.controls['options'] as FormArray).controls.length > 1) {
      (this.form.controls['options'] as FormArray).removeAt(index);
    }
  }

  addAnswerControl() {
    if ((this.form.controls['options'] as FormArray).controls.length < 5) {
      (this.form.controls['options'] as FormArray).push(
        new FormControl('', Validators.required)
      );
    }
  }
}
