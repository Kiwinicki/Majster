const workTimesTitle = document.querySelector('#work-times-title');
const workTimesList = document.querySelector('#work-times-list');
const workTimesArrow = workTimesTitle.querySelector('.bi-caret-down-fill');

workTimesTitle.addEventListener('click', toggleWorkTimesList);
workTimesTitle.addEventListener(
	'keyup',
	(e) => e.key == 'Enter' && toggleWorkTimesList()
);

function toggleWorkTimesList() {
	if (workTimesList.style.maxHeight) {
		workTimesList.style.maxHeight = null;
		workTimesTitle.setAttribute('aria-expanded', 'false');

		workTimesArrow.style.transition = 'transform 0.3s';
		workTimesArrow.style.transform = 'rotate(0deg)';
	} else {
		workTimesList.style.maxHeight = workTimesList.scrollHeight + 'px';
		workTimesTitle.setAttribute('aria-expanded', 'true');

		workTimesArrow.style.transition = 'transform 0.3s';
		workTimesArrow.style.transform = 'rotate(180deg)';
	}
}
