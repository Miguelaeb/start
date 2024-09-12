export default function Footer() {
  return (
    <footer className="bg-[#74C69D] h-[125px] w-full flex justify-center items-center mt-auto">
      <div className="lg:max-w-[1175px] mx-auto flex flex-col lg:flex-row gap-5 items-center lg:justify-between w-full px-5 xl:px-0">
        <nav className="flex items-center gap-5">
          <a href="#" aria-label="Facebook">
            <img src="/FacebookIcon.svg" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/InstagramIcon.svg" alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/TwitterIcon.svg" alt="Twitter" />
          </a>
          <a href="#" aria-label="Pinterest">
            <img src="/PinterestIcon.svg" alt="Pinterest" />
          </a>
          <a href="#" aria-label="Tiktok">
            <img src="/TiktokIcon.svg" alt="Tiktok" />
          </a>
          <a href="#" aria-label="Whatsapp">
            <img src="/WhatsappIcon.svg" alt="Whatsapp" />
          </a>
          <a href="#" aria-label="Youtube">
            <img src="/YoutubeIcon.svg" alt="Youtube" />
          </a>
        </nav>
        <div>
          <p className="text-xl leading-[25px] text-white">
            © Start, 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
