import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../services/authentication';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email :string ;
  password :string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private auth :Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  createAccount(){
    this.auth.createUserWithEmailAndPassword(this.email,this.password);
  }

}
