import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from 'src/graphql/types.generated';
import { UserDetailGQL as UserDetailGql } from 'src/graphql/queries/user-detail.generated';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserComponent implements OnInit {

  idOfUserNotFound: string | null;
  userObservable: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userGql: UserDetailGql
  ) { }

  ngOnInit(): void {
    this.userObservable = this.route.paramMap.pipe(
      switchMap((params) => {
        const id: string = params.get('id');
        return this.userGql.watch({ id }).valueChanges.pipe(map(({data}) => {
          this.idOfUserNotFound = data.user ? null : id;
          return data.user;
        }));
      }
    )
    );
  }

  toUsers() {
    this.router.navigate(['/users']);
  }
}
