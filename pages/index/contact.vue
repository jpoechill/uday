<template>
  <div class="container">
    <div class="row mb-4">
        <div class="offset-md-2 col-md-8">
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore alias enim maxime dolor doloremque magni excepturi voluptas ducimus quidem provident, eos aperiam illo, unde quaerat facere consectetur omnis suscipit.
            <br><br> -->
            Name <br>
            <input type="text" class="w-100 mb-3">
            Email <br>
            <input type="text" class="w-100 mb-3">
            Message <br>
            <textarea rows="5" class="w-100 mb-3"></textarea>
            <button class="p-2 w-100">Send Message</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
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