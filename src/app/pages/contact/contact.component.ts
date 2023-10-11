import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactFormData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form Submitted:', this.contactFormData);
    // You can send the form data to your backend or perform any other action here
  }
}
