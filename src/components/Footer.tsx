import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] p-8 w-full max-w-full">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4 font-black">
          <h1 className="text-2xl font-bold">MyLogo</h1>
          <p className="text-[#343741] text-[14px]">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          <p className="text-[#5E626F] text-[13px]">010-0000-0000</p>
          <p className="text-[#5E626F] text-[13px]">aaaaa@naver.com</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="p-4 flex flex-col gap-2">
            <div>
              <div className="bg-[#EFF1F6] rounded-lg inline-flex p-2">
                <Image alt="/icon-code.svg" height={24} src="/icon-code.svg" width={24} />
              </div>
            </div>
            <p className="text-[#343741] font-black text-sm">해외 개발자 원격 채용</p>
            <div className="flex gap-2">
              <p className="text-[#5E626F] font-black">바로가기</p>
              <Image alt="/arrow-right-square.svg" height={20} src="/arrow-right-square.svg" width={20} />
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div>
              <div className="bg-[#EFF1F6] rounded-lg inline-flex p-2">
                <Image alt="/icon-avatar.svg" height={24} src="/icon-avatar.svg" width={24} />
              </div>
            </div>
            <p className="text-[#343741] font-black text-sm">외국인 원격 채용 (비개발)</p>
            <div className="flex gap-2">
              <p className="text-[#5E626F] font-black">바로가기</p>
              <Image alt="/arrow-right-square.svg" height={20} src="/arrow-right-square.svg" width={20} />
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div>
              <div className="bg-[#EFF1F6] rounded-lg inline-flex p-2">
                <Image alt="/icon-kor.svg" height={24} src="/icon-kor.svg" width={24} />
              </div>
            </div>
            <p className="text-[#343741] font-black text-sm">한국어 가능 외국인 채용</p>
            <div className="flex gap-2">
              <p className="text-[#5E626F] font-black">바로가기</p>
              <Image alt="/arrow-right-square.svg" height={20} src="/arrow-right-square.svg" width={20} />
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div>
              <div className="bg-[#EFF1F6] rounded-lg inline-flex p-2">
                <Image alt="/icon-gear.svg" height={24} src="/icon-gear.svg" width={24} />
              </div>
            </div>
            <p className="text-[#343741] font-black text-sm">해외 개발자 활용 서비스</p>
            <div className="flex gap-2">
              <p className="text-[#5E626F] font-black">바로가기</p>
              <Image alt="/arrow-right-square.svg" height={20} src="/arrow-right-square.svg" width={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
