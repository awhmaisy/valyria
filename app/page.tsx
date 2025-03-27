// are you reading the repo? well, helloooo darling! <3

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-12 pb-20 gap-4 font-[family-name:MSG] max-w-lg mx-auto">
        <main className="flex flex-col row-start-2 items-center sm:items-start text-sm w-full">
          {/* Mobile version (visible only on small screens) */}
          <div className="flex flex-col items-center w-full max-w-xs mx-auto sm:hidden">
            <div className="w-full flex justify-center">
              <Image
                src="/mach-poster2.png"
                alt="PM Shirt"
                width={400}
                height={400}
              />
            </div>
            <p className="mt-10 font-[family-name:EVA] text-2xl mb-4 self-start" style={{ transform: 'scaleY(2)' }}>
              MACH-12
            </p>
            <p className="self-start mb-10">American-made garments and brand emblems for technical companies. Please forward all inquiries to <a href="mailto:m@mach012.com">m@mach012.com</a>. We craft aetheric garments upon request.</p>
            <div className="font-[family-name:MSG] text-sm w-full">
              <div>DECLASSIFY ON .............. SCI, SAP</div>
              <div>DOP ........................ 2025/04</div>
              <div>DOMAINS .................... AE, AV, AI, CT, OH</div>
              <div>SHORT-TITLE ................ M12-S-5166-SL</div>
              <br /><br />
            </div>
          </div>

          {/* Desktop version (hidden on small screens, visible on sm and up) */}
          <div className="hidden sm:block w-full">
            <div className="w-full flex justify-center">
              <Image
                src="/mach-poster2.png"
                alt="PM Shirt"
                width={400}
                height={400}
              />
            </div>
            <p className="mt-10 font-[family-name:EVA] text-2xl mb-4 max-w-lg" style={{ transform: 'scaleY(2)' }}>
              MACH-12
            </p>
            <p>American-made garments and brand emblems for technical companies. Please forward all inquiries to <a href="mailto:m@mach012.com">m@mach012.com</a>. We craft aetheric garments upon request.</p>
            <div className="font-[family-name:MSG] text-sm mt-10 max-w-lg">
              <div>DECLASSIFY ON .............. SCI, SAP</div>
              <div>DOP ........................ 2025/04</div>
              <div>DOMAINS .................... AE, AV, AI, CT, OH</div>
              <div>SHORT-TITLE ................ M12-S-5166-SL</div>
              <br /><br />


            {/*
            <div>100-PC COLLECTION, UNITS ARE ONE-SIZE AND DISTRESSED INDIVIDUALLY - NO TWO ARE THE SAME. 100% COTTON AND 100% MADE IN THE USA.</div>
            <br /><br />
            <Image
              src="/01-oneshot-mock.png"
              alt="PM Shirt"
              width={400}
              height={400}
            />
            <div className="flex gap-4 my-4 justify-center">
              <div className="border border-white px-4 py-2">ONESHOT-HOODIE</div>
              <div className="border border-white px-4 py-2">$𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</div>
            </div>
            <Image
              src="/01-expect-mock.png"
              alt="PM Shirt"
              width={400}
              height={400}
            />
            <div className="flex gap-4 my-4 justify-center">
              <div className="border border-white px-4 py-2">OPTIC-HOODIE</div>
              <div className="border border-white px-4 py-2">$𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</div>
            </div>
               */}
            </div>
          </div>
   
          {/* Mobile buttons */}
          <div className="flex gap-4 justify-center w-full max-w-xs mx-auto sm:hidden">
            <a href="https://pm-c2.com" className="w-1/2">
              <button className="border-[0.5px] border-white px-2 py-2 w-full text-xs">P.A. EMBLEMS (SOON)</button>
            </a>
            <a href="/PM-ONE-PAGE.pdf" className="w-1/2">
              <button className="border-[0.5px] border-white px-2 py-2 w-full text-xs">CLIENT ONE-PAGER</button>
            </a>
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex gap-4 justify-center w-full">
            <a href="https://pm-c2.com" className="w-full">
              <button className="border-[0.5px] border-white px-4 py-2 w-full">P.A. EMBLEMS (SOON)</button>
            </a>
            <a href="/PM-ONE-PAGE.pdf" className="w-full">
              <button className="border-[0.5px] border-white px-4 py-2 w-full">CLIENT ONE-PAGER</button>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
