import Image from "next/image";

import JoinWaitlistInput from "@/components/join-waitlist-input";
import { subtitle, title } from "@/components/primitives";
import Paddles from "@/assets/paddles/PaddlesBlue.png";
import { GridBackground } from "@/components/grid-gradient-bg";

import Logo from "@/assets/logo/Variant2.svg";

export default function ComingSoonPage() {
  return (
    <GridBackground>
      <div className="max-w-4xl gap-4 mx-auto">
        <Image alt="logo" src={Logo} height={50} width={190} />
      </div>
      <div className="mt-[4rem] flex flex-col gap-2 items-center justify-center text-center w-full">
        <h1 className={title({ size: "xl", class: "w-full font-display" })}>
          Join The Waitlist!
        </h1>
        <p className={subtitle({ class: "md:w-1/2" })}>
          Bid on rare physical & digital assets in a decentralized, transparent
          marketplace.{" "}
        </p>
        <div className="mt-4 w-[40%] mx-auto">
          <JoinWaitlistInput />
        </div>
      </div>
      {/* <div className="fixed flex items-center justify-center h-[100px]  w-full -translate-x-1/2 bottom-4 left-1/2">
        <Image alt="paddle-left" className="object-cover" src={Paddles} />
      </div> */}
    </GridBackground>
  );
}
