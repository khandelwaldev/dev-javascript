import { TerminalLogo } from "components/Icons";
import { NextSeo } from "next-seo";

export const items = [
  {
    name: "Laptop",
    bio: "Apple MacBook Pro (15-Inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7)",
  },
  {
    name: "Adaptor",
    bio: "Hyper HyperDrive USB C Hub, Duo 7-in-2 USB C Adapter - MacBook Pro Adapter with Magnetic Grip, 4K HDMI, USB-C 40Gbps 100W PD, 3.1 USB-A, MicroSD/SD - Space Gray",
  },
  {
    name: "Keyboard & Mouse",
    bio: "Circle ROVER A7 Wireless Combo Keyboard & Mouse Set Deskset / Unique Slim Design / Spill Resistance / UV Prined Keycaps / 12 Multimedia Hotkeys, Fn+(F1 to F12) / Easy to Clean - White",
  },
  {
    name: "IDE",
    bio: "Visual Studio Code",
  },
  {
    name: "API Tester",
    bio: "Postman",
  },
  {
    name: "Browser",
    bio: "Google Chrome",
  },
  {
    name: "IPhone Simulator",
    bio: "XCode",
  },
  {
    name: "Android Simulator",
    bio: "Android Studio",
  },
  {
    name: "Clean Up",
    bio: "Clean My Mac X",
  },
  {
    name: "Video Editor",
    bio: "Final Cut Pro",
  },
  {
    name: "Recording Software",
    bio: "Quicktime Player",
  },
  {
    name: "Terminal",
    bio: "Mac Terminal",
  },
  {
    name: "Design/Mock Up",
    bio: "Adobe XD",
  },
  {
    name: "Local DB",
    bio: "Table Plus",
  },
];

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Dev"
        description="Software and hardware collection of things I'm using daily."
      />
      <div>
        <h1 className="text-4xl font-semibold">Uses</h1>
        <p className="text-base my-5 opacity-80">
          Here is a list of all the gear I use on a day to day basis.
        </p>
      </div>
      <hr className="border border-white opacity-30 my-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {items.map((item) => (
          <div
            key={item.name}
            className="p-3 border border-white/70 rounded-xl"
          >
            <TerminalLogo className="w-[100px] mx-auto" />
            <h1 className="my-5 text-xl font-semibold opacity-40">
              {item.name}
            </h1>
            <p className="text-lg line-clamp-3">{item.bio}</p>
          </div>
        ))}
      </div>
    </>
  );
}
