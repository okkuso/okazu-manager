import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopHeaderContainerComponent } from './top-header-container/top-header-container.component';
import { TopBodyComponent } from './top-body/top-body.component';
import { TopBodyContainerComponent } from './top-body-container/top-body-container.component';
import { CommonService } from './services/common.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopHeaderComponent,
    TopHeaderContainerComponent,
    TopBodyComponent,
    TopBodyContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
