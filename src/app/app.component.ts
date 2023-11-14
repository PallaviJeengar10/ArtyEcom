import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ArtyEcomm';
  message: any = null;

  constructor(private afMessaging: AngularFireMessaging) {}

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  listen() {
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
    });
  }
}
