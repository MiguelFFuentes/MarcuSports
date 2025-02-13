import {describe, it, expect} from "vitest"
import HelloWorld from "@/components/HelloWorld.vue"
import {mount} from "@vue/test-utils"
import {createVuetify} from "vuetify"

const vuetify = createVuetify()
describe("HelloWorld", () => {
  it("should render the component", () => {
    const wrapper = mount(HelloWorld, {global: {plugins: [vuetify]}})
    expect(wrapper.text()).toContain("Welcome")
  })
})
