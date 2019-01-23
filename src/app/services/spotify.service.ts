import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpClientJsonpModule
} from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  // myToken: any;
   constructor(private http: HttpClient) {
  //   this.getToken().subscribe(data => {
  //     this.myToken = data;
  //   });

    console.log("Servicio cargado");
    // console.log(this.myToken);
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCww5HZ_8TrqsuxOaWtUHVjsMX1RGtSQPuUJoRbsO1LR7tG7x5yZkXEHLmtmr-CenqHdKftqBjZs7hGBV4" //+this.getToken()
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }
  getArtistas(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15&offset=5`
    ).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map(data => {
        return data["tracks"];
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`).pipe(
      map(data => {
        return data;
      })
    );
  }

  // getToken() {
  //   console.log("client_credentials");
  //   return this.http
  //     .jsonp("https://accounts.spotify.com/api/token", {
  //       params: {
  //         grant_type: "client_credentials",
  //         client_id: "f72fa79f18194323b41979a7fcc2c99b",
  //         client_secret: "5c5d94e7fcd9469bad8dd536fed57460"
  //       }
  //     })
  //     .pipe(
  //       map(data => {
  //         console.log(data["token_type"] + " " + data["access_token"]);
  //         return data["token_type"] + " " + data["access_token"];
  //       })
  //     );
  // }
}
