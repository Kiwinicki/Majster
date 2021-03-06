(() => {
	const workTimesTitle = document.querySelector('#work-times-title');
	const workTimesList = document.querySelector('#work-times-list');
	const workTimesArrow = workTimesTitle.querySelector('.bi-caret-down-fill');

	workTimesTitle.addEventListener('click', toggleWorkTimesList);

	function toggleWorkTimesList() {
		if (workTimesList.style.maxHeight) {
			workTimesList.style.maxHeight = null;
			workTimesTitle.setAttribute('aria-expanded', 'false');

			workTimesArrow.classList.toggle('arrow-rotate');
		} else {
			workTimesList.style.maxHeight = workTimesList.scrollHeight + 'px';
			workTimesTitle.setAttribute('aria-expanded', 'true');

			workTimesArrow.classList.toggle('arrow-rotate');
		}
	}
})();
