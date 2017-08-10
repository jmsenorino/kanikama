import { Component, OnInit, Input } from '@angular/core';
import { PlayerService} from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
  providers: [PlayerService]
})
export class PlayerCardComponent implements OnInit
{
  @Input()
  player : Player;

  constructor(private playerService : PlayerService) { }

  ngOnInit()
  {
    var level = this.playerService.getLevel(this.player.xp, this.player.lvl);
    console.log("LEVEL: "+level);
  }

}
