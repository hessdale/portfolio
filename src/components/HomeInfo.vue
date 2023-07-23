<template>
  <div>
    <main>
      <article id="profile">
        <h1>Dale</h1>
        <p>learning webdevelopment</p>
      </article>
      <article id="about_me">
        <h2>About me</h2>
        <p>
          I am currently in school for webdevelopment and enjoying it
          thuroughly. Some thing about me are that I like to collect anything
          music related. I enjoy movies and anime.
        </p>
      </article>
      <div id="profile_pic">
        <!-- <img src="/images/SwhirlNobackgroundopaque.png" alt="black swirl" /> -->
        <img src="/images/computer.png" alt="" />
      </div>
      <article id="details">
        <div>
          <h2>Details</h2>
        </div>
        <div>
          <h4>Name:</h4>
          <P>Dale H.</P>
        </div>
        <div>
          <h4>Age</h4>
          <p>27</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Edmonton, Canada</p>
          <section>
            <a href="https://github.com/hessdale"
              ><img src="/images/github.svg" alt="github icon" width="30px"
            /></a>
            <a href="https://www.linkedin.com/in/hessdale96/"
              ><img src="/images/linkedin.svg" alt="linkdin icon" width="30px"
            /></a>
            <a href="mailto:hessdale96@gmail.com"
              ><img
                src="/images/send-mail.svg"
                alt="send mail icon"
                width="33px"
            /></a>
          </section>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
p {
  text-align: center;
}

* {
  font-family: monospace;
  margin: 0;
  padding: 0;
  letter-spacing: 1.2px;
  line-height: 25px;
}
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 40px;
}
#profile_pic {
  text-align: center;
  margin-top: 70px;
}
#profile_pic > img {
  width: 60%;
}

#details img {
  margin-top: 10px;
}

#details > div {
  margin-top: 20px;
}

#profile h1 {
  font-size: 50px;
}

#profile p {
  margin-top: 20px;
}
@media only screen and (min-width: 575px) {
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(575px, 1fr));
  }
  #profile_pic {
    text-align: center;
  }

  #profile_pic > img {
    width: 60%;
    max-width: 500px;
  }
}
@media only screen and (min-width: 1100px) {
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 40px;
    padding: 100px;
  }

  #profile {
    display: grid;
    text-align: center;
    grid-column: span 3;
    justify-items: center;
    align-items: center;
  }

  #profile p {
    margin-top: 15px;
  }

  #profile_pic {
    text-align: center;
  }

  #details {
    margin-left: 50px;
  }

  #about_me p {
    max-width: 400px;
    margin-top: 15px;
  }
}
</style>

