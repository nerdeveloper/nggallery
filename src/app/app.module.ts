import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageService } from "./services/image.service";
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
     {path:  'gallery', component: GalleryComponent},
      {path:  'contact', component: ContactComponent},
       {path:  'about', component: AboutComponent},
  ]

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
