import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LoadingProducts from '@/components/SkeletonProducts/SkeletonProducts.vue'
import vuetify from "@/plugins/vuetify";

describe('SkeletonProducts.vue', () => {
  it('should render the correct number of skeleton loaders based on productsCount prop', () => {
    const productsCount = 5
    const wrapper = mount(LoadingProducts, {
      props: { productsCount },
      global: {plugins: [vuetify]}
    })
    expect(wrapper.findAllComponents({ name: 'VSkeletonLoader' }).length).toBe(productsCount)
  })
})
