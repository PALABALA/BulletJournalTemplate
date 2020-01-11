<template>
  <div id="app">
    <Title msg="Bullet Journal Template"/>
    <DateSelector />
    <br /><br /><hr /><br /><br />
    <Tags logType='Weekly Log' month='January' :year=2020 />
  </div>
</template>

<script>
import Title from './components/Title.vue';
import DateSelector from './components/DateSelector.vue';
import Tags from './components/Tags.vue';

export default {
  name: 'app',
  components: {
    Title,
    DateSelector,
    Tags
  }
};
</script>

<style>
#app {
  font-family: 'Helvetica Neue';
}
</style>
