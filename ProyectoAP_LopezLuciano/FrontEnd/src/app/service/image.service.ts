import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string, refe:string, refe2:string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, refe + name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(refe2)})
    .catch(error => console.log(error))
  }

  getImages(refe2:string){
    const imagesRef = ref(this.storage, refe2)
    list(imagesRef)
    .then(async response => {
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("URL de imagen =" + this.url);
      }
    })
    .catch(error =>console.log(error))
  }

  public uploadImage2($event: any, name: string, refe:string, refe2:string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, refe + name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages2(refe2)})
    .catch(error => console.log(error))
  }

  getImages2(refe2:string){
    const imagesRef = ref(this.storage, refe2)
    list(imagesRef)
    .then(async response => {
        this.url = await getDownloadURL(imagesRef);
        console.log("URL de imagen =" + this.url);
    })
    .catch(error =>console.log(error))
  }

  clearUrl() {
    this.url = "";
  }
}