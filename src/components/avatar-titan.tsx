import type { Titan } from "herowars-library";
import { useEffect, useState } from "react";

const AvatarTitan: React.FC<{ titan: Titan | null }> = ({
  titan,
}): React.ReactElement | null => {
  const [avatarSrc, setAvatarSrc] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (titan) {
      import(`../data/titans-avatar/${titan.name}.png`)
        .then((module) => setAvatarSrc(module.default))
        .catch((err) => {
          console.error("Error loading avatar:", err);
          // Set a fallback image
          setAvatarSrc(undefined);
        });
    }
  }, [titan]);
  if (!titan) return null;

  return (
    <div>
      <div className="relative">
        <img className="" width={60} src={avatarSrc} alt={titan.name} />
      </div>
    </div>
  );
};

export default AvatarTitan;
