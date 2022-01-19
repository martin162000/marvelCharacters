<template>
	<article v-for="character in storeFoundFavourites" :key="character.id" class="leftFadeIn">
		<div class="title">
			<div>
				<h3>{{ character.name }}</h3>
			</div>
		</div>
		<div class="content">
			<div class="imgHolder">
				<img
					v-if="character.thumbnail"
					:src="getImg(character.thumbnail.path, character.thumbnail.extension)"
					alt="character img"
				/>
			</div>
			<div>
				<div class="btnGroup">
					<button class="btn detailBtn" type="button" @click="getDetails(character.id)">
						Details
					</button>
					<button
						class="btn deleteBtn"
						type="button"
						@click="removeFavourite(character.id)"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	</article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
	name: 'ShowFavourites',
	methods: {
		getImg(path: string, extension: string) {
			return path + '.' + extension
		},
		getDetails(idCharacter: number) {
			this.$store.dispatch('findDetails', idCharacter)
			this.$router.push({
				path: `details`,
			})
		},
		removeFavourite(idCharacter: number) {
			this.$store.dispatch('removeFavourites', idCharacter)
		},
	},
	computed: {
		storeFoundFavourites() {
			return this.$store.state.favourites
		},
	},
})
export default class ShowFavourites extends Vue {}
</script>

<style scoped></style>
