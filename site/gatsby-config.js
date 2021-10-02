module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-serenity",
      options: {
        title: "Serenity 平静",
        subtitle: "a short subtitle for the meta title on the home page",
        description: "A minimal theme for your personal blog or webpage",
        siteUrl: "https://asiermarques.com",
        defaultPreviewImage: "/og-default.png",
        author: {
          name: "Asier Marqués",
          bio: "Software Engineer",
          url: "https://asiermarques.com",
          links: {
            twitter: "https://twitter.com/asiermarques",
            linkedin: "https://linkedin.com/in/asier",
            github: "https://github.com/asiermarques",
            instagram: "https://instagram.com/asiermarques",
            mail: "mailto:asiermarques@gmail.com"
          }
        },
        links: [
          {
            title: "Articles",
            href: "/"
          },
          {
            title: "About me",
            href: "/info/about-me"
          },
        ],
        articles_per_page: 4,
        language: "en"
      },
    },
  ],
}
