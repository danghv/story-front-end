import React from 'react'
import styled from 'styled-components'

class IconBar extends React.Component {
  render() {
    const {toggleCatalog, active} = this.props
    return (
      <$IconBar>
        <a href="#">
          <i className="fa fa-home"/>
        </a>
        <a
          href="#"
          onClick={() => toggleCatalog('danh-sach')}
          className={active === 'danh-sach' ? 'active' : ''}
        >
          Danh sách
          <i className={`fa fa-caret-${active === 'danh-sach' ? 'down' : 'right'}`}/>
        </a>
        <a
          href="#"
          onClick={() => toggleCatalog('the-loai')}
          className={active === 'the-loai' ? 'active' : ''}
        >
          Thể loại
          <i className={`fa fa-caret-${active === 'the-loai' ? 'down' : 'right'}`}/>
        </a>
      </$IconBar>
    );
  }
}

const $IconBar = styled.div`
  display: flex;
  background-color: #5f5f5f;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > a:first-child {
    // text-align: left;
    width: 20%;
  }
  & > a {
    text-decoration: none;
    color: white;
    width: 40%;
    text-align: center;
    font-size: 22px;
    padding: 10px 15px 9px 15px;
    & > i {
      width: 10px;
      display: inline;
      margin-left: 3px;
    }
  }
  & > a.active {
    background-color: #000000;
  }
`

export default IconBar



