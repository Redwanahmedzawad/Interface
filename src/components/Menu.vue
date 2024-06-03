<template>
  <div class="menu-container">
    <h2>Our Menu</h2>
    <div class="menu-category" v-for="category in paginatedCategories" :key="category.name">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="item in category.items" :key="item.name">
          <strong>{{ item.name }}</strong>: {{ item.description }} - ${{ item.price }}
        </li>
      </ul>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data() {
    return {
      menuCategories: [],
      currentPage: 1,
      itemsPerPage: 3
    };
  },
  created() {
    this.fetchItems();
  },
  computed: {
    paginatedCategories() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.menuCategories.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.menuCategories.length / this.itemsPerPage);
    }
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('/assets/menucategories.json');
        if (!response.ok) throw new Error('Error in menuCategories');
        const data = await response.json();
        this.menuCategories = data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
}
</script>

<style scoped>
.menu-container {
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
}

.pagination span {
  margin: 0 10px;
}
</style>
