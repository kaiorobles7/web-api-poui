import { Component, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { SetorService } from '../services/setor.service';
import { Setor } from './setor.model';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {
  setor: Setor = { id: 0, nome: '', descricao: '' };
  setores: Setor[] = [];

  constructor(private setorService: SetorService, private notification: PoNotificationService) { }

  ngOnInit() {
    this.buscarSetores();
  }

  buscarSetores() {
    this.setorService.getSetores().subscribe(
      (setores: Setor[]) => {
        this.setores = setores;
      },
      () => {
        this.notification.error('Erro ao buscar os setores.');
      }
    );
  }

  salvarSetor() {
    if (this.setor.id) {
      // Atualizar setor
      this.setorService.atualizarSetor(this.setor.id, this.setor).subscribe(
        (setor: Setor) => {
          this.notification.success('Setor atualizado com sucesso.');
          this.limpar();
          this.buscarSetores();
        },
        () => {
          this.notification.error('Erro ao atualizar o setor.');
        }
      );
    } else {
      // Criar novo setor
      this.setorService.criarSetor(this.setor).subscribe(
        (setor: Setor) => {
          this.notification.success('Setor criado com sucesso.');
          this.limpar();
          this.buscarSetores();
        },
        () => {
          this.notification.error('Erro ao criar o setor.');
        }
      );
    }
  }

  editar(setor: Setor) {
    this.setor = { ...setor };
  }

  excluir(setor: Setor) {
    this.setorService.deletarSetor(setor.id).subscribe(
      () => {
        this.notification.success('Setor excluído com sucesso.');
        this.buscarSetores();
      },
      () => {
        this.notification.error('Erro ao excluir o setor.');
      }
    );
  }

  limpar() {
    this.setor = { id: 0, nome: '', descricao: '' };
  }
}
