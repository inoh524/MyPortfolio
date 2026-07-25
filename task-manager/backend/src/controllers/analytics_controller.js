const prisma = require("../config/prisma_client");

exports.createEvent = async (req, res) => {
  try {
    const { eventType, page, element } = req.body;

    const event = await prisma.websiteEvent.create({
      data: {
        eventType,
        page,
        element,
      },
    });

    return res.status(201).json(event);
  } catch (error) {
    console.error("Analytics error:", error);

    return res.status(500).json({
      error: "Unable to record event.",
    });
  }
};