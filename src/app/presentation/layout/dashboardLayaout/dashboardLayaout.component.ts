import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from "../../components/sidebarMenu/sidebarMenu.component";
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboard-layaout',
  imports: [CommonModule, RouterModule, SidebarMenuComponent],
  templateUrl: './dashboardLayaout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayaoutComponent {
  public routes = routes[0].children?.filter((routes)=> routes.data);
 }
