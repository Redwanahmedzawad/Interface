<template>
  <div class="liquor-menu-container">
    <h2>Liquor Menu</h2>
    <div class="menu-category" v-for="category in liquorCategories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item.name">
          <strong>{{ item.name }}</strong>: {{ item.description }} - ${{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiquorMenu',
  data() {
    return {
      liquorCategories: [
        {
          name: 'Wines',
          items: [
            { name: 'Chardonnay', description: 'White wine with a fruity taste', price: 20 },
            { name: 'Merlot', description: 'Red wine with a smooth finish', price: 25 }
          ]
        },
        {
          name: 'Beers',
          items: [
            { name: 'IPA', description: 'Hoppy beer with citrus notes', price: 8 },
            { name: 'Lager', description: 'Light and refreshing beer', price: 6 }
          ]
        },
        {
          name: 'Spirits',
          items: [
            { name: 'Whiskey', description: 'Aged whiskey with rich flavor', price: 10 },
            { name: 'Vodka', description: 'Smooth and clear vodka', price: 8 }
          ]
        },
        {
          name: 'Cocktails',
          items: [
            { name: 'Mojito', description: 'Refreshing mint cocktail', price: 12 },
            { name: 'Martini', description: 'Classic dry martini', price: 14 }
          ]
        }
      ]
    };
  }
}
</script>

<style scoped>
.liquor-menu-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.menu-category {
  margin-bottom: 30px;
}

.menu-category h3 {
  margin-bottom: 10px;
}
</style>
