<template>

    <section class="Form my-4 mx-5">
      <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-5">
                <img src="imgs/LogoAtreides.png" class="img-fluid" alt="">
            </div>
            <div class="col-lg-7 px-5 pt-5">
                <h1 class="font-weight-bold py-3">House Atreides University</h1>
                <h4>Sign in to your Account</h4>
                <form>
                  <div class="form-row">
                    <div class="col-lg-7">
                    
                    <input class="form-control my-3 p-4" v-model="Email" id="Email" type="email" placeholder="Email Address/Username" name="email" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-7">
                      <input class="form-control my-3 p-4"  v-model="Password" id="Password" type="password" placeholder="Password" name="password" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-7">
                      <NuxtLink id="Login"  class="btn btn-success w-100" to="/Home">Login</NuxtLink>
                    </div>
                  </div>
                  <a href="#">Forgot password</a>
                  <p>Don't have an Account? <NuxtLink to="/index">Register Here</NuxtLink></p>
                </form>
            </div>
          </div>
      </div>
    </section>

</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      Username: "",
      Password: ""
    }
  }
}
</script>