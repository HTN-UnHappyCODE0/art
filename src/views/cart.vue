<template>

    <div class=" mb-10 mx-auto max-w-screen-xl">

        <div class="w-full h-full bg-black top-0  ">

            <div class="flex bg-white lg:flex-row flex-col ">

                <div class=" w-full lg:px-8 lg:py-4 md:px-6 px-4 md:py-4 py-4 bg-white  ">
                    <p
                        class="lg:text-4xl text-3xl bg-white w-full lg:w-3/5 lg:mx-auto lg:px-8 lg:py-4 md:px-6 px-4 md:py-4 py-4 font-black leading-10 text-gray-800 ">
                        Giỏ hàng</p>
                    <div class="overflow-y-auto h-96">
                        <div class="lg:w-3/5 mx-auto ">
                            <div class="flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-600">
                                <div class=" w-full">
                                    <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Black Leather Bag"
                                        class="h-full lg:object-center lg:object-cover  w-full object-center object-cover" />
                                </div>
                                <div class="md:pl-3 ml-2 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                    <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                    <div class="flex items-center justify-between w-full pt-1">
                                        <p class="text-base font-black leading-none text-gray-800">artworkname</p>
                                        <button class="text-gray-500 hover:text-gray-900"><svg class="w-4 h-4"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                                            </svg></button>

                                    </div>
                                    <p class="text-xs leading-3 text-gray-600 pt-2">Artistname</p>
                                    <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>

                                    <div class="flex w-96  items-center justify-between pt-5">
                                        <div class="flex itemms-center">
                                            <p class="text-xl leading-3 text-gray-800 cursor-pointer">Giá</p>

                                        </div>
                                        <p class="text-base font-black leading-none text-gray-800">$9,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
                <div class="lg:w-96  w-full bg-gray-100 h-full">
                    <div class="flex flex-col lg:h-96 h-auto lg:px-8 md:px-7 px-4 lg:py-4 md:py-4 py-6 justify-between">
                        <div>
                            <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Tổng giá </p>
                            <div class="flex items-center justify-between pt-16">
                                <p class="text-base leading-none text-gray-800">Subtotal</p>
                                <p class="text-base leading-none text-gray-800">$9,000</p>
                            </div>
                            <div class="flex items-center justify-between pt-5">
                                <p class="text-base leading-none text-gray-800">Shipping</p>
                                <p class="text-base leading-none text-gray-800">$30</p>
                            </div>
                            <div class="flex items-center justify-between pt-5">
                                <p class="text-base leading-none text-gray-800">Tax</p>
                                <p class="text-base leading-none text-gray-800">$35</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                <p class="text-2xl leading-normal text-gray-800">Total</p>
                                <p class="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                            </div>
                            <button
                                class="text-base  w-full py-5 bg-gray-800 border-gray-800 border  text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "component",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() { },
};
</script>

<style>
</style>
