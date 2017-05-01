import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TodoListService } from '../../services/todolist.service';

import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-ajoutTache',
    templateUrl: 'ajoutTache.html',
    providers: [TodoListService]
})
export class AjoutTachePage {


    constructor(public navCtrl: NavController, private todoListService: TodoListService, public toastCtrl: ToastController) {

    }

    tache: any[];


    ajoutTache(tache) {
        console.log(tache);
        this.navCtrl.setRoot(HomePage);
        this.presentToast();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Tâche ajoutée avec succès',
            duration: 3000
        });
        toast.present();
    }

}
