import React from 'react'
import RestourauntHome from '../shared/components/Restoraunt/RestourauntHome'
import RestAbout from '../shared/components/Restoraunt/RestAbout'
import RestMenu from '../shared/components/Restoraunt/RestMenu'
import RestChef from '../shared/components/Restoraunt/RestChef'
import RestBooking from '../shared/components/Restoraunt/RestBooking'

export default function Restoraunt() {
  return (
    <>
    <RestourauntHome/>
    <RestAbout/>
    <RestMenu/>
    <RestChef/>
    <RestBooking/>
    </>
  )
}
