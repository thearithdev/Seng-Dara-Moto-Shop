/* ============ SPEED LINES (hero decoration) ============ */
(function speedLines(){
  const el = document.getElementById('speedLines');
  for(let i=0;i<10;i++){
    const line = document.createElement('i');
    line.style.top = (10 + Math.random()*80) + '%';
    line.style.width = (60 + Math.random()*180) + 'px';
    line.style.animationDelay = (Math.random()*2.4) + 's';
    line.style.opacity = 0.3 + Math.random()*0.5;
    el.appendChild(line);
  }
})();

/* ============ i18n (English / Khmer) ============ */
const I18N = {
  en: {
    call_us:"CALL US",
    hero_title:"Quality Motorcycles, Honest Prices", hero_subtitle:"Browse our Honda motorcycles — new and used — right here, no need to visit in person first.",
    clear_filters:"CLEAR ALL FILTERS", cat_title:"CATEGORY", cat_all:"All Motorcycles",
    cat_new:"New Motorcycles", cat_used:"Used Motorcycles",
    brand_title:"BRAND", brand_search_ph:"Search brand", brand_all:"All Brands",
    show_more:"Show More +", show_less:"Show Less −",
    engine_title:"ENGINE (CC)", engine_all:"All Engine", engine_u150:"Under 150cc",
    engine_150_250:"150cc - 250cc", engine_251_500:"251cc - 500cc", engine_above500:"Above 500cc",
    price_title:"PRICE RANGE",
    chip_under15:"Under $1.5K", chip_1525:"$1.5K - $2.5K", chip_2540:"$2.5K - $4K", chip_above4:"Above $4K",
    year_title:"YEAR", year_all:"All Years",
    trans_title:"TRANSMISSION", all_generic:"All", trans_manual:"Manual", trans_automatic:"Automatic",
    fuel_title:"FUEL TYPE", fuel_petrol:"Petrol", fuel_electric:"Electric",
    apply_filters:"APPLY FILTERS",
    sort_featured:"Sort by: Featured", sort_price_asc:"Price: Low to High", sort_price_desc:"Price: High to Low",
    sort_newest:"Newest First", sort_name:"Name: A–Z",
    showing_text:(from,to,total)=>`Showing ${from}\u2013${to} of <b>${total}</b> motorcycles`,
    showing_total_text:(from,to,total)=>`Showing ${from}\u2013${to} of ${total}`,
    view_details:"VIEW DETAILS", badge_new:"NEW",
    installment_from:"From", per_month:"/mo",
    installment_disclaimer:"* Estimated monthly payment based on the financing term set for each motorcycle. Contact us for exact details.",
    empty_title:"No motorcycles match your filters", empty_sub:"Try adjusting or clearing your filters.",
    cta_title:"NEED HELP CHOOSING THE RIGHT BIKE?", cta_sub:"Our experts are here to help you find the perfect match.",
    cta_contact:"CONTACT US",
    footer_tagline:"Your trusted motorcycle partner. Quality bikes, expert service, and everything in between.",
    footer_services:"OUR SERVICES", footer_contact_heading:"CONTACT US",
    footer_followus:"FOLLOW US",
    svc_servicing:"Servicing", svc_tires:"Tires & Wheels", svc_parts:"Spare Parts",
    svc_accessories:"Accessories", svc_custom:"Custom Build", svc_testride:"Test Ride",
    footer_address:"Krong Siem Reap, Siem Reap Province, Cambodia",
    footer_hours:"Mon–Sun: 8:00 AM – 6:00 PM",
    footer_copyright:"© 2025 Seng Tara Motorcycles. All Rights Reserved.",
    not_connected:"Not connected to Supabase", not_connected_sub:"Add your project URL and key in config.js — see SETUP.md.",
    load_error:"Could not load inventory", load_error_sub:"Check your Supabase URL/key in config.js."
  },
  km: {
    call_us:"ទូរស័ព្ទមកយើង",
    hero_title:"ម៉ូតូគុណភាព តម្លៃសមរម្យ", hero_subtitle:"រកមើលម៉ូតូ Honda ថ្មី និងមួយដៃរបស់យើងទាំងអស់នៅទីនេះ។",
    clear_filters:"សម្អាតតម្រងទាំងអស់", cat_title:"ប្រភេទ", cat_all:"ម៉ូតូទាំងអស់",
    cat_new:"ម៉ូតូថ្មី", cat_used:"ម៉ូតូបានប្រើប្រាស់",
    brand_title:"ម៉ាក", brand_search_ph:"ស្វែងរកម៉ាក", brand_all:"ម៉ាកទាំងអស់",
    show_more:"មើលបន្ថែម +", show_less:"បង្ហាញតិច −",
    engine_title:"ម៉ាស៊ីន (ស៊ីស៊ី)", engine_all:"ម៉ាស៊ីនទាំងអស់", engine_u150:"ក្រោម ១៥០ស៊ីស៊ី",
    engine_150_250:"១៥០ - ២៥០ស៊ីស៊ី", engine_251_500:"២៥១ - ៥០០ស៊ីស៊ី", engine_above500:"លើស ៥០០ស៊ីស៊ី",
    price_title:"ជួរតម្លៃ",
    chip_under15:"ក្រោម $១.៥K", chip_1525:"$១.៥K - $២.៥K", chip_2540:"$២.៥K - $៤K", chip_above4:"លើស $៤K",
    year_title:"ឆ្នាំ", year_all:"ឆ្នាំទាំងអស់",
    trans_title:"ប្រអប់លេខ", all_generic:"ទាំងអស់", trans_manual:"ដៃ", trans_automatic:"ស្វ័យប្រវត្តិ",
    fuel_title:"ប្រភេទប្រេង", fuel_petrol:"សាំង", fuel_electric:"អគ្គិសនី",
    apply_filters:"អនុវត្តតម្រង",
    sort_featured:"តម្រៀបតាម៖ លក្ខណៈពិសេស", sort_price_asc:"តម្លៃ៖ ទាបទៅខ្ពស់", sort_price_desc:"តម្លៃ៖ ខ្ពស់ទៅទាប",
    sort_newest:"ថ្មីបំផុតមុន", sort_name:"ឈ្មោះ៖ ក-អ",
    showing_text:(from,to,total)=>`បង្ហាញ ${from}\u2013${to} នៃ <b>${total}</b> ម៉ូតូ`,
    showing_total_text:(from,to,total)=>`បង្ហាញ ${from}\u2013${to} នៃ ${total}`,
    view_details:"មើលលម្អិត", badge_new:"ថ្មី",
    installment_from:"ចាប់ពី", per_month:"/ខែ",
    installment_disclaimer:"* ជាតម្លៃប៉ាន់ស្មានផ្អែកលើលក្ខខណ្ឌទូទាត់រំលស់សម្រាប់ម៉ូតូនីមួយៗ។ សូមទាក់ទងមកយើងសម្រាប់ព័ត៌មានលម្អិត។",
    empty_title:"គ្មានម៉ូតូត្រូវនឹងតម្រងរបស់អ្នកទេ", empty_sub:"សូមកែសម្រួល ឬសម្អាតតម្រងរបស់អ្នក។",
    cta_title:"ត្រូវការជំនួយក្នុងការជ្រើសរើសម៉ូតូឱ្យត្រូវ?", cta_sub:"អ្នកជំនាញរបស់យើងនៅទីនេះដើម្បីជួយអ្នករកម៉ូតូដ៏សមស្រប។",
    cta_contact:"ទាក់ទងមកយើង",
    footer_tagline:"ដៃគូម៉ូតូដែលអ្នកទុកចិត្ត។ ម៉ូតូគុណភាព សេវាកម្មជំនាញ និងអ្វីៗគ្រប់យ៉ាង។",
    footer_services:"សេវាកម្មរបស់យើង", footer_contact_heading:"ទាក់ទងមកយើង",
    footer_followus:"តាមដានយើង",
    svc_servicing:"ជួសជុល", svc_tires:"កង់ និងសំបកកង់", svc_parts:"គ្រឿងបន្លាស់",
    svc_accessories:"គ្រឿងបន្ថែម", svc_custom:"ផលិតតាមបំណង", svc_testride:"ជិះសាកល្បង",
    footer_address:"ក្រុងសៀមរាប ខេត្តសៀមរាប កម្ពុជា",
    footer_hours:"ចន្ទ–អាទិត្យ៖ ៨:០០ព្រឹក – ៦:០០ល្ងាច",
    footer_copyright:"© ២០២៥ ហាងលក់ម៉ូតូ សេងតារា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    not_connected:"មិនទាន់ភ្ជាប់ជាមួយ Supabase ទេ", not_connected_sub:"សូមបញ្ចូល URL និងលេខសម្ងាត់គម្រោងរបស់អ្នកនៅក្នុង config.js — មើល SETUP.md។",
    load_error:"មិនអាចផ្ទុកស្តុកទំនិញបានទេ", load_error_sub:"សូមពិនិត្យ URL/key របស់ Supabase នៅក្នុង config.js។"
  }
};
let currentLang = localStorage.getItem('rm_lang') || 'km';
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key; }

