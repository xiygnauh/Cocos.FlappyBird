import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawn')
export class PipeSpawn extends Component {

    @property(Prefab)
    pipePrefab:Prefab = null;

    @property
    spawnRate:number = 1;

    private timer:number = 0;

    start() {

    }

    update(deltaTime: number) {
        this.timer += deltaTime;

        if(this.timer > this.spawnRate){
            this.timer = 0;

            const pipeInst =  instantiate(this.pipePrefab );

            this.node.addChild(pipeInst );

            pipeInst.setWorldPosition(this.node.getWorldPosition());

            const p = this.node.getPosition();
            const y = math.randomRangeInt(-100,200);

            pipeInst.setPosition(p.x,y);
        }
    }
}


