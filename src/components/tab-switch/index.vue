<template>
  <div class="tab-container">
    <ul class="tab-title-container">
      <li class="tab-title"
          v-for="(title,index) in tabtitles"
          :class="{'active': index + 1 === currentPage}"
          :key="index"
          @click="setPage(index + 1)">{{title}}
      </li>
    </ul>
    <!-- decide if bind touchstart -->
    <div v-if="slidable"
         class="tabswiper"
         :class="{'invisible':invisible}"
         @touchstart="_onTouchStart">
      <div class="tabswiper-wrap"
           ref="tabSwiperWrap"
           :class="{'dragging': dragging}"
           :style="{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}"
           @transitionend="_onTransitionEnd">
        <slot></slot>
      </div>
    </div>
    <div v-else
         class="tabswiper"
         :class="{'invisible':invisible}">
      <div class="tabswiper-wrap"
           ref="tabSwiperWrap"
           :class="{'dragging': dragging}"
           :style="{'transform' : 'translate3d(' + translateX + 'px, 0, 0)'}"
           @transitionend="_onTransitionEnd">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const JUDGE_INITIAL = 0
  const JUDGE_SLIDEING = 1
  const JUDGE_SCROLLING = 2
  const replaceAll = (str, target, replace) => {
    let reg = '/' + target + '/g'    //查找时忽略大小写
    reg = eval(reg)
    return str.replace(reg, replace)
  }

  const addClass = (el, className) => {
    if (!className)
      return false
    className = className.trim('').replace(/\s+/, ' ').split(' ')
    el.className += ' ' + className.join(' ')
    return true
  }

  const removeClass = (el, className) => {
    if (!className)
      return false
    className = className.trim('').replace(/\s+/, ' ').split(' ')
    let cls = ' ' + el.className + ' '
    className.forEach(function (item) {
      item = ' ' + item
      cls = replaceAll(cls, item, ' ')
    })
    el.className = cls.trim()
    return true
  }

  const isSupportsPassive = () => {
    let supportsPassive = false
    try {
      let opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true
        }
      })
      window.addEventListener('test', null, opts)
    } catch (e) {}

    return supportsPassive
  }

  const isScrollEnd = () => {

    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
    let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0

    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight
      bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight
      documentScrollTop = document.documentElement.scrollTop
    }

    scrollHeight = (bodyScrollHeight - documentScrollHeight < 0) ? documentScrollHeight : bodyScrollHeight
    scrollTop = (bodyScrollTop - documentScrollTop < 0) ? documentScrollTop : bodyScrollTop

    console.log('scrollHeight' + scrollHeight)
    console.log('scrollTop' + scrollTop)

    return scrollTop + (document.documentElement.clientHeight || window.screen.availHeight) >= scrollHeight
  }

  /**
   *
   * @tabtitles tab标题
   * @currPage 当前开始位置
   * @slidable 是否禁止滑动
   *
   */

  export default {
    props: {
      tabtitles: {
        type: Array,
        default: []
      },
      currPage: {
        type: Number,
        default: 1
      },
      slidable: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      currPage: function (val) {
        this.setPage(val)
      }
    },
    data () {
      return {
        lastPage: 1,
        currentPage: this.currPage,
        translateX: 0,
        startTranslateX: 0,
        translateY: 0,
        startTranslateY: 0,
        deltaX: 0,
        deltaY: 0,
        dragging: false,
        startPageX: null,
        startPageY: null,
        transitioning: false,
        slideEls: [],
        invisible: true,
        judge: JUDGE_INITIAL,
      }
    },
    mounted () {
      // 滚动到顶部
      window.scrollTo(0, 0)

      this.$nextTick(function () {

        let _this = this

        this._onTouchMove = this._onTouchMove.bind(this)
        this._onTouchEnd = this._onTouchEnd.bind(this)
        this.slideEls = this.$refs['tabSwiperWrap'].children
        this.dragging = true
        this.setPage(this.currentPage)

        setTimeout(() => {
          _this.dragging = _this.invisible = false
        }, 100)

        window.onresize = () => {
          _this.setPage(_this.currentPage)
        }
      })
    },
    methods: {
      next () {
        let page = this.currentPage

        if (page < this.slideEls.length) {
          page++
          this.setPage(page)
        } else {
          this._revert()
        }
      },
      prev () {
        let page = this.currentPage

        if (page > 1) {
          page--
          this.setPage(page)
        } else {
          this._revert()
        }
      },
      setPage (page) {
        this.lastPage = this.currentPage
        this.currentPage = page

        this.translateX = -[].reduce.call(this.slideEls, function (total, el, i) {
          // previousValue, currentValue, currentIndex
          return i > page - 2 ? total : total + el['clientWidth']
        }, 0)

        // console.log('this.translateX:' + this.translateX)

        this._onTransitionStart()
      },
      _onTouchStart (e) {
        this.startPageX = this._getTouchPageX(e)
        this.startPageY = this._getTouchPageY(e)
        this.deltaX = 0
        this.deltaY = 0
        this.startTranslateX = this.translateX
        this.startTranslateY = this.translateY
        this.startTime = new Date().getTime()
        this.dragging = true

        // console.log('startPageX:' + this.startPageX)
        // console.log('startPageY:' + this.startPageY)

        if (isSupportsPassive()) {
          document.addEventListener('touchmove', this._onTouchMove, {passive: false})
          document.addEventListener('touchend', this._onTouchEnd, {passive: false})
        } else {
          document.addEventListener('touchmove', this._onTouchMove, false)
          document.addEventListener('touchend', this._onTouchEnd, false)
        }
      },
      _onTouchMove (e) {
        this.deltaX = this._getTouchPageX(e) - this.startPageX
        this.deltaY = Math.abs(this._getTouchPageY(e) - this.startPageY)

        // console.log('deltaX:' + this.deltaX)
        // console.log('deltaY:' + this.deltaY)

        switch (this.judge) {
          case JUDGE_INITIAL:
            // if (Math.abs(this.deltaX) > 20 && this.deltaY<25) {// judge to allow/prevent scroll
            if (Math.abs(this.deltaX) / this.deltaY > 1.5) {// judge to allow/prevent scroll
              this.judge = JUDGE_SLIDEING
              e.preventDefault()
              e.stopPropagation()
            } else {
              this.judge = JUDGE_SCROLLING
            }
            break
          case JUDGE_SCROLLING:
            break
          case JUDGE_SLIDEING:
            e.preventDefault()
            e.stopPropagation()
            this.translateX = this.startTranslateX + this.deltaX
            this.translateY = this.startTranslateY + this.deltaY
            break
          default:
            break
        }
      },
      _onTouchEnd (e) {
        this.dragging = false

        console.log('deltaX:' + this.deltaX)
        console.log('deltaY:' + this.deltaY)

        let isQuickAction = new Date().getTime() - this.startTime < 1000

        if (this.judge === JUDGE_SLIDEING) {
          console.log('###########:' + (this.deltaY / this.deltaX))

          if (this.deltaX < -100 || (isQuickAction && this.deltaX < -15 && this.deltaY / this.deltaX > -6)) {
            this.next()
          }
          else if (this.deltaX > 100 || (isQuickAction && this.deltaX > 15 && this.deltaY / this.deltaX < 6)) {
            this.prev()
          }
          else {
            this._revert()
          }
        }

        let isEnd = isScrollEnd()

        console.log('isEnd:' + isEnd)

        if (this.judge === JUDGE_SCROLLING && isEnd) {

          if (this.deltaY > 100 || (isQuickAction && this.deltaY > 15 && this.deltaX / this.deltaY < 6)) {
            this.next()
          }

        }

        this.judge = JUDGE_INITIAL

        if (isSupportsPassive()) {
          document.removeEventListener('touchmove', this._onTouchMove, {passive: false})
          document.removeEventListener('touchend', this._onTouchEnd, {passive: false})
        } else {
          document.removeEventListener('touchmove', this._onTouchMove, false)
          document.removeEventListener('touchend', this._onTouchEnd, false)
        }
      },
      _revert () {
        this.setPage(this.currentPage)
      },
      _getTouchPageX (e) {
        let key = 'pageX'
        return e.changedTouches ? e.changedTouches[0][key] : e[key]
      },
      _getTouchPageY (e) {
        let key = 'pageY'
        return e.changedTouches ? e.changedTouches[0][key] : e[key]
      },
      _onTransitionStart () {
        this.transitioning = true

        if (this._isPageChanged()) {
          this.$emit('tab-change-start', this.currentPage);
          //FIX:remove the height of the hidden tab-items
          [].forEach.call(this.slideEls, (item, index) => {
            if (index == (this.currentPage - 1)) {
              removeClass(item, 'hide-height')
            }
            else {
              addClass(item, 'hide-height')
            }
          })
        } else {
          this.$emit('tab-revert-start', this.currentPage)
        }
      },
      _onTransitionEnd (e) {
        e.stopPropagation()
        if (e.target.className !== 'tabswiper-wrap') return

        this.transitioning = false
        if (this._isPageChanged()) {
          this.$emit('tab-change-end', this.currentPage)
        } else {
          this.$emit('tab-revert-end', this.currentPage)
        }
      },
      _isPageChanged () {
        return this.lastPage !== this.currentPage
      }
    }
  }
</script>

<style lang="scss" scoped>

  .tab-container {
    width: 100%;
  }

  .invisible {
    visibility: hidden;
  }

  .tabswiper {
    position: relative;
    overflow: hidden;
  }

  .tabswiper-wrap {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .tabswiper-wrap.dragging {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }

  .tabswiper-wrap > div {
    overflow-x: hidden;
    flex-shrink: 0;
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: inherit;
  }

  .tabswiper-wrap > .hide-height {
    height: 0px;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  .tab-title-container {
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin: 0 auto;
    list-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-decoration: none;
    -webkit-user-select: none;
    outline: none;
    border-bottom: 1px solid #dddddd;
    display: -webkit-box;
    display: -o-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
  }

  .tab-title {
    height: 35px;
    line-height: 35px;
    position: relative;
    text-align: center;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-decoration: none;
    -webkit-user-select: none;
    outline: none;
    outline-style: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .tab-title.active, .tab-title:active {
    border-bottom: 2px solid #36acf4;
    color: #36acf4;
  }
</style>
