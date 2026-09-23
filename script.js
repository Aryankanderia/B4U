const properties = [
 {id:1,name:"Bright Single Room near KIET",type:"PG",location:"Muradnagar, Ghaziabad",price:6500,rating:4.7,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",amenities:["Wi-Fi","AC","Power backup"],desc:"A clean and comfortable room suitable for students looking for a peaceful place near KIET."},
 {id:2,name:"Modern 2 BHK Flat",type:"Flat",location:"Sector 62, Noida",price:18000,rating:4.8,img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",amenities:["Parking","Kitchen","Balcony"],desc:"A modern furnished flat in a convenient Noida location with everyday facilities nearby."},
 {id:3,name:"Affordable Student Hostel",type:"Hostel",location:"Laxmi Nagar, Delhi",price:5500,rating:4.5,img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",amenities:["Meals","Wi-Fi","Security"],desc:"Budget-friendly hostel accommodation designed for students and first-time movers."},
 {id:4,name:"Peaceful Furnished Room",type:"Room",location:"Indirapuram, Ghaziabad",price:8000,rating:4.6,img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",amenities:["Furnished","Wi-Fi","Laundry"],desc:"A furnished room in a peaceful locality, suitable for students and working professionals."},
 {id:5,name:"Cozy PG for Working Professionals",type:"PG",location:"Sector 15, Noida",price:9000,rating:4.9,img:"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",amenities:["AC","Housekeeping","Wi-Fi"],desc:"A comfortable PG option for working professionals with useful amenities and good connectivity."},
 {id:6,name:"Budget 1 BHK Apartment",type:"Flat",location:"Preet Vihar, Delhi",price:12000,rating:4.4,img:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",amenities:["Kitchen","Parking","Furnished"],desc:"A practical 1 BHK apartment for someone looking for privacy on a reasonable budget."},
 {id:7,name:"Sunshine Girls PG",type:"PG",location:"South Extension, Delhi",price:11000,rating:4.8,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",amenities:["AC","Meals","Security"],desc:"Safe and hygienic PG exclusively for girls with all modern amenities."},
 {id:8,name:"Luxury 3 BHK Flat",type:"Flat",location:"Cyber City, Gurgaon",price:45000,rating:4.9,img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",amenities:["Gym","Pool","Parking"],desc:"Premium 3 BHK apartment in a gated society, ideal for families and expats."},
 {id:9,name:"Spacious Room for Rent",type:"Room",location:"Koramangala, Bangalore",price:14000,rating:4.5,img:"https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80",amenities:["Attached Bath","Wi-Fi","Balcony"],desc:"Large independent room for rent in a prime location, suitable for bachelors."},
 {id:10,name:"Elite Boys PG",type:"PG",location:"North Campus, Delhi",price:8500,rating:4.3,img:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",amenities:["Wi-Fi","Laundry","Study Table"],desc:"Close to university campus, offering a great study environment for college students."},
 {id:11,name:"Studio Apartment",type:"Flat",location:"Bandra West, Mumbai",price:35000,rating:4.7,img:"https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=900&q=80",amenities:["Furnished","AC","Security"],desc:"A cozy studio apartment perfect for a single working professional."},
 {id:12,name:"Single Room with Balcony",type:"Room",location:"Viman Nagar, Pune",price:9500,rating:4.6,img:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",amenities:["Balcony","Wi-Fi","Cleaning"],desc:"Well-ventilated single room with a scenic balcony view."}
];

window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      splash.style.visibility = 'hidden';
      setTimeout(() => splash.remove(), 800);
    }, 2200);
  }
});

let favorites=[];
let currentResults=properties;
let currentUser = null; // 'customer' or 'admin'
let customerQueries = [
  { name: "Rahul", email: "rahul@test.com", message: "Is the Modern 2 BHK Flat negotiable?" }
];

function updateNav() {
  document.getElementById('navContact').style.display = currentUser === 'admin' ? 'none' : 'inline';
  document.getElementById('navAdd').style.display = currentUser === 'admin' ? 'inline' : 'none';
  document.getElementById('navDashboard').style.display = currentUser === 'admin' ? 'inline' : 'none';
  document.getElementById('navLogin').style.display = currentUser ? 'none' : 'inline';
  document.getElementById('navLogout').style.display = currentUser ? 'inline' : 'none';
}

function logout() {
  currentUser = null;
  updateNav();
  showPage('home');
  const popup = document.getElementById("popup");
  popup.textContent = "Logged out successfully.";
  popup.style.display="block";
  setTimeout(()=>popup.style.display="none",3000);
}

function showPage(page){
 if(page==="home") homePage();
 if(page==="explore") explorePage(properties);
 if(page==="about") aboutPage();
 if(page==="add") {
   if(currentUser === 'admin') addPage();
   else showPage('login');
 }
 if(page==="login") loginPage();
 if(page==="contact") contactPage();
 if(page==="dashboard") dashboardPage();
 window.scrollTo(0,0);
}

function card(p){
 return `<div class="card">
  <div class="card-img" style="background-image:url('${p.img}')"></div>
  <div class="card-body">
   <span class="tag">${p.type}</span>
   <h3>${p.name}</h3>
   <div class="location">📍 ${p.location}</div>
   <div class="price">₹${p.price.toLocaleString()} <small>/ month · ⭐ ${p.rating}</small></div>
   <button onclick="details(${p.id})">View details</button>
  </div>
 </div>`;
}

function homePage(){
 document.getElementById("app").innerHTML=`
 <section class="hero">
  <div class="hero-content">
   <div class="eyebrow">Before You Move</div>
   <h1>Find a place that feels <span>right.</span></h1>
   <p>B4Umove helps students and working professionals discover rooms, PGs, hostels and flats before they move to a new locality.</p>
   <div class="search-box">
    <input id="homeSearch" placeholder="Search city, area or property">
    <select id="homeType"><option value="All">Any type</option><option>PG</option><option>Flat</option><option>Hostel</option><option>Room</option></select>
    <button class="primary" onclick="homeSearch()">Search</button>
   </div>
   <div class="hero-stats">
      <span><strong>500+</strong><br>Properties</span>
      <span><strong>10k+</strong><br>Happy Movers</span>
      <span><strong>24/7</strong><br>Support</span>
   </div>
  </div>
  <div class="hero-image">
    <div class="floating-badge badge-1">⭐ Top Rated</div>
    <div class="floating-badge badge-2">🏠 Verified stays</div>
  </div>
 </section>
 
 <section class="section">
  <div class="section-head" style="justify-content:center; text-align:center;">
    <div><div class="eyebrow">Browse by</div><h2>Property Type</h2></div>
  </div>
  <div class="category-grid">
    <div class="cat-card" onclick="document.getElementById('homeType').value='PG'; homeSearch();"><h3>PGs</h3><p>For Students</p></div>
    <div class="cat-card" onclick="document.getElementById('homeType').value='Flat'; homeSearch();"><h3>Flats</h3><p>For Families</p></div>
    <div class="cat-card" onclick="document.getElementById('homeType').value='Hostel'; homeSearch();"><h3>Hostels</h3><p>Budget Friendly</p></div>
    <div class="cat-card" onclick="document.getElementById('homeType').value='Room'; homeSearch();"><h3>Rooms</h3><p>For Professionals</p></div>
  </div>
 </section>

 <section class="section">
  <div class="section-head"><div><div class="eyebrow">Popular stays</div><h2>Good places to start</h2></div><button class="primary" onclick="showPage('explore')">View all</button></div>
  <div class="cards">${properties.slice(0,3).map(card).join("")}</div>
 </section>

 <section class="section trust">
  <div><span class="step-icon">1</span><h3>Simple search</h3><p>Find places using locality, budget and property type.</p></div>
  <div><span class="step-icon">2</span><h3>Compare details</h3><p>See rent, amenities, photos and availability in one place.</p></div>
  <div><span class="step-icon">3</span><h3>Contact owners</h3><p>Reach out directly to the owners to finalize your move.</p></div>
 </section>
 
 <section class="cta-section">
  <h2>Ready to make your move?</h2>
  <p>Join thousands of others who found their perfect place with B4Umove.</p>
  <button class="primary cta-btn" onclick="showPage('explore')">Start Exploring Now</button>
 </section>`;
}

function homeSearch(){
 const q=document.getElementById("homeSearch").value.toLowerCase();
 const type=document.getElementById("homeType").value;
 const results=properties.filter(p=>(type==="All"||p.type===type)&&(!q||p.name.toLowerCase().includes(q)||p.location.toLowerCase().includes(q)));
 explorePage(results);
}

function explorePage(results=properties){
 currentResults=results;
 document.getElementById("app").innerHTML=`
 <section class="section">
  <div class="eyebrow">Explore</div><h2>Find your place</h2><p class="muted">Search and filter accommodation according to your needs.</p>
  <div class="filterbar">
   <input id="search" placeholder="Search locality or property..." oninput="applyFilters()">
   <select id="type" onchange="applyFilters()"><option>All</option><option>PG</option><option>Flat</option><option>Hostel</option><option>Room</option></select>
   <select id="price" onchange="applyFilters()"><option value="25000">Any budget</option><option value="7000">Up to ₹7,000</option><option value="10000">Up to ₹10,000</option><option value="15000">Up to ₹15,000</option><option value="20000">Up to ₹20,000</option></select>
  </div>
  <div id="results" class="cards">${results.length?results.map(card).join(""):'<div class="empty">No properties found. Try another search.</div>'}</div>
 </section>`;
}

function applyFilters(){
 const q=document.getElementById("search").value.toLowerCase();
 const type=document.getElementById("type").value;
 const max=Number(document.getElementById("price").value);
 const results=properties.filter(p=>(!q||p.name.toLowerCase().includes(q)||p.location.toLowerCase().includes(q))&&(type==="All"||p.type===type)&&p.price<=max);
 document.getElementById("results").innerHTML=results.length?results.map(card).join(""):'<div class="empty">No properties found. Try another search.</div>';
}

function details(id){
 const p=properties.find(x=>x.id===id);
 document.getElementById("app").innerHTML=`
 <section class="detail">
  <button onclick="showPage('explore')" class="primary">← Back to listings</button>
  <div class="detail-img" style="background-image:url('${p.img}')"></div>
  <span class="tag">${p.type}</span><h2>${p.name}</h2><p class="location">📍 ${p.location}</p>
  <div class="price">₹${p.price.toLocaleString()} <small>/ month · ⭐ ${p.rating}</small></div>
  <p class="muted">${p.desc}</p>
  <div class="amenities">${p.amenities.map(a=>`<span>${a}</span>`).join("")}</div>
  <button class="primary" onclick="contactOwner()">Contact owner</button>
 </section>`;
}

function contactOwner(){
 const popup=document.getElementById("popup");
 popup.textContent="Thanks! Your enquiry has been sent to the owner.";
 popup.style.display="block";
 setTimeout(()=>popup.style.display="none",3000);
}

function aboutPage(){
 document.getElementById("app").innerHTML=`
 <section class="section"><div class="eyebrow">About B4Umove</div><h2>Move with more confidence.</h2>
 <p class="muted">B4Umove — Before You Move — is a frontend accommodation discovery platform created to make finding a suitable place simpler for students, working professionals and other movers.</p>
 <div class="about-grid">
  <div class="info-box"><h3>Our purpose</h3><p>Bring property type, location, rent, amenities and availability together in one simple interface.</p></div>
  <div class="info-box"><h3>For users</h3><p>Search by locality, filter by property type and budget, then view useful property details.</p></div>
  <div class="info-box"><h3>Future scope</h3><p>Maps, verified listings, reviews, favourites, owner dashboards, enquiries and online booking can be added later.</p></div>
 </div></section>`;
}

function addPage(){
 document.getElementById("app").innerHTML=`
 <section class="section"><div class="eyebrow">For owners</div><h2>Add your listing</h2><p class="muted">Add a new property to B4Umove.</p>
 <form class="form" onsubmit="addListing(event)">
  <label>Property name<input id="listingName" required placeholder="e.g. Comfortable PG near college"></label>
  <label>Location<input id="listingLocation" required placeholder="e.g. Sector 62, Noida"></label>
  <label>Monthly rent (₹)<input id="listingPrice" type="number" required placeholder="8000"></label>
  <label>Property type<select id="listingType"><option>PG</option><option>Room</option><option>Hostel</option><option>Flat</option></select></label>
  <label>Image URL (Optional)<input id="listingImg" placeholder="https://..."></label>
  <label>Description<textarea id="listingDesc" required placeholder="Tell us about the property..." style="width:100%; padding:13px; border:1px solid #ddd8cc; border-radius:9px; outline:none; font-family:inherit; margin-top:5px; resize:vertical; min-height:80px;"></textarea></label>
  <label>Amenities (comma separated)<input id="listingAmenities" placeholder="e.g. Wi-Fi, AC, Parking"></label>
  <button class="primary" type="submit">Submit listing</button>
 </form></section>`;
}

function addListing(e){
 e.preventDefault();
 const name = document.getElementById("listingName").value;
 const location = document.getElementById("listingLocation").value;
 const price = Number(document.getElementById("listingPrice").value);
 const type = document.getElementById("listingType").value;
 let img = document.getElementById("listingImg").value;
 if(!img) img = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"; // Default image
 const desc = document.getElementById("listingDesc").value;
 const amenitiesStr = document.getElementById("listingAmenities").value;
 const amenities = amenitiesStr ? amenitiesStr.split(",").map(a=>a.trim()) : ["Basic Amenities"];
 
 const newId = properties.length ? Math.max(...properties.map(p=>p.id)) + 1 : 1;
 const newProp = { id: newId, name, type, location, price, rating: 5.0, img, amenities, desc };
 properties.push(newProp);
 
 const popup=document.getElementById("popup");
 popup.textContent="Listing added successfully!";
 popup.style.display="block";
 setTimeout(()=>popup.style.display="none",3000);
 e.target.reset();
 
 // Redirect to dashboard if admin, otherwise explore
 setTimeout(() => {
   if (currentUser === 'admin') showPage('dashboard');
   else showPage('explore');
 }, 1500);
}

function loginPage(){
 document.getElementById("app").innerHTML=`
 <section class="section login-section">
  <div class="login-container">
   <div class="login-tabs">
    <button class="tab active" onclick="switchTab('customer')">Customer Login</button>
    <button class="tab" onclick="switchTab('admin')">Admin Login</button>
   </div>
   
   <form id="customerForm" class="form login-form" onsubmit="handleLogin(event, 'customer')">
    <h2>Welcome Back!</h2>
    <p class="muted">Log in to find your perfect place.</p>
    <label>Email Address<input type="email" required placeholder="you@example.com"></label>
    <label>Password<input type="password" required placeholder="••••••••"></label>
    <button class="primary" type="submit">Login</button>
    <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
   </form>

   <form id="adminForm" class="form login-form" style="display:none;" onsubmit="handleLogin(event, 'admin')">
    <h2>Admin Portal</h2>
    <p class="muted">Manage listings and user enquiries.</p>
    <label>Admin ID<input type="text" required placeholder="admin_username"></label>
    <label>Password<input type="password" required placeholder="••••••••"></label>
    <button class="primary" type="submit">Access Dashboard</button>
   </form>
  </div>
 </section>`;
}

function switchTab(type) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  if(type === 'customer') {
    tabs[0].classList.add('active');
    document.getElementById('customerForm').style.display = 'grid';
    document.getElementById('adminForm').style.display = 'none';
  } else {
    tabs[1].classList.add('active');
    document.getElementById('customerForm').style.display = 'none';
    document.getElementById('adminForm').style.display = 'grid';
  }
}

function handleLogin(e, type) {
  e.preventDefault();
  currentUser = type;
  updateNav();
  const popup=document.getElementById("popup");
  popup.textContent = type === 'admin' ? "Logged in as Admin successfully!" : "Logged in successfully!";
  popup.style.display="block";
  setTimeout(()=>popup.style.display="none",3000);
  
  if (type === 'admin') {
    showPage('dashboard');
  } else {
    showPage('home');
  }
}

function dashboardPage() {
  if (currentUser !== 'admin') {
    showPage('home');
    return;
  }
  document.getElementById("app").innerHTML = `
   <section class="section">
    <div class="eyebrow">Admin Panel</div><h2>Dashboard</h2>
    <div class="about-grid">
      <div class="info-box" style="cursor:pointer;" onclick="showPage('add')">
        <h3>➕ Add New Listing</h3>
        <p>Post a new property to the platform.</p>
      </div>
      <div class="info-box">
        <h3>📊 Total Properties</h3>
        <p>${properties.length} active listings</p>
      </div>
    </div>
    
    <h3 style="margin-top: 40px; margin-bottom: 20px;">Customer Queries</h3>
    <div class="cards" style="grid-template-columns: 1fr;">
      ${customerQueries.length ? customerQueries.map(q => `
        <div class="card" style="padding: 20px;">
          <h4>${q.name} <small class="muted">(${q.email})</small></h4>
          <p style="margin-top: 10px;">"${q.message}"</p>
        </div>
      `).join('') : '<p>No queries yet.</p>'}
    </div>
   </section>
  `;
}

function contactPage() {
  document.getElementById("app").innerHTML = `
 <section class="section"><div class="eyebrow">Get in touch</div><h2>Contact Admin</h2>
 <p class="muted">Have a question or looking for something specific? Drop us a message.</p>
 <form class="form" onsubmit="submitQuery(event)">
  <label>Your Name<input id="queryName" required placeholder="John Doe"></label>
  <label>Email Address<input id="queryEmail" type="email" required placeholder="john@example.com"></label>
  <label>Message<textarea id="queryMessage" required placeholder="I am looking for a 3BHK..." style="width:100%; padding:13px; border:1px solid #ddd8cc; border-radius:9px; outline:none; font-family:inherit; margin-top:5px; resize:vertical; min-height:100px;"></textarea></label>
  <button class="primary" type="submit">Send Message</button>
 </form></section>`;
}

function submitQuery(e) {
  e.preventDefault();
  const name = document.getElementById('queryName').value;
  const email = document.getElementById('queryEmail').value;
  const message = document.getElementById('queryMessage').value;
  
  customerQueries.push({name, email, message});
  
  const popup=document.getElementById("popup");
  popup.textContent="Query sent to Admin successfully!";
  popup.style.display="block";
  setTimeout(()=>popup.style.display="none",3000);
  e.target.reset();
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Parallax effect for background particles
window.addEventListener('scroll', () => {
  const particles = document.querySelector('.bg-particles');
  if (particles) {
    const scrollY = window.scrollY;
    // Moves the particles down slightly as you scroll down
    particles.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

homePage();
