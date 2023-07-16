<template>
    <div class="flex flex-col justify-center py-3 lg:py-5">
        <div class="flex flex-col self-center lg:grid lg:grid-cols-9 w-1/2">
          <h3 class="flex text-center flex-col justify-center lg:col-start-3 lg:col-span-5" >Meldet euch hier für die Ersti-Fahrt an.<br/>
          Gebt einfach Name, Vorname und Matrikelnummer an und ihr seid dabei.</h3>
            <form @submit.prevent="saveData" class=" bg-blue-400 shadow border-1 border-fh-blue rounded-lg article-form flex flex-col justify-center lg:col-start-4 lg:col-span-3 p-2 mt-3 " >
                <label class="" for="vorname">Vorname:</label>
                <input type="text" id="vorname" v-model="vorname" placeholder="Vorname">
                <label class="mt-4" for="nachname">Nachname:</label>
                <input id="nachname" v-model="nachname" placeholder="Nachname">
                <label class="mt-4" for="matrikelnummer">Matrikelnummer:</label>
                <input id="matrikelnummer" maxlength="6" v-model="matrikelnummer" placeholder="Matrikelnummer">
                <button class="shadow mt-4 bg-blue-700 text-white hover:bg-blue-300" type="submit">Anmelden</button>
            </form>
        </div>
        <div class="flex text-center justify-center text-sm mt-3">
          <p>Die Teilnahmegebühr für die Erstifahrt beträgt: <em>15€</em>. Nach erfolgreicher Anmeldung überweisen Sie bitte diesen Betrag an die: <br/> 
          <ul>
            <li>Fördesparkasse</li>
            <li>IBAN: DE56 1111 1111 1111 1111 11</li>
            <li>Verwendungszweck: "Matrikelnummer, Erstifahrt 23"</li>
          </ul></p>
        </div>

    </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
export default {
data() {
  return {
    vorname: '',
    nachname: '',
    matrikelnummer: '',
  } 
},
methods: {
  async saveData() {
    const data = {
        vorname: this.vorname,
        nachname: this.nachname,
        matrikelnummer: this.matrikelnummer
    }
    await db.collection('erstifahrtAnmeldungen').add(data)
    this.vorname = ''
    this.nachname = ''
    this.matrikelnummer = ''
  }
}
}
</script>