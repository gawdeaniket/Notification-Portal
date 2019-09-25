import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { DeviceDetectorModule } from 'ngx-device-detector';


import {SharedModule} from './shared/shared.module';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(0,0,0,0.3)',
      fullScreenBackdrop: true,
      backdropBorderRadius: '4px',
      primaryColour: '#fcdb04',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
