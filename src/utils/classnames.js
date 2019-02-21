export default function classnames(classes) {
  return classes && classes.length && classes[0] ? ` ${classes.join(" ")}` : '';
}