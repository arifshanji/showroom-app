define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Showroom',
      videoName    : 'showroom_1',
      devMode      : false,

      mp4_video_src_med  : 'showroom/showroom.mp4',
      webm_video_src_med : 'showroom/showroom-webm.webm',
      iphone_video_src   : 'showroom/showroom.mpg',
      iphone_audio_src   : 'showroom/soundtrack.mp3',
      beacon_video_mp4   : 'showroom/showroomBeacon.mp4',
      beacon_video_webm  : 'showroom/showroomBeacon.webm',
      loaderStyle        : 'image',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/showroom/",
      colorVariantsImagePath : 'static/images/productImages/showroom/colorVariants/',

      checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's make video shoppable.",

      beaconColor       : 'red',
      checkoutType      : "email",
      shareUrl          : "http://www.helloshowroom.co/showroom/index.html",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/showroom/index.html?config=showroomConfig",
      splashImage       : 'static/images/posterFrames/showroom.png',
      hotspotColor      : 'red',
      spinnerColor      : null,

      recommended : [
        {
          "id"            : '4',
          "itemImageSrc" : 'dior-naughtily-d-lace-up-boot-in-silver-tone-mesh.jpg'
        },
        {
          "id"            : '5',
          "itemImageSrc" : 'mini-j-adior-flap-bag-in-black-smooth-calfskin-embroidered-with-a-mosaic-of-mirrors.jpg'
        },
        {
          "id"            : '1',
          "itemImageSrc" : "black-cotton-beret-with-veil.jpg"
        },
        {
          "id"            : '2',
          "itemImageSrc" : "dior-book-tote-bag-in-embroidered-dior-oblique-canvas.jpg"
        },
        {
          "id"            : '3',
          "itemImageSrc" : "dior-baby-d-ballet-pump-in-black-patent-calfskin.jpg"
        }
      ],

      // extraOptions: [
      //   {
      //     id: 1,
      //     option1: {
      //       title: 'something',
      //       variants: {
      //         XS : ['812187233'],
      //         S  : ['812187237'],
      //         M  : ['812187241'],
      //         L  : ['812187245'],
      //         XL : ['812187249']
      //       }
      //     },
      //     option2: {
      //       title: 'something else',
      //       variants: {
      //         1 : ['812187233'],
      //         4 : ['812187245'],
      //         5 : ['812187249'],
      //         10: ['304872390847']
      //       }
      //     },
      //     option3: {
      //       title: 'lalalalala',
      //       variants : {
      //         'do' : ['fsdfsdf'],
      //         're' : ['asfasd']
      //       }
      //     }
      //   },
      //   {
      //     id: 2,
      //     option1: {
      //       title: 'second option',
      //       variants: {
      //         XS : ['812187233'],
      //         S  : ['812187237'],
      //         M  : ['812187241'],
      //         L  : ['812187245'],
      //         XL : ['812187249']
      //       }
      //     }
      //   }
      // ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "itemImageSrc"       : "black-cotton-beret-with-veil.jpg",
          "itemTitle"          : "BLACK COTTON BERET WITH VEIL",
          "itemDescription"    : "",
          "itemPrice"          : "£520.00",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["black-cotton-beret-with-veil.jpg","black-cotton-beret-with-veil.jpg"],
          "variants" : {
            "Black" : ['812187233']
          },
          otherOptionId : 1
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "itemImageSrc"       : "dior-book-tote-bag-in-embroidered-dior-oblique-canvas.jpg",
          "itemTitle"          : "DIOR BOOK TOTE BAG IN EMBROIDERED DIOR OBLIQUE CANVAS",
          "itemDescription"    : "",
          "itemPrice"          : "£1350",
          "hasSize"            : false,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["dior-book-tote-bag-in-embroidered-dior-oblique-canvas.jpg","dior-book-tote-bag-in-embroidered-dior-oblique-canvas.jpg"],
          "variants" : {
            XS : ['812192337'],
            S  : ['812192369'],
            M  : ['812192737'],
            L  : ['812192741'],
            XL : ['812192745']
          },
          otherOptionId : 2
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "itemImageSrc"       : "dior-baby-d-ballet-pump-in-black-patent-calfskin.jpg",
          "itemTitle"          : "\"DIOR BABY-D\" BALLET PUMP IN BLACK PATENT CALFSKIN",
          "itemDescription"    : "",
          "itemPrice"          : "£670",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["dior-baby-d-ballet-pump-in-black-patent-calfskin.jpg","dior-baby-d-ballet-pump-in-black-patent-calfskin.jpg"],
          "variants" : {
            XS : ['812189549'],
            S  : ['812189829'],
            M  : ['812189833'],
            L  : ['812189837'],
            XL : ['812189841']
          }
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "itemImageSrc"       : "dior-naughtily-d-lace-up-boot-in-silver-tone-mesh.jpg",
          "itemTitle"          : "\"DIOR NAUGHTILY-D\" LACE-UP BOOT IN SILVER-TONE MESH",
          "itemDescription"    : "",
          "itemPrice"          : "£1250",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["dior-naughtily-d-lace-up-boot-in-silver-tone-mesh.jpg","dior-naughtily-d-lace-up-boot-in-silver-tone-mesh.jpg"],
          "variants"           : {
            XS : ['986914052'],
            S  : ['986914056'],
            M  : ['986914060'],
            L  : ['986914064'],
            XL : ['986914068']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "itemImageSrc"       : "mini-j-adior-flap-bag-in-black-smooth-calfskin-embroidered-with-a-mosaic-of-mirrors.jpg",
          "itemTitle"          : "MINI J'ADIOR FLAP BAG IN BLACK SMOOTH CALFSKIN EMBROIDERED WITH A MOSAIC OF MIRRORS",
          "itemDescription"    : "",
          "itemPrice"          : "£2550",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["mini-j-adior-flap-bag-in-black-smooth-calfskin-embroidered-with-a-mosaic-of-mirrors.jpg","mini-j-adior-flap-bag-in-black-smooth-calfskin-embroidered-with-a-mosaic-of-mirrors.jpg"],
          "variants"           : {
            XS : ['986909080'],
            S  : ['986909084'],
            M  : ['986909088'],
            L  : ['986909092'],
            XL : ['986909096']
          }
        },
        {
          "id"                 : "6",
          "index"              : "5",
          "itemImageSrc"       : "large-lady-dior-bag-in-black-luxury-goatskin-with-niki-de-saint-phalle-marquetry.jpg",
          "itemTitle"          : "LARGE LADY DIOR BAG IN BLACK LUXURY GOATSKIN WITH NIKI DE SAINT PHALLE MARQUETRY",
          "itemDescription"    : "",
          "itemPrice"          : "£6000",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["large-lady-dior-bag-in-black-luxury-goatskin-with-niki-de-saint-phalle-marquetry.jpg","large-lady-dior-bag-in-black-luxury-goatskin-with-niki-de-saint-phalle-marquetry.jpg"],
          "variants"           : {
            XS : ['986909080'],
            S  : ['986909084'],
            M  : ['986909088'],
            L  : ['986909092'],
            XL : ['986909096']
          }
        },

      ],

      variantColors: [
        {
          "id"           : "1",
          "colorSrc"     : "#b0b6cf",
          "colorBlockId" : '1'
        },
        {
          "id"           : "3",
          "colorSrc"     : "#ababb0",
          "colorBlockId" : '1'
        },
        {
          "id"           : "2",
          "colorSrc"     : "#FFF",
          "colorBlockId" : '1'
        },
        {
          "id"           : '4',
          "colorSrc"     : "#272a3d",
          "colorBlockId" : '2'
        },
        {
          "id"           : '5',
          "colorSrc"     : "#3b3b2f",
          "colorBlockId" : '2'
        },
      ],

      hotSpots: [
        {
          "id"                 : "1", //product id
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.02",
          "endTime"            : "0.08",
          "hotSpotStartX"      : "950",
          "hotSpotStartY"      : "50",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.23",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "260",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.34",
          "endTime"            : "0.39",
          "hotSpotStartX"      : "670",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.41",
          "endTime"            : "0.465",
          "hotSpotStartX"      : "770",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.465",
          "endTime"            : "0.50",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "670",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.63",
          "endTime"            : "0.67",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "140",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.78",
          "endTime"            : "0.86",
          "hotSpotStartX"      : "1175",
          "hotSpotStartY"      : "120",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
        }
      ],

      cartItems:[]
    };
  });