function applyStaticTranslations(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  document.querySelectorAll('#langToggle button').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang===currentLang);
  });
}
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('rm_lang', lang);
  applyStaticTranslations();
  renderBrandCheckboxes(document.getElementById('brandSearch').value, brandsExpanded);
  document.getElementById('showMoreBrands').textContent = brandsExpanded ? t('show_less') : t('show_more');
  render();
}
document.getElementById('langToggle').addEventListener('click', e=>{
  const btn = e.target.closest('button[data-lang]');
  if(btn) setLanguage(btn.dataset.lang);
});
applyStaticTranslations();

/* ============ DATA ============ */
const BRAND_COLORS = {
  Yamaha:'#2563eb', Honda:'#e11d2a', Kawasaki:'#7dd321', 'Royal Enfield':'#8a6a4b',
  Suzuki:'#f2c200', KTM:'#ff6a00', Vespa:'#6b7280'
};

/* ============ SUPABASE CONNECTION ============ */
const supabaseClient = (typeof supabase!=='undefined' && typeof SUPABASE_URL!=='undefined')
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let bikes = [];

async function loadBikesFromSupabase(){
  if(!supabaseClient){
    grid.innerHTML = `<div class="empty-state"><b>${t('not_connected')}</b>${t('not_connected_sub')}</div>`;
    return;
  }
  const { data, error } = await supabaseClient
    .from('public_listings')
    .select('*')
    .order('id', { ascending:false });

  if(error){
    console.error(error);
    grid.innerHTML = `<div class="empty-state"><b>${t('load_error')}</b>${t('load_error_sub')}</div>`;
    return;
  }

  bikes = (data||[]).map(d=>({
    id:d.id,
    brand:d.brand,
    name:d.name,
    year:d.year,
    price:Number(d.price),
    cc:d.cc,
    speed: (d.transmission==='Automatic') ? 'Automatic' : (d.cc>500?'6-Speed':(d.cc>250?'6-Speed':'5-Speed')),
    transmission:d.transmission,
    fuel:d.fuel,
    abs:true,
    badge:d.badge||null,
    category:d.category||'new',
    image_url:d.image_url||null,
    downPayment:Number(d.installment_down_payment||0),
    months:Number(d.installment_months||24)
  }));

  initSidebarData();
  render();
}

