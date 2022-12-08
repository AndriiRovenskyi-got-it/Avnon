export interface IQestion {
  question: string;
  answer?: string;
  type?: QuestionTypes;
  listType?: false,
  list?: {
    name: string,
    value: boolean,
    ownAnswer?: boolean
  }
}

export enum QuestionTypes {
  Paragraph = 'Paragraph',
  CheckboxList = 'Checkbox List',
}
