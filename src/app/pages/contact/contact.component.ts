import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  emailjsConfig = {
    publicKey: 'bE5fEoUpxHfY2rUOi',
    serviceId: 'service_ulouq37',
    autoReply: 'template_j36qsqg',
    mailMe: 'templatetome',
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;
  isSubmitting = false;

  sendEmail(e: Event) {
    e.preventDefault();
    this.successMessage = '';
    this.errorMessage = '';
    this.isSubmitting = true;

    const form = e.target as HTMLFormElement;
    const formData = {
      user_name: form['user_name'].value,
      user_email: form['user_email'].value,
      title: form['title'].valueOf,
      message: form['message'].value,
    };

    emailjs
      .send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.autoReply,
        formData,
        this.emailjsConfig.publicKey
      )
      .then(() =>
        emailjs.send(
          this.emailjsConfig.serviceId,
          this.emailjsConfig.mailMe,
          formData,
          this.emailjsConfig.publicKey
        )
      )
      .then(() => {
        this.successMessage = '✅ Message sent successfully!';
        this.isSubmitting = false;
        form.reset();
        setTimeout(() => (this.successMessage = null), 5000);
      })
      .catch((error) => {
        this.errorMessage = '❌ Failed to send message. Please try again.';
        this.isSubmitting = false;
        console.error('Email send error:', error);
        setTimeout(() => (this.errorMessage = null), 5000);
      });
  }
}
