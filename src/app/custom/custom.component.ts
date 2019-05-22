import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})

export class CustomComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      cellphoneNumber: ['', [this.validateNumber]]
    });
    console.log('this.form.controls.cellphoneNumber', this.form.controls.cellphoneNumber);
  }

  validateNumber(control: AbstractControl) {
    if (control.value.length <= 10) {
      return {
        message: '電話號碼長度有誤',
      };
    }
    return null;
  }

  ngOnInit() {
  }

}