/* ============ STATE ============ */
const state = {
  category:'all',
  brands:new Set(),      // empty = all
  engine:new Set(),      // empty = all
  priceMin:0, priceMax:999999,
  year:'all',
  trans:'all',
  fuel:'all',
  sort:'featured',
  page:1,
  perPage:12,
  view:'grid',
  favorites:new Set()
};

/* ============ BUILD BRAND LIST (rebuilt whenever data loads) ============ */
const brandList = document.getElementById('brandList');
let brandCounts = {};
let ALL_BRANDS = [];
let brandsExpanded = false;

function renderBrandCheckboxes(filterText, showAll){
  brandList.innerHTML='';
  const brandsToShow = showAll ? ALL_BRANDS : ALL_BRANDS.slice(0,5);
  brandsToShow.filter(b=>b.toLowerCase().includes((filterText||'').toLowerCase())).forEach(b=>{
    const label = document.createElement('label');
    label.className='check-row';
    label.innerHTML = `<input type="checkbox" data-brand="${b}"> ${b} <span class="count">(${brandCounts[b]})</span>`;
    brandList.appendChild(label);
  });
}
document.getElementById('showMoreBrands').addEventListener('click',(e)=>{
  brandsExpanded=!brandsExpanded;
  e.target.textContent = brandsExpanded? t('show_less') : t('show_more');
  renderBrandCheckboxes(document.getElementById('brandSearch').value, brandsExpanded);
});
document.getElementById('brandSearch').addEventListener('input',(e)=>{
  renderBrandCheckboxes(e.target.value, true);
});
document.getElementById('allBrands').addEventListener('change',(e)=>{
  if(e.target.checked){ state.brands.clear(); brandList.querySelectorAll('input').forEach(i=>i.checked=false); }
  applyAndRender();
});
brandList.addEventListener('change',(e)=>{
  if(e.target.dataset.brand){
    document.getElementById('allBrands').checked=false;
    if(e.target.checked) state.brands.add(e.target.dataset.brand);
    else state.brands.delete(e.target.dataset.brand);
    if(state.brands.size===0) document.getElementById('allBrands').checked=true;
    applyAndRender();
  }
});

