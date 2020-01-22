<template>
  <div>
    <form class="" action="index.html" method="post">

      <label for="name" :name="name" >Name</label>
      <input class="input" type="text" name="name" value="">

      <label for="email" :email="email" >Email</label>
      <input class="input" type="text" name="name" value="">

      <label for="">Arrival Date</label>
      <input class="input" :startDate="startDate" type="date" name="" value="">

      <label for="">Departure Date</label>
      <input class="input" :endDate="endDate" type="date" name="" value="">

      <input class="input" type="submit" v-on:click="createBooking" name="" value="Create Booking">

    </form>
  </div>
</template>

<script>

import BookingsServices from '../services/BookingsServices.js'

export default {
  name: "customer-form",
  data() {
    return {
      name: "",
      email: "",
      startDate: null,
      endDate: null
    }
  },
  methods: {
    createBooking(evt) {
      evt.preventDefault(); // Stopping the refresh happen by default
      const payload  = {
        name: this.name,
        email: this.email,
        startDate: this.startDate,
        endDate: this.endDate
      };
      BookingsServices.postBooking(payload)
      .then( res => { eventBus.$emit('booking-added', res);
    })
  }
}

}

</script>

<style scoped>

.input{
  margin-right:20px;
}

</style>
