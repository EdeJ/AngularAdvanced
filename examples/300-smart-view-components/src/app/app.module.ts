import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// custom
import {AppRoutingModule} from './app-routing.module';
import {CityService} from './shared/services/city.service';

// components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SmartComponent} from './smart-view/smart.component';
import { CityListComponent } from './smart-view/city-list/city-list.component';
import { CityVisitedComponent } from './smart-view/city-visited/city-visited.component';
import { CurrentCityComponent } from './smart-view/current-city/current-city.component';
import { VisitedListComponent } from './smart-view/visited-list/visited-list.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SmartComponent,
		CityListComponent,
		CityVisitedComponent,
		CurrentCityComponent,
		VisitedListComponent
	],
	imports     : [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