/* ============ ENGINE COUNTS ============ */
function engineBucket(cc){
  if(cc<150) return 'u150';
  if(cc<=250) return '150-250';
  if(cc<=500) return '251-500';
  return 'above500';
}
function refreshEngineCounts(){
  ['u150','150-250','251-500','above500'].forEach(k=>{
    const n = bikes.filter(b=>engineBucket(b.cc)===k).length;
    const el = document.getElementById('c-'+k);
    if(el) el.textContent = `(${n})`;
  });
}

/* Called once bikes[] is populated from Supabase */
function initSidebarData(){
  brandCounts = {};
  bikes.forEach(b=>brandCounts[b.brand]=(brandCounts[b.brand]||0)+1);
  ALL_BRANDS = Object.keys(brandCounts);
  renderBrandCheckboxes('', brandsExpanded);
  refreshEngineCounts();
}

/* ============ FILTER WIRING ============ */
document.querySelectorAll('input[name=category]').forEach(r=>r.addEventListener('change',e=>{state.category=e.target.value; applyAndRender();}));
document.querySelectorAll('input[name=engine]').forEach(cb=>cb.addEventListener('change',e=>{
  if(e.target.value==='all'){ state.engine.clear(); document.querySelectorAll('input[name=engine]').forEach(x=>{if(x.value!=='all')x.checked=false;}); }
  else{
    document.querySelector('input[name=engine][value=all]').checked=false;
    if(e.target.checked) state.engine.add(e.target.value); else state.engine.delete(e.target.value);
    if(state.engine.size===0) document.querySelector('input[name=engine][value=all]').checked=true;
  }
  applyAndRender();
}));
document.getElementById('priceRange').addEventListener('input',e=>{
  state.priceMax = parseInt(e.target.value,10);
  state.priceMin = 0;
  document.querySelectorAll('.price-chips button').forEach(b=>b.classList.remove('active'));
  applyAndRender();
});
document.querySelectorAll('.price-chips button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.price-chips button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.priceMin = parseInt(btn.dataset.min,10);
    state.priceMax = parseInt(btn.dataset.max,10);
    applyAndRender();
  });
});
document.getElementById('yearSelect').addEventListener('change',e=>{state.year=e.target.value; applyAndRender();});
document.querySelectorAll('input[name=trans]').forEach(r=>r.addEventListener('change',e=>{state.trans=e.target.value; applyAndRender();}));
document.querySelectorAll('input[name=fuel]').forEach(r=>r.addEventListener('change',e=>{state.fuel=e.target.value; applyAndRender();}));
document.getElementById('sortSelect').addEventListener('change',e=>{state.sort=e.target.value; state.page=1; applyAndRender();});
document.getElementById('applyBtn').addEventListener('click',applyAndRender);

