import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import type { TimeUser } from "../data/users.d";

const User: React.FC<{ user: TimeUser; showWarTime: boolean }> = ({
  user,
  showWarTime,
}) => {
  const [time, setTime] = useState(DateTime.now());
  const warStart = DateTime.utc().set({ hour: 9, minute: 0, second: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(DateTime.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <td className="px-5" data-label={"Name"} key={user.id}>
        {user.name}
      </td>
      <td className="px-5" data-label={"Local Time"}>
        {time.setZone(user.timeZone).toFormat("dd, HH:mm")}
      </td>
      {showWarTime && (
        <td className="px-5" data-label={"War Starts"}>
          {warStart.setZone(user.timeZone).toFormat("HH:mm")}
        </td>
      )}
      {showWarTime && (
        <td className="px-5" data-label={"War Ends"}>
          {warStart
            .plus({ hours: 11 })
            .setZone(user.timeZone)
            .toFormat("HH:mm")}
        </td>
      )}
    </>
  );
};

export default User;
