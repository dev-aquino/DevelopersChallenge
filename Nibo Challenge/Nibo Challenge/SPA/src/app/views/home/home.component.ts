import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: TournamentService) {
    this.service.getTeams();
  }

  ngOnInit() {
    this.service.checkIfTournamentCanStart();
  }

  public get teamLimitReached(): boolean {
    let result = this.service.checkIfTeamLimitReached();
    return result;
  }

  public get canStartTournament(): boolean {
    return this.service.canStartTournament;
  }
}
