import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

// Ad default values
export class ContentListing {
  title    = 'Your Title'
  content  = 'Ad Content'
  price    = 5.00
  image    = 'http://via.placeholder.com/350x150'
}

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  /// Creates an Ad, then returns as an object
  createAd(): AngularFireObject<ContentListing> {
    const adDefault = new ContentListing()
    const adKey = this.db.list('/ads').push(adDefault).key
    return this.db.object('/ads/' + adKey)
  }

  /// Updates an existing Ad
  updateAd(ad: AngularFireObject<ContentListing>, data: any) {
    return ad.update(data)
  }
  
 }