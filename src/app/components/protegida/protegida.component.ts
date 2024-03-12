import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe(perfil => {
      console.log(perfil);
    });
  }

}
