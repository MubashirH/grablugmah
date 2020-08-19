<template>
<b-container>
  <b-row>
    <b-col md="5" class="form shadow">
      <h3 class="mb-5"><img src="../assets/images/usquyu_white.png" alt="">Grab Lugmah Admin</h3>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label-for="input-1" >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            required
            type="password"
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-col>
    <b-col></b-col>
  </b-row>
</b-container>
</template>

<script>
import '../assets/css/login.scss'
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      form : {
        email: 'admin@gmail.com',
        password: '123456',
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault(),
      axios.post('http://freejapi.ursource.org/v1/api/admin-login',
        { body: this.form }, {'Access-Control-Allow-Origin': '*','Apikey':'X3EG8Q1HPCX1PMV4N3TMMZ27VU7YOOB7','Language':'en'}
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
