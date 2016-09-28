export default function() {
  return function(src) {
    if (src == 'N/A') {
      return src = 'img/noposter.jpg';
    } else {
      return src = src;
    }
  };
}
