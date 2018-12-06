import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player: Player;


  constructor() { }

  ngOnInit() {
    this.player = new Player();
    this.player.name = 'pepe';
    this.player.gold = 0;
    this.player.xp = 0;
    this.player.lvl = 1;
    this.player.image = 'IMG';
  }

}
