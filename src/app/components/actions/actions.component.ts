import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Output() undo = new EventEmitter<void>();
  @Output() redo = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>();



  undoCanvas() {
    this.undo.emit();
  }

  redoCanvas() {
    this.redo.emit();
  }

  clearCanvas() {
    this.clear.emit();
  }

  downloadCanvas() {
    this.download.emit();
  }

  
}
