import { EliteApi } from './../../app/shared/elite-api.service';
import { TeamsPage } from './../teams/teams';
import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams, Content } from 'ionic-angular';
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

  tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi, private loadingController: LoadingController) { }
  navigate() {
    this.navCtrl.pop();
  }

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage, tournament);
  }
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      })
    })
  }
}
