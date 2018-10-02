import {MatButtonModule,MatCheckboxModule, MatButton} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [MatInputModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatProgressBarModule],
    exports: [MatInputModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatProgressBarModule]
})

export class MaterialModule{}
