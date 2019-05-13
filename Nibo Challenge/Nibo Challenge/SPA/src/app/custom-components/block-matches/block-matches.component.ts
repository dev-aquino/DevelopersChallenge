import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';
import { Match } from 'src/app/custom-types/match';
import { Dictionary } from 'src/app/custom-types/dictionary';

@Component({
  selector: 'app-block-matches',
  templateUrl: './block-matches.component.html',
  styleUrls: ['./block-matches.component.css']
})
export class BlockMatchesComponent implements OnInit {

  @Input() listQuantityOfMatch: any[] = [];

  constructor(private service: TournamentService) { }

  ngOnInit() {
  }

  public get matches(): Match[] {
    return this.service.matches;
  }

  isMatchFinished(indexMatch: number) {
    let result = this.service.tempClassifiedTeams.some(x => x.key == indexMatch);
    return result;
  }

  isClassified(idTeam: number) {
    let result = this.service.tempClassifiedTeams.some(x => x.value == idTeam);
    return result;
  }

  increaseVictory(idTeam: number, indexMatch: number) {
    let obj = new Dictionary();
    obj.key = indexMatch;
    obj.value = idTeam;
    this.service.tempClassifiedTeams.push(obj);
    let listClassified = this.service.tempClassifiedTeams.map(x => x.value);
    let listTeams = this.service.teamList.filter(x => listClassified.includes(x.id))
    this.service.updateClassifiedTeams(listTeams);
  }
}
