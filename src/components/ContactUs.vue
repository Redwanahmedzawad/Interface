<template>
  <div class="contact-us-container">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" class="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="message" class="alert alert-success mt-3">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      message: ''
    };
  },
  methods: {
    submitForm() {
      
      this.message = 'Thank you for contacting us, ' + this.form.name + '! We will get back to you shortly.';
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-us-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
}

.alert-success {
  padding: 15px;
  font-size: 16px;
  border: 1px solid #d4edda;
  border-radius: 5px;
  background-color: #d4edda;
  color: #155724;
}
</style>
