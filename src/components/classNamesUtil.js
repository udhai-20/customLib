export default function classNameUtil(...classes) {
  return classes.filter(Boolean).join(" ");
}
