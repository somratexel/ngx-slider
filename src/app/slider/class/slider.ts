import { ISlide } from '../interface/slide';
import { ISliderConfig } from '../interface/slider-config';
import { Slide } from './slide';
import { SliderConfig } from './config';

export class Slider {
    items: Array<ISlide> = [];
    config: ISliderConfig = new SliderConfig();
    constructor() {}
}

