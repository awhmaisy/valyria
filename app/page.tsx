// are you reading the repo? well, helloooo darling! <3

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-12 font-[family-name:MSG] max-w-screen-md mx-auto">
        <main className="flex flex-col row-start-2 items-center sm:items-start text-sm">
          <Image
            src="/mach-poster2.png"
            alt="PM Shirt"
            width={400}
            height={400}
          />
          <p className="mt-10 font-[family-name:EVA] text-2xl mb-4" style={{ transform: 'scaleY(2)' }}>
            MACH-12
          </p>
          <p>High-impact, American-made brand emblems for technical companies.</p>
          <p>Please direct all inquiries to <a href="mailto:m@mach012.com">m@mach012.com</a>.</p>
          <div className="font-[family-name:MSG] text-sm mt-10">
            <div>DECLASSIFY ON .............. SCI, SAP</div>
            <div>DOP ........................ 2025/01/27</div>
            <div>DOMAINS .................... AE, AV, AI, CT, OH</div>
            <div>SHORT-TITLE ................ M12-S-5166-SL</div>
          </div>
        </main>
      </div>
    </>
  );
}
