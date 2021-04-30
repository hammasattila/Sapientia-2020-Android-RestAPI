var newman = require('newman');

newman.run({
    collection: require('./Sapientia-2020-Android-RestAPI.postman_collection.json'),
    reporters: ['cli'],
    iterationCount: 1
}, (err, summary) => {
    if (err) { throw err; }
    console.log('collection run complete!');
});