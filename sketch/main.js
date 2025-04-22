const image = document.querySelector('.scroll-image');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        image.classList.add('show');
      }
    });
  },
  {
    threshold: 0.25, // 이미지가 50% 보일 때 동작
  }
);
observer.observe(image);
const leaves = document.querySelectorAll('.leaf');

window.addEventListener('load', () => {
  leaves.forEach((leaf, index) => {
    const maxX = container.clientWidth - 10; // 여백 고려
    const maxY = container.clientHeight - 10;

    const randomX = Math.random() * maxX;
    const randomY = -Math.random() * 100; // 약간 위에서 시작하도록 조정

    leaf.style.left = `${randomX}px`;
    leaf.style.top = `${randomY}px`;

    const duration = Math.random() * 2 + 2; // 4~6초 사이의 애니메이션
    const delay = Math.random() * 1; // 0~5초 사이의 딜레이

    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
  });
});
///////////////////
const sparkles = document.querySelectorAll('.sparkle');
const container = document.querySelector('.image-container');

function randomizeSparklePosition(sparkle) {
  const maxX = container.clientWidth - 10; // 여백 고려
  const maxY = container.clientHeight - 10;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  sparkle.style.left = `${randomX}px`;
  sparkle.style.top = `${randomY}px`;
}

window.addEventListener('load', () => {
  sparkles.forEach((sparkle) => {
    randomizeSparklePosition(sparkle);

    const interval = Math.random() * 1000 + 1000;
    setInterval(() => {
      randomizeSparklePosition(sparkle);
    }, interval);
  });
});
//////////////////
// 물방울 생성
// 물방울 생성
const waterBubbles = document.querySelector('.water-bubbles');

function createBubble() {
  const bubble = document.createElement('img');
  bubble.classList.add('bubble');

  const randomBubble = `./asset/bubble${Math.floor(Math.random() * 3) + 1}.png`;
  bubble.src = randomBubble;

  const randomX = Math.random() * 100; // 0~100% 너비
  const randomDelay = Math.random() * 2; // 0~2초 랜덤 딜레이

  bubble.style.left = `${randomX}%`;
  bubble.style.animationDelay = `${randomDelay}s`;
  waterBubbles.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 5000); // 5초 후에 제거
}

setInterval(createBubble, 500);
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay-image');

  if (!overlay) {
    console.error('overlay-image를 찾을 수 없습니다!');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.7 }
  );

  observer.observe(overlay);
});
