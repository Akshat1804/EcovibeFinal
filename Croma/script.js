
    const phoneNames = [
        "iPhone 14 Pro Max",
        "Samsung Galaxy S23 Ultra",
        "Google Pixel 7 Pro",
        "OnePlus 11",
        // "Xiaomi 13 Pro",
        "Sony Xperia 1 V",
        "Asus ROG Phone 7 Ultimate",
        "Motorola Edge 40 Pro",
        "Oppo Find X6 Pro",
        "Huawei P60 Pro",
        "Vivo X90 Pro+",
        // "Nothing Phone (2)",
        "Apple iPhone SE (2022)",
        "LG 55-inch OLED C1 Series 4K Smart TV (2021)",
        "Sony X90J 65-inch 4K Ultra HD Full Array LED Smart Google TV (2021)",
        "Samsung QN90A Neo QLED 4K Smart TV (2021)",
        "TCL 6-Series 55-inch 4K QLED Roku Smart TV (2021)",
        "Vizio P-Series Quantum X 75-inch 4K HDR Smart TV",
        "Hisense U8G ULED 4K Premium QLED Series Smart Google TV",
        "Philips 55OLED805 55-inch 4K UHD OLED Android TV",
        "Panasonic JZ2000 55-inch 4K HDR OLED TV",
        "Sharp Aquos R6 8K 120Hz LED TV",
        "Toshiba 55-inch 4K UHD Smart Fire TV",
        "Skyworth Q71 Series 65-inch 4K QLED Android TV"
    ];

    const phoneImages = [
        "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        // "https://m.media-amazon.com/images/I/41mrRzgs1PL._SL500_.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-7-ultimate.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-40-pro.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/huawei-p60-pro.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro-plus.jpg",
        // "https://www.lowyat.net/wp-content/uploads/2023/07/Nothing-Phone-2-now-official-3.jpg",
        "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg",
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
        "/6.png",
        "/7.png",
        "/8.png",
        "/9.png",
        "/10.png",
        "/11.png"
    ];

    const phoneCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-md.p-4');
    phoneCards.forEach((card, index) => {
        if (index < phoneNames.length) {
            const img = card.querySelector('img');
            const h2 = card.querySelector('h2');
            
            img.src = phoneImages[index];
            img.alt = phoneNames[index];
            h2.textContent = phoneNames[index];
        }
    });

