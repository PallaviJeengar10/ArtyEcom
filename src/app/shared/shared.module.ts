import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list/generic-list.component';
import { FormCardContainerComponent } from './form-card-container/form-card-container.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [GenericListComponent, FormCardContainerComponent],
  imports: [CommonModule, GridModule, ToolBarModule, ButtonsModule],
  exports: [GenericListComponent, FormCardContainerComponent],
})
export class SharedModule {}
