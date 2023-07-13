<template>
    <div class="flex justify-center">
        <div class=" flex flex-col self-center lg:text-base text-sm">
            <h2 class="py-10 text-center">Bisherige Anmeldungen zur Erstifahrt</h2>
            <ul class="border-4 border-fh-blue rounded-lg lg:px-5 divide-y-2 divide-dashed">
                <li class=" break-words py-3 px-1 lg:px-5 text-sm lg:text-base" v-for="studi in studis" :key="studi.id">
                    <b>Name:</b> {{ studi.vorname }} {{ studi.nachname }} <br> <b>Matrikelnummer:</b> {{ studi.matrikelnummer }} <br>
                    <label for="checkbox">Bezahlt</label>
                    <input type="checkbox" id="checkbox" />

                </li>
            </ul>
        </div>

    </div>
</template>



<script>
import { db } from '~/plugins/firebase.js'
export default {
data() {
  return {
    studis: [],
    vorname: '',
    nachname: '',
    matrikelnummer: '',
    checked: false,
  }
},
async created() {
  await this.fetchData()
},
methods: {
  async fetchData() {
    const snapshot = await db.collection('erstifahrtAnmeldungen').get()
    const studis = []
    snapshot.forEach(doc => {
      studis.push({
        id: doc.id,
        vorname: doc.data().vorname,
        nachname: doc.data().nachname,
        matrikelnummer: doc.data().matrikelnummer,
   
      })
    })
    this.studis = studis
    },

}
}
</script>