import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlantUmlRendererDisplayComponent} from './component/plant-uml-renderer-display/plant-uml-renderer-display.component';
import {EditorComponent} from './component/editor/editor.component';
import {MainViewComponent} from './component/main-view/main-view.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {TextFieldModule} from "@angular/cdk/text-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FileSelectorComponent} from './component/file-selector/file-selector.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ACE_CONFIG, AceConfigInterface, AceModule} from "ngx-ace-wrapper";

const DEFAULT_ACE_CONFIG: AceConfigInterface = {};

@NgModule({
  declarations: [
    AppComponent,
    PlantUmlRendererDisplayComponent,
    EditorComponent,
    MainViewComponent,
    FileSelectorComponent
  ],
  imports: [
    AceModule,
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
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
