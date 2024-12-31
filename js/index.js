document.addEventListener("DOMContentLoaded", () => {
  const projectContainers = document.querySelectorAll(".project__container");

  projectContainers.forEach((container) => {
    const description = container.querySelector(".project__description");

    if (description) {
      // 컨테이너 클릭 시 설명 창 토글
      container.addEventListener("click", (event) => {
        event.stopPropagation(); // 클릭 이벤트가 문서로 전달되지 않도록 막음
        const isHidden =
          description.style.display === "none" || !description.style.display;
        description.style.display = isHidden ? "block" : "none";
      });
    }
  });

  // 문서 클릭 시 모든 설명 창 닫기
  document.addEventListener("click", () => {
    const descriptions = document.querySelectorAll(".project__description");
    descriptions.forEach((desc) => {
      desc.style.display = "none";
    });
  });
});
