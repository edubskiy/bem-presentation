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
                            id: 'presentation-1',
                            title: 'Smartphone\'s presentations',
                            slides: [
                                {
                                    id: '0',
                                    header: 'Presentation #1, slide #1',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                                    footer: '',
                                },
                                {
                                    id: '1',
                                    header: 'Presentation #1, slide #2',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                                    footer: '',
                                }
                            ]
                        },
                        {
                            id: 'presentation-2',
                            title: 'Top-10 Web design tips',
                            slides: [
                                {
                                    id: '0',
                                    header: 'Presentation #2, slide #1',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                                    footer: '',
                                },
                                {
                                    id: '1',
                                    header: 'Presentation #2, slide #2',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                                    footer: '',
                                },
                                {
                                    id: '2',
                                    header: 'Presentation #2, slide #3',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                                    footer: '',
                                }
                            ]
                        },
                        {
                            id: 'presentation-3',
                            title: 'Top-10 Web design tips',
                            slides: [
                                {
                                    id: '0',
                                    header: 'Presentation #3, slide #1',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                                    footer: '',
                                },
                                {
                                    id: '1',
                                    header: 'Presentation #3, slide #2',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                                    footer: '',
                                },
                                {
                                    id: '2',
                                    header: 'Presentation #3, slide #3',
                                    content: 'Content goes here',
                                    background_image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                                    footer: '',
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
                                        'Block Goto'
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