document.getElementById('clearFiltersBtn').addEventListener('click',()=>{
  state.category='all'; state.brands.clear(); state.engine.clear();
  state.priceMin=0; state.priceMax=999999; state.year='all'; state.trans='all'; state.fuel='all';
  document.querySelectorAll('input[name=category]')[0].checked=true;
  document.getElementById('allBrands').checked=true;
  document.querySelectorAll('input[data-brand]').forEach(i=>i.checked=false);
  document.querySelector('input[name=engine][value=all]').checked=true;
  document.querySelectorAll('input[name=engine]').forEach(x=>{if(x.value!=='all')x.checked=false;});
  document.getElementById('priceRange').value=7000;
  document.querySelectorAll('.price-chips button').forEach(b=>b.classList.remove('active'));
  document.getElementById('yearSelect').value='all';
  document.querySelectorAll('input[name=trans]')[0].checked=true;
  document.querySelectorAll('input[name=fuel]')[0].checked=true;
  state.page=1;
  applyAndRender();
});

/* ============ VIEW TOGGLE ============ */
document.getElementById('gridBtn').addEventListener('click',()=>{state.view='grid';document.getElementById('gridBtn').classList.add('active');document.getElementById('listBtn').classList.remove('active');render();});
document.getElementById('listBtn').addEventListener('click',()=>{state.view='list';document.getElementById('listBtn').classList.add('active');document.getElementById('gridBtn').classList.remove('active');render();});

/* ============ FILTER + SORT LOGIC ============ */
function getFiltered(){
  return bikes.filter(b=>{
    if(state.category!=='all' && b.category!==state.category) return false;
    if(state.brands.size>0 && !state.brands.has(b.brand)) return false;
    if(state.engine.size>0 && !state.engine.has(engineBucket(b.cc))) return false;
    if(b.price<state.priceMin || b.price>state.priceMax) return false;
    if(state.year!=='all' && String(b.year)!==state.year) return false;
    if(state.trans!=='all' && b.transmission!==state.trans) return false;
    if(state.fuel!=='all' && b.fuel!==state.fuel) return false;
    return true;
  });
}
function getSorted(list){
  const l=[...list];
  switch(state.sort){
    case 'price-asc': l.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': l.sort((a,b)=>b.price-a.price); break;
    case 'year-desc': l.sort((a,b)=>b.year-a.year); break;
    case 'name-asc': l.sort((a,b)=>a.name.localeCompare(b.name)); break;
    default: break; // featured = original order (NEW first)
  }
  if(state.sort==='featured'){
    l.sort((a,b)=>(b.badge?1:0)-(a.badge?1:0));
  }
  return l;
}

/* ============ ICON SVGS ============ */
function bikeSVG(color){
  return `<svg class="bike-svg" viewBox="0 0 200 100" fill="none">
    <ellipse cx="100" cy="90" rx="90" ry="6" fill="#000" opacity=".12"/>
    <circle cx="45" cy="70" r="24" fill="none" stroke="#c7cad1" stroke-width="7"/>
    <circle cx="155" cy="70" r="24" fill="none" stroke="#c7cad1" stroke-width="7"/>
    <circle cx="45" cy="70" r="6" fill="${color}"/>
    <circle cx="155" cy="70" r="6" fill="${color}"/>
    <path d="M45 70 L90 40 L130 40 L155 70" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M90 40 L80 20 L105 12" stroke="#9ca3af" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="20" r="9" fill="#374151" stroke="${color}" stroke-width="2"/>
    <rect x="100" y="32" width="42" height="12" rx="5" fill="#d1d5db"/>
    <path d="M130 40 L145 60 L155 70" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
  </svg>`;
}
const specIcons = {
  cc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  abs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>',
  installment:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/></svg>'
};

