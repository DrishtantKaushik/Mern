import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <h1 className= 'text-center text-5xl font-bold mt-4'></h1>
      <p style= {{fontSize: 40, color: 'red', textAline: 'center'}}>Using in line CSS in JSX</p>
      <input type="text" />
      <img src="next.svg" alt="" /> */}
      <button className='global-btn'> logon glaobal button</button>
      {/* <button className= {classes.loginBtn}>login button</button> */}
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <Card  title={'God of War'} genre={'Action'} 
          imgLink={'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1750909504'}
        />
        <Card title={'cod'} genre={'Action'} 
          imgLink={'https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-franchise-hub-keyart-01-en-21nov23?$facebook$'} />
        <Card  title={'hacunamatata'} genre={'Action'} 
          imgLink={'https://static.vecteezy.com/system/resources/thumbnails/041/435/680/small_2x/ai-generated-cute-meerkat-cartoon-illustration-isolated-on-transparent-background-generative-ai-png.png'}/>
        <Card title={'alog'} genre={'Action'} 
          imgLink={'https://image.api.playstation.com/vulcan/ap/rnd/202306/0615/8a59c86894fef90698e2c70fabab33a6b218d17a465daeae.jpg'}/>
          <Card  title={'bgmi'} genre={'Action'}
            imgLink={'https://www.socialchaye.com/wp-content/uploads/2024/08/bgmi-feature-image.png'}/>
        <Card  title={'motogp'} genre={'Action'}
         imgLink={'https://images.alphacoders.com/130/thumb-1920-1308980.jpeg'} />
      </div>

      <MyButton> optimas prime</MyButton>
      <MyButton>follow me</MyButton>
      <MyButton>on road</MyButton>
      <MyButton>click me</MyButton>
    </div>

  )
}

export default Home;
