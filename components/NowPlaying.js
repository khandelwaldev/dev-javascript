import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const NowPlaying = () => {
  const [forceRender, setForceRender] = useState(false);
  const { data, mutate } = useSWR("/api/spotify", fetcher);

  useEffect(() => {
    const interval = setInterval(() => {
      // Force a re-render every 10 seconds
      setForceRender((prev) => !prev);
      // Manually re-fetch data to check for updates
      mutate();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        {data.isPlaying ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#121212] w-full h-[60px] border-[2px] border-[#1ed760] rounded-xl px-2 flex gap-5 items-center">
                <div>
                  <img
                    src={data.albumImageUrl}
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="line-clamp-1">{data.title}</p>
                  <p className="text-white opacity-[50%] text-base line-clamp-1">{data.artist}</p>
                </div>
              </div>
          </a>
        ) : (
          <div className="bg-[#121212] w-[300px] h-[60px] border-[2px] border-[#1ed760] rounded-xl px-2">
              <div className="w-full h-full flex gap-5 items-center">
                <div>
                  <img
                    src={`./spotify.png`}
                    width={45}
                    height={45}
                    className="rounded-full"
                    alt="Spotify"
                  />
                </div>
                <div>
                  <p className="line-clamp-1">Not Listening</p>
                  <p className="text-white opacity-[50%] text-base line-clamp-1">Spotify-</p>
                </div>
              </div>
            </div>
        )}
    </div>
  );
};

export default NowPlaying;
