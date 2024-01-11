<template>
    <button v-if="loggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
</template>
<script setup lang="ts">
await new Promise(resolve => setTimeout(resolve, 200));
const { data } = await useFetch('/api/auth', { lazy: false });
const loggedIn = ref(data?.value?.loggedIn);
const login = async () => {
    const response = await useFetch(
        "/api/login",
        {
            method: "PUT",
        }
    );
    loggedIn.value = response.data?.value?.loggedIn;
}
const logout = async () => {
    const response = await useFetch(
        "/api/logout",
        {
            method: "PUT",
        }
    );
    loggedIn.value = response.data?.value?.loggedIn;
}
</script>