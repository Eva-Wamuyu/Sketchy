// Import necessary functions and components
import { mount } from 'cypress/angular';
import { AppComponent } from '../../src/app/app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    mount(AppComponent, {
      declarations: [CanvasComponent],
      imports: [BrowserModule, CommonModule],
    });
  });

  it('should render the app-canvas component', () => {
    cy.get('app-canvas').should('exist').and('be.visible');
  });
});
