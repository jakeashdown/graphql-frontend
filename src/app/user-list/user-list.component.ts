import { Component, OnInit } from '@angular/core';
import { UsersGQL, User } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  usersObservable: Observable<User[]>;

  constructor(private usersGql: UsersGQL,     private router: Router,
    ) { }

  ngOnInit(): void {
    this.usersObservable = this.usersGql.watch().valueChanges
    .pipe(map(({data}) => data.users));
  }
}
