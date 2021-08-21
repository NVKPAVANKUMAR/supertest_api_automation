module.exports = {
    spec: ["tests/*.test.js"],
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'overwrite=true',
        'reportTitle=AirportGap API Tests',
        'showPassed=false',
        'timestamp=isoDateTime'
    ],
    timeout: 5000,
};