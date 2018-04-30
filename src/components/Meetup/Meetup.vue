<template>
	<v-container>
		<v-layout row wrap class="first-line" v-for="meetup in meetups" :key="meetup.id">
			<v-flex xs12>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs4 md4 sm4>
								<v-card-media
								:src="meetup.imageUrl"
								height="230px">
								</v-card-media>
							</v-flex>
							<v-flex xs8 md8 sm8>
        					<v-card-title primary-title>
        					  <div>
        					    <h2 class="white--text mb-3">{{meetup.title}}</h2>
        					    <div>{{meetup.date}}</div>
        					  </div>
        					</v-card-title>
        					<v-card-actions>
        					  <v-btn flat color="orange" :to="'/meetups/' + meetup.id">
        					  	<v-icon left light>arrow_forward</v-icon>
        					  	View Meetup
        					  </v-btn>
        					</v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>	
			</v-flex>
		</v-layout>
	</v-container>
</template>

<style scoped>
	.first-line {
		margin-top:60px;
	}
</style>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadMeetups
      }
    }
  }
</script>

