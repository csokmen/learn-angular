import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-contact.component.html',
  styleUrl: './reactive-contact.component.css'
})
export class ReactiveContactComponent implements OnInit {
  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Thank you for your message!');
      this.contactForm.reset();
    }
  }
}
