import { Component ,ViewChild} from '@angular/core';
import {MathjaxComponent} from './mathjax/mathjax.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;

  name = 'Mathjax '; 
  mathContent = `Cuando $ a \\ne 0 $, Aqui esta dos soluciones a \\(ax^2 + bx + c = 0 \\) y  resultado
$$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`

title = 'myformulario';
}

  

  
  
  
  
  
    

