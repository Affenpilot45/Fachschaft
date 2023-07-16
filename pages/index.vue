<template>
  <div class="bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col justify-center font-g">
    <navbar />
    <dropdown />
    <div class="divide-y">
      <Body />
      <ErstifahrtAnmeldung />
      <calender />
      <imagegalery />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>