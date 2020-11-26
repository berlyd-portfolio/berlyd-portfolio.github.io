// Code adapted from:
// https://stackoverflow.com/questions/5573096/detecting-webp-support by @Rui Marques as of 11/25/2020

export function support_format_webp() {
  var elem = document.createElement("canvas");

  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}
