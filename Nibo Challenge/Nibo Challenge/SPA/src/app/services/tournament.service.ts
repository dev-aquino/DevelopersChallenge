import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseDTO } from '../custom-types/response-dto';
import { Team } from '../custom-types/team';
import { RequestRegisterTeam } from '../custom-types/request-register-team';
import { RequestRemoveTeam } from '../custom-types/request-remove-team';
import { RequestProcessVictory } from '../custom-types/request-process-victory';
import { Match } from '../custom-types/match';
import { Dictionary } from '../custom-types/dictionary';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private urlBase: string = 'https://localhost:44375/api/tournament/';

  canStartTournament: boolean = false;
  teamList: Team[] = [];
  classifiedTeams: Team[] = [];
  tempClassifiedTeams: Dictionary[] = [];
  matches: Match[] = []

  constructor(private http: HttpClient) {
  }

  registerTeam(team: Team) {
    let request = new RequestRegisterTeam();
    if (team.name !== undefined && team.name !== null && team.name.trim().length == 0) {
      team.name = 'vazio';
    }
    request.team = team;
    this.http.post<ResponseDTO>(this.urlBase + 'RegisterTeam', request).subscribe(result => {
      if (result.notifications.length == 0) {
        this.teamList.push(result.response);
      }
      else {
        result.notifications.forEach(msg => {
          console.log(msg);
        });
      };
    });
  }

  removeRegisteredTeams() {
    this.http.get<ResponseDTO>(this.urlBase + 'RemoveRegisteredTeams').subscribe(result => {
      if (result.notifications.length == 0 && result.response == true) {
        this.teamList = [];
      }
      else {
        result.notifications.forEach(msg => {
          console.log(msg);
        });
      };
    });
  }

  checkIfTournamentCanStart() {
    this.http.get<ResponseDTO>(this.urlBase + 'CheckIfTournamentCanStart').subscribe(result => {
      this.canStartTournament = result.response;
    });
  }

  checkIfTeamLimitReached() {
    return this.teamList.length == 8;
  }

  getTeams() {
    this.http.get<ResponseDTO>(this.urlBase + 'GetTeams').subscribe(result => {
      if (result.notifications.length == 0) {
        this.teamList = result.response;
      }
      else {
        result.notifications.forEach(msg => {
          console.log(msg);
        });
      };
    });
  }

  processVictory(idsTeam: number[]) {
    let request = new RequestProcessVictory();
    request.idsTeam = idsTeam;
    this.http.post<ResponseDTO>(this.urlBase + 'ProcessVictory', request).subscribe(result => {
      if (result.notifications.length == 0) {
        this.classifiedTeams = result.response;
        this.createMatches()
      }
      else {
        result.notifications.forEach(msg => {
          console.log(msg);
        });
      };
    });
  }

  createMatches() {
    this.http.get<ResponseDTO>(this.urlBase + 'CreateMatches').subscribe(result => {
      if (result.notifications.length == 0) {
        this.matches = result.response;
      }
      else {
        result.notifications.forEach(msg => {
          console.log(msg);
        });
      };
    });
  }

  updateClassifiedTeams(teamList: Team[]) {
    this.classifiedTeams = teamList;
  }
}
