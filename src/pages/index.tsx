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
  btnText: string;
}
const arrary: arraryType[] = [
  {
    title: "Basic",
    explain:
      "For individuals looking to explore Runway’s AI Magic Tools and content creation features.",
    billed: "Free Forever",
    billedType: "",
    btnText: "Sign up",
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
    btnText: "Subscribe now",
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
    btnText: "Subscribe now",
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
    btnText: "Subscribe now",
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
    btnText: "Schedule a Demo",
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
        <div className="pt-28 lg:pt-2/16 pb-40 bg-[#E2E2E3]">
          <div className="pb-12">
            <div className="rw-container">
              <h1 className="leading-none tracking-tight text-[56px] md:text-[9.7vw] xxl:text-[140px] font-semibold mb-7">
                个人主页
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
                  Github
                </div>
                <div
                  onClick={() => setPlanType("Annual")}
                  className={`w-40 md:w-52 cursor-pointer text-center text-base md:text-xl leading-none font-semibold relative transition-colors duration-100 h-full flex items-center justify-center ${
                    planType !== "Monthly" ? "text-white" : "text-black"
                  }`}
                >
                  Email
                  <span
                    className={`ml-1 md:ml-2 transition-colors duration-100   ${
                      planType !== "Monthly"
                        ? "text-altgreen"
                        : "text-[#473FF4]"
                    }`}
                  >
                    haha
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
