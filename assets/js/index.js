document.addEventListener('DOMContentLoaded', () => {

    /************************************************************
 * Load more posts with button on front, tag & author page
 ***********************************************************/

		let nextDom = document,
		btnLoad = document.querySelector('.pagination__loadmore'),
		postList = document.querySelector('.post-bottom__inner');

		async function loadNextPage() {
			const next = nextDom.querySelector('link[rel="next"]');
			const response = await fetch(next.href);
			nextDom = document.createRange().createContextualFragment(await response.text());

		}

		function noLoadNextPage() {
			loadNextPage().catch(() => {
        btnLoad.innerHTML = "Больше нет статей";
        btnLoad.setAttribute("disabled", "disabled");
				if (!nextDom) {
					nextDom = document.createRange().createContextualFragment('');
					nextDom = true;
				}
			});
		}

		function toLoadMore() {
			btnLoad.addEventListener('click', () => {
				noLoadNextPage();
				for (const post of nextDom.querySelectorAll('.post-bottom > div > .post-feed__item')) {
					postList.appendChild(post);
				}
			});
		}
		toLoadMore();
		noLoadNextPage();



});
