import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import { useState } from "react";

interface arraryType {
  title: string;
  explain: string;
  billed?: string;
  billedType: string;
  advantageList: {
    text: string;
    moreInfo?: string;
  }[];
  billedAnnually?: string;
  billedMonth?: string;
  annuallyPrice?: string;
}
const arrary: arraryType[] = [
  {
    title: "Basic",
    explain:
      "For individuals looking to explore Runway’s AI Magic Tools and content creation features.",
    billed: "Free Forever",
    billedType: "",
    advantageList: [
      {
        text: "125 credits",
        moreInfo:
          "125 credits = 25s of Gen-2, 8s of Gen-1, or 25 image generations.",
      },
      {
        text: "Can't buy more credits",
      },
      {
        text: "Can't upscale resolution or remove watermarks on Gen-1 and Gen-2 ",
      },
      {
        text: "Gen-1 (Video to Video) up to 4 sec",
      },
      {
        text: "Gen-2 (Text to Video) up to 16 sec via Extend Video ",
      },
      {
        text: "3 video projects ",
      },
      {
        text: "5GB assets",
      },
      {
        text: "Up to 3 editors ",
      },
      {
        text: "Video editor exports in 720p",
      },
      {
        text: "Limited image export options",
      },
    ],
  },
  {
    title: "Standard",
    explain:
      "For individuals and small teams looking for more access, more AI Magic Tools and more export options.",
    billedAnnually: "$12",
    billedMonth: "$15",
    billedType: "max. 5 users per workspace",
    annuallyPrice: "annually as $144",
    advantageList: [
      {
        text: "625 credits/month",
        moreInfo:
          "625 credits = 125s of Gen-2, 44s of Gen-1, or 125 image generations.",
      },
      {
        text: "Credits reset to 625 every month starting from your subscription date. Buy more as needed ",
        moreInfo:
          "Credits reset to 625 every month starting from your subscription date. Credits that aren't used do not roll over to the next month.",
      },
      {
        text: "Upscale resolution and remove watermarks on Gen-1 and Gen-2",
      },
      {
        text: "Gen-1 (Video to Video) up to 15 sec ",
      },
      {
        text: "Gen-2 (Text to Video) up to 16 sec via Extend Video ",
      },
      {
        text: "Unlimited video editor projects",
      },
      {
        text: "100GB assets",
      },
      {
        text: "Up to 5 editors ",
      },
      {
        text: "Video editor exports in 4K & Green Screen alpha matte ",
      },
      {
        text: "2K image exports and full 3D texture options ",
      },
      {
        text: "Train custom AI generators (1 training included with plan) ",
        moreInfo:
          "Train a model to generate specific people, objects, or an artistic style.",
      },
    ],
  },
  {
    title: "Pro",
    explain:
      "For individuals and teams looking to add all of Runway’s features into their workflows.",
    billedAnnually: "$28",
    billedMonth: "$35",
    billedType: "max. 10 users per workspace",
    annuallyPrice: "annually as $336",
    advantageList: [
      {
        text: "2250 credits/month",
        moreInfo:
          "2250 credits = 450s of Gen-2; 160s of Gen-1; or 450 image generations.",
      },
      {
        text: "Credits reset to 2250 every month starting from your subscription date. Buy more as needed ",
        moreInfo:
          "Credits reset to 2250 every month starting from your subscription date. Credits that aren't used do not roll over to the next month.",
      },
      {
        text: "Upscale resolution and remove watermarks on Gen-1 and Gen-2",
      },
      {
        text: "Gen-1 (Video to Video) up to 15 sec ",
      },
      {
        text: "Gen-2 (Text to Video) up to 16 sec via Extend Video ",
      },
      {
        text: "Unlimited video editor projects",
      },
      {
        text: "500GB assets",
      },
      {
        text: "Up to 10 editors ",
      },
      {
        text: "All video editor exports from Standard, plus PNG & ProRes for video editor compositions ",
      },
      {
        text: "All image exports from Standard, plus PNG & ProRes ",
      },
      {
        text: "Train custom AI generators (1 training included with plan) ",
        moreInfo:
          "Train a model to generate specific people, objects, or an artistic style.",
      },
    ],
  },
  {
    title: "Unlimited",
    explain:
      "All the access of the pro plan with the flexibility of unlimited video generations.",
    billedAnnually: "$76",
    billedMonth: "$95",
    billedType: "max. 10 users per workspace",
    annuallyPrice: "annually as $912",
    advantageList: [
      {
        text: "Unlimited video generations   Includes all Pro Plan features, plus: ",
      },
      {
        text: "Unlimited generations of Gen-1 and Gen-2 in Explore Mode at relaxed rate ",
        moreInfo:
          "In Explore Mode, generations may take longer and the number you can run at the same time may be limited, based on overall site traffic",
      },
      {
        text: "Credits (with no rate restrictions) reset to 2250 every month starting from your subscription date. Buy more as needed ",
        moreInfo:
          "In Credits Mode, your generations are faster and you can run many more at the same time. 2250 credits = 450s of Gen-2, 160s of Gen-1, or 450 image generations.",
      },
    ],
  },
  {
    title: "Enterprise",
    explain:
      "For large teams and organizations that need a custom, secure, and robust flexibility at scale.",
    billed: "Contact Us",
    annuallyPrice: "",
    billedType: "",
    advantageList: [
      {
        text: "Single sign-on  ",
      },
      {
        text: "Custom credit amounts  ",
      },
      {
        text: "Custom storage  ",
      },
      {
        text: "Model customizations  ",
      },

      {
        text: "Configurable teamspaces to segment and organize assets  ",
      },
      {
        text: "Advanced security and compliance ",
      },

      {
        text: "Enterprise-wide onboarding ",
      },
      {
        text: "Ongoing success program ",
      },
      {
        text: "Priority support ",
      },
      {
        text: "Integration with internal tools ",
      },
    ],
  },
];

