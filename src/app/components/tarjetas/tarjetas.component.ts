import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"]
})
export class TarjetasComponent {
  constructor(private router: Router) {}

  @Input() items: any[] = [];

  verArtista(item: any) {
    let artistaId;
    console.log(item);
    if (item.type === "artist") {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    //console.log(artistaId);
    this.router.navigate(["/artist", artistaId]);
  }
}
