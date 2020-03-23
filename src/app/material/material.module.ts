import { NgModule } from '@angular/core';

// 使いたいMaterial Moduleをimport
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatButtonModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
