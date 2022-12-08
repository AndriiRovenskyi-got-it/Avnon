import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionDialogComponent } from './components/add-question-dialog/add-question-dialog.component';
import { IQestion, QuestionTypes } from './interfaces/question.interface';
import { FormBuilderService } from './services/form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  questions: IQestion[] = [];

  constructor(
    public dialog: MatDialog,
    private formBouilderService: FormBuilderService
  ) {}

  ngOnInit(): void {}

  addQuestion(): void {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      let question;
      if (result.type == QuestionTypes.Paragraph) {
        question = {
          question: result.questionText,
          listType: false,
          answer: '',
        };
      } else {
        question = {
          question: result.questionText,
          listType: true,
          list: result.options.map((el) => {
            return {
              name: el,
              value: false,
            };
          }),
        };
        if (result.withOwnAnswer) {
          question.list.push({
            name: '',
            value: false,
            ownAnswer: true,
          });
        }
      }
      this.questions.push(question);
    });
  }

  reviewAnswer() {
    this.formBouilderService.setQuestions(this.questions);
  }
}
