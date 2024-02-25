import Phaser from 'phaser'
import WebFontLoader from "webfontloader";

export default class WebFontFile extends Phaser.Loader.File {
    /**
     * @param {Phaser.Loader.LoaderPlugin} loader
     * @param {string | string[]} fontNames
     * @param {string} [service]
     */
    private fontNames: any;
    private service: any;
    constructor(loader: any, fontNames: any, service = 'google') {
        super(loader, {
            type: 'webfont',
            key: fontNames.toString()
        })

        this.fontNames = Array.isArray(fontNames) ? fontNames : [fontNames]
        this.service = service
    }

    load() {
        const config = {
            active: () => {
                this.loader.nextFile(this, true)
            }
        }

        switch (this.service) {
            case 'google':
                //@ts-ignore
                config['google'] = {
                    families: this.fontNames
                }
                break

            default:
                throw new Error('Unsupported font service')
        }

        WebFontLoader.load(config)
    }
}