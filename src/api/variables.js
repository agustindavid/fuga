export const variables = {
    basePath: import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL,
    homeContent: `
    query getHome {
  pageBy(uri: "home") {
    id
    title
    slidesHome {
      slides {
        slide {
          mediaItemUrl
        }
      }
    }
    home {
      quienesSomos {
        cta {
          target
          title
          url
        }
        texto
        titulo
        imagen {
          mediaItemUrl
        }
      }
      videoHome {
        mediaItemUrl
      }
      videoPoster {
        mediaItemUrl
      }
    }
    sponsors {
      sponsors {
        link
        logo {
          mediaItemUrl
        }
      }
    }
    testimonios {
      testimonio {
        image {
          mediaItemUrl
        }
        name
        text
      }
    }
    content
  }
}
    `
  }