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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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
            style: 8407,
            name: 'Zip Neck Top',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets R: XS-3X (27”)'],
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

    for (let i=0; i < styles.length; i++){
        if (style == styles[i].style){
            $('#view').html(`
            <div class="container p-5 text-sofia">
                <div class="row">
                    <div class="col-sm-6">
                        <div id="style-showcase"><img src="../../assets/images/products/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div>
                                        <h1>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    Crafted from a lightweight, super
                                    stretch fabric, this lightweight top is
                                    perfect for everyday wear<br><br>
                                    <ul id="features">
                                    </ul>
                                </div>
                                <div class="col-sm-12">
                                    <button class='swatches'>Swatches</button>
                                    <button class='swatches'>Swatches</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
        styles[i].listFeatures();
        }  
    }
    
})