<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <img src="~assets/watson3.png" style="width:100%">
        <q-input
          v-model="username"
          filled
          type="text"
          label="Username"
        />

        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div>
          <q-btn
            color="primary"
            class="full-width"
            label="Login"
            icon-right="send"
            @click="login()"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    login () {
      if (this.username === 'richter' && this.password === 'watson123') {
        this.$router.push('/listlp')
      } else {
        alert('Invalid username or password')
      }
    }
  }
}
</script>
