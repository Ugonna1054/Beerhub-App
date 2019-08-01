<template>
<div>
<HomeBody/>
   
</div>
</template>

<script>
import HomeBody from '@/components/HomeBody'
export default {
    name:'home',
    components:{
        HomeBody
    },
    mounted () {
      this.$store.dispatch('getFavorites')
    }
}
</script>

<style>

</style>
