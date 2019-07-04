<template>
  <div id="cesiumContainer">
        
  </div>
</template>
<style>
  #cesiumContainer{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
<script>
import Cesium from 'cesium/Cesium'
import  'cesium/Widgets/widgets.css'
  export default {
    data() {
      return {

      }
    },
    mounted () {
      console.log('22222')
      let viewer = new Cesium.Viewer('cesiumContainer');
    }
  };
</script>