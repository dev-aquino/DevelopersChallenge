import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';
import { Team } from 'src/app/custom-types/team';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  team: Team = new Team();

  constructor(private service: TournamentService) {
    this.service.getTeams();
  }

  ngOnInit() {
  }

  public get teamList(): Team[] {
    return this.service.teamList;
  }

  public get teamLimitReached(): boolean {
    return this.service.checkIfTeamLimitReached();
  }

  submit() {
    this.service.registerTeam(this.team)
    this.team = new Team();
  }
}
