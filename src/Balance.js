import {Chart} from 'react-google-charts'

import React, { Component } from 'react'

export class ChartHolder extends Component {

  constructor(){
    super();
    this.state ={
      data : {
        Amount : 0
      }
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
      let {Amount} = data
      this.setState({
        Amount : Amount
      })
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  }

  render() {
    return (
      <div>
        <h1>My Balance: ${this.state.data.Amount? this.state.data.Amount : '20,323.78' }</h1>
            {<Chart
              width={'500px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Task', 'percentage amt'],
                ['Self-improvement', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Entertainment', 2],
                ['Hotel', 7],
              ]}
              options={{
                title: 'My Daily Expenditure',
              }}
              rootProps={{ 'data-testid': '1' }}
      />}
      </div>
    )
  }
}

export default ChartHolder

