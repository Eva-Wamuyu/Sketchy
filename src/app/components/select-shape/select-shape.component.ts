import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-select-shape',
    templateUrl: './select-shape.component.html',
    styleUrls: ['./select-shape.component.css'],
    standalone: false
})
export class SelectShapeComponent {
  @Output() shapeSelected = new EventEmitter<string>();
  selectedShape: string = 'freehand';


  selectShape(shape: string) {
    this.selectedShape = shape;
    this.shapeSelected.emit(shape);
  }

}
