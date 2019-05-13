import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';
import { Match } from 'src/app/custom-types/match';
import { Dictionary } from 'src/app/custom-types/dictionary';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  hasWinner: boolean = false;
  nameWinner: string = '';
  _showBlockMatches: boolean = true;

  public get showBlockMatches(): boolean {
    return this._showBlockMatches;
  }


  constructor(private service: TournamentService, private router: Router) {
    if (this.service.classifiedTeams.length == 0) {
      let classifiedTeams = this.service.teamList;
      this.service.updateClassifiedTeams(classifiedTeams);
    }
  }

  ngOnInit() {
    this.service.createMatches();
  }

  public get quantityOfMatch(): any[] {
    let iterableFake = [];
    let size = this.service.matches.length;
    for (let index = 0; index < size; index++) {
      iterableFake.push(null);
    }
    return iterableFake;
  }

  public get matches(): Match[] {
    return this.service.matches;
  }

  public get canToGoNextStep(): boolean {
    let result = this.matches.length == this.service.tempClassifiedTeams.length && this.hasWinner == false;
    return result;
  }

  toNextStep() {
    this.router.navigate(['/home']);
    this.prepareNextStep();
    this.router.navigate(['/tournament']);
  }

  changeExibitionBlockMatches() {
    this._showBlockMatches = !this.showBlockMatches;
  }

  private prepareNextStep() {
    let idsTeams = this.service.classifiedTeams.map(x => x.id);
    if (idsTeams.length == 1) {
      this.hasWinner = true;
      this.nameWinner = this.service.classifiedTeams[0].name;
      this.service.updateClassifiedTeams([]);
      this.service.removeRegisteredTeams();
    }
    else {
      this.service.processVictory(idsTeams);
    }
    this.service.tempClassifiedTeams = [];
  }
}
