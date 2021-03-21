import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCGvqwmcW0t14XtkQn4syrHEJIR8jtiON4",
      authDomain: "gestion-livre-6ce39.firebaseapp.com",
      databaseURL: "https://gestion-livre-6ce39-default-rtdb.firebaseio.com/",
      projectId: "gestion-livre-6ce39",
      storageBucket: "gestion-livre-6ce39.appspot.com",
      messagingSenderId: "398310891232",
      appId: "1:398310891232:web:3082832adcc402a65dfa85",
      measurementId: "G-8S92GV9Y4C"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
