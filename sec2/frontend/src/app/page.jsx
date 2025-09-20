import Card from '@/components/Card';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Good Evening</h1>

      <Card title={'Good Morning'} description={'lorem ipsumm'}/>
      <Card title={'Good Bye'}/>

      <button className='global-btn' >Click Me</button>

    </div>
  )
}

export default Home;