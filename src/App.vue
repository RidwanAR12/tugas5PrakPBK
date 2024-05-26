<template>
  <q-layout view="hHh lpR fFf">
    <q-page padding>
      <!-- Navbar -->
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            Toko Online
          </q-toolbar-title>
          <q-btn flat label="Home" />
          <q-btn flat label="Products" />
          <q-btn flat label="About Us" />
          <q-btn flat label="Contact" />
        </q-toolbar>
      </q-header>

      <!-- Carousel -->
      <q-carousel swipeable animated transition-prev="slide-right" transition-next="slide-left" class="q-mt-lg">
        <q-carousel-slide v-for="(slide, index) in slides" :key="index" :name="index" :img-src="slide.image">
          <div class="absolute-bottom text-center text-subtitle1 q-pb-md">
            <q-btn color="primary" size="lg">{{ slide.title }}</q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <!-- Product Cards -->
      <div class="q-mt-lg">
        <q-layout-grid cols="3" gutter>
          <q-card v-for="product in products" :key="product.id">
            <q-img :src="product.image" :alt="product.name" />
            <q-card-section>
              <div class="text-h6">{{ product.name }}</div>
              <div>{{ product.description }}</div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Beli Sekarang" color="primary" />
            </q-card-actions>
          </q-card>
        </q-layout-grid>
      </div>

      <!-- Footer -->
      <q-footer class="bg-grey-2 text-center q-pa-md q-mt-lg">
        <div>© 2024 Toko Online</div>
        <q-separator spaced />
        <div>
          <q-btn flat label="Facebook" />
          <q-btn flat label="Instagram" />
          <q-btn flat label="Twitter" />
          <q-btn flat label="LinkedIn" />
        </div>
      </q-footer>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slides: [
        { image: 'https://i.pinimg.com/236x/47/2b/64/472b649f27096a22708a4113cb5d5847.jpg', title: 'First Slide' },
        { image: 'src/assets/images/slide2.jpg', title: 'Second Slide' },
        { image: 'src/assets/images/slide3.jpg', title: 'Third Slide' }
      ],
      products: [
        { id: 1, name: 'Produk 1', description: 'Deskripsi singkat produk 1.', image: 'src/assets/images/product1.jpg' },
        { id: 2, name: 'Produk 2', description: 'Deskripsi singkat produk 2.', image: 'src/assets/images/product2.jpg' },
        { id: 3, name: 'Produk 3', description: 'Deskripsi singkat produk 3.', image: 'src/assets/images/product3.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
