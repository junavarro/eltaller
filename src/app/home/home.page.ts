import { Component } from '@angular/core';
import { Item } from  './../../models/Item';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Item[];
  constructor() {
    this.items = [{
      title: 'Item 1',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/640x360'
    },
    {
      title: 'Item 2',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/360x360'
    },
    {
      title: 'Item 3',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/540x360'
    },
    {
      title: 'Item 4',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/680x400'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/320x180'
    },
    {
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/320x180'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/320x180'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/320x180'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/860x440'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/220x80'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/320x180'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/720x360'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/300x160'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/720x580'
    },{
      title: 'Item 5',
      subtitle: 'Subtitle',
      description: 'Description',
      imageURL: 'http://via.placeholder.com/220x180'
    }];
  }

}
