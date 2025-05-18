import { _decorator, Component, Game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManger')
export class GameManger extends Component {

    private static _inst:GameManger = null;

    public static inst(){
        return this._inst;
    }

    @property
    moveSpeed:number = 100;

    protected onLoad(): void {
         GameManger._inst = this;
    }

    start() {
       
    }

    update(deltaTime: number) {
        
    }
}


