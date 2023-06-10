import React from "react";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import AZ900 from "@/assets/images/az_900.png";
import CNCF from "@/assets/images/cncf.png";

const Certifications = () => {
  return (
    <div className="mt-20">
      <Title title="Certifications" />

      <div className="card_container grid grid-cols-2 gap-5 mt-10 ">
        <Link
          href="https://www.credly.com/badges/09b8c330-9401-48f7-927a-683a5b49df5d/public_url"
          target="_blank"
        >
          <div className="card bg-secondary p-10 rounded-xl flex justify-center relative">
            <div className="img relative w-[300px] h-[300px]">
              <Image src={AZ900} alt="az_900" fill className=" object-cover" />
            </div>
          </div>
        </Link>
        <Link
          href="https://www.credly.com/badges/98030dab-8152-4ef9-93a4-ee6f7297530e/public_url"
          target="_blank"
        >
          <div className="card bg-secondary p-10 rounded-xl flex justify-center ">
            <div className="img relative w-[300px] h-[300px]">
              <Image src={CNCF} alt="az_900" fill className=" object-cover" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
