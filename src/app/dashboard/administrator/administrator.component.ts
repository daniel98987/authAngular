import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
  listUser;
  userService = inject(UserService)
  ngOnInit(): void {
    this.getUsers();
    console.log('test')
  }
  getUsers(){
    this.userService.userList().subscribe({
      next: (res) => {
        this.listUser = res;
      },
    })
  }
}
