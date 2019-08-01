<template>

<mdb-container class='float-md-right' id='signup-container'> 
    <mdb-row >

        <mdb-col md='6'> 

        </mdb-col>
        <mdb-col md="6" >
            <div class = 'card' >
                    <div class='text-center card-header h3 text-white bg-info font-weight-bold'>SIGN UP </div>
                    <mdb-card-body>
                    <div class="grey-text">
                        <mdb-input label="Your name" v-model="name" icon="user" @input="toUpperCase" type="text"/>
                        <mdb-input label="Your email" v-model="email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" v-model="password" icon="lock" type="password"/>
                        
              
                    </div>
                    <div class="text-center">
                        <mdb-btn color="info" class="btn" @click='userSignUp'><span class="login-size"> Join </span></mdb-btn>
                    </div>
                    </mdb-card-body>   
           </div>
        </mdb-col>
    </mdb-row>  
</mdb-container>

</template>

<script>
import {mdbRow, mdbCol, mdbContainer, mdbBtn, mdbInput, mdbCard, mdbCardBody, mdbCardTitle} from 'mdbvue';

export default {
name:'signup',
components:{
    mdbRow,
    mdbCol,
    mdbInput,
    mdbContainer, 
    mdbBtn,
    mdbCard, 
    mdbCardBody, 
    mdbCardTitle
},
data () {
    return  {
       name:'',
       email:'',
       password:''
    }
},

methods : {
    userSignUp () {
        this.$store.dispatch ('userSignUp', {
            email:this.email,
            password:this.password,
            name:this.name
        })
    },
    toUpperCase () {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
}
}
</script>

<style scoped>
.login-size{
    font-size: 18px

}

#signup-container{
   
    
    position: fixed;
    top:10vh;
    margin-right:15vh
    
}

</style>
