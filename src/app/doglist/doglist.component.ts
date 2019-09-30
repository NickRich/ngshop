import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.interface'
import { DogServiceService } from '../dog-service.service'
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {

  dogs: Dog[]
  likes: number = 0
  showFavorites:boolean
  constructor(private dogService: DogServiceService) {
    //this.notifier = notiferService;
  }

  ngOnInit() {
    this.getAll();
    this.dogs.forEach(dog => {
      dog.numberOfLikes = 0
    })
    
  }
  getAll() {
    this.showFavorites = false;
    return this.dogService.all().subscribe(data => this.dogs = data);
  }

  getFavorites() {
    this.showFavorites = true;
    this.dogs = this.dogs.filter(dog=>dog.favorited)
  }

  setLike(dogId: string) {
    this.dogService.get(dogId).numberOfLikes++;
  }

  setFavorite(dogId: string) {
    this.dogService.get(dogId).favorited = !this.dogService.get(dogId).favorited;
    if (this.showFavorites) {
      this.getFavorites();
    }
  }
}

