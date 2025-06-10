import { _decorator, Component, input, Input, Node } from 'cc';
import { GameManger } from '../GameManger';
const { ccclass, property } = _decorator;

@ccclass('GameReady')
export class GameReady extends Component {

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onDestroy () {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(){
        GameManger.inst().transistionToGaming();
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


