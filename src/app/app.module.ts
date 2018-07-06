import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ToDOListComponent } from './to-dolist/to-dolist.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDOListComponent,
    FavoriteComponent,
    PanelComponent,
    OnboardingComponent,
    // AngularFontAwesomeModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',component:OnboardingComponent
      },
      {
        path:'ToDo-list',component:ToDOListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
