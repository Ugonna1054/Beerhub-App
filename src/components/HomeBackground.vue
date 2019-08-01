<template>
<div>

      <section class='view image mb-3 mt-sm-5'>
          <div class="mask pattern-6 flex-center" >
            <div class="text-white text-center px-4 mt-n5 container">
              
                <h2 class="display-3 mt-5 mb-5 font-bold"><strong>WELCOME TO BEER HUB {{name}}</strong></h2>
                <p class="mx-5 mb-5">Loremm ipsum dolor sit amet, consectetur adipisicing elit. Dolor, consectetur veniam, iste voluptatibus quisquam facere eaque id sit commodi doloremque molestias dolores? Nam dicta doloribus minus veniam placeat dolores sit reprehenderit aliquid soluta qui! Quis blanditiis laboriosam quod eveniet vitae. Mollitia maiores aut pariatur provident laborum libero explicabo magni ipsumm.!
                </p>
                

            </div>
          </div>
      </section>



</div>

</template>

<script>
import {mdbCard, mdbJumbotron,mdbFormInline, mdbBtn , mdbCardTitle, mdbView, mdbMask, mdbIcon} from 'mdbvue'
export default {
    name:'HomeBackground',
    components:{
        mdbCard,
        mdbJumbotron, 
        mdbBtn,
        mdbCardTitle, 
        mdbView,
        mdbMask,
        mdbIcon,
        mdbFormInline

    },
    data () {
      return {
      }
    },
    computed:{
      name () {
         return this.$store.state.name;
      }
    }
}
</script>

<style scoped>
.image{
    background: url('../assets/beer4.jpg') center ;
    background-size:cover;
    min-height:90vh;
  
}

</style>
