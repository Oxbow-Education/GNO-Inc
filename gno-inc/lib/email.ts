import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');
const msg = {
  to: 'nina@wherewego.org', // Change to your recipient
  from: 'nina@wherewego.org', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

export const sendEmail = () => {
  return sgMail.send(msg);
};
