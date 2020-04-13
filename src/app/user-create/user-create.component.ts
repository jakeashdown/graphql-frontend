import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/graphql/types.generated';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userId = '';
  userName: string | undefined = null;

  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  toUserList() {
    this.router.navigate(['/users']);
  }

}
