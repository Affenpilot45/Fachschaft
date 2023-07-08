<template>
    <div class="formular cursor-no-drop">
        <h1> GEBEN SIE UNS IHRE DATEN! </h1>
        <form v-on:submit.prevent="submitForm">
            <label for="name">Name:</label> <br>
            <input type="Text" id="name" name="Name" placeholder="Name" v-model="name"> <br><br>
            <label for="vorname">Vorname:</label><br>
            <input type="text" id="vorname" name="Vorname" placeholder="Vorname" v-model="vorname"><br><br>
            <label for="email">E-Mail pls:</label><br>
            <input type="email" name="E-Mail" id="email" placeholder="E-Mail Adresse" v-model="email"><br><br>
            <label for="betreff">Betreff:</label><br>
            <textarea name="Betreff" id="betreff" placeholder="Betreff" rows="1" cols="70" maxlength="70" v-model="betreff">

            </textarea><br><br>
            <label for="anfrage">Anfrage:</label><br>
            <textarea name="Anfrage" id="anfrage" placeholder="Anfrage" rows="10" cols="100" v-model="anfrage">

            </textarea> <br><br>
            <button type="submit">Kontakt Aufnehmen</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            vorname: "",
            email: "",
            betreff: "",
            anfrage: ""

        };
    },
    methods: {
        submitForm() {
            alert(
                "Vielen Dank für Ihre Anfrage! Name: " +
                this.name +
                ", Email: " +
                this.email +
                ", Ihre Anfrage: " +
                this.anfrage
            )
        }
    }
}
</script>