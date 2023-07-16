<template>
  <div class="flex flex-col justify-center py-3 lg:py-5">
      <div class="flex flex-col self-center text-lg">
        <div class="text-center self-center text-gray-300">
          <h3>Meldet euch hier für die Ersti-Fahrt an.<br/>
          Gebt einfach Name, Vorname und Matrikelnummer an und ihr seid dabei.</h3>            
        </div>
        <div class="w-2/3 md:w-1/2 self-center">
          <form @submit.prevent="saveData" class="bg-gradient-to-r from-blue-300 to-blue-500 shadow-inner border border-blue-700 rounded-lg flex flex-col p-6 mt-4 text-sm md:text-base" >
              <label class="text-white font-semibold" for="vorname">Vorname:</label>
              <input class="py-2 px-4 mt-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none" type="text" id="vorname" v-model="vorname" required placeholder="Vorname">
              <label class="mt-4 text-white font-semibold" for="nachname">Nachname:</label>
              <input class="py-2 px-4 mt-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none" id="nachname" v-model="nachname" required placeholder="Nachname">
              <label class="mt-4 text-white font-semibold" for="matrikelnummer">Matrikelnummer:</label>
              <input class="py-2 px-4 mt-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none" id="matrikelnummer" required maxlength="6" v-model="matrikelnummer" placeholder="Matrikelnummer">
              <button class="py-2 px-4 mt-4 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Anmelden</button>
          </form>
        </div>
      </div>
      <div class="flex text-center justify-center text-sm mt-3 text-gray-300">
        <p>Die Teilnahmegebühr für die Erstifahrt beträgt: <em>15€</em>. Nach erfolgreicher Anmeldung überweisen Sie bitte diesen Betrag an die: <br/> 
        <ul class="list-disc list-inside">
          <li>Fachschaft Wirtschaft</li>
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