import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ArticleItem from '@/components/ArticleItem.vue';

describe('ArticleItem.vue', () => {
  it('renders props.msg when passed', () => {
    const itemData = {
      title: 'title',
      created_date: new Date().toString(),
      tags: []
    };
    const wrapper = shallowMount(ArticleItem, {
      propsData: { itemData }
    });
    expect(wrapper.text())
      .to
      .include(itemData.title);
  });
});
