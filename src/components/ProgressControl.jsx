import leftArrow from '../icons/leftArrow.svg'
import rightArrow from '../icons/rightArrow.svg'

export default function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <img class="cursor-point" src={rightArrow} alt='RIGHTARROW' />
          {/* <object
                  data="./public/icons/right-arrow.svg"
                  className="cursor-point"
                ></object> */}
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          {/* <object
                  data="./public/icons/left-arrow.svg"
                  className="cursor-point"
                ></object> */}
          <img class="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next">
          下一步
          <img class="cursor-point" src={rightArrow} alt='RIGHTARROW' />
          {/* <object
                  data="./public/icons/right-arrow.svg"
                  className="cursor-point"
                ></object> */}
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          {/* <object
                  data="./public/icons/left-arrow.svg"
                  className="cursor-point"
                ></object> */}
          <img class="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  )
}