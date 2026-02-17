import emailjs from '@emailjs/browser';

// First email: When user schedules pickup
export const sendPickupConfirmationEmail = async (
  toEmail: string,
  userName: string,
  pickupDate: string,
  pickupTime: string,
  message: string
) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    user_email: toEmail,
    user_name: userName,
    pickup_date: pickupDate,
    pickup_time: pickupTime,
    message: message,
  };

  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
    console.log('✅ Confirmation email sent successfully:', result.status);
  } catch (error) {
    console.error('❌ Failed to send confirmation email:', error);
  }
};

// Second email: After pickup is done
export const sendPickupCompletedEmail = async (
  toEmail: string,
  userName: string
) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const completedTemplateID = import.meta.env.VITE_EMAILJS_COMPLETED_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    user_email: toEmail,
    user_name: userName,
  };

  try {
    const result = await emailjs.send(serviceID, completedTemplateID, templateParams, publicKey);
    console.log('✅ Pickup completed email sent successfully:', result.status);
  } catch (error) {
    console.error('❌ Failed to send pickup completed email:', error);
  }
};
