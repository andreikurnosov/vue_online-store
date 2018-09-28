<template>
 <v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h1 class="text-secondary mb-3">Orders</h1>
        <v-list
          subheader
          three-line
          >
            <v-list-tile
            avatar
            v-for="(order, i) in orders"
            key="i"
            >
              <v-list-tile-action>
                <v-checkbox
                  :input-value="order.done"
                  color="success"
                  @change="markDone(order)"
                ></v-checkbox>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ order.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  :to="'/product/' + order.productId"
                  class="primary ml-3"
                >Open</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
     </v-flex>
   </v-layout>

 </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'test',
          name: 'Andrey',
          phone: '22-22-22',
          productId: '1',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }

}
</script>

