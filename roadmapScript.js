// Define the Typed.js configuration
var typing = new Typed(".text", {
  strings: [
    "Slinky Swap.",
    "Geyser.",
    "NFT GAME.",
    "Marketing.",
    "Moon<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAHpUExURQAAAPC4avC5aPC8bvHBdPHnKPHnKPHnKPC5afC9bf+/f/C4avG+cfG+cfC7aP+qVfC7avG+cfHBdPC5aeWyZvC8bvC8buLGcfO5aPG+cfG+cfK2bfG+cf+/X++7bPG5aPG+cfG5afC5a/C8bvC8bvHnKO+5bPC5au+7bO+7bPG+cfG+cfHnKPHnKPHnKO+7bO+7bO+3Z/C8bvC8bvC6avC8bvC8bvC4a++5aO+7bOSrV++7bOmqXPHnKPC8bvK/ZuquXeSrV9q2beSrV+asWv+/P+atWeSrV/C4af9/f++yYOatWey2ZPC8bvHnKPC8bvHnKPvcm/3prv3rtP7uufvio/zcl/reovzmrf/wvv7hnvvnsv/xwPbjosGeY8ela93Kq/bx6f38+vTt49a/mvTu5OrezPfy7MOlg6N7UquNb/Dr5uzYo+vXpOndyt/Kp////8+xj9zTyT8yIm9RMKCCZPjz7MGZbUI2JxwZETktH4RdNuzgzfz36odoRfz69v/676yPcP/10v/89P/wz//78f7x0P7yxf/44P/22v/zyPzuw/rnuPbiqvPdqvHYoPDXn8ircrufbsaqdMaresKlc1dOPD03Km5iR4ByUJGBWXBjSEdAMFtSPubOp6ybfoZ6YnVpVfvfrMXss0UAAABQdFJOUwAka6bO7frsaiMEW8bFWgNI2thGCpyaCRbNyxXYCJhJ11xYx8T+IWempM/M6vn4paMgxsNW2NVFQpbwyCT31xQm8w7QcwSN71cCMpuxzevMJTuHnwAAAAFiS0dEcNgAbHQAAAAHdElNRQfoAg8UDAnaJox9AAACwElEQVRIx+2U6VsTMRDGV0AKHqCciuJdERQVUQTxvm9ns0m7u12g1AMVleJ9gCCoVbAoKCqoXH+pk2Qr7FF4Hj/zfujTtO8vM5NJRlEW9V9akpGZtTQ7O5CVmZO7sHvZ8hUwRyvz8uf3r1otfCohKaSgcB57UbHt0igLhVJISWk6/5q1AGGdMEINqjPTNBklehigbF0afwH6CaWGYfAPQnX+hSCx3pcowv1ZhNsNylCGlCDKyn2AYrG/8JhchmXNEhu8/kJ+NiIfw2BNXEQSlOoqwEbP+eN5Ms3OXxMAs2xCYwCb3P3YbCdEGT8c7tctIVE4htjiArbKACL9JkoQsFKADLHNdX+wAh0BgOYWMCMW1YQbWpoBEMAqgtsdQIZsAURbY9ex0fbucONmrDUKMqcKB7BDAHCr7fadu+3Re9J/PyqWD0CcbKUDqBJAR7zz4aPHT+JgB7CXHQLY6QACWDOhT+PPnr94+SreJYEue9kmgF0OoFpE6I53vuZb9lhYtWH12MtuAez2AUgvJv2mPdZn4b3QrL6YWPZbPkCAA3qIve2NvXuPd0JLJHRqJT70x/o/YjTdk1IV74MaMqXwSQwMaCahmomNJ6IPrqL3IMAglCLMSCKhMfs70whDYK8DyMGniGElwIgeGRz8hG9PLEOMZ+RqXG4QQ/wjkkOfh4a+JJNM+kWAYI3zMu3jswJkUgDDI1+/jQwDcD8R7xpqXbc1zx4RNgGjoyD9eBZh3An2u4D8AyDqRkQYVVWAodS0qfMMtINigPHg8P3Hz7Hx8bFfv//MjsB676Mumf13YnJqenpqcgLUJlX+0uD1K6WH5g7VmRn+ycISaPQbM8rhI+CWKv1Hjym+On4CfNWYZlQqyslTfv6GciW9TnvSqqtX5tWZs+fmuIO15y8oC+ripctXAtXVV69VVtQs7F6Un/4CbkFhHsyDsEIAAAAASUVORK5CYII='>"
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
  contentType: 'html' // Set content type to HTML
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08, // text splitting transition
    duration: 0.3 // full text duration
  });


});