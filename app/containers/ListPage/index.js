import React from 'react'

export default class ListPage extends React.Component {
  render() {
    console.log('props in list page...', this.props)
    return (
      <div>THis is list page</div>
    )
  }
}