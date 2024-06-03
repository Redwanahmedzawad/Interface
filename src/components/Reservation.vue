<template>
  <div class="reservation-container">
    <h2>Book a Table</h2>
    <form @submit.prevent="makeReservation">
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="reservation.date" required />
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="reservation.time" required />
      </div>
      <div class="form-group">
        <label for="partySize">Party Size:</label>
        <input type="number" id="partySize" v-model="reservation.partySize" required />
      </div>
      <button type="submit">Book Now</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReservaTion',
  data() {
    return {
      reservation: {
        date: '',
        time: '',
        partySize: ''
      }
    };
  },
  methods: {
    makeReservation() {
      alert(`Reservation made for ${this.reservation.partySize} on ${this.reservation.date} at ${this.reservation.time}`);
    }
  }
}
</script>

<style scoped>
.reservation-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

form button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>
