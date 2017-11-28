export class SliderConfig {
    showDots: boolean;
    showNavigator: boolean;
    showTitle: boolean;
    loop: boolean;
    showPreview: boolean;
    numberOfPreview: number;
    previewWidth: number;
    transitionDuration: number;

    constructor() {
        this.showDots = true;
        this.showNavigator = true;
        this.showTitle = true;
        this.loop = true;
        this.showPreview = true;
        this.numberOfPreview = 2;
        this.previewWidth = 50;
        this.transitionDuration = 1;
    }
}
