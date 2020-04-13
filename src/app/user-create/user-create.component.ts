import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserCreatedGQL as UserCreatedGql } from 'src/graphql/mutations/user-create.generated';
import { User } from 'src/graphql/types.generated';
import { UserListDocument } from 'src/graphql/queries/user-list.generated';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userId = '';
  userName: string | undefined = null;

  constructor(
    private router: Router,
    private userCreatedGql: UserCreatedGql
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userCreatedGql.mutate({ id: this.userId, name: this.userName },
      {


        update(cache, { data: { createUserIfUnique } }) {


          const { users } = cache.readQuery({ query: UserListDocument });
          cache.writeQuery({
            query: UserListDocument,
            data: { users: users.concat([createUserIfUnique]) },
          });
        }



      }).subscribe();
   }

  toUserList() {
    this.router.navigate(['/users']);
  }

}
