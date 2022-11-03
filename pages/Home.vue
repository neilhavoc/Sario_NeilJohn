<template>
  <body>
    <MyNavbar/>
    <section class="Form my-4 mx-5">
    <div class="container">
     <br>
    <div class="form-inline" action="#">
    <input type="text" id="form-name" v-model="item.name" placeholder="Name" class="form-control">
    <input type="text" v-model="item.badgeID" placeholder="Badge ID" class="form-control" v-on:keyup.enter="addItem">
    <input type="text" v-model="item.desc" placeholder="Designation" class="form-control" v-on:keyup.enter="addItem">
    <button @click="addItem" class="btn btn-dark"><i>ADD</i></button>
    </div>
      
    <br><br>
    <table class="table table-striped table-bordered table-sm">
      <thead class="thead-light">
        <th>Name</th>
        <th>Badge ID</th>
        <th>Designation</th>
        <th class="col-2">Edit/Del</th>
      </thead>
      <tr v-for="item in items" :key="item.name">
        <td>
          <input v-if="item.edit" type="text" v-model="item.name"  v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.name}} </span>
        </td>
        <td>
          <input v-if="item.edit" type="text" v-model="item.badgeID" v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.badgeID}} </span>
        </td>
        <td>
          <input v-if="item.edit" type="text" v-model="item.desc" v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.desc}} </span>
        </td>
        <td><button @click="item.edit = !item.edit" class="btn btn-info">EDIT</button>
          <button @click="removeItem(index)" class="btn btn-danger">DELETE</button></td>
      </tr>
    </table>
    </div>
    </section>
  </body>
</template>

<script>
import MyNavbar from "~/components/MyNavBar.vue"
  export default {
    components: {
      MyNavbar,
     
    },
    data() {
    return {
      item: {name: "", badgeID:"", desc: "", edit: false},
      items: []
    }
  },
  methods:{
    addItem() {
      this.items.push({
        name:this.item.name, badgeID:this.item.badgeID, desc:this.item.desc, edit: false}
        );
      this.item = [];
      // eslint-disable-next-line no-undef
     // ('#form-name').focus();
    },
    removeItem(index){
      this.items.splice(index, 1)
    }
  }
  }
</script>

<style scoped>
.form-inline input {
  margin-right:8px;
}
</style>