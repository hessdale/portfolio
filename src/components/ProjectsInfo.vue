<template>
  <div>
    <article>
      <span id="title">
        <h2>Foodie App</h2>
        <p>
          Presenting "Foodie," the exciting simple fake foodie app I developed
          using Vue.js for an intuitive user interface. Supported by a robust
          backend with MariaDB and Python, Foodie provides a culinary adventure.
        </p>
        <a href="https://foodie.hessdale.site/#/discover" target="_blank">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
      </span>
      <span id="links">
        <a href="https://foodie.hessdale.site/#/discover" target="_blank">
          <img src="../../public/images/Foodie_App.png" alt="screenshot of Foodie App" /></a>
      </span>
    </article>
    <article>
      <span id="title">
        <h2>Printmaking Block Archive</h2>
        <p>
          Welcome to the Printmaking Block Archive! With Vue.js frontend and
          MariaDB-Python backend, our site showcases a vast collection of
          printmaking blocks. Explore art in augmented reality using Babylon.js
          technology!
        </p>
        <a href="https://foodie.hessdale.site/#/discover" target="_blank">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
      </span>
      <span id="links">
        <a href="https://printmaking.hessdale.site/#/" target="_blank">
          <img src="../../public/images/Printmaking.png" alt="screenshot of printmaking website" /></a>
      </span>
    </article>
    <article>
      <span id="title">
        <h2>Slice of Heaven</h2>
        <p>
          Slice of Heaven, my debut large front-end project, it is a fake pizza
          company website. Created with HTML, CSS, and JS, it features
          mouthwatering visuals, seamless navigation, and an interactive pizza
          customization experience. Enjoy a virtual pizza feast!
        </p>
        <a href="https://foodie.hessdale.site/#/discover" target="_blank">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
      </span>
      <span id="links">
        <a href="https://sliceofheaven.hessdale.site/" target="_blank">
          <img src="../../public/images/Slice_of_Heaven.png"
            alt="screenshot of Slice of Heaven Fake restaurant site" /></a>
      </span>
    </article>
    <article>
      <span id="title">
        <h2>Music Collection</h2>
        <p>
          Welcome to my Discogs Collection App, your gateway to exploring my extensive music collection. With the power
          of the Discogs API, I'm excited to share my passion for music with you. It's a labor of love aimed at creating a
          user-friendly platform for music enthusiasts like me to browse and discover my ever-growing collection.
        </p>
        <a href="https://music.hessdale.site/" target="_blank">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
      </span>
      <span id="links">
        <a href="https://music.hessdale.site/" target="_blank">
          <img src="../../public/images/Music_Collection.png"
            alt="screenshot of Slice of Heaven Fake restaurant site" /></a>
      </span>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: grid;
  justify-items: start;
}

#links {
  justify-items: center;
  align-items: center;
}

img {
  max-width: 90%;
}

#title {
  padding: 15px;
}

article {
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgba(156, 154, 154, 0.699);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 30px;
  align-items: center;
  justify-items: center;
  margin: 15px;
}

h2 {
  text-align: center;
}

p {
  display: grid;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-items: center;
}

@media only screen and (min-width: 575px) {
  img {
    max-width: 300px;
  }
}

@media only screen and (min-width: 900px) {
  article {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
  }

  #title {
    max-width: 80%;
  }
}
</style>