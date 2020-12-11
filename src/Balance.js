import {Chart} from 'react-google-charts'

import React, { Component } from 'react'

export class ChartHolder extends Component {

  constructor(){
    super();
    this.state ={
      data : []
    }
  }

  componentDidMount(){
      fetch('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view?custID= 20', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'x-api-key' : '0307OsNDnD1XEkAoThrwcGzJ2BPu2hD4GMLc5YG8'
    },
    body: {
      'username': 'Group20',
      'Password': '0UnYTL28SHqVG6Z'
    },
  })
  .then(response => response.json())
  .then(data => {
      this.setState({
        data : data
      })
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state.data)}</h1>
      {/* <Chart
        width={'100%'}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['day', 'a', 'b', 'c', 'd'],
          ['Mon', 20, 28, 38, 40],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15],
        ]}
        options={{
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      /> */}
      </div>
    )
  }
}

export default ChartHolder

