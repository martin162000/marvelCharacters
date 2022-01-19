<template>
	<div class="header headerAnim">
		<div class="nav">
			<img src="../assets/marvelLogo.jpg" alt="marvel img" />
			<ul>
				<router-link to="/marvelCharacters" custom v-slot="{ href, navigate, isActive }">
					<li :class="isActive ? 'active' : ''" :href="href" @click="navigate">Home</li>
				</router-link>
				<router-link to="/details" custom v-slot="{ href, navigate, isActive }">
					<li :class="isActive ? 'active' : ''" :href="href" @click="navigate">
						Details
					</li>
				</router-link>
				<router-link to="/favourites" custom v-slot="{ href, navigate, isActive }">
					<li :class="isActive ? 'active' : ''" :href="href" @click="navigate">
						Favourites
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'TheHeader',
}
</script>

<style scoped></style>
