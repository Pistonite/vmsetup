import { defineConfig } from "vitepress"

const archSidebar = [
    {
        text: "Hyper-V Setup",
        items: [
            { text: "Getting Started", link: "/" },
            { text: "Creating VM", link: "/hyperv/create" },
            { text: "Virtual Switch", link: "/hyperv/virtual-switch" },
            { text: "Configure VM", link: "/hyperv/configure" },
        ]
    }, {
        text: "Install Arch Linux",
        items: [
            { text: "Getting the Image", link: "/arch/download-iso" },
            { text: "Boot the Installer", link: "/arch/boot-installer" },
            { text: "Preinstall Checks", link: "/arch/preinstall-checks" },
            { text: "Disk Setup", link: "/arch/disk-setup" },
            { text: "Essential Packages", link: "/arch/essential-packages" },
            { text: "Configure the System", link: "/arch/configure" },
            { text: "Configure Boot Loader", link: "/arch/boot-loader" },
            { text: "Configure User", link: "/arch/user" },
            { text: "Conclusion", link: "/arch/conclusion" },
        ]
    }, {
        text: "Install Stuff",
        items: [
            { text: "Basic Tools", link: "/tool/basic-tools" },
            { text: "Version Switchers", link: "/tool/version-switcher" },
            { text: "Bun", link: "/tool/bun" },
            { text: "Configure Shell", link: "/tool/config" },
            { text: "Task", link: "/tool/task" },
            { text: "Docker", link: "/tool/docker" },
            { text: "Node", link: "/tool/node" },
            { text: "Python", link: "/tool/python" },
            { text: "Git", link: "/tool/git" },
            { text: "Neovim", link: "/tool/nvim" },
            { text: "HTTPS", link: "/tool/https" },
            { text: "DevKitPro", link: "/tool/devkitpro" },
            // { text: "TODO", link: "/tool/todo" },
        ]
    },
];

const windowsSidebar = [
    {
        text: "Windows Host",
        items: [
            { text: "Terminal", link: "/windows/terminal" },
            { text: "Visual Studio", link: "/windows/visual-studio" },
            { text: "Zig", link: "/windows/zig" },
            { text: "Neovim", link: "/windows/nvim" },
            { text: "SSL Certificate", link: "/windows/cert" },
        ]
    }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Pistonite VM",
    description: "Setting up a headless Arch Linux VM in Windows Hyper-V",
    cleanUrls: true,
    head: [
        ["link", { rel: "icon", href: "/icon.png" }]
    ],
    themeConfig: {
        nav: [
          { text: "Arch", link: "/" },
          { text: "Windows", link: "/windows/index" }
        ],
        sidebar: {
            "/windows/": windowsSidebar,
            "/": archSidebar,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
        ]
    }
})
