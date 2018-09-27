import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDescriptionPipe } from './short-description.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShortDescriptionPipe
  ],
  exports: [
    ShortDescriptionPipe
  ]
})
export class ShortDescriptionModule { }
