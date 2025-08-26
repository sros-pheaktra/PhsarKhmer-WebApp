const headerSection = `
        <section class="hidden md:flex justify-between w-full px-4 md:px-[120px] bg-[#f5f5f5] dark:bg-[#393E46] items-center py-2">
            <div>
                <button id="locationBtn" class="text-[1rem] text-[#21242A] dark:text-gray-100 flex items-center gap-1" type="button">
                    <i class="fa-solid fa-location-dot"></i>
                    <span id="locationText">St 562, Phnom Penh</span>
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
            <div class="flex gap-6 items-center">
                <!-- Language Dropdown -->
                <div class="relative">
                    <button id="languageBtn" class="text-[1rem] text-[#21242A] dark:text-gray-100 flex items-center gap-1">
                        <span id="languageText">English</span>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <div id="languageDropdown" class="absolute right-0 mt-2 bg-white dark:bg-[#31363F] border border-[#e5e5e5] dark:border-[#21242A] rounded-md shadow-lg hidden z-10">
                        <button class="block px-4 py-2 text-left w-full hover:bg-gray-100" data-lang="en">English</button>
                        <button class="block px-4 py-2 text-left w-full hover:bg-gray-100" data-lang="km">ភាសាខ្មែរ</button>
                    </div>
                </div>
                <!-- Currency Dropdown -->
                <div class="relative">
                    <button id="currencyBtn" class="text-[1rem] text-[#21242A] dark:text-gray-100 flex items-center gap-1" type="button">
                        <span id="currencyText">USD $</span>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <div id="currencyDropdown" class="absolute right-0 mt-2 bg-white dark:bg-[#31363F] border border-[#e5e5e5] dark:border-[#21242A] rounded-md shadow-lg hidden z-10">
                        <button class="block px-4 py-2 text-left w-full hover:bg-gray-100" data-currency="usd" type="button">USD $</button>
                        <button class="block px-4 py-2 text-left w-full hover:bg-gray-100" data-currency="riel" type="button">KHR ៛</button>
                    </div>
                </div>
                
                <!-- Dark/Light Mode Toggle -->
                
                <button type="button" id="themeToggle" title="Toggle dark/light mode"
                    class="flex items-center outline-1 outline-[#318D23] dark:outline-[#222831] w-[31px] h-[30px] px-1 rounded-full transition-all duration-300 bg-[#D8FDC9] dark:bg-[#1B4242]">
                    <div id="themeIconWrapper" class="flex justify-start dark:justify-end w-full">
                        <i id="themeIcon" class="fa-solid text-white w-[24px] h-[24px] bg-[#318D23] dark:bg-[#222831] rounded-full flex items-center justify-center py-1"></i>
                    </div>
                </button>


            </div>
        </section>

        <!-- Nav Section -->
        <nav class="w-full bg-white dark:bg-[#31363F]">
            <div class="flex justify-between items-center px-4 md:px-[120px] py-2">
            <!-- Logo -->
            <a href="./index.html" title="PhsarKhmer Logo">
                <img src="./assets/images/logo/PhsarKhmer_1x2_no_bg.png" alt="PhsarKhmer Logo" class="w-[70px] md:w-[100px] h-auto hover:scale-110 transition-transform">
            </a>
                
                <!-- Mobile Section -->
                <div class="w-full h-[4rem] md:hidden flex justify-end items-center gap-4">
                    <!-- Mobile Search -->
                    <div class="relative flex items-center justify-end gap-x-2">
                        <input id="mobileSearchInput" type="text" placeholder="Search..." 
                            class="hidden w-[14rem] h-[2.5rem] px-4 rounded-full bg-white dark:bg-[#31363F] border border-gray-300 dark:border-gray-600 focus:bg-[#f5f5f5] dark:focus:bg-[#222831] focus:outline-none focus:ring-2 focus:ring-[#318D23] transition-all duration-300">
                        
                        <button id="mobileSearchBtn" class="text-[1rem] text-[#318D23] dark:text-gray-500 hover:text-[#4FB140] dark:hover:text-gray-300 transition-colors" type="button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span class="sr-only">search</span>
                        </button>

                        <!-- Mobile Search Results -->
                        <div id="mobileSearchResults" class="absolute top-12 right-0 w-[300px] bg-white dark:bg-[#1B4242] shadow-lg rounded-lg hidden z-50 max-h-96 overflow-y-auto">
                            <div id="mobileLoadingSpinner" class="hidden p-4 text-center">
                                <i class="fa-solid fa-spinner fa-spin text-[#318D23]"></i>
                                <span class="ml-2 text-gray-600 dark:text-gray-300">Searching...</span>
                            </div>
                            <ul id="mobileResultsList" class="divide-y divide-gray-200 dark:divide-gray-600"></ul>
                            <div id="mobileNoResults" class="hidden p-4 text-center text-gray-500 dark:text-gray-400">
                                No results found
                            </div>
                        </div>
                    </div>
                    
                    <!-- Burger Icon for Mobile -->
                    <button id="menu-toggle" class="block md:hidden text-[1.2rem] text-[#318D23] dark:text-gray-500 hover:text-[#4FB140] dark:hover:text-gray-300 transition-colors" type="button">
                        <i class="fas fa-bars"></i>
                        <span class="sr-only">bars</span>
                    </button>
                </div>

                <!-- Desktop Search -->
                <div class="hidden md:flex items-center gap-6">
                    <div class="relative">
                        <input id="desktopSearchInput" type="text" placeholder="Search..." 
                            class="md:w-[360px] 2xl:w-[480px] pl-4 pr-12 py-2 bg-white dark:bg-[#31363F] rounded-full border border-gray-300 dark:border-gray-600 outline-none placeholder:text-[#545454] focus:bg-[#f5f5f5] dark:focus:bg-[#222831] focus:ring-2 focus:ring-[#318D23] transition-all duration-300">
                        
                        <button id="desktopSearchBtn" type="button" class="absolute right-0 top-0 h-full px-4 text-white bg-[#318D23] dark:bg-[#222831] rounded-r-full hover:bg-[#4FB140] dark:hover:bg-[#1B4242] transition-colors">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span class="sr-only">search</span>
                        </button>

                        <!-- Desktop Search Results -->
                        <div id="desktopSearchResults" class="absolute top-12 left-0 w-full bg-white dark:bg-[#1B4242] shadow-lg rounded-lg hidden z-50 max-h-96 overflow-y-auto">
                            <div id="desktopLoadingSpinner" class="hidden p-4 text-center">
                                <i class="fa-solid fa-spinner fa-spin text-[#318D23]"></i>
                                <span class="ml-2 text-gray-600 dark:text-gray-300">Searching...</span>
                            </div>
                            <ul id="desktopResultsList" class="divide-y divide-gray-200 dark:divide-gray-600"></ul>
                            <div id="desktopNoResults" class="hidden p-4 text-center text-gray-500 dark:text-gray-400">
                                No results found
                            </div>
                        </div>
                    </div>
                </div>
                

                <!-- Desktop Icons -->
                <div class="hidden md:flex gap-6 text-[1.5rem] text-[#318D23] dark:text-gray-500">
                    <a href="./user/buying_list.html" class="transition-transform duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]">
                        <i class="fa-solid fa-clipboard-list"></i>
                        <span class="sr-only">buying list</span>
                    </a>
                    <a href="./user/cart.html" class="transition-transform relative duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="sr-only">cart</span>
                        <span id="order" class="absolute text-[0.7rem] w-[1rem] h-[1rem] text-center bg-red-500 text-white rounded-full top-0 left-4">0</span>
                    </a>
                    <a href="./authentication/log_in.html" class="transition-transform duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]">
                        <i class="fa-solid fa-user"></i>
                        <span class="sr-only">user</span>
                    </a>
                </div>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden md:flex justify-between items-center bg-[#D8FDC9] dark:bg-[#1B4242] py-2 px-4 w-full md:px-[120px] text-[#21242A] dark:text-gray-100">
                <div class="inline-block mx-4 text-[1rem] font-semibold relative">
                    <button id="categoryButton" class="focus:outline-none flex justify-between min-w-[300px] text-[1.2rem] items-center gap-1 px-8 py-2 bg-[#318D23] dark:bg-[#222831] rounded-md text-white cursor-pointer" type="button"><i class="fa-solid fa-bars"></i>
                        Category<i class="fa-solid fa-angle-down"></i>
                    </button>
                    <!-- Main Dropdown Menu -->
                    <ul id="categoryMenu" class="absolute left-0 top-full min-w-[300px] bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-10 hidden">
                        <!-- Category Item with Toggleable Subcategory -->
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer">
                                <a href="./category/bakery.html">Bakery</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('bakerySub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="bakerySub" group class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t grou- border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=519cde83-d8b2-4025-a816-62f07cb41d3b" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Biscuits, Cookies, and Cracker</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=da5b1e7e-f064-4d51-a746-a05cf8f270d0" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Breads</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=10e8c9dd-6efa-401a-a351-021fd7bc7155" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Cakes</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/beverages.html">Beverages</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('beveragesSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="beveragesSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=f406cd15-e164-4dc0-94d0-0074f777368c" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Energy dirnks</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=9e9d40a5-065b-404f-b798-b8c7e1c40970" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fruit Juices</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=34d0ce88-35c4-4558-a76e-fd423f9fde80" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Milk</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=b74e1cee-94f1-4e7b-84d2-d33f3ebaba5f" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Powdered Dirnk Mixed</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=af999862-cd27-4304-b226-20591867b371" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Soft Drinks</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=f4a8c781-8ee9-4289-abac-0f08774d2876" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Tea</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=928a9508-58d6-4bfa-8154-6a1420f49151" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Water</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/butchery/butchery.html">Butcheries</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('butcherySub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="butcherySub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=8e4063cf-ecff-409d-909e-c9ce4a93d2e7" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Beef</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=22ba85df-1cad-4b3b-9ed8-8c6e8b725dd4" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Chicken</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=34fe47b2-3e58-4145-b272-c2d4f3416f63" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pork</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=98052e65-6232-43b3-8116-dc142a529ebc" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Other meats</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/dry-groceries/dry-groceries.html">Dry Groceries</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('dryGroceriesSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="dryGroceriesSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=e1d103c3-1b59-4442-acef-e492f574d406" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Caned Foods</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=8a76651c-d725-4572-873b-23a64e0733b8" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Flours</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=d639a81e-992b-44ee-a367-98da33294504" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Rice</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/fish-and-seafood/fish-and-seafood.html">Fish and Seafood</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('fishAndSeafoodSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="fishAndSeafoodSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=8eb431d1-8a70-472b-81d6-890d3adac4ba" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fish</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=6286aecd-fdf8-4fae-bb71-a5dc0bb7a23d" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Seafood</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/frozen-food/frozen-food.html">Frozen Foods</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('frozenFoodSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="frozenFoodSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=c4b08fed-d8c2-45f7-897d-40aaf6cad5d7" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Meats</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=8363510f-0a95-44fa-a0c7-e4a5c7aa5f80" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Fish and Seafood</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=871cf50a-a27e-4d09-8197-fd4f43d62a5e" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Processed Foods</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/fruits-and-vegetabels/fruits-and-vegetables.html">Fruits and Vegetables</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('frutisAndVegetablesSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="frutisAndVegetablesSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=36c0b0cb-de64-49de-9e0f-92146fba5276" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fruits</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=9699e66b-3a31-48f5-a294-7954929646ce" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Vegetables</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/households/households.html">Households</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('householdsSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="householdsSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=bef3a1ae-8379-405f-9298-53338c6b81e3" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Bed and Bathroom Acessories</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=821d31c0-4f11-4dbf-b115-d8122bade9c5" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Drink and Food Container</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=c6c20b96-8bb7-437c-866c-01c0a81b3e10" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Furniture</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./category/office-supplies-stationary-and-books/office-supplies-stationary-and-books.html">Books, Stationaries, and Office Supplies</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('bookStationaryOfficeSupplySub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="bookStationaryOfficeSupplySub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=e1db62b3-c7b8-4016-b1cb-e0dc5b7afba7" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Books</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/office-supplies-stationary-and-books/office-accessories.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Office Accesories</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/office-supplies-stationary-and-books/stationaries.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Stationaries</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./category/personal-care-product/personal-care-products.html">Personal Care Products</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('personalCareProductSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="personalCareProductSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/personal-care-product/facial-care.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Facial Care</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=9555fa8f-3ef8-4634-b999-1cd8e55bdad6" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Hair Care</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=bb9f861b-d591-4e68-91fb-90ea04ed29f3" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Medical Supplies</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=87e39650-e33b-4528-9eb5-a48c04aa4398" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Oral Care</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=4a544bdd-1715-4436-bfc0-c7bd048a6ed7" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Skin Care</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./category/pet-foods-and-pet-care/pet-food-and-pet-care.html">Pet Foods and Pet Care</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('petFoodAndCareSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="petFoodAndCareSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=d812923d-3358-41b0-8cb7-e841c718763a" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pet Accesories</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=67513cd8-34ad-453d-ad85-4a8e786444a0" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pet Foods</a></li>
                                
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./category/processed-foods/dairy-products.html">Processed Foods</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('processedFoodSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="processedFoodSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=f4c186f2-7c18-4cbf-9c1b-74ba1a4e2187" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Dairy Products</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/dried-meat.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Dried Meats</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/meatballs.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Meatballs</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/noodles.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Noodles</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/processed-meats.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Processed Meats</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/sausage.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Sausages</a></li>
                                
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./category/seasoning-and-dipping-sauce/seasoning-and-dipping-sause.html">Seasoning and Dipping Sauce</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('seasoningAndDippingSauceSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="seasoningAndDippingSauceSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=ed697bcb-1a92-42b1-90d2-2aafe3e032e6" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Dipping Sauce</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=6286aecd-fdf8-4fae-bb71-a5dc0bb7a23d" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Seasoning</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/seasoning-and-dipping-sauce/spices.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Spices</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a class="line-clamp-1" href="./snacks/snacks.html">Snacks</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('snackSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="snackSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./snacks/chips.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Chips</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./snacks/crackers.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Crackers</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./snacks/nuts-and-seed.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Nuts and Seeds</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul class="flex gap-6 font-semibold text-[#21242A] dark:text-gray-100 text-[1.2rem]">
                    <li><a href="./index.html" class="hover:underline">Home</a></li>
                    <li><a href="./promotion.html" class="hover:underline">Promotion</a></li>
                    <li><a href="./brand.html" class="hover:underline">Brand</a></li>
                </ul>
                <ul class="flex gap-6 font-semibold text-[#21242A] dark:text-gray-100 text-[1.2rem]">
                    <li><a href="./company/about.html" class="hover:underline">About Us</a></li>
                    <li><a href="./company/contact.html" class="hover:underline">Contact Us</a></li>
                </ul>
           </div>
           
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden fixed top-0 right-0 h-full w-2/3 max-w-md bg-white dark:bg-[#31363F] shadow-lg z-50 overflow-y-auto">
            
                <div class="flex justify-between items-center p-4 border-b border-[#e5e5e5] dark:border-[#21242A]">
                    <h3 class="text-lg font-semibold text-[#318D23] dark:text-gray-500">Menu</h3>
                    <button id="menu-close" class="text-2xl text-[#318D23] dark:text-gray-500">
                        <i class="fas fa-times"></i><span class="sr-only">close</span>
                    </button>
                </div>

                <!-- Categories Dropdown -->
                <div class="mb-4">
                    <button type="button" class="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 font-semibold text-left" onclick="toggleMobileCategory()">
                        <span>Categories</span>
                        <i class="fas fa-angle-down" id="mobile-category-icon"></i>
                    </button>
                    <div id="mobile-category-menu" class="hidden pl-4 mt-2 border-l-2 border-[#318D23]">
                        <!-- Bakery -->
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-bakery')">
                                <a href="bakery.html" class="flex-1">Bakery</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-bakery" class="hidden pl-4 mt-1">
                                <a href="biscuits-cookies-cracker.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Biscuits, Cookies, and Cracker</a>
                                <a href="breads.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Breads</a>
                                <a href="cakes.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Cakes</a>
                            </div>
                        </div>
                        
                        <!-- Beverages -->
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-beverages')">
                                <a href="./category/beverages/beverages.html" class="flex-1">Beverages</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-beverages" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=b74e1cee-94f1-4e7b-84d2-d33f3ebaba5f" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Energy drinks</a>
                                <a href="./category/beverages/fruit-juice.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fruit Juices</a>
                                <a href="./category/beverages/milk.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Milk</a>
                                <a href="./category/beverages/powdered-drink-mixed.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Powdered Drink Mixed</a>
                                <a href="./category.html?categoryId=af999862-cd27-4304-b226-20591867b371" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Soft Drinks</a>
                                <a href="./category.html?categoryId=f4a8c781-8ee9-4289-abac-0f08774d2876" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Tea</a>
                                <a href="./category/beverages/water.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Water</a>
                            </div>
                        </div>
                        
                        <!-- Butcheries -->
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-butchery')">
                                <a href="./category/butchery/butchery.html" class="flex-1">Butcheries</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-butchery" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=8e4063cf-ecff-409d-909e-c9ce4a93d2e7" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Beef</a>
                                <a href="./category.html?categoryId=22ba85df-1cad-4b3b-9ed8-8c6e8b725dd4" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Chicken</a>
                                <a href="./category.html?categoryId=34fe47b2-3e58-4145-b272-c2d4f3416f63" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Pork</a>
                                <a href="./category.html?categoryId=98052e65-6232-43b3-8116-dc142a529ebc" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Other meats</a>
                            </div>
                        </div>
                        
                        <!-- Add other categories following the same pattern -->
                        <!-- Dry Groceries -->
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-dry-groceries')">
                                <a href="./category/dry-groceries/dry-groceries.html" class="flex-1">Dry Groceries</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-dry-groceries" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=e1d103c3-1b59-4442-acef-e492f574d406" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Caned Foods</a>
                                <a href="./category.html?categoryId=8a76651c-d725-4572-873b-23a64e0733b8" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Flours</a>
                                <a href="./category.html?categoryId=d639a81e-992b-44ee-a367-98da33294504" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Rice</a>
                            </div>
                        </div>
                        
                        <!-- Continue with other categories... -->
                        <!-- Fish and Seafood -->
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-fish-seafood')">
                                <a href="./category/fish-and-seafood/fish-and-seafood.html" class="flex-1">Fish and Seafood</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-fish-seafood" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=8eb431d1-8a70-472b-81d6-890d3adac4ba" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fish</a>
                                <a href="./category.html?categoryId=6286aecd-fdf8-4fae-bb71-a5dc0bb7a23d" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Seafood</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-frozen-food')">
                                <a href="./category/frozen-food.html" class="flex-1">Frozen Foods</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-frozen-food" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=c4b08fed-d8c2-45f7-897d-40aaf6cad5d7" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Meats</a>
                                <a href="./category.html?categoryId=8363510f-0a95-44fa-a0c7-e4a5c7aa5f80" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Fish and Seafood</a>
                                <a href="./category.html?categoryId=871cf50a-a27e-4d09-8197-fd4f43d62a5e" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Processed Foods</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-fruit-vegetable')">
                                <a href="./category/fruits-and-vegetabels/fruits-and-vegetables.html" class="flex-1">Fruits and Vegetables</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-fruit-vegetable" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=36c0b0cb-de64-49de-9e0f-92146fba5276" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fruits</a>
                                <a href="./category.html?categoryId=9699e66b-3a31-48f5-a294-7954929646ce" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Vegetables</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-households')">
                                <a href="./category/households/households.html" class="flex-1">Households</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-households" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=bef3a1ae-8379-405f-9298-53338c6b81e3" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Bed and Bathroom Accessories</a>
                                <a href="./category.html?categoryId=821d31c0-4f11-4dbf-b115-d8122bade9c5" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Drink and Food Container</a>
                                <a href="./category.html?categoryId=c6c20b96-8bb7-437c-866c-01c0a81b3e10" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Furnitures</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-books')">
                                <a href="./category/office-supplies-stationary-and-books/office-supplies-stationary-and-books.html" class="flex-1 line-clamp-1">Books, Stationaries, and Office Supplies</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-books" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=e1db62b3-c7b8-4016-b1cb-e0dc5b7afba7" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Books</a>
                                <a href="./category.html?categoryId=a6a14823-adf6-455b-9b7e-765fb81117d1" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Office Supplies</a>
                                <a href="./category.html?categoryId=4619f943-3cc4-4100-b57b-b12d8868b433" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Stationaries</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-personal-care')">
                                <a href="./category/personal-care-product/personal-care-products.html" class="flex-1 line-clamp-1">Personal Care Products</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-personal-care" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=0d10d032-2759-474f-8818-80e8d10f655b" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Facial Care</a>
                                <a href="./category.html?categoryId=9555fa8f-3ef8-4634-b999-1cd8e55bdad6" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Hair Care</a>
                                <a href="./category.html?categoryId=bb9f861b-d591-4e68-91fb-90ea04ed29f3" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Medical Supplies</a>
                                <a href="./category.html?categoryId=87e39650-e33b-4528-9eb5-a48c04aa4398" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Oral Care</a>
                                <a href="./category.html?categoryId=4a544bdd-1715-4436-bfc0-c7bd048a6ed7" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Skin Care</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-pet')">
                                <a href="./category/pet-foods-and-pet-care/pet-food-and-pet-care.html" class="flex-1 line-clamp-1">Pet Foods and Pet Care</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-pet" class="hidden pl-4 mt-1">
                                <a href="./category.html?categoryId=d812923d-3358-41b0-8cb7-e841c718763a" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Pet Accessories</a>
                                <a href="./category.html?categoryId=67513cd8-34ad-453d-ad85-4a8e786444a0" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Pet Foods</a> 
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-processed-foods')">
                                <a href="./processed-foods/processed-foods.html" class="flex-1 line-clamp-1">Processed Foods</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-processed-foods" class="hidden pl-4 mt-1">
                                <a href="./processed-foods/dairy-products.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Dairy Products</a>
                                <a href="./processed-foods/dried-meat.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Dried Meats</a>
                                <a href="./processed-foods/meatballs.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Meatballs</a> 
                                <a href="./processed-foods/noodles.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Noodles</a>
                                <a href="./processed-foods/processed-meats.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Processed Meats</a> 
                                <a href="./processed-foods/sausage.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Sausages</a> 
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-seasoning-sauce')">
                                <a href="./category/seasoning-and-dipping-sauce/seasoning-and-dipping-sause.html" class="flex-1 line-clamp-1">Seasonging and Dipping Sauce</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-seasoning-sauce" class="hidden pl-4 mt-1">
                                <a href="./category/seasoning-and-dipping-sauce/seasoning-and-dipping-sause.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Dipping Sauce</a>
                                <a href="./category/seasoning-and-dipping-sauce/seasoning.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Seasoning</a> 
                                <a href="./category/seasoning-and-dipping-sauce/spices.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Spices</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-snack')">
                                <a href="./snacks/snacks.html" class="flex-1 line-clamp-1">Snacks</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-snack" class="hidden pl-4 mt-1">
                                <a href="./snacks/chips.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Chips</a>
                                <a href="./snacks/crackers.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Crackers</a> 
                                <a href="./snacks/nuts-and-seed.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Nuts and Seeds</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr class="my-2 border-[#e5e5e5] dark:border-[#21242A]">
                <div class="p-4">
                    <div class="flex flex-col gap-2 mb-4">
                        <a href="./index.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Home</a>
                        <a href="./promotion.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Promotion</a>
                        <a href="./brand.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Shop</a>
                        <a href="./company/about.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">About Us</a>
                        <a href="./company/contact.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Contact Us</a>
                    </div>
                    
                    <hr class="my-2 border-[#e5e5e5] dark:border-[#21242A]">
                    
                    <div class="flex flex-col gap-2 mb-4">
                        <a href="./user/buying_list.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-clipboard-list"></i> Buying List</a>
                        <a href="./user/cart.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
                        <a href="./authentication/log_in.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-user"></i> Account</a>
                    </div>
                </div>
            </div>
        </nav>`;

    document.getElementById("headerSection").innerHTML = headerSection;
    
    // footer
    const footerSection = `<section class="flex flex-col md:flex-row md:justify-between w-full gap-8 md:gap-0 text-[#21242A] dark:text-gray-100">
            <!-- Organize by -->
            <div class="w-full flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="font-semibold text-[1rem] md:text-[20px] mb-2">Organized by</h3>
                <a href="https://www.cstad.edu.kh/"><img src="./assets/images/logo/ISTAD_logo.jpg" alt="ISTAD logo" class="rounded-full w-[60px] md:w-[120px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                <span class="text-[14px] text-[#545454] md:text-[1rem]">Institute of Science and Technology Advanced Development - ISTAD </span>
            </div>
            <!-- G2 E-commerce -->
            <div class="w-full flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="font-semibold text-[1rem] md:text-[20px] mb-2">G1 E-commerce</h3>
                <a href="./index.html"><img src="./assets/images/logo/PhsarKhmer_4x4.jpg" alt="PhsarKhmer logo" class="rounded-full w-[60px] md:w-[120px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                <span class="text-[14px] text-[#545454]">PhsarKhmer</span>
            </div>
            <!-- Quick Link -->
            <div class="w-full flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="text-[20px] font-semibold text-[#21242A] dark:text-gray-100 mb-2">Quick Links</h3>
                <a href="./index.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Home</a>
                <a href="./categories.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Category</a>
                <a href="./brand.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454]">Shop</a>
            </div>
            <!-- Account & Shipping Info -->
            <div class="w-full flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="text-[20px] font-semibold text-[#21242A] dark:text-gray-100 mb-2">
                    <a href="./user/profile.html" class="hover:underline underline-offset-4 transition-all duration-300 ease-in-out">Account & Shipping Info</a>
                </h3>
                <a href="./user/profile.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Profile Info</a>
                <a href="./user/buying_list.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Buying list</a>
                <a href="./user/cart.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Cart</a>
                <a href="./user/order.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Order</a>
                <a href="./user/become_a_seller.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454]">Become a Seller</a>
            </div>
            <!-- Company -->
            <div class="w-full flex flex-col items-center text-center">
                <h3 class="text-[20px] font-semibold text-[#21242A] dark:text-gray-100 mb-2">
                    Company
                </h3>
                <a href="./company/about.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">About Us</a>
                <a href="./company/contact.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Contact Us</a>
                <a href="./company/faq.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">FAQs</a>
                <a href="./company/terms_&_conditions.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454]">Terms and Conditions</a>
                <a href="./company/privacy_policy.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454]">Privacy Policy</a>
            </div>
            <!-- Connection -->
            <div class="w-full flex flex-col items-center text-center">
                <h3 class="text-[20px] font-semibold text-[#21242A] dark:text-gray-100 mb-2">
                    Connect with us
                </h3>
                <div class="flex gap-4 md:gap-6 text-[#545454]">
                    <a href="https://www.facebook.com/srospheaktra756" class="text-[1rem] md:text-[24px] transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#21242A] dark:text-gray-100"><span class="sr-only">Facebook</span><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://t.me/Jukkiiee" class="text-[1rem] md:text-[24px] transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#21242A] dark:text-gray-100"><span class="sr-only">Telegram</span><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://github.com/sros-pheaktra" class="text-[1rem] md:text-[24px] transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#21242A] dark:text-gray-100"><span class="sr-only">GitHub</span><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/pheaktra-sros-6a8ab7373/" class="text-[1rem] md:text-[24px] transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#21242A] dark:text-gray-100"><span class="sr-only">Linkedin</span><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </section>
            <!-- copyright section -->
        <hr class="border-t-[1px] border-[#e5e5e5] dark:border-[#21242A] my-4 md:my-8 w-full">
        <section class="mt-5">
            <p class="text-[12px] md:text-[1rem] text-[#545454] text-center">&copy Copyright PhsarKhmer. All Right Reserved.</p>
        </section>`;

    document.getElementById("footerSection").innerHTML = footerSection;

    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        // Toggle mobile menu
        document.getElementById('menu-toggle')?.addEventListener('click', function() {
            document.getElementById('mobile-menu')?.classList.toggle('hidden');
        });
        
        // Close mobile menu
        document.getElementById('menu-close')?.addEventListener('click', function() {
            document.getElementById('mobile-menu')?.classList.add('hidden');
        });


        // Toggle mobile category menu
        window.toggleMobileCategory = function () {
            const menu = document.getElementById('mobile-category-menu');
            const icon = document.getElementById('mobile-category-icon');
            menu?.classList.toggle('hidden');
            icon?.classList.toggle('fa-angle-down');
            icon?.classList.toggle('fa-angle-up');
        };
        
        // Toggle mobile submenus
        window.toggleMobileSubmenu = function (id) {
            const submenu = document.getElementById(id);
            submenu?.classList.toggle('hidden');
        };

        window.toggleSubmenu = function (id) {
            const submenu = document.getElementById(id);
            submenu?.classList.toggle('hidden');
        };

        // Toggle desktop category menu
        const categoryButton = document.getElementById('categoryButton');
        const categoryMenu = document.getElementById('categoryMenu');
        if (categoryButton && categoryMenu) {
            categoryButton.addEventListener('click', function (event) {
                event.stopPropagation();
                categoryMenu.classList.toggle('hidden');
            });
        }

        // Language Dropdown
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageText = document.getElementById('languageText');
        languageBtn?.addEventListener('click', () => {
            languageDropdown?.classList.toggle('hidden');
        });
        languageDropdown?.querySelectorAll('button[data-lang]').forEach(btn => {
            btn.addEventListener('click', () => {
                languageText.textContent = btn.textContent;
                languageDropdown.classList.add('hidden');
            });
        });

        // Currency Dropdown
        const currencyBtn = document.getElementById('currencyBtn');
        const currencyDropdown = document.getElementById('currencyDropdown');
        const currencyText = document.getElementById('currencyText');
        currencyBtn?.addEventListener('click', () => {
            currencyDropdown?.classList.toggle('hidden');
        });
        currencyDropdown?.querySelectorAll('button[data-currency]').forEach(btn => {
            btn.addEventListener('click', () => {
                currencyText.textContent = btn.textContent;
                currencyDropdown.classList.add('hidden');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (!languageBtn?.contains(e.target) && !languageDropdown?.contains(e.target)) {
                languageDropdown?.classList.add('hidden');
            }
            if (!currencyBtn?.contains(e.target) && !currencyDropdown?.contains(e.target)) {
                currencyDropdown?.classList.add('hidden');
            }
        });

        // Dark mode light mode
        const toggleButton = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const htmlElement = document.documentElement;

        if (localStorage.getItem('theme') === 'dark') {
            htmlElement.classList.add('dark');
            themeIcon?.classList.add('fa-sun');
        } else {
            htmlElement.classList.remove('dark');
            themeIcon?.classList.add('fa-moon');
        }

        toggleButton?.addEventListener('click', () => {
            const isDark = htmlElement.classList.toggle('dark');
            if (isDark) {
                localStorage.setItem('theme', 'dark');
                themeIcon?.classList.replace('fa-moon', 'fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon?.classList.replace('fa-sun', 'fa-moon');
            }
    });

    

    // Tabs
    const descTab = document.getElementById('descTab');
    const reviewTab = document.getElementById('reviewTab');
    const descSection = document.getElementById('descriptionSection');
    const reviewSection = document.getElementById('reviewSection');

    function setActive(tab1, tab2, section1, section2) {
        tab1?.classList.add('text-[#318D23]', 'border-b-2', 'border-[#318D23]', 'font-semibold');
        tab2?.classList.remove('text-[#318D23]', 'border-b-2', 'border-[#318D23]', 'font-semibold');
        tab1?.classList.add('pb-2');
        tab2?.classList.add('pb-2');
        section1?.classList.remove('hidden');
        section2?.classList.add('hidden');
    }

    descTab?.addEventListener('click', () => setActive(descTab, reviewTab, descSection, reviewSection));
    reviewTab?.addEventListener('click', () => setActive(reviewTab, descTab, reviewSection, descSection));

        
});
let mobileSearchInput, mobileSearchBtn, mobileSearchResults, mobileResultsList, mobileLoadingSpinner, mobileNoResults;
        let desktopSearchInput, desktopSearchBtn, desktopSearchResults, desktopResultsList, desktopLoadingSpinner, desktopNoResults;
        let debounceTimer = null;
        let currentQuery = '';
        let mobileSearchVisible = false;
        
        // Use your existing BASE_URL
        const BASE_URL = "https://techo-v2.cheatdev.online";
        
        // Search endpoints
        const searchEndpoints = [
            `${BASE_URL}/api/v1/products`,
            `${BASE_URL}/api/v1/categories`,
            `${BASE_URL}/api/v1/suppliers`,
            `${BASE_URL}/api/v1/brands`
        ];

        // Initialize search functionality
        function initSearch() {
            // Mobile elements
            mobileSearchInput = document.getElementById('mobileSearchInput');
            mobileSearchBtn = document.getElementById('mobileSearchBtn');
            mobileSearchResults = document.getElementById('mobileSearchResults');
            mobileResultsList = document.getElementById('mobileResultsList');
            mobileLoadingSpinner = document.getElementById('mobileLoadingSpinner');
            mobileNoResults = document.getElementById('mobileNoResults');

            // Desktop elements
            desktopSearchInput = document.getElementById('desktopSearchInput');
            desktopSearchBtn = document.getElementById('desktopSearchBtn');
            desktopSearchResults = document.getElementById('desktopSearchResults');
            desktopResultsList = document.getElementById('desktopResultsList');
            desktopLoadingSpinner = document.getElementById('desktopLoadingSpinner');
            desktopNoResults = document.getElementById('desktopNoResults');
            
            // Mobile event listeners
            mobileSearchInput.addEventListener('input', (e) => handleInput(e, 'mobile'));
            mobileSearchInput.addEventListener('focus', () => handleFocus('mobile'));
            mobileSearchBtn.addEventListener('click', () => toggleMobileSearch());
            mobileSearchInput.addEventListener('keydown', (e) => handleKeyDown(e, 'mobile'));

            // Desktop event listeners
            desktopSearchInput.addEventListener('input', (e) => handleInput(e, 'desktop'));
            desktopSearchInput.addEventListener('focus', () => handleFocus('desktop'));
            desktopSearchBtn.addEventListener('click', () => handleSearch('desktop'));
            desktopSearchInput.addEventListener('keydown', (e) => handleKeyDown(e, 'desktop'));

            // Close dropdown when clicking outside
            document.addEventListener('click', handleClickOutside);
        }

        function toggleMobileSearch() {
            if (mobileSearchVisible) {
                // Hide search
                mobileSearchInput.classList.add('hidden');
                mobileSearchResults.classList.add('hidden');
                mobileSearchVisible = false;
            } else {
                // Show search
                mobileSearchInput.classList.remove('hidden');
                mobileSearchInput.focus();
                mobileSearchVisible = true;
            }
        }

        function handleInput(e, device) {
            const query = e.target.value.trim();
            
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
            
            if (query.length === 0) {
                hideResults(device);
                return;
            }
            
            debounceTimer = setTimeout(() => {
                performSearch(query, device);
            }, 300);
        }

        function handleFocus(device) {
            const input = device === 'mobile' ? mobileSearchInput : desktopSearchInput;
            const query = input.value.trim();
            if (query.length > 0 && currentQuery === query) {
                showResults(device);
            }
        }

        function handleSearch(device) {
            const input = device === 'mobile' ? mobileSearchInput : desktopSearchInput;
            const query = input.value.trim();
            if (query.length > 0) {
                performSearch(query, device);
            }
        }

        function handleKeyDown(e, device) {
            if (e.key === 'Enter') {
                handleSearch(device);
            }
            if (e.key === 'Escape') {
                hideResults(device);
                if (device === 'mobile') {
                    toggleMobileSearch();
                }
            }
        }

        function handleClickOutside(e) {
            // Check mobile search
            if (!e.target.closest('#mobileSearchInput') && !e.target.closest('#mobileSearchResults') && !e.target.closest('#mobileSearchBtn')) {
                hideResults('mobile');
                if (mobileSearchVisible) {
                    toggleMobileSearch();
                }
            }
            
            // Check desktop search
            if (!e.target.closest('#desktopSearchInput') && !e.target.closest('#desktopSearchResults')) {
                hideResults('desktop');
            }
        }

        async function performSearch(query, device) {
            if (query === currentQuery) return;
            
            currentQuery = query;
            showLoading(device);
            showResults(device);

            try {
                // Use the enhanced fetchSearchData function
                const results = await fetchSearchData(query);
                displayResults(results, query, device);
            } catch (error) {
                console.error('Search error:', error);
                showNoResults(device);
            } finally {
                hideLoading(device);
            }
        }

        // Enhanced fetchData function for search
        const fetchSearchData = async (query) => {
            try {
                // Search all endpoints in parallel with your naming pattern
                const [productRes, categoryRes, supplierRes, brandRes] = await Promise.all([
                    fetch(`${BASE_URL}/api/v1/products?page=0&size=12&name=${encodeURIComponent(query)}`),
                    fetch(`${BASE_URL}/api/v1/categories?page=0&size=12&name=${encodeURIComponent(query)}`),
                    fetch(`${BASE_URL}/api/v1/suppliers?page=0&size=12&name=${encodeURIComponent(query)}`),
                    fetch(`${BASE_URL}/api/v1/brands?page=0&size=12&name=${encodeURIComponent(query)}`)
                ]);

                // Check if requests were successful (following your pattern)
                const results = [];
                
                if (productRes.ok) {
                    const productData = await productRes.json();
                    results.push({ type: 'products', data: productData, status: 'fulfilled' });
                } else {
                    console.warn(`Product search error! status: ${productRes.status}`);
                    results.push({ type: 'products', status: 'rejected', reason: `HTTP ${productRes.status}` });
                }

                if (categoryRes.ok) {
                    const categoryData = await categoryRes.json();
                    results.push({ type: 'categories', data: categoryData, status: 'fulfilled' });
                } else {
                    console.warn(`Category search error! status: ${categoryRes.status}`);
                    results.push({ type: 'categories', status: 'rejected', reason: `HTTP ${categoryRes.status}` });
                }

                if (supplierRes.ok) {
                    const supplierData = await supplierRes.json();
                    results.push({ type: 'suppliers', data: supplierData, status: 'fulfilled' });
                } else {
                    console.warn(`Supplier search error! status: ${supplierRes.status}`);
                    results.push({ type: 'suppliers', status: 'rejected', reason: `HTTP ${supplierRes.status}` });
                }

                if (brandRes.ok) {
                    const brandData = await brandRes.json();
                    results.push({ type: 'brands', data: brandData, status: 'fulfilled' });
                } else {
                    console.warn(`Brand search error! status: ${brandRes.status}`);
                    results.push({ type: 'brands', status: 'rejected', reason: `HTTP ${brandRes.status}` });
                }

                return results;

            } catch (error) {
                console.error('Search fetch error:', error);
                throw error;
            }
        };

        function displayResults(results, query, device) {
            const resultsList = device === 'mobile' ? mobileResultsList : desktopResultsList;
            resultsList.innerHTML = '';
            let hasResults = false;

            const categories = [
                { name: 'Products', icon: 'fa-box', color: 'text-blue-600' },
                { name: 'Categories', icon: 'fa-tags', color: 'text-green-600' },
                { name: 'Suppliers', icon: 'fa-truck', color: 'text-purple-600' },
                { name: 'Brands', icon: 'fa-star', color: 'text-orange-600' }
            ];

            results.forEach((result, index) => {
                if (result.status === 'fulfilled' && result.data) {
                    const items = extractItems(result.data);
                    if (items && items.length > 0) {
                        hasResults = true;
                        renderCategory(categories[index], items.slice(0, 5), device);
                    }
                }
            });

            if (!hasResults) {
                showNoResults(device);
            } else {
                hideNoResults(device);
            }
        }

        function extractItems(data) {
            if (Array.isArray(data)) {
                return data;
            } else if (data.content && Array.isArray(data.content)) {
                return data.content;
            } else if (data.data && Array.isArray(data.data)) {
                return data.data;
            } else if (data.items && Array.isArray(data.items)) {
                return data.items;
            }
            return [];
        }

        function renderCategory(category, items, device) {
    const resultsList = device === 'mobile' ? mobileResultsList : desktopResultsList;
    
    // Category header
    const categoryHeader = document.createElement('li');
    categoryHeader.className = 'px-4 py-2 bg-gray-50 dark:bg-gray-700';
    categoryHeader.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fa-solid ${category.icon} ${category.color}"></i>
            <span class="font-semibold text-gray-700 dark:text-gray-300">${category.name}</span>
        </div>
    `;
    resultsList.appendChild(categoryHeader);

    // Category items
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors';
        
        const displayName = item.name || item.title || item.label || 'Unknown';
        const displayId = item.id || item.uuid || '';
        
        listItem.innerHTML = `
            <div class="px-4 py-3 flex items-center justify-between">
                <div class="flex-1">
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        ${highlightQuery(displayName, currentQuery)}
                    </div>
                    ${displayId ? `<div class="text-xs text-gray-500 dark:text-gray-400">ID: ${displayId}</div>` : ''}
                </div>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
        `;
        
        listItem.addEventListener('click', () => {
            // Keep your custom logic
            selectItem(item, category.name, device);

            // Redirect depending on type
            if (category.name.toLowerCase() === 'categories') {
                window.location.href = `category.html?categoryId=${displayId}`;
            } else if (category.name.toLowerCase() === 'products') {
                window.location.href = `product-details.html?id=${displayId}`;
            }
        });

        resultsList.appendChild(listItem);
    });
}


        function highlightQuery(text, query) {
            if (!query) return text;
            const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-600">$1</mark>');
        }

        function selectItem(item, categoryName, device) {
            console.log(`Selected ${categoryName} from ${device}:`, item);
            
            const input = device === 'mobile' ? mobileSearchInput : desktopSearchInput;
            input.value = item.name || item.title || item.label || '';
            
            hideResults(device);
            
            if (device === 'mobile' && mobileSearchVisible) {
                toggleMobileSearch();
            }
        }

        function showResults(device) {
            const results = device === 'mobile' ? mobileSearchResults : desktopSearchResults;
            results.classList.remove('hidden');
        }

        function hideResults(device) {
            const results = device === 'mobile' ? mobileSearchResults : desktopSearchResults;
            results.classList.add('hidden');
        }

        function showLoading(device) {
            const loading = device === 'mobile' ? mobileLoadingSpinner : desktopLoadingSpinner;
            loading.classList.remove('hidden');
            hideNoResults(device);
        }

        function hideLoading(device) {
            const loading = device === 'mobile' ? mobileLoadingSpinner : desktopLoadingSpinner;
            loading.classList.add('hidden');
        }

        function showNoResults(device) {
            const noResults = device === 'mobile' ? mobileNoResults : desktopNoResults;
            noResults.classList.remove('hidden');
        }

        function hideNoResults(device) {
            const noResults = device === 'mobile' ? mobileNoResults : desktopNoResults;
            noResults.classList.add('hidden');
        }

        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initSearch);

const fetchData = async () => {
    try {
        // Fetch all data in parallel
        const [productRes, brandRes, categoryRes] = await Promise.all([
            fetch(`${BASE_URL}/api/v1/products?page=0&size=100`),
            fetch(`${BASE_URL}/api/v1/brands?page=0&size=100`),
            fetch(`${BASE_URL}/api/v1/categories?page=0&size=100`)
        ]);

        // Check if all requests were successful
        if (!productRes.ok) throw new Error(`Product API error! status: ${productRes.status}`);
        if (!brandRes.ok) throw new Error(`Brand API error! status: ${brandRes.status}`);
        if (!categoryRes.ok) throw new Error(`Category API error! status: ${categoryRes.status}`);

        // Parse all responses
        const [productData, brandData, categoryData] = await Promise.all([
            productRes.json(),
            brandRes.json(),
            categoryRes.json()
        ]);

        const products = productData.content || [];
        const brands = brandData.content || [];
        const categories = categoryData.content || [];

        // Render all sections
        renderAllSections(products, brands);
        
        // Initialize event listeners after DOM is updated
        initializeEventListeners();


    } catch (error) {
        console.error("Error fetching data:", error);
        showError("Error loading products.");
    }
};

// Render all product sections
function renderAllSections(products, brands) {
    const sections = [
        {
            id: "top-offer-product-display",
            data: products.filter(p => p.discount > 0).slice(0, 6),
            renderer: createProductCard
        },
        {
            id: "new-arrival-product-display", 
            data: products.slice(0, 6),
            renderer: createProductCard
        },
        {
            id: "best-selling-product-display",
            data: products.slice(4, 10), 
            renderer: createProductCard
        },
        {
            id: "product-display-container",
            data: products.slice(-24),
            renderer: createProductCard
        },
        {
            id: "vegetables-container",
            data: products.filter(p => p.category?.name?.toLowerCase() === "vegetable").slice(12, 20),
            renderer: createVegetableCard
        },
        {
            id: "top-supplier-display",
            data: brands.slice(3, 13),
            renderer: createShopCard
        }
    ];

    // Render each section
    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (container && section.data.length > 0) {
            container.innerHTML = section.data.map(section.renderer).join('');
        } else if (container) {
            container.innerHTML = '<p>No products available.</p>';
        }
    });
}
function createVegetableCard(product) {
    return `
            <div class="container flex justify-center gap-4 md:gap-6 items-center rounded-xl bg-white dark:bg-[#31363F] border border-[#E5E5E5] dark:border-[#222831] p-2 md:p-4">
                <a href="./product-details.html?id=${product.uuid}" class="w-full">
                    <img src="${product.thumbnail || product.images || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}" alt="${product.name}" 
                    class="w-36 h-36 md:w-full md:h-[160px] 2xl:h-[208px] object-cover overflow-hidden cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                </a>
                <article class="w-full">
                    <h3 class="text-[1rem] md:text-[20px] font-semibold line-clamp-1">
                        ${product.name}
                    </h3>
                    <p class="text-[12px] md:text-[18px] font-semibold line-clamp-1 text-[#545454] dark:text-[#E5E5E5]">
                        ${product.supplier?.name || 'Unknown Supplier'}
                    </p>
                    <div class="flex items-center justify-start mt-2 gap-2">
                        ${product.discount && Number(product.discount) > 0
                            ? `
                            <p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">
                                $${(Number(product.priceOut) - Number(product.discount)).toFixed(2)}
                            </p>
                            <span class="text-[0.5rem] md:text-[1rem] font-semibold text-[#E92424] line-through">
                                $${Number(product.priceOut).toFixed(2)}
                            </span>
                            `
                            : `
                            <p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">
                                $${Number(product.priceOut).toFixed(2)}
                            </p>
                            `
                        }
                    </div>
                    <div class="mt-2 w-full flex flex-col gap-2 items-center">
                        <div class="w-full container flex justify-center items-center max-w-xs quantity-control">
                            <button type="button" 
                                class="decreaseBtn w-full text-[1rem] md:text-[1.2rem] text-[#21222A] dark:text-[#E5E5E5] border border-gray-200 px-2 rounded-l-md hover:bg-[#f5f5f5] transition-colors duration-300 h-7 md:h-9">
                                <i class="fa-solid fa-minus"></i>
                                <span class="sr-only">Decrease quantity</span>
                            </button>

                            <input type="text" 
                                class="quantityInput text-center border-t border-b bg-white dark:bg-[#31363F] border-gray-300 w-full h-7 md:h-9" 
                                value="1" inputmode="numeric" pattern="[0-9]*" placeholder="Qty" />

                            <button type="button" 
                                class="increaseBtn w-full text-[1rem] md:text-[1.2rem] text-[#21222A] dark:text-[#E5E5E5] border border-gray-200 px-2 rounded-r-md hover:bg-[#f5f5f5] transition-colors duration-300 h-7 md:h-9">
                                <i class="fa-solid fa-plus"></i>
                                <span class="sr-only">Increase quantity</span>
                            </button>
                        </div>
                        <div class="w-full flex items-center gap-1">
                        <button type="button" 
                                class="addToCartBtn w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300"
                                data-product-id="${product.uuid}" 
                                data-product-name="${product.name}" 
                                data-product-price="${product.priceOut}">
                            <span class="sr-only">Add to cart</span>
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button type="button" 
                                class="addToBuyingList w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300"
                                data-product-id="${product.uuid}" 
                                data-product-name="${product.name}" 
                                data-product-price="${product.priceOut}">
                            <span class="sr-only">Add to Buying List</span>
                            <i class="fa-solid fa-clipboard-list"></i>
                        </button>
                    </div>
                    </div>
                </article>
            </div>
        
`;
}
// Create product card HTML
function createProductCard(product) {
    const discountPrice = product.discount && Number(product.discount) > 0 
        ? (Number(product.priceOut) - Number(product.discount)).toFixed(2)
        : null;
    
    const originalPrice = Number(product.priceOut).toFixed(2);
    
    return `
        <div class="container w-full rounded-lg bg-white dark:bg-[#31363F] border border-[#E5E5E5] dark:border-[#222831] p-4">
            <a href="./product-details.html?id=${product.uuid}">
                <img src="${product.thumbnail || product.images || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}" 
                     alt="${product.name}" 
                     class="w-full mb-2 h-32 md:h-36 2xl:h-[208px] object-cover overflow-hidden cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            </a>
            <article class="md:mt-4">
                <h3 class="text-[1rem] md:text-[20px] font-semibold line-clamp-1">
                    ${product.name}
                </h3>
                <p class="text-[12px] md:text-[18px] mt-1 font-semibold line-clamp-1 text-[#545454] dark:text-[#E5E5E5]">
                    ${product.supplier?.name || 'Unknown Supplier'}
                </p>
                
                <!-- Price Section -->
                <div class="flex items-center justify-start mt-2 gap-2">
                    ${discountPrice 
                        ? `<p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">$${discountPrice}</p>
                           <span class="text-[0.5rem] md:text-[1rem] font-semibold text-[#E92424] line-through">$${originalPrice}</span>`
                        : `<p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">$${originalPrice}</p>`
                    }
                </div>
                
                <!-- Quantity and Action Buttons -->
                <div class="mt-2 md:mt-4 w-full flex flex-col gap-2 items-center">
                    <!-- Quantity Control -->
                    <div class="w-full container flex justify-center items-center max-w-xs quantity-control">
                        <button type="button" 
                                class="decreaseBtn w-full text-[1rem] md:text-[1.2rem] text-[#21222A] dark:text-[#E5E5E5] border border-gray-200 px-2 rounded-l-md hover:bg-[#f5f5f5] transition-colors duration-300 h-7 md:h-9">
                            <i class="fa-solid fa-minus"></i>
                            <span class="sr-only">Decrease quantity</span>
                        </button>
                        <input type="text" 
                               class="quantityInput text-center border-t border-b bg-white dark:bg-[#31363F] border-gray-300 w-full h-7 md:h-9" 
                               value="1" inputmode="numeric" pattern="[0-9]*" placeholder="Qty" />
                        <button type="button" 
                                class="increaseBtn w-full text-[1rem] md:text-[1.2rem] text-[#21222A] dark:text-[#E5E5E5] border border-gray-200 px-2 rounded-r-md hover:bg-[#f5f5f5] transition-colors duration-300 h-7 md:h-9">
                            <i class="fa-solid fa-plus"></i>
                            <span class="sr-only">Increase quantity</span>
                        </button>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="w-full flex items-center gap-1">
                        <button type="button" 
                                class="addToCartBtn w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300"
                                data-product-id="${product.uuid}" 
                                data-product-name="${product.name}" 
                                data-product-price="${product.priceOut}">
                            <span class="sr-only">Add to cart</span>
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button type="button" 
                                class="addToBuyingList w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300"
                                data-product-id="${product.uuid}" 
                                data-product-name="${product.name}" 
                                data-product-price="${product.priceOut}">
                            <span class="sr-only">Add to Buying List</span>
                            <i class="fa-solid fa-clipboard-list"></i>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

// Create shop card HTML
function createShopCard(shop) {
    return `
        <div class="container w-full h-auto">
            <a href="./shop-detail.html?brandId=${shop.uuid}">
                <img src="${shop.brandLogo || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}" 
                     alt="${shop.name}" 
                     class="w-full h-auto object-cover overflow-hidden rounded-lg  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                <span class="sr-only">${shop.name}</span>
            </a>
        </div>
    `;
}

// Initialize all event listeners
function initializeEventListeners() {
    // Initialize quantity controls
    initializeQuantityControls();
    
    // Initialize cart and buying list buttons for all containers
    initializeActionButtons();
}

// Initialize quantity control buttons
function initializeQuantityControls() {
    document.querySelectorAll('.quantity-control').forEach(control => {
        // Skip if already initialized
        if (control.dataset.initialized) return;
        
        const input = control.querySelector('.quantityInput');
        const increaseBtn = control.querySelector('.increaseBtn');
        const decreaseBtn = control.querySelector('.decreaseBtn');
        
        if (increaseBtn && input) {
            increaseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentValue = parseInt(input.value) || 0;
                input.value = currentValue + 1;
            });
        }
        
        if (decreaseBtn && input) {
            decreaseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentValue = parseInt(input.value) || 1;
                input.value = Math.max(1, currentValue - 1);
            });
        }

        // Validate input
        if (input) {
            input.addEventListener('input', (e) => {
                const value = parseInt(e.target.value) || 1;
                e.target.value = Math.max(1, value);
            });
        }
        
        // Mark as initialized
        control.dataset.initialized = 'true';
    });
}

