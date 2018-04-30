<template>
  <v-app id="inspire">
    <v-toolbar class="red darken-1" dark app>
      <v-toolbar-title>
        <router-link to='/' tag="span" style="cursor: pointer">DevMeepup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon> {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups', link: '/list'},
        {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
        {icon: 'person', title: 'Profile', link: '/profile'},
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
    })
  }
</script>
