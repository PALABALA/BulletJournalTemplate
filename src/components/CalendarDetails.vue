<template>
    <table>
			<tr v-for='(calendarDailyDate, index) in calendarDailyDates' :key='index'>
				<td>{{ calendarDailyDate }}</td>
				<td>6:00am - Gym</td>
			</tr>
    </table>
</template>

<script>
import { getDoubleDigitNumberString, dayShortNames } from '../date-helpers.js';

export default {
	name: 'CalendarDetails',
  props: {
    date: Date
  },
	computed: {
		calendarDailyDates: function() {
			const dailyDates = [];
			for (let i = 0; i < 7; ++i) {
				const currentDate = new Date(this.date);
				currentDate.setDate(currentDate.getDate() + i);
				dailyDates.push(`${getDoubleDigitNumberString(currentDate.getDate())} ${dayShortNames[currentDate.getDay()]}`);
			}
			return dailyDates;
		}
	}
}
</script>

<style scoped>
table
{
  font-size: 18px;
}
</style>
