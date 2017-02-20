import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedbackForm.component'

@NgModule({
  imports:      [BrowserModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, FeedbackFormComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }