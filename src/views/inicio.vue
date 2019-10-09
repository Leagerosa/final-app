<template>
<div>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Usuario"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Contraseña"
        required
        ></v-text-field>

        <v-btn
        color="success"
        class="my-4" center
        @click="validate"
        >
        Ingresar
        </v-btn>
    </v-form>

    <p class="text-center">¿Olvidaste tu contraseña? Click aquí</p>
    <div class="text-center">
        <v-btn class="blue darken-4 mb-2" block dark>Facebook</v-btn>
        <v-btn class="blue darken-1 mb-2" block dark>Twitter</v-btn>
        <v-btn class="red darken-3 mb-2" block dark>Google</v-btn>

    </div>    
    </div>
</template>