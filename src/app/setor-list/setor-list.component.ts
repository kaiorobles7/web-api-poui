import { Component, OnInit } from '@angular/core';
import { PoTableAction, PoNotificationService } from '@po-ui/ng-components';
import { SetorService } from '../services/setor.service';
import { Setor } from '../setor/setor.model';

@Component({
  selector: 'app-setor',
  templateUrl: './setor-list.component.html',
  styleUrls: ['./setor-list.component.css']
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
      (error) => {
        this.notification.error('Erro ao buscar os setores.');
      }
    );
  }

  salvar() {
    if (this.setor.id) {
      // Atualizar setor
      this.setorService.atualizarSetor(this.setor.id, this.setor).subscribe(
        (setor: Setor) => {
          this.notification.success('Setor atualizado com sucesso.');
          this.limpar();
          this.buscarSetores();
        },
        (error) => {
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
        (error) => {
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
      (error) => {
        this.notification.error('Erro ao excluir o setor.');
      }
    );
  }

  limpar() {
    this.setor = { id: 0, nome: '', descricao: '' };
  }
}
