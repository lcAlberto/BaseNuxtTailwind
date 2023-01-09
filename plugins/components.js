import Vue from 'vue'
import inputText from '~/components/Forms/InputText'
import inputPassword from '~/components/Forms/InputPassword'

const components = {
  inputText,
  inputPassword
}

// Vue.component(components)

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
