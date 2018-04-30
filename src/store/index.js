import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadMeetups: [
		   {imageUrl: 'http://travelercorner.com/wp-content/uploads/2016/03/Beijing-attarctions.jpg', 
		      id: 1, 
		      title: 'Beijing', 
		      date: '2018-04-28'
			},
		   {imageUrl: 'http://joelsantos.net/wp-content/uploads/2013/07/Shanghai-China-Joel-Santos-SWFC-Pudong-3.jpg', 
		   	  id: 2, 
		   	  title: 'Shanghai', 
		   	  date: '2018-04-29'
		   	}
        ],
		user: {}
	},
	mutations: {
	  createMeetup (state, payload) {
        state.loadMeetups.push(payload)
	  }
	},
	actions: {
	  createMeetup ({commit}, payload) {
        const meetup = {
          title: payload.title,
          location: payload.location,
          imageUrl: payload.imageUrl,
          description: payload.description,
          date: payload.date,
          id: 3
        }
        commit('createMeetup', meetup)
	  }
	},
	getters: {
		loadMeetups (state) {
		  return state.loadMeetups;
		},
		loadMeetup (state) {
		  return (meetupId) => {
			return state.loadMeetups.find((meetup) => {
			  return meetup.id == meetupId
			})
		  }
		},
		feauteMeetups (state, getters) {
		  return getters.loadMeetups.slice(0, 5)
		}
	}
})
