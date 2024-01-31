'use client'

import { useEffect } from 'preact/hooks'

const throttle = <R, A extends unknown[]>(
    fn: (...args: A) => R,
    delay: number,
): ((...args: A) => R | undefined) => {
    let wait = false

    return (...args: A) => {
        if (wait) return

        const val = fn(...args)

        wait = true

        setTimeout(() => {
            wait = false
        }, delay)

        return val
    }
}

export interface Props {
    rootId: string
    infinite?: boolean
    interval?: number
    orientation?: 'horizontal' | 'vertical'
    center?: boolean
}

const ATTRIBUTES = {
    CAROUSEL: 'data-carousel',
    ITEM: 'data-item',
    PREV: 'data-prev',
    NEXT: 'data-next',
    DOTS: 'data-dots',
    DOT: 'data-dot',
    DOT_TEMPLATE: 'data-dot-template',
    DOTS_GROUP: 'data-dots-group',
    PAGE: 'data-page',
    IS_INTERSECTING: 'data-intersecting',
}

const query = (attribute: string, value?: string) =>
    value ? `[${attribute}="${value}"]` : `[${attribute}]`

const intersectionX = (element: DOMRect, container: DOMRect): number => {
    const delta = container.width / 1_000

    if (element.right < container.left - delta) {
        return 0.0
    }

    if (element.left > container.right + delta) {
        return 0.0
    }

    if (element.left < container.left - delta) {
        return element.right - container.left + delta
    }

    if (element.right > container.right + delta) {
        return container.right - element.left + delta
    }

    return element.width
}

function intersectionY(element: DOMRect, container: DOMRect): number {
    const delta = container.height / 1000

    if (element.bottom < container.top - delta) {
        return 0.0
    }
    if (element.top > container.bottom + delta) {
        return 0.0
    }

    if (element.top < container.top - delta) {
        return element.bottom - container.top + delta
    }
    if (element.bottom > container.bottom + delta) {
        return container.bottom - element.top + delta
    }

    return element.height
}

const getElementsInsideContainer = (
    rect: DOMRect,
    elements: NodeListOf<HTMLElement>,
    orientation: 'horizontal' | 'vertical',
) => {
    let count = 0

    for (let index = 0; index < elements.length; index++) {
        const item = elements.item(index)
        const itemRect = item.getBoundingClientRect()

        const ratio =
            orientation === 'horizontal'
                ? intersectionX(itemRect, rect) / itemRect.width
                : intersectionY(itemRect, rect) / itemRect.height

        if (ratio >= 1) {
            count++
        }
    }

    return count
}

function getElements(rootId: string) {
    const root = document.getElementById(rootId)
    if (!root) {
        throw new Error(`Element with id ${rootId} not found`)
    }

    const carouselQuery = query(ATTRIBUTES.CAROUSEL)
    const carousel = root.querySelector<HTMLElement>(carouselQuery)
    if (!carousel) {
        throw new Error(`Element with ${carouselQuery} not found`)
    }
    const prev = Array.from(root.querySelectorAll<HTMLElement>(query(ATTRIBUTES.PREV))).find(
        el => el.closest('[data-root]')?.id === rootId,
    )
    const next = Array.from(root.querySelectorAll<HTMLElement>(query(ATTRIBUTES.NEXT))).find(
        el => el.closest('[data-root]')?.id === rootId,
    )
    const items = carousel.querySelectorAll<HTMLElement>(`:scope > ${query(ATTRIBUTES.ITEM)}`)

    const dotContainer = Array.from(
        root.querySelectorAll<HTMLElement>(query(ATTRIBUTES.DOTS)),
    ).find(el => el.closest('[data-root]')?.id === rootId)

    const dotsGroups = Array.from(
        root.querySelectorAll<HTMLElement>(query(ATTRIBUTES.DOTS_GROUP)),
    ).find(el => el.closest('[data-root]')?.id === rootId)

    let dotTemplate: HTMLElement | null = null

    if (dotContainer) {
        dotTemplate = dotContainer.querySelector<HTMLElement>(query(ATTRIBUTES.DOT_TEMPLATE))
        if (!dotTemplate) {
            throw new Error(`Element with ${ATTRIBUTES.DOT_TEMPLATE} not found`)
        }
    }

    return {
        root,
        carousel,
        prev,
        next,
        items,
        dotContainer,
        dotTemplate,
    }
}

