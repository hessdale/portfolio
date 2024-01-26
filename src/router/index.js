import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: [
      {
        title: 'Home Page'
      },
      {
        name: 'description',
        content: 'Welcome to my website!'
      },
      {
        name: 'author',
        content: 'Dale Hess'
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: [
      {
        title: 'About Page'
      },
      {
        name: 'description',
        content: 'About Page about me Dale Hess!'
      },
      {
        name: 'author',
        content: 'Dale Hess'
      }
    ]
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: [
      {
        title: 'Projects Page'
      },
      {
        name: 'description',
        content: 'Showcasing my current projects!'
      },
      {
        name: 'author',
        content: 'Dale Hess'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }
  let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
  for (let i = 0; i < new_meta_tags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
      `<meta name="${new_meta_tags[i][`name`]}"
    content="${new_meta_tags[i][`content`]}">`);
  }
  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    `<meta charset="utf-8">
  <meta http-equiv=""X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  );
  from;
  next()
}
);

export default router
