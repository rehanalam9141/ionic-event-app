import { SwiperModule } from './../../../node_modules/swiper/types/shared.d';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonicSlides,IonToolbar, IonContent, IonFooter, IonText, IonButton } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonButton, NgStyle ,IonText, IonFooter, IonContent, IonToolbar, IonHeader, RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {

  onboardingScreen = [
    {image:'1.jpg'},
    {image:'2.jpg'},
    {image:'3.jpg'},
  ]

  swiperModule = [IonicSlides]
  constructor() { }

  ngOnInit() {
  }

}