const Home: NextPageWithLayout = () => {
  const [planType, setPlanType] = useState("Monthly");
  return (
    <section>
      <div className="w-full ">
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md z-[998] transition-opacity duration-200 invisible opacity-0"></div>
        <div className="pt-28 lg:pt-2/16 pb-40 bg-[#E2E2E3] p-6">
          <div className="pb-12">
            <div className="rw-container">
              <h1 className="leading-none tracking-tight text-[56px] md:text-[9.7vw] xxl:text-[140px] font-semibold mb-7">
                Pricing Plans
              </h1>
              <div className="inline-flex items-center justify-center mt-12 text-lg relative border border-black rounded-full h-11">
                <div
                  className={`h-[38px] top-0.5 absolute transition-all duration-300 w-40 md:w-52 rounded-full bg-blacktext ${
                    planType === "Monthly"
                      ? "left-0.5"
                      : "left-[158px] md:left-[206px]"
                  }`}
                ></div>
                <div
                  onClick={() => setPlanType("Monthly")}
                  className={`w-40 md:w-52 cursor-pointer text-center text-base md:text-xl leading-none font-semibold relative transition-colors duration-100 h-full flex items-center justify-center  ${
                    planType === "Monthly" ? "text-white" : "text-black"
                  }`}
                >
                  Monthly
                </div>
                <div
                  onClick={() => setPlanType("Annual")}
                  className={`w-40 md:w-52 cursor-pointer text-center text-base md:text-xl leading-none font-semibold relative transition-colors duration-100 h-full flex items-center justify-center ${
                    planType !== "Monthly" ? "text-white" : "text-black"
                  }`}
                >
                  Annual
                  <span
                    className={`ml-1 md:ml-2 transition-colors duration-100   ${
                      planType !== "Monthly"
                        ? "text-altgreen"
                        : "text-[#473FF4]"
                    }`}
                  >
                    -20% off
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="rw-container">
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-flow-col xl:auto-cols-fr md:gap-x-3">
                {arrary.map((x) => (
                  <div
                    className={`flex flex-col relative mb-8 rounded-lg ${
                      x.title === "Standard"
                        ? "bg-blacktext text-white"
                        : "bg-white"
                    }`}
                  >
                    <div className="border-b p-4 flex flex-col border-[#C4C4C4] text-al">
                      <div className="flex flex-col items-start justify-between md:flex-col mb-8 md:mb-0 relative">
                        {x.title === "Standard" && (
                          <div className="bg-altgreen text-blacktext font-semibold px-2 py-1.5 leading-none absolute right-0 top-2 text-center text-sm rounded-full">
                            Popular
                          </div>
                        )}
                        <div
                          className={`capitalize text-4xl font-bold mb-1.5 ${
                            x.title === "Standard"
                              ? " text-altgreen"
                              : "text-blacktext"
                          }`}
                        >
                          {x.title}
                        </div>
                        <div
                          className={` h-20 ${
                            x.title === "Standard"
                              ? " text-[#C4C4C4]"
                              : "text-blacktext"
                          }`}
                        >
                          {x.explain}
                        </div>
                        <div className="md:py-6 lg:h-40">
                          {["Basic", "Enterprise"].includes(x.title) ? (
                            <div className="text-3xl lg:text-[3vw] xxl:text-[60px] leading-none font-medium mb-6">
                              {x.billed}
                            </div>
                          ) : (
                            <>
                              <div className="flex items-start justify-start">
                                <div className="text-3xl lg:text-[3.5vw] xxl:text-[60px] font-medium mb-3 leading-none">
                                  {planType === "Monthly"
                                    ? x.billedMonth
                                    : x.billedAnnually}
                                </div>
                                <div className="pl-6 flex-1">
                                  <div className="font-medium text-[19px] leading-none">
                                    <div>per user</div>
                                    <div>per month</div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-[#999999] text-xs mt-1">
                                <div className="mb-0.5">{x.billedType}</div>
                                <div>
                                  billed{" "}
                                  {planType === "Monthly"
                                    ? "monthly"
                                    : x.annuallyPrice}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-stretch flex-col mt-auto">
                        <a
                          className={` rounded-full text-white justify-center text-2xl   inline-flex items-center py-2 px-4 ${
                            x.title === "Standard"
                              ? " bg-altgreen hover:bg-[#86B815]"
                              : "hover:bg-[#141414] bg-blacktext"
                          }`}
                          href="/"
                        >
                          Sign up
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="mb-2 mt-6 list-none">
                        {x.advantageList.map((y) => (
                          <li className="mt-2 lg:mt-4">
                            <div className="flex items-start">
                              <div className="flex">
                                <div className="mr-2 pt-1">
                                  <svg
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.327 14C11.0888 14 14.1384 10.866 14.1384 7C14.1384 3.13401 11.0888 0 7.327 0C3.56518 0 0.515625 3.13401 0.515625 7C0.515625 10.866 3.56518 14 7.327 14Z"
                                      fill="#99D217"
                                    ></path>
                                    <path
                                      d="M3.85156 6.99883L6.23554 9.44883L10.6629 4.54883"
                                      stroke-width="1.2"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="stroke-white"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <span className="">{y.text}</span>
                                </div>
                                {y?.moreInfo && (
                                  <div className="relative group pt-1">
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.99987 1.46704C4.11583 1.46704 0.96718 4.61569 0.96718 8.49973C0.96718 12.3837 4.11583 15.5324 7.99987 15.5324C11.8839 15.5324 15.0326 12.3837 15.0326 8.49973C15.0326 4.61569 11.8839 1.46704 7.99987 1.46704ZM1.91718 8.49973C1.91718 5.14036 4.6405 2.41704 7.99987 2.41704C11.3592 2.41704 14.0826 5.14036 14.0826 8.49973C14.0826 11.8591 11.3592 14.5824 7.99987 14.5824C4.6405 14.5824 1.91718 11.8591 1.91718 8.49973ZM8.79988 5.30001C8.79988 5.74184 8.44171 6.10001 7.99988 6.10001C7.55806 6.10001 7.19988 5.74184 7.19988 5.30001C7.19988 4.85818 7.55806 4.50001 7.99988 4.50001C8.44171 4.50001 8.79988 4.85818 8.79988 5.30001ZM6.43334 6.93334H6.93334H8.00001C8.27615 6.93334 8.50001 7.1572 8.50001 7.43334V11.2H9.06667H9.56667V12.2H9.06667H8.00001H6.93334H6.43334V11.2H6.93334H7.50001V7.93334H6.93334H6.43334V6.93334Z"
                                        fill="#999999"
                                      ></path>
                                    </svg>
                                    <div className="absolute text-xs bg-[#575B6B] text-white p-3 rounded w-36 z-30 right-0 md:-left-16 top-6 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none">
                                      <div className="w-3 h-3 bg-[#575B6B] absolute -top-1.5 left-[66px] rotate-45 hidden md:block"></div>
                                      {y?.moreInfo}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center text-lg mt-32 border-y border-[#C4C4C4] py-6">
                <a
                  className="flex py-3 px-6 bg-[#A8AFB9] bg-opacity-30 rounded-full items-center font-semibold text-xl leading-none"
                  href="/"
                >
                  Contact us
                  <svg
                    className="ml-2"
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.34315 7.25602L1.23648 2.14935L2.25781 1.12801L8.38582 7.25602L2.25781 13.384L1.23648 12.3627L6.34315 7.25602Z"
                      fill="black"
                    ></path>
                    <path
                      d="M1.23648 2.14935L0.882924 1.79579L0.529371 2.14935L0.882924 2.5029L1.23648 2.14935ZM6.34315 7.25602L6.69671 7.60957L7.05026 7.25602L6.69671 6.90247L6.34315 7.25602ZM2.25781 1.12801L2.61137 0.774457L2.25781 0.420903L1.90426 0.774457L2.25781 1.12801ZM8.38582 7.25602L8.73938 7.60957L9.09293 7.25602L8.73938 6.90247L8.38582 7.25602ZM2.25781 13.384L1.90426 13.7376L2.25781 14.0911L2.61137 13.7376L2.25781 13.384ZM1.23648 12.3627L0.882924 12.0091L0.529371 12.3627L0.882924 12.7162L1.23648 12.3627ZM0.882924 2.5029L5.9896 7.60957L6.69671 6.90247L1.59003 1.79579L0.882924 2.5029ZM1.90426 0.774457L0.882924 1.79579L1.59003 2.5029L2.61137 1.48156L1.90426 0.774457ZM0.882924 12.7162L1.90426 13.7376L2.61137 13.0305L1.59003 12.0091L0.882924 12.7162ZM5.9896 6.90247L0.882924 12.0091L1.59003 12.7162L6.69671 7.60957L5.9896 6.90247ZM8.73938 6.90247L2.61137 0.774457L1.90426 1.48156L8.03227 7.60957L8.73938 6.90247ZM2.61137 13.7376L8.73938 7.60957L8.03227 6.90247L1.90426 13.0305L2.61137 13.7376Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <div className="md:ml-6 font-medium text-2xl mb-6 md:mb-0 order-first md:order-last">
                  For large teams and custom solutions
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <PrimaryLayout>
        {/* <SidebarLayout /> */}
        {page}
      </PrimaryLayout>
    </>
  );
};
