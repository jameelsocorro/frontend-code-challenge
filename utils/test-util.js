import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/reducers/store.config';
import chaiJquery from 'chai-jquery';
import configureMockStore from 'redux-mock-store';

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
// Set up testing environment to run like a browser in the command line
global.document = document;
global.window = document.defaultView;
global.Should = chai.Should();
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props) {
  const componentInstance = TestUtils.renderIntoDocument(
    <ComponentClass {...props} />
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

function renderComponentWithStore(ComponentClass, props, state) {
  const store = configureStore(state);
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Setup mockStore for async action creators
const mockStore = configureMockStore();

export { renderComponent, renderComponentWithStore, expect, mockStore };
