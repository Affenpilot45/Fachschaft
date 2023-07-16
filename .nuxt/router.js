import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _167e6592 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _e60dc75e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0dc1ed5a = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _795d0d8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _167e6592,
    name: "admin"
  }, {
    path: "/login",
    component: _e60dc75e,
    name: "login"
  }, {
    path: "/test",
    component: _0dc1ed5a,
    name: "test"
  }, {
    path: "/",
    component: _795d0d8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