function setup({
    rootId,
    infinite = false,
    interval = 0,
    orientation = 'horizontal',
    center: _center = false,
}: Props) {
    const { root, carousel, prev, next, items, dotContainer, dotTemplate } = getElements(rootId)
    const isHorizontal = orientation === 'horizontal'
    const elementsInsideContainer = getElementsInsideContainer(
        carousel.getBoundingClientRect(),
        items,
        orientation,
    )

    function generateDots(container: HTMLElement, template: HTMLElement, count: number) {
        template.removeAttribute(ATTRIBUTES.DOT_TEMPLATE)
        for (let i = 0; i < count; i++) {
            const dot = template.cloneNode(true) as HTMLElement
            dot.setAttribute(ATTRIBUTES.DOT, String(i))
            dot.setAttribute('aria-label', `Ir para página ${i + 1}`)
            container.appendChild(dot)
        }
        container.removeChild(template)
    }

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                const isIntersecting = entry.intersectionRatio >= 0.9
                if (isIntersecting) {
                    entry.target.setAttribute(ATTRIBUTES.IS_INTERSECTING, 'true')
                    const pages = getItemsInViewport().map(el =>
                        parseInt(el.getAttribute(ATTRIBUTES.PAGE) ?? '0'),
                    )
                    const page = pages.find(
                        page => pages.filter(p => p === page).length > pages.length / 2,
                    )
                    if (typeof page === 'number') {
                        setPage(page)
                    }
                } else {
                    entry.target.removeAttribute(ATTRIBUTES.IS_INTERSECTING)
                }
                const index = parseInt(entry.target.getAttribute(ATTRIBUTES.ITEM) ?? '0')
                if (index === 0 && !infinite) {
                    setPrevDisabled(isIntersecting)
                } else if (index === items.length - 1 && !infinite) {
                    setNextDisabled(isIntersecting)
                }
            }
        },
        { root: carousel, threshold: [0, 0.9, 1] },
    )
    items.forEach((item, index) => {
        const itemPage = Math.floor(index / elementsInsideContainer)
        item.setAttribute(ATTRIBUTES.PAGE, String(itemPage))
        observer.observe(item)
    })

    function setPrevDisabled(disabled: boolean) {
        if (prev) {
            if (disabled) {
                prev.setAttribute('disabled', '')
            } else {
                prev.removeAttribute('disabled')
            }
        }
    }

    function setNextDisabled(disabled: boolean) {
        if (next) {
            if (disabled) {
                next.setAttribute('disabled', '')
            } else {
                next.removeAttribute('disabled')
            }
        }
    }

    function getItemsInViewport() {
        return Array.from(items).filter(item => item.hasAttribute(ATTRIBUTES.IS_INTERSECTING))
    }

    function computeScroll(index: number) {
        const slide = items.item(Math.min(Math.max(index, 0), items.length - 1))
        if (!slide) {
            return
        }
        if (timeout) {
            clearInterval(timeout)
            timeout = setInterval(handleNextClick, interval)
        }
        const carouselMargin =
            parseInt(
                getComputedStyle(carousel).getPropertyValue(
                    isHorizontal ? 'margin-left' : 'margin-top',
                ),
            ) || 0
        const nextPos = isHorizontal
            ? slide.offsetLeft - carousel.offsetLeft + carouselMargin
            : slide.offsetTop - carousel.offsetTop + carouselMargin
        carousel.scrollTo({
            [isHorizontal ? 'left' : 'top']: nextPos,
            behavior: 'smooth',
        })
    }

    function handleNextClick() {
        if (
            isHorizontal &&
            carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft <= 5 &&
            infinite
        ) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' })
            return
        }

        if (
            !isHorizontal &&
            carousel.scrollHeight - carousel.clientHeight - carousel.scrollTop <= 5 &&
            infinite
        ) {
            carousel.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        const item = getItemsInViewport()[0]
        if (!item) return
        computeScroll(
            parseInt(item.getAttribute(ATTRIBUTES.ITEM) ?? '0') +
                getElementsInsideContainer(carousel.getBoundingClientRect(), items, orientation),
        )
    }

    function handlePrevClick() {
        if (isHorizontal && carousel.scrollLeft === 0 && infinite) {
            carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' })
            return
        }

        if (!isHorizontal && carousel.scrollTop === 0 && infinite) {
            carousel.scrollTo({ top: carousel.scrollHeight, behavior: 'smooth' })
            return
        }

        const item = getItemsInViewport()[0]
        if (!item) return
        computeScroll(
            parseInt(item.getAttribute(ATTRIBUTES.ITEM) ?? '0') -
                getElementsInsideContainer(carousel.getBoundingClientRect(), items, orientation),
        )
    }

    let timeout = interval > 0 && setInterval(handleNextClick, interval)

    if (dotContainer && dotTemplate) {
        generateDots(dotContainer, dotTemplate, Math.round(items.length / elementsInsideContainer))
    }

    const dots = Array.from(root.querySelectorAll<HTMLLIElement>(query(ATTRIBUTES.DOT))).filter(
        el => el.closest('[data-root]')?.id === rootId,
    )

    if (dots.length) {
        for (const dot of dots) {
            dot.addEventListener('click', () => {
                if (!carousel) return
                const item = Array.from(items).find(
                    item => item.getAttribute(ATTRIBUTES.PAGE) === dot.getAttribute(ATTRIBUTES.DOT),
                )
                if (!item) return
                computeScroll(parseInt(item.getAttribute(ATTRIBUTES.ITEM) ?? '0'))
            })
        }
    }

    function setPage(page: number) {
        for (const dot of dots) {
            dot.getAttribute(ATTRIBUTES.DOT) === String(page)
                ? dot.setAttribute('data-active', '')
                : dot.removeAttribute('data-active')
        }
    }

    const prevClick = throttle(handlePrevClick, 500)
    const nextClick = throttle(handleNextClick, 500)

    if (prev) {
        prev.addEventListener('click', prevClick)
    }
    if (next) {
        next.addEventListener('click', nextClick)
    }

    return () => {
        if (prev) {
            prev.removeEventListener('click', prevClick)
        }
        if (next) {
            next.removeEventListener('click', nextClick)
        }
        observer.disconnect()
        timeout && clearInterval(timeout)
    }
}

export default function SliderJS(props: Props) {
    useEffect(() => setup(props), [])

    return null
}
