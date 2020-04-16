import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from 'src/graphql/types.generated';
import { UserGQL as UserGql, UserDocument } from 'src/graphql/queries/user.generated';
import { UserUpdateGQL as UserUpdateGql } from 'src/graphql/mutations/user-update.generated';
import { UsersDocument } from 'src/graphql/queries/users.generated';
import { UserDeletionGQL as UserDeletionGql } from 'src/graphql/mutations/user-delete.generated';

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
    private userGql: UserGql,
    private userUpdateGql: UserUpdateGql,
    private userDeletionGql: UserDeletionGql
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

  updateUser(user: User) {
    if (user.name === "") user.name = null 

    this.userUpdateGql.mutate({ id: user.id, name: user.name },
      {
        update(cache, { data: { updatedUser } }) {
          cache.readQuery({ query: UserDocument });
          cache.writeQuery({
            query: UsersDocument,
            data: { user: updatedUser },
          });
        }
      }).subscribe(() => this.router.navigate(['/users']));
  }

  deleteUser(user: User) {
    this.userDeletionGql.mutate({ id: user.id },
      {
        update(cache) {
          cache.readQuery({ query: UserDocument });
          cache.writeQuery({
            query: UsersDocument,
            data: { user: null },
          });
        }
      }).subscribe(() => this.router.navigate(['/users']));
    }

  toUsers() {
    this.router.navigate(['/users']);
  }
}
