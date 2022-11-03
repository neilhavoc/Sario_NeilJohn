<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"><b-button v-b-toggle.sidebar-backdrop class="btn btn-success">Atreides University</b-button></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>ADMINISTRATOR</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#index.vue"><NuxtLink class="btn btn-success w-100" to="~/pages/index">Sign Out</NuxtLink></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    
    <b-sidebar
      id="sidebar-backdrop"
      title="Home"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="#link-1" @click="hide">Home</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Dashboard</b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
   
  </div>
</template>

<script>

</script>