// Initialize cart and buying list buttons
function initializeActionButtons() {
    const containerIds = [
        "top-offer-product-display",
        "new-arrival-product-display", 
        "best-selling-product-display",
        "hight-rating-product-display",
        "vegetables-container"
    ];
    
    containerIds.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container || container.dataset.initialized) return;
        
        // Use event delegation for better performance
        container.addEventListener("click", handleActionButtonClick);
        
        // Mark as initialized
        container.dataset.initialized = 'true';
    });
}

// Handle cart and buying list button clicks
function handleActionButtonClick(e) {
    const cartBtn = e.target.closest(".addToCartBtn");
    const listBtn = e.target.closest(".addToBuyingList");
    
    if (cartBtn) {
        e.preventDefault();
        handleAddToCart(cartBtn);
    }
    
    if (listBtn) {
        e.preventDefault();
        handleAddToBuyingList(listBtn);
    }
}

// User authentication and cart functions
const getUserData = () => {
    const accessToken = localStorage.getItem("accessToken") || localStorage.getItem("userToken");
    const userInfo = localStorage.getItem("userInfo");
    const directUserUuid = localStorage.getItem("userUuid");

    let userUuid = directUserUuid;

    if (!userUuid && userInfo) {
        try {
            const parsedUserInfo = JSON.parse(userInfo);
            userUuid = parsedUserInfo.uuid || parsedUserInfo.id;
        } catch (error) {
            console.error("Error parsing user info:", error);
        }
    }

    return {
        isLoggedIn: !!(accessToken && userUuid),
        userUuid: userUuid,
        token: accessToken,
        userInfo: userInfo ? JSON.parse(userInfo) : null,
    };
};

