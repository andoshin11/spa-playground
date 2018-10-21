import { storiesOf } from '@storybook/vue'

import Poster from './Poster.vue'
import { MovieFactory } from '@/entities/Movie'

const dummyMovie = MovieFactory()

storiesOf('components/Modules/Movies/Poster', module).add('Default', () => ({
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
