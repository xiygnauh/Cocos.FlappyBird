import { _decorator, Collider2D, Component, Contact2DType, Input, input, IPhysics2DContact, Node, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {

    private rgd2D:RigidBody2D = null;

    @property
    rotateSpeed:number = 30;

    onLoad () {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);

        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log('onBeginContact',otherCollider.tag);
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact',otherCollider.tag);
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


