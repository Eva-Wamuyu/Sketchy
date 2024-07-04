import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing: boolean = false;

  ngOnInit() {
    this.initializeCanvas();
  }

  private initializeCanvas(){
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      this.ctx = context;
    } else {
      throw new Error('Unable to get 2D context');
    }
    // Ensure the canvas is cleared on initialization
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  private getCanvasCoordinates(event: MouseEvent | TouchEvent): { x: number, y: number } {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    let x, y;
    if (event instanceof MouseEvent) {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    } else {
      const touch = event.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    }
    return { x, y };
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const { x, y } = this.getCanvasCoordinates(event);
    this.startDrawing(x, y);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.drawing) {
      const { x, y } = this.getCanvasCoordinates(event);
      this.draw(x, y);
    }
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    this.stopDrawing();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    event.preventDefault();
    const { x, y } = this.getCanvasCoordinates(event);
    this.startDrawing(x, y);
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    event.preventDefault();
    if (this.drawing) {
      const { x, y } = this.getCanvasCoordinates(event);
      this.draw(x, y);
    }
  }

  @HostListener('touchend')
  @HostListener('touchcancel')
  onTouchEnd() {
    this.stopDrawing();
  }

  private startDrawing(x: number, y: number) {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  private draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  private stopDrawing() {
    this.drawing = false;
    this.ctx.closePath();
  }

  changeColor(color: string) {
    this.ctx.strokeStyle = color;
  }

  clearCanvas() {
    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

  }


  undoCanvas(){

  }

  redoCanvas(){

  }

  downloadCanvas() {
    const BACKGROUND_COLOR: string = '#FFFFFF';
    
    const canvas = this.canvas.nativeElement;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d')!;

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.fillStyle = BACKGROUND_COLOR;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);


    const link = document.createElement('a');
    link.href = tempCanvas.toDataURL('image/png');
    link.download = 'sketchy.png';
    link.click();

  }



}
