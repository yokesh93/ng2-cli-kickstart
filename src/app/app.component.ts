import { Component } from '@angular/core';
import { InitComponent } from './init/init.component' 
import { IsinService } from './isin.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers:[InitComponent ,IsinService]
})
export class AppComponent {
}
