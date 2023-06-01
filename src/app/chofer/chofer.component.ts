import { Component, Input } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent {
  @Input() usuarios : Usuario[] = [];
}
