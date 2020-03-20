import { NgModule } from '@angular/core';

// 使いたいMaterial Moduleをimport


import { MatButtonModule } from '@angular/material/button';

const material = [
  MatButtonModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
