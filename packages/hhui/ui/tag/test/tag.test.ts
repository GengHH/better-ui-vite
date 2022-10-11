import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Tag } from '../index';

test('tag test', () => {
  const wrapper = shallowMount(Tag, {
    props: {}
  });

  it('tag demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
