import FulcrumSchema from '../db/fulcrum.schema.js';
import InternalCompassSchema from '../db/internal-compass.schema.js';
import { FULCRUM, INTERNAL_COMPASS, SERVER } from '../constants.js';

export const getCards = async (req, res) => {
  try {
    const cards = [
      {fulcrum: []},
      {internalCompass: []},
    ];

    cards.fulcrum = await FulcrumSchema.find();
    cards.internalCompass = await InternalCompassSchema.find();

    cards.forEach(table => {
      console.log(table);
      // table.map(card => {
      //   card.image = `${SERVER}${card.image}`;
      //   return card;
      // })
    })

    res.status(200).json(cards);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getCard = async (req, res) => {
  const { deck } = req.params;

  try {
    let card;
    if (deck === FULCRUM) card = await FulcrumSchema.aggregate([{ $sample: { size: 1 } }]);
    else if (deck === INTERNAL_COMPASS) card = await InternalCompassSchema.aggregate([{ $sample: { size: 1 } }]);

    card = card[0];
    card.image = `${SERVER}${card.image}`;

    res.status(200).json(card);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const postCard = async (req, res) => {
  const { deck, description, file } = req.body;

  try {
    let card;
    if (deck === FULCRUM) card = await FulcrumSchema.create({ description, image: file });
    else if (deck === INTERNAL_COMPASS) card = await InternalCompassSchema.create({ description, image: file });
    
    res.status(201).json(card);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
