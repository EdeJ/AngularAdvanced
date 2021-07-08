import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { SharedModule } from '../shared/shared.module';
import { MyButtonComponent } from './my-button/my-button.component';



@NgModule({
  declarations: [MyComponentComponent, MyButtonComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[MyComponentComponent]
})
export class MyModuleModule { }
