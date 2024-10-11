import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  responseMessage: string = '';

  constructor(private http: HttpClient) {}

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form submission

    const emailPayload = {
      service_id: 'service_ofybngi', // Your Service ID
      template_id: 'template_9ym3psg', // Your Template ID
      user_id: 'ZtP0W_-YkQx6Tp0fP', // Your User ID
      template_params: {
        from_name: this.contactData.name,
        from_email: this.contactData.email,
        subject: this.contactData.subject,
        message: this.contactData.message,
      },
    };

    this.http
      .post('https://api.emailjs.com/api/v1.0/email/send', emailPayload, {
        responseType: 'text',
      }) // Set responseType to 'text'
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response); // Log success for debugging
          this.responseMessage =
            'Your message has been sent! Thank you for reaching out.';
          this.resetForm(); // Clear form after successful submission
        },
        (error) => {
          console.error('Email sending error:', error); // Log error for debugging
          if (error.error && error.error.message) {
            // Check if there is a specific error message from the API
            this.responseMessage = `Error: ${error.error.message}`;
          } else {
            this.responseMessage =
              'Oops! Something went wrong. Please try again later.';
          }
        }
      );
  }

  resetForm() {
    this.contactData = { name: '', email: '', subject: '', message: '' }; // Reset form data
  }
}
