<template>
  <q-page padding>
    <!-- First line -->
    <div class="row">
    <h6>Übersichtsblatt</h6>
    </div>

    <!-- Second line -->
    <div class="row">
    <h8>Verfahren: C-2019-1578  Immohigh GmbH gegen Michael Müller</h8>
    </div>
    <div class="row">
    <!-- First column -->
    <div class="col">
<table class="borders">
    <tr>
    <th>Aktenzeichen</th>
    <td>C-2019-1578</td>
    </tr>
    <tr>
    <th>Kläger</th>
    <td>Immohigh GmbH</td>
    </tr>
    <tr>
    <th>Beklagter</th>
    <td>Michael Müller</td>
    </tr>
    <tr>
    <th>Streitsache</th>
    <td>§2 BetrKV</td>
    </tr>
    <tr>
    <th>Streitwert</th>
    <td>5.000€</td>
    </tr>
    <tr>
    <th>Streitige Betriebskostenart</th>
    <td>§ 2 Nr. 10 BetrKV; die Kosten der Gartenpflege</td>
    </tr>
</table>
</div>
<!-- Second column -->
    <div class="col">
        <br>
        <table class="borderless">
        <tr>
        <th>Klage:</th>
        <th>Hochgeladen am</th>
        <th><q-btn class="obutton" color="secondary" label="Anzeigen"/></th>
        </tr>
        </table>
        <h8>Anlagen Kläger:</h8>
        <table>
        <tr>
        <th>Name</th>
        <th>Hochgeladen am</th>
        <th>Aktion</th>
        </tr>
        <tr>
        <td>Mietvertrag</td>
        <td>15.05.19 11:23</td>
        <td><q-btn icon="img:statics/show.jpg"/><q-btn icon="img:statics/delete.jpg"/></td>
        </tr>
        </table>
        <q-btn class="ahbutton" color="secondary" label="Anlage hochladen"/>
        <br>
        <table class="borderless">
        <tr>
        <th>Klageerwiderung:</th>
        <th>Fehlt</th>
        <th><q-btn class="obutton" color="secondary" label="Hochladen"/></th>
        </tr>
        </table>
        <h8>Anlagen Beklagter:</h8>
        <table>
        <tr>
        <th>Name</th>
        <th>Hochgeladen am</th>
        <th>Aktion</th>
        </tr>
        <tr>
        <td>Mietvertrag</td>
        <td>15.05.19 11:23</td>
        <td><q-btn icon="img:statics/show.jpg"/><q-btn icon="img:statics/delete.jpg"/></td>
        </tr>
        </table>
        <q-btn class="ahbutton" color="secondary" label="Anlage hochladen"/>
        <br>
        <q-btn class="longbutton" color="primary" label="Rohfassung des Urteils generieren"/>
   </div>
</div>
    </q-page>
</template>

<style>
.borders {
    width: 80%;
    margin: 10px;
    padding: 5px;
}
th, td {
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
.borderless{
  border: 0;
  width: 80%;
}
.rown{
  margin: 20px;
  padding: 5px;
}

.nfbutton{
  padding: 14px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  width: 150px;
  justify-content: space-between;
}
.longbutton{
  padding: 14px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  width: 500px;
  justify-content: space-between;
}
.ahbutton{
  padding: 5px;
  margin: 5px;
  border: none;
  cursor: pointer;
  width: 200px;
  justify-content: space-between;
}
</style>

<script>
export default {
  name: 'Listlp'
}
</script>
