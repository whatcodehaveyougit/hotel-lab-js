<template lang="html">

  <ul>
    <li>{{ booking.name }} </li>
    <li>{{ booking.email }}</li>
    <li>{{ booking.startDate }}</li>
    <li>{{ booking.endDate }}</li>
  </ul>

</template>

<script>
import BookingsServices from '../services/BookingsServices';


export default {
  name: 'booking',
  props: ['booking']
}
</script>

<style lang="css" scoped>
</style>
