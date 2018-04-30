<template>
  <v-container>
    <v-layout row class="first-line">
      <v-flex xs12 sm6 offset-sm5>
        <h1>Create a new Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required>
            </v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field
              name="location"
              label="Location"
              id="location"
              v-model="location"
              required>
            </v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field
              name="imageUrl"
              label="ImageUrl"
              id="imageUrl"
              v-model="imageUrl"
              required>
            </v-text-field>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <img :src="imageUrl">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-text-field
              name="description"
              label="Description"
              id="description"
              v-model="description"
              multi-line
              required>
            </v-text-field>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <h2>Choose a  Date & Time</h2>
            </v-flex>
          </v-layout>
          <v-layout row mb-4>
            <v-flex xs12 sm6 >
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm5>
              <v-btn class="primary custom-create" 
              :disabled="!formIsValid"
              type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<style scoped>
	.first-line {
		margin-top:100px;
	}
	.custom-create {
		width:280px;
	}
</style>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && 
          this.location !== '' &&
          this.imageUrl !== '' && 
          this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date(),
          time: new Date()
        }
        this.$store.dispatch('createMeetup',meetupData)
        this.$router.push('/list');
      } 
    }
  }
</script>
