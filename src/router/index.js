import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetup from '@/components/Meetup/Meetup'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import DetailMeetup from '@/components/Meetup/DetailMeetup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/list',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/meetups/:id',
      name: 'Detailmeetup',
      props: true,
      component: DetailMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
