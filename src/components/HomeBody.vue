<template>
    <mdb-container >

    <div class="container mb-5">
         
          <h1 class="font-weight-bold text-center ">Find Your Beer</h1>
          <div class="input-group md-form form-sm form- pl-0">
              <input class="form-control border-primary my-0 py-1 red-border" @input ='toUpperCase' id='search' v-model='search'  type="text" placeholder="Search for Beer" aria-label="Search" />
              <div class="input-group-append">
                <span class="input-group-text bg-primary lighten-3" id="basic-text1"><i class="fas fa-search text-white" aria-hidden="true"></i></span>
              </div>
          </div>
  
    </div>
           <mdb-row v-if="loading">
               Loading.......
           </mdb-row>
          
        <mdb-row v-else>

             <mdb-col v-for='(item, index) in filtered()' :key='index' md-4 class="col-sm-6 col-md-4 mb-3" >
               <transition enter-active-class="fadeIn">
                <mdb-card class="card">

                    <mdb-card-title class="text-center btn  font-weight-bold ">{{item.name}} </mdb-card-title>
                    <div hover class="text-center">
                        <a href="#!">
                            <i class = 'fa fa-star large mr-3 mt-n5' v-if="isAuthenticated" :class="{active:item.isActive}" @click.once="item.isActive=!item.isActive; addFavorite(item)"> </i>
                            <img :src='item.image_url' class="img-fluid mt-3" alt="Card image cap"> 
                        </a>
                    </div>
                    <mdb-card-body>
                            
                            <mdb-card-text> <span class='font-weight-bold h6'>Description : {{item.description}} </span> </mdb-card-text>
                            <div class="btn text-white bg-primary" @click="detailss(item)" >More Details</div>
                    </mdb-card-body>
                </mdb-card>
               </transition>
             </mdb-col>

               
        </mdb-row>

    </mdb-container>
</template>

<script>
import {animateOnScroll, mdbContainer, mdbRow, mdbMask, mdbCol, mdbCard, mdbCardBody, mdbBtn, mdbCardTitle, mdbCardText, mdbCardImage, mdbView} from 'mdbvue'
export default {
name:'HomeBody',
components:{
    mdbContainer,
    mdbMask,
    mdbRow,
    mdbCol,
    mdbCard, 
    mdbCardBody,
    mdbBtn,
    mdbCardTitle,
    mdbCardText,
    mdbCardImage,
    mdbView

},

data () {
    return {
  search :'',
  loading:true,
    }
},

computed : {
   isAuthenticated () {
       return this.$store.state.isAuthenticated
   }
},

methods :{
    toUpperCase () {
        this.search = this.search.charAt(0).toUpperCase() + this.search.slice(1);
    },

    filtered () {
        if (this.search=='') {
            return  this.$store.getters.beerData;
        }

        else{
            let result = this.$store.getters.beerData;
            let final = result.filter(value=> value.name.indexOf(this.search)==0||value.id==this.search)
            return final
        }
    },
    addFavorite (item) {
        this.$store.dispatch('addFavorites', item);
        console.log('it works');
             
    },
    detailss (item) {
        console.log('details success');
        this.$store.dispatch('beerDetails', item)
        
    }
},

mounted() {
    this.$store.dispatch('getBeerData')
    .then(()=> this.loading=false)
    .catch(()=> this.loading=true)
},

    directives: {
    animateOnScroll
  }
}
</script>

<style scoped>

.img-fluid{

    height: 35vh;
    width: auto;
    left:10vw
    
}
.fa-star{
    float:right;
    font-size: 25px;
    cursor: hand;
    color:grey
}

.btn {
    font-size:18px
}
.active{
    color:blue
}
.card{
    background: rgb(235, 228, 228)
}



</style>
