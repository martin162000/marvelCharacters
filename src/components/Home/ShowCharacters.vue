<template>
	<div
		class="gridItem zoomFadeIn"
		v-for="character in storeFoundCharacters"
		:key="character.id"
		@click="getDetails(character.id)"
	>
		<h2>{{ character.name }}</h2>
		<img
			v-if="character.thumbnail"
			:src="getImg(character.thumbnail.path, character.thumbnail.extension)"
			alt="character img"
		/>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
	name: 'ShowCharacters',
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
	},
	computed: {
		storeFoundCharacters() {
			return this.$store.state.foundCharacters
		},
	},
})
export default class ShowCharacters extends Vue {}
</script>

<style scoped></style>
