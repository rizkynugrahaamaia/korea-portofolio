import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] w-full max-w-7xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 font-black w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-bold text-[#2F2C2D]">MyLogo</h1>
          <p className="text-[#343741] text-[14px]">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          <p className="text-[#5E626F] text-[13px]">010-0000-0000</p>
          <p className="text-[#5E626F] text-[13px]">aaaaa@naver.com</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
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

      <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="flex gap-4 w-full md:w-1/2 px-4">
          <div className="leading-[28px]">
            <p>상호명</p>
            <p>하이퍼하이어</p>
            <p>Hyperhire India Private Limited</p>
          </div>
          <div className="leading-[28px]">
            <p>대표 CEO</p>
            <p>김주현</p>
            <p>Juhyun Kim</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:ml-8 px-4">
          <div className="leading-[28px]">
            <p>사업자등록번호 CIN</p>
            <p>427-86-01187</p>
            <p>U74110DL2016PTC290812</p>
          </div>
          <div className="leading-[28px]">
            <p>주소 ADDRESS</p>
            <p>서울특별시 강남대로 479, 지하 1층 238호</p>
            <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
