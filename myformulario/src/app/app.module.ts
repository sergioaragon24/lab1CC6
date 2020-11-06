import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { GlobalService } from './global.service';


@NgModule({
  declarations: [
    AppComponent,
    MathjaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }


