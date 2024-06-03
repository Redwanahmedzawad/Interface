<template>
  <div class="container user">
    <h2>User Page</h2>

    <div v-if="!isLoggedIn">
      <h3>Login</h3>
      <input type="text" v-model="loginData.username" placeholder="Username">
      <input type="password" v-model="loginData.password" placeholder="Password">
      <button @click="login">Login</button>
      <p>Don't have an account? <button @click="showSignUp = true">Sign Up</button></p>

      <div v-if="showSignUp">
        <h3>Sign Up</h3>
        <input type="text" v-model="signUpData.username" placeholder="Username">
        <input type="password" v-model="signUpData.password" placeholder="Password">
        <button @click="signUp">Sign Up</button>
      </div>
    </div>

    <div v-else>
      <p>Welcome, {{ username }}!</p>
      <button @click="logout">Logout</button>

      <div>
        <h3>Search</h3>
        <input type="text" v-model="searchTerm" placeholder="Search...">
      </div>

      <div>
        <h3>Filter</h3>
        <select v-model="selectedCategory">
          <option value="">All</option>
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
      </div>

      <div>
        <h3>Add New Item</h3>
        <input v-model="newItem.category" class="form-control mb-2" placeholder="Category">
        <input v-model="newItem.name" class="form-control mb-2" placeholder="Name">
        <input v-model="newItem.description" class="form-control mb-2" placeholder="Description">
        <input v-model="newItem.price" class="form-control mb-2" placeholder="Price">
        <button @click="createItem" class="btn btn-primary">Add</button>
      </div>
      
      <div v-if="currentSelection">
        <h3>Edit Item</h3>
        <input v-model="currentSelection.description" class="form-control mb-2" placeholder="Description">
        <input v-model="currentSelection.name" class="form-control mb-2" placeholder="Name">
        
        <input v-model="currentSelection.price" class="form-control mb-2" placeholder="Price">
        <button @click="modifyItem" class="btn btn-success me-2">Update</button>
        <button @click="cancelEdit" class="btn btn-secondary me-2">Cancel</button>
        <button @click="removeItem(currentSelection)" class="btn btn-danger">Delete</button>
      </div>

      <table class="table mt-3">
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button @click="chooseItem(item)" class="btn btn-warning">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
      registration: [{ username: '', password: '' }],
      loginData: { username: '', password: '' },
      signUpData: { username: '', password: '' },
      showSignUp: false,
      isLoggedIn: false,
      username: '',
      searchTerm: '',
      selectedCategory: '',
      menuCategories: [],
      newItem: { category: '', name: '', description: '', price: null },
      currentSelection: null
    };
  },
  created() {
    this.fetchItems();
  },
  computed: {
    categories() {
      return this.menuCategories.map(category => category.name);
    },
    filteredItems() {
      let items = [];
      this.menuCategories.forEach(category => {
        category.items.forEach(item => {
          if (
            (item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
            item.description.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
            (this.selectedCategory === '' || category.name === this.selectedCategory)
          ) {
            items.push(item);
          }
        });
      });
      return items;
    }
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('/assets/menucategories.json');
        if (!response.ok) throw new Error('Error in menuCategories');
        const data = await response.json();
        this.menuCategories = data;

        const reg = await fetch('/assets/registration.json');
        if (!reg.ok) throw new Error('Error in registration');
        this.registration = await reg.json();
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    chooseItem(item) {
      console.log('Choosing item:', item);
      this.currentSelection = { ...item };
    },
    removeItem(item) {
      console.log('Removing item:', item);
      const categoryIndex = this.menuCategories.findIndex(category =>
        category.items.some(i => i.name === item.name)
      );

      if (categoryIndex !== -1) {
        const category = this.menuCategories[categoryIndex];
        const itemIndex = category.items.findIndex(i => i.name === item.name);
        if (itemIndex !== -1) category.items.splice(itemIndex, 1);
      }
    },
    createItem() {
      const category = this.menuCategories.find(cat => cat.name === this.newItem.category);
      if (category) {
        category.items.push({ name: this.newItem.name, description: this.newItem.description, price: this.newItem.price });
      } else {
        this.menuCategories.push({
          name: this.newItem.category,
          items: [{ name: this.newItem.name, description: this.newItem.description, price: this.newItem.price }]
        });
      }
      this.newItem = { category: '', name: '', description: '', price: null };
    },
    login() {
      const user = this.registration.find(user => user.username === this.loginData.username && user.password === this.loginData.password);
      if (user) {
        this.isLoggedIn = true;
        this.username = this.loginData.username;
      } else {
        alert('Invalid credentials');
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.username = '';
    },
    signUp() {
      const existingUser = this.registration.find(user => user.username === this.signUpData.username);
      if (existingUser) {
        alert('Username already exists');
      } else {
        this.registration.push({ username: this.signUpData.username, password: this.signUpData.password });
        this.showSignUp = false;
        this.signUpData = { username: '', password: '' };
        alert('Registration successful. Please log in.');
      }
    },
    editItem(item) {
      this.currentSelection = { ...item };
    },
    cancelEdit() {
      this.currentSelection = null;
    },
    modifyItem() {
      const index = this.menuCategories.findIndex(category => 
        category.items.some(i => i.name === this.currentSelection.name)
      );
      if (index !== -1) {
        const category = this.menuCategories[index];
        const itemIndex = category.items.findIndex(i => i.name === this.currentSelection.name);
        
        if (itemIndex !== -1) {
          category.items[itemIndex] = { ...this.currentSelection };
        }
      }
      this.currentSelection = null;
    }
  }
}
</script>

<style scoped>
.user {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
input, select {
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
