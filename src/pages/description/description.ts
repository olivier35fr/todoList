import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams, public toastCtrl: ToastController) {

  }

  public item: any[];


  ionViewWillLoad() {
    this.item = this.params.get('data');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  modifierTache(updatedItem) {
    console.log(updatedItem);
    this.navCtrl.setRoot(HomePage);
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
