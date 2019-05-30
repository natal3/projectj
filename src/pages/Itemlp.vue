<template>
  <q-page>
      <q-tabs class="bg-primary text-white shadow-2" align="left">
        <q-route-tab
          icon="fast_rewind"
          to="/listlp"
          exact
        />
        <q-route-tab
          icon="apps"
          label="Ubersicht"
          to="/itemlp/ubersicht"
          en="Overview"
          exact
        />
        <q-route-tab
          icon="vertical_align_bottom"
          label="Antrage"
          to="/itemlp/antrage"
          en="Requests"
          exact
        />
        <q-route-tab
          icon="school"
          label="Vortrage"
          to="/itemlp/vortrage"
          en="Pleadings"
          exact
        />
        <q-route-tab
          icon="edit_attributes"
          label="Prufung Attribute"
          to="/itemlp/prufungattribute"
          en="Check Attribute"
          exact
        />
        <q-route-tab
          icon="hearing"
          label="Mundliche Verhandlung"
          to="/itemlp/mundlicheverhandlung"
          en="Oral Hearing"
          exact
        />
        <q-route-tab
          icon="gavel"
          label="Rechtl. Wurdigung"
          to="/itemlp/rechtlwurdigung"
          en="Legal Assessment"
          exact
        />
      </q-tabs>
    <router-view/>
  </q-page>
</template>
