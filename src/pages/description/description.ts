import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams, public toastCtrl: ToastController, private todolistService: TodoListService) {

  }

  public item: any[];
  public postItem: string;


  ionViewWillLoad() {
    this.item = this.params.get('data');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  modifierTache(updatedItem) {
    this.todolistService.updateTache(updatedItem).subscribe(
      data => this.postItem = JSON.stringify(data),
      error => alert(error),
      () => this.navCtrl.setRoot(HomePage)
    )
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Tâche mise à jour avec succès',
      duration: 3000
    });
    toast.present();
  }

}
