import { Component } from '@angular/core';
import {SidebarEmpComponent} from "../../../components/empleados/sidebar-emp/sidebar-emp.component";

@Component({
  selector: 'app-imp-empleado',
  standalone: true,
    imports: [
        SidebarEmpComponent
    ],
  templateUrl: './imp-empleado.component.html',
  styleUrl: './imp-empleado.component.css'
})
export class ImpEmpleadoComponent {

}
