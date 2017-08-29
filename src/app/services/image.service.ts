import { Injectable } from '@angular/core';
import { Image } from "../models/image";

@Injectable()
export class ImageService {
  images: Image[] = [
 new Image('1', 'First image', 'First image description', 'https://placeholdit.co//i/500x150 ',  'https://placeholdit.co//i/500x150 '),
 new Image('2', 'Second image', 'Second image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 new Image('3', 'Third image', 'Third image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 new Image('4', 'Fourth image', 'Fourth image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 new Image('5', 'Fifth image', 'Fifth image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 new Image('6', 'Sixth image', 'Sixth image description', 'https://placeholdit.co//i/500x150 ','https://placeholdit.co//i/500x150 '),
 new Image('7', 'Seventh image', 'Seventh image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 new Image('8', 'Eighth image', 'Eighth image description', 'https://placeholdit.co//i/500x150 ', 'https://placeholdit.co//i/500x150 '),
 ];

  constructor() { }
  getImages(){
    return this.images;
  }

}
