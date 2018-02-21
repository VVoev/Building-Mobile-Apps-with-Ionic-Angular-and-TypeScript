import { EliteApi } from './../../app/shared/elite-api.service';
import { TeamHomePage } from './../team-home/team-home';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [];
  // [
  //   {id:1,name:"HC Elite"},
  //   {id:2,name:"The Bears"},
  //   {id:3,name:"White Foxes"},
  // ]
  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi: EliteApi) {
  }

  ionViewDidLoad(){
   let selectedTournament = this.navParams.data;

   this.eliteApi.getTournamentData(selectedTournament.id).subscribe(data=>{
     this.teams = data.teams;
   })
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

}
