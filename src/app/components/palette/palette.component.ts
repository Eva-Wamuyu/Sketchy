import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
  colors = [
    '#000000',
    '#FFFFFF',
    '#808080',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FFA500',
    '#800080',
    '#FFC0CB',
    '#008080',
    '#FFD700',
    '#A52A2A',
    '#FF1493',
  ];

  selectedColor: string = '';
  @Output() colorSelected = new EventEmitter<string>();

  selectColor(event?: Event,color?:string) {
    if(color) this.colorSelected.emit(color);
    if (event){
    let color = (event?.target as HTMLInputElement).value;
    this.colorSelected.emit(color);
    }
    this.selectedColor = color ?? '';
  }
}
