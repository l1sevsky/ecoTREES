const Variety = require('../models/LumberVariety');
const errorHandler = require('../errorHandler');

class lumberVarietyController {

    async createOne(req, res) {
        try {
            const { value, description } = req.body;

            const candidate = await Variety.findOne({ value });
            if (candidate) {
                return res.status(400).json({ message: 'Такой сорт уже есть в базе' });
            }

            const newNote = new Variety({ value, description});
            const result = await newNote.save();

            res.status(201).json({ note: result, message: 'Сорт был добавлен в базу' });

        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при добавлении сорта в базу'
            });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;

            const note = await Variety.findOne({ _id: id });
            if (!note) {
                return res.status(404).json({ message: 'Такого сорта нет в базе' });
            }

            res.status(200).json({ note, message: 'Сорт найден' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении сорта из базы'
            });
        }
    }

    async readAll(req, res) {
        try {
            const notes = await Variety.find({});
            if (!notes.length) {
                return res.status(404).json({ message: 'Сорта не найдены' });
            }

            res.status(200).json({ notes, message: 'Сорта найдены' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении сортов из базы'
            });
        }
    }

    async updateOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Variety.updateOne({ _id: id }, { ...req.body });

            res.status(200).json({ message: `Было обновлено сортов: ${result.modifiedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при обновлении сорта в базе'
            });
        }
    }

    async deleteOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Variety.deleteOne({ _id: id });

            res.status(200).json({ message: `Было удалено сортов: ${result.deletedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при удалении сорта из базы'
            });
        }
    }
}


module.exports = new lumberVarietyController();