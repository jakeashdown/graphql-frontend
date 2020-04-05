import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { EchoGQL } from './../generated/graphql'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  echoed: Observable<string>;

  constructor(echoGQL: EchoGQL) {
    this.echoed = echoGQL.watch().valueChanges.pipe(map(result => result.data.echoed));
  }
}