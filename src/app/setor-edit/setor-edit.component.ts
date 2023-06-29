import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetorService } from '../services/setor.service';
import { Setor } from '../setor/setor.model';

@Component({
  selector: 'app-setor-edit',
  templateUrl: './setor-edit.component.html'
})
export class SetorEditComponent implements OnInit {
  setor: Setor = { id: 0, nome: '', descricao: '' };

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const setId = this.route.snapshot.params['id'];
    this.buscarSetor(setId);
  }

  buscarSetor(id: number) {
    this.setorService.getSetor(id).subscribe(
      (setor: Setor) => {
        this.setor = setor;
      },
      () => {
        // Trate o erro aqui de acordo com a sua lógica
      }
    );
  }

  atualizarSetor() {
    this.setorService.atualizarSetor(this.setor.id, this.setor).subscribe(
      () => {
        this.router.navigate(['/setores']);
      },
      (error) => {
        // Trate o erro aqui de acordo com a sua lógica
      }
    );
  }
}
