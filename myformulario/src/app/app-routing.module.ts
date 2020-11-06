import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathjaxComponent } from './mathjax/mathjax.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
