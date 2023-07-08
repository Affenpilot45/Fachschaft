<template>
    <div class="">
        <form @submit.prevent="saveData" class="article-form flex flex-col">
            <label for="title">Titel:</label>
            <input type="text" id="title" v-model="title">
            <label for="content">Inhalt:</label>
            <textarea id="content" v-model="content"></textarea>
            <button class="w-1/3" type="submit">Speichern</button>
        </form>
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