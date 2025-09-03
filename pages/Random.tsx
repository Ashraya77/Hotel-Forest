import React from 'react'

const Random = () => {
  return (
    <div>
        <div class="flex flex-col items-center space-y-4">
        <div class="w-full max-w-3xl">
            <img id="main-image" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png" class="w-full rounded-lg" alt="Main Image">
        </div>

        <div class="grid grid-cols-4 max-w-3xl gap-4" id="thumbnail-container">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png" class="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" alt="Thumb 1">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png" class="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" alt="Thumb 2">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png" class="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" alt="Thumb 3">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png" class="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" alt="Thumb 4">
        </div>
    </div>

    <script>
        document.getElementById('thumbnail-container').addEventListener('click', function (e) {
            if (e.target.classList.contains('thumb')) {
                document.getElementById('main-image').src = e.target.src;
            }
        });
    </script>
    </div>
  )
}

export default Random