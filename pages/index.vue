<template>


  <body>
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
                      <input class="form-control my-3 p-4" type="email" placeholder="Email Address" id="email">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-7">
                      <input class="form-control my-3 p-4" type="password" placeholder="Password" id="password">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-7">
                      <NuxtLink class="btn btn-success w-100" to="/Home">Login</NuxtLink>
                    </div>
                  </div>
                  <a href="#">Forgot password</a>
                  <p>Don't have an Account? <a href="#">Register Here</a></p>
                </form>
            </div>
          </div>
      </div>
    </section>



  </body>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
