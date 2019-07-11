import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor(private afs: AngularFirestore) { 

  }

  getItems = function (){
    return this.afs.collection('items').valueChanges();
  };
}
