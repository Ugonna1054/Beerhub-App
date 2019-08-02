<template>
    <div>
        <mdb-container class="bg-muted">
            <div class="h3 font-weight-bold text-primary text-center mb-3 mt-5 py-3">MY FAVOURITES</div>
            <mdb-row>
                <mdb-col v-for="(item, index) in favourites " :key='index' class="mb-3 px-3 col-md-6 text-center h3 text-primary ">
                 <mdb-card class="card">
                    <mdb-card-title class="text-center btn text-primary  font-weight-bold ">{{item.item.name}} </mdb-card-title>
                    <div hover class="text-center">
                        <a href="#!">
                            <i class = 'fa fa-star text-primary largex ml-3 mt-n5'> </i>
                            <i class = 'fa fa-trash text-danger large mr-3  mt-n5' @click="del(item.item.docId)"> </i>
                            <img :src='item.item.image_url' class="img-fluid mt-3" alt="Card image cap"> 
                        </a>
                    </div>
                   
                    <div class="btn text-white bg-primary" @click="detailss(item.item)" >More Details</div>
                   
                </mdb-card>
                </mdb-col>
            </mdb-row>

            <mdb-row>
                <i class="fas fa-home mt-4 px-2 ml-3 text-white"></i>
                <router-link class="btn bg-info text-white mb-3" to="/home"><span class="font-weight-bold px-3"> GO Home</span></router-link>
            </mdb-row>
            
        </mdb-container>
            

    </div>
</template>

<script>
import {mdbContainer, mdbCol, mdbRow, mdbCard, mdbCardTitle, mdbCardBody, mdbCardText} from 'mdbvue';
export default {
 name:'favourites',
 components:{
     mdbContainer,
     mdbCol,
     mdbRow,
     mdbCardTitle,
     mdbCardBody,
     mdbCardText,
     mdbCard
 },
 
 computed : {
     favourites () {
        return this.$store.state.favorites;
     }
 },

 methods : {
     del (item) {
         console.log('deleted');
         this.$store.dispatch('delFavorites', item)
     },
     detailss (item) {
        console.log('details success');
        this.$store.dispatch('beerDetails', item)
        
    }
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
    float:left;
    font-size: 25px;
    cursor: hand;
    color:grey
}
.fa-trash{
    float:right;
    font-size: 25px;
    cursor: hand;
    
} 


.fa-home {
    font-size:19.5px;
    margin-left: 10px;
    position: absolute;
}

.btn{
    font-size:20px
}




.card{
    background: rgb(235, 228, 228)
}
.bg-muted{
    background: #eee;
    border-radius: 7px
}


</style>
