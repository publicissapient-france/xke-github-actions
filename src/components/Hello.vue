<template>
  <md-layout md-column>
    <md-toolbar>
      <h2 style="flex: 1" class="md-title">Greeting console</h2>
      <md-switch @change="switchOnline" v-model="online" id="my-test0"
                 name="my-test0"></md-switch>
      <span v-if="online">Online</span>
      <span v-else>Offline</span>
    </md-toolbar>
    <div class="hello">
      <img class="cactus" :src="cactusList[hello_count % cactusList.length]">
      <h1 v-if="hello_count > 1">{{ hello_count }} people say hello !</h1>
      <h1 v-else-if="hello_count === 1">Only {{ hello_count
        }} person says hello !</h1>
      <h1 v-else-if="hello_count === 0">Nobody said hello !</h1>
      <md-button class="md-raised md-primary" @click.native="addHello">
        Say hello!
      </md-button>
      <md-button class="md-raised md-primary" @click.native="clearHello">Reset
      </md-button>
    </div>
    <md-snackbar ref="snackbar" :md-duration="2000">
      <span
        v-if="online">Going online. Fetching data from remote server..</span>
      <span v-else="offline">Going offline.</span>
      <md-button class="md-accent" md-theme="light-blue"
                 @click.native="$refs.snackbar.close()">Close
      </md-button>
    </md-snackbar>
  </md-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'hello',
    computed: {
      host () {
        return window.location.hostname
      }
    },
    methods: {
      switchOnline (online) {
        if (online) {
          this.fetchHellos()
        }
        this.$refs['snackbar'].open()
      },
      clearHello () {
        this.hello_count = 0
        if (this.online) {
          return axios.delete(`http://${this.host}:8081/hello`)
            .then(this.fetchHellos)
        }
      },
      fetchHellos () {
        const that = this
        return axios.get(`http://${this.host}:8081/hello`)
          .then(resp => {
            that.hello_count = parseInt(resp.data.hello_count)
          })
      },
      addHello () {
        if (this.online) {
          return axios.post(`http://${this.host}:8081/hello`)
            .then(this.fetchHellos)
        } else {
          this.hello_count += 1
        }
      }
    },
    data () {
      return {
        online: false,
        hello_count: 0,
        cactusList: [
          'https://s-media-cache-ak0.pinimg.com/originals/4d/05/42/4d05424975d0d19aff97b7a80e081591.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/45/37/af/4537af59679d8412a2ab634ec8704fb8.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/9b/75/f6/9b75f6ba128d334320291f49e440f9d9.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/50/bb/49/50bb49e62f95e6bc0983918c4bfcc899.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/49/65/11/496511dff043f4d33d2be893a556a5c9.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/8c/26/d1/8c26d16d7820a2f86c5a93ef042545b6.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/e3/bd/b5/e3bdb525e508b111c2201bac0583e3bc.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/21/19/a0/2119a035a653ab400be1504fdb05471e.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/ef/47/fb/ef47fb64223c262e20bf7d5817645f31.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/49/3b/40/493b4099c1eb5bab85bd3a29fcc479e7.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/74/b2/dc/74b2dc4efa1ced22cc15574fd5540f90.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/46/5f/18/465f1828891b96dd5adf412be058b67e.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/49/36/98/49369886a1366f130e99a7879fcca9d6.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/71/4f/1a/714f1a781017fd51c7dd4cc061210e75.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/a6/9b/22/a69b222e5626ccdffd031aad688e5d02.jpg',
          'https://s-media-cache-ak0.pinimg.com/564x/da/82/d3/da82d3b0faeb4e149828bbca33bd0df8.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/0b/eb/c9/0bebc9acab2231083c2e26c7a9641686.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/79/f5/0a/79f50af033de6d51461604f1f3a497d9.jpg'
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .cactus {
    height: 100px;
    size: 100px;
  }
</style>
