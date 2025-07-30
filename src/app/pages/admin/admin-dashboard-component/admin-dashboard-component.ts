import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar-component/sidebar-component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './admin-dashboard-component.html',
  styleUrls: ['./admin-dashboard-component.css']
})
export class AdminDashboard {

}
