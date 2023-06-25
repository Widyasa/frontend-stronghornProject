<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Header Kolom 1</th>
        <th>Header Kolom 2</th>
        <!-- Tambahkan kolom tambahan sesuai kebutuhan -->
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in paginatedData" :key="item.id">
        <td class="text-danger">{{ item.id }}</td>
        <td>{{ item.nama }}</td>
        <!-- Tambahkan kolom tambahan sesuai kebutuhan -->
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Sebelumnya</button>
      <div class="d-flex flex-row tex">
        <div v-for="page in totalPages" :key="page">
          <button @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
        </div>
      </div>
      <button @click="nextPage" :disabled="currentPage === totalPages">Berikutnya</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, nama: "Item 1" },
        { id: 2, nama: "Item 2" },
        { id: 3, nama: "Item 3" },
        { id: 4, nama: "Item 4" },
        { id: 5, nama: "Item 5" },
        { id: 6, nama: "Item 6" },
        { id: 7, nama: "Item 7" },
        { id: 8, nama: "Item 8" },
        { id: 9, nama: "Item 9" },
        { id: 10, nama: "Item 10" },
        { id: 11, nama: "Item 11" },
        { id: 12, nama: "Item 12" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
        { id: 13, nama: "Item 13" },
      ], // Data lengkap
      itemsPerPage: 10, // Jumlah item per halaman
      currentPage: 1 // Halaman saat ini
    };
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>


