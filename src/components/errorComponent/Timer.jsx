import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, updateCount }) {
  const { seconds } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => {
    updateCount(seconds);
  }, [seconds]);
}

export { MyTimer };
