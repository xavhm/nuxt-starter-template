import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vite-plus/test'
import { defineComponent } from 'vue'

describe('Nuxt test environment', () => {
  it('mounts a Vue component', async () => {
    const component = await mountSuspended(
      defineComponent({
        template: '<p>Hello from Nuxt</p>',
      }),
    )

    expect(component.text()).toBe('Hello from Nuxt')
  })
})
