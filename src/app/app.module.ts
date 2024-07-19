import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PaletteComponent } from './components/palette/palette.component';
import { SelectShapeComponent } from './components/select-shape/select-shape.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PaletteComponent,
    SelectShapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
