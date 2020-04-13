import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toUserList() {
    this.router.navigate(['/users']);
  }

}
