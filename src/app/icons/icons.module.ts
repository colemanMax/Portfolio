import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {Github, Linkedin} from 'angular-feather/icons';

const icons = {
  Linkedin,
  Github
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
