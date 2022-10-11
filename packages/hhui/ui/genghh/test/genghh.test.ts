import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Genghh } from '../index';

test('genghh test', () => {
  const wrapper = shallowMount(Genghh, {
    props: {}
  });

  it('genghh demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
