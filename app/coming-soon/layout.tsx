import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <div className="justify-center inline-block max-w-3xl text-center"> */}
      {children}
      {/* </div> */}
    </section>
  );
}
