import { Component, inject } from '@angular/core';
import { DogServiceApi } from '../../service/dog-service-api';
import { Dog } from '../../components/dog/dog';

@Component({
  selector: 'app-view2',
  imports: [Dog],
  templateUrl: './view2.html',
  styleUrl: './view2.css',
})
export class View2 {
  public dogService = inject(DogServiceApi);

  public images: string[] = [];
  public selectedphoto: string = '';
  public mode: 'images' | 'detail' = 'images';

  public loadDogsImages(): void {
    this.dogService.getDogsImage().subscribe((response) => {
      this.images = response.message;
      this.mode = 'images';
    });
  }

  ngOnInit(): void {
    this.loadDogsImages();
  }

  public selectImage(image: string): void {
    this.selectedphoto = image;
    this.mode = 'detail';
  }
  public returnGallery(): void {
    this.mode = 'images';
  }

  public reloadGallery(): void {
    this.loadDogsImages();
  }
}
