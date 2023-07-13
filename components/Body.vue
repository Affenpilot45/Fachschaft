<template>
  <div class="grid grid-cols-7 lg:grid-cols-9 pb-3 lg:pb-5">
    <div class="flex flex-col text-center lg:col-start-4 lg:col-span-3 col-start-2 col-span-5">
        <h2 class="py-10">Neues aus der Fachschaft:</h2>
        <ul class="border-4 border-fh-blue rounded-lg lg:px-5 divide-y-2 divide-dashed">
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