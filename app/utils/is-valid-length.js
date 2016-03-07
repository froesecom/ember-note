export default function isValidLength(value, min, max) {
  return !(value.length <= min || value.length > max);
}
