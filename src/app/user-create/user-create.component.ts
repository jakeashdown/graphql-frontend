import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserCreationGQL as UserCreationGql } from 'src/graphql/mutations/user-create.generated';
import { UsersDocument } from 'src/graphql/queries/users.generated';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  userId = '';
  userName: string | undefined = null;

  constructor(
    private router: Router,
    private userCreatedGql: UserCreationGql
  ) { }

  onSubmit() {
    this.userCreatedGql.mutate({ id: this.userId, name: this.userName },
      {
        update(cache, { data: { createdUser } }) {
          const { users } = cache.readQuery({ query: UsersDocument });
          cache.writeQuery({
            query: UsersDocument,
            data: { users: users.concat([createdUser]) },
          });
        }
      }).subscribe();
  }

  toUserList() {
    this.router.navigate(['/users']);
  }
}
