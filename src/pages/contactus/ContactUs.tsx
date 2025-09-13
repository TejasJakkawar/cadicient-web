import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Send } from "lucide-react";
import "./contactus.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form and show success
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div id="contact" className="contact-us-component">
      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <p>Message sent successfully!</p>
          </div>
        </div>
      )}

      <div className={`container ${isVisible ? "visible" : ""}`}>
        <div className="content-grid">
          {/* Left Section */}
          <div className="left-section">
            <div className="header-section">
              <div className="tagline">
                <span>WE'D LOVE TO HEAR FROM YOU</span>
              </div>
              <h1 className="main-title">
                Contact <span className="highlight">Us</span>
              </h1>
              {/* <div className="title-underline"></div> */}
            </div>

            <p className="description">
              Have questions or need assistance? We're here to help! Contact us
              for inquiries, support, or collaborations. Reach out today and
              let's connect!
            </p>

            {/* Contact Information and Social Networks Side by Side */}
            <div className="info-social-grid">
              {/* Contact Information */}
              <div className="contact-info">
                <h3 className="section-title">REACH US THROUGH</h3>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin className="icon" />
                    </div>
                    <div className="contact-details">
                      <p>
                        Cadicient Engineering Consultants, Chintamani Layout 1,
                        Pandharkawada, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone className="icon" />
                    </div>
                    <div className="contact-details">
                      <p>+91 9988141401</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail className="icon" />
                    </div>
                    <div className="contact-details">
                      <p>info@cadicient.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div className="social-section">
                <h3 className="section-title">SOCIAL NETWORKS</h3>
                <div className="social-items">
                  <a
                    href="https://www.instagram.com/cadicient"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-item">
                      <Instagram className="social-icon" />
                      <span>cadicient</span>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cadicient-engineering-consultants"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-item">
                      <Linkedin className="social-icon" />
                      <span>Cadicient Engineering Consultants</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="right-section">
            <div className="form-container">
              <h2 className="form-title">Send Us A Message</h2>
              {/* <div className="form-underline"></div> */}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="someone@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="input-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                >
                  {isSubmitting ? (
                    <span className="loading-content">
                      <div className="spinner"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="button-content">
                      SEND MESSAGE
                      <Send className="send-icon" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
