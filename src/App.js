import StepProgress from "./components/StepProgress";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1)

  return (
    <>
      <div id="svg-icons-container" style={{ display: "none" }} />
      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            {/* <object
              data="./public/icons/toggle.svg"
              className="icon-toggle cursor-point"
            /> */}
          </label>
          {/* navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* search */}
              <li className="nav-item">
                {/* <object
                  data="./public/icons/search.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></object> */}
              </li>
              {/* cart */}
              <li className="nav-item">
                {/* <object
                  data="./public/icons/cart.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></object> */}
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* moon */}
                {/* <object
                  data="./public/icons/moon.svg"
                  className="nav-icon cursor-point"
                ></object> */}
                {/* sun */}
                {/* <object data="./public/icons/sun.svg" class="nav-icon cursor-point">
        </object>    */}
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className="header-logo-container" href="#">
            <img src="./public/icons/logo.svg" className="cursor-point" />
          </a>
        </div>
      </header>
      {/* main */}
      <main className="site-main">
        <div className="main-container">
          {/* register **/}
          {/* 結帳 */}
          <StepProgress step={step}/>
          {/* cart */}
          <Cart />
          {/* progress-control */}
          <ProgressControl step={step} setStep={setStep}/>
        </div>
      </main>
      {/* footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <section className="footer-section">
            <div className="footer-logo-container">
              <img src="./public/icons/logo.svg" className="cursor-point" />
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">客戶服務</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                運送說明
              </a>
              <a className="page-link" href="#">
                退換貨相關
              </a>
              <a className="page-link" href="#">
                付款資訊
              </a>
              <a className="page-link" href="#">
                FAQ
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">關於我們</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                品牌故事
              </a>
              <a className="page-link" href="#">
                媒體聯繫
              </a>
              <a className="page-link" href="#">
                Press kit
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">資訊</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                隱私權政策
              </a>
              <a className="page-link" href="#">
                Cookie
              </a>
              <a className="page-link" href="#">
                GDPR
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">追蹤 ALPHA Shop</h2>
            <div className="section-content">
              <div className="tel-info">+886 02123-45678</div>
              <div className="social-icon-group">
                {/* <object
                  data="./public/icons/facebook.svg"
                  className="social-icon cursor-point"
                ></object> */}
                {/* <object
                  data="./public/icons/instagram.svg"
                  className="social-icon cursor-point"
                ></object> */}
                {/* <object
                  data="./public/icons/whatsapp.svg"
                  className="social-icon cursor-point"
                ></object> */}
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default App;
