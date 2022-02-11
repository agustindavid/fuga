<script context="module">
    export const prerender = true;
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form name="test" method="post" netlify netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="test" />
    <input type="text" name="bot-field" />
    <p>
        <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
        <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
        <label>Message: <textarea name="message" /></label>
    </p>

    <p>Please select your age:</p>
    <input type="radio" id="age1" name="age" value="30">
    <label for="age1">0 - 30</label><br>
    <input type="radio" id="age2" name="age" value="60">
    <label for="age2">31 - 60</label><br>  
    <input type="radio" id="age3" name="age" value="100">
    <label for="age3">61 - 100</label><br><br>
    <p>
        <button type="submit">Send</button>
    </p>
</form>