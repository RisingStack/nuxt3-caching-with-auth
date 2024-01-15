<template>
    <button v-if="loggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
</template>
<script setup lang="ts">
const loggedIn: Ref<boolean | undefined> = ref(false);
const { data } = await useFetch('/api/auth');
loggedIn.value = data?.value?.loggedIn;
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