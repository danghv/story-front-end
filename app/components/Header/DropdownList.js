import React from 'react'
import styled from 'styled-components'

const INFO = [
  {value: 'truyen-moi', display: 'Truyện mới cập nhật'},
  {value: 'truyen-hot', display: 'Truyện Hot'},
  {value: 'truyen-full', display: 'Truyện Full'},
  {value: 'tien-hiep-hay', display: 'Tiên Hiệp Hay'},
  {value: '-hiep-hay', display: 'Kiếm Hiệp Hay'},
  {value: 'truyen-teen-hay', display: 'Truyện Teen Hay'},
  {value: 'ngon-tinh-hay', display: 'Ngôn Tình Hay'},
  {value: 'ngon-tinh-sac', display: 'Ngôn Tình Sắc'},
  {value: 'ngon-tinh-nguoc', display: 'Ngôn Tình Ngược'},
  {value: 'ngon-tinh-sung', display: 'Ngôn Tình Sủng'},
  {value: 'ngon-tinh-hai', display: 'Ngôn Tình Hài'},
  {value: 'dam-my-hai', display: 'Đam Mỹ Hài'},
  {value: 'dam-my-hay', display: 'Đam Mỹ Hay'},
  {value: 'dam-my-h-van', display: 'Đam Mỹ H Văn'}
]

const CAT = [
  {value: 'tien-hiep', display: 'Tiên Hiệp'},
  {value: 'kiem-hiep', display: 'Kiếm Hiệp'},
  {value: 'ngon-tinh', display: 'Ngôn Tình'},
  {value: 'do-thi', display: 'Đô Thị'},
  {value: 'quan-truong', display: 'Quan Trường'},
  {value: 'vong-du', display: 'Võng Du'},
  {value: 'khoa-huyen', display: 'Khoa Huyễn'},
  {value: 'huyen-huyen', display: 'Huyền Huyễn'},
  {value: 'di-gioi', display: 'Dị Giới'},
  {value: 'di-nang', display: 'Dị Năng'},
  {value: 'quan-su', display: 'Quân Sự'},
  {value: 'lich-su', display: 'Lịch Sử'}
]

export default class DropdownList extends React.Component {
  render() {
    const {catalog} = this.props
    switch (catalog) {
      case 'danh-sach':
        return (
          <$DropdownList>
            <ul>
              {INFO.map(item => <li key={item.value}>{item.display}</li>)}
            </ul>
          </$DropdownList>
        )
        break
      case 'the-loai':
        return (
          <$DropdownList>
            <ul>
              {CAT.map(item => <li key={item.value}>{item.display}</li>)}
            </ul>
          </$DropdownList>
        )
        break
      default:
        return null
    }
  }
}

const $DropdownList = styled.div`
  background-color: #5f5f5f;
  padding: 24px 48px;
  & > ul {
    margin: 0;
    padding: 0 8px;
  }
  & > ul > li {
    list-style-type: none;
    text-align: left;
    color: white;
    padding: 2px 0 2px 6px;
  }
`