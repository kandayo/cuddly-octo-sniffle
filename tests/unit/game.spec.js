import { shallowMount } from '@vue/test-utils'
import { reais } from '@/filters'

import Game from '@/components/Game.vue'

describe('Game.vue', () => {
  it('renders', () => {
    const data = {
      id: 221,
      image: 'images/jsengine.png',
      name: 'Javascript Engine',
      price: 213.22
    }

    const wrapper = shallowMount(Game, {
      propsData: data
    })

    expect(wrapper.find('.game .title').text()).toMatch(data.name)
    expect(wrapper.find('.game .price').text()).toMatch(reais(data.price))
  })
})
