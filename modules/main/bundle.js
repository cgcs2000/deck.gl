const deck = require('../core/bundle');

Object.assign(
  deck,
  require('@cgcs2000/deck.gl.layers'),
  require('@cgcs2000/deck.gl.aggregation-layers'),
  require('@cgcs2000/deck.gl.geo-layers'),
  require('@cgcs2000/deck.gl.google-maps'),
  require('@cgcs2000/deck.gl.mesh-layers'),
  require('@cgcs2000/deck.gl.mapbox'),
  require('@cgcs2000/deck.gl.json')
);

module.exports = deck;
