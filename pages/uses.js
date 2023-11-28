import { TerminalLogo } from "components/Icons";
import { NextSeo } from "next-seo";

export const itemsPC = [
  {
    name: "27' 165hz Monitor",
    bio: "LG 27GR75Q-B",
  },
  {
    name: "Mouse",
    bio: "Logitech G402",
  },
  {
    name: "Keyboard",
    bio: "Logitech G512",
  },
  },
  {
    name: "CPU",
    bio: "i5 10400F",
  },
  },
  {
    name: "Motherboard",
    bio: "Gigabyte B460M",
  },
  },
  {
    name: "Graphics card",
    bio: "GeForce GTX 1660 SUPER",
  },
  },
  {
    name: "500gb SSD",
    bio: "WD Blue M.2 SN550",
  },
  },
  {
    name: "Storage",
    bio: "WD 1TB 7200RPM",
  },
  },
  {
    name: "Cooler",
    bio: "Cooler Master H410R",
  },
  },
  {
    name: "Power Supply, 80+ Bronze",
    bio: "FSP 700W",
  },
  },
  {
    name: "Ram",
    bio: "Corsair VENGEANCE® LPX 32GB",
  },
  },
  {
    name: "PC Cabinet",
    bio: "Cooler Master MasterBox MB520 Mesh",
  },
]

export const coding = [
  {
    name: "Editor",
    bio: "Visual Studio Code",
  },
  {
    name: "IDE",
    bio: "Visual Studio",
  },
  {
    name: "VS Code theme",
    bio: "Github Theme",
  },
  {
    name: "Terminal",
    bio: "Powershell",
  },
  {
    name: "Android Simulator",
    bio: "Android Studio",
  },
  {
    name: "DNS",
    bio: "Cloudflare",
  },
  {
    name: "Containerization",
    bio: "Docker",
  },
  {
    name: "Terminal",
    bio: "Fig",
  },
];

export const software = [
  {
    name: "Vector graphics editor",
    bio: "Adobe Illustrator",
  },
  {
    name: "Image manipulation software",
    bio: "Adobe Lightroom",
  },
  {
    name: "Raster graphics editor",
    bio: "Adobe Photoshop",
  },
  {
    name: "Video editing software",
    bio: "Adobe Premiere Pro",
  },
  {
    name: "Post-production application",
    bio: "Adobe After Effects",
  },
  {
    name: "Design tool",
    bio: "Figma",
  },
  {
    name: "Digital music service",
    bio: "Spotify",
  },
  {
    name: "API platform",
    bio: "Postman",
  },
  {
    name: "Open Broadcaster Software",
    bio: "OBS",
  },
]

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
      <hr className="border border-white opacity-30 mt-6 mb-8" />

          <h1 className="text-3xl font-semibold my-6">PC Hardware </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {software.map((item) => (
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

          <hr className="border border-white opacity-30 my-8" />

          <h1 className="text-3xl font-semibold my-6">Coding</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {coding.map((item) => (
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

           <hr className="border border-white opacity-30 my-8" />

          <h1 className="text-3xl font-semibold my-6">Software</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {software.map((item) => (
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
