import Image from "next/image";

import JoinWaitlistInput from "@/components/join-waitlist-input";
import { subtitle, title } from "@/components/primitives";
import Paddles from "@/assets/paddles/PaddlesBlue.png";
import { GridBackground } from "@/components/grid-gradient-bg";

import Logo from "@/assets/logo/Variant2.svg";

export default function ComingSoonPage() {
  return (
    <GridBackground>
      <div className="ml-6">
        <Image alt="logo" src={Logo} width={150} height={50} />
      </div>
      <div className="mt-[4rem] flex flex-col items-center max-w-3xl gap-4 mx-auto text-center">
        <h1 className={title({ size: "lg", class: "w-full font-display" })}>
          Join The Waitlist!
        </h1>
        <p className={subtitle({ class: "md:w-1/2" })}>
          Bid on rare physical & digital assets in a decentralized, transparent
          marketplace.{" "}
        </p>
        <JoinWaitlistInput />
      </div>
      {/* <div className="fixed flex items-center justify-center h-[100px]  w-full -translate-x-1/2 bottom-4 left-1/2">
        <Image alt="paddle-left" className="object-cover" src={Paddles} />
      </div> */}
    </GridBackground>
  );
}
