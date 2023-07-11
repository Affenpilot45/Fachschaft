<template>
    <div class="bg-fh-blue text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
        <div class="">
            <nav>
                <a href="/" class="text-green-200 hover:text-green-500 flex items-center">
                    <img src="~/assets/img/anchor.png" width="30" >
                    <h1 class="text-xl">Fachschaft</h1>
                </a>
            </nav>

        </div>

        <span class="absolute right-6 top-1.5 cursor-pointer" @click="MenuOpen()">
            <b-icon icon="x-lg" v-if="open"></b-icon>
            <b-icon icon="list" scale="1.5" v-if="!open"></b-icon>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-fh-blue md:w-auto w-full top-14 duration-700 ease-in left-0" v-if="open">
            <li class="md:mx-4">
                <a href="/admin" class="text-xl hover:text-green-500" v-if="user">Admin</a>
            </li>
            <li class="md:mx-4">
                <a href="/login" class="text-xl hover:text-green-500" v-if="!user">Login</a>
            </li>
            <li class="md:mx-4">
                <a href="/register" class="text-xl hover:text-green-500" v-if="!user">Registrieren</a>
            </li>
            <li class="md:mx-4" >
                <p class="text-xl hover:text-green-500 cursor-pointer" @click="logout()" v-if="user">Logout</p>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js';

import { ref } from 'vue';
export default {


    setup() {
        const open = ref(false)

        function MenuOpen() {
            open.value = !open.value
        }

    return { open, MenuOpen }


    },
    methods: {
        logout() {
            firebase.auth().signOut();
            this.$router.push('/');
        }
    },
    computed: {
        user() {
            
            return firebase.auth().currentUser;


        }
    },

}
</script>