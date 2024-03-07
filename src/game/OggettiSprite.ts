import Phaser, { Physics } from "phaser";

// creare una classe ad hoc per sprite o oggetti di gioco complessi

import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class OggettiSprite extends Phaser.GameObjects.Container
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y)
    }

    preUpdate()
    {
        // update per tutte le componenti dello sprite compless
    }
}