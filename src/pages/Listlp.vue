<template>
  <q-page padding>
    <!-- First line -->
    <div class="rown">
    <h6>Verfahren auswählen</h6>
    </div>

    <!-- Second line -->
    <div class="rown">
    <q-btn class="nfbutton" color="primary" label="Neues Verfahren"/>
    </div>
<table>
<tr>
    <th>Kläger</th>
    <th>Beklagter</th>
    <th>Streitsache</th>
    <th>Status</th>
    <th>Aktion</th>
</tr>
<tr>
    <td>Immohigh GmbH</td>
    <td>Michael Müller</td>
    <td>§2 BetrKV</td>
    <td>In Bearbeitung</td>
    <td><q-btn @click="openItem()" class="obutton" color="secondary" label="Öffnen"/></td>
</tr>
<tr>
    <td>Anna Musterfrau</td>
    <td>Land & Stadt AG</td>
    <td>§2 BetrKV</td>
    <td>Abgeschlossen</td>
    <td><q-btn class="obutton" color="secondary" label="Öffnen"/></td>
</tr>
<tr>
    <td>Otto Mustermann</td>
    <td>Sebastian Schmitt</td>
    <td>§2 BetrKV</td>
    <td>Neu</td>
    <td><q-btn class="obutton" color="secondary" label="Öffnen"/></td>
</tr>
</table>
    </q-page>
</template>

<style>
table {
    width: 80%;
    margin: 20px;
    padding: 5px;
}
table,th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
q-btn{
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
.rown{
  margin: 20px;
  padding: 5px;
}

.nfbutton{
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 150px;
}

.obutton{
  padding: 14px 20px;
  margin: 8px 0;
  width: 100%;
}

</style>

<script>
export default {
  name: 'Listlp',
  methods: {
    openItem () {
      this.$router.push('/itemlp/ubersicht')
    }
  }
}
</script>
