import {
  TelegramIcon,
  DevToLogo,
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  MediumLogo,
  TwitterLogo,
} from "components/Icons";
import { NextSeo } from "next-seo";
import Link from "next/link";

export const socialLinks = [
  {
    label: "Instagram",
    domain: "instagram.com/",
    username: "_slyro",
    icon: <InstagramLogo className="w-5 h-5" />,
  },
  {
    label: "Twitter",
    domain: "x.com/",
    username: "i_slyro",
    icon: <TwitterLogo className="w-5 h-5" />,
  },
  {
    label: "Github",
    domain: "github.com/",
    username: "khandelwaldev",
    icon: <GithubLogo className="w-5 h-5" />,
  },
  {
    label: "Discord",
    domain: "discord.com/users/",
    username: "i.slyro",
    icon: <DiscordLogo className="w-5 h-5" />,
  },
  {
    label: "Telegram",
    domain: "t.me/",
    username: "slyro",
    icon: <TelegramIcon className="w-5 h-5" />,
  },
  {
    label: "Dev.to",
    domain: "dev.to/",
    username: "khandelwaldev",
    icon: <DevToLogo className="w-5 h-5" />,
  },
  {
    label: "Medium.com",
    domain: "medium.com/",
    username: "@slyro",
    icon: <MediumLogo className="w-5 h-5" />,
  },
];

export default function contact() {
  return (
    <>
      <NextSeo
        title="Contact - Dev"
        description="DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL."
      />
      <div>
        <h1 className="text-2xl font-sembold">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </h1>

        <div className="my-10 flex flex-col gap-y-5 p-3 bg-[#2ec4b6]/10 border border-white/70 rounded-xl">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={`https://${link.domain}${link.username}`}
              target="_blank"
              className="flex justify-between p-1 px-2 bg-[#011627] border hover:border-[#20a4f3] rounded"
            >
              <p className="text-white/40">
                {link.domain}
                <span className="text-white">{link.username}</span>
              </p>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
