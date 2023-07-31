import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import {
  FormlyModule
} from '@ngx-formly/core'
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-button',
  template:  './button.component.html ' ,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends FieldType<FieldTypeConfig> {

  ngOnInit() {}
  // form = new FormGroup({});
  formFields : FormlyFieldConfig[]=[
    {
      key:'inp',
      type:'input',
      templateOptions:{
        label:'input tag',
        placeholder:'Enter something',
        required:true,
      }
    }
  ]

}

