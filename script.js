const workTimesTitle = document.querySelector('#work-times-title');
const workTimesList = document.querySelector('#work-times-list');
const workTimesArrow = workTimesTitle.querySelector('.bi-caret-down-fill');

workTimesTitle.addEventListener('click', toggleWorkTimesList);
function toggleWorkTimesList() {
	if (workTimesList.style.maxHeight) {
		workTimesList.style.maxHeight = null;

		workTimesArrow.style.transition = 'transform 0.3s';
		workTimesArrow.style.transform = 'rotate(0deg)';
	} else {
		workTimesList.style.maxHeight = workTimesList.scrollHeight + 'px';

		workTimesArrow.style.transition = 'transform 0.3s';
		workTimesArrow.style.transform = 'rotate(180deg)';
	}
}
