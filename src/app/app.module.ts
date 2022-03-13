import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HeaderComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
