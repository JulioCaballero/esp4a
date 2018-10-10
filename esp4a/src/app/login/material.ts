import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';



  
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatTabsModule, MatTooltipModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatTabsModule, MatTooltipModule],
})
export class MaterialModule{ }