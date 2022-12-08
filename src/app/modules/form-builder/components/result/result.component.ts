import { Component, OnInit } from '@angular/core';
import { IQestion } from '../../interfaces/question.interface';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questions: IQestion[] = [];

  constructor(
    private formBouilderService: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.questions = this.formBouilderService.getQuestions();
  }


}
