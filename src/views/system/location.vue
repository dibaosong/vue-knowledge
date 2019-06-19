<template>
  <div id="map" ref="map">
     
  </div>
</template>

<style>
  #map{
    height: 100%;
  }
</style>

<script>
  import esriLoader from 'esri-loader';
  // 加载css
  esriLoader.loadCss ('http://127.0.0.1:8080/4.11/esri/css/main.css');
  // 加载js
  esriLoader.loadScript ({ 
      url: 'http://127.0.0.1:8080/4.11/init.js'
  });
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this.setMap();
    },
    methods: {
      setMap(){
        esriLoader.loadModules([
            "esri/Map",
            "esri/views/SceneView"
        ]).then(([Map, SceneView]) => {
            let map = new Map({
              basemap: "topo-vector",
              ground: "world-elevation"  // show elevation
            });

            let view = new SceneView({
              container: "map",
              map: map,
              camera: {
                position: {  // observation point
                  x: -118.71,
                  y: 33.75,
                  z: 25000 // altitude in meters
                },
                tilt: 65  // perspective in degrees
              }
            });
        }).catch (err => {})
      }
    }
  };
</script>