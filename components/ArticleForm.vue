<template>
    <div class="flex flex-col justify-center py-3 lg:py-5">
        <div class="flex flex-col self-center lg:grid lg:grid-cols-9 w-1/2">
          <h3 class="flex text-center flex-col justify-center lg:col-start-3 lg:col-span-5" >Schreibt Artikel, welche auf der Homepage erscheinen:</h3>
            <form @submit.prevent="saveData" class=" bg-blue-400 shadow border-1 border-fh-blue rounded-lg article-form flex flex-col justify-center lg:col-start-2 lg:col-span-7 p-2 mt-3 " >
                <label class="" for="title">Titel:</label>
                <input type="text" id="title" v-model="title" placeholder="Titel">
                <label class="mt-4" for="content">Inhalt:</label>
                <textarea id="content" v-model="content" placeholder="Inhalt"></textarea>
                <button class="shadow mt-4 bg-blue-700 text-white hover:bg-blue-300" type="submit">Veröffentlichen</button>
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
  }
}
}
</script>