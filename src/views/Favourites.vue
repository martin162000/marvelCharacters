<template>
	<div class="favouritesWrap">
		<ShowFavourites v-if="this.$store.state.favourites.length > 0" />
		<div v-else class="zoomFadeIn">
			You haven't saved anything yet. Search for a marvel character and add it to you
			favourites.
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ShowFavourites from '@/components/Favourites/ShowFavourites.vue'
@Options({
	components: {
		ShowFavourites,
	},
})
export default class Favourites extends Vue {}
</script>
