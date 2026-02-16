const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact/send
router.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }

    try {
        // Create transporter (Note: Use environment variables for real credentials)
        // For demonstration, we'll just log it or use an ethereal account if needed.
        // Here we console log to simulate success for the portfolio content.

        console.log(`Message received from: ${name} (${email})`);
        console.log(`Message: ${message}`);

        // Example Nodemailer setup (commented out for safety/portability):
        /*
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Message from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        */

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
