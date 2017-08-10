import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'player-status-bar',
  templateUrl: './player-status-bar.component.html',
  styleUrls: ['./player-status-bar.component.css']
})
export class PlayerStatusBarComponent implements OnInit {

  @Input()
  player : Player;

  constructor() { }

  ngOnInit() {
  }

}
