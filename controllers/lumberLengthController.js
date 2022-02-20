const Length = require('../models/LumberLength');
const errorHandler = require('../errorHandler');

class lumberLengthController {

    async createLength(req, res) {
        try {
            let { value } = req.body;
            value = Number(value);

            if (isNaN(value))
                return res.status(400).json({ message: 'Передаваемая длина должна быть числом' });

            const candidate = await Length.findOne({ value });
            if (candidate)
                return res.status(400).json({ message: 'Такая длина уже есть в базе' });

            const newNote = new Length({ value });
            const result = await newNote.save();

            res.status(201).json({ note: result, message: 'Длина добавлена в базу' });

        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при добавлении длины в базу'
            });
        }
    }

    async getLengths(req, res) {
        try {
            const notes = await Length.find({});

            if (!notes.length) {
                return res.status(404).json({ message: 'Длины не найдены' });
            }

            res.status(200).json({
                notes: notes.map( note => ({
                    id: note._id,
                    value: note.value
                })), 
                message: 'Длины найдены' 
            });
        } catch (e) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении всех длин из базы'
            });
        }
    }
}


module.exports = new lumberLengthController();