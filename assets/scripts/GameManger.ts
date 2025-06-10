import { _decorator, Component, Game, Node } from 'cc';
import { Bird } from './Bird';
import { MoveBg } from './MoveBg';
import { PipeSpawn } from './PipeSpawn';
import { GameReady } from './Ui/GameReady';
const { ccclass, property } = _decorator;

enum GameState{
    Ready,
    Gaming,
    GameOver
}

@ccclass('GameManger')
export class GameManger extends Component {

    private static _inst:GameManger = null;

    public static inst(){
        return this._inst;
    }

    @property
    moveSpeed:number = 100;

    @property(Bird)
    bird:Bird = null;

    @property(MoveBg)
    bgMoving:MoveBg = null;
    @property(MoveBg)
    landMoving:MoveBg = null;
    @property(PipeSpawn)
    pipeSpawn:PipeSpawn = null;

    @property(GameReady)
    gameReadyUi:GameReady = null;

    curGameState:GameState = GameState.Ready;

    protected onLoad(): void {
         GameManger._inst = this;
    }

    start() {
       this.transitionToGameReady();
    }

    transitionToGameReady(){
        this.curGameState = GameState.Ready;
        this.bird.disableControl();
        this.bgMoving.disableMoving();
        this.landMoving.disableMoving();
        this.pipeSpawn.pause();
    }

    transistionToGaming(){
        this.curGameState = GameState.Gaming;
        this.bird.enableControl();
        this.bgMoving.enableMoving();
        this.landMoving.enableMoving();
        this.pipeSpawn.resume();

        this.gameReadyUi.node.active = false;
    }

    transitionToGameOver(){
        this.curGameState = GameState.GameOver;
        this.bird.disableControl();
        this.bgMoving.disableMoving();
        this.landMoving.disableMoving();
    }

    update(deltaTime: number) {
        
    }
}


