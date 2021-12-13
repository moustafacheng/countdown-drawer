export const convertToMinutes = ({
  hours,
  minutes,
}: {
  hours: string;
  minutes: string;
}) => Number(hours) * 60 + Number(minutes);

export const convertToSeconds = ({
  hours,
  minutes,
  seconds,
}: {
  hours: string;
  minutes: string;
  seconds: string;
}) => Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);

export const formatTime = (millisec: number) => {
  const formattedHours = Math.floor(millisec / (1000 * 60 * 60))
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })
    .replace(/,/g, "");
  const formattedMinutes = Math.floor(
    (millisec / (1000 * 60)) % 60
  ).toLocaleString(undefined, { minimumIntegerDigits: 2 });
  const formattedSeconds = Math.floor((millisec / 1000) % 60).toLocaleString(
    undefined,
    { minimumIntegerDigits: 2 }
  );
  return {
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
  };
};
