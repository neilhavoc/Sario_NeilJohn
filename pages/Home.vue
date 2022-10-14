<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><b-button v-b-toggle.sidebar-backdrop class="btn btn-success">ENROLLMENT</b-button></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#index.vue">Sign Out</b-dropdown-item>
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
              <b-nav-item href="#link-2" @click="hide">Orders</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Customers</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Foods</b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
    
  </div>
   
</template>
