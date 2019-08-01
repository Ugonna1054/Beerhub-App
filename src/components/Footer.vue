<template>
<div>
 
 <mdb-navbar  color=indig class="footer text-white font-weight-bold">
   

   <div class="ml-5">
      Made with <span style="color:red; font-size:18px"> &#10084; </span> by Ugonna &trade;
   </div>


   <div class="float-right">
      <a href="https://github.com/Ugonna1054/Beerhub-App" class="text-white"> See code on  Github <i class="fab fa-github"></i></a>
   </div>
 </mdb-navbar>
</div>
</template>

<script>
import{mdbNavbar, mdbNavItem, mdbNavbarNav, mdbBtn, mdbNavbarToggler, mdbNavbarBrand, mdbFooter} from 'mdbvue'
export default {
    name:'Footer',
   components : {
       mdbNavbar
   }
    
}
</script>

<style scoped>
.footer{
    background:rgba(3, 0, 182, 1);
    display: flex;
    justify-content: space-around

}
</style>
