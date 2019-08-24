<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mt-4 text-center">
            Login
        </div>
    </div>
    <div class="row mb-5">
        <div class="offset-md-4 col-md-4 pt-3 mb-5">
            Email <br>
            <input type="text" class="w-100 mb-3">
            Password <br>
            <input type="text" class="w-100 mb-3">
            <button class="p-2 w-100" @click="handleLogin()">Login</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
        this.$store.commit('login')
        this.$router.push({
            path: '/dashboard'
        })
        }
    },
    transition: 'fade'
}
</script>

<style>
input[type=text], textarea {
    border-radius: 20px;
    border: 2px solid #f2f2f2;
    padding: .5rem 1rem;
    margin: .4rem 0px;
}

button {
    border-radius: 20px;
    border: 0px;
    background-color: #f7f7f7;
    color: #F6960F;
    font-size: 20px;
    font-weight: 700;
}

button:hover {
    color: #d4810d;
    background-color: #f5f5f5;
    cursor: pointer;
}
</style>