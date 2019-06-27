const MapboxUtils = require('./src');

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck || {};

// Check if peer dependencies are included
if (!deck.Layer) {
  throw new Error('@cgcs2000/deck.gl.core is not found');
}

module.exports = Object.assign(deck, MapboxUtils);
