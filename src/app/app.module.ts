import { FooterComponent } from './components/footer/footer.component';
import { TopNavComponent } from './components/topnav/topnav.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatToolbarModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
