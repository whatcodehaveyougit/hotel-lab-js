<template lang="html">
<div class="booking-item">
  <p>Customer List</p>

  <booking v-for="booking, index in bookings" :key="index"
  :booking="booking" />

</div>
</template>

<script>
import { eventBus } from '../main';
import BookingsServices from '../services/BookingsServices.js'
import Booking from './Booking.vue'

export default {
  name: 'bookings-list',
  data() {
    return {
      bookings: []
    }
  },
  'components': { Booking
  },
  mounted() {
    this.fetchData();
    eventBus.$on('booking-added', booking =>
  this.bookings.push(booking))
},
methods: {
  fetchData(){
    BookingsServices.getBookings()
    .then(bookings => this.bookings = bookings);
  }
}
}

</script>

<style lang="css" scoped>
</style>
