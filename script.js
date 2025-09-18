
// Project Three Image Popup
const projectThreeCard = document.getElementById('project-three-card');
const popupImageContainerThree = document.getElementById('popup-image-container-three');
if (projectThreeCard && popupImageContainerThree) {
	projectThreeCard.addEventListener('click', () => {
		popupImageContainerThree.style.display = 'flex';
	});
	popupImageContainerThree.addEventListener('click', (e) => {
		if (e.target === popupImageContainerThree) {
			popupImageContainerThree.style.display = 'none';
		}
	});
}
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href.startsWith('#')) {
			e.preventDefault();
			document.querySelector(href).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// Section Reveal Animation
const sections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
};
const sectionObserver = new IntersectionObserver(revealSection, {
	threshold: 0.15
});
sections.forEach(section => {
	sectionObserver.observe(section);
});

// Highlight Nav Link on Scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sectionIds = Array.from(sections).map(sec => sec.id);
window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop - 80;
		if (window.scrollY >= sectionTop) {
			current = section.id;
		}
	});
	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
});

// Contact Form Animation (optional effect)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', e => {
		e.preventDefault();
		contactForm.reset();
		contactForm.querySelector('button').textContent = 'Sent!';
		setTimeout(() => {
			contactForm.querySelector('button').textContent = 'Send Message';
		}, 1800);
	});
}

// Project One Image Popup
const projectOneCard = document.getElementById('project-one-card');
const popupImageContainer = document.getElementById('popup-image-container');
if (projectOneCard && popupImageContainer) {
	projectOneCard.addEventListener('click', () => {
		popupImageContainer.style.display = 'flex';
	});
	popupImageContainer.addEventListener('click', (e) => {
		// Only close if background (not image) is clicked
		if (e.target === popupImageContainer) {
			popupImageContainer.style.display = 'none';
		}
	});
}

// Project Two Image Popup
const projectTwoCard = document.getElementById('project-two-card');
const popupImageContainerTwo = document.getElementById('popup-image-container-two');
if (projectTwoCard && popupImageContainerTwo) {
	projectTwoCard.addEventListener('click', () => {
		popupImageContainerTwo.style.display = 'flex';
	});
	popupImageContainerTwo.addEventListener('click', (e) => {
		if (e.target === popupImageContainerTwo) {
			popupImageContainerTwo.style.display = 'none';
		}
	});
}
