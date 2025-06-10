import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export class GameData {
    
    private static score:number = 0;

    public static addScore(count:number = 1){
        this.score += count;
    }
    
    public static getScore():number{
        return this.score;
    }
}


