import { describe, it, expect } from 'vitest'
import {mount} from "@vue/test-utils";
import AlertError from "@/components/AlertError/AlertError.vue";
import vuetify from "@/plugins/vuetify";

describe('AlertError', () => {
  it('should render the correct error message', () => {
    const error = new Error(('Test error message'))
    const wrapper = mount(AlertError, {
      props: { error },
      global: {plugins: [vuetify]}
    })
    expect(wrapper.text()).toContain('Test error message')
  })
})
