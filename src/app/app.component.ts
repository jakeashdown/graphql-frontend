import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  echoed: string;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            echoed: echo(toEcho: "data to echo")
          }
        `,
      })
      .valueChanges.subscribe(result => {
        const data: any = result.data
        this.echoed = data && data.echoed;

        this.loading = result.loading;
        
        this.error = (result as any).error;
      });
  }
}