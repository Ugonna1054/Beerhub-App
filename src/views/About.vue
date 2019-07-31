<template>
  <div class="about">
    <h1>This is an about page</h1>

    <mdb-container>
      <mdb-row>
        <mdb-col class="col-md-6">
          xdjcjj
        </mdb-col>
       <mdb-badge>read</mdb-badge>
         <mdb-col color=primary-color >
           jdjdjdj
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol, mdbBadge} from 'mdbvue';
export default {
  name:'about',
  components:{
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBadge
  }
}
</script>
