import { NextApiRequest, NextApiResponse } from 'next';

// Mock function to simulate payment processing
const processPayment = async (amount: number, currency: string) => {
  // Simulate a delay for payment processing
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Return a mock payment response
  return {
    success: true,
    transactionId: '1234567890',
    message: 'Payment processed successfully',
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: 'Amount and currency are required' });
    }

    try {
      const paymentResult = await processPayment(amount, currency);
      return res.status(200).json(paymentResult);
    } catch (error) {
      return res.status(500).json({ error: 'Payment processing failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

