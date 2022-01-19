<template>
	<TheHeader />
	<router-view />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mutationTypes } from './store/mutationTypes'
import TheHeader from './components/TheHeader.vue'
@Options({
	components: {
		TheHeader,
	},
	created() {
		// Get favourites from localstorage
		const savedFavourites: any = localStorage.getItem('StorageFavourites')
		const parsedDataFav = JSON.parse(savedFavourites)

		// Get search history from localstorage
		const savedSearchHistory: any = localStorage.getItem('SearchHistory')
		const parsedDataSaved = JSON.parse(savedSearchHistory)

		if (parsedDataFav) {
			if (parsedDataFav.length > 0)
				this.$store.commit(mutationTypes.SET_FAVOURITES, parsedDataFav)
		}
		if (parsedDataSaved) {
			if (parsedDataSaved.length > 0)
				this.$store.commit(mutationTypes.SET_SEARCH_HISTORY, parsedDataSaved)
		}
	},
})
export default class App extends Vue {}
</script>
