<template>
  <div class="flex pb-3 lg:pb-5 mt-10 text-gray-300 justify-center">
    <div class="flex flex-col text-center w-2/3">
        <h1 class="py-10">Neues aus der Fachschaft:</h1>
        <ul class="border-4 border-fh-blue-text rounded-lg lg:px-5 divide-y-2 divide-dashed backdrop-brightness-120 backdrop-blur bg-blue-400/25">
            <li class=" break-words py-3 px-1 lg:px-5 text-sm lg:text-base" v-for="item in items" :key="item.id">
                <h3>
                  {{ item.title }} <br>
                </h3>
                {{ item.content }}
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