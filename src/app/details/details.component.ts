import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _UsersService: UsersService) {}

  userDetails:any;
  userId: any;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=> {
      this.userId = params.get('id')
    })

    this._UsersService.getUsersDetails(this.userId).subscribe({
      next:(response)=> this.userDetails = response.data
    })
  }
}
