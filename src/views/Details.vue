<template>
	<div class="detailsWrap">
		<div v-if="$store.state.details.id" class="topFadeIn">
			<DetailsContent />
			<div class="addToFavourite rightFadeIn">
				<AddFavButton />
			</div>
		</div>
		<div v-else-if="$store.state.details.loading">... Loading</div>
		<div v-else class="zoomFadeIn">
			You must search and choice marvel character for show his details
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DetailsContent from '@/components/Details/DetailsContent.vue'
import AddFavButton from '@/components/Details/AddFavButton.vue'
@Options({
	components: {
		DetailsContent,
		AddFavButton,
	},
})
export default class Details extends Vue {}
</script>
