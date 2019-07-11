import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ItemModalComponent} from './item-modal/item-modal.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule
    ],//TODO: Revisar si es apropiada esta carga de componentes, debido a que el TEST lo requiere.
    entryComponents: [ItemModalComponent],
    declarations: [ItemModalComponent],
    exports: [ItemModalComponent]
  })
  export class ComponentsModule {}