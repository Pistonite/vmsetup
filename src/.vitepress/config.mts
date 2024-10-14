import { defineConfig } from "vitepress"

const archSidebar = [
    {
        text: "Hyper-V Setup",
        items: [
            { text: "Getting Started", link: "/arch/" },
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
    },
];

const windowsSidebar = [
    {
        text: "Setup Windows",
        items: [
            { text: "Getting Started", link: "/windows/" },
            { text: "PowerShell 7", link: "/windows/powershell" },
            { text: "Visual Studio", link: "/windows/visual-studio" },
            { text: "Terminal", link: "/windows/terminal" },
            { text: "Essentials", link: "/windows/essentials" },
            { text: "VS Code", link: "/windows/vscode" },
            { text: "CMake", link: "/windows/cmake" },
            { text: "Coreutils", link: "/windows/coreutils" },
            { text: "Other GNU Utils", link: "/windows/gnu" },
            { text: "Notepad", link: "/windows/notepad" },
            { text: "Zig", link: "/windows/zig" },
            { text: "Neovim", link: "/windows/nvim" },
            { text: "SSL Certificate", link: "/windows/cert" },
        ]
    }
];

const toolSidebar = [
    {
        text: "Essentials",
        items: [
            { text: "Rust", link: "/tool/rust" },
            { text: "Git", link: "/tool/git" },
            { text: "Python", link: "/tool/python" },
            { text: "Dotbin", link: "/tool/dotbin" },
        ]
    },
    {
        text: "Extras",
        items: [
            { text: "Basic Tools", link: "/tool/basic-tools" },
            { text: "Version Switchers", link: "/tool/version-switcher" },
            { text: "Bun", link: "/tool/bun" },
            { text: "Configure Shell", link: "/tool/config" },
            { text: "Task", link: "/tool/task" },
            { text: "Docker", link: "/tool/docker" },
            { text: "Node", link: "/tool/node" },
            { text: "Neovim", link: "/tool/nvim" },
            { text: "HTTPS", link: "/tool/https" },
            { text: "DevKitPro", link: "/tool/devkitpro" },
        ]
    },
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
            { text: "Windows", link: "/windows/" },
          { text: "Hyper-V", link: "/hyperv" },
          { text: "Arch", link: "/arch/" },
          { text: "Tools", link: "/tool/" },
        ],
        sidebar: {
            "/windows/": windowsSidebar,
            "/hyperv/": archSidebar,
            "/arch/": archSidebar,
            "/tool/": toolSidebar,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
        ]
    }
})
