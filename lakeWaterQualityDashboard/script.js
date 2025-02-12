document.getElementById('reportsNav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('reportsPanel').classList.remove('hidden');
    });
    document.getElementById('alertsNav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('alertsPanel').classList.remove('hidden');
    });
    document.getElementById('settingsNav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('settingsPanel').classList.remove('hidden');
    });
    document.querySelectorAll('.closePanel').forEach(button => {
    button.addEventListener('click', function() {
    this.closest('.fixed').classList.add('hidden');
    });
    });
    document.querySelectorAll('.fixed').forEach(panel => {
    panel.addEventListener('click', function(e) {
    if (e.target === this) {
    this.classList.add('hidden');
    }
    });
    });
    function updateDateTime() {
    const now = new Date();
    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
    document.getElementById('lastUpdated').textContent = now.toLocaleTimeString('en-US');
    }
    updateDateTime();
    setInterval(updateDateTime, 60000);
    let isSignedIn = false;
    function updateDropdownVisibility() {
    const userDropdown = document.getElementById('userDropdown');
    const userSignedInDropdown = document.getElementById('userSignedInDropdown');
    if (isSignedIn) {
    userDropdown.classList.add('hidden');
    userSignedInDropdown.classList.remove('hidden');
    } else {
    userDropdown.classList.remove('hidden');
    userSignedInDropdown.classList.add('hidden');
    }
    }
    document.getElementById('userProfileDropdown').addEventListener('click', function() {
    const activeDropdown = isSignedIn ?
    document.getElementById('userSignedInDropdown') :
    document.getElementById('userDropdown');
    activeDropdown.classList.toggle('active');
    });
    document.addEventListener('click', function(event) {
    if (!event.target.closest('#userProfileDropdown')) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.classList.remove('active');
    });
    }
    });
    document.getElementById('signInMenuBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showModal(signInModal);
    document.getElementById('userDropdown').classList.remove('active');
    });
    document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    isSignedIn = true;
    updateDropdownVisibility();
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
    successModal.innerHTML = `
    <div class="relative p-5 border w-80 shadow-lg rounded-md bg-white text-center">
    <div class="w-12 h-12 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
    <i class="ri-check-line text-2xl text-green-500"></i>
    </div>
    <h3 class="text-lg font-medium text-gray-900 mb-2">Sign In Successful</h3>
    <p class="text-sm text-gray-500 mb-4">Welcome back!</p>
    <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium w-full closeSuccess">Continue</button>
    </div>
    `;
    document.body.appendChild(successModal);
    successModal.querySelector('.closeSuccess').addEventListener('click', () => {
    document.body.removeChild(successModal);
    signInModal.classList.add('hidden');
    });
    successModal.addEventListener('click', function(e) {
    if (e.target === this) {
    document.body.removeChild(successModal);
    signInModal.classList.add('hidden');
    }
    });
    });
    document.getElementById('signOutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const confirmModal = document.createElement('div');
    confirmModal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
    confirmModal.innerHTML = `
    <div class="relative p-5 border w-80 shadow-lg rounded-md bg-white">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Sign Out</h3>
    <p class="text-sm text-gray-500 mb-4">Are you sure you want to sign out?</p>
    <div class="flex justify-end space-x-2">
    <button class="!rounded-button px-4 py-2 bg-white border border-gray-300 text-sm font-medium cancelSignOut">Cancel</button>
    <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium confirmSignOut">Sign Out</button>
    </div>
    </div>
    `;
    document.body.appendChild(confirmModal);
    confirmModal.querySelector('.cancelSignOut').addEventListener('click', () => {
    document.body.removeChild(confirmModal);
    });
    confirmModal.querySelector('.confirmSignOut').addEventListener('click', () => {
    isSignedIn = false;
    updateDropdownVisibility();
    document.body.removeChild(confirmModal);
    document.getElementById('userSignedInDropdown').classList.remove('active');
    });
    confirmModal.addEventListener('click', function(e) {
    if (e.target === this) {
    document.body.removeChild(confirmModal);
    }
    });
    });
    updateDropdownVisibility();
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    const signOutBtn = document.getElementById('signOutBtn');
    const showSignUpBtn = document.getElementById('showSignUpBtn');
    const showSignInBtn = document.getElementById('showSignInBtn');
    // Add z-index management
    function showModal(modal) {
    // Hide all other modals first
    document.querySelectorAll('.fixed').forEach(el => {
    el.classList.add('hidden');
    });
    // Show the requested modal with higher z-index
    modal.classList.remove('hidden');
    modal.style.zIndex = '9999';
    }
    document.querySelectorAll('.closeModal').forEach(button => {
    button.addEventListener('click', function() {
    signInModal.classList.add('hidden');
    signUpModal.classList.add('hidden');
    });
    });
    [signInModal, signUpModal].forEach(modal => {
    modal.addEventListener('click', function(e) {
    if (e.target === this) {
    this.classList.add('hidden');
    }
    });
    });
    showSignUpBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showModal(signUpModal);
    });
    showSignInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showModal(signInModal);
    });
    signOutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.dropdown').forEach(el => el.classList.remove('active'));
    showModal(signInModal);
    });
    showSignUpBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signInModal.classList.add('hidden');
    signUpModal.classList.remove('hidden');
    });
    showSignInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signUpModal.classList.add('hidden');
    signInModal.classList.remove('hidden');
    });
    signOutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const confirmModal = document.createElement('div');
    confirmModal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
    confirmModal.innerHTML = `
    <div class="relative p-5 border w-80 shadow-lg rounded-md bg-white">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Sign Out</h3>
    <p class="text-sm text-gray-500 mb-4">Are you sure you want to sign out?</p>
    <div class="flex justify-end space-x-2">
    <button class="!rounded-button px-4 py-2 bg-white border border-gray-300 text-sm font-medium cancelSignOut">Cancel</button>
    <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium confirmSignOut">Sign Out</button>
    </div>
    </div>
    `;
    document.body.appendChild(confirmModal);
    confirmModal.querySelector('.cancelSignOut').addEventListener('click', () => {
    document.body.removeChild(confirmModal);
    });
    confirmModal.querySelector('.confirmSignOut').addEventListener('click', () => {
    document.body.removeChild(confirmModal);
    signInModal.classList.remove('hidden');
    });
    confirmModal.addEventListener('click', function(e) {
    if (e.target === this) {
    document.body.removeChild(confirmModal);
    }
    });
    });
    document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
    successModal.innerHTML = `
    <div class="relative p-5 border w-80 shadow-lg rounded-md bg-white text-center">
    <div class="w-12 h-12 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
    <i class="ri-check-line text-2xl text-green-500"></i>
    </div>
    <h3 class="text-lg font-medium text-gray-900 mb-2">Sign In Successful</h3>
    <p class="text-sm text-gray-500 mb-4">Welcome back!</p>
    <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium w-full closeSuccess">Continue</button>
    </div>
    `;
    document.body.appendChild(successModal);
    successModal.querySelector('.closeSuccess').addEventListener('click', () => {
    document.body.removeChild(successModal);
    signInModal.classList.add('hidden');
    });
    successModal.addEventListener('click', function(e) {
    if (e.target === this) {
    document.body.removeChild(successModal);
    signInModal.classList.add('hidden');
    }
    });
    });
    document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
    successModal.innerHTML = `
    <div class="relative p-5 border w-80 shadow-lg rounded-md bg-white text-center">
    <div class="w-12 h-12 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
    <i class="ri-check-line text-2xl text-green-500"></i>
    </div>
    <h3 class="text-lg font-medium text-gray-900 mb-2">Sign Up Successful</h3>
    <p class="text-sm text-gray-500 mb-4">Your account has been created successfully!</p>
    <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium w-full closeSuccess">Continue</button>
    </div>
    `;
    document.body.appendChild(successModal);
    successModal.querySelector('.closeSuccess').addEventListener('click', () => {
    document.body.removeChild(successModal);
    signUpModal.classList.add('hidden');
    });
    successModal.addEventListener('click', function(e) {
    if (e.target === this) {
    document.body.removeChild(successModal);
    signUpModal.classList.add('hidden');
    }
    });
    });
    const tempChart = echarts.init(document.getElementById('tempChart'));
    const oxygenChart = echarts.init(document.getElementById('oxygenChart'));
    const trendChart = echarts.init(document.getElementById('trendChart'));
    const distributionChart = echarts.init(document.getElementById('distributionChart'));
    const tempOption = {
    animation: false,
    grid: { top: 0, right: 0, bottom: 0, left: 0 },
    xAxis: { show: false, type: 'category', data: Array.from({length: 24}, (_, i) => i) },
    yAxis: { show: false, type: 'value' },
    series: [{
    data: Array.from({length: 24}, () => Math.random() * 5 + 20),
    type: 'line',
    smooth: true,
    symbol: 'none',
    lineStyle: { color: '#57B5E7' },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(87, 181, 231, 0.3)'
    }, {
    offset: 1,
    color: 'rgba(87, 181, 231, 0.1)'
    }])
    }
    }]
    };
    const oxygenOption = {
    animation: false,
    grid: { top: 0, right: 0, bottom: 0, left: 0 },
    xAxis: { show: false, type: 'category', data: Array.from({length: 24}, (_, i) => i) },
    yAxis: { show: false, type: 'value' },
    series: [{
    data: Array.from({length: 24}, () => Math.random() * 2 + 7),
    type: 'line',
    smooth: true,
    symbol: 'none',
    lineStyle: { color: '#8DD3C7' },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(141, 211, 199, 0.3)'
    }, {
    offset: 1,
    color: 'rgba(141, 211, 199, 0.1)'
    }])
    }
    }]
    };
    const trendOption = {
    animation: false,
    tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#E5E7EB',
    textStyle: { color: '#1F2937' }
    },
    legend: {
    data: ['pH', 'Temperature', 'Dissolved Oxygen'],
    bottom: 0
    },
    grid: { left: '3%', right: '4%', bottom: '10%', top: '3%', containLabel: true },
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: { type: 'value' },
    series: [{
    name: 'pH',
    type: 'line',
    smooth: true,
    symbol: 'none',
    data: [7.2, 7.1, 7.3, 7.2, 7.4, 7.3, 7.2],
    lineStyle: { color: '#57B5E7' },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(87, 181, 231, 0.3)'
    }, {
    offset: 1,
    color: 'rgba(87, 181, 231, 0.1)'
    }])
    }
    }, {
    name: 'Temperature',
    type: 'line',
    smooth: true,
    symbol: 'none',
    data: [23, 24, 23.5, 22, 23, 24, 23.5],
    lineStyle: { color: '#8DD3C7' },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(141, 211, 199, 0.3)'
    }, {
    offset: 1,
    color: 'rgba(141, 211, 199, 0.1)'
    }])
    }
    }, {
    name: 'Dissolved Oxygen',
    type: 'line',
    smooth: true,
    symbol: 'none',
    data: [8.4, 8.2, 8.5, 8.3, 8.6, 8.4, 8.5],
    lineStyle: { color: '#FBBF72' },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(251, 191, 114, 0.3)'
    }, {
    offset: 1,
    color: 'rgba(251, 191, 114, 0.1)'
    }])
    }
    }]
    };
    const distributionOption = {
    animation: false,
    tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#E5E7EB',
    textStyle: { color: '#1F2937' }
    },
    legend: {
    orient: 'vertical',
    right: 10,
    top: 'center'
    },
    series: [{
    name: 'Distribution',
    type: 'pie',
    radius: ['40%', '70%'],
    center: ['40%', '50%'],
    avoidLabelOverlap: false,
    itemStyle: {
    borderRadius: 8
    },
    label: {
    show: false
    },
    data: [
    { value: 35, name: 'Dissolved Oxygen', itemStyle: { color: '#57B5E7' } },
    { value: 25, name: 'pH Level', itemStyle: { color: '#8DD3C7' } },
    { value: 20, name: 'Temperature', itemStyle: { color: '#FBBF72' } },
    { value: 20, name: 'Turbidity', itemStyle: { color: '#FC8D62' } }
    ]
    }]
    };
    tempChart.setOption(tempOption);
    oxygenChart.setOption(oxygenOption);
    trendChart.setOption(trendOption);
    distributionChart.setOption(distributionOption);
    window.addEventListener('resize', function() {
    tempChart.resize();
    oxygenChart.resize();
    trendChart.resize();
    distributionChart.resize();
    });