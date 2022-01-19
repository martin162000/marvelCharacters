<template>
	<a class="btnFav" v-if="!checkInFavourites()" @click="$store.dispatch('addFavourites')">
		Add to favourites
	</a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
	name: 'AddFavButton',
	methods: {
		checkInFavourites() {
			if (
				this.$store.state.favourites &&
				this.$store.state.favourites.some(
					(item: any) => item.id === this.$store.state.details.id
				)
			) {
				return true
			} else {
				return false
			}
		},
	},
})
export default class AddFavButton extends Vue {}
</script>

<style scoped></style>
