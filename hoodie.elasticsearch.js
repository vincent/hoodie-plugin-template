/**
 * Hoodie plugin template
 * An example plugin, this is where you put your frontend code (if any)
 */

/* global Hoodie */

Hoodie.extend(function (hoodie) {
  'use strict';

  var elasticsearch = require('elasticsearch');

  // extend the hoodie.js API
  hoodie.elasticsearch = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

});
