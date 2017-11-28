import { Component, OnInit, Input, HostListener, ElementRef, Renderer } from '@angular/core';
import { Slider } from './class/slider';
import { ISliderConfig } from './interface/slider-config';
import { ISlide } from './interface/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() init: Slider;

  private sliderItems: Array<ISlide>;
  private config: ISliderConfig;
  private componentWidth: number;
  private currentItemIndex: number;
  private activeTitle: string;
  private sliderStyle: any;
  private slideStyle: any;

  constructor(
    public el: ElementRef,
    public renderer: Renderer
  ) {
    this.currentItemIndex = 0;
    this.activeTitle = '';
  }

  ngOnInit() {
    this.sliderItems = this.init.items;
    this.config = this.init.config;
    this.setTitle();
    this.resize();
    this.setSliderStyle();
  }

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.resize();
  }

  private resize() {
    this.componentWidth = this.el.nativeElement.offsetWidth - (this.getPreviewWidth() * this.getNumberOfPreview());
    this.setSlideStyle();
  }

  public setSliderStyle(): void {
    const width = `${this.getWrapperWidth()}px`;
    const left = this.getWrapperLeft() ? `-${this.getWrapperLeft() - this.getPreviewWidth()}px` : 0;

    this.sliderStyle = {
      width: width,
      left: left,
      transition: `left ${this.config.transitionDuration}s`
    };
  }

  public setSlideStyle(): void {
    this.slideStyle = {
      width: `${this.componentWidth}px`,
      padding: this.config.slidePadding
    };
  }

  public setTitle(): void {
    this.activeTitle =
      this.sliderItems.length ? this.sliderItems[this.currentItemIndex].title : '';
  }

  public getNumberOfPreview(): number {
    return this.config.showPreview ? this.config.numberOfPreview : 0;
  }

  public getPreviewWidth(): number {
    return this.config.showPreview ? this.config.previewWidth : 0;
  }

  public getWrapperWidth(): number {
    return this.sliderItems.length ? this.sliderItems.length * this.componentWidth : this.componentWidth;
  }

  public getWrapperLeft(): number {
    return this.currentItemIndex * this.componentWidth;
  }

  public goTo(action: any): void {
    if (action === 'next') {
      if (this.sliderItems.length - 1 > this.currentItemIndex) {
        this.currentItemIndex++;
      } else {
        this.currentItemIndex = this.config.loop ? 0 : this.currentItemIndex;
      }
    } else if (action === 'previous') {
      if (this.currentItemIndex > 0) {
        this.currentItemIndex--;
      } else {
        this.currentItemIndex = this.config.loop ? this.sliderItems.length - 1 : this.currentItemIndex;
      }
    } else {
      this.currentItemIndex = action;
    }
    this.setSliderStyle();
    this.setTitle();
  }

}
