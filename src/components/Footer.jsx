import { LuGithub, LuInstagram,LuLinkedin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="w-[90%] max-w-[1200px] mx-auto space-y-10 py-10 border-t">
      <h2 className="text-3xl font-semibold">Raja Zubair</h2>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
        <p>© Created with &lt;/&gt; by Zubair.</p>
        <div className="flex gap-3 sm:gap-6 text-lg sm:text-2xl">
          <a
            href="https://www.linkedin.com/in/raja-zubair-664066294/"
            target="_blank"
          >
            <LuLinkedin className="text-[#0077b5] hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_8px_#0077b5]" />
          </a>
          <a
            href="https://www.instagram.com/raja_zubair_786?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <LuInstagram className="text-[#ee2a7b] hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_8px_#ee2a7b]" />
          </a>
          <a
            href="https://github.com/RajaZubair573"
            target="_blank"
          >
            <LuGithub className="hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_8px_#4a5568]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;