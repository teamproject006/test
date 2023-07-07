const { Service } = require('../database-sequelize/models/sequelizeschema');

module.exports = {
  addService(req, res) {
    const { category, companyName, description, costPerDay, logo, images, address } = req.body;
    Service.create({
      category,
      companyName,
      description,
      costPerDay,
      logo,
      images,
      address
    })

      .then((service) => {
        res.status(201).json(service);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to add service' });
      });
  },

  deleteService(req, res) {
    const { serviceId } = req.params;
    Service.destroy({ where: { id: serviceId } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          res.status(404).json({ error: 'Service not found' });
        } else {
          res.status(204).end();
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete service' });
      });
  },

  getAllServices(req, res) {
    Service.findAll()
      .then((services) => {
        res.status(200).json(services);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to get services' });
      });
  },

  updateService(req, res) {
    const { serviceId } = req.params;
    const { column, value } = req.body;

    Service.findByPk(serviceId)
      .then((service) => {
        if (!service) {
          res.status(404).json({ error: 'Service not found' });
          return;
        }

        return service.update({ [column]: value });
      })
      .then((updatedService) => {
        res.status(200).json(updatedService);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to update service column' });
      });
  }
};
