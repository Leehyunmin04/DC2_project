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
//////////////////

// const container = document.querySelector('.image-container');
const leaves = document.querySelectorAll('.leaf');

// 이미지 로딩 후 나뭇잎 애니메이션 설정
window.addEventListener('load', () => {
  leaves.forEach((leaf, index) => {
    // 컨테이너 크기 측정
    const maxX = container.clientWidth - 10; // 여백 고려
    const maxY = container.clientHeight - 10;

    // 랜덤한 위치 계산
    const randomX = Math.random() * maxX;
    const randomY = -Math.random() * 100; // 약간 위에서 시작하도록 조정

    // 나뭇잎 위치 설정
    leaf.style.left = `${randomX}px`;
    leaf.style.top = `${randomY}px`;

    // 애니메이션 시간과 딜레이 랜덤 설정
    const duration = Math.random() * 2 + 2; // 4~6초 사이의 애니메이션
    const delay = Math.random() * 3; // 0~5초 사이의 딜레이

    // 나뭇잎 애니메이션 적용
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

// 이미지 로딩 후 실행
window.addEventListener('load', () => {
  sparkles.forEach((sparkle) => {
    randomizeSparklePosition(sparkle);

    // 2~4초마다 위치 변경
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

  // 랜덤한 이미지 선택 (세 개의 물방울 이미지 중 하나)
  const randomBubble = `./asset/bubble${Math.floor(Math.random() * 3) + 1}.png`;
  bubble.src = randomBubble;

  // 랜덤한 위치 설정
  const randomX = Math.random() * 100; // 0~100% 너비
  const randomDelay = Math.random() * 2; // 0~2초 랜덤 딜레이

  bubble.style.left = `${randomX}%`;
  bubble.style.animationDelay = `${randomDelay}s`;

  // 물방울을 컨테이너에 추가
  waterBubbles.appendChild(bubble);

  // 물방울 제거 (애니메이션 끝나면 삭제)
  setTimeout(() => {
    bubble.remove();
  }, 5000); // 5초 후에 제거
}

// 물방울을 일정 시간마다 생성
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
    { threshold: 0.5 }
  );

  observer.observe(overlay);
});
