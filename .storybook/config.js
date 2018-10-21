import { configure, addDecorator } from '@storybook/vue'
import { checkA11y } from '@storybook/addon-a11y'

const req = require.context('../src', true, /\.story\.ts$/)

addDecorator(checkA11y)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
