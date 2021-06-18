<template>
    <div style="height: 300px;">
        <LoginMenu />

        <div class="grid gap-2">
            <input
                v-model="email"
                type="text"
                placeholder="Digite seu e-mail"
                class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm py-3 px-4 block w-full appearance-none leading-normal"
            >

            <input
                v-model="password"
                type="password"
                placeholder="Digite sua senha"
                class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm py-3 px-4 block w-full appearance-none leading-normal"
            >

            <button
                type="submit"
                class="flex items-center justify-center bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-sm py-3 px-4 block w-full appearance-none leading-normal"
                @click.stop.prevent="login()"
            >
                ENTRAR
            </button>

            <div class="my-4 text-center">
                <RouterLink
                    :to="{ name: 'forgot-password'}"
                    class="text-sm font-light"
                >
                    Esqueci minha senha
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginMenu from '../components/Auth/LoginMenu.vue';
    import Cookie from 'js-cookie';

    export default {
        name: 'Login',

        components: {
            LoginMenu,
        },

        data() {
            return {
                email: '',
                password: '',
            };
        },

        methods: {
            login() {
                const payload = {
                    email: this.email,
                    password: this.password,
                };

                this.$axios.post('v1/login', payload).then((response) => {
                    console.log(response);
                    const token = `${response.data.token_type} ${response.data.access_token}`;
                    Cookie.set('_todolist_token', token, { expires: 30 });
                });
            },
        },
    };
</script>
