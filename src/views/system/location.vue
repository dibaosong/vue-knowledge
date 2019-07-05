<template>
  <div id="mapBox" ref="map">
     
  </div>
</template>

<style>
  #mapBox{
    height: 100%;
  }
</style>

<script>
import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this.$nextTick(() => {
        this.cesiumInit();
      })
    },
    methods: {
      cesiumInit(){
        let viewer = new Cesium.Viewer('mapBox');
      }
    }
  };
</script>