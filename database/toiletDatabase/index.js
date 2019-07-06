const ENV = process.env.NODE_ENV || 'development';

const data = {
    'test': require('./testData.json'),
    'development': require('./devData.json'),
    'production': require('./devData.json')
};

module.exports = data[ENV];