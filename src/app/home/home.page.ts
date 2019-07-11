import { Component } from '@angular/core';
import { Item } from  './../../models/Item';
import { DatasourceService} from './../services/datasource.service';
import { take } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ItemModalComponent } from '../components/item-modal/item-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Item[];
  constructor(private db: DatasourceService,public modalController: ModalController) {
    this.db.getItems().pipe(take(1)).toPromise().then( (items:any) =>{
      this.items = items;    
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ItemModalComponent
    });
    return await modal.present();
  }

}
