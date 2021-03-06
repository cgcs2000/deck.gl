import * as data from 'deck.gl-test/data';

import PolygonTesselator from '@cgcs2000/deck.gl.layers/solid-polygon-layer/polygon-tesselator';

const polygons = data.choropleths.features.map(f => f.geometry.coordinates);

export default function tesselationBench(suite) {
  return suite
    .group('TESSELATOR')
    .add('polygonTesselator.updatePositions#flat', () => {
      const tesselator = new PolygonTesselator({polygons});
      tesselator._updatePositions({});
    })
    .add('polygonTesselator.updatePositions#extruded', () => {
      const tesselator = new PolygonTesselator({polygons});
      tesselator._updatePositions({extruded: true});
    })
    .add('polygonTesselator.updatePositions#flat - fp64', () => {
      const tesselator = new PolygonTesselator({polygons});
      tesselator._updatePositions({fp64: true});
    })
    .add('polygonTesselator.updatePositions#extruded - fp64', () => {
      const tesselator = new PolygonTesselator({polygons});
      tesselator._updatePositions({extruded: true, fp64: true});
    });
}
