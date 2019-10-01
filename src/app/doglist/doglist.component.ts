import { Component, OnInit } from "@angular/core";
import { Dog } from "../dog.interface";
import { DogServiceService } from "../dog-service.service";
import { NotifierService } from "../notifier/notifier.service";
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Config } from "../Config.interface";

@Component({
  selector: "app-doglist",
  templateUrl: "./doglist.component.html",
  styleUrls: ["./doglist.component.css"]
})
export class DoglistComponent implements OnInit {
  dogs: Dog[];
  likes: number = 0;
  showFavorites: boolean;
  messageType = "1";
  config: Config;
  headers: string[]
  error: HttpErrorResponse
  resetLikeCount: boolean
  constructor(
    private dogService: DogServiceService,
    private _notifier: NotifierService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.showFavorites = false;
    this.dogService.getAllDogs()
      .subscribe(data => (this.initializeDogs(data))
      );
  }

  initializeDogs(data: Dog[]) {
    this.dogs = data;
    this.dogs.forEach(dog => {
      dog.numberOfLikes = 0;
    });
    this.dogService.setDogData(this.dogs)
  }

  getFavorites() {
    this.showFavorites = true;
    this.dogs = this.dogs.filter(dog => dog.favorited);
  }

  setLike(dogId: string) {
    this.dogService.get(dogId).numberOfLikes++;
    this.submitMessage(this.dogService.get(dogId).title);
  }

  setFavorite(dogId: string) {
    this.dogService.get(dogId).favorited = !this.dogService.get(dogId)
      .favorited;
    if (this.showFavorites) {
      this.getFavorites();
    }
  }
  submitMessage(messageText: string) {
    let messageType: number = null;
    if (this.messageType.length > 0) {
      messageType = parseInt(this.messageType);
    }
    this._notifier.notify("Someone liked " + messageText, messageType);
  }
  deleteDog(dogId: string) {
    this.dogService.deleteDog(dogId);
    this._notifier.notify("Dog " + this.dogService.get(dogId).title + " was deleted", parseInt(this.messageType));
  }
}
