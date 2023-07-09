const nodemailer = require('nodemailer');



const mailer = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'rafikmhadhbi@yahoo.fr',
      pass: 'pvlzkdjalmylxcii',
    },
  });


module.exports={
    sendMail:(req,res)=>{
        const {email, reservationDetails} = req.body;

        const mail = {
            from: 'rafikmhadhbi@yahoo.fr',
            to: email,
            subject: 'Reservation Confirmation',
            html: `Thank you for your reservation! Details: ${reservationDetails}`
          };
          mailer.sendMail(mail,(err,data)=>{
            if (err) res.status(500).json({ message: 'Error sending email',err:err })
            else res.status(200).json({ message: 'Reservation email sent successfully' })
          })
    }
}