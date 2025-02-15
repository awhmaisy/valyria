// are you reading the repo? well, helloooo darling! <3

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-12 font-[family-name:MSG] max-w-lg mx-auto">
        <main className="flex flex-col row-start-2 items-center sm:items-start text-sm">
          <Image
            src="/mach-poster2.png"
            alt="PM Shirt"
            width={400}
            height={400}
          />
          <p className="mt-10 font-[family-name:EVA] text-2xl mb-4 max-w-lg" style={{ transform: 'scaleY(2)' }}>
            MACH-12
          </p>
          <p>High-impact, American-made brand emblems for technical companies. Please direct all inquiries to <a href="mailto:m@mach012.com">m@mach012.com</a>. We do retail (below) and merchandise upon request.</p>
          <div className="font-[family-name:MSG] text-sm mt-10 max-w-lg">
            <div>DECLASSIFY ON .............. SCI, SAP</div>
            <div>DOP ........................ 2025/01/27</div>
            <div>DOMAINS .................... AE, AV, AI, CT, OH</div>
            <div>SHORT-TITLE ................ M12-S-5166-SL</div>
            <br /><br />
            <div style={{textDecoration: 'underline'}}>RETAIL UNDER CONSTRUCTION</div>

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
   
        </main>
      </div>
    </>
  );
}
