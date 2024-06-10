"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const selectObjects_1 = __importDefault(require("../models/selectObjects"));
const addOject_1 = __importDefault(require("../models/addOject"));
//Variables
const router = express_1.default.Router();
router.get('/objects', (req, res) => {
    try {
        const objects = (0, selectObjects_1.default)();
        res.json(objects);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error creating object:", error.message);
        }
        else {
            console.error("An unexpected error occurred:", error);
        }
    }
});
router.post('/objects', (req, res) => {
    const object = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
    };
    try {
        const result = (0, addOject_1.default)(object);
        res.status(201).json({
            message: 'Object added successfully',
            object: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: "Error creating object",
                error: error.message,
            });
        }
        else {
            res.status(500).json({
                message: "An unexpected error occurred",
            });
        }
    }
});
exports.default = router;
