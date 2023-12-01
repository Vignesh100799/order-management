import React from 'react'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {

    const receivedData=[
        {
            feedback:'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!',
            customer:'Naveen',
            location:'London',
            id:'1'
        },
        {
            feedback:'he whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!',
            customer:'Vignesh',
            location:'France',
            id:'2'
        },
        {
            feedback:'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!',
            customer:'Mugesh',
            location:'Thailand',
            id:'3'
        },
        {
            feedback:'he whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!',
            customer:'Vignesh',
            location:'France',
            id:'4'
        }
    ]

  return (
<section className="py-5 border-bottom">
  <div className="container px-5 my-5 px-5">
    <div className="text-center mb-5">
      <h2 className="fw-bolder">Customer testimonials</h2>
      <p className="lead mb-0">Our customers love working with us</p>
    </div>
    <div className="row gx-5 justify-content-center">
      {
        receivedData.map((feed,index)=>{
            return <FeedbackCard feed={feed} key={index} />
        })
      }


      </div>
    </div>
  
</section>

  )
}

export default Testimonials