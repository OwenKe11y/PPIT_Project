const flowers = [
    {
        "id" : "5ff30a993ffdef489ef04608", 
        "name" : [ 
            "Spring Gentian",  
            "Gentiana verna",  
            "Ceadharlach Bealtaine"
        ], 
        "description" : [ 
            "blue, solitary, ~ 2cm across, bright white centre, 5 petals",  
            "oval, ~1cm long, arranged in a rosette at soil level",  
            ""
        ], 
        "time" : [ 
            "April",  
            "May",  
            "June"
        ], 
        "colour" : "blue", 
        "img" : require('../img/SpringGentian.jpg'), 
        "copyright" : "By Philipp Weigell - picture taken by Philipp Weigell,  CC BY 3.0,  https://commons.wikimedia.org/w/index.php?curid=15316800"
    }, 
    
    
    {
        "id" : "5ff30b6b83c08c254bd1cacc", 
        "name" : [ 
            "Germander Speedwell",  
            "Veronica chamaedrys",  
            "Anuallach"
        ], 
        "description" : [ 
            "blue, ~1cm across, white centre, spikes of 10 or more",  
            "1-2.5cm long, leaf stalks <0.5cm",  
            ""
        ], 
        "time" : [ 
            "April",  
            "May",  
            "June",  
            "July"
        ], 
        "colour" : "blue", 
        "img" : require('../img/GermanderSpeedwell.jpg'), 
        "copyright" : "By Andreas Eichler,  CC BY-SA 4.0,  https://commons.wikimedia.org/w/index.php?curid=73581806"
    }, 
    
    
    {
        "id" : "5ff30d4483c08c254bd1cacd", 
        "name" : [ 
            "Turlough Violet",  
            "Viola persicifolia",  
            "Sailchuach Uisce"
        ], 
        "description" : [ 
            "violet, 1-1.5cm across, petals almost round, spur short",  
            "~4cm long, triangular, thin",  
            "Common Dog Violet. Turlough Violets grow lower down the turlough rims and have paler petals."
        ], 
        "time" : [ 
            "May",  
            "June"
        ], 
        "colour" : "blue", 
        "img" : require('../img/TurloughViolet.jpg'), 
        "copyright" : "By Hugues Tinguy - https://www.tela-botanica.org/eflore/consultation/popup.php?module=popup-illustrations&amp;action=fiche&amp;referentiel=bdtfx&amp;id=33664,  CC BY-SA 2.0 fr,  https://commons.wikimedia.org/w/index.php?curid=73034211"
    }, 
    
    {
        "id" : "5ff30e3383c08c254bd1cace", 
        "name" : [ 
            "Common Milkwort",  
            "Polygala vulgaris",  
            "Lus an Bhainne"
        ], 
        "description" : [ 
            "violet, <1cm across, clustered in long spikes at ends of shoots",  
            "0.5-3.5cm long, lowest leaves are smallest, spoon shaped,  scattered and alternating along stems",  
            "Heath Milkwort which grows in peaty areas."
        ], 
        "time" : [ 
            "May",  
            "June",  
            "July"
        ], 
        "colour" : "blue", 
        "img" : require('../img/CommonMilkwort.jpg'), 
        "copyright" : "CC BY-SA 3.0,  https://commons.wikimedia.org/w/index.php?curid=60835"
    }, 
    
    
    {
        "id" : "5ff30ff883c08c254bd1cacf", 
        "name" : [ 
            "Bitter Vetch",  
            "Lathyrus linifolius",  
            "Corra Meille"
        ], 
        "description" : [ 
            "pea like, 2-6 on each spike, ~1cm across, opening crimson turning blue or green",  
            "4 or more, narrow, eliptical, ~4cm long",  
            ""
        ], 
        "time" : [ 
            "April",  
            "May",  
            "June",  
            "July"
        ], 
        "colour" : "blue", 
        "img" : require('../img/BitterVetch.jpg'), 
        "copyright" : "By Kristian Peters -- Fabelfroh 06:37,  2 July 2007 (UTC - photographed by Kristian Peters,  CC BY-SA 3.0,  https://commons.wikimedia.org/w/index.php?curid=2335859"
    }, 
    
    
    {
        "id" : "5ff3111083c08c254bd1cad0", 
        "name" : [ 
            "Tufted Vetch",  
            "Vicia cracca",  
            "Peasair na Luch"
        ], 
        "description" : [ 
            "violet-blue, pea like, ~1cm long, slightly drooping, ~40 flowers per spike",  
            "12-30,  oblong leaflets, 1-2.5cm long, ending with branched tendril",  
            ""
        ], 
        "time" : [ 
            "June",  
            "July",  
            "August"
        ], 
        "colour" : "blue", 
        "img" : require('../img/TuftedVetch.jpg'), 
        "copyright" : "By The original uploader was Sannse at English Wikipedia. - Transferred from en.wikipedia to Commons.,  CC BY-SA 3.0,  https://commons.wikimedia.org/w/index.php?curid=2893916"
    }, 
    
    {
        "id" : "5ff3127883c08c254bd1cad1", 
        "name" : [ 
            "Devil's-bit Scabious",  
            "Succisa pratensis",  
            "Odhrach Bhallach"
        ], 
        "description" : [ 
            "blue, rarely pink or white, small, clustered in compact round heads",  
            "oval to spoon shaped, rosette at ground level, hairy",  
            "Sheep's-bit,  found on lime-free soil and blooms earlier."
        ], 
        "time" : [ 
            "July",  
            "August",  
            "September"
        ], 
        "colour" : "blue", 
        "img" : require("../img/Devil's-bitScabious.jpg"), 
        "copyright" : "By No machine-readable author provided. Pethan assumed (based on copyright claims. - No machine-readable source provided. Own work assumed (based on copyright claims.,  CC BY-SA 3.0,  https://commons.wikimedia.org/w/index.php?curid=309272"
    }, 
    
    {
        "id" : "5ff313a183c08c254bd1cad2", 
        "name" : [ 
            "Harebell",  
            "Campanula rotundifolia",  
            "Méaracán Gorm"
        ], 
        "description" : [ 
            "blue, bell shaped, 5 lobes, ~2cm long, dangling on stalks from arching stems",  
            "lowest leaves oval to heart shaped, stem leaves narrower",  
            ""
        ], 
        "time" : [ 
            "July",  
            "August",  
            "September"
        ], 
        "colour" : "blue", 
        "img" : require('../img/Harebell.jpg'), 
        "copyright" : "CC BY-SA 3.0,  https://commons.wikimedia.org/w/index.php?curid=247920"
    }
    ];
    export default flowers;