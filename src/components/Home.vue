<template>
  <v-container>
    <v-layout row wrap class="first-line">
        <v-flex xs12 sm6 class="text-sm-right text-xs-center">
            <v-btn large to="/list" class="info">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-sm-left text-xs-center">
            <v-btn large to="/meetup/new" class="info">Organize Meetups</v-btn>
        </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
        <v-flex xs12>
            <v-carousel style="cursor: pointer">
                <v-carousel-item 
                v-for="meetup in meetups" 
                :src="meetup.imageUrl" 
                :key="meetup.id"
                @click="onLoadMeetup('aaa')">
                <div class="title" @click="onLoadMeetup('aaa')">
                    {{meetup.title}}
                </div>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12 class="text-xs-center mt-5">
           <p>Join Us</p>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .first-line {
    margin-top:100px;
  }
  .title {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    width: 50%;
    margin: 380px auto 0 auto;
    padding: 20px;
    text-align: center;
  }
</style>

<script>
    export default {
      computed: {
        meetups () {
          return this.$store.getters.feauteMeetups
        }
      },
      methods: {
        onLoadMeetup (id) {
          this.$router.push('/meetups/' + id)
        }
      }
    }
</script>

