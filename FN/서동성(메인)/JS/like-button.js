
// 빨간 하트 구현
document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const likeButton = post.querySelector(".like-button img");
        const likesText = post.querySelector(".post-footer .likes");

        likeButton.addEventListener("click", function () {
            const isLiked = likeButton.getAttribute("src").includes("피드용-빨간하트");

            // 토글 이미지
            likeButton.setAttribute(
                "src",
                isLiked
                    ? "../fromFigma_Icon_1/피드용-하트.svg"
                    : "../fromFigma_Icon_1/피드용-빨간하트.svg"
            );

            // 좋아요 숫자 업데이트
            let currentCount = parseInt(likesText.textContent.replace(/\D/g, "")) || 0;

            if (isLiked) {
                currentCount--;
            } else {
                currentCount++;
            }

            likesText.textContent = `좋아요 ${currentCount}개`;
        });
    });
});
// 하트 클릭 시 좋아요 개수 증가 구현

// 하트가 클릭된다(.action-button like-button)
// 빨간 하트라면 .post-comments에 댓글n개에 n++ 한다.
// 만약 기본 하트라면 .post-comments에 댓글n개에 1-- 감소한다.


