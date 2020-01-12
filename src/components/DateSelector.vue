<template>
  <div>
    <p>Local Date (mm/dd/yyyy):</p>
    <DatePicker :value='date' @selected='onDateSelected' ></DatePicker>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

export default {
  name: 'DateSelector',
  props: {
    date: Date
  },
  methods: {
    onDateSelected(newDate) {
      this.$emit('dateChanged', newDate);
    }
  },
  components: {
    DatePicker,
  }
};
</script>
