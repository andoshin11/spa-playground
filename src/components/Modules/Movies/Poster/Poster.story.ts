import { storiesOf } from '@storybook/vue'
import { withScreenshot } from 'zisui'

import Poster from './Poster.vue'
import { MovieFactory } from '@/entities/Movie'

const dummyMovie = MovieFactory()

storiesOf('components/Modules/Movies/Poster', module)
  .addDecorator(
    withScreenshot({
      delay: 3000
    })
  )
  .add('Default', () => ({
    components: { Poster },
    data() {
      return {
        movie: dummyMovie
      }
    },
    template: `
  <div class="Storybook">
    <div class="StorybookSection">
      <div class="StorybookSection__Header">Poster</div>
      <div class="StorybookSection__Body">
        <div class="wrapper" style="width: 320px">
          <Poster :movie="movie" />
        </div>
      </div>
    </div>
  </div>
`
  }))
  .add('Focused', () => ({
    components: { Poster },
    data() {
      return {
        movie: dummyMovie
      }
    },
    template: `
  <div class="Storybook">
    <div class="StorybookSection">
      <div class="StorybookSection__Header">Poster</div>
      <div class="StorybookSection__Body">
        <div class="wrapper" style="width: 320px">
          <Poster :movie="movie" focused />
        </div>
      </div>
    </div>
  </div>
`
  }))
