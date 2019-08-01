<template>

<mdb-container class='float-md-right' id ='signup-container'> 
    <mdb-row>
        <mdb-col md=6>
        </mdb-col>
        <mdb-col md="6">
            <div class = 'card'>
                
                    <div class='text-center card-header h3 text-white bg-info font-weight-bold'>SIGN IN </div>
                    <mdb-card-body>
                    <div class="grey-text">
                        <mdb-input label="Your email"  v-validate="'required|email'" name="email" v-model="email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" v-validate="'min:5'" data-vv-as="field" name="min_field" v-model="password" icon="lock" type="password"/>
                    </div>
                    <div class="text-center">
                        <mdb-btn color="info" class="btn" @click="userSignIn"><span class="login-size"> Login </span></mdb-btn>
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
name:'signin',
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
    return {
        email:'',
        password : ''
    }
}, 

methods : {
    userSignIn () {
        this.$store.dispatch('userSignIn', {
            email:this.email,
            password:this.password
        })
    }
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
    margin-right:10vw
    
} 

</style>
