import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private userService: UserService) {

  }

  logout() {
    this.userService.signOut();
  }
}
