import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/graphql/types.generated';
import { UserListGQL as UserListGql } from 'src/graphql/queries/user-list.generated';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersComponent implements OnInit {

  // todo:
  //  - display error when backend is not running
  //  - create user module
  //  - style with bootstrap
  //  - find way to auto-cleanup npm package

  usersObservable: Observable<User[]>;

  constructor(private usersGql: UserListGql) { }

  ngOnInit(): void {
    this.usersObservable = this.usersGql.watch().valueChanges
    .pipe(map(({data}) => data.users));
  }
}
