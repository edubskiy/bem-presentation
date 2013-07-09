({
    block: 'b-page',
    title: 'Presentation Player',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'b-presentation',
            js: true,
            content: [
                {
                    block: 'b-presentations',
                    presentations: [
                        {
                            id: 1,
                            title: 'Kawasiki Method',
                            slides: [
                                {
                                    id: '1',
                                    image: '../../presentations/presentation_1/slide-1.jpg'
                                },
                                {
                                    id: '2',
                                    image: '../../presentations/presentation_1/slide-2.jpg'
                                },
                                {
                                    id: '3',
                                    image: '../../presentations/presentation_1/slide-3.jpg'
                                },
                                {
                                    id: '4',
                                    image: '../../presentations/presentation_1/slide-4.jpg'
                                },
                                {
                                    id: '5',
                                    image: '../../presentations/presentation_1/slide-5.jpg'
                                },
                                {
                                    id: '6',
                                    image: '../../presentations/presentation_1/slide-6.jpg'
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: 'Steve Jobs Method',
                            slides: [
                                {
                                    id: '1',
                                    image: '../../presentations/presentation_2/slide-1.jpg'
                                },
                                {
                                    id: '2',
                                    image: '../../presentations/presentation_2/slide-2.jpg'
                                },
                                {
                                    id: '3',
                                    image: '../../presentations/presentation_2/slide-3.jpg'
                                },
                                {
                                    id: '4',
                                    image: '../../presentations/presentation_2/slide-4.jpg'
                                },
                                {
                                    id: '5',
                                    image: '../../presentations/presentation_2/slide-5.jpg'
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: 'Godin Method',
                            slides: [
                                {
                                    id: '1',
                                    image: '../../presentations/presentation_3/slide-1.jpg'
                                },
                                {
                                    id: '2',
                                    image: '../../presentations/presentation_3/slide-2.jpg'
                                },
                                {
                                    id: '3',
                                    image: '../../presentations/presentation_3/slide-3.jpg'
                                },
                                {
                                    id: '4',
                                    image: '../../presentations/presentation_3/slide-4.jpg'
                                },
                                {
                                    id: '5',
                                    image: '../../presentations/presentation_3/slide-5.jpg'
                                },
                                {
                                    id: '6',
                                    image: '../../presentations/presentation_3/slide-6.jpg'
                                }
                            ]
                        },
                    ],
                },
                {
                    block: 'b-content',
                    content: [
                        {
                            block: 'b-slides',
                            content: [
                                {
                                    block: 'b-slides__window',
                                }
                            ],

                        },
                        {
                            block: 'b-panel',
                            content: [
                                {
                                    block: 'b-goto',
                                    content: [
                                        {
                                            elem: 'current-slide',
                                            content: []
                                        },
                                        {
                                            elem: 'slide-separator',
                                            content: '/'
                                        },
                                        {
                                            elem: 'total-slides',
                                            content: []
                                        },
                                        {
                                            elem: 'fullscreen',
                                            content: []
                                        }
                                    ]
                                },
                                {
                                    block: 'b-controls',
                                    content: [
                                        {
                                            elem: 'inner',
                                            mix: [{ elem: 'previous' }],
                                            content: [
                                                {
                                                    elem: 'previous-icon',
                                                    mix: [{ elem: 'item' }],
                                                    content: []
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'inner',
                                            mix: [{ elem: 'next' }],
                                            content: [
                                                {
                                                    elem: 'next-icon',
                                                    mix: [{ elem: 'item' }],
                                                    content: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})