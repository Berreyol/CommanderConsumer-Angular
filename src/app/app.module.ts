import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCommandComponent } from './components/command/add-command/add-command.component';
import { CommandDetailsComponent } from './components/command/command-details/command-details.component';
import { CommandListComponent } from './components/command/command-list/command-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCommandComponent,
    CommandDetailsComponent,
    CommandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
