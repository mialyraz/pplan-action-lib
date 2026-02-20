import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { TBPlanActionComponent } from './tb-plan-action/tb-plan-action.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedUiComponent,
    TBPlanActionComponent
  ],
  imports: [
     CommonModule,
    FormsModule // <
  ],
  exports: [
    SharedUiComponent
  ]
})
export class SharedUiModule { }
