import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantUmlRendererDisplayComponent } from './component/plant-uml-renderer-display/plant-uml-renderer-display.component';
import { EditorComponent } from './component/editor/editor.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {TextFieldModule} from "@angular/cdk/text-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { FileSelectorComponent } from './component/file-selector/file-selector.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    PlantUmlRendererDisplayComponent,
    EditorComponent,
    MainViewComponent,
    FileSelectorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
