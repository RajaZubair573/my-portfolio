
function Footer() {
  return (
    <footer className="w-[90%] max-w-[1200px] mx-auto space-y-10 py-10 border-t">
      <h2 className="text-3xl font-semibold">Raja Zubair</h2>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
        <p>© Created with &lt;/&gt; by Zubair.</p>
        <div className="flex gap-3 sm:gap-6 text-lg sm:text-2xl">
          <a href="https://www.linkedin.com/in/raja-zubair-664066294/" className="text-[#0077b5] hover:shadow-lg shadow-current">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/raja_zubair_786?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent hover:shadow-lg shadow-current">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/RajaZubair573" target="_blank" className="shadow-zinc-900 hover:shadow-lg">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
