import React from 'react';
import renderer from 'react-test-renderer';
import ComponentList from './ComponentList';

describe('First Test Suite', () => {
  it('Renders Jack ones', () => {
    const testRenderer = renderer.create(<ComponentList />);
    const testInstance = testRenderer.root;
    expect(
      testInstance.find(
        (el) => el.type == 'p' && el.children[0] == '{"name":"Jack"}'
      )
    );
  });
});