const handleAddToCart = async (cartBtn) => {
    const userData = getUserData();

    if (!userData.isLoggedIn) {
        alert("Please log in to add items to cart");
        return;
    }

    try {
        const quantityInput =
            cartBtn.closest(".w-full")?.querySelector(".quantityInput") ||
            cartBtn.closest("div")?.querySelector(".quantityInput") ||
            document.querySelector(".quantityInput");
        const quantity = parseInt(quantityInput?.value || 1);

        const productUuid =
            cartBtn.dataset.productId ||
            cartBtn.getAttribute("data-product-id") ||
            new URLSearchParams(window.location.search).get("id");

        if (!productUuid) throw new Error("Product ID not found");

        cartBtn.disabled = true;
        const originalText = cartBtn.innerHTML;
        cartBtn.innerHTML = 'Adding... <i class="fa-solid fa-spinner fa-spin"></i>';

        const response = await fetch(`${BASE_URL}/api/v1/carts/add-to-cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userData.token}`,
            },
            body: JSON.stringify({
                userUuid: userData.userUuid,
                productUuid: productUuid,
                quantity: quantity,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add to cart");
        }

        const result = await response.json();

        toggleButtonState(cartBtn);
        cartBtn.innerHTML = 'Added to Cart <i class="fa-solid fa-check"></i>';

        showNotification("Product added to cart successfully!", "success");

        updateCartCount();
    } catch (error) {
        console.error("Error adding to cart:", error);
        showNotification(error.message || "Failed to add to cart. Please try again.", "error");
        cartBtn.innerHTML = 'Add to Cart <i class="fa-solid fa-cart-plus"></i>';
    } finally {
        cartBtn.disabled = false;
        setTimeout(() => {
            if (cartBtn.innerHTML.includes("Added to Cart")) {
                cartBtn.innerHTML = 'Add to Cart <i class="fa-solid fa-cart-plus"></i>';
            }
        }, 2000);
    }
};

const updateCartCount = async () => {
    const userData = getUserData();
    if (!userData.isLoggedIn) return;

    try {
        const response = await fetch(`${BASE_URL}/api/v1/carts/${userData.userUuid}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const cartCountElement = document.querySelector(".cart-count");
            if (cartCountElement && data.count !== undefined) {
                cartCountElement.textContent = data.count;
            }
        }
    } catch (error) {
        console.error("Error updating cart count:", error);
    }
};


const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-opacity duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fa-solid ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle'
            }"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
};

// const updateCartCount = async () => {
//     const userData = getUserData();
//     if (!userData.isLoggedIn) return;
    
//     try {
//         const response = await fetch(`${BASE_URL}/api/v1/carts/count/2e041a11-9c71-427b-98c4-e8fb19c2938f`, {
//             headers: {
//                 'Authorization': `Bearer eyJraWQiOiJkOWEzMWNhNS05MzQ3LTRlNmMtYTZmMi05NDU3NTA2YTY0ZmEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJBY2Nlc3MgUmVzb3VyY2UiLCJhdWQiOlsiV0VCIiwiTU9CSUxFIl0sInNjb3BlIjoidXNlcjpyZWFkIHVzZXI6d3JpdGUgYWRtaW46cmVhZCBhZG1pbjp3cml0ZSB1c2VyOnJlYWQgdXNlcjp3cml0ZSIsImlzcyI6InNva2NoZWF0c3Jvcm5nQGdtYWlsLmNvbSIsImV4cCI6MTc1NzQwNzAzNSwiaWF0IjoxNzU2MTk3NDM1LCJqdGkiOiJzb2tjaGVhdHNyb3JuZ0BnbWFpbC5jb20ifQ.afykVQb65o3YWlKCx2cVe8c8EGUwSANAYNSqPnrkcE8cH2PPvDG6NtLW5p9LkAKVcKV_V7UWuUaWWl5SR45Qhl-zGoXuJDXmQRLtEaQx6P2G2GkS1RGs-zlaaRU8eBb8jeKAcdxWLp3rW4AF8MpoBsPivIskgv0FKsJQe0JckYICPPAOsP0uDcfUCSd_tTGPD59ShwJRdArhFZgSmFkXHsPgQv-UGhletcHZUMTG83oRh1t4urLGoU3KYIVndhvHGBao4sJoJ6naew5B3xpG7UaDq1ehI7l_wkmRXOiZA-QtM7blBaT3rtPZhrDyk-jPjxtxfEHZnB5Qn3phEaopN`
//             }
//         });
        
//         if (response.ok) {
//             const data = await response.json();
//             const cartCountElement = document.querySelector('.cart-count');
//             if (cartCountElement && data.count !== undefined) {
//                 cartCountElement.textContent = data.count;
//             }
//         }
//     } catch (error) {
//         console.error('Error updating cart count:', error);
//     }
// };

function initializeEventListeners() {
    // Quantity controls - Use setTimeout to ensure DOM is ready
    setTimeout(() => {
        document.querySelectorAll('.quantity-control').forEach(control => {
            const input = control.querySelector('.quantityInput');
            const increaseBtn = control.querySelector('.increaseBtn');
            const decreaseBtn = control.querySelector('.decreaseBtn');
            
            if (increaseBtn) {
                increaseBtn.addEventListener('click', () => {
                    input.value = parseInt(input.value || 0) + 1;
                });
            }
            
            if (decreaseBtn) {
                decreaseBtn.addEventListener('click', () => {
                    input.value = Math.max(1, parseInt(input.value || 0) - 1);
                });
            }
        });
    }, 100);

    // Tab switching
    const descTab = document.getElementById('descTab');
    const reviewTab = document.getElementById('reviewTab');
    const descSection = document.getElementById('descriptionSection');
    const reviewSection = document.getElementById('reviewSection');

    if (descTab && reviewTab && descSection && reviewSection) {
        descTab.addEventListener('click', () => {
            descSection.classList.remove('hidden');
            reviewSection.classList.add('hidden');
            
            descTab.classList.add('border-b-2', 'border-[#21242A]', 'font-semibold');
            descTab.classList.remove('text-gray-500', 'dark:text-gray-400');
            
            reviewTab.classList.remove('border-b-2', 'border-[#21242A]', 'font-semibold');
            reviewTab.classList.add('text-gray-500', 'dark:text-gray-400');
        });

        reviewTab.addEventListener('click', () => {
            reviewSection.classList.remove('hidden');
            descSection.classList.add('hidden');
            
            reviewTab.classList.add('border-b-2', 'border-[#21242A]', 'font-semibold');
            reviewTab.classList.remove('text-gray-500', 'dark:text-gray-400');
            
            descTab.classList.remove('border-b-2', 'border-[#21242A]', 'font-semibold');
            descTab.classList.add('text-gray-500', 'dark:text-gray-400');
        });
    }

    // Add to cart and buying list buttons - Use event delegation on document body
    document.body.addEventListener("click", async function (e) {
        const cartBtn = e.target.closest(".addToCartBtn");
        const listBtn = e.target.closest(".addToBuyingList");

        if (cartBtn) {
            await handleAddToCart(cartBtn);
        }
        if (listBtn) {
            toggleButtonState(listBtn);
        }
    });
}

function toggleButtonState(btn) {
    const isAdded = btn.classList.contains('bg-[#318D23]');
    btn.classList.toggle('bg-[#318D23]', !isAdded);
    btn.classList.toggle('text-white', !isAdded);
    btn.classList.toggle('text-[#318D23]', isAdded);
    btn.classList.toggle('bg-transparent', isAdded);
}

// Show error message
function showError(message) {
    const errorContainers = [
        "top-offer-product-display",
        "new-arrival-product-display", 
        "best-selling-product-display",
        "hight-rating-product-display",
        "vegetables-container"
    ];
    
    errorContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<p class="text-red-500 text-center p-4">${message}</p>`;
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

// Fallback if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchData);
} else {
    fetchData();
}