<template>
  <section class="mt-5">
    <div class="container h-full p-10">
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div class="w-full">
          <div
            class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <!-- Left column container-->
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12">
                  <!--Logo-->
                  <div class="text-center flex flex-col justify-center">
                    <svg class="self-center" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="100.000000pt" height="100.000000pt" viewBox="0 0 1280.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="#5a73db" stroke="none">
                    <path d="M6170 10116 c-197 -42 -343 -127 -491 -284 -131 -140 -203 -277 -240
                    -457 -34 -163 -20 -360 35 -522 75 -219 215 -381 486 -562 144 -95 145 -96
                    159 -146 9 -34 13 -117 14 -265 1 -189 -2 -222 -19 -269 -34 -95 -36 -96 -317
                    -96 l-242 0 -84 73 c-120 105 -146 117 -256 117 -81 0 -95 -3 -144 -30 -112
                    -62 -167 -172 -159 -320 5 -105 39 -178 119 -257 63 -63 101 -78 189 -78 69 0
                    123 25 175 80 56 59 136 108 208 127 135 35 381 12 479 -46 l36 -22 6 -622
                    c14 -1459 15 -1979 6 -2030 -32 -167 -166 -306 -362 -374 -99 -34 -281 -43
                    -418 -19 -241 42 -488 159 -750 357 -63 47 -146 116 -185 152 l-70 65 82 76
                    c89 83 123 130 123 168 0 20 -19 37 -102 93 -290 196 -571 427 -661 545 -28
                    36 -57 65 -66 65 -32 0 -86 -240 -101 -454 -24 -332 30 -684 133 -876 28 -53
                    36 -60 65 -63 27 -3 43 5 85 41 64 54 88 67 125 67 24 0 36 -11 82 -77 189
                    -271 449 -534 686 -693 176 -120 329 -188 704 -315 420 -142 481 -169 656
                    -290 100 -70 153 -132 205 -237 18 -38 39 -68 46 -68 6 0 26 27 43 59 57 107
                    127 181 251 264 137 91 153 99 534 243 452 172 541 212 716 320 257 159 514
                    401 731 689 49 66 99 123 110 127 28 11 75 -13 132 -67 29 -28 54 -44 63 -41
                    8 3 23 6 32 6 21 0 77 115 111 225 57 189 86 549 61 764 -15 127 -50 270 -87
                    351 -41 93 -46 93 -93 3 -84 -160 -186 -259 -446 -430 -251 -165 -315 -214
                    -315 -236 0 -13 42 -62 109 -129 l109 -108 -76 -71 c-144 -135 -373 -294 -547
                    -381 -316 -159 -651 -193 -870 -88 -184 88 -292 273 -310 531 -6 87 -16 1155
                    -19 1964 -1 347 6 445 36 510 21 46 94 60 328 60 204 0 205 0 250 -27 25 -14
                    78 -55 118 -91 56 -51 84 -68 123 -77 100 -24 183 4 268 92 62 64 88 115 103
                    199 20 116 -15 232 -93 310 -61 61 -118 83 -214 83 -98 0 -125 -12 -220 -104
                    -38 -37 -85 -75 -104 -84 -52 -27 -220 -40 -361 -28 -147 13 -182 27 -202 78
                    -34 86 -56 368 -39 502 17 132 22 139 159 202 101 48 128 66 201 135 110 105
                    172 188 232 310 84 174 116 345 98 533 -38 404 -311 726 -704 828 -124 32
                    -350 42 -455 20z m373 -431 c142 -30 269 -118 321 -222 64 -129 78 -330 31
                    -468 -64 -193 -198 -325 -371 -366 -76 -18 -229 -15 -299 5 -156 46 -296 156
                    -353 277 -42 90 -57 160 -56 269 0 221 116 388 326 471 119 47 277 61 401 34z"/>
                    </g>
                    </svg>
                    <h4 class="mb-12 mt-1 pb-1 text-xl">
                      Willkommen in der Fachschaft Wirtschaft
                    </h4>
                  </div>

                  <form @submit.prevent="login">
                    <p class="mb-4">Erstelle einen Account</p>
                    <!--Username input-->
                    <div class="relative mb-4">
                      <input
                        type="email"
                        class="block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                        id="E-Mail"
                        placeholder="E-Mail"
                        required
                        v-model="email" />
                      <label
                        for="E-Mail"
                        class=""
                        >
                      </label>
                    </div>

                    <!--Password input-->
                    <div class="relative mb-4">
                      <input
                        type="password"
                        class="block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                        id="Password"
                        placeholder="Password"
                        v-model="password" />
                      <label
                        for="Password"
                        class=""
                        >
                      </label>
                    </div>

                    <!--Submit button-->
                    <div class="mb-12 pb-1 pt-1 text-center">
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs leading-normal text-white shadow bg-gradient-to-r from-blue-200 via-purple-400 to-blue-400 hover:from-blue-400 hover:via-purple-400 hover:to-blue-200 transition duration-300 ease-in active:ring"
                        type="submit">
                        Registrieren
                      </button>
                    </div>

                    <!--Register button-->
                    <div class="flex items-center justify-between pb-6">
                      <p class="mb-0 mr-2">Du hast schon einen Account?</p>
                      <a class="" href="/login">
                        <button
                          type="button"
                          class="inline-block rounded border-2 border-blue-900 align-top px-6 py-2 text-xs leading-normal text-fh-blue-text">
                          Login
                        </button>

                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <!-- Right column container with background and description-->
              <div
                class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: linear-gradient(to right, #24b1ee, #3224ac, #7e36dd)">
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class="mb-6 text-xl font-semibold">
                    Wir sind mehr als nur eine Fachschaft
                  </h4>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          this.$router.push('/');
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