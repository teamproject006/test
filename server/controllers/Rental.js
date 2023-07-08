const { Rental } = require('../database-sequelize/models/sequelizeschema');

module.exports = {
  getAllRentals(req, res) {
    Rental.findAll()
      .then((rentals) => {
        res.status(200).json(rentals);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to get rentals' });
      });
  },

  addRental(req, res) {
    const { rentalDate, returnDate, UserId, ServiceId } = req.body;
    Rental.create({ rentalDate, returnDate, UserId, ServiceId })
      .then((rental) => {
        res.status(201).json(rental);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to add rental' });
      });
  }
};
