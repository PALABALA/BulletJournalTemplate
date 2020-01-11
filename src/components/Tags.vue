<template>
  <div>
    {{ `Tags: Bullet Journal | ${logType} | ${month} | ${year}` }}
  </div>
</template>

<script>
export default {
  props: {
    logType: String,
    month: String,
    year: Number
  }
}
</script>
