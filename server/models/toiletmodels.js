const connection = require('../../database/connection')

exports.fetchToilets = ({city}) => {
    return connection('toilets')
        .select('toilets.*')
        .modify((query)=> {
            if (city) query.where({city})
        })
}

exports.fetchBiggestToilet = ({property}) => {
    return connection('toilets')
        .max(property)
}
