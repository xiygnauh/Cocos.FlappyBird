import { _decorator, Component, Node } from 'cc';
import { GameManger } from './GameManger';
const { ccclass, property } = _decorator;

@ccclass('Pipe')
export class Pipe extends Component {

    private moveSpeed:number = 100;

    start() {
        this.moveSpeed = GameManger.inst().moveSpeed;
    }

    update(deltaTime: number) {
        
        const p = this.node.position;

        this.node.setPosition(p.x-this.moveSpeed*deltaTime,p.y);
    }
}


