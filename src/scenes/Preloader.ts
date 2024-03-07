import Phaser from "phaser";
import TextureKeys from "../consts/TextureKeys";
import SceneKeys from "../consts/SceneKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        // preload di tutti gli asset

        this.load.image(
            TextureKeys.Logo, 
            'assets/images/logo.jpg'
        )
    }

    create()
    {
        // creazione di tutte le animazioni
        
        this.scene.stop(SceneKeys.Preloader);
        this.scene.start(SceneKeys.Game);
    }
}