import Contact from "../db/model/Contact.js";

const create = async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Contact
    const { first_name, last_name, email, phone } = req.body;
    const contact = {
        first_name, last_name, email, phone
    };
    
    try {
        // Save Contact in the database
        const data = await Contact.create(contact);
        res.send(data);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error occured while creating. please try again later..."
        });
    }
};

const findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Contact.findByPk(id);
        res.send(data);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error occured while fetching. please try again later..."
        });
    }
};

const update = async (req, res) => {
    const id = req.params.id;
  
    try {
        const qParam = { where: { id } };
        const result = await Contact.update(req.body, qParam);
        const msg = result === 1?"Contact was updated successfully." :`Cannot update Contact with id=${id}.`;
        res.send(msg);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error occured while updating. please try again later..."
        });
    }
};

const destroy = async (req, res) => {
    const id = req.params.id;
  
    try {
        const qParam = { where: { id } };
        const result = await Contact.destroy(qParam);
        const msg = result === 1?"Contact was deleted successfully." :`Cannot delete Contact with id=${id}.`;
        res.send(msg);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error occured while deleting. please try again later..."
        });
    }
};

const findAll = async (req, res) => {
    try {
        const data = await Contact.findAll();
        res.send(data);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error occured while fetching all. please try again later..."
        });
    }
};

export {
    create,
    findOne,
    findAll,
    update,
    destroy
};