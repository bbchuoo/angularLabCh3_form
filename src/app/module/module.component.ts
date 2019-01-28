import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  form;

  // Form 表單 Model  //在這裡指定我的form的驗證的規則 required minLength
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      account: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
    });
  }

  reset() {
    this.form.reset(); // 使用formGroup提供的reset方法:重置FormGroup
  }
}
