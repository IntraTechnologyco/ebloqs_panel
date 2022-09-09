import React from 'react'
import LinkButtonBack from '../../components/Buttons/LinkButtonBack'
import CardLabelWithAmount from '../../components/Cards/CardLabelWithAmount'

export default function Balance() {
  return (
    <div>
      <LinkButtonBack text="Regresar" href="/finance"/>
      <div className='w-96 mt-10'>
      <CardLabelWithAmount text="Credit/debit card" amount={"1000.000.000"} />
      <br />
      <CardLabelWithAmount text="Bank" amount={"500.000.000"} />
      <br />
      <CardLabelWithAmount text="Balance" amount={"1500.000.000"} />
      </div>
    </div>
  )
}
