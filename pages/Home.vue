<template>
  <body>
    <MyNavbar/>
    <RegisterComponent/>
  </body>
</template>

<script>
import MyNavbar from "~/components/MyNavBar.vue"
  export default {
    components: {
      MyNavbar,
    }
  }
</script>

<style scoped>
.kg {
  background-image: url("~static/imgs/DuneBackground.png");
}
</style>