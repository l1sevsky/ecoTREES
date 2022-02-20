import axios from 'axios';

export default function axiosRequest(config, rejectWithValue) {
    config.url = 'http://localhost:5000/api/' + config.url;

    const response = axios(config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return rejectWithValue(new Error(error?.response?.data?.message || 
                'Непредвиденная ошибка, попробуйте снова'));
        })

    return response;
}

function transformPricelists(request) {
    const data = JSON.parse(request);
    const woods = [...new Set(data.notes.map(obj => obj.wood))];
    const varieties = [...new Set(data.notes.map(obj => obj.variety))].sort();

    const result = [];
    for (const wood of woods) {
        const woodObj = { wood, varieties: [] };

        for (const variety of varieties) {
            const varietyObj = { variety, prices: [] }

            for (const list of data.notes) {
                if (list.wood === wood && list.variety === variety) {
                    varietyObj.prices = [...list.pricelist];
                    break;
                }
            }

            if (varietyObj.prices.length)
                woodObj.varieties.push(varietyObj);
        }

        result.push(woodObj);
    }

    return { ...data, notes: result };
}

export {transformPricelists};