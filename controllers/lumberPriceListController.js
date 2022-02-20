const PriceList = require('../models/LumberPriceList');
const Product = require('../models/LumberProduct');
const Variety = require('../models/LumberVariety');
const Wood = require('../models/LumberWood');
const Length = require('../models/LumberLength');
const errorHandler = require('../errorHandler');

class lumberPriceListController {
    
    async createOne(req, res) {
        try {
            const { product, variety, wood, pricelist } = req.body;
            const note = { product, variety, wood };

            // Проверяем уникальность прайслиста и наличие переданных цен
            let requestResult = await PriceList.findOne({ product, variety, wood });
            if (requestResult)
                return res.status(400).json({ message: 'Прайслист с такими параметрами уже существует' });

            if (!pricelist?.length)
                return res.status(400).json({ message: 'Прайслист не содержит цен' });

            // Проверяем корректность параметров и сохраняем ссылки
            requestResult = await Product.findOne({ value: product });
            if (!requestResult)
                return res.status(404).json({ message: 'Указанный товар не найден' });
            else
                note.productId = requestResult._id;

            requestResult = await Variety.findOne({ value: variety });
            if (!requestResult)
                return res.status(404).json({ message: 'Указанный сорт не найден' });
            else
                note.varietyId = requestResult._id;

            requestResult = await Wood.findOne({ value: wood });
            if (!requestResult)
                return res.status(404).json({ message: 'Указанная древесина не найдена' });
            else
                note.woodId = requestResult._id;

            // Проверяем корректность длин
            let min_wholesale_price = 100000000;
            let min_retail_price = 100000000;

            note.pricelist = [];
            for (let i = 0; i < pricelist.length; i++) {
                note.pricelist[i] = {
                    wholesale_price: pricelist[i].wholesale_price,
                    retail_price: pricelist[i].retail_price
                }; 

                if (pricelist[i].wholesale_price < min_wholesale_price)
                    min_wholesale_price = pricelist[i].wholesale_price;

                if (pricelist[i].retail_price < min_retail_price)
                    min_retail_price = pricelist[i].retail_price;

                requestResult = await Length.findOne({ value: pricelist[i].from_length });
                if (!requestResult)
                    return res.status(404).json({ message: 'Указанная длина не найдена' });
                else
                    note.pricelist[i].from_length = requestResult.value;

                requestResult = await Length.findOne({ value: pricelist[i].to_length });
                if (!requestResult)
                    return res.status(404).json({ message: 'Указанная длина не найдена' });
                else
                    note.pricelist[i].to_length = requestResult.value;
            }

            // Сортируем строки прайслиста по длине
            note.pricelist.sort((a, b) => b.from_length - a.from_length);

            const newNote = new PriceList(note);
            const result = await newNote.save();

            // Обновляем информацию о продукте в базе на основе созданного прайслиста
            const updatedProduct = await Product.findOne({ _id: note.productId });
            const needUpdate = {};

            // Проверяем наличие древесины в списке доступных
            if (updatedProduct?.available_woods !== undefined) {
                let sign = updatedProduct.available_woods.find(element => element == wood);
                if (!sign)
                    needUpdate.available_woods = [...updatedProduct.available_woods, wood];
            }

            // Проверяем необходимость обновления длин
            if (updatedProduct.min_wholesale_price > min_wholesale_price)
                needUpdate.min_wholesale_price = min_wholesale_price;

            if (updatedProduct.min_retail_price > min_retail_price)
                needUpdate.min_retail_price = min_retail_price;

            // Обновляем продукт
            await Product.updateOne({ _id: updatedProduct._id }, needUpdate);

            res.status(201).json({ note: result, message: 'Прайслист был добавлен в базу' });

        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при добавлении прайслиста в базу'
            });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;

            const note = await PriceList.findOne({ _id: id });
            if (!note) {
                return res.status(404).json({ message: 'Такого прайслиста нет в базе' });
            }

            res.status(200).json({ note, message: 'Прайслист найден' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении прайслиста из базы'
            });
        }
    }

    async readMany(req, res) {
        try {
            const notes = await PriceList.find(req.query);
            if (!notes.length) {
                return res.status(404).json({ message: 'Прайслисты не найдены' });
            }

            res.status(200).json({ notes, message: 'Прайслисты найдены' });
        } catch (error) {
            errorHandler({
                res: res, status: 500, error: error,
                log: 'Произошла ошибка при получении прайслистов из базы'
            }); 
        }
    } 

    async updateOne (req, res) {
        res.status(500).json({ message: 'Данный роут находится в разработке' });
    }

    async deleteOne (req, res) {
        res.status(500).json({ message: 'Данный роут находится в разработке' });
    }
}


module.exports = new lumberPriceListController();