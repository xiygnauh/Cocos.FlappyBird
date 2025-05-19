import { _decorator, Component, Input, input, Node, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {

    private rgd2D:RigidBody2D = null;

    @property
    rotateSpeed:number = 30;

    onLoad () {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onDestroy () {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(){
        this.rgd2D.linearVelocity = new Vec2(0,10);

        this.node.setRotationFromEuler(new Vec3(0,0,30));
        this.node.angle = 30;
    }

    start() {

        this.rgd2D = this.getComponent(RigidBody2D);

    }

    update(deltaTime: number) {
        this.node.angle -= this.rotateSpeed*deltaTime;

        if(this.node.angle < -60){
            this.node.angle = -60;
        }
    }
}


