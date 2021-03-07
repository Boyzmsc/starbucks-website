const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// 0.3초 단위로 함수를 실행 -> Lodash 라이브러리 이용 (scroll 이벤트 처리 시 사용)
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY >= 500) {
    // Gsap 라이브러리를 통해 애니메이션 설정
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      // 투명
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      // 투명
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 순차적으로 나오게 하기 위해 (index + 1)을 delay time에 곱함
    delay : (index + 1) * .7,
    opacity : 1
  })
})
