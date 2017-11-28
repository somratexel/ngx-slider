export class SliderConfig {
    showDots: boolean;
    showNavigator: boolean;
    showTitle: boolean;
    loop: boolean;
    showPreview: boolean;
    numberOfPreview: number;
    previewWidth: number;
    slidePadding: any;
    transitionDuration: number;

    constructor() {
        this.showDots = true;
        this.showNavigator = true;
        this.showTitle = true;
        this.loop = true;
        this.showPreview = true;
        this.numberOfPreview = 2;
        this.previewWidth = 50;
        this.slidePadding = `0 5px`;
        this.transitionDuration = 1;
    }
}
