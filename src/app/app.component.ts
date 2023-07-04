
import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Produtos', action: this.onClick.bind(this) }
  ];
  constructor(private router: Router) {}

  private onClick() {
   this.router.navigateByUrl('/produto');
  }

}
