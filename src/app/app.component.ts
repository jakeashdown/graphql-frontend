import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UserGQL } from './../generated/graphql'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trasheRacerName: Observable<string>;

  constructor(userGql: UserGQL) {
    this.trasheRacerName = userGql.fetch({ id: 'trashe-racer' }).pipe(map(result => result.data.user && result.data.user.name));
  }
}