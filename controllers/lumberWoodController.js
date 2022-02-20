const Wood = require('../models/LumberWood');
const errorHandler = require('../errorHandler');

class lumberWoodController {

    async createOne(req, res) {
        try {
            const { value, description } = req.body;

            const candidate = await Wood.findOne({ value });
            if (candidate) {
                return res.status(400).json({ message: 'Такая порода дерева уже есть в базе' });
            }

            const newNote = new Wood({ value, description});
            const result = await newNote.save();

            res.status(201).json({ note: result, message: 'Порода дерева была добавлена в базу' });

        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при добавлении породы дерева в базу'
            });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;

            const note = await Wood.findOne({ _id: id });
            if (!note) {
                return res.status(404).json({ message: 'Такой породы дерева нет в базе' });
            }

            res.status(200).json({ note, message: 'Порода дерева найдена' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении породы дерева из базы'
            });
        }
    }

    async readAll(req, res) {
        try {
            const notes = await Wood.find({});
            if (!notes.length) {
                return res.status(404).json({ message: 'Породы дерева не найдены' });
            }

            res.status(200).json({ notes, message: 'Породы дерева найдены' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении пород дерева из базы'
            });
        }
    }

    async updateOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Wood.updateOne({ _id: id }, { ...req.body });

            res.status(200).json({ message: `Было обновлено пород дерева: ${result.modifiedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при обновлении породы дерева в базе'
            });
        }
    }

    async deleteOne (req, res) {
        try {
            const { id } = req.params;
            const result = await Wood.deleteOne({ _id: id });

            res.status(200).json({ message: `Было удалено пород дерева: ${result.deletedCount}` });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при удалении породы дерева из базы'
            });
        }
    }
}


module.exports = new lumberWoodController();