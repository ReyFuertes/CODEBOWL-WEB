import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  ngOnInit() { }
}
