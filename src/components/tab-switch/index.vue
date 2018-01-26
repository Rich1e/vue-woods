<template>
  <div class="tabs-container">
    <ul class="tabs-list" role="tablist">
      <li v-for="(tab,index) in tabs"
          :key="index"
          class="tabs-title">
        <a
            :class="activeHash === tab.tabHash ? 'active' : ''"
            class="tabs-titleLink"
            @touchstart="setPage(index)"
            @click="setPage(index)">
          {{ tab.tabHeader }}
        </a>
      </li>
    </ul>

    <div class="tabContent-wrap"
         @touchstart="onTouchStart($event)"
         @touchmove="onTouchMove($event)"
         @touchend="onTouchEnd($event)"
    >
      <div class="tabs-panel"
           :class="{ 'transition': transitionOrnot }"
           :style="{ 'transform': `translate3d(${translateX}px, 0, 0)` }"
      >
        <slot/>
      </div>
    </div>

  </div>
</template>

<script>
  const INIT = 0
  const SCROLL = 1
  const SWIPE = 2

  const isScrollEnd = () => {
    let scrollHeight = 0, scrollTop = 0, totalHeight = 0

    if (document.compatMode === 'BackCompat') {
      scrollHeight = document.body.scrollHeight
      scrollTop = document.body.scrollTop
    }
    else { // "CSS1Compat"
      scrollHeight = document.documentElement.scrollHeight
      scrollTop = document.documentElement.scrollTop
    }

    totalHeight = scrollTop + (document.documentElement.clientHeight || window.screen.availHeight)

    console.log('scrollHeight:' + scrollHeight)
    console.log('scrollTop:' + scrollTop)
    console.log('totalHeight:' + totalHeight)

    return totalHeight >= scrollHeight
  }

  export default {
    props: {
      indexTab: {
        type: String
      }
    },
    created () {
      this.tabs = this.$children
    },
    mounted () {
      // 滚动到顶部
      window.scrollTo(0, 0)

      this.$nextTick(() => {
        this.children = document.querySelectorAll('.tabs-panel-content')
        if (this.tabs.length) {
          // this.indexTab ? this.selectTab(this.indexTab) : this.selectTab(this.tabs[0].tabHash);
          if (this.indexTab) {
            // this.selectTab(this.indexTab);
            this.tabs.forEach((item, idx) => {
              item.tabHash === this.indexTab && this.setPage(idx)
            })
          } else {
            this.selectTab(this.tabs[0].tabHash)
            this.setPage(0)
          }
        }
      })
    },
    watch: {
      'indexTab' () {
        if (this.tabs.length) {
          this.indexTab ? this.selectTab(this.indexTab) : this.selectTab(this.tabs[0].tabHash)
        }
      }
    },
    data () {
      return {
        tabs: [],
        children: [],
        activeHash: '',
        touchPoint: {
          startLeft: 0,
          startTop: 0,
          startTime: 0
        },
        distance: {
          left: 0,
          top: 0
        },
        currentPage: 0,
        translateX: 0,
        transitionOrnot: false,
        startTranslateX: 0,
        swipeType: INIT
      }
    },
    methods: {
      selectTab (hash) {
        // console.log(hash);
        this.tabs.forEach((tab) => {
          tab.isActive = (tab.tabHash === hash)
        })
        this.activeHash = hash
      },
      next () {
        let currentpage = this.currentPage;
        (currentpage < this.tabs.length - 1) && currentpage++
        // console.log('next, currentpage: ' + currentpage);
        this.setPage(currentpage)
      },
      prev () {
        let currentpage = this.currentPage;
        (currentpage > 0) && currentpage--
        // console.log('prev, currentpage: ' + currentpage);
        this.setPage(currentpage)
      },
      reset () {
        this.setPage(this.currentPage)
      },
      setPage (page) {
        // console.log('set');
        const prevPage = this.currentPage
        this.currentPage = page

        this.translateX = -this.tabs.reduce(function (total, item, i) {

          return i > page - 1 ? total : total + item.$el['clientWidth']
        }, 0);

        // console.log(this.currentPage);
        [].forEach.call(this.children, (el, index) => {

          if (index === this.currentPage) {
            el.style.height = 'auto'
          } else {
            el.style.height = '0px'
          }

        })
        this.selectTab(this.tabs[page].tabHash)
        this.currentPage !== prevPage && this.$emit('changePage', this.currentPage)
        setTimeout(() => {
          if (!this.transitionOrnot) {
            this.transitionOrnot = true
          }
        })
      },
      onTouchStart (event) {
        const touchPoint = event.changedTouches[0] || event.touches[0]

        const startLeft = touchPoint.pageX
        // console.log('left:' + startLeft);
        this.touchPoint.startLeft = startLeft

        const startTop = touchPoint.pageY
        // console.log('top:' + startTop);
        this.touchPoint.startTop = startTop

        const startTranslateX = this.translateX
        this.startTranslateX = startTranslateX

        const touchTime = new Date().getTime()
        // console.log('time:' + touchTime);
        this.touchPoint.startTime = touchTime
      },
      onTouchMove (event) {
        const touchPoint = event.changedTouches[0] || event.touches[0]
        const distanceLeft = touchPoint.pageX - this.touchPoint.startLeft
        // console.log('distanceLeft:' + distanceLeft);
        this.distance.left = distanceLeft
        const distanceTop = Math.abs(touchPoint.pageY - this.touchPoint.startTop)
        // console.log('distanceTop:' + distanceTop);
        this.distance.top = distanceTop

        switch (this.swipeType) {
          case INIT:
            if (Math.abs(distanceLeft) / distanceTop > 1.5) {
              event.preventDefault()
              event.stopPropagation()
              this.swipeType = SWIPE
            } else {
              this.swipeType = SCROLL
            }
            break
          case SCROLL:
            break
          case SWIPE:
            this.translateX = this.startTranslateX + distanceLeft
            break
        }
      },
      onTouchEnd (event) {
        let quick = new Date().getTime() - this.startTime < 1000
        let isEnd = isScrollEnd()
        // console.log(quick);
        console.log('onTouchEnd:distance:' + this.distance.left)
        // if ((this.distance.left < -(200 * this.dpr) && this.distance.top < (100 * this.dpr)) || (quick && this.distance.left < -15 && this.distance.top / this.distance.left > -6)) {
        if (this.distance.left < -100 || (quick && this.distance.left < -15 && this.distance.top / this.distance.left > -6)) {
          console.log('next1')
          this.next()
          // } else if ((this.distance.left > (200 * this.dpr) && this.distance.top < (100 * this.dpr)) || (quick && this.distance.left > 15 && this.distance.top / this.distance.left < 6)) {
        } else if (this.distance.left > 100 || (quick && this.distance.left > 15 && this.distance.top / this.distance.left < 6)) {
          // console.log(this.distance.left);
          console.log('prev2')
          this.prev()
        } else if ((isEnd && this.distance.top > 100) || (quick && this.distance.top > 15 && this.distance.left / this.distance.top < 6)) {
          console.log(this.distance.top)
          console.log('next3')
          this.next()
        } else {
          this.reset()
        }
        this.swipeType = INIT
        this.distance.left = 0
        this.distance.top = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font_size: 14;

  @function rem( $pixels ) {
    @if $pixels != 0 {
      @return ($pixels+0.01) / $font_size * 1rem;
    } @else {
      @return 0;
    }
  }

  .tabs-container {
    width: 100%;
    .tabs-panel {
      width: 100%;
      height: 100%;
      font-size: 0;
      white-space: nowrap;
      // transition: all 0.2s ease;
      &.transition {
        transition: all 0.2s ease;
      }
      .tabs-panel-content {
        display: inline-block;
        width: 100%;
        font-size: rem(12);
        vertical-align: top;
        -webkit-overflow-scrolling: touch;
        transform: translate3d(0, 0, 0);
      }
    }
    .tabContent-wrap {
      width: 100%;
      overflow: hidden;
    }
    .tabs-list {
      position: relative;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid #ccc;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tabs-title {
      position: relative;
      height: auto;
      line-height: rem(35);
      text-align: center;
      font-size: rem(14);
      padding: 0 rem(10);
      .tabs-titleLink {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        color: #000;
        &:hover {
          text-decoration: none;
          color: #000;
        }
        &:focus {
          outline: none;
        }
        &.active {
          color: #f37938;
          border-bottom: 2px solid #f37938;
        }
      }
    }
  }
</style>
