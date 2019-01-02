import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo'
import IconBar from '../IconBar'
import DropdownList from './DropdownList'

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {
    hidden: true,
    active: ''
  }
  handleShowLists = () => {
    this.setState({showList: !this.state.showList})
  }
  handleShowCat = () => {
    this.setState({showCategory: !this.state.showCategory})
  }
  toggleCatalog = (catalog) => {
    const {active} = this.state
    this.setState({
      hidden: active === catalog,
      active: active === catalog ? '' : catalog
    })
  }
  render() {
    const {hidden, active} = this.state
    console.log('active state...', active)
    return (
      <div>
        <NavBar>
          <Logo/>
          <IconBar
            // handleShowLists={this.handleShowLists}
            // handleShowCat={this.handleShowCat}
            toggleCatalog={this.toggleCatalog}
            active={active}
          />
          { hidden ? null : <DropdownList catalog={active}/> }
          {/*<DropdownList show={this.state.showCategory} data={CAT}/>*/}
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          {/*<HeaderLink to="/features">*/}
            {/*<FormattedMessage {...messages.features} />*/}
          {/*</HeaderLink>*/}
          {/*<HeaderLink to="/danh-sach/test">*/}
            {/*<FormattedMessage {...messages.list} />*/}
          {/*</HeaderLink>*/}
          {/*<HeaderLink to="/the-loai/test">*/}
            {/*<FormattedMessage {...messages.category} />*/}
          {/*</HeaderLink>*/}
      
        </NavBar>
      </div>
    );
  }
}

export default Header;
