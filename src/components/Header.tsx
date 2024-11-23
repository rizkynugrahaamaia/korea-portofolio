'use client';
import { useState } from 'react';
import { Button, Tooltips } from './elements';
import Image from 'next/image';

export default function Header() {
  const [showTooltips, setShowTooltips] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 w-full sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>
        <div className="hidden md:flex gap-8">
          <Tooltips
            content={
              <div className="flex gap-2 w-full">
                <p>채용</p>
                <Image alt="/caret-down.svg" height={16} src="/caret-down.svg" width={16} />
              </div>
            }
            setVisible={setShowTooltips}
            visible={showTooltips}>
            <ul className="text-xs font-medium space-y-4">
              <li>해외 개발자 원격 채용</li>
              <li>외국인 원격 채용 (비개발 직군)</li>
            </ul>
          </Tooltips>
          <div>해외 개발자 활용 서비스</div>
        </div>
        {/* <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav> */}
        <Button>문의하기</Button>
      </div>
    </header>
  );
}
