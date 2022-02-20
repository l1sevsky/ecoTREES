const Product = require('../models/LumberProduct');
const errorHandler = require('../errorHandler');

class lumberProductController {

    async createOne(req, res) {
        try {
            const { value, description, image, width, 
                    thickness, start_wholesale_price } = req.body;

            const candidate = await Product.findOne({ value });
            if (candidate) {
                return res.status(400).json({ message: 'Такой товар уже есть в базе' });
            }

            const newNote = new Product({ value, description, image, width, 
                thickness, start_wholesale_price});
            const result = await newNote.save();

            res.status(201).json({ note: result, message: 'Товар был добавлен в базу' });

        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при добавлении товара в базу'
            });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;

            const note = await Product.findOne({ _id: id });
            if (!note) {
                return res.status(404).json({ message: 'Такого товара нет в базе' });
            }

            res.status(200).json({ note, message: 'Товар найден' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении товара из базы'
            });
        }
    }

    async readAll(req, res) {
        try {
            const notes = await Product.find({});
            if (!notes.length) {
                return res.status(404).json({ message: 'Товары не найдены' });
            }

            res.status(200).json({ notes, message: 'Товары найдены' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении товаров из базы'
            });
        }
    }

    async updateOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Product.updateOne({ _id: id }, { ...req.body });

            res.status(200).json({ message: `Было обновлено товаров: ${result.modifiedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при обновлении товара в базе'
            });
        }
    }

    async deleteOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Product.deleteOne({ _id: id });

            res.status(200).json({ message: `Было удалено товаров: ${result.deletedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при удалении товара из базы'
            });
        }
    }
}


module.exports = new lumberProductController();