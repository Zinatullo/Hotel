import React from 'react'
import ContactHome from '../shared/components/Contacts/ContactHome'
import ContactCards from '../shared/components/Contacts/ContactCards'
import ContactMap from '../shared/components/Contacts/ContactSMS'
import ContactSMS from '../shared/components/Contacts/ContactSMS'
import ContactFlex from '../shared/components/Contacts/ContactFlex'
import ContactQuestions from '../shared/components/Contacts/ContactQuestions'

export default function Contacts() {
  return (
    <>
    <ContactHome/>
    <ContactCards/>
    <ContactFlex/>
    <ContactQuestions/>
    </>

  )
}
