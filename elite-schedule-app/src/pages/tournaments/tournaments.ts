import { EliteApi } from './../../app/shared/elite-api.service';
import { TeamsPage } from './../teams/teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../pages';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi: EliteApi) {}
  navigate(){
    this.navCtrl.pop();
  }

  itemTapped($event,tournament){
    this.navCtrl.push(TeamsPage,tournament);
  }
  ionViewDidLoad(){
    this.eliteApi.getTournaments().then(data=>this.tournaments= data);
  }

}
