import React from 'react'
import CardProject from '../../components/Cards/CardProject'

export default function Projects() {
  return (
    <div>
      <h2 className='text-2xl text-purple-dark font-bold'>Create projects</h2>
      <div className='grid grid-cols-4 gap-8 mt-5'>
      <CardProject icon="/images/realstateicon.png" title="Real state" url="projects/real-state" textLink="View projects"/>
      <CardProject icon="/images/houseicon.png" title="House" url="projects/house" textLink="View projects"/>
      <CardProject icon="/images/apartmenticon.png" title="Apartments" url="projects/apartments" textLink="View projects"/>
      <CardProject icon="/images/officeicon.png" title="Offices" url="projects/offices" textLink="View projects"/>
      <CardProject icon="/images/landicon.png" title="Land" url="projects/land" textLink="View projects"/>
      <CardProject icon="/images/realstateicon.png" title="Real state projects" url="projects/real-state-projects" textLink="View projects"/>
      <CardProject icon="/images/caricon.png" title="Vehicles" url="projects/vehicles" textLink="View projects"/>
      <CardProject icon="/images/educationicon.png" title="Education" url="projects/education" textLink="View projects"/>
      </div>
    </div>
  )
}
