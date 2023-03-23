import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB6FXkfHIB6J1pLITXl_dIaUmZgSZL85X4",
  authDomain: "pelisup-25730.firebaseapp.com",
  projectId: "pelisup-25730",
  storageBucket: "pelisup-25730.appspot.com",
  messagingSenderId: "128211175804",
  appId: "1:128211175804:web:f493a680ed5309de23fcf9",
  measurementId: "G-TRVX3MWVEC"
};

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutesModule,
    HttpClientModule,
    AngularFireAuthModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp (firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
