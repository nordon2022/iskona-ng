import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor(private route: Router, private title: Title) {
  }

  ngOnInit() {
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        command: (event) => this.routeMenu(event.item.label, 'home')
      },
      {
        label:'About',
        icon:'pi pi-fw pi-info-circle',
        command: (event) => this.routeMenu(event.item.label, 'about')
      }
    ];
  }

  public routeMenu(label: string, path: string): void {
    this.route.navigate([path]);
    this.title.setTitle(label)
  }
}
