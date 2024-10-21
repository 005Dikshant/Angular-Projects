import { Component } from '@angular/core';
import { DesginationComponent } from '../desgination/desgination.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesginationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent = 'Roles';

  changeSelection(clickSelection: string) {
    this.currentComponent = clickSelection;
  }
}
