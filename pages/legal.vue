<script setup lang="ts">
useSeoMeta({
    title: "MockBukkit | Legal Notice and Compliance Information",
    description:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogTitle: "MockBukkit | Legal Notice and Compliance Information",
    ogDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogSiteName: "Mockbukkit",
    ogUrl: "https://mockbukkit.org",
    ogType: "website",
    ogImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterTitle: "MockBukkit | Legal Notice and Compliance Information",
    twitterDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    twitterImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterCard: "summary",
});
</script>

<template>
    <div class="container mx-auto max-w-screen-lg text-justify dark:text-white">
        <div class="my-8">
            <h1 class="text-center text-2xl font-bold" id="legal-notice">Legal Notice</h1>
            <p class="text-center text-neutral-500"><strong>Effective Date:</strong> August 3, 2024</p>
        </div>

        <h2>1. Content Responsibility</h2>
        <p>
            The content of <a href="https://mockbukkit.org">https://mockbukkit.org</a> is provided with the utmost care. However, we assume no responsibility or
            liability for the accuracy, completeness, or currentness of the information presented. The content on this website is intended for general
            informational purposes only and may not always be up-to-date or error-free.
        </p>

        <h2>2. External Links</h2>
        <p>
            <a href="https://mockbukkit.org">https://mockbukkit.org</a> may include links to external websites that are not operated or controlled by us. We do
            not endorse or take responsibility for the content, privacy practices, or any other aspects of third-party websites. The inclusion of these links
            does not imply any endorsement or association with the linked sites.
        </p>

        <h2>3. Limitation of Liability for External Content</h2>
        <p>
            <a href="https://mockbukkit.org">https://mockbukkit.org</a> and its administrators shall not be liable for any damages, losses, or inconveniences
            resulting from the use of or reliance on external sites linked from our website. Users acknowledge that they use external links at their own risk.
        </p>

        <h2>4. Responsibility of External Websites</h2>
        <p>
            The operators of external websites linked from <a href="https://mockbukkit.org">https://mockbukkit.org</a> are solely responsible for their own
            content and practices. We recommend that users review the privacy policies and terms of service of any external sites they visit.
        </p>

        <h2>5. Advertising and Sponsored Content</h2>
        <p>
            Any advertisements or sponsored content on <a href="https://mockbukkit.org">https://mockbukkit.org</a> are provided for convenience and do not imply
            endorsement by us. We are not responsible for the content of such advertisements or the interactions they may prompt.
        </p>

        <h2>6. Indemnification</h2>
        <p>
            Users agree to indemnify and hold harmless <a href="https://mockbukkit.org">https://mockbukkit.org</a>, its administrators, and affiliates from any
            claims, losses, or damages arising from their use of external links or content accessed through our website.
        </p>

        <h2>7. Governing Law</h2>
        <p>
            This disclaimer is governed by German law. Any disputes arising in connection with this disclaimer shall be subject to the exclusive jurisdiction of
            the courts located in [City, Germany].
        </p>

        <h2>8. Updates to the Disclaimer</h2>
        <p>
            We reserve the right to update or modify this disclaimer at any time. Users are encouraged to review this disclaimer periodically to stay informed
            of any changes.
        </p>

        <h2>9. Contact Information</h2>
        <p>
            For any questions or concerns about the external links on <a href="https://mockbukkit.org">https://mockbukkit.org</a> or this disclaimer, please
            contact us at:
        </p>
        <p><a href="mailto:legal@mockbukkit.org">legal@mockbukkit.org</a></p>

        <p>Thank you for visiting <a href="https://mockbukkit.org">https://mockbukkit.org</a>.</p>
    </div>
</template>

<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    h2 {
        @apply mb-3 mt-6 text-2xl font-bold;
    }

    a {
        @apply text-green-500 hover:underline;
    }

    ul {
        @apply ml-8 list-disc;
    }
}
</style>
