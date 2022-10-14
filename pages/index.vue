<template>


  <body>
  


<div class="cnter">

  <div class="login">

        <h1 class="text-center">ENROLLMENT SYSTEM</h1>
       
        <form class="needs-validation">
            <div class="form-group was-validated">
                <label class="form-label" for="email">Email address</label>
                <input class="form-control" type="email" id="email" required>
                <div class="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" id="password" required>
                <div class="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="check">
                 
                <label class="form-check-label" for="check">Remember me
                     
                </label>
            </div>
            <NuxtLink class="btn btn-success w-100" to="/Home">SIGN IN</NuxtLink>
        </form>
    </div>
</div>
  </body>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
