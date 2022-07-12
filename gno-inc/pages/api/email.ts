import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/email';
type Data = {
  error: boolean;
  message: string;
};
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  sendEmail()
    .then(() => {
      res.status(200);
      res.send({
        error: false,
        message: 'Form submitted successfully!',
      });
    })
    .catch((err) => {
      res.status(500);
      res.send({ error: true, message: err.message });
    });
}
