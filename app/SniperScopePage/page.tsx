"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const SniperScopePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showError, setShowError] = useState(false);
  const controls = useAnimationControls();
  const crosshairControls = useAnimationControls();
  const lineControls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY < 500) {
      setShowError(false);
      controls.start({ opacity: 1 });
      crosshairControls.start({ borderColor: "white" });
      lineControls.start({ backgroundColor: "white" });
    } else if (scrollY >= 500 && scrollY < 1000) {
      setShowError(true);
      crosshairControls.start({
        borderColor: "red",
        transition: { duration: 0.2 }
      });
      lineControls.start({
        backgroundColor: "red",
        transition: { duration: 0.2 }
      });
    }
  }, [scrollY, controls, crosshairControls, lineControls]);

  useEffect(() => {
    if (scrollY >= 1000) {
      controls.start({ opacity: 0, transition: { duration: 0.2 } });
    }
  }, [scrollY, controls]);

  return (
    <div className="h-[200vh] bg-black">
      <motion.div
        animate={controls}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
      >
        <div className="relative">
          {/* Outer circle */}
          <motion.div
            animate={crosshairControls}
            initial={{ 
              borderColor: "white"
            }}
            className="w-[100px] h-[100px] border-2 rounded-full relative"
          >
            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={lineControls}
                initial={{ backgroundColor: "white" }}
                className="w-[200px] h-[1px] absolute left-[-100px]"
              ></motion.div>
              <motion.div
                animate={lineControls}
                initial={{ backgroundColor: "white" }}
                className="w-[1px] h-[200px] absolute top-[-100px]"
              ></motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={lineControls}
                initial={{ backgroundColor: "white" }}
                className="w-[75px] h-[0.5px] absolute left-[-37.5px]"
              ></motion.div>
              <motion.div
                animate={lineControls}
                initial={{ backgroundColor: "white" }}
                className="w-[0.5px] h-[75px] absolute top-[-37.5px]"
              ></motion.div>
            </div>
          </motion.div>
          {/* HUD Elements */}
          <div className="absolute top-[-80px] left-[-200px] text-white font-[family-name:MSG] text-sm">
            {showError ? (
              <motion.div
                animate={{ opacity: [1, 0, 1, 0, 1] }}
                transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
              >
                <div className="text-red-500">ERROR</div>
              </motion.div>
            ) : (
              <>
                <div>MACH: 12</div>
                <div>SPEED: 14,816 km/h</div>
              </>
            )}
          </div>
          
          <div className="absolute bottom-[-80px] left-[-200px] text-white font-[family-name:MSG] text-sm">
            {showError ? (
              <motion.div
                animate={{ opacity: [1, 0, 1, 0, 1] }}
                transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
              >
                <div className="text-red-500">ERROR</div>
              </motion.div>
            ) : (
              <>
                <div>HDG: 270° (W)</div>
                <div>LAT: 34.0522° N</div>
                <div>LON: 118.2437° W</div>
              </>
            )}
          </div>
          
          <div className="absolute bottom-[-80px] right-[-200px] text-white font-[family-name:MSG] text-sm">
            {showError ? (
              <motion.div
                animate={{ opacity: [1, 0, 1, 0, 1] }}
                transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
              >
                <div className="text-red-500">ERROR</div>
              </motion.div>
            ) : (
              <div>ALT: 85,000 FT</div>
            )}
          </div>
          
          <div className="absolute top-[-80px] right-[-200px] text-white font-[family-name:MSG] text-sm">
            {showError ? (
              <motion.div
                animate={{ opacity: [1, 0, 1, 0, 1] }}
                transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
              >
                <div className="text-red-500">ERROR</div>
              </motion.div>
            ) : (
              <div>SOF A-LVL</div>
            )}
          </div>
        </div>
      </motion.div>

      <div
        className={`h-screen w-full text-white flex items-center justify-center ${
          scrollY > 1000 ? "visible" : "invisible"
        }`}
      >
      </div>
    </div>
  );
};

export default SniperScopePage;
