export const getGMTOffset = (timeZone: string) => {
  const date = new Date();

  // Create a formatter for the specified time zone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset'
  });

  // Get the formatted parts
  const parts = formatter.formatToParts(date);
  const tzPart = parts.find(part => part.type === 'timeZoneName');

  return tzPart?.value || 'GMT';
}