import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// custom modules
import {CustomerModule} from './customer/customer.module';
import {ProductsModule} from './products/products.module';

// components
import {AppComponent} from './app.component';
import { MyModuleModule } from './my-module/my-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    ProductsModule,
    MyModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
