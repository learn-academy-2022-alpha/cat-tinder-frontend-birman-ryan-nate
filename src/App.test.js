// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new Adapter() })

describe('when App renders', () => {
  it('should render a header and footer', () => {
    const renderApp = shallow(<App />);

    const renderHeader = renderApp.find("Header")
    expect(renderHeader.length).toEqual(1)

    const renderFooter = renderApp.find("Footer")
    expect(renderFooter.length).toEqual(1)
  })
})
