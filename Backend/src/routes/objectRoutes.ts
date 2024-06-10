import express, { Request, Response} from "express";
import selectObjects from "../models/selectObjects";
import addOject from "../models/addOject";
import addObject from "../models/addOject";


//Variables
const router = express.Router()

router.get('/objects', (req: Request, res:Response) => {
    try {
        const objects = selectObjects()
        res.json(objects)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error creating object:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
})

router.post('/objects', (req: Request, res: Response) => {
  const object = {
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  };

  try {
    const result = addObject(object);
    res.status(201).json({
      message: 'Object added successfully',
      object: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "Error creating object",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "An unexpected error occurred",
      });
    }
  }
});

export default router
