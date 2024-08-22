export function getRandomHexColor() {
  // Generate a random number between 0 and 0xFFFFFF (the range of hex colors)
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Convert the number to a hex string and pad with zeros if needed
  const hexColor = `#${randomColor.toString(16).padStart(6, "0")}`;
  return hexColor;
}
