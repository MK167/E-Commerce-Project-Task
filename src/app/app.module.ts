import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllproductsComponent } from './Components/allproducts/allproducts.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './Components/about/about.component';
import { WebcamModule } from 'ngx-webcam';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './Components/cart/cart.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StartComponent } from './Components/start/start.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeheaderComponent } from './Components/homeheader/homeheader.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    HomeheaderComponent,
    AllproductsComponent,
    ProductdetailsComponent,
    AboutComponent,
    FooterComponent,
    CartComponent,
    FavoriteComponent,
    LoginComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule, CarouselModule, ToastrModule.forRoot(), WebcamModule,
    DragDropModule, MatSlideToggleModule, MatStepperModule, CdkStepperModule, MatInputModule, MatButtonModule,
    MatBadgeModule, HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
