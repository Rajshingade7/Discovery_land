document.getElementById("header-navigation").innerHTML =
    `<div class="nav-tab" id="nav-tab">
    <div class="left-header" id="left-header">
        <a href="../pages/homepage.html"><img class="logo-img" src="../assets/gallery/logo.png" alt="Discovery Land Company Logo"></a>
    </div>
    <div class="right-header" id="right-header">
        <div class="navigation">
            <a class="menu about-page" href="../pages/about.html">About DLC</a>
        </div>
        <div class="navigation">
            <a class="menu ourworlds-page" href="../pages/our_worlds.html">Our Worlds</a>
        </div>
        <div class="navigation">
            <a class="menu experience-page" href="../pages/experience.html">Experiences</a>
        </div>
        <div class="navigation">
            <a class="menu gallery-page" href="../pages/gallery.html">Gallery</a>
        </div>
        <div class="navigation">
            <a class="menu press-page" href="../pages/press.html">Press</a>
        </div>
        <div class="navigation">
            <button onclick="displayDropdown()" class="dropbtn">
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
            </button>
            <div id="dropdown" class="dropdown-content">
                <a href="../pages/magazine.html">Magazine</a>
                <a href="../pages/company.html">Company</a>
                <a href="../pages/foundation.html">Foundation</a>
                <a href="../pages/careers.html">Careers</a>
                <a href="../pages/contact.html">Contact</a>
            </div>
        </div>
    </div>
</div>`;