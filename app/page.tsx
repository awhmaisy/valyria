// are you reading the repo? well, helloooo darling <3

"use client";

import { useState } from "react";
import Image from "next/image";
import Accordion from "@/www-sacred/components/Accordion";
import Drawer from "@/www-sacred/components/Drawer";
import styles from "@/www-sacred/components/Accordion.module.scss";
import CardDouble from "@/www-sacred/components/CardDouble";
import RowSpaceBetween from "@/www-sacred/components/RowSpaceBetween";
import ContentFluid from "@/www-sacred/components/ContentFluid";
import ActionListItem from "@/www-sacred/components/ActionListItem";
  
export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {
      case "H.S.D.":
        return "everything we create is designed to break something before it breaks us.";
      case "TOP":
        return "Details about System Calls...";
      case "CODEX":
        return "the doctrine of the initiated. what you see is already obsolete.";
      case "operating system":
        return "a black-site architecture. no manual, no map—only execution.";
      default:
        return "beyond this point, velocity becomes unstable.";
    }
  };

  return (
    <>
      <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-12 font-[family-name:MSG] max-w-screen-md mx-auto ${styles.customClass}`}>
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
        {/* <Accordion defaultValue={false} title="REAL HARD-CORE">
            <span className="text-14px">
              MACH-12 is the breaking point, American industry on offense. No longer reactive. No longer comfortable. This is economic warfare, and we intend to win.
            </span>
            <br /> <br />
            <CardDouble title="︻デ═一">
              <RowSpaceBetween>
                <Drawer defaultOpen={true}>
                  {/* to change the default open, set to false and hide sidebar on site open */}
                {/*   <ActionListItem icon={`+`} onClick={() => handleItemClick("H.S.D.")}>H.S.D.</ActionListItem>
                  <ActionListItem icon={`+`} onClick={() => handleItemClick("TOP HEAT")}>H.E.A.T.</ActionListItem>
                  <ActionListItem icon={`+`} onClick={() => handleItemClick("CODEX")}>CODEX</ActionListItem>
                  <ActionListItem icon={`+`} onClick={() => handleItemClick("operating system")}>M(12) OS</ActionListItem>
                </Drawer>
                <ContentFluid>
                  <h2 className="text-sm">{selectedItem || "WELCOME"}</h2>
                  <p className="text-sm">{getContent()}</p>
                </ContentFluid>
              </RowSpaceBetween>*/}
          {/*   </CardDouble>
            <br />
          </Accordion> */}
        </main>
      </div>
    </>
  );
}
