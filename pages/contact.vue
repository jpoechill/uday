<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h3>Contact</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit in sapiente unde recusandae rem reiciendis nisi, dolores deserunt consequuntur hic ea libero, numquam aliquid modi velit! Architecto qui similique odit delectus in nostrum ducimus reprehenderit ipsam rem quas maiores vitae recusandae debitis eligendi, deserunt eum nemo pariatur voluptas? Quibusdam repellendus ex enim impedit? Ullam mollitia, eaque enim hic iure ut in labore ex impedit sequi nihil dolores culpa ipsum incidunt aliquam soluta quis voluptatem, ipsa voluptatibus repellat dolorem. Quidem et quod sequi tenetur natus facere a, quaerat velit voluptatum porro dolores nobis distinctio assumenda voluptates rem excepturi! Necessitatibus, voluptas!
            </p>
        </div>
    </div>
    <div class="row mb-5">
        <div class="offset-md-2 col-md-8 pt-3">
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