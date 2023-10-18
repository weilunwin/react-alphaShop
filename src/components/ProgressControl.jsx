import leftArrow from '../icons/leftArrow.svg'
import rightArrow from '../icons/rightArrow.svg'
import { useState } from 'react'

export default function ProgressControl({step, setStep}) {
  
function AddressStep() {
  function handleNext() {
    if(step === 1){
      setStep(2)
    }
  }
    return (
      <section className="button-group col col-12" data-step='1'>
        <button className="next cursor-point" onClick={handleNext}>
          下一步
          <img className="cursor-point" src={rightArrow} alt='RIGHTARROW' />
        </button>
      </section>
    )
  }

 function ShippingStep() {
   function goCreditCardStep() {
     if (step === 2) {
       setStep(3)
     }
   }

   function goAddressStep(){
    if(step === 2) {
      setStep(1)
    }
   }
    return (
      <section className="button-group col col-12" data-step='2'>
        <button className="prev cursor-point" onClick={goAddressStep}>
          <img className="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next cursor-point" onClick={goCreditCardStep}>
          下一步
          <img className="cursor-point" src={rightArrow} alt='RIGHTARROW' />
        </button>
      </section>
    )
  }

  function CreditCardStep() {
    function goAddressStep() {
      if (step === 3) {
        setStep(2)
      }
    }
    return (
      <section className="button-group col col-12" data-step='3'>
        <button className="prev cursor-point" onClick={goAddressStep}>
          <img className="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    )
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {step === 1 && <AddressStep />}
      {step === 2 && <ShippingStep />}
      {step === 3 && <CreditCardStep />}
    </section>
  )
}





