<template>
    <div class="text-gray-800 text-sm">
        <nav class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <!-- Logo -->
                <a href="#" class="text-white hover:text-gray-400">
                    <!-- lifted from github -->
                    <svg class="w-8 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>

                <!-- Search bar -->
                <div class="hidden lg:block relative">
                    <input type="text" class="rounded bg-gray-700 placeholder-white w-72 px-3 py-1" placeholder="Search or jump to...">
                    <div class="absolute top-0 right-0 flex items-center h-full">
                        <div class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
                            /
                        </div>
                    </div>
                </div>

                <!-- Subnav with links -->
                <ul class="hidden lg:flex items-center font-semibold space-x-4">
                    <li><a href="#" class="hover:text-gray-400 transition-colors duration-100">Pull Requests</a></li>
                    <li><a href="#" class="hover:text-gray-400 transition-colors duration-100">Issues</a></li>
                    <li><a href="#" class="hover:text-gray-400 transition-colors duration-100">Marketplace</a></li>
                    <li><a href="#" class="hover:text-gray-400 transition-colors duration-100">Explore</a></li>
                </ul>
            </div>
            <div class="flex items-center space-x-4 text-white">
                <!-- bell/notifications -->
                <a href="#" class="relative hover:text-gray-400 transition-colors duration-100">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>

                    <!-- circle on top right of bell icon -->
                    <div class="bg-blue-500 rounded-full w-2 h-2 absolute top-0 right-0"></div>
                </a>

                <!-- Plus w/ chevron -->
                <a href="#" class="flex items-center hover:text-gray-400 transition-colors duration-100">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>

                <!-- Avatar -->
                <a href="#" class="flex items-center hover:text-gray-400 transition-colors duration-100">
                    <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>
            </div>
        </nav>

        <div id="repo-stats" class="flex flex-col lg:flex-row items-center justify-between px-4 py-4 bg-gray-100">
            <!-- Repo name -->
            <div class="flex mb-4 lg:mb-0">
                <svg class="w-4 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <div class="flex items-center text-xl ml-2">
                    <a href="#" class="text-blue-600 hover:underline">tailwindcss</a>
                    <span class="ml-1 text-blue-600">/</span>
                    <a href="#" class="ml-1 text-blue-600 hover:underline font-semibold">tailwindcss</a>
                </div>
            </div>

            <!-- buttons -->
            <div class="flex space-x-2">
                <!-- Watch button and stats -->
                <div class="flex space-x-2">
                    <div class="flex text-xs">
                        <button class="flex items-center space-x-1 border border-gray-400 rounded rounded-r-none px-3 py-1 hover:bg-gray-200">
                            <svg class="fill-current text-gray-600 w-3" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                            <div>Watch</div>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <a class="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600 cursor-pointer">
                            430
                        </a>
                    </div>
                </div>

                <!-- Star button and stats -->
                <div class="flex space-x-2">
                    <div class="flex text-xs">
                        <button class="flex items-center space-x-1 border border-gray-400 rounded rounded-r-none px-3 py-1 hover:bg-gray-200">
                            <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                            <div>Star</div>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <a class="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600 cursor-pointer">
                            25.3k
                        </a>
                    </div>
                </div>

                <!-- Fork button and stats -->
                <div class="flex space-x-2">
                    <div class="flex text-xs">
                        <button class="flex items-center space-x-1 border border-gray-400 rounded rounded-r-none px-3 py-1 hover:bg-gray-200">
                            <svg class="fill-current text-gray-600 w-3" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            <div>Fork</div>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <a class="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-1 font-semibold hover:text-blue-600 cursor-pointer">
                            213
                        </a>
                    </div>
                </div>

            </div>
        </div>

        <ul id="repo-nav" class="border-b bg-gray-100 border-gray-400 flex items-center px-8 pt-4">
            <li class="flex font-semibold">
                <a href="#" class="flex items-center border-b-2 border-red-500 px-4 pb-3">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    <span class="ml-2">Code</span>
                </a>
            </li>
            <li class="flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="ml-2 mr-1">Issues</span>
                    <div class="text-xs rounded-lg bg-gray-300 px-1">106</div>
                </a>
            </li>
            <li class="flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                    </svg>
                    <span class="ml-2 mr-1">Pull Requests</span>
                    <div class="text-xs rounded-lg bg-gray-300 px-1">26</div>
                </a>
            </li>
            <li class="hidden lg:flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                    <span class="ml-2">Discussions</span>
                </a>
            </li>
            <li class="hidden lg:flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="ml-2">Actions</span>
                </a>
            </li>
            <li class="hidden lg:flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    <span class="ml-2">Security</span>
                </a>
            </li>
            <li class="hidden lg:flex">
                <a href="#" class="flex items-center px-4 pb-3 border-b-2 border-transparent hover:border-gray-200 transition ease-in-out duration-150">
                    <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                    <span class="ml-2">Insights</span>
                </a>
            </li>
        </ul> <!-- End repo nav -->

        <div class="lg:container mx-auto my-8 px-4 lg:px-8 flex flex-col lg:flex-row">
            <div class="file-explorer-container w-full lg:w-3/4 lg:mr-8">
                <div class="branch-navigation flex items-center justify-between">
                    <div class="flex items-center space-x-1">
                        <button class="bg-gray-100 border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
                            <svg class="fill-current text-gray-600 w-4" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                            </svg>
                            <span class="ml-2 mr-1">main</span>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <a href="#" class="hidden sm:flex items-center space-x-1 px-1 py-1 group">
                            <svg class="fill-current text-gray-600 group-hover:text-blue-600 w-4" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                            </svg>
                            <span class="group-hover:text-blue-600">
                                <span class="font-semibold">25 </span>
                                <span class="text-gray-500">branches</span>
                            </span>
                        </a>
                        <a href="#" class="hidden sm:flex items-center space-x-1 px-1 py-1 group">
                            <svg class="fill-current text-gray-600 group-hover:text-blue-600 w-4" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                            </svg>
                            <span class="group-hover:text-blue-600">
                                <span class="font-semibold">76 </span>
                                <span class="text-gray-500">tags</span>
                            </span>
                        </a>
                    </div>
                    <div class="hidden sm:flex items-center space-x-3">
                        <button class="flex items-center space-x-1 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 px-4 py-1">
                            <div>Go to File</div>
                        </button>
                        <button class="flex items-center space-x-1 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 px-4 py-1">
                            <div>Add file</div>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <button class="flex items-center space-x-1 border border-gray-300 rounded-md text-white bg-green-600 hover:bg-green-700 px-4 py-1">
                            <div>Code</div>
                            <svg class="w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                </div> <!-- end branch-navigation -->

                <div class="commits-container bg-gray-100 rounded-md rounded-b-none border border-blue:200 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
                    <div class="flex items-center space-x-2">
                        <a style="width:24px;height:24px;" href="#">
                            <img
                                src="https://avatars.githubusercontent.com/u/93968366?s=48&amp;v=4"
                                alt="@kirbyaguilar-technomancer"
                                class="rounded-full"
                            >
                        </a>
                        <a href="#" class="font-semibold hover:underline">kirby</a>
                        <a href="#" class="hover:underline hover:text-blue-600">Update eslint to version 8.8.0</a>
                    </div>
                    <div class="flex items-end space-x-2">
                        <a href="#" class="hidden lg:block text-gray-500 font-mono text-xs hover:underline hover:text-blue-600">1b6571f</a>
                        <a href="#" class="text-gray-500 hover:underline hover:text-blue-600">14 hours ago</a>
                        <a href="#" class="flex items-center space-x-1 text-gray-500 group">
                            <svg class="fill-current text-gray-600 group-hover:text-blue-600 w-4" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
                            </svg>
                            <span class="group">
                                <span class="font-semibold group-hover:text-blue-600">193 </span>
                                <span class="hidden lg:inline text-gray-500">commits</span>
                            </span>
                        </a>
                    </div>
                </div> <!-- end commits-container -->

                <div class="file-explorer rounded-md rounded-t-none border border-gray-300 text-gray-700 divide-y divide-gray-300">
                    <ExplorerRow :isFolder="true" name="application" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="true" name="css" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="true" name="default" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="true" name="fonts" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="true" name="js" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="true" name="sass" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="false" name=".gitignore" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="false" name="about.php" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="false" name="cart.php" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="false" name="shop.php" commitMessage="initial commit" timePassed="3 hours ago" />
                    <ExplorerRow :isFolder="false" name="readme.md" commitMessage="initial commit" timePassed="3 hours ago" />
                </div> <!-- end file-explorer -->

                <div class="readme-container rounded-md border border-gray-300 mt-4">
                    <h4 class="flex items-center font-semibold border-b border-gray-300 px-2 py-2 mb-8">
                        <div class="hover:bg-gray-100 rounded-md mr-3 p-2">
                            <svg class="w-4 fill-current text-gray-500" aria-hidden="true" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                            </svg>
                        </div>
                        <span class="font-semibold">README.md</span>
                    </h4>
                    <div>
                        <ReadmeTailwind />
                    </div>
                </div> <!-- end readme-container -->
            </div> <!-- end file-explorer-container -->
            <div
                class="sidebar
                w-full mt-4 px-4
                lg:w-1/4 lg:mt-0 lg:mr-4 lg:px-0"
            >
                <div class="about">
                    <div class="flex justify-between mb-6">
                        <h4 class="text-base font-semibold">About</h4>
                        <svg class="w-4 fill-current text-gray-600" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <p class="text-base">
                        A utility-first CSS framework for rapid UI development.
                    </p>
                    <div class="flex items-center space-x-2 mt-4">
                        <svg class="w-4 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        <a href="#" class="text-blue-600 hover:underline font-semibold">tailwindcss.com/</a>
                    </div>

                    <div class="tags text-xs flex items-center flex-wrap mt-2 mb-4">
                        <SidebarTag>css</SidebarTag>
                        <SidebarTag>postcss</SidebarTag>
                        <SidebarTag>responsive</SidebarTag>
                        <SidebarTag>css-framework</SidebarTag>
                        <SidebarTag>functional-css</SidebarTag>
                        <SidebarTag>utility-classes</SidebarTag>
                        <SidebarTag>tailwindcss</SidebarTag>
                    </div> <!-- end tags -->

                    <!-- sidebar icon + text section -->
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">Readme</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">MIT License</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v7.736a.75.75 0 101.5 0V1.75A1.75 1.75 0 0011.25 0h-8.5A1.75 1.75 0 001 1.75v11.5c0 .966.784 1.75 1.75 1.75h3.17a.75.75 0 000-1.5H2.75a.25.25 0 01-.25-.25V1.75zM4.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 7.75A.75.75 0 014.75 7h2a.75.75 0 010 1.5h-2A.75.75 0 014 7.75zm11.774 3.537a.75.75 0 00-1.048-1.074L10.7 14.145 9.281 12.72a.75.75 0 00-1.062 1.058l1.943 1.95a.75.75 0 001.055.008l4.557-4.45z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">Code of conduct</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">
                            <strong>53.2k</strong> stars
                        </span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">
                            <strong>563</strong> watching
                        </span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 mb-2 group">
                        <svg class="w-4 fill-current text-gray-500 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        <span class="text-gray-500 group-hover:text-blue-600">
                            <strong>2.6k</strong> forks
                        </span>
                    </a>
                    <!-- end sidebar icon + text section -->
                </div> <!-- end about -->

                <div class="releases border-t border-gray-300 mt-6 pt-6">
                    <h4 class="text-base font-semibold flex items-center mb-4">
                        <span>Releases</span>
                        <div class="text-xs font-normal rounded-lg bg-gray-200 px-2 ml-1">79</div>
                    </h4>

                    <a href="#" class="flex items-start group mb-4">
                        <svg class="w-4 fill-current text-green-600 mt-1" aria-hidden="true" viewBox="0 0 16 16" version="1.1">
                            <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                        </svg>
                        <span class="ml-2">
                            <span class="font-semibold group-hover:text-blue-600">v3.0.18</span>
                            <span class="ml-1 text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">
                                Latest
                            </span>
                            <span class="block text-xs group-hover:text-blue-600">8 days ago</span>
                        </span>
                    </a>

                    <a href="#" class="text-blue-600 hover:underline">+ 185 releases</a>
                </div> <!-- end releases -->

                <div class="packages border-t border-gray-300 mt-6 pt-6">
                    <h4 class="text-base font-semibold flex items-center mb-4">
                        <span>Packages</span>
                    </h4>
                    <span class="text-gray-500 text-xs">No packages published</span>
                </div> <!-- end packages -->

                <div class="used-by border-t border-gray-300 mt-6 pt-6">
                    <h4 class="text-base font-semibold flex items-center">
                        <span>Used by</span>
                        <div class="text-xs font-normal rounded-lg bg-gray-200 px-2 ml-1">668k</div>
                    </h4>

                    <div class="mt-4">
                        <a href="#" class="flex items-center -space-x-2">
                            <img
                                src="https://avatars.githubusercontent.com/u/30323786?s=88&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/86471939?s=88&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/5189297?s=88&u=5ac2ad446fc172d1fef121e7789a0635fe610de3&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/89383171?s=88&u=30ae8f848daa7ac17dac5ec46b9572d85ac9019b&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/90432118?s=88&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/88469223?s=88&u=7f3ee86858655d0652e3acc78007420c86799274&v=4"
                                class="w-8 border-2 border-white rounded-full"
                            >
                            <span class="text-xs text-blue-600 font-semibold hover:underline" style="margin-left: 0.5rem;">+ 668,106</span>
                        </a>
                    </div>
                </div> <!-- end used-by -->

                <div class="contributors border-t border-gray-200 mt-6 pt-6">
                    <h4 class="text-base font-semibold flex items-center mb-2">
                        <span>Contributors</span>
                        <div class="text-xs font-normal rounded-lg bg-gray-200 px-2 ml-1">214</div>
                    </h4>

                    <div>
                        <a href="#" class="flex items-center flex-wrap mb-4">
                            <img
                                src="https://avatars.githubusercontent.com/u/4323180?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/in/2141?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/882133?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/1834413?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/in/715?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/58970?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/36207117?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/6643991?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/2615508?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/614993?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                            <img
                                src="https://avatars.githubusercontent.com/u/5871133?v=4"
                                class="w-8 rounded-full mr-2 mt-2"
                            >
                        </a>
                    </div>

                    <a href="#" class="text-blue-600 hover:underline mt-4">+ 203 contributors</a>
                </div> <!-- end contributors -->

                <div class="languages border-t border-gray-300 mt-6 pt-6">
                    <h4 class="text-base font-semibold flex items-center mb-4">
                        <span>Languages</span>
                    </h4>
                    <div class="mt-4 flex">
                        <div class="w-8/12 h-2 rounded-md rounded-r-none bg-yellow-300"></div>
                        <div class="w-3/12 h-2 bg-purple-700"></div>
                        <div class="w-1/12 h-2 rounded-md rounded-l-none bg-red-600"></div>
                    </div>
                    <ul class="mt-2 flex items-center flex-wrap text-xs">
                        <li class="flex items-center mr-8">
                            <span class="w-2 h-2 rounded-full bg-yellow-300"></span>
                            <span class="ml-3">
                                <span class="font-semibold mr-2">JavaScript</span>
                                <span class="text-gray-500">77.1%</span>
                            </span>
                        </li>
                        <li class="flex items-center mr-8">
                            <span class="w-2 h-2 rounded-full bg-purple-700"></span>
                            <span class="ml-3">
                                <span class="font-semibold mr-2">CSS</span>
                                <span class="text-gray-500">17.6%</span>
                            </span>
                        </li>
                        <li class="flex items-center mr-8">
                            <span class="w-2 h-2 rounded-full bg-red-600"></span>
                            <span class="ml-3">
                                <span class="font-semibold mr-2">HTML</span>
                                <span class="text-gray-500">5.2%</span>
                            </span>
                        </li>
                    </ul>
                </div> <!-- end languages -->
            </div> <!-- end sidebar -->
        </div>

        <footer class="
            lg:container mx-auto
            px-4 lg:px-8 py-10
            text-xs
            border-t border-gray-300
            flex flex-col lg:flex-row items-center space-x-4
            "
        >
            <ul class="hidden lg:flex items-center space-x-6 mr-8">
                <li class="flex items-center space-x-2">
                    <a href="#">
                        <svg class="w-6 fill-current text-gray-400 hover:text-gray-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    <span class="text-gray-500">&copy; 2022 GitHub, Inc.</span>
                </li>
            </ul>
            <ul class="flex flex-wrap items-center justify-center content-center space-x-4 lg:space-x-6">
                <li><a href="#" class="text-blue-600 hover:underline">Terms</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Privacy</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Security</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Status</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Docs</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Contact GitHub</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Pricing</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">API</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Training</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Blog</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">About</a></li>
            </ul>
            <ul class="flex lg:hidden items-center space-x-6 mt-4 mr-8">
                <li class="flex items-center space-x-2">
                    <a href="#">
                        <svg class="w-6 fill-current text-gray-400 hover:text-gray-600" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    <span class="text-gray-500">&copy; 2022 GitHub, Inc.</span>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
import SidebarTag from "../Shared/github/SidebarTag";
import ExplorerRow from "../Shared/github/ExplorerRow";
import ReadmeTailwind from "../Shared/github/ReadmeTailwind";
export default {
    components: { ExplorerRow, SidebarTag, ReadmeTailwind },
}
</script>
