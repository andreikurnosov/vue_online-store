<template>
 <v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h1 class="text--secondary mb3">My Products</h1>
       <v-card
        class="elevation-10 mb-2"
        v-for="(product, i) in products"
        :key="i"

        >
         <v-layout>
           <v-flex xs4>
             <v-card-media
              :src="product.imageSrc"
              height="250px"
             >

             </v-card-media>
           </v-flex>
           <v-flex xs8>
             <v-card-text>
               <h2 class="text-primary">{{ product.title }}</h2>
               <p>{{ product.description }}</p>
             </v-card-text>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn
                class="info"
                :to="'/product/' + product.id"
               >Open</v-btn>
             </v-card-actions>

           </v-flex>
         </v-layout>
       </v-card>
     </v-flex>
   </v-layout>

 </v-container>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: '1',
          title: 'Lenovo Legion',
          vendor: 'Lenovo',
          color: 'black',
          material: 'metal/plastic',
          description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD íåò/NVIDIA GeForce GTX 1050, 4096 ÌÁ/Wi-Fi/Bluetooth/Win 10 Home',
          price: 782,
          promo: false,
          imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
        },
        {
          id: '2',
          title: 'Asus FX503VD',
          vendor: 'Asus',
          color: 'white',
          material: 'plastic',
          description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD íåò/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 930,
          promo: true,
          imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
        }
      ]
    }
  }

}
</script>

