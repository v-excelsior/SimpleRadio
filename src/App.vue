<template>
    <v-app id="app">
        <Header />
        <loading-overlay v-if="isLoading"></loading-overlay>
        <transition v-else name="fade" mode="out-in">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { ls_service } from './services'
import Header from './components/Header'
import LoadingOverlay from './components/LoadingOverlay'
export default {
    name: 'App',
    components: {
        Header,
        LoadingOverlay,
    },
    methods: {
        ...mapActions(['fetchStations']),
        ...mapMutations(['updateFavourites']),
    },
    computed: {
        ...mapState({
            isLoading: state => state.isLoading,
        }),
    },
    async mounted() {
        await this.fetchStations()
        const favourites = ls_service.getFavourites()
        this.updateFavourites(favourites)
    },
}
</script>
