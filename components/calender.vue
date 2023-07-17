<template>
  <div class="flex flex-col mt-10 justify-center">
    <div class="flex self-center mb-3 text-gray-300">
      <h2>Veranstaltungen</h2>
    </div>
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23039BE5&ctz=Europe%2FBerlin&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=1&showTz=1&showTabs=0&src=ZmFjaHNjaGFmdHdpcnRzY2hhZnRraWVsMUBnbWFpbC5jb20&color=%23039BE5"
      class="w-full h-[600px] hidden md:block md:px-10"
    ></iframe>
    <iframe
      src="https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&mode=AGENDA&showTitle=0&showNav=0&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZmFjaHNjaGFmdHdpcnRzY2hhZnRraWVsMUBnbWFpbC5jb20&color=%23039BE5"
    class="flex w-[200px] h-[300px] md:hidden self-center border rounded bg-blue-500 shadow p-2"
    ></iframe>
  </div>
</template>
