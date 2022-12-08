import { Injectable } from '@angular/core';
import { IQestion } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  qestions: IQestion[];

  constructor() { }

  setQuestions(qestions: IQestion []) {
    this.qestions = [...qestions];
  }

  getQuestions(): IQestion []{
    return this.qestions;
  }
}
