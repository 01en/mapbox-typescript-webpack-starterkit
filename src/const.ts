import mapboxgl from "mapbox-gl";

export namespace MapConst {
  export const ACCESS_TOKEN = 'SET YOUR ACCESSTOKEN HERE!!!!'
  export const POINT_TOKYO_STATION = new mapboxgl.LngLat(139.767125, 35.681236);

  // Maps service | API | Mapbox - https://docs.mapbox.com/api/maps/#styles
  export namespace StyleId {
    export const STREET = 'mapbox://styles/mapbox/streets-v9';
    export const DARK = 'mapbox://styles/mapbox/dark-v10';
    export const LIGHT = 'mapbox://styles/mapbox/light-v10';
  }
}
