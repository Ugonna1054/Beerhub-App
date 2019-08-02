<template>

<mdb-container class='float-md-right' id='signup-container'>
    <form @submit.prevent="validateBeforeSubmit">
        <mdb-row >

            <mdb-col md='6'> 

            </mdb-col>
            <mdb-col md="6" >
                <div class = 'card' >
                        <div class='text-center card-header h3 text-white bg-info font-weight-bold'>SIGN UP </div>
                        <mdb-card-body>
                        <div class="grey-text">
                            <mdb-input label="Your Nickname" v-model="name" icon="user" @input="toUpperCase" name="name"  type="text" v-validate="'required|alpha'"/>
                            <i v-show="errors.has('name')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                            <span v-show="errors.has('name')"  class="text-warning">{{ errors.first('name') }}</span>

                            <mdb-input label="Your email" v-model="email" icon="envelope" type="text" name='email' v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"/>
                            <i v-show="errors.has('email')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                            <span v-show="errors.has('email')" class="text-warning">{{ errors.first('email') }}</span>

                            <!--  // Already registered email address -->
                            <mdb-alert color="danger" v-show="isEmailRegistered" @closeAlert="true; retFalse()" dismiss> <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i>The Email address is already in use by another Account! </mdb-alert>
                           
                            <mdb-input label="Your password" v-model="password" icon="lock" type="password"  v-validate="'required|min:7|max:20|'" name="password"/>
                            <i v-show="errors.has('password')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                            <span  class="text-warning">{{ errors.first('password') }}</span>
                
                        </div>
                        <div class="text-center">
                            <mdb-btn color="info" class="btn" @click='userSignUp'><span class="login-size"> Join </span></mdb-btn>
                        </div>
                        </mdb-card-body>   
                </div>
            </mdb-col>
         </mdb-row>
   
    </form>    
</mdb-container>

</template>

<script>
import {mdbRow, mdbCol, mdbContainer, mdbBtn, mdbInput, mdbCard, mdbCardBody, mdbCardTitle, mdbAlert} from 'mdbvue';

export default {
name:'signup',
components:{
    mdbRow,
    mdbAlert,
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

computed : {
    isEmailRegistered () {
        return this.$store.state.isEmailRegistered;
    },
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

     validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          userSignUp()
        }
        else {
            alert('Please Correct the errors!');
        }
       
      });
    },
    
    retFalse () {
      this.$store.commit('setIsEmailRegistered', false); 
    }
  },
  
 created () {
      this.$store.commit('setIsEmailRegistered', false)
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
