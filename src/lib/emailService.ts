// This file is no longer needed as we're using @formspree/react hook directly
// Keeping for reference only

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Legacy - no longer used
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  throw new Error('This function is deprecated. Use @formspree/react hook instead.');
};

// Legacy - no longer used
export const initEmailJS = () => {
  // No-op
};
