export interface ISFooterLayout {}

const FooterLayout: React.FC<ISFooterLayout> = () => {
  return (
    <footer>
      <div className="h-[120px] w-full p-[15px] bg-[#303133] text-[14px]">
        <div className="flex flex-row justify-center text-slate-100">
          这是底部
        </div>
      </div>
    </footer>
  );
  // rgb(48 49 51)
};

export default FooterLayout;
