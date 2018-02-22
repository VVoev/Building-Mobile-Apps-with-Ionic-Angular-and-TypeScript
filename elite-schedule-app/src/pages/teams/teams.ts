import { MyApp } from './../../app/app.component';
import { EliteApi } from './../../app/shared/elite-api.service';
import { TeamHomePage } from './../team-home/team-home';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

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
  private allTeams:any;
  private allTeamDivisions:any;
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
     this.allTeams = data.teams;
     this.allTeamDivisions =
       _.chain(data.teams)
         .groupBy('division')
         .toPairs()
         .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
         .value();
     this.teams = this.allTeamDivisions;
   })
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

}
