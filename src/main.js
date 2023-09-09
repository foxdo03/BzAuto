// since page is scorlling down, dark mode

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // 스크롤 되는 Y 좌표가 headerHeight 보다 크다면 다른 스타일링
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
