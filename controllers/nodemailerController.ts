import { nodemailerSend } from '../services/nodemailerService';

export const sendEmail = async (req, res) => {
  let output = { status: 500, data: {} };

  try {
    const message = await nodemailerSend(req.body);

    output = {
      status: 200,
      data: {
        message,
      },
    };
  } catch (error) {
    output = {
      status: 500,
      data: { errorMessage: error.message },
    };
  }
  res.status(output.status).send(output.data);
};
