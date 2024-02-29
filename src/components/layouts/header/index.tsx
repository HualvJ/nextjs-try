// export interface ISFooterLayout {}

// const HeaderLayout: React.FC<ISFooterLayout> = () => {
//   return (
//     <header
//       className="w-full fixed top-0 z-[999] transition-colors duration-200 border-b border-transparent border-[#E5E5E5] bg-white text-black"
//       style={{ opacity: 1 }}
//     >
//       <div className="rw-container">
//         <div className="flex justify-between py-4 tablet:py-0 items-center">
//           <div className="flex items-center w-40 lg:w-52">
//             <a aria-label="Runway Homepage" href="/">
//               <div style={{ height: "23px" }}>
//                 <svg
//                   className="h-full w-auto"
//                   viewBox="0 0 139 27"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M37.7476 6.12349H41.5723L41.9307 8.11308C42.6791 6.53864 44.2901 5.76709 45.9917 5.76709C46.8268 5.76709 47.6658 5.97466 48.233 6.21357L47.3349 10.8155C46.7362 10.4591 45.9917 10.2202 45.0937 10.2202C43.5417 10.2202 42.2852 11.262 42.2852 13.5766V20.971H37.7476V6.12349Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M49.8058 15.4422V6.0293H54.4106V14.5807C54.4106 16.3036 55.409 17.2237 56.8628 17.2237C58.3484 17.2237 59.6185 16.096 59.6185 13.6019V6.0293H64.2233V20.8769H60.3773L59.8621 18.9191C59.1352 20.1055 57.3181 21.2332 55.0776 21.2332C52.0742 21.2332 49.8058 19.3302 49.8058 15.4422Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M66.5865 6.1234H70.3857L70.8946 8.08115C71.6126 6.89475 73.3761 5.76709 75.5933 5.76709C78.5246 5.76709 80.7379 7.6387 80.7379 11.5268V20.971H76.1891V12.4783C76.1891 10.728 75.2896 9.77656 73.7943 9.77656C72.4175 9.77656 71.1313 10.9042 71.1313 13.4571V20.971H66.5825V6.1234H66.5865Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M81.7864 6.0293H86.3361L89.0239 16.1599L91.4156 9.49679L90.2353 6.0293H94.7539L97.6793 16.1599L100.277 6.0293H104.854L100.009 20.971H95.3421L93.336 15.0251L91.2676 20.971H86.6283L81.7864 6.0293Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M105.117 13.5001C105.117 8.39406 108.801 5.76709 112.192 5.76709C114.274 5.76709 115.76 6.59215 116.501 7.44835L116.916 6.12124H121.107V20.879H117.124L116.501 19.4351C115.877 20.1706 114.541 21.2331 111.981 21.2331C108.327 21.2331 105.117 18.2209 105.117 13.5001ZM116.681 13.5001C116.681 11.1105 115.136 9.63554 113.172 9.63554C111.181 9.63554 109.664 11.1417 109.664 13.5001C109.664 15.8585 111.181 17.3686 113.172 17.3686C115.136 17.3647 116.681 15.8897 116.681 13.5001Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M125.867 27.0002L128.387 20.2008L122.417 6.0293H127.307L130.638 15.286L133.637 6.0293H138.408L130.519 27.0002H125.867Z"
//                     className="fill-current"
//                   ></path>
//                   <path
//                     d="M20.6987 26.9835C17.4276 27.2826 14.6925 23.4493 12.5958 21.5051C11.5356 29.1441 -0.00787819 28.42 4.03477e-06 20.6708C0.00394515 17.4161 4.03477e-06 9.46227 4.03477e-06 6.30987C4.03477e-06 5.17642 0.311352 4.03511 0.894637 3.06695C2.00209 1.18968 4.14212 -0.0224774 6.32155 0.0011361C9.6045 0.00507168 17.5104 -0.00279948 20.6987 0.0011361C28.4549 0.0011361 29.1918 11.5403 21.5264 12.5792L25.164 16.2118C29.1603 19.9703 26.1611 27.1488 20.6987 26.9835ZM18.9371 22.4379C21.1914 24.7599 24.7896 21.1627 22.4683 18.9116L16.1625 12.6147H12.6352C12.6352 12.9571 12.6352 15.893 12.6352 16.1409L18.0858 21.5839L18.9371 22.4379ZM3.81894 20.6747C3.76771 23.9019 8.86357 23.9137 8.81234 20.6747V6.30987C8.85569 4.70022 7.15313 3.42115 5.61609 3.91704C5.54909 3.93672 5.48604 3.95639 5.42692 3.98001C4.46135 4.33814 3.79136 5.32597 3.81894 6.3571C3.81894 6.3571 3.81894 20.6747 3.81894 20.6747ZM20.6987 8.80109C23.9383 8.85225 23.9344 3.76355 20.6987 3.81471H12.1347C12.785 5.18429 12.6195 7.31738 12.6313 8.80109C13.0963 8.80109 20.4702 8.80109 20.6987 8.80109Z"
//                     className="fill-current"
//                   ></path>
//                 </svg>
//               </div>
//             </a>
//           </div>
//           <nav className="hidden tablet:block">
//             <ul className="flex">
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="https://research.runwayml.com/"
//                 >
//                   Research
//                   <svg
//                     className="flex-none ml-1 transition-transform duration-300 rotate-0"
//                     width="9"
//                     height="12"
//                     viewBox="0 0 9 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z"
//                       className="fill-current"
//                     ></path>
//                   </svg>
//                 </a>
//               </li>
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="/pricing/#"
//                 >
//                   Product
//                   <svg
//                     className="flex-none ml-1 transition-transform duration-300 rotate-0"
//                     width="9"
//                     height="12"
//                     viewBox="0 0 9 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z"
//                       className="fill-current"
//                     ></path>
//                   </svg>
//                 </a>
//               </li>
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="https://studios.runwayml.com/"
//                 >
//                   Studios
//                   <svg
//                     className="flex-none ml-1 transition-transform duration-300 rotate-0"
//                     width="9"
//                     height="12"
//                     viewBox="0 0 9 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z"
//                       className="fill-current"
//                     ></path>
//                   </svg>
//                 </a>
//               </li>
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="/customers/"
//                 >
//                   Customers
//                 </a>
//               </li>
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="/pricing/"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li className="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
//                 <a
//                   className="cursor-pointer py-2 px-2 lg:px-3 xl:px-4 flex items-center text-sm lg:text-base"
//                   href="/pricing/#"
//                 >
//                   Company
//                   <svg
//                     className="flex-none ml-1 transition-transform duration-300 rotate-0"
//                     width="9"
//                     height="12"
//                     viewBox="0 0 9 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z"
//                       className="fill-current"
//                     ></path>
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="hidden tablet:flex space-x-3 lg:space-x-4 xl:space-x-6 py-4 items-center">
//             <a
//               href="https://app.runwayml.com/login"
//               className="uppercase text-sm lg:text-base"
//             >
//               Log in
//             </a>
//             <a
//               href="https://app.runwayml.com/signup"
//               className="flex text-sm rounded-full font-normal leading-tight px-5 py-2 items-center justify-center bg-purple text-white hover:bg-[#322CB5]"
//             >
//               <span className="font-medium pr-1">Sign Up</span> — It’s Free
//             </a>
//           </div>
//           <div className="flex items-end justify-center flex-col tablet:hidden">
//             <div className="cursor-pointer">
//               <svg
//                 className="fill-current"
//                 width="20"
//                 height="18"
//                 viewBox="0 0 20 18"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect y="0.304199" width="20" height="3.47826"></rect>
//                 <rect y="7.26074" width="20" height="3.47826"></rect>
//                 <rect y="14.2173" width="20" height="3.47826"></rect>
//               </svg>
//             </div>
//           </div>
//           <div className="rw-mobilenav-container">
//             <div className="rw-container flex flex-col h-full">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <div style={{ height: "23px" }}>
//                     <svg
//                       className="h-full w-auto"
//                       viewBox="0 0 139 27"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M37.7476 6.12349H41.5723L41.9307 8.11308C42.6791 6.53864 44.2901 5.76709 45.9917 5.76709C46.8268 5.76709 47.6658 5.97466 48.233 6.21357L47.3349 10.8155C46.7362 10.4591 45.9917 10.2202 45.0937 10.2202C43.5417 10.2202 42.2852 11.262 42.2852 13.5766V20.971H37.7476V6.12349Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M49.8058 15.4422V6.0293H54.4106V14.5807C54.4106 16.3036 55.409 17.2237 56.8628 17.2237C58.3484 17.2237 59.6185 16.096 59.6185 13.6019V6.0293H64.2233V20.8769H60.3773L59.8621 18.9191C59.1352 20.1055 57.3181 21.2332 55.0776 21.2332C52.0742 21.2332 49.8058 19.3302 49.8058 15.4422Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M66.5865 6.1234H70.3857L70.8946 8.08115C71.6126 6.89475 73.3761 5.76709 75.5933 5.76709C78.5246 5.76709 80.7379 7.6387 80.7379 11.5268V20.971H76.1891V12.4783C76.1891 10.728 75.2896 9.77656 73.7943 9.77656C72.4175 9.77656 71.1313 10.9042 71.1313 13.4571V20.971H66.5825V6.1234H66.5865Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M81.7864 6.0293H86.3361L89.0239 16.1599L91.4156 9.49679L90.2353 6.0293H94.7539L97.6793 16.1599L100.277 6.0293H104.854L100.009 20.971H95.3421L93.336 15.0251L91.2676 20.971H86.6283L81.7864 6.0293Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M105.117 13.5001C105.117 8.39406 108.801 5.76709 112.192 5.76709C114.274 5.76709 115.76 6.59215 116.501 7.44835L116.916 6.12124H121.107V20.879H117.124L116.501 19.4351C115.877 20.1706 114.541 21.2331 111.981 21.2331C108.327 21.2331 105.117 18.2209 105.117 13.5001ZM116.681 13.5001C116.681 11.1105 115.136 9.63554 113.172 9.63554C111.181 9.63554 109.664 11.1417 109.664 13.5001C109.664 15.8585 111.181 17.3686 113.172 17.3686C115.136 17.3647 116.681 15.8897 116.681 13.5001Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M125.867 27.0002L128.387 20.2008L122.417 6.0293H127.307L130.638 15.286L133.637 6.0293H138.408L130.519 27.0002H125.867Z"
//                         className="fill-current"
//                       ></path>
//                       <path
//                         d="M20.6987 26.9835C17.4276 27.2826 14.6925 23.4493 12.5958 21.5051C11.5356 29.1441 -0.00787819 28.42 4.03477e-06 20.6708C0.00394515 17.4161 4.03477e-06 9.46227 4.03477e-06 6.30987C4.03477e-06 5.17642 0.311352 4.03511 0.894637 3.06695C2.00209 1.18968 4.14212 -0.0224774 6.32155 0.0011361C9.6045 0.00507168 17.5104 -0.00279948 20.6987 0.0011361C28.4549 0.0011361 29.1918 11.5403 21.5264 12.5792L25.164 16.2118C29.1603 19.9703 26.1611 27.1488 20.6987 26.9835ZM18.9371 22.4379C21.1914 24.7599 24.7896 21.1627 22.4683 18.9116L16.1625 12.6147H12.6352C12.6352 12.9571 12.6352 15.893 12.6352 16.1409L18.0858 21.5839L18.9371 22.4379ZM3.81894 20.6747C3.76771 23.9019 8.86357 23.9137 8.81234 20.6747V6.30987C8.85569 4.70022 7.15313 3.42115 5.61609 3.91704C5.54909 3.93672 5.48604 3.95639 5.42692 3.98001C4.46135 4.33814 3.79136 5.32597 3.81894 6.3571C3.81894 6.3571 3.81894 20.6747 3.81894 20.6747ZM20.6987 8.80109C23.9383 8.85225 23.9344 3.76355 20.6987 3.81471H12.1347C12.785 5.18429 12.6195 7.31738 12.6313 8.80109C13.0963 8.80109 20.4702 8.80109 20.6987 8.80109Z"
//                         className="fill-current"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="cursor-pointer">
//                   <svg
//                     width="42"
//                     height="42"
//                     viewBox="0 0 42 42"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <rect
//                       x="11.9023"
//                       y="9.76758"
//                       width="29.2283"
//                       height="2.65712"
//                       transform="rotate(45 11.9023 9.76758)"
//                       fill="white"
//                     ></rect>
//                     <rect
//                       x="31.9453"
//                       y="12.2715"
//                       width="28.392"
//                       height="2.65712"
//                       transform="rotate(135 31.9453 12.2715)"
//                       fill="white"
//                     ></rect>
//                   </svg>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <button className="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">
//                   Research
//                   <svg
//                     className="ml-auto transition duration-200 delay-75"
//                     width="19"
//                     height="31"
//                     viewBox="0 0 19 31"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clip-rule="evenodd"
//                       d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z"
//                       fill="white"
//                     ></path>
//                     <path
//                       d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   // style={{maxHeight:0}}
//                   className="transition-all duration-500 overflow-auto"
//                 >
//                   <ul className="rw-mobilenav-list py-6">
//                     <div>
//                       <div className="font-medium text-[17px] text-[#797979]">
//                         About Runway Research
//                       </div>
//                       <div className="text-3xl block leading-tight font-medium text-[#DBDBE1] mb-10">
//                         Runway Research is enabling the impossible. Our mission
//                         is to build multimodal AI systems that will usher in a
//                         new era of human creativity.
//                       </div>
//                       <div className="font-medium text-[17px] text-[#797979]">
//                         Research
//                       </div>
//                       <a
//                         className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                         href="https://research.runwayml.com/gen1"
//                       >
//                         Gen-1
//                       </a>
//                       <a
//                         className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                         href="https://research.runwayml.com/gen2"
//                       >
//                         Gen-2
//                       </a>
//                     </div>
//                   </ul>
//                 </div>
//                 <button className="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">
//                   Product
//                   <svg
//                     className="ml-auto transition duration-200 delay-75"
//                     width="19"
//                     height="31"
//                     viewBox="0 0 19 31"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clip-rule="evenodd"
//                       d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z"
//                       fill="white"
//                     ></path>
//                     <path
//                       d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   // style={{}}
//                   className="transition-all duration-500 overflow-auto"
//                 >
//                   <ul className="rw-mobilenav-list py-6">
//                     <li className="">
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           AI Tools
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/gen-2/"
//                         >
//                           Gen-2
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/gen-1/"
//                         >
//                           Gen-1
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/text-to-image/"
//                         >
//                           Text to Image
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/image-to-image/"
//                         >
//                           Image to Image
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/infinite-image/"
//                         >
//                           Infinite Image
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/inpainting/"
//                         >
//                           Inpainting
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/frame-interpolation/"
//                         >
//                           Frame Interpolation
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/ai-tools/ai-training/"
//                         >
//                           Custom AI Training
//                         </a>
//                         <a
//                           className="text-3xl mt-6 block font-bold underline leading-normal text-[#DBDBE1]"
//                           href="/ai-tools/"
//                         >
//                           View all AI Tools
//                         </a>
//                       </div>
//                     </li>
//                     <li className="">
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Research
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://research.runwayml.com/gen1"
//                         >
//                           Gen-1
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://research.runwayml.com/gen2"
//                         >
//                           Gen-2
//                         </a>
//                       </div>
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Mobile App
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://apps.apple.com/app/apple-store/id1665024375?pt=119558478&amp;ct=MarketingHome&amp;mt=8"
//                         >
//                           Runway for iOS
//                         </a>
//                       </div>
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Resources
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/footage-packs/"
//                         >
//                           Gen-2 Footage Packs
//                         </a>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//                 <button className="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">
//                   Studios
//                   <svg
//                     className="ml-auto transition duration-200 delay-75"
//                     width="19"
//                     height="31"
//                     viewBox="0 0 19 31"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clip-rule="evenodd"
//                       d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z"
//                       fill="white"
//                     ></path>
//                     <path
//                       d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   // style="max-height:0px"
//                   className="transition-all duration-500 overflow-auto"
//                 >
//                   <ul className="rw-mobilenav-list py-6">
//                     <div>
//                       <div className="font-medium text-[17px] text-[#797979]">
//                         About Runway Studios
//                       </div>
//                       <div className="text-3xl block leading-tight font-medium text-[#DBDBE1] mb-10">
//                         Runway Studios empowers filmmakers everywhere to achieve
//                         their creative vision with AI.
//                       </div>
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Initiatives
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://aiff.runwayml.com/"
//                         >
//                           AIFF 2024
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://cpp.runwayml.com/"
//                         >
//                           Creative Partners Program
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://gen48.runwayml.com/"
//                         >
//                           GEN:48
//                         </a>
//                       </div>
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Films
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://studios.runwayml.com/creative-dialogues"
//                         >
//                           Creative Dialogues
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://studios.runwayml.com/#after-light"
//                         >
//                           After Light
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           target="_blank"
//                           href="https://studios.runwayml.com/#do-the-evolution"
//                         >
//                           Do The Evolution
//                         </a>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//                 <div className="text-[56px] font-medium leading-tight">
//                   <a className="block" href="/customers/">
//                     Customers
//                   </a>
//                 </div>
//                 <div className="text-[56px] font-medium leading-tight">
//                   <a className="block" href="/pricing/">
//                     Pricing
//                   </a>
//                 </div>
//                 <button className="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">
//                   Company
//                   <svg
//                     className="ml-auto transition duration-200 delay-75"
//                     width="19"
//                     height="31"
//                     viewBox="0 0 19 31"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clip-rule="evenodd"
//                       d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z"
//                       fill="white"
//                     ></path>
//                     <path
//                       d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   // style="max-height:0px"
//                   className="transition-all duration-500 overflow-auto"
//                 >
//                   <ul className="rw-mobilenav-list py-6">
//                     <li className="">
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Company
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/careers/"
//                         >
//                           Careers
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/about/"
//                         >
//                           About Us
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/blog/"
//                         >
//                           Blog
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://academy.runwayml.com/"
//                         >
//                           Runway Academy
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://studios.runwayml.com/"
//                         >
//                           Runway Studios
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/customers/"
//                         >
//                           Customer Stories
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://cpp.runwayml.com/"
//                         >
//                           Creative Partners Program
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/educators/"
//                         >
//                           Educators
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://store.runwayml.com/"
//                         >
//                           Store
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://help.runwayml.com"
//                         >
//                           Help
//                         </a>
//                       </div>
//                     </li>
//                     <li className="">
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Contact Us
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="mailto:press@runwayml.com"
//                         >
//                           Press
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="mailto:partnerships@runwayml.com"
//                         >
//                           Partnerships
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="/sales/"
//                         >
//                           Enterprise Sales
//                         </a>
//                       </div>
//                       <div className="mb-10">
//                         <div className="font-medium text-[17px] text-[#797979]">
//                           Connect
//                         </div>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://twitter.com/runwayml"
//                         >
//                           Twitter
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://instagram.com/runwayapp"
//                         >
//                           Instagram
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="https://www.youtube.com/runwayml"
//                         >
//                           YouTube
//                         </a>
//                         <a
//                           className="text-3xl block leading-normal font-medium text-[#DBDBE1]"
//                           href="http://discord.gg/invite/runwayml"
//                         >
//                           Discord
//                         </a>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center mt-auto pt-6 pb-6">
//                 <a
//                   href="https://app.runwayml.com/login"
//                   className="text-lg uppercase font-semibold"
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="https://app.runwayml.com/signup"
//                   className="relative border-2 text-lg mt-4 border-purple rounded-full py-2 w-full text-center uppercase font-semibold"
//                 >
//                   Try Runway for free
//                   <div className="absolute right-8 top-4">
//                     <svg
//                       width="9"
//                       height="13"
//                       viewBox="0 0 9 13"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clip-rule="evenodd"
//                         d="M6.01653 6.11463L1.50856 1.60667L2.41016 0.705078L7.81971 6.11463L2.41016 11.5242L1.50856 10.6226L6.01653 6.11463Z"
//                         fill="white"
//                       ></path>
//                       <path
//                         d="M1.50856 1.60667L1.19646 1.29457L0.884359 1.60667L1.19646 1.91877L1.50856 1.60667ZM6.01653 6.11463L6.32863 6.42673L6.64073 6.11463L6.32863 5.80253L6.01653 6.11463ZM2.41016 0.705078L2.72226 0.392976L2.41016 0.0808735L2.09805 0.392976L2.41016 0.705078ZM7.81971 6.11463L8.13181 6.42673L8.44391 6.11463L8.13181 5.80253L7.81971 6.11463ZM2.41016 11.5242L2.09805 11.8363L2.41016 12.1484L2.72226 11.8363L2.41016 11.5242ZM1.50856 10.6226L1.19646 10.3105L0.884359 10.6226L1.19646 10.9347L1.50856 10.6226ZM1.19646 1.91877L5.70442 6.42673L6.32863 5.80253L1.82067 1.29457L1.19646 1.91877ZM2.09805 0.392976L1.19646 1.29457L1.82067 1.91877L2.72226 1.01718L2.09805 0.392976ZM1.19646 10.9347L2.09805 11.8363L2.72226 11.2121L1.82067 10.3105L1.19646 10.9347ZM5.70442 5.80253L1.19646 10.3105L1.82067 10.9347L6.32863 6.42673L5.70442 5.80253ZM8.13181 5.80253L2.72226 0.392976L2.09805 1.01718L7.50761 6.42673L8.13181 5.80253ZM2.72226 11.8363L8.13181 6.42673L7.50761 5.80253L2.09805 11.2121L2.72226 11.8363Z"
//                         fill="white"
//                       ></path>
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
//   // rgb(48 49 51)
// };

// export default HeaderLayout;
