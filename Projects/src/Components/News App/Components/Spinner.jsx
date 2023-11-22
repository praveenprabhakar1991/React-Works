import React from 'react'
import Loading from './Assets/Loading.gif'

class Spinner extends React.Component {

   render() {
      return <>
      <div className='text-center'>
         <img src={Loading} alt="" />
      </div>
      </>
   }
}

export default Spinner