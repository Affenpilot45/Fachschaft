<template>
    <div>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Registrieren</button>
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
      register() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // Erfolgreich angemeldet, umleiten zu einer geschützten Seite
            this.$router.push('/index');
            alert("Erfolgreich!")
          })
          .catch((error) => {
            // Fehlerbehandlung
                if (error.code == "auth/weak-password") {
                    alert("Password zu schwach. Mindestens 6 Zeichen angeben!")
                }
          });
      },
    },
  };
  </script>
  