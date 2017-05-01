import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AjoutTachePage } from '../ajoutTache/ajoutTache';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AjoutTachePage;

  constructor() {

  }

  badgeValue = 20;

}