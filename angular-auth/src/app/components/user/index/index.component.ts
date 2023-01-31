import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../service/user.service';
import { User } from '../../../entities/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User[] = [];

  // constructor() { }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })
  }

  deletePerson(id: number){
    this.userService.delete(id).subscribe(res => {
      this.users = this.users.filter(item => item.id !== id);
      console.log('Person deleted successfully!');
    })
  }

}
