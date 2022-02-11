<script context="module">
    
    const query = `
    query getHome {
        pageBy(uri: "how-it-works") {
            id
            title
            content
        }
    }
    `;

    export async function load({} ) {
      const response = await fetch("https://mdsmx.xyz/fuga/graphql", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
          if (response.ok) {
        const responseObj = await response.json();
        const data = responseObj.data.pageBy;
        const content = data.content;
  
              return {
                  props: {
                      content,
                  }
              };
          }
  
          return {
              status: response.status,
              error: new Error(`Could not load ${url}`)
          };
      }
</script>

<script>
    export let content;
</script>

<div class="container mx-auto">
    <h2 class="font-ubuntu text-2xl md:text-6xl text-fuga-pink font-medium  lg:w-3/5 lg:my-20 mt-20 mb-8 px-4">
        Entrenamientos y planes alimenticios personalizados, basados en análisis y enfocados en lograr objetivos.
    </h2>

    <div>
        {@html content}
    </div>

</div>


