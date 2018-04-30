<template>
	<v-container>
		<v-layout row wrap class="first-line">
			<v-flex xs12>
			  <v-card>	
			    <v-card-title>
			      <h6 class="primary--text">{{meetup.title}}</h6>
			    </v-card-title>
			    <v-card-media
			    	:src="meetup.imageUrl"
			    	height=400px>
			    </v-card-media>
			    <v-card-text>
			    	<div class="info--text">{{meetup.date}}</div>
			    	<div>17th July 2017 17th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 201717th July 2017</div>
			    </v-card-text>
			  </v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<style scoped>
	.first-line {
		margin-top:100px;
	}
</style>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadMeetup(this.id)
      }
    }
  }
</script>