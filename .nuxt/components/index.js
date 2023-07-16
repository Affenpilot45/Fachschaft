export { default as ArticleForm } from '../../components/ArticleForm.vue'
export { default as Body } from '../../components/Body.vue'
export { default as ErstifahrtAnmeldung } from '../../components/ErstifahrtAnmeldung.vue'
export { default as Header1 } from '../../components/Header1.vue'
export { default as HiddenPage } from '../../components/HiddenPage.vue'
export { default as Login } from '../../components/Login.vue'
export { default as Register } from '../../components/Register.vue'
export { default as Calender } from '../../components/calender.vue'
export { default as Collapsablenav } from '../../components/collapsablenav.vue'
export { default as Contact } from '../../components/contact.vue'
export { default as Einsichtanmeldungen } from '../../components/einsichtanmeldungen.vue'
export { default as Features } from '../../components/features.vue'
export { default as Imagegalery } from '../../components/imagegalery.vue'
export { default as Navbar } from '../../components/navbar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
