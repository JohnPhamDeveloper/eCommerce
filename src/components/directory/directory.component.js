import React from 'react';

import testData from '../../directory.data';

import MenuItem from '../menu-item';

import './directory.styles.scss';

class Directory extends React.PureComponent {
  state = {
    sections: testData,
  };

  renderSections = () => {
    return this.state.sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />);
  };

  render() {
    return <div className="directory-menu">{this.renderSections()}</div>;
  }
}

export default Directory;
