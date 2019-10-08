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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
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
            kind: 'bottoms',
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
            kind: 'solids',
            features:['Back knit racerback panel','Shoulder yokes','Two large patch pockets','Extra accessory pockets','Hidden side seam pockets','R: XS-3X (26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
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
            style: 8408,
            name: 'V-NECK PRINCESS SEAM TOP',
            kind: 'solids',
            features:['Shoulder princess seams','Two large patch pockets','Extra accessory pockets','Snap closure','R: XS-3X (26”)'],
            swatches:['BLAC','CARI','CEIL','GLXY','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','ROYL','TEAL','SKYB','SPMN','WINE'],
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
            style: 8758,
            name: 'YOGA 2 CARGO POCKET PANT',
            kind: 'bottoms',
            features:['Boot cut leg with side vents','Jacquard elastic and knit waistband','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
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
            style: 8747,
            name: 'YOGA 1 CARGO POCKET PANT',
            kind: 'bottoms',
            features:['Roomy straight leg','Stretchy knit waistband','Single cargo zipper pocket','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
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
            style: 8459,
            name: 'MATERNITY TOP',
            kind: 'solids',
            features:['Comfortable side knit panels','Adjustable bungee with toggle','Two large patch pockets','Classic v-neckline','R: XS-3X (27”)'],
            swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
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
            style: 8727,
            name: 'MATERNITY PANT',
            kind: 'bottoms',
            features:['Boot cut leg with side vents','Comfortable knit waist pane','Single cargo pocket','Single back welt pocket','R: XS-3X (30”) | P: XS-XL (29”)'],
            swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
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
            style: 8458,
            name: 'V-NECK KNIT PANEL TOP',
            kind: 'solids',
            features:['Sporty back knit panel','Two large patch pockets','Extra accessory pockets','Contrast back neck binding','R: XS-3X ( 26”)'],
            swatches:['BISR','BKRS','BLBC','CCAR','CLNY','LPTQ','MGTL','NNAT','NNSP','RTSG','RYPS','SPNN','STAP','STCC','TQLP'],
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
            style: 8715,
            name: 'YOGA DRAWSTRING PANT',
            kind: 'bottoms',
            features:['Straight leg','Knit waistband and yoke','Adjustable front waist ties','Two back patch pockets','Contrast details','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BISR','BKRS','BLBC','CCAR','CLNY','LPTQ','MGTL','NNAT','NNSP','RTSG','RYPS','SPNN','STAP','STCC','TQLP'],
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
            style: 8496,
            name: 'V-NECK 3 POCKET TOP',
            kind: 'solids',
            features:['Classic v-neckline','Chest pocket with bungee loop','Two large patch pockets','Two back patch pockets','Extra pen slot accessory pocket','Embroidered logo on pocket band','R: XS-3X ( 26”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WHIT','WINE'],
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
            style: 8741,
            name: 'V-NECK 3 POCKET TOP',
            kind: 'bottoms',
            features:['Boot cut leg','Full elastic waistband','Adjustable front waist ties','Two cargo pockets','Extra pen slot pocket','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WHIT','WINE'],
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
            style: 8489,
            name: 'SPORT NECKLINE TOP',
            kind: 'solids',
            features:['Sport neckline with yoke','Two large patch pockets','Extra accessory/pen pocket','Embroidered logo on pocket','Extra pen slot pocket','R: XS-3X ( 26”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WINE'],
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
            style: 8403,
            name: 'V-NECK SIGNATURE 3 POCKET TOP',
            kind: 'solids',
            features:['Two angled welt pockets','Hidden inside accessory pockets','Chest pocket with bungee loop','Contrast back neckband','R: XS-3X ( 26”)'],
            swatches:['BISR','BKRS','BLAC','BLBC','CBTP','CCAR','CLNY','HUCC','LPTQ','MGTL','NNAT','NNSP','NNVY','PLLC','RDPW','RTSG','RYPS','SPNN','STAP','STCC','TQLP','WNPP'],
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
            style: 8705,
            name: 'SIGNATURE DRAWSTRING PANT',
            kind: 'bottoms',
            features:['Straight leg with side vents','Back elastic waistband','Adjustable front waist ties','Hidden inside cell phone holder','Single back patch pocket','Contrast details','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BISR','BKRS','BLAC','BLBC','CBTP','CCAR','CLNY','HUCC','LPTQ','MGTL','NNAT','NNSP','NNVY','PLLC','RDPW','RTSG','RYPS','SPNN','STAP','STCC','TQLP','WNPP'],
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
            style: 8499,
            name: 'PERFORMANCE KNIT TEE',
            kind: 'layering',
            features:['95% polyester, 5% spandex','Cover stitch scoop neckline','Slimming side seam panels','Back yoke for added fit','R: XS-3X (26”)'],
            swatches:['APPL','AQMA','ARBL','BLAC','CEIL','CHAR','CTNC','LOLI','MGNT','NAVY','PACI','PKPH','PLUM','PPHZ','PWTR','RASP','RHUB','RLTL','ROYL','SKYB','SPMN','TURQ','WHIT'],
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
            style: 8638,
            name: 'ZIP FRONT WARM UP',
            kind: 'layering',
            features:['95% polyester, 5% spandex','Long sleeves with rib knit cuffs','Zip front closure','Faux kangaroo pouch pockets','Front and back princess seams','R: XS-3X (27”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PWTR','ROYL','WHIT'],
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
            style: 8684,
            name: 'PERFORMANCE FLEECE JACKET',
            kind: 'outerwear',
            features:['100% polyester','Zipper pull functions as hair tie','Two front in-seam welt pockets','Two hidden inside pockets','Back logo reflector','R: XS-3X (26”)'],
            swatches:['BLAC','CEIL','KHAK','NAVY','OLIV','PKPH','PWTR','ROYL','WHIT','WINE'],
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
            style: 7663,
            name: 'ZIP FRONT WARM UP',
            kind: 'layering',
            features:['77% polyester, 20% rayon 3% spandex','Rib knit collar and cuffs','Large curved pockets','Angled shoulder yoke seams','Back princess seams and yoke','R: XS-3X (28”)'],
            swatches:['BLAC','NAVY','OLIV','PWTR'],
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
            style: 8687,
            name: 'ZIP FRONT WARM UP',
            kind: 'layering',
            features:['55% cotton, 42% polyester,3% spandex','Two large patch pockets','Hidden side seam pockets','Zip front closure','R: XS-3X (27”)'],
            swatches:['BLAC','NAVY'],
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
            style: 8690,
            name: 'PERFORMANCE FLEECE VEST',
            kind: 'layering',
            features:['100% polyester','Zipper pull functions as hair tie','Two front in-seam welt pockets','Two hidden inside pockets','Back logo reflector','R: XS-3X (24”)'],
            swatches:['BLAC','NAVY','ROYL','WHIT'],
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
            style: 8486,
            name: 'SIGNATURE 1 POCKET TOP',
            kind: 'solids',
            features:['Tuck in or leave out','Chest pocket with bungee loop','Contrast details','R: XS-3X (29”)'],
            swatches:['BLAC','CEIL','NAVY','ROYL','STEL'],
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
            style: 8688,
            name: 'PERFORMANCE FLEECE JACKET',
            kind: 'outerwear',
            features:['100% polyester','Two front in-seam welt pockets','Two hidden inside pockets','Sport collar','R: XS-3X (29”)'],
            swatches:['BLAC','NAVY'],
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
            style: 8471,
            name: 'SIGNATURE 3 POCKET TOP',
            kind: 'solids',
            features:['Two large welt pockets','Welt chest pocket','Bungee loop','Contrast details','R: XS-3X (29”)'],
            swatches:['BLAC','CARI','CEIL','NAVY','ROYL','STEL','TEAL'],
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
            style: 8702,
            name: 'SIGNATURE 2 CARGO PANT',
            kind: 'bottoms',
            features:['Straight leg','Full elastic waistband','Internal waist ties','Functional fly zipper','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | T: XS- 3X (33”)'],
            swatches:['BLAC','CARI','CEIL','NAVY','ROYL','STEL','TEAL'],
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
            style: 8530,
            name: 'ACTIVATE PERFORMANCE 1 POCKET TOP',
            kind: 'solids',
            features:['Tuck in or leave out','Chest pocket with bungee loop','Sleeve detail','R: XS-3X (29”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
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
            style: 8734,
            name: 'ACTIVATE PERFORMANCE 2 CARGO PANT',
            kind: 'bottoms',
            features:['Modern fit tapered leg','Full elastic waistband','Internal waist ties','Functional fly zipper','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | T: XS-3X (33”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
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
            style: 8528,
            name: 'ACTIVATE PERFORMANCE 4 POCKET TOP',
            kind: 'solids',
            features:['Two large patch pockets','Extra accessory pocket','Chest pocket with bungee loop','R: XS-3X (30”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
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
            style: 9652,
            name: 'TAILORED EMPIRE MID LENGTH LAB COAT',
            kind: 'labcoats',
            features:['Two large patch pockets','Welt chest pocket','Button front closure','Back yoke and hem vent','Length: 32”'],
            swatches:['WHIT'],
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
            style: 9657,
            name: 'TAILORED EMPIRE LONG LENGTH LAB COAT',
            kind: 'labcoats',
            features:['Two large patch pockets','Welt chest pocket','Button front closure','Back yoke and hem vent','Length: 36”'],
            swatches:['WHIT'],
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
            style: 9644,
            name: 'TAILORED MID LENGTH LAB COAT',
            kind: 'labcoats',
            features:['Two large angled patch pockets','Squared front princess seams','Button front closure','Back hem vent','Length: 33”'],
            swatches:['WHIT'],
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
            style: 9632,
            name: 'TAILORED LONG LENGTH LAB COAT',
            kind: 'labcoats',
            features:['Two large angled patch pockets','Squared front princess seams','Button front closure','Back hem vent','Length: 36”'],
            swatches:['WHIT'],
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
            style: 9680,
            name: "MEN'S TAILORED LONG LENGTH LAB COAT",
            kind: 'labcoats',
            features:['Men’s sizes: 38-52','Two large welt pockets','Additional welt chest pocket','Button front closure','Tailored seam detail','Length: 38”'],
            swatches:['WHIT'],
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
            style: 3048,
            name: "MEN’S CLASSIC LONG LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Chest patch pocket with pen slot',' Hidden inside pockets','Open side access slits','Sewn down full back band','Size 36-52','Length: 38”'],
            swatches:['WHIT'],
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
            style: 8660,
            name: "3 POCKET SHORT LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Chest patch pocket','Button front closure','Back pleated detail','Waist-cinching back band with button tab','Size XS-3X','Length: 30”'],
            swatches:['WHIT'],
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
            style: 8617,
            name: "3 POCKET SHORT LENGTH LAEMPIRE BELTED MID LENGTH LAB COATB COAT",
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Feminine empire waistband','Front and back princess seams with bust darts','Button front closure','Waist-cinching back band with button tab detail','Size 4-20','Length: 33”'],
            swatches:['WHIT'],
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
            style: 9618,
            name: "CONSULTATION LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY COTTON POPLIN','65% polyester/35% cotton','Two large slanted pockets','3/4 length sleeves','Button front closure','Back pleated detail','Waist-cinching back band detail','Size XS-3X','Length: 28”'],
            swatches:['WHIT'],
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
            style: 5601,
            name: "EMPIRE MID LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/34% rayon/3% spandex','Two large rounded patch pockets','Feminine empire waistband','Front and back princess seams','Button front closure','Waist-cinching sewn down back band','Size XS-2XL','Length: 33”'],
            swatches:['WHIT'],
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
            style: 8692,
            name: "BELTED BACK MID LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/ 34% rayon/3% spandex','Two large patch pockets','Front darts & back princess seams','Additional accessory pocket','Open side access slits','Waist-cinching back band detail','Size XXS-2X','Length: 34”'],
            swatches:['WHIT'],
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
            style: 8608,
            name: "3 POCKET LONG LENGTH LAB COAT",
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/ 34% rayon/3% spandex','Two large patch pockets','Chest pocket with pen slot','Open side access slits','Waist-cinching sewn down back band detail','Size XS-3X','Length: 37”'],
            swatches:['WHIT'],
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


    let generateItemsHtml = function() {
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
                            <div id="style-showcase">
                                <img src="../../assets/images/products/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                                <div class="container-fluid hidden-sm">
                                    <div class="row">
                                        <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}.jpg"
                                            alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                        <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}_back.jpg"
                                        alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                        <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                                        alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                    </div>
                                </div>
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
    generateItemsHtml();

    let generateProductsHtml = function() {
        for (let i = 0; i < styles.length; i++){
            if (style === styles[i].kind){
                $('#products-view').append(
                    `   <div class="col-md-3 col-sm-6 p-3 text-sofia text-blue text-uppercase">
                            <a href="../collections/items/${styles[i].style}.html"><img src="../assets/images/products/products/${styles[i].style}.jpg" 
                            alt="${styles[i].name}" class="img-fluid"></a>
                            ${styles[i].style} <br> ${styles[i].name}
                        </div>
                    `
                )
            }
        }

    }
    generateProductsHtml();

    let imageStyleColorChange = function () {
        $('.swatches').on('click', function(){
            let color = $(this).data('color');
            console.log(color)
            $('#style-showcase').html(`
            <img src="../../assets/images/products/products/${style}_${color}.jpg" alt="${style}_${color}" class="img-fluid showcased-style mb-2" data-style="${style}_${color}" onError=this.src="../../assets/images/products/products/blank.jpg">
            <div class="container-fluid hidden-sm">
            <div class="row">
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
            </div>
            `)
        })

    }

    imageStyleColorChange();

    let thumbnailImageChange = function() {
        $('body').on('click','.thumbnails',function(){

            let orientation = $(this).data('orientation'); 
            console.log(orientation);
            if (orientation === "front") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}.jpg" alt="${style}" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `)  
            } else if (orientation === "back") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}_back.jpg" alt="${style}_back" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `)
            } else if (orientation === "sketch") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}_sketch.jpg" alt="${style}_sketch" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `) 
            }
  
        })

    }

    thumbnailImageChange();
    
})