/* ============ RENDER ============ */
const grid = document.getElementById('grid');
function renderCard(b){
  const color = BRAND_COLORS[b.brand] || '#e0263f';
  const favActive = state.favorites.has(b.id) ? 'active' : '';
  const months = b.months || 24;
  const monthly = Math.ceil(Math.max(0, b.price - (b.downPayment||0)) / months);
  return `
  <div class="card" data-id="${b.id}">
    <div class="card-media">
      ${b.badge?`<span class="badge-new">${t('badge_new')}</span>`:''}
      <button class="fav-btn ${favActive}" data-fav="${b.id}">${specIcons.heart}</button>
      ${b.image_url ? `<img src="${b.image_url}" alt="${b.name}" style="width:100%;height:120px;object-fit:contain;">` : bikeSVG(color)}
    </div>
    <div class="card-body">
      <div class="card-title-row">
        <div class="card-title">${b.name}</div>
        <div class="card-year">${b.year}</div>
      </div>
      <div class="card-price">$${b.price.toLocaleString()}</div>
      <div class="installment-badge">${specIcons.installment}<span>${t('installment_from')} $${monthly}<small>${t('per_month')}</small></span></div>
      <div class="view-details">${t('view_details')} ${specIcons.chevron}</div>
    </div>
  </div>`;
}

function render(){
  const filtered = getFiltered();
  const sorted = getSorted(filtered);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total/state.perPage));
  if(state.page>totalPages) state.page=totalPages;
  const start = (state.page-1)*state.perPage;
  const pageItems = sorted.slice(start, start+state.perPage);

  grid.className = 'grid' + (state.view==='list' ? ' list-view' : '');
  grid.innerHTML = pageItems.length ? pageItems.map(renderCard).join('') :
    `<div class="empty-state"><b>${t('empty_title')}</b>${t('empty_sub')}</div>`;

  const from = total===0?0:start+1;
  const to = Math.min(start+state.perPage, total);
  document.getElementById('resultCount').innerHTML = t('showing_text')(from, to, total);
  document.getElementById('showingTotal').textContent = t('showing_total_text')(from, to, total);
  document.getElementById('applyBtn').textContent = `${t('apply_filters')} (${total})`;

  renderPagination(totalPages);
}

function renderPagination(totalPages){
  const pag = document.getElementById('pagination');
  let html = `<button ${state.page===1?'disabled':''} id="prevPage">‹</button>`;
  for(let i=1;i<=totalPages;i++){
    if(totalPages>7 && i!==1 && i!==totalPages && Math.abs(i-state.page)>1){
      if(i===2 || i===totalPages-1) html += `<button disabled>…</button>`;
      continue;
    }
    html += `<button data-page="${i}" class="${i===state.page?'active':''}">${i}</button>`;
  }
  html += `<button ${state.page===totalPages?'disabled':''} id="nextPage">›</button>`;
  pag.innerHTML = html;

  pag.querySelectorAll('button[data-page]').forEach(b=>b.addEventListener('click',()=>{
    state.page = parseInt(b.dataset.page,10); render(); scrollToGrid();
  }));
  const prev = document.getElementById('prevPage');
  const next = document.getElementById('nextPage');
  if(prev) prev.addEventListener('click',()=>{ if(state.page>1){state.page--; render(); scrollToGrid();} });
  if(next) next.addEventListener('click',()=>{ if(state.page<totalPages){state.page++; render(); scrollToGrid();} });
}
function scrollToGrid(){ document.querySelector('.list-toolbar').scrollIntoView({behavior:'smooth', block:'start'}); }

grid.addEventListener('click', e=>{
  const favBtn = e.target.closest('[data-fav]');
  if(favBtn){
    const id = parseInt(favBtn.dataset.fav,10);
    if(state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
    favBtn.classList.toggle('active');
  }
});

function applyAndRender(){ state.page=1; render(); }

/* initial load — pulls live inventory from Supabase */
loadBikesFromSupabase();
