import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink],
  templateUrl: './sidebar-component.html',
  styleUrls: ['./sidebar-component.css']
})
export class SidebarComponent implements OnInit {
  constructor(public login: LoginService) { }

  ngOnInit(): void {

  }

  public logout() {
    this.login.logout();
    window.location.reload();
  }
}
