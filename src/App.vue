<template>
  <div id="app">
    <Navigation />  
    <HomeBackground />
    

    <transition name="fade"  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <router-view></router-view>
    </transition>
   
     <Footer/>
  

  </div>

 
</template>

<script>
import Navigation from './components/Navigation';
import HomeBackground from './components/HomeBackground';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';
export default {
  name: 'App',
  components:{
    Navigation,
    HomeBackground,
    HomeBody,
    Footer
  },
  data () {
      return {
      
      }
    },

    methods :{
    },  
}
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
</style>
