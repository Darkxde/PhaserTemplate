import { globalEval } from 'jquery'
import Phaser from 'phaser'

import { gameSettings } from '../GameData'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('logo', 'assets/images/logo.jpg')
    }

    create()
    {
        this.add.image(gameSettings.gameWidth * 0.5, gameSettings.gameHeight * 0.5, 'logo').setScale(0.5)
    }
}