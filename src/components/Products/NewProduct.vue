<template>
 <v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h1 class="text--secondary mb-3">Create New Product</h1>
          <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
            <v-text-field
              name="title"
              label="Title"
              type="text"
              :rules="[v => !!v || 'Title is require']"
              required
              v-model="title"
            ></v-text-field>
            <v-text-field
              name="vendor"
              label="Vendor Product"
              type="text"
              v-model="vendor"
            ></v-text-field>
            <v-text-field
              name="color"
              label="Color Product"
              type="text"
              v-model="color"
            ></v-text-field>
            <v-text-field
              name="material"
              label="Material Product"
              type="text"
              v-model="material"
            ></v-text-field>
            <v-text-field
              name="price"
              :rules="[v => !!v || 'Price is require']"
              required
              label="Price Product"
              type="text"
              v-model="price"
            ></v-text-field>
            <v-text-field
              name="description"
              label="Description Product"
              type="text"
              multi-line
              v-model="description"
            ></v-text-field>
          </v-form>
          <v-layout class="mb-3">
            <v-flex xs12>
              <v-btn class="warning">
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <img src="" height="200px">
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-switch
                color="primary"
                label="Add to Promo"
                v-model="promo"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!valid"
                @click="createProduct"
                class="success"
              >Create Product</v-btn>
            </v-flex>
          </v-layout>

     </v-flex>
   </v-layout>

 </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createProduct () {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo
        }
        console.log(product)
      }
    }
  }
}
</script>

