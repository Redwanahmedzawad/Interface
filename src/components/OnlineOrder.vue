<template>
  <div class="online-order-container">
    <h2>Online Order</h2>
    <div class="menu-section" v-for="category in menuCategories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item.name">
          <strong>{{ item.name }}</strong>: {{ item.description }} - ${{ item.price }}
          <button @click="addToCart(item)">Add to Cart</button>
        </li>
      </ul>
    </div>
    <div class="cart">
      <h3>Cart</h3>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <strong>{{ item.name }}</strong>: ${{ item.price }} 
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <p v-if="cart.length">Total: ${{ totalPrice }}</p>
      <button v-if="cart.length" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineOrder',
  data() {
    return {
      menuCategories: [
        {
          name: 'Starters',
          items: [
            { name: 'Spring Rolls', description: 'Crispy and delicious', price: 6 },
            { name: 'Garlic Bread', description: 'Freshly baked', price: 4 }
          ]
        },
        {
          name: 'Main Courses',
          items: [
            { name: 'Grilled Salmon', description: 'Served with veggies', price: 18 },
            { name: 'Beef Steak', description: 'Juicy and tender', price: 25 }
          ]
        },
        {
          name: 'Desserts',
          items: [
            { name: 'Cheesecake', description: 'Creamy and delightful', price: 7 },
            { name: 'Chocolate Mousse', description: 'Rich and creamy', price: 5 }
          ]
        }
      ],
      cart: []
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    checkout() {
      alert('Thank you for your order!');
      this.cart = [];
    }
  }
};
</script>

<style scoped>
.online-order-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-section h3 {
  margin-bottom: 10px;
}

.menu-section ul {
  list-style-type: none;
  padding: 0;
}

.menu-section li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart {
  margin-top: 30px;
}

.cart h3 {
  margin-bottom: 10px;
}

.cart ul {
  list-style-type: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
