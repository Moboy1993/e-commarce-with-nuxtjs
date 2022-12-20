<template>
  <div>
    <UnregisteredUserNavbar/>
    <nuxt />
    <TheFooter/>
  </div>
</template>

<script>
import UnregisteredUserNavbar from '../components/UnregisteredUserNavbar.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
components:{
  UnregisteredUserNavbar,
  TheFooter
}

}
</script>

<style>

</style>
