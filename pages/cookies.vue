<script setup lang="ts">
useSeoMeta({
    title: 'MockBukkit | Understanding Our Cookie Policy and Usage',
    description: 'MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.',
    ogTitle: 'MockBukkit | Understanding Our Cookie Policy and Usage',
    ogDescription: 'MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.',
    ogSiteName: 'Mockbukkit',
    ogUrl: 'https://mockbukkit.org',
    ogType: 'website',
    ogImage: 'https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png',
    twitterTitle: 'MockBukkit | Understanding Our Cookie Policy and Usage',
    twitterDescription: 'MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.',
    twitterImage: 'https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png',
    twitterCard: 'summary',
})
</script>

<template>
    <div class="container max-w-screen-lg text-white mx-auto text-justify">
        <div class="my-8">
            <h1 class="font-bold text-center text-2xl" id="cookie-policy">Cookie Policy</h1>
            <p class="text-neutral-500 text-center"><strong>Effective Date:</strong> August 3, 2024</p>
        </div>

        <h2>1. Introduction</h2>
        <p>Welcome to MockBukkit. This Cookie Policy explains how we use cookies and similar technologies on our website, <a href="https://mockbukkit.org">https://mockbukkit.org</a>
            (the "Site"). By using our Site, you agree to our use of cookies as described in this policy.</p>

        <h2>2. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work or work more
            efficiently, as well as to provide reporting information.</p>

        <h2>3. Types of Cookies We Use</h2>
        <p>We use the following types of cookies on our Site:</p>
        <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the Site to function and cannot be switched off in our systems. They are
                usually set in response to actions made by you, such as logging in or filling out forms. Without these cookies, certain features of the Site may
                not work properly.
            </li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our Site by collecting and reporting
                information. They allow us to improve the performance of our Site by analyzing how it is used.
            </li>
        </ul>

        <h2>4. How We Use Cookies</h2>
        <ul>
            <li><strong>Essential Cookies:</strong> These are used to ensure the Site operates correctly and to provide essential functionality. For example,
                they help us remember your login details and preferences.
            </li>
            <li><strong>Performance Cookies:</strong> These are used to analyze how visitors use the Site, including which pages are visited most frequently.
                This information helps us improve the Site and enhance your user experience.
            </li>
        </ul>

        <h2>5. Managing Cookies</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your web browser settings. Most
            browsers allow you to refuse or delete cookies. The methods for managing cookies vary from browser to browser, so you should visit your browser's
            help menu for more information.</p>
        <p>Please note that disabling cookies may affect the functionality of the Site and limit your ability to access certain features.</p>

        <h2>6. Changes to This Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. We encourage you to review this policy
            periodically to stay informed about how we use cookies.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this Cookie Policy, please contact us at:</p>
        <p>Email: <a href="mailto:privacy@mockbukkit.org">privacy@mockbukkit.org</a></p>

        <p>Thank you for using MockBukkit!</p>
    </div>
</template>

<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    h2 {
        @apply text-2xl mt-6 mb-3 font-bold
    }

    a {
        @apply hover:underline text-green-500
    }

    ul {
        @apply list-disc ml-8
    }
}
</style>

