<template>
	<div>
		<div v-for='(dayTitle, index) in dayTitles' :key='index'>
			<hr />
			<div class='dayTitle'>{{ dayTitle }}</div>
			<br />
		</div>
	</div>
</template>

<script>
import { getMonthNumberedString, getDoubleDigitNumberString, dayNames} from '../date-helpers.js';

export default {
  props: {
    date: Date
  },
  computed: {
		dayTitles: function() {
			const titles = [];
			for (let i = 0; i < 7; ++i) {
				const currentDate = new Date(this.date);
				currentDate.setDate(currentDate.getDate() + i);
				titles.push(`${getMonthNumberedString(currentDate)}/${getDoubleDigitNumberString(currentDate.getDate())}/${currentDate.getFullYear()} - ${dayNames[currentDate.getDay()]}`);
			}
			return titles;
		}
  }
}
</script>

<style scoped>
.dayTitle {
	font-size: 18px;
	font-weight: bold;
}
</style>
