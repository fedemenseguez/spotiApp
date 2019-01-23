import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensageError: string;

  constructor(private spotify_Service: SpotifyService) {
    this.loading = true;
    this.error = false;
    console.log("Constructor hecho");
    spotify_Service.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      err => {
        this.error = true;
        this.loading = false;
        this.mensageError = err.error.error.message;
        console.log(err.error.error.message);
      }
    );
  }

  ngOnInit() {}
}
