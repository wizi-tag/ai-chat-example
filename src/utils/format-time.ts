export function formatTime(time: number): string {
  console.log(time)
  console.log(typeof time)
  const date = new Date(time);

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0"); 
  const DD = String(date.getDate()).padStart(2, "0");
  
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
}
