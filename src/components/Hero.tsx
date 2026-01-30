export default function Hero() {
  return (
    <div data-scroll data-scroll-speed="-5" id="page1">
      <nav>
        <img src="/assets/icons/logo.png" alt="Magma Logo" />
        <div id="right-nav">
          <button>Book a Demo</button>
          <button>
            <i className="ri-menu-fill"></i>
          </button>
        </div>
      </nav>
      <div className="bottom-page1">
        <h1>
          Experience Real <br /> Estate Agility
        </h1>
        <div className="bottom-page1-inner">
          <h4>
            Create a digital twin of your existing building <br /> and release the
            potential of Web3.
          </h4>
          <button>LEARN MORE</button>
        </div>
      </div>
      <video
        src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
