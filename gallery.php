<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../assets/css/stylesoutput.css" rel="stylesheet" />
    <link href="../assets/css/modalstyles.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="/assets/logos/SLS_icon.svg" />
    <title>SLS-Sprachenatelier Language Studio</title>
</head>

<body>
<div id="courses-wrapper">
    <?php include './modal.php'; ?>
    <header class="relative z-20">
        <?php include 'navbar.php'; ?>
    </header>

    <div id="courses-heading" class="mx-5 sm:mx-14 lg:mx-[7.5rem] pt-24 sm:pt-40">
        <div class="breadcrumb">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            /
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Gallery</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <h2 class="text-2xl sm:text-[46px] lg:text-[56px] clashdisplay font-medium my-3">
            Gallery
        </h2>
        <p class="text-xs sm:text-base max-w-[85%] md:max-w-[60%]">
            Gallery of images of the workshops and events conducted by SLS.
        </p>
    </div>

    <div id="courses-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 lg:gap-16 mx-5 sm:mx-14 lg:mx-[7.5rem] mt-12 sm:mt-28">
        <?php
        $images = [
            'gallery_img_1.jpg','gallery_img_2.jpg','gallery_img_3.jpg','gallery_img_4.jpg','gallery_img_5.jpg',
            'gallery_img_6.jpg','gallery_img_7.jpg','gallery_img_8.jpg','gallery_img_9.jpg','gallery_img_10.jpg','gallery_img_11.jpg','gallery_img_12.jpeg'
        ];
        foreach ($images as $index => $img):
            $modalId = 'modal-photo' . ($index + 1);
            $imgPath = "../assets/images/{$img}";
            ?>
            <div class="courses-card">
                <button data-micromodal-trigger="<?= $modalId ?>">
                    <div class="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg">
                        <img src="<?= $imgPath ?>" alt="Gallery image <?= $index + 1 ?>" class="w-full h-full object-cover transition hover:opacity-80" />
                    </div>
                </button>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Videos Section -->
    <div id="videos-section" class="mt-24 lg:mt-40 mx-5 sm:mx-14 lg:mx-[7.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="w-full relative border-8 border-white rounded-xl overflow-hidden shadow-xl">
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/v6ruwsd2hPc"
                    title="Ujwal Anil, German language expert, Director of Sprachenatelier, Mumbai" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="w-full relative border-8 border-white rounded-xl overflow-hidden shadow-xl">
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/onnMaTwnLwc"
                    title="ASMU2" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="w-full relative border-8 border-white rounded-xl overflow-hidden shadow-xl">
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/DgBNZZnRCHk"
                    title="Aishwarya Deshpande" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

    <!-- Lightbox Modals -->
    <?php foreach ($images as $index => $img):
        $modalId = 'modal-photo' . ($index + 1);
        $imgPath = "../assets/images/{$img}";
        ?>
        <div class="modal micromodal-slide" id="<?= $modalId ?>" aria-hidden="true">
            <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                <div class="modal__container max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-xl" role="dialog" aria-modal="true" aria-labelledby="<?= $modalId ?>-title">
                    <header class="flex justify-end">
                        <button class="text-gray-400 hover:text-black text-2xl font-bold" aria-label="Close" data-micromodal-close>&times;</button>
                    </header>
                    <main class="flex justify-center items-center">
                        <img src="<?= $imgPath ?>" alt="Full-size image <?= $index + 1 ?>" class="max-h-[80vh] object-contain rounded-md" />
                    </main>
                </div>
            </div>
        </div>
    <?php endforeach; ?>

    <?php include "brochure-section.php"; ?>
    <?php include "footer.php"; ?>
</div>

<script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
<script>
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });
</script>
<script src="../assets/js/script.js"></script>
</body>

</html>
