import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  exports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
})
export class SharedModule {}
