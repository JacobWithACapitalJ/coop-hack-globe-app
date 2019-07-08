const connection = require("../../database/connection");

exports.fetchToilets = ({city, filter}) => {
    const filters = {
        unisex: 'unisex_count',
        accessible: 'accessible_count',
        changing_table: 'changing_table_count'
    }
    const col = filters[filter] || 'total_records';
    return connection('toilets')
        .select('latitude', 'longitude', `${col} AS count`)
        .modify((query)=> {
            if (city) query.where({city})
        })
}

exports.fetchBiggestToilet = ({property}) => {
    console.log(property)
    return connection('toilets')
        .max(property)
        .returning('*')
}
