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
      </span>
      <span id="links">
        <a href="https://foodie.hessdale.site/#/discover">
          <img
            src="../../public/images/Foodie_App.png"
            alt="screenshot of Foodie App"
            width="300px"
        /></a>
        <a href="https://foodie.hessdale.site/#/discover">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
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
      </span>
      <span id="links">
        <a href="https://printmaking.hessdale.site/#/">
          <img
            src="../../public/images/Printmaking.png"
            alt="screenshot of printmaking website"
            width="300px"
        /></a>
        <a href="https://foodie.hessdale.site/#/discover">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
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
      </span>
      <span id="links">
        <a href="https://sliceofheaven.hessdale.site/">
          <img
            src="../../public/images/Slice_of_Heaven.png"
            alt="screenshot of Slice of Heaven Fake restaurant site"
            width="300px"
        /></a>
        <a href="https://foodie.hessdale.site/#/discover">
          <img src="../../public/images/www.svg" alt="world wide web icon" />
        </a>
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
}
#title {
  padding: 15px;
}
article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(156, 154, 154, 0.699);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  align-items: center;
}
h2 {
  text-align: center;
}
p {
  display: grid;
  text-align: center;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-items: center;
}
</style>