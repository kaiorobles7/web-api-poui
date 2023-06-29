import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from '../services/setor.service';
import { Setor } from '../setor/setor.model';

@Component({
  selector: 'app-setor-create',
  templateUrl: './setor-create.component.html'
})
export class SetorCreateComponent {
  setor: Setor = { id: 0, nome: '', descricao: '' };

  constructor(private setorService: SetorService, private router: Router) {}

  salvarSetor() {
    this.setorService.criarSetor(this.setor).subscribe(() => {
      this.router.navigate(['/setores']);
    });
  }
}
