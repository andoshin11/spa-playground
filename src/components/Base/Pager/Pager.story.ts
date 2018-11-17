import { storiesOf } from '@storybook/vue'

import Pager from './Pager.vue'

storiesOf('components/Base/Pager', module)
  .add('Default', () => ({
    components: { Pager },
    data() {
      return {
        currentPage: 2
      }
    },
    template: `
    <div class="Storybook">
      <div class="StorybookSection">
        <div class="StorybookSection__Header">Pager</div>
        <div class="StorybookSection__Body dark">
          <div class="wrapper" style="width: 100%">
            <div style="color: #fff;margin-bottom: 16px;font-size: 18px;font-weight: bold;">Current Page: {{ currentPage }}</div>
            <Pager :currentPage="currentPage" :size="1" :total="10" @change="num => currentPage = num" />
          </div>
        </div>
      </div>
    </div>
  `
  }))
  .add('Last page', () => ({
    components: { Pager },
    data() {
      return {
        currentPage: 10
      }
    },
    template: `
    <div class="Storybook">
      <div class="StorybookSection">
        <div class="StorybookSection__Header">Pager</div>
        <div class="StorybookSection__Body dark">
          <div class="wrapper" style="width: 100%">
            <div style="color: #fff;margin-bottom: 16px;font-size: 18px;font-weight: bold;">Current Page: {{ currentPage }}</div>
            <Pager :currentPage="currentPage" :size="1" :total="10" @change="num => currentPage = num" />
          </div>
        </div>
      </div>
    </div>
  `
  }))
