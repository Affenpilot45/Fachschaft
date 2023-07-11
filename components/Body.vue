<template>
  <div class="">
      <h2>Hier sind alle aktuellen Artikel:</h2>
      <ul>
          <li v-for="item in items" :key="item.id">
              {{ item.title }} - {{ item.content }}
          </li>
      </ul>
  </div>
</template>
  
  
  <script>
  import { db } from '~/plugins/firebase.js'
  export default {
  data() {
    return {
      items: [],
      title: '',
      content: ''
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const snapshot = await db.collection('meineArtikel').get()
      const items = []
      snapshot.forEach(doc => {
        items.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content
        })
      })
      this.items = items
    },
  }
}
</script>