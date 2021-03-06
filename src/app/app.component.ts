import { Component } from '@angular/core';
import {Quotes} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes = [
    new Quotes(1,'why stading still is never an option',"Following your joy and your passion is the clearest indicator I know for achieving success in life",new Date(2018,3,14) ),
    new Quotes(2,'the person who will help you succeed',"It sometimes feels like that person is hiding. Like there aren’t enough of them to go round",new Date(2018,2,12) ),
    new Quotes(3, 'better results starting today',"You have SPECIFIC desires and needs",new Date(2018,3,14) ),
    new Quotes(4, 'be your best',"Which is why I love using Abundance as a clinical and life-transforming ‘Tool’",new Date(2018,2,10) ),
    new Quotes(5, 'transformation within 24 hours',"Our dreams can become supercharged to the power of a thousand in just 24 hours",new Date(2018,3,15) ),
    new Quotes(6, 'the calm after the storm',"Seize the day. Make it yours to grow abundance",new Date(2018,3,12) ),

]

}

