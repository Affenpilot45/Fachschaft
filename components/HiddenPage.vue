<template>
    <div>
      <h1>Willkommen auf der geschützten Seite!</h1>
      <p>Hier können nur angemeldete Benutzer zugreifen.</p>
      <button @click="logout">Abmelden</button>
    </div>
  </template>
  
  <script>
  import firebase from '~/plugins/firebase.js';
  
  export default {
    methods: {
      logout() {
        firebase.auth().signOut()
          .then(() => {
            // Erfolgreich abgemeldet, umleiten zur Anmeldeseite
            this.$router.push('/login');
          })
          .catch((error) => {
            // Fehlerbehandlung
            console.log(error);
          });
      },
    },
  };
  </script>
  