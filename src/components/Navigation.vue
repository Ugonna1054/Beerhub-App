<template>
    <div class='nav mb-5'>
      <mdb-navbar id="main-navbar" dark position="top"  scrolling :scrollingOffset="20" class="navbar">
          <mdb-navbar-brand waves class="font-weight-bold" to ='/home'>
            <span>BEER HUB</span>
          </mdb-navbar-brand>
          <mdb-navbar-toggler >
            <mdb-navbar-nav right class="nav-container">
            
              <mdb-nav-item to="/home" flat ><strong>Home</strong></mdb-nav-item>
            
              <mdb-nav-item to="/signin" v-if='!isAuthenticated'><strong>Sign-In</strong></mdb-nav-item>
              <mdb-nav-item  v-if='!isAuthenticated' to='/signup' class="signup ml-lg-4 "><strong>Sign-Up</strong></mdb-nav-item>
            
                  
              <mdb-nav-item to="/favourites" v-if='isAuthenticated' ><strong>Favourites </strong></mdb-nav-item>
              <mdb-nav-item v-if='isAuthenticated' @click="userSignOut" class="ml-lg-3 "><strong>Sign-Out</strong></mdb-nav-item>
        
            
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
     </mdb-navbar>
    </div>
</template>

<script>
import{mdbNavbar, mdbNavItem, mdbNavbarNav, mdbBtn, mdbNavbarToggler, mdbNavbarBrand, mdbFooter} from 'mdbvue'
export default {
    name:'Navigation',
    components : {
    mdbNavbar,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand, 
    mdbFooter
    },

    data () {
        return {
        }
    },

    computed : {
      isAuthenticated () {
        return this.$store.state.isAuthenticated;
      }
    },

    methods : {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    }
   
}
</script>

<style scoped>
 .active{
  background-color: rgba(255, 255, 255, 0.1);
}

.signup{
    /* border: 2px solid black; */
    background-color: darkgrey;
    border-radius: 10px
}
 
.navbar {
    background:rgba(3, 0, 182, 1)
}

</style>
