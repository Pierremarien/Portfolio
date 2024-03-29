const projects = [
    {
        "title": "Cogip",
        "description": "For this project we worked as a team of 4 to create this website. We had two members working on a rest API and two members working on the front-end. For the frontend we used React, react-router-dom, Tailwind. This project was quite the challenge to create reusable components for an api we didn't have yet. We needed some good teamwork to make this work and i'm quite happy of the result. We still need to work out a real login and access to the admin panel and there are some small styles fixes to be made to perfect it.",
        "website": "https://cogip-seven.vercel.app/",
        "code": "https://github.com/antoinel74/COGIP",
        "imgs": [
            {
                "img": "/assets/cogip.png",
                "alt": "cogip"
            },
            {
                "img": "/assets/cogip2.png",
                "alt": "cogip"
            },
            {
                "img": "/assets/cogip3.png",
                "alt": "cogip"
            },
            {
                "img": "/assets/cogip4.png",
                "alt": "cogip"
            },
            {
                "img": "/assets/cogip5.png",
                "alt": "cogip"
            }
        ]
    },
    {
        "title": "Az-Store",
        "description": "This was a group project of 3 people. I chose this project because i wanted to show the learning path we had. This was a first group project using php to make a website selling shoes. We made a pseudo login using php sessions and created a cart system. We learned to display data dynamicaly using php and how to handle layouts and components with php and SCSS. Quite the adventure.",
        "website": null,
        "code": "https://github.com/Pierremarien/AZ-Store",
        "imgs": [
            {
                "img": "/assets/az-store.png",
                "alt": "azstore"
            },
            {
                "img": "/assets/az-store2.png",
                "alt": "azstore"
            },
            {
                "img": "/assets/az-store3.png",
                "alt": "azstore"
            },
            {
                "img": "/assets/az-store4.png",
                "alt": "azstore"
            },
            {
                "img": "/assets/az-store5.png",
                "alt": "azstore"
            }
        ]
    },
    {
        "title": "Pokedex",
        "description": "We had to create a website allowing users to login and select their favorite pokemons using our homemade pokedex. This was the first project using a database php and sql to handle data and login. We also used SCSS to style the website. We created an admin panel to add pokemons to the database and a login system to access it. We also created a search bar to search for pokemons and dynamic pages to display a single pokemon data and explored database table relations to display their evolutions there too.",
        "website": null,
        "code": "https://github.com/Robpiot/pokedex",
        "imgs": [
            {
                "img": "/assets/pokedex.png",
                "alt": "pokedex"
            },
            {
                "img": "/assets/pokedex2.png",
                "alt": "pokedex"
            },
            {
                "img": "/assets/pokedex3.png",
                "alt": "pokedex"
            },
            {
                "img": "/assets/pokedex4.png",
                "alt": "pokedex"
            }
        ]
    }
];

export async function load({ params }) {
    const { slug } = params;
    const project = projects.find(p => p.title.toLowerCase() === slug.toLowerCase());
  
    if (project) {
      return project;
    } else {
      return { status: 404, error: new Error('Not found') };
    }
  }