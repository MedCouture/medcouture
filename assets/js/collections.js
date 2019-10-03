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
            $('#style-showcase').html(`<img src="../../assets/images/products/products/${style}_${color}.jpg" alt="${style}_${color}" class="img-fluid">`)
        })

    }

    imageStyleColorChange();
    
})