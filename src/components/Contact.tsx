import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const emptyForm: FormState = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitNotice, setSubmitNotice] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstInvalidField = (['name', 'email', 'subject', 'message'] as const)
        .find((field) => newErrors[field]);
      if (firstInvalidField) {
        requestAnimationFrame(() => document.getElementById(firstInvalidField)?.focus());
      }
      return false;
    }

    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const field = name as keyof FormState;
    setFormData((previousData) => ({ ...previousData, [field]: value }));
    setErrors((previousErrors) => ({ ...previousErrors, [field]: undefined }));
    setSubmitSuccess(false);
    setSubmitError('');
    setSubmitNotice('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitNotice('');

    try {
      await emailjs.send(
        'service_0q66hgk',
        'template_zal04ci',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '8yAkQExpJkvETv522',
      );

      setSubmitSuccess(true);
      setFormData(emptyForm);
      setErrors({});

      try {
        await emailjs.send(
          'service_0q66hgk',
          'template_ojxor8r',
          {
            to_name: formData.name,
            to_email: formData.email,
            subject: formData.subject,
            user_message: formData.message,
          },
          '8yAkQExpJkvETv522',
        );
      } catch (confirmationError) {
        console.error('The message was sent, but its confirmation email could not be sent.', confirmationError);
        setSubmitNotice('Your message was sent, but the confirmation email could not be sent.');
      }
    } catch (sendError) {
      if (sendError instanceof EmailJSResponseStatus) {
        console.error('The contact message could not be sent.', {
          status: sendError.status,
          response: sendError.text,
        });
        setSubmitError(
          sendError.status === 412
            ? 'EmailJS rejected this website origin. Add this site to Allowed Origins in your EmailJS account settings, then try again.'
            : `Failed to send message (EmailJS ${sendError.status}). Please try again later.`,
        );
      } else {
        console.error('The contact message could not be sent.', sendError);
        setSubmitError('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <h2 id="contact-title">Let’s talk</h2>
            <p>Have a question or want to work together? Feel free to reach out!</p>

            <h3 className="footer-heading">Open to opportunities</h3>
            <p>
              I’m actively seeking internship and entry-level roles in Software Engineering,
              AI/ML, or Data Analytics. I’m excited to contribute to impactful projects,
              collaborate with strong teams, and apply my technical skills to build
              scalable, data-driven solutions.
            </p>

            <div className="contact-detail">
              <h3><Mail aria-hidden="true" size={16} /> Email</h3>
              <a className="contact-value" href="mailto:vishvasistla04@gmail.com">
                vishvasistla04@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <h3><Phone aria-hidden="true" size={16} /> Phone</h3>
              <a className="contact-value" href="tel:+919493985540">+91 9493985540</a>
            </div>
            <div className="contact-detail">
              <h3><MapPin aria-hidden="true" size={16} /> Location</h3>
              <span className="contact-value">Hyderabad, India</span>
            </div>

            <div className="contact-socials" aria-label="Social links">
              <a href="https://github.com/SistlaVishva04" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/vamsi-sistla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            {submitSuccess && (
              <p className="form-notice form-notice--success" role="status" aria-live="polite">
                Your message has been sent successfully! I’ll get back to you soon.
              </p>
            )}
            {submitNotice && (
              <p className="form-notice" role="status" aria-live="polite">{submitNotice}</p>
            )}
            {submitError && (
              <p className="form-notice form-notice--error" role="alert">{submitError}</p>
            )}

            <form onSubmit={handleSubmit} aria-busy={isSubmitting} noValidate>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p className="form-error" id="name-error" role="alert">{errors.name}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p className="form-error" id="email-error" role="alert">{errors.email}</p>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p className="form-error" id="subject-error" role="alert">{errors.subject}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hello! I’d like to talk about..."
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p className="form-error" id="message-error" role="alert">{errors.message}</p>}
              </div>

              <button className="form-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
