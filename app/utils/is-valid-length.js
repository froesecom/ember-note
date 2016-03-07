export default function isValidLength(value, min, max) {
  return (value && (value.length >= min && value.length < max));
}
