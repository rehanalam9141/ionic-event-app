import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonApp, IonRouterOutlet, IonContent, IonFooter, IonToolbar, IonIcon, IonText } from "@ionic/angular/standalone";
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonText, IonIcon, IonToolbar, IonFooter, IonContent, IonRouterOutlet, IonApp, ],
})
export class AppComponent {
  constructor() {}
}
