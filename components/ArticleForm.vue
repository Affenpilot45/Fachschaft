<template>
  <div class="flex flex-col justify-center mt-20 mx-24 lg:mx-10">
      <div class="flex flex-col self-center w-full md:w-1/2 text-gray-300">
        <h2 class="flex text-center flex-col justify-center text-ms font-semibold mb-3" >Schreibt Artikel, welche auf der Homepage erscheinen:</h2>
          <form @submit.prevent="saveData" class=" bg-blue-400/25 border-4 border-fh-blue-text backdrop-brightness-125 backdrop-blur rounded-lg flex flex-col justify-center p-6" >
              <label class="text-white font-semibold" for="title">Titel:</label>
              <input class="py-2 px-4 mt-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none" type="text" id="title" v-model="title" placeholder="Titel">
              <label class="mt-4 text-white font-semibold" for="content">Inhalt:</label>
              <textarea class="py-2 px-4 mt-2 h-40 rounded border border-gray-300 focus:border-blue-500 focus:outline-none" id="content" v-model="content" placeholder="Inhalt"></textarea>
              <button class="py-2 px-4 mt-4 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Veröffentlichen</button>
          </form>
      </div>
    </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
export default {
data() {
  return {
    title: '',
    content: ''
  } 
},
methods: {
  async saveData() {
    const data = {
      title: this.title,
      content: this.content
    }
    await db.collection('meineArtikel').add(data)
    this.title = ''
    this.content = ''
    alert("Erfolgreich!")
  }
}
}
</script>