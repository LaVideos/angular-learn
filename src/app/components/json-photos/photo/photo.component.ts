import {Component, Input} from '@angular/core';
import {PhotoJsonInterface, TodosJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input()
  photo:PhotoJsonInterface;
  constructor() {}
}
