import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FeatherModule} from "angular-feather";
import {IconsModule} from "./icons/icons.module";


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FeatherModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
