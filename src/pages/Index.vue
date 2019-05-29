<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <img src="~assets/watson3.png" width='300px'>
        <q-input v-model="username" filled type="text" hint="Username"/>

        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Password with toggle"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
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
  }
}
</script>
