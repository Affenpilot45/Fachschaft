<!-- <nuxt-link to="/">Home Page</nuxt-link>
<nuxt-link to="/admin">Admin Page</nuxt-link>
<nuxt-link to="/login">Login</nuxt-link> -->

<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">



                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="/login" v-if="!user">Login</b-dropdown-item>
                        <b-dropdown-item href="/admin" v-if="user">admin</b-dropdown-item>
                        <b-dropdown-item href="/register">Registrieren</b-dropdown-item>
                        <b-dropdown-item @click="logout">Logout</b-dropdown-item>

                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js';
export default {
    computed: {
        user() {
            return firebase.auth().currentUser
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut()
        }
    }

}


</script>