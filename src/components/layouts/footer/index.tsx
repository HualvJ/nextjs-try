export interface ISFooterLayout {}

const FooterLayout: React.FC<ISFooterLayout> = () => {
  return (
    <footer className="lg:pt-0 text-white bg-[#111111] relative">
      <div className="h-[120px] w-full p-[15px] bg-[#303133] text-[14px]">
        <div className="flex flex-row justify-center text-slate-100">
          <a href="https://beian.miit.gov.cn/" target="_blank">
            皖ICP备2024033302号-1
          </a>
        </div>
      </div>
    </footer>
  );
  // rgb(48 49 51)
};

export default FooterLayout;
