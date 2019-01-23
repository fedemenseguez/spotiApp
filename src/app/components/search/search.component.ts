import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  loading: boolean;

  constructor(private spotify_Service: SpotifyService) {}
  artistas: any[] = [];
  ngOnInit() {}

  buscar(termino: string) {
    if (termino) {
      this.loading = true;
      this.spotify_Service.getArtistas(termino).subscribe(
        (data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        },
        err => console.log(err)
      );
    }
  }
}
