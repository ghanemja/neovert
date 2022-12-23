import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleComponent } from './console/console.component';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { IgxGridModule } from 'igniteui-angular';
import { 
	IgxStepperModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRadioModule,
	IgxCardModule,
	IgxCheckboxModule,
	IgxSelectModule,
	IgxIconModule,
	IgxBadgeModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    ConsoleComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    IgxStepperModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRadioModule,
    IgxCardModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxIconModule,
    IgxBadgeModule,
    IgxGridModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
