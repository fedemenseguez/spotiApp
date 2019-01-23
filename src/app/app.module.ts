import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClientJsonpModule  } from "@angular/common/http";
//ROUTER
import { Rutas } from "./route.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component';
// import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule ,
    RouterModule.forRoot(Rutas, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
