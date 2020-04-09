import { Component, OnInit } from '@angular/core';
import { UsersGQL, User } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersObservable: Observable<User[]>;

  constructor(private usersGql: UsersGQL) { }

  ngOnInit(): void {
    this.usersObservable = this.usersGql.watch().valueChanges
    .pipe(map(({data}) => data.users));
  }

}
