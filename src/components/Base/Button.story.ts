import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Button from './Button.vue'

storiesOf('components/Base/Button', module).add('Default', () => ({
  components: { Button },
  template: `
  <div class="Storybook">
    <div class="StorybookSection">
      <div class="StorybookSection__Header">Primary Buttons</div>
      <div class="StorybookSection__Body">
        <div class="StorybookSection__Label">Large</div>
        <Button text="test" size="large" />
        <div class="StorybookSection__Label">Midium</div>
        <Button text="test" />
        <div class="StorybookSection__Label">Small</div>
        <Button text="test" size="small" />
      </div>
  </div>
`
}))
