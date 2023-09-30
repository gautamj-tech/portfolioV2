import React from "react";

import { twMerge } from "tailwind-merge";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

export const IconContainer = ({ icon, text, delay }: any) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.2,
                delay: delay ? delay : 0,
            }}
            className={twMerge(
                "relative z-50 flex flex-col items-center justify-center space-y-2"
            )}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-textPrimary bg-white dark:bg-[#1e293b] shadow-inner">
                {icon || <HiDocumentText className="  h-5 w-8 text-slate-600" />}
            </div>
            <div className="hidden rounded-md px-2 py-1 md:block">
                <div className="text-center text-xs font-bold text-textPrimary">
                    {text || `Web Development`}
                </div>
            </div>
        </motion.div>
    );
};

