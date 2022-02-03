import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { LazyTestComponent } from './lazy-test/lazy-test.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LazyTestComponent}
    ]),
    ShareButtonsModule
  ],
  declarations: [LazyTestComponent]
})
export class LazyTestModule { }