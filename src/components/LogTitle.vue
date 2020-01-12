<template>
  <div class='logTitle'>
    {{ `${month} - Week ${weekOfMonth} - ${logOrder} - ${logName} Log (${firstDayOfWeekDate} - ${lastDayOfWeekDate}) - ${year}` }}
  </div>
</template>

<script>
export default {
  props: {
    month: String,
    weekOfMonth: Number,
    logOrder: String,
    logName: String,
    firstDayOfWeekDate: String,
    lastDayOfWeekDate: String,
    year: Number
  }
}
</script>

<style scoped>
.logTitle {
    font-size: 22px;
    font-weight: bold;
}
</style>
