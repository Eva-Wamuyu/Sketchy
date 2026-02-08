import { Component, EventEmitter, Output } from '@angular/core';
import { CanvasShape } from '../../models/shape-enum';

@Component({
    selector: 'app-select-shape',
    templateUrl: './select-shape.component.html',
    styleUrls: ['./select-shape.component.css'],
    standalone: false
})
export class SelectShapeComponent {
  @Output() shapeSelected = new EventEmitter<CanvasShape>();
  selectedShape: CanvasShape = CanvasShape.Freehand;

  readonly CanvasShape = CanvasShape;


  selectShape(shape: CanvasShape) {
    this.selectedShape = shape;
    this.shapeSelected.emit(shape);
  }

}
