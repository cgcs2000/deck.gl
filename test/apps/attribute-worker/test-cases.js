export default {
  ScatterplotLayer: {
    data:
      'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/bart-stations.json',
    getPosition: d => d.coordinates,
    getRadius: d => Math.sqrt(d.entries),
    getFillColor: [255, 200, 0]
  },
  ArcLayer: {
    data:
      'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/bart-segments.json',
    getStrokeWidth: 12,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
    getTargetColor: d => [Math.sqrt(d.outbound), 140, 0]
  },
  LineLayer: {
    data:
      'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/bart-segments.json',
    getStrokeWidth: 12,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  },
  PathLayer: {
    data:
      'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/bart-lines.json',
    getPath: d => d.path,
    getColor: d => d.color.match(/\w\w/g).map(x => parseInt(x, 16)),
    getWidth: 50
  },
  SolidPolygonLayer: {
    data:
      'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-zipcodes.json',
    getPolygon: d => d.contour,
    getFillColor: d => [d.population / 200, 100, 0]
  }
};
