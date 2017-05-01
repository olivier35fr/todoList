import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoListService]
})
export class HomePage implements OnInit {

  public todoList: any[];

  constructor(public navCtrl: NavController, private todoListService: TodoListService, public alertCtrl: AlertController) {

  }




  delete(i) {
    this.todoList.splice(i, 1);
  }

  ngOnInit() {
    this.todoListService.getTodoList().subscribe(
      data => this.todoList = data,
      data => this.problemeConnexion()
    );
  }

  problemeConnexion() {
    let alert = this.alertCtrl.create({
      title: 'Problème de connexion',
      subTitle: 'Veuillez revenir plus tard !',
      buttons: ['OK']
    });
    alert.present();
  }

}
