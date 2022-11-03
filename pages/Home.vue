<template>
  <body>
    <MyNavbar/>
    <section class="Form my-4 mx-5">
    <div class="container">
     <br>
    <div class="form-inline" action="#">
    <input type="text" id="form-name" v-model="record.name" placeholder="Name" class="form-control" required>
    <input type="text" v-model="record.badgeID" placeholder="Badge ID" class="form-control" v-on:keyup.enter="addDATA">
    <input type="text" v-model="record.desc" placeholder="Designation" class="form-control" v-on:keyup.enter="addDATA">
    <button @click="addDATA" class="btn btn-dark">ADD</button>
    </div>
      
    <br><br>
    <table class="table table-striped table-bordered table-sm">
      <thead class="thead-light">
        <th>Name</th>
        <th>Badge ID</th>
        <th>Designation</th>
        <th class="col-2">OPERATIONS</th>
      </thead>
      <tr v-for="record in records" :key="record.name">
        <td>
          <input v-if="record.edit" type="text" v-model="record.name"  v-on:keyup.enter="record.edit = !record.edit">
          <span v-else>{{record.name}} </span>
        </td>
        <td>
          <input v-if="record.edit" type="text" v-model="record.badgeID" v-on:keyup.enter="record.edit = !record.edit">
          <span v-else>{{record.badgeID}} </span>
        </td>
        <td>
          <input v-if="record.edit" type="text" v-model="record.desc" v-on:keyup.enter="record.edit = !record.edit">
          <span v-else>{{record.desc}} </span>
        </td>
        <td><button @click="record.edit = !record.edit" class="btn btn-info">EDIT</button>
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
      record: {
      name: "", 
      badgeID:"", 
      desc: "", 
      edit: false},
      records: []
    }
  },
  methods:{
    addDATA() {
      this.records.push({
        name:this.record.name, 
        badgeID:this.record.badgeID, 
        desc:this.record.desc, 
        edit: false}
        );
      this.record = [];
      
    },
    removeItem(index){
      this.records.splice(index, 1)
      alert(JSON.stringify("Record has been deleted"))
    }
  }
  }
</script>

<style scoped>
.kg {
  background-image: url("~static/imgs/DuneBackground.png");
}
</style>