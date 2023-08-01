import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { FieldsetModule} from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayModule } from 'primeng/overlay';



@NgModule({
    exports: [
      CarouselModule,
      DataViewModule,
      ButtonModule,
      AccordionModule,
      TableModule,
      EditorModule,
      DropdownModule,
      RadioButtonModule,
      CardModule,
      TagModule,
      TabViewModule,
      DialogModule,
      ImageModule,
      FieldsetModule,
      DividerModule,
      ProgressBarModule,
      OrganizationChartModule,
      OverlayModule
    ]
  })

export class PrimengModule {}