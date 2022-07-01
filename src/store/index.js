import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  // 公共状态
  state: {
    cityId: '440100',
    cityName: '广州',
    cinemaList: [],
    isTabbarShow: true
  },
  // getters: {
  // },
  // 同步
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCinemaData (state, data) {
      state.cinemaList = data
    },
    clearCinema (state) {
      state.cinemaList = []
    },
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  },
  // 异步
  actions: {
    getCinemaData (store) {
      // console.log('getCinemaData-action')
      return http({
        url: `/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=3524953`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res.data.data.cinemas)
        // this.cinemaList = res.data.data.cinemas
        // this.$nextTick(() => {
        //   const bs = new BScroll('.box', {
        //     pullUpLoad: true,
        //     scrollbar: true,
        //     pullDownRefresh: true
        //   // and so on
        //   })
        // })
        store.commit('changeCinemaData', res.data.data.cinemas)
      })
    }
  }
  // modules: {
  // }
})
