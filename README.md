## NgxSlider

This project is a carousel slider with some basic configuration for Angular 4

## GitHub
https://github.com/somratexel/ngx-slider

## Demo
https://somratexel.github.io/ngx-slider

## Package:
https://www.npmjs.com/package/ngx-slider

## Install
```
npm install ngx-slider --save
```
## Dependencies

This project has dependency on font awesome.
Add font awesome to your project if it does now added yet.
To add font awesome do the following:

run : 
```
npm install font-awesome --save
```

If your app build on angular CLI then you can edit angular-cli.json file as follows:

```json
"styles": [
        "../node_modules/font-awesome/css/font-awesome.min.css"
      ],
```

## Usage

1. Import SliderModule:

```ts
import { SliderModule } from 'ngx-slider';
```

2. Import Slider to your desired component

```ts
import { Slider } from 'ngx-slider';
```

Use Slider as follows for an example:

```ts
import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public slider = new Slider();

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
  }

  ngOnInit() {

    const slideItems = [
      { src: 'https://placeimg.com/600/600/any', title: 'Title 1' },
      { src: 'https://placeimg.com/600/600/nature', title: 'Title 2' },
      { src: 'https://placeimg.com/600/600/sepia', title: 'Title 3' },
      { src: 'https://placeimg.com/600/600/people', title: 'Title 4' },
      { src: 'https://placeimg.com/600/600/tech', title: 'Title 5' }
    ];

    this.slider.items = slideItems;
  }
}
```

3. And then pass the slider object to the component as follows as an example:

```html
<div style="height: 400px;">
  <ngx-slider [init]="slider"></ngx-slider>
</div>
```
 Make sure the comopents parent element has a height.


## Configuration

Available options are listed blow:

| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __showDots__ | true | boolean | |
| __showNavigator__ | true | boolean | |
| __showTitle__ | true | boolean | |
| __loop__ | true | boolean | |
| __showPreview__ | true | boolean | | 
| __numberOfPreview__ | 2 | number | |
| __previewWidth__ | 50 | number | px |
| __transitionDuration__ | 1 | number | second |

You can confirure the optins as follows:

```ts
public slider = new Slider();

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.transitionDuration = 3;
  }
```

## Compatibility (tested with)
* Firefox (latest)
* Chrome (latest)
* Chromium (latest)
* Edge
* IE11
* Safari

## License
* License: MIT

## Author
* Author: somratexel

## Keywords
* Slider
* Carousel
* Responsive
* Angular2
* Angular4


