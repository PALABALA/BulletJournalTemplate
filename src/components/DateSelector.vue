<template>
  <div>
    <p>Local Date (mm/dd/yyyy):</p>
    <DatePicker :value="date"></DatePicker>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

export default {
  name: 'DateSelector',
  data() {
    return {
      date: new Date()
    };
  },
  components: {
    DatePicker,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
