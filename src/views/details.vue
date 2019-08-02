<template>
    <mdb-container class="mdb-container">
        
        <i class="fas fa-angle-double-left mt-4 px-2 ml-3 text-white "></i>
        <div class="btn bg-info text-white mb-3"  @click="clearDetails"><span class="font-weight-bold btnn px-3"> Back</span></div>
    <mdb-row class="">
        
        <mdb-col class="col-md-10 col-sm-12 col-6" >
		<h4 class="text-center font-weight-bold mb-3">{{beerDetails.name}}</h4>
                <section>
                    <mdb-tbl bordered striped>
                        <mdb-tbl-head color="primary-color" textWhite>
                            <tr >
                                <th class="font-weight-bold">S/N</th>
                                <th class="font-weight-bold">PROPERTIES</th>
                                <th class="font-weight-bold">VALUE</th>
                                
                            </tr>
                        </mdb-tbl-head>
                        <mdb-tbl-body>
                            <tr scope="row">
                                <td>1</td>
                                <td class="font-weight-bold">ID</td>
                                <td> {{beerDetails.id}}</td>
                                
                            </tr>
                            <tr scope="row">
                                <td>2</td>
                                <td class="font-weight-bold">Name</td>
                                <td>{{beerDetails.name}} </td>
                               
                            </tr>
                            <tr scope="row">
                                <td>3</td>
                                <td class="font-weight-bold">Tagline</td>
                                <td>{{beerDetails.tagline}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>4</td>
                                <td class="font-weight-bold">Description</td>
                                <td>{{beerDetails.description}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>5</td>
                                <td class="font-weight-bold">First_brewed</td>
                                <td>{{beerDetails.first_brewed}}</td>
                               
                            <tr scope="row">
                                <td>6</td>
                                <td class="font-weight-bold">Image_url</td>
                                <td>{{beerDetails.image_url}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>7</td>
                                <td class="font-weight-bold">Ph</td>
                                <td>{{beerDetails.ph}}</td>
                               
                            </tr>
                        
                            <tr scope="row">
                                <td>8</td>
                                <td class="font-weight-bold">Abv</td>
                                <td>{{beerDetails.abv}}</td>
                                
                            </tr>
                            <tr scope="row">
                                <td>9</td>
                                <td class="font-weight-bold">Ibu</td>
                                <td>{{beerDetails.ibu}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>10</td>
                                <td class="font-weight-bold">Ingredients</td>
                                <td>
                                   <span class="font-weight-bold">Malt</span> 
                                        <ul>
                                            <li v-for="(item, index) in beerDetails.ingredients.malt" :key="index" >
                                                {{item.name}}
                                            </li>
                                        </ul>
                                  <span class="font-weight-bold">Hops</span> 
                                        <ul>
                                            <li v-for="(item, index) in beerDetails.ingredients.hops" :key="index" >
                                                {{item.name}}
                                            </li>
                                        </ul>
                                   <span class="font-weight-bold">Yeast</span> 
                                        <ul>
                                            <li>
                                                {{beerDetails.ingredients.yeast}}
                                            </li>  
                                        </ul>
                                </td>
                               
                            </tr>
                            <tr scope="row">
                            <td>11</td>
                                <td class="font-weight-bold">Attenuation level</td>
                                <td>{{beerDetails.attenuation_level}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>12</td>
                                <td class="font-weight-bold">Volume</td>
                                <td>{{beerDetails.volume.value}} {{beerDetails.volume.unit}}</td>
                               
                            </tr>
                            <tr scope="row">
                                <td>13</td>
                                <td class="font-weight-bold">Best taken with</td>
                                <td>
                                     <ul  v-for="(item, index) in beerDetails.food_pairing" :key="index">
                                       <li>
                                           {{item}}
                                       </li>
                                     </ul>
                                </td>
                             
                            </tr>
                        </mdb-tbl-body>
                    </mdb-tbl>
                </section>
        </mdb-col>

        <mdb-col class="col-md-2 col-12 mb-3">
                
                <img :src="beerDetails.image_url" class="imgg-fluid mt-5 mx-md-0 mx-lg-3 mx-xl-5 ml-5 " alt="Card image cap"> 
                <img :src="beerDetails.image_url" class="imgg-fluid mt-5 mx-md-0 mx-lg-3 mx-xl-5 ml-5" alt="Card image cap"> 
                <img :src="beerDetails.image_url" class="imgg-fluid mt-5 mx-md-0 mx-lg-3 mx-xl-5 ml-5" alt="Card image cap"> 
               
        </mdb-col>
	</mdb-row>
     <i class="fas fa-angle-double-left mt-4 px-2 ml-3 text-white "></i>
     <div class="btn bg-info  text-white mb-3" @click="clearDetails"><span class="font-weight-bold btnn px-3"> Back</span> </div>
    </mdb-container>
    
</template>

<script>
import {mdbContainer, mdbCol, mdbRow, mdbCard, mdbCardTitle, mdbCardBody, mdbCardText, mdbTbl, mdbTblHead, mdbTblBody} from 'mdbvue';
export default {
name:'details',
 components:{
     mdbContainer,
     mdbCol,
     mdbRow,
     mdbCardTitle,
     mdbCardBody,
     mdbCardText,
     mdbCard,
     mdbTbl,
     mdbTblHead, 
     mdbTblBody
},
 computed : {
    beerDetails () {
       return this.$store.getters.beerDetails;
 }
 },
 methods: {
     clearDetails () {
         this.$router.go(-1)
   } 
 }
}
</script>

<style>
.imgg-fluid{

    height: 35vh;
    width: auto;
    left:10vw
    
}

.fa-angle-double-left {
    font-size:19.5px;
    margin-left: 10px;
    position: absolute;
}
.btnn{
    font-size:20px
}

.mdb-container {
    max-width: 100%;
}

</style>
