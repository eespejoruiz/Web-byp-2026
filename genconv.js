const sharp=require("sharp");
const J=f=>"gen-src/"+f+".png", O=f=>"src/assets/images/gen/"+f+".webp";
const w=(s,o,width,q)=>sharp(J(s)).resize({width}).webp({quality:q||78}).toFile(O(o));
const crop169=async(s,o,pos)=>{const m=await sharp(J(s)).metadata();const W=Math.min(m.width,Math.round(m.height*16/9));let left=Math.round((m.width-W)/2);if(pos==="left")left=0;await sharp(J(s)).extract({left,top:0,width:W,height:m.height}).resize({width:1600}).webp({quality:78}).toFile(O(o));};
(async()=>{
const heros={"1.1":"home-hero-alt","1.3":"home-cta","2.1":"ind-restaurantes","2.2":"ind-bares-cafeterias","2.3":"ind-comida-rapida","2.4":"ind-estadios","2.5":"ind-hoteles-catering","2.6":"ind-panaderia","2.7":"ind-cocinas-industriales","2.8":"ind-carnicerias","2.9":"ind-supermercados","2.10":"ind-laboratorios","2.11":"ind-otros","3.1":"brand-rondo","3.2":"brand-diosna","3.3":"brand-winterhalter","3.4":"brand-true","3.5":"brand-pietroberto","5.1":"nosotros-hero","5.3":"marcas-hero","5.4":"industrias-hero","5.5":"blog-hero","5.6":"home-banner","5.7":"testimonios-bg","5.8":"cta-prefooter"};
for(const[s,o]of Object.entries(heros))await w(s,o,1920);
const mid={"1.2":"home-servicios","4.1":"card-rondo-compas","4.2":"card-pietroberto-omega3","4.3":"card-pietroberto-sart","4.4":"card-treif-lineup","4.5":"card-vitamix-vitaprep","5.9":"notfound"};
for(const[s,o]of Object.entries(mid))await w(s,o,1200);
await w("5.2","contacto-lateral",1000);
await w("5.10","caso-masa",1600);await w("5.11","caso-banquetes",1600);
await crop169("3.4","caso-frio");await crop169("2.9","blog-retail");await crop169("2.3","blog-qsr");await crop169("2.6","blog-panaderia");await crop169("2.2","blog-bares");await crop169("2.10","blog-laboratorios");await crop169("2.8","blog-carnicerias");await crop169("2.1","blog-restaurantes");await crop169("3.4","blog-energia","left");await crop169("1.3","blog-roi");
console.log("CONV OK");
})().catch(e=>{console.error("FAIL",e.message);process.exit(1)});
