export default class ScrollAnimation {

    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            return console.error("Aucun élément du DOM.");
        }
        element.classList.remove('animated');
        this.element = element;
        this.start = element.dataset.start === undefined ? 25 : element.dataset.start;
        this.end = element.dataset.end === undefined ? 75 : element.dataset.end;
        this.mobileOnly = element.dataset.mobileOnly !== undefined;
        this.isMobile = false;

        this.onScroll();
        window.addEventListener('scroll', this.onScroll.bind(this));
        document.addEventListener('touchstart', this.onTouchEvent.bind(this));
        document.addEventListener('touchmove', this.onTouchEvent.bind(this));
        document.addEventListener('touchend', this.onTouchEvent.bind(this));
        document.addEventListener('touchcancel', this.onTouchEvent.bind(this));
    }

    onScroll()
    {
        if (this.mobileOnly && !this.isMobile) return;

        const windowHeight = window.innerHeight;
        const elementY = Math.round(this.element.getBoundingClientRect().y);

        const inWindowRange = elementY >= 0 && elementY <= windowHeight;

        const ratePos = Math.round(100 * elementY / windowHeight);

        if (inWindowRange && ratePos >= this.start && ratePos <= this.end) {
            this.element.classList.add('animate');
        } else {
            this.element.classList.remove('animate');
        }
    }

    onTouchEvent()
    {
        this.isMobile = true;
    }
}