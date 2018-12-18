/* eslint-disable node/no-unpublished-import */

import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

export {
  shallow,
  mount,
  render
};
export default Enzyme;

/* eslint-enable node/no-unpublished-import */
