export interface ISFooterLayout {}

const FooterLayout: React.FC<ISFooterLayout> = () => {
  return (
    <footer className="lg:pt-52 text-white bg-[#111111] relative">
      <div className="rw-container flex-col lg:flex-row hidden md:flex">
        <div className="lg:w-1/5 mb-6 justify-between flex">
          <div className="h-5">
            <svg
              className="transform translate-y-1 h-full"
              viewBox="0 0 120 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.422712H4.55581L4.97852 2.818C5.87089 0.939335 7.79649 0 9.81606 0C10.8024 0 11.7887 0.234851 12.4932 0.516651L11.4129 6.05872C10.7084 5.63602 9.81609 5.35422 8.73586 5.35422C6.90416 5.35422 5.40117 6.62231 5.40117 9.39335V18.2701H0V0.422712Z"
                className="fill-current"
              ></path>
              <path
                d="M14.5596 11.6945V0.422472H19.9607V10.6612C19.9607 12.7278 21.135 13.808 22.8258 13.808C24.5635 13.808 26.0664 12.446 26.0664 9.44009V0.375488H31.4676V18.1759H26.9588L26.3483 15.8276C25.5029 17.2366 23.3424 18.5986 20.7123 18.5986C17.2367 18.6456 14.5596 16.3912 14.5596 11.6945Z"
                className="fill-current"
              ></path>
              <path
                d="M34.5205 0.422712H39.0294L39.6399 2.77105C40.4853 1.36205 42.5988 0 45.2289 0C48.7045 0 51.3346 2.25441 51.3346 6.90411V18.2231H45.9334V8.03133C45.9334 5.91783 44.8532 4.79061 43.0685 4.79061C41.4247 4.79061 39.9217 6.15266 39.9217 9.2055V18.2231H34.5205V0.422712Z"
                className="fill-current"
              ></path>
              <path
                d="M52.2739 0.422852H57.769L61.0097 12.4933L63.8747 4.55592L62.4657 0.422852H67.9139L71.4364 12.4933L74.5831 0.422852H80.1252L74.3013 18.2232H68.6653L66.223 11.1313L63.7338 18.2232H58.1448L52.2739 0.422852Z"
                className="fill-current"
              ></path>
              <path
                d="M80.2192 9.34639C80.2192 3.19375 84.6341 0 88.6733 0C91.1625 0 92.9472 0.986296 93.8396 2.01956L94.3562 0.422712H99.3817V18.2231H94.591L93.8396 16.4853C93.0881 17.3777 91.4913 18.6458 88.4384 18.6458C84.0705 18.6458 80.2192 15.0294 80.2192 9.34639ZM94.0744 9.34639C94.0744 6.48142 92.2427 4.69667 89.8944 4.69667C87.4991 4.69667 85.7143 6.52839 85.7143 9.34639C85.7143 12.2114 87.546 13.9961 89.8944 13.9961C92.1957 13.9961 94.0744 12.2114 94.0744 9.34639Z"
                className="fill-current"
              ></path>
              <path
                d="M105.065 25.3622L108.071 17.2839L100.979 0.422852H106.802L110.748 11.4131L114.317 0.422852H120L110.654 25.3622H105.065Z"
                className="fill-current"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-1 space-x-4">
          <ul className="flex-1 font-display text-lg leading-snug">
            <li className="uppercase mb-6">Product</li>
            <li>
              <a
                href="/ai-tools/gen-1"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Gen-1
              </a>
            </li>
            <li>
              <a
                href="/ai-tools/gen-2"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Gen-2
              </a>
            </li>
            <li>
              <a
                href="/ai-tools"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                AI Tools
              </a>
            </li>
            <li>
              <a
                href="/green-screen"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Green Screen
              </a>
            </li>
            <li>
              <a
                href="/inpainting"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Inpainting
              </a>
            </li>
          </ul>
          <ul className="flex-1 font-display text-lg leading-snug">
            <li className="uppercase mb-6">Get Started</li>
            <li>
              <a
                href="https://app.runwayml.com/login"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/customers"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="https://help.runwayml.com"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Help Center
              </a>
            </li>
          </ul>
          <ul className="flex-1 font-display text-lg leading-snug">
            <li className="uppercase mb-6">Resources</li>
            <li>
              <a
                href="https://research.runwayml.com/"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Runway Research
              </a>
            </li>
            <li>
              <a
                href="https://studios.runwayml.com/"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Runway Studios
              </a>
            </li>
            <li>
              <a
                href="https://academy.runwayml.com/"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Runway Academy
              </a>
            </li>
            <li>
              <a
                href="https://www.telescopemagazine.com/"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Telescope Magazine
              </a>
            </li>
            <li>
              <a
                href="/educators"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Educators
              </a>
            </li>
            <li>
              <a
                href="/status"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                System Status
              </a>
            </li>
          </ul>
          <ul className="flex-1 font-display text-lg leading-snug">
            <li className="uppercase mb-6">Company</li>
            <li>
              <a
                href="/about"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/careers"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/blog"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/data-security"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Data Security
              </a>
            </li>
            <li>
              <a
                href="/contact"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://d3phaj0sisr2ct.cloudfront.net/media-kit/Runway-Press-Kit-July-2023.zip"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Media Kit
              </a>
            </li>
          </ul>
          <ul className="flex-1 font-display text-lg leading-snug">
            <li className="uppercase mb-6">Connect</li>
            <li>
              <a
                href="mailto:press@runwayml.com"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="mailto:partnerships@runwayml.com"
                target="_self"
                className="hover:text-white text-[#999999]"
              >
                Partnerships
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/runwayml"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/runwayapp"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/runwayml"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="http://discord.gg/invite/runwayml"
                target="_blank"
                className="hover:text-white text-[#999999]"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rw-container block md:hidden pt-10">
        <button className="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
          Product
          <svg
            className="ml-3 transition duration-700 delay-100 w-3.5"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <div
          style={{ maxHeight: "0" }}
          className="transition-all duration-500 overflow-auto mb-2"
        >
          <ul className="rw-mobilenav-list">
            <li>
              <a className="" href="/ai-tools/gen-1/">
                Gen-1
              </a>
            </li>
            <li>
              <a className="" href="/ai-tools/gen-2/">
                Gen-2
              </a>
            </li>
            <li>
              <a className="" href="/ai-tools/">
                AI Tools
              </a>
            </li>
            <li>
              <a className="" href="/green-screen/">
                Green Screen
              </a>
            </li>
            <li>
              <a className="" href="/inpainting/">
                Inpainting
              </a>
            </li>
          </ul>
        </div>
        <button className="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
          Get Started
          <svg
            className="ml-3 transition duration-700 delay-100 w-3.5"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <div
          style={{ maxHeight: "0" }}
          className="transition-all duration-500 overflow-auto mb-2"
        >
          <ul className="rw-mobilenav-list">
            <li>
              <a
                href="https://app.runwayml.com/login"
                target="_blank"
                className=""
              >
                Login
              </a>
            </li>
            <li>
              <a className="" href="/pricing/">
                Pricing
              </a>
            </li>
            <li>
              <a href="/customers" target="_blank" className="">
                Customers
              </a>
            </li>
            <li>
              <a href="https://help.runwayml.com" target="_blank" className="">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <button className="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
          Resources
          <svg
            className="ml-3 transition duration-700 delay-100 w-3.5"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <div
          style={{ maxHeight: "0" }}
          className="transition-all duration-500 overflow-auto mb-2"
        >
          <ul className="rw-mobilenav-list">
            <li>
              <a
                href="https://research.runwayml.com/"
                target="_blank"
                className=""
              >
                Runway Research
              </a>
            </li>
            <li>
              <a
                href="https://studios.runwayml.com/"
                target="_blank"
                className=""
              >
                Runway Studios
              </a>
            </li>
            <li>
              <a
                href="https://academy.runwayml.com/"
                target="_blank"
                className=""
              >
                Runway Academy
              </a>
            </li>
            <li>
              <a
                href="https://www.telescopemagazine.com/"
                target="_blank"
                className=""
              >
                Telescope Magazine
              </a>
            </li>
            <li>
              <a className="" href="/educators/">
                Educators
              </a>
            </li>
            <li>
              <a className="" href="/status/">
                System Status
              </a>
            </li>
          </ul>
        </div>
        <button className="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
          Company
          <svg
            className="ml-3 transition duration-700 delay-100 w-3.5"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <div
          style={{ maxHeight: "0" }}
          className="transition-all duration-500 overflow-auto mb-2"
        >
          <ul className="rw-mobilenav-list">
            <li>
              <a className="" href="/about/">
                About Us
              </a>
            </li>
            <li>
              <a className="" href="/careers/">
                Careers
              </a>
            </li>
            <li>
              <a className="" href="/blog/">
                Blog
              </a>
            </li>
            <li>
              <a className="" href="/data-security/">
                Data Security
              </a>
            </li>
            <li>
              <a className="" href="/contact/">
                Contact Us
              </a>
            </li>
            <li>
              <a
                className=""
                href="https://d3phaj0sisr2ct.cloudfront.net/media-kit/Runway-Press-Kit-July-2023.zip"
              >
                Media Kit
              </a>
            </li>
          </ul>
        </div>
        <button className="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
          Connect
          <svg
            className="ml-3 transition duration-700 delay-100 w-3.5"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <div
          style={{ maxHeight: "0" }}
          className="transition-all duration-500 overflow-auto mb-2"
        >
          <ul className="rw-mobilenav-list">
            <li>
              <a className="" href="mailto:press@runwayml.com">
                Press
              </a>
            </li>
            <li>
              <a className="" href="mailto:partnerships@runwayml.com">
                Partnerships
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/runwayml"
                target="_blank"
                className=""
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/runwayapp"
                target="_blank"
                className=""
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/runwayml"
                target="_blank"
                className=""
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="http://discord.gg/invite/runwayml"
                target="_blank"
                className=""
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#111111]">
        <div className="rw-container flex mt-14 md:mt-64 lg:text-lg lg:justify-end relative text-white items-center py-7">
          <div className="lg:w-1/5 mb-10 lg:mb-0 hidden md:block pr-12 font-medium">
            2024 Runway AI, Inc.
          </div>
          <div className="md:w-4/5 w-full flex flex-col md:flex-row md:justify-start">
            <ul className="flex flex-col md:flex-row md:space-x-11">
              <li>
                <a
                  href="/terms-of-use"
                  className="hover:text-white hover:underline font-medium"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white hover:underline font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/coc"
                  className="hover:text-white hover:underline font-medium"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
            <div className="flex flex-col mt-32 md:mt-0 md:mr-32 justify-between">
              <div className="lg:w-1/5 mb-6 justify-between flex md:hidden">
                2024 Runway AI, Inc.
              </div>
              <svg
                className="md:hidden"
                width="130"
                height="26"
                viewBox="0 0 130 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4592 5.75186H39.0515L39.3882 7.62054C40.0911 6.14178 41.6042 5.41711 43.2024 5.41711C43.9867 5.41711 44.7747 5.61208 45.3075 5.83646L44.464 10.1587C43.9017 9.82397 43.2024 9.59958 42.3589 9.59958C40.9013 9.59958 39.7211 10.5781 39.7211 12.7521V19.6971H35.4592V5.75186Z"
                  fill="white"
                ></path>
                <path
                  d="M46.7835 14.5038V5.66296H51.1085V13.6948C51.1085 15.3129 52.0463 16.1771 53.4116 16.1771C54.807 16.1771 55.9999 15.118 55.9999 12.7754V5.66296H60.3249V19.6083H56.7126L56.2287 17.7695C55.546 18.8838 53.8393 19.9429 51.7349 19.9429C48.9141 19.9429 46.7835 18.1556 46.7835 14.5038Z"
                  fill="white"
                ></path>
                <path
                  d="M62.5451 5.75177H66.1134L66.5914 7.59055C67.2658 6.47625 68.9222 5.41711 71.0046 5.41711C73.7578 5.41711 75.8365 7.17499 75.8365 10.8268V19.6971H71.5641V11.7205C71.5641 10.0766 70.7193 9.18294 69.3149 9.18294C68.0217 9.18294 66.8138 10.2421 66.8138 12.6398V19.6971H62.5414V5.75177H62.5451Z"
                  fill="white"
                ></path>
                <path
                  d="M76.8145 5.66296H81.0877L83.6121 15.1779L85.8585 8.91975L84.7499 5.66296H88.9939L91.7415 15.1779L94.1818 5.66296H98.4806L93.9293 19.6967H89.5463L87.6622 14.1121L85.7195 19.6967H81.3621L76.8145 5.66296Z"
                  fill="white"
                ></path>
                <path
                  d="M98.7318 12.6802C98.7318 7.88445 102.193 5.41711 105.378 5.41711C107.333 5.41711 108.728 6.19204 109.424 6.99621L109.814 5.74975H113.75V19.6107H110.01L109.424 18.2545C108.839 18.9454 107.583 19.9433 105.179 19.9433C101.747 19.9433 98.7318 17.1141 98.7318 12.6802ZM109.594 12.6802C109.594 10.4358 108.143 9.05049 106.298 9.05049C104.428 9.05049 103.003 10.4651 103.003 12.6802C103.003 14.8953 104.428 16.3136 106.298 16.3136C108.143 16.3099 109.594 14.9246 109.594 12.6802Z"
                  fill="white"
                ></path>
                <path
                  d="M118.221 25.3595L120.588 18.9733L114.981 5.66296H119.574L122.702 14.3572L125.519 5.66296H130L122.591 25.3595H118.221Z"
                  fill="white"
                ></path>
                <path
                  d="M19.4409 25.3437C16.3686 25.6247 13.7996 22.0244 11.8304 20.1983C10.8346 27.3731 -0.00739945 26.6929 3.78959e-06 19.4147C0.00370541 16.3577 3.78959e-06 8.88727 3.78959e-06 5.92643C3.78959e-06 4.86186 0.292432 3.7899 0.840272 2.88058C1.88043 1.11739 3.89041 -0.0211115 5.9374 0.00106707C9.02085 0.00476349 16.4463 -0.00262936 19.4409 0.00106707C26.7257 0.00106707 27.4179 10.839 20.2183 11.8148L23.6349 15.2266C27.3883 18.7567 24.5714 25.499 19.4409 25.3437ZM17.7863 21.0744C19.9036 23.2553 23.2832 19.8767 21.1029 17.7624L15.1804 11.8481H11.8674C11.8674 12.1697 11.8674 14.9272 11.8674 15.1601L16.9867 20.2722L17.7863 21.0744ZM3.58687 19.4184C3.53875 22.4494 8.32495 22.4605 8.27683 19.4184V5.92643C8.31755 4.41459 6.71845 3.21326 5.27481 3.67901C5.21189 3.69749 5.15266 3.71597 5.09714 3.73815C4.19024 4.07452 3.56096 5.00233 3.58687 5.97079V19.4184ZM19.4409 8.26627C22.4837 8.31432 22.48 3.53485 19.4409 3.5829H11.3973C12.0081 4.86926 11.8526 6.87272 11.8637 8.26627C12.3005 8.26627 19.2262 8.26627 19.4409 8.26627Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mt-auto md:mt-0 ml-auto">
            <img
              src="https://d3phaj0sisr2ct.cloudfront.net/site/images/generated-in-ny.svg"
              alt="Generated in NY"
            />
          </div>
        </div>
      </div>
    </footer>
  );
  // rgb(48 49 51)
};

export default FooterLayout;
