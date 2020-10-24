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

        this.onScroll();
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll()
    {
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
}