// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('back', 'assets/back.png');

        this.load.image('TARO', 'assets/TARO.png');
        this.load.image('HANAKO', 'assets/HANAKO.png');
        this.load.image('APPLE', 'assets/apple.png');
        this.load.image('orange', 'assets/orange.png');


    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'back');

        const TARO = this.physics.add.sprite(50, 50, 'TARO');
        const HANAKO = this.physics.add.sprite(750, 400, 'HANAKO');

        this.TARO = TARO

        this.HANAKO = HANAKO
        for (let index = 0; index < 5; index++) {
            let  randx1 = Phaser.Math.Between(25, 775) ; 
            let randy1 =  Phaser.Math.Between(25, 425) ; 
            this.add.image(randx1, randy1 , 'APPLE'); 
            let  randx2 = Phaser.Math.Between(25, 775) ; 
            let randy2 =  Phaser.Math.Between(25, 425) ; 
            this.add.image(randx2, randy2 , 'orange'); 
        }
        

            

        }

     // 毎フレーム実行される繰り返し処理
    update(time, delta) {

        let cursors = this.input.keyboard.createCursorKeys();


        if(cursors.up.isDown){

            console.log("Up!!");

            this.TARO.setVelocityY(-40);// 上方向の速度を設定
            this.HANAKO.setVelocityY(40);// 上方向の速度を設定


        } else if(cursors.down.isDown){

            console.log("down!!");

            this.TARO.setVelocityY(40);// 下方向の速度を設定
            this.HANAKO.setVelocityY(-40);// 下方向の速度を設定

       

        }else if(cursors.left.isDown){

            console.log("Left");

            this.TARO.setVelocityX(-40);// 左方向の速度を設定
            this.HANAKO.setVelocityX(40);// 左方向の速度を設定


        }else if(cursors.right.isDown){

            console.log("Right!!");

            this.TARO.setVelocityX(40);// 右方向の速度を設定
            this.HANAKO.setVelocityX(-40);// 右方向の速度を設定


            
        }else{

            this.TARO.setVelocityX(0);// 横方向の速度を0
            this.HANAKO.setVelocityX(0);// 横方向の速度を0

            this.TARO.setVelocityY(0);// 縦方向の速度を0
            this.HANAKO.setVelocityY(0);// 縦方向の速度を0

        }


    }
    }




