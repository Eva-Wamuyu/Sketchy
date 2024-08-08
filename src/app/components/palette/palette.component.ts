import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {

  selectedColor: string = '#000000';
  @Output() colorSelected = new EventEmitter<string>();

  @Output() backgroundColorSelected = new EventEmitter<string>();

  selectColor(event: Event) {
    if (event){
    let color = (event?.target as HTMLInputElement).value;
    this.colorSelected.emit(color);
    }
  }

  selectBackgroundColor(color: string) {
    this.backgroundColorSelected.emit(color);
  }
}
