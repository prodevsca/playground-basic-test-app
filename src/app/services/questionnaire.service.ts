import { Injectable } from '@angular/core';
import * as data from '../../assets/questionnaire.json';
@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  fields = (data as any).default.item;
  constructor() {
    // console.log(this.fields);
  }
}
