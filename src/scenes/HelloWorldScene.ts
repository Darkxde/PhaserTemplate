import { globalEval } from 'jquery'
import Phaser from 'phaser'

import { gameSettings } from '../consts/GameSettings'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.Game)
	}

    create()
    {
        this.add.image(gameSettings.gameWidth * 0.5, gameSettings.gameHeight * 0.5, TextureKeys.Logo).setScale(0.5)
    }
}