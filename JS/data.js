let data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                img: 'memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                img: 'memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                img: 'intel.png',
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                img: 'memory2.png',
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]


let container = document.querySelector('.container')

const reload = (arr) => {
    
for(let item of arr){

    let row = document.createElement('div')
    row.classList.add('row')

    let main_info = document.createElement('div')  // TOP

        let mac = document.createElement('img')
        mac.classList.add('mac')
        mac.src = `../img/${item.img}`
        
        let title = document.createElement('p')
        title.innerHTML = item.title
        title.classList.add('title')
        
        let price = document.createElement('p')
        price.innerHTML = `From $${item.price}`
        price.classList.add('price')
        
        let btn_box = document.createElement('div') // COLOUR BTNS

            let colour_btn_silver = document.createElement('button')
            colour_btn_silver.classList.add('colour_btn_silver')

            let colour_btn_gray = document.createElement('button')
            colour_btn_gray.classList.add('colour_btn_gray')

            let colour_btn_beige = document.createElement('button')
            colour_btn_beige.classList.add('colour_btn_beige')

            btn_box.append(colour_btn_silver, colour_btn_gray, colour_btn_beige)
        btn_box.classList.add('btn_box')

        let buy_btn = document.createElement('button')
        buy_btn.innerHTML = 'Buy'
        buy_btn.classList.add('buy_btn')

        main_info.append(mac, title, price, btn_box, buy_btn)
    main_info.classList.add('main_info')

    let display = document.createElement('div')

        let display_size = document.createElement('p')
        display_size.innerHTML = `${item.specs.display.size}"`
        display_size.classList.add('display_size')

        let display_title = document.createElement('p')
        display_title.innerHTML = item.specs.display.title
        display_title.classList.add('display_title')

        display.append(display_size, display_title)
    display.classList.add('display')


    let chip_div = document.createElement('div')

        let chip_img = document.createElement('img')
        chip_img.src = `../img/${item.specs.chip.img}`
        chip_img.classList.add('chip_img')

        let chip = document.createElement('p')
        chip.innerHTML = item.specs.chip.title
        chip.classList.add('chip')

        let chip_dsc = document.createElement('p')
        chip_dsc.innerHTML = item.specs.chip.description
        chip_dsc.classList.add('chip_dsc')

        chip_div.append(chip_img, chip, chip_dsc)
    chip_div.classList.add('chip_div')

    let ram_div = document.createElement('div')
    
        let ram_img = document.createElement('img')
        ram_img.src = `../img/${item.specs.ram.img}`
        ram_img.classList.add('ram_img')
    
        let ram = document.createElement('p')
        ram.innerHTML = item.specs.ram.title
        ram.classList.add('ram')

        let ram_dsc = document.createElement('p')
        ram_dsc.innerHTML = item.specs.ram.description
        ram_dsc.classList.add('ram_dsc')

        ram_div.append(ram_img, ram, ram_dsc)
    ram_div.classList.add('ram_div')


    let memory_div = document.createElement('div')
    
        let memory = document.createElement('p')
        memory.innerHTML = `${item.specs.memory.size}${item.specs.memory.type}`
        memory.classList.add('memory')

        let memory_dsc = document.createElement('p')
        memory_dsc.innerHTML = 'maximum stroge'
        memory_dsc.classList.add('memory_dsc')

        memory_div.append(memory, memory_dsc)
    memory_div.classList.add('memory_div')

    let battery_div = document.createElement('div')
    
        let battery_img = document.createElement('img')
        battery_img.src = `../img/battery.png`
        battery_img.classList.add('battery_img')

        let battery_dsc = document.createElement('p')
        battery_dsc.innerHTML = `up to ${item.specs.battery} hours battery life`
        battery_dsc.classList.add('battery_dsc')

        battery_div.append(battery_img, battery_dsc)
    battery_div.classList.add('battery_div')
    
    let video_div = document.createElement('div')
    
        let video_img = document.createElement('img')
        video_img.src = `../img/${item.specs.camera.img}`
        video_img.classList.add('video_img')
    
        let video = document.createElement('p')
        video.innerHTML = item.specs.camera.title
        video.classList.add('video')

        let video_dsc = document.createElement('p')
        video_dsc.innerHTML = item.specs.camera.description
        video_dsc.classList.add('video_dsc')

        video_div.append(video_img, video, video_dsc)
    video_div.classList.add('video_div')

    let weight_div = document.createElement('div')
    
        let weight = document.createElement('p')
        weight.innerHTML = `${item.specs.weight}lb`
        weight.classList.add('weight')

        let weight_dsc = document.createElement('p')
        weight_dsc.innerHTML = 'weight'
        weight_dsc.classList.add('weight_dsc')

        weight_div.append(weight, weight_dsc)
    weight_div.classList.add('weight_div')

    let others = document.createElement('div')
    
        let others_text = document.createElement('p')
        others_text.innerHTML = item.specs.other
        others_text.classList.add('others_text')
        
        others.append(others_text)
    others.classList.add('others')

    let link = document.createElement('a')
    link.innerHTML = 'Learn more'
    link.href = item.url
    link.classList.add('link')

    row.append(main_info, display, chip_div, ram_div, memory_div, battery_div, video_div, weight_div, others, link)

    container.append(row)
}

}

reload(data)