import Vue from 'vue'
// import inputText from '~/components/Forms/InputText'
import inputText from '~/components/Forms/InputText'

const components = {
  inputText
}

// Vue.component(components)

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
