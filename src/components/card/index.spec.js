import { renderComponent, expect } from '../../../utils/test-util';
import { Card } from './index';

describe('Card Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Card);
  });

  it('it has button', () => {
    expect(component.find('[name="card-image-button"]')).to.exist;
  });

  it('it has image', () => {
    expect(component.find('[name="card-image"]')).to.exist;
  });

  it('it has title', () => {
    expect(component.find('[name="card-title"]')).to.exist;
  });

  it('it has address', () => {
    expect(component.find('[name="card-address"]')).to.exist;
  });

  it('it has price', () => {
    expect(component.find('[name="card-price"]')).to.exist;
  });

  it('it has room count info', () => {
    expect(component.find('[name="card-room-count"]')).to.exist;
  });

  it('it has room size info', () => {
    expect(component.find('[name="card-room-size"]')).to.exist;
  });

});
