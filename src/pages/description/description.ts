import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  constructor(public viewCtrl: ViewController, public params: NavParams) {

  }

  public item: any[];

  ionViewWillLoad() {
    this.item = this.params.get('data');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
