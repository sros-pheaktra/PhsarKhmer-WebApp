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
                <div class="w-full md:hidden flex justify-end items-center gap-4">
                
                   <div class="flex items-center justify-end gap-x-2">
                        <input id="searchInput" type="text" placeholder="Search" class="hidden w-full h-[36px] rounded-full bg-white dark:bg-[#31363F] focus:bg-[#f5f5f5]">
                        
                        <button id="searchBtn"
                                class="text-[1rem] text-[#318D23] dark:text-gray-500"
                                type="button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span class="sr-only">search</span>
                        </button>
                    </div>

                    

                    <!-- Burger Icon for Mobile -->
                    <button id="menu-toggle" class="block md:hidden text-[1.2rem] text-[#318D23] dark:text-gray-500" type="button">
                        <i class="fas fa-bars"></i><span class="sr-only">bars</span>
                    </button>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-6">
                    <div class="relative">
                        <input type="text" placeholder="Search" class="w-[400px] pl-8 py-2 bg-white dark:bg-[#31363F] rounded-l-full outline-1 placeholder:text-[#545454] outline-[#318D23] dark:outline-[#222831] focus:outline-0 focus:bg-[#f5f5f5] dark:focus:bg-[#222831]">
                        <button type="button" class="absolute text-xl py-1 px-4 text-white outline-1 outline-[#318D23] dark:outline-[#222831] bg-[#318D23] dark:bg-[#222831] h-full rounded-r-full hover:bg-[#4FB140] dark:hover:bg-[#1B4242]"><i class="fa-solid fa-magnifying-glass "></i><span class="sr-only">search</span></button>
                    </div>
                </div>
                <div class="hidden md:flex gap-6 text-[1.5rem] text-[#318D23] dark:text-gray-500" >
                    <a href="./user/buying_list.html" class="transition-transform duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]"><i class="fa-solid fa-clipboard-list"></i><span class="sr-only">buying list</span></a>
                    <a href="./user/cart.html" class="transition-transform duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]"><i class="fa-solid fa-cart-shopping"></i><span class="sr-only">cart</span></a>
                    <a href="./authorization/log_in.html" class="transition-transform duration-300 ease-in-out hover:text-[#4FB140] dark:hover:text-[#1B4242]"><i class="fa-solid fa-user"></i><span class="sr-only">user</span></a>
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
                                <a href="./category/bakery/bakery.html">Bakery</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('bakerySub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="bakerySub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category.html?categoryId=928a9508-58d6-4bfa-8154-6a1420f49151" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Biscuits, Cookies, and Cracker</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/bakery/breads.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Breads</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/bakery/cakes.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Cakes</a></li>
                            </ul>
                        </li>
                        <li class="relative border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100">
                            <div class="flex justify-between items-center w-full px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">
                                <a href="./category/beverages/beverages.html">Beverages</a>
                                <button class="hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831] cursor-pointer" onclick="toggleSubmenu('beveragesSub')" type="button">
                                    <span class="sr-only">sub-category</span><i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            <ul id="beveragesSub" class="hidden min-w-[300px] absolute left-full -top-2 bg-white dark:bg-[#31363F] shadow-lg rounded-lg py-2 z-20">
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/energy-drinks.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Energy dirnks</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/fruit-juice.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fruit Juices</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/milk.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Milk</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/powdered-drink-mixed.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Powdered Dirnk Mixed</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/soft-drinks.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Soft Drinks</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/tea.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Tea</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/beverages/water.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Water</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/butchery/beef.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Beef</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/butchery/chicken.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Chicken</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/butchery/pork.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pork</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/butchery/other-meats.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Other meats</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/dry-groceries/caned-foods.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Caned Foods</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/dry-groceries/flour.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Flours</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/dry-groceries/rice.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Rice</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/fish-and-seafood/fish.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fish</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/fish-and-seafood/seafood.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Seafood</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/frozen-food/fronzen-meat.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Meats</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/frozen-food/frozen-fish-and-seafood.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Fish and Seafood</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/frozen-food/frozen-processed-foods.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Frozen Processed Foods</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/fruits-and-vegetabels/fruits.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Fruits</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/fruits-and-vegetabels/vegetables.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Vegetables</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/households/bed-and-bathroom-accesories.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Bed and Bathroom Acessories</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/households/drinks-and-foods-container.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Drink and Food Container</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/households/furnitures.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Furniture</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/office-supplies-stationary-and-books/books.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Books</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/personal-care-product/hair-care.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Hair Care</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/personal-care-product/medical-supplies.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Medical Supplies</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/personal-care-product/oral-care.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Oral Care</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/personal-care-product/skin-care.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Skin Care</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/pet-foods-and-pet-care/pet-accesories.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pet Accesories</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/pet-foods-and-pet-care/pet-foods.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Pet Foods</a></li>
                                
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/processed-foods/dairy-products.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Dairy Products</a></li>
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
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/seasoning-and-dipping-sauce/dipping-sauce.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Dipping Sauce</a></li>
                                <li class="border-t border-[#e5e5e5] dark:border-[#21242A] text-[#21242A] dark:text-gray-100"><a href="./category/seasoning-and-dipping-sauce/seasoning.html" class="block px-4 py-2 hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] hover:text-[#318D23] dark:hover:text-[#222831]">Seasonging</a></li>
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
                    <li><a href="./shop.html" class="hover:underline">Shop</a></li>
                </ul>
                <ul class="flex gap-6 font-semibold text-[#21242A] dark:text-gray-100 text-[1.2rem]">
                    <li><a href="./company/about.html" class="hover:underline">About Us</a></li>
                    <li><a href="./company/contact.html" class="hover:underline">Contact Us</a></li>
                </ul>
           </div>
           
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden fixed top-0 right-0 h-full w-4/5 max-w-md bg-white dark:bg-[#31363F] shadow-lg z-50 overflow-y-auto">
            
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
                                <a href="./category/beverages/energy-drinks.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Energy drinks</a>
                                <a href="./category/beverages/fruit-juice.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fruit Juices</a>
                                <a href="./category/beverages/milk.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Milk</a>
                                <a href="./category/beverages/powdered-drink-mixed.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Powdered Drink Mixed</a>
                                <a href="./category/beverages/soft-drinks.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Soft Drinks</a>
                                <a href="./category/beverages/tea.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Tea</a>
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
                                <a href="./category/butchery/beef.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Beef</a>
                                <a href="./category/butchery/chicken.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Chicken</a>
                                <a href="./category/butchery/pork.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Pork</a>
                                <a href="./category/butchery/other-meats.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Other meats</a>
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
                                <a href="./category/dry-groceries/caned-foods.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Caned Foods</a>
                                <a href="./category/dry-groceries/flour.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Flours</a>
                                <a href="./category/dry-groceries/rice.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Rice</a>
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
                                <a href="./category/fish-and-seafood/fish.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fish</a>
                                <a href="./category/fish-and-seafood/seafood.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Seafood</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-frozen-food')">
                                <a href="./category/frozen-food/frozen-food.html" class="flex-1">Frozen Foods</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-frozen-food" class="hidden pl-4 mt-1">
                                <a href="./category/frozen-food/fronzen-meat.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Meats</a>
                                <a href="./category/frozen-food/frozen-fish-and-seafood.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Fish and Seafood</a>
                                <a href="./category/frozen-food/frozen-processed-foods.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Frozen Processed Foods</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-fruit-vegetable')">
                                <a href="./category/fruits-and-vegetabels/fruits-and-vegetables.html" class="flex-1">Fruits and Vegetables</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-fruit-vegetable" class="hidden pl-4 mt-1">
                                <a href="./category/fruits-and-vegetabels/fruits.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Fruits</a>
                                <a href="./category/fruits-and-vegetabels/vegetables.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Vegetables</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-households')">
                                <a href="./category/households/households.html" class="flex-1">Households</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-households" class="hidden pl-4 mt-1">
                                <a href="./category/households/bed-and-bathroom-accesories.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Bed and Bathroom Accessories</a>
                                <a href="./category/households/drinks-and-foods-container.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Drink and Food Container</a>
                                <a href="./category/households/furnitures.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Furnitures</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-books')">
                                <a href="./category/office-supplies-stationary-and-books/office-supplies-stationary-and-books.html" class="flex-1 line-clamp-1">Books, Stationaries, and Office Supplies</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-books" class="hidden pl-4 mt-1">
                                <a href="./category/office-supplies-stationary-and-books/books.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Books</a>
                                <a href="./category/office-supplies-stationary-and-books/office-accessories.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Office Supplies</a>
                                <a href="./category/office-supplies-stationary-and-books/stationaries.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Stationaries</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-personal-care')">
                                <a href="./category/personal-care-product/personal-care-products.html" class="flex-1 line-clamp-1">Personal Care Products</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-personal-care" class="hidden pl-4 mt-1">
                                <a href="./category/personal-care-product/facial-care.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Facial Care</a>
                                <a href="./category/personal-care-product/hair-care.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Hair Care</a>
                                <a href="./category/personal-care-product/medical-supplies.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Medical Supplies</a>
                                <a href="./category/personal-care-product/oral-care.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Oral Care</a>
                                <a href="./category/personal-care-product/skin-care.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Skin Care</a>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="w-full flex justify-between items-center py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 text-left" onclick="toggleMobileSubmenu('mobile-pet')">
                                <a href="./category/pet-foods-and-pet-care/pet-food-and-pet-care.html" class="flex-1 line-clamp-1">Pet Foods and Pet Care</a>
                                <i class="fas fa-angle-down text-sm"></i>
                            </button>
                            <div id="mobile-pet" class="hidden pl-4 mt-1">
                                <a href="./category/pet-foods-and-pet-care/pet-accesories.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 line-clamp-1">Pet Accessories</a>
                                <a href="./category/pet-foods-and-pet-care/pet-foods.html" class="block py-1 px-2 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100">Pet Foods</a> 
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
                        <a href="./shop.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Shop</a>
                        <a href="./company/about.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">About Us</a>
                        <a href="./company/contact.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] font-semibold text-[#318D23] dark:text-gray-500">Contact Us</a>
                    </div>
                    
                    <hr class="my-2 border-[#e5e5e5] dark:border-[#21242A]">
                    
                    <div class="flex flex-col gap-2 mb-4">
                        <a href="./user/buying_list.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-clipboard-list"></i> Buying List</a>
                        <a href="./user/cart.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
                        <a href="./authorization/log_in.html" class="py-2 px-4 rounded hover:bg-[#D8FDC9] dark:hover:bg-[#1B4242] dark:bg-[#1B4242] text-[#21242A] dark:text-gray-100 flex items-center gap-2"><i class="fa-solid fa-user"></i> Account</a>
                    </div>
                </div>
            </div>
        </nav>`;

    document.getElementById("headerSection").innerHTML = headerSection;
    
    // footer
    const footerSection = `<section class="flex flex-col md:flex-row md:justify-between w-full gap-8 md:gap-0 text-[#21242A] dark:text-gray-100">
            <!-- Organize by -->
            <div class="flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="font-semibold text-[1rem] md:text-[20px] mb-2">Organized by</h3>
                <a href="https://www.cstad.edu.kh/"><img src="./assets/images/logo/ISTAD_logo.jpg" alt="ISTAD logo" class="rounded-full w-[60px] md:w-[120px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                <span class="text-[14px] text-[#545454] md:text-[1rem]">Institute of Science and Technology Advanced Development - ISTAD </span>
            </div>
            <!-- G2 E-commerce -->
            <div class="flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="font-semibold text-[1rem] md:text-[20px] mb-2">G1 E-commerce</h3>
                <a href="./index.html"><img src="./assets/images/logo/PhsarKhmer_4x4.jpg" alt="PhsarKhmer logo" class="rounded-full w-[60px] md:w-[120px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                <span class="text-[14px] text-[#545454]">PhsarKhmer</span>
            </div>
            <!-- Quick Link -->
            <div class="flex flex-col items-center text-center mb-6 md:mb-0">
                <h3 class="text-[20px] font-semibold text-[#21242A] dark:text-gray-100 mb-2">Quick Links</h3>
                <a href="./index.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Home</a>
                <a href="./categories.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454] mb-1">Category</a>
                <a href="./shop.html" class="text-[1rem] md:text-[20px] hover:underline underline-offset-4 text-[#545454]">Shop</a>
            </div>
            <!-- Account & Shipping Info -->
            <div class="flex flex-col items-center text-center mb-6 md:mb-0">
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
            <div class="flex flex-col items-center text-center">
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
            <div class="flex flex-col items-center text-center">
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

    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn?.addEventListener('click', () => {
        searchInput?.classList.toggle('hidden');
        searchInput?.focus();
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

});

    // Fetch products
const BASE_URL = "https://techo-v2.cheatdev.online";

try{
    // Fetch products
    const res = await fetch(`${BASE_URL}/api/v1/products?page=0&size=100`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const productData = await res.json();
    let products = productData.content || [];
    
    let beverages


    const displayProducts = (products) => {
        const productCardsHTML = products.map(pro => `
            <div class="container w-full rounded-lg bg-white dark:bg-[#31363F] border border-[#E5E5E5] dark:border-[#222831] p-4">
                <a href="./product-details.html?id=${pro.uuid}">
                    <img src="${pro.thumbnail || pro.images || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}" alt="${pro.name}" 
                    class="w-full mb-2 h-32 md:h-56 2xl:h-[208px] object-cover overflow-hidden cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                </a>
                <article class="md:mt-4">
                    <h3 class="text-[1rem] md:text-[20px] font-semibold line-clamp-1">
                        ${pro.name}
                    </h3>
                    <p class="text-[12px] md:text-[18px] mt-1 font-semibold line-clamp-1 text-[#545454] dark:text-[#E5E5E5]">
                        ${pro.supplier?.name || 'Unknown Supplier'}
                    </p>
                    <div class="flex items-center justify-start mt-2 md:mt-4 gap-2">
                        ${pro.discount && Number(pro.discount) > 0
                            ? `
                            <p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">
                                $${(Number(pro.priceOut) - Number(pro.discount)).toFixed(2)}
                            </p>
                            <span class="text-[0.5rem] md:text-[1rem] font-semibold text-[#E92424] line-through">
                                $${Number(pro.priceOut).toFixed(2)}
                            </span>
                            `
                            : `
                            <p class="text-[1rem] md:text-[2rem] font-semibold text-[#E92424]">
                                $${Number(pro.priceOut).toFixed(2)}
                            </p>
                            `
                        }
                    </div>
                    <div class="mt-2 md:mt-4 w-full flex flex-col gap-2 items-center">
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
                            <button type="button" class="addToCartBtn w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300">
                                <span class="sr-only">Add to cart</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <button type="button" class="addToBuyingList w-full md:h-9 text-[1rem] md:text-[1.5rem] text-[#318D23] border border-gray-200 px-2 rounded-sm md:rounded-md hover:bg-[#318D23] hover:text-white transition-colors duration-300">
                                <span class="sr-only">Add to Buyinglist</span>
                                <i class="fa-solid fa-clipboard-list"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
                `).join('');

        document.getElementById("products-container").innerHTML = productCardsHTML;
        
        // Initialize event listeners after DOM is updated
        initializeEventListeners();
    };

    const initializeEventListeners = () => {
        // Quantity controls
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

        // Add to cart and buying list buttons
        document.body.addEventListener("click", function (e) {
            const cartBtn = e.target.closest(".addToCartBtn");
            const listBtn = e.target.closest(".addToBuyingList");

            if (cartBtn) toggleButtonState(cartBtn);
            if (listBtn) toggleButtonState(listBtn);
        });
    };

    const toggleButtonState = (btn) => {
        const isAdded = btn.classList.contains('bg-[#318D23]');
        btn.classList.toggle('bg-[#318D23]', !isAdded);
        btn.classList.toggle('text-white', !isAdded);
        btn.classList.toggle('text-[#318D23]', isAdded);
        btn.classList.toggle('bg-transparent', isAdded);
    };

}
catch (error){
    console.error("Error fetching data:", error);
     document.getElementById("product-container").innerHTML = "<p>Error loading products.</p>";
}