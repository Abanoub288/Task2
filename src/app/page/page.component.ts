import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  Users: any[] = [];

  constructor(private _UsersService: UsersService) { }

  ngOnInit(): void {
    this._UsersService.getUsers().subscribe( {
      next:(Response)=> this.Users = Response.data
    })
  }
}
