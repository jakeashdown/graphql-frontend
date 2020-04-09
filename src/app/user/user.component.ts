import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { User, UserGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idOfUserNotFound: string | null;
  userObservable: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userGql: UserGQL
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
