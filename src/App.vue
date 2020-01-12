<template>
  <div id="app">
    <Title msg="Bullet Journal Template"/>
    <hr />
    <DateSelector :date='state.date' @dateChanged='onDateChanged' />
    <hr /><br /><br />
    <Tags logType='Weekly Log' :month='month' :year='year' />
    <LogTitle :month='monthNumberedString' :weekOfMonth='weekOfMonth' logOrder='01' logName='Weekly' :firstDayOfWeekDate='firstDayOfWeekDate' :lastDayOfWeekDate='lastDayOfWeekDate' :year='year' />
    <div class='weeklyLogSubTitle'>Tasks</div>
    <hr /><br /><br />
    <div class='weeklyLogSubTitle'>Tracker</div>
    <hr />
    <div id='trackerDays'>M T W T F S S</div>
    <br /><br />
    <div class='weeklyLogSubTitle'>Calendar</div>
    <hr />
    <CalendarDetails :date='state.date' />
    <br /><br /><hr /><br /><br />
    <Tags logType='Daily Log' :month='month' :year='year' />
    <LogTitle :month='monthNumberedString' :weekOfMonth='weekOfMonth' logOrder='02' logName='Daily' :firstDayOfWeekDate='firstDayOfWeekDate' :lastDayOfWeekDate='lastDayOfWeekDate' :year='year' />
    <DailyLog :date='state.date' />
    <br /><br /><hr /><br /><br />
  </div>
</template>

<script>
import { monthNames, getWeekOfMonth, getDoubleDigitNumberString, getMonthNumberedString } from './date-helpers.js';
import Title from './components/Title.vue';
import DateSelector from './components/DateSelector.vue';
import Tags from './components/Tags.vue';
import LogTitle from './components/LogTitle.vue';
import CalendarDetails from './components/CalendarDetails.vue';
import DailyLog from './components/DailyLog.vue';

const store = {
  state: {
    date: new Date()
  },
  setDate(date) {
    this.state.date = date;
  }
}

export default {
  name: 'app',
  data() {
    return {
      monthNames: monthNames,
      state: store.state
    };
  },
  methods: {
    onDateChanged(newDate) {
      // eslint-disable-next-line no-console
      console.log(newDate.toString());
      store.setDate(newDate);
    }
  },
  components: {
    Title,
    DateSelector,
    Tags,
    LogTitle,
    CalendarDetails,
    DailyLog
  },
  computed: {
    year: function() {
      return this.state.date.getFullYear();
    },
    month: function() {
      return monthNames[this.state.date.getMonth()];
    },
    monthNumberedString: function() {
      return getMonthNumberedString(this.state.date);
    },
    weekOfMonth: function() {
      return getWeekOfMonth(this.state.date);
    },
    firstDayOfWeekDate: function() {
      return `${getMonthNumberedString(this.state.date)}/${getDoubleDigitNumberString(this.state.date.getDate())}`
    },
    lastDayOfWeekDate: function() {
      const lastDayOfWeek = new Date(this.state.date);
      lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
      return `${getMonthNumberedString(lastDayOfWeek)}/${getDoubleDigitNumberString(lastDayOfWeek.getDate())}`;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Helvetica Neue';
}
.weeklyLogSubTitle {
  font-size: 24px;
  font-weight: bold;
}
#trackerDays {
  font-size: 18px;
  word-spacing: 5px;
}
</style>
