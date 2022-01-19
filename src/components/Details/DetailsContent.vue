<template>
	<div class="details">
		<div>
			<img
				:src="getImg(storeDetails.thumbnail.path, storeDetails.thumbnail.extension)"
				alt="character img"
			/>
		</div>

		<div class="detailInfo">
			<h2>{{ storeDetails.name }}</h2>
			<div class="links">
				<div class="linkWrap" v-for="url in storeDetails.urls" :key="url.index">
					<a :href="url.url" target="_blank"
						><div class="urlLink">{{ url.type }}</div></a
					>
				</div>
			</div>
			<p class="description" v-show="storeDetails.description.length > 0">
				{{ storeDetails.description }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
	name: 'DetailsContent',
	methods: {
		getImg(path: string, extension: string) {
			return path + '.' + extension
		},
	},
	computed: {
		storeDetails() {
			return this.$store.state.details
		},
	},
})
export default class DetailsContent extends Vue {}
</script>

<style scoped></style>
