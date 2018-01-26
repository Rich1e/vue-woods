<template>
  <div class="app">
    <Tabs indexTab="friend" @changePage="getPageNum">
      <TabPanel label="好友榜" hash="friend">
        <div class="first"></div>
      </TabPanel>
      <TabPanel label="全省榜" hash="convince">
        <div class="second"></div>
      </TabPanel>
      <TabPanel label="全国榜" hash="country">
        <div class="three"></div>
      </TabPanel>
    </Tabs>
    <h3>{{pageNum}}</h3>
  </div>
</template>

<script>

  import { Tabs, TabPanel } from '../components/index.js'

  export default {
    created () {

    },
    mounted () {

    },
    data () {
      return {
        pageNum: 0
      }
    },
    methods: {
      getPageNum (idx) {
        console.log('##########' + idx)
        this.pageNum = idx
      }
    },
    components: {
      Tabs,
      TabPanel
    }
  }
</script>

<style lang="scss">
  $font_size: 75;

  @function rem($pixels) {
    @return $pixels / $font_size + rem;
  }

  .first {
    height: 5800px;
    background: yellow;
  }

  .second {
    height: 9500px;
    background: red;
  }

  .three {
    height: 800px;
    background: blue;
  }

</style>
