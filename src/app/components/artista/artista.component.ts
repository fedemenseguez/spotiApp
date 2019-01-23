import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any = {};
  loading: boolean;
  loadingTopTracks: boolean;

  constructor(
    private router: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this.router.params.subscribe(params => {
      this.getArtista(params["id"]);
      this.getTopTrack(params["id"]);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this._spotifyService.getArtista(id).subscribe(resp => {
      console.log(resp);
      this.artista = resp;
      this.loading = false;
    });
  }
  getTopTrack(id: string) {
    this.loadingTopTracks = true;
    this._spotifyService.getTopTracks(id).subscribe(resp => {
      console.log(resp);
      this.topTracks = resp;
      this.loadingTopTracks = false;
    });
  }
}
