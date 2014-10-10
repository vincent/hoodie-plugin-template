/**
 * Hoodie plugin template
 * An example plugin worker, this is where you put your backend code (if any)
 */

var elasticsearch = require('elasticsearch');

module.exports = function (hoodie, callback) {

  var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

  // plugin initialization complete
  callback();

};
