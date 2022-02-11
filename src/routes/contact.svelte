<script context="module">
  export const prerender = true;
</script>

<script>
  let isSubmitting = false;

  const handleSubmit = (e) => {
    let myForm = document.getElementById("test");
    let formData = new FormData(myForm);
    isSubmitting = true;
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        isSubmitting = false;
        myForm.reset();
      })
      .catch((error) => {
        alert(error);
        isSubmitting = false;
      });
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<form
  id="test"
  name="test"
  on:submit|preventDefault={handleSubmit}
  netlify
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="test" />
  <input type="text" name="bot-field" style="opacity: 0" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message" /></label>
  </p>
  <p>
    {#if isSubmitting}
      <div>Submitting</div>
    {:else}
      <button type="submit">Send</button>
    {/if}
  </p>
</form>