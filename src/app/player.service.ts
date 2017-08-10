import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  constructor() { }

  getLevel(experience : number, level : number) : Number
  {
    var baseXP = this.getBaseXP(100,level);
    if(baseXP < experience)
      return level+1;
    else
      return level;
  }

  private getBaseXP(baseExperience : number, level : number ) : Number
  {
    console.log(baseExperience+" "+level);
    if(level == 1)
      return baseExperience;
    else
      return this.getBaseXP(baseExperience*2,level-1);
  }




}
