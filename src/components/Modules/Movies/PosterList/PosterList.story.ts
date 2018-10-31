import { storiesOf } from '@storybook/vue'

import PosterList from './PosterList.vue'
import { MovieFactory } from '@/entities/Movie'

const dummyMovie = MovieFactory()
const dummyMovies = Array(20)
  .fill(0)
  .map(_ => dummyMovie)

storiesOf('components/Modules/Movies/PosterList', module).add(
  'Default',
  () => ({
    components: { PosterList },
    data() {
      return {
        movies: dummyMovies
      }
    },
    template: `
  <div class="Storybook">
    <div class="StorybookSection">
      <div class="StorybookSection__Header">Poster</div>
      <div class="StorybookSection__Body dark">
        <div class="wrapper" style="width: 100%">
          <PosterList title="Popular Movies" :movies="movies" />
        </div>
      </div>
    </div>
  </div>
`
  })
)
