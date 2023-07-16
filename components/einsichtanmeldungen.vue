<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:flex-row justify-center w-4/5">
      <div class="flex flex-col  justify-center">
        <div class="text-center self-center text-gray-300 py-10">
          <h2 class="break-words">
            Meldet manuell jemanden zur Erstifahrt an.
          </h2>
        </div>
        <div class="flex self-center">
          <form
            @submit.prevent="saveData"
            class="bg-gradient-to-r from-blue-300/70 to-blue-500/70 shadow-inner border-4 font-semibold text-gray-300 border-fh-blue rounded-lg flex flex-col p-6 mt-4 text-sm md:text-base"
          >
            <label class="font-semibold" for="vorname">Vorname:</label>
            <input
              class="py-2 px-4 mt-2 rounded border border-gray-300 text-black focus:border-blue-500 focus:outline-none"
              type="text"
              id="vorname"
              v-model="vorname"
              required
              placeholder="Vorname"
            />
            <label class="mt-4" for="nachname"
              >Nachname:</label
            >
            <input
              class="py-2 px-4 mt-2 rounded border border-gray-300 text-black focus:border-blue-500 focus:outline-none"
              id="nachname"
              v-model="nachname"
              required
              placeholder="Nachname"
            />
            <label class="mt-4" for="matrikelnummer"
              >Matrikelnummer:</label
            >
            <input
              class="py-2 px-4 mt-2 rounded border border-gray-300 text-black focus:border-blue-500 focus:outline-none"
              id="matrikelnummer"
              required
              maxlength="6"
              v-model="matrikelnummer"
              placeholder="Matrikelnummer"
            />
            <label class="mt-4" for="checkbox">Bezahlt</label>
            <input
              type="checkbox"
              id="checkbox"
              v-model="checked"
            />

            <button
              class="py-2 px-4 mt-4 bg-blue-700 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="submit"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col self-center lg:text-base text-sm text-gray-300">
        <h2 class="py-10 text-center">Bisherige Anmeldungen zur Erstifahrt</h2>
        <ul
          class="bg-gradient-to-r from-blue-300/70 to-blue-500/70 border-4 border-fh-blue rounded-lg lg:px-5 divide-y-2 divide-dashed"
        >
          <li
            class="break-words py-3 px-1 lg:px-5 text-sm lg:text-base"
            v-for="studi in studis"
            :key="studi.id"
          >
            <b>Name:</b> {{ studi.vorname }} {{ studi.nachname }} <br />
            <b>Matrikelnummer:</b> {{ studi.matrikelnummer }} <br />
            <label for="checkbox">Bezahlt</label>
            <input
              type="checkbox"
              :id="'checkbox-' + studi.id"
              v-model="studi.checked"
              @change="updateCheckedStatus(studi)"
            />
            <div class="flex place-items-end content-center">
              <label for="loeschen">Löschen</label>
              <button id="loeschen" class=" text-xl text-red-700" @click="deleteStudi(studi.id)">
                <b-icon icon="X"></b-icon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
export default {
  data() {
    return {
      studis: [],
      vorname: "",
      nachname: "",
      matrikelnummer: "",
      checked: false,
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const snapshot = await db.collection("erstifahrtAnmeldungen").get();
      const studis = [];
      snapshot.forEach((doc) => {
        studis.push({
          id: doc.id,
          vorname: doc.data().vorname,
          nachname: doc.data().nachname,
          matrikelnummer: doc.data().matrikelnummer,
          checked: doc.data().checked || false,
        });
      });
      this.studis = studis;
    },
    async saveData() {
      const data = {
        vorname: this.vorname,
        nachname: this.nachname,
        matrikelnummer: this.matrikelnummer,
        checked: this.checked
      };
      await db.collection("erstifahrtAnmeldungen").add(data);
      this.vorname = "";
      this.nachname = "";
      this.matrikelnummer = "";
      this.checked = false;
      this.fetchData();
    },

    async updateCheckedStatus(studi) {
      await db.collection("erstifahrtAnmeldungen").doc(studi.id).update({
        checked: studi.checked,
      });
    },
    async deleteStudi(id) {
      await db.collection("erstifahrtAnmeldungen").doc(id).delete();
      this.fetchData(); // Aktualisieren der Daten nach der Löschung
    },
  },
};
</script>
