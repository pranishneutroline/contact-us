import React from 'react'
// import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat'
import Cards from '../components/Card/Cards'
// import Faq from '../components/FAQ/Faq'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import Header from '../components/Header/Header'
import FixedButton from '../components/PopupForm/FixedButton'
import FormDialog from '../components/PopupForm/FormDialog'
// import Navbar from '../components/Navbar/Navbar'

function ContactUs() {
  return (
    <div>
        {/* <Navbar /> */}
       
        <Header />
        {/* <FixedButton /> */}
     <FormDialog />
        <Cards />
        <GetInTouch />
        {/* <Faq /> */}

    </div>
  )
}

export default ContactUs