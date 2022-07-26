import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

export const sendEmail = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const msg = {
    to: 'nina@wherewego.org', // Change to your recipient
    // to: 'jtatum@gnoinc.org' // change when verified
    from: data.email, // Change to your verified sender
    subject: 'Form Submission - GNO Inc Career Guide Landing Page',
    html: `<ul><li>Name: ${data.name}</li><li>Email: ${data.email}</li><li>Message: ${data.message}</li></ul>`,
  };

  return sgMail.send(msg);
};
