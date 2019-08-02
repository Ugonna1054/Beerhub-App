<template>

<mdb-container class='float-md-right' id ='signup-container'> 
    <mdb-row>
        <mdb-col md=6>
        </mdb-col>
        <mdb-col md="6">
            <div class = 'card'>
                <form @submit.prevent="validateBeforeSubmit">
                    <div class='text-center card-header h3 text-white bg-info font-weight-bold'>SIGN IN </div>
                    <mdb-card-body>
                    <div class="grey-text">
                        <mdb-input label="Your email" v-model="email" icon="envelope" type="text" name='email' v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"/>
                        <i v-show="errors.has('email')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                        <span v-show="errors.has('email')" class="text-warning">{{ errors.first('email') }}</span>

                       <!--  // Wrong or Unregistered email address -->
                        <mdb-alert color="danger" v-show="isEmailRegistered" @closeAlert="true; retFalse()" dismiss> <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i>Wrong or Unregistered Email address, Sign-Up First! </mdb-alert>

                        <mdb-input label="Your password" v-model="password" icon="lock" type="password"  v-validate="'required|min:7|max:20|'" name="password"/>
                        <i v-show="errors.has('password')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                        <span class="text-warning">{{ errors.first('password') }}</span>

                        <!-- // Wrong or incorrect password -->
                        <mdb-alert color="danger" v-show="isPasswordCorrect"  @closeAlert="true; retFalse2() " dismiss> <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i> Oopss...You entered the wrong password! </mdb-alert>
                        

                    </div>
                    <div class="text-center">
                        <mdb-btn color="info" class="btn" @click="userSignIn"><span class="login-size"> Login </span></mdb-btn>
                    </div>
                    </mdb-card-body>
                </form>  
                
           </div>
        </mdb-col>
    </mdb-row>  
</mdb-container>
    
</template>


<script>
import {mdbRow, mdbCol, mdbContainer, mdbBtn, mdbInput, mdbCard, mdbCardBody, mdbCardTitle, mdbAlert} from 'mdbvue';

export default {
name:'signin',
components:{
    mdbRow,
    mdbCol,
    mdbAlert,
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
        password : '',
    }
}, 

computed : {
    isEmailRegistered () {
        return this.$store.state.isEmailRegistered;
    },
    
    isPasswordCorrect () {
        return this.$store.state.isPasswordCorrect;
    },
    
},

methods : {
    userSignIn () {
        this.$store.dispatch('userSignIn', {
            email:this.email,
            password:this.password
        })
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          userSignIn()
        }
        else {
            alert('Please Correct the errors!');
        }
       
      });
    },

    retFalse () {
      this.$store.commit('setIsEmailRegistered', false); 
    },
     retFalse2 () {
         this.$store.commit('setIsPasswordCorrect', false);
    }
},

 created () {
      this.$store.commit('setIsEmailRegistered', false);
      this.$store.commit('setIsPasswordCorrect', false)
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
