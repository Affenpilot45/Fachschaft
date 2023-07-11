<!-- <nuxt-link to="/">Home Page</nuxt-link>
<nuxt-link to="/admin">Admin Page</nuxt-link>
<nuxt-link to="/login">Login</nuxt-link> -->

<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="primary">
            <b-navbar-brand class="" href="/">Fachschaft Wirtschaft</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">



                    <b-nav-item-dropdown left>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="/login" v-if="!user">Login</b-dropdown-item>
                        <b-dropdown-item href="/admin" v-if="user">admin</b-dropdown-item>
                        <b-dropdown-item href="/register" v-if="!user">Registrieren</b-dropdown-item>
                        <b-dropdown-item @click="logout" v-if="user">Logout</b-dropdown-item>

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
            
            console.log(firebase.auth().currentUser);
            return firebase.auth().currentUser;


        }
    },
    methods: {
        logout() {
            firebase.auth().signOut();
            this.$router.push('/');
        }
    }

}


</script>