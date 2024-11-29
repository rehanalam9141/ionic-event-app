import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonicSlides ,IonToolbar, IonTitle, IonContent, IonIcon, IonItem, IonLabel, IonButton, IonText, IonFabButton, IonBadge, IonRow, IonCol, IonSearchbar, IonInput, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locateOutline, notificationsOutline, optionsOutline, locationOutline, arrowForwardOutline } from 'ionicons/icons';

import { Category } from '../../interfaces/category.interface';
import { Event } from '../../interfaces/event.interface';
import { events } from '../../data/events';
import { categories } from '../../data/categories';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    IonListHeader,
    IonList,
    IonInput,
    IonSearchbar,
    IonCol,
    IonRow,
    IonBadge,
    IonFabButton,
    IonText,
    IonButton,
    IonLabel,
    IonItem,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  swiperModules = [IonicSlides];
  upcomingEvents: Event[] = [];
  currentEvents: Event[] = [];
  categories: Category[] = [];

  constructor() {
    addIcons({locateOutline,notificationsOutline,optionsOutline,locationOutline,arrowForwardOutline});
  }

  ngOnInit(): void {
    this.currentEvents = [...events];
    this.upcomingEvents = events.sort((a, b) => {
      // Convert id to number for comparison
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA; // Descending order
    });
    this.categories = [...categories];
  }
}
