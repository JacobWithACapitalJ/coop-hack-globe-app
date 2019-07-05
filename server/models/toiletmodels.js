const connection = require('../../database/connection')

exports.fetchToilets = (queries) => {
    return connection('toilets')
        .select('toilets.*')
}