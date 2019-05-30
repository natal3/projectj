<template>
  <q-page padding>
    <q-btn icon="add" color="primary" label="Neues Verfahren" class="q-mb-lg"/>

    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :loading="loading"
    >
      <q-tr :id="props.row.id" slot="body" slot-scope="props" :props="props">
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.value }}
          <q-btn color="primary" v-if="col.name=='aktion'" @click.native="rowClick(props.row)">Öffnen</q-btn>
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'Listlp',
  data () {
    return {
      loading: true,
      columns: [
        {
          name: 'aktenzeichen',
          required: true,
          label: 'Aktenzeichen',
          align: 'left',
          field: row => row.aktenzeichen,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'klager', align: 'center', label: 'Klägerin', field: 'klager', sortable: true },
        { name: 'beklagter', align: 'center', label: 'Beklagte', field: 'beklagter', sortable: true },
        { name: 'wegen', label: 'Wegen', field: 'wegen', sortable: true },
        { name: 'status', label: 'Status', field: 'status' },
        { name: 'aktion', label: 'Aktion', field: 'aktion' }
      ],
      data: [
        {
          name: '1',
          aktenzeichen: 'C-2019-1578',
          klager: 'Immohigh GmbH',
          beklagter: 'Michael Müller',
          wegen: '§2 BetrKV',
          status: 'In Bearbeitung',
          aktion: ''
        }, {
          name: '2',
          aktenzeichen: 'C-2019-3547',
          klager: 'Anna Musterfrau',
          beklagter: 'Land & Stadt AG',
          wegen: '§2 BetrKV',
          status: 'Abgeschlossen',
          aktion: ''
        }, {
          name: '3',
          aktenzeichen: 'C-2019-2201',
          klager: 'Otto Mustermann',
          beklagter: 'Sebastian Schmitt',
          wegen: '§2 BetrKV',
          status: 'Neu',
          aktion: ''
        }
      ]
    }
  },
  methods: {
    openItem () {
      this.$router.push('/itemlp/ubersicht')
    },
    onRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 5000)
    },
    rowClick (item) {
      console.log(item)
      this.$router.push('/itemlp/ubersicht')
    }
  }
}
</script>
