import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router'
import { UserService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: {id: number, name: string} | undefined;
  allowEdit : string = '0';

  constructor(private route:ActivatedRoute, private userService : UserService) { 
    
  }

  ngOnInit() {
    this.user = this.userService.getUser(+this.route.snapshot.params['id']);
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'];
    this.route.params.subscribe((params : Params)=>{
      this.user = this.userService.getUser(+params['id'])
    })
    this.route.queryParams.subscribe((qp : Params)=>{
      this.allowEdit = qp['allowEdit']
    })
  }

}
