import { NgModule } from '@angular/core';

// 使いたいMaterial Moduleをimport
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatButtonModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
