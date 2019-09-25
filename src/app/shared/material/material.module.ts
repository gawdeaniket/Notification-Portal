import { NgModule } from '@angular/core';
import {
  
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatSidenavModule
} from '@angular/material';



const materialModules = [
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,MatSidenavModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatExpansionModule,
 MatIconModule,
   
];



@NgModule({
  declarations: [],
  imports: [
    
    materialModules
  ],
  exports:[
    materialModules   
  ]
})
export class MaterialModule { }


