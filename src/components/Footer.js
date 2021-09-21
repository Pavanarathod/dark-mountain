const Footer = () => {
  return (
    <footer className="mt-10 bg-red-700">
      <div className="flex justify-center lg:hidden py-10">
        <img src="/images/LogoWhite.png" alt="" />
      </div>
      <div className="flex flex-col justify-center sm:flex-row sm:justify-between items-center text-white py-8 lg:px-14">
        <div>
          <ul className="space-y-2">
            <li>Our story</li>
            <li>Our products</li>
            <li>Sponsorships</li>
            <li>Campaigns</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>Cookie policy</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="email"
              id="email"
              className="py-2 p-3"
            />
            <button className="py-2 bg-gray-50 text-black font-mono mt-5">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center py-10">
        <img src="/images/LogoWhite.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
