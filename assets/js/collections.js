$(document).ready(function () {
    //if url pathname is indexOf an array then 
    //hook into a view and generate a view
    let url = window.location.pathname;
    let path = url.split('/');

    let fileIndex = path.length-1;
    let file = path[fileIndex];

    let styleIndex = file.split('.');
    let style = styleIndex[0];
    console.log(style);

    let styles = [
        {
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets','R: XS-3X (27”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8757,
            name: 'MERROW WAIST PANT',
            features:['Straight leg ','Decorative waistband','Outter waist ties','Single cargo pocket','R: XS-5X (30.5”) P XS-2X (28.5”) T: XS-XL (33”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8470,
            name: 'RAGLAN TOP',
            features:['Classic V neck','Two large welt pockets','Rib-knit detail','Side snap embellishment','R: XS-5X (26.5”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8721,
            name: 'SEAMED JOGGER',
            features:['Adjustable front waist ties','Two cargo pockets','Jersey waistband and ankle cuffs','R: XS-3X (28.5”) P: XS-XL (26.5”) T: XS-XL (31”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7479,
            name: 'HENLEY TOP',
            features:['Henley neck','Chest patch pocket','Back yoke with box pleat','Inside contrast neckband','R: XS-2X (26”)'],
            swatches:['BLAC','BLUH','NAVY','SLAT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7789,
            name: 'YOGA 1 CARGO POCKET PANT',
            features:['Straight leg with side vents','Rib knit waist and pocket lining','1 cargo pocket','Two back patch pockets','R: XS-3X (31”) P XS-XL (29”) T XS-XL (33”)'],
            swatches:['BLAC','BLUH','NAVY','ROYL','SLAT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7472,
            name: 'MOCK WRAP TOP',
            features:['Mock wrap v-neckline','Double-layered angled pockets','Accessory loop','Inside contrast neckband','Back princess seams','R: XS-3X (26”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7710,
            name: 'JOGGER YOGA PANT',
            features:['Single cargo pocket','Rib knit waistband and ankle cuffs','Adjustable front waist ties','Accessory loop','Two back patch pockets','R: XS-3X (28 1/2”) P XS-XL (26 1/2”) T XS-XL (31”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7459,
            name: 'V-NECK SHIRTTAIL TOP',
            features:['Overlapping rib knit side panels','Accessory loop','Extra accessory pocket and pen slot','Two large patch pockets','Two back patch pockets',' Inside contrast neckband','R: XS-5X (27”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7739,
            name: 'YOGA 2 CARGO POCKET PANT',
            features:['Straight leg with side vents','Jacquard elastic and rib knit waistband','Internal waist ties','Two cargo, two back patch ','Two back patch pockets','Extra accessory pocket','Accessory loop','R: XS-5X (31”) P XS-2X (29”) T XS-XL (33”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8579,
            name: 'RACERBACK SHIRTTAIL TOP',
            features:['Racerback knit panel','Front and back princess seams','Two large patch pockets','Welt accessory pocket','R: XS-5X (front 27” back 26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8744,
            name: 'YOGA 2 CARGO POCKET PANT',
            features:['Boot cut leg with side vents','Sporty yoga knit waistband','Internal waist ties','Two welt cargo pockets','Two back patch pockets','R: XS-5X (31”) | P: XS-2X (29”) | T: XS-2X (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8587,
            name: 'V-NECK 3 POCKET TOP',
            features:['Chest patch pocket','Two large welt pockets','R: XS-3X ( 26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8719,
            name: '1 CARGO POCKET PANT',
            features:['Straight leg with side vents','Back elastic waistband','Adjustable front waist ties','Single cargo pocket','Single back patch pocket','R: XS-3X ( 31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8416,
            name: 'V-NECK RACERBACK TOP',
            features:['Back knit racerback panel','Shoulder yokes','Two large patch pockets','Extra accessory pockets','Hidden side seam pockets','R: XS-3X (26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
    ];


    let generateHtml = function() {
        for (let i=0; i < styles.length; i++){
            if (style == styles[i].style){
                $('#view').html(`
                <div class="container p-md-5 mb-5 text-sofia">
                    <div class="row">
                        <div class="col-sm-12">
                            <div>
                                <h1 class='hidden-lg'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div id="style-showcase"><img src="../../assets/images/products/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div>
                                            <h1 class='hidden-sm'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                        </div>
                                        <br>
                                        <br>
                                        Crafted from a lightweight, super
                                        stretch fabric, this lightweight top is
                                        perfect for everyday wear<br><br>
                                        <ul id="features">
                                        </ul>
                                    </div>
                                    <div id="swatches" class="col-sm-12">
                                    <br><br>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            styles[i].listFeatures();
            styles[i].appendSwatches();
            }  
        }
    }
    generateHtml();

    let imageStyleColorChange = function () {
        $('.swatches').on('click', function(){
            let color = $(this).data('color');
            console.log(color)
            $('#style-showcase').html(`<img src="../../assets/images/products/products/${style}_${color}.jpg" alt="${style}_${color}" class="img-fluid">`)
        })

    }

    imageStyleColorChange();
    
})