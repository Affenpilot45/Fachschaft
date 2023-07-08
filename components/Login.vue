<template>
    <div>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Anmelden</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from '~/plugins/firebase.js';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log(this.email)
        console.log(this.password)
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // Erfolgreich angemeldet, umleiten zu einer geschützten Seite
            // this.$router.push('/geschutzte-seite');
            alert("Erfolgreich!")
          })
          .catch((error) => {
            // Fehlerbehandlung
            alert("Invalid user or password.")
          });
      },
    },
  };
  </script>
  