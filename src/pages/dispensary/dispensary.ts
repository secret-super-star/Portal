import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage() 
@Component({
  selector: 'page-dispensary',
  templateUrl: 'dispensary.html'

})
export class DispensaryPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {}
  dresult() {
    this.navCtrl.push('DresultPage', {}, {animate: false});
  }
}

