import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OwlModule } from 'ngx-owl-carousel'; 
import { CarouselModule } from 'ngx-owl-carousel-o'; 
import { SlickCarouselModule } from 'ngx-slick-carousel';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ContentComponent } from './content/content.component';
import { FeatureComponent } from './feature/feature.component';
import { VideoComponent } from './video/video.component';
import { CounterComponent } from './counter/counter.component';
import { AnimateComponent } from './animate/animate.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { ClientComponent } from './client/client.component';
import { MembershipComponent } from './membership/membership.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    WellcomeComponent,
    ContentComponent,
    FeatureComponent,
    VideoComponent,
    CounterComponent,
    AnimateComponent,
    ScreenshotsComponent,
    PricingPlanComponent,
    ClientComponent,
    MembershipComponent,
    TeamComponent,
    ContactUsComponent,
    FooterComponent,
    


  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    CarouselModule,
    SlickCarouselModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
