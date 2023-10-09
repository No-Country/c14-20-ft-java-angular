import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule],
  exports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule],
})
export class SharedModule {}
