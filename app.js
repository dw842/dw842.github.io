document.addEventListener('alpine:init', () => {
    Alpine.data('comicApp', () => ({
        pizzaWords: [
            "Margherita", "Pepperoni", "Neapolitan", "Sicilian", "Calzone",
            "Marinara", "Quattro", "Formaggi", "Pizza", "Pizzeria"
        ],
        cakeWords: [
            "Gâteau", "Torte", "Pastry", "Dessert", "Confection",
            "Delight", "Treat", "Sweet", "Cake", "Patisserie"
        ],
        hashes: [
            "0797285393b7a5bfac9a3bc5f4faa13d817003f7",
            "0a928ce172a80180ba1d453173df575a7728fc4b",
            "0d5aebd10db40edda115e9a1baeeacfb5450aa90",
            "0fb4efaf67da1c95376ad4f1da84d0529778f2a5",
            "137736c0b31268c8dec5aaa5a0d5882f478a7b27",
            "1955b44a294da76ad6c441f19a71eaffa7d26a26",
            "1d415b2975d46224cc4cdd7620f6054df227f906",
            "216e61f5be9380810b2939bbe671dc4f96472c4f",
            "24d59b74929865529040022f24058bb81f0feac0",
            "262e41e837f9790b5c685df750610a9049b9b6ba",
            "26b739458d5838861413dac7b638983a296b5fa6",
            "2d8cfb129d8b7945045b791a0070d27980798663",
            "332524a696e1473891ba882a992eaeb3616ac87d",
            "332b474e423ffb1d4c02a483b2d45f5ffa547a8c",
            "354f48b13b741b0dd7f93eb1e348625ae043abd1",
            "384377e1ae08c75d5ba0af5a44856cc8e5c69f53",
            "3b89d06fa05949f72d657a29ba2ebd8756c261d2",
            "3d6e5ae78abc337db593b0a4cb15eaca7cd0af1e",
            "42013db447ce8ccd507ab761d43cc2f9f812d254",
            "44622bd7c1a155dc81f0bb47f7751d88aacc3e67",
            "47d8fe75f7e15e1aed3fff8daf24716046674407",
            "47e070bd9791d2818c2f0a73a2525360659945c7fa0aebf757304ab1974bd9a1",
            "47f02a48617644b18e442cb9c04377c2b75db04b",
            "48ea84360f52e0e70b868f92cc539667f98514da",
            "4a011c5af1c1ad3ef99ba4e66789f71ed75cd012",
            "4f76c67b06436a29a6d1327ad5dca82e5f76a730",
            "50e4997ca9d783c2c28c971ba6ddc439b519db72",
            "524e362fae5b1f774aa14205c0cc4ba8f439bbc0",
            "541bbbdab2b0958060fe27416c3feeb305bc7346",
            "57a864380b1f01b00364f3d754a1f5092dbabc33",
            "5983087c5f4683e3ca8414fbf576d62a1439a21d",
            "5b633a970ea3de6bad86e3e3afda42b295691e3b",
            "5b65f15a528f62379c9c38d59d82ac4ac05a4d6d",
            "5d47631ba44ff8f0a39636c90fe8dae57a6e1c10",
            "5de24527cb526ae1ec91ff2d2dd7c54ab533c073",
            "5e31c1dbacb01dadd8189483d41689b42a51450b",
            "5f86572be67a2329d88fa067c61af5be4f4379fb",
            "5fecf5ef7e78fdf47c7e7ef63c4c70c680988d41",
            "5hiys1zl0d3f1",
            "658c322b375bda97f018834e1dd6910de5aad5d6",
            "6b18e18ee048d27ff64e4fa7a9edbb85a65bdd9e",
            "6ddca38afc33a394763eb2939a897db3ff123634",
            "6e35ab2ce3cfebd7281a8fa9893ac058509336f2",
            "71a9085d6d6363fdc4c80d8d73fb7a0efcd75382",
            "7292b2731774365650ad140ec065575f773b6711",
            "75048a4b9b889db9d93271c3d0e81b172aa62e06",
            "75db671b4223d58be091c221a397efd18ece6e3a",
            "780c7716ea552bd3404d7dba96a40c2aeb3ff3bd",
            "798b353201cc75e0c8c692b8285ef941bf62b79b",
            "7db5531c1b30a8b0dcd55fa8d3c3747b4bb062c9",
            "7ea1bc0fecd4e547c205ce35c4f093a3bd5f164d",
            "8258e583bb209e1f15d2820c9762e6545995d689",
            "83a1b2a1cd0ea3b0da2f09bbfab1118412f74f87",
            "88168471d78eafdd1b390fff0a8c2bf6a12b374a",
            "898d35481301b1b501c3a518e42c00f31abf1210",
            "8b2be5391129b6cb30fd84470b7d7ad13ab56a6f",
            "8d7db0ae8e24c39328b24ddc965262371754f81d",
            "8ddk2shc1r3f1",
            "907f131032c3365f1076cbf9dc219f23147f9a2c",
            "90d692d7e58f30ba0f61fe4ac51ad645f6e56ab3",
            "92232ee39bf4f4a31618a5c5a5799723160c9cb0",
            "934c0f93a76f0c7c7e4f3c6075844c47ab210710",
            "96901735bb209f310f3e1b78dcaed30d4323b3de",
            "9c54e8aa2924e38fe98ef3e03462fdaff5abed5b",
            "9ef99641990d89375cbc6cb6755a90f7a80330f2",
            "a23733646034366a6340fd7254daa7c6179fdb12",
            "a54fdf5b319c0d1011d4c0f5af1100fcb6eb2b10",
            "a76ce23d5af7be32dedb4b0f7a5df019c3fcf9a7",
            "a7b8cb82ef3d9f91095ee491baf2a7ef0b75e644",
            "aac2b4ae95a26b964ea5991aa672681d99904462",
            "af237de1f7a3ee82a0177f28024097e1629f8071",
            "afa815ed94d39010ceb294d0af33cc53764f22ab",
            "b4dc68548378a234c87cd2173ac8bf6dbbdd0545",
            "b71ec7db5f9fe1bdf0bfdfa1ca6e9b90be1e46cc",
            "b9ef34f3c77734d635395b88df7391837faae4ff",
            "bb264cf86f7b1e0b676dabcdf630c03084524750",
            "bc6e2e8f06dcec482520c3d37e48c114f8a0bacf",
            "be74a3738c669336d74892732e9d1ad4450b4e31",
            "bebbe3d485c60f4c1175c9abcfc3c8902967d6b2",
            "bf04a741941d663a79446fb3ff54b6fa98f2d5b9",
            "c1b05696a4d54dc0645c50e7af00809a7e60eaf2",
            "c21f9cfb8dfbf1a65ccee8acb057ea61169bb10d",
            "c29203ff4a773c18feeea1fcb54a560a38c026cf",
            "cc2091c75e2746a4863cc811357510b39d7a606d",
            "ce635ef841d4d2f503fd97b846320191fd1cec7b",
            "d50dabcf3396b4f7d96e771765fa1bb7e358f43f",
            "d58b6e075e0695f7e657bce94ba6bc62fe6cbfe4",
            "d5bcff220559edbeb197ff31e20b0d1e9f3f6414",
            "d7af6786c81e778d1623a809026795f835a2ae79",
            "d9b460867a5f42755bbe19bfa22b9afb6e0516be",
            "dca845c00010ffdd31dfc5ee40b6ca9a3d637273",
            "ddd1cd443cd8168f20e4657ddf91d8b859bb1587",
            "e2362d78f73516fdd5dff7d91ffce86138cadbfb",
            "e2d13370366d6488a71a327b3ab2f1da2b6535ed",
            "e9e4a2fd67dc15a1484396e7c1f1185992047ba1",
            "ed893521d15eb7cd8e2df9ace20ecc7e5ff77c6f",
            "edd14f2d13a626a338d37d6719936ff70b50ab34",
            "eed2b6493194ba3a023daf9f53983507aa97649a",
            "f13c657b97b371657624634bbb2c6e279bcbeb9b",
            "f3681b5cbcdd855a1c52102e8bfb9c195c419df4",
            "f5ef593b3ec6e418d64194f2bf93b967532353a8",
            "fc6d989901326cb354fe90237028b0ea02756781",
            "fdd109946cfd6f109f267436a9fe2470e9839aa6",
            "ffdf6d1f900ecd85a6a74b0ab2a13dd973534943",
            "h95f3i2xzs2f1",
            "qh5jx11bz52f1",
        ],
        intersectionBlacklist: {
            "0a928ce172a80180ba1d453173df575a7728fc4b": [0],
            "137736c0b31268c8dec5aaa5a0d5882f478a7b27": [1, 3],
            "26b739458d5838861413dac7b638983a296b5fa6": [0, 2, 3],
            "332b474e423ffb1d4c02a483b2d45f5ffa547a8c": [0, 2],
            "47d8fe75f7e15e1aed3fff8daf24716046674407": [0, 1, 2],
            "47f02a48617644b18e442cb9c04377c2b75db04b": [2, 3],
            "541bbbdab2b0958060fe27416c3feeb305bc7346": [0, 2],
            "6e35ab2ce3cfebd7281a8fa9893ac058509336f2": [3],
            "7292b2731774365650ad140ec065575f773b6711": [0, 1, 2],
            "7ea1bc0fecd4e547c205ce35c4f093a3bd5f164d": [0, 1],
            "83a1b2a1cd0ea3b0da2f09bbfab1118412f74f87": [0, 1, 2, 3],
            "92232ee39bf4f4a31618a5c5a5799723160c9cb0": [0, 2],
            "b4dc68548378a234c87cd2173ac8bf6dbbdd0545": [0, 2],
            "ce635ef841d4d2f503fd97b846320191fd1cec7b": [0, 1, 2],
            "d7af6786c81e778d1623a809026795f835a2ae79": [1],
            "dca845c00010ffdd31dfc5ee40b6ca9a3d637273": [0, 2, 3],
            "ffdf6d1f900ecd85a6a74b0ab2a13dd973534943": [0, 3],
        },
        darkModeHashes: [
            "39741e8f88be250bee0886191b0d4db6f80920c54b5b6631bb97535cb5345f51",
            "9a7f238e5fdf34df90907e2dff7196ace5fc1bfc431c76a270811a3e15563356",
            "cae12079288d39a3bed2fbf56d326ee12e7273bf2a16bbf4af571b05e11572e7",
        ],
        allImages: [],
        selectedImages: [],
        title: 'Random Comic',

        init() {
            this.initializeImages();
            this.refreshComic();
        },

        initializeImages() {
            const suffixes = [0, 1, 2, 3];
            let currentHashes = [...this.hashes];

            if (document.body.classList.contains('dark-mode')) {
                currentHashes = [...currentHashes, ...this.darkModeHashes];
            }

            this.allImages = currentHashes.flatMap(hash =>
                suffixes.map(suffix => `${hash}_${suffix}.png`)
            );
        },

        getRandomWord(array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        },

        updateTitle() {
            this.title = `Random ${this.getRandomWord(this.pizzaWords)} ${this.getRandomWord(this.cakeWords)}`;
            document.title = this.title;
        },

        hasIntersection(selectedImages) {
            if (!document.body.classList.contains('dark-mode')) {
                return false;
            }

            const darkModeImages = selectedImages.filter(img =>
                this.darkModeHashes.some(darkHash => img.startsWith(darkHash))
            );

            if (darkModeImages.length === 0) {
                return false;
            }

            for (const [hash, blacklistedPanels] of Object.entries(this.intersectionBlacklist)) {
                const blacklistedImage = selectedImages.find(img => img.startsWith(hash));
                if (blacklistedImage) {
                    const panelNumber = parseInt(blacklistedImage.split('_')[1]);
                    if (blacklistedPanels.includes(panelNumber)) {
                        return true;
                    }
                }
            }

            return false;
        },

        refreshComic() {
            do {
                this.shuffle(this.allImages);
                this.selectedImages = this.allImages.slice(0, 4);
            } while (this.hasIntersection(this.selectedImages));

            this.updateTitle();
        },

        enableDarkMode() {
            document.body.classList.add('dark-mode');
            this.initializeImages();
        }
    }));
});