<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleMenu()"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Justiz Memoria
          <q-badge>{{ this.$route.meta.subtitle }}</q-badge>
        </q-toolbar-title>

        <div>{{ this.$route.meta.desc }}</div>
        <q-btn stretch flat label="Abmelden" v-if="!this.$route.meta.desc" icon-right="logout" @click="logout()"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      description: 'IBM Watson Demo'
      // leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    toggleMenu () {
      // this.leftDrawerOpen = !this.leftDrawerOpen
    },
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
