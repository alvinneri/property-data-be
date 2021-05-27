const Property = require("../models/Property");

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().select(
      "propertyId propertyName -_id"
    );
    res.status(201).json({
      properties: properties,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

exports.getProperty = async (req, res) => {
  try {
    const property = await Property.find({
      propertyId: req.params.id,
    }).select("propertyId propertyName -_id income expense");

    res.status(201).json({
      property: property,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
